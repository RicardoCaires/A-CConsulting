/**
 * /de/firmengruendung
 *
 * QUELLE: `content/source/schritt4_fassung2_de.md`, Abschnitt „Firmengründung".
 * Wortlaut unveraendert uebernommen. Reihenfolge der neun Abschnitte wie dort.
 *
 * Auf dieser Seite steht jede rechtliche und fachliche Aussage einzeln unter
 * Vorbehalt — so verlangt es die Quelle, damit beim Pruefen keine Angabe
 * uebersehen wird.
 */

import type { PageContent } from '../types'

export const firmengruendung: PageContent = {
  key: 'firmengruendung',

  meta: {
    title: 'Firma gründen im Kanton Bern',
    description:
      'Wir begleiten Sie von der Wahl der Rechtsform bis zur ersten Buchhaltung und sagen Ihnen vorher, was auf Sie zukommt.',
  },

  // 01 Seitenkopf
  hero: {
    heading: 'Firma gründen im Kanton Bern',
    lead: 'Wir begleiten Sie von der Wahl der Rechtsform bis zur ersten Buchhaltung und sagen Ihnen vorher, was auf Sie zukommt.',
    actions: [
      { kind: 'page', target: 'kontakt', label: 'Gründungsgespräch anfragen' },
      { kind: 'phone' },
    ],
  },

  blocks: [
    // 02 Einzelfirma oder GmbH
    {
      kind: 'subsections',
      id: 'rechtsform',
      heading: 'Einzelfirma oder GmbH?',
      intro: [
        'Das ist die erste Frage, und sie lässt sich nicht allgemein beantworten. Für die Wahl sind vor allem die folgenden Punkte massgebend.',
      ],
      items: [
        {
          heading: 'Kapital',
          paragraphs: [
            [
              'Die Einzelfirma braucht kein Mindestkapital. Für die GmbH ist ein Stammkapital von 20 000 Franken nötig, das vor der Gründung einbezahlt wird. ',
              { pending: 'Höhe des Stammkapitals und Einzahlungsvorschriften fachlich prüfen' },
            ],
          ],
        },
        {
          heading: 'Haftung',
          paragraphs: [
            [
              'Bei der Einzelfirma haften Sie mit Ihrem Privatvermögen. Bei der GmbH haftet grundsätzlich das Gesellschaftsvermögen. ',
              {
                pending:
                  'Haftungsdarstellung je Rechtsform fachlich prüfen, inklusive Ausnahmen',
              },
            ],
          ],
        },
        {
          heading: 'Gründungsaufwand',
          paragraphs: [
            'Die Einzelfirma ist einfacher und günstiger zu gründen. Für die GmbH braucht es eine öffentliche Beurkundung beim Notariat und den Eintrag im Handelsregister.',
          ],
        },
        {
          heading: 'Handelsregister',
          paragraphs: [
            [
              'Die GmbH wird eingetragen. Für die Einzelfirma besteht die Eintragungspflicht ab einem Jahresumsatz von 100 000 Franken, vorher ist der Eintrag freiwillig. ',
              {
                pending:
                  'Handelsregisterpflicht und Umsatzschwelle für die Einzelfirma fachlich prüfen',
              },
            ],
          ],
        },
        {
          heading: 'Sozialversicherungen',
          paragraphs: [
            [
              'Als Inhaberin oder Inhaber einer Einzelfirma gelten Sie als selbständigerwerbend. Bei einer GmbH sind Sie in der eigenen Firma angestellt, mit den entsprechenden Beiträgen und Versicherungen. ',
              {
                pending:
                  'Behandlung bei AHV, ALV, UVG und BVG je Rechtsform fachlich prüfen',
              },
            ],
          ],
        },
        {
          heading: 'Weitere Überlegungen',
          paragraphs: [
            'Wie hoch das Risiko im Geschäft ist, ob Sie mit Partnern gründen, wie die Rechtsform gegenüber Kundinnen und Kunden wirkt und mit welchem Ergebnis Sie rechnen. Im Gespräch gehen wir das für Ihren Fall durch.',
          ],
        },
      ],
      outro: [
        [
          {
            pending:
              'zusätzlich: sämtliche Angaben dieses Abschnitts vor der Veröffentlichung mit Stand und Jahresangabe versehen',
          },
        ],
      ],
    },

    // 03 Ablauf der Gründung
    {
      kind: 'steps',
      id: 'ablauf',
      heading: 'So läuft eine Gründung ab',
      steps: [
        {
          heading: 'Vorbereitung',
          body: 'Rechtsform, Firmenname, Zweck, Sitz und die Frage, wer beteiligt ist.',
        },
        {
          heading: 'Unterlagen',
          body: 'Wir stellen die nötigen Dokumente zusammen und bereiten sie vor.',
        },
        {
          heading: 'Kapital',
          body: [
            'Bei der GmbH wird das Stammkapital auf ein Sperrkonto einbezahlt. ',
            { pending: 'Verfahren der Kapitaleinzahlung fachlich prüfen' },
          ],
        },
        {
          heading: 'Notariat',
          body: 'Die Gründung wird öffentlich beurkundet.',
        },
        {
          heading: 'Handelsregister',
          body: 'Die Anmeldung geht ans Handelsregisteramt. Mit dem Eintrag entsteht die Gesellschaft.',
        },
        {
          heading: 'Anmeldungen',
          body: [
            'Ausgleichskasse, je nach Situation Mehrwertsteuer, bei Personal die Unfallversicherung und die berufliche Vorsorge. ',
            { pending: 'Anmeldepflichten, Fristen und Zuständigkeiten fachlich prüfen' },
          ],
        },
      ],
      outro: [
        'Wie lange das dauert, hängt von Notariat, Bank und Handelsregisteramt ab. Diese Fristen liegen nicht bei uns, deshalb nennen wir hier keine Dauer. Im Gespräch sagen wir Ihnen, womit im Moment zu rechnen ist.',
      ],
    },

    // 04 Wer was macht
    {
      kind: 'subsections',
      id: 'zustaendigkeiten',
      heading: 'Wer welchen Teil übernimmt',
      items: [
        {
          heading: 'A&C',
          paragraphs: [
            [
              'Beratung zur Rechtsform, Vorbereitung der Unterlagen, Koordination mit Notariat und Handelsregister, Anmeldungen bei den Sozialversicherungen und bei der Mehrwertsteuer, Aufbau der Buchhaltung. ',
              { pending: 'abschliessender Umfang der Gründungsbegleitung' },
            ],
          ],
        },
        {
          heading: 'Notariat',
          paragraphs: [
            'Öffentliche Beurkundung der Gründung und Anmeldung beim Handelsregister.',
          ],
        },
        {
          heading: 'Bank',
          paragraphs: ['Sperrkonto für die Kapitaleinzahlung und später das Geschäftskonto.'],
        },
        {
          heading: 'Ämter',
          paragraphs: ['Handelsregisteramt, Ausgleichskasse und Steuerverwaltung.'],
        },
      ],
    },

    // 05 Was es kostet
    {
      kind: 'subsections',
      id: 'kosten',
      heading: 'Was eine Gründung kostet',
      intro: ['Die Kosten bestehen aus zwei Teilen, die auseinandergehalten werden sollten.'],
      items: [
        {
          heading: 'Unser Honorar',
          paragraphs: [
            [
              'Für die Begleitung rechnen wir nach dem vereinbarten Umfang ab. Sie erhalten die Offerte, bevor wir beginnen. ',
              { pending: 'ob eine Gründungspauschale angeboten wird' },
            ],
          ],
        },
        {
          heading: 'Kosten von Dritten',
          paragraphs: [
            [
              'Dazu kommen die Gebühren von Notariat und Handelsregisteramt, je nach Bank auch für das Sperrkonto. Diese Beträge gehen nicht an uns. Wir sagen Ihnen im Gespräch, womit zu rechnen ist. ',
              {
                pending:
                  'ob Richtwerte genannt werden sollen; falls ja, mit Quelle und Stand',
              },
            ],
          ],
        },
      ],
    },

    // 06 Nach der Gründung
    {
      kind: 'list',
      id: 'danach',
      heading: 'Was nach der Gründung auf Sie zukommt',
      intro: [
        'Mit dem Handelsregistereintrag ist die Firma da. Danach beginnt die laufende Administration. Je nach Rechtsform und Tätigkeit können folgende Themen anstehen:',
      ],
      items: [
        [
          'Buchhaltung. Einnahmen und Ausgaben sind festzuhalten. Der Umfang der Pflicht hängt von Rechtsform und Umsatz ab. ',
          {
            pending:
              'Buchführungs- und Rechnungslegungspflicht je Rechtsform und Umsatzschwelle fachlich prüfen',
          },
        ],
        [
          'Ausgleichskasse. Anmeldung als selbständigerwerbend oder als Arbeitgeberin. ',
          { pending: 'AHV-Anmeldepflicht und Fristen fachlich prüfen' },
        ],
        [
          'Mehrwertsteuer. Ab einer bestimmten Umsatzschwelle besteht Steuerpflicht. ',
          {
            pending:
              'Umsatzschwelle, Ausnahmen und Befreiungsmöglichkeiten fachlich prüfen; Richtwert bisher 100 000 Franken',
          },
        ],
        [
          'Mit der ersten Anstellung. Unfallversicherung, berufliche Vorsorge, je nach Betrieb ein Krankentaggeld, dazu die monatliche Lohnabrechnung. ',
          { pending: 'BVG-Eintrittsschwelle und UVG-Pflicht fachlich prüfen' },
        ],
        'Betriebsversicherungen. Je nach Tätigkeit Haftpflicht, Sachversicherung oder Fahrzeuge.',
        'Erste Steuererklärung. Nach dem ersten Geschäftsjahr, aufbauend auf dem Abschluss.',
      ],
      outro: [
        'Sie müssen sich nicht um alles gleichzeitig kümmern. Im Gründungsgespräch gehen wir durch, was in Ihrem Fall wann ansteht und was davon Zeit hat.',
      ],
    },

    // 07 Gründungscheckliste
    {
      kind: 'prose',
      id: 'checkliste',
      heading: 'Gründungscheckliste',
      paragraphs: [
        'Der Ablauf und die nötigen Unterlagen auf einer Seite, ohne Anmeldung. Auch nützlich, wenn Sie noch überlegen.',
      ],
      download: { label: 'Checkliste herunterladen (PDF)', file: null },
    },

    // 08 Häufige Fragen
    {
      kind: 'faq',
      id: 'fragen',
      heading: 'Häufige Fragen',
      items: [
        {
          question: 'Wie lange dauert eine Gründung?',
          answer:
            'Das hängt von Notariat, Bank und Handelsregisteramt ab. Wir sagen Ihnen im Gespräch, womit derzeit zu rechnen ist.',
        },
        {
          question: 'Brauche ich ein Geschäftskonto?',
          answer: [
            'Für die GmbH braucht es zuerst ein Sperrkonto für das Stammkapital, das anschliessend in ein Geschäftskonto übergeht. Bei der Einzelfirma ist ein getrenntes Konto nicht vorgeschrieben, für die Buchhaltung aber sinnvoll. ',
            { pending: 'Kontovorschriften fachlich prüfen' },
          ],
        },
        {
          question: 'Ab wann bin ich mehrwertsteuerpflichtig?',
          answer: [
            {
              pending:
                'Umsatzschwelle, Ausnahmen und Sonderfälle fachlich prüfen; Richtwert bisher 100 000 Franken',
            },
          ],
        },
        {
          question: 'Kann ich später von der Einzelfirma in eine GmbH wechseln?',
          answer: [
            'Ein Wechsel der Rechtsform ist möglich. Er sollte vorbereitet werden, insbesondere steuerlich. ',
            { pending: 'steuerliche Folgen einer Umwandlung fachlich prüfen' },
          ],
        },
        {
          question: 'Muss ich mich bei der AHV anmelden?',
          answer: [
            'Bei einer Einzelfirma als selbständigerwerbend, bei einer GmbH als Arbeitgeberin für den eigenen Lohn. ',
            { pending: 'AHV-Anmeldepflicht je Rechtsform fachlich prüfen' },
            ' Die Anmeldung übernehmen wir.',
          ],
        },
        {
          question: 'Übernehmen Sie danach auch die Buchhaltung?',
          answer:
            'Wenn Sie möchten. Die Unterlagen aus der Gründung liegen dann bereits vor. Eine Verpflichtung entsteht durch die Gründungsbegleitung nicht.',
        },
      ],
    },

    // 09 Abschluss
    {
      kind: 'cta',
      id: 'abschluss',
      heading: 'Besprechen Sie Ihre Gründung mit uns',
      paragraphs: [
        'Im Gründungsgespräch klären wir die Rechtsform, den Ablauf und die Kosten für Ihren Fall. Danach wissen Sie, was zu tun ist, auch wenn Sie sich für einen anderen Weg entscheiden.',
      ],
      actions: [
        { kind: 'page', target: 'kontakt', label: 'Gründungsgespräch anfragen' },
        { kind: 'phone' },
      ],
    },
  ],
}
