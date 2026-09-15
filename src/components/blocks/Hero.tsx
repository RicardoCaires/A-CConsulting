import type { ReactNode } from 'react'
import Image from 'next/image'

import { Icon } from '@/components/ui/Icon'

import styles from './Hero.module.css'

/**
 * Die Aufnahme hinter jedem Seitenkopf.
 *
 * Seit dem 15.09.2026 auf Ricardos Anweisung („bitte bei allen seiten den
 * Hintergrund des Banners mit diesem Bild ersetzen") auf **allen** Seiten
 * dieselbe. Sie steht darum hier und nicht je Seite im Inhalt.
 *
 * `alt=""`: Die Aussage der Seite steht in der Ueberschrift darueber. Eine
 * Beschreibung desselben Bildes auf zehn Seiten waere fuer Vorlesewerkzeuge
 * Rauschen, nicht Information.
 */
const BANNER = '/bilder/seitenkopf-banner.webp'

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
  /** Drei kurze Belege unter dem Knopf. Heute nur auf `/versicherungen`. */
  belege?: readonly string[]
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
  belege,
  level = 1,
  titelLaenge = 'kurz',
  id = 'seitenkopf',
}: Props) {
  const Heading = `h${level}` as 'h1' | 'h2'
  const titelKlasse = titelLaenge === 'lang' ? `${styles.titel} ${styles.titelLang}` : styles.titel

  return (
    <section className={`ac-section--navy on-navy ${styles.hero}`} aria-labelledby={id}>
      <Image className={styles.bild} src={BANNER} alt="" fill priority sizes="100vw" />

      {/* Zwei Schichten: die flaechige Deckung der Vorlage und der Verlauf von
          unten. Zusammen tragen sie die weisse Schrift auch ueber dem hellsten
          Teil des Himmels. */}
      <div className={styles.deckung} aria-hidden="true" />
      <div className={styles.verlauf} aria-hidden="true" />

      <div className={`ac-container ${styles.inhalt}`}>
        {eyebrow && <p className={`ac-eyebrow ${styles.eyebrow}`}>{eyebrow}</p>}

        <Heading id={id} className={titelKlasse}>
          {titel}
        </Heading>

        {satz && <p className={styles.satz}>{satz}</p>}
        {aktion && <div className={styles.aktion}>{aktion}</div>}

        {belege && belege.length > 0 && (
          <ul className={styles.belege} role="list">
            {belege.map((beleg) => (
              <li key={beleg}>
                <Icon name="haken" size={1.125} className={styles.belegZeichen} />
                {beleg}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
