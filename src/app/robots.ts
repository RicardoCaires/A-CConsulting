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

/**
 * Beim statischen Export gibt es keine Laufzeit, die diese Datei auf Anfrage
 * erzeugen koennte. Sie wird darum beim Bau einmal geschrieben — ohne diese
 * Zeile bricht `next build` mit `output: 'export'` ab.
 */
export const dynamic = 'force-static'
