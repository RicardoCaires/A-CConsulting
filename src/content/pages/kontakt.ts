/**
 * /de/kontakt
 *
 * QUELLE: `content/source/schritt4_fassung2_de.md`, Abschnitt „Kontakt".
 * Wortlaut unveraendert uebernommen.
 *
 * Telefon und E-Mail stehen bewusst ueber dem Formular, damit der telefonische
 * Weg nicht darunter verschwindet.
 *
 * Das Kurzformular ist als Umriss dargestellt, nicht als Eingabemaske: Der
 * serverseitige Endpunkt ist noch nicht gebaut, und ein Formular, das nichts
 * absendet, waere schlechter als keines.
 */

import type { PageContent } from '../types'

export const kontakt: PageContent = {
  key: 'kontakt',

  meta: {
    title: 'So erreichen Sie uns',
    description:
      'Beratung auf Deutsch, Französisch und Portugiesisch. A&C Consulting GmbH, Bielstrasse 22, 3250 Lyss',
  },

  hero: {
    heading: 'So erreichen Sie uns',
    lead: 'Beratung auf Deutsch, Französisch und Portugiesisch.',
  },

  blocks: [
    // 01 Direktkontakt
    // Die Ueberschrift dieses Abschnitts ist zugleich der Seitentitel
    // („So erreichen Sie uns"), darum steht sie oben und nicht noch einmal hier.
    {
      kind: 'contact',
      id: 'direkt',
    },

    // 02 Kurzformular
    {
      kind: 'formOutline',
      id: 'formular',
      heading: 'Oder schreiben Sie uns',
      intro: ['Fünf Angaben genügen. Alles Weitere klären wir im Gespräch.'],
      fields: [
        'Name',
        'Telefon oder E-Mail',
        'Sprache: Deutsch, Französisch, Portugiesisch',
        'Anliegen: Buchhaltung · Lohn · Mehrwertsteuer · Jahresabschluss · Steuern · Versicherungen · Firmengründung · Treuhänderwechsel · Anderes',
        'Ihre Nachricht',
      ],
      consentNote:
        'Zustimmung zur Datenbearbeitung mit Verweis auf die Datenschutzerklärung, nicht vorangekreuzt.',
      submitLabel: 'Anfrage senden',
    },

    // 03 Was danach passiert
    {
      kind: 'prose',
      id: 'ablauf',
      heading: 'Was nach Ihrer Anfrage passiert',
      paragraphs: [
        'Wir melden uns telefonisch oder per E-Mail und schlagen einen Termin für ein Erstgespräch vor.',
        'Damit das Gespräch für Sie etwas bringt, senden wir Ihnen vorher einige Fragen zu Ihrer Situation, zum Beispiel zur Rechtsform, zur Grösse Ihres Betriebs und zu den Aufgaben, um die es geht. Das Ausfüllen ist freiwillig und dauert wenige Minuten.',
      ],
    },

    // 04 Büro und Anfahrt
    {
      kind: 'prose',
      id: 'buero',
      heading: 'Unser Büro',
      paragraphs: [
        'Bielstrasse 22, 3250 Lyss',
        [
          'Öffnungszeiten: ',
          { pending: 'verbindliche Zeiten, identisch mit dem Google-Unternehmensprofil' },
        ],
        ['Anfahrt: ', { pending: 'Parkiermöglichkeit und Weg ab Bahnhof Lyss' }],
      ],
    },

    // 05 Termine ausserhalb der Bürozeiten
    {
      kind: 'prose',
      id: 'randzeiten',
      heading: 'Termine ausserhalb der Bürozeiten',
      paragraphs: [
        [{ pending: 'ob Termine am Abend oder am Samstag angeboten werden' }],
      ],
    },
  ],
}
