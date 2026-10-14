/**
 * Zugriff auf «News und Blog» (15.10.2026).
 *
 * Online erscheinen nur Beiträge mit `freigegeben: true` (Ricardo: «Du entwirfst,
 * ich gebe frei»). Für die Durchsicht der Entwürfe auf dem eigenen Rechner zeigt
 * `NEXT_PUBLIC_NEWS_VORSCHAU=1` (in `.env.local`, nie im Repository) auch die
 * Entwürfe – mit sichtbarem Vermerk «Entwurf».
 */
import type { Locale } from '@/i18n/config'

import { beitraege } from '@/content/seiten/news'
import type { Beitrag } from '@/content/seiten/typen'

export const newsVorschau = process.env.NEXT_PUBLIC_NEWS_VORSCHAU === '1'

/** Sichtbare Beiträge, neuester zuerst. FR und PT haben noch keine. */
export function sichtbareBeitraege(locale: Locale): readonly Beitrag[] {
  if (locale !== 'de') return []
  return [...beitraege].filter((b) => b.freigegeben || newsVorschau).sort((a, b) => (a.datum < b.datum ? 1 : -1))
}

export function beitrag(locale: Locale, slug: string): Beitrag | null {
  return sichtbareBeitraege(locale).find((b) => b.slug === slug) ?? null
}

/** «20. Oktober 2026» */
export function datumLang(iso: string): string {
  const [j, m, t] = iso.split('-').map(Number)
  const monate = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
  return `${t}. ${monate[(m ?? 1) - 1]} ${j}`
}
