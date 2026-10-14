import Image from 'next/image'

import { PortalBeispiel } from '@/components/ui/PortalBeispiel'
import { portalAnfragen, portalBeispiel, portalDokumente, portalFenster, portalPolicen } from '@/content/seiten/portal-beispiel'
import type { PortalAnsicht as Art } from '@/content/seiten/typen'

import styles from './PortalAnsicht.module.css'

/**
 * Beispielansichten des Kundenportals (15.10.2026). Ricardo: «ich will das noch
 * etwas mehr vom portal gezeigt wird», dann «das Kunden Portal wird nicht gut
 * rübergebracht». Darum zuerst das Fenster – das Portal so, wie es nach der Anmeldung
 * aussieht –, dazu Ausschnitte: Policenliste, Anfragen mit Stand, Dokumente.
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
  return (
    <figure className={styles.ansicht} aria-label={a.titel}>
      <Kopf titel={a.titel} untertitel={a.untertitel} />
      <ul className={styles.zeilen}>
        {a.anfragen.map((x) => {
          const fertig = x.stand === x.stufen.length - 1
          return (
            <li key={x.text} className={styles.anfrage}>
              <span className={styles.anfrageKopf}>
                <span className={styles.haupt}>{x.text}</span>
                <span className={fertig ? `${styles.stand} ${styles.standFertig}` : styles.stand}>{x.stufen[x.stand]}</span>
              </span>
              {/* Ein Abschnitt je Stufe: erreichte grün, der Rest hell. Ein Rückruf hat nur zwei. */}
              <span className={styles.balken} data-stufen={x.stufen.length} aria-hidden="true">
                {x.stufen.map((s, i) => (
                  <span key={s} className={i <= x.stand ? styles.balkenAn : styles.balkenAus} />
                ))}
              </span>
            </li>
          )
        })}
      </ul>
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

/** Farbfolge der Diagramme nach Corporate Design: Navy, Grün, Grau, Hellblau – wie im Portal. */
const RINGFARBEN = [styles.r0, styles.r1, styles.r2, styles.r3]

function Ring({ segmente, summeText, unter }: { segmente: readonly { text: string; betrag: number }[]; summeText: string; unter: string }) {
  const summe = segmente.reduce((t, x) => t + x.betrag, 0)
  let versatz = 25
  return (
    <span className={styles.ring}>
      <svg viewBox="0 0 42 42" aria-hidden="true" focusable="false">
        <circle className={styles.ringGrund} cx="21" cy="21" r="15.9155" fill="none" strokeWidth="5.5" />
        {segmente.map((x, i) => {
          const anteil = (x.betrag / summe) * 100
          const lang = Math.max(anteil - 0.8, 0)
          const el = (
            <circle
              key={x.text}
              className={RINGFARBEN[i % RINGFARBEN.length]}
              cx="21"
              cy="21"
              r="15.9155"
              fill="none"
              strokeWidth="5.5"
              strokeDasharray={`${lang} ${100 - lang}`}
              strokeDashoffset={versatz}
            />
          )
          versatz -= anteil
          return el
        })}
      </svg>
      <span className={styles.ringMitte}>
        <strong>{summeText}</strong>
        <span>{unter}</span>
      </span>
    </span>
  )
}

/**
 * Das Portal als Fenster, nachgebaut nach `public-portal/portal.css` im CRM: Kopf mit
 * Logo und Bereichen, Begrüssung mit Navy-Strich, Kennzahlen und der Kostenring, der
 * seit dem 15.10.2026 im Portal steht.
 */
function Fenster() {
  const f = portalFenster
  const summe = f.segmente.reduce((t, x) => t + x.betrag, 0)
  return (
    <figure className={styles.fenster} aria-label={`${f.vorzeile}: ${f.hinweis}`}>
      <div className={styles.leiste} aria-hidden="true">
        <span className={styles.punkte}>
          <span />
          <span />
          <span />
        </span>
        <span className={styles.adresse}>{f.adresse}</span>
      </div>
      <div className={styles.portalKopf}>
        <Image src="/logo/ac-logo.png" alt="" width={216} height={47} className={styles.portalLogo} />
        <span className={styles.portalNav} aria-hidden="true">
          {f.navigation.map((n, i) => (
            <span key={n} className={i === 0 ? styles.navAktiv : undefined}>
              {n}
            </span>
          ))}
        </span>
      </div>
      <div className={styles.portalInhalt}>
        <div className={styles.willkommen}>
          <span className={styles.vorzeile}>{f.vorzeile}</span>
          <strong className={styles.gruss}>{f.gruss}</strong>
          <span className={styles.satz}>{f.satz}</span>
        </div>
        <div className={styles.kennzahlen}>
          {f.kennzahlen.map((k) => (
            <span key={k.text} className={styles.kennzahl}>
              <strong>{k.zahl}</strong>
              <span>{k.text}</span>
            </span>
          ))}
          <span className={`${styles.kennzahl} ${styles.termin}`}>
            <span className={styles.terminTitel}>{f.termin.titel}</span>
            <span className={styles.terminKnopf}>{f.termin.knopf}</span>
          </span>
        </div>
        <div className={styles.kosten}>
          <strong className={styles.kostenTitel}>{f.ringTitel}</strong>
          <div className={styles.kostenInhalt}>
            <Ring segmente={f.segmente} summeText={chf(summe)} unter={f.proJahr} />
            <ul className={styles.legende}>
              {f.segmente.map((x, i) => (
                <li key={x.text}>
                  <span className={`${styles.legendePunkt} ${RINGFARBEN[i % RINGFARBEN.length]}`} aria-hidden="true" />
                  <span className={styles.legendeText}>{x.text}</span>
                  <strong>{chf(x.betrag)}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <figcaption className={`${styles.hinweis} ${styles.fensterHinweis}`}>{f.hinweis}</figcaption>
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
    case 'fenster':
      return <Fenster />
    default:
      return <PortalBeispiel {...portalBeispiel} />
  }
}
