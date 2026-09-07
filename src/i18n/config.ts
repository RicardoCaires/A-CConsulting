/**
 * Sprachen der Website.
 *
 * Drei gleichwertige Sprachversionen. Deutsch ist die Quelle: Aenderungen
 * beginnen immer auf DE, FR und PT werden nachgezogen. Fehlt eine Uebersetzung,
 * wird die Seite in dieser Sprache nicht veroeffentlicht.
 */

export const locales = ['de', 'fr', 'pt'] as const

export type Locale = (typeof locales)[number]

/** Leitsprache. Die Wurzel `/` leitet hierher weiter. */
export const defaultLocale: Locale = 'de'

/** `lang`-Attribut im HTML — Schweizer Varietaeten, PT europaeisch. */
export const htmlLang: Record<Locale, string> = {
  de: 'de-CH',
  fr: 'fr-CH',
  pt: 'pt-PT',
}

/** Name der Sprache in der jeweils eigenen Sprache (fuer die Sprachwahl). */
export const localeName: Record<Locale, string> = {
  de: 'Deutsch',
  fr: 'Français',
  pt: 'Português',
}

/** Kurzform fuer die mobile Sprachwahl. */
export const localeShort: Record<Locale, string> = {
  de: 'DE',
  fr: 'FR',
  pt: 'PT',
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}
