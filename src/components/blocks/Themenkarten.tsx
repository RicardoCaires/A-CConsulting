import Image from 'next/image'

import { Button } from '@/components/ui/Button'
import { hatSichtbarenInhalt, RichText } from '@/components/ui/RichText'
import type { PageRef, Rich } from '@/content/types'
import type { Locale } from '@/i18n/config'
import { path } from '@/i18n/routes'

import styles from './Themenkarten.module.css'

/**
 * Drei gleich grosse Themenkarten, darunter eine Einladung.
 *
 * Heute auf `/treuhand/treuhaender-wechseln`: „Was einen Wechsel ausloesen
 * kann". Nach Ricardos HTML-Vorlage vom 14.09.2026
 * (`bilder-quelle/wechsel_gruende/vorlage.html`): Kategoriezeile, Titel, ein
 * Satz, drei Karten mit Piktogramm oben, kleiner Versalzeile, Ueberschrift und
 * Text; darunter eine Leiste mit einem Satz und dem gruenen Knopf.
 *
 * **Alle drei Karten sind gleich gross**: Das Raster setzt
 * `grid-auto-rows: 1fr`, die Karte streckt sich darin.
 *
 * Der Knopf ist der gruene der Startseite (`Button variant="akzent"`). Sein
 * Ziel kommt ueber `path()` aus der Pfad-Registry, nicht als Zeichenkette —
 * Ricardos Vorlage schreibt dort die volle Adresse der Vorschau hinein.
 *
 * Der Baustein bringt seine Flaeche selbst mit und zaehlt beim
 * Flaechenwechsel nicht mit.
 */

type Props = {
  id: string
  eyebrow?: string
  heading: string
  lead?: readonly Rich[]
  karten: readonly {
    /** Geliefertes Piktogramm, Dateiname unter `public/bilder/` ohne Endung. */
    bild: string
    tag: string
    titel: string
    text: Rich
  }[]
  abschluss?: { text: Rich; aktion: PageRef }
  locale: Locale
}

export function Themenkarten({
  id,
  eyebrow,
  heading,
  lead,
  karten,
  abschluss,
  locale,
}: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-titel`} className={styles.abschnitt}>
      <div className={`ac-container ${styles.container}`}>
        <div className={styles.kopf}>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <h2 id={`${id}-titel`} className={styles.titel}>
            {heading}
          </h2>
          {lead?.filter(hatSichtbarenInhalt).map((absatz, index) => (
            <p key={index} className={styles.lead}>
              <RichText value={absatz} />
            </p>
          ))}
        </div>

        <div className={styles.raster}>
          {karten.map((karte) => (
            <article key={karte.titel} className={styles.karte}>
              {/* Das Piktogramm ist Gestaltung, kein Inhalt. */}
              <Image
                className={styles.bild}
                src={`/bilder/${karte.bild}.svg`}
                alt=""
                width={96}
                height={96}
                unoptimized
              />
              <p className={styles.tag}>{karte.tag}</p>
              <h3 className={styles.kartenTitel}>{karte.titel}</h3>
              <p className={styles.satz}>
                <RichText value={karte.text} />
              </p>
            </article>
          ))}
        </div>

        {abschluss && (
          <div className={styles.einladung}>
            <p className={styles.einladungText}>
              <RichText value={abschluss.text} />
            </p>
            <Button
              className={styles.knopf}
              variant="akzent"
              href={path(abschluss.aktion.target, locale)}
            >
              {abschluss.aktion.label}
              <span className={styles.pfeil} aria-hidden="true">
                →
              </span>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
