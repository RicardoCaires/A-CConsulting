import Image from 'next/image'

import { Banner } from '@/components/blocks/Banner'
import { pruefeFlaechen, Section, type Surface } from '@/components/blocks/Section'
import { RichText } from '@/components/ui/RichText'
import { Standortkarte } from '@/components/ui/Standortkarte'
import type { UeberunsContent } from '@/content/ueberuns'
import type { Locale } from '@/i18n/config'
import {
  buero,
  bueroImSatz,
  bueroLage,
  direktadressen,
  direktnummern,
  mapsRoute,
} from '@/lib/company'

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
 *   3 Arbeitsweise Bentoraster aus fuenf Karten                    — hell
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
  locale: Locale
  /** Beschriftung des Knopfes im Banner. */
  bannerKnopf: string
}

export function UeberunsTemplate({ inhalt, locale, bannerKnopf }: Props) {
  pruefeFlaechen(FLAECHEN, 'Ueber uns')
  const [, fArbeitsweise] = FLAECHEN as [Surface, Surface, Surface]

  return (
    <>
      {/* ---- 1 Der Seitenbanner ------------------------------------------
          Seit dem 15.09.2026 traegt „Ueber uns" denselben Banner wie jede
          andere Seite. Der zweispaltige Einstieg — Pillen, Bildflaeche mit
          gruenem Eckmarker und Legende — ist damit entfallen; die gemeinsame
          Aufnahme hat auf der Seite keinen Platz mehr. */}
      <Banner
        themenzeile={inhalt.kopf.themenzeile}
        ueberschrift={inhalt.kopf.ueberschrift}
        id="seitenkopf"
        knopf={bannerKnopf}
        locale={locale}
        vorrang
      />

      {/* ---- 2 Die beiden Inhaber ---------------------------------------- */}
      <div className={styles.oben}>
        <div className="ac-container">
          {/* Zwei gleich grosse Profilkarten, seit dem 15.09.2026 nach
              Ricardos Vorlage. `grid-auto-rows: 1fr` haelt sie auf einer
              Hoehe; der Block mit den Sprachen schiebt sich mit
              `margin-top: auto` an den Fuss, damit der Knopf in beiden Karten
              auf derselben Linie steht. */}
          {/* `inhaber` ist das Sprungziel, `inhaber-titel` benennt den
              Abschnitt. Zwei Rollen, zwei Kennungen — dieselbe zweimal waere
              ungueltiges HTML und fuer Hilfstechnik mehrdeutig. */}
          {/* Der Banner darueber traegt Themenzeile und Ueberschrift. Die
              Ueberschrift steht hier noch einmal fuer Vorlesewerkzeuge, damit
              der Abschnitt einen Namen hat — sichtbar ist sie nicht. */}
          <section aria-labelledby="inhaber-titel" id="inhaber" className={styles.inhaber}>
            <h2 id="inhaber-titel" className="ac-visually-hidden">
              {inhalt.inhaber.banner.ueberschrift}
            </h2>

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
                    <div className={styles.knoepfe}>
                      <a
                        className={styles.knopf}
                        href={`tel:${direktnummern[person.telefon.wer].e164}`}
                      >
                        {direktnummern[person.telefon.wer].anzeige}
                        <span className={styles.pfeil} aria-hidden="true">
                          →
                        </span>
                      </a>
                      <a
                        className={styles.knopf}
                        href={`mailto:${direktadressen[person.telefon.wer]}`}
                      >
                        {person.mailLabel}
                        <span className={styles.pfeil} aria-hidden="true">
                          →
                        </span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* ---- 3 Arbeitsweise — Bentoraster aus fuenf Karten ---------------
          Zwei grosse oben, drei kompakte darunter. Beim Darueberfahren und
          bei Tastaturfokus wechselt die ganze Karte auf Navy; der gruene
          Strich vor der Kategorie bleibt gruen.

          Die Karten tragen `tabIndex={0}`, weil sie keinen Link enthalten und
          sonst gar nicht anspringbar waeren — den Fokuszustand verlangt der
          Auftrag ausdruecklich. */}
      <Section surface={fArbeitsweise} id="arbeitsweise" labelledBy="arbeitsweise-titel">
        <p className="ac-eyebrow">{inhalt.arbeitsweise.eyebrow}</p>
        <h2 id="arbeitsweise-titel" className={styles.prinzipienTitel}>
          {inhalt.arbeitsweise.titel}
        </h2>

        <div className={styles.prinzipien}>
          {inhalt.arbeitsweise.prinzipien.map((prinzip) => (
            <article key={prinzip.titel} className={styles.prinzip} tabIndex={0}>
              {/* Das Piktogramm traegt keine Aussage, die nicht daneben steht. */}
              <Image
                className={styles.prinzipBild}
                src={`/bilder/${prinzip.bild}.svg`}
                alt=""
                aria-hidden="true"
                width={96}
                height={96}
                unoptimized
              />
              <div className={styles.prinzipText}>
                <p className={styles.prinzipKategorie}>{prinzip.kategorie}</p>
                <h3 className={styles.prinzipTitel}>{prinzip.titel}</h3>
                <p className={styles.prinzipSatz}>
                  <RichText value={prinzip.satz} />
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ---- 4 Standort — eine Karte: Text links, Bildflaeche rechts -------
          Nach Ricardos Vorlage vom 15.09.2026, mit der neuen Adresse in
          Aegerten. Adresse, Ortsschild und Ziel der Routenplanung kommen aus
          `company.ts`; ein Umzug aendert alle drei auf einmal. */}
      <section className={styles.standort} id="region" aria-labelledby="region-titel">
        <div className="ac-container">
          <div className={styles.standortKarte}>
            <div className={styles.standortText}>
              <p className="ac-eyebrow">{inhalt.standort.eyebrow}</p>
              <h2 id="region-titel" className={styles.standortTitel}>
                {inhalt.standort.titel}
              </h2>
              <address className={styles.adresse}>
                <RichText value={inhalt.standort.adresse} />
              </address>
              <p className={styles.standortSatz}>{inhalt.standort.satz}</p>

              {/* Neues Fenster, weil die Routenplanung die Seite sonst
                  verlaesst. `noopener noreferrer` gehoert dazu. */}
              <a
                className={styles.routeKnopf}
                href={mapsRoute}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={inhalt.standort.aktion.ariaLabel.replace('{adresse}', bueroImSatz)}
              >
                {inhalt.standort.aktion.label}
                <span className={styles.pfeil} aria-hidden="true">
                  →
                </span>
              </a>
            </div>

            {/* Die Karte laedt erst auf Klick — vorher geht nichts an einen
                fremden Server. Das Ortsschild bleibt darueber stehen. */}
            <div className={styles.standortBild}>
              <Standortkarte
                bbox={bueroLage.bbox}
                marker={[bueroLage.breite, bueroLage.laenge]}
                knopf={inhalt.standort.karte.knopf}
                hinweis={inhalt.standort.karte.hinweis}
                titel={inhalt.standort.karte.titel}
              />
              <p className={styles.ortsschild} aria-hidden="true">
                <Image src="/bilder/standort_pin.svg" alt="" width={21} height={21} unoptimized />
                {`${buero.street} · ${buero.city}`}
              </p>
            </div>
          </div>

        </div>
      </section>

    </>
  )
}
