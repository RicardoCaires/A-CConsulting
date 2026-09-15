'use client'

import { useState } from 'react'

import styles from './Standortkarte.module.css'

/**
 * Die Karte laedt erst auf Klick.
 *
 * Grund: Ein eingebetteter Kartendienst holt beim Aufruf der Seite Daten von
 * einem fremden Server und uebermittelt dabei die IP-Adresse der Besucherin.
 * CLAUDE.md, Abschnitt 6 und 7, verlangt, dass ohne Ruecksprache keine
 * fremden Dienste mitlaufen. Erst der Klick loest das aus — bis dahin geht
 * nichts nach aussen.
 *
 * Die Karte ist Zugabe: Anschrift und Routenknopf daneben funktionieren ohne
 * Skript und ohne fremden Dienst.
 */
export function Standortkarte({
  bbox,
  marker,
  knopf,
  hinweis,
  titel,
}: {
  /** Ausschnitt: links, unten, rechts, oben — in Grad. */
  bbox: readonly [number, number, number, number]
  /** Breite und Laenge der Stecknadel. */
  marker: readonly [number, number]
  knopf: string
  hinweis: string
  titel: string
}) {
  const [geladen, setGeladen] = useState(false)

  if (geladen) {
    return (
      <iframe
        className={styles.karte}
        title={titel}
        src={`https://www.openstreetmap.org/export/embed.html?bbox=${bbox.join(
          '%2C',
        )}&layer=mapnik&marker=${marker[0]}%2C${marker[1]}`}
        loading="lazy"
        referrerPolicy="no-referrer"
      />
    )
  }

  return (
    <div className={styles.vorschau}>
      <button type="button" className={styles.knopf} onClick={() => setGeladen(true)}>
        {knopf}
      </button>
      <p className={styles.hinweis}>{hinweis}</p>
    </div>
  )
}
