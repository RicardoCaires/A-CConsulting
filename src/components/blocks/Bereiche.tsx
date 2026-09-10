import type { ReactNode } from 'react'

import { Button } from '@/components/ui/Button'
import { Icon, type IconName } from '@/components/ui/Icon'
import { Illustration, type Motiv } from '@/components/ui/Illustration'
import { PageLink } from '@/components/ui/PageLink'
import type { Locale } from '@/i18n/config'
import { hrefOrDefault, type PageKey } from '@/i18n/routes'

import styles from './Bereiche.module.css'

/**
 * Die drei Beratungsbereiche — als Karten, seit dem 10.09.2026.
 *
 * Bis dahin trennte hier nur eine Haarlinie. Ricardo hat am 10.09.2026 eine
 * Referenzgrafik geliefert und den Bereich danach umbauen lassen: weisse
 * Karten auf getoentem Grund, je Bereich eine Kategorie, eine eigene
 * Ueberschrift, vier Leistungen mit Icon und eine Illustration.
 *
 * Was bleibt, ist die Rangfolge — sie ist die eigentliche Aussage des
 * Abschnitts und steht so in der Hausordnung: Versicherungsbroking fuehrt,
 * Treuhand und Finanzplanung ergaenzen. Die Aufteilung zeigt das, ohne es zu
 * schreiben:
 *
 *   Leitbereich   volle Breite, drei Spalten, Knopf statt Textlink
 *   die beiden    darunter nebeneinander, halb so gross, mit Textlink
 *
 * Zwei Abweichungen von der Hausordnung, beide auf Ricardos ausdrueckliche
 * Anweisung und beide bewusst klein gehalten:
 *
 *   - Die Karten tragen einen Schatten. Die Gestaltungsprinzipien sagen
 *     „keine Schlagschatten"; hier ist es der schwaechste, der die Karte noch
 *     vom Grund abhebt, und er ersetzt keinen Rahmen, sondern ergaenzt ihn.
 *   - Der Knopf des Leitbereichs ist gruen. Sonst gilt „Gruen ist Akzent,
 *     nicht Flaeche" — ein Knopf ist die kleinste Flaeche, auf der das noch
 *     vertretbar ist, und er kommt genau einmal auf der Seite vor.
 */

/** Eine Leistung in der Liste: Icon und Begriff, mehr nicht. */
export type Leistung = {
  icon: IconName
  text: string
}

export type Bereich = {
  /** Die kleine Zeile ueber der Ueberschrift — der Bereichsname. */
  kategorie: string
  titel: ReactNode
  /** Zwei bis drei Saetze. */
  text: ReactNode
  /** Vier Leistungen. Nicht drei, nicht fuenf — die Karten stehen sonst schief. */
  leistungen: readonly Leistung[]
  ziel: PageKey
  linkText: string
  motiv: Motiv
}

/** Der fuehrende Bereich unterscheidet sich nur in der Groesse, nicht im Bau. */
export type LeitBereich = Bereich

type Props = {
  leit: LeitBereich
  weitere: readonly Bereich[]
  locale: Locale
}

function Kategorie({ text }: { text: string }) {
  return (
    <p className={`ac-eyebrow ${styles.kategorie}`}>
      <span className={styles.kategorieStrich} aria-hidden="true" />
      {text}
    </p>
  )
}

function Leistungen({
  werte,
  zweispaltig = false,
}: {
  werte: readonly Leistung[]
  zweispaltig?: boolean
}) {
  return (
    <ul
      className={[styles.leistungen, zweispaltig ? styles.leistungenZweispaltig : '']
        .filter(Boolean)
        .join(' ')}
      role="list"
    >
      {werte.map((leistung) => (
        <li key={leistung.text} className={styles.leistung}>
          <Icon className={styles.leistungIcon} name={leistung.icon} />
          <span>{leistung.text}</span>
        </li>
      ))}
    </ul>
  )
}

export function Bereiche({ leit, weitere, locale }: Props) {
  return (
    <div className={styles.wrapper}>
      {/* ---- Leitbereich: volle Breite, drei Spalten --------------------- */}
      <article className={`${styles.karte} ${styles.leit}`}>
        <div className={styles.leitText}>
          <Kategorie text={leit.kategorie} />
          <h3 className={styles.titelGross}>{leit.titel}</h3>
          <p className={styles.text}>{leit.text}</p>
          <Button className={styles.knopf} href={hrefOrDefault(leit.ziel, locale)} variant="akzent">
            {leit.linkText}
            <span className={styles.knopfPfeil} aria-hidden="true">
              →
            </span>
          </Button>
        </div>

        <div className={styles.leitListe}>
          <Leistungen werte={leit.leistungen} />
        </div>

        <div className={styles.leitBild}>
          <Illustration motiv={leit.motiv} />
        </div>
      </article>

      {/* ---- Die beiden ergaenzenden Bereiche ---------------------------- */}
      <div className={styles.weitere}>
        {weitere.map((bereich) => (
          <article key={bereich.kategorie} className={`${styles.karte} ${styles.spalte}`}>
            <div className={styles.spalteKopf}>
              <div className={styles.spalteText}>
                <Kategorie text={bereich.kategorie} />
                <h3 className={styles.titel}>{bereich.titel}</h3>
                <p className={styles.text}>{bereich.text}</p>
              </div>

              <div className={styles.spalteBild}>
                <Illustration motiv={bereich.motiv} />
              </div>
            </div>

            <Leistungen werte={bereich.leistungen} zweispaltig />

            <PageLink
              target={bereich.ziel}
              label={bereich.linkText}
              locale={locale}
              className={styles.link}
            />
          </article>
        ))}
      </div>
    </div>
  )
}
