import Image from 'next/image'

import type { Locale } from '@/i18n/config'
import { path } from '@/i18n/routes'

import seite from './Seite.module.css'
import styles from './Einstieg.module.css'

/**
 * Einstieg der Startseite, zweite Fassung vom 19.10.2026. Ricardo zur ersten
 * hellen Fassung: «gefällt mir nämlich garnicht ist sehr langweillig».
 *
 * Die Seeland-Aufnahme steht gross und **unbeschnitten** (Seitenverhältnis der
 * Datei, 1774 : 887 – Festlegung vom 15.09.2026). Eine weisse Karte mit Spruch
 * und Knopf greift von links über das Bild, darunter drei Merkmale. Beim Laden
 * gleiten Karte und Bild sanft herein; unter «Bewegung reduzieren» steht alles
 * sofort. Der erste Satz der Überschrift ist navy, der Rest grün.
 */

const BILD = '/bilder/seitenkopf-banner.webp'

type Props = {
  themenzeile: string
  ueberschrift: string
  merkmale?: readonly string[]
  knopf: string
  locale: Locale
  vorrang?: boolean
}

export function Einstieg({ themenzeile, ueberschrift, merkmale = [], knopf, locale, vorrang = false }: Props) {
  const schnitt = ueberschrift.indexOf('. ')
  const erster = schnitt > 0 ? ueberschrift.slice(0, schnitt + 1) : ueberschrift
  const rest = schnitt > 0 ? ueberschrift.slice(schnitt + 2) : ''

  return (
    <section className={styles.einstieg} id="seitenkopf" aria-labelledby="seitenkopf-titel">
      <div className={styles.bild}>
        <Image src={BILD} alt="" width={1774} height={887} sizes="(min-width: 60rem) 70vw, 100vw" priority={vorrang} />
      </div>

      <div className={styles.karte}>
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

      {merkmale.length ? (
        <ul className={styles.merkmale}>
          {merkmale.map((m) => (
            <li key={m}>
              <span className={styles.haken} aria-hidden="true" />
              {m}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  )
}
