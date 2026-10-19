import Image from 'next/image'

import type { Locale } from '@/i18n/config'
import { path } from '@/i18n/routes'

import seite from './Seite.module.css'
import styles from './Einstieg.module.css'

/**
 * Einstieg der Startseite, dritte Fassung vom 19.10.2026.
 *
 * Die Seeland-Aufnahme steht gross und **unbeschnitten** (Seitenverhältnis der
 * Datei, 1774 : 887 – Festlegung vom 15.09.2026). Eine weisse Karte mit Spruch
 * und Knopf greift von links über das Bild. Auf der Bildecke klebt ein grüner,
 * leicht schräger Sticker mit dem Satz gegen die Konkurrenz – ohne einen
 * Mitbewerber zu nennen (UWG Art. 3). Bewegung nur als ruhige Einblendung; unter
 * «Bewegung reduzieren» steht alles sofort.
 */

const BILD = '/bilder/seitenkopf-banner.webp'

type Props = {
  themenzeile: string
  ueberschrift: string
  spruch?: string
  knopf: string
  locale: Locale
  vorrang?: boolean
}

/** Erster Satz und Rest, damit der Rest farbig abgesetzt werden kann. */
function teilen(text: string) {
  const schnitt = text.indexOf('. ')
  return schnitt > 0 ? [text.slice(0, schnitt + 1), text.slice(schnitt + 2)] : [text, '']
}

export function Einstieg({ themenzeile, ueberschrift, spruch, knopf, locale, vorrang = false }: Props) {
  const [erster, rest] = teilen(ueberschrift)
  const [spruchA, spruchB] = spruch ? teilen(spruch) : ['', '']

  return (
    <section className={styles.einstieg} id="seitenkopf" aria-labelledby="seitenkopf-titel">
      <div className={styles.bild}>
        <Image src={BILD} alt="" width={1774} height={887} sizes="(min-width: 60rem) 70vw, 100vw" priority={vorrang} />
        {spruch ? (
          <p className={styles.sticker}>
            <span>{spruchA}</span>
            {spruchB ? <span className={styles.stickerB}>{spruchB}</span> : null}
          </p>
        ) : null}
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
    </section>
  )
}
