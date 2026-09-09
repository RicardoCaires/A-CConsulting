import { Button } from '@/components/ui/Button'
import { getUi } from '@/i18n/messages/ui'
import { hrefOrDefault } from '@/i18n/routes'
import type { Locale } from '@/i18n/config'

import { LanguageSwitcher } from './LanguageSwitcher'
import { Logo } from './Logo'
import { Nav } from './Nav'
import styles from './Header.module.css'

/**
 * Kopfbereich — auf jeder Seite identisch.
 *
 * Links das Logo, klein und ruhig, immer zur Startseite. Rechts die
 * Navigationsreihe, die Sprachwahl und der eine Handlungsknopf.
 *
 * Auf schmalen Geraeten wird die Reihe zum Menue. Der Knopf entfaellt oben
 * nicht ersatzlos — er steht unten im Menue ueber die volle Breite, wo er mit
 * dem Daumen erreichbar ist.
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
          <Button href={hrefOrDefault('kontakt', locale)} className={styles.cta}>
            {ui.cta}
          </Button>
        </div>
      </div>
    </header>
  )
}
