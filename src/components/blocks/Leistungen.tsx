import Image from 'next/image'

import type { Locale } from '@/i18n/config'
import { isPublished, path, type PageKey } from '@/i18n/routes'

import styles from './Leistungen.module.css'

/**
 * „Was wir uebernehmen" auf `/treuhand` — die Leistungen als Kartenraster.
 *
 * Nach Ricardos Referenzgrafik vom 11.09.2026: Kategoriezeile mit gruenem
 * Strich, grosser Titel, Einleitung, darunter zwei Spalten mit weissen Karten.
 * Je Karte links das gelieferte Symbol, daneben Titel und Satz, rechts ein
 * kleiner Pfeil. Bis dahin ein `subsections`-Block aus reinem Text.
 *
 * **Der Abschnitt bleibt in der Flaechenfolge der Seite.** Er wird ueber den
 * normalen Weg in `PageBlocks` ausgegeben und bekommt dieselbe Flaeche wie
 * vorher. Die Abschnitte darunter behalten damit ihren Grund.
 *
 * **Verlinkt wird nur, was es gibt.** Eine Karte wird zum Link, wenn ihre
 * Zielseite in dieser Sprache veroeffentlicht ist — sonst steht sie ohne Pfeil
 * da. Ein Pfeil, der ins Leere zeigt, waere ein Versprechen ohne Seite
 * dahinter. Sobald eine Seite veroeffentlicht wird, erscheint ihr Pfeil von
 * selbst.
 *
 * Der Link liegt auf dem Titel und deckt die ganze Karte ab. So ist die
 * Trefferflaeche gross, und Vorlesewerkzeuge lesen als Linktext den Titel —
 * nicht „Pfeil".
 *
 * Die sieben Symbole sind geliefert und stehen unveraendert da: SVG, keine
 * Umfaerbung, kein Beschnitt. Sie bringen ihren hellen Kreis selbst mit; ringsum
 * liegt in der Datei ein transparenter Rand, den das Stylesheet ausgleicht.
 */

type Karte = {
  bild: string
  titel: string
  satz: string
  ziel?: PageKey
  anker?: string
}

type Props = {
  headingId?: string
  eyebrow: string
  heading: string
  lead: string
  karten: readonly Karte[]
  locale: Locale
}

export function Leistungen({ headingId, eyebrow, heading, lead, karten, locale }: Props) {
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
            <li
              key={karte.titel}
              className={href ? `${styles.karte} ${styles.verlinkt}` : styles.karte}
            >
              {/* Gestaltung, kein Inhalt: Was die Karte meint, sagt ihr Titel. */}
              <Image
                className={styles.icon}
                src={`/bilder/treuhand/${karte.bild}.svg`}
                alt=""
                width={512}
                height={512}
                unoptimized
              />

              <div className={styles.inhalt}>
                <h3 className={styles.kartenTitel}>
                  {href ? (
                    <a className={styles.link} href={href}>
                      {karte.titel}
                    </a>
                  ) : (
                    karte.titel
                  )}
                </h3>
                <p className={styles.satz}>{karte.satz}</p>
              </div>

              {href && (
                <span className={styles.pfeil} aria-hidden="true">
                  →
                </span>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
