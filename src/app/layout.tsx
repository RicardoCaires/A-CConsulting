import type { ReactNode } from 'react'

/**
 * Root-Layout.
 *
 * Bewusst leer: Die Auszeichnung `<html lang="…">` haengt von der Sprache ab
 * und wird darum erst in `app/[locale]/layout.tsx` gesetzt. Jede oeffentliche
 * Adresse liegt unter einer Sprache; die Wurzel `/` wird in `next.config.mjs`
 * auf die Leitsprache weitergeleitet.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children
}
