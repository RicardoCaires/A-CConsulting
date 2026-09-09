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
      { kind: 'page', target: 'kontakt', label: 'Erstgespräch vereinbaren' },
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
              'Die Einzelfirma braucht kein Mindestkapital. Für die GmbH ist ein Stammkapital nötig, das vor der Gründung einbezahlt wird. ',
              
            ],
          ],
        },
        {
          heading: 'Haftung',
          paragraphs: [
            [
              'Bei der Einzelfirma haften Sie mit Ihrem Privatvermögen. Bei der GmbH haftet grundsätzlich das Gesellschaftsvermögen. ',
              
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
              'Die GmbH wird eingetragen. Für die Einzelfirma besteht die Eintragungspflicht ab einem bestimmten Jahresumsatz, vorher ist der Eintrag freiwillig. ',
              
            ],
          ],
        },
        {
          heading: 'Sozialversicherungen',
          paragraphs: [
            [
              'Als Inhaberin oder Inhaber einer Einzelfirma gelten Sie als selbständigerwerbend. Bei einer GmbH sind Sie in der eigenen Firma angestellt, mit den entsprechenden Beiträgen und Versicherungen. ',
              
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
        [],
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
              'Beratung zur Rechtsform, Vorbereitung der Unterlagen, Koordination mit Notariat und Handelsregister, Anmeldungen bei den Sozialversicherungen und bei der Mehrwertsteuer, Aufbau der Buchhaltung. Alles, was beglaubigt oder notariell beurkundet werden muss, erledigt das Notariat. Die übrigen Schritte begleiten wir.',
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
              'Für die Gründungsbegleitung vereinbaren wir eine Pauschale. Sie erhalten die Offerte, bevor wir beginnen.',
            ],
          ],
        },
        {
          heading: 'Kosten von Dritten',
          paragraphs: [
            [
              'Dazu kommen die Gebühren von Notariat und Handelsregisteramt, je nach Bank auch für das Sperrkonto. Diese Beträge gehen nicht an uns. Wir sagen Ihnen im Gespräch, womit zu rechnen ist.',
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
          
        ],
        [
          'Ausgleichskasse. Anmeldung als selbständigerwerbend oder als Arbeitgeberin. ',
          
        ],
        [
          'Mehrwertsteuer. Ab einer bestimmten Umsatzschwelle besteht Steuerpflicht. ',
          
        ],
        [
          'Mit der ersten Anstellung. Unfallversicherung, berufliche Vorsorge, je nach Betrieb ein Krankentaggeld, dazu die monatliche Lohnabrechnung. ',
          
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
            
          ],
        },
        {
          question: 'Ab wann bin ich mehrwertsteuerpflichtig?',
          answer: [
            'Das hängt von Ihrem Umsatz und Ihrer Tätigkeit ab. Wir rechnen vor der Gründung mit Ihnen durch, ob und ab wann die Pflicht für Sie gilt. ',
            
          ],
        },
        {
          question: 'Kann ich später von der Einzelfirma in eine GmbH wechseln?',
          answer: [
            'Ein Wechsel der Rechtsform ist möglich. Er sollte vorbereitet werden, insbesondere steuerlich. ',
            
          ],
        },
        {
          question: 'Muss ich mich bei der AHV anmelden?',
          answer: [
            'Bei einer Einzelfirma als selbständigerwerbend, bei einer GmbH als Arbeitgeberin für den eigenen Lohn. ',
            
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
        { kind: 'page', target: 'kontakt', label: 'Erstgespräch vereinbaren' },
        { kind: 'phone' },
      ],
    },
  ],
}
