import { Accordion } from '@/components/blocks/Accordion'
import { CTASection } from '@/components/blocks/CTASection'
import { Hero } from '@/components/blocks/Hero'
import { IconFeatureGrid } from '@/components/blocks/IconFeature'
import { pruefeFlaechen, Section, type Surface } from '@/components/blocks/Section'
import { SectionHeader } from '@/components/blocks/SectionHeader'
import { StepList } from '@/components/blocks/StepList'
import { Button } from '@/components/ui/Button'
import { RichText } from '@/components/ui/RichText'
import { alsText, Translated, TranslatedRich } from '@/components/ui/Translated'
import type { Leistungsseite } from '@/content/schema'
import type { Locale } from '@/i18n/config'
import { getUi } from '@/i18n/messages/ui'
import { hrefOrDefault } from '@/i18n/routes'

import styles from './Leistungsseite.module.css'

/**
 * Vorlage B — Leistungsseite.
 *
 * Jede Leistung ist gleich aufgebaut, damit der Besucher sich nur einmal
 * zurechtfinden muss:
 *
 *   1 Seitenkopf     einspaltig, Bild als Flaeche, Titel darauf  — DOMINANT
 *   2 Leistungen     Icon-Raster statt Absaetzen                  — weiss
 *   3 Ablauf         nummerierte Schritte                         — hell
 *   4 Vertiefung     optional; hier landet abgegebener Fliesstext — weiss
 *   5 Fragen         Accordion                                    — hell
 *   6 Abschluss      CTASection                                   — FLAECHE
 *
 * Fest ist die **Reihenfolge**, nicht der Wortlaut: Die drei Zwischentitel
 * kommen aus dem Inhalt, weil Schritt 4 je Seite eigene Ueberschriften nennt
 * und die nicht vereinheitlicht werden.
 *
 * Die Flaechen folgen dem Corporate-Design-Standard 1.1 (`flaechen_website`):
 * Der Seitenkopf ist die **eine** dominante Flaeche, der Abschluss eine
 * wiederkehrende. Dazwischen wechseln weiss und Off-White — wenige hohe
 * Bloecke statt vieler schwacher Toenungen.
 *
 * `pruefeFlaechen` prueft das Ergebnis und wirft im Zweifel; der Build bricht,
 * statt dass eine Seite gegen die Regel live geht.
 */

/**
 * Flaechen der Inhaltsabschnitte zwischen Kopf und Abschluss.
 *
 * Sie wechseln weiss und Off-White. Der Kopf ist immer dominant, der Abschluss
 * bringt seine Flaeche selbst mit — beide zaehlen hier nicht mit.
 */
function flaechenFolge(anzahl: number): Surface[] {
  return Array.from({ length: anzahl }, (_, i) => (i % 2 === 0 ? 'weiss' : 'hell'))
}

type Props = {
  inhalt: Leistungsseite
  locale: Locale
}

export function LeistungsseiteTemplate({ inhalt, locale }: Props) {
  const ui = getUi(locale)

  // Kopf und Abschluss bringen ihre Flaeche selbst mit.
  const flaechen = flaechenFolge(inhalt.vertiefung ? 4 : 3)
  const fAbschluss: Surface = inhalt.ctaVariante === 'flaeche' ? 'flaeche' : 'hell'

  pruefeFlaechen(['dominant', ...flaechen, fAbschluss], String(inhalt.slug))

  const [fLeistungen, fAblauf, fDrei, fVier] = flaechen as [
    Surface,
    Surface,
    Surface,
    Surface | undefined,
  ]
  const fVertiefung = inhalt.vertiefung ? fDrei : undefined
  const fFragen = inhalt.vertiefung ? (fVier ?? 'hell') : fDrei

  const knopf = alsText(inhalt.cta.knopf, ui.page.kontakt)

  return (
    <>
      {/* ---- 1 Seitenkopf — die dominante Flaeche der Seite -------------- */}
      <Hero
        eyebrow={ui.page[inhalt.bereich]}
        titel={<Translated value={inhalt.titel} fallback={ui.page[inhalt.slug]} />}
        satz={<TranslatedRich value={inhalt.nutzenSatz} />}
        aktion={<Button href={hrefOrDefault('kontakt', locale)}>{knopf}</Button>}
        bild={inhalt.bild ?? undefined}
      />

      {/* ---- 2 Das übernehmen wir ---------------------------------------- */}
      <Section surface={fLeistungen} id="leistungen" labelledBy="leistungen-titel">
        <SectionHeader
          id="leistungen-titel"
          heading={<Translated value={inhalt.abschnitte.leistungen} />}
        />

        <IconFeatureGrid
          columns={3}
          items={inhalt.leistungen.map((leistung) => ({
            icon: leistung.icon,
            heading: <Translated value={leistung.titel} />,
            body:
              leistung.chips.length > 0 ? (
                <span className={styles.chips}>
                  {leistung.chips.slice(0, 3).map((chip, i) => (
                    <span key={i} className={styles.chip}>
                      <Translated value={chip} />
                    </span>
                  ))}
                </span>
              ) : undefined,
          }))}
        />
      </Section>

      {/* ---- 3 Ablauf ----------------------------------------------------- */}
      <Section surface={fAblauf} id="ablauf" labelledBy="ablauf-titel">
        <SectionHeader
          id="ablauf-titel"
          heading={<Translated value={inhalt.abschnitte.ablauf} />}
        />
        <StepList
          steps={inhalt.ablauf.map((schritt) => ({
            heading: <Translated value={schritt.titel} />,
            body: <TranslatedRich value={schritt.text} />,
          }))}
        />
      </Section>

      {/* ---- 4 Vertiefung, optional --------------------------------------- */}
      {inhalt.vertiefung && fVertiefung && (
        <Section surface={fVertiefung} id="vertiefung" labelledBy="vertiefung-titel" measure>
          <SectionHeader
            id="vertiefung-titel"
            heading={<Translated value={inhalt.vertiefung.titel} />}
          />
          <div className={styles.vertiefung}>
            {inhalt.vertiefung.absaetze.map((absatz, index) => (
              <p key={index}>
                <TranslatedRich value={absatz} />
              </p>
            ))}

            {inhalt.vertiefung.liste && (
              <ul className={styles.liste}>
                {inhalt.vertiefung.liste.map((eintrag, index) => (
                  <li key={index}>
                    <RichText value={eintrag} />
                  </li>
                ))}
              </ul>
            )}

            {inhalt.vertiefung.nachsatz?.map((absatz, index) => (
              <p key={index}>
                <RichText value={absatz} />
              </p>
            ))}
          </div>
        </Section>
      )}

      {/* ---- 5 Häufige Fragen --------------------------------------------- */}
      <Section surface={fFragen} id="fragen" labelledBy="fragen-titel">
        <SectionHeader
          id="fragen-titel"
          heading={<Translated value={inhalt.abschnitte.fragen} />}
        />
        <Accordion
          items={inhalt.faq.map((eintrag) => ({
            question: <Translated value={eintrag.frage} />,
            answer: <TranslatedRich value={eintrag.antwort} />,
          }))}
        />
      </Section>

      {/* ---- 6 Abschluss --------------------------------------------------- */}
      <CTASection
        id="abschluss"
        heading={<Translated value={inhalt.cta.titel} />}
        surface={fAbschluss}
        lead={
          <p>
            <TranslatedRich value={inhalt.cta.text} />
          </p>
        }
        actions={<Button href={hrefOrDefault('kontakt', locale)}>{knopf}</Button>}
      />
    </>
  )
}
