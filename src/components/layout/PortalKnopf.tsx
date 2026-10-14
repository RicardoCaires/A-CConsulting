import { getUi } from '@/i18n/messages/ui'
import type { Locale } from '@/i18n/config'
import { company } from '@/lib/company'

import styles from './PortalKnopf.module.css'

/**
 * Kundenportal als schwebender Knopf unten rechts, auf jeder Seite (Ricardo,
 * 15.10.2026: «Schwebend unten rechts», wie die Kontakt-Blase bei simply.ch).
 * Ein gewöhnlicher Link – ohne Skript, mit Tastatur erreichbar, mit sichtbarem
 * Fokus. Das Symbol ist eine Person, kein Schloss: Ricardo will das Portal nicht
 * mit Sicherheit oder Datenschutz in Verbindung bringen (15.10.2026). Er steht nach dem Inhalt im Quelltext, damit Vorlesewerkzeuge ihn nicht
 * vor der Seite ansagen.
 */
export function PortalKnopf({ locale }: { locale: Locale }) {
  const ui = getUi(locale)
  return (
    <a href={company.kundenportal} className={styles.knopf} aria-label={`${ui.portal.label}: ${ui.portal.hint}`}>
      <svg className={styles.symbol} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </svg>
      <span className={styles.text}>{ui.portal.label}</span>
    </a>
  )
}
