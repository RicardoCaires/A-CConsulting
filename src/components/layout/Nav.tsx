'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

import { Icon } from '@/components/ui/Icon'
import { mainNavWithChildren, navChildHref, path, type NavChild } from '@/i18n/routes'
import { getUi } from '@/i18n/messages/ui'
import type { Locale } from '@/i18n/config'

import styles from './Nav.module.css'

/**
 * Hauptnavigation — auf jeder Seite dieselbe.
 *
 * Jeder Hauptpunkt ausser der Startseite traegt ein Aufklappmenue mit seinen
 * Unterkategorien. Ein Unterpunkt fuehrt entweder auf eine eigene Seite oder
 * auf einen Abschnitt der uebergeordneten Seite. Was es noch nirgends gibt,
 * steht sichtbar da, ist aber nicht anklickbar — die Struktur ist vollstaendig
 * erkennbar, ohne dass ein Link ins Leere fuehrt.
 *
 * Die Liste steht zweimal im Markup: als offene Reihe fuer breite Fenster und
 * als aufklappbares Menue fuer schmale. Ein geschlossenes `<details>` blendet
 * seinen Inhalt aus, auch wenn CSS ihn anzeigen soll — eine einzige Liste waere
 * auf dem Desktop unsichtbar. Immer genau eine der beiden ist im Dokument.
 *
 * Ohne JavaScript funktioniert alles: `<details>` klappt von sich aus auf.
 * Das Skript schliesst das Aufklappmenue zusaetzlich bei Escape und bei einem
 * Klick daneben.
 */

type Props = {
  locale: Locale
}

export function Nav({ locale }: Props) {
  const pathname = usePathname()
  const ui = getUi(locale)
  const wideRef = useRef<HTMLElement>(null)
  const narrowRef = useRef<HTMLElement>(null)

  // Aufgeklappte Menues schliessen, sobald daneben geklickt oder Escape
  // gedrueckt wird. Ohne das bliebe ein Dropdown offen stehen.
  useEffect(() => {
    const closeAll = (except?: EventTarget | null) => {
      for (const root of [wideRef.current, narrowRef.current]) {
        for (const details of root?.querySelectorAll('details[open]') ?? []) {
          if (except instanceof Node && details.contains(except)) continue
          details.removeAttribute('open')
        }
      }
    }

    const onPointerDown = (event: PointerEvent) => closeAll(event.target)
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeAll()
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  const entries = mainNavWithChildren(locale)
  if (entries.length === 0) return null

  const isCurrent = (href: string) => pathname === href || `${pathname}/` === href

  /** Ein Unterpunkt — Link, sobald es das Ziel gibt. */
  const child = (item: NavChild, index: number) => {
    const label = item.kind === 'page' ? ui.page[item.page] : ui.navSection[item.label]
    const href = navChildHref(item, locale)
    const key = item.kind === 'page' ? item.page : `${item.label}-${index}`

    return (
      <li key={key}>
        {href ? (
          <a
            className={styles.childItem}
            href={href}
            aria-current={isCurrent(href) ? 'page' : undefined}
          >
            {label}
          </a>
        ) : (
          <span className={styles.childPending}>
            {label}
            <span className={styles.badge}>{ui.pageComing.badge}</span>
            <span className="ac-visually-hidden"> {ui.pageComing.hint}</span>
          </span>
        )}
      </li>
    )
  }

  return (
    <>
      {/* ---- Breite Fenster: offene Reihe mit Aufklappmenue ----------
           Kontakt fehlt hier bewusst — er steht rechts als Knopf. Im
           Menue fuer schmale Fenster ist er weiterhin in der Liste. */}
      <nav className={styles.wide} aria-label={ui.nav.label} ref={wideRef}>
        <ul className={styles.wideList} role="list">
          {entries
            .filter((entry) => entry.page !== 'kontakt')
            .map((entry) => {
            const href = path(entry.page, locale)

            if (!entry.children) {
              return (
                <li key={entry.page}>
                  <a
                    className={styles.item}
                    href={href}
                    aria-current={isCurrent(href) ? 'page' : undefined}
                  >
                    {ui.page[entry.page]}
                  </a>
                </li>
              )
            }

            return (
              <li key={entry.page} className={styles.hasChildren}>
                <details className={styles.dropdown}>
                  <summary className={styles.item}>
                    {ui.page[entry.page]}
                    <Icon name="chevron" size={1} className={styles.chevron} />
                  </summary>

                  <div className={styles.panel}>
                    <ul className={styles.childList} role="list">
                      <li>
                        <a
                          className={styles.childItem}
                          href={href}
                          aria-current={isCurrent(href) ? 'page' : undefined}
                        >
                          {ui.page[entry.page]}
                        </a>
                      </li>
                      {entry.children.map(child)}
                    </ul>
                  </div>
                </details>
              </li>
              )
            })}
        </ul>
      </nav>

      {/* ---- Schmale Fenster: Menue mit sichtbarer Hierarchie -------- */}
      <nav className={styles.narrow} aria-label={ui.nav.label} ref={narrowRef}>
        <details className={styles.menu}>
          <summary className={styles.summary}>
            <span>{ui.nav.menu}</span>
            <span className={styles.summaryIcon} aria-hidden="true" />
          </summary>

          <div className={styles.narrowPanel}>
            <ul className={styles.narrowList} role="list">
              {entries.map((entry) => {
                const href = path(entry.page, locale)

                return (
                  <li key={entry.page}>
                    <a
                      className={styles.item}
                      href={href}
                      aria-current={isCurrent(href) ? 'page' : undefined}
                    >
                      {ui.page[entry.page]}
                    </a>

                    {entry.children && (
                      <ul className={styles.narrowChildren} role="list">
                        {entry.children.map(child)}
                      </ul>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </details>
      </nav>
    </>
  )
}
