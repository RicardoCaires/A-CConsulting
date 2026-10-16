/**
 * Seiten im Baukasten, Fassung PT (16.10.2026). Gleicher Aufbau wie `DE` in `src/content/seiten/index.ts`.
 */
import type { PageKey } from '@/i18n/routes'
import type { SeitenInhalt } from '@/content/seiten/typen'

import { datenschutz } from './datenschutz'
import { digital } from './digital'
import { impressum } from './impressum'
import { kontakt } from './kontakt'
import { start } from './start'
import { steuern } from './steuern'
import { treuhand } from './treuhand'
import { ueberUns } from './ueber-uns'
import { versicherungen } from './versicherungen'

export const PT: Partial<Record<PageKey, SeitenInhalt>> = {
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
