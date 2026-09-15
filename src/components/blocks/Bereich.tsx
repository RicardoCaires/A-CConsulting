import Image from 'next/image'

import { hatSichtbarenInhalt, RichText } from '@/components/ui/RichText'
import type { Rich } from '@/content/types'

import styles from './Bereich.module.css'

/**
 * Ein Leistungsbereich: Text und Illustration in einer Karte, darunter eine
 * nummerierte Reihe von Situationen.
 *
 * Heute auf `/finanzplanung`: „Ein Budget zeigt, was moeglich ist." Nach
 * Ricardos HTML-Vorlage vom 15.09.2026
 * (`bilder-quelle/finanzplanung_budget/vorlage.html`).
 *
 * **Die Illustration steht auf dem Desktop rechts, auf dem Telefon oben.**
 * Das Raster dreht die Reihenfolge unter 40.625rem um; im Quelltext steht der
 * Text zuerst, damit Vorlesewerkzeuge ihn zuerst bekommen.
 *
 * Die Situationen tragen nur eine Nummer und einen Titel. Ihre Liste ist mit
 * der Zwischenzeile verknuepft (`aria-labelledby`), damit die Gruppe auch
 * ohne sichtbare Ueberschrift benannt ist.
 *
 * Der letzte Nummernkreis ist gruen — so zeigt es die Vorlage.
 *
 * Der Baustein bringt seine Flaeche selbst mit und zaehlt beim
 * Flaechenwechsel nicht mit.
 */

type Props = {
  id: string
  eyebrow?: string
  heading: string
  /** Der erste Absatz, eine Spur groesser und in Navy. */
  lead?: Rich
  paragraphs?: readonly Rich[]
  /** Gelieferte Illustration, Dateiname unter `public/bilder/` ohne Endung. */
  bild?: string
  situationen?: { titel: string; punkte: readonly string[] }
}

export function Bereich({
  id,
  eyebrow,
  heading,
  lead,
  paragraphs,
  bild,
  situationen,
}: Props) {
  const situationenId = `${id}-situationen`

  return (
    <section id={id} aria-labelledby={`${id}-titel`} className={styles.abschnitt}>
      <div className={`ac-container ${styles.container}`}>
        <div className={styles.karte}>
          <div className={styles.text}>
            {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
            <h2 id={`${id}-titel`} className={styles.titel}>
              {heading}
            </h2>

            {lead && hatSichtbarenInhalt(lead) && (
              <p className={styles.lead}>
                <RichText value={lead} />
              </p>
            )}

            {paragraphs?.filter(hatSichtbarenInhalt).map((absatz, index) => (
              <p key={index} className={styles.satz}>
                <RichText value={absatz} />
              </p>
            ))}
          </div>

          {bild && (
            /* Die gelieferte Illustration ist Gestaltung, kein Inhalt. */
            <Image
              className={styles.bild}
              src={`/bilder/${bild}.svg`}
              alt=""
              width={360}
              height={300}
              unoptimized
            />
          )}
        </div>

        {situationen && situationen.punkte.length > 0 && (
          <div className={styles.situationen}>
            <p id={situationenId} className={styles.situationenTitel}>
              {situationen.titel}
            </p>

            <ul className={styles.raster} aria-labelledby={situationenId}>
              {situationen.punkte.map((punkt, index) => (
                <li key={punkt} className={styles.feld}>
                  <span className={styles.nummer} aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className={styles.feldTitel}>{punkt}</h3>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
