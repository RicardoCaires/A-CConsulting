import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { Banner } from '@/components/blocks/Banner'
import { Hero } from '@/components/blocks/Hero'
import { PageBlocks } from '@/components/blocks/PageBlocks'
import { LeistungsseiteTemplate } from '@/components/templates/Leistungsseite'
import { UeberunsTemplate } from '@/components/templates/Ueberuns'
import { WissensseiteTemplate } from '@/components/templates/Wissensseite'
import { Button } from '@/components/ui/Button'
import { RichText } from '@/components/ui/RichText'
import { alsText } from '@/components/ui/Translated'
import { getLeistungsseite } from '@/content/leistungsseiten'
import { getPageContent } from '@/content/pages'
import { getUeberuns } from '@/content/ueberuns'
import { getWissen } from '@/content/wissen'
import { htmlLang, isLocale, locales } from '@/i18n/config'
import { getUi } from '@/i18n/messages/ui'
import {
  hrefOrDefault,
  isPublished,
  pageKeyFromSlug,
  pages,
  parentPage,
  path,
  publishedPages,
} from '@/i18n/routes'
import { company } from '@/lib/company'


/**
 * Gelieferte Seitenkopfbilder, je Seite.
 *
 * Wo ein Eintrag steht, traegt der Kopf das Bild und laeuft zweispaltig
 * (`BildHero`). Wo keiner steht, bleibt es beim bisherigen Kopf mit der
 * Bildflaeche aus `PAGE_VISUAL` — unveraendert fuer alle uebrigen Seiten.
 *
 * Ricardo hat am 10.09.2026 das erste dieser Bilder geliefert. Kommen weitere,
 * treten sie hier dazu; am Baustein aendert sich nichts.
 */

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
      if (key === 'ueberUns') {
        if (!getUeberuns(locale)) continue
        params.push({ locale, slug: pages[key].slug[locale].split('/') })
        continue
      }

      if (key === 'wissen') {
        if (!getWissen(locale)) continue
        params.push({ locale, slug: pages[key].slug[locale].split('/') })
        continue
      }

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

  // Vorlage E: „Ueber uns" bringt seine Angaben selbst mit.
  if (key === 'ueberUns') {
    const ueberuns = getUeberuns(locale)
    if (!ueberuns) return {}

    return {
      title: ueberuns.meta.title,
      description: ueberuns.meta.description,
      alternates: { canonical: path(key, locale) },
      openGraph: {
        title: `${ueberuns.meta.title} — ${company.shortName}`,
        description: ueberuns.meta.description,
        url: path(key, locale),
        locale: htmlLang[locale].replace('-', '_'),
      },
    }
  }

  // Vorlage D: der Wissensbereich bringt seine Angaben selbst mit.
  if (key === 'wissen') {
    const wissen = getWissen(locale)
    if (!wissen) return {}

    return {
      title: wissen.meta.title,
      description: wissen.meta.description,
      alternates: { canonical: path(key, locale), languages: sprachen },
      openGraph: {
        title: `${wissen.meta.title} — ${company.shortName}`,
        description: wissen.meta.description,
        url: path(key, locale),
        locale: htmlLang[locale].replace('-', '_'),
      },
    }
  }

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

  // Vorlage E: „Ueber uns" ist eine redaktionelle Seite mit fuenf eigenen
  // Kompositionen statt gleichfoermiger Bloecke. Sie laeuft darum nicht ueber
  // das Blockmodell.
  if (key === 'ueberUns') {
    const ueberuns = getUeberuns(locale)
    if (!ueberuns) notFound()
    const oberflaeche = getUi(locale)

    return (
      <>
        <UeberunsTemplate
          inhalt={ueberuns}
          locale={locale}
          bannerKnopf={oberflaeche.cta}
        />
      </>
    )
  }

  // Vorlage D: der Wissensbereich hat einen eigenen Aufbau — ein
  // hervorgehobener Beitrag und eine Uebersicht passen in kein Blockmodell.
  if (key === 'wissen') {
    const wissen = getWissen(locale)
    if (!wissen) notFound()

    return (
      <>
        <WissensseiteTemplate inhalt={wissen} locale={locale} />
      </>
    )
  }

  // Vorlage B hat Vorrang: Seiten, die auf das neue Schema umgestellt sind,
  // werden darueber ausgegeben. Alle uebrigen laufen bis Schritt 5 weiter
  // ueber das bisherige Blockmodell.
  const leistung = getLeistungsseite(locale, key)
  if (leistung) {
    return (
      <>
        <LeistungsseiteTemplate inhalt={leistung} locale={locale} />
      </>
    )
  }

  const content = getPageContent(locale, key)
  if (!content) notFound()

  const ui = getUi(locale)
  const bereich = parentPage(key, locale)

  /*
   * Der Seitenkopf ist derselbe Baustein wie auf Startseite und Pilotseite:
   * dunkel, randlos, ein Knopf. Bis Schritt 5 laufen diese Seiten weiter ueber
   * das Blockmodell — der **Kopf** ist damit aber schon der gemeinsame.
   *
   * Genau ein Knopf, und ueberall derselbe. Fuehrte der Kopf frueher zwei
   * verschiedene Beschriftungen, steht jetzt die primaere; die zweite ist aus
   * dem Inhalt entfernt. Seiten ohne Handlungsknopf (Kontakt) behalten keinen.
   */
  const knopf = content.hero.actions?.find((action) => action.kind === 'page')

  /* Liegt ein geliefertes Bild vor, traegt der Kopf es und laeuft zweispaltig. */

  return (
    <>

      {/* Jede veroeffentlichte Seite traegt seit dem 15.09.2026 ihren Banner.
          `Hero` bleibt fuer den Fall, dass eine Seite ohne Banner dazukommt. */}
      {content.hero.banner ? (
        <Banner
          themenzeile={content.hero.banner.themenzeile}
          ueberschrift={content.hero.banner.ueberschrift}
          id="seitenkopf"
          knopf={ui.cta}
          locale={locale}
        />
      ) : (
        <Hero
          eyebrow={bereich ? ui.page[bereich] : ui.page[key]}
          titel={content.hero.heading}
          titelLaenge="lang"
          satz={content.hero.lead ? <RichText value={content.hero.lead} /> : undefined}
          aktion={
            knopf ? (
              <Button href={hrefOrDefault(knopf.target, locale)} variant="akzent">
                {knopf.label}
              </Button>
            ) : undefined
          }
          belege={content.hero.belege}
        />
      )}

      <PageBlocks blocks={content.blocks} locale={locale} />
    </>
  )
}
