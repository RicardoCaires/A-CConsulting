import Image from 'next/image'
import type { ReactNode } from 'react'

import { company } from '@/lib/company'

import styles from './Kontaktabschluss.module.css'

/**
 * Der Abschluss der Startseite: die Aufforderung, sich zu melden.
 *
 * Seit dem 15.09.2026 nach Ricardos HTML-Vorlage
 * (`content/source/abschluss_kontakt_de.md`): links Vorzeile, Titel, ein Satz
 * und der gruene Knopf, rechts zwei weisse Felder fuer Telefon und E-Mail.
 * **Ganz ohne Hintergrundgrafik** — das gelieferte Muster der Fassung vom
 * 10.09.2026 ist entfallen, der Abschnitt steht auf dem hellblauen Grundton.
 *
 * **Nicht** `CTASection`: Der Baustein steht am Fuss von `/kontakt` und
 * bleibt, wie er ist. Damit sieht der Abschluss auf der Startseite anders aus
 * als dort — die Folge davon, dass die Startseite als Erste umgebaut wurde.
 *
 * Telefon und E-Mail kommen aus `company.ts` und stehen nirgends sonst
 * ausgeschrieben — sie sind Pflichtangaben und werden an einer Stelle
 * gepflegt.
 */

type Props = {
  id?: string
  eyebrow?: string
  titel: ReactNode
  satz?: ReactNode
  /** Beschriftung der beiden Felder. Die Angabe selbst kommt aus `company.ts`. */
  felder: { telefon: string; email: string }
  /** Der Knopf. Wird vom Aufrufer gebaut, damit dieser Baustein nichts weiss. */
  aktion?: ReactNode
}

export function Kontaktabschluss({ id, eyebrow, titel, satz, felder, aktion }: Props) {
  const headingId = id ? `${id}-titel` : undefined

  return (
    <section
      id={id}
      className={`ac-section ${styles.abschnitt}`}
      aria-labelledby={headingId}
    >
      <div className={`ac-container ${styles.raster}`}>
        <div className={styles.haupt}>
          {eyebrow && <p className="ac-eyebrow">{eyebrow}</p>}

          <h2 id={headingId} className={styles.titel}>
            {titel}
          </h2>

          {satz && <p className={styles.satz}>{satz}</p>}
          {aktion && <div className={styles.aktion}>{aktion}</div>}
        </div>

        {/* Zwei Felder, ganz anklickbar — der Link liegt um die Kachel, nicht
            nur um die Nummer. */}
        <ul className={styles.felder} role="list">
          <li>
            <a className={styles.feld} href={`tel:${company.phoneE164}`}>
              <span className={styles.zeichen} aria-hidden="true">
                <Image src="/bilder/kontakt_telefon.svg" alt="" width={23} height={23} unoptimized />
              </span>
              <span>
                <span className={styles.feldLabel}>{felder.telefon}</span>
                <span className={styles.feldWert}>{company.phone}</span>
              </span>
              <span className={styles.pfeil} aria-hidden="true">
                →
              </span>
            </a>
          </li>
          <li>
            <a className={styles.feld} href={`mailto:${company.email}`}>
              <span className={styles.zeichen} aria-hidden="true">
                <Image src="/bilder/kontakt_email.svg" alt="" width={23} height={23} unoptimized />
              </span>
              <span>
                <span className={styles.feldLabel}>{felder.email}</span>
                <span className={styles.feldWert}>{company.email}</span>
              </span>
              <span className={styles.pfeil} aria-hidden="true">
                →
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
