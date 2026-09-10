import Image from 'next/image'
import type { ReactNode } from 'react'

import { company } from '@/lib/company'

import styles from './Kontaktabschluss.module.css'

/**
 * Der Abschluss der Startseite: die Aufforderung, sich zu melden.
 *
 * Nach Ricardos Referenzgrafik vom 10.09.2026 — heller Grund statt Navy,
 * gelieferte Symbole statt der Konturzeichen, das Muster rechts.
 *
 * **Nicht** `CTASection`: Der Baustein steht am Fuss jeder Leistungsseite und
 * bleibt, wie er ist. Damit sieht der Abschluss auf der Startseite anders aus
 * als auf den uebrigen Seiten — das war bisher ausdruecklich nicht so gewollt
 * und ist nun die Folge davon, dass die Startseite als Erste umgebaut wurde.
 * Bekommen die Leistungsseiten ihren Umbau, gehoert das wieder
 * zusammengefuehrt.
 *
 * Telefon und E-Mail kommen aus `company.ts` und stehen nirgends sonst
 * ausgeschrieben — sie sind Pflichtangaben und werden an einer Stelle
 * gepflegt.
 */

type Props = {
  id?: string
  titel: ReactNode
  satz?: ReactNode
  /** Der Knopf. Wird vom Aufrufer gebaut, damit dieser Baustein nichts weiss. */
  aktion?: ReactNode
}

export function Kontaktabschluss({ id, titel, satz, aktion }: Props) {
  const headingId = id ? `${id}-titel` : undefined

  return (
    <section
      id={id}
      className={`ac-section ${styles.abschnitt}`}
      aria-labelledby={headingId}
    >
      {/* Das Muster liegt rechts und ist reine Dekoration. */}
      <div className={styles.muster} aria-hidden="true">
        <Image
          className={styles.musterBild}
          src="/bilder/03_kontakt_hintergrundmuster.webp"
          alt=""
          width={1600}
          height={600}
          sizes="(min-width: 90rem) 1440px, 100vw"
        />
      </div>

      <div className={`ac-container ${styles.inner}`}>
        <h2 id={headingId} className={styles.titel}>
          {titel}
        </h2>

        {satz && <p className={styles.satz}>{satz}</p>}

        <ul className={styles.kontakte} role="list">
          <li>
            <a className={styles.kontakt} href={`tel:${company.phoneE164}`}>
              <Image
                className={styles.kontaktBild}
                src="/bilder/01_telefon.webp"
                alt=""
                width={128}
                height={128}
                sizes="40px"
              />
              {company.phone}
            </a>
          </li>
          <li>
            <a className={styles.kontakt} href={`mailto:${company.email}`}>
              <Image
                className={styles.kontaktBild}
                src="/bilder/02_email.webp"
                alt=""
                width={128}
                height={128}
                sizes="40px"
              />
              {company.email}
            </a>
          </li>
        </ul>

        {aktion && <div className={styles.aktion}>{aktion}</div>}
      </div>
    </section>
  )
}
