/**
 * Zugriff auf «News und Blog» (15.10.2026, seit 19.10.2026 in DE, FR und PT).
 *
 * Online erscheinen nur Beiträge mit `freigegeben: true` (Ricardo: «Du entwirfst,
 * ich gebe frei»). Für die Durchsicht der Entwürfe auf dem eigenen Rechner zeigt
 * `NEXT_PUBLIC_NEWS_VORSCHAU=1` (in `.env.local`, nie im Repository) auch die
 * Entwürfe – mit sichtbarem Vermerk «Entwurf». FR und PT führen nur übersetzte
 * Beiträge, mit demselben `slug` wie das deutsche Original.
 */
import { beitraege as fr } from '@/content/fr/news'
import { beitraege as pt } from '@/content/pt/news'
import { beitraege as de } from '@/content/seiten/news'
import type { Beitrag } from '@/content/seiten/typen'
import type { Locale } from '@/i18n/config'

export const newsVorschau = process.env.NEXT_PUBLIC_NEWS_VORSCHAU === '1'

const JE_SPRACHE: Record<Locale, readonly Beitrag[]> = { de, fr, pt }

/** Freigegebene Beiträge einer Sprache (für Sitemap und Suchmaschinen), ohne Vorschau. */
export function freigegebeneBeitraege(locale: Locale): readonly Beitrag[] {
  return JE_SPRACHE[locale].filter((b) => b.freigegeben)
}

/** Sichtbare Beiträge, neuester zuerst. */
export function sichtbareBeitraege(locale: Locale): readonly Beitrag[] {
  return [...JE_SPRACHE[locale]].filter((b) => b.freigegeben || newsVorschau).sort((a, b) => (a.datum < b.datum ? 1 : -1))
}

export function beitrag(locale: Locale, slug: string): Beitrag | null {
  return sichtbareBeitraege(locale).find((b) => b.slug === slug) ?? null
}

const MONATE: Record<Locale, readonly string[]> = {
  de: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
  fr: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
  pt: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
}

/** «20. Oktober 2026» · «20 octobre 2026» · «20 de outubro de 2026» */
export function datumLang(iso: string, locale: Locale = 'de'): string {
  const [j, m, t] = iso.split('-').map(Number)
  const monat = MONATE[locale][(m ?? 1) - 1]
  if (locale === 'fr') return `${t} ${monat} ${j}`
  if (locale === 'pt') return `${t} de ${monat} de ${j}`
  return `${t}. ${monat} ${j}`
}

/** Feste Texte der News-Ansicht. */
export const NEWS_TEXTE: Record<Locale, { vor: string; akzent: string; einleitung: string; leer: string; lesezeit: string; zurueck: string; entwurf: string; art: Record<Beitrag['art'], string>; beschreibung: string }> = {
  de: {
    vor: 'News und ', akzent: 'Blog',
    einleitung: 'Was sich bei A&C tut, und was Sie zu Versicherungen, Steuern und Treuhand wissen sollten.',
    leer: 'Die ersten Beiträge folgen in Kürze.', lesezeit: 'Min. Lesezeit', zurueck: '← News und Blog', entwurf: 'Entwurf',
    art: { News: 'News', Ratgeber: 'Ratgeber' },
    beschreibung: 'Neuigkeiten von A&C und Wissenswertes zu Versicherungen, Steuern und Treuhand.',
  },
  fr: {
    vor: 'Actualités et ', akzent: 'blog',
    einleitung: 'Ce qui se passe chez A&C, et ce qu’il faut savoir sur les assurances, les impôts et la fiduciaire.',
    leer: 'Les premiers articles suivront prochainement.', lesezeit: 'min de lecture', zurueck: '← Actualités et blog', entwurf: 'Brouillon',
    art: { News: 'Actualité', Ratgeber: 'Guide' },
    beschreibung: 'Actualités d’A&C et informations utiles sur les assurances, les impôts et la fiduciaire.',
  },
  pt: {
    vor: 'Notícias e ', akzent: 'blogue',
    einleitung: 'O que acontece na A&C e o que convém saber sobre seguros, impostos e contabilidade.',
    leer: 'Os primeiros artigos seguem em breve.', lesezeit: 'min de leitura', zurueck: '← Notícias e blogue', entwurf: 'Rascunho',
    art: { News: 'Notícia', Ratgeber: 'Guia' },
    beschreibung: 'Notícias da A&C e informação útil sobre seguros, impostos e contabilidade.',
  },
}
