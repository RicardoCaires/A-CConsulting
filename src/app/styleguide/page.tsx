import Link from 'next/link'

import { Accordion } from '@/components/blocks/Accordion'
import { CTASection } from '@/components/blocks/CTASection'
import { FactRow } from '@/components/blocks/FactRow'
import { IconFeatureGrid } from '@/components/blocks/IconFeature'
import { PersonCard, PersonGrid } from '@/components/blocks/PersonCard'
import { SectionHeader } from '@/components/blocks/SectionHeader'
import { ServiceCard } from '@/components/blocks/ServiceCard'
import { StepList } from '@/components/blocks/StepList'
import { Button } from '@/components/ui/Button'
import { DraftNote } from '@/components/ui/DraftNote'
import { Icon, type IconName } from '@/components/ui/Icon'
import { IconCircle, type IconTone } from '@/components/ui/IconCircle'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'

import styles from './page.module.css'

/**
 * Vorschau der geteilten Bausteine.
 *
 * ACHTUNG: Alle Texte auf dieser Seite sind Beispieldaten. Sie stammen nicht
 * aus `content/source/schritt4_fassung2_de.md` und duerfen nirgendwo sonst
 * verwendet werden. Der Styleguide liegt ausserhalb von `/[locale]/`, steht
 * nicht in der Sitemap und traegt `noindex`.
 */

const ALLE_ICONS: readonly IconName[] = [
  'schild',
  'buch',
  'beleg',
  'wechsel',
  'gebaeude',
  'personen',
  'verbindung',
  'person',
  'sprachen',
  'ablauf',
  'automatisierung',
  'standort',
  'telefon',
  'mail',
  'dokument',
  'uhr',
  'haken',
  'pfeil',
  'chevron',
]

const TOENE: readonly { tone: IconTone; name: string }[] = [
  { tone: 'tint', name: 'tint — Normalfall' },
  { tone: 'outline', name: 'outline — auf Dunkel' },
  { tone: 'plain', name: 'plain — ohne Fläche' },
  { tone: 'solid', name: 'solid — Zustand' },
]

/* ---- Beispieldaten ------------------------------------------------------ */

const BEISPIEL_LEISTUNGEN = [
  { icon: 'haken' as IconName, heading: 'Beispielleistung eins' },
  { icon: 'haken' as IconName, heading: 'Beispielleistung zwei' },
  { icon: 'haken' as IconName, heading: 'Beispielleistung drei' },
  { icon: 'haken' as IconName, heading: 'Beispielleistung vier' },
  { icon: 'haken' as IconName, heading: 'Beispielleistung fünf' },
  { icon: 'haken' as IconName, heading: 'Beispielleistung sechs' },
]

const BEISPIEL_SCHRITTE = [
  { heading: 'Erster Schritt', body: 'Beispieltext, der beschreibt, was hier geschieht.' },
  { heading: 'Zweiter Schritt', body: 'Beispieltext, der beschreibt, was hier geschieht.' },
  { heading: 'Dritter Schritt', body: 'Beispieltext, der beschreibt, was hier geschieht.' },
  { heading: 'Vierter Schritt', body: 'Beispieltext, der beschreibt, was hier geschieht.' },
]

const BEISPIEL_FAKTEN = [
  { icon: 'uhr' as IconName, label: 'Beispielangabe Zeit', value: 'Montag bis Freitag' },
  { icon: 'standort' as IconName, label: 'Beispielangabe Ort', value: 'Beispielstrasse 1, Beispielort' },
  { icon: 'dokument' as IconName, label: 'Beispielangabe Nummer', value: 'CHE-000.000.000' },
  { icon: 'telefon' as IconName, label: 'Beispielangabe Telefon', value: '000 000 00 00' },
]

const BEISPIEL_FRAGEN = [
  {
    question: 'Erste Beispielfrage, die aufgeklappt werden kann?',
    answer: 'Beispielantwort. Sie steht hier nur, damit die Form beurteilbar ist.',
  },
  {
    question: 'Zweite Beispielfrage, etwas länger formuliert als die erste?',
    answer: 'Beispielantwort. Mehrere Fragen dürfen gleichzeitig offen sein.',
  },
  {
    question: 'Dritte Beispielfrage?',
    answer: 'Beispielantwort.',
  },
]

/* ---- Geruest ------------------------------------------------------------ */

function Probe({
  titel,
  hinweis,
  flaeche = '',
  children,
}: {
  titel: string
  hinweis: string
  flaeche?: string
  children: React.ReactNode
}) {
  return (
    <section className={styles.probe}>
      <div className={`ac-container ${styles.probeKopf}`}>
        <h2 className={styles.probeTitel}>{titel}</h2>
        <p className={styles.probeHinweis}>{hinweis}</p>
      </div>
      <div className={`ac-section ${flaeche} ${styles.buehne}`}>
        <div className="ac-container">{children}</div>
      </div>
    </section>
  )
}

export default function StyleguidePage() {
  return (
    <main className={styles.seite}>
      <header className={`ac-section ac-section--tint ${styles.kopf}`}>
        <div className="ac-container">
          <p className="ac-eyebrow">Arbeitsmittel · nicht öffentlich</p>
          <h1>Styleguide</h1>
          <p className="ac-lead">
            Die geteilten Bausteine mit Beispieldaten. Sämtliche Texte auf dieser Seite sind
            erfunden und dienen nur der Beurteilung von Form und Verhalten.
          </p>
        </div>
      </header>

      {/* ---- Die drei Vorlagen ---------------------------------------- */}
      <Probe
        titel="Seitenarchetypen"
        hinweis="Drei Vorlagen, jede mit Beispieldaten als ganze Seite. Sie legen Abfolge und Flächenwechsel fest — nicht den Wortlaut."
        flaeche="ac-section--tint"
      >
        <ul className={styles.vorlagen} role="list">
          <li>
            <Link className={styles.vorlage} href="/styleguide/vorlage-a/">
              <span className={styles.vorlageName}>Vorlage A</span>
              <span className={styles.vorlageZweck}>Startseite</span>
              <span className={styles.vorlageAbfolge}>
                Einstieg · Bereiche · Anliegen · Weshalb A&amp;C · Ablauf · Ansprechpartner ·
                Abschluss
              </span>
            </Link>
          </li>
          <li>
            <Link className={styles.vorlage} href="/styleguide/vorlage-b/">
              <span className={styles.vorlageName}>Vorlage B</span>
              <span className={styles.vorlageZweck}>Leistungsseite</span>
              <span className={styles.vorlageAbfolge}>
                Seitenkopf · Das übernehmen wir · Ablauf · Vertiefung · Fragen · Abschluss
              </span>
            </Link>
          </li>
          <li>
            <Link className={styles.vorlage} href="/styleguide/vorlage-c/">
              <span className={styles.vorlageName}>Vorlage C</span>
              <span className={styles.vorlageZweck}>Inhaltsseite</span>
              <span className={styles.vorlageAbfolge}>
                Titel · Einleitung · frei kombinierbare Abschnitte · Abschluss
              </span>
            </Link>
          </li>
        </ul>
      </Probe>

      {/* ---- Icons ---------------------------------------------------- */}
      <Probe
        titel="Icon"
        hinweis="Ein Set, ein Stil: 24er Raster, Strichstärke 1.5, runde Enden, currentColor. Dekorativ, sofern kein Label gesetzt ist."
      >
        <ul className={styles.iconRaster} role="list">
          {ALLE_ICONS.map((name) => (
            <li key={name} className={styles.iconFeld}>
              <Icon name={name} size={1.5} />
              <code>{name}</code>
            </li>
          ))}
        </ul>
      </Probe>

      {/* ---- IconCircle ----------------------------------------------- */}
      <Probe
        titel="IconCircle"
        hinweis="Die Kreisfläche wird nach Untergrund gewählt, nicht nach Wichtigkeit. „solid“ ist ein Zustand — nie eine Rangordnung."
      >
        <ul className={styles.toneRaster} role="list">
          {TOENE.map((eintrag) => (
            <li
              key={eintrag.tone}
              className={
                eintrag.tone === 'outline' ? `${styles.toneFeld} ${styles.toneDunkel}` : styles.toneFeld
              }
            >
              <IconCircle name="schild" tone={eintrag.tone} size="lg" />
              <code>{eintrag.name}</code>
            </li>
          ))}
        </ul>
      </Probe>

      {/* ---- SectionHeader -------------------------------------------- */}
      <Probe
        titel="SectionHeader"
        hinweis="Vorzeile, Überschrift, Einleitung. Jeder Abschnitt benutzt diesen Kopf, damit keine Seite ihre Überschrift selbst gestaltet."
      >
        <SectionHeader
          marker
          eyebrow="Beispiel-Vorzeile"
          heading="Beispielüberschrift eines Abschnitts"
          lead="Beispiel-Einleitung in einem Satz. Sie bleibt auf Lesebreite begrenzt."
        />
      </Probe>

      {/* ---- ServiceCard ---------------------------------------------- */}
      <Probe
        titel="ServiceCard"
        hinweis="Icon, Titel, höchstens drei Stichworte. Die ganze Karte ist Trefferfläche; verlinkt ist der Titel. Kein Fliesstext."
        flaeche="ac-section--tint"
      >
        <ul className={styles.kartenRaster} role="list">
          <li>
            <ServiceCard
              icon="schild"
              heading="Versicherungen"
              chips={['Stichwort eins', 'Stichwort zwei', 'Stichwort drei']}
              target="versicherungen"
              locale="de"
            />
          </li>
          <li>
            <ServiceCard
              icon="buch"
              heading="Treuhand"
              chips={['Stichwort eins', 'Stichwort zwei', 'Stichwort drei']}
              target="treuhand"
              locale="de"
            />
          </li>
          <li>
            <ServiceCard
              icon="beleg"
              heading="Noch nicht gebaut"
              chips={['Stichwort eins', 'Stichwort zwei']}
              target="buchhaltung"
              locale="de"
            />
          </li>
        </ul>
      </Probe>

      {/* ---- IconFeature ---------------------------------------------- */}
      <Probe
        titel="IconFeature"
        hinweis="Icon plus kurze Aussage — der Ersatz für den Absatz. Trägt „Das übernehmen wir“ und „Weshalb A&C“."
      >
        <IconFeatureGrid items={BEISPIEL_LEISTUNGEN} columns={3} />
      </Probe>

      <Probe
        titel="IconFeature auf dunkler Fläche"
        hinweis="Derselbe Baustein, Ton „outline“. Höchstens zwei dunkle Flächen je Seite."
        flaeche="ac-section--navy on-navy"
      >
        <SectionHeader heading="Beispielüberschrift auf Dunkel" />
        <IconFeatureGrid items={BEISPIEL_LEISTUNGEN.slice(0, 4)} columns={2} tone="outline" />
      </Probe>

      {/* ---- StepList -------------------------------------------------- */}
      <Probe
        titel="StepList — gestapelt"
        hinweis="Der Ablauf ist sichtbar ein Ablauf: Zahl, Verbindungslinie, ein Schritt nach dem anderen. Anzahl und Wortlaut je Seite bleiben unverändert."
      >
        <StepList steps={BEISPIEL_SCHRITTE} />
      </Probe>

      <Probe
        titel="StepList — nebeneinander"
        hinweis="Dieselben Daten, Anordnung „flow“. Für kurze Abläufe mit knappem Text."
        flaeche="ac-section--tint"
      >
        <StepList steps={BEISPIEL_SCHRITTE} layout="flow" />
      </Probe>

      {/* ---- FactRow --------------------------------------------------- */}
      <Probe
        titel="FactRow"
        hinweis="Harte Angaben als Paare, ausgegeben als Beschreibungsliste. Für Zeiten, Fristen, Preisrahmen, Registernummern."
      >
        <FactRow items={BEISPIEL_FAKTEN} />
      </Probe>

      {/* ---- Accordion -------------------------------------------------- */}
      <Probe
        titel="Accordion"
        hinweis="Gebaut auf details und summary — ohne JavaScript, ohne Bibliothek. Die Frage ist zugleich Überschrift; beim Drucken ist alles offen."
        flaeche="ac-section--tint"
      >
        <Accordion items={BEISPIEL_FRAGEN} />
      </Probe>

      {/* ---- PersonCard ------------------------------------------------- */}
      <Probe
        titel="PersonCard"
        hinweis="Porträt im festen Format 3:4. Solange keine Aufnahme vorliegt, steht die Platzhalterfläche an derselben Stelle — beim Einsetzen verschiebt sich nichts."
      >
        <PersonGrid>
          <PersonCard
            locale="de"
            name="Beispielname eins"
            role="Beispielfunktion"
            responsibility="Beispiel-Zuständigkeit"
            languages="Sprache eins, zwei, drei"
          />
          <PersonCard
            locale="de"
            name="Beispielname zwei"
            role="Beispielfunktion"
            responsibility="Beispiel-Zuständigkeit"
            languages="Sprache eins, zwei"
          />
        </PersonGrid>
      </Probe>

      {/* ---- ImagePlaceholder ------------------------------------------- */}
      <Probe
        titel="ImagePlaceholder"
        hinweis="Ruhige gefüllte Fläche statt dünn umrandetem Kästchen. Das Seitenverhältnis wird von aussen gesetzt und bleibt beim Austausch gleich."
      >
        <div className={styles.bildRaster}>
          <ImagePlaceholder label="BEISPIEL 16:10" note="Beispielhinweis" />
          <ImagePlaceholder label="BEISPIEL 3:4" className={styles.hoch} />
        </div>
      </Probe>

      {/* ---- DraftNote --------------------------------------------------- */}
      <Probe
        titel="DraftNote"
        hinweis="Redaktionsmarke. Im Produktionsbau wird sie nicht ausgegeben; mit AC_SHOW_DRAFT=1 lässt sich die Anzeige erzwingen. Ist unten nichts zu sehen, läuft dieser Bau ohne Marker."
      >
        <p>
          Beispielsatz mit einer offenen Angabe mitten im Text:{' '}
          <DraftNote>Beispiel für eine noch offene Angabe</DraftNote>. Der Satz läuft weiter.
        </p>
        <DraftNote block kind="uebersetzung">
          Beispiel für einen Text, der in dieser Sprache noch nicht vorliegt
        </DraftNote>
      </Probe>

      {/* ---- CTASection --------------------------------------------------- */}
      <Probe
        titel="CTASection — hell"
        hinweis="Der Abschluss steht auf jeder Seite an derselben Stelle und sieht überall gleich aus. Grüne Oberkante."
      >
        <p className={styles.probeHinweis}>Der Baustein bringt seine eigene Fläche mit:</p>
      </Probe>

      <CTASection
        heading="Beispielüberschrift des Abschlusses"
        lead={<p>Beispielsatz, der zur Kontaktaufnahme auffordert.</p>}
        showContact
        actions={<Button href="#">Beispielknopf</Button>}
      />

      <CTASection
        heading="Dieselbe Ausprägung auf Dunkel"
        lead={<p>Beispielsatz. Höchstens einmal je Seite.</p>}
        surface="dunkel"
        showContact
        actions={<Button href="#">Beispielknopf</Button>}
      />
    </main>
  )
}
