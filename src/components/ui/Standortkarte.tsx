import styles from './Standortkarte.module.css'

/**
 * Karte von OpenStreetMap mit Stecknadel auf dem Büro.
 *
 * Seit dem 15.10.2026 erscheint sie direkt, ohne Klick (Ricardo: «ich muss immer klicken
 * damit sie angezeigt wird kann man das nicht so einstellen das es direkt angezeigt wird»).
 * Bis dahin lud sie erst auf Klick, weil der Browser beim Laden die IP-Adresse an
 * OpenStreetMap übermittelt. ⚠️ Das gehört jetzt in die Datenschutzerklärung – die ändert
 * nur Ricardo (CLAUDE.md, Abschnitt 7).
 *
 * Kein Skript nötig: eine gewöhnliche Einbettung, `loading="lazy"` lädt sie erst, wenn
 * der Abschnitt in die Nähe des Bildschirms kommt.
 */
export function Standortkarte({
  bbox,
  marker,
  titel,
}: {
  /** Ausschnitt: links, unten, rechts, oben — in Grad. */
  bbox: readonly [number, number, number, number]
  /** Breite und Länge der Stecknadel. */
  marker: readonly [number, number]
  titel: string
}) {
  return (
    <iframe
      className={styles.karte}
      title={titel}
      src={`https://www.openstreetmap.org/export/embed.html?bbox=${bbox.join('%2C')}&layer=mapnik&marker=${marker[0]}%2C${marker[1]}`}
      loading="lazy"
      referrerPolicy="no-referrer"
    />
  )
}
