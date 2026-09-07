/**
 * /de/versicherungen
 *
 * QUELLE: `content/source/schritt4_fassung2_de.md`, Abschnitt „Versicherungen".
 * Wortlaut unveraendert uebernommen. Reihenfolge der elf Abschnitte wie dort.
 */

import type { PageContent } from '../types'

export const versicherungen: PageContent = {
  key: 'versicherungen',

  meta: {
    title: 'Versicherungen für Privatpersonen und Unternehmen',
    description:
      'Wir prüfen Ihre bestehenden Verträge, vergleichen passende Lösungen aus den uns zugänglichen Angeboten und Gesellschaften und bleiben Ihr Ansprechpartner, auch wenn ein Schaden eintritt.',
  },

  // 01 Seitenkopf
  hero: {
    heading: 'Versicherungen für Privatpersonen und Unternehmen',
    lead: 'Wir prüfen Ihre bestehenden Verträge, vergleichen passende Lösungen aus den uns zugänglichen Angeboten und Gesellschaften und bleiben Ihr Ansprechpartner, auch wenn ein Schaden eintritt.',
    actions: [
      { kind: 'page', target: 'kontakt', label: 'Unverbindliches Erstgespräch vereinbaren' },
      { kind: 'page', target: 'kontakt', label: 'Bestehende Verträge prüfen lassen', variant: 'ghost' },
    ],
  },

  blocks: [
    // 02 Zwei Wege
    {
      kind: 'anchors',
      items: [
        { label: 'Für Privatpersonen', anchor: 'privatpersonen' },
        { label: 'Für Unternehmen', anchor: 'unternehmen' },
      ],
    },

    // 03 Was ein Broker für Sie tut
    {
      kind: 'prose',
      id: 'broker',
      heading: 'Wir arbeiten in Ihrem Auftrag',
      paragraphs: [
        'Als Versicherungsbroker beraten wir im Auftrag unserer Kundinnen und Kunden. A&C Consulting ist bei der FINMA als Versicherungsvermittlerin registriert, Register-Nr. F01568855.',
        'Konkret heisst das: Wir sichten Ihre bestehenden Policen, zeigen Ihnen fehlende und doppelte Deckungen auf und vergleichen passende Lösungen aus den uns zugänglichen Angeboten und Gesellschaften. Was davon umgesetzt wird, entscheiden Sie.',
      ],
    },

    // 04 Für Privatpersonen
    {
      kind: 'subsections',
      id: 'privatpersonen',
      heading: 'Für Privatpersonen',
      intro: [
        'Wir prüfen, ob Ihre Deckung noch zu Ihrer Lebenssituation passt, und beraten Sie bei Anpassungen.',
        [
          'Bereiche: ',
          {
            pending:
              'abschliessende Liste der Bereiche, die A&C für Privatkunden tatsächlich betreut',
          },
        ],
      ],
      items: [
        {
          heading: 'Wann sich eine Überprüfung lohnt',
          paragraphs: [
            'Sie ziehen um, heiraten, bekommen ein Kind, kaufen Wohneigentum, wechseln die Stelle oder nähern sich der Pensionierung. In solchen Situationen kann mehr als eine Police betroffen sein.',
          ],
        },
      ],
    },

    // 05 Für Unternehmen
    {
      kind: 'subsections',
      id: 'unternehmen',
      heading: 'Für Unternehmen',
      items: [
        {
          heading: 'Wenn Sie Mitarbeitende beschäftigen',
          paragraphs: [
            [
              'Mit der ersten Anstellung kommen die obligatorische Unfallversicherung, die berufliche Vorsorge und je nach Betrieb ein Krankentaggeld dazu. ',
              { pending: 'Obligatorien und Eintrittsschwellen bei UVG und BVG fachlich prüfen' },
              ' Wir klären mit Ihnen, was in Ihrem Fall vorgeschrieben ist und was freiwillig bleibt.',
            ],
          ],
        },
        {
          heading: 'Für den Betrieb selbst',
          paragraphs: [
            [
              'Je nach Tätigkeit gehören Haftpflicht, Sachversicherung, Fahrzeuge oder Transportdeckungen dazu. ',
              { pending: 'abschliessende Liste der Betriebsbereiche' },
            ],
          ],
        },
      ],
    },

    // 06 Ablauf einer Vertragsprüfung
    {
      kind: 'steps',
      id: 'ablauf',
      heading: 'So läuft eine Vertragsprüfung ab',
      steps: [
        {
          heading: 'Unterlagen sichten',
          body: 'Sie stellen uns Ihre bestehenden Policen zusammen. Wir schauen sie durch und stellen Rückfragen, wo etwas unklar ist.',
        },
        {
          heading: 'Auswerten',
          body: 'Wir zeigen Ihnen, wo eine Deckung fehlt, wo sich zwei Verträge überschneiden und wo Prämie und Leistung nicht zusammenpassen.',
        },
        {
          heading: 'Vorschlag',
          body: 'Sie erhalten eine Übersicht mit unseren Empfehlungen und, wo es sinnvoll ist, einen Vergleich. Sie entscheiden, was umgesetzt wird.',
        },
      ],
    },

    // 07 Im Schadenfall
    {
      kind: 'prose',
      id: 'schadenfall',
      heading: 'Wenn ein Schaden eintritt',
      paragraphs: [
        [
          'Melden Sie sich bei uns. Wir nehmen den Fall auf, melden ihn der Versicherung und begleiten die Abwicklung. ',
          {
            pending: 'Umfang der Schadenbegleitung und Erreichbarkeit ausserhalb der Bürozeiten',
          },
        ],
      ],
      links: [{ target: 'schadenfall', label: 'Was im Schadenfall zu tun ist' }],
    },

    // 08 Wie wir entschädigt werden
    {
      kind: 'prose',
      id: 'verguetung',
      heading: 'Wie wir entschädigt werden',
      paragraphs: [
        [
          'Für die Vermittlung und die laufende Betreuung erhalten wir von den Versicherungsgesellschaften eine Courtage. ',
          {
            pending: 'Ausnahmen sowie Fälle, in denen stattdessen ein Honorar vereinbart wird',
          },
        ],
        'Wie das in Ihrem Fall aussieht, sagen wir Ihnen auf Nachfrage im Detail.',
      ],
      links: [{ target: 'transparenz', label: 'Vermittlerstatus, Vergütung und Beschwerdeweg' }],
    },

    // 09 Übergang zum Treuhand
    {
      kind: 'prose',
      id: 'treuhand-uebergang',
      heading: 'Wenn Sie selbständig sind oder Personal haben',
      paragraphs: [
        'Sobald Sie jemanden anstellen, gehören zur Unfallversicherung und zur beruflichen Vorsorge auch die monatliche Lohnabrechnung und die Meldungen an die Sozialversicherungen. Beides lässt sich im selben Gespräch klären.',
      ],
      links: [{ target: 'treuhand', label: 'Buchhaltung, Löhne und Abschluss' }],
    },

    // 10 Häufige Fragen
    {
      kind: 'faq',
      id: 'fragen',
      heading: 'Häufige Fragen',
      items: [
        {
          question: 'Kostet mich die Beratung etwas?',
          answer: [
            'Für die Vermittlung und Betreuung von Versicherungen werden wir von den Gesellschaften über eine Courtage entschädigt. ',
            { pending: 'Ausnahmen' },
          ],
        },
        {
          question: 'Arbeiten Sie mit allen Gesellschaften zusammen?',
          answer: [
            'Wir vergleichen für Sie die uns zugänglichen Angebote und Gesellschaften. ',
            {
              pending:
                'mit welchen Gesellschaften eine direkte Anbindung besteht und was über einen Anschluss läuft',
            },
          ],
        },
        {
          question: 'Muss ich meine bestehenden Verträge kündigen?',
          answer:
            'Nein. Wir schauen zuerst an, was Sie haben. Ob und wann eine Anpassung sinnvoll ist, besprechen wir danach.',
        },
        {
          question: 'Bin ich an etwas gebunden, wenn ich Sie beauftrage?',
          answer: [{ pending: 'Laufzeit und Kündbarkeit des Brokermandats' }],
        },
        {
          question: 'In welcher Sprache werde ich beraten?',
          answer:
            'Auf Deutsch, Französisch oder Portugiesisch. Sagen Sie uns einfach, was Ihnen lieber ist.',
        },
      ],
    },

    // 11 Abschluss
    {
      kind: 'cta',
      id: 'abschluss',
      heading: 'Lassen Sie Ihre Verträge anschauen',
      paragraphs: [
        'Ein erstes Gespräch verpflichtet Sie zu nichts. Bringen Sie mit, was Sie haben, und wir sagen Ihnen, was uns auffällt.',
      ],
      actions: [
        { kind: 'page', target: 'kontakt', label: 'Unverbindliches Erstgespräch vereinbaren' },
        { kind: 'phone' },
      ],
    },
  ],
}
