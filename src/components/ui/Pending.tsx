import styles from './Pending.module.css'

/**
 * Offene Angabe aus Schritt 4, Fassung 2.
 *
 * Solche Stellen werden nicht erfunden und nicht stillschweigend weggelassen.
 * Sie stehen sichtbar auf der Seite, damit bei der Freigabe auffaellt, was noch
 * fehlt. Vor dem Go-live darf keine einzige davon uebrig sein — geprueft wird
 * das von `scripts/check-pending.mjs`.
 *
 * Fuer Screenreader ist die Markierung als solche angesagt, damit niemand den
 * Platzhalter fuer eine Aussage haelt.
 */

type Props = {
  /** Der Text nach „ZU BESTAETIGEN:" — ohne Klammern. */
  children: string
}

export function Pending({ children }: Props) {
  // In der Quelle steht an einzelnen Stellen nur `[ZU BESTAETIGEN]` ohne
  // Praezisierung. Dann bleibt es beim Label — nichts wird dazuerfunden.
  const detail = children.trim()

  return (
    <mark className={styles.pending}>
      <span className={styles.label}>Zu bestätigen</span>
      {detail !== '' && (
        <>
          <span className="ac-visually-hidden">: </span>
          {detail}
        </>
      )}
    </mark>
  )
}
