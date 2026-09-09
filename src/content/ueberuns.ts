/**
 * Inhalt der Seite „Ueber uns".
 *
 * QUELLEN: `content/source/schritt4_fassung2_de.md` (Abschnitt „Über uns") und
 * `content/source/revision_2026-09-09_de.md` fuer die drei geaenderten Stellen.
 *
 * Bis zum 09.09.2026 lief die Seite ueber das allgemeine Blockmodell. Dort ist
 * jeder Abschnitt „Ueberschrift plus Absaetze" — und genau so sah sie aus:
 * fuenf gleich gebaute Bloecke hintereinander, jeder mit demselben Abstand.
 * Der Inhalt war nie das Problem.
 *
 * Darum steht der Inhalt jetzt typisiert da, mit **benannten Rollen** statt
 * gleichrangiger Absaetze: Name, Rolle, Kernbeschreibung, Werdegang, Sprachen,
 * Telefon. Erst diese Unterscheidung erlaubt der Vorlage, sie verschieden
 * gross zu setzen — der Werdegang kleiner als der Name, die Sprachen als
 * Randangabe. Ein Absatz-Array kann das nicht.
 *
 * Die Anker `inhaber`, `arbeitsweise` und `region` bleiben erhalten: Auf sie
 * verweisen Navigation und andere Seiten.
 */

import type { Rich } from '@/content/types'
import type { Locale } from '@/i18n/config'
import type { PageKey } from '@/i18n/routes'

/** Ein Inhaber, in der Reihenfolge der Wichtigkeit fuer den Blick. */
export type Inhaber = {
  name: string
  /** Kurz. Steht direkt unter dem Namen und wird als Vorzeile gesetzt. */
  rolle: string
  /** Ein bis zwei Saetze. Das Wichtigste nach dem Namen. */
  kern: Rich
  /** Der berufliche Weg. Bewusst sekundaer gesetzt. */
  werdegang: Rich
  sprachen: string
  /** Beschriftung und Nummer; die Nummer kommt aus `company.ts`. */
  telefon: { label: string; wer: 'ricardo' | 'octavio' }
  bild: { label: string; note?: string }
}

/** Ein Grundsatz. Die Nummer setzt die Vorlage, nicht der Inhalt. */
export type Prinzip = {
  titel: string
  satz: Rich
}

export type UeberunsContent = {
  meta: { title: string; description: string }

  kopf: {
    eyebrow: string
    titel: string
    satz: string
    bild: { label: string; note?: string }
  }

  inhaber: {
    titel: string
    leute: readonly Inhaber[]
  }

  arbeitsweise: {
    titel: string
    prinzipien: readonly Prinzip[]
  }

  standort: {
    titel: string
    /** Die Anschrift kommt aus `company.ts`, nicht aus dem Text. */
    adresse: Rich
    satz: string
    /** Kurzangaben unter der Komposition. Keine Saetze. */
    meta: readonly string[]
    bild: { label: string; note?: string }
  }

  abschluss: {
    titel: string
    satz: string
    knopf: { text: string; ziel: PageKey }
  }
}

const de: UeberunsContent = {
  meta: {
    title: 'Zwei Ansprechpartner, drei Bereiche',
    description:
      'A&C Consulting wird von Ricardo Caires Cerqueira und Octavio Andrade geführt. Beide betreuen Mandate selbst.',
  },

  // ---- 1 Seitenkopf
  //
  // Die Ueberschrift bleibt, wie Ricardo sie am 07.09.2026 gewaehlt hat
  // (Variante 4). Der Auftrag bot eine neue an — der Inhalt war aber nicht das
  // Problem, und eine getroffene Entscheidung wird nicht nebenbei umgeworfen.
  kopf: {
    eyebrow: 'Über A&C',
    titel: 'Zwei Ansprechpartner, drei Bereiche',
    satz: 'A&C Consulting wird von Ricardo Caires Cerqueira und Octavio Andrade geführt. Beide betreuen Mandate selbst.',
    bild: { label: 'RICARDO & OCTAVIO', note: 'Aufnahme 2 der Shootingliste' },
  },

  // ---- 2 Die beiden Inhaber
  inhaber: {
    titel: 'Die beiden Inhaber',
    leute: [
      {
        name: 'Ricardo Caires Cerqueira',
        rolle: 'Geschäftsführer und Mitinhaber',
        kern: 'Zuständig für Treuhand, Steuern und Versicherungen. Als Versicherungsvermittler bei der FINMA registriert.',
        werdegang:
          'Beruflicher Weg: Kaufmann EFZ, danach im Finanz- und Rechnungswesen der Creabeton Matériaux AG in Lyss verantwortlich für Kreditoren, Debitoren und Anlagebuchhaltung sowie Leiter der Berufsbildung. Abschlüsse: Sachbearbeiter Rechnungswesen VSK am Feusi Bildungszentrum Bern und Versicherungsvermittler VBV.',
        sprachen: 'Beratungssprachen: Deutsch, Französisch, Portugiesisch und Englisch.',
        telefon: { label: 'Direkt erreichbar unter ', wer: 'ricardo' },
        bild: { label: 'PORTRÄT RICARDO', note: 'Aufnahme 4 der Shootingliste' },
      },
      {
        name: 'Octavio Andrade',
        rolle: 'Geschäftsführer und Mitinhaber',
        kern: 'Zuständig für Versicherungen.',
        werdegang:
          'Beruflicher Weg: Kundenberater und Verkaufsleiter bei der Allianz Suisse in Biel, danach Hauptagent der Zurich Versicherungen in Biel, seither selbstständiger Versicherungsbroker. Abschluss: Versicherungsvermittler VBV.',
        sprachen: 'Beratungssprachen: Deutsch, Französisch, Portugiesisch und Englisch.',
        telefon: { label: 'Direkt erreichbar unter ', wer: 'octavio' },
        bild: { label: 'PORTRÄT OCTAVIO', note: 'Aufnahme 5 der Shootingliste' },
      },
    ],
  },

  // ---- 3 Wie wir arbeiten
  //
  // Das dritte Prinzip hiess „Digital, wo es etwas bringt", der Text darunter
  // sagte aber nichts Digitales — ein Rest der am 07.09.2026 gestrichenen
  // Automatisierung. Ueberschrift und Text passen jetzt zusammen.
  arbeitsweise: {
    titel: 'Wie wir arbeiten',
    prinzipien: [
      {
        titel: 'Persönlich',
        satz: 'Sie sprechen mit der Person, die Ihr Dossier bearbeitet. Wer für Sie zuständig ist, wissen Sie ab dem ersten Gespräch.',
      },
      {
        titel: 'Nachvollziehbar',
        satz: 'Zu Beginn halten wir schriftlich fest, welche Aufgaben wir übernehmen und welche bei Ihnen bleiben. Ändert sich etwas am Umfang, sprechen wir vorher darüber.',
      },
      {
        titel: 'Digital',
        satz: 'Moderne Prozesse dort, wo sie Administration vereinfachen. Die fachliche Prüfung und die Verantwortung bleiben bei uns.',
      },
      {
        titel: 'Vertraulich',
        satz: 'Ihre Daten werden in der Schweiz verarbeitet und vertraulich behandelt.',
      },
      {
        titel: 'Mit klaren Grenzen',
        satz: 'Tätigkeitsbereiche: Versicherungen, Treuhand und Steuern. Nicht zu unseren Leistungen gehören die aktienrechtliche Revision und die Rechtsberatung. Wo das nötig wird, arbeiten wir mit Fachpersonen zusammen.',
      },
    ],
  },

  // ---- 4 Standort
  standort: {
    titel: 'Wo Sie uns finden',
    adresse: [{ company: 'buero' }],
    satz: 'Unser Büro liegt an der Bielstrasse in Lyss, wenige Minuten vom Bahnhof. Termine finden bei uns statt oder bei Ihnen — wie es Ihnen besser passt.',
    meta: ['Seeland', 'Kanton Bern', 'Deutsch', 'Französisch', 'Portugiesisch'],
    bild: { label: 'BÜRO LYSS', note: 'Aufnahme 6 der Shootingliste' },
  },

  // ---- 5 Abschluss
  abschluss: {
    titel: 'Lernen Sie uns kennen',
    satz: 'Für ein erstes Gespräch rufen Sie an oder schreiben Sie uns.',
    knopf: { text: 'Erstgespräch anfragen', ziel: 'kontakt' },
  },
}

/* ---- Sprachen ------------------------------------------------------------ */

const inhalte: Record<Locale, UeberunsContent | null> = {
  de,
  fr: null,
  pt: null,
}

export function getUeberuns(locale: Locale): UeberunsContent | null {
  return inhalte[locale]
}
