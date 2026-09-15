/**
 * /de/personal-finance
 *
 * QUELLE: `content/source/personal-finance_de.md`. Neu mit dem Neuaufbau vom
 * 07.09.2026, noch nicht abgenommen.
 *
 * Genau zwei Leistungen: Budget und Vorsorge. Keine dritte, auch nicht auf
 * Zuruf — die Seite steht und faellt damit, dass sie nicht mehr verspricht,
 * als A&C anbietet.
 *
 * **Abgrenzung.** A&C ist bei der FINMA als Versicherungsvermittlerin
 * registriert. Eine Bewilligung nach FIDLEG fuer Anlageberatung oder
 * Vermoegensverwaltung liegt nicht vor. Darum steht auf dieser Seite kein
 * Wertschriften- oder Depotgeschaeft, keine Anlageempfehlung und keine Zahl,
 * die als Zusicherung gelesen werden koennte. Der Abschnitt „Was wir nicht
 * machen" sagt das ausdruecklich, statt es nur zu unterlassen.
 *
 * Die beiden fachlich heiklen Aussagen tragen eine `legal`-Marke und muessen
 * vor dem Go-live geprueft werden.
 */

import type { PageContent } from '../types'

export const personalFinance: PageContent = {
  key: 'personalFinance',

  meta: {
    title: 'Budget und Vorsorge — Finanzplanung',
    description:
      'Übersicht über Einnahmen und Ausgaben, und eine Vorsorge, die zu Ihrer Situation passt. A&C Consulting in Aegerten.',
  },

  // 01 Seitenkopf
  hero: {
    eyebrow: 'Finanzplanung',
    heading: 'Überblick. Spielraum. Sicherheit.',
    actions: [{ kind: 'page', target: 'kontakt', label: 'Erstgespräch anfragen' }],
  },

  blocks: [
    {
      kind: 'anchors',
      items: [
        { label: 'Budget', anchor: 'budget' },
        { label: 'Vorsorge', anchor: 'vorsorge' },
      ],
    },

    // 03 Budget — seit dem 15.09.2026 eine Karte mit Illustration und fünf
    // Situationsfeldern nach Ricardos HTML-Vorlage
    // (`content/source/finanzplanung_budget_de.md`). Vorher eine Aufzaehlung
    // aus `schritt4_fassung2_de.md`; deren Wortlaut steht dort unveraendert
    // weiter. Der Anker `budget` bleibt — die Sprungmarke zeigt darauf.
    {
      kind: 'bereich',
      id: 'budget',
      eyebrow: 'Klarheit im Alltag',
      heading: 'Ein Budget zeigt, was möglich ist.',
      bild: 'finanzplanung_budget',
      lead: 'Es geht nicht darum, auf alles zu verzichten. Es geht darum, Einnahmen, feste Verpflichtungen und persönliche Wünsche miteinander in Einklang zu bringen.',
      paragraphs: [
        'Gemeinsam ordnen wir Ihre Einnahmen und Ausgaben, unterscheiden fixe und veränderbare Kosten und machen sichtbar, welcher Spielraum bleibt. Sie erhalten eine verständliche Übersicht, die Sie selbst weiterführen können.',
      ],
      situationen: {
        titel: 'Besonders hilfreich bei Veränderungen',
        punkte: [
          'Neue Stelle oder verändertes Einkommen',
          'Schritt in die Selbstständigkeit',
          'Neue familiäre Situation',
          'Grössere Anschaffung oder neues Ziel',
          'Weniger übrig als erwartet',
        ],
      },
    },

    // 04 Vorsorge — seit dem 15.09.2026 Illustration, drei Saeulenkarten,
    // Pruefliste und Grundsatz nach Ricardos HTML-Vorlage
    // (`content/source/finanzplanung_vorsorge_de.md`). Vorher drei Absaetze
    // aus `schritt4_fassung2_de.md`. Der Anker `vorsorge` bleibt — die
    // Sprungmarke zeigt darauf.
    //
    // **Die vorsichtigen Formulierungen bleiben:** voraussichtlich, koennte,
    // haengt ab. Keine Grenzbetraege, keine Renditeangaben,
    // keine Leistungsversprechen — so verlangt es der Auftrag und Abschnitt 3
    // der Hausordnung.
    {
      kind: 'systemuebersicht',
      id: 'vorsorge',
      eyebrow: 'Heute verstehen. Morgen planen.',
      heading: 'Vorsorge beginnt mit einem Gesamtbild.',
      bild: 'finanzplanung_vorsorge',
      bildBeschreibung: 'Die drei Säulen der Vorsorge, unterschiedlich hoch gefüllt.',
      lead: [
        'AHV, Pensionskasse und private Vorsorge erfüllen unterschiedliche Aufgaben. Erst gemeinsam zeigen sie, womit Sie später rechnen können und wo zusätzlicher Handlungsbedarf bestehen könnte.',
      ],
      karten: [
        {
          tag: 'Staatliche Vorsorge',
          titel: 'AHV und IV',
          text: 'Die erste Säule dient der Existenzsicherung. Beitragsjahre und Einkommen beeinflussen die späteren Leistungen.',
        },
        {
          tag: 'Berufliche Vorsorge',
          titel: 'Pensionskasse',
          text: 'Die zweite Säule ergänzt die staatliche Vorsorge. Entscheidend sind unter anderem versicherter Lohn, Guthaben und Vorsorgeplan.',
        },
        {
          tag: 'Private Vorsorge',
          titel: 'Säule 3a und freie Vorsorge',
          text: 'Die private Vorsorge ergänzt die ersten beiden Säulen. Welche Lösung passt, hängt von Zielen, Zeithorizont und gewünschter Flexibilität ab.',
        },
      ],
      pruefung: {
        titel: 'Was wir mit Ihnen anschauen',
        punkte: [
          'Welche Leistungen aus AHV und Pensionskasse voraussichtlich zusammenkommen',
          'Ob sich aus Ihren Zielen und Verpflichtungen eine Vorsorgelücke ergibt',
          'Wie sich Bank- und Versicherungslösungen bei Bindung, Risiko und Flexibilität unterscheiden',
        ],
      },
      grundsatz: {
        titel: 'Zuerst die Ausgangslage, dann die Lösung.',
        text: 'Wir empfehlen kein Produkt, bevor Ziele, bestehende Vorsorge und finanzieller Spielraum geklärt sind.',
      },
    },

  ],
}
