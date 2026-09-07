/**
 * Bausteine der Inhaltsseiten.
 *
 * Jede Seite aus Schritt 4, Fassung 2 besteht aus nummerierten Abschnitten.
 * Diese Datei beschreibt die Formen, die dabei vorkommen — mehr Typen gibt es
 * nicht, und neue kommen nur dazu, wenn die Quelle sie verlangt.
 *
 * Der Wortlaut stammt ausschliesslich aus
 * `content/source/schritt4_fassung2_de.md`. `scripts/check-source.mjs` prueft
 * bei jedem Lauf, dass hier kein Satz steht, der dort nicht vorkommt.
 */

import type { PageKey } from '@/i18n/routes'

/** Eine offene Angabe aus Schritt 4. Wird nie ersetzt, nur befuellt. */
export type PendingNote = { readonly pending: string }

/** Textstueck: Klartext oder eine offene Angabe. */
export type Inline = string | PendingNote

/** Ein Absatz — einfacher Text oder Text mit eingebetteten offenen Angaben. */
export type Rich = string | readonly Inline[]

export function isPending(part: Inline): part is PendingNote {
  return typeof part !== 'string'
}

export function collectPending(value: Rich): string[] {
  if (typeof value === 'string') return []
  return value.filter(isPending).map((part) => part.pending)
}

/** Verweis auf eine andere Seite. Wird nur dann zum Link, wenn sie existiert. */
export type PageRef = {
  target: PageKey
  label: string
}

/**
 * Herunterladbare Datei. `file` bleibt null, solange das Dokument nicht
 * vorliegt — dann erscheint der Knopf mit dem Vermerk „folgt" statt eines
 * Links ins Leere.
 */
export type Download = {
  label: string
  file: string | null
}

/** Handlungsknopf im Seitenkopf und im Abschlussblock. */
export type Action =
  | { kind: 'page'; target: PageKey; label: string; variant?: 'primary' | 'ghost' }
  | { kind: 'mail'; label: string; variant?: 'primary' | 'ghost' }
  | { kind: 'phone'; label?: string }

export type Block =
  /** Fliesstext unter einer Ueberschrift. */
  | {
      kind: 'prose'
      id?: string
      heading: string
      paragraphs: readonly Rich[]
      links?: readonly PageRef[]
      download?: Download
    }
  /** Ueberschrift mit benannten Unterabschnitten. */
  | {
      kind: 'subsections'
      id?: string
      heading: string
      intro?: readonly Rich[]
      items: readonly { heading: string; paragraphs: readonly Rich[] }[]
      outro?: readonly Rich[]
      links?: readonly PageRef[]
    }
  /** Nummerierter Ablauf. */
  | {
      kind: 'steps'
      id?: string
      heading: string
      intro?: readonly Rich[]
      steps: readonly { heading: string; body: Rich }[]
      outro?: readonly Rich[]
    }
  /** Aufzaehlung mit Einleitung und Nachsatz. */
  | {
      kind: 'list'
      id?: string
      heading: string
      intro?: readonly Rich[]
      items: readonly Rich[]
      outro?: readonly Rich[]
      links?: readonly PageRef[]
      download?: Download
    }
  /** Frage und Antwort. */
  | {
      kind: 'faq'
      id?: string
      heading: string
      items: readonly { question: string; answer: Rich }[]
    }
  /**
   * Kompakte Navigation in die Unterkategorien eines Bereichs.
   *
   * Traegt keinen eigenen Text: Die Beschriftungen sind die
   * Navigationsbezeichnungen aus `ui.page`, wie im Kopf- und Fussbereich.
   * Darum steht hier nur, welche Seiten gezeigt werden.
   */
  | {
      kind: 'serviceNav'
      items: readonly PageKey[]
    }
  /** Sprungmarken innerhalb der Seite. */
  | {
      kind: 'anchors'
      items: readonly { label: string; anchor: string }[]
    }
  /** Abschlussblock mit Handlungsknopf. */
  | {
      kind: 'cta'
      id?: string
      heading: string
      paragraphs: readonly Rich[]
      actions: readonly Action[]
    }
  /** Adresse, Telefon und E-Mail als Direktkontakt. */
  | {
      kind: 'contact'
      id?: string
      /** Entfaellt, wenn der Seitenkopf den Abschnitt schon benennt. */
      heading?: string
      note?: Rich
    }
  /**
   * Das geplante Kurzformular. Der serverseitige Endpunkt ist noch nicht
   * gebaut, darum steht hier kein Formular, das nichts tut, sondern die
   * angekuendigten Felder mit einem klaren Vermerk.
   */
  | {
      kind: 'formOutline'
      id?: string
      heading: string
      intro: readonly Rich[]
      fields: readonly string[]
      consentNote: Rich
      submitLabel: string
    }

export type PageContent = {
  key: PageKey
  meta: {
    title: string
    description: string
  }
  hero: {
    heading: string
    lead?: Rich
    actions?: readonly Action[]
  }
  blocks: readonly Block[]
}

/** Alle offenen Angaben einer Seite, in Lesereihenfolge. */
export function pendingInPage(page: PageContent): string[] {
  const out: string[] = []
  const add = (value: Rich | undefined) => {
    if (value !== undefined) out.push(...collectPending(value))
  }

  add(page.hero.lead)

  for (const block of page.blocks) {
    switch (block.kind) {
      case 'prose':
        block.paragraphs.forEach(add)
        break
      case 'subsections':
        block.intro?.forEach(add)
        block.items.forEach((item) => item.paragraphs.forEach(add))
        block.outro?.forEach(add)
        break
      case 'steps':
        block.intro?.forEach(add)
        block.steps.forEach((step) => add(step.body))
        block.outro?.forEach(add)
        break
      case 'list':
        block.intro?.forEach(add)
        block.items.forEach(add)
        block.outro?.forEach(add)
        break
      case 'faq':
        block.items.forEach((item) => add(item.answer))
        break
      case 'cta':
        block.paragraphs.forEach(add)
        break
      case 'contact':
        add(block.note)
        break
      case 'formOutline':
        block.intro.forEach(add)
        add(block.consentNote)
        break
      case 'anchors':
      case 'serviceNav':
        break
    }
  }

  return out
}
