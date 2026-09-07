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
    // Pilotseite fuer Vorlage B (Schritt 3). In FR und PT steht die Struktur,
    // der Wortlaut fehlt noch und ist auf der Seite als solcher markiert.
    published: { de: true, fr: true, pt: true },
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
    published: { de: false, fr: false, pt: false },
    inMainNav: false,
    inLegalNav: true,
    sitemapPriority: 0.2,
  },
  datenschutz: {
    slug: { de: 'datenschutz', fr: 'protection-des-donnees', pt: 'protecao-de-dados' },
    published: { de: false, fr: false, pt: false },
    inMainNav: false,
    inLegalNav: true,
    sitemapPriority: 0.2,
  },
}

/**
 * Aufbau der Hauptnavigation.
 *
 * Fuenf Hauptpunkte, jeder mit Unterkategorien. Sie steht auf jeder Seite
 * identisch im Kopf- und im Fussbereich; die Startseite ist der erste Eintrag,
 * damit man von ueberall mit einem Klick zurueckkommt — zusaetzlich zum Logo.
 *
 * Ein Unterpunkt ist entweder eine eigene Seite oder ein Abschnitt einer
 * bestehenden Seite. Der zweite Fall ist kein Notbehelf: „Für Privatpersonen"
 * ist ein Abschnitt der Versicherungsseite und soll dort bleiben — ein Sprung
 * dorthin fuehrt schneller ans Ziel als eine eigene duenne Seite. So entsteht
 * nirgends eine Sackgasse und kein Link ins Leere.
 *
 * Treuhand ist die Oberkategorie fuer alles Kaufmaennische. Steuern und
 * Firmengruendung stehen darunter, obwohl ihre Adressen flach bleiben
 * (`/de/steuern`, `/de/firmengruendung`): Beide haben laut Schritt 4 eine
 * eigene Suchintention, und wer „Steuererklaerung Lyss" sucht, sucht nicht
 * nach Treuhand. Navigation und Adresse muessen nicht deckungsgleich sein —
 * die Einordnung zeigt die Breadcrumb.
 *
 * Innerhalb der Leistungen gilt die verbindliche Rangfolge:
 * Versicherungsbroking, dann Treuhand.
 */

/** Beschriftungen der Abschnitts-Unterpunkte. Sie stehen in `ui.navSection`. */
export type NavSectionKey =
  | 'privatkunden'
  | 'unternehmen'
  | 'vertragspruefung'
  | 'schadenfall'
  | 'team'
  | 'arbeitsweise'
  | 'erstgespraech'
  | 'rueckruf'
  | 'standort'

export type NavChild =
  /** Eine eigene Seite. */
  | { kind: 'page'; page: PageKey }
  /** Ein Abschnitt einer bestehenden Seite. */
  | { kind: 'section'; page: PageKey; anchor: string; label: NavSectionKey }
  /** Angekuendigt, aber noch nirgends vorhanden. */
  | { kind: 'planned'; label: NavSectionKey }

export type NavEntry = {
  page: PageKey
  children?: readonly NavChild[]
}

export const mainNavTree: readonly NavEntry[] = [
  { page: 'home' },
  {
    page: 'versicherungen',
    children: [
      { kind: 'section', page: 'versicherungen', anchor: 'privatpersonen', label: 'privatkunden' },
      { kind: 'section', page: 'versicherungen', anchor: 'unternehmen', label: 'unternehmen' },
      { kind: 'section', page: 'versicherungen', anchor: 'ablauf', label: 'vertragspruefung' },
      { kind: 'section', page: 'versicherungen', anchor: 'schadenfall', label: 'schadenfall' },
    ],
  },
  {
    page: 'treuhand',
    children: [
      { kind: 'page', page: 'buchhaltung' },
      { kind: 'page', page: 'lohnbuchhaltung' },
      { kind: 'page', page: 'mehrwertsteuer' },
      { kind: 'page', page: 'jahresabschluss' },
      { kind: 'page', page: 'steuern' },
      { kind: 'page', page: 'firmengruendung' },
      { kind: 'page', page: 'treuhaenderWechseln' },
    ],
  },
  {
    page: 'ueberUns',
    children: [
      { kind: 'section', page: 'ueberUns', anchor: 'inhaber', label: 'team' },
      { kind: 'section', page: 'ueberUns', anchor: 'arbeitsweise', label: 'arbeitsweise' },
      { kind: 'page', page: 'transparenz' },
    ],
  },
  {
    page: 'kontakt',
    children: [
      { kind: 'section', page: 'kontakt', anchor: 'direkt', label: 'erstgespraech' },
      { kind: 'planned', label: 'rueckruf' },
      { kind: 'section', page: 'kontakt', anchor: 'buero', label: 'standort' },
    ],
  },
]

/** Flache Reihenfolge — fuer Stellen, die keine Hierarchie brauchen. */
export const mainNavOrder: readonly PageKey[] = mainNavTree.map((entry) => entry.page)

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

/** Hauptnavigation einer Sprache — nur veroeffentlichte Seiten, flach. */
export function mainNav(locale: Locale): PageKey[] {
  return mainNavOrder.filter((key) => isPublished(key, locale))
}

/**
 * Hauptnavigation mit Unterpunkten.
 *
 * Eine Unterseite erscheint auch dann, wenn sie noch nicht veroeffentlicht ist —
 * die Struktur soll vollstaendig sichtbar sein. Sie ist dann nicht anklickbar
 * und traegt den Vermerk „folgt".
 */
export function mainNavWithChildren(locale: Locale): NavEntry[] {
  return mainNavTree
    .filter((entry) => isPublished(entry.page, locale))
    .map((entry) => ({ page: entry.page, children: entry.children }))
}

/**
 * Ziel eines Unterpunkts — oder `null`, wenn es ihn noch nicht gibt.
 * Abschnitte fuehren auf die Sprungmarke der Seite, auf der sie stehen.
 */
export function navChildHref(child: NavChild, locale: Locale): string | null {
  if (child.kind === 'planned') return null
  if (!isPublished(child.page, locale)) return null
  return child.kind === 'section'
    ? `${path(child.page, locale)}#${child.anchor}`
    : path(child.page, locale)
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
