import type { Locale } from '@/i18n/config'
import { getUi } from '@/i18n/messages/ui'
import { homeHref, parentPage, path, type PageKey } from '@/i18n/routes'

import styles from './Breadcrumb.module.css'

/**
 * Seiteneinordnung auf Unterseiten.
 *
 * Zeigt den Weg von der Startseite bis hierher. Auf der Startseite selbst
 * entfaellt sie — dort gaebe es nichts einzuordnen.
 *
 * Die Hierarchie kommt aus dem Slug: `treuhand/treuhaender-wechseln` haengt
 * unter `treuhand`. Gerechnet wird sie in `routes.ts` (`parentPage`), damit
 * der Seitenkopf dieselbe Einordnung nennt wie diese Zeile.
 */

type Props = {
  page: PageKey
  locale: Locale
}

export function Breadcrumb({ page, locale }: Props) {
  if (page === 'home') return null

  const ui = getUi(locale)
  const parent = parentPage(page, locale)

  const trail: PageKey[] = parent ? ['home', parent, page] : ['home', page]

  return (
    <nav className={styles.wrapper} aria-label={ui.breadcrumbLabel}>
      <div className="ac-container">
        <ol className={styles.list}>
          {trail.map((key, index) => {
            const last = index === trail.length - 1

            return (
              <li key={key} className={styles.item}>
                {last ? (
                  <span aria-current="page">{ui.page[key]}</span>
                ) : (
                  <a href={key === 'home' ? homeHref(locale) : path(key, locale)}>
                    {ui.page[key]}
                  </a>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}
