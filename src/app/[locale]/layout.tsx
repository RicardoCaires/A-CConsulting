import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { htmlLang, isLocale, locales, type Locale } from '@/i18n/config'
import { getUi } from '@/i18n/messages/ui'
import { isPublished, localesWithPages, path } from '@/i18n/routes'
import { company } from '@/lib/company'
import { inter, sourceSerif } from '@/lib/fonts'
import { acColor } from '@/lib/tokens.generated'

import '../globals.css'

/**
 * Sprachlayout — Geruest jeder oeffentlichen Seite.
 *
 * Alle Seiten werden beim Bauen statisch erzeugt. `dynamicParams = false`
 * sorgt dafuer, dass eine nicht vorgesehene Sprache 404 liefert statt zur
 * Laufzeit erzeugt zu werden.
 */

export const dynamicParams = false

export function generateStaticParams() {
  return localesWithPages().map((locale) => ({ locale }))
}

type LayoutProps = {
  children: ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}

  return {
    metadataBase: new URL(company.url),
    title: {
      default: company.legalName,
      template: `%s — ${company.shortName}`,
    },
    applicationName: company.legalName,
    authors: [{ name: company.legalName, url: company.url }],
    // Kein Tracking, keine Werbung: alles, was wir wollen, ist saubere Indexierung.
    robots: { index: true, follow: true },
    alternates: {
      canonical: path('home', locale),
      languages: Object.fromEntries(
        locales
          .filter((candidate) => isPublished('home', candidate))
          .map((candidate) => [htmlLang[candidate], path('home', candidate)]),
      ),
    },
    openGraph: {
      type: 'website',
      siteName: company.legalName,
      locale: htmlLang[locale].replace('-', '_'),
      url: path('home', locale),
    },
    icons: {
      icon: '/logo/ac-logo.png',
    },
  }
}

export const viewport = {
  themeColor: acColor.primary_navy,
  width: 'device-width',
  initialScale: 1,
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const typedLocale: Locale = locale
  const ui = getUi(typedLocale)

  return (
    <html lang={htmlLang[typedLocale]} className={`${inter.variable} ${sourceSerif.variable}`}>
      <body>
        <a className="ac-skip-link" href="#inhalt">
          {ui.skipToContent}
        </a>
        <Header locale={typedLocale} />
        <main id="inhalt">{children}</main>
        <Footer locale={typedLocale} />
      </body>
    </html>
  )
}
