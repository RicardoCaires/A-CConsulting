import type { ReactNode } from 'react'
import { Bereiche, type Bereich, type LeitBereich } from '@/components/blocks/Bereiche'
import { Kontaktabschluss } from '@/components/blocks/Kontaktabschluss'
import { Faelle, type Fall } from '@/components/blocks/Faelle'
import { pruefeFlaechen, Section, type Surface } from '@/components/blocks/Section'
import { SectionHeader } from '@/components/blocks/SectionHeader'
import { Banner } from '@/components/blocks/Banner'
import { Team, type Mitglied } from '@/components/blocks/Team'
import { Button } from '@/components/ui/Button'
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
 *   4 Ansprechpartner zwei Portraets                       — hell
 *   5 Abschluss       eine Aussage, ein Knopf              — FLAECHE
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
 * **Achtung, Stand 10.09.2026:** Mit dem Umbau nach Ricardos Referenzgrafiken
 * setzen sich vier Abschnitte ueber die zugewiesene Flaeche hinweg und tragen
 * eine eigene: 2 und 3 liegen zusammen in der Kartenzone, 6 und 7 auf
 * demselben getoenten Grund. Die Folge unten beschreibt damit nicht mehr, was
 * man sieht. Sie zu bereinigen ist ein eigener Auftrag — entweder die Regel
 * anpassen oder die Zuweisungen wieder in die Folge holen.
 *
 * Regel fuer den Inhalt: **keine Sektion mit mehr als etwa fuenfzig Woertern
 * Fliesstext.** Was mehr braucht, gehoert auf eine Bereichsseite.
 */

/* Am 15.09.2026 sind auf Ricardos Anweisung zwei Abschnitte entfallen:
   „Eine Stelle fuer Ihre Administration" und „So beginnt die
   Zusammenarbeit". Die Startseite traegt seither fuenf Abschnitte. */
const FLAECHEN: readonly Surface[] = [
  'dominant', // 1 Einstieg
  'hell', // 2 Leistungen
  'weiss', // 3 Situationen
  'hell', // 4 Ansprechpartner
  'flaeche', // 5 Abschluss
]

export type StartseiteInhalt = {
  einstieg: {
    /** Kleine Themenzeile ueber der Ueberschrift, in Versalien. */
    themenzeile: string
    titel: string
    /** Genau einer. Der Banner traegt keinen zweiten Knopf und keinen Textlink. */
    knopf: { text: string; ziel: PageKey }
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
  personen: {
    eyebrow: string
    titel: ReactNode
    einleitung?: ReactNode
    leute: readonly Mitglied[]
    linkedinText: string
    /** Weiterfuehrender Verweis, als fertiges Element. */
    link?: ReactNode
  }
  abschluss: {
    eyebrow?: string
    titel: ReactNode
    satz?: ReactNode
    felder: { telefon: string; email: string }
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
  // Der Abschluss traegt seine Flaeche seit dem 10.09.2026 selbst und wird
  // darum nicht mehr aus der Folge bedient — der letzte Eintrag bleibt in
  // FLAECHEN stehen, damit die Reihe vollstaendig dokumentiert ist.
  const [, fLeistungen, fSituationen, fPersonen] = FLAECHEN as [
    Surface,
    Surface,
    Surface,
    Surface,
    Surface,
  ]

  return (
    <>
      {/* ---- 1 Einstieg — der Banner, wie auf jeder Seite ----------------
          Seit dem 15.09.2026 traegt die Startseite denselben Baustein wie
          alle uebrigen Banner. `StartHero` mit seinem eigenen Bildfeld,
          seinem Verlauf und seinem Textlink ist damit nicht mehr im
          Einsatz. */}
      <Banner
        themenzeile={inhalt.einstieg.themenzeile}
        ueberschrift={inhalt.einstieg.titel}
        id="einstieg"
        knopf={inhalt.einstieg.knopf.text}
        locale={locale}
        vorrang
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

      {/* ---- 7 Abschluss ------------------------------------------------------

          Eigener Baustein: `CTASection` steht am Fuss jeder Leistungsseite und
          bleibt unveraendert. Der Abschluss sieht damit auf der Startseite
          anders aus als dort — die Folge davon, dass die Startseite als Erste
          umgebaut wurde. Bekommen die Leistungsseiten ihren Umbau, gehoert das
          wieder zusammengefuehrt. */}
      <Kontaktabschluss
        id="abschluss"
        eyebrow={inhalt.abschluss.eyebrow}
        titel={inhalt.abschluss.titel}
        satz={inhalt.abschluss.satz}
        felder={inhalt.abschluss.felder}
        aktion={
          <Button
            href={hrefOrDefault(inhalt.abschluss.knopf.ziel, locale)}
            variant="akzent"
          >
            {inhalt.abschluss.knopf.text}
            <span className={styles.knopfPfeil} aria-hidden="true">
              →
            </span>
          </Button>
        }
      />
    </>
  )
}
