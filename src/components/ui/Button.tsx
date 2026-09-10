import type { AnchorHTMLAttributes } from 'react'

import styles from './Button.module.css'

/**
 * Handlungsknopf, immer als Link.
 *
 * Drei Auspraegungen. Die Flaeche ist im Normalfall Navy — Gruen bleibt
 * Akzent und wird nie grossflaechig eingesetzt.
 *
 * `akzent` ist die Ausnahme und am 10.09.2026 auf Ricardos ausdrueckliche
 * Anweisung entstanden: Die Referenzgrafik fuer den Leistungsabschnitt zeigt
 * dort einen gruenen Knopf. Ein Knopf ist die kleinste Flaeche, auf der das
 * noch vertretbar ist. Sie gilt fuer **einen** Knopf auf der Startseite und
 * wird nicht zur zweiten Standardfarbe — im Zweifel `primary`.
 */

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  variant?: 'primary' | 'ghost' | 'akzent'
}

export function Button({ href, variant = 'primary', className, children, ...rest }: Props) {
  const classes = [styles.button, styles[variant], className].filter(Boolean).join(' ')

  return (
    <a className={classes} href={href} {...rest}>
      {children}
    </a>
  )
}
