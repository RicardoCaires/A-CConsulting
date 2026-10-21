/**
 * Baukasten der Seiten, Fassung vom 15.10.2026.
 *
 * Auf Ricardos Auftrag («bitte durchwegs durchziehen») tragen alle Seiten denselben
 * Aufbau wie die Startseite vom 14.10.2026 (Vorbild simply.ch): weisse Blöcke auf
 * hellblauem Grund, zweifarbige Überschriften ohne Vorzeile, keine Werbesprüche,
 * keine Symbolkacheln. Jede Seite ist eine Liste von Blöcken; welche Form ein
 * Block hat, bestimmt `art`. Abwechslung entsteht aus verschiedenen Arten, nicht
 * aus Effekten.
 *
 * Texte kommen aus `content/source/` (die Quellenprüfung kontrolliert das).
 */

import type { Rich } from '@/content/types'
import type { PageKey } from '@/i18n/routes'

/** Zweifarbige Überschrift: das Wort in der Mitte steht in Grün. */
export type Titel = { vor?: string; akzent: string; nach?: string }

/** Ziel innerhalb der Website: Seite und optional Abschnitt. */
export type Ziel = { ziel: PageKey; anker?: string }

/**
 * Ein Knopf. `haupt` ist der grüne Knopf, `zweit` der helle mit grüner Kontur.
 * Unterstrichene Textlinks gibt es seit dem 15.10.2026 nicht mehr (Ricardo:
 * «links wie das auf dem bild will ich nicht das sollen buttons werden»).
 * Externe Ziele (Kundenportal) über `href`.
 */
export type Knopf = { text: string; art?: 'haupt' | 'zweit' } & (
  | Ziel
  | { href: 'kundenportal' | 'telefon' | 'email' | 'offerte' | 'route' }
  | { datei: string }
)

/** Eine Linkliste: Titel und Einträge mit Pfeil. */
export type Liste = {
  titel: string
  /** Anker für Sprünge von anderen Seiten (z. B. `privatpersonen`). */
  id?: string
  ziel?: Ziel
  eintraege: readonly ({ text: string; zusatz?: string } & Partial<Ziel>)[]
  /** Knopf am Fuss der Liste, nur in der Darstellung `kacheln`. */
  knopf?: Knopf
}

/** Welche Beispielansicht des Kundenportals gezeigt wird. */
export type PortalAnsicht = 'praemien' | 'fenster' | 'versicherungen' | 'police' | 'anfragen' | 'unterlagen'

type Kopf = {
  /** Anker des Blocks, damit Links von anderen Seiten hierher springen. */
  id?: string
  titel: Titel
  einleitung?: Rich
}

export type Block =
  /** Text mit optionalen Haken und Knöpfen. Die einfachste Form. */
  | (Kopf & {
      art: 'text'
      absaetze?: readonly Rich[]
      punkte?: readonly string[]
      knoepfe?: readonly Knopf[]
      /** Text in zwei Spalten statt einer: links Titel, rechts Absätze. */
      breit?: boolean
    })
  /**
   * Mehrere Linklisten nebeneinander. `kacheln` (15.10.2026, Ricardo: «sieht langweilig
   * aus»): je Liste eine Karte mit farbiger Kante, Anzahl und Einträgen als Kacheln mit Haken.
   */
  | (Kopf & { art: 'listen'; listen: readonly Liste[]; darstellung?: 'kacheln' })
  /** Text links, rechts etwas zum Anschauen. */
  | (Kopf & {
      art: 'textBild'
      absaetze?: readonly Rich[]
      punkte?: readonly string[]
      knoepfe?: readonly Knopf[]
      bild:
        | { art: 'foto'; datei: string; alt: string; breite: number; hoehe: number }
        | { art: 'portal'; ansicht?: PortalAnsicht }
        | { art: 'karte'; titel: string }
        | { art: 'versicherer'; hinweis: string; gesellschaften: readonly { bild: string; name: string; url: string }[] }
      /** Bild links statt rechts – für Abwechslung zwischen zwei Blöcken. */
      bildLinks?: boolean
    })
  /** Nummerierte Schritte auf einer Linie. */
  | (Kopf & {
      art: 'schritte'
      schritte: readonly { titel: string; text: string }[]
      nachsatz?: Rich
    })
  /** Zwei oder drei Spalten mit denselben Merkmalen, zum Vergleichen. */
  | (Kopf & {
      art: 'vergleich'
      spalten: readonly {
        titel: string
        untertitel?: string
        zeilen: readonly { merkmal: string; wert: string }[]
        passt?: string
      }[]
      nachsatz?: Rich
      knoepfe?: readonly Knopf[]
    })
  /** Eine schlichte Tabelle, z. B. Fristen und Gebühren. */
  | (Kopf & {
      art: 'tabelle'
      kopfzeile: readonly string[]
      zeilen: readonly (readonly string[])[]
      nachsaetze?: readonly Rich[]
      knoepfe?: readonly Knopf[]
    })
  /** Das Kundenportal zum Durchklicken, mit erfundenen Angaben. Gesendet wird nichts. */
  | (Kopf & {
      art: 'portalDemo'
      /** Stichpunkte neben der Überschrift – Erklärung und Vorschau in einem Block (19.10.2026). */
      punkte?: readonly string[]
      /** Satz direkt über der Vorschau: was man darin ausprobieren kann. */
      probieren?: string
      knoepfe?: readonly Knopf[]
    })
  /** Mehrere Beispielansichten des Kundenportals nebeneinander, je mit kurzer Unterschrift. */
  | (Kopf & {
      art: 'portalAnsichten'
      ansichten: readonly { ansicht: PortalAnsicht; titel: string; text: string }[]
      knoepfe?: readonly Knopf[]
    })
  /**
   * Zeitleiste als Diagramm: Punkte auf einer Linie, je mit Marke (z. B. Datum),
   * Titel und optional einem Wert (z. B. Gebühr). Mehrere Reihen untereinander.
   */
  | (Kopf & {
      art: 'zeitleiste'
      /** Mit Kantonswahl: Die Reihen kommen aus `fristen-kantone.ts`, voreingestellt Bern. */
      kantone?: { beschriftung: string }
      reihen: readonly {
        titel?: string
        stationen: readonly { marke?: string; titel: string; wert?: string; hervor?: boolean }[]
      }[]
      nachsaetze?: readonly Rich[]
      knoepfe?: readonly Knopf[]
    })
  /** Ablauf in Stufen mit Pfeilen dazwischen, je Stufe ein Titel und Stichworte. */
  | (Kopf & {
      art: 'fluss'
      stufen: readonly { titel: string; punkte: readonly string[] }[]
      /** Darunter der Fragebogen, der die persönliche Checkliste der Unterlagen erstellt (Steuern). */
      checkliste?: boolean
      nachsatz?: Rich
      knoepfe?: readonly Knopf[]
    })
  /**
   * Unser Geschäftsmodell als Bild (15.10.2026): Sie – A&C – Gesellschaften, mit dem,
   * was zwischen ihnen hin und her geht, und darunter wer entscheidet und wer bezahlt.
   */
  | (Kopf & {
      art: 'geschaeftsmodell'
      sie: { titel: string; text: string }
      ac: { titel: string; punkte: readonly string[] }
      markt: { titel: string; gesellschaften: readonly { bild: string; name: string }[] }
      hin: readonly [{ hin: string; zurueck: string }, { hin: string; zurueck: string }]
      fakten: readonly { titel: string; text: string }[]
    })
  /**
   * Matrix als Diagramm (15.10.2026): Ereignisse in den Zeilen, betroffene Versicherungen
   * in den Spalten, ein Punkt, wo es zusammentrifft. Auf dem Telefon je Ereignis eine Karte.
   */
  | (Kopf & {
      art: 'matrix'
      gruppen: readonly {
        titel: string
        spalten: readonly string[]
        zeilen: readonly { titel: string; treffer: readonly number[] }[]
      }[]
      nachsatz?: Rich
    })
  /** Rechner: Steuerersparnis mit der Säule 3a (15.10.2026), rechnet im Browser. */
  | (Kopf & { art: 'rechner3a' })
  /** Häufige Fragen zum Aufklappen. Höchstens drei je Seite (Ricardo, 14.10.2026). */
  | (Kopf & { art: 'fragen'; fragen: readonly { frage: string; antwort: Rich }[] })
  /** Die Inhaber mit Foto, Angaben und direktem Kontakt. */
  | (Kopf & {
      art: 'personen'
      satz?: string
      ausfuehrlich?: boolean
      leute: readonly {
        name: string
        rolle: string
        /** Ohne Bild steht «Coming soon» (21.10.2026: die bisherigen Porträts waren KI-Bilder). */
        bild?: { datei: string; alt: string }
        angaben?: readonly { merkmal: string; wert: string }[]
        sprachen?: string
        telefon?: 'ricardo' | 'octavio'
        email?: 'ricardo' | 'octavio'
        linkedin?: string
      }[]
      knoepfe?: readonly Knopf[]
    })
  /** Telefon, E-Mail und Büro mit einem Satz und dem Knopf zur Kontaktseite. */
  | (Kopf & {
      art: 'kontakt'
      satz: string
      beschriftungen: { telefon: string; email: string; buero: string }
      ohneKnopf?: boolean
      /** Ohne Google-Karte (Impressum). Sonst steht rechts die Karte mit dem Büro (16.10.2026). */
      ohneKarte?: boolean
    })
  /** Das Schaubild «Unser Modell» der Versicherungsseite, unverändert übernommen. */
  | { art: 'modell'; id?: string }
  /** Das Kontaktformular der Kontaktseite, unverändert übernommen. */
  | { art: 'formular'; id?: string }

export type SeitenInhalt = {
  meta: { title: string; description: string }
  /** Banner mit schlichter Überschrift; fehlt er, beginnt die Seite mit dem ersten Block. */
  banner?: {
    themenzeile: string
    ueberschrift: string
    unterzeile?: string
    /** «hell»: heller, kompakter Einstieg mit der Aufnahme daneben statt dahinter (Startseite, 19.10.2026). */
    form?: 'hell'
    /** Spruch als Sticker auf dem Bild im Einstieg der Startseite (19.10.2026). */
    spruch?: string
  }
  /** Ohne Banner trägt der erste Block die Hauptüberschrift (h1). */
  bloecke: readonly Block[]
}

/**
 * Ein Beitrag in «News und Blog» (15.10.2026). Ricardo: «Du entwirfst, ich gebe
 * frei». Ein Beitrag erscheint erst, wenn `freigegeben` auf `true` steht.
 */
export type Beitrag = {
  /** Teil der Adresse: /de/news/<slug>/ – nur Kleinbuchstaben, Ziffern, Bindestriche. */
  slug: string
  art: 'News' | 'Ratgeber'
  titel: string
  /** Ein Satz für die Übersicht und die Suchmaschinen. */
  kurz: string
  /** Veröffentlichungsdatum ISO (YYYY-MM-DD); bis zur Freigabe das geplante Datum. */
  datum: string
  freigegeben: boolean
  /** Lesezeit in Minuten, grob. */
  minuten: number
  abschnitte: readonly {
    zwischentitel?: string
    absaetze: readonly Rich[]
    punkte?: readonly string[]
    /** Interaktiver Baustein nach dem Text des Abschnitts (19.10.2026). */
    baustein?: 'vorsorgeKarte'
  }[]
  /** Hinweis am Schluss, z. B. dass der Beitrag keine individuelle Beratung ersetzt. */
  hinweis?: string
}
