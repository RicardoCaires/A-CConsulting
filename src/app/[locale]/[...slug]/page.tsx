import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { Banner } from '@/components/blocks/Banner'
import { Hero } from '@/components/blocks/Hero'
import { OffertAssistent } from '@/components/blocks/OffertAssistent'
import { NewsBeitrag, NewsUebersicht } from '@/components/seite/News'
import { Seite } from '@/components/seite/Seite'
import { beitrag, newsVorschau, sichtbareBeitraege, NEWS_TEXTE } from '@/lib/news'
import { getSeite } from '@/content/seiten'
import assistentStyles from '@/components/blocks/OffertAssistent.module.css'
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
import { htmlLang, isLocale, locales, type Locale } from '@/i18n/config'
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
import { ogBild } from '@/lib/social'


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

/** News und Blog: online erst mit freigegebenen Beiträgen; lokal mit Vorschau auch die Entwürfe. */
const newsSichtbar = (locale: Locale) => isPublished('news', locale) || newsVorschau
const istNews = (locale: Locale, slug: string[]) => newsSichtbar(locale) && slug[0] === pages.news.slug[locale] && slug.length <= 2

export function generateStaticParams() {
  const params: { locale: string; slug: string[] }[] = []

  for (const locale of locales) {
    if (newsSichtbar(locale)) {
      params.push({ locale, slug: [pages.news.slug[locale]] })
      for (const b of sichtbareBeitraege(locale)) params.push({ locale, slug: [pages.news.slug[locale], b.slug] })
    }
    for (const key of publishedPages(locale)) {
      if (key === 'home') continue
      // Eine Seite wird erzeugt, wenn es Inhalt gibt — nach neuem Schema
      // (Vorlage B) oder nach dem bisherigen Blockmodell.
      // Seiten im Baukasten (15.10.2026), auch FR und PT (16.10.2026)
      if (getSeite(locale, key)) {
        params.push({ locale, slug: pages[key].slug[locale].split('/') })
        continue
      }

      if (key === 'ueberUns') {
        if (!getUeberuns(locale)) continue
        params.push({ locale, slug: pages[key].slug[locale].split('/') })
        continue
      }

      // Offertanfrage: eigene Seite ohne Inhaltsdatei; Texte in OFFERTE_SEITE
      if (key === 'offerte') {
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

/** Texte der Offertanfrage, die keine Inhaltsdatei hat (FR und PT seit 16.10.2026). */
const OFFERTE_SEITE: Record<Locale, { titel: string; beschreibung: string; satz: string; ohneSkript: string; oder: string }> = {
  de: {
    titel: 'Offerte anfragen',
    beschreibung:
      'Offerte für Ihre Versicherung anfragen: Frage für Frage, jede freiwillig. A&C Consulting in Aegerten meldet sich in der Regel innerhalb eines Werktags.',
    satz: 'Jede Frage ist freiwillig. Was offen bleibt, klären wir im Gespräch.',
    ohneSkript: 'Für die Offertanfrage braucht es JavaScript. Sie erreichen uns auch direkt:',
    oder: 'oder',
  },
  fr: {
    titel: 'Demander une offre',
    beschreibung:
      'Demander une offre pour votre assurance : question par question, chacune facultative. A&C Consulting à Aegerten vous répond en règle générale dans un délai d’un jour ouvrable.',
    satz: 'Chaque question est facultative. Ce qui reste ouvert, nous le clarifions lors de l’entretien.',
    ohneSkript: 'La demande d’offre nécessite JavaScript. Vous pouvez aussi nous joindre directement :',
    oder: 'ou',
  },
  pt: {
    titel: 'Pedir proposta',
    beschreibung:
      'Peça uma proposta para o seu seguro: pergunta a pergunta, todas facultativas. A A&C Consulting, em Aegerten, responde em regra no prazo de um dia útil.',
    satz: 'Todas as perguntas são facultativas. O que ficar em aberto, esclarecemos na conversa.',
    ohneSkript: 'O pedido de proposta precisa de JavaScript. Também nos pode contactar diretamente:',
    oder: 'ou',
  },
}

type PageProps = {
  params: Promise<{ locale: string; slug: string[] }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params
  if (!isLocale(locale)) return {}

  if (istNews(locale, slug)) {
    const b = slug[1] ? beitrag(locale, slug[1]) : null
    const titel = b ? b.titel : `${NEWS_TEXTE[locale].vor}${NEWS_TEXTE[locale].akzent}`
    const beschreibung = b ? b.kurz : NEWS_TEXTE[locale].beschreibung
    const url = b ? `${path('news', locale)}${b.slug}/` : path('news', locale)
    return {
      title: titel,
      description: beschreibung,
      alternates: { canonical: url },
      ...(b && !b.freigegeben ? { robots: { index: false, follow: false } } : {}),
      openGraph: { images: ogBild, title: `${titel} — ${company.shortName}`, description: beschreibung, url, locale: htmlLang[locale].replace('-', '_') },
    }
  }

  const key = pageKeyFromSlug(locale, slug)
  if (!key) return {}

  const sprachen = Object.fromEntries(
    locales
      .filter((candidate) => isPublished(key, candidate))
      .map((candidate) => [htmlLang[candidate], path(key, candidate)]),
  )

  // Seiten im Baukasten: Titel und Beschreibung aus dem Inhalt
  const baukasten = getSeite(locale, key)
  if (baukasten) {
    return {
      title: baukasten.meta.title,
      description: baukasten.meta.description,
      alternates: { canonical: path(key, locale), languages: sprachen },
      openGraph: {
        images: ogBild,
        title: `${baukasten.meta.title} — ${company.shortName}`,
        description: baukasten.meta.description,
        url: path(key, locale),
        locale: htmlLang[locale].replace('-', '_'),
      },
    }
  }

  // Vorlage E: „Ueber uns" bringt seine Angaben selbst mit.
  if (key === 'ueberUns') {
    const ueberuns = getUeberuns(locale)
    if (!ueberuns) return {}

    return {
      title: ueberuns.meta.title,
      description: ueberuns.meta.description,
      alternates: { canonical: path(key, locale) },
      openGraph: {
        images: ogBild,
        title: `${ueberuns.meta.title} — ${company.shortName}`,
        description: ueberuns.meta.description,
        url: path(key, locale),
        locale: htmlLang[locale].replace('-', '_'),
      },
    }
  }

  if (key === 'offerte') {
    const { titel, beschreibung } = OFFERTE_SEITE[locale]
    return {
      title: titel,
      description: beschreibung,
      alternates: { canonical: path(key, locale), languages: sprachen },
      openGraph: {
        images: ogBild,
        title: `${titel} — ${company.shortName}`,
        description: beschreibung,
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
        images: ogBild,
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
        images: ogBild,
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
      images: ogBild,
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

  // News und Blog (15.10.2026)
  if (istNews(locale, slug)) {
    if (!slug[1]) return <NewsUebersicht beitraege={sichtbareBeitraege(locale)} locale={locale} />
    const b = beitrag(locale, slug[1])
    if (!b) notFound()
    return <NewsBeitrag b={b} locale={locale} />
  }

  const key = pageKeyFromSlug(locale, slug)
  if (!key) notFound()

  // Seiten im Baukasten (15.10.2026) haben Vorrang vor allen älteren Vorlagen
  const seite = getSeite(locale, key)
  if (seite) return <Seite inhalt={seite} locale={locale} />

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

  // Offertanfrage Frage fuer Frage (14.10.2026). Der Assistent laeuft im
  // Browser; ohne JavaScript stehen Telefon und E-Mail da.
  // Ohne Banner (Ricardo, 14.10.2026: «bei offerte anfragen soll der banner nicht
  // angezeigt werden»): Die Seite beginnt direkt mit der Überschrift und der ersten Frage.
  if (key === 'offerte') {
    return (
      <>
        <section className={`ac-section ${assistentStyles.flaeche}`} aria-labelledby="offerte-titel">
          <div className="ac-container">
            <header className={assistentStyles.seitenkopf}>
              <h1 id="offerte-titel" className={assistentStyles.seitentitel}>
                {OFFERTE_SEITE[locale].titel}
              </h1>
              <p className={assistentStyles.seitensatz}>{OFFERTE_SEITE[locale].satz}</p>
            </header>
            <noscript>
              <p>
                {OFFERTE_SEITE[locale].ohneSkript} {company.phone} {OFFERTE_SEITE[locale].oder} {company.email}.
              </p>
            </noscript>
            <OffertAssistent
              locale={locale}
              crm={company.crm}
              telefon={company.phone}
              telefonHref={`tel:${company.phoneE164}`}
              email={company.email}
              datenschutzHref={path('datenschutz', locale)}
            />
          </div>
        </section>
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
          unterzeile={content.hero.banner.unterzeile}
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
