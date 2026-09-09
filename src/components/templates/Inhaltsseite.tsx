import type { ReactNode } from 'react'

import { Accordion, type AccordionItem } from '@/components/blocks/Accordion'
import { CTASection } from '@/components/blocks/CTASection'
import { FactRow, type Fact } from '@/components/blocks/FactRow'
import { PersonCard, PersonGrid, type Person } from '@/components/blocks/PersonCard'
import { pruefeFlaechen, Section, type Surface } from '@/components/blocks/Section'
import { SectionHeader } from '@/components/blocks/SectionHeader'
import { Button } from '@/components/ui/Button'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
import type { Locale } from '@/i18n/config'
import { hrefOrDefault, type PageKey } from '@/i18n/routes'

import styles from './Inhaltsseite.module.css'

/**
 * Vorlage C — Inhaltsseite.
 *
 * Fuer Ueber uns, Kontakt und die Rechtstexte. Anders als Vorlage B ist hier
 * nicht die Abfolge festgelegt, sondern der Vorrat: Titel, Einleitung und
 * danach frei kombinierbare Abschnitte.
 *
 * **Kein Zwang zu Icons.** Ein Rechtstext erklaert sich nicht besser, weil
 * neben jedem Absatz ein Piktogramm steht. Icons erscheinen hier nur, wo ein
 * Abschnitt sie ausdruecklich nutzt (`fakten`).
 *
 * Die Flaechen wechseln durchgehend und werden aus der Anzahl der Abschnitte
 * berechnet; `pruefeFlaechen` sichert die Regel ab.
 *
 * Stand Schritt 3: definiert und im Styleguide zu sehen. Ueber uns und Kontakt
 * ziehen in Schritt 5 hierher um.
 */

export type InhaltsAbschnitt =
  | { art: 'text'; titel?: ReactNode; absaetze: readonly ReactNode[] }
  | { art: 'fakten'; titel?: ReactNode; fakten: readonly Fact[] }
  | { art: 'personen'; titel?: ReactNode; leute: readonly Person[] }
  | { art: 'fragen'; titel?: ReactNode; fragen: readonly AccordionItem[] }
  | { art: 'bild'; titel?: ReactNode; label: string; note?: string }

export type InhaltsseiteInhalt = {
  eyebrow?: string
  titel: ReactNode
  einleitung?: ReactNode
  abschnitte: readonly InhaltsAbschnitt[]
  abschluss?: {
    titel: ReactNode
    satz?: ReactNode
    knopf: { text: string; ziel: PageKey }
  }
}

/** Wechselnde Flaechen; der Seitenkopf beginnt hell. */
function flaechen(anzahl: number): Surface[] {
  return Array.from({ length: anzahl }, (_, i) => (i % 2 === 0 ? 'hell' : 'weiss'))
}

export function InhaltsseiteTemplate({
  inhalt,
  locale,
  name = 'Inhaltsseite',
}: {
  inhalt: InhaltsseiteInhalt
  locale: Locale
  /** Nur fuer die Fehlermeldung der Flaechenpruefung. */
  name?: string
}) {
  // Seitenkopf plus Abschnitte; der Abschluss bringt seine Flaeche selbst mit.
  const folge = flaechen(1 + inhalt.abschnitte.length)
  // Der Abschluss steht auf einer Farbflaeche, ausser der Abschnitt davor
  // waere selbst schon dunkel.
  const abschlussFlaeche: Surface = 'flaeche'
  pruefeFlaechen(inhalt.abschluss ? [...folge, abschlussFlaeche] : folge, name)

  return (
    <>
      {/* ---- Seitenkopf --------------------------------------------------- */}
      <Section surface={folge[0]} labelledBy="seitenkopf" measure>
        {inhalt.eyebrow && <p className="ac-eyebrow">{inhalt.eyebrow}</p>}
        <h1 id="seitenkopf">{inhalt.titel}</h1>
        {inhalt.einleitung && <p className={`ac-lead ${styles.einleitung}`}>{inhalt.einleitung}</p>}
      </Section>

      {/* ---- Abschnitte ---------------------------------------------------- */}
      {inhalt.abschnitte.map((abschnitt, index) => {
        const flaeche = folge[index + 1] ?? 'weiss'
        const id = `abschnitt-${index + 1}`

        return (
          <Section
            key={index}
            surface={flaeche}
            labelledBy={abschnitt.titel ? id : undefined}
            measure={abschnitt.art === 'text'}
          >
            {abschnitt.titel && <SectionHeader id={id} heading={abschnitt.titel} />}

            {abschnitt.art === 'text' && (
              <div className={styles.text}>
                {abschnitt.absaetze.map((absatz, i) => (
                  <p key={i}>{absatz}</p>
                ))}
              </div>
            )}

            {abschnitt.art === 'fakten' && <FactRow items={abschnitt.fakten} />}

            {abschnitt.art === 'personen' && (
              <PersonGrid>
                {abschnitt.leute.map((person, i) => (
                  <PersonCard key={i} {...person} locale={locale} />
                ))}
              </PersonGrid>
            )}

            {abschnitt.art === 'fragen' && <Accordion items={abschnitt.fragen} />}

            {abschnitt.art === 'bild' && (
              <ImagePlaceholder
                className={styles.bild}
                label={abschnitt.label}
                note={abschnitt.note}
              />
            )}
          </Section>
        )
      })}

      {/* ---- Abschluss, optional -------------------------------------------- */}
      {inhalt.abschluss && (
        <CTASection
          surface={abschlussFlaeche}
          heading={inhalt.abschluss.titel}
          lead={inhalt.abschluss.satz ? <p>{inhalt.abschluss.satz}</p> : undefined}
          actions={
            <Button href={hrefOrDefault(inhalt.abschluss.knopf.ziel, locale)}>
              {inhalt.abschluss.knopf.text}
            </Button>
          }
        />
      )}
    </>
  )
}
