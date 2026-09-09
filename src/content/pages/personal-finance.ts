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
    title: 'Budget und Vorsorge — Personal Finance',
    description:
      'Übersicht über Einnahmen und Ausgaben, und eine Vorsorge, die zu Ihrer Situation passt. A&C Consulting in Lyss.',
  },

  // 01 Seitenkopf
  hero: {
    heading: 'Zwei Fragen, die im Alltag untergehen',
    lead: 'Wohin fliesst Ihr Geld, und was bleibt für später. Wir gehen beides mit Ihnen durch — in Ruhe und ohne dass Sie etwas abschliessen müssen.',
    actions: [{ kind: 'page', target: 'kontakt', label: 'Erstgespräch vereinbaren' }],
  },

  blocks: [
    {
      kind: 'anchors',
      items: [
        { label: 'Budget', anchor: 'budget' },
        { label: 'Vorsorge', anchor: 'vorsorge' },
        { label: 'Ablauf', anchor: 'ablauf' },
      ],
    },

    // 02 Die Abgrenzung steht vorn, nicht im Kleingedruckten.
    {
      kind: 'prose',
      id: 'abgrenzung',
      heading: 'Was wir nicht machen',
      paragraphs: [
        'Wir sind Versicherungsbroker und Treuhänder, keine Vermögensverwalter. Wir verkaufen keine Wertschriften, empfehlen keine Anlagen und verwalten kein Depot. Wo das nötig wird, sagen wir es Ihnen und nennen Ihnen jemanden.',
        'Was wir machen, sind die beiden Themen, bei denen die meisten Menschen den Überblick verlieren, ohne dass es ihnen auffällt.',
      ],
    },

    // 03 Budget
    {
      kind: 'list',
      id: 'budget',
      heading: 'Budget',
      intro: [
        'Ein Budget ist keine Verzichtsübung. Es ist eine Übersicht: Was kommt herein, was geht heraus, und was bleibt.',
        'Wir sehen uns mit Ihnen an, wie sich Ihre Ausgaben verteilen, welche Fixkosten fest stehen und welche Sie beeinflussen können. Am Ende haben Sie eine Aufstellung, mit der Sie weiterarbeiten können — auch ohne uns.',
        'Sinnvoll ist das besonders dann:',
      ],
      items: [
        'vor oder nach einem Wechsel der Anstellung',
        'wenn Sie sich selbständig machen',
        'bei einer Trennung, einer Heirat oder Nachwuchs',
        'wenn Sie eine grössere Anschaffung planen',
        'wenn am Monatsende regelmässig weniger übrig bleibt als gedacht',
      ],
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
          {
            legal:
              'Darstellung von Saeule 3a, Bindung und Unterschied Bank/Versicherung fachlich pruefen — Grenze zur bewilligungspflichtigen Anlageberatung',
          },
        ],
        'Wir empfehlen kein Produkt, bevor wir Ihre Ausgangslage kennen.',
      ],
    },

    // 05 Ablauf — drei Schritte, wie auf Versicherungen und Steuern.
    {
      kind: 'steps',
      id: 'ablauf',
      heading: 'So läuft es ab',
      steps: [
        {
          heading: 'Gespräch',
          body: 'Sie schildern Ihre Situation. Wir hören zu und fragen nach. Das erste Gespräch kostet nichts.',
        },
        {
          heading: 'Übersicht',
          body: 'Wir tragen zusammen, was vorliegt — Lohnausweis, Vorsorgeausweis, bestehende Policen — und stellen es verständlich dar.',
        },
        {
          heading: 'Vorschlag',
          body: 'Sie bekommen eine schriftliche Aufstellung mit den Möglichkeiten, die zu Ihnen passen, und mit dem, was sie kosten. Entscheiden tun Sie.',
        },
      ],
    },

    // 06 Abschluss
    {
      kind: 'cta',
      id: 'abschluss',
      heading: 'Sprechen wir über Ihre Situation',
      paragraphs: ['Ein Erstgespräch kostet nichts und verpflichtet zu nichts.'],
      actions: [
        { kind: 'page', target: 'kontakt', label: 'Erstgespräch vereinbaren' },
        { kind: 'phone' },
      ],
    },
  ],
}
