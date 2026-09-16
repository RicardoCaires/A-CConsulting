import Image from 'next/image'

import { Button } from '@/components/ui/Button'
import { hatSichtbarenInhalt, RichText } from '@/components/ui/RichText'
import type { PageRef, Rich } from '@/content/types'
import type { Locale } from '@/i18n/config'
import { path } from '@/i18n/routes'

import styles from './Rechtsformen.module.css'

/**
 * „Einzelunternehmen oder GmbH?" auf `/firmengruendung` — zwei Karten im
 * Vergleich.
 *
 * **Seit dem 16.09.2026 nach Ricardos HTML-Vorlage**
 * (`rechtsformvergleich-neu.html`): Kategoriezeile und Titel links,
 * Einleitung rechts; darunter zwei exakt gleich hohe Karten mit Piktogramm,
 * Name, gruener Kennzeichnung, fuenf Kriterien und dem Orientierungshinweis
 * mit gruener Linie; darunter die breite Flaeche mit gruenem Knopf und
 * dezent die Quellenzeile.
 *
 * Jedes Kriterium ist ein Paar aus `<dt>` und `<dd>`: links die kleine
 * Versalzeile, rechts die hervorgehobene Aussage und darunter der Zusatz.
 * Keine Tabelle, keine Spaltenrahmen — nur feine waagrechte Linien.
 *
 * **Beim Darueberfahren und bei Tastaturfokus wird die ganze Karte navy.** Die
 * Karten tragen `tabindex="0"`: Sie enthalten keinen Link, und der Auftrag
 * verlangt denselben Zustand bei Tastaturfokus.
 *
 * Der Anker `rechtsform` bleibt.
 */

type Zeile = { label: string; wert: Rich; zusatz?: Rich }

type Props = {
  id: string
  eyebrow?: string
  heading: string
  lead?: readonly Rich[]
  spalten: readonly {
    bild: string
    titel: string
    untertitel?: string
    zeilen: readonly Zeile[]
    /** Die Einordnung unten in der Karte: fuer wen die Rechtsform passt. */
    passt?: { titel: string; text: Rich }
  }[]
  /** Breite Flaeche unter den Karten. */
  hinweis?: { titel: string; text: Rich; aktion?: PageRef }
  /** Dezente Zeile unter dem ganzen Vergleich. */
  quelle?: string
  locale: Locale
}

const bildPfad = (datei: string) => `/bilder/${datei}.svg`

export function Rechtsformen({
  id,
  eyebrow,
  heading,
  lead,
  spalten,
  hinweis,
  quelle,
  locale,
}: Props) {
  const titelId = `${id}-titel`

  return (
    <section id={id} aria-labelledby={titelId} className={styles.abschnitt}>
      <div className="ac-container">
        <div className={styles.kopf}>
          <div>
            {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
            <h2 id={titelId} className={styles.titel}>
              {heading}
            </h2>
          </div>
          {lead?.filter(hatSichtbarenInhalt).map((absatz, index) => (
            <p key={index} className={styles.lead}>
              <RichText value={absatz} />
            </p>
          ))}
        </div>

        <div className={styles.raster}>
          {spalten.map((spalte) => (
            <article
              key={spalte.titel}
              className={styles.karte}
              tabIndex={0}
              aria-labelledby={`${id}-${spalte.titel}`}
            >
              <div className={styles.kartenKopf}>
                <Image
                  className={styles.symbol}
                  src={bildPfad(spalte.bild)}
                  alt=""
                  width={512}
                  height={512}
                  unoptimized
                />
                <div>
                  <h3 id={`${id}-${spalte.titel}`} className={styles.kartenTitel}>
                    {spalte.titel}
                  </h3>
                  {spalte.untertitel && <p className={styles.kennzeichen}>{spalte.untertitel}</p>}
                </div>
              </div>

              <dl className={styles.kriterien}>
                {spalte.zeilen.map((zeile) => (
                  <div key={zeile.label} className={styles.kriterium}>
                    <dt className={styles.label}>{zeile.label}</dt>
                    <dd className={styles.inhalt}>
                      <strong className={styles.wert}>
                        <RichText value={zeile.wert} />
                      </strong>
                      {zeile.zusatz && (
                        <span className={styles.zusatz}>
                          <RichText value={zeile.zusatz} />
                        </span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>

              {spalte.passt && (
                <div className={styles.passt}>
                  <p className={styles.passtTitel}>{spalte.passt.titel}</p>
                  <p className={styles.passtText}>
                    <RichText value={spalte.passt.text} />
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>

        {hinweis && (
          <aside className={styles.hinweis}>
            <div>
              <h3 className={styles.hinweisTitel}>{hinweis.titel}</h3>
              <p className={styles.hinweisText}>
                <RichText value={hinweis.text} />
              </p>
            </div>
            {hinweis.aktion && (
              <Button href={path(hinweis.aktion.target, locale)} variant="akzent">
                {hinweis.aktion.label} →
              </Button>
            )}
          </aside>
        )}

        {quelle && <p className={styles.quelle}>{quelle}</p>}
      </div>
    </section>
  )
}
