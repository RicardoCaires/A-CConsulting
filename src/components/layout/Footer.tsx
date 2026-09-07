import { company } from '@/lib/company'
import { getUi } from '@/i18n/messages/ui'
import {
  isPublished,
  legalNavOrder,
  mainNavTree,
  navChildHref,
  path,
  type NavChild,
  type PageKey,
} from '@/i18n/routes'
import type { Locale } from '@/i18n/config'

import { Logo } from './Logo'
import styles from './Footer.module.css'

/**
 * Fussbereich — auf jeder Seite identisch.
 *
 * Bildet dieselbe Hierarchie ab wie der Kopfbereich, damit die Struktur nicht
 * an zwei Stellen gepflegt werden muss: Die Spalten kommen aus `mainNavTree`.
 * Wer unten auf einer langen Seite ankommt, kommt von dort ueberallhin.
 *
 * Dazu die Pflichtangaben. Die persoenliche FINMA-Nummer gehoert nicht hierher.
 *
 * Dies ist die grossflaechige Navy-Flaeche — sie traegt die Negativversion des
 * Logos, nie die Farbversion.
 */

type Props = {
  locale: Locale
}

export function Footer({ locale }: Props) {
  const ui = getUi(locale)

  /** Ein Unterpunkt — nur verlinkt, wenn es das Ziel gibt. */
  const childLink = (item: NavChild, index: number) => {
    const label = item.kind === 'page' ? ui.page[item.page] : ui.navSection[item.label]
    const href = navChildHref(item, locale)
    const key = item.kind === 'page' ? item.page : `${item.label}-${index}`

    return (
      <li key={key}>
        {href ? <a href={href}>{label}</a> : <span className={styles.pending}>{label}</span>}
      </li>
    )
  }

  /** Eine Spalte je Hauptbereich. */
  const column = (page: PageKey, children: readonly NavChild[] | undefined, title?: string) => {
    if (!isPublished(page, locale)) return null

    return (
      <div className={styles.column} key={page}>
        <h2 className={styles.columnTitle}>
          <a href={path(page, locale)}>{title ?? ui.page[page]}</a>
        </h2>
        {children && children.length > 0 && (
          <ul className={styles.linkList} role="list">
            {children.map(childLink)}
          </ul>
        )}
      </div>
    )
  }

  const versicherungen = mainNavTree.find((e) => e.page === 'versicherungen')
  const treuhand = mainNavTree.find((e) => e.page === 'treuhand')
  const ueberUns = mainNavTree.find((e) => e.page === 'ueberUns')
  const kontakt = mainNavTree.find((e) => e.page === 'kontakt')
  const legal = legalNavOrder.filter((key) => isPublished(key, locale))

  return (
    <footer className={`${styles.footer} on-navy`}>
      <div className={`ac-container ${styles.inner}`}>
        <div className={styles.brand}>
          <Logo locale={locale} variant="negativ" width={140} />
          <p className={styles.role}>{ui.footer.roleNote}</p>

          <address className={styles.address}>
            <span className={styles.companyName}>{company.legalName}</span>
            <span>{company.address.street}</span>
            <span>
              {company.address.postalCode} {company.address.city}
            </span>
            <a href={`tel:${company.phoneE164}`}>
              <span className="ac-visually-hidden">{ui.footer.phone}: </span>
              {company.phone}
            </a>
            <a href={`mailto:${company.email}`}>
              <span className="ac-visually-hidden">{ui.footer.email}: </span>
              {company.email}
            </a>
          </address>

          <p className={styles.languages}>{ui.language.spokenNote}</p>
        </div>

        <nav className={styles.columns} aria-label={ui.nav.label}>
          {column('versicherungen', versicherungen?.children)}
          {column('treuhand', treuhand?.children)}
          {/* Die Spalte heisst „Unternehmen", fuehrt aber auf „Über uns". */}
          {column('ueberUns', ueberUns?.children, ui.footer.companyHeading)}
          {column('kontakt', kontakt?.children)}

          <div className={styles.column}>
            <h2 className={styles.columnTitle}>{ui.footer.legalHeading}</h2>
            {legal.length > 0 && (
              <ul className={styles.linkList} role="list">
                {legal.map((key) => (
                  <li key={key}>
                    <a href={path(key, locale)}>{ui.page[key]}</a>
                  </li>
                ))}
              </ul>
            )}
            <dl className={styles.registry}>
              <dt>{ui.footer.uid}</dt>
              <dd>{company.uid}</dd>
              <dt>{ui.footer.finma}</dt>
              <dd>{company.finmaCompany}</dd>
            </dl>
          </div>
        </nav>
      </div>
    </footer>
  )
}
