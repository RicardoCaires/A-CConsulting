import type { ReactNode } from 'react'

import { fehltUebersetzung, fehltUebersetzungRich, type RichText, type Text } from '@/content/schema'

import { DraftNote } from './DraftNote'
import { RichText as RichTextAusgabe } from './RichText'

/**
 * Gibt ein Textfeld des Schemas aus.
 *
 * Liegt der Text in dieser Sprache vor, steht er da. Liegt er nicht vor, steht
 * **nicht** die deutsche Fassung, sondern eine sichtbare Marke — sonst waere
 * beim Durchsehen nicht zu erkennen, was noch uebersetzt werden muss, und eine
 * halbe Uebersetzung ginge unbemerkt live.
 *
 * `fallback` ist die einzige Ausnahme und nur fuer die Seitenueberschrift
 * gedacht: Eine Seite ohne `h1` ist kaputt, darum tritt dort die bereits
 * uebersetzte Navigationsbezeichnung ein — sichtbar begleitet von der Marke.
 */

type Props = {
  value: Text
  /** Ersatz, wenn die Uebersetzung fehlt. Nur fuer Ueberschriften. */
  fallback?: ReactNode
}

export function Translated({ value, fallback }: Props) {
  if (!fehltUebersetzung(value)) return <>{value}</>

  return (
    <>
      {fallback}
      {fallback ? ' ' : null}
      <DraftNote kind="uebersetzung">{value.missing}</DraftNote>
    </>
  )
}

/**
 * Dasselbe fuer Fliesstextfelder, die zusaetzlich offene Angaben aus
 * Schritt 4 tragen koennen.
 *
 * Die beiden Marken bleiben getrennt: „Übersetzung fehlt“ heisst, der Text
 * liegt in dieser Sprache nicht vor; „Zu bestätigen“ heisst, A&C hat die
 * Angabe noch nicht geliefert. Das eine ist Uebersetzungsarbeit, das andere
 * eine Auskunft.
 */
export function TranslatedRich({ value }: { value: RichText }) {
  if (fehltUebersetzungRich(value)) {
    return <DraftNote kind="uebersetzung">{value.missing}</DraftNote>
  }

  return <RichTextAusgabe value={value} />
}

/**
 * Derselbe Wert als reine Zeichenkette — fuer Titel und Beschreibungen im
 * Seitenkopf, wo kein Markup moeglich ist.
 *
 * Hier ist der Rueckfall unvermeidlich: Ein leerer `<title>` waere schlechter
 * als ein deutscher. Die Marke steht dann sichtbar auf der Seite selbst.
 */
export function alsText(value: Text, ersatz: string): string {
  return fehltUebersetzung(value) ? ersatz : value
}
