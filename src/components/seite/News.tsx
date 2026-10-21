import { RichText } from '@/components/ui/RichText'
import { VorsorgeKarte } from '@/components/ui/VorsorgeKarte'
import { NEWS_TEXTE, datumLang } from '@/lib/news'
import type { Beitrag } from '@/content/seiten/typen'
import type { Locale } from '@/i18n/config'
import { path } from '@/i18n/routes'

import seite from './Seite.module.css'
import styles from './News.module.css'

/**
 * «News und Blog» (15.10.2026). Übersicht seit dem 21.10.2026 als Karten in der
 * Bildsprache der Listenkarten (16.10.2026): weisse Karte, farbige Oberkante,
 * getönter Kopf, Hub beim Zeigen. Der neueste Beitrag steht gross über die ganze
 * Breite — vorher lag er in einer 1.25fr-Spalte, und solange es nur einen
 * Beitrag gibt, blieb die zweite Spalte leer (Ricardo, 21.10.2026: «das sieht
 * alles noch etwas langweillig aus»).
 *
 * Keine Bilder — es gibt keine lizenzierten Aufnahmen dafür, und erfundene
 * Stockbilder schliesst die Hausordnung aus. Was die grosse Karte füllt, sind
 * die Zwischentitel des Beitrags: echter Inhalt, nichts Erfundenes.
 */

const href = (locale: Locale, slug: string) => `${path('news', locale)}${slug}/`

/** Farbton je Karte, wie bei den Listenkarten: Grün, Navy, Grau im Wechsel. */
const TOENE = [undefined, 'navy', 'grau'] as const

function Marke({ b, locale }: { b: Beitrag; locale: Locale }) {
  const T = NEWS_TEXTE[locale]
  return (
    <span className={styles.marke}>
      {T.art[b.art]}
      {b.freigegeben ? null : <span className={styles.entwurf}>{T.entwurf}</span>}
    </span>
  )
}

function Kopf({ b, locale, mitLesezeit = false }: { b: Beitrag; locale: Locale; mitLesezeit?: boolean }) {
  const T = NEWS_TEXTE[locale]
  return (
    <span className={styles.kopf}>
      <Marke b={b} locale={locale} />
      <span className={styles.meta}>
        {datumLang(b.datum, locale)}
        {mitLesezeit ? ` · ${b.minuten} ${T.lesezeit}` : null}
      </span>
    </span>
  )
}

function Lesen({ locale }: { locale: Locale }) {
  return (
    <span className={styles.lesen}>
      {NEWS_TEXTE[locale].lesen}
      <span aria-hidden="true">→</span>
    </span>
  )
}

export function NewsUebersicht({ beitraege, locale }: { beitraege: readonly Beitrag[]; locale: Locale }) {
  const T = NEWS_TEXTE[locale]
  const [erster, ...weitere] = beitraege
  // Die Zwischentitel des Beitrags als Inhaltsverzeichnis der grossen Karte
  const themen = (erster?.abschnitte ?? []).map((a) => a.zwischentitel).filter((t): t is string => !!t).slice(0, 4)

  return (
    <div className={`${seite.seite} ${seite.seiteOhneBanner}`}>
      <div className={`ac-container ${seite.bloecke}`}>
        <section className={seite.block} aria-labelledby="news-titel">
          <h1 id="news-titel" className={`${seite.titel} ${seite.titelGross}`}>
            {T.vor}
            <span className={seite.akzent}>{T.akzent}</span>
          </h1>
          <p className={seite.einleitung}>{T.einleitung}</p>

          {erster ? (
            <div className={styles.karten}>
              <a className={`${styles.karte} ${styles.gross}`} href={href(locale, erster.slug)}>
                <Kopf b={erster} locale={locale} mitLesezeit />
                <span className={styles.koerper}>
                  <span className={styles.haupt}>
                    <span className={styles.grossTitel}>{erster.titel}</span>
                    <span className={styles.kurz}>{erster.kurz}</span>
                    <Lesen locale={locale} />
                  </span>
                  {themen.length ? (
                    <span className={styles.themen}>
                      <span className={styles.themenTitel}>{T.imBeitrag}</span>
                      {themen.map((t) => (
                        <span key={t} className={styles.thema}>
                          {t}
                        </span>
                      ))}
                    </span>
                  ) : null}
                </span>
              </a>

              {weitere.map((b, i) => (
                <a key={b.slug} className={styles.karte} data-ton={TOENE[(i + 1) % TOENE.length]} href={href(locale, b.slug)}>
                  <Kopf b={b} locale={locale} />
                  <span className={styles.koerper}>
                    <span className={styles.kleinTitel}>{b.titel}</span>
                    <span className={styles.kurz}>{b.kurz}</span>
                    <Lesen locale={locale} />
                  </span>
                </a>
              ))}
            </div>
          ) : (
            <p className={seite.absatz}>{T.leer}</p>
          )}
        </section>
      </div>
    </div>
  )
}

export function NewsBeitrag({ b, locale }: { b: Beitrag; locale: Locale }) {
  const T = NEWS_TEXTE[locale]
  return (
    <div className={`${seite.seite} ${seite.seiteOhneBanner}`}>
      <div className={`ac-container ${seite.bloecke}`}>
        <article className={`${seite.block} ${styles.artikel}`} aria-labelledby="beitrag-titel">
          <a className={styles.zurueck} href={path('news', locale)}>
            {T.zurueck}
          </a>
          <Marke b={b} locale={locale} />
          <h1 id="beitrag-titel" className={`${seite.titel} ${seite.titelGross} ${styles.artikelTitel}`}>
            {b.titel}
          </h1>
          <p className={styles.meta}>
            {datumLang(b.datum, locale)} · {b.minuten} {T.lesezeit}
          </p>
          <p className={styles.lead}>{b.kurz}</p>

          {b.abschnitte.map((a, i) => (
            <section key={i} className={styles.abschnitt}>
              {a.zwischentitel ? <h2 className={styles.zwischentitel}>{a.zwischentitel}</h2> : null}
              {a.absaetze.map((p, j) => (
                <p key={j} className={styles.text}>
                  <RichText value={p} />
                </p>
              ))}
              {a.punkte?.length ? (
                <ul className={seite.haken}>
                  {a.punkte.map((p, j) => (
                    <li key={j}>
                      <RichText value={p} />
                    </li>
                  ))}
                </ul>
              ) : null}
              {a.baustein === 'vorsorgeKarte' ? <VorsorgeKarte locale={locale} /> : null}
            </section>
          ))}

          {/* Abschluss jedes Beitrags: ein Weg zum Gespräch (Ricardo, 19.10.2026) */}
          <aside className={styles.cta} aria-labelledby="beitrag-cta">
            <h2 id="beitrag-cta" className={styles.ctaTitel}>
              {T.ctaTitel}
            </h2>
            <p className={styles.ctaText}>{b.abschluss ?? T.ctaText}</p>
            {/* Nur ein Weg: Termin. Der Anrufknopf ist am 21.10.2026 auf Ricardos
                Anweisung entfallen — die Nummer steht im Fussbereich jeder Seite. */}
            <div className={seite.knoepfe}>
              <a className={seite.knopf} href={path('kontakt', locale)}>
                {T.ctaKnopf}
              </a>
            </div>
          </aside>

          {b.hinweis ? <p className={styles.hinweis}>{b.hinweis}</p> : null}
        </article>
      </div>
    </div>
  )
}
