import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import { htmlLang } from '@/i18n/config'
import { inter, sourceSerif } from '@/lib/fonts'

import '../globals.css'

/**
 * Styleguide — Arbeitsmittel, kein Inhalt.
 *
 * Zeigt die geteilten Bausteine mit Beispieldaten, damit Form und Verhalten
 * beurteilbar sind, ohne dass echte Inhalte vorliegen muessen. Alles hier
 * Sichtbare ist erfunden und ausdruecklich als Beispiel gekennzeichnet — es
 * darf nie auf einer oeffentlichen Seite auftauchen.
 *
 * Eigenes Layout, weil der Styleguide ausserhalb von `/[locale]/` liegt und
 * weder Kopf- noch Fussbereich braucht.
 */

export const metadata: Metadata = {
  title: 'Styleguide — A&C',
  robots: { index: false, follow: false },
}

export default function StyleguideLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={htmlLang.de} className={`${inter.variable} ${sourceSerif.variable}`}>
      <body>{children}</body>
    </html>
  )
}
