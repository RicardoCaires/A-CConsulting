'use client'

import { useEffect, useMemo, useState } from 'react'

import { Suchauswahl } from '@/components/ui/Suchauswahl'
import { fristenKantone as kantoneDe } from '@/content/fristen-kantone'
import { fristenKantone as kantoneFr } from '@/content/fr/fristen-kantone'
import { rechner3aTexte as textFr } from '@/content/fr/rechner3a-texte'
import { fristenKantone as kantonePt } from '@/content/pt/fristen-kantone'
import { rechner3aTexte as textPt } from '@/content/pt/rechner3a-texte'
import { rechner3aTexte as textDe } from '@/content/rechner3a-texte'
import type { Locale } from '@/i18n/config'
import { bruttoZuSteuerbar, type Abzuege } from '@/lib/brutto-steuerbar'
import { MAX_3A_MIT_PK, MAX_3A_OHNE_PK, STEUERJAHR } from '@/lib/steuer-3a'
import { nachSprache } from '@/lib/sprache'
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
 *
 * Sprachen (16.10.2026): Texte in `src/content/rechner3a-texte.ts` und den Übersetzungen unter
 * `src/content/fr|pt/`, Kantonsnamen aus `fristen-kantone`. Beträge überall als CHF 1'000.
 */

type Lage = 'allein' | 'alleinKinder' | 'verheiratet'
type Modus = 'brutto' | 'steuerbar'
type Daten = { tarife: Tarife; gemeinden: Gemeinde[]; abzuege: Abzuege }

const LAGEN: readonly Lage[] = ['allein', 'alleinKinder', 'verheiratet']
const KIRCHEN: readonly Konfession[] = ['keine', 'ref', 'kath', 'chk']

/** Platzhalter `{name}` in einem Text füllen. */
const fuelle = (text: string, werte: Record<string, string | number>) =>
  text.replace(/\{(\w+)\}/g, (m, k: string) => (k in werte ? String(werte[k]) : m))

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
/** In der Tabelle ohne «CHF» – es steht einmal im Kopf; so passt sie aufs Telefon. */
const zahl = (n: number) => Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'")
const abzug = (n: number) => `− ${zahl(n)}`

export function Rechner3a({ kontaktHref, locale }: { kontaktHref: string; locale: Locale }) {
  const t = nachSprache(locale, { de: textDe, fr: textFr, pt: textPt })
  const fristenKantone = nachSprache(locale, { de: kantoneDe, fr: kantoneFr, pt: kantonePt })
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
    () => (daten ? daten.gemeinden.filter((g) => g.kt === kanton).sort((a, b) => a.name.localeCompare(b.name, locale)) : []),
    [daten, kanton, locale],
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
    { name: t.bundessteuer, wert: e?.bund ?? 0, klasse: styles.bund },
    { name: fuelle(t.kantonUndGemeinde, { gemeinde: gemeinde?.name ?? '' }).trim(), wert: e?.kantonGemeinde ?? 0, klasse: styles.kanton },
    { name: t.kirchensteuer, wert: kirche !== 'keine' ? (e?.kirche ?? 0) : 0, klasse: styles.kirche },
  ]

  return (
    <div className={styles.rechner}>
      <div className={styles.eingaben}>
        <fieldset className={styles.gruppe}>
          <legend>{t.situation}</legend>
          <div className={styles.wahl}>
            {LAGEN.map((k) => (
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
                {t.lagen[k]}
              </button>
            ))}
          </div>
        </fieldset>

        {lage !== 'allein' ? (
          <fieldset className={styles.gruppe}>
            <legend>{t.kinder}</legend>
            <div className={styles.wahl}>
              {(lage === 'verheiratet' ? [0, 1, 2, 3, 4] : [1, 2, 3, 4]).map((n) => (
                <button key={n} type="button" aria-pressed={kinder === n} className={styles.wahlKnopf} onClick={() => setKinder(n)}>
                  {n === 0 ? t.keineKinder : n === 4 ? t.vierUndMehr : n}
                </button>
              ))}
            </div>
          </fieldset>
        ) : null}

        <fieldset className={styles.gruppe}>
          <legend>{t.wohnort}</legend>
          <div className={styles.wohnort}>
            <div className={styles.feld}>
              <label htmlFor="r3a-kanton">{t.kanton}</label>
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
                {t.gemeinde}
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
          {gemeinde && gemeindeText !== gemeinde.name ? <p className={styles.hilfe}>{fuelle(t.berechnetFuer, { gemeinde: gemeinde.name })}</p> : null}
        </fieldset>

        <fieldset className={styles.gruppe}>
          <legend>{t.einkommen}</legend>
          <div className={styles.wahl}>
            {(
              [
                ['brutto', t.modusBrutto],
                ['steuerbar', t.modusSteuerbar],
              ] as const
            ).map(([m, text]) => (
              <button key={m} type="button" aria-pressed={modus === m} className={styles.wahlKnopf} onClick={() => setModus(m)}>
                {text}
              </button>
            ))}
          </div>
        </fieldset>

        {modus === 'brutto' ? (
          <div className={styles.gruppe}>
            <label htmlFor="r3a-brutto" className={styles.regelTitel}>
              {t.bruttoProJahr} <strong>{chf(brutto)}</strong>
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
            <p className={styles.hilfe}>{t.bruttoHilfe}</p>
          </div>
        ) : (
          <div className={styles.gruppe}>
            <label htmlFor="r3a-einkommen" className={styles.regelTitel}>
              {t.steuerbaresEinkommen} <strong>{chf(einkommen)}</strong>
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
            <p className={styles.hilfe}>{t.steuerbarHilfe}</p>
          </div>
        )}

        <fieldset className={styles.gruppe}>
          <legend>{t.pkFrage}</legend>
          <div className={styles.wahl}>
            {(
              [
                [true, t.pkJa],
                [false, t.pkNein],
              ] as const
            ).map(([w, text]) => (
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
                {text}
              </button>
            ))}
          </div>
        </fieldset>

        {umrechnung && abz ? (
          // Standardmässig zugeklappt (Ricardo, 16.10.2026); oben steht nur das Ergebnis
          <details className={styles.umrechnung}>
            <summary className={styles.umrechnungKopf}>
              <span className={styles.umrechnungTitel}>{t.geschaetzt}</span>
              <span className={styles.umrechnungWert}>
                <FliessendeZahl wert={umrechnung.kanton.steuerbar} format={chf} />
                <span className={styles.umrechnungOrt}>{kantonName}</span>
              </span>
              <span className={styles.umrechnungZeichen} aria-hidden="true" />
            </summary>
            <div className={styles.umrechnungInhalt}>
            <dl className={styles.tabelle}>
              <div>
                <dt>{t.bruttolohn}</dt>
                <dd>{chf(brutto)}</dd>
              </div>
              <div>
                <dt>{t.sozial}</dt>
                <dd>
                  <FliessendeZahl wert={umrechnung.sozial} format={minus} />
                </dd>
              </div>
              {pk ? (
                <div>
                  <dt>{t.pensionskasse}</dt>
                  <dd>
                    <FliessendeZahl wert={umrechnung.pensionskasse} format={minus} />
                  </dd>
                </div>
              ) : null}
              <div className={styles.summe}>
                <dt>{t.nettolohn}</dt>
                <dd>
                  <FliessendeZahl wert={umrechnung.netto} format={chf} />
                </dd>
              </div>
            </dl>
            <table className={styles.vergleich}>
              <thead>
                <tr>
                  <th scope="col">
                    <span className="ac-visually-hidden">{t.abzug}</span>
                  </th>
                  <th scope="col">
                    {t.bund} <span className={styles.einheit}>CHF</span>
                  </th>
                  <th scope="col">
                    {kantonName} <span className={styles.einheit}>CHF</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {(
                  [
                    [t.berufskosten, 'berufskosten'],
                    [t.versicherung, 'versicherung'],
                    [t.familie, 'familie'],
                  ] as const
                ).map(([text, f]) => (
                  <tr key={f}>
                    <th scope="row">{text}</th>
                    <td>
                      <FliessendeZahl wert={umrechnung.bund[f]} format={abzug} />
                    </td>
                    <td>
                      <FliessendeZahl wert={umrechnung.kanton[f]} format={abzug} />
                    </td>
                  </tr>
                ))}
                <tr className={styles.summe}>
                  <th scope="row">{t.steuerbaresEinkommen}</th>
                  <td>
                    <FliessendeZahl wert={umrechnung.bund.steuerbar} format={zahl} />
                  </td>
                  <td>
                    <FliessendeZahl wert={umrechnung.kanton.steuerbar} format={zahl} />
                  </td>
                </tr>
              </tbody>
            </table>
            <p className={styles.hilfe}>
              {t.annahmenAnfang}
              {verheiratet ? t.annahmenVerheiratet : ''}
              {t.annahmenRest}
              {abz.jahr < STEUERJAHR ? ` ${fuelle(t.abzuegeStand, { kanton: kantonName, jahr: abz.jahr })}` : ''}
            </p>
            </div>
          </details>
        ) : null}

        <div className={styles.gruppe}>
          <label htmlFor="r3a-einzahlung" className={styles.regelTitel}>
            {t.einzahlung} <strong>{chf(betrag)}</strong>
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
            {pk
              ? fuelle(t.hoechstensMitPk, { betrag: chf(MAX_3A_MIT_PK), jahr: STEUERJAHR })
              : fuelle(t.hoechstensOhnePk, { betrag: chf(MAX_3A_OHNE_PK), jahr: STEUERJAHR })}
          </p>
        </div>

        <fieldset className={styles.gruppe}>
          <legend>{t.kirchensteuer}</legend>
          <div className={styles.wahl}>
            {KIRCHEN.map((k) => (
              <button key={k} type="button" aria-pressed={kirche === k} className={styles.wahlKnopf} onClick={() => setKirche(k)}>
                {t.kirchen[k]}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      <div className={styles.ergebnis} aria-live="polite">
        <p className={styles.ergebnisTitel}>{t.ergebnisTitel}</p>
        <p className={styles.betrag}>{e ? <FliessendeZahl wert={e.total} format={rund} /> : ladefehler ? '–' : '…'}</p>
        <p className={styles.proJahr}>{fuelle(t.imSteuerjahr, { jahr: STEUERJAHR })}</p>

        {/* Alle Teile bleiben stehen, damit ihre Breite fliessend wechselt */}
        <div className={styles.balken} aria-hidden="true">
          {teile.map((teil) => (
            <span key={teil.klasse} className={teil.klasse} style={{ flexGrow: Math.max(teil.wert, 0) }} />
          ))}
          <span className={styles.leer} style={{ flexGrow: e && e.total > 0 ? 0 : 1 }} />
        </div>
        <ul className={styles.legende}>
          {teile
            .filter((teil) => teil.klasse !== styles.kirche || kirche !== 'keine')
            .map((teil) => (
              <li key={teil.klasse}>
                <span className={`${styles.punkt} ${teil.klasse}`} aria-hidden="true" />
                <span>{teil.name}</span>
                <strong>
                  <FliessendeZahl wert={teil.wert} format={rund} />
                </strong>
              </li>
            ))}
        </ul>

        {ladefehler ? (
          <p className={styles.hinweis}>{t.ladefehler}</p>
        ) : (
          <p className={styles.hinweis}>
            {fuelle(t.schaetzung, {
              ort: gemeinde ? fuelle(t.ortMitKanton, { gemeinde: gemeinde.name, kanton: kantonName }) : t.ihreGemeinde,
              jahr: STEUERJAHR,
            })}
          </p>
        )}
        <a href={kontaktHref} className={styles.knopf}>
          {t.besprechen} <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  )
}
