import type { AnchorHTMLAttributes } from 'react'

import styles from './Button.module.css'

/**
 * Handlungsknopf, immer als Link.
 *
 * Es gibt genau zwei Auspraegungen. Die Flaeche ist Navy, nie Gruen — Gruen
 * bleibt Akzent und wird nie grossflaechig eingesetzt.
 */

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  variant?: 'primary' | 'ghost'
}

export function Button({ href, variant = 'primary', className, children, ...rest }: Props) {
  const classes = [styles.button, styles[variant], className].filter(Boolean).join(' ')

  return (
    <a className={classes} href={href} {...rest}>
      {children}
    </a>
  )
}
