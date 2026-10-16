/**
 * Übersetzungen der Website (16.10.2026). Ricardo: «bitte anschliessend website und Kundenportal auf Französisch und
 * Portugiesisch übersetzen» – direkt online, Rechtstexte mit dem Vorbehalt «Massgebend ist die deutsche Fassung».
 *
 * Deutsch ist die Quelle. Jede Übersetzung liegt unter `src/content/fr/` beziehungsweise `src/content/pt/` und muss
 * denselben Aufbau haben wie das deutsche Original: `Uebersetzt<typeof DE>` erzwingt das beim Bauen – fehlt ein Feld
 * oder ein Eintrag, bricht die Typprüfung. FR: Schweizer Französisch. PT: europäisches Portugiesisch.
 */
import type { Locale } from '@/i18n/config'

/** Gleicher Aufbau wie das Original, aber beliebiger Text statt der deutschen Wortlaute. */
export type Uebersetzt<T> = T extends string
  ? string
  : T extends number | boolean | null | undefined
    ? T
    : T extends readonly (infer U)[]
      ? readonly Uebersetzt<U>[]
      : T extends object
        ? { readonly [K in keyof T]: Uebersetzt<T[K]> }
        : T

/** Wählt die Fassung der Sprache; Deutsch ist die Rückfallebene. */
export function nachSprache<T>(locale: Locale, fassungen: { de: T; fr?: Uebersetzt<T>; pt?: Uebersetzt<T> }): Uebersetzt<T> {
  return (fassungen[locale] ?? fassungen.de) as Uebersetzt<T>
}

/** Gebühr «kostenlos» in jeder Sprache – die Zeitleisten heben sie grün hervor. */
export const istKostenlos = (wert: string | undefined) => !!wert && /^(kostenlos|gratuite?|gratuito|grátis)$/i.test(wert.trim())
