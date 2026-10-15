'use client'

import { useMemo, useState } from 'react'

import { ersparnis3a, KIRCHE, MAX_3A_MIT_PK, MAX_3A_OHNE_PK, STEUERJAHR, type Kirche } from '@/lib/steuer-3a'

import styles from './Rechner3a.module.css'

/**
 * Steuerersparnis mit der Säule 3a schätzen (15.10.2026). Rechnet im Browser und sendet nichts
 * (Hausordnung Abschnitt 7). Keine Texteingabe: Knöpfe und Schieberegler (Ricardo: «Text
 * eingabe nur dann … wenn es nicht anders geht»). Tarife und Quellen in `src/lib/steuer-3a.ts`.
 */

type Lage = 'allein' | 'alleinKinder' | 'verheiratet'

const LAGEN: [Lage, string][] = [
  ['allein', 'Alleinstehend'],
  ['alleinKinder', 'Alleinstehend mit Kindern'],
  ['verheiratet', 'Verheiratet'],
]
const KIRCHEN: [Kirche, string][] = [
  ['keine', 'Keine'],
  ['reformiert', 'Reformiert'],
  ['katholisch', 'Katholisch'],
  ['christkatholisch', 'Christkatholisch'],
]

const chf = (n: number) => `CHF ${Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'")}`
/** Auf 10 Franken gerundet: Es ist eine Schätzung. */
const rund = (n: number) => chf(Math.round(n / 10) * 10)

export function Rechner3a({ kontaktHref }: { kontaktHref: string }) {
  const [lage, setLage] = useState<Lage>('allein')
  const [kinder, setKinder] = useState(0)
  const [einkommen, setEinkommen] = useState(80000)
  const [pk, setPk] = useState(true)
  const [einzahlung, setEinzahlung] = useState(MAX_3A_MIT_PK)
  const [kirche, setKirche] = useState<Kirche>('keine')

  const max = pk ? MAX_3A_MIT_PK : MAX_3A_OHNE_PK
  const betrag = Math.min(einzahlung, max)
  const verheiratetentarif = lage !== 'allein'
  const e = useMemo(
    () => ersparnis3a({ einkommen, verheiratetentarif, kinder: verheiratetentarif ? kinder : 0, kirche, einzahlung: betrag }),
    [einkommen, verheiratetentarif, kinder, kirche, betrag],
  )
  const teile = [
    { name: 'Bundessteuer', wert: e.bund, klasse: styles.bund },
    { name: 'Kanton und Gemeinde Aegerten', wert: e.kantonGemeinde, klasse: styles.kanton },
    ...(KIRCHE[kirche] ? [{ name: 'Kirchensteuer', wert: e.kirche, klasse: styles.kirche }] : []),
  ]

  return (
    <div className={styles.rechner}>
      <div className={styles.eingaben}>
        <fieldset className={styles.gruppe}>
          <legend>Ihre Situation</legend>
          <div className={styles.wahl}>
            {LAGEN.map(([k, t]) => (
              <button key={k} type="button" aria-pressed={lage === k} className={styles.wahlKnopf} onClick={() => { setLage(k); if (k === 'alleinKinder' && kinder === 0) setKinder(1) }}>
                {t}
              </button>
            ))}
          </div>
        </fieldset>

        {verheiratetentarif ? (
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
          <p className={styles.hilfe}>Es steht in Ihrer letzten Veranlagung oder Steuererklärung.</p>
        </div>

        <fieldset className={styles.gruppe}>
          <legend>Sind Sie einer Pensionskasse angeschlossen?</legend>
          <div className={styles.wahl}>
            {[
              [true, 'Ja, als Angestellte'],
              [false, 'Nein, zum Beispiel selbständig'],
            ].map(([w, t]) => (
              <button
                key={String(w)}
                type="button"
                aria-pressed={pk === w}
                className={styles.wahlKnopf}
                onClick={() => {
                  setPk(w as boolean)
                  setEinzahlung(w ? MAX_3A_MIT_PK : Math.min(einzahlung === MAX_3A_MIT_PK ? MAX_3A_OHNE_PK : einzahlung, MAX_3A_OHNE_PK))
                }}
              >
                {t as string}
              </button>
            ))}
          </div>
        </fieldset>

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
        <p className={styles.betrag}>{rund(e.total)}</p>
        <p className={styles.proJahr}>im Steuerjahr {STEUERJAHR}</p>

        {/* Zusammensetzung als Balken */}
        <div className={styles.balken} aria-hidden="true">
          {e.total > 0 ? teile.map((t) => <span key={t.name} className={t.klasse} style={{ flexGrow: Math.max(t.wert, 0) }} />) : <span className={styles.leer} />}
        </div>
        <ul className={styles.legende}>
          {teile.map((t) => (
            <li key={t.name}>
              <span className={`${styles.punkt} ${t.klasse}`} aria-hidden="true" />
              <span>{t.name}</span>
              <strong>{rund(t.wert)}</strong>
            </li>
          ))}
        </ul>

        <p className={styles.hinweis}>
          Schätzung für Wohnsitz Aegerten, Steuerjahr {STEUERJAHR}, nach den amtlichen Tarifen von Bund und Kanton Bern. Das steuerbare
          Einkommen ist bei Bund und Kanton gleich angenommen. Massgebend ist Ihre Veranlagung.
        </p>
        <a href={kontaktHref} className={styles.knopf}>
          Säule 3a besprechen <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  )
}
