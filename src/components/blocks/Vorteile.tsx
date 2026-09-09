import type { ReactNode } from 'react'

import styles from './Vorteile.module.css'

/**
 * Weshalb A&C — hoechstens vier Punkte.
 *
 * Der Abschnitt steht auf der einen wiederkehrenden Navy-Flaeche und ist der
 * einzige dunkle Block in der Mitte der Seite. Er traegt damit den Rhythmus:
 * davor und danach Weiss und Off-White.
 *
 * Keine Icons. Vier Zeichen nebeneinander waeren Dekoration, und die Punkte
 * tragen sich selbst. Was ordnet, ist ein kurzer gruener Strich — dasselbe
 * Element wie der Marker im Corporate Design.
 *
 * Keine Zahlen, keine Superlative, keine Auszeichnungen. Was hier steht, muss
 * ein Kunde nach dem ersten Gespraech bestaetigen koennen.
 */

export type Vorteil = {
  titel: string
  /** Ein Satz. Zwei sind schon zu viel. */
  satz: ReactNode
}

type Props = {
  punkte: readonly Vorteil[]
}

export function Vorteile({ punkte }: Props) {
  return (
    <ul className={styles.raster} role="list">
      {punkte.map((punkt) => (
        <li key={punkt.titel} className={styles.punkt}>
          <hr className={styles.strich} />
          <h3 className={styles.titel}>{punkt.titel}</h3>
          <p className={styles.satz}>{punkt.satz}</p>
        </li>
      ))}
    </ul>
  )
}
