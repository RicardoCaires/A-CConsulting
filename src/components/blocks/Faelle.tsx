import { Piktogramm, type PiktogrammName } from '@/components/ui/Piktogramm'
import { getUi } from '@/i18n/messages/ui'
import { isPublished, path, type PageKey } from '@/i18n/routes'
import type { Locale } from '@/i18n/config'

import styles from './Faelle.module.css'

/**
 * Geschaeftsfaelle — die Einstiege nach Situation.
 *
 * Der wichtigste Abschnitt der Startseite. Er beantwortet nicht die Frage
 * „Was bietet A&C an?", sondern „Bin ich hier richtig?" — und die stellt sich
 * ein Besucher zuerst. Wer seinen eigenen Satz liest, klickt.
 *
 * Darum: Ich-Saetze in der Sprache des Kunden, keine Leistungsbegriffe.
 *
 * Seit dem 10.09.2026 als sechs Karten, drei mal zwei, nach Ricardos
 * Referenzgrafik. Bis dahin war es ein Gitter aus Haarlinien, und es stand
 * hier ausdruecklich „keine Icons — sechs bunte Zeichen waeren genau das
 * Rauschen, das die Seite nicht haben soll". Ricardo hat die Piktogramme
 * geliefert und entschieden; die Regel gilt damit fuer diesen Abschnitt nicht
 * mehr. Sie bleibt fuer alles, wofuer er keine geliefert hat.
 *
 * Die ganze Karte ist der Link, nicht nur die Zeile darunter — auf dem
 * Telefon ist das der Unterschied zwischen treffen und zielen. „Mehr
 * erfahren" steht als Wegweiser dabei, ist aber kein zweiter Link.
 *
 * Jeder Fall fuehrt auf die Seite, die ihn beantwortet, notfalls auf deren
 * Abschnitt. Gibt es die Seite in dieser Sprache noch nicht, bleibt der Fall
 * sichtbar, wird aber nicht anklickbar.
 */

export type Fall = {
  /** Der Satz, in dem sich der Kunde wiedererkennt. */
  text: string
  /** Das gelieferte Piktogramm. */
  bild: PiktogrammName
  ziel: PageKey
  /** Sprungmarke auf der Zielseite, falls der Fall dort ein Abschnitt ist. */
  anker?: string
}

type Props = {
  faelle: readonly Fall[]
  locale: Locale
}

export function Faelle({ faelle, locale }: Props) {
  const ui = getUi(locale)

  return (
    <ol className={styles.liste} role="list">
      {faelle.map((fall) => {
        const erreichbar = isPublished(fall.ziel, locale)
        const href = erreichbar
          ? `${path(fall.ziel, locale)}${fall.anker ? `#${fall.anker}` : ''}`
          : null

        const inhalt = (
          <>
            {/* Die Nummer 01 bis 06 ist am 15.09.2026 auf Ricardos Anweisung
                entfallen. Die Reihenfolge steht weiterhin im `<ol>`. */}
            <div className={styles.kopf}>
              <Piktogramm className={styles.bild} name={fall.bild} />
            </div>

            <h3 className={styles.text}>{fall.text}</h3>

            {href ? (
              <span className={styles.weiter} aria-hidden="true">
                {ui.moreLabel}
              </span>
            ) : (
              <>
                <span className={styles.badge}>{ui.pageComing.badge}</span>
                <span className="ac-visually-hidden"> {ui.pageComing.hint}</span>
              </>
            )}
          </>
        )

        return (
          <li key={fall.text}>
            {href ? (
              <a className={styles.karte} href={href}>
                {inhalt}
              </a>
            ) : (
              <span className={`${styles.karte} ${styles.pending}`}>{inhalt}</span>
            )}
          </li>
        )
      })}
    </ol>
  )
}
