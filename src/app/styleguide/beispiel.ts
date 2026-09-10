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
  situationen: {
    eyebrow: 'Beispiel-Vorzeile',
    titel: 'Beispielüberschrift der Situationen',
    einleitung: 'Beispielsatz über die sechs Ausgangslagen.',
    merksatz: ['Erste Zeile.', 'Zweite Zeile.', 'Dritte Zeile.'],
    eintraege: [
      { text: 'Erster Beispielfall', bild: 'firmengruendung', ziel: 'firmengruendung' },
      { text: 'Zweiter Beispielfall', bild: 'mitarbeitende', ziel: 'treuhand' },
      { text: 'Dritter Beispielfall', bild: 'buchhaltung', ziel: 'buchhaltung' },
      { text: 'Vierter Beispielfall', bild: 'treuhaenderwechsel', ziel: 'treuhaenderWechseln' },
      { text: 'Fünfter Beispielfall', bild: 'versicherungspruefung', ziel: 'versicherungen' },
      { text: 'Sechster Beispielfall', bild: 'schadenfall', ziel: 'versicherungen' },
    ],
  },
  leistungen: {
    eyebrow: 'Beispiel-Vorzeile',
    titel: 'Beispielüberschrift der Leistungen',
    einleitung: 'Beispielsatz über die drei Bereiche.',
    merksatz: ['Erste Zeile.', 'Zweite Zeile.', 'Dritte Zeile.'],
    leit: {
      kategorie: 'Erster Bereich',
      titel: 'Beispielaussage des führenden Bereichs.',
      text: 'Beispieltext zum führenden Bereich. Zwei Sätze, nicht mehr.',
      leistungen: [
        { icon: 'schildPlus', text: 'Erste Beispielleistung' },
        { icon: 'fahrzeug', text: 'Zweite Beispielleistung' },
        { icon: 'personen', text: 'Dritte Beispielleistung' },
        { icon: 'gebaeude', text: 'Vierte Beispielleistung' },
      ],
      ziel: 'versicherungen',
      linkText: 'Beispielverweis',
      motiv: 'versicherungen',
    },
    weitere: [
      {
        kategorie: 'Zweiter Bereich',
        titel: 'Beispielaussage des zweiten Bereichs.',
        text: 'Beispieltext zum zweiten Bereich.',
        leistungen: [
          { icon: 'dokument', text: 'Erste Beispielleistung' },
          { icon: 'diagramm', text: 'Zweite Beispielleistung' },
          { icon: 'personen', text: 'Dritte Beispielleistung' },
          { icon: 'gebaeude', text: 'Vierte Beispielleistung' },
        ],
        ziel: 'treuhand',
        linkText: 'Beispielverweis',
        motiv: 'treuhand',
      },
      {
        kategorie: 'Dritter Bereich',
        titel: 'Beispielaussage des dritten Bereichs.',
        text: 'Beispieltext zum dritten Bereich.',
        leistungen: [
          { icon: 'muenzen', text: 'Erste Beispielleistung' },
          { icon: 'diagramm', text: 'Zweite Beispielleistung' },
          { icon: 'pflanze', text: 'Dritte Beispielleistung' },
          { icon: 'kompass', text: 'Vierte Beispielleistung' },
        ],
        ziel: 'personalFinance',
        linkText: 'Beispielverweis',
        motiv: 'finanzplanung',
      },
    ],
  },
  eineStelle: {
    eyebrow: 'Beispiel-Vorzeile',
    titel: 'Beispielüberschrift zur Bündelung',
    kette: [
      { text: 'Erstes Glied', bild: 'gruendung' },
      { text: 'Zweites Glied', bild: 'buchhaltung' },
      { text: 'Drittes Glied', bild: 'lohn' },
      { text: 'Viertes Glied', bild: 'versicherungen' },
      { text: 'Fünftes Glied', bild: 'steuern' },
    ],
    text: 'Beispielsatz darüber, weshalb die Themen zusammenhängen.',
    nachsatz: 'Beispielnachsatz mit einem zweiten Gedanken.',
    knopf: { text: 'Beispielknopf', ziel: 'ueberUns' },
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
