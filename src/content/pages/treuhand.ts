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
    banner: {
      themenzeile: 'TREUHAND',
      ueberschrift: 'Klar geführt. Persönlich begleitet.',
    },
    heading: 'Buchhaltung, Löhne und Abschluss für Selbständige und KMU',
    actions: [{ kind: 'page', target: 'kontakt', label: 'Erstgespräch anfragen' }],
  },

  blocks: [

    // 03 Leistungen im Überblick — seit dem 16.09.2026 sechs gleich grosse
    // Kacheln nach Ricardos Designreferenz, hellblau. Titel, Stichpunkte und
    // der Hinweis darunter stehen in seinem Auftrag ausgeschrieben
    // (`content/source/treuhand_leistungen_de.md`); Kategoriezeile und
    // Einleitung sind die vom 11.09.2026.
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
          titel: 'Finanzbuchhaltung',
          punkte: [
            'Laufende Erfassung und Kontenabstimmung',
            'Organisation des Rechnungswesens',
            'Verlässliche Buchführung nach dem vereinbarten Rhythmus',
          ],
          ziel: 'buchhaltung',
        },
        {
          // Keine eigene Seite — die Kachel steht ohne Pfeil.
          bild: '05_unternehmensadministration',
          titel: 'Debitoren & Kreditoren',
          punkte: [
            'Verwaltung offener Kunden- und Lieferantenposten',
            'Vorbereitung und Überwachung des Zahlungsverkehrs',
            'Nachvollziehbare Belegorganisation',
          ],
        },
        {
          bild: '04_jahresabschluss',
          titel: 'Abschlüsse & Planung',
          punkte: [
            'Monats-, Quartals- und Jahresabschlüsse',
            'Jahresrechnung nach dem anwendbaren Standard',
            'Liquiditäts-, Budget- und Finanzplanung',
          ],
          ziel: 'jahresabschluss',
        },
        {
          bild: '02_lohnbuchhaltung',
          titel: 'Lohn & Sozialversicherungen',
          punkte: [
            'Lohnabrechnungen und Jahresenddeklarationen',
            'Abrechnungen mit AHV, IV, EO, ALV und Pensionskassen',
            'Unterstützung bei Lohn- und Sozialversicherungsfragen',
          ],
          ziel: 'lohnbuchhaltung',
        },
        {
          bild: '03_mehrwertsteuer',
          titel: 'Mehrwertsteuer',
          punkte: [
            'Erstellung und Einreichung der MWST-Abrechnungen',
            'Prüfung der gewählten Abrechnungsmethode',
            'Beratung bei MWST-Fragen und Optimierungen',
          ],
          ziel: 'mehrwertsteuer',
        },
        {
          bild: '07_steuern_firmen',
          titel: 'Steuerberatung',
          punkte: [
            'Steuererklärungen für natürliche und juristische Personen',
            'Steuervertretung gegenüber den Behörden',
            'Unterstützung bei konkreten Steuerfragen',
          ],
          ziel: 'steuern',
          anker: 'firmen',
        },
      ],
      hinweis: {
        titel: 'Sie behalten den Überblick:',
        text: 'Auswertungen und Abschlüsse erhalten Sie zu den gemeinsam vereinbarten Terminen.',
      },
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

    // 08 Wechsel-Hinweis — seit dem 11.09.2026 nach Ricardos Referenzgrafik:
    // links Text und Link, rechts drei verbundene Schritte. Kategoriezeile und
    // Schritte stammen aus der Grafik (`content/source/treuhand_wechsel_de.md`),
    // Titel, Absatz und Link wie bisher.
    {
      kind: 'wechselHinweis',
      id: 'wechsel',
      eyebrow: 'Treuhand wechseln',
      heading: 'Sie haben bereits einen Treuhänder?',
      lead: 'Ein Wechsel ist grundsätzlich möglich. Wir schauen mit Ihnen zuerst die bestehende Situation an, klären den geeigneten Zeitpunkt und welche Unterlagen für die Übernahme nötig sind.',
      link: { target: 'treuhaenderWechseln', label: 'So gehen wir bei einem Wechsel vor' },
      schritte: [
        {
          nummer: '04_schritt_1',
          bild: '01_situation_pruefen',
          titel: 'Situation prüfen',
          satz: 'Wir analysieren die aktuelle Ausgangslage.',
        },
        {
          nummer: '05_schritt_2',
          bild: '02_uebergabe_planen',
          titel: 'Übergabe planen',
          satz: 'Wir klären den idealen Zeitpunkt und die nächsten Schritte.',
        },
        {
          nummer: '06_schritt_3',
          // Seit dem 11.09.2026 Ricardos Handschlag als Bilddatei. Ihr Kreis
          // nimmt 72.8 Prozent der Datei ein, bei den SVG sind es 62.5.
          bild: '03_handschlag',
          bildFormat: 'webp',
          kreisAnteil: 0.728,
          titel: 'Reibungslos übernehmen',
          satz: 'Wir sorgen für eine strukturierte und sichere Übernahme.',
        },
      ],
    },

    // 10 Häufige Fragen — seit dem 11.09.2026 im Baustein der
    // Versicherungsseite (`fragen`), auf Ricardos Anweisung „gleich wie bei
    // Versicherungen". Fragen und Antworten unveraendert; Kategoriezeile,
    // Einleitung und Zusatz wie dort (`content/source/versicherungen_fragen_de.md`).
    {
      kind: 'fragen',
      id: 'fragen',
      eyebrow: 'Gut zu wissen',
      heading: 'Häufige Fragen',
      lead: [
        'Hier finden Sie kompakte Antworten auf die wichtigsten Fragen.',
        'Sollten Sie weitere Anliegen haben, sind wir gerne persönlich für Sie da.',
      ],
      items: [
        {
          question: 'Welche Software setzen Sie ein?',
          answer: 'Wir arbeiten mit verschiedenen Softwarelösungen. Ein Zugriff für Kundinnen und Kunden ist möglich.',
        },
        {
          question: 'Wer ist mein Ansprechpartner?',
          answer: 'Eine feste Person, die Ihr Dossier führt. Beide betreuen Versicherungskunden; Treuhandmandate führt Ricardo Caires.',
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
      schluss: 'Persönlich. Unabhängig. An Ihrer Seite.',
    },
  ],
}
