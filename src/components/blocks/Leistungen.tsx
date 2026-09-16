import Image from 'next/image'

import type { Locale } from '@/i18n/config'
import { isPublished, path, type PageKey } from '@/i18n/routes'

import styles from './Leistungen.module.css'

/**
 * „Was wir uebernehmen" auf `/treuhand` — die Leistungen als Kachelraster.
 *
 * **Seit dem 16.09.2026 sechs gleich grosse Kacheln** nach Ricardos
 * Designreferenz: Piktogramm auf hellblauem Kreis, Ueberschrift, kurzer
 * gruener Strich, drei Stichpunkte. Desktop drei Spalten und zwei Reihen,
 * Tablet zwei, Telefon eine. Darunter ein kompakter Hinweis. Bis dahin sieben
 * Karten in zwei Spalten mit Symbol links und Satz daneben.
 *
 * **Alle Kacheln sind exakt gleich gross** (`grid-auto-rows: 1fr`), unabhaengig
 * davon, wie lang die Stichpunkte sind.
 *
 * **Der Grund ist hellblau**, auf Ricardos Vorgabe — dafuer setzt `PageBlocks`
 * `leistungenFlaeche` statt der zugewiesenen Flaeche, wie beim Vorgehen
 * darunter. Der Wechsel der Abschnitte darunter verschiebt sich nicht.
 *
 * **Verlinkt wird nur, was es gibt.** Eine Kachel wird zum Link, wenn ihre
 * Zielseite in dieser Sprache veroeffentlicht ist — sonst steht sie ohne Pfeil
 * da. Ein Pfeil, der ins Leere zeigt, waere ein Versprechen ohne Seite
 * dahinter. Sobald eine Seite veroeffentlicht wird, erscheint ihr Pfeil von
 * selbst. Der Link sitzt auf der Ueberschrift und deckt die ganze Kachel ab;
 * Vorlesewerkzeuge lesen als Linktext die Ueberschrift, nicht „Pfeil".
 *
 * Die Piktogramme sind geliefert und stehen unveraendert da: SVG, keine
 * Umfaerbung, kein Beschnitt — auch im Zustand beim Darueberfahren. Sie bringen
 * ihren hellblauen Kreis selbst mit; ringsum liegt in der Datei ein
 * transparenter Rand, den das Stylesheet ausgleicht.
 */

/** Hellblauer Grund des Abschnitts. `PageBlocks` setzt ihn statt der Flaeche. */
export const leistungenFlaeche = styles.flaeche

type Karte = {
  bild: string
  titel: string
  /** Die Stichpunkte der Kachel. */
  punkte: readonly string[]
  ziel?: PageKey
  anker?: string
}

type Props = {
  headingId?: string
  eyebrow: string
  heading: string
  lead: string
  karten: readonly Karte[]
  /** Der kompakte Hinweis unter den Kacheln. Optional. */
  hinweis?: { titel: string; text: string }
  locale: Locale
}

export function Leistungen({
  headingId,
  eyebrow,
  heading,
  lead,
  karten,
  hinweis,
  locale,
}: Props) {
  return (
    <div className={styles.leistungen}>
      <div className={styles.kopf}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 id={headingId} className={styles.titel}>
          {heading}
        </h2>
        <p className={styles.lead}>{lead}</p>
      </div>

      <ul className={styles.raster} role="list">
        {karten.map((karte) => {
          const href =
            karte.ziel && isPublished(karte.ziel, locale)
              ? `${path(karte.ziel, locale)}${karte.anker ? `#${karte.anker}` : ''}`
              : null

          return (
            <li key={karte.titel} className={styles.karte}>
              {/* Gestaltung, kein Inhalt: Was die Kachel meint, sagt ihr Titel. */}
              <Image
                className={styles.icon}
                src={`/bilder/treuhand/${karte.bild}.svg`}
                alt=""
                width={512}
                height={512}
                unoptimized
              />

              <h3 className={styles.kartenTitel}>
                {href ? (
                  <a className={styles.link} href={href}>
                    {karte.titel}
                    <span className={styles.pfeil} aria-hidden="true">
                      →
                    </span>
                  </a>
                ) : (
                  karte.titel
                )}
              </h3>

              <span className={styles.strich} aria-hidden="true" />

              <ul className={styles.punkte} role="list">
                {karte.punkte.map((punkt) => (
                  <li key={punkt} className={styles.punkt}>
                    {punkt}
                  </li>
                ))}
              </ul>
            </li>
          )
        })}
      </ul>

      {hinweis && (
        <p className={styles.hinweis}>
          <strong className={styles.hinweisTitel}>{hinweis.titel}</strong>
          <span className={styles.hinweisText}>{hinweis.text}</span>
        </p>
      )}
    </div>
  )
}
