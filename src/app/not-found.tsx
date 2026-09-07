import { Button } from '@/components/ui/Button'
import { defaultLocale, htmlLang } from '@/i18n/config'
import { getUi } from '@/i18n/messages/ui'
import { path } from '@/i18n/routes'
import { inter } from '@/lib/fonts'

import './globals.css'

/**
 * 404 fuer Adressen ausserhalb einer gueltigen Sprache.
 *
 * Diese Seite liegt oberhalb des Sprachlayouts und bringt darum ihr eigenes
 * `<html>` mit. Sie antwortet in der Leitsprache, weil an dieser Stelle nicht
 * feststeht, welche Sprache gemeint war.
 */
export default function NotFound() {
  const ui = getUi(defaultLocale)

  return (
    <html lang={htmlLang[defaultLocale]} className={inter.variable}>
      <body>
        <main id="inhalt" className="ac-section">
          <div className="ac-container ac-container--narrow">
            <hr className="ac-marker" />
            <h1>{ui.notFound.title}</h1>
            <p className="ac-lead">{ui.notFound.body}</p>
            <p style={{ marginTop: '1.5rem' }}>
              <Button href={path('home', defaultLocale)}>{ui.notFound.action}</Button>
            </p>
          </div>
        </main>
      </body>
    </html>
  )
}
