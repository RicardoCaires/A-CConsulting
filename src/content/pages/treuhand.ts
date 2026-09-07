/**
 * /de/treuhand
 *
 * QUELLE: `content/source/schritt4_fassung2_de.md`, Abschnitt „Treuhand".
 * Wortlaut unveraendert uebernommen. Reihenfolge der elf Abschnitte wie dort.
 */

import type { PageContent } from '../types'

export const treuhand: PageContent = {
  key: 'treuhand',

  meta: {
    title: 'Buchhaltung, Löhne und Abschluss für Selbständige und KMU',
    description:
      'Sie liefern die Unterlagen, wir führen die Buchhaltung laufend. Sie haben einen festen Ansprechpartner und wissen jederzeit, was als Nächstes ansteht.',
  },

  // 01 Seitenkopf
  hero: {
    heading: 'Buchhaltung, Löhne und Abschluss für Selbständige und KMU',
    lead: 'Sie liefern die Unterlagen, wir führen die Buchhaltung laufend. Sie haben einen festen Ansprechpartner und wissen jederzeit, was als Nächstes ansteht.',
    actions: [
      { kind: 'page', target: 'kontakt', label: 'Unverbindliches Erstgespräch vereinbaren' },
      { kind: 'page', target: 'kontakt', label: 'Bestehende Buchhaltung besprechen', variant: 'ghost' },
    ],
  },

  blocks: [
    // Bereichsnavigation — Treuhand ist die Oberkategorie fuer alles
    // Kaufmaennische. Sie traegt keinen eigenen Text: die Beschriftungen sind
    // dieselben wie in der Hauptnavigation.
    {
      kind: 'serviceNav',
      items: [
        'buchhaltung',
        'lohnbuchhaltung',
        'mehrwertsteuer',
        'jahresabschluss',
        'steuern',
        'firmengruendung',
        'treuhaenderWechseln',
      ],
    },

    // 02 Leistungen im Überblick
    {
      kind: 'subsections',
      id: 'leistungen',
      heading: 'Was wir übernehmen',
      items: [
        {
          heading: 'Buchhaltung',
          paragraphs: [
            'Laufende Erfassung Ihrer Belege, Abstimmung der Konten, Auswertungen zu vereinbarten Terminen.',
          ],
        },
        {
          heading: 'Lohnbuchhaltung',
          paragraphs: [
            'Monatliche Lohnabrechnungen, Lohnausweise, Quellensteuer und die Meldungen an die Sozialversicherungen.',
          ],
        },
        {
          heading: 'Mehrwertsteuer',
          paragraphs: [
            'Abrechnungen, Einhaltung der Fristen und die Wahl der Abrechnungsmethode.',
          ],
        },
        {
          heading: 'Jahresabschluss',
          paragraphs: [
            [
              'Abschluss Ihrer Buchhaltung am Ende des Geschäftsjahres. ',
              { pending: 'Umfang, etwa Anhang, Kontenblätter, Besprechung' },
            ],
          ],
        },
        {
          heading: 'Unternehmensadministration',
          paragraphs: [
            [
              {
                pending:
                  'welche administrativen Aufgaben A&C tatsächlich übernimmt, etwa Zahlungsverkehr, Mahnwesen, Korrespondenz mit Ämtern',
              },
            ],
          ],
        },
        {
          heading: 'Steuern für Firmen',
          paragraphs: ['Die Steuererklärung Ihrer Gesellschaft, aufbauend auf dem Abschluss.'],
        },
      ],
    },

    // 03 Für wen wir arbeiten
    {
      kind: 'subsections',
      id: 'zielgruppen',
      heading: 'Für wen wir arbeiten',
      items: [
        {
          heading: 'Selbständigerwerbende',
          paragraphs: [
            'Sie führen Ihren Betrieb allein. Dazu gehören in der Regel die laufende Buchhaltung, die Mehrwertsteuer und die Steuererklärung.',
          ],
        },
        {
          heading: 'Einzelfirmen',
          paragraphs: [
            'Wie oben, dazu kommen je nach Grösse der Abschluss und die Abgrenzung zwischen geschäftlich und privat.',
          ],
        },
        {
          heading: 'GmbH ohne Personal',
          paragraphs: [
            'Buchführungspflicht, Jahresabschluss und Steuererklärung der Gesellschaft. Dazu die Abrechnung Ihres eigenen Lohns.',
          ],
        },
        {
          heading: 'KMU mit Mitarbeitenden',
          paragraphs: [
            'Buchhaltung, monatliche Lohnabrechnungen, Sozialversicherungen, Mehrwertsteuer und Abschluss. Diese Aufgaben greifen ineinander: Löhne, Sozialversicherungen und Jahresabschluss bauen auf denselben Zahlen auf.',
          ],
        },
      ],
    },

    // 04 So läuft die Zusammenarbeit
    {
      kind: 'steps',
      id: 'zusammenarbeit',
      heading: 'So läuft die Zusammenarbeit',
      steps: [
        {
          heading: 'Erstgespräch',
          body: 'Wir schauen an, wie Ihre Administration heute läuft und was Sie abgeben möchten.',
        },
        {
          heading: 'Offerte und Leistungsumfang',
          body: 'Sie erhalten schriftlich, welche Aufgaben wir übernehmen und welche bei Ihnen bleiben. Das ist die Grundlage der Zusammenarbeit und das Dokument, auf das wir uns später beziehen.',
        },
        {
          heading: 'Übernahme und Start',
          body: 'Wir richten Ihre Buchhaltung ein und übernehmen den bestehenden Stand. Den Startzeitpunkt legen wir gemeinsam fest.',
        },
        {
          heading: 'Laufender Betrieb',
          body: 'Sie liefern Ihre Unterlagen im vereinbarten Rhythmus. Wir buchen, melden uns, wenn etwas fehlt, und liefern die Auswertungen zu den festgelegten Terminen.',
        },
      ],
    },

    // 05 Was Sie liefern
    {
      kind: 'list',
      id: 'unterlagen',
      heading: 'Was Sie uns liefern',
      intro: [
        [
          'Sie müssen keine Buchhaltungssoftware bedienen und nichts vorbuchen. ',
          { pending: 'ob Belege sortiert oder in bestimmter Form geliefert werden müssen' },
        ],
        'In der Regel brauchen wir von Ihnen:',
      ],
      items: [
        'Kontoauszüge',
        'Rechnungen, die Sie gestellt haben',
        'Rechnungen, die Sie bezahlt haben',
        'Belege für Spesen und Barzahlungen',
        'bei Mitarbeitenden: Arbeitsverträge, Änderungen, Absenzen',
      ],
      outro: [
        [
          'In welcher Form und in welchem Rhythmus Sie das liefern, halten wir zu Beginn fest. ',
          { pending: 'mögliche Lieferwege, etwa Portal, E-Mail, Fotos, physische Ablage' },
        ],
      ],
      download: { label: 'Checkliste: Was Sie uns monatlich liefern', file: null },
    },

    // 06 Wie wir arbeiten
    {
      kind: 'prose',
      id: 'arbeitsweise',
      heading: 'Wie wir arbeiten',
      paragraphs: [
        [
          'Wir automatisieren die Routine, nicht die Beratung. Wiederkehrende Arbeitsschritte übernehmen digitale Prozesse ',
          { pending: 'welche Schritte das konkret sind' },
          '. Das schafft Zeit für die Fragen, bei denen es auf Erfahrung ankommt.',
        ],
        'Ihre Zahlen sieht und prüft eine Person, die Ihr Dossier kennt. Fachliche Entscheidungen treffen wir selbst und tragen die Verantwortung dafür.',
        [
          {
            pending:
              'eingesetzte Software, Ort der Datenverarbeitung und Aussage zur Vertraulichkeit, abgestimmt mit der Datenschutzerklärung',
          },
        ],
      ],
    },

    // 07 Was es kostet
    {
      kind: 'list',
      id: 'kosten',
      heading: 'Was es kostet',
      intro: ['Wir rechnen nach Aufwand ab. Wie hoch dieser ausfällt, hängt vor allem von diesen Punkten ab:'],
      items: [
        'Anzahl Belege und Buchungen',
        'Anzahl Mitarbeitende',
        'Mehrwertsteuerpflicht und Abrechnungsmethode',
        'Umfang des Jahresabschlusses',
        'Form, in der Sie die Unterlagen liefern',
      ],
      outro: [
        'Nach dem Erstgespräch erhalten Sie eine Offerte mit dem vereinbarten Leistungsumfang. Ändert sich der Umfang, sprechen wir vorher darüber.',
        [{ pending: 'ob Pauschalen, Monatsmodelle oder Ab-Preise angeboten werden' }],
      ],
    },

    // 08 Wechsel-Teaser
    {
      kind: 'prose',
      id: 'wechsel',
      heading: 'Sie haben bereits einen Treuhänder?',
      paragraphs: [
        'Ein Wechsel ist grundsätzlich möglich. Wir schauen mit Ihnen zuerst die bestehende Situation an, klären den geeigneten Zeitpunkt und welche Unterlagen für die Übernahme nötig sind.',
      ],
      links: [{ target: 'treuhaenderWechseln', label: 'So gehen wir bei einem Wechsel vor' }],
    },

    // 09 Was dazugehört
    {
      kind: 'prose',
      id: 'dazugehoert',
      heading: 'Was dazugehört',
      paragraphs: [
        'Sobald Sie Mitarbeitende anstellen, gehören zur Lohnabrechnung auch die Unfallversicherung, die berufliche Vorsorge und das Krankentaggeld. Und auf den Jahresabschluss folgt die Steuererklärung der Firma. Beides erledigen wir im selben Haus, damit Sie nicht zwischen mehreren Stellen vermitteln müssen.',
      ],
      links: [
        { target: 'versicherungen', label: 'Versicherungen' },
        { target: 'steuern', label: 'Steuern' },
      ],
    },

    // 10 Häufige Fragen
    {
      kind: 'faq',
      id: 'fragen',
      heading: 'Häufige Fragen',
      items: [
        {
          question: 'Kann ich mitten im Jahr starten?',
          answer:
            'Ein unterjähriger Start ist grundsätzlich möglich. Wir übernehmen den bestehenden Stand und führen von dort weiter. Wie aufwendig das ist, hängt davon ab, wie die Buchhaltung bisher geführt wurde.',
        },
        {
          question: 'Muss ich meine Belege sortieren?',
          answer: [{ pending: 'gewünschte Form der Belegablage' }],
        },
        {
          question: 'Welche Software setzen Sie ein?',
          answer: [
            {
              pending:
                'eingesetzte Buchhaltungs- und Lohnsoftware, und ob Kundinnen und Kunden Zugriff erhalten',
            },
          ],
        },
        {
          question: 'Wer ist mein Ansprechpartner?',
          answer: [
            'Eine feste Person, die Ihr Dossier führt. ',
            { pending: 'Zuordnung nach Bereich oder nach Sprache' },
          ],
        },
        {
          question: 'Wie oft sehen wir uns?',
          answer: 'Rhythmus und Austausch legen wir zu Beginn gemeinsam fest.',
        },
        {
          question: 'Was passiert mit meinen Daten?',
          answer: [
            {
              pending:
                'Aussage zu Speicherort, Zugriff und Vertraulichkeit, abgestimmt mit der Datenschutzerklärung',
            },
          ],
        },
      ],
    },

    // 11 Abschluss
    {
      kind: 'cta',
      id: 'abschluss',
      heading: 'Reden wir über Ihre Administration',
      paragraphs: [
        'Im Erstgespräch schauen wir an, was heute bei Ihnen liegt und was davon zu uns kann. Danach wissen Sie, was eine Zusammenarbeit für Sie bedeuten würde.',
      ],
      actions: [
        { kind: 'page', target: 'kontakt', label: 'Unverbindliches Erstgespräch vereinbaren' },
        { kind: 'phone' },
      ],
    },
  ],
}
