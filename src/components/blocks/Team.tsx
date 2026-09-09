import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
import { hatSichtbarenInhalt, RichText } from '@/components/ui/RichText'
import type { Rich } from '@/content/types'

import styles from './Team.module.css'

/**
 * Die beiden Inhaber.
 *
 * Auf einer Seite, die mit „persoenliche Ansprechpartner" wirbt, ist das der
 * Beleg. Darum steht hier kein Raster aus kleinen Kaertchen, sondern zwei
 * grosszuegige Bloecke: Portraet, Name, Funktion, zwei bis drei Saetze.
 *
 * Kein Lebenslauf. Wer mehr wissen will, geht auf „Ueber uns".
 *
 * Die Portraets fehlen noch. Bis sie vorliegen, steht dort eine ruhige Flaeche
 * im richtigen Format (4:5) — kein Stockfoto und keine Initialen in einem
 * Kreis. Das Foto tritt spaeter an dieselbe Stelle, ohne dass sich das Layout
 * verschiebt.
 */

export type Mitglied = {
  name: string
  /** Funktion im Unternehmen. Belegt, nicht geraten. */
  funktion: string
  /**
   * Zwei bis drei kurze Saetze — nur wo sie hingehoeren.
   *
   * Auf der Startseite bleiben sie weg: Dort genuegen Name und Zustaendigkeit,
   * alles Weitere waere ein Lebenslauf an der falschen Stelle. Auf „Ueber uns"
   * stehen sie.
   */
  saetze?: readonly Rich[]
  bild: { label: string; note?: string }
}

type Props = {
  mitglieder: readonly Mitglied[]
}

export function Team({ mitglieder }: Props) {
  return (
    <ul className={styles.raster} role="list">
      {mitglieder.map((person) => (
        <li key={person.name} className={styles.person}>
          <div className={styles.bild}>
            <ImagePlaceholder label={person.bild.label} note={person.bild.note} />
          </div>

          <div className={styles.angaben}>
            <h3 className={styles.name}>{person.name}</h3>
            <p className={styles.funktion}>{person.funktion}</p>

            {(person.saetze ?? []).filter(hatSichtbarenInhalt).map((satz, index) => (
              <p key={index} className={styles.satz}>
                <RichText value={satz} />
              </p>
            ))}
          </div>
        </li>
      ))}
    </ul>
  )
}
