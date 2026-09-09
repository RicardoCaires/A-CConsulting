import type { ReactNode } from 'react'

import styles from './Section.module.css'

/**
 * Der Abschnittsrahmen. Jede Vorlage baut darauf auf.
 *
 * Die Flaechen kommen aus `flaechen_website` des Corporate-Design-Standards 1.1
 * und heissen hier wie dort:
 *
 *   `weiss`     Grundflaeche
 *   `hell`      Off-White, der ruhige Wechsel dazu
 *   `flaeche`   `primary_navy` — wiederkehrende Elemente, beliebig oft
 *   `dominant`  `navy_deep` — **genau eine** je Seite, dazu der Fussbereich
 *
 * Der frueher benutzte blaugraue Tint kommt hier nicht mehr vor. Er war die
 * vierte schwache Toenung und hat die Seite nicht gegliedert, sondern nur
 * unruhig gemacht: Wo eine Flaeche wirken soll, wirkt sie jetzt.
 *
 * Drei Regeln, und sie sind erzwungen, nicht empfohlen:
 *   1. Nie zwei gleiche Flaechen hintereinander.
 *   2. Hoechstens **eine** dominante Flaeche je Seite.
 *   3. Hoechstens zwei dunkle Flaechen (`flaeche` und `dominant` zusammen)
 *      in Folge — sonst kippt die Seite ins Duestere.
 *
 * `pruefeFlaechen` wirft bei einem Verstoss. Da alle Seiten beim Bauen erzeugt
 * werden, bricht das den Build; die Regel kann nicht versehentlich umgangen
 * werden.
 *
 * Der senkrechte Abstand kommt aus genau einem Token (`--ac-section-y`), und
 * er ist bewusst gross. Die Ruhe entsteht aus wenigen hohen Bloecken.
 */

export type Surface = 'weiss' | 'hell' | 'flaeche' | 'dominant'

/** Die CSS-Klasse einer Flaeche. Damit sie nur an einer Stelle steht. */
export const KLASSE: Record<Surface, string> = {
  weiss: '',
  hell: 'ac-section--tint',
  flaeche: 'ac-section--flaeche on-navy',
  dominant: 'ac-section--navy on-navy',
}

/** Traegt die Flaeche weissen Text? */
export function istDunkel(surface: Surface): boolean {
  return surface === 'flaeche' || surface === 'dominant'
}

/**
 * Prueft die Flaechenfolge einer Seite und wirft bei einem Verstoss.
 * Die Meldung nennt Seite und Stelle, damit es im Buildprotokoll auffaellt.
 */
export function pruefeFlaechen(flaechen: readonly Surface[], seite: string): void {
  for (let i = 1; i < flaechen.length; i++) {
    if (flaechen[i] === flaechen[i - 1]) {
      throw new Error(
        `Flaechenregel verletzt auf „${seite}“: Abschnitt ${i + 1} hat dieselbe Flaeche ` +
          `(${flaechen[i]}) wie Abschnitt ${i}.`,
      )
    }
  }

  const dominant = flaechen.filter((f) => f === 'dominant').length
  if (dominant > 1) {
    throw new Error(
      `Flaechenregel verletzt auf „${seite}“: ${dominant} dominante Flaechen. ` +
        `Erlaubt ist genau eine je Seite (Standard 1.1, flaechen_website).`,
    )
  }

  let dunkelInFolge = 0
  for (const f of flaechen) {
    dunkelInFolge = istDunkel(f) ? dunkelInFolge + 1 : 0
    if (dunkelInFolge > 2) {
      throw new Error(
        `Flaechenregel verletzt auf „${seite}“: mehr als zwei dunkle Flaechen in Folge.`,
      )
    }
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
  /** Ohne senkrechten Abstand — fuer Abschnitte, die ihr Bild randlos tragen. */
  flush?: boolean
  className?: string
  children: ReactNode
}

export function Section({
  surface = 'weiss',
  id,
  labelledBy,
  measure = false,
  flush = false,
  className,
  children,
}: Props) {
  const classes = [flush ? '' : 'ac-section', KLASSE[surface], className].filter(Boolean).join(' ')

  return (
    <section className={classes} id={id} aria-labelledby={labelledBy}>
      <div className={`ac-container ${measure ? styles.measure : ''}`.trim()}>{children}</div>
    </section>
  )
}
