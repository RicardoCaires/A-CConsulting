import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { StartseiteTemplate, type StartseiteInhalt } from '@/components/templates/Startseite'
import { PageLink } from '@/components/ui/PageLink'
import { getStartseite } from '@/content/startseite'
import { htmlLang, isLocale, locales } from '@/i18n/config'
import { isPublished, path } from '@/i18n/routes'
import { company } from '@/lib/company'

/**
 * Startseite.
 *
 * Diese Datei enthaelt keine Gestaltung. Sie ordnet den Inhalt aus
 * `src/content/startseite.ts` den sieben Abschnitten der Vorlage zu; wie die
 * aussehen, steht in `components/templates/Startseite.tsx`.
 *
 * Nichts wird hier umformuliert. Kommt ein Text auf der Seite kuerzer vor als
 * in der Quelle, wird weggelassen, nie neu geschrieben.
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

  const inhalt: StartseiteInhalt = {
    // 1 — Einstieg. Eine Aussage, ein Satz, ein Knopf, ein Textlink.
    einstieg: {
      eyebrow: content.einstieg.eyebrow,
      titel: content.einstieg.titel,
      satz: content.einstieg.satz,
      knopf: { text: content.cta, ziel: 'kontakt' },
      weiter: content.einstieg.weiter,
      bild: content.einstieg.bild,
    },

    // 2 — Die drei Bereiche. Versicherungsbroking fuehrt.
    bereiche: {
      titel: content.bereiche.titel,
      leit: content.bereiche.leit,
      weitere: content.bereiche.weitere,
    },

    // 3 — Geschaeftsfaelle.
    faelle: {
      titel: content.faelle.titel,
      einleitung: content.faelle.einleitung,
      eintraege: content.faelle.eintraege,
    },

    // 4 — Weshalb A&C.
    gruende: {
      titel: content.gruende.titel,
      punkte: content.gruende.punkte,
    },

    // 5 — Ansprechpartner.
    personen: {
      titel: content.personen.titel,
      einleitung: content.personen.einleitung,
      leute: content.personen.leute,
    },

    // 6 — Wissen. Die Beitraege gibt es noch nicht; die Verweise fuehren
    //     darum vorerst nirgendwohin und sagen das auch.
    wissen: {
      titel: content.wissen.titel,
      einleitung: content.wissen.einleitung,
      beitraege: content.wissen.beitraege,
      weiterlesen: content.wissen.weiterlesen,
      alle: <PageLink target="wissen" label={content.wissen.alle} locale={locale} />,
    },

    // 7 — Kontaktabschluss.
    abschluss: {
      titel: content.abschluss.titel,
      satz: content.abschluss.satz,
      knopf: { text: content.cta, ziel: 'kontakt' },
    },
  }

  return <StartseiteTemplate inhalt={inhalt} locale={locale} />
}
