import Image from 'next/image'

import { path } from '@/i18n/routes'
import type { Locale } from '@/i18n/config'

import styles from './Banner.module.css'

/**
 * Der Banner — **ein** Baustein fuer alle dreizehn Seiten- und
 * Abschnittsbanner.
 *
 * Nach Ricardos Auftrag vom 15.09.2026: dieselbe Aufnahme, dieselbe Groesse,
 * dieselben Innenabstaende und dieselbe Textposition auf jeder Seite. Es gibt
 * darum bewusst **keine** Eigenschaft, mit der ein Aufrufer Hoehe, Ausschnitt
 * oder Anordnung veraendern koennte — nur Themenzeile und Ueberschrift.
 *
 * Er steht als **Seitenkopf**, nicht als Abschnittsbanner: Ricardo hat am
 * selben Tag zwoelf Banner geliefert, einen je veroeffentlichte Seite, und
 * keinen fuer einen Abschnitt.
 *
 * **Ohne Abdunklung.** Kein Verlauf, keine farbige Schicht, kein Schatten:
 * Das Bild steht so da, wie es geliefert wurde, damit Landschaft, See,
 * Stadtlichter und die Bergmarke sichtbar bleiben. Die weisse Schrift steht
 * links, wo die Aufnahme dunkel ist; nachgemessen traegt sie dort.
 *
 * `alt=""`: Dieselbe Aufnahme steht auf dreizehn Bannern. Was die Seite sagt,
 * steht in der Ueberschrift daneben.
 */

const BILD = '/bilder/seitenkopf-banner.webp'

type Props = {
  /** Kleine Themenzeile ueber der Ueberschrift, in Versalien. */
  themenzeile: string
  ueberschrift: string
  /** Anker und zugleich Grundlage der `aria-labelledby`-Verbindung. */
  id: string
  /** Beschriftung des Knopfes. Kommt aus den Oberflaechentexten. */
  knopf: string
  locale: Locale
  /** Nur der Seitenkopf der Startseite laedt das Bild vorrangig. */
  vorrang?: boolean
}

export function Banner({
  themenzeile,
  ueberschrift,
  id,
  knopf,
  locale,
  vorrang = false,
}: Props) {
  const titelId = `${id}-titel`

  return (
    <section className={styles.banner} id={id} aria-labelledby={titelId}>
      <Image
        className={styles.bild}
        src={BILD}
        alt=""
        fill
        sizes="100vw"
        priority={vorrang}
      />

      <div className={styles.inner}>
        <div className={styles.inhalt}>
          <p className={styles.themenzeile}>{themenzeile}</p>

          <h1 id={titelId} className={styles.ueberschrift}>
            {ueberschrift}
          </h1>

          <a className={styles.knopf} href={path('kontakt', locale)}>
            {knopf}
          </a>
        </div>
      </div>
    </section>
  )
}
