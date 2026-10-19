import Image from 'next/image'

import type { Locale } from '@/i18n/config'
import { path } from '@/i18n/routes'

import seite from './Seite.module.css'
import styles from './Einstieg.module.css'

/**
 * Einstieg der Startseite (19.10.2026). Ricardo: «diesen bereich hier komplett
 * neugestalten», gewählt «hell und kompakt», der Spruch bleibt.
 *
 * Ein weisser Block wie alle übrigen: links Themenzeile, Überschrift und Knopf,
 * rechts die Seeland-Aufnahme. Sie steht im Seitenverhältnis der Datei
 * (1774 : 887) und wird darum **nicht beschnitten** – Ricardos Festlegung vom
 * 15.09.2026 gilt weiter. Der erste Satz der Überschrift ist navy, der Rest grün.
 */

const BILD = '/bilder/seitenkopf-banner.webp'

type Props = {
  themenzeile: string
  ueberschrift: string
  knopf: string
  locale: Locale
  vorrang?: boolean
}

export function Einstieg({ themenzeile, ueberschrift, knopf, locale, vorrang = false }: Props) {
  const schnitt = ueberschrift.indexOf('. ')
  const erster = schnitt > 0 ? ueberschrift.slice(0, schnitt + 1) : ueberschrift
  const rest = schnitt > 0 ? ueberschrift.slice(schnitt + 2) : ''

  return (
    <section className={`${seite.block} ${styles.einstieg}`} id="seitenkopf" aria-labelledby="seitenkopf-titel">
      <div className={styles.text}>
        <p className={styles.themenzeile}>{themenzeile}</p>
        <h1 id="seitenkopf-titel" className={styles.titel}>
          {erster}
          {rest ? (
            <>
              {' '}
              <span className={seite.akzent}>{rest}</span>
            </>
          ) : null}
        </h1>
        <div className={styles.knoepfe}>
          <a className={seite.knopf} href={path('kontakt', locale)}>
            {knopf}
            <span className={seite.pfeil} aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
      <div className={styles.bild}>
        <Image src={BILD} alt="" width={1774} height={887} sizes="(min-width: 60rem) 50vw, 100vw" priority={vorrang} />
      </div>
    </section>
  )
}
