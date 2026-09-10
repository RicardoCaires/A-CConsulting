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
import type { IconName } from '@/components/ui/Icon'
import type { Motiv } from '@/components/ui/Illustration'
import type { PiktogrammName } from '@/components/ui/Piktogramm'
import type { SchrittName } from '@/components/ui/Schrittbild'
import type { Locale } from '@/i18n/config'
import type { PageKey } from '@/i18n/routes'

/** Ein Leistungsbereich in Abschnitt 2. */
export type Bereich = {
  /** Der Bereichsname, klein ueber der Ueberschrift. */
  kategorie: string
  /** Die eigene Aussage des Bereichs — nicht noch einmal der Bereichsname. */
  titel: string
  text: string
  /** Genau vier. Weniger laesst die Karte leer aussehen, mehr ueberfuellt sie. */
  leistungen: readonly { icon: IconName; text: string }[]
  ziel: PageKey
  linkText: string
  motiv: Motiv
}

/**
 * Der fuehrende Bereich. Gleich gebaut wie die beiden anderen, nur groesser
 * gesetzt — das ist verbindlich: Versicherungsbroking fuehrt (CLAUDE.md,
 * Rangfolge der Bereiche).
 */
export type LeitBereich = Bereich

/** Eine Ausgangslage in Abschnitt 3. */
export type Fall = {
  text: string
  /** Das gelieferte Piktogramm zur Ausgangslage. */
  bild: PiktogrammName
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
    /** Steht unter der Ueberschrift und ordnet den Leitsatz ein. */
    eyebrow: string
    titel: string
    satz: string
    /** Zweiter, ruhiger Verweis neben dem Knopf. */
    weiter: { text: string; ziel: PageKey }
    /** Echte Aufnahme oder Platzhalter mit Formatangabe. */
    bild: { src: string; alt: string } | { label: string; note?: string }
  }

  situationen: {
    eyebrow: string
    titel: string
    einleitung: string
    /** Drei Zeilen rechts neben dem Kopf. Kein Satz, drei Aussagen. */
    merksatz: readonly string[]
    eintraege: readonly Fall[]
  }

  leistungen: {
    eyebrow: string
    titel: string
    einleitung: string
    /** Drei Zeilen rechts neben dem Kopf. Kein Satz, drei Aussagen. */
    merksatz: readonly string[]
    /** Versicherungsbroking fuehrt — darum steht es allein und gross. */
    leit: LeitBereich
    weitere: readonly Bereich[]
  }

  eineStelle: {
    eyebrow: string
    titel: string
    /** Die Kette. Nur Leistungen, die es wirklich gibt — je Glied ein Bild. */
    kette: readonly { text: string; bild: SchrittName }[]
    text: string
    nachsatz: string
    /** Drei Zeilen rechts neben dem Kopf. */
    merksatz: readonly string[]
    knopf: { text: string; ziel: PageKey }
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
    eyebrow: 'Versicherungen · Treuhand',
    titel: 'Verwurzelt im Seeland. Blick auf mehr.',
    satz: 'Wir unterstützen Selbständige, KMU und Privatpersonen bei Buchhaltung, Versicherungen und Finanzfragen – mit festen Ansprechpartnern in Lyss.',
    weiter: { text: 'Unsere Leistungen', ziel: 'treuhand' },
    // Die Aufnahme traegt Ueberschrift und Vorzeile bereits eingebrannt.
    // Darum blendet der Kopf seinen eigenen Text aus, sobald das Bild lesbar
    // gross ist — sonst stuende beides doppelt. Auf schmalen Geraeten ist es
    // umgekehrt: Dort ist der eingebrannte Text zu klein, und der HTML-Text
    // traegt. Je Fenstergroesse steht die Aussage genau einmal.
    bild: {
      src: '/bilder/startseite-seeland.webp',
      alt: 'Blick über das Seeland bei Dämmerung: Lichter der Stadt, der See und die Hügelkette im Abendhimmel.',
    },
  },

  // ---- 3 Situationen — vor den Leistungen, weil Kunden im Problem denken
  situationen: {
    eyebrow: 'Ausgangslagen',
    titel: 'Wobei können wir Sie unterstützen?',
    einleitung: 'Sechs Ausgangslagen, die bei uns am häufigsten am Anfang stehen.',
    merksatz: ['Klarer Einstieg.', 'Schnelle Orientierung.', 'Direkt zur passenden Lösung.'],
    eintraege: [
      { text: 'Ich gründe ein Unternehmen', bild: 'firmengruendung', ziel: 'firmengruendung' },
      { text: 'Ich stelle Mitarbeitende ein', bild: 'mitarbeitende', ziel: 'treuhand' },
      { text: 'Ich möchte meine Buchhaltung abgeben', bild: 'buchhaltung', ziel: 'buchhaltung' },
      {
        text: 'Ich möchte meinen Treuhänder wechseln',
        bild: 'treuhaenderwechsel',
        ziel: 'treuhaenderWechseln',
      },
      {
        text: 'Ich möchte meine Versicherungen prüfen',
        bild: 'versicherungspruefung',
        ziel: 'versicherungen',
      },
      {
        text: 'Ich habe einen Schadenfall',
        bild: 'schadenfall',
        ziel: 'versicherungen',
        anker: 'schadenfall',
      },
    ],
  },

  // ---- 4 Leistungen
  leistungen: {
    eyebrow: 'Unsere Leistungen',
    titel: 'Was wir für Sie übernehmen.',
    einleitung:
      'Drei Bereiche, die sich in Ihrer Situation oft überschneiden – und bei A&C sinnvoll zusammen gedacht werden.',
    merksatz: ['Ein Ansprechpartner.', 'Mehr Überblick.', 'Langfristige Sicherheit.'],

    leit: {
      kategorie: 'Versicherungen',
      titel: 'Wir vertreten Sie, nicht die Versicherung.',
      text: 'Wir prüfen Ihre Verträge, vergleichen Angebote unabhängig und finden die passende Lösung für Ihre Situation – transparent, verständlich und auch im Schadenfall an Ihrer Seite.',
      leistungen: [
        { icon: 'schildPlus', text: 'Krankenversicherung und Zusatzversicherung' },
        { icon: 'fahrzeug', text: 'Hausrat, Haftpflicht und Motorfahrzeug' },
        { icon: 'personen', text: 'BVG, UVG und Krankentaggeld' },
        { icon: 'gebaeude', text: 'Betriebshaftpflicht und Sachversicherung' },
      ],
      ziel: 'versicherungen',
      linkText: 'Zu den Versicherungen',
      motiv: 'versicherungen',
    },

    weitere: [
      {
        kategorie: 'Treuhand',
        titel: 'Zahlen, die für Sie arbeiten.',
        text: 'Buchhaltung, Löhne und Abschluss für Selbständige und KMU – klar, zuverlässig und mit einem festen Ansprechpartner.',
        leistungen: [
          { icon: 'dokument', text: 'Buchhaltung' },
          { icon: 'diagramm', text: 'Mehrwertsteuer und Jahresabschluss' },
          { icon: 'personen', text: 'Lohnadministration und Sozialversicherungen' },
          { icon: 'gebaeude', text: 'Firmengründung und Treuhänderwechsel' },
        ],
        ziel: 'treuhand',
        linkText: 'Zur Treuhand',
        motiv: 'treuhand',
      },
      {
        kategorie: 'Finanzplanung',
        titel: 'Heute planen. Morgen freier sein.',
        text: 'Zwei Fragen, die im Alltag untergehen: Wohin fliesst Ihr Geld, und was bleibt für später? Wir schaffen Klarheit.',
        leistungen: [
          { icon: 'muenzen', text: 'Budget' },
          { icon: 'diagramm', text: 'Analyse und Optimierung' },
          { icon: 'pflanze', text: 'Vorsorge' },
          { icon: 'kompass', text: 'Persönliche Begleitung' },
        ],
        ziel: 'personalFinance',
        linkText: 'Zur Finanzplanung',
        motiv: 'finanzplanung',
      },
    ],
  },

  // ---- 5 Eine Stelle für Ihre Administration
  //
  // Die Kette nennt fuenf Leistungen, die A&C tatsaechlich erbringt. Sie ist
  // keine Aufzaehlung dessen, was ein Unternehmen alles braucht.
  eineStelle: {
    eyebrow: 'Alles aus einer Hand',
    titel: 'Eine Stelle für Ihre Administration',
    kette: [
      { text: 'Gründung', bild: 'gruendung' },
      { text: 'Buchhaltung', bild: 'buchhaltung' },
      { text: 'Lohn', bild: 'lohn' },
      { text: 'Versicherungen', bild: 'versicherungen' },
      { text: 'Steuern', bild: 'steuern' },
    ],
    text: 'Wir koordinieren die Themen, die zusammengehören – mit einem festen Ansprechpartner.',
    nachsatz:
      'Statt mehrere Stellen zu koordinieren, haben Sie bei uns einen zentralen Ansprechpartner.',
    merksatz: ['Weniger Aufwand.', 'Mehr Übersicht.', 'Ein Ansprechpartner.'],
    knopf: { text: 'Mehr über unseren Ansatz', ziel: 'ueberUns' },
  },

  // ---- 6 Digital
  //
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
