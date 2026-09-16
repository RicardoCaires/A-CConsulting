import Image from 'next/image'

import type { Locale } from '@/i18n/config'
import { isPublished, path, type PageKey } from '@/i18n/routes'

import styles from './ZielgruppenKarten.module.css'

/**
 * Steuererklaerungen nach Zielgruppe — heute auf `/steuern`.
 *
 * **Seit dem 16.09.2026 nach Ricardos HTML-Vorlage**
 * (`steuern-zielgruppen-neu.html`): Kategoriezeile und Titel links, Einleitung
 * rechts, darunter zwei gleich grosse Karten — „Für Privatpersonen" und „Für
 * Selbständige & Unternehmen". Je Karte ein grosses Zielgruppen-Piktogramm,
 * Titel, ein Satz, drei Schritte mit eigenem Piktogramm, durch feine Linien
 * getrennt, und ein gruener Textlink am Fuss. Darunter zentriert der Hinweis
 * zum Kanton Bern.
 *
 * **Jede Karte behaelt ihren Anker** (`privatpersonen`, `firmen`) — `#firmen`
 * ist von der Kachel „Steuerberatung" auf `/treuhand` verlinkt.
 *
 * **Beim Darueberfahren und bei Tastaturfokus wird die ganze Karte navy.** Der
 * Fokus landet auf dem Textlink; `:focus-within` faerbt die Karte mit.
 *
 * Ein Link auf eine andere Seite wird nur dann zum Link, wenn sie
 * veroeffentlicht ist. Ein reiner Anker zeigt auf einen Abschnitt derselben
 * Seite.
 */

type Schritt = { bild: string; titel: string; text: string }

type Karte = {
  /** Wird zum Anker — `privatpersonen`, `firmen`. */
  id: string
  bild: string
  heading: string
  einleitung: string
  schritte: readonly Schritt[]
  link?: { label: string; ziel?: PageKey; anker?: string }
}

type Props = {
  kopf?: { eyebrow: string; heading: string; lead: string }
  karten: readonly Karte[]
  hinweis?: string
  locale: Locale
}

const bildPfad = (datei: string) => `/bilder/${datei.includes('.') ? datei : `${datei}.webp`}`

function ziel(link: NonNullable<Karte['link']>, locale: Locale): string | null {
  const anker = link.anker ? `#${link.anker}` : ''
  if (link.ziel) return isPublished(link.ziel, locale) ? `${path(link.ziel, locale)}${anker}` : null
  return anker || null
}

export function ZielgruppenKarten({ kopf, karten, hinweis, locale }: Props) {
  return (
    <div className={styles.flaeche}>
      <div className="ac-container">
        {kopf && (
          <div className={styles.kopf}>
            <div>
              <p className={styles.eyebrow}>{kopf.eyebrow}</p>
              <h2 className={styles.titel}>{kopf.heading}</h2>
            </div>
            <p className={styles.lead}>{kopf.lead}</p>
          </div>
        )}

        <div className={styles.raster}>
          {karten.map((karte) => {
            const href = karte.link ? ziel(karte.link, locale) : null
            return (
              <section
                key={karte.id}
                id={karte.id}
                aria-labelledby={`${karte.id}-titel`}
                className={styles.karte}
              >
                <div className={styles.kartenKopf}>
                  {/* Gestaltung, kein Inhalt: Was die Karte meint, sagt ihr Titel. */}
                  <Image
                    className={styles.zielgruppe}
                    src={bildPfad(karte.bild)}
                    alt=""
                    width={512}
                    height={512}
                    unoptimized
                  />
                  <div>
                    <h3 id={`${karte.id}-titel`} className={styles.kartenTitel}>
                      {karte.heading}
                    </h3>
                    <p className={styles.einleitung}>{karte.einleitung}</p>
                  </div>
                </div>

                <ul className={styles.schritte} role="list">
                  {karte.schritte.map((schritt) => (
                    <li key={schritt.titel} className={styles.schritt}>
                      <Image
                        className={styles.symbol}
                        src={bildPfad(schritt.bild)}
                        alt=""
                        width={512}
                        height={512}
                        unoptimized
                      />
                      <span>
                        <strong className={styles.schrittTitel}>{schritt.titel}</strong>
                        <span className={styles.schrittText}>{schritt.text}</span>
                      </span>
                    </li>
                  ))}
                </ul>

                {karte.link && href && (
                  <a className={styles.link} href={href}>
                    {karte.link.label}
                    <span aria-hidden="true"> →</span>
                  </a>
                )}
              </section>
            )
          })}
        </div>

        {hinweis && <p className={styles.hinweis}>{hinweis}</p>}
      </div>
    </div>
  )
}
