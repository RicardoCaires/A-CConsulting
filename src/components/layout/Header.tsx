import { Button } from '@/components/ui/Button'
import { getUi } from '@/i18n/messages/ui'
import { isPublished, path } from '@/i18n/routes'
import type { Locale } from '@/i18n/config'

import { LanguageSwitcher } from './LanguageSwitcher'
import { Logo } from './Logo'
import { Nav } from './Nav'
import styles from './Header.module.css'

/**
 * Kopfbereich — auf jeder Seite identisch.
 *
 * Links das Logo, klein und ruhig, immer zur Startseite. In der Mitte die
 * Hauptnavigation mit dem Treuhand-Aufklappmenue. Rechts die Sprachwahl und
 * der Kontakt-Knopf.
 *
 * Auf schmalen Geraeten wird die Reihe zum Menue; der Kontakt-Knopf entfaellt
 * dort, weil Kontakt in der Liste steht.
 */

type Props = {
  locale: Locale
}

export function Header({ locale }: Props) {
  const ui = getUi(locale)

  return (
    <header className={styles.header}>
      <div className={`ac-container ${styles.inner}`}>
        <Logo locale={locale} priority />

        <div className={styles.center}>
          <Nav locale={locale} />
        </div>

        <div className={styles.actions}>
          <LanguageSwitcher locale={locale} />
          {isPublished('kontakt', locale) && (
            <Button href={path('kontakt', locale)} className={styles.cta}>
              {ui.page.kontakt}
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
