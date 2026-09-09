import type { ReactNode } from 'react'
import Image from 'next/image'

import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'

import styles from './StartHero.module.css'

/**
 * Seitenkopf der Startseite — das Bild traegt die ganze Flaeche.
 *
 * Bis zum 09.09.2026 standen Text und Bildflaeche nebeneinander. Mit dem
 * Seeland-Bild wechselt die Anordnung auf Ricardos Vorlage: Das Foto laeuft
 * ueber die volle Breite, der Text steht darauf.
 *
 * Reihenfolge im Text — Ueberschrift, gruener Strich, Vorzeile — folgt der
 * Vorlage. Die Vorzeile steht dort **unter** der Ueberschrift, nicht darueber;
 * sie ordnet den Leitsatz ein, statt ihn anzukuendigen. Im Markup steht sie
 * trotzdem dahinter, damit die Vorlesereihenfolge stimmt.
 *
 * Der Grund ist `navy_deep` — die **eine** dominante Flaeche der Seite
 * (Standard 1.1, `flaechen_website`). Danach folgt keine zweite.
 *
 * Genau ein Knopf. Der zweite Weg ist ein Textlink und sieht auch so aus —
 * zwei gleich starke Knoepfe machen die Entscheidung schwerer, nicht leichter.
 */

/**
 * Das Bild im Kopf.
 *
 *   `src`  eine echte Aufnahme unter `public/`
 *   sonst  eine ruhige Flaeche mit Formatangabe, bis die Aufnahme vorliegt
 */
export type HeroBild =
  | { src: string; alt: string }
  | { label: string; note?: string }

const istFoto = (bild: HeroBild): bild is { src: string; alt: string } => 'src' in bild

type Props = {
  eyebrow?: string
  titel: ReactNode
  satz?: ReactNode
  /** Der eine Handlungsknopf. */
  aktion: ReactNode
  /** Zurueckhaltender zweiter Weg, als Textlink. */
  weiter?: ReactNode
  bild: HeroBild
  id?: string
}

export function StartHero({ eyebrow, titel, satz, aktion, weiter, bild, id = 'einstieg' }: Props) {
  return (
    <section className={`ac-section--navy on-navy ${styles.hero}`} aria-labelledby={id}>
      {istFoto(bild) ? (
        <Image
          className={styles.foto}
          src={bild.src}
          alt={bild.alt}
          fill
          priority
          sizes="100vw"
        />
      ) : (
        <ImagePlaceholder
          className={styles.platzhalter}
          label={bild.label}
          note={bild.note}
          tone="dunkel"
        />
      )}

      {/* Verlauf von links: haelt den Text lesbar, ohne das Bild zuzudecken. */}
      <div className={styles.verlauf} aria-hidden="true" />

      <div className={`ac-container ${styles.inner}`}>
        <div className={styles.text}>
          <h1 id={id} className={styles.titel}>
            {titel}
          </h1>

          {/* Der gruene Strich trennt Leitsatz und Einordnung — derselbe
              Marker wie im Corporate Design, hier in seiner hellen Fassung. */}
          <hr className={styles.marker} />

          {eyebrow && <p className={`ac-eyebrow ${styles.eyebrow}`}>{eyebrow}</p>}

          {satz && <p className={styles.satz}>{satz}</p>}

          <div className={styles.aktionen}>
            {aktion}
            {weiter && <span className={styles.weiter}>{weiter}</span>}
          </div>
        </div>
      </div>
    </section>
  )
}
