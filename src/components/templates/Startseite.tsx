import type { ReactNode } from 'react'
import Image from 'next/image'

import { Bereiche, type Bereich, type LeitBereich } from '@/components/blocks/Bereiche'
import { CTASection } from '@/components/blocks/CTASection'
import { Faelle, type Fall } from '@/components/blocks/Faelle'
import { pruefeFlaechen, Section, type Surface } from '@/components/blocks/Section'
import { SectionHeader } from '@/components/blocks/SectionHeader'
import { StartHero, type HeroBild } from '@/components/blocks/StartHero'
import { StepList } from '@/components/blocks/StepList'
import { Team, type Mitglied } from '@/components/blocks/Team'
import { Button } from '@/components/ui/Button'
import { Schrittbild, type SchrittName } from '@/components/ui/Schrittbild'
import { Zonenmuster } from '@/components/ui/Zonenmuster'
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
    eyebrow: string
    titel: ReactNode
    einleitung?: ReactNode
    /** Drei Zeilen rechts neben dem Kopf. */
    merksatz: readonly string[]
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
    eyebrow: string
    titel: ReactNode
    kette: readonly { text: string; bild: SchrittName }[]
    text: ReactNode
    nachsatz?: ReactNode
    knopf: { text: string; ziel: PageKey }
  }
  personen: {
    eyebrow: string
    titel: ReactNode
    einleitung?: ReactNode
    leute: readonly Mitglied[]
    linkedinText: string
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

      {/* ---- 2 und 3: eine gemeinsame Kartenzone ---------------------------

          Die beiden Abschnitte tragen Karten und liegen darum auf einer
          durchgehenden Flaeche, nicht auf zweien. So zeigt es Ricardos
          Referenz vom 10.09.2026, und so laufen die Formen im Grund ueber
          beide hinweg statt an der Naht zu enden.

          Der Ton ist eine Stufe dunkler als die uebrigen hellen Abschnitte:
          Die Karten sind weiss und stuenden auf dem gewohnten Off-White kaum
          ab. `background_tint` ist keine neue Farbe, sondern die zweite Stufe
          derselben. */}
      <div className={styles.kartenzone}>
        <Zonenmuster />

      {/* ---- 2 Leistungen -------------------------------------------------- */}
      <Section
        surface={fLeistungen}
        className={styles.zonenAbschnitt}
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

      {/* ---- 3 Situationen — eng an die Leistungen -------------------------

          Derselbe getoente Grund und derselbe zweispaltige Kopf wie im
          Abschnitt darueber. Beide tragen weisse Karten; auf dem gewohnten
          Off-White stuenden sie kaum ab. Die beiden Abschnitte bilden damit
          eine zusammenhaengende Zone — getrennt werden sie von ihren
          Ueberschriften, nicht von einem Farbwechsel. */}
      <Section
        surface={fSituationen}
        className={styles.zonenAbschnitt}
        labelledBy="situationen"
        id="situationen"
      >
        <div className={styles.leistungenKopf}>
          <SectionHeader
            id="situationen"
            eyebrow={inhalt.situationen.eyebrow}
            heading={inhalt.situationen.titel}
            lead={inhalt.situationen.einleitung}
          />

          <p className={styles.merksatz}>
            {inhalt.situationen.merksatz.map((zeile) => (
              <span key={zeile}>{zeile}</span>
            ))}
          </p>
        </div>

        <Faelle faelle={inhalt.situationen.eintraege} locale={locale} />
      </Section>
      </div>

      {/* ---- 4 Eine Stelle — der eigentliche Nutzen, als Kette -------------

          Nach Ricardos Referenzgrafik vom 10.09.2026: Kopf und Prozessleiste
          links, drei Zeilen und das Buerobild rechts. Das Bild laeuft bis an
          die rechte und untere Kante des Abschnitts — darum traegt die
          Sektion `position: relative` und `overflow: hidden`. */}
      <Section
        surface={fStelle}
        className={styles.stelleFlaeche}
        labelledBy="einestelle"
        id="einestelle"
      >
        <div className={styles.stelleRaster}>
          <div className={styles.stelleHaupt}>
            <SectionHeader
              id="einestelle"
              eyebrow={inhalt.eineStelle.eyebrow}
              heading={inhalt.eineStelle.titel}
            />

            {/* Eine geordnete Liste, weil die Reihenfolge etwas bedeutet: So
                laeuft ein Betrieb durch das Jahr. Die Pfeile stehen im CSS
                und werden Hilfstechnik nicht vorgelesen. */}
            <ol className={styles.kette}>
              {inhalt.eineStelle.kette.map((glied) => (
                <li key={glied.text}>
                  <Schrittbild className={styles.ketteBild} name={glied.bild} />
                  <span className={styles.ketteText}>{glied.text}</span>
                </li>
              ))}
            </ol>

            <div className={styles.stelleText}>
              <p>{inhalt.eineStelle.text}</p>
              {inhalt.eineStelle.nachsatz && <p>{inhalt.eineStelle.nachsatz}</p>}
            </div>

            <Button
              className={styles.stelleKnopf}
              href={hrefOrDefault(inhalt.eineStelle.knopf.ziel, locale)}
              variant="akzent"
            >
              {inhalt.eineStelle.knopf.text}
              <span className={styles.knopfPfeil} aria-hidden="true">
                →
              </span>
            </Button>
          </div>
        </div>

        {/* Der Grund: zwei grosse Boegen Ton in Ton und eine feine gruene
            Linie. Sie stehen tief im Hintergrund und tragen keine Aussage —
            sie nehmen der Flaeche nur das Flache. Alle drei sind Kreise; der
            Abschnitt schneidet sie an seinen Kanten ab. */}
        <div className={styles.muster} aria-hidden="true">
          <span className={styles.bogenGross} />
          <span className={styles.bogenKlein} />
          <span className={styles.linie} />
        </div>

        {/* Der Bildplatz. Dekorativ — was der Abschnitt sagt, steht im Text. */}
        <div className={styles.buero} aria-hidden="true">
          <Image
            className={styles.bueroBild}
            src="/bilder/06_buero_visual.webp"
            alt=""
            width={1400}
            height={788}
            sizes="(min-width: 64rem) 640px, 100vw"
          />
        </div>
      </Section>

      {/* ---- 5 Ansprechpartner ---------------------------------------------- */}
      <Section
        surface={fPersonen}
        className={styles.personenFlaeche}
        labelledBy="personen"
        id="personen"
      >
        <div className={styles.leistungenKopf}>
          <SectionHeader
            id="personen"
            eyebrow={inhalt.personen.eyebrow}
            heading={inhalt.personen.titel}
            lead={inhalt.personen.einleitung}
          />
        </div>
        <Team mitglieder={inhalt.personen.leute} linkedinText={inhalt.personen.linkedinText} />
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
