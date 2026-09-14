import Image from 'next/image'

import { hatSichtbarenInhalt, RichText } from '@/components/ui/RichText'
import type { Rich } from '@/content/types'

import styles from './Rechtsformen.module.css'

/**
 * „Einzelfirma oder GmbH?" auf `/firmengruendung` — zwei Karten im Vergleich.
 *
 * Nach Ricardos zweiter Referenzgrafik vom 14.09.2026, die er mit einem
 * ausgeschriebenen Auftragstext geliefert hat: Kategoriezeile, Titel, ein
 * Satz, darunter zwei Karten mit geliefertem Symbol, Titel, Unterzeile und
 * denselben sechs Merkmalen; unten eine breite Hinweisleiste.
 *
 * Jede Zeile hat links die Kategorie als kleine Versalzeile und rechts den
 * Inhalt: eine Hauptzeile in Navy und darunter, wo vorhanden, eine hellere
 * Erklaerung.
 *
 * **Der Wortlaut stammt aus Ricardos Auftragstext.** Die erste Fassung dieses
 * Abschnitts trug die Saetze aus `schritt4_fassung2_de.md`; sie stehen dort
 * unveraendert weiter, aber nicht mehr auf der Seite.
 *
 * **„CHF 20'000 Stammkapital" steht jetzt da.** Schritt 4 fuehrt die Hoehe des
 * Stammkapitals als fachlich zu pruefen; Ricardo hat die Zahl im Auftrag
 * ausgeschrieben und ist zweimal auf den Vorbehalt hingewiesen.
 *
 * Der Anker `rechtsform` bleibt.
 */

type Zeile = { label: string; wert: Rich; zusatz?: Rich }

type Props = {
  id: string
  eyebrow?: string
  heading: string
  lead?: readonly Rich[]
  /** Hintergrundmuster, Dateiname unter `public/bilder/` ohne Endung. */
  hintergrund?: string
  spalten: readonly {
    bild: string
    titel: string
    untertitel?: string
    zeilen: readonly Zeile[]
  }[]
  hinweis?: { bild: string; titel: string; text: Rich }
}

const bildPfad = (datei: string) => `/bilder/${datei}.svg`

export function Rechtsformen({
  id,
  eyebrow,
  heading,
  lead,
  hintergrund,
  spalten,
  hinweis,
}: Props) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-titel`}
      className={styles.abschnitt}
      style={hintergrund ? { backgroundImage: `url(${bildPfad(hintergrund)})` } : undefined}
    >
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

        <div className={styles.spalten}>
          {spalten.map((spalte) => (
            <div key={spalte.titel} className={styles.karte}>
              <div className={styles.kartenKopf}>
                <Image
                  className={styles.symbol}
                  src={bildPfad(spalte.bild)}
                  alt=""
                  width={700}
                  height={700}
                  unoptimized
                />
                <div className={styles.kartenTitelBlock}>
                  <h3 className={styles.kartenTitel}>{spalte.titel}</h3>
                  {spalte.untertitel && (
                    <p className={styles.kartenUntertitel}>{spalte.untertitel}</p>
                  )}
                </div>
              </div>

              <dl className={styles.zeilen}>
                {spalte.zeilen
                  .filter((zeile) => hatSichtbarenInhalt(zeile.wert))
                  .map((zeile) => (
                    <div key={zeile.label} className={styles.zeile}>
                      <dt className={styles.label}>{zeile.label}</dt>
                      <dd className={styles.wert}>
                        <span className={styles.wertHaupt}>
                          <RichText value={zeile.wert} />
                        </span>
                        {zeile.zusatz && hatSichtbarenInhalt(zeile.zusatz) && (
                          <span className={styles.wertZusatz}>
                            <RichText value={zeile.zusatz} />
                          </span>
                        )}
                      </dd>
                    </div>
                  ))}
              </dl>
            </div>
          ))}
        </div>

        {hinweis && (
          <div className={styles.hinweis}>
            <Image
              className={styles.hinweisSymbol}
              src={bildPfad(hinweis.bild)}
              alt=""
              width={700}
              height={700}
              unoptimized
            />
            <div>
              <h3 className={styles.hinweisTitel}>{hinweis.titel}</h3>
              <p className={styles.hinweisText}>
                <RichText value={hinweis.text} />
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
