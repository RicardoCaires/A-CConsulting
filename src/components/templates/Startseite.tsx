import type { ReactNode } from 'react'

import { Bereiche, type Bereich, type LeitBereich } from '@/components/blocks/Bereiche'
import { CTASection } from '@/components/blocks/CTASection'
import { Faelle, type Fall } from '@/components/blocks/Faelle'
import { pruefeFlaechen, Section, type Surface } from '@/components/blocks/Section'
import { SectionHeader } from '@/components/blocks/SectionHeader'
import Image from 'next/image'

import { StartHero, type HeroBild } from '@/components/blocks/StartHero'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
import { StepList } from '@/components/blocks/StepList'
import { Team, type Mitglied } from '@/components/blocks/Team'
import { Button } from '@/components/ui/Button'
import type { Locale } from '@/i18n/config'
import { hrefOrDefault, type PageKey } from '@/i18n/routes'

import styles from './Startseite.module.css'

/**
 * Vorlage A — Startseite.
 *
 * Neun Abschnitte, Fassung vom 09.09.2026:
 *
 *   1 Einstieg        Text und Bildflaeche nebeneinander   — DOMINANT
 *   2 Vertrauenszeile vier Angaben, ein schmales Band      — (kein Abschnitt)
 *   3 Situationen     sechs nummerierte Einstiege          — hell
 *   4 Leistungen      Leitbereich gross, zwei darunter     — weiss
 *   5 Eine Stelle     die Kette, ein Satz                  — FLAECHE
 *   6 Digital         zwei Saetze                          — weiss
 *   7 Ansprechpartner zwei Portraets                       — hell
 *   8 Ablauf          vier Schritte                        — weiss
 *   9 Abschluss       eine Aussage, ein Knopf              — FLAECHE
 *
 * Die Reihenfolge folgt dem Blick eines Erstbesuchers: Was tut ihr (1), seid
 * ihr echt (2), betrifft mich das (3), was genau (4), warum bei euch (5, 6),
 * mit wem rede ich (7), wie fange ich an (8, 9).
 *
 * Die **Situationen stehen vor den Leistungen**. Wer auf die Seite kommt,
 * denkt in seinem Problem, nicht in unseren Bereichen.
 *
 * Die Vertrauenszeile ist bewusst kein Abschnitt, sondern ein schmales Band
 * direkt unter dem Kopf: vier Angaben, typografisch ruhig, keine Abzeichen.
 * Sie zaehlt darum in der Flaechenfolge nicht mit.
 *
 * Die Flaechenfolge wird beim Bauen geprueft (`pruefeFlaechen`). Ein Verstoss
 * bricht den Build — die Regel kann nicht versehentlich umgangen werden.
 *
 * Regel fuer den Inhalt: **keine Sektion mit mehr als etwa fuenfzig Woertern
 * Fliesstext.** Was mehr braucht, gehoert auf eine Bereichsseite.
 */

const FLAECHEN: readonly Surface[] = [
  'dominant', // 1 Einstieg
  'weiss', // 2 Statement
  'hell', // 3 Leistungen
  'weiss', // 4 Situationen
  'flaeche', // 5 Eine Stelle
  'weiss', // 6 Digital
  'hell', // 7 Ansprechpartner
  'weiss', // 8 Ablauf
  'flaeche', // 9 Abschluss
]

export type StartseiteInhalt = {
  einstieg: {
    eyebrow?: string
    titel: ReactNode
    satz: ReactNode
    /** Genau einer. Der Kopf traegt keinen zweiten Knopf. */
    knopf: { text: string; ziel: PageKey }
    /** Zurueckhaltender zweiter Weg, als Textlink. */
    weiter?: { text: string; ziel: PageKey }
    bild: HeroBild
  }
  statement: {
    eyebrow: string
    satz: ReactNode
    zusatz?: ReactNode
    /** Die Modellgrafik. Bild, sobald die Datei da ist; sonst Platzhalter. */
    grafik?:
      | { src: string; alt: string; breite: number; hoehe: number }
      | { label: string; note?: string }
  }
  situationen: {
    titel: ReactNode
    einleitung?: ReactNode
    eintraege: readonly Fall[]
  }
  leistungen: {
    titel: ReactNode
    einleitung?: ReactNode
    leit: LeitBereich
    weitere: readonly Bereich[]
  }
  eineStelle: {
    titel: ReactNode
    kette: readonly string[]
    text: ReactNode
    nachsatz?: ReactNode
  }
  digital: {
    titel: ReactNode
    text: ReactNode
    nachsatz?: ReactNode
  }
  personen: {
    titel: ReactNode
    einleitung?: ReactNode
    leute: readonly Mitglied[]
    /** Weiterfuehrender Verweis, als fertiges Element. */
    link?: ReactNode
  }
  ablauf: {
    titel: ReactNode
    schritte: readonly { titel: string; satz: string }[]
    nachsatz?: ReactNode
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
  const [
    ,
    fStatement,
    fLeistungen,
    fSituationen,
    fStelle,
    fDigital,
    fPersonen,
    fAblauf,
    fAbschluss,
  ] = FLAECHEN as [
    Surface,
    Surface,
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

      {/* ---- 2 Statement — die eine Aussage, gross ------------------------- */}
      <Section surface={fStatement} abstand="weit" labelledBy="statement" id="statement">
        <div className={styles.statement}>
          <p className="ac-eyebrow">{inhalt.statement.eyebrow}</p>
          <p id="statement" className={`ac-statement ${styles.statementSatz}`}>
            {inhalt.statement.satz}
          </p>
          {inhalt.statement.zusatz && (
            <p className={styles.statementZusatz}>{inhalt.statement.zusatz}</p>
          )}
        </div>

        {/* Die Modellgrafik: volle Containerbreite, unter der Aussage. Als
            Bild, nicht als HTML — so hat Ricardo es geliefert und gewollt.
            Die Aussage selbst steht darueber als Text, damit Suche und
            Vorlesen sie haben. */}
        {inhalt.statement.grafik && (
          <figure className={styles.modell}>
            {'src' in inhalt.statement.grafik ? (
              <Image
                src={inhalt.statement.grafik.src}
                alt={inhalt.statement.grafik.alt}
                width={inhalt.statement.grafik.breite}
                height={inhalt.statement.grafik.hoehe}
                sizes="(min-width: 64rem) 1160px, 100vw"
                className={styles.modellBild}
              />
            ) : (
              <ImagePlaceholder
                className={styles.modellPlatzhalter}
                label={inhalt.statement.grafik.label}
                note={inhalt.statement.grafik.note}
              />
            )}
          </figure>
        )}
      </Section>

      {/* ---- 3 Leistungen -------------------------------------------------- */}
      <Section surface={fLeistungen} labelledBy="leistungen" id="leistungen">
        <SectionHeader
          id="leistungen"
          heading={inhalt.leistungen.titel}
          lead={inhalt.leistungen.einleitung}
        />
        <Bereiche
          leit={inhalt.leistungen.leit}
          weitere={inhalt.leistungen.weitere}
          locale={locale}
        />
      </Section>

      {/* ---- 4 Situationen — eng an die Leistungen ------------------------- */}
      <Section
        surface={fSituationen}
        abstand="eng"
        labelledBy="situationen"
        id="situationen"
      >
        <SectionHeader
          id="situationen"
          heading={inhalt.situationen.titel}
          lead={inhalt.situationen.einleitung}
        />
        <Faelle faelle={inhalt.situationen.eintraege} locale={locale} />
      </Section>

      {/* ---- 5 Eine Stelle — der eigentliche Nutzen, als Kette ------------- */}
      <Section surface={fStelle} labelledBy="einestelle" id="einestelle">
        <SectionHeader id="einestelle" heading={inhalt.eineStelle.titel} />

        {/* Eine geordnete Liste, weil die Reihenfolge etwas bedeutet: So
            laeuft ein Betrieb durch das Jahr. Die Pfeile stehen im CSS und
            werden Hilfstechnik nicht vorgelesen. */}
        <ol className={styles.kette}>
          {inhalt.eineStelle.kette.map((glied, index) => (
            <li key={index}>{glied}</li>
          ))}
        </ol>

        <div className={styles.stelleText}>
          <p>{inhalt.eineStelle.text}</p>
          {inhalt.eineStelle.nachsatz && <p>{inhalt.eineStelle.nachsatz}</p>}
        </div>
      </Section>

      {/* ---- 6 Digital ------------------------------------------------------ */}
      <Section surface={fDigital} abstand="eng" labelledBy="digital" id="digital" measure>
        <SectionHeader id="digital" heading={inhalt.digital.titel} />
        <div className={styles.fliesstext}>
          <p>{inhalt.digital.text}</p>
          {inhalt.digital.nachsatz && <p>{inhalt.digital.nachsatz}</p>}
        </div>
      </Section>

      {/* ---- 7 Ansprechpartner ---------------------------------------------- */}
      <Section surface={fPersonen} labelledBy="personen" id="personen">
        <SectionHeader
          id="personen"
          heading={inhalt.personen.titel}
          lead={inhalt.personen.einleitung}
        />
        <Team mitglieder={inhalt.personen.leute} />
        {inhalt.personen.link && <p className={styles.personenLink}>{inhalt.personen.link}</p>}
      </Section>

      {/* ---- 8 Ablauf --------------------------------------------------------- */}
      <Section surface={fAblauf} abstand="eng" labelledBy="ablauf" id="ablauf">
        <SectionHeader id="ablauf" heading={inhalt.ablauf.titel} />
        <StepList
          layout="flow"
          steps={inhalt.ablauf.schritte.map((schritt) => ({
            heading: schritt.titel,
            body: schritt.satz,
          }))}
        />
        {inhalt.ablauf.nachsatz && <p className={styles.ablaufNachsatz}>{inhalt.ablauf.nachsatz}</p>}
      </Section>

      {/* ---- 9 Abschluss ------------------------------------------------------ */}
      <CTASection
        surface={fAbschluss}
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
