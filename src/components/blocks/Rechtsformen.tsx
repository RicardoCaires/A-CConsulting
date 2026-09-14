import Image from 'next/image'

import { hatSichtbarenInhalt, RichText } from '@/components/ui/RichText'
import type { Rich } from '@/content/types'

import styles from './Rechtsformen.module.css'

/**
 * „Einzelfirma oder GmbH?" auf `/firmengruendung` — zwei Karten im Vergleich.
 *
 * Nach Ricardos Referenzgrafik vom 14.09.2026: Kategoriezeile, Titel, ein
 * Satz, darunter zwei Karten mit je einem gelieferten Symbol und denselben
 * Merkmalen untereinander; unten ein getoenter Hinweis.
 *
 * **Der Wortlaut ist unveraendert.** Der Abschnitt stand vorher als sechs
 * Absaetze, die beide Rechtsformen in je einem Satz gegenueberstellen. Fuer
 * die zwei Spalten sind diese Absaetze an der Satzgrenze geteilt — jeder Satz
 * steht so, wie er in der Quelle steht.
 *
 * **Die Zahl „CHF 20'000" der Grafik ist nicht uebernommen.** Schritt 4 fuehrt
 * die Hoehe des Stammkapitals als fachlich zu pruefen; eine Zahl, die niemand
 * geprueft hat, gehoert nicht auf die Seite.
 *
 * Die beiden Zusaetze der Grafik („Einfach starten", „Stabil wachsen") sind
 * ebenfalls nicht uebernommen.
 *
 * Der Anker `rechtsform` bleibt.
 */

type Zeile = { label: string; wert: Rich }

type Props = {
  id: string
  eyebrow?: string
  heading: string
  lead?: readonly Rich[]
  hintergrund?: string
  spalten: readonly { bild: string; titel: string; zeilen: readonly Zeile[] }[]
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
                <h3 className={styles.kartenTitel}>{spalte.titel}</h3>
              </div>

              <dl className={styles.zeilen}>
                {spalte.zeilen.map((zeile) => (
                  <div key={zeile.label} className={styles.zeile}>
                    <dt className={styles.label}>{zeile.label}</dt>
                    <dd className={styles.wert}>
                      <RichText value={zeile.wert} />
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
              className={styles.symbol}
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
