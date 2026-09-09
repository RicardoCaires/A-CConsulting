'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/Button'
import {
  hrefOrDefault,
  isPublished,
  mainNavItems,
  navChildHref,
  path,
  type NavChild,
  type NavItem,
} from '@/i18n/routes'
import { getUi } from '@/i18n/messages/ui'
import type { Locale } from '@/i18n/config'

import styles from './Nav.module.css'

/**
 * Hauptnavigation — auf jeder Seite dieselbe.
 *
 * Vier Bereiche, jeder mit einem Untermenue. Am 07.09.2026 war die Navigation
 * flach gemacht worden; am 09.09.2026 kommen die Untermenues auf Ricardos
 * Wunsch zurueck.
 *
 * Aufgenommen wird nur, was existiert. Frueher standen dort auch angekuendigte
 * Seiten mit dem Vermerk „folgt" — fuenf davon liessen das Menue wie eine
 * Baustelle aussehen. Gefiltert wird in `routes.ts`, nicht hier: So kann eine
 * unfertige Seite gar nicht erst in ein Menue geraten.
 *
 * Ein Unterpunkt ist entweder eine eigene Seite oder ein Abschnitt der
 * Bereichsseite. Der zweite Fall ist kein Notbehelf — „Fuer Privatpersonen"
 * gehoert auf die Versicherungsseite, und ein Sprung dorthin fuehrt schneller
 * ans Ziel als eine eigene duenne Seite.
 *
 * Die Liste steht zweimal im Markup: als offene Reihe fuer breite Fenster und
 * als aufklappbares Menue fuer schmale. Ein geschlossenes `<details>` blendet
 * seinen Inhalt aus, auch wenn CSS ihn anzeigen soll — eine einzige Liste
 * waere auf dem Desktop unsichtbar. Immer genau eine der beiden ist sichtbar.
 *
 * Ohne JavaScript funktioniert alles: `<details>` klappt von sich aus auf. Das
 * Skript schliesst zusaetzlich bei Escape, bei einem Klick daneben und nach
 * einem Seitenwechsel.
 */

type Props = {
  locale: Locale
}

export function Nav({ locale }: Props) {
  const pathname = usePathname()
  const ui = getUi(locale)
  const wurzel = useRef<HTMLDivElement>(null)

  // Aufgeklappte Menues schliessen, sobald daneben geklickt oder Escape
  // gedrueckt wird. Betrifft das schmale Menue und die Untermenues oben.
  useEffect(() => {
    const schliessen = (ausser?: EventTarget | null) => {
      for (const details of wurzel.current?.querySelectorAll('details[open]') ?? []) {
        if (ausser instanceof Node && details.contains(ausser)) continue
        details.removeAttribute('open')
      }
    }

    const beiZeiger = (event: PointerEvent) => schliessen(event.target)
    const beiTaste = (event: KeyboardEvent) => {
      if (event.key === 'Escape') schliessen()
    }

    document.addEventListener('pointerdown', beiZeiger)
    document.addEventListener('keydown', beiTaste)
    return () => {
      document.removeEventListener('pointerdown', beiZeiger)
      document.removeEventListener('keydown', beiTaste)
    }
  }, [])

  // Nach einem Seitenwechsel bliebe sonst alles offen stehen.
  useEffect(() => {
    for (const details of wurzel.current?.querySelectorAll('details[open]') ?? []) {
      details.removeAttribute('open')
    }
  }, [pathname])

  const items = mainNavItems(locale)
  const istAktuell = (href: string) => pathname === href || `${pathname}/` === href

  /** Beschriftung eines Unterpunkts. */
  const kindLabel = (child: NavChild) =>
    child.kind === 'page' ? ui.page[child.page] : ui.navSection[child.label]

  /** Die Unterpunkte eines Bereichs, eingerueckt im schmalen Menue. */
  const kinder = (item: NavItem, klasse: string | undefined) => (
    <ul className={klasse} role="list">
      {item.children.map((child, index) => {
        const href = navChildHref(child, locale)
        if (!href) return null
        return (
          <li key={index}>
            <a className={styles.childItem} href={href}>
              {kindLabel(child)}
            </a>
          </li>
        )
      })}
    </ul>
  )

  /** Ein Hauptpunkt der offenen Reihe. Mit Unterpunkten wird er aufklappbar. */
  const weitEintrag = (item: NavItem) => {
    const inhalt = item.href ? (
      <a
        className={styles.item}
        href={item.href}
        aria-current={istAktuell(item.href) ? 'page' : undefined}
      >
        {ui.page[item.page]}
      </a>
    ) : (
      <span className={`${styles.item} ${styles.pending}`}>{ui.page[item.page]}</span>
    )

    if (item.children.length === 0) return <li key={item.page}>{inhalt}</li>

    return (
      <li key={item.page} className={styles.hasChildren}>
        <details className={styles.dropdown}>
          <summary className={styles.item}>
            <span
              className={
                item.href && istAktuell(item.href) ? styles.aktuell : undefined
              }
            >
              {ui.page[item.page]}
            </span>
            <span className={styles.chevron} aria-hidden="true" />
          </summary>

          <div className={styles.dropdownPanel}>
            {/* Der Bereich selbst steht als erster Eintrag — sonst waere die
                Uebersichtsseite aus dem Menue heraus nicht erreichbar. */}
            <ul className={styles.childList} role="list">
              {item.href && (
                <li>
                  <a className={`${styles.childItem} ${styles.childLead}`} href={item.href}>
                    {ui.page[item.page]}
                  </a>
                </li>
              )}
              {item.children.map((child, index) => {
                const href = navChildHref(child, locale)
                if (!href) return null
                return (
                  <li key={index}>
                    <a className={styles.childItem} href={href}>
                      {kindLabel(child)}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </details>
      </li>
    )
  }

  /** Ein Hauptpunkt im schmalen Menue. Unterpunkte stehen eingerueckt darunter. */
  const schmalEintrag = (item: NavItem) => (
    <li key={item.page}>
      {item.href ? (
        <a
          className={styles.item}
          href={item.href}
          aria-current={istAktuell(item.href) ? 'page' : undefined}
        >
          {ui.page[item.page]}
        </a>
      ) : (
        <span className={`${styles.item} ${styles.pending}`}>{ui.page[item.page]}</span>
      )}
      {item.children.length > 0 && kinder(item, styles.narrowChildren)}
    </li>
  )

  return (
    <div ref={wurzel} className={styles.wurzel}>
      {/* ---- Breite Fenster: offene Reihe mit Untermenues ---------------- */}
      <nav className={styles.wide} aria-label={ui.nav.label}>
        <ul className={styles.wideList} role="list">
          {items.map(weitEintrag)}
        </ul>
      </nav>

      {/* ---- Schmale Fenster: ein Menue --------------------------------- */}
      <nav className={styles.narrow} aria-label={ui.nav.label}>
        <details className={styles.menu}>
          <summary className={styles.summary}>
            <span className={styles.summaryText}>{ui.nav.menu}</span>
            <span className={styles.burger} aria-hidden="true" />
          </summary>

          <div className={styles.panel}>
            <ul className={styles.narrowList} role="list">
              {items.map(schmalEintrag)}
              {/* Kontakt steht auf dem Desktop als Knopf rechts. Hier gehoert
                  er in die Liste — sonst waere er im Menue nicht zu finden. */}
              {schmalEintrag({
                page: 'kontakt',
                href: isPublished('kontakt', locale) ? path('kontakt', locale) : null,
                children: [],
              })}
            </ul>

            <Button href={hrefOrDefault('kontakt', locale)} className={styles.panelCta}>
              {ui.cta}
            </Button>
          </div>
        </details>
      </nav>
    </div>
  )
}
