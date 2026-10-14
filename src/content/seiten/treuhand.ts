/**
 * /de/treuhand im Baukasten (15.10.2026). Nimmt Buchhaltung, Treuhänderwechsel und
 * Firmengründung auf, die bis dahin eigene Seiten waren. QUELLEN:
 * `content/source/umbau_treuhand_de.md`, `schritt4_fassung2_de.md`,
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
      einleitung:
        'Sie liefern die Unterlagen, wir führen die Buchhaltung laufend. Sie haben einen festen Ansprechpartner und wissen jederzeit, was als Nächstes ansteht.',
      listen: [
        {
          titel: 'Buchhaltung und Abschluss',
          ziel: { ziel: 'treuhand', anker: 'buchhaltung' },
          eintraege: [
            {
              text: 'Laufende Buchhaltung',
              zusatz: 'Belege erfassen, kontieren und nachvollziehbar verbuchen.',
              ziel: 'treuhand',
              anker: 'buchhaltung',
            },
            { text: 'Debitoren & Kreditoren', zusatz: 'Offene Posten, Rechnungen und Zahlungsfristen im Blick behalten.' },
            {
              text: 'Jahresabschluss',
              zusatz:
                'Abschluss Ihrer Buchhaltung am Ende des Geschäftsjahres, mit Anhang, Kontenblättern und einer Besprechung.',
            },
          ],
        },
        {
          titel: 'Löhne und Mehrwertsteuer',
          eintraege: [
            {
              text: 'Lohnbuchhaltung',
              zusatz:
                'Monatliche Lohnabrechnungen, Lohnausweise, Quellensteuer und die Meldungen an die Sozialversicherungen.',
            },
            { text: 'Mehrwertsteuer', zusatz: 'Abrechnungen, Einhaltung der Fristen und die Wahl der Abrechnungsmethode.' },
            {
              text: 'Unternehmensadministration',
              zusatz:
                'Je nach Situation übernehmen wir auch Zahlungsverkehr, Mahnwesen und die Korrespondenz mit Ämtern.',
            },
          ],
        },
        {
          titel: 'Gründung, Wechsel, Steuern',
          eintraege: [
            {
              text: 'Firmengründung',
              zusatz: 'Von der Wahl der Rechtsform bis zur ersten Buchhaltung.',
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
              zusatz: 'Für Ihre Firma, aufbauend auf dem Abschluss.',
              ziel: 'steuern',
              anker: 'firmen',
            },
          ],
        },
      ],
    },
    {
      art: 'text',
      id: 'buchhaltung',
      breit: true,
      titel: { vor: 'Ihre ', akzent: 'Buchhaltung', nach: ' ohne Vorbuchen' },
      absaetze: [
        'Sie müssen keine Buchhaltungssoftware bedienen und nichts vorbuchen. Sortiert ist hilfreich, nötig ist es nicht — das Ordnen übernehmen wir.',
        'In welcher Form und in welchem Rhythmus Sie das liefern, halten wir zu Beginn fest. Sie können uns die Unterlagen digital oder physisch übergeben.',
      ],
      punkte: [
        'Bank- und Kassenauszüge',
        'Kundenrechnungen',
        'Lieferantenrechnungen',
        'Spesen und Barbelege',
        'Personalunterlagen, falls Sie Mitarbeitende haben',
      ],
    },
    {
      art: 'schritte',
      id: 'ablauf',
      titel: { vor: 'So ', akzent: 'beginnt', nach: ' die Zusammenarbeit' },
      schritte: [
        {
          titel: 'Erstgespräch',
          text: 'Wir schauen an, wie Ihre Administration heute läuft und was Sie abgeben möchten.',
        },
        {
          titel: 'Offerte und Leistungsumfang',
          text: 'Sie erhalten schriftlich, welche Aufgaben wir übernehmen und welche bei Ihnen bleiben.',
        },
        {
          titel: 'Übernahme und Start',
          text: 'Wir richten Ihre Buchhaltung ein und übernehmen den bestehenden Stand. Den Startzeitpunkt legen wir gemeinsam fest.',
        },
        {
          titel: 'Laufender Betrieb',
          text: 'Sie liefern Ihre Unterlagen im vereinbarten Rhythmus. Wir buchen, melden uns, wenn etwas fehlt, und liefern die Auswertungen zu den festgelegten Terminen.',
        },
      ],
      nachsatz: 'Das erste Gespräch kostet nichts.',
    },
    {
      art: 'vergleich',
      id: 'firmengruendung',
      titel: { vor: 'Einzelunternehmen ', akzent: 'oder', nach: ' GmbH?' },
      einleitung:
        'Wir klären mit Ihnen die Rechtsform, bereiten die Unterlagen vor und koordinieren die nächsten Schritte mit Bank und Notariat. Entscheidend sind Haftung, Kapital, Gründungsaufwand und die gewünschte Trennung zwischen Privat- und Geschäftsvermögen.',
      spalten: [
        {
          titel: 'Einzelunternehmen',
          untertitel: 'Einfach starten',
          zeilen: [
            { merkmal: 'Mindestkapital', wert: 'Keines vorgeschrieben' },
            { merkmal: 'Haftung', wert: 'Persönlich und unbeschränkt, auch mit dem Privatvermögen' },
            { merkmal: 'Gründung', wert: 'Einfach und ohne Beurkundung' },
            {
              merkmal: 'Handelsregister',
              wert: 'Je nach Tätigkeit; bei kaufmännischem Gewerbe ab CHF 100\'000 Jahresumsatz obligatorisch',
            },
            { merkmal: 'Rechtsstellung', wert: 'Keine eigene Rechtspersönlichkeit' },
          ],
          passt:
            'Passt häufig, wenn Sie allein starten, wenig Formalitäten wünschen und das persönliche Haftungsrisiko überschaubar ist.',
        },
        {
          titel: 'GmbH',
          untertitel: 'Getrennt aufbauen',
          zeilen: [
            { merkmal: 'Mindestkapital', wert: 'CHF 20\'000, vollständig einbezahlt oder durch Sacheinlagen gedeckt' },
            {
              merkmal: 'Haftung',
              wert: 'Grundsätzlich Gesellschaftsvermögen; statutarische Nachschusspflichten können vorgesehen werden',
            },
            { merkmal: 'Gründung', wert: 'Beurkundung und Statuten' },
            { merkmal: 'Handelsregister', wert: 'Eintrag obligatorisch; die GmbH entsteht erst mit der Eintragung' },
            { merkmal: 'Rechtsstellung', wert: 'Eigene juristische Person' },
          ],
          passt:
            'Passt häufig, wenn Sie Geschäfts- und Privatvermögen trennen oder mit mehreren Personen gründen möchten.',
        },
      ],
      nachsatz: 'Kurzvergleich gemäss KMU-Portal des Bundes. Die passende Rechtsform ist im Einzelfall zu prüfen.',
      knoepfe: [{ text: 'Rechtsform besprechen', ziel: 'kontakt' }],
    },
    {
      art: 'text',
      id: 'wechsel',
      titel: { vor: 'Sie haben bereits einen ', akzent: 'Treuhänder', nach: '?' },
      absaetze: [
        'Ein Wechsel ist grundsätzlich möglich. Wir schauen mit Ihnen zuerst die bestehende Situation an, klären den geeigneten Zeitpunkt und welche Unterlagen für die Übernahme nötig sind.',
        'Ein Wechsel ist zum Jahresbeginn besonders übersichtlich. Er kann aber auch während des Geschäftsjahres gut gelingen, wenn die Übergabe sorgfältig abgestimmt wird.',
      ],
      punkte: [
        'Ihr bisheriger Treuhänder erfährt erst davon, wenn Sie uns mit der Kontaktaufnahme beauftragen.',
        'Die Kündigung beim bisherigen Treuhänder bereiten wir für Sie vor.',
        'Wir prüfen von Fall zu Fall, welches System sich übernehmen lässt.',
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
            'Ein unterjähriger Start ist grundsätzlich möglich. Wir übernehmen den bestehenden Stand und führen von dort weiter. Wie aufwendig das ist, hängt davon ab, wie die Buchhaltung bisher geführt wurde.',
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
      satz: 'Im Erstgespräch schauen wir an, was heute bei Ihnen liegt und was davon zu uns kann. Danach wissen Sie, was eine Zusammenarbeit für Sie bedeuten würde.',
      beschriftungen: { telefon: 'Telefon', email: 'E-Mail', buero: 'Büro' },
    },
  ],
}
