'use client'

import { usePathname } from 'next/navigation'

import { localeName, localeShort, isLocale, type Locale } from '@/i18n/config'
import {
  isPublished,
  localesWithPages,
  pageKeyFromSlug,
  switchLocalePath,
} from '@/i18n/routes'
import { getUi } from '@/i18n/messages/ui'

import styles from './LanguageSwitcher.module.css'

/**
 * Sprachwahl.
 *
 * Gezeigt werden **nur Sprachen, die es gibt**. Bis zum 09.09.2026 standen alle
 * drei da, die unfertigen ausgegraut — die Mehrsprachigkeit sollte erkennbar
 * sein. Auf einer Seite, die kurz vor dem Livegang steht, liest sich das
 * anders: als zwei Versprechen, die nicht eingeloest sind.
 *
 * Solange nur Deutsch vorliegt, entfaellt die Sprachwahl darum ganz. Eine
 * Auswahl mit einem einzigen Eintrag ist keine Auswahl. Sobald FR oder PT
 * veroeffentlicht sind, erscheint sie von selbst wieder — es braucht keine
 * Aenderung an dieser Datei, nur `published` in `routes.ts`.
 *
 * Der Wechsel fuehrt auf dieselbe Seite in der Zielsprache. Gibt es sie dort
 * noch nicht, fuehrt er auf deren Startseite.
 */

type Props = {
  locale: Locale
}

export function LanguageSwitcher({ locale }: Props) {
  const pathname = usePathname()
  const ui = getUi(locale)

  // Aktuellen Seitenschluessel aus dem Pfad ableiten: /de/versicherungen/ -> versicherungen
  const segments = pathname.split('/').filter(Boolean)
  const [first, ...rest] = segments
  const currentLocale = first && isLocale(first) ? first : locale
  const activePage = pageKeyFromSlug(currentLocale, rest) ?? 'home'

  // Eine Sprachwahl mit einem Eintrag waere ein Bedienelement ohne Aufgabe.
  const sprachen = localesWithPages()
  if (sprachen.length < 2) return null

  return (
    <nav className={styles.wrapper} aria-label={ui.language.choose}>
      <ul className={styles.list} role="list">
        {sprachen.map((candidate) => {
          const current = candidate === locale
          // Verfuegbar ist eine Sprache, sobald es diese Seite dort gibt —
          // nicht erst, wenn die ganze Sprachfassung steht.
          const available =
            isPublished(activePage, candidate) || isPublished('home', candidate)

          if (!available) {
            return (
              <li key={candidate}>
                <span className={styles.unavailable} lang={candidate}>
                  <span aria-hidden="true">{localeShort[candidate]}</span>
                  <span className="ac-visually-hidden">
                    {localeName[candidate]} — {ui.language.notAvailable}
                  </span>
                </span>
              </li>
            )
          }

          return (
            <li key={candidate}>
              <a
                className={styles.item}
                href={switchLocalePath(activePage, candidate)}
                lang={candidate}
                hrefLang={candidate}
                aria-current={current ? 'true' : undefined}
              >
                <span aria-hidden="true">{localeShort[candidate]}</span>
                <span className="ac-visually-hidden">{localeName[candidate]}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
