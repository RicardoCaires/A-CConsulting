import Image from 'next/image'

import { CTASection } from '@/components/blocks/CTASection'
import { Fragen } from '@/components/blocks/Fragen'
import { Hero } from '@/components/blocks/Hero'
import { pruefeFlaechen, Section, type Surface } from '@/components/blocks/Section'
import { SectionHeader } from '@/components/blocks/SectionHeader'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
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
 *   2 Leistungen     Karten mit Symbol                            ┐ eine
 *   3 Ablauf         vier Karten, Nummern verbunden               ┘ Flaeche
 *   4 Vertiefung     optional; hier landet abgegebener Fliesstext — weiss
 *   5 Fragen         der Baustein `Fragen`, hellblau
 *   6 Abschluss      CTASection                                   — FLAECHE
 *
 * **2 und 3 seit dem 11.09.2026 nach Ricardos Referenzgrafik** fuer
 * `/treuhand/buchhaltung`: beide auf einer gemeinsamen Flaeche mit dem
 * gelieferten Hintergrund, der Ablauf eine Spur blauer abgesetzt. Die
 * Symbole kommen aus `bild`, wo die Seite geliefert hat; sonst bleibt das
 * Zeichen aus `Icon.tsx` — die Vorlage bleibt fuer kuenftige Seiten nutzbar.
 *
 * Die beiden leisen Zusaetze der Grafik („Zuverlässig. Strukturiert. An Ihrer
 * Seite.", „Klar. Persönlich. Effizient.") und die Marke „A&C Consulting"
 * unten rechts sind **nicht** uebernommen. Ricardo hat Zusaetze, die nicht im
 * Auftragstext stehen, mehrfach streichen lassen.
 *
 * **5 seit demselben Tag der Baustein `Fragen`** — „häufige Fragen überall
 * gleich designen".
 *
 * Fest ist die **Reihenfolge**, nicht der Wortlaut: Die Zwischentitel kommen
 * aus dem Inhalt, weil Schritt 4 je Seite eigene Ueberschriften nennt.
 *
 * `pruefeFlaechen` prueft die zugewiesene Folge weiterhin; die Abschnitte 2, 3
 * und 5 tragen seit dem Umbau eine eigene Flaeche.
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

/**
 * Die Nummernkreise des Ablaufs. Es sind die Dateien, die Ricardo fuer den
 * Ablauf auf `/treuhand` geliefert hat — dieselbe Gestaltung, nicht neu
 * gezeichnet. Mehr als vier gibt es nicht; ein fuenfter Schritt traegt seine
 * Nummer als Text.
 */
const NUMMERN = ['01_schritt_01', '02_schritt_02', '03_schritt_03', '04_schritt_04'] as const

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

  const fVertiefung = inhalt.vertiefung ? flaechen[2] : undefined

  const knopf = alsText(inhalt.cta.knopf, ui.page.kontakt)
  const bildPfad = (datei: string) => `/bilder/${inhalt.slug}/${datei}.webp`

  const symbol = (bild: string | undefined, fallback: Parameters<typeof Icon>[0]['name']) =>
    bild ? (
      <Image
        className={styles.symbol}
        src={bildPfad(bild)}
        alt=""
        width={256}
        height={256}
        unoptimized
      />
    ) : (
      <span className={`${styles.symbol} ${styles.symbolZeichen}`} aria-hidden="true">
        <Icon name={fallback} size={1.5} />
      </span>
    )

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

      {/* ---- 2 und 3 auf einer gemeinsamen Flaeche ------------------------ */}
      <div
        className={styles.zone}
        style={
          inhalt.hintergrund
            ? { backgroundImage: `url(${bildPfad(inhalt.hintergrund)})` }
            : undefined
        }
      >
        {/* ---- 2 Das übernehmen wir -------------------------------------- */}
        <section
          id="leistungen"
          aria-labelledby="leistungen-titel"
          className={styles.zonenAbschnitt}
        >
          <div className={`ac-container ${styles.zonenContainer}`}>
            <h2 id="leistungen-titel" className={styles.zonenTitel}>
              <Translated value={inhalt.abschnitte.leistungen} />
            </h2>

            <ul className={styles.leistungsKarten} role="list">
              {inhalt.leistungen.map((leistung, index) => (
                <li key={index} className={styles.leistungsKarte}>
                  {symbol(leistung.bild, leistung.icon)}
                  <div className={styles.leistungsText}>
                    <h3 className={styles.leistungsTitel}>
                      <Translated value={leistung.titel} />
                    </h3>
                    <span className={styles.strich} aria-hidden="true" />
                    {leistung.chips.length > 0 && (
                      <span className={styles.chips}>
                        {leistung.chips.slice(0, 3).map((chip, i) => (
                          <span key={i} className={styles.chip}>
                            <Translated value={chip} />
                          </span>
                        ))}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---- 3 Ablauf --------------------------------------------------- */}
        <section
          id="ablauf"
          aria-labelledby="ablauf-titel"
          className={`${styles.zonenAbschnitt} ${styles.ablaufAbschnitt}`}
        >
          <div className={`ac-container ${styles.zonenContainer}`}>
            <h2 id="ablauf-titel" className={styles.zonenTitel}>
              <Translated value={inhalt.abschnitte.ablauf} />
            </h2>

            <ol className={styles.ablaufKarten} role="list">
              {inhalt.ablauf.map((schritt, index) => {
                const nummer = NUMMERN[index]
                return (
                  <li key={index} className={styles.ablaufKarte}>
                    {nummer ? (
                      <Image
                        className={styles.nummer}
                        src={`/bilder/treuhand/${nummer}.svg`}
                        alt=""
                        width={512}
                        height={512}
                        unoptimized
                      />
                    ) : (
                      <span className={`${styles.nummer} ${styles.nummerText}`} aria-hidden="true">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    )}
                    {schritt.bild && symbol(schritt.bild, 'ablauf')}
                    <h3 className={styles.ablaufTitel}>
                      <Translated value={schritt.titel} />
                    </h3>
                    <p className={styles.ablaufText}>
                      <TranslatedRich value={schritt.text} />
                    </p>
                  </li>
                )
              })}
            </ol>
          </div>
        </section>
      </div>

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

      {/* ---- 5 Häufige Fragen — derselbe Baustein wie auf jeder Seite ----- */}
      <Fragen
        id="fragen"
        eyebrow={
          inhalt.fragenZusatz ? <Translated value={inhalt.fragenZusatz.kategorie} /> : undefined
        }
        heading={<Translated value={inhalt.abschnitte.fragen} />}
        lead={inhalt.fragenZusatz?.einleitung.map((satz, index) => (
          <Translated key={index} value={satz} />
        ))}
        items={inhalt.faq.map((eintrag) => ({
          question: <Translated value={eintrag.frage} />,
          answer: <TranslatedRich value={eintrag.antwort} />,
        }))}
        schluss={
          inhalt.fragenZusatz ? <Translated value={inhalt.fragenZusatz.schluss} /> : undefined
        }
      />

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
