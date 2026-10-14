import styles from './PortalBeispiel.module.css'

/**
 * Beispielansicht des Kundenportals mit einem Ringdiagramm (14.10.2026).
 *
 * Ricardo wünscht mehr Abwechslung auf der Website, «vielleicht mal eine
 * darstellung mit einem diagramm», und will das Kundenportal in den
 * Vordergrund stellen. Die Ansicht zeigt, wie das Portal die Prämien nach
 * Bereich zusammenfasst.
 *
 * **Die Zahlen sind erfunden** und stehen sichtbar als Beispiel da. Sie sind
 * keine Aussage über Kundinnen und Kunden und keine Prämienangabe.
 *
 * Das Diagramm ist reines SVG ohne Skript; die Werte stehen zusätzlich als
 * Liste daneben, damit Vorlesewerkzeuge sie lesen können.
 */

export type Segment = { text: string; betrag: number }

type Props = {
  titel: string
  untertitel: string
  diagrammTitel: string
  segmente: readonly Segment[]
  hinweis: string
  /** Nur, wenn das Portal die Angabe auch zeigt. */
  frist?: { text: string; datum: string }
}

/** Reihenfolge der Farben: Grün führt, dann die zwei Grau-Navy-Stufen und Hellblau. */
const FARBEN = ['var(--ac-color-accent-green)', 'var(--ac-color-navy-deep)', 'var(--ac-color-brand-grey)', 'var(--ac-color-border-tint)']

const chf = (n: number) => `CHF ${String(n).replace(/\B(?=(\d{3})+(?!\d))/g, "'")}`

export function PortalBeispiel({ titel, untertitel, diagrammTitel, segmente, hinweis, frist }: Props) {
  const summe = segmente.reduce((s, x) => s + x.betrag, 0)
  // Ring aus Kreisbögen: Umfang 100, jedes Segment als Strichlänge
  const r = 15.9155
  let versatz = 25
  const boegen = segmente.map((s, i) => {
    const anteil = (s.betrag / summe) * 100
    const bogen = (
      <circle
        key={s.text}
        cx="21"
        cy="21"
        r={r}
        fill="none"
        stroke={FARBEN[i % FARBEN.length]}
        strokeWidth="5.5"
        strokeDasharray={`${Math.max(anteil - 0.8, 0)} ${100 - Math.max(anteil - 0.8, 0)}`}
        strokeDashoffset={versatz}
      />
    )
    versatz -= anteil
    return bogen
  })

  return (
    <figure className={styles.ansicht} aria-label={`${titel}: ${diagrammTitel}`}>
      <div className={styles.kopf}>
        <span className={styles.titel}>{titel}</span>
        <span className={styles.marke}>{untertitel}</span>
      </div>

      <div className={styles.inhalt}>
        <div className={styles.ring}>
          <svg viewBox="0 0 42 42" aria-hidden="true" focusable="false">
            <circle cx="21" cy="21" r={r} fill="none" stroke="var(--ac-color-background-tint)" strokeWidth="5.5" />
            {boegen}
          </svg>
          <div className={styles.mitte}>
            <span className={styles.mitteBetrag}>{chf(summe)}</span>
            <span className={styles.mitteText}>{diagrammTitel}</span>
          </div>
        </div>

        <ul className={styles.legende}>
          {segmente.map((s, i) => (
            <li key={s.text}>
              <span className={styles.punkt} style={{ backgroundColor: FARBEN[i % FARBEN.length] }} aria-hidden="true" />
              <span className={styles.legendeText}>{s.text}</span>
              <span className={styles.legendeBetrag}>{chf(s.betrag)}</span>
            </li>
          ))}
        </ul>
      </div>

      {frist ? (
        <div className={styles.frist}>
          <span>{frist.text}</span>
          <strong>{frist.datum}</strong>
        </div>
      ) : null}

      <figcaption className={styles.hinweis}>{hinweis}</figcaption>
    </figure>
  )
}
