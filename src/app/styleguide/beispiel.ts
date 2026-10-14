import type { InhaltsseiteInhalt } from '@/components/templates/Inhaltsseite'
import type { Leistungsseite } from '@/content/schema'

/**
 * Beispieldaten fuer die Vorlagenvorschau.
 *
 * ACHTUNG: Alles hier ist erfunden und ausdruecklich als Beispiel formuliert.
 * Es stammt nicht aus `content/source/schritt4_fassung2_de.md` und darf
 * nirgendwo sonst verwendet werden. Die Datei liegt bewusst unter `src/app`
 * und nicht unter `src/content`, damit sie nicht als Inhalt gilt.
 *
 * Zweck: die Form der drei Vorlagen beurteilen, ohne dass echte Texte
 * vorliegen muessen.
 */

/* ---- Vorlage B — Leistungsseite ------------------------------------------ */

export const beispielLeistungsseite: Leistungsseite = {
  slug: 'buchhaltung',
  locale: 'de',
  banner: {
    themenzeile: 'BEISPIEL-THEMENZEILE',
    ueberschrift: 'Beispielüberschrift des Banners',
  },
  bereich: 'treuhand',
  titel: 'Beispielleistung',
  nutzenSatz: 'Beispielsatz, der den Nutzen dieser Leistung in einer Zeile nennt.',
  seoTitel: 'Beispielleistung',
  seoBeschreibung: 'Beispielbeschreibung für Suchmaschinen.',
  abschnitte: {
    leistungen: 'Beispielüberschrift: Das übernehmen wir',
    ablauf: 'Beispielüberschrift: So läuft es ab',
    fragen: 'Beispielüberschrift: Häufige Fragen',
  },
  bild: { label: 'BEISPIELBILD LEISTUNG' },
  leistungen: [
    { icon: 'dokument', titel: 'Erste Beispielleistung', text: 'Ein kurzer Beispielsatz.' },
    { icon: 'buch', titel: 'Zweite Beispielleistung', text: 'Ein kurzer Beispielsatz.' },
    { icon: 'uhr', titel: 'Dritte Beispielleistung' },
  ],
  ablauf: [
    { titel: 'Erster Schritt', text: 'Beispieltext zum ersten Schritt.' },
    { titel: 'Zweiter Schritt', text: 'Beispieltext zum zweiten Schritt.' },
    { titel: 'Dritter Schritt', text: 'Beispieltext zum dritten Schritt.' },
  ],
  vertiefung: {
    titel: 'Beispielüberschrift des vertiefenden Abschnitts',
    absaetze: [
      'Beispielabsatz. Hier landet der Fliesstext, den die Startseite abgibt.',
      'Zweiter Beispielabsatz.',
    ],
    eintraege: [
      { titel: 'Erster Beispieleintrag' },
      { titel: 'Zweiter Beispieleintrag' },
    ],
  },
  faq: [
    { frage: 'Erste Beispielfrage?', antwort: 'Beispielantwort.' },
    { frage: 'Zweite Beispielfrage?', antwort: 'Beispielantwort.' },
    { frage: 'Dritte Beispielfrage?', antwort: 'Beispielantwort.' },
  ],
  ctaVariante: 'flaeche',
  cta: {
    titel: 'Beispielüberschrift des Abschlusses',
    text: 'Beispielsatz, der zur Kontaktaufnahme auffordert.',
    knopf: 'Beispielknopf',
  },
}

/* ---- Vorlage C — Inhaltsseite -------------------------------------------- */

export const beispielInhaltsseite: InhaltsseiteInhalt = {
  eyebrow: 'Beispiel-Vorzeile',
  titel: 'Beispielüberschrift einer Inhaltsseite',
  einleitung: 'Beispiel-Einleitung in einem Satz.',
  abschnitte: [
    {
      art: 'text',
      titel: 'Beispielabschnitt mit Fliesstext',
      absaetze: [
        'Erster Beispielabsatz. Auf einer Inhaltsseite darf Text stehen, ohne dass daneben ein Icon erklärt, was er bedeutet.',
        'Zweiter Beispielabsatz.',
      ],
    },
    {
      art: 'personen',
      titel: 'Beispielabschnitt mit Personen',
      leute: [
        { name: 'Beispielname eins', role: 'Beispielfunktion', languages: 'Sprache eins, zwei' },
        { name: 'Beispielname zwei', role: 'Beispielfunktion', languages: 'Sprache eins' },
      ],
    },
    {
      art: 'fakten',
      titel: 'Beispielabschnitt mit Angaben',
      fakten: [
        { icon: 'uhr', label: 'Beispielangabe Zeit', value: 'Montag bis Freitag' },
        { icon: 'standort', label: 'Beispielangabe Ort', value: 'Beispielstrasse 1' },
        { icon: 'telefon', label: 'Beispielangabe Telefon', value: '000 000 00 00' },
        { icon: 'dokument', label: 'Beispielangabe Nummer', value: 'CHE-000.000.000' },
      ],
    },
    {
      art: 'fragen',
      titel: 'Beispielabschnitt mit Fragen',
      fragen: [
        { question: 'Erste Beispielfrage?', answer: 'Beispielantwort.' },
        { question: 'Zweite Beispielfrage?', answer: 'Beispielantwort.' },
      ],
    },
  ],
  abschluss: {
    titel: 'Beispielüberschrift des Abschlusses',
    satz: 'Beispielsatz.',
    knopf: { text: 'Beispielknopf', ziel: 'kontakt' },
  },
}
