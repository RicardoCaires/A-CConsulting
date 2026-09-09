/**
 * A&C Consulting — Next.js Konfiguration
 *
 * Grundhaltung: so wenig Laufzeit wie moeglich. Inhaltsseiten werden statisch
 * erzeugt, JavaScript nur dort, wo eine Funktion es zwingend braucht.
 *
 * Seit dem 09.09.2026 ist das keine Haltung mehr, sondern eine Zusage: Der Bau
 * erzeugt mit `output: 'export'` reine Dateien nach `out/`. Es gibt keinen
 * Server, der die Seite zusammensetzt — was ausgeliefert wird, liegt fertig da.
 * Gehostet wird auf Cloudflare Pages.
 *
 * Was ein Server sonst uebernaehme, uebernehmen zwei Dateien im `public/`-Ordner
 * und werden unveraendert nach `out/` kopiert:
 *
 *   public/_redirects   die Weiterleitung der Wurzel auf /de/
 *   public/_headers     die Sicherheits-Header
 *
 * Beide stehen darum **nicht** mehr in dieser Datei — `redirects()` und
 * `headers()` sind beim statischen Export wirkungslos, und Next.js warnt bei
 * jedem Bau davor. Fuer den Entwicklungsserver gelten sie weiterhin (siehe
 * unten), damit `npm run dev` sich verhaelt wie die veroeffentlichte Seite.
 */

/** Laeuft der Entwicklungsserver? Dann traegt Next.js die Regeln selbst. */
const istEntwicklung = process.env.NODE_ENV === 'development'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // Reine Dateien statt Laufzeit. Ziel: out/
  output: 'export',

  // Ohne Server gibt es keine Bildoptimierung zur Laufzeit. Das einzige Bild
  // ist heute das Logo, und das liegt bereits in der richtigen Groesse vor.
  images: { unoptimized: true },

  // Saubere Pfade mit Schraegstrich am Ende: /de/versicherungen/
  // Beim Export entsteht daraus out/de/versicherungen/index.html — genau das,
  // was ein Dateiserver ohne Zutun ausliefert.
  trailingSlash: true,

  eslint: {
    dirs: ['src', 'scripts'],
  },

  typescript: {
    // Kein Build mit Typfehlern.
    ignoreBuildErrors: false,
  },

  // Nur fuer den Entwicklungsserver. In der veroeffentlichten Fassung machen
  // das public/_redirects und public/_headers — die beiden Dateien sind
  // massgeblich, diese hier haelt nur `npm run dev` gleichauf.
  ...(istEntwicklung
    ? {
        async redirects() {
          return [
            // Die Wurzel fuehrt auf die Leitsprache. Bewusst dauerhaft (308):
            // /de/ ist die kanonische Startseite.
            { source: '/', destination: '/de/', permanent: true },
          ]
        },

        async headers() {
          return [
            {
              source: '/:path*',
              headers: [
                { key: 'X-Content-Type-Options', value: 'nosniff' },
                { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
                { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
                {
                  key: 'Permissions-Policy',
                  value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
                },
              ],
            },
          ]
        },
      }
    : {}),
}

export default nextConfig
