import { Inter, Source_Serif_4 } from 'next/font/google'

/**
 * Die zwei Schriften der Website.
 *
 * Beide werden von Next.js beim Bauen heruntergeladen und mit der Seite
 * ausgeliefert. Zur Laufzeit geht kein Aufruf an einen fremden Server —
 * das ist Bedingung, keine Bequemlichkeit (Datenschutz, revDSG).
 *
 * Corporate-Design-Standard 1.1, `font.website_display`:
 *   Fliesstext  Inter
 *   Überschrift Source Serif 4, nur h1 bis h3
 *
 * Die Hierarchie soll der Schriftwechsel tragen, nicht die Schriftgroesse.
 * Dokumente bleiben davon unberuehrt und stehen weiterhin in Arial.
 *
 * SF Pro ist ausgeschlossen: lizenzrechtlich nicht fuer Websites nutzbar.
 */

export const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--ac-font-inter',
  // Nur die tatsaechlich verwendeten Schnitte laden.
  weight: ['400', '500', '600', '700'],
})

/**
 * Source Serif 4 — Adobe, SIL Open Font License 1.1, geprueft 07.09.2026.
 *
 * `latin` und `latin-ext` decken DE, FR und PT vollstaendig ab: Die noetigen
 * Zeichen (ç à è é ê î ô û ã õ á í ú ä ö ü) liegen bereits im Grundsubset.
 *
 * Variabler Schnitt, darum kein `weight`-Array — die Schrift bringt den
 * ganzen Bereich in einer Datei mit.
 */
export const sourceSerif = Source_Serif_4({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--ac-font-source-serif',
  style: ['normal'],
})
