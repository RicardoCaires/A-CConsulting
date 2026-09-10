import Image from 'next/image'

import styles from './Segmente.module.css'

/**
 * Die beiden Zielgruppen auf `/versicherungen`: Privatpersonen und Unternehmen.
 *
 * Nach Ricardos Referenzgrafik vom 10.09.2026
 * (`bilder-quelle/versicherungen_segmente_referenz.png`). Bis dahin waren es
 * zwei `subsections`-Bloecke aus dem allgemeinen Blockmodell.
 *
 * Je Block: links Kategorie, Ueberschrift, ein Satz und die Bereiche als
 * Pills — rechts eine oder zwei Karten mit Piktogramm. Zwischen den beiden
 * Bloecken eine feine Linie.
 *
 * Die Vorlage zeigt oben rechts je einen leisen Zusatz („Persoenlich
 * vorausdenken", „Starke Partner fuer nachhaltige Sicherheit"). Ricardo hat
 * beide am 10.09.2026 wieder streichen lassen — A&C fuehrte damit vier
 * Zusaetze, drei davon auf dieser einen Seite.
 *
 * **Die Anker bleiben, wie sie waren** (`privatpersonen`, `unternehmen`): Die
 * Sprungmarken unter dem Seitenkopf und die Hauptnavigation zeigen darauf.
 * Ein Umbau der Gestaltung darf keine Verweise brechen.
 *
 * Die drei Piktogramme sind geliefert und stehen unveraendert da: kein Filter,
 * keine Umfaerbung, kein Beschnitt. Sie bringen ihren gruenen Kreis mit; im
 * Layout liegt keine Flaeche dahinter.
 *
 * Ricardo hat im Auftrag ausserdem `04_hintergrundmuster.png` genannt. Die
 * Datei lag nicht im Assets-Ordner; der Abschnitt steht darum auf dem ruhigen
 * Grundton der hellen Bereiche. Nachgezeichnet wird nichts.
 */

type Karte = { bild: string; titel: string; satz: string }

type Block = {
  id: string
  eyebrow: string
  heading: string
  lead?: string
  pills?: readonly string[]
  karten: readonly Karte[]
}

type Props = {
  bloecke: readonly Block[]
}

export function Segmente({ bloecke }: Props) {
  return (
    <section className={styles.abschnitt}>
      <div className={styles.inner}>
        {bloecke.map((block) => (
          <div key={block.id} id={block.id} className={styles.block}>
            <div className={styles.kopf}>
              <div className={styles.einleitung}>
                <p className={styles.eyebrow}>{block.eyebrow}</p>
                <h2 id={`${block.id}-titel`} className={styles.titel}>
                  {block.heading}
                </h2>
                {block.lead && <p className={styles.lead}>{block.lead}</p>}

                {block.pills && block.pills.length > 0 && (
                  <ul className={styles.pills} role="list">
                    {block.pills.map((pill) => (
                      <li key={pill} className={styles.pill}>
                        {pill}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <ul
              className={`${styles.karten} ${
                block.karten.length > 1 ? styles.kartenPaar : ''
              }`}
              role="list"
            >
              {block.karten.map((karte) => (
                <li key={karte.titel} className={styles.karte}>
                  <Image
                    className={styles.piktogramm}
                    src={`/bilder/${karte.bild}.webp`}
                    alt=""
                    width={192}
                    height={192}
                    sizes="88px"
                  />
                  <div className={styles.kartenText}>
                    <span className={styles.kartenStrich} aria-hidden="true" />
                    <h3>{karte.titel}</h3>
                    <p>{karte.satz}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
