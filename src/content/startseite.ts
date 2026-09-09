/**
 * Inhalt der Startseite.
 *
 * Der Wortlaut stammt aus `content/source/startseite_de.md`. Diese Quelle ist
 * neu und loest fuer die Startseite die Fassung aus Schritt 4 ab — dort standen
 * neun Abschnitte, hier stehen sieben. Der frueher freigegebene Wortlaut bleibt
 * unter `content/source/schritt4_fassung2_de.md` unveraendert stehen und gilt
 * weiter fuer alle Leistungsseiten.
 *
 * **Die neue Quelle ist noch nicht von Ricardo abgenommen.** Bis dahin ist die
 * Startseite ein Entwurf. `scripts/check-source.mjs` prueft, dass hier kein
 * Satz steht, der nicht in einer der beiden Quellen vorkommt.
 *
 * Was nicht belegt ist, wird als offene Angabe markiert und nie erfunden.
 * Diese Stellen erscheinen im Produktionsbau nicht und blockieren ueber
 * `check:pending --strict` den Go-live.
 */

import type { Rich } from '@/content/types'
import type { Locale } from '@/i18n/config'
import type { PageKey } from '@/i18n/routes'

/* ---- Formen ------------------------------------------------------------- */

type BereichInhalt = {
  titel: string
  text: string
  stichworte: readonly string[]
  ziel: PageKey
  linkText: string
}

type FallInhalt = {
  text: string
  ziel: PageKey
  anker?: string
}

type BeitragInhalt = {
  datum: Rich
  titel: Rich
  anriss: Rich
}

export type StartseiteContent = {
  meta: { title: string; description: string }
  /** Steht im Kopf und am Ende der Seite. Immer derselbe Wortlaut. */
  cta: string
  einstieg: {
    eyebrow: string
    titel: string
    satz: string
    weiter: { text: string; ziel: PageKey }
    bild: { label: string; note?: string }
  }
  bereiche: {
    titel: string
    leit: BereichInhalt & { bild: { label: string; note?: string } }
    weitere: readonly BereichInhalt[]
  }
  faelle: {
    titel: string
    einleitung: string
    eintraege: readonly FallInhalt[]
  }
  gruende: {
    titel: string
    punkte: readonly { titel: string; satz: string }[]
  }
  personen: {
    titel: string
    einleitung: string
    leute: readonly {
      name: string
      funktion: string
      saetze: readonly Rich[]
      bild: { label: string; note?: string }
    }[]
  }
  wissen: {
    titel: string
    einleitung: string
    beitraege: readonly BeitragInhalt[]
    weiterlesen: string
    alle: string
  }
  abschluss: {
    titel: string
    satz: string
  }
}

/* ---- Deutsch — die Quelle ------------------------------------------------ */

const de: StartseiteContent = {
  meta: {
    title: 'Versicherungen, Treuhand und Personal Finance in Lyss',
    description:
      'Versicherungsbroking, Treuhand und persönliche Finanzplanung bei denselben zwei Ansprechpartnern. A&C Consulting GmbH in Lyss, Kanton Bern.',
  },

  cta: 'Erstgespräch vereinbaren',

  // ---- 1 Einstieg
  einstieg: {
    eyebrow: 'Versicherungen · Treuhand · Personal Finance',
    titel: 'Zwei Ansprechpartner statt drei Adressen',
    satz: 'Versicherungsbroking, Treuhand und persönliche Finanzplanung aus einem Büro in Lyss. Beratung auf Deutsch, Portugiesisch und Englisch.',
    weiter: { text: 'Wie wir arbeiten', ziel: 'ueberUns' },
    bild: {
      label: 'BÜRO LYSS / TEAM',
      note: 'Aufnahme 1 der Shootingliste',
    },
  },

  // ---- 2 Die drei Bereiche
  bereiche: {
    titel: 'Was wir für Sie übernehmen',

    // Versicherungsbroking führt — darum steht es allein und gross.
    leit: {
      titel: 'Versicherungen',
      text: 'Wir vertreten Sie, nicht die Versicherung. Wir prüfen Ihre Verträge, holen Offerten ein und übernehmen den Schriftverkehr — auch im Schadenfall.',
      stichworte: [
        'Krankenversicherung und Zusatzversicherung',
        'Hausrat, Haftpflicht und Motorfahrzeug',
        'Leben und Säule 3a',
        'BVG, UVG und Krankentaggeld',
        'Betriebshaftpflicht und Sachversicherung',
      ],
      ziel: 'versicherungen',
      linkText: 'Zu den Versicherungen',
      bild: {
        label: 'BERATUNGSGESPRÄCH',
        note: 'Aufnahme 3 der Shootingliste',
      },
    },

    weitere: [
      {
        titel: 'Treuhand',
        text: 'Buchhaltung, Löhne und Abschluss für Selbständige und kleine Betriebe. Auch dann, wenn Sie mitten im Jahr wechseln.',
        stichworte: [
          'Buchhaltung',
          'Lohnadministration und Sozialversicherungen',
          'Mehrwertsteuer und Jahresabschluss',
          'Firmengründung',
          'Treuhänderwechsel',
        ],
        ziel: 'treuhand',
        linkText: 'Zur Treuhand',
      },
      {
        titel: 'Personal Finance',
        text: 'Zwei Fragen, die im Alltag untergehen: Wohin fliesst Ihr Geld, und was bleibt für später.',
        stichworte: ['Budget', 'Vorsorge'],
        ziel: 'personalFinance',
        linkText: 'Zu Personal Finance',
      },
    ],
  },

  // ---- 3 Geschäftsfälle
  faelle: {
    titel: 'Womit Menschen zu uns kommen',
    einleitung: 'Sechs Ausgangslagen, die bei uns am häufigsten am Anfang stehen.',
    eintraege: [
      { text: 'Ich gründe ein Unternehmen', ziel: 'firmengruendung' },
      { text: 'Ich stelle Mitarbeitende ein', ziel: 'treuhand' },
      { text: 'Ich möchte meine Buchhaltung abgeben', ziel: 'buchhaltung' },
      { text: 'Ich möchte meinen Treuhänder wechseln', ziel: 'treuhaenderWechseln' },
      { text: 'Ich möchte meine Versicherungen prüfen', ziel: 'versicherungen' },
      { text: 'Ich habe einen Schadenfall', ziel: 'versicherungen', anker: 'schadenfall' },
    ],
  },

  // ---- 4 Weshalb A&C
  gruende: {
    titel: 'Weshalb Kundinnen und Kunden mit uns arbeiten',
    punkte: [
      {
        titel: 'Persönliche Ansprechpartner',
        satz: 'Sie haben einen Namen und eine Direktnummer. Wer Ihr Dossier führt, geht auch ans Telefon.',
      },
      {
        titel: 'Versicherungen und Treuhand aus einer Hand',
        satz: 'Zwei Bereiche, dieselben Ansprechpartner. Ihre Ausgangslage müssen Sie nur einmal erklären.',
      },
      {
        titel: 'Direkte Kommunikation',
        satz: 'Wir sagen, was geht und was nicht — auch dann, wenn daraus kein Auftrag wird.',
      },
      {
        titel: 'Sorgfältige Beratung',
        satz: 'Wir sehen uns Ihre Situation an, bevor wir etwas empfehlen. Nicht umgekehrt.',
      },
    ],
  },

  // ---- 5 Ansprechpartner
  personen: {
    titel: 'Zwei Ansprechpartner',
    einleitung:
      'Bei A&C sprechen Sie mit einem von zwei Menschen — und zwar mit dem, der Ihr Dossier führt.',
    leute: [
      {
        name: 'Ricardo Caires Cerqueira',
        funktion: 'Geschäftsführung',
        saetze: [
          'Geschäftsführer und Mitinhaber. Zuständig für Treuhand, Steuern und Versicherungen.',
          'Abschlüsse: Sachbearbeiter Rechnungswesen VSK am Feusi Bildungszentrum Bern und Versicherungsvermittler VBV.',
        ],
        bild: { label: 'PORTRÄT RICARDO', note: 'Aufnahme 4 der Shootingliste' },
      },
      {
        name: 'Octavio Andrade',
        funktion: 'Mitinhaber',
        saetze: [
          'Geschäftsführer und Mitinhaber. Zuständig für Versicherungen.',
          'Beruflicher Weg: Kundenberater und Verkaufsleiter bei der Allianz Suisse in Biel, danach Hauptagent der Zurich Versicherungen in Biel, seither selbstständiger Versicherungsbroker.',
        ],
        bild: { label: 'PORTRÄT OCTAVIO', note: 'Aufnahme 5 der Shootingliste' },
      },
    ],
  },

  // ---- 6 Wissen
  //
  // Es gibt noch keinen einzigen Beitrag. Was hier steht, sind die drei
  // geplanten Themen — als Plan, nicht als Versprechen. Datum und Anriss
  // bleiben offen, weil es sie noch nicht gibt; sie werden nicht erfunden.
  wissen: {
    titel: 'Wissen',
    einleitung: 'Kurze Beiträge zu Fragen, die im Erstgespräch immer wieder kommen.',
    beitraege: [
      {
        datum: [{ pending: 'Datum, sobald der Beitrag geschrieben ist' }],
        titel: 'Was ein Maklermandat ist — und was es kostet',
        anriss: [{ pending: 'Anriss, zwei Zeilen' }],
      },
      {
        datum: [{ pending: 'Datum, sobald der Beitrag geschrieben ist' }],
        titel: 'Treuhänder wechseln: worauf es beim Zeitpunkt ankommt',
        anriss: [{ pending: 'Anriss, zwei Zeilen' }],
      },
      {
        datum: [{ pending: 'Datum, sobald der Beitrag geschrieben ist' }],
        titel: 'Budget führen, ohne jeden Kaffee aufzuschreiben',
        anriss: [{ pending: 'Anriss, zwei Zeilen' }],
      },
    ],
    weiterlesen: 'Weiterlesen',
    alle: 'Alle Beiträge',
  },

  // ---- 7 Abschluss
  abschluss: {
    titel: 'Sprechen wir über Ihre Situation',
    satz: 'Ein Erstgespräch kostet nichts und verpflichtet zu nichts. Danach wissen Sie, ob wir zu Ihnen passen.',
  },
}

/* ---- Sprachen ------------------------------------------------------------ */

/**
 * FR und PT liegen nicht vor. Sie stehen in `routes.ts` auf
 * `published: false` und sind damit nicht erreichbar; hier steht `null`,
 * damit eine fehlende Uebersetzung nicht versehentlich zur deutschen Fassung
 * zurueckfaellt.
 */
const inhalte: Record<Locale, StartseiteContent | null> = {
  de,
  fr: null,
  pt: null,
}

export function getStartseite(locale: Locale): StartseiteContent | null {
  return inhalte[locale]
}
