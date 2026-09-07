import { showDraft } from '@/lib/draft'

import styles from './DraftNote.module.css'

/**
 * Redaktionsmarke: hier fehlt etwas, das nicht erfunden wird.
 *
 * Zwei Anlaesse:
 *   `offen`       — eine Angabe, die A&C noch bestaetigen muss
 *   `uebersetzung` — ein Text, der in dieser Sprache noch nicht vorliegt
 *
 * Sichtbar waehrend der Arbeit, im Produktionsbau nicht ausgegeben (siehe
 * `src/lib/draft.ts`). Das Ausblenden ist ein Sicherheitsnetz, kein Ersatz
 * fuer das Nachtragen: `check:pending --strict` bleibt Bedingung fuer den
 * Go-live.
 *
 * `block` setzt die Marke als eigenen Absatz statt mitten in einen Satz.
 */

type Props = {
  /** Was fehlt — knapp, in eigenen Worten an uns, nicht an den Leser. */
  children: string
  kind?: 'offen' | 'uebersetzung'
  block?: boolean
}

const LABEL: Record<NonNullable<Props['kind']>, string> = {
  offen: 'Zu bestätigen',
  uebersetzung: 'Übersetzung fehlt',
}

export function DraftNote({ children, kind = 'offen', block = false }: Props) {
  if (!showDraft) return null

  const detail = children.trim()
  const Tag = block ? 'div' : 'mark'

  return (
    <Tag className={[styles.note, block ? styles.block : styles.inline].join(' ')}>
      <span className={styles.label}>{LABEL[kind]}</span>
      {detail !== '' && (
        <>
          <span className="ac-visually-hidden">: </span>
          <span className={styles.detail}>{detail}</span>
        </>
      )}
    </Tag>
  )
}
