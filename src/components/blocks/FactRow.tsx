import type { ReactNode } from 'react'

import type { IconName } from '@/components/ui/Icon'
import { IconCircle } from '@/components/ui/IconCircle'

import styles from './FactRow.module.css'

/**
 * Harte Angaben als Paare: Bezeichnung und Wert.
 *
 * Fuer alles, was ein Leser nachschlaegt statt liest — Oeffnungszeiten,
 * Fristen, Preisrahmen, Registernummern, Adresse. Solche Angaben in Saetze zu
 * verpacken macht sie laenger und schlechter auffindbar.
 *
 * Ausgegeben als `<dl>`: Die Zuordnung von Bezeichnung und Wert steht damit
 * auch fuer Hilfstechnik fest und haengt nicht an der Anordnung.
 */

export type Fact = {
  label: string
  value: ReactNode
  /** Optional. Nur setzen, wo das Icon die Zeile schneller lesbar macht. */
  icon?: IconName
}

type Props = {
  items: readonly Fact[]
  /** `rows` untereinander, `grid` ab Tablet zweispaltig. */
  layout?: 'rows' | 'grid'
  className?: string
}

export function FactRow({ items, layout = 'rows', className }: Props) {
  const classes = [styles.facts, layout === 'grid' ? styles.grid : styles.rows, className]
    .filter(Boolean)
    .join(' ')

  return (
    <dl className={classes}>
      {items.map((fact, index) => (
        <div key={index} className={styles.row}>
          {fact.icon && <IconCircle name={fact.icon} size="sm" className={styles.icon} />}
          <div className={styles.pair}>
            <dt className={styles.label}>{fact.label}</dt>
            <dd className={styles.value}>{fact.value}</dd>
          </div>
        </div>
      ))}
    </dl>
  )
}
