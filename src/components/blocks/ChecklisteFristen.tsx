import Image from 'next/image'

import { hatSichtbarenInhalt, RichText } from '@/components/ui/RichText'
import { collectPending, type Download, type Rich } from '@/content/types'

import styles from './ChecklisteFristen.module.css'

/**
 * Checkliste und Fristen auf `/steuern` — zwei Kacheln und ein Bildstreifen.
 *
 * Nach Ricardos zweiter Referenzgrafik vom 14.09.2026: links die Checkliste
 * mit der gelieferten Abbildung, dem Knopf und einem Hinweis; rechts die
 * Fristen in zwei Unterkarten mit den gelieferten Symbolen; darunter ein
 * breiter Panoramastreifen mit zwei Schildchen.
 *
 * **Die Anker `checkliste` und `fristen` bleiben** — beide Kacheln sind eigene
 * Abschnitte mit eigener Ueberschrift.
 *
 * **Die Werte stammen aus Ricardos Auftragstext vom 14.09.2026.** Bis dahin
 * standen sie als offene Angabe. Die Faelle mit offener Angabe bleiben
 * unterstuetzt: Im Produktionsbau sind die Marken ausgeblendet, eine Zeile
 * ohne bestaetigten Wert waere dort leer und faellt deshalb ganz weg.
 *
 * **Die Kategoriezeile „A&C Consulting" ueber beiden Titeln ist am 14.09.2026
 * auf Ricardos Anweisung entfallen.**
 *
 * **Die Fristenzeilen der linken Kachel stehen ohne Rahmen.** Sie standen in
 * einer umrandeten, leicht getoenten Box; Ricardo hat am 14.09.2026 verlangt,
 * dass nur die Raender durchsichtig werden — der Inhalt bleibt. Geometrie und
 * Ausrichtung sind darum unveraendert, Rahmen und Fuellung stehen auf
 * `transparent`.
 *
 * Die Einreichfrist nennt seither den 15. Maerz, wie die rechte Kachel.
 *
 * **Der Bildstreifen erscheint nur mit einer lizenzierten Datei.** Die
 * gelieferte Vorschau traegt ein Wasserzeichen und misst 505 px; sie wird
 * nicht ausgeliefert. Ohne `banner` bleibt der Streifen weg — kein Platzhalter.
 *
 * Der Knopf wird nur dann zum Link, wenn das PDF vorliegt. Fehlt es, steht die
 * Beschriftung mit dem Vermerk fuer Fehlendes — kein Knopf ins Leere.
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
    gruppen: readonly {
      bild: string
      titel: string
      untertitel?: string
      zeilen: readonly Zeile[]
    }[]
    nachsatz?: readonly Rich[]
  }
  banner?: {
    /** Lizenzierte Aufnahme, Dateiname unter `public/bilder/` ohne Endung. */
    bild: string
    alt: string
    ort: string
    bildunterschrift?: string
  }
}

const bildPfad = (datei: string) => `/bilder/${datei}.svg`

/**
 * Zeilen mit Beschriftung links und Wert rechts.
 *
 * `variante` unterscheidet die beiden Stellen: `box` sind die Fristenzeilen
 * der linken Kachel, `liste` die Aufzaehlung in den Unterkarten rechts.
 */
function Zeilen({
  zeilen,
  variante,
}: {
  zeilen: readonly Zeile[]
  variante: 'box' | 'liste'
}) {
  // Im Produktionsbau sind die Marken ausgeblendet. Eine Zeile, deren Wert nur
  // aus einer offenen Angabe besteht, waere dort eine leere Zeile — sie faellt
  // darum ganz weg und kommt mit dem bestaetigten Wert zurueck.
  const sichtbar = zeilen.filter((zeile) => hatSichtbarenInhalt(zeile.wert))
  if (sichtbar.length === 0) return null

  return (
    <dl className={variante === 'box' ? styles.zeilenBox : styles.zeilenListe}>
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

export function ChecklisteFristen({
  hintergrund,
  folgt,
  checkliste,
  fristen,
  banner,
}: Props) {
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
        <div className={styles.raster}>
          <section
            id={checkliste.id}
            aria-labelledby={`${checkliste.id}-titel`}
            className={styles.karte}
          >
            <div className={styles.kopf}>
              <div className={styles.kopfText}>
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
                <Zeilen zeilen={checkliste.fristen} variante="box" />
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
                      <div>
                        <h3 className={styles.gruppenTitel}>{gruppe.titel}</h3>
                        {gruppe.untertitel && (
                          <p className={styles.gruppenUntertitel}>{gruppe.untertitel}</p>
                        )}
                      </div>
                    </div>
                    <Zeilen zeilen={gruppe.zeilen} variante="liste" />
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

        {banner && (
          <figure className={styles.banner}>
            <Image
              className={styles.bannerBild}
              src={`/bilder/${banner.bild}.webp`}
              alt={banner.alt}
              width={2400}
              height={578}
              sizes="(min-width: 1600px) 1560px, 100vw"
              unoptimized
            />
            <p className={`${styles.schild} ${styles.schildOben}`}>{banner.ort}</p>
            {banner.bildunterschrift && (
              <figcaption className={`${styles.schild} ${styles.schildUnten}`}>
                {banner.bildunterschrift}
              </figcaption>
            )}
          </figure>
        )}
      </div>
    </div>
  )
}
