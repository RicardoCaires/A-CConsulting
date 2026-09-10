import Image from 'next/image'
import type { ReactNode } from 'react'

import styles from './Schadenfall.module.css'

/**
 * „Wenn ein Schaden eintritt" — zweispaltig nach Ricardos Referenzgrafik vom
 * 11.09.2026 (`bilder-quelle/versicherungen_schadenfall_referenz.png`).
 *
 * Links Kategorie, Titel, Lead, drei Schritte und der Link. Rechts die
 * Partnerkarte mit dem gelieferten Logoraster.
 *
 * **Der Wortlaut ist der bestehende.** Die Referenzgrafik zeigt einen anderen
 * („Wir begleiten Sie durch den Schadenfall.", „Jetzt Schadenfall melden");
 * Ricardos Auftragstext nennt ausdruecklich den bestehenden, und der ist
 * freigegeben. Neu sind nur Kategoriezeile, Schrittbeschriftungen und der
 * Titel der Partnerkarte.
 *
 * **Die drei Zusaetze der Grafik sind nicht uebernommen** („Starke Partner.
 * Fuer Ihre Sicherheit.", „Gemeinsam Loesungen finden.", „Persoenlich.
 * Unabhaengig. An Ihrer Seite."). Ricardo hat am 10.09.2026 zwei Zusaetze von
 * dieser Seite streichen lassen; drei neue waeren ein Rueckschritt.
 *
 * **Seit dem 11.09.2026 ist jedes Logo ein Link** auf die Schadenmeldung der
 * jeweiligen Gesellschaft. Dafuer ist das gelieferte Raster in seine neun
 * Kacheln geschnitten — rein mechanisch, entlang der Kartenkanten, nichts
 * umgezeichnet und nichts umgefaerbt. Anders ginge es nicht: Ein einziges
 * Bild kann nicht neun Ziele haben.
 *
 * Jede Kachel traegt den Namen der Gesellschaft als Alternativtext und
 * oeffnet in einem neuen Fenster; `rel="noopener"` ist Pflicht, sobald ein
 * Link ein fremdes Fenster oeffnet.
 *
 * Der Anker `schadenfall` bleibt, wie er war; die Sprungmarken zeigen darauf.
 */

type Props = {
  id: string
  eyebrow: string
  heading: string
  lead: string
  schritte: readonly { bild: string; titel: string }[]
  /** Der Knopf wird vom Aufrufer gebaut — er kennt die Pfade, dieser nicht. */
  aktion: ReactNode
  partner: {
    bild: string
    titel: string
    gesellschaften: readonly { bild: string; name: string; url: string }[]
  }
}

/** Ein geliefertes Symbol. Immer quadratisch, nie eingefaerbt. */
function Symbol({ datei, groesse }: { datei: string; groesse: number }) {
  return (
    <Image
      className={styles.symbol}
      src={`/bilder/${datei}.webp`}
      alt=""
      width={224}
      height={224}
      sizes={`${groesse}px`}
    />
  )
}

export function Schadenfall({
  id,
  eyebrow,
  heading,
  lead,
  schritte,
  aktion,
  partner,
}: Props) {
  const headingId = `${id}-titel`

  return (
    <section id={id} className={styles.abschnitt} aria-labelledby={headingId}>
      <div className={styles.inner}>
        {/* ---- Links: Text und Schritte -------------------------------- */}
        <div className={styles.text}>
          <p className={styles.eyebrow}>{eyebrow}</p>

          <h2 id={headingId} className={styles.titel}>
            {heading}
          </h2>

          <p className={styles.lead}>{lead}</p>

          <ol className={styles.schritte}>
            {schritte.map((schritt) => (
              <li key={schritt.titel} className={styles.schritt}>
                <Symbol datei={schritt.bild} groesse={56} />
                <span>{schritt.titel}</span>
              </li>
            ))}
          </ol>

          <div className={styles.aktion}>{aktion}</div>
        </div>

        {/* ---- Rechts: die Partnerkarte --------------------------------

            Symbol ueber dem Titel, nicht daneben: So beginnt der Titel auf
            derselben Senkrechten wie die erste Logokachel. Ricardo hat das am
            11.09.2026 so verlangt.

            Fuer einen Zusatztext gab es keine Vorgabe. Es wird keiner
            erfunden — die Karte traegt Titel und Raster. */}
        <div className={styles.partner}>
          <div className={styles.partnerKopf}>
            <Symbol datei={partner.bild} groesse={64} />
            <h3>{partner.titel}</h3>
          </div>

          <ul className={styles.raster} role="list">
            {partner.gesellschaften.map((g) => (
              <li key={g.name}>
                <a
                  className={styles.kachel}
                  href={g.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={`/bilder/${g.bild}.webp`}
                    alt={`${g.name} — Schaden melden`}
                    width={409}
                    height={227}
                    sizes="(min-width: 64rem) 200px, 30vw"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
