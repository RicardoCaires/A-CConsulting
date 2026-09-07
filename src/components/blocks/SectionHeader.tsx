import type { ReactNode } from 'react'

import styles from './SectionHeader.module.css'

/**
 * Kopf eines Abschnitts: Vorzeile, Ueberschrift, Einleitungssatz.
 *
 * Jeder Baustein benutzt diesen Kopf. Ohne ihn wuerde jede Sektion ihre
 * Ueberschrift selbst gestalten, und genau daraus entstehen die
 * Einzelloesungen, die es nicht mehr geben soll.
 *
 * Die Ueberschriftenebene wird gesetzt, nicht geraten: Auf einer Seite gibt es
 * genau eine `h1`, Abschnitte tragen `h2`, Unterpunkte `h3`. Der Baustein
 * erzwingt das nicht — er macht es sichtbar.
 */

type Props = {
  eyebrow?: string
  heading: ReactNode
  /** 1 nur im Seitenkopf. Abschnitte sind 2, Unterabschnitte 3. */
  level?: 1 | 2 | 3
  lead?: ReactNode
  /** Sprungziel; die Sektion darum traegt dann `aria-labelledby`. */
  id?: string
  /** Kurzer gruener Strich ueber der Ueberschrift. Sparsam einsetzen. */
  marker?: boolean
  className?: string
}

export function SectionHeader({
  eyebrow,
  heading,
  level = 2,
  lead,
  id,
  marker = false,
  className,
}: Props) {
  const Heading = `h${level}` as 'h1' | 'h2' | 'h3'

  return (
    <div className={[styles.header, className].filter(Boolean).join(' ')}>
      {marker && <hr className="ac-marker" />}
      {eyebrow && <p className="ac-eyebrow">{eyebrow}</p>}
      <Heading id={id} className={styles.heading}>
        {heading}
      </Heading>
      {lead && <p className={`ac-lead ${styles.lead}`}>{lead}</p>}
    </div>
  )
}
