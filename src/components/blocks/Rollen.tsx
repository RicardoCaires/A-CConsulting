import Image from 'next/image'

import { hatSichtbarenInhalt, RichText } from '@/components/ui/RichText'
import type { Rich } from '@/content/types'

import styles from './Rollen.module.css'

/**
 * Wer welchen Teil einer Gruendung uebernimmt — vier gleich grosse Kacheln.
 *
 * Nach Ricardos Vorlage vom 14.09.2026
 * (`bilder-quelle/firmengruendung_rollen/vorlage.html`): Kategoriezeile,
 * Titel, ein Satz, darunter vier Kacheln im Raster zwei mal zwei. Je Kachel
 * links eine kleine Versalzeile, die Ueberschrift und der Text, rechts das
 * gelieferte Piktogramm.
 *
 * **Keine Kachel reicht ueber zwei Spalten.** Alle vier sind gleich gross:
 * Das Raster setzt `grid-auto-rows: 1fr`, die Kachel selbst streckt sich
 * darin. Die hoechste Kachel gibt das Mass vor.
 *
 * Der Baustein bringt seine Flaeche selbst mit und zaehlt beim
 * Flaechenwechsel nicht mit. Der Anker `zustaendigkeiten` bleibt.
 */

type Karte = {
  /** Geliefertes Piktogramm, Dateiname unter `public/bilder/` ohne Endung. */
  bild: string
  tag: string
  titel: string
  text: Rich
  /** Kurze Stichpunkte unter dem Text, mit gruenem Haken. */
  punkte?: readonly string[]
}

/* Die gelieferten Piktogramme messen je nach Lieferung 96, 112 oder 160
   Einheiten. Der Wert dient nur dem Seitenverhaeltnis; die Groesse gibt das
   Stylesheet vor. */
const bildMasse = 160

type Props = {
  id: string
  eyebrow?: string
  heading: string
  lead?: readonly Rich[]
  karten: readonly Karte[]
}

export function Rollen({ id, eyebrow, heading, lead, karten }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-titel`} className={styles.abschnitt}>
      <div className={`ac-container ${styles.container}`}>
        <div className={styles.kopf}>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <h2 id={`${id}-titel`} className={styles.titel}>
            {heading}
          </h2>
          {lead?.filter(hatSichtbarenInhalt).map((absatz, index) => (
            <p key={index} className={styles.lead}>
              <RichText value={absatz} />
            </p>
          ))}
        </div>

        <div className={styles.raster}>
          {karten.map((karte) => (
            <article key={karte.titel} className={styles.karte}>
              <div className={styles.text}>
                <p className={styles.tag}>{karte.tag}</p>
                <h3 className={styles.kartenTitel}>{karte.titel}</h3>
                <p className={styles.satz}>
                  <RichText value={karte.text} />
                </p>

                {karte.punkte && karte.punkte.length > 0 && (
                  <ul className={styles.punkte} role="list">
                    {karte.punkte.map((punkt) => (
                      <li key={punkt}>{punkt}</li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Das Piktogramm ist Gestaltung, kein Inhalt. */}
              <Image
                className={styles.bild}
                src={`/bilder/${karte.bild}.svg`}
                alt=""
                width={bildMasse}
                height={bildMasse}
                unoptimized
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
