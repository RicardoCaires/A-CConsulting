import { Icon, type IconName } from './Icon'

import styles from './IconCircle.module.css'

/**
 * Die Kreisflaeche hinter einem Icon.
 *
 * Es gibt sie genau hier — nie als Einzelloesung in einem Seiten-Stylesheet.
 * Damit ist ausgeschlossen, dass zwei gleichrangige Icons unterschiedlich
 * aussehen, wie es vorher beim Schild der Fall war.
 *
 * Der Ton wird nicht nach Wichtigkeit vergeben, sondern nach Untergrund:
 *   `tint`    — der Normalfall auf hellen Flaechen
 *   `outline` — auf dunklen Flaechen; Kontur statt Fuellung
 *   `plain`   — ohne Flaeche, wo das Icon direkt im Text steht
 *
 * `solid` ist der einzige hervorhebende Ton und ausdruecklich ein **Zustand**
 * (aktiv, erledigt, ausgewaehlt), keine Rangordnung. Wer ihn benutzt, um eine
 * Leistung ueber eine andere zu stellen, benutzt ihn falsch.
 */

export type IconTone = 'tint' | 'outline' | 'plain' | 'solid'
export type IconCircleSize = 'sm' | 'md' | 'lg'

type Props = {
  name: IconName
  tone?: IconTone
  size?: IconCircleSize
  className?: string
  /** Nur setzen, wenn das Icon die Bedeutung allein traegt. */
  label?: string
}

/** Kantenlaenge des Icons je Kreisgroesse, in rem. */
const GLYPH: Record<IconCircleSize, number> = {
  sm: 1.125,
  md: 1.375,
  lg: 1.5,
}

export function IconCircle({ name, tone = 'tint', size = 'md', className, label }: Props) {
  const classes = [styles.circle, styles[tone], styles[size], className].filter(Boolean).join(' ')

  return (
    <span className={classes}>
      <Icon name={name} size={GLYPH[size]} label={label} />
    </span>
  )
}
