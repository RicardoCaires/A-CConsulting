import Image from 'next/image'
import type { ReactNode } from 'react'

import styles from './Ablauf.module.css'

/**
 * Der Ablauf auf der Startseite — vier Karten auf einer Zeitachse.
 *
 * Nach Ricardos Referenzgrafik vom 10.09.2026: ueber den Karten laeuft eine
 * feine Linie, darauf sitzen die nummerierten Kreise, mittig ueber jeder
 * Karte. In der Karte ein geliefertes Symbol, der Titel und zwei Saetze.
 * Darunter ein flacher Hinweiskasten ueber die ganze Breite.
 *
 * **Nicht** `StepList`: Der Baustein traegt denselben Ablauf auf fuenf
 * Leistungsseiten und bleibt, wie er ist. Hier steht eine eigene Fassung, weil
 * nur die Startseite Symbole, Karten und die Zeitachse bekommt.
 *
 * Die Nummer ist Gestaltung; die Reihenfolge liegt in der `<ol>`. Darum ist
 * sie fuer Hilfstechnik ausgeblendet und wird nicht doppelt vorgelesen.
 *
 * Die Symbole sind geliefert, nicht gezeichnet, und stehen unveraendert da:
 * kein Filter, keine Farbaenderung, kein Beschnitt. Sie sind dekorativ —
 * neben jedem steht sein Titel.
 */

export type AblaufSchritt = {
  titel: ReactNode
  satz?: ReactNode
  /** Dateiname ohne Pfad und Endung, so wie geliefert. */
  bild: string
}

type Props = {
  schritte: readonly AblaufSchritt[]
  /** Der flache Kasten unter den Karten. */
  hinweis?: ReactNode
  /** Dateiname des Symbols im Hinweiskasten. */
  hinweisBild?: string
}

export function Ablauf({ schritte, hinweis, hinweisBild }: Props) {
  return (
    <div className={styles.wrapper}>
      <ol className={styles.schritte}>
        {schritte.map((schritt, index) => (
          <li key={index} className={styles.schritt}>
            {/* Der Kreis sitzt auf der Linie, also halb ueber der Karte. Die
                Linie selbst ist der obere Rand des Listenelements. */}
            <span className={styles.nummer} aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>

            <div className={styles.karte}>
              <Image
                className={styles.bild}
                src={`/bilder/${schritt.bild}.webp`}
                alt=""
                width={256}
                height={256}
                sizes="72px"
              />
              <h3 className={styles.titel}>{schritt.titel}</h3>
              {schritt.satz && <p className={styles.satz}>{schritt.satz}</p>}
            </div>
          </li>
        ))}
      </ol>

      {hinweis && (
        <aside className={styles.hinweis}>
          {hinweisBild && (
            <Image
              className={styles.hinweisBild}
              src={`/bilder/${hinweisBild}.webp`}
              alt=""
              width={128}
              height={128}
              sizes="32px"
            />
          )}
          <p className={styles.hinweisText}>{hinweis}</p>
        </aside>
      )}
    </div>
  )
}
