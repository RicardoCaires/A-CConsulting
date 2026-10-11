/**
 * /de/steuern
 *
 * QUELLE: `content/source/schritt4_fassung2_de.md`, Abschnitt „Steuern".
 * Wortlaut unveraendert uebernommen. Reihenfolge wie dort; vier der zehn Abschnitte
 * sind am 11.09.2026 entfallen.
 */

import type { PageContent } from '../types'

export const steuern: PageContent = {
  key: 'steuern',

  meta: {
    title: 'Steuererklärung für Privatpersonen, Selbständige und Firmen',
    description:
      'Sie bringen die Unterlagen, wir erstellen die Steuererklärung, reichen sie ein und prüfen später die Veranlagung.',
  },

  // 01 Seitenkopf
  hero: {
    banner: {
      themenzeile: 'STEUERN',
      ueberschrift: 'Klar deklariert. Sicher geplant.',
    },
    heading: 'Steuererklärung für Privatpersonen, Selbständige und Firmen',
    actions: [
      { kind: 'page', target: 'kontakt', label: 'Erstgespräch anfragen' },
    ],
  },

  blocks: [
    // 02 und 03 — seit dem 16.09.2026 nach Ricardos HTML-Vorlage
    // (`content/source/steuern_zielgruppen_de.md`): Kopf, zwei gleich grosse
    // Karten, Hinweis zum Kanton Bern. Die Anker `privatpersonen` und `firmen`
    // bleiben — `#firmen` ist von der Treuhandseite verlinkt.
    {
      kind: 'zielgruppenKarten',
      kopf: {
        eyebrow: 'Steuererklärungen',
        heading: 'Passend zu Ihrer Situation.',
        lead: 'Wir bereiten Ihre Steuererklärung sorgfältig vor, berücksichtigen die relevanten Abzüge und begleiten Sie bis zur Prüfung der Veranlagung.',
      },
      karten: [
        {
          id: 'privatpersonen',
          bild: 'steuern_icon_privatpersonen.svg',
          heading: 'Für Privatpersonen',
          einleitung: 'Persönlich betreut und auf Ihre Lebenssituation abgestimmt.',
          schritte: [
            {
              bild: 'steuern_schritt_einreichung.svg',
              titel: 'Fristgerecht vorbereitet',
              text: 'Vollständig aufbereitet und zuverlässig eingereicht.',
            },
            {
              bild: 'steuern_schritt_abzuege.svg',
              titel: 'Abzüge berücksichtigt',
              text: 'Relevante Abzüge werden sorgfältig geprüft.',
            },
            {
              bild: 'steuern_schritt_veranlagung.svg',
              titel: 'Veranlagung kontrolliert',
              text: 'Wir prüfen den Entscheid auf Abweichungen.',
            },
          ],
          // Die Checkliste steht weiter unten auf derselben Seite.
          link: { label: 'Checkliste für Privatpersonen', anker: 'checkliste' },
        },
        {
          id: 'firmen',
          bild: 'steuern_icon_unternehmen.svg',
          heading: 'Für Selbständige & Unternehmen',
          einleitung: 'Steuererklärung und Buchhaltung effizient aufeinander abgestimmt.',
          schritte: [
            {
              bild: 'steuern_schritt_einreichung.svg',
              titel: 'Abschluss als Grundlage',
              text: 'Die Steuererklärung baut direkt auf den Abschlusszahlen auf.',
            },
            {
              bild: 'steuern_schritt_abzuege.svg',
              titel: 'Unterlagen gebündelt',
              text: 'Vorhandene Buchhaltungsdaten werden direkt weiterverwendet.',
            },
            {
              bild: 'steuern_schritt_veranlagung.svg',
              titel: 'Durchgehend betreut',
              text: 'Eine Ansprechperson koordiniert Buchhaltung und Steuererklärung.',
            },
          ],
          link: { label: 'Buchhaltung und Jahresabschluss', ziel: 'buchhaltung' },
        },
      ],
      hinweis: 'Steuererklärungen erstellen wir hauptsächlich für Kundinnen und Kunden im Kanton Bern.',
    },

    // Am 11.09.2026 auf Ricardos Anweisung entfallen: 04 „So läuft es ab",
    // 07 „Was es kostet", 08 „Wenn Sie nebenbei selbständig sind" und 10, der
    // Abschluss „Termin für Ihre Steuererklärung vereinbaren". Ihr Wortlaut steht
    // unverändert unter `content/source/`.

    // 05 und 06 — seit dem 16.09.2026 nach Ricardos HTML-Vorlage
    // (`content/source/steuern_checkliste_de.md`): links die Checkliste mit
    // Piktogramm, drei Haken-Punkten und Knopf, rechts „Die wichtigsten
    // Termine." mit zwei Fristenkarten. Kategoriezeilen, Titel, Einleitungen,
    // Untertitel und alle Werte stehen woertlich in seinem Auftrag.
    //
    // **Die Fristen der Unternehmen sind neu.** Bis zum 16.09.2026 standen
    // hier 15. September, 15. November, 15. Januar und 15. Maerz mit CHF 20
    // und CHF 40; Ricardos Vorlage nennt stattdessen sieben Monate nach
    // Geschaeftsabschluss und die Verlaengerung um 1½ beziehungsweise
    // 3½ Monate. Der alte Stand steht unveraendert in der Quelldatei.
    //
    // **Die Fristenzeilen in der linken Kachel sind entfallen** — die Vorlage
    // fuehrt sie nicht mehr. Beide Angaben, 15. Maerz und die Verlaengerung
    // bis 15. November, stehen rechts in der Karte „Privatpersonen".
    //
    // **Der Satz zur Fristverlaengerung bleibt** — die Hausordnung verlangt
    // den Hinweis, dass A&C sie uebernimmt (Abschnitt 9). Ricardos Vorlage
    // fuehrt ihn nicht; er steht als zweiter Nachsatz unter den Karten.
    // Ricardo ist darauf hingewiesen.
    //
    // **Der Bildstreifen fehlt weiterhin.** Die gelieferte Bern-Aufnahme ist
    // eine Vorschau mit Wasserzeichen; `banner` bleibt darum ungesetzt.
    {
      kind: 'checklisteFristen',
      checkliste: {
        id: 'checkliste',
        eyebrow: 'Steuererklärung Kanton Bern',
        heading: 'Alle Unterlagen auf einen Blick.',
        bild: 'steuern_checkliste',
        paragraphs: [
          'Die Checkliste zeigt, welche Dokumente Privatpersonen für die Steuererklärung üblicherweise benötigen.',
        ],
        punkte: [
          'Einkommen und Vermögen',
          'Versicherungen und Vorsorge',
          'Abzüge und besondere Ereignisse',
        ],
        download: { label: 'Checkliste herunterladen (PDF)', file: null },
        hinweis: 'Ohne Anmeldung · sofort verfügbar',
      },
      fristen: {
        id: 'fristen',
        eyebrow: 'Fristen und Gebühren',
        heading: 'Die wichtigsten Termine.',
        lead: ['Massgebend ist immer das Datum auf Ihrem Schreiben der Steuerverwaltung.'],
        gruppen: [
          {
            bild: 'steuern_icon_privatpersonen',
            titel: 'Privatpersonen',
            untertitel: 'Natürliche Personen',
            frist: { label: 'Übliche Einreichefrist', wert: '15. März' },
            zeilen: [
              { label: 'Online verlängern bis 15. Juli', wert: 'kostenlos' },
              { label: 'bis 15. September', wert: 'CHF 20' },
              { label: 'bis 15. November', wert: 'CHF 40' },
            ],
            hinweis:
              'Schriftlich eingereichte Fristverlängerungen können höhere Gebühren verursachen.',
          },
          {
            bild: 'steuern_icon_unternehmen',
            titel: 'Unternehmen',
            untertitel: 'Juristische Personen',
            frist: {
              label: 'Ordentliche Einreichefrist',
              wert: '7 Monate nach Geschäftsabschluss',
            },
            zeilen: [
              { label: 'Online: zusätzliche 1½ Monate', wert: 'kostenlos' },
              { label: 'Online: maximal zusätzliche 3½ Monate', wert: 'CHF 20' },
            ],
          },
        ],
        nachsatz: [
          'Die Gebühren gelten für online eingereichte Fristverlängerungen.',
          'Wenn wir Ihre Steuererklärung erstellen, übernehmen wir auch die Fristverlängerung.',
        ],
      },
    },

    // 09 Häufige Fragen
    // Seit dem 11.09.2026 im Baustein der Versicherungsseite („häufige Fragen
    // überall gleich designen", Ricardo). Fragen und Antworten unveraendert.
    {
      kind: 'fragen',
      id: 'fragen',
      eyebrow: 'Gut zu wissen',
      heading: 'Häufige Fragen',
      lead: [
        'Hier finden Sie kompakte Antworten auf die wichtigsten Fragen.',
        'Sollten Sie weitere Anliegen haben, sind wir gerne persönlich für Sie da.',
      ],
      items: [
        {
          question: 'Was muss ich mitbringen?',
          answer: 'Alles, was in der Checkliste steht. Wenn etwas fehlt, melden wir uns.',
        },
        {
          question: 'Können Sie die Frist verlängern?',
          answer: [
            'Die Fristverlängerung beantragen wir für Sie. ',
            
          ],
        },
        {
          question: 'Was, wenn mehrere Jahre offen sind?',
          answer: [
            'Mehrere offene Steuerjahre lassen sich aufarbeiten. ',
            
          ],
        },
        {
          question: 'Machen Sie auch Steuererklärungen für andere Kantone?',
          answer: 'Wir erstellen Steuererklärungen hauptsächlich im Kanton Bern.',
        },
        {
          question: 'Muss ich persönlich vorbeikommen?',
          answer: 'Nicht zwingend. Sie können uns die Unterlagen per E-Mail, per Post oder persönlich bringen.',
        },
      ],
      schluss: 'Persönlich. Unabhängig. An Ihrer Seite.',
    },
  ],
}
