import * as de from '@/content/offerte-darstellung'
import type { Darstellung } from '@/content/offerte-darstellung'
import * as fr from '@/content/fr/offerte-darstellung'
import * as pt from '@/content/pt/offerte-darstellung'
import type { Locale } from '@/i18n/config'
import { nachSprache } from '@/lib/sprache'

/** Klammern aus einem Katalogtext entfernen, wo keine eigene Darstellung festgelegt ist (15.10.2026). */
export const ohneKlammern = (s: string) =>
  s
    .replace(/\s*\([^)]*\)/g, '')
    .replace(/\s+([?.,:])/g, '$1')
    .trim()

/** Darstellung der Offertfragen je Sprache (16.10.2026); `wahl[].wert` bleibt überall der deutsche Katalogwert. */
const darstellungen = (locale: Locale) =>
  nachSprache(locale, {
    de: { nachEndung: de.nachEndung, nachSchluessel: de.nachSchluessel, optionText: de.optionText },
    fr: { nachEndung: fr.nachEndung, nachSchluessel: fr.nachSchluessel, optionText: fr.optionText },
    pt: { nachEndung: pt.nachEndung, nachSchluessel: pt.nachSchluessel, optionText: pt.optionText },
  })

/** Darstellung einer Katalogfrage: zuerst nach ganzem Schlüssel, sonst nach der Endung (z. B. `selbstbehalt`). */
export function darstellungVon(key: string, locale: Locale = 'de'): Darstellung {
  const d = darstellungen(locale)
  const endung = key.split('.').slice(1).join('.')
  return { ...(d.nachEndung[endung] ?? {}), ...(d.nachSchluessel[key] ?? {}) } as Darstellung
}

/** Anzeige einer Katalogoption mit Klammer in der Sprache der Seite; gesendet wird der Katalogwert. */
export function optionTextVon(wert: string, locale: Locale = 'de'): string | undefined {
  return darstellungen(locale).optionText[wert]
}
