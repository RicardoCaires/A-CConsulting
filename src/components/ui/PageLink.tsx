import type { ReactNode } from 'react'

import type { Locale } from '@/i18n/config'
import { getUi } from '@/i18n/messages/ui'
import { isPublished, path, type PageKey } from '@/i18n/routes'

import styles from './PageLink.module.css'

/**
 * Verweis auf eine andere Seite.
 *
 * Wird zum Link, sobald die Zielseite in dieser Sprache veroeffentlicht ist.
 * Vorher steht die Beschriftung mit dem Vermerk „folgt" — sichtbar, aber nicht
 * klickbar. Lieber kein Link als ein toter Link.
 */

type Props = {
  target: PageKey
  label: string
  locale: Locale
  className?: string
  /** Optionales Icon vor der Beschriftung. Rein dekorativ. */
  icon?: ReactNode
}

export function PageLink({ target, label, locale, className, icon }: Props) {
  const ui = getUi(locale)

  if (!isPublished(target, locale)) {
    return (
      <span className={[styles.pending, className].filter(Boolean).join(' ')}>
        {icon}
        <span className={styles.label}>{label}</span>
        <span className={styles.badge}>{ui.pageComing.badge}</span>
        <span className="ac-visually-hidden"> {ui.pageComing.hint}</span>
      </span>
    )
  }

  return (
    <a className={className} href={path(target, locale)}>
      {icon}
      <span className={styles.label}>{label}</span>
    </a>
  )
}
