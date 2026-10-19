import { RichText } from '@/components/ui/RichText'
import { VorsorgeKarte } from '@/components/ui/VorsorgeKarte'
import { NEWS_TEXTE, datumLang } from '@/lib/news'
import type { Beitrag } from '@/content/seiten/typen'
import type { Locale } from '@/i18n/config'
import { path } from '@/i18n/routes'
import { company } from '@/lib/company'

import seite from './Seite.module.css'
import styles from './News.module.css'

/**
 * «News und Blog» (15.10.2026), nach dem Vorbild simply.ch: oben der neueste
 * Beitrag gross, daneben die weiteren als Liste. Keine Bilder – es gibt keine
 * lizenzierten Aufnahmen dafür, und erfundene Stockbilder schliesst die
 * Hausordnung aus. Der Beitrag selbst ist ruhiger Fliesstext mit Zwischentiteln.
 */

const href = (locale: Locale, slug: string) => `${path('news', locale)}${slug}/`

function Marke({ b, locale }: { b: Beitrag; locale: Locale }) {
  const T = NEWS_TEXTE[locale]
  return (
    <span className={styles.marke}>
      {T.art[b.art]}
      {b.freigegeben ? null : <span className={styles.entwurf}>{T.entwurf}</span>}
    </span>
  )
}

export function NewsUebersicht({ beitraege, locale }: { beitraege: readonly Beitrag[]; locale: Locale }) {
  const T = NEWS_TEXTE[locale]
  const [erster, ...weitere] = beitraege
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
            <div className={styles.raster}>
              <a className={styles.gross} href={href(locale, erster.slug)}>
                <Marke b={erster} locale={locale} />
                <span className={styles.grossTitel}>{erster.titel}</span>
                <span className={styles.kurz}>{erster.kurz}</span>
                <span className={styles.meta}>
                  {datumLang(erster.datum, locale)} · {erster.minuten} {T.lesezeit}
                </span>
              </a>
              {weitere.length ? (
                <ul className={styles.liste}>
                  {weitere.map((b) => (
                    <li key={b.slug}>
                      <a href={href(locale, b.slug)}>
                        <Marke b={b} locale={locale} />
                        <span className={styles.listeTitel}>{b.titel}</span>
                        <span className={styles.meta}>{datumLang(b.datum, locale)}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
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
                  {a.punkte.map((p) => (
                    <li key={p}>{p}</li>
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
            <p className={styles.ctaText}>{T.ctaText}</p>
            <div className={seite.knoepfe}>
              <a className={seite.knopf} href={path('kontakt', locale)}>
                {T.ctaKnopf}
              </a>
              <a className={`${seite.knopf} ${seite.knopfZweit}`} href={`tel:${company.phoneE164}`}>
                {T.ctaAnrufen} {company.phone}
              </a>
            </div>
          </aside>

          {b.hinweis ? <p className={styles.hinweis}>{b.hinweis}</p> : null}
        </article>
      </div>
    </div>
  )
}
