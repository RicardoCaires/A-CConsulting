import type { MetadataRoute } from 'next'

import { htmlLang, locales } from '@/i18n/config'
import { isPublished, pages, path, publishedPages } from '@/i18n/routes'
import { company } from '@/lib/company'

/**
 * Sitemap.
 *
 * Enthaelt nur, was tatsaechlich veroeffentlicht ist. Eine Seite, deren
 * Uebersetzung noch fehlt, taucht in dieser Sprache nicht auf.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    for (const key of publishedPages(locale)) {
      entries.push({
        url: new URL(path(key, locale), company.url).toString(),
        priority: pages[key].sitemapPriority,
        alternates: {
          languages: Object.fromEntries(
            locales
              .filter((candidate) => isPublished(key, candidate))
              .map((candidate) => [
                htmlLang[candidate],
                new URL(path(key, candidate), company.url).toString(),
              ]),
          ),
        },
      })
    }
  }

  return entries
}
