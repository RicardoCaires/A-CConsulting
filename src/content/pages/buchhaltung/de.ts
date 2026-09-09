import type { Leistungsseite } from '../../schema'

/**
 * /de/treuhand/buchhaltung — Pilotseite fuer Vorlage B.
 *
 * QUELLE: `content/source/schritt4_fassung2_de.md`, Abschnitt „Treuhand".
 *
 * Wichtig zur Einordnung: **Schritt 4 kennt keine eigene Buchhaltungsseite.**
 * Alles, was hier steht, stammt von der Treuhandseite und ist dort das, was
 * die Buchhaltung betrifft — der Unterabschnitt „Buchhaltung" (02), der
 * Ablauf (04), „Was Sie uns liefern" (05) und die Fragen (10), die sich auf
 * die Buchhaltung beziehen. Kein Satz ist umformuliert, keiner erfunden.
 *
 * Damit steht derselbe Wortlaut auf zwei Seiten. Das ist bewusst so und muss
 * entschieden werden, bevor weitere Unterseiten dazukommen: Entweder Schritt 4
 * bekommt eigene Texte fuer die Unterseiten, oder die Treuhandseite gibt diese
 * Abschnitte ab und verweist stattdessen. Siehe die Liste der offenen Punkte.
 */
export const buchhaltungDe: Leistungsseite = {
  slug: 'buchhaltung',
  locale: 'de',
  bereich: 'treuhand',

  // Quelle Zeile 278 („##### Buchhaltung")
  titel: 'Buchhaltung',

  // Quelle Zeile 270, erster Satz des Seitenkopfs Treuhand
  nutzenSatz: 'Sie liefern die Unterlagen, wir führen die Buchhaltung laufend.',

  seoTitel: 'Buchhaltung',
  seoBeschreibung:
    'Sie liefern die Unterlagen, wir führen die Buchhaltung laufend. Sie haben einen festen Ansprechpartner und wissen jederzeit, was als Nächstes ansteht.',

  // Ueberschriften wie in Schritt 4, nicht vereinheitlicht.
  abschnitte: {
    leistungen: 'Was wir übernehmen',
    ablauf: 'So läuft die Zusammenarbeit',
    fragen: 'Häufige Fragen',
  },

  bild: { label: 'BUCHHALTUNG / BELEGE' },

  /**
   * Quelle Zeile 280: „Laufende Erfassung Ihrer Belege, Abstimmung der Konten,
   * Auswertungen zu vereinbarten Terminen."
   *
   * Der Satz wird an seinen Kommas geteilt, nicht umgeschrieben — jedes
   * Stueck steht so in der Quelle. Stichworte nennt Schritt 4 je Leistung
   * keine; sie bleiben darum leer statt erfunden.
   */
  leistungen: [
    { icon: 'dokument', titel: 'Laufende Erfassung Ihrer Belege', chips: [] },
    { icon: 'buch', titel: 'Abstimmung der Konten', chips: [] },
    { icon: 'uhr', titel: 'Auswertungen zu vereinbarten Terminen', chips: [] },
  ],

  // Quelle Abschnitt 04 „So läuft die Zusammenarbeit"
  ablauf: [
    {
      titel: 'Erstgespräch',
      text: 'Wir schauen an, wie Ihre Administration heute läuft und was Sie abgeben möchten.',
    },
    {
      titel: 'Offerte und Leistungsumfang',
      text: 'Sie erhalten schriftlich, welche Aufgaben wir übernehmen und welche bei Ihnen bleiben. Das ist die Grundlage der Zusammenarbeit und das Dokument, auf das wir uns später beziehen.',
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

  // Quelle Abschnitt 05 „Was Sie liefern" — die offenen Angaben bleiben stehen.
  vertiefung: {
    titel: 'Was Sie uns liefern',
    absaetze: [
      'Sie müssen keine Buchhaltungssoftware bedienen und nichts vorbuchen. Sortiert ist hilfreich, nötig ist es nicht — das Ordnen übernehmen wir.',
      'In der Regel brauchen wir von Ihnen:',
    ],
    liste: [
      'Kontoauszüge',
      'Rechnungen, die Sie gestellt haben',
      'Rechnungen, die Sie bezahlt haben',
      'Belege für Spesen und Barzahlungen',
      'bei Mitarbeitenden: Arbeitsverträge, Änderungen, Absenzen',
    ],
    nachsatz: [
      'In welcher Form und in welchem Rhythmus Sie das liefern, halten wir zu Beginn fest. Sie können uns die Unterlagen digital oder physisch übergeben.',
    ],
  },

  /**
   * Quelle Abschnitt 10 — die zwei Fragen, die wirklich die Buchhaltung
   * betreffen. „Welche Software setzen Sie ein?" und „Wer ist mein
   * Ansprechpartner?" gelten fuer jedes Mandat und stehen auf der
   * Treuhandseite.
   */
  faq: [
    {
      frage: 'Kann ich mitten im Jahr starten?',
      antwort:
        'Ein unterjähriger Start ist grundsätzlich möglich. Wir übernehmen den bestehenden Stand und führen von dort weiter. Wie aufwendig das ist, hängt davon ab, wie die Buchhaltung bisher geführt wurde.',
    },
    {
      frage: 'Muss ich meine Belege sortieren?',
      antwort: 'Sortiert ist hilfreich, nötig ist es nicht — das Ordnen übernehmen wir.',
    },
  ],

  // Quelle Abschnitt 11 „Abschluss"
  ctaVariante: 'flaeche',
  cta: {
    titel: 'Reden wir über Ihre Administration',
    text: 'Im Erstgespräch schauen wir an, was heute bei Ihnen liegt und was davon zu uns kann. Danach wissen Sie, was eine Zusammenarbeit für Sie bedeuten würde.',
    knopf: 'Erstgespräch anfragen',
  },
}
