import Image from 'next/image'

import { hatSichtbarenInhalt, RichText } from '@/components/ui/RichText'
import { collectPending, type Download, type Rich } from '@/content/types'

import styles from './ChecklisteFristen.module.css'

/**
 * Checkliste, Fristen und Gebuehren auf `/steuern` — zwei weisse Flaechen.
 *
 * **Seit dem 16.09.2026 nach Ricardos HTML-Vorlage**
 * (`steuern-fristen-checkliste-neu.html`): hellblauer Grund, zwei weisse
 * Flaechen mit feiner graublauer Kontur und abgerundeten Ecken. Links
 * Kategoriezeile, Titel, Einleitung, das gelieferte Piktogramm, drei
 * Haken-Punkte, der gruene Knopf und der Hinweis; rechts Kategoriezeile,
 * Titel, Einleitung und zwei gleich grosse Fristenkarten, darunter der
 * Nachsatz. Keine Schatten, keine Verlaeufe.
 *
 * **Die Anker `checkliste` und `fristen` bleiben** — beide Flaechen sind eigene
 * Abschnitte mit eigener Ueberschrift.
 *
 * **Die Fristenzeilen in der linken Flaeche sind entfallen.** Die Vorlage
 * fuehrt sie nicht mehr; beide Angaben — 15. Maerz und die Verlaengerung bis
 * 15. November — stehen rechts in der Karte „Privatpersonen". Es geht damit
 * nichts verloren.
 *
 * **Beim Darueberfahren und bei Tastaturfokus wird die ganze Fristenkarte
 * navy**, jeder Text darin weiss, die Karte zwei Pixel angehoben. Die Karten
 * tragen `tabindex={0}`: Sie enthalten keinen Link, und ohne das gaebe es den
 * verlangten Fokuszustand nicht. Das gelieferte Piktogramm bleibt unveraendert
 * auf seinem hellen Kreis.
 *
 * **Die Werte stammen aus Ricardos Auftragstext.** Die Faelle mit offener
 * Angabe bleiben unterstuetzt: Im Produktionsbau sind die Marken ausgeblendet,
 * eine Zeile ohne bestaetigten Wert waere dort leer und faellt deshalb ganz
 * weg.
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
    eyebrow: string
    heading: string
    paragraphs: readonly Rich[]
    bild: string
    punkte: readonly string[]
    download: Download
    hinweis?: string
  }
  fristen: {
    id: string
    eyebrow: string
    heading: string
    lead?: readonly Rich[]
    gruppen: readonly {
      bild: string
      titel: string
      untertitel?: string
      frist?: Zeile
      zeilen: readonly Zeile[]
      hinweis?: string
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

/** Zeilen mit Beschriftung links und Wert rechts, in der Fristenkarte. */
function Zeilen({ zeilen }: { zeilen: readonly Zeile[] }) {
  // Im Produktionsbau sind die Marken ausgeblendet. Eine Zeile, deren Wert nur
  // aus einer offenen Angabe besteht, waere dort eine leere Zeile — sie faellt
  // darum ganz weg und kommt mit dem bestaetigten Wert zurueck.
  const sichtbar = zeilen.filter((zeile) => hatSichtbarenInhalt(zeile.wert))
  if (sichtbar.length === 0) return null

  return (
    <dl className={styles.zeilenListe}>
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
  // Karte mit Symbol und Titel. Sie faellt darum weg, bis die Werte stehen.
  const gruppen = fristen.gruppen.filter(
    (gruppe) =>
      gruppe.zeilen.some((zeile) => hatSichtbarenInhalt(zeile.wert)) ||
      (gruppe.frist ? hatSichtbarenInhalt(gruppe.frist.wert) : false),
  )

  return (
    <div
      className={styles.flaeche}
      style={hintergrund ? { backgroundImage: `url(/bilder/${hintergrund}.webp)` } : undefined}
    >
      <div className={`ac-container ${styles.container}`}>
        <div className={styles.raster}>
          {/* ---- Links: die Checkliste ------------------------------------ */}
          <section
            id={checkliste.id}
            aria-labelledby={`${checkliste.id}-titel`}
            className={styles.karte}
          >
            <p className={styles.eyebrow}>{checkliste.eyebrow}</p>
            <h2 id={`${checkliste.id}-titel`} className={styles.titel}>
              {checkliste.heading}
            </h2>
            {checkliste.paragraphs.filter(hatSichtbarenInhalt).map((absatz, index) => (
              <p key={index} className={styles.absatz}>
                <RichText value={absatz} />
              </p>
            ))}

            {/* Das gelieferte Piktogramm ist Gestaltung, kein Inhalt. */}
            <Image
              className={styles.piktogramm}
              src={bildPfad(checkliste.bild)}
              alt=""
              width={512}
              height={512}
              unoptimized
            />

            {checkliste.punkte.length > 0 && (
              <ul className={styles.punkte} role="list">
                {checkliste.punkte.map((punkt) => (
                  <li key={punkt} className={styles.punkt}>
                    {punkt}
                  </li>
                ))}
              </ul>
            )}

            <div className={styles.aktion}>
              {checkliste.download.file ? (
                <a className={styles.knopf} href={checkliste.download.file}>
                  {checkliste.download.label}
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

          {/* ---- Rechts: Fristen und Gebuehren ---------------------------- */}
          <section
            id={fristen.id}
            aria-labelledby={`${fristen.id}-titel`}
            className={styles.karte}
          >
            <div className={styles.fristenKopf}>
              <div>
                <p className={styles.eyebrow}>{fristen.eyebrow}</p>
                <h2 id={`${fristen.id}-titel`} className={styles.titel}>
                  {fristen.heading}
                </h2>
              </div>

              {fristen.lead && fristen.lead.filter(hatSichtbarenInhalt).length > 0 && (
                <div className={styles.fristenLead}>
                  {fristen.lead.filter(hatSichtbarenInhalt).map((absatz, index) => (
                    <p key={index} className={styles.absatz}>
                      <RichText value={absatz} />
                    </p>
                  ))}
                </div>
              )}
            </div>

            {gruppen.length > 0 && (
              <div className={styles.gruppen}>
                {gruppen.map((gruppe) => (
                  // Ohne Link gaebe es in der Karte nichts, was den Fokus
                  // aufnehmen koennte — und damit keinen Tastaturzustand.
                  <article key={gruppe.titel} className={styles.gruppe} tabIndex={0}>
                    <div className={styles.gruppenKopf}>
                      <Image
                        className={styles.symbol}
                        src={bildPfad(gruppe.bild)}
                        alt=""
                        width={512}
                        height={512}
                        unoptimized
                      />
                      <div>
                        <h3 className={styles.gruppenTitel}>{gruppe.titel}</h3>
                        {gruppe.untertitel && (
                          <p className={styles.gruppenUntertitel}>{gruppe.untertitel}</p>
                        )}
                      </div>
                    </div>

                    {gruppe.frist && hatSichtbarenInhalt(gruppe.frist.wert) && (
                      <p className={styles.frist}>
                        <span className={styles.fristLabel}>{gruppe.frist.label}</span>
                        <strong className={styles.fristWert}>
                          <RichText value={gruppe.frist.wert} />
                        </strong>
                      </p>
                    )}

                    <Zeilen zeilen={gruppe.zeilen} />

                    {gruppe.hinweis && <p className={styles.kartenHinweis}>{gruppe.hinweis}</p>}
                  </article>
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
