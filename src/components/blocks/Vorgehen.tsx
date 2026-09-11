import Image from 'next/image'

import styles from './Vorgehen.module.css'

/**
 * „So laeuft eine Zusammenarbeit an" auf `/treuhand` — vier Schritte als
 * Karten, verbunden durch eine feine Linie.
 *
 * Nach Ricardos Referenzgrafik vom 11.09.2026: Kategoriezeile mit gruenem
 * Strich dahinter, grosser Titel, ein Satz, darunter vier weisse Karten. Je
 * Karte die gelieferte Nummer, der Titel, ein kurzer gruener Strich und der
 * Text. Zwischen den Karten eine Linie mit einem gruenen Punkt.
 *
 * **Nicht** `StepList`: Der Baustein traegt die Ablaeufe der uebrigen Seiten
 * und bleibt, wie er ist. Die vier Schritte sind unveraendert uebernommen.
 *
 * **Der Abschnitt bleibt in der Flaechenfolge der Seite**, steht aber auf
 * Ricardos Anweisung hellblau. `PageBlocks` setzt dafuer `vorgehenFlaeche`
 * statt der zugewiesenen Flaeche — der Wechsel darunter verschiebt sich nicht.
 *
 * Eine geordnete Liste, weil die Reihenfolge Inhalt ist. Die Nummer steht als
 * Bild in der Karte und traegt darum einen leeren Alternativtext: Die Liste
 * sagt die Reihenfolge bereits.
 */

/** Hellblauer Grund des Abschnitts, gesetzt von `PageBlocks`. */
export const vorgehenFlaeche = styles.flaeche

type Props = {
  headingId?: string
  eyebrow: string
  heading: string
  lead: string
  schritte: readonly { bild: string; titel: string; satz: string }[]
}

export function Vorgehen({ headingId, eyebrow, heading, lead, schritte }: Props) {
  return (
    <div>
      <div className={styles.kopf}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 id={headingId} className={styles.titel}>
          {heading}
        </h2>
        <p className={styles.lead}>{lead}</p>
      </div>

      <ol className={styles.schritte} role="list">
        {schritte.map((schritt) => (
          <li key={schritt.titel} className={styles.schritt}>
            <Image
              className={styles.nummer}
              src={`/bilder/treuhand/${schritt.bild}.svg`}
              alt=""
              width={512}
              height={512}
              unoptimized
            />
            <h3 className={styles.schrittTitel}>{schritt.titel}</h3>
            <span className={styles.strich} aria-hidden="true" />
            <p className={styles.satz}>{schritt.satz}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
