import type { Locale } from '@/i18n/config'
import type { PageKey } from '@/i18n/routes'

import { buchhaltungDe } from './pages/buchhaltung/de'
import { buchhaltungFr } from './pages/buchhaltung/fr'
import { buchhaltungPt } from './pages/buchhaltung/pt'
import { pruefeAlle, type Leistungsseite } from './schema'

/**
 * Verzeichnis der Leistungsseiten (Vorlage B).
 *
 * `pruefeAlle` laeuft beim Laden dieses Moduls. Ist eine Seite unvollstaendig,
 * wirft die Pruefung — und weil jede Seite beim Bauen erzeugt wird, bricht der
 * Build. Eine halbfertige Seite kann so nicht aufgeschaltet werden.
 *
 * Alle drei Sprachen stehen hier nebeneinander. Fehlt eine, faellt sie nicht
 * stillschweigend auf Deutsch zurueck, sondern fehlt sichtbar: Die
 * Sprachfassung existiert mit derselben Struktur, ihre Textfelder tragen
 * `{ missing: '…' }`.
 *
 * Solange nur die Pilotseite auf dieser Vorlage laeuft, steht hier ein
 * Eintrag. Die uebrigen Seiten folgen in Schritt 5.
 */

const alle = pruefeAlle([buchhaltungDe, buchhaltungFr, buchhaltungPt])

export function getLeistungsseite(locale: Locale, key: PageKey): Leistungsseite | null {
  return alle.find((seite) => seite.locale === locale && seite.slug === key) ?? null
}

/** Alle Seitenschluessel, die in dieser Sprache auf Vorlage B laufen. */
export function leistungsseitenKeys(locale: Locale): PageKey[] {
  return alle.filter((seite) => seite.locale === locale).map((seite) => seite.slug)
}
