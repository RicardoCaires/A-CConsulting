/**
 * /de/impressum
 *
 * QUELLE: `content/source/impressum_de.md`.
 *
 * Pflichtangaben nach Art. 3 Abs. 1 lit. s UWG. Sie werden nie umformuliert
 * und nie automatisch geaendert — Aenderungen ausschliesslich auf ausdrueckliche
 * Anweisung von Ricardo (CLAUDE.md, Abschnitt 2).
 *
 * Firma, Sitz, UID und FINMA-Nummer stehen hier **nicht als Text**, sondern als
 * Verweis auf `src/lib/company.ts`. Das ist an dieser Stelle wichtiger als
 * anderswo: Eine Registernummer, die im Impressum von der tatsaechlichen
 * abweicht, ist keine Unschoenheit, sondern eine falsche Pflichtangabe.
 *
 * Der Sitz ist bewusst `sitz` und nicht `buero`: Im Impressum steht, was das
 * Handelsregister fuehrt. Nach dem Umzug des Bueros nach Aegerten bleibt hier
 * so lange Lyss, bis `registerNachgefuehrt` in `company.ts` auf `true` steht.
 *
 * Der Link auf den FINMA-Registereintrag fehlt absichtlich. Er kommt erst,
 * wenn Ricardo den Eintrag von Hand geprueft hat — bis dahin steht die Nummer
 * als Text und der Link als offene Angabe.
 */

import type { PageContent } from '../types'

export const impressum: PageContent = {
  key: 'impressum',

  meta: {
    title: 'Impressum',
    description:
      'Pflichtangaben der A&C Consulting GmbH: Firma, Sitz, Handelsregister, FINMA-Registrierung und Kontakt.',
  },

  hero: {
    heading: 'Impressum',
    lead: 'Angaben nach Artikel 3 des Bundesgesetzes gegen den unlauteren Wettbewerb.',
  },

  blocks: [
    // 01 Verantwortlich
    {
      kind: 'prose',
      id: 'verantwortlich',
      heading: 'Verantwortlich für diese Website',
      paragraphs: [
        [{ company: 'firma' }],
        [{ company: 'sitz' }],
        'Gesellschaft mit beschränkter Haftung, eingetragen im Handelsregister des Kantons Bern.',
        ['UID und Handelsregisternummer: ', { company: 'uid' }],
      ],
    },

    // 02 Kontakt — Telefon, E-Mail und Adresse kommen aus company.ts
    {
      kind: 'contact',
      id: 'kontakt',
      heading: 'Kontakt',
    },

    // 03 Vertretung
    {
      kind: 'prose',
      id: 'vertretung',
      heading: 'Vertretungsberechtigte Personen',
      paragraphs: [
        'Geschäftsführer und Mitinhaber: Ricardo Caires Cerqueira',
        'Mitinhaber: Octavio Andrade',
      ],
    },

    // 04 Aufsicht
    {
      kind: 'prose',
      id: 'aufsicht',
      heading: 'Aufsicht und Registrierung',
      paragraphs: [
        'A&C Consulting GmbH ist als Versicherungsvermittlerin im Register der Eidgenössischen Finanzmarktaufsicht FINMA eingetragen.',
        ['Registernummer: ', { company: 'finma' }],
        [
          { pending: 'Link auf den Registereintrag bei der FINMA, erst nach Prüfung des Eintrags von Hand' },
        ],
        'Zuständige Aufsichtsbehörde: Eidgenössische Finanzmarktaufsicht FINMA, Laupenstrasse 27, 3003 Bern.',
        'Als ungebundene Versicherungsvermittlerin vertreten wir die Interessen unserer Kundinnen und Kunden und nicht diejenigen einer Versicherungsgesellschaft.',
      ],
    },

    // 05 Berufsbezeichnung
    {
      kind: 'prose',
      id: 'berufsbezeichnung',
      heading: 'Berufsbezeichnung',
      paragraphs: [
        'Versicherungsbroker sowie Treuhand und Steuern. Die Berufsbezeichnungen sind in der Schweiz nicht geschützt, mit Ausnahme der eidgenössischen Fachausweise, die wir nicht führen.',
      ],
    },

    // 06 Haftung für Inhalte
    {
      kind: 'prose',
      id: 'haftung',
      heading: 'Haftung für Inhalte',
      paragraphs: [
        'Wir erstellen die Inhalte dieser Website mit Sorgfalt. Für Richtigkeit, Vollständigkeit und Aktualität übernehmen wir jedoch keine Gewähr.',
        'Die Angaben auf dieser Website sind allgemeiner Natur. Sie ersetzen keine Beratung im Einzelfall und begründen kein Mandatsverhältnis.',
        'Rechtslagen, Fristen und Schwellenwerte ändern sich. Massgebend ist immer die im Zeitpunkt geltende Fassung der jeweiligen Bestimmung.',
      ],
    },

    // 07 Haftung für Verweise
    {
      kind: 'prose',
      id: 'verweise',
      heading: 'Haftung für Verweise',
      paragraphs: [
        'Diese Website enthält Verweise auf Websites Dritter. Auf deren Inhalte haben wir keinen Einfluss, und wir übernehmen dafür keine Verantwortung.',
        'Für den Inhalt einer verlinkten Seite ist deren Betreiberin oder Betreiber verantwortlich.',
      ],
    },

    // 08 Urheberrecht
    {
      kind: 'prose',
      id: 'urheberrecht',
      heading: 'Urheberrecht',
      paragraphs: [
        'Texte, Bilder, Grafiken und das Logo auf dieser Website sind urheberrechtlich geschützt.',
        'Eine Verwendung ausserhalb der Grenzen des Urheberrechts bedarf unserer schriftlichen Zustimmung.',
      ],
    },
  ],
}
