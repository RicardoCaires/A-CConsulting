import { PortalBeispiel } from '@/components/ui/PortalBeispiel'
import { portalAnfragen, portalBeispiel, portalDokumente, portalPolicen } from '@/content/seiten/portal-beispiel'
import type { PortalAnsicht as Art } from '@/content/seiten/typen'

import styles from './PortalAnsicht.module.css'

/**
 * Beispielansichten des Kundenportals (15.10.2026). Ricardo: «ich will das noch
 * etwas mehr vom portal gezeigt wird». Vier Ausschnitte im Stil des Portals:
 * Prämien als Ring, Policenliste, Anfragen mit Stand, Dokumente.
 *
 * Alles reines HTML und SVG, ohne Skript. Die Angaben sind erfunden und als
 * Beispiel beschriftet. Keine Aussage zu Anmeldung oder Datenhaltung – die
 * gehört nach Ricardos Anweisung nicht auf die Website.
 */

const chf = (n: number) => `CHF ${String(n).replace(/\B(?=(\d{3})+(?!\d))/g, "'")}`

function Kopf({ titel, untertitel }: { titel: string; untertitel: string }) {
  return (
    <div className={styles.kopf}>
      <span className={styles.titel}>{titel}</span>
      <span className={styles.marke}>{untertitel}</span>
    </div>
  )
}

function Policen() {
  const p = portalPolicen
  return (
    <figure className={styles.ansicht} aria-label={p.titel}>
      <Kopf titel={p.titel} untertitel={p.untertitel} />
      <ul className={styles.zeilen}>
        {p.policen.map((x) => (
          <li key={x.sparte} className={styles.police}>
            <span className={styles.text}>
              <span className={styles.haupt}>{x.sparte}</span>
              <span className={styles.neben}>{x.detail}</span>
            </span>
            <span className={styles.rechts}>
              <span className={styles.betrag}>{chf(x.betrag)}</span>
              <span className={styles.status}>{p.status}</span>
            </span>
          </li>
        ))}
      </ul>
      <figcaption className={styles.hinweis}>
        {p.spalte} · {p.hinweis}
      </figcaption>
    </figure>
  )
}

function Anfragen() {
  const a = portalAnfragen
  const letzte = a.stufen.length - 1
  return (
    <figure className={styles.ansicht} aria-label={a.titel}>
      <Kopf titel={a.titel} untertitel={a.untertitel} />
      <ul className={styles.zeilen}>
        {a.anfragen.map((x) => (
          <li key={x.text} className={styles.anfrage}>
            <span className={styles.anfrageKopf}>
              <span className={styles.haupt}>{x.text}</span>
              <span className={x.stand === letzte ? `${styles.stand} ${styles.standFertig}` : styles.stand}>
                {a.stufen[x.stand]}
              </span>
            </span>
            {/* Drei Abschnitte: erledigte grün, der Rest hell */}
            <span className={styles.balken} aria-hidden="true">
              {a.stufen.map((s, i) => (
                <span key={s} className={i <= x.stand ? styles.balkenAn : styles.balkenAus} />
              ))}
            </span>
          </li>
        ))}
      </ul>
      <p className={styles.legende} aria-hidden="true">
        {a.stufen.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </p>
      <figcaption className={styles.hinweis}>{a.hinweis}</figcaption>
    </figure>
  )
}

function Dokumente() {
  const d = portalDokumente
  return (
    <figure className={styles.ansicht} aria-label={d.titel}>
      <Kopf titel={d.titel} untertitel={d.untertitel} />
      <ul className={styles.zeilen}>
        {d.dokumente.map((x) => (
          <li key={x.name} className={styles.dokument}>
            <svg className={styles.blatt} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M6 2.5h8l4 4v15H6z" />
              <path d="M14 2.5v4h4" />
              <path d="M9 12h6M9 15.5h6" />
            </svg>
            <span className={styles.haupt}>{x.name}</span>
            <span className={styles.art}>{x.art}</span>
          </li>
        ))}
      </ul>
      <figcaption className={styles.hinweis}>{d.hinweis}</figcaption>
    </figure>
  )
}

export function PortalAnsicht({ ansicht = 'praemien' }: { ansicht?: Art }) {
  switch (ansicht) {
    case 'policen':
      return <Policen />
    case 'anfragen':
      return <Anfragen />
    case 'dokumente':
      return <Dokumente />
    default:
      return <PortalBeispiel {...portalBeispiel} />
  }
}
