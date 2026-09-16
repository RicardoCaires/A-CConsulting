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
  banner: {
    themenzeile: 'BUCHHALTUNG',
    ueberschrift: 'Zahlen im Griff. Zeit fürs Geschäft.',
  },
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
    leistungen: 'Was wir übernehmen.',
    ablauf: 'So läuft die Zusammenarbeit',
    fragen: 'Häufige Fragen',
  },

  bild: { label: 'BUCHHALTUNG / BELEGE' },

  // Der gelieferte Hintergrund ist am 16.09.2026 entfallen: Ricardo hat alle
  // Inhaltsflaechen auf hellblau gestellt. Die Datei bleibt liegen.

  // Seit dem 16.09.2026 nach Ricardos HTML-Vorlage
  // (`content/source/buchhaltung_leistungen_de.md`): sechs Kacheln, nur
  // Buchhaltung. Die drei Stichworte aus Schritt 4 („Laufende Erfassung Ihrer
  // Belege" …) stehen dort unveraendert.
  leistungenKopf: {
    kategorie: 'Buchhaltung',
    einleitung:
      'Von der laufenden Verbuchung bis zum Abschluss: Sie bestimmen, welche Aufgaben wir dauerhaft oder punktuell übernehmen.',
  },

  leistungen: [
    {
      icon: 'dokument',
      bild: 'leistung_laufend.svg',
      titel: 'Laufende Buchhaltung',
      text: 'Belege erfassen, kontieren und nachvollziehbar verbuchen.',
    },
    {
      icon: 'buch',
      bild: 'leistung_debitoren.svg',
      titel: 'Debitoren & Kreditoren',
      text: 'Offene Posten, Rechnungen und Zahlungsfristen im Blick behalten.',
    },
    {
      icon: 'buch',
      bild: 'leistung_abstimmung.svg',
      titel: 'Kontenabstimmung',
      text: 'Bank, Kasse und relevante Bilanzkonten regelmässig abstimmen.',
    },
    {
      icon: 'uhr',
      bild: 'leistung_zahlungsverkehr.svg',
      titel: 'Zahlungsverkehr',
      text: 'Zahlungen vorbereiten und offene Verpflichtungen transparent führen.',
    },
    {
      icon: 'dokument',
      bild: 'leistung_mwst.svg',
      titel: 'MWST-Abrechnungen',
      text: 'Abrechnungen erstellen, prüfen und termingerecht einreichen.',
    },
    {
      icon: 'uhr',
      bild: 'leistung_abschluss.svg',
      titel: 'Abschlüsse & Auswertungen',
      text: 'Monats-, Quartals- und Jahresabschlüsse verlässlich aufbereiten.',
    },
  ],

  // Quelle Abschnitt 04 „So läuft die Zusammenarbeit"
  ablauf: [
    {
      titel: 'Erstgespräch',
      bild: 'sprechblase',
      text: 'Wir schauen an, wie Ihre Administration heute läuft und was Sie abgeben möchten.',
    },
    {
      titel: 'Offerte und Leistungsumfang',
      bild: 'schritt_umfang',
      text: 'Sie erhalten schriftlich, welche Aufgaben wir übernehmen und welche bei Ihnen bleiben. Das ist die Grundlage der Zusammenarbeit und das Dokument, auf das wir uns später beziehen.',
    },
    {
      titel: 'Übernahme und Start',
      bild: 'zahnrad',
      text: 'Wir richten Ihre Buchhaltung ein und übernehmen den bestehenden Stand. Den Startzeitpunkt legen wir gemeinsam fest.',
    },
    {
      titel: 'Laufender Betrieb',
      bild: 'schritt_start',
      text: 'Sie liefern Ihre Unterlagen im vereinbarten Rhythmus. Wir buchen, melden uns, wenn etwas fehlt, und liefern die Auswertungen zu den festgelegten Terminen.',
    },
  ],

  // „Was Sie uns bereitstellen." — seit dem 16.09.2026 nach Ricardos
  // HTML-Vorlage (`content/source/buchhaltung_unterlagen_de.md`). Der bisherige
  // Wortlaut („Was Sie uns liefern", Kontoauszüge …) steht unveraendert in
  // `content/source/schritt4_fassung2_de.md`.
  vertiefung: {
    kategorie: 'Ihre Unterlagen',
    titel: 'Was Sie uns bereitstellen.',
    absaetze: [
      'Sie liefern die Unterlagen – wir übernehmen die Erfassung, Abstimmung und saubere Ablage Ihrer Buchhaltung.',
    ],
    hinweis:
      'Eine eigene Buchhaltungssoftware ist nicht erforderlich. Den Übergaberhythmus stimmen wir gemeinsam mit Ihnen ab.',
    listenTitel: 'Für die laufende Buchhaltung benötigen wir',
    eintraege: [
      {
        bild: 'unterlagen_bank.svg',
        titel: 'Bank- und Kassenauszüge',
        text: 'Kontobewegungen und Kassenunterlagen vollständig pro Periode.',
      },
      {
        bild: 'unterlagen_kunden.svg',
        titel: 'Kundenrechnungen',
        text: 'Gestellte Rechnungen sowie Angaben zu Zahlungseingängen.',
      },
      {
        bild: 'unterlagen_lieferanten.svg',
        titel: 'Lieferantenrechnungen',
        text: 'Erhaltene und bezahlte Rechnungen Ihrer Lieferanten.',
      },
      {
        bild: 'unterlagen_spesen.svg',
        titel: 'Spesen und Barbelege',
        text: 'Quittungen, Spesenbelege und weitere geschäftliche Auslagen.',
      },
      {
        bild: 'unterlagen_personal.svg',
        titel: 'Personalunterlagen',
        text: 'Falls relevant: Verträge, Änderungen, Eintritte, Austritte und Absenzen.',
      },
    ],
    uebergabe: {
      bild: 'unterlagen_uebergabe.svg',
      titel: 'Digital oder physisch – beides ist möglich.',
      text: 'Form, Rhythmus und Zuständigkeiten halten wir zu Beginn der Zusammenarbeit gemeinsam fest.',
    },
  },

  // Kategoriezeile, Einleitung und Zusatz der Fragen wie auf /versicherungen —
  // „häufige Fragen überall gleich designen", Ricardo, 11.09.2026.
  fragenZusatz: {
    kategorie: 'Gut zu wissen',
    einleitung: [
      'Hier finden Sie kompakte Antworten auf die wichtigsten Fragen.',
      'Sollten Sie weitere Anliegen haben, sind wir gerne persönlich für Sie da.',
    ],
    schluss: 'Persönlich. Unabhängig. An Ihrer Seite.',
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

  // Der Abschluss „Reden wir über Ihre Administration" ist am 11.09.2026 auf
  // Ricardos Anweisung entfallen. Der Knopf im Seitenkopf traegt seither die
  // Beschriftung der Kopfzeile (`ui.cta`).
}
