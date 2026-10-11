/**
 * Das Vorschaubild fuer geteilte Links.
 *
 * **Es steht hier und nicht je Seite**, weil Next.js `openGraph` nicht
 * zusammenfuehrt, sondern ersetzt: Sobald eine Seite ein eigenes
 * `openGraph` setzt, ist das des Layouts weg. Am 11.10.2026 fiel genau das
 * auf — `twitter:image` kam durch, `og:image` nicht, weil nur `openGraph`
 * ueberschrieben wird. Jede Seite holt das Bild darum von hier.
 */
export const ogBild = [{ url: '/bilder/og-vorschau.jpg', width: 1200, height: 630 }]
