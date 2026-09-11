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
 * Drei Anordnungen aus **einem** Markup, gesetzt ueber ein Raster:
 *
 *   schmal            Logo · Menue · Sprachwahl     — eine Zeile
 *   64rem bis 75rem   Logo mittig, Knopf rechts;    — zwei Zeilen
 *                     darunter die Kategorien
 *   ab 75rem          Logo · Kategorien · Knopf     — eine Zeile
 *
 * Die einzeilige Fassung ab 75rem stammt vom 11.09.2026 und folgt Ricardos
 * Referenz: gruene Linie oben, Kategorien mittig, der Knopf mit Pfeil rechts.
 * Sie passt, weil der Kopf dort einen eigenen, breiteren Container hat und
 * seit dem 09.09.2026 nur noch vier Kategorien in der Reihe stehen. Darunter
 * bleibt es bei zwei Zeilen — bei 1024 px liefen die Kategorien sonst wieder
 * ueber die Wortmarke.
 *
 * Die Reihenfolge im Markup ist die des schmalen Geraets. Auf breiten Fenstern
 * ordnet das Raster um — die Navigation bleibt im Quelltext an derselben
 * Stelle, damit die Tastaturbedienung ihr folgt.
 */

type Props = {
  locale: Locale
}

export function Header({ locale }: Props) {
  const ui = getUi(locale)

  return (
    <header className={styles.header}>
      <div className={`ac-container ${styles.inner}`}>
        <Logo locale={locale} priority className={styles.logo} />

        <div className={styles.nav}>
          <Nav locale={locale} />
        </div>

        <div className={styles.actions}>
          <LanguageSwitcher locale={locale} />
          <Button href={hrefOrDefault('kontakt', locale)} className={styles.cta}>
            {ui.cta}
            <span className={styles.pfeil} aria-hidden="true">
              →
            </span>
          </Button>
        </div>
      </div>
    </header>
  )
}
