import type { ReactNode } from 'react'

import styles from './Section.module.css'

/**
 * Der Abschnittsrahmen. Ab Schritt 3 baut jede Vorlage darauf auf.
 *
 * Drei Flaechen, mehr nicht: `weiss`, `hell`, `dunkel`. Der Wechsel zwischen
 * ihnen ist das Mittel gegen die Textlastigkeit — nicht mehr Icons. Eine Seite
 * liest sich als Folge unterscheidbarer Abschnitte, auch wenn in jedem nur
 * Text steht.
 *
 * Zwei Regeln, und sie sind erzwungen, nicht empfohlen:
 *   1. Nie zwei gleiche Flaechen hintereinander.
 *   2. Hoechstens zwei dunkle Flaechen je Seite.
 *
 * `pruefeFlaechen` wirft, wenn eine Vorlage dagegen verstoesst. Da alle Seiten
 * beim Bauen erzeugt werden, bricht das den Build — die Regel kann also nicht
 * versehentlich umgangen werden.
 *
 * Der senkrechte Abstand kommt aus genau einem Token (`--ac-section-y`). Es
 * gibt keine engere und keine weitere Variante; wo ein Abschnitt anders wirken
 * soll, aendert die Flaeche das, nicht der Abstand.
 */

export type Surface = 'weiss' | 'hell' | 'dunkel'

const KLASSE: Record<Surface, string> = {
  weiss: '',
  hell: 'ac-section--tint',
  dunkel: 'ac-section--navy on-navy',
}

/**
 * Prueft die Flaechenfolge einer Seite und wirft bei einem Verstoss.
 *
 * Wird von jeder Vorlage vor dem Ausgeben aufgerufen. Die Meldung nennt Seite
 * und Stelle, damit im Buildprotokoll sofort klar ist, wo es klemmt.
 */
export function pruefeFlaechen(flaechen: readonly Surface[], seite: string): void {
  for (let i = 1; i < flaechen.length; i++) {
    if (flaechen[i] === flaechen[i - 1]) {
      throw new Error(
        `Flaechenregel verletzt auf „${seite}“: Abschnitt ${i + 1} hat dieselbe Flaeche ` +
          `(${flaechen[i]}) wie Abschnitt ${i}. Zwei gleiche Flaechen duerfen nicht ` +
          `aufeinanderfolgen.`,
      )
    }
  }

  const dunkel = flaechen.filter((f) => f === 'dunkel').length
  if (dunkel > 2) {
    throw new Error(
      `Flaechenregel verletzt auf „${seite}“: ${dunkel} dunkle Abschnitte. ` +
        `Erlaubt sind hoechstens zwei.`,
    )
  }
}

type Props = {
  surface?: Surface
  /** Sprungziel des Abschnitts. */
  id?: string
  /** Kennung der Ueberschrift, die den Abschnitt benennt. */
  labelledBy?: string
  /** Enger Lesebereich statt voller Containerbreite. */
  measure?: boolean
  className?: string
  children: ReactNode
}

export function Section({
  surface = 'weiss',
  id,
  labelledBy,
  measure = false,
  className,
  children,
}: Props) {
  const classes = ['ac-section', KLASSE[surface], className].filter(Boolean).join(' ')

  return (
    <section className={classes} id={id} aria-labelledby={labelledBy}>
      <div className={`ac-container ${measure ? styles.measure : ''}`.trim()}>{children}</div>
    </section>
  )
}
