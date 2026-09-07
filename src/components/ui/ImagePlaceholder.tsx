import styles from './ImagePlaceholder.module.css'

/**
 * Platz fuer ein Bild, das noch nicht vorliegt.
 *
 * Kein Stockfoto, keine erfundene Grafik, keine nachgebaute Bildmarke — nur
 * eine ruhige Flaeche mit der Angabe, was hier hingehoert. So ist beim
 * Durchsehen jederzeit sichtbar, welche Aufnahmen noch fehlen, und das echte
 * Bild tritt spaeter ohne Layoutaenderung an dieselbe Stelle.
 *
 * Das Seitenverhaeltnis wird von aussen gesetzt und bleibt beim Austausch
 * gleich — darum verschiebt sich beim Einsetzen nichts.
 */

type Props = {
  /** Was hier hingehoert, in eckigen Klammern — z. B. „BILD / VISUAL". */
  label: string
  /** Ergaenzender Hinweis, etwa das gewuenschte Motiv. */
  note?: string
  className?: string
}

export function ImagePlaceholder({ label, note, className }: Props) {
  return (
    <div className={[styles.frame, className].filter(Boolean).join(' ')}>
      <span className={styles.label}>[{label}]</span>
      {note && <span className={styles.note}>{note}</span>}
    </div>
  )
}
