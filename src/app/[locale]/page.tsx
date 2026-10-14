import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { Seite } from '@/components/seite/Seite'
import { getSeite } from '@/content/seiten'
import { htmlLang, isLocale, locales } from '@/i18n/config'
import { isPublished, path } from '@/i18n/routes'
import { company } from '@/lib/company'
import { ogBild } from '@/lib/social'

/**
 * Startseite. Seit dem 15.10.2026 über den Baukasten der Seiten
 * (`components/seite/Seite.tsx`, Inhalt in `src/content/seiten/start.ts`).
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

  const content = getSeite(locale, 'home')
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

  const content = getSeite(locale, 'home')
  if (!content) notFound()

  return <Seite inhalt={content} locale={locale} vorrang />
}
