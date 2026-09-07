import { Accordion } from '@/components/blocks/Accordion'
import { CTASection } from '@/components/blocks/CTASection'
import { IconFeatureGrid } from '@/components/blocks/IconFeature'
import { pruefeFlaechen, Section, type Surface } from '@/components/blocks/Section'
import { SectionHeader } from '@/components/blocks/SectionHeader'
import { StepList } from '@/components/blocks/StepList'
import { Button } from '@/components/ui/Button'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
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
 *   1 Seitenkopf     Titel, Nutzen in einem Satz, Bild
 *   2 Leistungen     Icon-Raster statt Absaetzen
 *   3 Ablauf         nummerierte Schritte
 *   4 Vertiefung     optional; hier landet abgegebener Fliesstext
 *   5 Fragen         Accordion
 *   6 Abschluss      CTASection
 *
 * Fest ist die **Reihenfolge**, nicht der Wortlaut: Die drei Zwischentitel
 * kommen aus dem Inhalt, weil Schritt 4 je Seite eigene Ueberschriften nennt
 * und die nicht vereinheitlicht werden.
 *
 * Die Flaechen werden berechnet, nicht von Hand gesetzt — siehe
 * `flaechenFolge`. `pruefeFlaechen` prueft das Ergebnis und wirft im Zweifel;
 * der Build bricht, statt dass eine Seite mit zwei gleichen Flaechen
 * hintereinander live geht.
 */

/**
 * Flaechenfolge der Inhaltsabschnitte.
 *
 * Der Abschluss gibt vor, worauf es hinauslaeuft: Ist er hell, muss der
 * Abschnitt davor weiss sein. Daraus ergibt sich rueckwaerts, womit der
 * Seitenkopf beginnt. Ist der Abschluss dunkel, gibt es keine Einschraenkung
 * und der Kopf startet hell.
 */
function flaechenFolge(anzahl: number, ctaDunkel: boolean): Surface[] {
  const start: Surface = ctaDunkel || anzahl % 2 === 0 ? 'hell' : 'weiss'
  const anderes: Surface = start === 'hell' ? 'weiss' : 'hell'
  return Array.from({ length: anzahl }, (_, i) => (i % 2 === 0 ? start : anderes))
}

type Props = {
  inhalt: Leistungsseite
  locale: Locale
}

export function LeistungsseiteTemplate({ inhalt, locale }: Props) {
  const ui = getUi(locale)

  // Der Abschluss bringt seine Flaeche selbst mit und zaehlt hier nicht mit.
  const anzahl = inhalt.vertiefung ? 5 : 4
  const ctaDunkel = inhalt.ctaVariante === 'dunkel'
  const flaechen = flaechenFolge(anzahl, ctaDunkel)
  const fAbschluss: Surface = ctaDunkel ? 'dunkel' : 'hell'

  pruefeFlaechen([...flaechen, fAbschluss], String(inhalt.slug))

  const [fKopf, fLeistungen, fAblauf, fVier, fFuenf] = flaechen as [
    Surface,
    Surface,
    Surface,
    Surface,
    Surface | undefined,
  ]
  const fVertiefung = inhalt.vertiefung ? fVier : undefined
  const fFragen = inhalt.vertiefung ? (fFuenf ?? 'hell') : fVier

  const knopf = alsText(inhalt.cta.knopf, ui.page.kontakt)

  return (
    <>
      {/* ---- 1 Seitenkopf ------------------------------------------------ */}
      <Section surface={fKopf} labelledBy="seitenkopf-titel">
        <div className={styles.kopf}>
          <div className={styles.kopfText}>
            <p className="ac-eyebrow">{ui.page[inhalt.bereich]}</p>

            <h1 id="seitenkopf-titel" className={styles.titel}>
              <Translated value={inhalt.titel} fallback={ui.page[inhalt.slug]} />
            </h1>

            <p className={`ac-lead ${styles.nutzen}`}>
              <TranslatedRich value={inhalt.nutzenSatz} />
            </p>

            <div className={styles.kopfAktion}>
              <Button href={hrefOrDefault('kontakt', locale)}>{knopf}</Button>
            </div>
          </div>

          {inhalt.bild && (
            <ImagePlaceholder
              className={styles.kopfBild}
              label={inhalt.bild.label}
              note={inhalt.bild.note}
            />
          )}
        </div>
      </Section>

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
