/**
 * Seiten im Baukasten (15.10.2026). Steht eine Seite hier, wird sie über
 * `components/seite/Seite.tsx` ausgegeben; alle übrigen laufen wie bisher.
 * FR und PT (seit 16.10.2026) liegen unter `src/content/fr|pt/seiten/`; fehlt eine Seite dort, gibt es `null`.
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
import { FR } from '../fr/seiten'
import { PT } from '../pt/seiten'

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
  const fassung = locale === 'fr' ? FR : locale === 'pt' ? PT : DE
  return fassung[key] ?? null
}
