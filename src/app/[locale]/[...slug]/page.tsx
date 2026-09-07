import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { PageBlocks } from '@/components/blocks/PageBlocks'
import { PageHero } from '@/components/blocks/PageHero'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { LeistungsseiteTemplate } from '@/components/templates/Leistungsseite'
import { alsText } from '@/components/ui/Translated'
import { getLeistungsseite } from '@/content/leistungsseiten'
import { getPageContent } from '@/content/pages'
import { htmlLang, isLocale, locales } from '@/i18n/config'
import {
  isPublished,
  pageKeyFromSlug,
  pages,
  path,
  publishedPages,
  type PageKey,
} from '@/i18n/routes'
import { company } from '@/lib/company'

/**
 * Platz fuer ein Bild im Seitenkopf, je Seite.
 *
 * Die Beschriftungen sind Hinweise an uns, keine Website-Texte — darum stehen
 * sie hier und nicht im Inhalt. Sobald eine Aufnahme vorliegt, tritt sie an
 * dieselbe Stelle, ohne dass sich das Layout aendert.
 */
const PAGE_VISUAL: Partial<Record<PageKey, { label: string; note?: string }>> = {
  versicherungen: {
    label: 'BERATUNGSSITUATION',
    note: 'Privatkundschaft oder Betrieb — echte Aufnahme',
  },
  treuhand: {
    label: 'ARBEITS- / DOKUMENTENSITUATION',
    note: 'Buchhaltung im Büro Lyss — echte Aufnahme',
  },
  firmengruendung: {
    label: 'GRÜNDUNGSSITUATION',
    note: 'Beratungsgespräch oder Unterlagen — echte Aufnahme',
  },
  ueberUns: {
    label: 'RICARDO & OCTAVIO',
    note: 'Gemeinsame Aufnahme der beiden Inhaber',
  },
  kontakt: {
    label: 'BÜRO / LYSS',
    note: 'Aussen- oder Innenaufnahme Bielstrasse 22',
  },
}

/**
 * Alle Inhaltsseiten ausser der Startseite.
 *
 * Der Pfad wird ueber `src/i18n/routes.ts` aufgeloest, damit jede Sprache
 * eigene Slugs haben kann (`/de/versicherungen/`, `/fr/assurances/`).
 * Erzeugt werden nur Seiten, die in dieser Sprache veroeffentlicht sind und
 * fuer die ein Inhalt vorliegt — alles andere liefert 404.
 */

export const dynamicParams = false

export function generateStaticParams() {
  const params: { locale: string; slug: string[] }[] = []

  for (const locale of locales) {
    for (const key of publishedPages(locale)) {
      if (key === 'home') continue
      // Eine Seite wird erzeugt, wenn es Inhalt gibt — nach neuem Schema
      // (Vorlage B) oder nach dem bisherigen Blockmodell.
      if (!getLeistungsseite(locale, key) && !getPageContent(locale, key)) continue

      params.push({ locale, slug: pages[key].slug[locale].split('/') })
    }
  }

  return params
}

type PageProps = {
  params: Promise<{ locale: string; slug: string[] }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params
  if (!isLocale(locale)) return {}

  const key = pageKeyFromSlug(locale, slug)
  if (!key) return {}

  const sprachen = Object.fromEntries(
    locales
      .filter((candidate) => isPublished(key, candidate))
      .map((candidate) => [htmlLang[candidate], path(key, candidate)]),
  )

  // Vorlage B: Titel und Beschreibung kommen aus dem Schema. Fehlt die
  // Uebersetzung, tritt hier die deutsche Fassung ein — ein leerer <title>
  // waere schlechter. Auf der Seite selbst steht die Marke sichtbar.
  const leistung = getLeistungsseite(locale, key)
  if (leistung) {
    const deutsch = getLeistungsseite('de', key)
    const titel = alsText(leistung.seoTitel, alsText(deutsch?.seoTitel ?? '', ''))
    const beschreibung = alsText(
      leistung.seoBeschreibung,
      alsText(deutsch?.seoBeschreibung ?? '', ''),
    )

    return {
      title: titel,
      description: beschreibung,
      alternates: { canonical: path(key, locale), languages: sprachen },
      openGraph: {
        title: `${titel} — ${company.shortName}`,
        description: beschreibung,
        url: path(key, locale),
        locale: htmlLang[locale].replace('-', '_'),
      },
    }
  }

  const content = getPageContent(locale, key)
  if (!content) return {}

  return {
    title: content.meta.title,
    description: content.meta.description,
    alternates: { canonical: path(key, locale), languages: sprachen },
    openGraph: {
      title: `${content.meta.title} — ${company.shortName}`,
      description: content.meta.description,
      url: path(key, locale),
      locale: htmlLang[locale].replace('-', '_'),
    },
  }
}

export default async function ContentPage({ params }: PageProps) {
  const { locale, slug } = await params
  if (!isLocale(locale)) notFound()

  const key = pageKeyFromSlug(locale, slug)
  if (!key) notFound()

  // Vorlage B hat Vorrang: Seiten, die auf das neue Schema umgestellt sind,
  // werden darueber ausgegeben. Alle uebrigen laufen bis Schritt 5 weiter
  // ueber das bisherige Blockmodell.
  const leistung = getLeistungsseite(locale, key)
  if (leistung) {
    return (
      <>
        <Breadcrumb page={key} locale={locale} />
        <LeistungsseiteTemplate inhalt={leistung} locale={locale} />
      </>
    )
  }

  const content = getPageContent(locale, key)
  if (!content) notFound()

  return (
    <>
      <Breadcrumb page={key} locale={locale} />
      <PageHero
        heading={content.hero.heading}
        lead={content.hero.lead}
        actions={content.hero.actions}
        locale={locale}
        visual={PAGE_VISUAL[key]}
      />
      <PageBlocks blocks={content.blocks} locale={locale} />
    </>
  )
}
