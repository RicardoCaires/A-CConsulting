'use client'

import { useEffect, useMemo, useState } from 'react'

import { Suchauswahl } from '@/components/ui/Suchauswahl'
import { fristenKantone } from '@/content/fristen-kantone'
import { bruttoZuSteuerbar, type Abzuege } from '@/lib/brutto-steuerbar'
import { MAX_3A_MIT_PK, MAX_3A_OHNE_PK, STEUERJAHR } from '@/lib/steuer-3a'
import { berechne, type Gemeinde, type Konfession, type Tarife } from '@/lib/steuer-kantone'

import { FliessendeZahl } from './Fliessend'
import styles from './Rechner3a.module.css'

/**
 * Steuerersparnis mit der Säule 3a schätzen (15.10.2026). Rechnet im Browser und sendet nichts
 * (Hausordnung Abschnitt 7). Keine Texteingabe ausser der Suche nach der Gemeinde.
 *
 * Seit dem 15.10.2026 für alle Kantone und Gemeinden (Tarife und Steuerfüsse 2026 der ESTV,
 * `src/lib/steuer-kantone.ts`) und wahlweise vom Bruttolohn aus (`src/lib/brutto-steuerbar.ts`).
 * Voreingestellt ist Bern (Ricardo: «standardmässig soll alles auf bern eingestellt sein»). Die Daten
 * liegen unter `public/daten/steuern-2026/` und werden erst geladen, wenn die Seite den Rechner zeigt.
 * Zahlen und Balken wechseln fliessend (`Fliessend.tsx`).
 */

type Lage = 'allein' | 'alleinKinder' | 'verheiratet'
type Modus = 'brutto' | 'steuerbar'
type Daten = { tarife: Tarife; gemeinden: Gemeinde[]; abzuege: Abzuege }

const LAGEN: [Lage, string][] = [
  ['allein', 'Alleinstehend'],
  ['alleinKinder', 'Alleinstehend mit Kindern'],
  ['verheiratet', 'Verheiratet'],
]
const KIRCHEN: [Konfession, string][] = [
  ['keine', 'Keine'],
  ['ref', 'Reformiert'],
  ['kath', 'Katholisch'],
  ['chk', 'Christkatholisch'],
]

/** Hauptort je Kanton (BFS-Nummer): Darauf springt die Gemeinde beim Kantonswechsel. */
const HAUPTORT: Record<string, number> = {
  ZH: 261, BE: 351, LU: 1061, UR: 1201, SZ: 1372, OW: 1407, NW: 1509, GL: 1632, ZG: 1711, FR: 2196, SO: 2601, BS: 2701, BL: 2829,
  SH: 2939, AR: 3001, AI: 3101, SG: 3203, GR: 3901, AG: 4001, TG: 4566, TI: 5002, VD: 5586, VS: 6266, NE: 6458, GE: 6621, JU: 6711,
}
const VORGABE = { kanton: 'BE', gemeinde: 351 }
const ORDNER = '/daten/steuern-2026'

const chf = (n: number) => `CHF ${Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'")}`
/** Auf 10 Franken gerundet: Es ist eine Schätzung. */
const rund = (n: number) => chf(Math.round(n / 10) * 10)
const minus = (n: number) => `− ${chf(n)}`

export function Rechner3a({ kontaktHref }: { kontaktHref: string }) {
  const [daten, setDaten] = useState<Daten | null>(null)
  const [ladefehler, setLadefehler] = useState(false)
  const [lage, setLage] = useState<Lage>('allein')
  const [kinder, setKinder] = useState(0)
  const [kanton, setKanton] = useState(VORGABE.kanton)
  const [bfs, setBfs] = useState(VORGABE.gemeinde)
  const [gemeindeText, setGemeindeText] = useState('Bern')
  const [modus, setModus] = useState<Modus>('brutto')
  const [brutto, setBrutto] = useState(90000)
  const [einkommen, setEinkommen] = useState(80000)
  const [pk, setPk] = useState(true)
  const [einzahlung, setEinzahlung] = useState(MAX_3A_MIT_PK)
  const [kirche, setKirche] = useState<Konfession>('keine')

  // Daten erst laden, wenn der Rechner auf der Seite steht – von der eigenen Website, nicht von fremden Servern
  useEffect(() => {
    let ab = false
    Promise.all(['tarife', 'gemeinden', 'abzuege'].map((f) => fetch(`${ORDNER}/${f}.json`).then((r) => (r.ok ? r.json() : Promise.reject()))))
      .then(([tarife, g, abzuege]) => {
        if (!ab) setDaten({ tarife, gemeinden: g.gemeinden, abzuege })
      })
      .catch(() => {
        if (!ab) setLadefehler(true)
      })
    return () => {
      ab = true
    }
  }, [])

  const verheiratet = lage === 'verheiratet'
  const kinderZahl = lage === 'allein' ? 0 : kinder
  const max = pk ? MAX_3A_MIT_PK : MAX_3A_OHNE_PK
  const betrag = Math.min(einzahlung, max)

  const imKanton = useMemo(
    () => (daten ? daten.gemeinden.filter((g) => g.kt === kanton).sort((a, b) => a.name.localeCompare(b.name, 'de')) : []),
    [daten, kanton],
  )
  const gemeinde = daten?.gemeinden.find((g) => g.bfs === bfs)

  const umrechnung = useMemo(
    () => (daten && modus === 'brutto' ? bruttoZuSteuerbar({ brutto, verheiratet, kinder: kinderZahl, pk, kanton }, daten.abzuege) : null),
    [daten, modus, brutto, verheiratet, kinderZahl, pk, kanton],
  )

  const e = useMemo(() => {
    if (!daten || !gemeinde) return null
    const eK = umrechnung ? umrechnung.kanton.steuerbar : einkommen
    const eB = umrechnung ? umrechnung.bund.steuerbar : einkommen
    const p = { stand: verheiratet ? 'verheiratet' : 'ledig', kinder: kinderZahl, konfession: kirche, gemeinde } as const
    const ohne = berechne({ ...p, einkommenKanton: eK, einkommenBund: eB }, daten.tarife)
    const mit = berechne({ ...p, einkommenKanton: Math.max(0, eK - betrag), einkommenBund: Math.max(0, eB - betrag) }, daten.tarife)
    const bund = Math.max(0, ohne.bund - mit.bund)
    const kirchensteuer = Math.max(0, ohne.kirche - mit.kirche)
    const kantonGemeinde = Math.max(0, ohne.total - mit.total - kirchensteuer)
    return { bund, kantonGemeinde, kirche: kirchensteuer, total: bund + kantonGemeinde + kirchensteuer }
  }, [daten, gemeinde, umrechnung, einkommen, verheiratet, kinderZahl, kirche, betrag])

  const waehleKanton = (k: string) => {
    setKanton(k)
    const h = daten?.gemeinden.find((g) => g.bfs === HAUPTORT[k])
    if (h) {
      setBfs(h.bfs)
      setGemeindeText(h.name)
    }
  }
  const waehleGemeinde = (text: string) => {
    setGemeindeText(text)
    const g = imKanton.find((x) => x.name === text)
    if (g) setBfs(g.bfs)
  }

  const kantonName = fristenKantone.kantone.find((k) => k.kuerzel === kanton)?.name ?? kanton
  const abz = daten?.abzuege.ebenen[kanton]
  const teile = [
    { name: 'Bundessteuer', wert: e?.bund ?? 0, klasse: styles.bund },
    { name: `Kanton und Gemeinde ${gemeinde?.name ?? ''}`, wert: e?.kantonGemeinde ?? 0, klasse: styles.kanton },
    { name: 'Kirchensteuer', wert: kirche !== 'keine' ? (e?.kirche ?? 0) : 0, klasse: styles.kirche },
  ]

  return (
    <div className={styles.rechner}>
      <div className={styles.eingaben}>
        <fieldset className={styles.gruppe}>
          <legend>Ihre Situation</legend>
          <div className={styles.wahl}>
            {LAGEN.map(([k, t]) => (
              <button
                key={k}
                type="button"
                aria-pressed={lage === k}
                className={styles.wahlKnopf}
                onClick={() => {
                  setLage(k)
                  if (k === 'alleinKinder' && kinder === 0) setKinder(1)
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </fieldset>

        {lage !== 'allein' ? (
          <fieldset className={styles.gruppe}>
            <legend>Kinder</legend>
            <div className={styles.wahl}>
              {(lage === 'verheiratet' ? [0, 1, 2, 3, 4] : [1, 2, 3, 4]).map((n) => (
                <button key={n} type="button" aria-pressed={kinder === n} className={styles.wahlKnopf} onClick={() => setKinder(n)}>
                  {n === 0 ? 'Keine' : n === 4 ? '4 und mehr' : n}
                </button>
              ))}
            </div>
          </fieldset>
        ) : null}

        <fieldset className={styles.gruppe}>
          <legend>Wohnort</legend>
          <div className={styles.wohnort}>
            <div className={styles.feld}>
              <label htmlFor="r3a-kanton">Kanton</label>
              <select id="r3a-kanton" value={kanton} onChange={(ev) => waehleKanton(ev.target.value)} className={styles.auswahl}>
                {fristenKantone.kantone.map((k) => (
                  <option key={k.kuerzel} value={k.kuerzel}>
                    {k.name}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.feld}>
              <label htmlFor="r3a-gemeinde" id="r3a-gemeinde-titel">
                Gemeinde
              </label>
              <Suchauswahl
                id="r3a-gemeinde"
                beschriftetVon="r3a-gemeinde-titel"
                wert={gemeindeText}
                optionen={imKanton.map((g) => g.name)}
                onChange={waehleGemeinde}
              />
            </div>
          </div>
          {gemeinde && gemeindeText !== gemeinde.name ? <p className={styles.hilfe}>Berechnet für {gemeinde.name}. Wählen Sie Ihre Gemeinde aus der Liste.</p> : null}
        </fieldset>

        <fieldset className={styles.gruppe}>
          <legend>Ihr Einkommen</legend>
          <div className={styles.wahl}>
            {(
              [
                ['brutto', 'Bruttolohn'],
                ['steuerbar', 'Steuerbares Einkommen'],
              ] as const
            ).map(([m, t]) => (
              <button key={m} type="button" aria-pressed={modus === m} className={styles.wahlKnopf} onClick={() => setModus(m)}>
                {t}
              </button>
            ))}
          </div>
        </fieldset>

        {modus === 'brutto' ? (
          <div className={styles.gruppe}>
            <label htmlFor="r3a-brutto" className={styles.regelTitel}>
              Bruttolohn pro Jahr <strong>{chf(brutto)}</strong>
            </label>
            <input
              id="r3a-brutto"
              type="range"
              min={20000}
              max={300000}
              step={1000}
              value={brutto}
              aria-valuetext={chf(brutto)}
              onChange={(ev) => setBrutto(Number(ev.target.value))}
              className={styles.regler}
            />
            <p className={styles.hilfe}>Er steht auf Ihrem Lohnausweis, Ziffer 8.</p>
          </div>
        ) : (
          <div className={styles.gruppe}>
            <label htmlFor="r3a-einkommen" className={styles.regelTitel}>
              Steuerbares Einkommen <strong>{chf(einkommen)}</strong>
            </label>
            <input
              id="r3a-einkommen"
              type="range"
              min={20000}
              max={250000}
              step={1000}
              value={einkommen}
              aria-valuetext={chf(einkommen)}
              onChange={(ev) => setEinkommen(Number(ev.target.value))}
              className={styles.regler}
            />
            <p className={styles.hilfe}>Es steht in Ihrer letzten Veranlagung. Wir rechnen damit bei Bund und Kanton.</p>
          </div>
        )}

        <fieldset className={styles.gruppe}>
          <legend>Sind Sie einer Pensionskasse angeschlossen?</legend>
          <div className={styles.wahl}>
            {(
              [
                [true, 'Ja, als Angestellte'],
                [false, 'Nein'],
              ] as const
            ).map(([w, t]) => (
              <button
                key={String(w)}
                type="button"
                aria-pressed={pk === w}
                className={styles.wahlKnopf}
                onClick={() => {
                  setPk(w)
                  setEinzahlung(w ? MAX_3A_MIT_PK : Math.min(einzahlung === MAX_3A_MIT_PK ? MAX_3A_OHNE_PK : einzahlung, MAX_3A_OHNE_PK))
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </fieldset>

        {umrechnung && abz ? (
          <div className={styles.umrechnung} aria-live="polite">
            <p className={styles.umrechnungTitel}>So schätzen wir Ihr steuerbares Einkommen</p>
            <dl className={styles.tabelle}>
              <div>
                <dt>Bruttolohn</dt>
                <dd>{chf(brutto)}</dd>
              </div>
              <div>
                <dt>AHV, IV, EO, ALV und Unfall</dt>
                <dd>
                  <FliessendeZahl wert={umrechnung.sozial} format={minus} />
                </dd>
              </div>
              {pk ? (
                <div>
                  <dt>Pensionskasse, geschätzt</dt>
                  <dd>
                    <FliessendeZahl wert={umrechnung.pensionskasse} format={minus} />
                  </dd>
                </div>
              ) : null}
              <div className={styles.summe}>
                <dt>Nettolohn</dt>
                <dd>
                  <FliessendeZahl wert={umrechnung.netto} format={chf} />
                </dd>
              </div>
            </dl>
            <table className={styles.vergleich}>
              <thead>
                <tr>
                  <th scope="col">
                    <span className="ac-visually-hidden">Abzug</span>
                  </th>
                  <th scope="col">Bund</th>
                  <th scope="col">{kantonName}</th>
                </tr>
              </thead>
              <tbody>
                {(
                  [
                    ['Berufs- und Fahrkosten', 'berufskosten'],
                    ['Versicherungsprämien', 'versicherung'],
                    ['Kinder und persönliche Abzüge', 'familie'],
                  ] as const
                ).map(([t, f]) => (
                  <tr key={f}>
                    <th scope="row">{t}</th>
                    <td>
                      <FliessendeZahl wert={umrechnung.bund[f]} format={minus} />
                    </td>
                    <td>
                      <FliessendeZahl wert={umrechnung.kanton[f]} format={minus} />
                    </td>
                  </tr>
                ))}
                <tr className={styles.summe}>
                  <th scope="row">Steuerbares Einkommen</th>
                  <td>
                    <FliessendeZahl wert={umrechnung.bund.steuerbar} format={chf} />
                  </td>
                  <td>
                    <FliessendeZahl wert={umrechnung.kanton.steuerbar} format={chf} />
                  </td>
                </tr>
              </tbody>
            </table>
            <p className={styles.hilfe}>
              Ohne die Einzahlung in die Säule 3a. Angenommen: {verheiratet ? 'ein Erwerbseinkommen, ' : ''}Pensionskasse 6.5 % und
              Unfallversicherung 1 % des Lohns, Fahrkosten CHF 800, keine weiteren Abzüge.
              {abz.jahr < STEUERJAHR ? ` Abzüge des Kantons ${kantonName} teilweise Stand ${abz.jahr}.` : ''}
            </p>
          </div>
        ) : null}

        <div className={styles.gruppe}>
          <label htmlFor="r3a-einzahlung" className={styles.regelTitel}>
            Einzahlung in die Säule 3a <strong>{chf(betrag)}</strong>
          </label>
          <input
            id="r3a-einzahlung"
            type="range"
            min={0}
            max={max}
            step={pk ? 100 : 500}
            value={betrag}
            aria-valuetext={chf(betrag)}
            onChange={(ev) => setEinzahlung(Number(ev.target.value))}
            className={styles.regler}
          />
          <p className={styles.hilfe}>
            {pk ? `Höchstens ${chf(MAX_3A_MIT_PK)} im Jahr ${STEUERJAHR}.` : `Höchstens 20 % des Erwerbseinkommens, maximal ${chf(MAX_3A_OHNE_PK)} im Jahr ${STEUERJAHR}.`}
          </p>
        </div>

        <fieldset className={styles.gruppe}>
          <legend>Kirchensteuer</legend>
          <div className={styles.wahl}>
            {KIRCHEN.map(([k, t]) => (
              <button key={k} type="button" aria-pressed={kirche === k} className={styles.wahlKnopf} onClick={() => setKirche(k)}>
                {t}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      <div className={styles.ergebnis} aria-live="polite">
        <p className={styles.ergebnisTitel}>So viel Steuern sparen Sie ungefähr</p>
        <p className={styles.betrag}>{e ? <FliessendeZahl wert={e.total} format={rund} /> : ladefehler ? '–' : '…'}</p>
        <p className={styles.proJahr}>im Steuerjahr {STEUERJAHR}</p>

        {/* Alle Teile bleiben stehen, damit ihre Breite fliessend wechselt */}
        <div className={styles.balken} aria-hidden="true">
          {teile.map((t) => (
            <span key={t.klasse} className={t.klasse} style={{ flexGrow: Math.max(t.wert, 0) }} />
          ))}
          <span className={styles.leer} style={{ flexGrow: e && e.total > 0 ? 0 : 1 }} />
        </div>
        <ul className={styles.legende}>
          {teile
            .filter((t) => t.klasse !== styles.kirche || kirche !== 'keine')
            .map((t) => (
              <li key={t.klasse}>
                <span className={`${styles.punkt} ${t.klasse}`} aria-hidden="true" />
                <span>{t.name}</span>
                <strong>
                  <FliessendeZahl wert={t.wert} format={rund} />
                </strong>
              </li>
            ))}
        </ul>

        {ladefehler ? (
          <p className={styles.hinweis}>Die Steuerdaten lassen sich gerade nicht laden. Bitte versuchen Sie es später noch einmal.</p>
        ) : (
          <p className={styles.hinweis}>
            Schätzung für {gemeinde ? `${gemeinde.name}, Kanton ${kantonName}` : 'Ihre Gemeinde'}, Steuerjahr {STEUERJAHR}, nach den Tarifen und
            Steuerfüssen der Eidgenössischen Steuerverwaltung. Massgebend ist Ihre Veranlagung.
          </p>
        )}
        <a href={kontaktHref} className={styles.knopf}>
          Säule 3a besprechen <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  )
}
