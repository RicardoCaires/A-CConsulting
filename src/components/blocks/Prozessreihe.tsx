import Image from 'next/image'

import { hatSichtbarenInhalt, RichText } from '@/components/ui/RichText'
import type { Rich } from '@/content/types'

import styles from './Prozessreihe.module.css'

/**
 * Ein Ablauf als waagrechte Reihe — heute „So laeuft der Wechsel ab".
 *
 * Nach Ricardos HTML-Vorlage vom 15.09.2026
 * (`bilder-quelle/wechsel_ablauf/vorlage.html`): Kategoriezeile, Titel, ein
 * Satz, darunter fuenf gleich grosse Karten nebeneinander mit nummeriertem
 * Kreis auf einer durchgehenden Linie; darunter ein Hinweis mit gruenem
 * Strich links.
 *
 * **Die Reihe bricht nie in eine Liste um.** Auf schmalen Geraeten wird sie
 * waagrecht gescrollt, mit Einrasten (`scroll-snap`). Das verlangt der
 * Auftrag ausdruecklich.
 *
 * **Tastatur und Vorlesewerkzeuge**: Der Scrollbereich ist ein `region` mit
 * eigenem Namen und `tabindex={0}`. Damit erreicht ihn die Tabulatortaste, und
 * die Pfeiltasten scrollen die Reihe — ohne das kaeme man ohne Maus nicht an
 * die hinteren Schritte. Die Reihenfolge steht in einer `<ol>`, nicht nur in
 * den Nummernkreisen.
 *
 * Der letzte Kreis ist gruen: Er markiert das Ziel, nicht einen weiteren
 * Zwischenschritt. So zeigt es die Vorlage.
 */

type Schritt = {
  /** Geliefertes Piktogramm, Dateiname unter `public/bilder/` ohne Endung. */
  bild?: string
  titel: string
  text: Rich
}

type Props = {
  id: string
  eyebrow?: string
  heading: string
  lead?: readonly Rich[]
  /** Name des Scrollbereichs fuer Vorlesewerkzeuge. */
  bereichsname: string
  schritte: readonly Schritt[]
  hinweis?: { titel: string; text: Rich }
}

export function Prozessreihe({
  id,
  eyebrow,
  heading,
  lead,
  bereichsname,
  schritte,
  hinweis,
}: Props) {
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

        <div
          className={styles.scroller}
          role="region"
          aria-label={bereichsname}
          tabIndex={0}
        >
          <ol className={styles.liste}>
            {schritte.map((schritt, index) => (
              <li key={schritt.titel} className={styles.schritt}>
                <span className={styles.nummer} aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {schritt.bild && (
                  /* Das Piktogramm ist Gestaltung, kein Inhalt. */
                  <Image
                    className={styles.bild}
                    src={`/bilder/${schritt.bild}.svg`}
                    alt=""
                    width={96}
                    height={96}
                    unoptimized
                  />
                )}

                <h3 className={styles.schrittTitel}>{schritt.titel}</h3>
                <p className={styles.satz}>
                  <RichText value={schritt.text} />
                </p>
              </li>
            ))}
          </ol>
        </div>

        {hinweis && (
          <p className={styles.hinweis}>
            <strong className={styles.hinweisTitel}>{hinweis.titel}</strong>
            <span className={styles.hinweisText}>
              <RichText value={hinweis.text} />
            </span>
          </p>
        )}
      </div>
    </section>
  )
}
