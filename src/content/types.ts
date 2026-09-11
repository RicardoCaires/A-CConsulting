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

/**
 * Eine Aussage, die vor der Veroeffentlichung rechtlich geprueft werden muss.
 *
 * Unterschied zur offenen Angabe: Hier fehlt **nichts**. Der Satz steht und ist
 * lesbar — er darf nur nicht live gehen, bevor jemand mit der noetigen
 * Fachkunde ihn bestaetigt hat. Der Text sagt, worauf sich die Aussage stuetzt.
 *
 * Gesammelt werden diese Stellen von `scripts/check-pending.mjs`; die Liste
 * geht zur externen Pruefung.
 */
export type LegalNote = { readonly legal: string }

/**
 * Verweis auf eine Firmenangabe.
 *
 * Adresse und Ort stehen nie als Text im Inhalt, sondern nur in
 * `src/lib/company.ts`. Sonst muesste ein Umzug an einem Dutzend Stellen
 * nachgetragen werden — und eine davon wuerde vergessen.
 *
 *   `buero` — Adresse, an der Kundinnen und Kunden empfangen werden
 *   `sitz`  — Sitz laut Handelsregister
 *   `ort`   — nur der Ortsname des Bueros
 *   `firma` — vollstaendige Firmenbezeichnung
 *   `uid`   — UID, zugleich Handelsregisternummer
 *   `finma` — Registernummer des **Unternehmens**. Nie die persoenliche.
 *
 * Impressum und Datenschutzerklaerung bestehen fast nur aus solchen Angaben.
 * Sie stehen darum auch dort nicht als Text, sondern als Verweis: Eine falsche
 * Registernummer im Impressum waere kein Schoenheitsfehler.
 */
export type CompanyRef = {
  readonly company: 'buero' | 'sitz' | 'ort' | 'ricardo' | 'octavio' | 'firma' | 'uid' | 'finma'
}

/** Textstueck: Klartext, offene Angabe oder rechtlich zu pruefende Aussage. */
export type Inline = string | PendingNote | LegalNote | CompanyRef

/** Ein Absatz — einfacher Text oder Text mit eingebetteten offenen Angaben. */
export type Rich = string | readonly Inline[]

export function isPending(part: Inline): part is PendingNote {
  return typeof part === 'object' && 'pending' in part
}

export function isLegal(part: Inline): part is LegalNote {
  return typeof part === 'object' && 'legal' in part
}

export function isCompanyRef(part: Inline): part is CompanyRef {
  return typeof part === 'object' && 'company' in part
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
  /**
   * Ein Schaubild als eigener Abschnitt.
   *
   * Kein Text daneben und keine Ueberschrift darueber: Das Bild erklaert die
   * Sache selbst, und ein erklaerender Satz daneben saegte an genau der
   * Wirkung. Was es zeigt, steht im Alternativtext — der ist Pflicht, nicht
   * Beiwerk: Ohne ihn ist der Abschnitt fuer Vorlesewerkzeuge leer.
   */
  | {
      kind: 'schaubild'
      id?: string
      src: string
      alt: string
      breite: number
      hoehe: number
      /**
       * Ab welcher Breite das Bild lesbar ist, in Pixeln.
       *
       * Darunter laesst der Abschnitt es waagrecht schieben, statt es weiter
       * zu stauchen — bei einer dichten Grafik ist eine Beschriftung von drei
       * Pixeln Hoehe kein Inhalt mehr, sondern ein Muster.
       */
      lesbarAb: number
    }
  /**
   * Das Modell als gebauter Abschnitt, nicht als Bilddatei.
   *
   * Loest auf `/versicherungen` das `schaubild` ab: Ricardo hat am 10.09.2026
   * eine Referenzgrafik und elf Einzelbilder geliefert und ausdruecklich
   * verlangt, dass daraus ein Webabschnitt wird — Text bleibt Text, die Bilder
   * sind nur die Symbole.
   *
   * Der Typ ist auf diesen einen Abschnitt zugeschnitten. Er wandert erst in
   * eine allgemeine Form, wenn es einen zweiten gibt.
   */
  | {
      kind: 'modell'
      id?: string
      eyebrow: string
      heading: string
      lead: Rich
      /** Die drei Grundsaetze oben rechts. */
      grundsaetze: readonly { bild: string; titel: string; satz: string }[]
      /** Links: der Kunde. */
      kunde: { bild: string; titel: string; punkte: readonly string[] }
      /** Der Pfeil vom Kunden zu A&C. */
      mandat: { titel: string; satz: string }
      /** Mitte: A&C. Das Logo kommt aus dem Corporate Design, nicht von hier. */
      mitte: { bild: string; alt: string; punkte: readonly string[] }
      /** Der Pfeil von A&C zum Markt. */
      preisvergleich: { titel: string; satz: string }
      /** Rechts: das gelieferte Panel der Gesellschaften. */
      markt: { bild: string; alt: string }
      /** Der Rueckweg zum Kunden. */
      ergebnis: { titel: string; satz: string }
      /** Die Nutzenleiste unten. */
      nutzen: readonly { bild: string; titel: string; satz: string }[]
      /** Die Schlusszeile. */
      schluss: { links: string; rechts: string }
    }
  /**
   * Zwei Zielgruppen als je ein Block: Privatpersonen und Unternehmen.
   *
   * Loest auf `/versicherungen` die beiden `subsections` ab. Ricardo hat am
   * 10.09.2026 eine Referenzgrafik geliefert: links Einleitung mit Pills,
   * rechts Karten mit Piktogramm — je Block ein eigener Anker, damit die
   * Sprungmarken darueber weiter treffen.
   *
   * Der Typ ist auf diesen einen Abschnitt zugeschnitten und wandert erst in
   * eine allgemeine Form, wenn es einen zweiten gibt.
   */
  | {
      kind: 'segmente'
      bloecke: readonly {
        /** Wird zum Anker — `privatpersonen`, `unternehmen`. */
        id: string
        eyebrow: string
        heading: string
        /** Ein Satz unter der Ueberschrift. Nur der erste Block hat einen. */
        lead?: string
        /** Die Bereiche als Pills. Nur der erste Block hat welche. */
        pills?: readonly string[]
        karten: readonly { bild: string; titel: string; satz: string }[]
      }[]
    }
  /**
   * Die Betreuung nach dem Abschluss: Einleitung, vier Karten, eine breite
   * Schlusskarte.
   *
   * Loest auf `/versicherungen` den `prose`-Block ab. Ricardo hat am
   * 10.09.2026 eine Referenzgrafik und fuenf Symbole geliefert und verlangt,
   * dass aus dem Textblock eine sichtbare Darstellung wird.
   */
  | {
      kind: 'betreuung'
      id: string
      eyebrow: string
      heading: string
      /** Der Leadtext, unveraendert aus der Quelle. */
      lead: readonly string[]
      karten: readonly { bild: string; titel: string; satz: string }[]
      /** Die breite Karte unter dem Raster. */
      schluss: { bild: string; titel: string; satz: string }
    }
  /**
   * Der Schadenfall: links Text und drei Schritte, rechts die Partnerkarte.
   *
   * Loest auf `/versicherungen` den `prose`-Block ab. Ricardo hat am
   * 11.09.2026 eine Referenzgrafik, vier Symbole und ein Logoraster geliefert.
   */
  | {
      kind: 'schadenfall'
      id: string
      eyebrow: string
      heading: string
      lead: string
      schritte: readonly { bild: string; titel: string }[]
      /** Der gruene Knopf. `datei` ist null, solange das PDF fehlt. */
      download: Download
      partner: {
        /**
         * Der Hinweis ueber den Logos. Keine Ueberschrift, sondern eine
         * Anleitung — er sagt, was die Kacheln tun.
         */
        hinweis: string
        /**
         * Die neun Gesellschaften, jede mit ihrem Logo und dem Link auf ihre
         * eigene Schadenmeldung. Die Ziele sind fremde Seiten — sie oeffnen
         * in einem neuen Fenster und tragen `rel="noopener"`.
         */
        gesellschaften: readonly { bild: string; name: string; url: string }[]
      }
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
    /**
     * Drei kurze Belege unter dem Knopf. Sie stehen nur dort, wo der
     * Seitenkopf ein Bild traegt — sonst haengen sie im Leeren.
     *
     * Bewusst knapp und ohne Superlativ: Was hier steht, muss belegbar sein
     * (CLAUDE.md, Abschnitt 3).
     */
    belege?: readonly string[]
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
