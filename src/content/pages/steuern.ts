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
    heading: 'Steuererklärung für Privatpersonen, Selbständige und Firmen',
    lead: 'Sie bringen die Unterlagen, wir erstellen die Steuererklärung, reichen sie ein und prüfen später die Veranlagung.',
    actions: [
      { kind: 'page', target: 'kontakt', label: 'Erstgespräch anfragen' },
    ],
  },

  blocks: [
    // 02 und 03 — seit dem 11.09.2026 zwei Karten auf gemeinsamer Flaeche nach
    // Ricardos Referenzgrafik. Titel, Absaetze und Link unveraendert; die
    // Merkmale rechts stammen aus der Grafik
    // (`content/source/steuern_zielgruppen_de.md`). Die Anker `privatpersonen`
    // und `firmen` bleiben — `#firmen` ist von der Treuhandseite verlinkt.
    {
      kind: 'zielgruppenKarten',
      hintergrund: 'steuern_hintergrund',
      karten: [
        {
          id: 'privatpersonen',
          heading: 'Für Privatpersonen',
          paragraphs: [
            'Wir erstellen Ihre Steuererklärung im Kanton Bern, achten auf die Abzüge, die Ihnen zustehen, und reichen sie fristgerecht ein.',
            [
              'Wenn die Veranlagung kommt, prüfen wir sie und sagen Ihnen, ob sie mit dem übereinstimmt, was eingereicht wurde. Das ist wichtig, weil sich Abweichungen nur innerhalb der Einsprachefrist korrigieren lassen. ',
          
            ],
            'Wir erstellen Steuererklärungen hauptsächlich im Kanton Bern.',
          ],
          merkmale: [
            {
              bild: 'steuern_frist',
              titel: 'Fristgerecht eingereicht',
              satz: 'Ihre Steuererklärung rechtzeitig und zuverlässig.',
            },
            {
              bild: 'steuern_abzuege',
              titel: 'Abzüge im Blick',
              satz: 'Wir achten auf die Abzüge, die Ihnen zustehen.',
            },
            {
              bild: 'steuern_veranlagung',
              titel: 'Veranlagung geprüft',
              satz: 'Wir prüfen die Veranlagung und sagen Ihnen, ob sie stimmt.',
            },
          ],
        },
        {
          id: 'firmen',
          heading: 'Für Selbständige und Firmen',
          paragraphs: [
            'Bei Selbständigen und Firmen baut die Steuererklärung direkt auf der Buchhaltung auf. Liegen beide an derselben Stelle, entfällt die Abstimmung dazwischen. Führen wir Ihre Buchhaltung, sind die nötigen Unterlagen bereits vorhanden.',
          ],
          links: [{ target: 'treuhand', label: 'Buchhaltung und Jahresabschluss' }],
          hinweis: {
            bild: 'steuern_einort',
            titel: 'Alles an einem Ort',
            satz: 'Steuererklärung und Buchhaltung effizient aufeinander abgestimmt – für weniger Aufwand und mehr Übersicht.',
          },
        },
      ],
    },

    // Am 11.09.2026 auf Ricardos Anweisung entfallen: 04 „So läuft es ab",
    // 07 „Was es kostet", 08 „Wenn Sie nebenbei selbständig sind" und 10, der
    // Abschluss „Termin für Ihre Steuererklärung vereinbaren". Ihr Wortlaut steht
    // unverändert unter `content/source/`.

    // 05 Checkliste
    {
      kind: 'prose',
      id: 'checkliste',
      heading: 'Checkliste Steuererklärung Kanton Bern',
      paragraphs: [
        'Die Liste zeigt, welche Unterlagen Sie zusammenstellen sollten. Sie können sie ohne Anmeldung herunterladen und auch dann verwenden, wenn Sie die Steuererklärung selbst ausfüllen.',
        
      ],
      download: { label: 'Checkliste herunterladen (PDF)', file: null },
    },

    // 06 Fristen
    {
      kind: 'prose',
      id: 'fristen',
      heading: 'Fristen und Fristverlängerung',
      paragraphs: [
        [
          'Die Steuererklärung im Kanton Bern ist bis zu einem festen Termin einzureichen. ',
          
        ],
        [
          'Eine Verlängerung ist möglich. ',
          
        ],
        'Wenn wir Ihre Steuererklärung erstellen, übernehmen wir auch die Fristverlängerung.',
      ],
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
