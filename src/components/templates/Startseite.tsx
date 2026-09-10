import type { ReactNode } from 'react'

import { Bereiche, type Bereich, type LeitBereich } from '@/components/blocks/Bereiche'
import { CTASection } from '@/components/blocks/CTASection'
import { Faelle, type Fall } from '@/components/blocks/Faelle'
import { pruefeFlaechen, Section, type Surface } from '@/components/blocks/Section'
import { SectionHeader } from '@/components/blocks/SectionHeader'
import { StartHero, type HeroBild } from '@/components/blocks/StartHero'
import { StepList } from '@/components/blocks/StepList'
import { Team, type Mitglied } from '@/components/blocks/Team'
import { Button } from '@/components/ui/Button'
import type { Locale } from '@/i18n/config'
import { hrefOrDefault, type PageKey } from '@/i18n/routes'

import styles from './Startseite.module.css'

/**
 * Vorlage A — Startseite.
 *
 * Sieben Abschnitte, Fassung vom 10.09.2026:
 *
 *   1 Einstieg        Foto ueber die volle Breite          — DOMINANT
 *   2 Leistungen      Leitbereich gross, zwei darunter     — hell
 *   3 Situationen     sechs nummerierte Einstiege          — weiss
 *   4 Eine Stelle     die Kette, ein Satz                  — FLAECHE
 *   5 Ansprechpartner zwei Portraets                       — hell
 *   6 Ablauf          vier Schritte                        — weiss
 *   7 Abschluss       eine Aussage, ein Knopf              — FLAECHE
 *
 * Am 10.09.2026 auf Anweisung von Ricardo von neun auf sieben verkuerzt.
 * Weggefallen sind „Unsere Rolle" („Wir vertreten Sie, nicht die
 * Versicherung.") und „Persoenlich beraten. Digital effizient." — beide
 * standen zwischen den Abschnitten, die Besucher wirklich suchen.
 *
 * Die Reihenfolge folgt dem Blick eines Erstbesuchers: Was tut ihr (1, 2),
 * betrifft mich das (3), warum bei euch (4), mit wem rede ich (5), wie fange
 * ich an (6, 7).
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
  'hell', // 2 Leistungen
  'weiss', // 3 Situationen
  'flaeche', // 4 Eine Stelle
  'hell', // 5 Ansprechpartner
  'weiss', // 6 Ablauf
  'flaeche', // 7 Abschluss
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
  situationen: {
    titel: ReactNode
    einleitung?: ReactNode
    eintraege: readonly Fall[]
  }
  leistungen: {
    eyebrow: string
    titel: ReactNode
    einleitung?: ReactNode
    /** Drei Zeilen rechts neben dem Kopf. */
    merksatz: readonly string[]
    leit: LeitBereich
    weitere: readonly Bereich[]
  }
  eineStelle: {
    titel: ReactNode
    kette: readonly string[]
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
  const [, fLeistungen, fSituationen, fStelle, fPersonen, fAblauf, fAbschluss] =
    FLAECHEN as [Surface, Surface, Surface, Surface, Surface, Surface, Surface]

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

      {/* ---- 2 Leistungen -------------------------------------------------- */}
      {/* Der Grund ist hier eine Stufe dunkler als sonst: Die Karten sind
          weiss, und auf dem gewohnten Off-White waeren sie kaum als Karten zu
          erkennen. Der Ton kommt aus dem Corporate Design (background_tint),
          ist also keine neue Farbe, sondern die zweite Stufe derselben. */}
      <Section
        surface={fLeistungen}
        className={styles.leistungenFlaeche}
        labelledBy="leistungen"
        id="leistungen"
      >
        {/* Der Kopf steht zweispaltig: links Vorzeile, Ueberschrift und
            Einleitung, rechts drei Zeilen, die den Nutzen zusammenfassen.
            Sie sind kein Satz und sollen auch keiner werden. */}
        <div className={styles.leistungenKopf}>
          <SectionHeader
            id="leistungen"
            eyebrow={inhalt.leistungen.eyebrow}
            heading={inhalt.leistungen.titel}
            lead={inhalt.leistungen.einleitung}
          />

          <p className={styles.merksatz}>
            {inhalt.leistungen.merksatz.map((zeile) => (
              <span key={zeile}>{zeile}</span>
            ))}
          </p>
        </div>
        <Bereiche
          leit={inhalt.leistungen.leit}
          weitere={inhalt.leistungen.weitere}
          locale={locale}
        />
      </Section>

      {/* ---- 3 Situationen — eng an die Leistungen ------------------------- */}
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

      {/* ---- 4 Eine Stelle — der eigentliche Nutzen, als Kette ------------- */}
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

      {/* ---- 5 Ansprechpartner ---------------------------------------------- */}
      <Section surface={fPersonen} labelledBy="personen" id="personen">
        <SectionHeader
          id="personen"
          heading={inhalt.personen.titel}
          lead={inhalt.personen.einleitung}
        />
        <Team mitglieder={inhalt.personen.leute} />
        {inhalt.personen.link && <p className={styles.personenLink}>{inhalt.personen.link}</p>}
      </Section>

      {/* ---- 6 Ablauf --------------------------------------------------------- */}
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

      {/* ---- 7 Abschluss ------------------------------------------------------ */}
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
