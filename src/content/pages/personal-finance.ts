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
      'Übersicht über Einnahmen und Ausgaben, und eine Vorsorge, die zu Ihrer Situation passt. A&C Consulting in Lyss.',
  },

  // 01 Seitenkopf
  hero: {
    heading: 'Zwei Fragen, die im Alltag untergehen',
    lead: 'Wohin fliesst Ihr Geld, und was bleibt für später. Wir gehen beides mit Ihnen durch — in Ruhe und ohne dass Sie etwas abschliessen müssen.',
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

    // 04 Vorsorge
    {
      kind: 'prose',
      id: 'vorsorge',
      heading: 'Vorsorge',
      paragraphs: [
        'Die dritte Säule ist für viele die einzige Vorsorge, die sie selbst in der Hand haben — und oft die, um die sie sich am wenigsten kümmern.',
        [
          'Wir schauen mit Ihnen an, was aus AHV und Pensionskasse zu erwarten ist, wo eine Lücke entsteht und was die Säule 3a in Ihrer Situation leisten kann. Ob eine Bank- oder eine Versicherungslösung besser passt, hängt davon ab, wie fest Sie sich binden wollen; wir sagen Ihnen, was der Unterschied für Sie bedeutet.',
          
        ],
        'Wir empfehlen kein Produkt, bevor wir Ihre Ausgangslage kennen.',
      ],
    },

  ],
}
