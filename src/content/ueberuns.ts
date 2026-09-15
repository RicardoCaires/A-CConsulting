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

import type { Bannerkopf, Rich } from '@/content/types'
import type { Locale } from '@/i18n/config'

/** Ein Inhaber, in der Reihenfolge der Wichtigkeit fuer den Blick. */
export type Inhaber = {
  name: string
  /** Kurz. Steht direkt unter dem Namen und wird als Vorzeile gesetzt. */
  rolle: string
  /** Ein bis zwei Saetze. Das Wichtigste nach dem Namen. */
  kern: Rich
  /** Gegliederte Angaben: Beschriftung und Text, in dieser Reihenfolge. */
  angaben: readonly { label: string; text: Rich }[]
  sprachenLabel: string
  sprachen: string
  /** Nummer und Adresse kommen aus `company.ts`; hier steht nur, wessen. */
  telefon: { wer: 'ricardo' | 'octavio' }
  /** Beschriftung des zweiten Knopfes. Die Adresse kommt aus `company.ts`. */
  mailLabel: string
  bild: {
    /** Beschriftung der Platzhalterflaeche, solange kein Portraet vorliegt. */
    label: string
    /** Liegt ein Portraet vor, steht hier sein Dateiname ohne Endung. */
    foto?: string
    alt?: string
  }
}

/** Ein Grundsatz. Als Karte gesetzt, mit geliefertem Piktogramm. */
export type Prinzip = {
  /** Kleine Versalzeile ueber der Ueberschrift, mit gruenem Strich davor. */
  kategorie: string
  titel: string
  satz: Rich
  /** Dateiname des gelieferten Piktogramms unter `public/bilder/`, ohne Endung. */
  bild: string
}

export type UeberunsContent = {
  meta: { title: string; description: string }

  /** Der Banner des Seitenkopfs. */
  kopf: Bannerkopf

  inhaber: {
    titel: string
    eyebrow: string
    einleitung: string
    leute: readonly Inhaber[]
  }

  arbeitsweise: {
    eyebrow: string
    titel: string
    einleitung: string
    prinzipien: readonly Prinzip[]
  }

  standort: {
    eyebrow: string
    titel: string
    /** Die Anschrift kommt aus `company.ts`, nicht aus dem Text. */
    adresse: Rich
    satz: string
    /**
     * Der gruene Knopf auf die Routenplanung. Ziel und Adresse baut
     * `company.ts`; `{adresse}` in `ariaLabel` wird dort eingesetzt.
     */
    aktion: { label: string; ariaLabel: string }
    /** Die Karte laedt erst auf Klick — bis dahin geht nichts nach aussen. */
    karte: { knopf: string; hinweis: string; titel: string }
    bild: {
      /** Beschriftung der Platzhalterflaeche, solange die Aufnahme fehlt. */
      label: string
      /** Liegt eine Aufnahme vor, steht hier ihr Dateiname ohne Endung. */
      foto?: string
      alt?: string
    }
  }

}

const de: UeberunsContent = {
  meta: {
    title: 'Zwei Ansprechpartner, drei Bereiche',
    description:
      'A&C Consulting wird von Ricardo Caires Cerqueira und Octavio Nuno Gouveia Andrade geführt. Beide betreuen Mandate selbst.',
  },

  // ---- 1 Seitenkopf
  //
  // Die Ueberschrift bleibt, wie Ricardo sie am 07.09.2026 gewaehlt hat
  // (Variante 4). Der Auftrag bot eine neue an — der Inhalt war aber nicht das
  // Problem, und eine getroffene Entscheidung wird nicht nebenbei umgeworfen.
  // Seit dem 15.09.2026 nach Ricardos HTML-Vorlage
  // (`content/source/ueberuns_einstieg_de.md`). Die interne Regieanweisung
  // „Aufnahme 2 der Shootingliste" steht nicht mehr auf der Seite; die fehlende
  // Aufnahme ist als offener Punkt in CLAUDE.md vermerkt.
  kopf: {
    themenzeile: 'ÜBER A&C',
    ueberschrift: 'Persönlich. Verlässlich. Nah.',
  },

  // ---- 2 Die beiden Inhaber
  // Seit dem 15.09.2026 nach Ricardos HTML-Vorlage
  // (`content/source/ueberuns_inhaber_de.md`). Zwei gleich grosse Karten mit
  // demselben Aufbau: Portraet, Rolle, Name, Schwerpunkt, gegliederte
  // Angaben, Beratungssprachen, Telefonknopf.
  //
  // **Octavio heisst jetzt nur noch „Mitinhaber".** Bis dahin stand bei beiden
  // „Geschaeftsfuehrer und Mitinhaber" — das widersprach Abschnitt 2 der
  // Hausordnung, wo die Geschaeftsfuehrung allein bei Ricardo liegt.
  inhaber: {
    titel: 'Die beiden Inhaber',
    eyebrow: 'Persönlich für Sie da',
    einleitung:
      'Ihre Ansprechperson kennt Ihr Dossier und begleitet Sie direkt. So bleiben Wege kurz und Zuständigkeiten klar.',
    leute: [
      {
        name: 'Ricardo Caires Cerqueira',
        rolle: 'Mitinhaber',
        kern: 'Ansprechpartner für Treuhand, Steuern und Versicherungen. Als Versicherungsvermittler bei der FINMA registriert.',
        angaben: [
          {
            label: 'Beruflicher Hintergrund',
            text: 'Kaufmann EFZ. Im Finanz- und Rechnungswesen der Creabeton Matériaux AG in Lyss verantwortlich für Kreditoren, Debitoren und Anlagebuchhaltung sowie Leiter der Berufsbildung.',
          },
          {
            label: 'Qualifikationen',
            text: 'Sachbearbeiter Rechnungswesen VSK, Feusi Bildungszentrum Bern, und Versicherungsvermittler VBV.',
          },
        ],
        sprachenLabel: 'Beratungssprachen:',
        sprachen: 'Deutsch, Portugiesisch und Englisch',
        telefon: { wer: 'ricardo' },
        mailLabel: 'E-Mail schreiben',
        bild: {
          label: 'Porträt Ricardo',
          foto: 'portrait_ricardo',
          alt: 'Ricardo Caires Cerqueira, Porträt vor hellem Bürohintergrund.',
        },
      },
      {
        name: 'Octavio Nuno Gouveia Andrade',
        rolle: 'Geschäftsführer und Mitinhaber',
        kern: 'Ansprechpartner für Versicherungsbroking und die persönliche Betreuung von Versicherungskundinnen und -kunden. Als Versicherungsvermittler bei der FINMA registriert.',
        angaben: [
          {
            label: 'Beruflicher Hintergrund',
            text: 'Kundenberater und Verkaufsleiter bei Allianz Suisse in Biel, danach Hauptagent der Zurich Versicherungen in Biel und heute selbstständiger Versicherungsbroker.',
          },
          {
            label: 'Qualifikation',
            text: 'Versicherungsvermittler VBV.',
          },
        ],
        sprachenLabel: 'Beratungssprachen:',
        sprachen: 'Deutsch, Französisch und Portugiesisch',
        telefon: { wer: 'octavio' },
        mailLabel: 'E-Mail schreiben',
        bild: {
          label: 'Porträt Octavio',
          foto: 'portrait_octavio',
          alt: 'Octavio Nuno Gouveia Andrade, Porträt vor hellem Bürohintergrund.',
        },
      },
    ],
  },

  // ---- 3 Wie wir arbeiten
  //
  // Seit dem 15.09.2026 nach Ricardos HTML-Vorlage
  // (`content/source/ueberuns_arbeitsweise_de.md`). Fuenf Karten in einem
  // Bentoraster; die ersten beiden sind die grossen. Die Reihenfolge der
  // Vorlage ist die des bisherigen Abschnitts.
  //
  // **„Ihre Daten werden in der Schweiz verarbeitet" steht nicht mehr hier.**
  // Die Vorlage sagt stattdessen „mit angemessenen organisatorischen
  // Massnahmen". Die Schweizer Verarbeitung steht weiterhin in den haeufigen
  // Fragen auf `/treuhand`.
  arbeitsweise: {
    eyebrow: 'Unsere Zusammenarbeit',
    titel: 'Verlässlich im Alltag. Klar in der Verantwortung.',
    einleitung:
      'Sie sollen wissen, wer Ihr Dossier betreut, was wir übernehmen und wie Entscheidungen zustande kommen. Diese Grundsätze prägen unsere tägliche Arbeit.',
    prinzipien: [
      {
        kategorie: 'Direkter Kontakt',
        titel: 'Persönlich betreut',
        satz: 'Sie sprechen mit der Person, die Ihr Dossier kennt und bearbeitet. Ihre Zuständigkeit ist ab dem ersten Gespräch klar.',
        bild: 'arbeitsweise_persoenlich',
      },
      {
        kategorie: 'Klare Vereinbarung',
        titel: 'Nachvollziehbar geregelt',
        satz: 'Aufgaben, Zuständigkeiten und Kosten halten wir zu Beginn fest. Ändert sich der Umfang, besprechen wir das vorgängig mit Ihnen.',
        bild: 'arbeitsweise_nachvollziehbar',
      },
      {
        kategorie: 'Sinnvoll digital',
        titel: 'Einfachere Abläufe',
        satz: 'Digitale Prozesse reduzieren administrative Umwege. Die fachliche Prüfung und Verantwortung bleiben bei uns.',
        bild: 'arbeitsweise_digital',
      },
      {
        kategorie: 'Mit Sorgfalt',
        titel: 'Vertraulich behandelt',
        satz: 'Wir behandeln Ihre Angaben und Unterlagen vertraulich und schützen sie mit angemessenen organisatorischen Massnahmen.',
        bild: 'arbeitsweise_vertraulich',
      },
      {
        kategorie: 'Passende Fachkompetenz',
        titel: 'Klare Grenzen',
        satz: 'Rechtsberatung und aktienrechtliche Revision gehören nicht zu unseren Leistungen. Bei Bedarf beziehen wir geeignete Fachpersonen ein.',
        bild: 'arbeitsweise_grenzen',
      },
    ],
  },

  // ---- 4 Standort
  //
  // Seit dem 15.09.2026 nach Ricardos HTML-Vorlage
  // (`content/source/ueberuns_standort_de.md`) und mit der neuen Adresse.
  // Adresse, Ortsangabe im Bild und Ziel der Routenplanung kommen aus
  // `company.ts`; hier steht kein Strassenname.
  standort: {
    eyebrow: 'Unser Standort',
    titel: 'Persönlich für Sie da in Aegerten',
    adresse: [{ company: 'buero' }],
    satz: 'Besprechungen sind bei uns vor Ort oder nach Vereinbarung bei Ihnen möglich. Planen Sie Ihre Anreise direkt über Google Maps.',
    aktion: {
      label: 'Route mit Google Maps planen',
      ariaLabel: 'Route zur {adresse} mit Google Maps planen',
    },
    karte: {
      knopf: 'Karte anzeigen',
      hinweis: 'Beim Anzeigen wird die Karte von OpenStreetMap geladen.',
      titel: 'Karte mit dem Standort von A&C Consulting in Aegerten',
    },
    bild: { label: 'Bildplatzhalter' },
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
