import Image from 'next/image'

import { PageLink } from '@/components/ui/PageLink'
import { hatSichtbarenInhalt, RichText } from '@/components/ui/RichText'
import type { PageRef, Rich } from '@/content/types'
import type { Locale } from '@/i18n/config'
import { isPublished, path } from '@/i18n/routes'

import styles from './ZielgruppenKarten.module.css'

/**
 * Zielgruppen als grosse Karten auf gemeinsamer Flaeche — heute auf
 * `/steuern`: „Für Privatpersonen" und „Für Selbständige und Firmen".
 *
 * Nach Ricardos Referenzgrafik vom 11.09.2026: je Karte links Titel mit
 * gruenem Strich, Absaetze und gegebenenfalls ein Link mit Pfeil; rechts,
 * durch eine feine Linie getrennt, entweder Merkmale mit Symbol oder ein
 * getoenter Hinweis. Beide Karten liegen auf dem gelieferten Hintergrund.
 *
 * **Jede Karte behaelt ihren Anker** (`privatpersonen`, `firmen`) — `#firmen`
 * ist von der Karte „Steuern für Firmen" auf `/treuhand` verlinkt.
 *
 * Der Baustein bringt seine Flaeche selbst mit und zaehlt beim
 * Flaechenwechsel nicht mit. Er ersetzt zwei Abschnitte; der Wechsel darunter
 * bleibt damit, wie er war.
 *
 * Die Symbole sind geliefert und auf ihren Kreis zugeschnitten; sie liegen als
 * `/bilder/<bild>.webp`. Ein Link wird nur dann zum Link, wenn seine Zielseite
 * veroeffentlicht ist — sonst steht er mit dem Vermerk „folgt".
 */

type Merkmal = { bild: string; titel: string; satz: string }

type Karte = {
  id: string
  heading: string
  paragraphs: readonly Rich[]
  links?: readonly PageRef[]
  merkmale?: readonly Merkmal[]
  hinweis?: Merkmal
}

type Props = {
  hintergrund?: string
  karten: readonly Karte[]
  locale: Locale
}

const bildPfad = (datei: string) => `/bilder/${datei}.webp`

function Symbol({ bild }: { bild: string }) {
  return (
    <Image
      className={styles.symbol}
      src={bildPfad(bild)}
      alt=""
      width={256}
      height={256}
      unoptimized
    />
  )
}

export function ZielgruppenKarten({ hintergrund, karten, locale }: Props) {
  return (
    <div
      className={styles.flaeche}
      style={hintergrund ? { backgroundImage: `url(${bildPfad(hintergrund)})` } : undefined}
    >
      <div className={`ac-container ${styles.container}`}>
        {karten.map((karte) => (
          <section
            key={karte.id}
            id={karte.id}
            aria-labelledby={`${karte.id}-titel`}
            className={styles.karte}
          >
            <div className={styles.text}>
              <h2 id={`${karte.id}-titel`} className={styles.titel}>
                {karte.heading}
              </h2>

              {karte.paragraphs.filter(hatSichtbarenInhalt).map((absatz, index) => (
                <p key={index} className={styles.absatz}>
                  <RichText value={absatz} />
                </p>
              ))}

              {karte.links?.map((link) =>
                isPublished(link.target, locale) ? (
                  <a
                    key={`${link.target}-${link.label}`}
                    className={styles.link}
                    href={path(link.target, locale)}
                  >
                    <span className={styles.linkText}>{link.label}</span>
                    <span className={styles.pfeil} aria-hidden="true">
                      →
                    </span>
                  </a>
                ) : (
                  <p key={`${link.target}-${link.label}`} className={styles.absatz}>
                    <PageLink target={link.target} label={link.label} locale={locale} />
                  </p>
                ),
              )}
            </div>

            {(karte.merkmale || karte.hinweis) && (
              <div className={styles.seite}>
                {karte.merkmale && (
                  <ul className={styles.merkmale} role="list">
                    {karte.merkmale.map((merkmal) => (
                      <li key={merkmal.titel} className={styles.merkmal}>
                        <Symbol bild={merkmal.bild} />
                        <div>
                          <h3 className={styles.merkmalTitel}>{merkmal.titel}</h3>
                          <p className={styles.merkmalSatz}>{merkmal.satz}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}

                {karte.hinweis && (
                  <div className={styles.hinweis}>
                    <Symbol bild={karte.hinweis.bild} />
                    <h3 className={styles.hinweisTitel}>{karte.hinweis.titel}</h3>
                    <p className={styles.merkmalSatz}>{karte.hinweis.satz}</p>
                  </div>
                )}
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  )
}
