import type { ReactNode } from 'react'

import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
import { PageLink } from '@/components/ui/PageLink'
import type { Locale } from '@/i18n/config'
import type { PageKey } from '@/i18n/routes'

import styles from './Bereiche.module.css'

/**
 * Die drei Beratungsbereiche — bewusst nicht als drei gleiche Karten.
 *
 * Drei Karten nebeneinander sagen: Diese drei sind gleich. Das stimmt hier
 * nicht. Versicherungsbroking fuehrt, Treuhand und Personal Finance ergaenzen
 * (Rangfolge aus der Hausordnung). Die Aufteilung zeigt das, ohne es zu
 * schreiben:
 *
 *   Leitbereich   volle Breite, Text und Bildflaeche nebeneinander
 *   die beiden    darunter nebeneinander, ohne Bild, nur Typografie und Linie
 *
 * Gestaltet wird mit Flaeche, Linie und Abstand, nicht mit Behaeltern. Es gibt
 * hier keine Karte, keinen Rahmen und keinen Schatten — die Trennung leisten
 * eine Haarlinie und der Weissraum.
 */

export type Bereich = {
  titel: ReactNode
  /** Zwei Saetze, hoechstens. */
  text: ReactNode
  /** Stichworte statt Fliesstext. Fuenf sind genug. */
  stichworte: readonly string[]
  ziel: PageKey
  linkText: string
}

export type LeitBereich = Omit<Bereich, 'text'> & {
  /** Beim fuehrenden Bereich freiwillig — der Abschnitt darueber sagt es schon. */
  text?: ReactNode
  bild: { label: string; note?: string }
}

type Props = {
  leit: LeitBereich
  weitere: readonly Bereich[]
  locale: Locale
}

function Stichworte({ werte }: { werte: readonly string[] }) {
  return (
    <ul className={styles.stichworte} role="list">
      {werte.map((wert) => (
        <li key={wert}>{wert}</li>
      ))}
    </ul>
  )
}

export function Bereiche({ leit, weitere, locale }: Props) {
  return (
    <div className={styles.wrapper}>
      {/* ---- Leitbereich ------------------------------------------------- */}
      <article className={styles.leit}>
        <div className={styles.leitText}>
          <h3 className={styles.titelGross}>{leit.titel}</h3>
          {leit.text && <p className={styles.text}>{leit.text}</p>}
          <Stichworte werte={leit.stichworte} />
          <PageLink
            target={leit.ziel}
            label={leit.linkText}
            locale={locale}
            className={styles.link}
          />
        </div>

        <div className={styles.leitBild}>
          <ImagePlaceholder label={leit.bild.label} note={leit.bild.note} />
        </div>
      </article>

      {/* ---- Die beiden ergaenzenden Bereiche ---------------------------- */}
      <div className={styles.weitere}>
        {weitere.map((bereich, index) => (
          <article key={index} className={styles.spalte}>
            <h3 className={styles.titel}>{bereich.titel}</h3>
            <p className={styles.text}>{bereich.text}</p>
            <Stichworte werte={bereich.stichworte} />
            <PageLink
              target={bereich.ziel}
              label={bereich.linkText}
              locale={locale}
              className={styles.link}
            />
          </article>
        ))}
      </div>
    </div>
  )
}
