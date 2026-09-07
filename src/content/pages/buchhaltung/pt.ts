import type { Leistungsseite } from '../../schema'

/**
 * /pt/fiduciaria/contabilidade — portugiesische Fassung der Pilotseite.
 *
 * Die Struktur ist vollstaendig und deckungsgleich mit der deutschen: gleiche
 * Anzahl Leistungen, Schritte und Fragen. Der Wortlaut liegt noch nicht vor.
 *
 * Es steht hier **kein deutscher Text**. Jede Luecke ist als
 * `{ missing: '…' }` gekennzeichnet und erscheint auf der Seite als sichtbare
 * Marke — sonst waere beim Durchsehen nicht zu erkennen, was noch fehlt, und
 * eine halbe Uebersetzung ginge unbemerkt live.
 *
 * Einzige Ausnahme ist die Seitenueberschrift: Dort tritt die bereits
 * abgenommene Navigationsbezeichnung aus `i18n/messages/ui.ts` ein
 * („Contabilidade"), weil eine Seite ohne `h1` kaputt waere. Die Marke steht
 * daneben.
 *
 * Die Icons sind keine Uebersetzungsfrage und darum gesetzt.
 */
export const buchhaltungPt: Leistungsseite = {
  slug: 'buchhaltung',
  locale: 'pt',
  bereich: 'treuhand',

  titel: { missing: 'Seitentitel' },
  nutzenSatz: { missing: 'Nutzensatz im Seitenkopf' },

  seoTitel: { missing: 'Titel für Suchmaschinen' },
  seoBeschreibung: { missing: 'Beschreibung für Suchmaschinen' },

  abschnitte: {
    leistungen: { missing: 'Überschrift des Leistungsabschnitts' },
    ablauf: { missing: 'Überschrift des Ablaufs' },
    fragen: { missing: 'Überschrift der Fragen' },
  },

  bild: { label: 'BUCHHALTUNG / BELEGE' },

  leistungen: [
    { icon: 'dokument', titel: { missing: 'Leistung 1' }, chips: [] },
    { icon: 'buch', titel: { missing: 'Leistung 2' }, chips: [] },
    { icon: 'uhr', titel: { missing: 'Leistung 3' }, chips: [] },
  ],

  ablauf: [
    { titel: { missing: 'Schritt 1, Titel' }, text: { missing: 'Schritt 1, Text' } },
    { titel: { missing: 'Schritt 2, Titel' }, text: { missing: 'Schritt 2, Text' } },
    { titel: { missing: 'Schritt 3, Titel' }, text: { missing: 'Schritt 3, Text' } },
    { titel: { missing: 'Schritt 4, Titel' }, text: { missing: 'Schritt 4, Text' } },
  ],

  faq: [
    { frage: { missing: 'Frage 1' }, antwort: { missing: 'Antwort 1' } },
    { frage: { missing: 'Frage 2' }, antwort: { missing: 'Antwort 2' } },
    { frage: { missing: 'Frage 3' }, antwort: { missing: 'Antwort 3' } },
    { frage: { missing: 'Frage 4' }, antwort: { missing: 'Antwort 4' } },
  ],

  // Struktur deckungsgleich mit der deutschen Fassung: Der vertiefende
  // Abschnitt steht auch hier, sein Text fehlt noch.
  vertiefung: {
    titel: { missing: 'Überschrift des vertiefenden Abschnitts' },
    absaetze: [{ missing: 'Text des vertiefenden Abschnitts samt Aufzählung' }],
  },

  ctaVariante: 'hell',
  cta: {
    titel: { missing: 'Überschrift des Abschlusses' },
    text: { missing: 'Text des Abschlusses' },
    knopf: { missing: 'Beschriftung des Handlungsknopfs' },
  },
}
