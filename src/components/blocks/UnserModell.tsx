import Image from 'next/image'

import { RichText } from '@/components/ui/RichText'
import type { Rich } from '@/content/types'

import styles from './UnserModell.module.css'

/**
 * „Wir vertreten Sie, nicht die Versicherung." — das Modell als Abschnitt.
 *
 * Dritte Fassung, 10.09.2026. Ricardo hat die Referenz diesmal als **fertiges
 * HTML** geliefert (`bilder-quelle/unser-modell_referenz.html`); sie ist damit
 * kein Bild mehr, das man ausmessen muss, sondern eine Vorlage, die man lesen
 * kann. Aufbau, Reihenfolge, Groessen und Abstaende stammen von dort.
 *
 * Uebernommen wurde die Gestaltung, nicht der Code: Die Vorlage schreibt
 * Farbwerte und Georgia direkt hinein. Hier stehen dafuer die Projekt-Tokens
 * und die Schrift der Website — ein Hex-Wert in einer Komponente ist in diesem
 * Projekt ein Fehler, und eine zweite Schriftfamilie waere eine zweite Marke.
 *
 * Fuenf Teile, wie in der Vorlage:
 *   1 Einleitung links, drei Grundsaetze rechts (43 zu 57 Prozent)
 *   2 der Ablauf: Kunde → Mandat → A&C → Preisvergleich → Gesellschaften
 *   3 die Rueckfuehrung: eine Klammer von rechts unten zurueck nach links oben
 *   4 die Nutzenleiste, vier Spalten
 *   5 die Schlusszeile
 *
 * **Die Rueckfuehrung ist der Teil, der bisher fehlte.** In der Vorlage ist es
 * eine U-Klammer aus drei Raendern mit einer Spitze oben links; in ihrer Mitte
 * sitzt das Ergebnis und stanzt die Linie frei. Sie hat eigenen senkrechten
 * Raum, damit nichts ueberlappt.
 *
 * Die Symbole sind geliefert und stehen unveraendert da: kein Filter, keine
 * Umfaerbung, kein Beschnitt. Die Marker vor den Stichpunkten sind Ringe aus
 * CSS in hellem Blaugrau — so schreibt es die Vorlage, und so sind sie
 * zurueckhaltender als die gruenen Haken der ersten Fassung.
 */

type Grundsatz = { bild: string; titel: string; satz: string }
type Nutzen = { bild: string; titel: string; satz: string }

type Props = {
  id?: string
  eyebrow: string
  heading: string
  lead: Rich
  grundsaetze: readonly Grundsatz[]
  kunde: { bild: string; titel: string; punkte: readonly string[] }
  mandat: { titel: string; satz: string }
  mitte: { bild: string; alt: string; punkte: readonly string[] }
  preisvergleich: { titel: string; satz: string }
  markt: { bild: string; alt: string }
  ergebnis: { titel: string; satz: string }
  nutzen: readonly Nutzen[]
  schluss: { links: string; rechts: string }
}

/** Ein geliefertes Symbol. Immer quadratisch, nie eingefaerbt. */
function Symbol({ datei, groesse }: { datei: string; groesse: number }) {
  return (
    <Image
      className={styles.symbol}
      src={`/bilder/${datei}.webp`}
      alt=""
      width={192}
      height={192}
      sizes={`${groesse}px`}
    />
  )
}

/** Eine Liste mit den zurueckhaltenden Ringmarkern der Vorlage. */
function Liste({ punkte }: { punkte: readonly string[] }) {
  return (
    <ul className={styles.liste} role="list">
      {punkte.map((punkt) => (
        <li key={punkt}>{punkt}</li>
      ))}
    </ul>
  )
}

/** Ein Zwischenschritt: Linie, Titel, Pfeil — darunter der Satz. */
function Schritt({ titel, satz }: { titel: string; satz: string }) {
  return (
    <div className={styles.schritt}>
      <p className={styles.schrittZeile}>
        <strong>{titel}</strong>
        <span aria-hidden="true">→</span>
      </p>
      <p className={styles.schrittSatz}>{satz}</p>
    </div>
  )
}

export function UnserModell({
  id = 'modell',
  eyebrow,
  heading,
  lead,
  grundsaetze,
  kunde,
  mandat,
  mitte,
  preisvergleich,
  markt,
  ergebnis,
  nutzen,
  schluss,
}: Props) {
  const headingId = `${id}-titel`

  return (
    <section id={id} className={styles.abschnitt} aria-labelledby={headingId}>
      {/* Das gelieferte Hintergrundmuster: feine Boegen und vereinzelte
          Punkte. Es liegt hinter allem und traegt halbe Deckkraft. */}
      <div className={styles.muster} aria-hidden="true">
        <Image
          className={styles.musterBild}
          src="/bilder/11_hintergrundmuster.webp"
          alt=""
          width={1600}
          height={900}
          sizes="100vw"
        />
      </div>

      <div className={styles.inner}>
        {/* ---- 1 Einleitung und Grundsaetze ----------------------------- */}
        <div className={styles.kopf}>
          <div>
            <p className={styles.eyebrow}>{eyebrow}</p>
            <h2 id={headingId} className={styles.titel}>
              {heading}
            </h2>
            <p className={styles.lead}>
              <RichText value={lead} />
            </p>
          </div>

          <ul className={styles.grundsaetze} role="list">
            {grundsaetze.map((g) => (
              <li key={g.titel} className={styles.grundsatz}>
                <Symbol datei={g.bild} groesse={74} />
                <h3>{g.titel}</h3>
                <p>{g.satz}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* ---- 2 Der Ablauf --------------------------------------------- */}
        <div className={styles.ablauf}>
          <article className={`${styles.karte} ${styles.kunde}`}>
            <div className={styles.kartenKopf}>
              <Symbol datei={kunde.bild} groesse={68} />
              <h3>{kunde.titel}</h3>
            </div>
            <span className={styles.akzent} aria-hidden="true" />
            <Liste punkte={kunde.punkte} />
          </article>

          <Schritt titel={mandat.titel} satz={mandat.satz} />

          <article className={`${styles.karte} ${styles.zentral}`}>
            <Image
              className={styles.logo}
              src={`/bilder/${mitte.bild}.webp`}
              alt={mitte.alt}
              width={440}
              height={330}
              sizes="300px"
            />
            <span className={styles.akzent} aria-hidden="true" />
            <Liste punkte={mitte.punkte} />
          </article>

          <Schritt titel={preisvergleich.titel} satz={preisvergleich.satz} />

          {/* Das gelieferte Panel bringt seine Karten mit; die Karte darum
              gibt ihm nur den gemeinsamen Rahmen der drei Stationen. */}
          <article className={`${styles.karte} ${styles.markt}`}>
            <Image
              src={`/bilder/${markt.bild}.webp`}
              alt={markt.alt}
              width={760}
              height={570}
              sizes="(min-width: 74rem) 300px, 100vw"
            />
          </article>
        </div>

        {/* ---- 3 Die Rueckfuehrung ---------------------------------------

            Eine Klammer von den Gesellschaften nach unten, waagrecht nach
            links und mit der Spitze wieder hinauf zum Kunden. Sie hat eigenen
            senkrechten Raum, damit sie nichts ueberlappt. */}
        <div className={styles.rueckfuehrung}>
          <span className={styles.klammer} aria-hidden="true" />
          <div className={styles.ergebnis}>
            <h3>{ergebnis.titel}</h3>
            <p>{ergebnis.satz}</p>
          </div>
        </div>

        {/* ---- 4 Die Nutzenleiste --------------------------------------- */}
        <ul className={styles.nutzen} role="list">
          {nutzen.map((n) => (
            <li key={n.titel} className={styles.nutzenPosten}>
              <Symbol datei={n.bild} groesse={72} />
              <div>
                <h3>{n.titel}</h3>
                <p>{n.satz}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* ---- 5 Die Schlusszeile --------------------------------------- */}
        <div className={styles.schluss}>
          <span>{schluss.links}</span>
          <span>{schluss.rechts}</span>
        </div>
      </div>
    </section>
  )
}
