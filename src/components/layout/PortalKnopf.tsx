import { getUi } from '@/i18n/messages/ui'
import type { Locale } from '@/i18n/config'
import { company } from '@/lib/company'

import styles from './PortalKnopf.module.css'

/**
 * Kundenportal als schwebender Knopf unten rechts, auf jeder Seite (Ricardo,
 * 15.10.2026: «Schwebend unten rechts», wie die Kontakt-Blase bei simply.ch).
 * Ein gewöhnlicher Link – ohne Skript, mit Tastatur erreichbar, mit sichtbarem
 * Fokus. Er steht nach dem Inhalt im Quelltext, damit Vorlesewerkzeuge ihn nicht
 * vor der Seite ansagen.
 */
export function PortalKnopf({ locale }: { locale: Locale }) {
  const ui = getUi(locale)
  return (
    <a href={company.kundenportal} className={styles.knopf} aria-label={`${ui.portal.label}: ${ui.portal.hint}`}>
      <svg className={styles.schloss} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <path d="M8 11V8a4 4 0 0 1 8 0v3" />
      </svg>
      <span>{ui.portal.label}</span>
    </a>
  )
}
