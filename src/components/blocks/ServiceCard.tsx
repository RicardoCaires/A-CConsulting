import type { ReactNode } from 'react'

import { Icon, type IconName } from '@/components/ui/Icon'
import { IconCircle } from '@/components/ui/IconCircle'
import type { Locale } from '@/i18n/config'
import { getUi } from '@/i18n/messages/ui'
import { isPublished, path, type PageKey } from '@/i18n/routes'

import styles from './ServiceCard.module.css'

/**
 * Karte fuer einen Leistungsbereich.
 *
 * Icon, Titel, hoechstens drei Stichworte. Kein Fliesstext — was erklaert
 * werden muss, steht auf der Leistungsseite.
 *
 * Die **ganze Karte** ist die Trefferflaeche. Verlinkt ist trotzdem nur der
 * Titel: Der Link traegt den Namen des Ziels, die Flaeche wird darueber
 * gespannt. So liest ein Screenreader „Versicherungen, Link" und nicht die
 * ganze Karte am Stueck.
 *
 * Gibt es die Zielseite in dieser Sprache noch nicht, ist die Karte keine
 * Karte mit totem Link, sondern traegt sichtbar den Vermerk „folgt".
 */

type Props = {
  icon: IconName
  /** Knoten, weil der Titel eine Uebersetzungsmarke tragen kann. */
  heading: ReactNode
  /** Hoechstens drei. Mehr wird abgeschnitten, nicht umgebrochen. */
  chips?: readonly ReactNode[]
  target: PageKey
  locale: Locale
}

export function ServiceCard({ icon, heading, chips = [], target, locale }: Props) {
  const ui = getUi(locale)
  const verfuegbar = isPublished(target, locale)
  const sichtbareChips = chips.slice(0, 3)

  return (
    <article className={verfuegbar ? styles.card : `${styles.card} ${styles.cardPending}`}>
      <IconCircle name={icon} size="lg" />

      <h3 className={styles.heading}>
        {verfuegbar ? (
          <a className={styles.link} href={path(target, locale)}>
            {heading}
          </a>
        ) : (
          <span className={styles.pendingHeading}>
            {heading}
            <span className={styles.badge}>{ui.pageComing.badge}</span>
            <span className="ac-visually-hidden"> {ui.pageComing.hint}</span>
          </span>
        )}
      </h3>

      {sichtbareChips.length > 0 && (
        <ul className={styles.chips} role="list">
          {sichtbareChips.map((chip, index) => (
            <li key={index} className={styles.chip}>
              {chip}
            </li>
          ))}
        </ul>
      )}

      {verfuegbar && (
        <span className={styles.arrow} aria-hidden="true">
          <Icon name="pfeil" size={1.125} />
        </span>
      )}
    </article>
  )
}
