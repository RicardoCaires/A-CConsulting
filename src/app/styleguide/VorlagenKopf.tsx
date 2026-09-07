import Link from 'next/link'

import styles from './VorlagenKopf.module.css'

/**
 * Band ueber einer Vorlagenvorschau.
 *
 * Sagt in drei Zeilen, was die Vorlage festlegt, und macht unmissverstaendlich,
 * dass darunter Beispieldaten stehen — kein Entwurf einer echten Seite.
 */

type Props = {
  name: string
  abfolge: string
  flaechen: string
  regel: string
}

export function VorlagenKopf({ name, abfolge, flaechen, regel }: Props) {
  return (
    <div className={styles.band}>
      <div className="ac-container">
        <p className={styles.warnung}>Vorschau mit Beispieldaten · nicht öffentlich</p>
        <p className={styles.name}>{name}</p>
        <dl className={styles.angaben}>
          <div>
            <dt>Abfolge</dt>
            <dd>{abfolge}</dd>
          </div>
          <div>
            <dt>Flächen</dt>
            <dd>{flaechen}</dd>
          </div>
          <div>
            <dt>Regel</dt>
            <dd>{regel}</dd>
          </div>
        </dl>
        <p className={styles.zurueck}>
          <Link href="/styleguide/">Zurück zum Styleguide</Link>
        </p>
      </div>
    </div>
  )
}
