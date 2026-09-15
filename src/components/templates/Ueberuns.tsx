import Image from 'next/image'

import { pruefeFlaechen, Section, type Surface } from '@/components/blocks/Section'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
import { RichText } from '@/components/ui/RichText'
import type { UeberunsContent } from '@/content/ueberuns'
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

/* Der Abschluss „Lernen Sie uns kennen" ist am 14.09.2026 auf Ricardos
   Anweisung entfallen. Die Seite endet damit beim Standort — wie
   `/versicherungen`, `/treuhand`, `/steuern` und `/firmengruendung` haben
   auch hier die Handlungsknoepfe nur noch im Kopfbereich Platz. */
const FLAECHEN: readonly Surface[] = [
  'weiss', // 1+2 Kopf und Inhaber — eine durchgehende Flaeche
  'hell', // 3 Arbeitsweise
  'weiss', // 4 Standort
]

type Props = {
  inhalt: UeberunsContent
}

export function UeberunsTemplate({ inhalt }: Props) {
  pruefeFlaechen(FLAECHEN, 'Ueber uns')
  const [, fArbeitsweise] = FLAECHEN as [Surface, Surface, Surface]

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
              <p className={styles.kopfLead}>{inhalt.kopf.lead}</p>
              <p className={styles.kopfSatz}>{inhalt.kopf.satz}</p>

              <ul className={styles.bereiche} role="list">
                {inhalt.kopf.bereiche.map((bereich) => (
                  <li key={bereich}>{bereich}</li>
                ))}
              </ul>
            </div>

            {/* Die Legende steht unter der Flaeche, nie darueber: Ein Name
                quer ueber dem Bild verdeckt sonst ein Gesicht. */}
            <figure className={styles.kopfBildFeld}>
              {inhalt.kopf.bild.foto ? (
                <Image
                  className={styles.kopfFoto}
                  src={`/bilder/${inhalt.kopf.bild.foto}.webp`}
                  alt={inhalt.kopf.bild.alt ?? ''}
                  width={880}
                  height={1100}
                  unoptimized
                />
              ) : (
                <div
                  className={styles.kopfPlatzhalter}
                  role="img"
                  aria-label={inhalt.kopf.bild.label}
                />
              )}

              <figcaption className={styles.kopfLegende}>
                {inhalt.kopf.bild.legende}
              </figcaption>
            </figure>
          </header>

          {/* Zwei gleich grosse Profilkarten, seit dem 15.09.2026 nach
              Ricardos Vorlage. `grid-auto-rows: 1fr` haelt sie auf einer
              Hoehe; der Block mit den Sprachen schiebt sich mit
              `margin-top: auto` an den Fuss, damit der Knopf in beiden Karten
              auf derselben Linie steht. */}
          {/* `inhaber` ist das Sprungziel, `inhaber-titel` benennt den
              Abschnitt. Zwei Rollen, zwei Kennungen — dieselbe zweimal waere
              ungueltiges HTML und fuer Hilfstechnik mehrdeutig. */}
          <section aria-labelledby="inhaber-titel" id="inhaber" className={styles.inhaber}>
            <p className="ac-eyebrow">{inhalt.inhaber.eyebrow}</p>
            <h2 id="inhaber-titel" className={styles.inhaberTitel}>
              {inhalt.inhaber.titel}
            </h2>
            <p className={styles.inhaberEinleitung}>{inhalt.inhaber.einleitung}</p>

            <div className={styles.profile}>
              {inhalt.inhaber.leute.map((person) => (
                <article key={person.name} className={styles.profil}>
                  {person.bild.foto ? (
                    <Image
                      className={styles.profilBild}
                      src={`/bilder/${person.bild.foto}.webp`}
                      alt={person.bild.alt ?? ''}
                      width={560}
                      height={420}
                      unoptimized
                    />
                  ) : (
                    <div
                      className={styles.profilBild}
                      role="img"
                      aria-label={person.bild.label}
                    />
                  )}

                  <div className={styles.profilText}>
                    <p className={styles.rolle}>{person.rolle}</p>
                    <h3 className={styles.name}>{person.name}</h3>

                    <p className={styles.kern}>
                      <RichText value={person.kern} />
                    </p>

                    <dl className={styles.angaben}>
                      {person.angaben.map((angabe) => (
                        <div key={angabe.label} className={styles.angabe}>
                          <dt className={styles.angabeLabel}>{angabe.label}</dt>
                          <dd className={styles.angabeText}>
                            <RichText value={angabe.text} />
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <p className={styles.sprachen}>
                      <strong className={styles.sprachenLabel}>
                        {person.sprachenLabel}
                      </strong>{' '}
                      {person.sprachen}
                    </p>

                    {/* Die Nummer steht auf dem Knopf, nicht nur dahinter:
                        Wer anruft, will sie sehen und notieren koennen. */}
                    <a
                      className={styles.knopf}
                      href={`tel:${direktnummern[person.telefon.wer].e164}`}
                    >
                      {direktnummern[person.telefon.wer].anzeige}
                      <span className={styles.pfeil} aria-hidden="true">
                        →
                      </span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
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

    </>
  )
}
