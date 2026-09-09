/**
 * /de/steuern
 *
 * QUELLE: `content/source/schritt4_fassung2_de.md`, Abschnitt „Steuern".
 * Wortlaut unveraendert uebernommen. Reihenfolge der zehn Abschnitte wie dort.
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
      { kind: 'page', target: 'kontakt', label: 'Erstgespräch vereinbaren' },
    ],
  },

  blocks: [
    // 02 Für Privatpersonen
    {
      kind: 'prose',
      id: 'privatpersonen',
      heading: 'Für Privatpersonen',
      paragraphs: [
        'Wir erstellen Ihre Steuererklärung im Kanton Bern, achten auf die Abzüge, die Ihnen zustehen, und reichen sie fristgerecht ein.',
        [
          'Wenn die Veranlagung kommt, prüfen wir sie und sagen Ihnen, ob sie mit dem übereinstimmt, was eingereicht wurde. Das ist wichtig, weil sich Abweichungen nur innerhalb der Einsprachefrist korrigieren lassen. ',
          
        ],
        'Wir erstellen Steuererklärungen hauptsächlich im Kanton Bern.',
      ],
    },

    // 03 Für Selbständige und Firmen
    {
      kind: 'prose',
      id: 'firmen',
      heading: 'Für Selbständige und Firmen',
      paragraphs: [
        'Bei Selbständigen und Firmen baut die Steuererklärung direkt auf der Buchhaltung auf. Liegen beide an derselben Stelle, entfällt die Abstimmung dazwischen. Führen wir Ihre Buchhaltung, sind die nötigen Unterlagen bereits vorhanden.',
      ],
      links: [{ target: 'treuhand', label: 'Buchhaltung und Jahresabschluss' }],
    },

    // 04 So läuft es ab
    {
      kind: 'steps',
      id: 'ablauf',
      heading: 'So läuft es ab',
      steps: [
        {
          heading: 'Unterlagen',
          body: 'Sie bringen die Unterlagen vorbei oder senden sie uns digital. Was dazugehört, steht in unserer Checkliste.',
        },
        {
          heading: 'Erstellung',
          body: 'Wir erstellen die Steuererklärung und melden uns, wenn etwas fehlt oder unklar ist. Vor dem Einreichen gehen wir sie mit Ihnen durch.',
        },
        {
          heading: 'Einreichung und Kontrolle',
          body: 'Wir reichen ein und prüfen später die Veranlagung.',
        },
      ],
    },

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

    // 07 Was es kostet
    {
      kind: 'list',
      id: 'kosten',
      heading: 'Was es kostet',
      intro: ['Der Aufwand hängt davon ab, wie Ihre Situation aussieht:'],
      items: [
        'Anzahl Lohnausweise und Belege',
        'Wertschriften und Bankbeziehungen',
        'Liegenschaften',
        'selbständige Nebentätigkeit',
        'ob mehrere Steuerjahre offen sind',
      ],
      outro: [
        'Sagen Sie uns kurz, was auf Sie zutrifft, dann können wir den Aufwand einschätzen, bevor wir beginnen.',
      ],
    },

    // 08 Nebenerwerb
    {
      kind: 'prose',
      id: 'nebenerwerb',
      heading: 'Wenn Sie nebenbei selbständig sind',
      paragraphs: [
        [
          'Sobald Sie neben der Anstellung etwas auf eigene Rechnung machen, ändert sich die Steuererklärung. Es kommen eine Aufstellung der Einnahmen und Ausgaben dazu und die Frage der Anmeldung bei der Ausgleichskasse. ',
          
          ' Wir schauen das mit Ihnen an und klären, was zu tun ist.',
        ],
      ],
      links: [
        { target: 'treuhand', label: 'Treuhand' },
        { target: 'firmengruendung', label: 'Firmengründung' },
      ],
    },

    // 09 Häufige Fragen
    {
      kind: 'faq',
      id: 'fragen',
      heading: 'Häufige Fragen',
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
    },

    // 10 Abschluss
    {
      kind: 'cta',
      id: 'abschluss',
      heading: 'Termin für Ihre Steuererklärung vereinbaren',
      paragraphs: [
        'Melden Sie sich, dann vereinbaren wir einen Termin. Die Checkliste können Sie vorab herunterladen.',
      ],
      actions: [
        { kind: 'page', target: 'kontakt', label: 'Erstgespräch vereinbaren' },
        { kind: 'phone' },
      ],
    },
  ],
}
