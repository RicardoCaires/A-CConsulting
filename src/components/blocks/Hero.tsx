import type { ReactNode } from 'react'

import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'

import styles from './Hero.module.css'

/**
 * Seitenkopf — einspaltig, mit dem Bild als Flaeche.
 *
 * Bis Schritt 2 stand hier ein zweispaltiger Kopf: links Text, rechts eine
 * Bildflaeche. Beide Haelften haben um den Blick gekaempft. Jetzt traegt das
 * Bild den ganzen Kopf, die Ueberschrift steht darauf, und es gibt genau ein
 * Versprechen und einen Knopf.
 *
 * Formate wie in der Shootingliste, damit das spaetere Foto ohne Beschnitt
 * passt:
 *   mobil    4:5 hoch   (Aufnahme 2)
 *   Desktop  16:9 quer  (Aufnahme 1)
 *
 * Der Platzhalter ist dunkel, nicht hell — sonst waere die weisse Ueberschrift
 * darauf nicht lesbar, und beim Einsetzen des Fotos wuerde der Kontrast
 * ploetzlich kippen. Ueber dem spaeteren Foto liegt an derselben Stelle ein
 * Verlauf; er ist bereits gebaut.
 *
 * Der Kopf ist die **dominante Flaeche** der Seite. Danach folgt keine zweite
 * (Standard 1.1, `flaechen_website`).
 */

type Props = {
  eyebrow?: string
  /** Das Nutzenversprechen. Kurz — Richtwert unter zehn Woertern. */
  titel: ReactNode
  /** Ein Satz darunter. Mehr nicht. */
  satz?: ReactNode
  /** Genau ein Knopf. Ein zweiter macht die Entscheidung schwerer, nicht leichter. */
  aktion?: ReactNode
  /**
   * Bild im Kopf. Faellt es weg, traegt die dunkle Flaeche den Kopf allein.
   *
   * Es wird nie zwoelf verschiedene echte Aufnahmen geben, und Stockfotos sind
   * ausgeschlossen. Lieber kein Bild als ein beliebiges.
   */
  bild?: { label: string; note?: string }
  /** Ueberschriftenebene. Auf Inhaltsseiten 1, im Styleguide auch 2. */
  level?: 1 | 2
  /**
   * Laenge des Titels.
   *
   * `kurz` ist der Normalfall: ein Nutzenversprechen in wenigen Woertern,
   * gesetzt in der Display-Groesse. `lang` gilt fuer die Seiten, deren Titel
   * aus Schritt 4 ein ganzer Satz ist — sie laufen eine Stufe kleiner, damit
   * der Kopf nicht zur Textwand wird. Werden die Titel gekuerzt, faellt
   * `lang` ersatzlos weg.
   */
  titelLaenge?: 'kurz' | 'lang'
  id?: string
}

export function Hero({
  eyebrow,
  titel,
  satz,
  aktion,
  bild,
  level = 1,
  titelLaenge = 'kurz',
  id = 'seitenkopf',
}: Props) {
  const Heading = `h${level}` as 'h1' | 'h2'
  const titelKlasse = titelLaenge === 'lang' ? `${styles.titel} ${styles.titelLang}` : styles.titel

  return (
    <section className={`ac-section--navy on-navy ${styles.hero}`} aria-labelledby={id}>
      {/* Im Kopf steht nur die kurze Beschriftung, nicht der Motivhinweis:
          Der Hinweis ist eine Regieanweisung an uns, er laeuft ueber zwei
          Zeilen und geriet damit bei langen Titeln in die Ueberschrift. Er
          bleibt im Inhalt stehen und dient der Shootingliste. */}
      {bild && <ImagePlaceholder className={styles.bild} label={bild.label} tone="dunkel" />}

      {/* Verlauf von unten: haelt die Ueberschrift lesbar, sobald das echte
          Foto an die Stelle des Platzhalters tritt. */}
      <div className={styles.verlauf} aria-hidden="true" />

      <div className={`ac-container ${styles.inhalt}`}>
        {eyebrow && <p className={`ac-eyebrow ${styles.eyebrow}`}>{eyebrow}</p>}

        <Heading id={id} className={titelKlasse}>
          {titel}
        </Heading>

        {satz && <p className={styles.satz}>{satz}</p>}
        {aktion && <div className={styles.aktion}>{aktion}</div>}
      </div>
    </section>
  )
}
