import type { ReactNode } from 'react'

import { Icon } from '@/components/ui/Icon'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
import type { Locale } from '@/i18n/config'
import { getUi } from '@/i18n/messages/ui'

import styles from './PersonCard.module.css'

/**
 * Ein Mensch, nicht ein Eintrag.
 *
 * Portraet, Name, Funktion — und wo vorhanden Zustaendigkeit und Sprachen.
 * Kein Fliesstext ueber Werte: konkrete Angaben ueber eine konkrete Person.
 *
 * Das Portraet liegt fest im Format **3:4 (hoch)**. Solange keine Aufnahme
 * vorliegt, steht die Platzhalterflaeche im selben Format an derselben
 * Stelle — beim Einsetzen des echten Bildes verschiebt sich nichts.
 *
 * Der Kontakt ist bewusst zurueckhaltend: eine Zeile, kein Knopf. Wer
 * anrufen will, findet die Nummer; die Seite draengt niemanden.
 */

export type Person = {
  name: string
  /** Funktion, z. B. „Geschäftsführer und Mitinhaber". */
  role?: ReactNode
  /** Zustaendigkeitsbereich, ein Halbsatz. */
  responsibility?: ReactNode
  /** Gesprochene Sprachen. */
  languages?: ReactNode
  /** Direktkontakt. Nur setzen, wo er freigegeben ist. */
  contact?: { label: string; href: string }
  /** Hinweis an uns, welche Aufnahme hier hingehoert. */
  placeholderNote?: string
}

type Props = Person & {
  locale: Locale
  /** Ueberschriftenebene. Im Team-Raster 3, auf einer Personenseite 2. */
  level?: 2 | 3
}

export function PersonCard({
  name,
  role,
  responsibility,
  languages,
  contact,
  placeholderNote,
  locale,
  level = 3,
}: Props) {
  const Heading = `h${level}` as 'h2' | 'h3'
  const ui = getUi(locale)

  return (
    <article className={styles.person}>
      <ImagePlaceholder className={styles.portrait} label="PORTRÄT" note={placeholderNote} />

      <div className={styles.body}>
        <Heading className={styles.name}>{name}</Heading>
        {role && <p className={styles.role}>{role}</p>}

        {(responsibility || languages) && (
          <dl className={styles.detail}>
            {responsibility && (
              <div className={styles.detailRow}>
                <dt className="ac-visually-hidden">{ui.person.responsibility}</dt>
                <dd className={styles.detailValue}>{responsibility}</dd>
              </div>
            )}
            {languages && (
              <div className={styles.detailRow}>
                <dt className="ac-visually-hidden">{ui.person.languages}</dt>
                <dd className={styles.detailValue}>
                  <Icon name="sprachen" size={1} className={styles.detailIcon} />
                  {languages}
                </dd>
              </div>
            )}
          </dl>
        )}

        {contact && (
          <p className={styles.contact}>
            <a href={contact.href}>{contact.label}</a>
          </p>
        )}
      </div>
    </article>
  )
}

/** Zwei Personen nebeneinander — das Standardraster fuer A&C. */
export function PersonGrid({ children }: { children: ReactNode }) {
  return <div className={styles.grid}>{children}</div>
}
