import { hatSichtbarenInhalt, RichText } from '@/components/ui/RichText'
import type { Rich } from '@/content/types'
import { getUi } from '@/i18n/messages/ui'
import { isPublished, path } from '@/i18n/routes'
import type { Locale } from '@/i18n/config'

import styles from './Beitraege.module.css'

/**
 * Wissen — drei ausgewaehlte Beitraege.
 *
 * Editorial gesetzt, nicht als Produktkacheln: Datum klein darueber, Titel in
 * der Display-Schrift, zwei Zeilen Anriss, ein Verweis. Kein Bild, kein
 * Rahmen, kein Schatten — nur eine Haarlinie ueber jedem Beitrag. So liest
 * sich der Abschnitt wie eine Zeitschriftenseite und nicht wie ein Shop.
 *
 * **Es gibt noch keine Beitraege.** Was hier steht, sind die drei geplanten
 * Themen; Datum und Anriss sind als offene Angabe markiert und erscheinen im
 * Produktionsbau nicht. Erfundene Beitraege mit erfundenen Daten waeren die
 * Alternative gewesen — sie kommt nicht in Frage.
 */

export type Beitrag = {
  /** Veroeffentlichungsdatum, ausgeschrieben. */
  datum: Rich
  titel: Rich
  /** Zwei Zeilen, nicht mehr. */
  anriss: Rich
  /** Adresse des Beitrags, sobald es ihn gibt. */
  href?: string
}

type Props = {
  beitraege: readonly Beitrag[]
  locale: Locale
  /** Beschriftung des Verweises auf einen einzelnen Beitrag. */
  weiterlesen: string
  /**
   * Wohin ein Beitrag ohne eigene Adresse fuehrt.
   *
   * `uebersicht` schickt auf die Wissensseite — sinnvoll auf der Startseite,
   * wo der Abschnitt ohnehin nur ein Ausschnitt ist. `keines` laesst den
   * Verweis stumpf und setzt den Vermerk „folgt"; das gilt **auf** der
   * Wissensseite, wo ein Verweis auf sie selbst im Kreis fuehrte.
   */
  ziel?: 'uebersicht' | 'keines'
}

export function Beitraege({ beitraege, locale, weiterlesen, ziel = 'uebersicht' }: Props) {
  const ui = getUi(locale)
  const uebersicht =
    ziel === 'uebersicht' && isPublished('wissen', locale) ? path('wissen', locale) : null

  return (
    <ol className={styles.liste} role="list">
      {beitraege.map((beitrag, index) => {
        const href = beitrag.href ?? uebersicht

        return (
          <li key={index} className={styles.beitrag}>
            {hatSichtbarenInhalt(beitrag.datum) && (
              <p className={styles.datum}>
                <RichText value={beitrag.datum} />
              </p>
            )}

            <h3 className={styles.titel}>
              <RichText value={beitrag.titel} />
            </h3>

            {hatSichtbarenInhalt(beitrag.anriss) && (
              <p className={styles.anriss}>
                <RichText value={beitrag.anriss} />
              </p>
            )}

            {href ? (
              <a className={styles.link} href={href}>
                {weiterlesen}
              </a>
            ) : (
              <span className={styles.pending}>
                {weiterlesen}
                <span className={styles.badge}>{ui.pageComing.badge}</span>
                <span className="ac-visually-hidden"> {ui.pageComing.hint}</span>
              </span>
            )}
          </li>
        )
      })}
    </ol>
  )
}
