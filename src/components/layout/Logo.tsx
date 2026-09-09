import Image from 'next/image'

import { homeHref } from '@/i18n/routes'
import { getUi } from '@/i18n/messages/ui'
import type { Locale } from '@/i18n/config'

import styles from './Logo.module.css'

/**
 * Wortmarke als Link zur Startseite.
 *
 * Datei: `public/logo/ac-logo.png` — bitgleich mit der verbindlichen Fassung
 * im Corporate-Design-Standard. Nie nachbauen, nie einfaerben, nie verzerren:
 * Das Seitenverhaeltnis ist 4.55:1, die Hoehe ergibt sich immer aus der Breite.
 *
 * Im Kopfbereich bewusst klein. Das Logo ordnet die Seite ein, es traegt sie
 * nicht — die Aussage steht daneben im Text.
 */

const RATIO = 4.55

type Props = {
  locale: Locale
  /** Breite in Pixeln. Die Hoehe wird daraus abgeleitet. */
  width?: number
  variant?: 'color' | 'negativ'
  priority?: boolean
  /** Zusatzklasse des Links — der Kopfbereich setzt darueber seine Groesse. */
  className?: string
}

export function Logo({
  locale,
  width = 150,
  variant = 'color',
  priority = false,
  className,
}: Props) {
  const ui = getUi(locale)
  const src = variant === 'negativ' ? '/logo/ac-logo-negativ.png' : '/logo/ac-logo.png'

  return (
    <a
      className={[styles.link, className].filter(Boolean).join(' ')}
      href={homeHref(locale)}
      aria-label={ui.toHomepage}
    >
      <Image
        src={src}
        alt="A&C Consulting GmbH"
        width={width}
        height={Math.round(width / RATIO)}
        priority={priority}
        sizes={`${width}px`}
        className={styles.image}
      />
    </a>
  )
}
