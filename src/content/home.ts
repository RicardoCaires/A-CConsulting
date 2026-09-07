/**
 * Inhalt der Startseite.
 *
 * QUELLE: `content/source/schritt4_fassung2_de.md`, Abschnitt „Startseite".
 * Der Wortlaut ist von dort uebernommen und wird hier nicht umformuliert.
 * Bei Konflikten mit anderen Dokumenten hat Schritt 4, Fassung 2 Vorrang;
 * `CLAUDE.md` regelt die Arbeitsweise, nicht den Wortlaut.
 *
 * Die Startseite zeigt seit dem Redesign vom 04.09.2026 sechs Bereiche:
 *   1 Einstieg · 2 Leistungsbereiche · 3 Haeufige Anlaesse · 4 Warum A&C
 *   5 Wer wir sind · 6 Kontaktabschluss
 *
 * `process`, `pricing` und `location` bleiben hier stehen, werden auf der
 * Startseite aber nicht mehr ausgegeben — sie gehoeren auf die Unterseiten
 * (Treuhand, Versicherungen, Transparenz, Ueber uns, Kontakt). Der Wortlaut
 * bleibt erhalten, damit er beim Uebertragen nicht neu geschrieben wird.
 *
 * Deutsch ist die Quelle. FR und PT werden nachgezogen und erst dann in
 * `src/i18n/routes.ts` auf `published` gesetzt.
 *
 * Strukturierter Inhalt statt MDX: Die Startseite hat in allen drei Sprachen
 * dieselbe Gliederung, und der Typ erzwingt, dass beim Uebersetzen kein Block
 * verlorengeht. Fliesstextseiten werden dagegen als MDX gefuehrt.
 */

import type { Locale } from '@/i18n/config'
import type { PageKey } from '@/i18n/routes'

import { collectPending, type PendingNote, type Rich } from './types'

export { collectPending, isPending } from './types'
export type { Inline, PendingNote, Rich } from './types'

export type HomeContent = {
  meta: {
    title: string
    description: string
  }
  /** Beschriftung des Haupt-Handlungsknopfs, auf der Seite mehrfach verwendet. */
  primaryCta: string

  /** 1 — Einstieg / Positionierung */
  hero: {
    heading: string
    /**
     * Erster Satz des freigegebenen Lead-Absatzes — er allein beantwortet
     * „wer wird betreut". Mehr steht auf dem ersten Bildschirm nicht.
     */
    lead: string
    /** Zweiter Satz desselben Absatzes: Ort und Sprachen. */
    leadSecondary: string
  }

  /** 2 — Versicherungen, Treuhand, Steuern. Reihenfolge verbindlich. */
  services: {
    heading: string
    items: readonly {
      page: Extract<PageKey, 'versicherungen' | 'treuhand' | 'steuern'>
      heading: string
      body: string
      /** Stichworte der Verweiszeile, im Original durch Mittelpunkt getrennt. */
      facets: readonly string[]
    }[]
  }

  /** 3 — Haeufige Anlaesse. Die sechs Einstiege sind verbindlich. */
  occasions: {
    heading: string
    lead: string
    items: readonly {
      label: string
      target: PageKey
    }[]
  }

  /** 4 — Warum A&C */
  why: {
    heading: string
    items: readonly {
      heading: string
      body: Rich
    }[]
  }

  /** 5 — So arbeiten wir */
  process: {
    heading: string
    steps: readonly {
      heading: string
      body: Rich
    }[]
  }

  /** 6 — Kosten und Verguetung */
  pricing: {
    heading: string
    paragraphs: readonly Rich[]
    link: { target: PageKey; label: string }
  }

  /** 5 — Ansprechpartner */
  people: {
    heading: string
    body: string
    /** Die beiden Inhaber mit ihrer Funktion. Beides steht in Schritt 4. */
    members: readonly { name: string; role: string }[]
    detail: PendingNote
    link: { target: PageKey; label: string }
  }

  /** 8 — Standort und Region */
  location: {
    heading: string
    body: string
    openingHoursLabel: string
    openingHours: PendingNote
  }

  /** 9 — Kontaktabschluss */
  contact: {
    heading: string
    body: string
  }
}

const de: HomeContent = {
  meta: {
    title: 'Versicherungen, Treuhand und Steuern',
    description:
      'A&C Consulting betreut Privatpersonen, Selbständige und KMU im Seeland und im Kanton Bern. Sie erreichen uns in Lyss, auf Deutsch, Französisch und Portugiesisch.',
  },

  primaryCta: 'Unverbindliches Erstgespräch vereinbaren',

  // ---- 1 Einstieg -------------------------------------------------------
  hero: {
    heading: 'Versicherungen, Treuhand und Steuern bei denselben Ansprechpartnern',
    lead: 'A&C Consulting betreut Privatpersonen, Selbständige und KMU im Seeland und im Kanton Bern.',
    leadSecondary: 'Sie erreichen uns in Lyss, auf Deutsch, Französisch und Portugiesisch.',
  },

  // ---- 2 Die drei Leistungsbereiche -------------------------------------
  services: {
    heading: 'Was wir für Sie übernehmen',
    items: [
      {
        page: 'versicherungen',
        heading: 'Versicherungen',
        body: 'Wir prüfen Ihre bestehenden Verträge, vergleichen passende Lösungen aus den uns zugänglichen Angeboten und Gesellschaften und begleiten Sie, wenn ein Schaden eintritt.',
        facets: ['Privat und Betrieb', 'Vertragsprüfung', 'Schadenbetreuung'],
      },
      {
        page: 'treuhand',
        heading: 'Treuhand',
        body: 'Wir führen Ihre Buchhaltung laufend, rechnen Löhne ab, erledigen die Mehrwertsteuer und erstellen den Jahresabschluss.',
        facets: ['Buchhaltung', 'Lohn', 'Mehrwertsteuer', 'Jahresabschluss', 'Administration'],
      },
      {
        page: 'steuern',
        heading: 'Steuern',
        body: 'Wir erstellen Ihre Steuererklärung, reichen sie ein und prüfen später die Veranlagung.',
        facets: ['Privatpersonen', 'Selbständige', 'Firmen'],
      },
    ],
  },

  // ---- 3 Haeufige Anlaesse ----------------------------------------------
  occasions: {
    heading: 'Womit Menschen zu uns kommen',
    lead: 'Wählen Sie die Situation, die auf Sie zutrifft.',
    items: [
      { label: 'Ich suche eine Buchhaltung', target: 'treuhand' },
      { label: 'Ich möchte den Treuhänder wechseln', target: 'treuhaenderWechseln' },
      { label: 'Ich gründe eine Firma', target: 'firmengruendung' },
      { label: 'Ich stelle Mitarbeitende an', target: 'treuhand' },
      { label: 'Ich möchte meine Versicherungen prüfen lassen', target: 'versicherungen' },
      { label: 'Meine Steuererklärung steht an', target: 'steuern' },
    ],
  },

  // ---- 4 Warum A&C -------------------------------------------------------
  why: {
    heading: 'Weshalb Kundinnen und Kunden mit uns arbeiten',
    items: [
      {
        heading: 'Mehrere Bereiche, dieselben Ansprechpartner',
        body: 'Wer Ihre Buchhaltung führt, kennt auch Ihre Steuersituation und weiss, welche Versicherungen dazugehören. Sie müssen nicht zwischen mehreren Stellen vermitteln.',
      },
      {
        heading: 'Persönliche und direkte Betreuung',
        body: 'Sie haben feste Ansprechpartner und sprechen mit der Person, die Ihr Dossier bearbeitet.',
      },
      {
        heading: 'Beratung auf Deutsch, Französisch und Portugiesisch',
        body: [
          'Beratung und Korrespondenz auf Deutsch, Französisch oder Portugiesisch. ',
          { pending: 'ob die Korrespondenz in allen drei Sprachen geführt wird' },
        ],
      },
      {
        heading: 'Klare Abläufe',
        body: 'Sie wissen, was wir übernehmen, was bei Ihnen bleibt und wann Sie was von uns erhalten. Wie wir entschädigt werden, legen wir offen.',
      },
      {
        heading: 'Moderne Arbeitsweise',
        body: 'Wir automatisieren die Routine, nicht die Beratung. Digitale Prozesse nehmen uns wiederkehrende Arbeit ab. Die fachliche Prüfung und die Verantwortung bleiben bei uns.',
      },
    ],
  },

  // ---- 5 So arbeiten wir -------------------------------------------------
  process: {
    heading: 'In drei Schritten zur Zusammenarbeit',
    steps: [
      {
        heading: 'Erstgespräch',
        body: 'Wir schauen uns Ihre Situation an und Sie sagen uns, was Sie abgeben möchten. Das Gespräch ist unverbindlich.',
      },
      {
        heading: 'Analyse und Offerte',
        body: 'Sie erhalten schriftlich, welche Aufgaben wir übernehmen und was bei Ihnen bleibt.',
      },
      {
        heading: 'Umsetzung und laufende Betreuung',
        body: [
          'Wir übernehmen die vereinbarten Aufgaben in einem festen Rhythmus. Im Hintergrund erledigen digitale Prozesse wiederkehrende Schritte ',
          { pending: 'welche Schritte tatsächlich automatisiert sind' },
          '. Geprüft und verantwortet werden die Ergebnisse von uns.',
        ],
      },
    ],
  },

  // ---- 6 Kosten und Verguetung ------------------------------------------
  pricing: {
    heading: 'Was unsere Arbeit kostet',
    paragraphs: [
      'Bei Treuhand und Steuern rechnen wir nach Aufwand ab. Wie hoch dieser ausfällt, hängt von Ihrer Situation ab, etwa von der Anzahl Belege, von Mitarbeitenden oder von der Mehrwertsteuerpflicht. Vor Beginn erhalten Sie eine Offerte mit dem vereinbarten Umfang.',
      [
        'Bei Versicherungen werden wir von den Gesellschaften über eine Courtage entschädigt ',
        {
          pending:
            'ob dies für sämtliche vermittelten Produkte gilt oder in bestimmten Fällen ein Honorar vereinbart wird',
        },
        '.',
      ],
    ],
    link: { target: 'transparenz', label: 'Mehr zu unserer Rolle und zur Vergütung' },
  },

  // ---- 7 Wer wir sind ----------------------------------------------------
  people: {
    heading: 'Zwei Ansprechpartner',
    body: 'A&C Consulting wird von Ricardo Caires Cerqueira und Octavio Andrade geführt. Beide betreuen Mandate selbst.',
    members: [
      { name: 'Ricardo Caires Cerqueira', role: 'Geschäftsführer und Mitinhaber' },
      { name: 'Octavio Andrade', role: 'Geschäftsführer und Mitinhaber' },
    ],
    detail: { pending: 'je Person Funktion, Zuständigkeitsbereich und Sprachen' },
    link: { target: 'ueberUns', label: 'Mehr über uns' },
  },

  // ---- 8 Standort und Region --------------------------------------------
  location: {
    heading: 'Sie finden uns in Lyss',
    body: 'Bielstrasse 22, 3250 Lyss. Wir betreuen Kundinnen und Kunden in Lyss, im Seeland, in Biel/Bienne und im übrigen Kanton Bern.',
    openingHoursLabel: 'Öffnungszeiten',
    openingHours: {
      pending: 'verbindliche Zeiten, identisch mit dem Google-Unternehmensprofil',
    },
  },

  // ---- 9 Kontaktabschluss ------------------------------------------------
  contact: {
    heading: 'Sprechen wir über Ihre Situation',
    body: 'Rufen Sie an oder schreiben Sie uns. Im Erstgespräch klären wir, was Sie brauchen und wie wir Sie unterstützen können. Sie gehen damit keine Verpflichtung ein.',
  },
}

/**
 * FR und PT sind noch nicht uebersetzt und darum hier nicht vorhanden.
 * Sobald eine Uebersetzung vorliegt, wird sie hier ergaenzt und die Sprache in
 * `routes.ts` freigeschaltet.
 */
export const homeContent: Partial<Record<Locale, HomeContent>> = {
  de,
}

export function getHomeContent(locale: Locale): HomeContent | null {
  return homeContent[locale] ?? null
}

/** Jede offene Angabe der Startseite einer Sprache, in Lesereihenfolge. */
export function pendingOnHome(locale: Locale): string[] {
  const c = homeContent[locale]
  if (!c) return []

  return [
    ...c.why.items.flatMap((item) => collectPending(item.body)),
    ...c.process.steps.flatMap((step) => collectPending(step.body)),
    ...c.pricing.paragraphs.flatMap(collectPending),
    c.people.detail.pending,
    c.location.openingHours.pending,
  ]
}
