import type { ReactNode } from 'react'

import { Beitraege, type Beitrag } from '@/components/blocks/Beitraege'
import { Bereiche, type Bereich, type LeitBereich } from '@/components/blocks/Bereiche'
import { CTASection } from '@/components/blocks/CTASection'
import { Faelle, type Fall } from '@/components/blocks/Faelle'
import { pruefeFlaechen, Section, type Surface } from '@/components/blocks/Section'
import { SectionHeader } from '@/components/blocks/SectionHeader'
import { StartHero } from '@/components/blocks/StartHero'
import { Team, type Mitglied } from '@/components/blocks/Team'
import { Vorteile, type Vorteil } from '@/components/blocks/Vorteile'
import { Button } from '@/components/ui/Button'
import type { Locale } from '@/i18n/config'
import { hrefOrDefault, type PageKey } from '@/i18n/routes'

import styles from './Startseite.module.css'

/**
 * Vorlage A — Startseite.
 *
 * Sieben Abschnitte, mehr nicht. Das ist eine Entscheidung, keine Grenze: Eine
 * Startseite, die man in einer Minute durchgescrollt hat, wird gelesen; eine
 * mit fuenfzehn Abschnitten wird ueberflogen.
 *
 *   1 Einstieg      Text und Bildflaeche nebeneinander   — DOMINANT
 *   2 Bereiche      Leitbereich gross, zwei darunter     — weiss
 *   3 Geschaeftsfaelle sechs nummerierte Einstiege       — hell
 *   4 Weshalb A&C   vier Punkte                          — FLAECHE
 *   5 Ansprechpartner zwei Portraets                     — weiss
 *   6 Wissen        drei Beitraege                       — hell
 *   7 Abschluss     eine Aussage, ein Knopf              — FLAECHE
 *
 * Die Flaechenfolge ist fest, weil die Abschnitte fest sind, und sie wird beim
 * Bauen geprueft (`pruefeFlaechen`). Ein Verstoss bricht den Build — die Regel
 * kann nicht versehentlich umgangen werden.
 *
 * Regel fuer den Inhalt: **keine Sektion mit mehr als etwa fuenfzig Woertern
 * Fliesstext.** Was mehr braucht, gehoert auf eine Bereichsseite.
 */

const FLAECHEN: readonly Surface[] = [
  'dominant',
  'weiss',
  'hell',
  'flaeche',
  'weiss',
  'hell',
  'flaeche',
]

export type StartseiteInhalt = {
  einstieg: {
    eyebrow: string
    titel: ReactNode
    satz: ReactNode
    /** Genau einer. Der Kopf traegt keinen zweiten Knopf. */
    knopf: { text: string; ziel: PageKey }
    /** Zurueckhaltender zweiter Weg, als Textlink. */
    weiter?: { text: string; ziel: PageKey }
    bild: { label: string; note?: string }
  }
  bereiche: {
    titel: ReactNode
    einleitung?: ReactNode
    leit: LeitBereich
    weitere: readonly Bereich[]
  }
  faelle: {
    titel: ReactNode
    einleitung?: ReactNode
    eintraege: readonly Fall[]
  }
  gruende: {
    titel: ReactNode
    punkte: readonly Vorteil[]
  }
  personen: {
    titel: ReactNode
    einleitung?: ReactNode
    leute: readonly Mitglied[]
  }
  wissen: {
    titel: ReactNode
    einleitung?: ReactNode
    beitraege: readonly Beitrag[]
    weiterlesen: string
    /** Verweis auf die Uebersicht, als fertiges Element. */
    alle: ReactNode
  }
  abschluss: {
    titel: ReactNode
    satz?: ReactNode
    knopf: { text: string; ziel: PageKey }
  }
}

export function StartseiteTemplate({
  inhalt,
  locale,
}: {
  inhalt: StartseiteInhalt
  locale: Locale
}) {
  pruefeFlaechen(FLAECHEN, 'Startseite')
  const [, f2, f3, f4, f5, f6, f7] = FLAECHEN as [
    Surface,
    Surface,
    Surface,
    Surface,
    Surface,
    Surface,
    Surface,
  ]

  return (
    <>
      {/* ---- 1 Einstieg — die dominante Flaeche der Seite ----------------- */}
      <StartHero
        eyebrow={inhalt.einstieg.eyebrow}
        titel={inhalt.einstieg.titel}
        satz={inhalt.einstieg.satz}
        aktion={
          <Button href={hrefOrDefault(inhalt.einstieg.knopf.ziel, locale)}>
            {inhalt.einstieg.knopf.text}
          </Button>
        }
        weiter={
          inhalt.einstieg.weiter && (
            <a href={hrefOrDefault(inhalt.einstieg.weiter.ziel, locale)}>
              {inhalt.einstieg.weiter.text}
            </a>
          )
        }
        bild={inhalt.einstieg.bild}
      />

      {/* ---- 2 Die drei Bereiche ------------------------------------------ */}
      <Section surface={f2} labelledBy="bereiche" id="bereiche">
        <SectionHeader
          id="bereiche"
          heading={inhalt.bereiche.titel}
          lead={inhalt.bereiche.einleitung}
        />
        <Bereiche leit={inhalt.bereiche.leit} weitere={inhalt.bereiche.weitere} locale={locale} />
      </Section>

      {/* ---- 3 Geschaeftsfaelle -------------------------------------------- */}
      <Section surface={f3} labelledBy="faelle" id="faelle">
        <SectionHeader
          id="faelle"
          heading={inhalt.faelle.titel}
          lead={inhalt.faelle.einleitung}
        />
        <Faelle faelle={inhalt.faelle.eintraege} locale={locale} />
      </Section>

      {/* ---- 4 Weshalb A&C — der einzige dunkle Block in der Mitte --------- */}
      <Section surface={f4} labelledBy="gruende">
        <SectionHeader id="gruende" heading={inhalt.gruende.titel} />
        <Vorteile punkte={inhalt.gruende.punkte} />
      </Section>

      {/* ---- 5 Ansprechpartner --------------------------------------------- */}
      <Section surface={f5} labelledBy="personen" id="personen">
        <SectionHeader
          id="personen"
          heading={inhalt.personen.titel}
          lead={inhalt.personen.einleitung}
        />
        <Team mitglieder={inhalt.personen.leute} />
      </Section>

      {/* ---- 6 Wissen -------------------------------------------------------- */}
      <Section surface={f6} labelledBy="wissen" id="wissen">
        <SectionHeader
          id="wissen"
          heading={inhalt.wissen.titel}
          lead={inhalt.wissen.einleitung}
        />
        <Beitraege
          beitraege={inhalt.wissen.beitraege}
          locale={locale}
          weiterlesen={inhalt.wissen.weiterlesen}
        />
        <p className={styles.alleBeitraege}>{inhalt.wissen.alle}</p>
      </Section>

      {/* ---- 7 Abschluss ----------------------------------------------------- */}
      <CTASection
        surface={f7}
        heading={inhalt.abschluss.titel}
        lead={inhalt.abschluss.satz ? <p>{inhalt.abschluss.satz}</p> : undefined}
        showContact
        actions={
          <Button href={hrefOrDefault(inhalt.abschluss.knopf.ziel, locale)}>
            {inhalt.abschluss.knopf.text}
          </Button>
        }
      />
    </>
  )
}
