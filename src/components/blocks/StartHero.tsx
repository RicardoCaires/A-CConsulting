import type { ReactNode } from 'react'

import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'

import styles from './StartHero.module.css'

/**
 * Seitenkopf der Startseite — Text und Bildflaeche nebeneinander.
 *
 * Er unterscheidet sich bewusst vom Kopf der Leistungsseiten (`Hero`), wo das
 * Bild die ganze Flaeche traegt und der Text darauf steht. Hier stehen beide
 * nebeneinander: Auf der Startseite muss die Aussage in wenigen Sekunden
 * lesbar sein, und Text auf einem Foto liest sich immer eine Spur langsamer.
 *
 * Der Grund ist `navy_deep` — die **eine** dominante Flaeche der Seite
 * (Standard 1.1, `flaechen_website`). Danach folgt keine zweite.
 *
 * Aufteilung:
 *   mobil    Text, darunter eine flache Bildflaeche (16:10)
 *   Desktop  Text links (7 Spalten), Bild rechts (5), Hochformat 4:5
 *
 * Genau ein Knopf. Der zweite Weg ist ein Textlink und sieht auch so aus —
 * zwei gleich starke Knoepfe machen die Entscheidung schwerer, nicht leichter.
 */

type Props = {
  eyebrow?: string
  titel: ReactNode
  satz?: ReactNode
  /** Der eine Handlungsknopf. */
  aktion: ReactNode
  /** Zurueckhaltender zweiter Weg, als Textlink. */
  weiter?: ReactNode
  bild: { label: string; note?: string }
  id?: string
}

export function StartHero({
  eyebrow,
  titel,
  satz,
  aktion,
  weiter,
  bild,
  id = 'einstieg',
}: Props) {
  return (
    <section className={`ac-section--navy on-navy ${styles.hero}`} aria-labelledby={id}>
      <div className={`ac-container ${styles.inner}`}>
        <div className={styles.text}>
          {eyebrow && <p className={`ac-eyebrow ${styles.eyebrow}`}>{eyebrow}</p>}

          <h1 id={id} className={styles.titel}>
            {titel}
          </h1>

          {satz && <p className={styles.satz}>{satz}</p>}

          <div className={styles.aktionen}>
            {aktion}
            {weiter && <span className={styles.weiter}>{weiter}</span>}
          </div>
        </div>

        <div className={styles.bild}>
          <ImagePlaceholder label={bild.label} note={bild.note} tone="dunkel" />
        </div>
      </div>
    </section>
  )
}
