import Image from 'next/image'

import type { Locale } from '@/i18n/config'
import { isPublished, path, type PageKey } from '@/i18n/routes'

import styles from './WechselHinweis.module.css'

/**
 * „Sie haben bereits einen Treuhaender?" auf `/treuhand`.
 *
 * Nach Ricardos Referenzgrafik vom 11.09.2026: links Kategoriezeile, Titel,
 * der bisherige Absatz und ein gruen umrandeter Link auf die Wechselseite;
 * rechts eine Karte mit drei Schritten — Nummer, Symbol, Titel und Satz, die
 * Nummern durch eine senkrechte Linie verbunden. Bis dahin ein `prose`-Block.
 *
 * **Der Abschnitt bleibt in der Flaechenfolge der Seite** und behaelt seinen
 * Grund. Die Referenz zeigt dahinter feine Boegen; dafuer lag keine Datei bei,
 * und nachgezeichnet wird nichts.
 *
 * Der Link ist kein `Button`: Die allgemeinen Knoepfe bleiben, wie sie sind.
 * Er wird nur zum Link, wenn die Wechselseite in dieser Sprache
 * veroeffentlicht ist — sonst steht die Beschriftung ohne Ziel da.
 *
 * Nummern und Symbole sind geliefert und stehen unveraendert da. Die Liste ist
 * geordnet, weil die Reihenfolge Inhalt ist; die Bilder tragen darum einen
 * leeren Alternativtext.
 */

type Schritt = {
  nummer: string
  bild: string
  titel: string
  satz: string
}

type Props = {
  headingId?: string
  eyebrow: string
  heading: string
  lead: string
  link: { target: PageKey; label: string }
  schritte: readonly Schritt[]
  locale: Locale
}

const bildPfad = (datei: string) => `/bilder/treuhand/wechsel/${datei}.svg`

export function WechselHinweis({
  headingId,
  eyebrow,
  heading,
  lead,
  link,
  schritte,
  locale,
}: Props) {
  const verfuegbar = isPublished(link.target, locale)

  return (
    <div className={styles.wechsel}>
      <div className={styles.text}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 id={headingId} className={styles.titel}>
          {heading}
        </h2>
        <p className={styles.lead}>{lead}</p>

        {verfuegbar ? (
          <a className={styles.link} href={path(link.target, locale)}>
            {link.label}
            <span className={styles.pfeil} aria-hidden="true">
              →
            </span>
          </a>
        ) : (
          <p className={styles.linkOhneZiel}>{link.label}</p>
        )}
      </div>

      <div className={styles.karte}>
        <ol className={styles.schritte} role="list">
          {schritte.map((schritt) => (
            <li key={schritt.titel} className={styles.schritt}>
              <Image
                className={styles.nummer}
                src={bildPfad(schritt.nummer)}
                alt=""
                width={512}
                height={512}
                unoptimized
              />
              <Image
                className={styles.icon}
                src={bildPfad(schritt.bild)}
                alt=""
                width={512}
                height={512}
                unoptimized
              />
              <div className={styles.schrittText}>
                <h3 className={styles.schrittTitel}>{schritt.titel}</h3>
                <p className={styles.satz}>{schritt.satz}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
