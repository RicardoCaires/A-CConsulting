/**
 * /de/treuhand
 *
 * QUELLE: `content/source/schritt4_fassung2_de.md`, Abschnitt „Treuhand".
 * Wortlaut unveraendert uebernommen. Reihenfolge wie dort; fuenf der elf Abschnitte sind
 * am 11.09.2026 entfallen.
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
    actions: [{ kind: 'page', target: 'kontakt', label: 'Erstgespräch anfragen' }],
  },

  blocks: [
    // 02 Bereichsnavigation — Treuhand ist die Oberkategorie fuer alles
    // Kaufmaennische. Sie traegt keinen eigenen Text: die Beschriftungen sind
    // dieselben wie in der Hauptnavigation.
    {
      kind: 'serviceNav',
      items: ['buchhaltung', 'steuern', 'firmengruendung', 'treuhaenderWechseln'],
    },

    // 03 Leistungen im Überblick — seit dem 11.09.2026 als Kartenraster nach
    // Ricardos Referenzgrafik. Kategoriezeile und Einleitung stammen aus
    // `content/source/treuhand_leistungen_de.md`, die Karten wie bisher.
    // Verlinkt wird nur, was als Seite veroeffentlicht ist — die uebrigen
    // Ziele werden von selbst zu Links, sobald ihre Seite erscheint.
    {
      kind: 'leistungen',
      id: 'leistungen',
      eyebrow: 'Unsere Leistungen',
      heading: 'Was wir übernehmen',
      lead: 'Wir kümmern uns um Ihre Buchhaltung und administrativen Aufgaben, damit Sie sich auf das Wesentliche konzentrieren können – Ihr Geschäft.',
      karten: [
        {
          bild: '01_buchhaltung',
          titel: 'Buchhaltung',
          satz: 'Wir führen Ihre Buchhaltung laufend oder periodisch – je nachdem, was zu Ihrem Betrieb passt. Sie liefern die Belege, wir verbuchen sie und sagen Ihnen, was fehlt.',
          ziel: 'buchhaltung',
        },
        {
          bild: '02_lohnbuchhaltung',
          titel: 'Lohnbuchhaltung',
          satz: 'Monatliche Lohnabrechnungen, Lohnausweise, Quellensteuer und die Meldungen an die Sozialversicherungen.',
          ziel: 'lohnbuchhaltung',
        },
        {
          bild: '03_mehrwertsteuer',
          titel: 'Mehrwertsteuer',
          satz: 'Abrechnungen, Einhaltung der Fristen und die Wahl der Abrechnungsmethode.',
          ziel: 'mehrwertsteuer',
        },
        {
          bild: '04_jahresabschluss',
          titel: 'Jahresabschluss',
          satz: 'Abschluss Ihrer Buchhaltung am Ende des Geschäftsjahres, mit Anhang, Kontenblättern und einer Besprechung.',
          ziel: 'jahresabschluss',
        },
        {
          // Keine eigene Seite — die Karte steht ohne Pfeil.
          bild: '05_unternehmensadministration',
          titel: 'Unternehmensadministration',
          satz: 'Je nach Situation übernehmen wir auch Zahlungsverkehr, Mahnwesen und die Korrespondenz mit Ämtern. Was davon sinnvoll ist, halten wir in der Offerte fest.',
        },
        {
          bild: '06_firmengruendung',
          titel: 'Firmengründung',
          satz: 'Von der Wahl der Rechtsform bis zum Eintrag im Handelsregister. Wir sagen Ihnen vorher, was der Weg kostet und wie lange er dauert.',
          ziel: 'firmengruendung',
        },
        {
          bild: '07_steuern_firmen',
          titel: 'Steuern für Firmen',
          satz: 'Die Steuererklärung Ihrer Gesellschaft, aufbauend auf dem Abschluss.',
          ziel: 'steuern',
          anker: 'firmen',
        },
      ],
    },

    // Am 11.09.2026 auf Ricardos Anweisung entfallen: 04 „Für wen wir
    // arbeiten", 05 „Wie wir arbeiten", 06 „Klare Kosten vor Beginn",
    // 09 „Was dazugehört" und 11, der Abschluss „Reden wir über Ihre
    // Administration". Ihr Wortlaut steht unverändert unter `content/source/`.

    // 07 Ablauf — seit dem 11.09.2026 als vier verbundene Karten nach
    // Ricardos Referenzgrafik, hellblau. Kategoriezeile und Satz stammen aus
    // der Grafik (`content/source/treuhand_vorgehen_de.md`), Titel und
    // Schritte wie bisher.
    {
      kind: 'vorgehen',
      id: 'ablauf',
      eyebrow: 'Unser Vorgehen',
      heading: 'So läuft eine Zusammenarbeit an',
      lead: 'Klar strukturiert, persönlich begleitet – von Anfang an.',
      schritte: [
        {
          bild: '01_schritt_01',
          titel: 'Gespräch',
          satz: 'Sie schildern, wie Ihre Administration heute läuft und was Sie abgeben möchten. Wir fragen nach, wo es für die Einschätzung nötig ist. Das erste Gespräch kostet nichts.',
        },
        {
          bild: '02_schritt_02',
          titel: 'Umfang festhalten',
          satz: 'Wir halten schriftlich fest, welche Aufgaben wir übernehmen und welche bei Ihnen bleiben — mit dem, was es kostet. Erst wenn Sie zustimmen, fangen wir an.',
        },
        {
          bild: '03_schritt_03',
          titel: 'Übernahme',
          satz: 'Wir richten die Buchhaltung ein oder übernehmen den bestehenden Stand. Bei einem Wechsel klären wir mit der bisherigen Stelle, was zu übergeben ist.',
        },
        {
          bild: '04_schritt_04',
          titel: 'Laufender Betrieb',
          satz: 'Sie liefern die Belege, wir verbuchen und melden uns, wenn etwas fehlt oder eine Frist ansteht. Was wir für Sie erledigt haben, sehen Sie in der Abrechnung.',
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
  ],
}
