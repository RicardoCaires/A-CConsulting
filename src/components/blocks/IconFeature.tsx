import type { ReactNode } from 'react'

import type { IconName } from '@/components/ui/Icon'
import { IconCircle, type IconTone } from '@/components/ui/IconCircle'

import styles from './IconFeature.module.css'

/**
 * Icon plus kurze Aussage — der Ersatz fuer den Absatz.
 *
 * Ab jetzt gilt fuer jede Sektion: Icon oder Bild und ein Satz, statt eines
 * Blocks Fliesstext. Dieser Baustein ist die Umsetzung dieser Regel.
 *
 * Die Aussage steht als Titel, der Zusatz ist optional und bleibt kurz. Wer
 * hier mehr als zwei Zeilen braucht, schreibt einen Abschnitt, keine Aussage.
 */

export type IconFeatureItem = {
  icon: IconName
  /** Die Aussage. Knoten, weil sie eine Uebersetzungsmarke tragen kann. */
  heading: ReactNode
  body?: ReactNode
}

type FeatureProps = IconFeatureItem & {
  tone?: IconTone
  /** Ueberschriftenebene innerhalb des Abschnitts. */
  level?: 3 | 4
}

export function IconFeature({ icon, heading, body, tone = 'tint', level = 3 }: FeatureProps) {
  const Heading = `h${level}` as 'h3' | 'h4'

  return (
    <div className={styles.feature}>
      <IconCircle name={icon} tone={tone} size="md" />
      <div className={styles.text}>
        <Heading className={styles.heading}>{heading}</Heading>
        {body && <p className={styles.body}>{body}</p>}
      </div>
    </div>
  )
}

type GridProps = {
  items: readonly IconFeatureItem[]
  /** Spalten ab Desktop. Darunter wird immer gestapelt. */
  columns?: 2 | 3
  tone?: IconTone
  level?: 3 | 4
  className?: string
}

/**
 * Raster aus Aussagen. Traegt „Das uebernehmen wir" und „Weshalb A&C".
 * Semantisch eine Liste — die Reihenfolge sagt nichts aus.
 */
export function IconFeatureGrid({
  items,
  columns = 3,
  tone = 'tint',
  level = 3,
  className,
}: GridProps) {
  const classes = [styles.grid, columns === 2 ? styles.two : styles.three, className]
    .filter(Boolean)
    .join(' ')

  return (
    <ul className={classes} role="list">
      {items.map((item, index) => (
        <li key={index}>
          <IconFeature {...item} tone={tone} level={level} />
        </li>
      ))}
    </ul>
  )
}
