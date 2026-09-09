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
    actions: [{ kind: 'page', target: 'kontakt', label: 'Erstgespräch vereinbaren' }],
  },

  blocks: [
    // 02 Bereichsnavigation — Treuhand ist die Oberkategorie fuer alles
    // Kaufmaennische. Sie traegt keinen eigenen Text: die Beschriftungen sind
    // dieselben wie in der Hauptnavigation.
    {
      kind: 'serviceNav',
      items: ['buchhaltung', 'steuern', 'firmengruendung', 'treuhaenderWechseln'],
    },

    // 03 Leistungen im Überblick
    {
      kind: 'subsections',
      id: 'leistungen',
      heading: 'Was wir übernehmen',
      items: [
        {
          heading: 'Buchhaltung',
          paragraphs: [
            'Wir führen Ihre Buchhaltung laufend oder periodisch — je nachdem, was zu Ihrem Betrieb passt. Sie liefern die Belege, wir verbuchen sie und sagen Ihnen, was fehlt.',
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
            'Abschluss Ihrer Buchhaltung am Ende des Geschäftsjahres, mit Anhang, Kontenblättern und einer Besprechung.',
          ],
        },
        {
          heading: 'Unternehmensadministration',
          paragraphs: [
            'Je nach Situation übernehmen wir auch Zahlungsverkehr, Mahnwesen und die Korrespondenz mit Ämtern. Was davon sinnvoll ist, halten wir in der Offerte fest.',
          ],
        },
        {
          heading: 'Firmengründung',
          paragraphs: [
            'Von der Wahl der Rechtsform bis zum Eintrag im Handelsregister. Wir sagen Ihnen vorher, was der Weg kostet und wie lange er dauert.',
          ],
        },
        {
          heading: 'Steuern für Firmen',
          paragraphs: ['Die Steuererklärung Ihrer Gesellschaft, aufbauend auf dem Abschluss.'],
        },
      ],
    },

    // 04 Für wen wir arbeiten
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

    // 05 Wie wir arbeiten
    {
      kind: 'prose',
      id: 'arbeitsweise',
      heading: 'Wie wir arbeiten',
      paragraphs: [
        'Ihre Zahlen sieht und prüft eine Person, die Ihr Dossier kennt. Fachliche Entscheidungen treffen wir selbst und tragen die Verantwortung dafür.',
        'Ihre Daten werden in der Schweiz verarbeitet und vertraulich behandelt.',
      ],
    },

    // 06 Was es kostet
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
        'Wir vereinbaren eine Pauschale. Die besprochenen Leistungen sind darin enthalten.',
      ],
    },

    // 07 Ablauf
    {
      kind: 'steps',
      id: 'ablauf',
      heading: 'So läuft eine Zusammenarbeit an',
      steps: [
        {
          heading: 'Gespräch',
          body: 'Sie schildern, wie Ihre Administration heute läuft und was Sie abgeben möchten. Wir fragen nach, wo es für die Einschätzung nötig ist. Das erste Gespräch kostet nichts.',
        },
        {
          heading: 'Umfang festhalten',
          body: 'Wir halten schriftlich fest, welche Aufgaben wir übernehmen und welche bei Ihnen bleiben — mit dem, was es kostet. Erst wenn Sie zustimmen, fangen wir an.',
        },
        {
          heading: 'Übernahme',
          body: 'Wir richten die Buchhaltung ein oder übernehmen den bestehenden Stand. Bei einem Wechsel klären wir mit der bisherigen Stelle, was zu übergeben ist.',
        },
        {
          heading: 'Laufender Betrieb',
          body: 'Sie liefern die Belege, wir verbuchen und melden uns, wenn etwas fehlt oder eine Frist ansteht. Was wir für Sie erledigt haben, sehen Sie in der Abrechnung.',
        },
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
          question: 'Welche Software setzen Sie ein?',
          answer: 'Wir arbeiten mit verschiedenen Softwarelösungen. Ein Zugriff für Kundinnen und Kunden ist möglich.',
        },
        {
          question: 'Wer ist mein Ansprechpartner?',
          answer: 'Eine feste Person, die Ihr Dossier führt. Beide betreuen Versicherungskunden; Treuhandmandate führt Ricardo Caires Cerqueira.',
        },
        {
          question: 'Wie oft sehen wir uns?',
          answer: 'Rhythmus und Austausch legen wir zu Beginn gemeinsam fest.',
        },
        {
          question: 'Was passiert mit meinen Daten?',
          answer: 'Ihre Daten werden in der Schweiz verarbeitet und vertraulich behandelt.',
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
        { kind: 'page', target: 'kontakt', label: 'Erstgespräch vereinbaren' },
        { kind: 'phone' },
      ],
    },
  ],
}
