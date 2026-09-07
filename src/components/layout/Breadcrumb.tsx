import type { Locale } from '@/i18n/config'
import { getUi } from '@/i18n/messages/ui'
import { homeHref, isPublished, pages, path, type PageKey } from '@/i18n/routes'

import styles from './Breadcrumb.module.css'

/**
 * Seiteneinordnung auf Unterseiten.
 *
 * Zeigt den Weg von der Startseite bis hierher. Auf der Startseite selbst
 * entfaellt sie — dort gaebe es nichts einzuordnen.
 *
 * Die Hierarchie kommt aus dem Slug: `treuhand/treuhaender-wechseln` haengt
 * unter `treuhand`. So braucht es keine zweite Struktur neben `routes.ts`.
 */

type Props = {
  page: PageKey
  locale: Locale
}

/** Uebergeordnete Seite, falls der Slug mehrstufig ist. */
function parentOf(page: PageKey, locale: Locale): PageKey | null {
  const slug = pages[page].slug[locale]
  const cut = slug.lastIndexOf('/')
  if (cut < 0) return null

  const parentSlug = slug.slice(0, cut)
  const match = (Object.keys(pages) as PageKey[]).find(
    (key) => pages[key].slug[locale] === parentSlug,
  )

  return match && isPublished(match, locale) ? match : null
}

export function Breadcrumb({ page, locale }: Props) {
  if (page === 'home') return null

  const ui = getUi(locale)
  const parent = parentOf(page, locale)

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
