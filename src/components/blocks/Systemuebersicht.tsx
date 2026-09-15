import Image from 'next/image'

import { hatSichtbarenInhalt, RichText } from '@/components/ui/RichText'
import type { Rich } from '@/content/types'

import styles from './Systemuebersicht.module.css'

/**
 * Ein System in Teilen erklaert: Illustration neben nummerierten Karten,
 * darunter eine Pruefliste und ein Grundsatz.
 *
 * Heute auf `/finanzplanung`: „Vorsorge beginnt mit einem Gesamtbild." Nach
 * Ricardos HTML-Vorlage vom 15.09.2026
 * (`bilder-quelle/finanzplanung_vorsorge/vorlage.html`).
 *
 * **Die Illustration steht auf dem Desktop links neben den Karten**, unter
 * 50rem darueber. Sie liegt in einer eigenen, leicht getoenten Karte, damit
 * die Zeichnung nicht frei im Weissraum haengt.
 *
 * Die Reihenfolge im Quelltext ist Illustration, dann Karten — das entspricht
 * hier auch der Lesereihenfolge, weil die Zeichnung die drei Saeulen
 * nummeriert, auf die sich die Karten beziehen.
 *
 * Der Baustein bringt seine Flaeche selbst mit und zaehlt beim
 * Flaechenwechsel nicht mit.
 */

type Props = {
  id: string
  eyebrow?: string
  /**
   * Traegt ein Banner ueber dem Abschnitt Themenzeile und Ueberschrift, steht
   * hier dessen Ueberschriften-Id. Der Abschnitt laesst seinen eigenen Kopf
   * dann weg und nennt den Banner als seinen Namen.
   */
  bannerTitelId?: string
  heading: string
  lead?: readonly Rich[]
  /** Gelieferte Illustration, Dateiname unter `public/bilder/` ohne Endung. */
  bild?: string
  bildBeschreibung?: string
  karten: readonly { tag?: string; titel: string; text: Rich }[]
  pruefung?: { titel: string; punkte: readonly string[] }
  grundsatz?: { titel: string; text: Rich }
}

export function Systemuebersicht({
  id,
  eyebrow,
  bannerTitelId,
  heading,
  lead,
  bild,
  bildBeschreibung,
  karten,
  pruefung,
  grundsatz,
}: Props) {
  return (
    <section id={id} aria-labelledby={bannerTitelId ?? `${id}-titel`} className={styles.abschnitt}>
      <div className={`ac-container ${styles.container}`}>
        <div className={styles.kopf}>
          {!bannerTitelId && eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          {!bannerTitelId && (
            <h2 id={`${id}-titel`} className={styles.titel}>
              {heading}
            </h2>
          )}
          {lead?.filter(hatSichtbarenInhalt).map((absatz, index) => (
            <p key={index} className={styles.lead}>
              <RichText value={absatz} />
            </p>
          ))}
        </div>

        <div className={styles.system}>
          {bild && (
            <div className={styles.bildFeld}>
              <Image
                className={styles.bild}
                src={`/bilder/${bild}.svg`}
                alt={bildBeschreibung ?? ''}
                width={420}
                height={360}
                unoptimized
              />
            </div>
          )}

          <div className={styles.karten}>
            {karten.map((karte, index) => (
              <article key={karte.titel} className={styles.karte}>
                <span className={styles.nummer} aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className={styles.kartenText}>
                  {karte.tag && <p className={styles.tag}>{karte.tag}</p>}
                  <h3 className={styles.kartenTitel}>{karte.titel}</h3>
                  <p className={styles.satz}>
                    <RichText value={karte.text} />
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {pruefung && pruefung.punkte.length > 0 && (
          <div className={styles.pruefung}>
            <h3 className={styles.pruefungTitel}>{pruefung.titel}</h3>
            <ul className={styles.liste} role="list">
              {pruefung.punkte.map((punkt) => (
                <li key={punkt}>{punkt}</li>
              ))}
            </ul>
          </div>
        )}

        {grundsatz && (
          <p className={styles.grundsatz}>
            <strong className={styles.grundsatzTitel}>{grundsatz.titel}</strong>
            <span className={styles.grundsatzText}>
              <RichText value={grundsatz.text} />
            </span>
          </p>
        )}
      </div>
    </section>
  )
}
