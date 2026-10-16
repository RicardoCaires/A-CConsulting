/**
 * /de/impressum im Baukasten (15.10.2026).
 *
 * Pflichtangaben nach Art. 3 Abs. 1 lit. s UWG. Der Wortlaut ist unverändert aus
 * `src/content/pages/impressum.ts` übernommen (QUELLE: `content/source/impressum_de.md`)
 * und wird nie umformuliert — Änderungen nur auf ausdrückliche Anweisung von Ricardo.
 * Firma, Sitz, UID und FINMA-Nummer kommen als Verweis aus `src/lib/company.ts`,
 * Telefon, E-Mail und Adresse über den Block `kontakt`.
 *
 * Neu ist nur der Banner: schlichte Überschrift statt Slogan
 * (`content/source/umbau_recht_de.md`).
 */
import type { SeitenInhalt } from './typen'

export const impressum: SeitenInhalt = {
  meta: {
    title: 'Impressum',
    description:
      'Pflichtangaben der A&C Consulting GmbH: Firma, Sitz, Handelsregister, FINMA-Registrierung und Kontakt.',
  },
  banner: { themenzeile: 'IMPRESSUM', ueberschrift: 'Impressum' },
  bloecke: [
    {
      art: 'text',
      id: 'verantwortlich',
      titel: { vor: 'Verantwortlich für diese ', akzent: 'Website' },
      absaetze: [
        [{ company: 'firma' }],
        [{ company: 'sitz' }],
        'Gesellschaft mit beschränkter Haftung, eingetragen im Handelsregister des Kantons Bern.',
        ['UID und Handelsregisternummer: ', { company: 'uid' }],
      ],
    },
    {
      art: 'kontakt',
      id: 'kontakt',
      titel: { akzent: 'Kontakt' },
      satz: 'Telefon und E-Mail stehen im Fussbereich jeder Seite und auf der Kontaktseite.',
      beschriftungen: { telefon: 'Telefon', email: 'E-Mail', buero: 'Adresse' },
      ohneKnopf: true,
      ohneKarte: true,
    },
    {
      art: 'text',
      id: 'vertretung',
      titel: { vor: 'Vertretungsberechtigte ', akzent: 'Personen' },
      absaetze: ['Geschäftsführer und Mitinhaber: Octavio Nuno Gouveia Andrade', 'Mitinhaber: Ricardo Caires'],
    },
    {
      art: 'text',
      id: 'aufsicht',
      titel: { akzent: 'Aufsicht', nach: ' und Registrierung' },
      absaetze: [
        'A&C Consulting GmbH ist als Versicherungsvermittlerin im Register der Eidgenössischen Finanzmarktaufsicht FINMA eingetragen.',
        ['Registernummer: ', { company: 'finma' }],
        [
          'Der Eintrag ist öffentlich einsehbar: ',
          {
            url: 'https://www.finma.ch/de/bewilligung/versicherungsvermittlung/registersuche/F01568855',
            label: 'Registereintrag im FINMA-Register',
          },
        ],
        'Zuständige Aufsichtsbehörde: Eidgenössische Finanzmarktaufsicht FINMA, Laupenstrasse 27, 3003 Bern.',
        'Als ungebundene Versicherungsvermittlerin vertreten wir die Interessen unserer Kundinnen und Kunden und nicht diejenigen einer Versicherungsgesellschaft.',
      ],
    },
    {
      art: 'text',
      id: 'berufsbezeichnung',
      titel: { akzent: 'Berufsbezeichnung' },
      absaetze: [
        'Versicherungsbroker sowie Treuhand und Steuern. Die Berufsbezeichnungen sind in der Schweiz nicht geschützt, mit Ausnahme der eidgenössischen Fachausweise, die wir nicht führen.',
      ],
    },
    {
      art: 'text',
      id: 'haftung',
      titel: { vor: 'Haftung für ', akzent: 'Inhalte' },
      absaetze: [
        'Wir erstellen die Inhalte dieser Website mit Sorgfalt. Für Richtigkeit, Vollständigkeit und Aktualität übernehmen wir jedoch keine Gewähr.',
        'Die Angaben auf dieser Website sind allgemeiner Natur. Sie ersetzen keine Beratung im Einzelfall und begründen kein Mandatsverhältnis.',
        'Rechtslagen, Fristen und Schwellenwerte ändern sich. Massgebend ist immer die im Zeitpunkt geltende Fassung der jeweiligen Bestimmung.',
      ],
    },
    {
      art: 'text',
      id: 'verweise',
      titel: { vor: 'Haftung für ', akzent: 'Verweise' },
      absaetze: [
        'Diese Website enthält Verweise auf Websites Dritter. Auf deren Inhalte haben wir keinen Einfluss, und wir übernehmen dafür keine Verantwortung.',
        'Für den Inhalt einer verlinkten Seite ist deren Betreiberin oder Betreiber verantwortlich.',
      ],
    },
    {
      art: 'text',
      id: 'urheberrecht',
      titel: { akzent: 'Urheberrecht' },
      absaetze: [
        'Texte, Bilder, Grafiken und das Logo auf dieser Website sind urheberrechtlich geschützt.',
        'Eine Verwendung ausserhalb der Grenzen des Urheberrechts bedarf unserer schriftlichen Zustimmung.',
      ],
    },
  ],
}
