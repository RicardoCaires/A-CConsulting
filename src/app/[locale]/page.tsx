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
 * `src/content/startseite.ts` den neun Abschnitten der Vorlage zu; wie die
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

    // 3 — Situationen. Stehen vor den Leistungen: Wer herkommt, denkt in
    //     seinem Problem, nicht in unseren Bereichen.
    situationen: {
      eyebrow: content.situationen.eyebrow,
      merksatz: content.situationen.merksatz,
      titel: content.situationen.titel,
      einleitung: content.situationen.einleitung,
      eintraege: content.situationen.eintraege,
    },

    // 4 — Leistungen. Versicherungsbroking fuehrt.
    leistungen: {
      eyebrow: content.leistungen.eyebrow,
      titel: content.leistungen.titel,
      einleitung: content.leistungen.einleitung,
      merksatz: content.leistungen.merksatz,
      leit: content.leistungen.leit,
      weitere: content.leistungen.weitere,
    },

    // 5 — Eine Stelle fuer Ihre Administration.
    eineStelle: {
      eyebrow: content.eineStelle.eyebrow,
      titel: content.eineStelle.titel,
      kette: content.eineStelle.kette,
      text: content.eineStelle.text,
      nachsatz: content.eineStelle.nachsatz,
      knopf: content.eineStelle.knopf,
    },

    // 7 — Ansprechpartner.
    personen: {
      eyebrow: content.personen.eyebrow,
      linkedinText: content.personen.linkedinText,
      titel: content.personen.titel,
      einleitung: content.personen.einleitung,
      leute: content.personen.leute,
      link: (
        <PageLink
          target={content.personen.link.ziel}
          label={content.personen.link.text}
          locale={locale}
        />
      ),
    },

    // 8 — Ablauf.
    ablauf: {
      eyebrow: content.ablauf.eyebrow,
      einleitung: content.ablauf.einleitung,
      nachsatzBild: content.ablauf.nachsatzBild,
      titel: content.ablauf.titel,
      schritte: content.ablauf.schritte,
      nachsatz: content.ablauf.nachsatz,
    },

    // 9 — Kontaktabschluss.
    abschluss: {
      titel: content.abschluss.titel,
      satz: content.abschluss.satz,
      knopf: { text: content.cta, ziel: 'kontakt' },
    },
  }

  return <StartseiteTemplate inhalt={inhalt} locale={locale} />
}
