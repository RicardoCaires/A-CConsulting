import Image from 'next/image'

import { Button } from '@/components/ui/Button'
import { hatSichtbarenInhalt, RichText } from '@/components/ui/RichText'
import type { PageRef, Rich } from '@/content/types'
import type { Locale } from '@/i18n/config'
import { path } from '@/i18n/routes'

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
  /**
   * Traegt ein Banner ueber dem Abschnitt Themenzeile und Ueberschrift, steht
   * hier dessen Ueberschriften-Id. Der Abschnitt laesst seinen eigenen Kopf
   * dann weg und nennt den Banner als seinen Namen.
   */
  bannerTitelId?: string
  heading: string
  lead?: readonly Rich[]
  /** Hintergrundmuster, Dateiname unter `public/bilder/` ohne Endung. */
  hintergrund?: string
  spalten: readonly {
    bild: string
    titel: string
    untertitel?: string
    zeilen: readonly Zeile[]
    /** Die Einordnung unten in der Karte: fuer wen die Rechtsform passt. */
    passt?: { titel: string; text: Rich }
  }[]
  /** Leiste unter den Karten. Ohne `bild` steht sie ohne Symbol. */
  hinweis?: { bild?: string; titel: string; text: Rich; aktion?: PageRef }
  locale: Locale
}

const bildPfad = (datei: string) => `/bilder/${datei}.svg`

export function Rechtsformen({
  id,
  eyebrow,
  bannerTitelId,
  heading,
  lead,
  hintergrund,
  spalten,
  hinweis,
  locale,
}: Props) {
  return (
    <section
      id={id}
      aria-labelledby={bannerTitelId ?? `${id}-titel`}
      className={styles.abschnitt}
      style={hintergrund ? { backgroundImage: `url(${bildPfad(hintergrund)})` } : undefined}
    >
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

        <div className={styles.spalten}>
          {spalten.map((spalte) => (
            <div key={spalte.titel} className={styles.karte}>
              <div className={styles.kartenKopf}>
                <Image
                  className={styles.symbol}
                  src={bildPfad(spalte.bild)}
                  alt=""
                  width={96}
                  height={96}
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

              {spalte.passt && hatSichtbarenInhalt(spalte.passt.text) && (
                <p className={styles.passt}>
                  <strong className={styles.passtTitel}>{spalte.passt.titel}</strong>
                  <span className={styles.passtText}>
                    <RichText value={spalte.passt.text} />
                  </span>
                </p>
              )}
            </div>
          ))}
        </div>

        {hinweis && (
          <div className={styles.hinweis}>
            {hinweis.bild && (
              <Image
                className={styles.hinweisSymbol}
                src={bildPfad(hinweis.bild)}
                alt=""
                width={96}
                height={96}
                unoptimized
              />
            )}
            <div className={styles.hinweisText}>
              <h3 className={styles.hinweisTitel}>{hinweis.titel}</h3>
              <p className={styles.hinweisSatz}>
                <RichText value={hinweis.text} />
              </p>
            </div>

            {hinweis.aktion && (
              <Button
                className={styles.knopf}
                variant="akzent"
                href={path(hinweis.aktion.target, locale)}
              >
                {hinweis.aktion.label}
                <span className={styles.pfeil} aria-hidden="true">
                  →
                </span>
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
