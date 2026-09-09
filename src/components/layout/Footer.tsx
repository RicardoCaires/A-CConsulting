import { buero, company } from '@/lib/company'
import { getUi } from '@/i18n/messages/ui'
import { isPublished, legalNavOrder, path, type PageKey } from '@/i18n/routes'
import type { Locale } from '@/i18n/config'

import { Logo } from './Logo'
import styles from './Footer.module.css'

/**
 * Fussbereich — auf jeder Seite identisch.
 *
 * Er wiederholt die Hauptnavigation **nicht**. Bis Phase 1 stand hier eine
 * zweite vollstaendige Navigation mit fuenf Spalten und siebzehn Zielen; auf
 * dem Telefon war das 1445 px hoch und damit rund ein Fuenftel der Startseite.
 * Wer unten ankommt, braucht dort keine zweite Karte des Hauses, sondern die
 * Angaben, wegen derer man nach unten schaut: wer wir sind, wo wir sind, wie
 * man uns erreicht.
 *
 * Vier Gruppen, mehr nicht:
 *   Firma und Anschrift · Leistungen (drei) · Rechtliches · Register
 *
 * Die Leistungen stehen in der verbindlichen Rangfolge: Versicherungen,
 * Treuhand, Personal Finance. Steuern steht als vierter Eintrag dabei, obwohl
 * es seit dem Neuaufbau kein eigener Hauptpunkt mehr ist — die Seite gibt es,
 * sie wird gepflegt, und wer sie sucht, soll sie finden.
 *
 * Impressum und Datenschutz erscheinen erst, wenn es die Seiten gibt. Ein
 * Vermerk „folgt" steht hier nicht: In der Navigation hat er nichts verloren.
 *
 * Die persoenliche FINMA-Nummer gehoert nicht hierher, nur die des Unternehmens.
 *
 * Dies ist die grossflaechige Navy-Flaeche — sie traegt die Negativversion des
 * Logos, nie die Farbversion.
 */

type Props = {
  locale: Locale
}

/** Die Leistungsbereiche, in der verbindlichen Rangfolge. */
const LEISTUNGEN: readonly PageKey[] = [
  'versicherungen',
  'treuhand',
  'personalFinance',
  'steuern',
]

export function Footer({ locale }: Props) {
  const ui = getUi(locale)

  const leistungen = LEISTUNGEN.filter((key) => isPublished(key, locale))
  const legal = legalNavOrder.filter((key) => isPublished(key, locale))

  return (
    <footer className={`${styles.footer} on-navy`}>
      <div className={`ac-container ${styles.inner}`}>
        <div className={styles.brand}>
          <Logo locale={locale} variant="negativ" width={140} />

          <address className={styles.address}>
            <span className={styles.companyName}>{company.legalName}</span>
            <span>{buero.street}</span>
            <span>
              {buero.postalCode} {buero.city}
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
        </div>

        <nav className={styles.column} aria-label={ui.footer.servicesHeading}>
          <h2 className={styles.columnTitle}>{ui.footer.servicesHeading}</h2>
          <ul className={styles.linkList} role="list">
            {leistungen.map((key) => (
              <li key={key}>
                <a href={path(key, locale)}>{ui.page[key]}</a>
              </li>
            ))}
          </ul>
        </nav>

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
      </div>
    </footer>
  )
}
