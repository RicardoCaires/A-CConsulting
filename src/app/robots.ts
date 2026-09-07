import type { MetadataRoute } from 'next'

import { company } from '@/lib/company'

/**
 * robots.txt — die Seite darf vollstaendig indexiert werden.
 *
 * Ausgenommen ist der Styleguide: Er zeigt die Bausteine mit Beispieldaten
 * und ist ein Arbeitsmittel, kein Inhalt. Er traegt zusaetzlich `noindex`.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/styleguide/',
    },
    sitemap: new URL('/sitemap.xml', company.url).toString(),
    host: company.url,
  }
}
