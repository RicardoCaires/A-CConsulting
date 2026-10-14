/**
 * Seiten im Baukasten (15.10.2026). Steht eine Seite hier, wird sie über
 * `components/seite/Seite.tsx` ausgegeben; alle übrigen laufen wie bisher.
 * FR und PT sind nicht veröffentlicht; sie bekommen `null`.
 */
import type { Locale } from '@/i18n/config'
import type { PageKey } from '@/i18n/routes'

import { datenschutz } from './datenschutz'
import { digital } from './digital'
import { impressum } from './impressum'
import { kontakt } from './kontakt'
import { start } from './start'
import { steuern } from './steuern'
import { treuhand } from './treuhand'
import { ueberUns } from './ueber-uns'
import { versicherungen } from './versicherungen'
import type { SeitenInhalt } from './typen'

const DE: Partial<Record<PageKey, SeitenInhalt>> = {
  home: start,
  versicherungen,
  treuhand,
  steuern,
  digital,
  ueberUns,
  kontakt,
  impressum,
  datenschutz,
}

export function getSeite(locale: Locale, key: PageKey): SeitenInhalt | null {
  return locale === 'de' ? (DE[key] ?? null) : null
}
