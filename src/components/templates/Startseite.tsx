import type { ReactNode } from 'react'

import { CTASection } from '@/components/blocks/CTASection'
import { IconFeatureGrid, type IconFeatureItem } from '@/components/blocks/IconFeature'
import { PersonCard, PersonGrid, type Person } from '@/components/blocks/PersonCard'
import { pruefeFlaechen, Section, type Surface } from '@/components/blocks/Section'
import { SectionHeader } from '@/components/blocks/SectionHeader'
import { ServiceCard } from '@/components/blocks/ServiceCard'
import { StepList, type Step } from '@/components/blocks/StepList'
import { Button } from '@/components/ui/Button'
import { Icon, type IconName } from '@/components/ui/Icon'
import { IconCircle } from '@/components/ui/IconCircle'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
import type { Locale } from '@/i18n/config'
import { hrefOrDefault, type PageKey } from '@/i18n/routes'

import styles from './Startseite.module.css'

/**
 * Vorlage A — Startseite.
 *
 * Sieben Abschnitte in fester Reihenfolge:
 *
 *   1 Einstieg        Hero mit Bild
 *   2 Unsere Bereiche drei ServiceCards
 *   3 Häufige Anliegen Einstiege nach Situation
 *   4 Weshalb A&C     IconFeature in drei Spalten
 *   5 So läuft es ab  StepList
 *   6 Ansprechpartner PersonCard
 *   7 Abschluss       CTASection
 *
 * Regel fuer den Inhalt: **keine Sektion mit mehr als etwa fuenfzig Woertern
 * Fliesstext.** Was mehr braucht, gehoert auf eine Leistungsseite — dort ist
 * der vertiefende Abschnitt von Vorlage B dafuer vorgesehen.
 *
 * Die Flaechenfolge ist hier fest, weil die Abschnitte fest sind:
 * hell · weiss · hell · DUNKEL · weiss · hell · weiss.
 * Genau eine dunkle Flaeche, und sie sitzt in der Mitte.
 *
 * Stand Schritt 3: Die Vorlage ist definiert und im Styleguide zu sehen. Die
 * bestehende Startseite laeuft noch auf ihrer eigenen Fassung; sie wird in
 * Schritt 4 hierher umgezogen.
 */

const FLAECHEN: readonly Surface[] = [
  'hell',
  'weiss',
  'hell',
  'dunkel',
  'weiss',
  'hell',
  'weiss',
]

export type StartseiteInhalt = {
  einstieg: {
    eyebrow: string
    titel: ReactNode
    satz: ReactNode
    knopf: { text: string; ziel: PageKey }
    zweitknopf?: { text: string; href: string }
    bild: { label: string; note?: string }
  }
  bereiche: {
    titel: ReactNode
    karten: readonly {
      icon: IconName
      titel: ReactNode
      chips: readonly string[]
      ziel: PageKey
    }[]
  }
  anliegen: {
    titel: ReactNode
    eintraege: readonly { icon: IconName; text: string; href: string }[]
  }
  gruende: {
    titel: ReactNode
    punkte: readonly IconFeatureItem[]
  }
  ablauf: {
    titel: ReactNode
    schritte: readonly Step[]
  }
  personen: {
    titel: ReactNode
    einleitung?: ReactNode
    leute: readonly Person[]
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
  const [f1, f2, f3, f4, f5, f6, f7] = FLAECHEN as [
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
      {/* ---- 1 Einstieg --------------------------------------------------- */}
      <Section surface={f1} labelledBy="einstieg">
        <div className={styles.hero}>
          <div className={styles.heroText}>
            <p className="ac-eyebrow">{inhalt.einstieg.eyebrow}</p>
            <h1 id="einstieg" className={styles.heroTitel}>
              {inhalt.einstieg.titel}
            </h1>
            <p className={`ac-lead ${styles.heroSatz}`}>{inhalt.einstieg.satz}</p>

            <div className={styles.heroAktionen}>
              <Button href={hrefOrDefault(inhalt.einstieg.knopf.ziel, locale)}>
                {inhalt.einstieg.knopf.text}
              </Button>
              {inhalt.einstieg.zweitknopf && (
                <Button href={inhalt.einstieg.zweitknopf.href} variant="ghost">
                  {inhalt.einstieg.zweitknopf.text}
                </Button>
              )}
            </div>
          </div>

          <ImagePlaceholder
            className={styles.heroBild}
            label={inhalt.einstieg.bild.label}
            note={inhalt.einstieg.bild.note}
          />
        </div>
      </Section>

      {/* ---- 2 Unsere Bereiche -------------------------------------------- */}
      <Section surface={f2} labelledBy="bereiche">
        <SectionHeader id="bereiche" heading={inhalt.bereiche.titel} />
        <ul className={styles.karten} role="list">
          {inhalt.bereiche.karten.map((karte, index) => (
            <li key={index}>
              <ServiceCard
                icon={karte.icon}
                heading={karte.titel}
                chips={karte.chips}
                target={karte.ziel}
                locale={locale}
              />
            </li>
          ))}
        </ul>
      </Section>

      {/* ---- 3 Häufige Anliegen -------------------------------------------- */}
      <Section surface={f3} labelledBy="anliegen">
        <SectionHeader id="anliegen" heading={inhalt.anliegen.titel} />
        <ul className={styles.anliegen} role="list">
          {inhalt.anliegen.eintraege.map((eintrag, index) => (
            <li key={index}>
              <a className={styles.anliegenLink} href={eintrag.href}>
                <IconCircle name={eintrag.icon} size="md" />
                <span>{eintrag.text}</span>
                <span className={styles.anliegenPfeil} aria-hidden="true">
                  <Icon name="pfeil" size={1} />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Section>

      {/* ---- 4 Weshalb A&C — der einzige dunkle Abschnitt ------------------- */}
      <Section surface={f4} labelledBy="gruende">
        <SectionHeader id="gruende" heading={inhalt.gruende.titel} />
        <IconFeatureGrid items={inhalt.gruende.punkte} columns={3} tone="outline" />
      </Section>

      {/* ---- 5 So läuft es ab ---------------------------------------------- */}
      <Section surface={f5} labelledBy="ablauf">
        <SectionHeader id="ablauf" heading={inhalt.ablauf.titel} />
        <StepList steps={inhalt.ablauf.schritte} layout="flow" />
      </Section>

      {/* ---- 6 Ansprechpartner --------------------------------------------- */}
      <Section surface={f6} labelledBy="personen">
        <SectionHeader
          id="personen"
          heading={inhalt.personen.titel}
          lead={inhalt.personen.einleitung}
        />
        <PersonGrid>
          {inhalt.personen.leute.map((person, index) => (
            <PersonCard key={index} {...person} locale={locale} />
          ))}
        </PersonGrid>
      </Section>

      {/* ---- 7 Abschluss ---------------------------------------------------- */}
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
