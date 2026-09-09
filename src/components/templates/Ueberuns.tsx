import { CTASection } from '@/components/blocks/CTASection'
import { pruefeFlaechen, Section, type Surface } from '@/components/blocks/Section'
import { Button } from '@/components/ui/Button'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
import { RichText } from '@/components/ui/RichText'
import type { UeberunsContent } from '@/content/ueberuns'
import type { Locale } from '@/i18n/config'
import { hrefOrDefault } from '@/i18n/routes'
import { direktnummern } from '@/lib/company'

import styles from './Ueberuns.module.css'

/**
 * Vorlage E — „Ueber uns".
 *
 * Fuenf Kompositionen, **keine fuenf Sektionen**. Das ist der Unterschied zur
 * bisherigen Fassung: Die lief ueber das allgemeine Blockmodell, das jeden
 * Abschnitt gleich baut — Ueberschrift, Absaetze, grosser Abstand. Bei fuenf
 * Abschnitten hintereinander entsteht daraus ein Muster, kein Rhythmus.
 *
 * Jeder Teil hat darum eine eigene Anordnung:
 *
 *   1 Kopf         asymmetrisch 58/42, Text links, grosses Bild rechts
 *   2 Inhaber      abwechselnd Bild links / Bild rechts, redaktionell
 *   3 Arbeitsweise Ueberschrift links, nummerierte Liste rechts   — hell
 *   4 Standort     Text links, breites Bild rechts, Randangaben darunter
 *   5 Abschluss    dunkel, kompakt, gross                          — FLAECHE
 *
 * Der Wechsel entsteht aus Breite, Ausrichtung, Bildanteil und Schriftgroesse —
 * nicht aus Rahmen, Karten oder Piktogrammen. Auf dieser Seite gibt es kein
 * einziges Icon.
 *
 * **Die Abstaende sind enger als sonst.** Die Seite verwendet nicht
 * `--ac-section-y` (60–120 px), sondern eine eigene, knappere Staffelung: Was
 * zusammengehoert, steht zusammen. Der Kopf laeuft ohne Abstand in die Profile,
 * die Profile ohne Abstand ineinander.
 *
 * Die Anker `inhaber`, `arbeitsweise` und `region` bleiben erhalten.
 */

const FLAECHEN: readonly Surface[] = [
  'weiss', // 1+2 Kopf und Inhaber — eine durchgehende Flaeche
  'hell', // 3 Arbeitsweise
  'weiss', // 4 Standort
  'flaeche', // 5 Abschluss
]

type Props = {
  inhalt: UeberunsContent
  locale: Locale
}

export function UeberunsTemplate({ inhalt, locale }: Props) {
  pruefeFlaechen(FLAECHEN, 'Ueber uns')
  const [, fArbeitsweise, , fAbschluss] = FLAECHEN as [Surface, Surface, Surface, Surface]

  return (
    <>
      {/* ---- 1 Kopf und 2 Inhaber auf einer durchgehenden Flaeche --------- */}
      <div className={styles.oben}>
        <div className="ac-container">
          {/* Kopf: Text schmal links, Bild gross rechts. */}
          <header className={styles.kopf}>
            <div className={styles.kopfText}>
              <p className="ac-eyebrow">{inhalt.kopf.eyebrow}</p>
              <h1 id="seitenkopf" className={styles.titel}>
                {inhalt.kopf.titel}
              </h1>
              <p className={styles.kopfSatz}>{inhalt.kopf.satz}</p>
            </div>

            <ImagePlaceholder
              className={styles.kopfBild}
              label={inhalt.kopf.bild.label}
              note={inhalt.kopf.bild.note}
            />
          </header>

          {/* Profile: abwechselnd, damit zwei Personen nicht zweimal
              dasselbe Bild ergeben. */}
          {/* `inhaber` ist das Sprungziel, `inhaber-titel` benennt den
              Abschnitt. Zwei Rollen, zwei Kennungen — dieselbe zweimal waere
              ungueltiges HTML und fuer Hilfstechnik mehrdeutig. */}
          <section aria-labelledby="inhaber-titel" id="inhaber" className={styles.profile}>
            <h2 id="inhaber-titel" className="ac-visually-hidden">
              {inhalt.inhaber.titel}
            </h2>

            {inhalt.inhaber.leute.map((person, index) => (
              <article
                key={person.name}
                className={`${styles.profil} ${index % 2 === 1 ? styles.gedreht : ''}`}
              >
                <ImagePlaceholder
                  className={styles.profilBild}
                  label={person.bild.label}
                  note={person.bild.note}
                />

                <div className={styles.profilText}>
                  <p className={styles.rolle}>{person.rolle}</p>
                  <h3 className={styles.name}>{person.name}</h3>

                  <p className={styles.kern}>
                    <RichText value={person.kern} />
                  </p>

                  {/* Sekundaer: kleiner, ruhiger, schmaler. Der Werdegang ist
                      Beleg, nicht Aussage — er muss lesbar sein, nicht laut. */}
                  <p className={styles.werdegang}>
                    <RichText value={person.werdegang} />
                  </p>

                  <p className={styles.meta}>
                    <span>{person.sprachen}</span>
                    <a href={`tel:${direktnummern[person.telefon.wer].e164}`}>
                      {person.telefon.label}
                      {direktnummern[person.telefon.wer].anzeige}
                    </a>
                  </p>
                </div>
              </article>
            ))}
          </section>
        </div>
      </div>

      {/* ---- 3 Arbeitsweise — Ueberschrift links, Liste rechts ------------ */}
      <Section surface={fArbeitsweise} id="arbeitsweise" labelledBy="arbeitsweise-titel">
        <div className={styles.prinzipienRaster}>
          <h2 id="arbeitsweise-titel" className={styles.prinzipienTitel}>
            {inhalt.arbeitsweise.titel}
          </h2>

          {/* Nummeriert, mit Haarlinien getrennt. Keine Karten: Fuenf Karten
              waeren wieder fuenfmal dasselbe. */}
          <ol className={styles.prinzipien}>
            {inhalt.arbeitsweise.prinzipien.map((prinzip, index) => (
              <li key={prinzip.titel} className={styles.prinzip}>
                <span className={styles.nummer} aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className={styles.prinzipTitel}>{prinzip.titel}</h3>
                  <p className={styles.prinzipSatz}>
                    <RichText value={prinzip.satz} />
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* ---- 4 Standort — Text links, breites Bild rechts ------------------ */}
      <section className={styles.standort} id="region" aria-labelledby="region-titel">
        <div className="ac-container">
          <div className={styles.standortRaster}>
            <div className={styles.standortText}>
              <h2 id="region-titel">{inhalt.standort.titel}</h2>
              <p className={styles.adresse}>
                <RichText value={inhalt.standort.adresse} />
              </p>
              <p className={styles.standortSatz}>{inhalt.standort.satz}</p>
            </div>

            <ImagePlaceholder
              className={styles.standortBild}
              label={inhalt.standort.bild.label}
              note={inhalt.standort.bild.note}
            />
          </div>

          {/* Randangaben: Region und Beratungssprachen, keine Saetze. */}
          <ul className={styles.standortMeta} role="list">
            {inhalt.standort.meta.map((angabe) => (
              <li key={angabe}>{angabe}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---- 5 Abschluss --------------------------------------------------- */}
      <CTASection
        id="abschluss"
        surface={fAbschluss}
        heading={inhalt.abschluss.titel}
        lead={<p>{inhalt.abschluss.satz}</p>}
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
