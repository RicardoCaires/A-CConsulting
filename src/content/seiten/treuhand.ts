/**
 * /de/treuhand im Baukasten (15.10.2026). Nimmt Buchhaltung, Treuhänderwechsel und
 * Firmengründung auf, die bis dahin eigene Seiten waren.
 * Am selben Tag gekürzt; die Buchhaltung steht als Ablauf in drei Stufen
 * (Ricardo: «zu viel text», «häufiger bildlich dar mit diagrammen»). QUELLEN:
 * `content/source/umbau_2026-10b_de.md`, `umbau_treuhand_de.md`, `schritt4_fassung2_de.md`,
 * `buchhaltung_leistungen_de.md`, `buchhaltung_unterlagen_de.md`,
 * `firmengruendung_rechtsformen_de.md`, `wechsel_zeitpunkt_de.md`.
 */
import type { SeitenInhalt } from './typen'

export const treuhand: SeitenInhalt = {
  meta: {
    title: 'Buchhaltung, Löhne und Abschluss für Selbständige und KMU',
    description:
      'Sie liefern die Unterlagen, wir führen die Buchhaltung laufend. Sie haben einen festen Ansprechpartner und wissen jederzeit, was als Nächstes ansteht.',
  },
  banner: { themenzeile: 'TREUHAND', ueberschrift: 'Buchhaltung, Löhne und Abschluss für Selbständige und KMU' },
  bloecke: [
    {
      art: 'listen',
      id: 'leistungen',
      titel: { vor: 'Was wir ', akzent: 'übernehmen' },
      listen: [
        {
          titel: 'Buchhaltung und Abschluss',
          ziel: { ziel: 'treuhand', anker: 'buchhaltung' },
          eintraege: [
            {
              text: 'Laufende Buchhaltung',
              zusatz: 'Belege erfassen und verbuchen.',
              ziel: 'treuhand',
              anker: 'buchhaltung',
            },
            { text: 'Debitoren & Kreditoren', zusatz: 'Offene Posten und Zahlungsfristen.' },
            {
              text: 'Jahresabschluss',
              zusatz: 'Mit Anhang und Besprechung.',
            },
          ],
        },
        {
          titel: 'Löhne und Mehrwertsteuer',
          eintraege: [
            {
              text: 'Lohnbuchhaltung',
              zusatz: 'Lohnabrechnungen, Lohnausweise, Sozialversicherungen.',
            },
            { text: 'Mehrwertsteuer', zusatz: 'Abrechnungen und Fristen.' },
            {
              text: 'Unternehmensadministration',
              zusatz: 'Zahlungsverkehr, Mahnwesen, Ämter.',
            },
          ],
        },
        {
          titel: 'Gründung, Wechsel, Steuern',
          eintraege: [
            {
              text: 'Firmengründung',
              zusatz: 'Von der Rechtsform bis zur ersten Buchhaltung.',
              ziel: 'treuhand',
              anker: 'firmengruendung',
            },
            {
              text: 'Treuhänder wechseln',
              zusatz: 'Wir übernehmen den bestehenden Stand.',
              ziel: 'treuhand',
              anker: 'wechsel',
            },
            {
              text: 'Steuererklärung',
              zusatz: 'Aufbauend auf dem Abschluss.',
              ziel: 'steuern',
              anker: 'firmen',
            },
          ],
        },
      ],
    },
    {
      art: 'fluss',
      id: 'buchhaltung',
      titel: { vor: 'Ihre ', akzent: 'Buchhaltung', nach: ' ohne Vorbuchen' },
      stufen: [
        {
          titel: 'Sie liefern',
          punkte: [
            'Bank- und Kassenauszüge',
            'Kunden- und Lieferantenrechnungen',
            'Spesen und Barbelege',
            'Personalunterlagen, falls Sie Mitarbeitende haben',
          ],
        },
        {
          titel: 'Wir erledigen',
          punkte: ['Ordnen und verbuchen', 'Löhne und Mehrwertsteuer', 'Fristen im Blick'],
        },
        {
          titel: 'Sie erhalten',
          punkte: ['Auswertungen zu festen Terminen', 'Jahresabschluss', 'Grundlage für die Steuererklärung'],
        },
      ],
      nachsatz: 'Keine Software, kein Vorbuchen. Digital oder auf Papier.',
    },
    {
      art: 'schritte',
      id: 'ablauf',
      titel: { vor: 'So ', akzent: 'beginnt', nach: ' die Zusammenarbeit' },
      schritte: [
        {
          titel: 'Erstgespräch',
          text: 'Was läuft heute, was möchten Sie abgeben?',
        },
        {
          titel: 'Offerte und Leistungsumfang',
          text: 'Schriftlich: was wir übernehmen, was bei Ihnen bleibt.',
        },
        {
          titel: 'Übernahme und Start',
          text: 'Wir übernehmen den bestehenden Stand.',
        },
        {
          titel: 'Laufender Betrieb',
          text: 'Sie liefern, wir buchen und melden uns, wenn etwas fehlt.',
        },
      ],
      nachsatz: 'Das erste Gespräch kostet nichts.',
    },
    {
      art: 'vergleich',
      id: 'firmengruendung',
      titel: { vor: 'Einzelunternehmen ', akzent: 'oder', nach: ' GmbH?' },
      einleitung: 'Wir klären die Rechtsform und koordinieren Bank und Notariat.',
      spalten: [
        {
          titel: 'Einzel­unternehmen',
          untertitel: 'Einfach starten',
          zeilen: [
            { merkmal: 'Mindestkapital', wert: 'Keines vorgeschrieben' },
            { merkmal: 'Haftung', wert: 'Persönlich, auch mit dem Privatvermögen' },
            { merkmal: 'Gründung', wert: 'Ohne Beurkundung' },
            {
              merkmal: 'Handelsregister',
              wert: 'Bei kaufmännischem Gewerbe ab CHF 100\'000 Umsatz obligatorisch',
            },
            { merkmal: 'Rechtsstellung', wert: 'Keine eigene Rechtspersönlichkeit' },
          ],
          passt: 'Passt, wenn Sie allein und mit überschaubarem Risiko starten.',
        },
        {
          titel: 'GmbH',
          untertitel: 'Getrennt aufbauen',
          zeilen: [
            { merkmal: 'Mindestkapital', wert: 'CHF 20\'000, voll einbezahlt' },
            {
              merkmal: 'Haftung',
              wert: 'Grundsätzlich nur das Gesellschaftsvermögen',
            },
            { merkmal: 'Gründung', wert: 'Beurkundung und Statuten' },
            { merkmal: 'Handelsregister', wert: 'Immer obligatorisch' },
            { merkmal: 'Rechtsstellung', wert: 'Eigene juristische Person' },
          ],
          passt: 'Passt, wenn Sie Privat und Geschäft trennen oder zu mehreren gründen.',
        },
      ],
      nachsatz: 'Kurzvergleich gemäss KMU-Portal des Bundes. Die passende Rechtsform ist im Einzelfall zu prüfen.',
      knoepfe: [{ text: 'Rechtsform besprechen', ziel: 'kontakt' }],
    },
    {
      art: 'text',
      id: 'wechsel',
      titel: { vor: 'Sie haben bereits einen ', akzent: 'Treuhänder', nach: '?' },
      absaetze: ['Ein Wechsel ist auch während des Jahres möglich, am übersichtlichsten zum Jahresbeginn.'],
      punkte: [
        'Diskret: Ihr bisheriger Treuhänder erfährt erst davon, wenn Sie uns beauftragen.',
        'Kündigung: Wir bereiten sie für Sie vor.',
        'Übergabe: Wir übernehmen den bestehenden Stand.',
      ],
      knoepfe: [{ text: 'Situation besprechen', ziel: 'kontakt', art: 'zweit' }],
    },
    {
      art: 'fragen',
      id: 'fragen',
      titel: { vor: 'Häufige ', akzent: 'Fragen' },
      fragen: [
        {
          frage: 'Kann ich mitten im Jahr starten?',
          antwort:
            'Ja. Wir übernehmen den bestehenden Stand und führen von dort weiter.',
        },
        {
          frage: 'Wer ist mein Ansprechpartner?',
          antwort:
            'Eine feste Person, die Ihr Dossier führt. Beide betreuen Versicherungskunden; Treuhandmandate führt Ricardo Caires.',
        },
        {
          frage: 'Was passiert mit meinen Daten?',
          antwort: 'Ihre Daten werden in der Schweiz verarbeitet und vertraulich behandelt.',
        },
      ],
    },
    {
      art: 'kontakt',
      titel: { vor: 'So erreichen ', akzent: 'Sie', nach: ' uns' },
      satz: 'Im Erstgespräch schauen wir an, was heute bei Ihnen liegt. Es kostet nichts.',
      beschriftungen: { telefon: 'Telefon', email: 'E-Mail', buero: 'Büro' },
    },
  ],
}
