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
    title: 'Zwei Ansprechpartner in Lyss',
    description:
      'A&C Consulting wird von Ricardo Caires Cerqueira und Octavio Andrade geführt. Beide betreuen Mandate selbst.',
  },

  // 01 Seitenkopf
  hero: {
    heading: 'Zwei Ansprechpartner in Lyss',
    lead: 'A&C Consulting wird von Ricardo Caires Cerqueira und Octavio Andrade geführt. Beide betreuen Mandate selbst.',
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
            [
              'Geschäftsführer und Mitinhaber. Zuständig für ',
              { pending: 'Bereiche' },
              '. Als Versicherungsvermittler bei der FINMA registriert.',
            ],
            [
              'Beruflicher Weg: ',
              { pending: 'zwei bis vier belegbare Stationen, Abschlüsse und Zulassungen' },
            ],
            ['Beratungssprachen: ', { pending: '' }],
            ['Direkt erreichbar unter ', { pending: 'Direktnummer oder Sammelnummer' }],
          ],
        },
        {
          heading: 'Octavio Andrade',
          paragraphs: [
            ['Geschäftsführer und Mitinhaber. Zuständig für ', { pending: 'Bereiche' }, '.'],
            [
              'Beruflicher Weg: ',
              { pending: 'zwei bis vier belegbare Stationen, Abschlüsse und Zulassungen' },
            ],
            ['Beratungssprachen: ', { pending: '' }],
            ['Direkt erreichbar unter ', { pending: 'Direktnummer oder Sammelnummer' }],
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
            [
              'Wir automatisieren die Routine, nicht die Beratung. Wiederkehrende Arbeitsschritte übernehmen digitale Prozesse ',
              { pending: 'welche konkret' },
              ', damit mehr Zeit für die Fragen bleibt, bei denen es auf Erfahrung ankommt. Fachliche Prüfung und Verantwortung bleiben bei uns.',
            ],
          ],
        },
        {
          heading: 'Vertraulich',
          paragraphs: [
            [
              {
                pending:
                  'Aussage zu Speicherung, Zugriff und Verarbeitungsort, abgestimmt mit der Datenschutzerklärung',
              },
            ],
          ],
        },
      ],
    },

    // 04 Das Unternehmen
    {
      kind: 'list',
      id: 'unternehmen',
      heading: 'Das Unternehmen',
      intro: [
        'A&C Consulting GmbH wurde am 3. Februar 2026 gegründet und hat ihren Sitz an der Bielstrasse 22 in 3250 Lyss.',
      ],
      items: [
        'UID: CHE-332.960.986',
        'Als Versicherungsvermittlerin bei der FINMA registriert, Register-Nr. F01568855',
        [
          'Tätigkeitsbereiche: Versicherungen, Treuhand und Steuern ',
          { pending: 'Abgrenzungen, etwa Revision oder Rechtsberatung' },
        ],
      ],
      outro: [
        [
          'Das Unternehmen ist jung. Die beiden Inhaber arbeiten seit ',
          { pending: 'Jahr oder Anzahl Jahre je Person' },
          ' in diesem Bereich.',
        ],
      ],
    },

    // 05 Region und Sprachen
    {
      kind: 'prose',
      id: 'region',
      heading: 'Region und Sprachen',
      paragraphs: [
        'Wir betreuen Kundinnen und Kunden in Lyss, im Seeland, in Biel/Bienne und im übrigen Kanton Bern.',
        [
          'Beraten wird auf Deutsch, Französisch und Portugiesisch. Das gilt für das Gespräch und für die Korrespondenz. ',
          {
            pending:
              'ob auch Unterlagen und Auswertungen in allen drei Sprachen geliefert werden',
          },
        ],
      ],
    },

    // 06 Abschluss
    {
      kind: 'cta',
      id: 'abschluss',
      heading: 'Lernen Sie uns kennen',
      paragraphs: ['Für ein erstes Gespräch rufen Sie an oder schreiben Sie uns.'],
      actions: [
        { kind: 'page', target: 'kontakt', label: 'Unverbindliches Erstgespräch vereinbaren' },
        { kind: 'phone' },
      ],
    },
  ],
}
