import Image from 'next/image'

import { hatSichtbarenInhalt, RichText } from '@/components/ui/RichText'
import { Button } from '@/components/ui/Button'
import type { Download, Rich } from '@/content/types'

import styles from './Checkliste.module.css'

/**
 * Die Checkliste zum Herunterladen — eine Karte mit Text und Abbildung.
 *
 * Nach Ricardos HTML-Vorlage vom 14.09.2026
 * (`bilder-quelle/firmengruendung_checkliste/vorlage.html`): Kategoriezeile,
 * Titel, ein Satz, der gruene Knopf und darunter der Hinweis; rechts die
 * gelieferte Abbildung.
 *
 * **Der Knopf hat zwei Zustaende.** Liegt die Datei vor, ist er der gruene
 * Knopf der Startseite (`Button variant="akzent"`) und verlinkt sie. Fehlt
 * sie, steht an derselben Stelle ein `<button disabled>` in derselben Form,
 * aber sichtbar abgeschaltet — und der Hinweis darunter sagt, warum. Der
 * Hinweis ist ueber `aria-describedby` mit dem Knopf verbunden, damit auch
 * Vorlesewerkzeuge den Grund nennen.
 *
 * Ein abgeschalteter Knopf sieht hier nicht nur blasser aus: Gruen auf halber
 * Deckung traegt den weissen Text nicht mehr. Die Flaeche wird darum hell und
 * die Schrift navy — dieselbe Form, klar als nicht anklickbar zu erkennen.
 */

type Props = {
  id: string
  eyebrow?: string
  heading: string
  paragraphs: readonly Rich[]
  download: Download
  /** Steht nur, solange die Datei fehlt. */
  hinweis?: string
  /** Gelieferte Abbildung, Dateiname unter `public/bilder/` ohne Endung. */
  bild?: string
}

export function Checkliste({
  id,
  eyebrow,
  heading,
  paragraphs,
  download,
  hinweis,
  bild,
}: Props) {
  const hinweisId = `${id}-hinweis`

  return (
    <section id={id} aria-labelledby={`${id}-titel`} className={styles.abschnitt}>
      <div className={`ac-container ${styles.container}`}>
        <div className={styles.karte}>
          <div className={styles.text}>
            {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
            <h2 id={`${id}-titel`} className={styles.titel}>
              {heading}
            </h2>

            {paragraphs.filter(hatSichtbarenInhalt).map((absatz, index) => (
              <p key={index} className={styles.satz}>
                <RichText value={absatz} />
              </p>
            ))}

            {download.file ? (
              <Button className={styles.knopf} variant="akzent" href={download.file} download>
                {download.label}
                <span className={styles.pfeil} aria-hidden="true">
                  ↓
                </span>
              </Button>
            ) : (
              <>
                <button
                  type="button"
                  className={`${styles.knopf} ${styles.knopfAus}`}
                  disabled
                  aria-describedby={hinweis ? hinweisId : undefined}
                >
                  {download.label}
                  <span className={styles.pfeil} aria-hidden="true">
                    ↓
                  </span>
                </button>

                {hinweis && (
                  <p id={hinweisId} className={styles.hinweis}>
                    {hinweis}
                  </p>
                )}
              </>
            )}
          </div>

          {bild && (
            /* Die gelieferte Abbildung ist Gestaltung, kein Inhalt. */
            <Image
              className={styles.bild}
              src={`/bilder/${bild}.svg`}
              alt=""
              width={220}
              height={220}
              unoptimized
            />
          )}
        </div>
      </div>
    </section>
  )
}
