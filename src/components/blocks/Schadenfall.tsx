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
 * Das Logoraster ist **eine** gelieferte Datei und wird nicht in neun Teile
 * zerlegt: Ein Zuschnitt waere eine Veraenderung an fremden Marken. Sein
 * Alternativtext zaehlt die Gesellschaften auf — ohne ihn waere die Karte
 * fuer Vorlesewerkzeuge leer.
 *
 * Der Anker `schadenfall` bleibt, wie er war; die Sprungmarken zeigen darauf.
 */

type Props = {
  id: string
  eyebrow: string
  heading: string
  lead: string
  schritte: readonly { bild: string; titel: string }[]
  /** Der Link wird vom Aufrufer gebaut — er kennt die Pfade, dieser Baustein nicht. */
  link: ReactNode
  partner: { bild: string; titel: string; rasterBild: string; rasterAlt: string }
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
  link,
  partner,
}: Props) {
  const headingId = `${id}-titel`

  return (
    <section id={id} className={styles.abschnitt} aria-labelledby={headingId}>
      {/* Das gelieferte Muster: feine Boegen, sehr heller Grund. */}
      <div className={styles.muster} aria-hidden="true">
        <Image
          className={styles.musterBild}
          src="/bilder/06_schaden_hintergrund.webp"
          alt=""
          width={1672}
          height={941}
          sizes="100vw"
        />
      </div>

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

          <div className={styles.link}>{link}</div>
        </div>

        {/* ---- Rechts: die Partnerkarte --------------------------------

            Fuer einen Zusatztext gab es keine Vorgabe. Es wird keiner
            erfunden — die Karte traegt Titel und Raster. */}
        <div className={styles.partner}>
          <div className={styles.partnerKopf}>
            <Symbol datei={partner.bild} groesse={64} />
            <h3>{partner.titel}</h3>
          </div>

          <Image
            className={styles.raster}
            src={`/bilder/${partner.rasterBild}.webp`}
            alt={partner.rasterAlt}
            width={900}
            height={675}
            sizes="(min-width: 64rem) 620px, 100vw"
          />
        </div>
      </div>
    </section>
  )
}
