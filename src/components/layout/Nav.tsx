'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/Button'
import { hrefOrDefault, isPublished, mainNavItems, path, type NavItem } from '@/i18n/routes'
import { getUi } from '@/i18n/messages/ui'
import type { Locale } from '@/i18n/config'

import styles from './Nav.module.css'

/**
 * Hauptnavigation — auf jeder Seite dieselbe.
 *
 * Fuenf Punkte, flach. Keine Aufklappebene, kein Mega-Menue: Wer oben ankommt,
 * soll fuenf Woerter lesen und sich entscheiden. Die frueheren Unterpunkte
 * stehen auf der jeweiligen Bereichsseite und im Fussbereich.
 *
 * Ein Punkt, dessen Seite es noch nicht gibt, steht sichtbar da und traegt den
 * Vermerk „folgt" — er ist nicht anklickbar. Die Struktur ist damit
 * vollstaendig erkennbar, ohne dass ein Link ins Leere fuehrt.
 *
 * Die Liste steht zweimal im Markup: als offene Reihe fuer breite Fenster und
 * als aufklappbares Menue fuer schmale. Ein geschlossenes `<details>` blendet
 * seinen Inhalt aus, auch wenn CSS ihn anzeigen soll — eine einzige Liste
 * waere auf dem Desktop unsichtbar. Immer genau eine der beiden ist sichtbar.
 *
 * Ohne JavaScript funktioniert alles: `<details>` klappt von sich aus auf. Das
 * Skript schliesst das Menue zusaetzlich bei Escape, bei einem Klick daneben
 * und nach einem Seitenwechsel.
 */

type Props = {
  locale: Locale
}

export function Nav({ locale }: Props) {
  const pathname = usePathname()
  const ui = getUi(locale)
  const menuRef = useRef<HTMLDetailsElement>(null)

  // Menue schliessen, sobald daneben geklickt oder Escape gedrueckt wird.
  useEffect(() => {
    const close = (except?: EventTarget | null) => {
      const menu = menuRef.current
      if (!menu?.open) return
      if (except instanceof Node && menu.contains(except)) return
      menu.removeAttribute('open')
    }

    const onPointerDown = (event: PointerEvent) => close(event.target)
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  // Nach einem Seitenwechsel bleibt das Menue sonst offen stehen.
  useEffect(() => {
    menuRef.current?.removeAttribute('open')
  }, [pathname])

  const items = mainNavItems(locale)
  const isCurrent = (href: string) => pathname === href || `${pathname}/` === href

  /** Ein Punkt — Link, sobald es die Seite gibt. */
  const eintrag = ({ page, href }: NavItem) => (
    <li key={page}>
      {href ? (
        <a className={styles.item} href={href} aria-current={isCurrent(href) ? 'page' : undefined}>
          {ui.page[page]}
        </a>
      ) : (
        <span className={`${styles.item} ${styles.pending}`}>
          {ui.page[page]}
          <span className={styles.badge}>{ui.pageComing.badge}</span>
          <span className="ac-visually-hidden"> {ui.pageComing.hint}</span>
        </span>
      )}
    </li>
  )

  return (
    <>
      {/* ---- Breite Fenster: offene Reihe ------------------------------- */}
      <nav className={styles.wide} aria-label={ui.nav.label}>
        <ul className={styles.wideList} role="list">
          {items.map(eintrag)}
        </ul>
      </nav>

      {/* ---- Schmale Fenster: Menue ------------------------------------- */}
      <nav className={styles.narrow} aria-label={ui.nav.label}>
        <details className={styles.menu} ref={menuRef}>
          <summary className={styles.summary}>
            <span className={styles.summaryText}>{ui.nav.menu}</span>
            <span className={styles.burger} aria-hidden="true" />
          </summary>

          <div className={styles.panel}>
            <ul className={styles.narrowList} role="list">
              {items.map(eintrag)}
              {/* Kontakt steht auf dem Desktop als Knopf rechts. Hier gehoert
                  er in die Liste — sonst waere er im Menue nicht zu finden. */}
              {eintrag({
                page: 'kontakt',
                href: isPublished('kontakt', locale) ? path('kontakt', locale) : null,
                inVorbereitung: false,
              })}
            </ul>

            <Button href={hrefOrDefault('kontakt', locale)} className={styles.panelCta}>
              {ui.cta}
            </Button>
          </div>
        </details>
      </nav>
    </>
  )
}
