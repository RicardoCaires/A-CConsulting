/**
 * Inhalt der Startseite.
 *
 * Fassung vom 14.10.2026, auf Ricardos Auftrag («zu viele inhalte», «weniger nach KI
 * aussehen», Vorbild simply.ch, Digitalisierung und Kundenportal in den Vordergrund,
 * Finanzplanung entfernt). QUELLEN: `content/source/umbau_2026-10_de.md` für die neuen
 * Texte (Vorschläge, Ricardo bestätigt), `startseite_de.md` für den freigegebenen
 * Wortlaut, der weiterverwendet wird (Digital, Ansprechpartner, Abschluss).
 *
 * Aufbau: Banner · Einstieg · Leistungen als Listen · Digital mit Beispielansicht ·
 * Ansprechpartner · Kontakt. Keine Vorzeilen, keine Werbesprüche, keine
 * Symbolkacheln, keine Illustrationen.
 */

import type { Locale } from '@/i18n/config'
import type { PageKey } from '@/i18n/routes'

/** Zweifarbige Überschrift: das Wort in der Mitte steht in Grün. */
export type Titel = { vor?: string; akzent: string; nach?: string }

export type Ziel = { ziel: PageKey; anker?: string }

/** Eine Liste in «Was wir für Sie übernehmen»: Titel und Einträge mit Pfeil. */
export type Liste = Ziel & {
  titel: string
  eintraege: readonly (Ziel & { text: string })[]
}

export type StartseiteContent = {
  meta: { title: string; description: string }
  /** Knopf im Banner und im Kontakt. Immer derselbe Wortlaut. */
  cta: string

  einstieg: { themenzeile: string; titel: string }

  intro: {
    titel: Titel
    absaetze: readonly string[]
    offerte: string
    portal: string
  }

  leistungen: {
    titel: Titel
    listen: readonly Liste[]
  }

  digital: {
    titel: Titel
    absaetze: readonly string[]
    punkte: readonly string[]
    portal: string
    offerte: string
    beispiel: {
      titel: string
      untertitel: string
      diagrammTitel: string
      segmente: readonly { text: string; betrag: number }[]
      hinweis: string
      frist: { text: string; datum: string }
    }
  }

  personen: {
    titel: Titel
    satz: string
    leute: readonly {
      name: string
      funktion: string
      bild: { datei: string; alt: string }
      linkedin?: string
    }[]
    linkedinText: string
    link: { text: string; ziel: PageKey }
  }

  kontakt: {
    titel: Titel
    satz: string
    felder: { telefon: string; email: string; adresse: string }
  }
}

const de: StartseiteContent = {
  meta: {
    title: 'Treuhand und Versicherungen in Aegerten',
    description:
      'Versicherungen und Treuhand für Privatpersonen, Selbständige und KMU. Feste Ansprechpartner in Aegerten, Kanton Bern.',
  },

  cta: 'Erstgespräch anfragen',

  // Banner wie auf jeder Seite (`content/source/banner_serie_de.md`)
  einstieg: {
    themenzeile: 'VERSICHERUNGEN · TREUHAND',
    titel: 'Verwurzelt im Seeland. Blick auf mehr.',
  },

  intro: {
    titel: { vor: 'Ihr ', akzent: 'unabhängiger', nach: ' Versicherungsbroker im Seeland' },
    absaetze: [
      'Wir sind bei der FINMA als Versicherungsvermittler registriert und arbeiten in Ihrem Auftrag, nicht im Auftrag einer Versicherung.',
      'Dazu übernehmen wir Buchhaltung, Löhne und Steuererklärungen – für Privatpersonen, Selbständige und kleine Unternehmen.',
    ],
    offerte: 'Offerte anfragen',
    portal: 'Zum Kundenportal',
  },

  leistungen: {
    titel: { vor: 'Was wir ', akzent: 'für Sie', nach: ' übernehmen' },
    listen: [
      {
        titel: 'Für Privatpersonen',
        ziel: 'versicherungen',
        anker: 'privatpersonen',
        eintraege: [
          { text: 'Kranken- und Zusatzversicherung', ziel: 'versicherungen', anker: 'privatpersonen' },
          { text: 'Hausrat und Haftpflicht', ziel: 'versicherungen', anker: 'privatpersonen' },
          { text: 'Motorfahrzeug', ziel: 'versicherungen', anker: 'privatpersonen' },
          { text: 'Leben und Säule 3a', ziel: 'versicherungen', anker: 'privatpersonen' },
          { text: 'Rechtsschutz', ziel: 'versicherungen', anker: 'privatpersonen' },
        ],
      },
      {
        titel: 'Für Unternehmen',
        ziel: 'versicherungen',
        anker: 'unternehmen',
        eintraege: [
          { text: 'BVG', ziel: 'versicherungen', anker: 'unternehmen' },
          { text: 'UVG und UVG-Zusatz', ziel: 'versicherungen', anker: 'unternehmen' },
          { text: 'Krankentaggeld', ziel: 'versicherungen', anker: 'unternehmen' },
          { text: 'Betriebshaftpflicht', ziel: 'versicherungen', anker: 'unternehmen' },
          { text: 'Sachversicherung', ziel: 'versicherungen', anker: 'unternehmen' },
        ],
      },
      {
        titel: 'Treuhand und Steuern',
        ziel: 'treuhand',
        eintraege: [
          { text: 'Buchhaltung', ziel: 'buchhaltung' },
          { text: 'Lohnadministration', ziel: 'treuhand' },
          { text: 'Mehrwertsteuer und Jahresabschluss', ziel: 'treuhand' },
          { text: 'Steuererklärung', ziel: 'steuern' },
          { text: 'Firmengründung', ziel: 'firmengruendung' },
        ],
      },
      {
        titel: 'Ihre Situation',
        ziel: 'kontakt',
        eintraege: [
          { text: 'Ich gründe ein Unternehmen', ziel: 'firmengruendung' },
          { text: 'Ich stelle Mitarbeitende ein', ziel: 'treuhand' },
          { text: 'Ich möchte meinen Treuhänder wechseln', ziel: 'treuhaenderWechseln' },
          { text: 'Ich möchte meine Versicherungen prüfen', ziel: 'versicherungen' },
          { text: 'Ich habe einen Schadenfall', ziel: 'versicherungen', anker: 'schadenfall' },
        ],
      },
    ],
  },

  digital: {
    titel: { vor: 'Ihre Versicherungen ', akzent: 'jederzeit', nach: ' im Blick' },
    absaetze: [
      'Wir nutzen moderne Software dort, wo sie Administration reduziert, Abläufe vereinfacht und Fehler vermeidet. Die fachliche Prüfung, die Beratung und die Verantwortung bleiben bei uns.',
      'Sie merken davon vor allem eines: weniger Papier und kürzere Wege.',
    ],
    punkte: [
      'Alle Policen und Unterlagen an einem Ort, auch auf dem Handy',
      'Fristen und Kündigungstermine auf einen Blick',
      'Änderungen, Fragen und Offertwünsche direkt an uns',
      'Anmeldung mit Code per E-Mail, Daten auf unserem eigenen Server in der Schweiz',
    ],
    portal: 'Zum Kundenportal',
    offerte: 'Offerte online anfragen',
    beispiel: {
      titel: 'Meine Versicherungen',
      untertitel: 'Beispielansicht',
      diagrammTitel: 'Prämien pro Jahr',
      segmente: [
        { text: 'Gesundheit', betrag: 4200 },
        { text: 'Fahrzeug', betrag: 1350 },
        { text: 'Wohnen', betrag: 620 },
        { text: 'Rechtsschutz', betrag: 310 },
      ],
      hinweis: 'So fasst das Kundenportal Ihre Policen zusammen. Die Zahlen sind ein Beispiel.',
      frist: { text: 'Nächste Kündigungsfrist', datum: '30.09.' },
    },
  },

  personen: {
    titel: { vor: 'Zwei ', akzent: 'Ansprechpartner' },
    satz: 'Keine Hotline. Ihr Dossier wird von einem von uns beiden geführt — und der geht auch ans Telefon.',
    leute: [
      {
        name: 'Ricardo Caires',
        funktion: 'Treuhand · Versicherungen',
        bild: {
          datei: '/bilder/portrait_ricardo.webp',
          alt: 'Ricardo Caires, Porträt vor hellem Bürohintergrund.',
        },
        linkedin: 'https://www.linkedin.com/in/ricardo-caires-84a222214/',
      },
      {
        name: 'Octavio Nuno Gouveia Andrade',
        funktion: 'Treuhand · Versicherungen',
        bild: {
          datei: '/bilder/portrait_octavio.webp',
          alt: 'Octavio Nuno Gouveia Andrade, Porträt vor hellem Bürohintergrund.',
        },
        linkedin: 'https://www.linkedin.com/in/octavio-andrade-211083130/',
      },
    ],
    linkedinText: 'Auf LinkedIn vernetzen',
    link: { text: 'Mehr über uns', ziel: 'ueberUns' },
  },

  kontakt: {
    titel: { vor: 'So erreichen ', akzent: 'Sie', nach: ' uns' },
    satz: 'Schildern Sie uns kurz Ihre Situation. Wir melden uns persönlich bei Ihnen und besprechen, welche nächsten Schritte sinnvoll sind.',
    felder: { telefon: 'Telefon', email: 'E-Mail', adresse: 'Büro' },
  },
}

/* ---- Sprachen ------------------------------------------------------------ */

/**
 * FR und PT liegen nicht vor. Sie stehen in `routes.ts` auf
 * `published: false`; hier steht `null`, damit eine fehlende Übersetzung nicht
 * versehentlich zur deutschen Fassung zurückfällt.
 */
const inhalte: Record<Locale, StartseiteContent | null> = {
  de,
  fr: null,
  pt: null,
}

export function getStartseite(locale: Locale): StartseiteContent | null {
  return inhalte[locale]
}
