import Image from 'next/image'

import { hatSichtbarenInhalt, RichText } from '@/components/ui/RichText'
import type { Rich } from '@/content/types'

import styles from './Team.module.css'

/**
 * Die beiden Inhaber.
 *
 * Auf einer Seite, die mit „persoenliche Ansprechpartner" wirbt, ist das der
 * Beleg. Seit dem 10.09.2026 als zwei liegende Profilkarten nach Ricardos
 * Referenzgrafik: Portraet links, rechts Name, gruener Strich, Zustaendigkeit
 * und der Weg zu LinkedIn.
 *
 * Kein Lebenslauf. Wer mehr wissen will, geht auf „Ueber uns".
 *
 * Der Verweis auf LinkedIn erscheint nur, wenn eine Adresse hinterlegt ist.
 * Ein Knopf, der nirgends hinfuehrt, ist schlimmer als keiner.
 */

export type Mitglied = {
  name: string
  /**
   * Zustaendigkeit, Zeile fuer Zeile.
   *
   * Eine Liste und keine Zeichenkette, damit der Umbruch dort sitzt, wo er in
   * der Vorlage sitzt — und nicht dort, wo der Browser ihn setzen wuerde.
   */
  funktion: readonly string[]
  /**
   * Zwei bis drei kurze Saetze — nur wo sie hingehoeren.
   *
   * Auf der Startseite bleiben sie weg: Dort genuegen Name und Zustaendigkeit,
   * alles Weitere waere ein Lebenslauf an der falschen Stelle. Auf „Ueber uns"
   * stehen sie.
   */
  saetze?: readonly Rich[]
  bild: { datei: string; alt: string }
  /** Vollstaendige Adresse des Profils. Fehlt sie, entfaellt der Verweis. */
  linkedin?: string
}

type Props = {
  mitglieder: readonly Mitglied[]
  /** Beschriftung des Verweises. Bei beiden dieselbe. */
  linkedinText: string
}

export function Team({ mitglieder, linkedinText }: Props) {
  return (
    <ul className={styles.raster} role="list">
      {mitglieder.map((person) => (
        <li key={person.name} className={styles.karte}>
          <div className={styles.bild}>
            <Image
              className={styles.portrait}
              src={person.bild.datei}
              alt={person.bild.alt}
              width={560}
              height={420}
              sizes="(min-width: 64rem) 200px, 40vw"
            />
          </div>

          <div className={styles.angaben}>
            <h3 className={styles.name}>{person.name}</h3>
            <hr className={styles.marker} />

            <p className={styles.funktion}>
              {person.funktion.map((zeile) => (
                <span key={zeile}>{zeile}</span>
              ))}
            </p>

            {(person.saetze ?? []).filter(hatSichtbarenInhalt).map((satz, index) => (
              <p key={index} className={styles.satz}>
                <RichText value={satz} />
              </p>
            ))}

            {person.linkedin && (
              <a
                className={styles.linkedin}
                href={person.linkedin}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image
                  className={styles.linkedinLogo}
                  src="/bilder/linkedin_logo.webp"
                  alt=""
                  width={96}
                  height={96}
                  sizes="20px"
                />
                <span>{linkedinText}</span>
              </a>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}
