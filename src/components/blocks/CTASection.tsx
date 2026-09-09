import type { ReactNode } from 'react'

import { IconCircle } from '@/components/ui/IconCircle'
import { company } from '@/lib/company'

import { istDunkel, KLASSE, type Surface } from './Section'

import styles from './CTASection.module.css'

/**
 * Abschluss einer Seite: die Aufforderung, sich zu melden.
 *
 * Steht auf jeder Seite an derselben Stelle und sieht ueberall gleich aus.
 * Genau deshalb ist es ein Baustein: Der Abschluss ist die Stelle, an der eine
 * Seite ihren Zweck erfuellt, und er darf nicht von Seite zu Seite anders
 * aussehen.
 *
 * Die Flaeche waehlt der Baustein **nicht** selbst, sondern bekommt sie von
 * der Vorlage. Das ist der Punkt, an dem die Flaechenregel frueher auseinander
 * lief: Die Vorlage rechnete eine Folge aus, der Abschluss setzte sich darueber
 * hinweg und stand am Ende doch auf derselben Flaeche wie der Abschnitt davor.
 *
 * Die gruene Oberkante traegt er auf hellem Grund immer — sie trennt den
 * Abschluss vom Fussbereich.
 */

type Props = {
  /** Sprungziel; die Ueberschrift bekommt daraus ihre Kennung. */
  id?: string
  heading: ReactNode
  lead?: ReactNode
  /** Knoepfe. Werden vom Aufrufer gebaut, damit dieser Baustein nichts weiss. */
  actions?: ReactNode
  /** Telefon und E-Mail als Direktkontakt darueber. */
  showContact?: boolean
  /** Kommt aus der Flaechenfolge der Vorlage. */
  surface?: Surface
}

export function CTASection({
  id,
  heading,
  lead,
  actions,
  showContact = false,
  surface = 'hell',
}: Props) {
  const dunkel = istDunkel(surface)
  // Die gruene Oberkante trennt den Abschluss vom Fussbereich. Auf einer
  // dunklen Flaeche braucht es sie nicht — dort trennt die Flaeche selbst.
  const flaeche = `${KLASSE[surface]} ${dunkel ? '' : styles.tintEdge}`.trim()
  const headingId = id ? `${id}-titel` : undefined

  return (
    <section
      id={id}
      className={`ac-section ${flaeche} ${styles.section}`}
      aria-labelledby={headingId}
    >
      <div className="ac-container">
        <div className={styles.inner}>
          <h2 id={headingId} className={styles.heading}>
            {heading}
          </h2>

          {/* Traegt einen oder mehrere Absaetze — die Typografie liegt auf dem
              Behaelter, damit der Aufrufer nichts darueber wissen muss. */}
          {lead && <div className={styles.lead}>{lead}</div>}

          {showContact && (
            <ul className={styles.contacts} role="list">
              <li>
                <a className={styles.contact} href={`tel:${company.phoneE164}`}>
                  <IconCircle name="telefon" size="sm" tone={dunkel ? 'outline' : 'tint'} />
                  {company.phone}
                </a>
              </li>
              <li>
                <a className={styles.contact} href={`mailto:${company.email}`}>
                  <IconCircle name="mail" size="sm" tone={dunkel ? 'outline' : 'tint'} />
                  {company.email}
                </a>
              </li>
            </ul>
          )}

          {actions && <div className={styles.actions}>{actions}</div>}
        </div>
      </div>
    </section>
  )
}
