/**
 * Zentrale Zuordnung von Seiten zu Pfaden — je Sprache eigene Slugs.
 *
 * Diese Datei ist die einzige Stelle, an der Pfade festgelegt werden.
 * Navigation, Sprachumschalter, Sitemap und interne Links leiten sich daraus ab.
 * Ein Link wird nie als Zeichenkette geschrieben, sondern immer ueber `path()`
 * aufgebaut — so kann eine Sprache ihren Slug aendern, ohne dass Links brechen.
 *
 * Rangfolge der Bereiche ist verbindlich und wird nie umgestellt:
 *   1. Versicherungsbroking  2. Treuhand  3. Steuern
 *
 * Veroeffentlichung: Eine Seite erscheint in einer Sprache erst, wenn die
 * Uebersetzung vorliegt (`published`). Bis dahin taucht sie dort weder in der
 * Navigation noch in der Sitemap auf und liefert 404.
 */

import { defaultLocale, locales, type Locale } from './config'

export type PageKey =
  | 'home'
  | 'versicherungen'
  | 'treuhand'
  | 'buchhaltung'
  | 'lohnbuchhaltung'
  | 'mehrwertsteuer'
  | 'jahresabschluss'
  | 'treuhaenderWechseln'
  | 'steuern'
  | 'firmengruendung'
  | 'personalFinance'
  | 'wissen'
  | 'ueberUns'
  | 'transparenz'
  | 'schadenfall'
  | 'kontakt'
  | 'impressum'
  | 'datenschutz'

type PageDefinition = {
  /** Slug je Sprache, ohne fuehrenden oder abschliessenden Schraegstrich. Leer = Startseite. */
  slug: Record<Locale, string>
  /** Steht die Seite in dieser Sprache oeffentlich zur Verfuegung? */
  published: Record<Locale, boolean>
  /** Erscheint die Seite in der Hauptnavigation? */
  inMainNav: boolean
  /** Erscheint die Seite in der rechtlichen Zeile im Fussbereich? */
  inLegalNav: boolean
  /** Gewichtung fuer die Sitemap. */
  sitemapPriority: number
}

/**
 * Der Seitenbaum folgt den acht Kernseiten aus Schritt 4, Fassung 2, ergaenzt
 * um die dort verlinkten Seiten `/transparenz` und `/schadenfall`.
 *
 * Alles ausser der deutschen Startseite steht auf `published: false`: Die Texte
 * sind entworfen, die Seiten aber noch nicht gebaut. Bis dahin erscheinen sie
 * weder in der Navigation noch in der Sitemap, und Verweise auf sie werden als
 * Text statt als Link dargestellt — lieber kein Link als ein toter Link.
 *
 * FR- und PT-Slugs sind gesetzt, aber noch nicht abgenommen. Sie werden mit der
 * jeweiligen Uebersetzung freigegeben.
 */
export const pages: Record<PageKey, PageDefinition> = {
  home: {
    slug: { de: '', fr: '', pt: '' },
    published: { de: true, fr: false, pt: false },
    inMainNav: true,
    inLegalNav: false,
    sitemapPriority: 1.0,
  },
  versicherungen: {
    slug: { de: 'versicherungen', fr: 'assurances', pt: 'seguros' },
    published: { de: true, fr: false, pt: false },
    inMainNav: true,
    inLegalNav: false,
    sitemapPriority: 0.9,
  },
  treuhand: {
    slug: { de: 'treuhand', fr: 'fiduciaire', pt: 'fiduciaria' },
    published: { de: true, fr: false, pt: false },
    inMainNav: true,
    inLegalNav: false,
    sitemapPriority: 0.8,
  },
  buchhaltung: {
    slug: {
      de: 'treuhand/buchhaltung',
      fr: 'fiduciaire/comptabilite',
      pt: 'fiduciaria/contabilidade',
    },
    // Pilotseite fuer Vorlage B (Schritt 3).
    //
    // FR und PT sind seit dem 07.09.2026 abgeschaltet: Ihre Textfelder sind
    // durchgehend als fehlende Uebersetzung markiert, und Marken verschwinden
    // im Produktionsbau — die Seiten waeren dort leer. Die Struktur bleibt im
    // Code stehen, damit die Uebersetzung sie spaeter nur noch fuellen muss.
    published: { de: true, fr: false, pt: false },
    inMainNav: false,
    inLegalNav: false,
    sitemapPriority: 0.7,
  },
  lohnbuchhaltung: {
    slug: {
      de: 'treuhand/lohnbuchhaltung',
      fr: 'fiduciaire/salaires',
      pt: 'fiduciaria/salarios',
    },
    published: { de: false, fr: false, pt: false },
    inMainNav: false,
    inLegalNav: false,
    sitemapPriority: 0.7,
  },
  mehrwertsteuer: {
    slug: {
      de: 'treuhand/mehrwertsteuer',
      fr: 'fiduciaire/tva',
      pt: 'fiduciaria/iva',
    },
    published: { de: false, fr: false, pt: false },
    inMainNav: false,
    inLegalNav: false,
    sitemapPriority: 0.7,
  },
  jahresabschluss: {
    slug: {
      de: 'treuhand/jahresabschluss',
      fr: 'fiduciaire/cloture-annuelle',
      pt: 'fiduciaria/encerramento-anual',
    },
    published: { de: false, fr: false, pt: false },
    inMainNav: false,
    inLegalNav: false,
    sitemapPriority: 0.7,
  },
  treuhaenderWechseln: {
    slug: {
      de: 'treuhand/treuhaender-wechseln',
      fr: 'fiduciaire/changer-de-fiduciaire',
      pt: 'fiduciaria/mudar-de-fiduciaria',
    },
    published: { de: true, fr: false, pt: false },
    inMainNav: false,
    inLegalNav: false,
    sitemapPriority: 0.7,
  },
  steuern: {
    slug: { de: 'steuern', fr: 'impots', pt: 'impostos' },
    published: { de: true, fr: false, pt: false },
    inMainNav: false,
    inLegalNav: false,
    sitemapPriority: 0.8,
  },
  firmengruendung: {
    slug: {
      de: 'firmengruendung',
      fr: 'creation-entreprise',
      pt: 'constituicao-de-empresa',
    },
    published: { de: true, fr: false, pt: false },
    inMainNav: false,
    inLegalNav: false,
    sitemapPriority: 0.7,
  },
  /**
   * Personal Finance — Budget und Vorsorge fuer Privatpersonen.
   *
   * Neuer Bereich, seit dem Neuaufbau eigener Hauptpunkt. Genau zwei
   * Leistungen, keine weiteren: Budget und Vorsorge. Keine Anlage-, Trading-
   * oder Bankdarstellung.
   */
  personalFinance: {
    slug: {
      de: 'personal-finance',
      fr: 'finances-personnelles',
      pt: 'financas-pessoais',
    },
    published: { de: true, fr: false, pt: false },
    inMainNav: true,
    inLegalNav: false,
    sitemapPriority: 0.8,
  },
  /** Wissen — Ratgeberbeitraege. Loest den frueher vertagten Blogbereich ab. */
  wissen: {
    slug: { de: 'wissen', fr: 'savoir', pt: 'conhecimento' },
    published: { de: true, fr: false, pt: false },
    inMainNav: true,
    inLegalNav: false,
    sitemapPriority: 0.6,
  },
  ueberUns: {
    slug: { de: 'ueber-uns', fr: 'a-propos', pt: 'sobre-nos' },
    published: { de: true, fr: false, pt: false },
    inMainNav: true,
    inLegalNav: false,
    sitemapPriority: 0.6,
  },
  transparenz: {
    slug: { de: 'transparenz', fr: 'transparence', pt: 'transparencia' },
    published: { de: false, fr: false, pt: false },
    inMainNav: false,
    inLegalNav: false,
    sitemapPriority: 0.4,
  },
  schadenfall: {
    slug: { de: 'schadenfall', fr: 'sinistre', pt: 'sinistro' },
    published: { de: false, fr: false, pt: false },
    inMainNav: false,
    inLegalNav: false,
    sitemapPriority: 0.5,
  },
  kontakt: {
    slug: { de: 'kontakt', fr: 'contact', pt: 'contacto' },
    published: { de: true, fr: false, pt: false },
    inMainNav: true,
    inLegalNav: false,
    sitemapPriority: 0.7,
  },
  impressum: {
    slug: { de: 'impressum', fr: 'mentions-legales', pt: 'informacao-legal' },
    published: { de: true, fr: false, pt: false },
    inMainNav: false,
    inLegalNav: true,
    sitemapPriority: 0.2,
  },
  datenschutz: {
    slug: { de: 'datenschutz', fr: 'protection-des-donnees', pt: 'protecao-de-dados' },
    published: { de: true, fr: false, pt: false },
    inMainNav: false,
    inLegalNav: true,
    sitemapPriority: 0.2,
  },
}

/**
 * Aufbau der Hauptnavigation.
 *
 * Fuenf Punkte, flach. Keine Aufklappebene, kein Mega-Menue.
 *
 * Bis zum Neuaufbau trug jeder Punkt ein Aufklappmenue mit bis zu vier
 * Unterzielen. Das war nicht falsch, aber es war laut: Wer die Seite oeffnet,
 * soll fuenf Woerter lesen und sich entscheiden, nicht siebzehn Ziele
 * abwaegen. Die Unterpunkte sind nicht verloren — sie stehen auf der jeweiligen
 * Bereichsseite, wo sie hingehoeren, und im Fussbereich.
 *
 * Die Startseite steht nicht in der Reihe: Dafuer ist das Logo da.
 * Kontakt steht nicht in der Reihe: Dafuer ist der Knopf rechts da. Auf
 * schmalen Geraeten, wo die Reihe zum Menue wird, ist Kontakt in der Liste.
 *
 * Rangfolge: Versicherungsbroking fuehrt, dann Treuhand. Personal Finance
 * folgt als dritter Beratungsbereich, danach Wissen und Ueber uns.
 */
export const mainNavOrder: readonly PageKey[] = [
  'versicherungen',
  'treuhand',
  'personalFinance',
  'wissen',
  'ueberUns',
]

/**
 * Seiten, die es zwar gibt, deren Inhalt aber noch entsteht.
 *
 * Unterschied zu einer fehlenden Seite: Der Punkt ist anklickbar und führt auf
 * etwas Lesbares. Er sagt nur dazu, dass dort noch nicht alles steht — sonst
 * erwartet man Beiträge und findet drei Ankündigungen.
 */
const IN_VORBEREITUNG: readonly PageKey[] = ['wissen']

/** Ein Punkt der Hauptnavigation. Ohne Ziel, solange es die Seite nicht gibt. */
export type NavItem = {
  page: PageKey
  /** Adresse — oder `null`, wenn die Seite in dieser Sprache fehlt. */
  href: string | null
  /** Seite vorhanden, Inhalt noch im Aufbau. */
  inVorbereitung: boolean
}

/**
 * Die Hauptnavigation einer Sprache.
 *
 * Anders als bisher wird ein Punkt, dessen Seite noch nicht steht, **nicht**
 * herausgefiltert. Er bleibt sichtbar und traegt den Vermerk „folgt", ist aber
 * nicht anklickbar: Die Struktur der Seite ist damit vollstaendig erkennbar,
 * ohne dass ein Link ins Leere fuehrt.
 *
 * Das ist der Unterschied zur frueheren Fassung, und er ist bewusst: Damals
 * standen fuenf angekuendigte Ziele im Menue und liessen es wie eine Baustelle
 * aussehen. Fuenf Hauptpunkte, von denen zwei noch entstehen, lesen sich
 * anders — als Plan, nicht als Luecke.
 */
export function mainNavItems(locale: Locale): NavItem[] {
  return mainNavOrder.map((page) => ({
    page,
    href: isPublished(page, locale) ? path(page, locale) : null,
    inVorbereitung: IN_VORBEREITUNG.includes(page),
  }))
}

export const legalNavOrder: readonly PageKey[] = ['impressum', 'datenschutz']

/** Pfad einer Seite in einer Sprache, immer mit Schraegstrich am Ende. */
export function path(key: PageKey, locale: Locale): string {
  const slug = pages[key].slug[locale]
  return slug === '' ? `/${locale}/` : `/${locale}/${slug}/`
}

export function isPublished(key: PageKey, locale: Locale): boolean {
  return pages[key].published[locale]
}

/**
 * Uebergeordnete Seite, falls der Slug mehrstufig ist.
 *
 * `treuhand/buchhaltung` haengt unter `treuhand`. Die Hierarchie kommt damit
 * aus dem Pfad und steht nicht ein zweites Mal daneben. Genutzt von der
 * Seiteneinordnung und vom Seitenkopf, der den Bereich als Vorzeile nennt.
 */
export function parentPage(key: PageKey, locale: Locale): PageKey | null {
  const slug = pages[key].slug[locale]
  const cut = slug.lastIndexOf('/')
  if (cut < 0) return null

  const parentSlug = slug.slice(0, cut)
  const match = (Object.keys(pages) as PageKey[]).find(
    (candidate) => pages[candidate].slug[locale] === parentSlug,
  )

  return match && isPublished(match, locale) ? match : null
}

/**
 * Weg zur Startseite — immer auf eine Seite, die es gibt.
 *
 * Seit Schritt 3 existieren FR und PT mit der Pilotseite, aber noch ohne
 * Startseite. Logo und Breadcrumb wuerden dort auf `/fr/` zeigen, und das
 * waere ein toter Link. Bis die Uebersetzung der Startseite vorliegt, fuehren
 * sie stattdessen auf die Leitsprache: lieber ein Sprachwechsel als ein 404.
 */
export function homeHref(locale: Locale): string {
  return hrefOrDefault('home', locale)
}

/**
 * Verweis auf eine Seite, die es in dieser Sprache vielleicht noch nicht gibt.
 *
 * Gibt es sie, fuehrt der Link dorthin. Gibt es sie nicht, fuehrt er auf die
 * Leitsprache statt ins Leere. Nur fuer Ziele verwenden, die immer erreichbar
 * sein muessen — Startseite und Kontakt. Fuer alles andere gilt weiterhin:
 * lieber kein Link als ein toter (`PageLink`).
 */
export function hrefOrDefault(key: PageKey, locale: Locale): string {
  return isPublished(key, locale) ? path(key, locale) : path(key, defaultLocale)
}

/** Alle in dieser Sprache veroeffentlichten Seiten, in Registry-Reihenfolge. */
export function publishedPages(locale: Locale): PageKey[] {
  return (Object.keys(pages) as PageKey[]).filter((key) => isPublished(key, locale))
}

/**
 * Sprachen, die mindestens eine veroeffentlichte Seite haben.
 *
 * Eine Sprache entsteht mit ihrer ersten Seite, nicht erst mit der Startseite.
 * Seit Schritt 3 gilt das fuer FR und PT: Dort gibt es genau die Pilotseite,
 * die Startseite folgt mit der Uebersetzung.
 */
export function localesWithPages(): Locale[] {
  return locales.filter((locale) => publishedPages(locale).length > 0)
}

export function legalNav(locale: Locale): PageKey[] {
  return legalNavOrder.filter((key) => pages[key].inLegalNav && isPublished(key, locale))
}

/**
 * Loest einen Pfad-Slug in einen Seitenschluessel auf.
 * Wird von der Catch-all-Route gebraucht.
 */
export function pageKeyFromSlug(locale: Locale, segments: string[]): PageKey | null {
  const slug = segments.join('/')
  const match = (Object.keys(pages) as PageKey[]).find((key) => pages[key].slug[locale] === slug)
  return match && isPublished(match, locale) ? match : null
}

/**
 * Ziel des Sprachumschalters: dieselbe Seite in der anderen Sprache.
 * Ist sie dort nicht veroeffentlicht, fuehrt der Wechsel auf die Startseite
 * jener Sprache — und ist diese ebenfalls nicht veroeffentlicht, auf die
 * Leitsprache.
 */
export function switchLocalePath(key: PageKey, target: Locale): string {
  if (isPublished(key, target)) return path(key, target)
  if (isPublished('home', target)) return path('home', target)
  return path('home', defaultLocale)
}
