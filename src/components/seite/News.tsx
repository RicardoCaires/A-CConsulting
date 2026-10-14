import { RichText } from '@/components/ui/RichText'
import { datumLang } from '@/lib/news'
import type { Beitrag } from '@/content/seiten/typen'
import type { Locale } from '@/i18n/config'
import { path } from '@/i18n/routes'

import seite from './Seite.module.css'
import styles from './News.module.css'

/**
 * «News und Blog» (15.10.2026), nach dem Vorbild simply.ch: oben der neueste
 * Beitrag gross, daneben die weiteren als Liste. Keine Bilder – es gibt keine
 * lizenzierten Aufnahmen dafür, und erfundene Stockbilder schliesst die
 * Hausordnung aus. Der Beitrag selbst ist ruhiger Fliesstext mit Zwischentiteln.
 */

const href = (locale: Locale, slug: string) => `${path('news', locale)}${slug}/`

function Marke({ b }: { b: Beitrag }) {
  return (
    <span className={styles.marke}>
      {b.art}
      {b.freigegeben ? null : <span className={styles.entwurf}>Entwurf</span>}
    </span>
  )
}

export function NewsUebersicht({ beitraege, locale }: { beitraege: readonly Beitrag[]; locale: Locale }) {
  const [erster, ...weitere] = beitraege
  return (
    <div className={`${seite.seite} ${seite.seiteOhneBanner}`}>
      <div className={`ac-container ${seite.bloecke}`}>
        <section className={seite.block} aria-labelledby="news-titel">
          <h1 id="news-titel" className={`${seite.titel} ${seite.titelGross}`}>
            News und <span className={seite.akzent}>Blog</span>
          </h1>
          <p className={seite.einleitung}>Was sich bei A&C tut, und was Sie zu Versicherungen, Steuern und Treuhand wissen sollten.</p>

          {erster ? (
            <div className={styles.raster}>
              <a className={styles.gross} href={href(locale, erster.slug)}>
                <Marke b={erster} />
                <span className={styles.grossTitel}>{erster.titel}</span>
                <span className={styles.kurz}>{erster.kurz}</span>
                <span className={styles.meta}>
                  {datumLang(erster.datum)} · {erster.minuten} Min. Lesezeit
                </span>
              </a>
              {weitere.length ? (
                <ul className={styles.liste}>
                  {weitere.map((b) => (
                    <li key={b.slug}>
                      <a href={href(locale, b.slug)}>
                        <Marke b={b} />
                        <span className={styles.listeTitel}>{b.titel}</span>
                        <span className={styles.meta}>{datumLang(b.datum)}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ) : (
            <p className={seite.absatz}>Die ersten Beiträge folgen in Kürze.</p>
          )}
        </section>
      </div>
    </div>
  )
}

export function NewsBeitrag({ b, locale }: { b: Beitrag; locale: Locale }) {
  return (
    <div className={`${seite.seite} ${seite.seiteOhneBanner}`}>
      <div className={`ac-container ${seite.bloecke}`}>
        <article className={`${seite.block} ${styles.artikel}`} aria-labelledby="beitrag-titel">
          <a className={styles.zurueck} href={path('news', locale)}>
            ← News und Blog
          </a>
          <Marke b={b} />
          <h1 id="beitrag-titel" className={`${seite.titel} ${seite.titelGross} ${styles.artikelTitel}`}>
            {b.titel}
          </h1>
          <p className={styles.meta}>
            {datumLang(b.datum)} · {b.minuten} Min. Lesezeit
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
            </section>
          ))}

          {b.hinweis ? <p className={styles.hinweis}>{b.hinweis}</p> : null}
        </article>
      </div>
    </div>
  )
}
