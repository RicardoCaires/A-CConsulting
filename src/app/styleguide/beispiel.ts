import type { InhaltsseiteInhalt } from '@/components/templates/Inhaltsseite'
import type { StartseiteInhalt } from '@/components/templates/Startseite'
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

/* ---- Vorlage A — Startseite --------------------------------------------- */

export const beispielStartseite: StartseiteInhalt = {
  einstieg: {
    eyebrow: 'Beispiel-Vorzeile',
    titel: 'Beispielüberschrift für den Einstieg einer Startseite',
    satz: 'Beispielsatz, der in einer Zeile sagt, für wen die Seite gemacht ist.',
    knopf: { text: 'Beispielknopf', ziel: 'kontakt' },
    zweitknopf: { text: '000 000 00 00', href: '#' },
    bild: { label: 'BEISPIELBILD EINSTIEG', note: 'Beispielhinweis zum Motiv' },
  },
  bereiche: {
    titel: 'Beispielüberschrift der Bereiche',
    karten: [
      {
        icon: 'schild',
        titel: 'Erster Bereich',
        chips: ['Stichwort eins', 'Stichwort zwei', 'Stichwort drei'],
        ziel: 'versicherungen',
      },
      {
        icon: 'buch',
        titel: 'Zweiter Bereich',
        chips: ['Stichwort eins', 'Stichwort zwei', 'Stichwort drei'],
        ziel: 'treuhand',
      },
      {
        icon: 'beleg',
        titel: 'Dritter Bereich',
        chips: ['Stichwort eins', 'Stichwort zwei'],
        ziel: 'steuern',
      },
    ],
  },
  anliegen: {
    titel: 'Beispielüberschrift der Anliegen',
    eintraege: [
      { icon: 'buch', text: 'Erstes Beispielanliegen', href: '#' },
      { icon: 'wechsel', text: 'Zweites Beispielanliegen', href: '#' },
      { icon: 'gebaeude', text: 'Drittes Beispielanliegen', href: '#' },
      { icon: 'personen', text: 'Viertes Beispielanliegen', href: '#' },
      { icon: 'schild', text: 'Fünftes Beispielanliegen', href: '#' },
      { icon: 'beleg', text: 'Sechstes Beispielanliegen', href: '#' },
    ],
  },
  gruende: {
    titel: 'Beispielüberschrift der Gründe',
    punkte: [
      { icon: 'verbindung', heading: 'Erster Beispielgrund' },
      { icon: 'person', heading: 'Zweiter Beispielgrund' },
      { icon: 'sprachen', heading: 'Dritter Beispielgrund' },
      { icon: 'ablauf', heading: 'Vierter Beispielgrund' },
      { icon: 'automatisierung', heading: 'Fünfter Beispielgrund' },
      { icon: 'haken', heading: 'Sechster Beispielgrund' },
    ],
  },
  ablauf: {
    titel: 'Beispielüberschrift des Ablaufs',
    schritte: [
      { heading: 'Erster Schritt', body: 'Beispieltext zum ersten Schritt.' },
      { heading: 'Zweiter Schritt', body: 'Beispieltext zum zweiten Schritt.' },
      { heading: 'Dritter Schritt', body: 'Beispieltext zum dritten Schritt.' },
      { heading: 'Vierter Schritt', body: 'Beispieltext zum vierten Schritt.' },
    ],
  },
  personen: {
    titel: 'Beispielüberschrift der Ansprechpartner',
    einleitung: 'Beispielsatz über die beiden Personen.',
    leute: [
      {
        name: 'Beispielname eins',
        role: 'Beispielfunktion',
        responsibility: 'Beispiel-Zuständigkeit',
        languages: 'Sprache eins, zwei, drei',
      },
      {
        name: 'Beispielname zwei',
        role: 'Beispielfunktion',
        responsibility: 'Beispiel-Zuständigkeit',
        languages: 'Sprache eins, zwei',
      },
    ],
  },
  abschluss: {
    titel: 'Beispielüberschrift des Abschlusses',
    satz: 'Beispielsatz, der zur Kontaktaufnahme auffordert.',
    knopf: { text: 'Beispielknopf', ziel: 'kontakt' },
  },
}

/* ---- Vorlage B — Leistungsseite ------------------------------------------ */

export const beispielLeistungsseite: Leistungsseite = {
  slug: 'buchhaltung',
  locale: 'de',
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
    {
      icon: 'dokument',
      titel: 'Erste Beispielleistung',
      chips: ['Stichwort eins', 'Stichwort zwei'],
    },
    { icon: 'buch', titel: 'Zweite Beispielleistung', chips: ['Stichwort eins'] },
    { icon: 'uhr', titel: 'Dritte Beispielleistung', chips: [] },
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
    liste: ['Erster Beispieleintrag', 'Zweiter Beispieleintrag', 'Dritter Beispieleintrag'],
  },
  faq: [
    { frage: 'Erste Beispielfrage?', antwort: 'Beispielantwort.' },
    { frage: 'Zweite Beispielfrage?', antwort: 'Beispielantwort.' },
    { frage: 'Dritte Beispielfrage?', antwort: 'Beispielantwort.' },
  ],
  ctaVariante: 'hell',
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
