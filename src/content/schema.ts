import type { IconName } from '@/components/ui/Icon'
import type { Locale } from '@/i18n/config'
import type { PageKey } from '@/i18n/routes'

import type { Rich } from './types'

/**
 * Schema der Leistungsseiten (Vorlage B).
 *
 * Zweck: Inhalt und Layout trennen und alle drei Sprachen auf dieselbe
 * Struktur zwingen. Der Typ allein genuegt dafuer nicht — er verhindert
 * fehlende Felder, aber keine leeren. Darum prueft `pruefeLeistungsseite`
 * zusaetzlich die Inhalte und wirft bei einem Verstoss. Da alle Seiten beim
 * Bauen erzeugt werden, bricht das den Build: Eine unvollstaendige Seite geht
 * nicht halbfertig live.
 *
 * Fehlende Uebersetzungen fallen **nicht** stillschweigend auf Deutsch
 * zurueck. Ein Textfeld ist entweder ein Text in dieser Sprache oder
 * ausdruecklich als fehlend gekennzeichnet (`{ missing: '…' }`); die Vorlage
 * gibt an dieser Stelle eine sichtbare Marke aus.
 *
 * Offene Angaben aus Schritt 4 (`{ pending: '…' }`) sind etwas anderes und
 * bleiben unangetastet: Dort fehlt eine Auskunft von A&C, nicht eine
 * Uebersetzung.
 */

/* ---- Textfelder --------------------------------------------------------- */

/** Ein Text, der in dieser Sprache noch nicht vorliegt. */
export type FehlendeUebersetzung = {
  /** Was fehlt — Notiz an uns, erscheint nicht als Seitentext. */
  readonly missing: string
}

/** Entweder ein Text in dieser Sprache oder die ausdrueckliche Luecke. */
export type Text = string | FehlendeUebersetzung

export function fehltUebersetzung(wert: Text): wert is FehlendeUebersetzung {
  return typeof wert !== 'string'
}

/**
 * Ein Textfeld, das zusaetzlich offene Angaben aus Schritt 4 tragen darf.
 *
 * Fliesstext kann beides enthalten: eine fehlende Uebersetzung (ganzes Feld)
 * und offene Angaben mitten im Satz (`{ pending: '…' }`). Beides bleibt
 * getrennt sichtbar.
 */
export type RichText = Rich | FehlendeUebersetzung

export function fehltUebersetzungRich(wert: RichText): wert is FehlendeUebersetzung {
  return typeof wert === 'object' && !Array.isArray(wert) && 'missing' in wert
}

/* ---- Bausteine der Seite ------------------------------------------------ */

/** Ein Punkt aus „Das übernehmen wir“. */
export type Leistung = {
  icon: IconName
  /**
   * Geliefertes Symbol unter `public/bilder/<slug>/`, ohne Endung. Steht es
   * da, ersetzt es `icon`; sonst bleibt das Zeichen aus `Icon.tsx`.
   */
  bild?: string
  titel: Text
  /**
   * Hoechstens drei Stichworte; die Vorlage schneidet darueber hinaus ab.
   * Darf leer sein — dann nennt Schritt 4 fuer diese Leistung keine.
   */
  chips: readonly Text[]
}

/** Ein Schritt des Ablaufs. */
export type AblaufSchritt = {
  titel: Text
  text: RichText
  /** Geliefertes Symbol unter `public/bilder/<slug>/`, ohne Endung. Optional. */
  bild?: string
}

/** Eine Frage mit Antwort. */
export type FaqEintrag = {
  frage: Text
  antwort: RichText
}

/** Der vertiefende Abschnitt zwischen Ablauf und FAQ. Optional. */
export type Vertiefung = {
  titel: Text
  /** Darf offene Angaben aus Schritt 4 und fehlende Uebersetzungen enthalten. */
  absaetze: readonly RichText[]
  /** Aufzaehlung, wo die Quelle eine enthaelt. */
  liste?: readonly Rich[]
  /** Nachsatz unter der Aufzaehlung. */
  nachsatz?: readonly Rich[]
}

/** Platz fuer eine Aufnahme, die noch nicht vorliegt. */
export type Bildplatz = {
  label: string
  note?: string
}

export type Bereich = 'versicherungen' | 'treuhand' | 'steuern'
/**
 * Flaeche des Abschlussblocks.
 * `flaeche` ist der Normalfall: `primary_navy`, eine der wiederkehrenden
 * Farbflaechen aus dem Standard. `hell` fuer Seiten, die ruhig ausklingen sollen.
 */
export type CtaVariante = 'flaeche' | 'hell'

/* ---- Die Seite ---------------------------------------------------------- */

export type Leistungsseite = {
  /** Seitenschluessel aus `i18n/routes.ts`. Der Pfad kommt von dort. */
  slug: PageKey
  locale: Locale
  /** Ueberschrift der Seite. */
  titel: Text
  /** Der Nutzen in einem Satz. Steht unter dem Titel. */
  nutzenSatz: RichText
  seoTitel: Text
  seoBeschreibung: Text
  bereich: Bereich
  /**
   * Ueberschriften der drei festen Abschnitte.
   *
   * Die Vorlage gibt die Reihenfolge vor, nicht den Wortlaut: Schritt 4 nennt
   * je Seite eigene Ueberschriften, und die werden nicht vereinheitlicht.
   */
  abschnitte: {
    leistungen: Text
    ablauf: Text
    fragen: Text
  }
  /**
   * Bild im Seitenkopf. `null`, wenn bewusst keines vorgesehen ist — der Kopf
   * traegt dann die dunkle Flaeche allein. Fotos gibt es dort, wo ein Mensch
   * oder das Buero zu sehen ist; Grafiken dort, wo etwas zu erklaeren ist;
   * sonst nichts.
   */
  bild: Bildplatz | null
  /**
   * Hintergrund der gemeinsamen Flaeche von Leistungen und Ablauf, als
   * Dateiname unter `public/bilder/<slug>/` ohne Endung. Optional — ohne ihn
   * steht die Flaeche auf dem hellen Grundton.
   */
  hintergrund?: string
  /** „Das übernehmen wir“ als Icon-Raster. */
  leistungen: readonly Leistung[]
  ablauf: readonly AblaufSchritt[]
  /**
   * Kategoriezeile, Einleitung und Zusatz der haeufigen Fragen — wie auf
   * `/versicherungen`. Optional: Ohne sie steht nur der Titel ueber der Karte.
   */
  fragenZusatz?: {
    kategorie: Text
    einleitung: readonly Text[]
    schluss: Text
  }
  /** Optional: der von der Startseite abgegebene Fliesstext landet hier. */
  vertiefung?: Vertiefung
  faq: readonly FaqEintrag[]
  /**
   * Der Abschluss unter den Fragen. Optional seit dem 11.09.2026: Ricardo hat
   * ihn auf `/treuhand/buchhaltung` streichen lassen. Ohne ihn traegt der
   * Knopf im Seitenkopf die Beschriftung der Kopfzeile.
   */
  ctaVariante?: CtaVariante
  cta?: {
    titel: Text
    text: RichText
    /** Beschriftung des Handlungsknopfs. Steht so in Schritt 4. */
    knopf: Text
  }
}

/* ---- Pruefung ----------------------------------------------------------- */

/** Mindestanzahlen. Darunter ist eine Seite kein Angebot, sondern ein Entwurf. */
const MINDESTENS = {
  leistungen: 3,
  ablauf: 2,
  faq: 2,
} as const

function textLeer(wert: Text): boolean {
  return typeof wert === 'string' ? wert.trim() === '' : wert.missing.trim() === ''
}

/** Leer ist ein Fliesstextfeld, wenn es weder Text noch offene Angabe traegt. */
function richLeer(wert: RichText): boolean {
  if (fehltUebersetzungRich(wert)) return wert.missing.trim() === ''
  if (typeof wert === 'string') return wert.trim() === ''
  return wert.length === 0
}

/**
 * Prueft eine Leistungsseite und wirft, wenn etwas fehlt.
 *
 * Sammelt alle Befunde und meldet sie zusammen — wer eine Seite anlegt, soll
 * nicht sechsmal bauen muessen, um sechs Fehler zu finden.
 */
export function pruefeLeistungsseite(seite: Leistungsseite): void {
  const fehler: string[] = []
  const wo = `${seite.slug} (${seite.locale})`

  const pflichtText = (feld: string, wert: Text | undefined) => {
    if (wert === undefined) {
      fehler.push(`${feld} fehlt`)
      return
    }
    if (textLeer(wert)) {
      fehler.push(
        typeof wert === 'string'
          ? `${feld} ist leer`
          : `${feld} ist als fehlende Uebersetzung markiert, sagt aber nicht, was fehlt`,
      )
    }
  }

  const pflichtRich = (feld: string, wert: RichText | undefined) => {
    if (wert === undefined) {
      fehler.push(`${feld} fehlt`)
      return
    }
    if (richLeer(wert)) fehler.push(`${feld} ist leer`)
  }

  pflichtText('titel', seite.titel)
  pflichtRich('nutzenSatz', seite.nutzenSatz)
  pflichtText('seoTitel', seite.seoTitel)
  pflichtText('seoBeschreibung', seite.seoBeschreibung)
  // Der Abschluss ist optional. Steht er da, muss er vollstaendig sein.
  if (seite.cta) {
    pflichtText('cta.titel', seite.cta.titel)
    pflichtRich('cta.text', seite.cta.text)
    pflichtText('cta.knopf', seite.cta.knopf)
  }
  pflichtText('abschnitte.leistungen', seite.abschnitte?.leistungen)
  pflichtText('abschnitte.ablauf', seite.abschnitte?.ablauf)
  pflichtText('abschnitte.fragen', seite.abschnitte?.fragen)

  if (seite.leistungen.length < MINDESTENS.leistungen) {
    fehler.push(`leistungen: ${seite.leistungen.length} statt mindestens ${MINDESTENS.leistungen}`)
  }
  if (seite.ablauf.length < MINDESTENS.ablauf) {
    fehler.push(`ablauf: ${seite.ablauf.length} Schritte statt mindestens ${MINDESTENS.ablauf}`)
  }
  if (seite.faq.length < MINDESTENS.faq) {
    fehler.push(`faq: ${seite.faq.length} Fragen statt mindestens ${MINDESTENS.faq}`)
  }

  seite.leistungen.forEach((leistung, i) => {
    pflichtText(`leistungen[${i}].titel`, leistung.titel)
    if (!Array.isArray(leistung.chips)) fehler.push(`leistungen[${i}].chips fehlt`)
  })

  seite.ablauf.forEach((schritt, i) => {
    pflichtText(`ablauf[${i}].titel`, schritt.titel)
    pflichtRich(`ablauf[${i}].text`, schritt.text)
  })

  seite.faq.forEach((eintrag, i) => {
    pflichtText(`faq[${i}].frage`, eintrag.frage)
    pflichtRich(`faq[${i}].antwort`, eintrag.antwort)
  })

  if (seite.vertiefung && seite.vertiefung.absaetze.length === 0) {
    fehler.push('vertiefung ist gesetzt, enthaelt aber keinen Absatz')
  }

  if (fehler.length > 0) {
    throw new Error(
      `Leistungsseite ${wo} ist unvollstaendig:\n  - ${fehler.join('\n  - ')}\n` +
        `Eine unvollstaendige Seite wird nicht gebaut. Fehlende Uebersetzungen ` +
        `werden als { missing: '…' } gekennzeichnet, nicht weggelassen.`,
    )
  }
}

/** Prueft eine ganze Sprachfassung auf einmal. */
export function pruefeAlle(seiten: readonly Leistungsseite[]): readonly Leistungsseite[] {
  seiten.forEach(pruefeLeistungsseite)
  return seiten
}
