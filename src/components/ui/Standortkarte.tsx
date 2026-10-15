import { mapsKarte } from '@/lib/company'

import styles from './Standortkarte.module.css'

/**
 * Google-Karte mit dem Büro (15.10.2026, Ricardos Wahl statt OpenStreetMap).
 *
 * Erscheint direkt, ohne Klick (Ricardo: «kann man das nicht so einstellen das es direkt
 * angezeigt wird»). ⚠️ Beim Laden übermittelt der Browser die IP-Adresse an Google (USA).
 * Das gehört in die Datenschutzerklärung – die ändert nur Ricardo (CLAUDE.md, Abschnitt 7).
 *
 * Kein Skript nötig; `loading="lazy"` lädt sie erst in der Nähe des Bildschirms. Die
 * Adresse kommt aus `company.ts` – ein Umzug ändert die Karte mit.
 */
export function Standortkarte({ titel }: { titel: string }) {
  return (
    <iframe
      className={styles.karte}
      title={titel}
      src={mapsKarte}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  )
}
