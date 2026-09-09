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
    titel: 'Beispielüberschrift für den Einstieg',
    satz: 'Beispielsatz, der in einer Zeile sagt, für wen die Seite gemacht ist.',
    knopf: { text: 'Beispielknopf', ziel: 'kontakt' },
    weiter: { text: 'Beispiel-Textlink', ziel: 'ueberUns' },
    bild: { label: 'BEISPIELBILD EINSTIEG', note: 'Beispielhinweis zum Motiv' },
  },
  vertrauen: ['Erste Angabe', 'Zweite Angabe', 'Dritte Angabe', 'Vierte Angabe'],
  situationen: {
    titel: 'Beispielüberschrift der Situationen',
    einleitung: 'Beispielsatz über die sechs Ausgangslagen.',
    eintraege: [
      { text: 'Erster Beispielfall', ziel: 'firmengruendung' },
      { text: 'Zweiter Beispielfall', ziel: 'treuhand' },
      { text: 'Dritter Beispielfall', ziel: 'buchhaltung' },
      { text: 'Vierter Beispielfall', ziel: 'treuhaenderWechseln' },
      { text: 'Fünfter Beispielfall', ziel: 'versicherungen' },
      { text: 'Sechster Beispielfall', ziel: 'versicherungen' },
    ],
  },
  leistungen: {
    titel: 'Beispielüberschrift der Leistungen',
    leit: {
      titel: 'Erster Bereich',
      text: 'Beispieltext zum führenden Bereich. Zwei Sätze, nicht mehr.',
      stichworte: ['Stichwort eins', 'Stichwort zwei', 'Stichwort drei'],
      ziel: 'versicherungen',
      linkText: 'Beispielverweis',
      bild: { label: 'BEISPIELBILD BEREICH' },
    },
    weitere: [
      {
        titel: 'Zweiter Bereich',
        text: 'Beispieltext zum zweiten Bereich.',
        stichworte: ['Stichwort eins', 'Stichwort zwei'],
        ziel: 'treuhand',
        linkText: 'Beispielverweis',
      },
      {
        titel: 'Dritter Bereich',
        text: 'Beispieltext zum dritten Bereich.',
        stichworte: ['Stichwort eins', 'Stichwort zwei'],
        ziel: 'personalFinance',
        linkText: 'Beispielverweis',
      },
    ],
  },
  eineStelle: {
    titel: 'Beispielüberschrift zur Bündelung',
    kette: ['Erstes Glied', 'Zweites Glied', 'Drittes Glied', 'Viertes Glied'],
    text: 'Beispielsatz darüber, weshalb die Themen zusammenhängen.',
    nachsatz: 'Beispielnachsatz mit einem zweiten Gedanken.',
  },
  digital: {
    titel: 'Beispielüberschrift zur Arbeitsweise',
    text: 'Beispielsatz darüber, wo Software hilft und wo die Verantwortung bleibt.',
    nachsatz: 'Beispielnachsatz mit dem Nutzen für die Kundschaft.',
  },
  personen: {
    titel: 'Beispielüberschrift der Ansprechpartner',
    einleitung: 'Beispielsatz über die beiden Personen.',
    leute: [
      {
        name: 'Erste Beispielperson',
        funktion: 'Beispielfunktion',
        bild: { label: 'BEISPIELPORTRÄT EINS' },
      },
      {
        name: 'Zweite Beispielperson',
        funktion: 'Beispielfunktion',
        bild: { label: 'BEISPIELPORTRÄT ZWEI' },
      },
    ],
  },
  ablauf: {
    titel: 'Beispielüberschrift des Ablaufs',
    schritte: [
      { titel: 'Erster Schritt', satz: 'Beispielsatz zum ersten Schritt.' },
      { titel: 'Zweiter Schritt', satz: 'Beispielsatz zum zweiten Schritt.' },
      { titel: 'Dritter Schritt', satz: 'Beispielsatz zum dritten Schritt.' },
      { titel: 'Vierter Schritt', satz: 'Beispielsatz zum vierten Schritt.' },
    ],
    nachsatz: 'Beispielnachsatz unter den Schritten.',
  },
  abschluss: {
    titel: 'Beispielüberschrift des Abschlusses',
    satz: 'Beispielsatz, der zur Kontaktaufnahme führt.',
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
