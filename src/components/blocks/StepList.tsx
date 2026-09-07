import type { ReactNode } from 'react'

import styles from './StepList.module.css'

/**
 * Nummerierter Ablauf.
 *
 * Auf jeder Leistungsseite das wichtigste Element: Es nimmt die Hemmschwelle,
 * weil der Kunde sieht, was auf ihn zukommt. Darum ist der Ablauf sichtbar ein
 * Ablauf — Zahl, Verbindungslinie, ein Schritt nach dem anderen — und nicht
 * eine Aufzaehlung mit Zahlen davor.
 *
 * Die Zahl ist Gestaltung; die Reihenfolge liegt in der `<ol>`. Darum ist sie
 * fuer Hilfstechnik ausgeblendet und wird nicht doppelt vorgelesen.
 *
 * Anzahl und Wortlaut der Schritte je Seite sind vorgegeben und werden nicht
 * vereinheitlicht — Versicherungen und Steuern haben drei Schritte, Treuhand
 * vier, der Treuhaenderwechsel fuenf, die Firmengruendung sechs.
 */

export type Step = {
  /** Knoten, weil der Titel eine Uebersetzungsmarke tragen kann. */
  heading: ReactNode
  body?: ReactNode
}

type Props = {
  steps: readonly Step[]
  /** `flow` stellt die Schritte ab Desktop nebeneinander. */
  layout?: 'stack' | 'flow'
  className?: string
}

export function StepList({ steps, layout = 'stack', className }: Props) {
  const classes = [styles.steps, layout === 'flow' ? styles.flow : styles.stack, className]
    .filter(Boolean)
    .join(' ')

  return (
    <ol className={classes}>
      {steps.map((step, index) => (
        <li key={index} className={styles.step}>
          <span className={styles.number} aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className={styles.heading}>{step.heading}</h3>
          {step.body && <p className={styles.body}>{step.body}</p>}
        </li>
      ))}
    </ol>
  )
}
