import { Beitraege } from '@/components/blocks/Beitraege'
import { CTASection } from '@/components/blocks/CTASection'
import { Hero } from '@/components/blocks/Hero'
import { pruefeFlaechen, Section, type Surface } from '@/components/blocks/Section'
import { SectionHeader } from '@/components/blocks/SectionHeader'
import { Button } from '@/components/ui/Button'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
import { hatSichtbarenInhalt, RichText } from '@/components/ui/RichText'
import type { WissenContent } from '@/content/wissen'
import type { Locale } from '@/i18n/config'
import { getUi } from '@/i18n/messages/ui'
import { hrefOrDefault } from '@/i18n/routes'

import styles from './Wissensseite.module.css'

/**
 * Vorlage D — der Wissensbereich.
 *
 * Vier Abschnitte:
 *
 *   1 Einstieg            Seitenkopf wie auf den Leistungsseiten  — DOMINANT
 *   2 Hervorgehobener     ein Beitrag, gross, mit Bildflaeche     — weiss
 *   3 Weitere Beitraege   Raster                                  — hell
 *   4 Abschluss           eine Aussage, ein Knopf                 — FLAECHE
 *
 * Gestaltet wie eine Zeitschriftenseite, nicht wie ein Warenkorb: Datum,
 * Titel, Anriss, ein Verweis. Kein Rahmen, kein Schatten, keine Kachel mit
 * Schlagwort-Etiketten. Kategorien gibt es bewusst nicht — bei drei Themen
 * waeren sie ein Ordnungssystem ohne Unordnung.
 *
 * Eine Blaetterfunktion ist nicht gebaut. Sie kommt, wenn die Zahl der
 * Beitraege sie braucht, und nicht vorher.
 */

const FLAECHEN: readonly Surface[] = ['dominant', 'weiss', 'hell', 'flaeche']

type Props = {
  inhalt: WissenContent
  locale: Locale
}

export function WissensseiteTemplate({ inhalt, locale }: Props) {
  pruefeFlaechen(FLAECHEN, 'Wissensseite')
  const [, f2, f3, f4] = FLAECHEN as [Surface, Surface, Surface, Surface]
  const ui = getUi(locale)

  const { featured } = inhalt

  return (
    <>
      {/* ---- 1 Einstieg -------------------------------------------------- */}
      <Hero eyebrow={inhalt.hero.eyebrow} titel={inhalt.hero.heading} satz={inhalt.hero.lead} />

      {/* ---- 2 Hervorgehobener Beitrag ------------------------------------ */}
      <Section surface={f2} labelledBy="hervorgehoben">
        {inhalt.hinweis && <p className={styles.hinweis}>{inhalt.hinweis}</p>}

        <article className={styles.featured}>
          <div className={styles.featuredText}>
            {hatSichtbarenInhalt(featured.datum) && (
              <p className={styles.datum}>
                <RichText value={featured.datum} />
              </p>
            )}

            <h2 id="hervorgehoben" className={styles.featuredTitel}>
              <RichText value={featured.titel} />
            </h2>

            {hatSichtbarenInhalt(featured.anriss) && (
              <p className={styles.featuredAnriss}>
                <RichText value={featured.anriss} />
              </p>
            )}

            {featured.href ? (
              <a className={styles.featuredLink} href={featured.href}>
                {inhalt.weiterlesen}
              </a>
            ) : (
              <span className={styles.pending}>
                {inhalt.weiterlesen}
                <span className={styles.badge}>{ui.pageComing.badge}</span>
                <span className="ac-visually-hidden"> {ui.pageComing.hint}</span>
              </span>
            )}
          </div>

          {featured.bild && (
            <div className={styles.featuredBild}>
              <ImagePlaceholder label={featured.bild.label} note={featured.bild.note} />
            </div>
          )}
        </article>
      </Section>

      {/* ---- 3 Weitere Beitraege ------------------------------------------ */}
      {inhalt.weitere.length > 0 && (
        <Section surface={f3} labelledBy="weitere">
          <SectionHeader id="weitere" heading={inhalt.weitereTitel} />
          <Beitraege
            beitraege={inhalt.weitere.map((beitrag) => ({
              datum: beitrag.datum,
              titel: beitrag.titel,
              anriss: beitrag.anriss,
              href: beitrag.href ?? undefined,
            }))}
            locale={locale}
            weiterlesen={inhalt.weiterlesen}
            ziel="keines"
          />
        </Section>
      )}

      {/* ---- 4 Abschluss --------------------------------------------------- */}
      <CTASection
        surface={f4}
        heading={inhalt.abschluss.heading}
        lead={<p>{inhalt.abschluss.satz}</p>}
        showContact
        actions={
          <Button href={hrefOrDefault('kontakt', locale)}>{inhalt.abschluss.knopf}</Button>
        }
      />
    </>
  )
}
