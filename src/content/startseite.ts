/**
 * Inhalt der Startseite.
 *
 * QUELLE: `content/source/startseite_de.md`. Der Wortlaut stammt von dort und
 * wird hier nicht umformuliert.
 *
 * Fassung vom 09.09.2026 (Revisionsauftrag). Neun Abschnitte:
 *
 *   1 Einstieg          2 Vertrauenszeile   3 Situationen
 *   4 Leistungen        5 Eine Stelle       6 Digital
 *   7 Ansprechpartner   8 Ablauf            9 Abschluss
 *
 * Drei Aenderungen gegenueber der Fassung vom 07.09.2026:
 *
 *   - Der Einstieg sagt jetzt, was A&C tut, statt es anzudeuten. „Zwei
 *     Ansprechpartner statt drei Adressen" war fuer Erstbesucher zu abstrakt.
 *   - Die Situationen stehen **vor** den Leistungen. Wer auf die Seite kommt,
 *     denkt in seinem Problem, nicht in unseren Bereichen.
 *   - Der Wissensbereich ist weg. Drei angekuendigte Beitraege ohne Text sind
 *     auf der Startseite ein Versprechen, das die Seite nicht einloest. Er
 *     kommt zurueck, sobald es Beitraege gibt.
 *
 * Die vier konkreten Gruende aus dem Auftrag stehen bewusst **nicht** als
 * eigener Abschnitt: „Zwei Bereiche, eine Stelle" ist Abschnitt 5, „Digital
 * organisiert" ist Abschnitt 6, „Feste Ansprechpartner" traegt Abschnitt 7 und
 * „Verstaendliche Entscheidungen" Abschnitt 8. Jeder Gedanke steht einmal.
 */

import type { Rich } from '@/content/types'
import type { Locale } from '@/i18n/config'
import type { PageKey } from '@/i18n/routes'

/** Ein Leistungsbereich in Abschnitt 4. */
export type Bereich = {
  titel: string
  text: string
  stichworte: readonly string[]
  ziel: PageKey
  linkText: string
}

/**
 * Der fuehrende Bereich. Er traegt als einziger eine Bildflaeche — das ist
 * der Unterschied zu den beiden darunter, und er ist verbindlich:
 * Versicherungsbroking fuehrt (CLAUDE.md, Rangfolge der Bereiche).
 */
export type LeitBereich = Bereich & {
  bild: { label: string; note?: string }
}

/** Eine Ausgangslage in Abschnitt 3. */
export type Fall = {
  text: string
  ziel: PageKey
  anker?: string
}

/** Ein Schritt in Abschnitt 8. */
export type Schritt = {
  titel: string
  satz: string
}

export type StartseiteContent = {
  meta: { title: string; description: string }
  /** Steht im Kopf und am Ende der Seite. Immer derselbe Wortlaut. */
  cta: string

  einstieg: {
    titel: string
    satz: string
    /** Zweiter, ruhiger Verweis neben dem Knopf. */
    weiter: { text: string; ziel: PageKey }
    bild: { label: string; note?: string }
  }

  /**
   * Abschnitt 2 — eine Zeile, kein Abschnitt.
   *
   * Sie sagt in vier Woertern, mit wem man es zu tun hat. Typografisch ruhig,
   * keine Abzeichen: Was hier steht, ist nachpruefbar, und Nachpruefbares
   * braucht keine Farbe.
   */
  vertrauen: readonly string[]

  situationen: {
    titel: string
    einleitung: string
    eintraege: readonly Fall[]
  }

  leistungen: {
    titel: string
    /** Versicherungsbroking fuehrt — darum steht es allein und gross. */
    leit: LeitBereich
    weitere: readonly Bereich[]
  }

  eineStelle: {
    titel: string
    /** Die Kette. Nur Leistungen, die es wirklich gibt. */
    kette: readonly string[]
    text: string
    nachsatz: string
  }

  digital: {
    titel: string
    text: string
    nachsatz: string
  }

  personen: {
    titel: string
    einleitung: string
    leute: readonly {
      name: string
      funktion: string
      bild: { label: string; note?: string }
    }[]
    link: { text: string; ziel: PageKey }
  }

  ablauf: {
    titel: string
    schritte: readonly Schritt[]
    nachsatz: string
  }

  abschluss: {
    titel: string
    satz: string
  }
}

const de: StartseiteContent = {
  meta: {
    title: 'Treuhand und Versicherungen in Lyss',
    description:
      'Buchhaltung, Versicherungen und Finanzplanung für Selbständige, KMU und Privatpersonen. Feste Ansprechpartner in Lyss, Kanton Bern.',
  },

  cta: 'Erstgespräch anfragen',

  // ---- 1 Einstieg
  einstieg: {
    titel: 'Treuhand und Versicherungen. Persönlich aus einer Hand.',
    satz: 'Wir unterstützen Selbständige, KMU und Privatpersonen bei Buchhaltung, Versicherungen und Finanzfragen – mit festen Ansprechpartnern in Lyss.',
    weiter: { text: 'Unsere Leistungen', ziel: 'treuhand' },
    bild: {
      label: 'BÜRO LYSS / TEAM',
      note: 'Aufnahme 1 der Shootingliste',
    },
  },

  // ---- 2 Vertrauenszeile
  vertrauen: ['Treuhand', 'Versicherungsbroker', 'FINMA registriert', 'Lyss'],

  // ---- 3 Situationen — vor den Leistungen, weil Kunden im Problem denken
  situationen: {
    titel: 'Wobei können wir Sie unterstützen?',
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

  // ---- 4 Leistungen
  leistungen: {
    titel: 'Was wir für Sie übernehmen',

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
        titel: 'Finanzplanung',
        text: 'Zwei Fragen, die im Alltag untergehen: Wohin fliesst Ihr Geld, und was bleibt für später.',
        stichworte: ['Budget', 'Vorsorge'],
        ziel: 'personalFinance',
        linkText: 'Zur Finanzplanung',
      },
    ],
  },

  // ---- 5 Eine Stelle für Ihre Administration
  //
  // Die Kette nennt fuenf Leistungen, die A&C tatsaechlich erbringt. Sie ist
  // keine Aufzaehlung dessen, was ein Unternehmen alles braucht.
  eineStelle: {
    titel: 'Eine Stelle für Ihre Administration',
    kette: ['Gründung', 'Buchhaltung', 'Lohn', 'Versicherungen', 'Steuern'],
    text: 'Viele dieser Themen hängen zusammen. Deshalb betrachten wir sie nicht isoliert.',
    nachsatz: 'Statt mehrere Stellen zu koordinieren, haben Sie bei uns feste Ansprechpartner.',
  },

  // ---- 6 Digital
  //
  // Werkzeug, nicht Verkaufsargument: Was die Software tut, steht in einem
  // Satz; wer prueft und verantwortet, im naechsten.
  digital: {
    titel: 'Persönlich beraten. Digital effizient.',
    text: 'Wir nutzen moderne Software dort, wo sie Administration reduziert, Abläufe vereinfacht und Fehler vermeidet. Die fachliche Prüfung, die Beratung und die Verantwortung bleiben bei uns.',
    nachsatz: 'Sie merken davon vor allem eines: weniger Papier und kürzere Wege.',
  },

  // ---- 7 Ansprechpartner
  //
  // Auf der Startseite nur Name und Zustaendigkeit. Der Werdegang steht auf
  // „Ueber uns" — hier waere er ein Lebenslauf an der falschen Stelle.
  personen: {
    titel: 'Zwei Ansprechpartner',
    einleitung:
      'Keine Hotline. Ihr Dossier wird von einem von uns beiden geführt — und der geht auch ans Telefon.',
    leute: [
      {
        name: 'Ricardo Caires Cerqueira',
        funktion: 'Treuhand · Steuern · Versicherungen',
        bild: { label: 'PORTRÄT RICARDO', note: 'Aufnahme 4 der Shootingliste' },
      },
      {
        name: 'Octavio Andrade',
        funktion: 'Versicherungen',
        bild: { label: 'PORTRÄT OCTAVIO', note: 'Aufnahme 5 der Shootingliste' },
      },
    ],
    link: { text: 'Mehr über uns', ziel: 'ueberUns' },
  },

  // ---- 8 Ablauf
  ablauf: {
    titel: 'So beginnt die Zusammenarbeit',
    schritte: [
      {
        titel: 'Kennenlernen',
        satz: 'Sie schildern Ihre Situation, wir sagen Ihnen, was wir davon übernehmen können.',
      },
      {
        titel: 'Situation prüfen',
        satz: 'Wir sehen uns Unterlagen und Verträge an, bevor wir etwas empfehlen.',
      },
      {
        titel: 'Vorschlag erhalten',
        satz: 'Sie bekommen schriftlich, welche Aufgaben zu uns kommen und was das kostet.',
      },
      {
        titel: 'Wir übernehmen',
        satz: 'Ab dem vereinbarten Zeitpunkt läuft es über uns.',
      },
    ],
    nachsatz:
      'Wir erklären Optionen, Kosten und die nächsten Schritte verständlich. Auch dann, wenn daraus kein Auftrag wird.',
  },

  // ---- 9 Abschluss
  abschluss: {
    titel: 'Erzählen Sie uns, wobei wir Sie entlasten können.',
    satz: 'Schildern Sie uns kurz Ihr Anliegen. Wir melden uns persönlich bei Ihnen.',
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

export type { Rich }
