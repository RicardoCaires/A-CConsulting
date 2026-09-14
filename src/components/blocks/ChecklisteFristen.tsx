import Image from 'next/image'

import { hatSichtbarenInhalt, RichText } from '@/components/ui/RichText'
import { collectPending, type Download, type Rich } from '@/content/types'

import styles from './ChecklisteFristen.module.css'

/**
 * Checkliste und Fristen auf `/steuern` — zwei Karten nebeneinander.
 *
 * Nach Ricardos Referenzgrafik vom 14.09.2026: links die Checkliste mit der
 * gelieferten Abbildung, einer kleinen Fristentabelle, dem Knopf und einem
 * Hinweis darunter; rechts die Fristen, aufgeteilt in zwei Gruppen mit je
 * einem gelieferten Symbol.
 *
 * **Die Anker `checkliste` und `fristen` bleiben** — beide Karten sind eigene
 * Abschnitte mit eigener Ueberschrift.
 *
 * **Die Zahlen der Grafik sind nicht uebernommen.** Sie widersprechen sich
 * dort (31. Maerz gegen 15. Maerz) und nennen unbelegte Gebuehren; die Quelle
 * fuehrt Einreichefrist und Verlaengerung als offene Angaben. Sie stehen
 * darum als offene Angabe und erscheinen sichtbar markiert.
 *
 * **Das Bern-Foto der Grafik fehlt bewusst.** Die gelieferte Datei traegt ein
 * Wasserzeichen und misst 505 px — beides schliesst eine Veroeffentlichung
 * aus. Kommt eine lizenzierte Fassung, tritt sie unter die beiden Karten.
 *
 * Der Knopf wird nur dann zum Link, wenn die Datei vorliegt. Fehlt sie, steht
 * die Beschriftung mit dem Vermerk fuer Fehlendes — kein Knopf ins Leere.
 */

type Zeile = { label: string; wert: Rich }

type Props = {
  hintergrund?: string
  /** Vermerk fuer eine Datei, die noch fehlt. Kommt aus `ui.pageComing.badge`. */
  folgt: string
  checkliste: {
    id: string
    heading: string
    paragraphs: readonly Rich[]
    bild: string
    fristenTitel?: string
    fristen?: readonly Zeile[]
    download: Download
    hinweis?: string
  }
  fristen: {
    id: string
    heading: string
    lead?: readonly Rich[]
    gruppen: readonly { bild: string; titel: string; zeilen: readonly Zeile[] }[]
    nachsatz?: readonly Rich[]
  }
}

const bildPfad = (datei: string) => `/bilder/${datei}.svg`

function Zeilen({ zeilen }: { zeilen: readonly Zeile[] }) {
  // Im Produktionsbau sind die Marken ausgeblendet. Eine Zeile, deren Wert nur
  // aus einer offenen Angabe besteht, waere dort eine leere Zeile — sie faellt
  // darum ganz weg und kommt mit dem bestaetigten Wert zurueck.
  const sichtbar = zeilen.filter((zeile) => hatSichtbarenInhalt(zeile.wert))
  if (sichtbar.length === 0) return null

  return (
    <dl className={styles.zeilen}>
      {sichtbar.map((zeile) => (
        // Eine offene Angabe ist viel breiter als ein Datum. Solche Zeilen
        // laufen zweizeilig; mit dem bestaetigten Wert stehen sie wieder
        // nebeneinander.
        <div
          key={zeile.label}
          className={
            collectPending(zeile.wert).length > 0
              ? `${styles.zeile} ${styles.zeileOffen}`
              : styles.zeile
          }
        >
          <dt className={styles.label}>{zeile.label}</dt>
          <dd className={styles.wert}>
            <RichText value={zeile.wert} />
          </dd>
        </div>
      ))}
    </dl>
  )
}

export function ChecklisteFristen({ hintergrund, folgt, checkliste, fristen }: Props) {
  // Eine Gruppe ohne bestaetigten Wert waere im Produktionsbau eine leere
  // Kachel mit Symbol und Titel. Sie faellt darum weg, bis die Werte stehen.
  const gruppen = fristen.gruppen.filter((gruppe) =>
    gruppe.zeilen.some((zeile) => hatSichtbarenInhalt(zeile.wert)),
  )

  return (
    <div
      className={styles.flaeche}
      style={hintergrund ? { backgroundImage: `url(/bilder/${hintergrund}.webp)` } : undefined}
    >
      <div className={`ac-container ${styles.container}`}>
        <section
          id={checkliste.id}
          aria-labelledby={`${checkliste.id}-titel`}
          className={styles.karte}
        >
          <div className={styles.kopf}>
            <div>
              <h2 id={`${checkliste.id}-titel`} className={styles.titel}>
                {checkliste.heading}
              </h2>
              {checkliste.paragraphs.filter(hatSichtbarenInhalt).map((absatz, index) => (
                <p key={index} className={styles.absatz}>
                  <RichText value={absatz} />
                </p>
              ))}
            </div>

            {/* Die gelieferte Abbildung ist Gestaltung, kein Inhalt. */}
            <Image
              className={styles.abbildung}
              src={bildPfad(checkliste.bild)}
              alt=""
              width={900}
              height={1100}
              unoptimized
            />
          </div>

          {checkliste.fristen?.some((zeile) => hatSichtbarenInhalt(zeile.wert)) && (
            <div className={styles.tabelle}>
              {checkliste.fristenTitel && (
                <h3 className={styles.zwischentitel}>{checkliste.fristenTitel}</h3>
              )}
              <Zeilen zeilen={checkliste.fristen} />
            </div>
          )}

          <div className={styles.aktion}>
            {checkliste.download.file ? (
              <a className={styles.knopf} href={checkliste.download.file}>
                {checkliste.download.label}
                <span className={styles.pfeil} aria-hidden="true">
                  →
                </span>
              </a>
            ) : (
              <p className={`${styles.knopf} ${styles.knopfOhneDatei}`}>
                {checkliste.download.label}
                <span className={styles.folgt}>{folgt}</span>
              </p>
            )}

            {checkliste.hinweis && <p className={styles.hinweis}>{checkliste.hinweis}</p>}
          </div>
        </section>

        <section
          id={fristen.id}
          aria-labelledby={`${fristen.id}-titel`}
          className={styles.karte}
        >
          <h2 id={`${fristen.id}-titel`} className={styles.titel}>
            {fristen.heading}
          </h2>

          {fristen.lead?.filter(hatSichtbarenInhalt).map((absatz, index) => (
            <p key={index} className={styles.absatz}>
              <RichText value={absatz} />
            </p>
          ))}

          {gruppen.length > 0 && (
            <div className={styles.gruppen}>
              {gruppen.map((gruppe) => (
                <div key={gruppe.titel} className={styles.gruppe}>
                  <div className={styles.gruppenKopf}>
                    <Image
                      className={styles.symbol}
                      src={bildPfad(gruppe.bild)}
                      alt=""
                      width={700}
                      height={700}
                      unoptimized
                    />
                    <h3 className={styles.gruppenTitel}>{gruppe.titel}</h3>
                  </div>
                  <Zeilen zeilen={gruppe.zeilen} />
                </div>
              ))}
            </div>
          )}

          {fristen.nachsatz?.filter(hatSichtbarenInhalt).map((absatz, index) => (
            <p key={index} className={styles.nachsatz}>
              <RichText value={absatz} />
            </p>
          ))}
        </section>
      </div>
    </div>
  )
}
