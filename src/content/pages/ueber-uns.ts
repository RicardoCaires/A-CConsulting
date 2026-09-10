/**
 * /de/ueber-uns
 *
 * QUELLE: `content/source/schritt4_fassung2_de.md`, Abschnitt „Über uns".
 * Wortlaut unveraendert uebernommen.
 *
 * Diese Seite traegt das Merkmal „persoenliche Betreuung" fast allein. Die
 * Zustaendigkeiten der beiden Inhaber sind die wichtigste noch fehlende Angabe
 * im ganzen Projekt — ohne sie bleibt der Abschnitt eine Behauptung.
 * Porträtaufnahmen fehlen ebenfalls; ohne echte Bilder geht die Seite nicht live.
 */

import type { PageContent } from '../types'

export const ueberUns: PageContent = {
  key: 'ueberUns',

  meta: {
    title: 'Zwei Ansprechpartner, drei Bereiche',
    description:
      'A&C Consulting wird von Ricardo Caires Cerqueira und Octavio Nuno Gouveia Andrade geführt. Beide betreuen Mandate selbst.',
  },

  // 01 Seitenkopf
  hero: {
    heading: 'Zwei Ansprechpartner, drei Bereiche',
    lead: 'A&C Consulting wird von Ricardo Caires Cerqueira und Octavio Nuno Gouveia Andrade geführt. Beide betreuen Mandate selbst.',
  },

  blocks: [
    // 02 Die beiden Inhaber
    {
      kind: 'subsections',
      id: 'inhaber',
      heading: 'Die beiden Inhaber',
      items: [
        {
          heading: 'Ricardo Caires Cerqueira',
          paragraphs: [
            'Geschäftsführer und Mitinhaber. Zuständig für Treuhand, Steuern und Versicherungen. Als Versicherungsvermittler bei der FINMA registriert.',
            'Beruflicher Weg: Kaufmann EFZ, danach im Finanz- und Rechnungswesen der Creabeton Matériaux AG in Lyss verantwortlich für Kreditoren, Debitoren und Anlagebuchhaltung sowie Leiter der Berufsbildung. Abschlüsse: Sachbearbeiter Rechnungswesen VSK am Feusi Bildungszentrum Bern und Versicherungsvermittler VBV.',
            'Beratungssprachen: Deutsch, Französisch, Portugiesisch und Englisch.',
            ['Direkt erreichbar unter ', { company: 'ricardo' }],
          ],
        },
        {
          heading: 'Octavio Nuno Gouveia Andrade',
          paragraphs: [
            'Geschäftsführer und Mitinhaber. Zuständig für Versicherungen.',
            'Beruflicher Weg: Kundenberater und Verkaufsleiter bei der Allianz Suisse in Biel, danach Hauptagent der Zurich Versicherungen in Biel, seither selbstständiger Versicherungsbroker. Abschluss: Versicherungsvermittler VBV.',
            'Beratungssprachen: Deutsch, Französisch, Portugiesisch und Englisch.',
            ['Direkt erreichbar unter ', { company: 'octavio' }],
          ],
        },
      ],
    },

    // 03 Wofür wir stehen
    {
      kind: 'subsections',
      id: 'arbeitsweise',
      heading: 'Wie wir arbeiten',
      items: [
        {
          heading: 'Persönlich',
          paragraphs: [
            'Sie sprechen mit der Person, die Ihr Dossier bearbeitet. Wer für Sie zuständig ist, wissen Sie ab dem ersten Gespräch.',
          ],
        },
        {
          heading: 'Nachvollziehbar',
          paragraphs: [
            'Zu Beginn halten wir schriftlich fest, welche Aufgaben wir übernehmen und welche bei Ihnen bleiben. Ändert sich etwas am Umfang, sprechen wir vorher darüber.',
          ],
        },
        {
          heading: 'Digital, wo es etwas bringt',
          paragraphs: [
            'Sie haben feste Ansprechpartner, kurze Wege und eine direkte Kommunikation. Fachliche Prüfung und Verantwortung bleiben bei uns.',
          ],
        },
        {
          heading: 'Vertraulich',
          paragraphs: [
            'Ihre Daten werden in der Schweiz verarbeitet und vertraulich behandelt.',
          ],
        },
        {
          heading: 'Mit klaren Grenzen',
          paragraphs: [
            'Tätigkeitsbereiche: Versicherungen, Treuhand und Steuern. Nicht zu unseren Leistungen gehören die aktienrechtliche Revision und die Rechtsberatung. Wo das nötig wird, arbeiten wir mit Fachpersonen zusammen.',
          ],
        },
      ],
    },

    // 04 Standort
    //
    // Hiess bis zum Neuaufbau „Region und Sprachen". Der Anker `region`
    // bleibt bestehen, damit bestehende Verweise nicht brechen.
    {
      kind: 'prose',
      id: 'region',
      heading: 'Wo Sie uns finden',
      paragraphs: [
        'Unser Büro liegt an der Bielstrasse in Lyss, wenige Minuten vom Bahnhof. Termine finden bei uns statt oder bei Ihnen — wie es Ihnen besser passt.',
        'Wir betreuen Kundinnen und Kunden im Seeland und im Kanton Bern.',
        'Beraten wird auf Deutsch, Französisch und Portugiesisch. Das gilt für das Gespräch, für die Korrespondenz und für die Unterlagen.',
      ],
    },

    // 05 Abschluss
    {
      kind: 'cta',
      id: 'abschluss',
      heading: 'Lernen Sie uns kennen',
      paragraphs: ['Für ein erstes Gespräch rufen Sie an oder schreiben Sie uns.'],
      actions: [
        { kind: 'page', target: 'kontakt', label: 'Erstgespräch anfragen' },
        { kind: 'phone' },
      ],
    },
  ],
}
