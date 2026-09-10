import Image from 'next/image'

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
 * **Seit dem 10.09.2026 nach Ricardos Referenzgrafik** (`bilder-quelle/`,
 * Vorlage `footer.png`). Vier Spalten statt drei — Rechtliches und Register
 * standen bis dahin in derselben — dazu das gelieferte Hintergrundbild, feine
 * Trennlinien und eine Schlusszeile mit Copyright und Zusatz.
 *
 * Alle Masse stammen aus der Vorlage, nicht aus dem Gefuehl: Die senkrechten
 * Trennlinien liegen dort bei 31.2, 50.0 und 68.8 Prozent der Breite, die
 * Spalten stehen also im Verhaeltnis 1.33 : 1 : 1 : 1.33. Der gruene Strich
 * unter den Spaltentiteln misst 42 von 1916 px und beginnt buendig mit dem
 * Titel.
 *
 * Die Leistungen stehen in der verbindlichen Rangfolge: Versicherungen,
 * Treuhand, Finanzplanung. Steuern steht als vierter Eintrag dabei, obwohl
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
 *
 * **Vier Bilder aus dem Auftrag fehlen** (Standort-Pin, Telefonhoerer,
 * Briefsymbol, gruener Chevron). Sie lagen am 10.09.2026 nicht im
 * Assets-Ordner. Nichts davon wird nachgezeichnet oder aus einer Bibliothek
 * geholt — die Zeilen und Links stehen bis zur Lieferung ohne Symbol. Wo sie
 * hingehoeren, steht unten im Markup vermerkt.
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

  /* Das Jahr kommt aus dem Bau, nicht aus einer Zahl im Code — sonst steht
     hier im naechsten Januar eine falsche Angabe. */
  const jahr = new Date().getFullYear()

  return (
    <footer className={`${styles.footer} on-navy`}>
      {/* Das gelieferte Hintergrundbild. Es haengt unten und behaelt sein
          Seitenverhaeltnis; die oberen drei Pixel — die gruene Linie der
          Datei — schneidet der Rahmen ab, weil dieselbe Linie schon als
          Rand des Fussbereichs steht und sie sonst doppelt laege. */}
      <div className={styles.hintergrund} aria-hidden="true">
        <Image
          className={styles.hintergrundBild}
          src="/bilder/dunkelblaue_minimalismus_landschaft_mit_gruener_linie.webp"
          alt=""
          width={1600}
          height={686}
          sizes="100vw"
        />
      </div>

      <div className={styles.inner}>
        <div className={`ac-container ${styles.spalten}`}>
          {/* ---- 1 Unternehmen und Kontakt ------------------------------- */}
          <div className={styles.spalte}>
            <Logo
              locale={locale}
              variant="negativ"
              width={280}
              className={styles.logo}
            />

            <address className={styles.address}>
              <span className={styles.companyName}>{company.legalName}</span>

              {/* Die drei Zeilen tragen in der Vorlage je ein Symbol links.
                  Die Dateien fehlen — bis sie da sind, steht hier der Text
                  allein. */}
              <span className={styles.kontaktZeile}>
                <span>
                  {buero.street}
                  <br />
                  {buero.postalCode} {buero.city}
                </span>
              </span>

              <span className={styles.kontaktZeile}>
                <a href={`tel:${company.phoneE164}`}>
                  <span className="ac-visually-hidden">{ui.footer.phone}: </span>
                  {company.phone}
                </a>
              </span>

              <span className={styles.kontaktZeile}>
                <a href={`mailto:${company.email}`}>
                  <span className="ac-visually-hidden">{ui.footer.email}: </span>
                  {company.email}
                </a>
              </span>
            </address>
          </div>

          {/* ---- 2 Leistungen -------------------------------------------- */}
          <nav
            className={`${styles.spalte} ${styles.getrennt}`}
            aria-label={ui.footer.servicesHeading}
          >
            <h2 className={styles.spaltenTitel}>{ui.footer.servicesHeading}</h2>
            <ul className={styles.linkListe} role="list">
              {leistungen.map((key) => (
                <li key={key}>
                  {/* Rechts vom Text gehoert in der Vorlage ein gruener
                      Chevron. Die Datei fehlt. */}
                  <a href={path(key, locale)}>{ui.page[key]}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ---- 3 Rechtliches ------------------------------------------- */}
          <div className={`${styles.spalte} ${styles.getrennt}`}>
            <h2 className={styles.spaltenTitel}>{ui.footer.legalHeading}</h2>

            {legal.length > 0 && (
              <ul className={styles.linkListe} role="list">
                {legal.map((key) => (
                  <li key={key}>
                    <a href={path(key, locale)}>{ui.page[key]}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* ---- 4 Regulatorisches --------------------------------------- */}
          <div className={`${styles.spalte} ${styles.getrennt}`}>
            <h2 className={styles.spaltenTitel}>{ui.footer.registryHeading}</h2>

            <dl className={styles.register}>
              <dt>{ui.footer.uid}</dt>
              <dd>{company.uid}</dd>
              <dt>{ui.footer.finma}</dt>
              <dd>{company.finmaCompany}</dd>
            </dl>
          </div>
        </div>

        {/* ---- Schlusszeile ---------------------------------------------- */}
        <div className={`ac-container ${styles.schluss}`}>
          <p className={styles.copyright}>
            © {jahr} {company.legalName}
            <span className={styles.trenner} aria-hidden="true">
              |
            </span>
            {ui.footer.rightsReserved}
          </p>

          <p className={styles.zusatz}>
            <span className={styles.zusatzStrich} aria-hidden="true" />
            {ui.footer.claim}
          </p>
        </div>
      </div>
    </footer>
  )
}
