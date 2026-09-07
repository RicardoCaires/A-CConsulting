/**
 * A&C Consulting — Next.js Konfiguration
 *
 * Grundhaltung: so wenig Laufzeit wie moeglich. Inhaltsseiten werden statisch
 * erzeugt, JavaScript nur dort, wo eine Funktion es zwingend braucht.
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // Saubere Pfade mit Schraegstrich am Ende: /de/versicherungen/
  trailingSlash: true,

  eslint: {
    dirs: ['src', 'scripts'],
  },

  typescript: {
    // Kein Build mit Typfehlern.
    ignoreBuildErrors: false,
  },

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

export default nextConfig
