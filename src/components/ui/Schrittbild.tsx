import Image from 'next/image'

import styles from './Schrittbild.module.css'

/**
 * Die fuenf Bilder der Prozessleiste „Eine Stelle fuer Ihre Administration".
 *
 * Geliefert, nicht gezeichnet: Ricardo hat sie am 10.09.2026 als PNG
 * bereitgestellt. Sie werden gezeigt, wie sie sind — kein Filter, keine
 * Farbaenderung, kein Schatten, kein Beschnitt.
 *
 * Sie bringen ihre helle Kreisflaeche selbst mit; die Karte legt keine
 * dahinter. Alle fuenf sind quadratisch (1024 x 1024), also wirken sie ohne
 * weiteres Zutun gleich gross.
 *
 * Dekorativ: Unter jedem steht sein Begriff. Darum ein leerer Alternativtext.
 */

export type SchrittName =
  | 'gruendung'
  | 'buchhaltung'
  | 'lohn'
  | 'versicherungen'
  | 'steuern'

/** Ricardos Dateinamen, unveraendert — sie sind schon ohne Umlaut. */
const DATEIEN: Record<SchrittName, string> = {
  gruendung: '01_gruendung',
  buchhaltung: '02_buchhaltung',
  lohn: '03_lohn',
  versicherungen: '04_versicherungen',
  steuern: '05_steuern',
}

type Props = {
  name: SchrittName
  className?: string
}

export function Schrittbild({ name, className }: Props) {
  return (
    <Image
      className={[styles.bild, className].filter(Boolean).join(' ')}
      src={`/bilder/${DATEIEN[name]}.webp`}
      alt=""
      width={1024}
      height={1024}
      sizes="96px"
    />
  )
}
