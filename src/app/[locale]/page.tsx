import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { StartseiteTemplate } from '@/components/templates/Startseite'
import { getStartseite } from '@/content/startseite'
import { htmlLang, isLocale, locales } from '@/i18n/config'
import { isPublished, path } from '@/i18n/routes'
import { company } from '@/lib/company'
import { ogBild } from '@/lib/social'

/**
 * Startseite.
 *
 * Diese Datei enthaelt keine Gestaltung. Seit dem 14.10.2026 reicht sie den Inhalt aus
 * `src/content/startseite.ts` unveraendert an die Vorlage weiter
 * (`components/templates/Startseite.tsx`).
 */

type PageProps = {
  params: Promise<{ locale: string }>
}

/** Die Startseite gibt es nur, wo ihre Uebersetzung vorliegt. */
export function generateStaticParams() {
  return locales.filter((locale) => isPublished('home', locale)).map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}

  const content = getStartseite(locale)
  if (!content) return {}

  return {
    title: content.meta.title,
    description: content.meta.description,
    alternates: { canonical: path('home', locale) },
    openGraph: {
      images: ogBild,
      title: `${content.meta.title} — ${company.shortName}`,
      description: content.meta.description,
      url: path('home', locale),
      locale: htmlLang[locale].replace('-', '_'),
    },
  }
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const content = getStartseite(locale)
  if (!content) notFound()

  return <StartseiteTemplate inhalt={content} locale={locale} />
}
