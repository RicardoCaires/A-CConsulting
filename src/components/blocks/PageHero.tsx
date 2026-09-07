import { Button } from '@/components/ui/Button'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
import { RichText } from '@/components/ui/RichText'
import type { Action, Rich } from '@/content/types'
import type { Locale } from '@/i18n/config'
import { getUi } from '@/i18n/messages/ui'
import { isPublished, path } from '@/i18n/routes'
import { company } from '@/lib/company'

import styles from './PageHero.module.css'

/**
 * Seitenkopf einer Inhaltsseite.
 *
 * Wie der Einstieg der Startseite aufgebaut, aber mit gruenem Marker ueber der
 * Ueberschrift — er ordnet die Seite in den Auftritt ein, ohne eine zweite
 * Farbflaeche zu brauchen.
 */

type Props = {
  heading: string
  lead?: Rich
  actions?: readonly Action[]
  locale: Locale
  /**
   * Platz fuer ein Bild neben dem Seitenkopf. Die Beschriftung steht in der
   * Route, nicht im Inhalt — sie ist ein Hinweis an uns, kein Website-Text.
   */
  visual?: { label: string; note?: string }
}

export function PageHero({ heading, lead, actions, locale, visual }: Props) {
  const ui = getUi(locale)

  return (
    <section className={styles.hero} aria-labelledby="seitenkopf">
      <div className={`ac-container ${visual ? styles.grid : ''}`}>
        <div>
          <hr className="ac-marker" />
          <h1 id="seitenkopf" className={styles.heading}>
            {heading}
          </h1>

          {lead && (
            <p className={`ac-lead ${styles.lead}`}>
              <RichText value={lead} />
            </p>
          )}

          {actions && actions.length > 0 && (
            <div className={styles.actions}>
            {actions.map((action, index) => {
              if (action.kind === 'phone') {
                return (
                  <a key={index} className={styles.phoneLink} href={`tel:${company.phoneE164}`}>
                    {action.label ?? company.phone}
                  </a>
                )
              }

              if (action.kind === 'mail') {
                return (
                  <Button key={index} href={`mailto:${company.email}`} variant={action.variant}>
                    {action.label}
                  </Button>
                )
              }

              if (!isPublished(action.target, locale)) {
                return (
                  <span key={index} className={styles.actionPending}>
                    {action.label}
                    <span className={styles.comingBadge}>{ui.pageComing.badge}</span>
                    <span className="ac-visually-hidden"> {ui.pageComing.hint}</span>
                  </span>
                )
              }

              return (
                <Button key={index} href={path(action.target, locale)} variant={action.variant}>
                  {action.label}
                </Button>
              )
            })}
            </div>
          )}
        </div>

        {visual && (
          <ImagePlaceholder
            className={styles.visual}
            label={visual.label}
            note={visual.note}
          />
        )}
      </div>
    </section>
  )
}
