/**
 * /de/wissen
 *
 * QUELLE: `content/source/wissen_de.md`. Neu mit dem Neuaufbau vom 07.09.2026,
 * noch nicht abgenommen.
 *
 * **Es gibt noch keinen veroeffentlichten Beitrag.** Die drei Themen stehen
 * fest und tragen ihren Anriss; die Beitraege selbst werden geschrieben. Bis
 * dahin ist `href` null, und der Verweis erscheint mit dem Vermerk „folgt"
 * statt als Link ins Leere.
 *
 * Veroeffentlichungsdaten werden nicht erfunden. Sie stehen als offene Angabe
 * und blockieren ueber `check:pending --strict` den Go-live.
 *
 * Sobald der erste Beitrag vorliegt, bekommt er hier `datum` und `href`. Eine
 * Blaetterfunktion braucht die Seite erst ab etwa zehn Beitraegen — bis dahin
 * waere sie ein Bedienelement ohne Aufgabe.
 */

import type { Rich } from '@/content/types'
import type { Locale } from '@/i18n/config'

export type WissensBeitrag = {
  datum: Rich
  titel: Rich
  anriss: Rich
  /** Adresse des Beitrags. `null`, solange es ihn nicht gibt. */
  href: string | null
  bild?: { label: string; note?: string }
}

export type WissenContent = {
  meta: { title: string; description: string }
  hero: {
    heading: string
    lead: string
  }
  /** Steht ueber den Beitraegen, solange der Bereich im Aufbau ist. */
  hinweis: string | null
  featured: WissensBeitrag
  /**
   * Ueberschrift ueber der Uebersicht.
   * Nicht „Wissen" — das steht schon im Seitenkopf.
   */
  weitereTitel: string
  weitere: readonly WissensBeitrag[]
  weiterlesen: string
  abschluss: {
    heading: string
    satz: string
    knopf: string
  }
}

const de: WissenContent = {
  meta: {
    title: 'Wissen — Beiträge zu Versicherung, Treuhand und Vorsorge',
    description:
      'Kurze Beiträge zu Fragen, die im Erstgespräch immer wieder kommen. A&C Consulting in Lyss.',
  },

  hero: {
    heading: 'Wissen',
    lead: 'Kurze Beiträge zu Fragen, die im Erstgespräch immer wieder kommen. Kein Fachjargon, keine Werbung.',
  },

  hinweis:
    'Der Bereich ist im Aufbau. Die Themen stehen fest, die Beiträge entstehen nach und nach.',

  featured: {
    datum: [{ pending: 'Datum, sobald der Beitrag geschrieben ist' }],
    titel: 'Was ein Maklermandat ist — und was es kostet',
    anriss:
      'Eine Vollmacht, mit der Sie uns beauftragen, Ihre Versicherungen zu betreuen. Was darin steht, wie Sie sie jederzeit widerrufen — und weshalb sie Sie nichts kostet.',
    href: null,
    bild: { label: 'BEITRAGSBILD MAKLERMANDAT' },
  },

  weitereTitel: 'Weitere Beiträge',

  weitere: [
    {
      datum: [{ pending: 'Datum, sobald der Beitrag geschrieben ist' }],
      titel: 'Treuhänder wechseln: worauf es beim Zeitpunkt ankommt',
      anriss:
        'Ein Wechsel ist grundsätzlich jederzeit möglich. Weshalb der Zeitpunkt trotzdem eine Rolle spielt und was Sie vorher klären sollten.',
      href: null,
    },
    {
      datum: [{ pending: 'Datum, sobald der Beitrag geschrieben ist' }],
      titel: 'Budget führen, ohne jeden Kaffee aufzuschreiben',
      anriss:
        'Die wenigen Zahlen, die genügen, um zu sehen, wohin Ihr Geld geht — ohne App und ohne Kassenzettel zu sammeln.',
      href: null,
    },
  ],

  weiterlesen: 'Weiterlesen',

  abschluss: {
    heading: 'Sprechen wir über Ihre Situation',
    satz: 'Sie haben eine Frage, die hier nicht steht? Fragen Sie uns direkt.',
    knopf: 'Erstgespräch vereinbaren',
  },
}

const inhalte: Record<Locale, WissenContent | null> = {
  de,
  fr: null,
  pt: null,
}

export function getWissen(locale: Locale): WissenContent | null {
  return inhalte[locale]
}
