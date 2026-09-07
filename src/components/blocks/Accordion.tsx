import type { ReactNode } from 'react'

import { Icon } from '@/components/ui/Icon'

import styles from './Accordion.module.css'

/**
 * Aufklappbare Fragen und Antworten.
 *
 * Gebaut auf `<details>` und `<summary>` — kein JavaScript, keine Bibliothek,
 * kein `aria-expanded` von Hand. Das Aufklappen funktioniert auch dann, wenn
 * ein Skript nicht laedt, und die Tastaturbedienung bringt der Browser mit.
 *
 * Die Frage ist zugleich Ueberschrift: So bleiben die Fragen fuer
 * Screenreader und in der Gliederung auffindbar, auch wenn die Antwort
 * eingeklappt ist.
 *
 * Mehrere Fragen duerfen gleichzeitig offen sein. Ein Vergleich zwischen zwei
 * Antworten ist der haeufigste Grund, eine FAQ ueberhaupt zu lesen.
 *
 * Beim Drucken wird alles ausgeklappt.
 */

export type AccordionItem = {
  /** Knoten, weil die Frage eine Uebersetzungsmarke tragen kann. */
  question: ReactNode
  answer: ReactNode
}

type Props = {
  items: readonly AccordionItem[]
  /** Ueberschriftenebene der Fragen. */
  level?: 3 | 4
  className?: string
}

export function Accordion({ items, level = 3, className }: Props) {
  const Heading = `h${level}` as 'h3' | 'h4'

  return (
    <div className={[styles.accordion, className].filter(Boolean).join(' ')}>
      {items.map((item, index) => (
        <details key={index} className={styles.item}>
          <summary className={styles.summary}>
            <Heading className={styles.question}>{item.question}</Heading>
            <span className={styles.marker} aria-hidden="true">
              <Icon name="chevron" size={1.125} />
            </span>
          </summary>
          <div className={styles.answer}>{item.answer}</div>
        </details>
      ))}
    </div>
  )
}
