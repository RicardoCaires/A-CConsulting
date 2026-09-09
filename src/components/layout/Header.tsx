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
 * Zwei Anordnungen aus **einem** Markup, gesetzt ueber ein Raster:
 *
 *   schmal   Logo · Menue · Sprachwahl        — eine Zeile
 *   breit    Logo mittig, Sprachwahl und      — zwei Zeilen
 *            Knopf rechts; darunter die
 *            Kategorien, ebenfalls mittig
 *
 * Die breite Fassung stammt vom 09.09.2026. Vorher stand das Logo links und
 * die Kategorien rechts daneben — mit fuenf Punkten, Sprachwahl und Knopf war
 * die Zeile voll, und die Kategorien liefen bei rund 1280 px ueber die
 * Wortmarke. Zwei Zeilen loesen das nicht durch einen Kniff, sondern weil
 * Logo und Navigation nicht mehr um dieselbe Zeile konkurrieren. Beide haben
 * die ganze Breite; das Logo darf darum groesser stehen.
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
          </Button>
        </div>
      </div>
    </header>
  )
}
