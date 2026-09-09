/**
 * Verzeichnis der Inhaltsseiten.
 *
 * Deutsch ist die Quelle. Eine Sprache erscheint hier erst, wenn ihre
 * Uebersetzung vorliegt; erst dann wird sie in `src/i18n/routes.ts` auf
 * `published` gesetzt. Was hier fehlt, fehlt absichtlich.
 */

import type { Locale } from '@/i18n/config'
import type { PageKey } from '@/i18n/routes'

import type { PageContent } from '../types'
import { datenschutz } from './datenschutz'
import { firmengruendung } from './firmengruendung'
import { impressum } from './impressum'
import { kontakt } from './kontakt'
import { personalFinance } from './personal-finance'
import { steuern } from './steuern'
import { treuhaenderWechseln } from './treuhaender-wechseln'
import { treuhand } from './treuhand'

import { versicherungen } from './versicherungen'

type PagesByKey = Partial<Record<PageKey, PageContent>>

const de: PagesByKey = {
  impressum,
  datenschutz,
  versicherungen,
  treuhand,
  treuhaenderWechseln,
  steuern,
  personalFinance,
  firmengruendung,
  kontakt,
}

export const pageContent: Partial<Record<Locale, PagesByKey>> = {
  de,
}

export function getPageContent(locale: Locale, key: PageKey): PageContent | null {
  return pageContent[locale]?.[key] ?? null
}

/** Alle Seitenschluessel, zu denen es in dieser Sprache einen Inhalt gibt. */
export function contentKeys(locale: Locale): PageKey[] {
  return Object.keys(pageContent[locale] ?? {}) as PageKey[]
}
