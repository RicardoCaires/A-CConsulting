import Image from 'next/image'

import { RichText } from '@/components/ui/RichText'
import type { Rich } from '@/content/types'

import styles from './UnserModell.module.css'

/**
 * „Wir vertreten Sie, nicht die Versicherung." — das Modell als gebauter
 * Abschnitt.
 *
 * Nach Ricardos Referenzgrafik vom 10.09.2026
 * (`bilder-quelle/unser-modell_referenz.png`). Bis dahin stand hier **eine
 * Bilddatei**; er hat ausdruecklich verlangt, dass daraus ein Webabschnitt
 * wird. Der Unterschied ist nicht nur Gestaltung: Text bleibt Text — waehlbar,
 * uebersetzbar, durchsuchbar und fuer Vorlesewerkzeuge lesbar. Aus dem Bild
 * kommen nur die Symbole.
 *
 * Vier Ebenen, wie in der Vorlage:
 *   1 Einleitung links, drei Grundsaetze rechts
 *   2 der Kreislauf: Kunde → Mandat → A&C → Preisvergleich → Markt → Ergebnis
 *   3 die Nutzenleiste
 *   4 die Schlusszeile
 *
 * **Die gelieferten Dateien der ersten Runde waren Bildschirmausschnitte** mit
 * eingebackenem Titel und Resten der Nachbarelemente. Ricardo hat am selben
 * Tag saubere Symbole nachgeliefert — 1254 x 1254, freigestellt. Diese sind
 * eingesetzt; die Titel stehen als Text daneben und nicht im Bild.
 *
 * Die Marker vor den Stichpunkten sind kleine Ringe aus CSS, keine Bilddatei
 * und kein Icon: In der Vorlage sind es Punkte von wenigen Pixeln. Ricardo hat
 * sie ausdruecklich „deutlich dezenter" verlangt.
 *
 * Der Kreislauf ist auf schmalen Geraeten keine Grafik, sondern eine Abfolge:
 * Die Pfeile werden zu Zwischenschritten. Eine waagrechte Prozessgrafik auf
 * 375 px zu quetschen ergaebe ein Muster, keinen Inhalt.
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

/** Ein Symbol aus der Lieferung. Immer quadratisch, nie eingefaerbt. */
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

/** Ein Stichpunkt mit dezentem Marker. */
function Punkt({ children }: { children: string }) {
  return (
    <li className={styles.punkt}>
      <span className={styles.marker} aria-hidden="true" />
      {children}
    </li>
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
      {/* Das gelieferte Hintergrundmuster. Sehr zurueckhaltend — was man als
          Muster erkennt, ist schon zu viel. */}
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

      {/* Eigener Container statt `ac-container`: 1400 px statt 1160. Siehe
          den Kopf des Stylesheets — im Standardmass wird der Abschnitt
          zwangslaeufig zu klein. */}
      <div className={styles.inner}>
        {/* ---- 1 Einleitung und Grundsaetze ----------------------------- */}
        <div className={styles.kopf}>
          <div className={styles.einleitung}>
            <p className={`ac-eyebrow ${styles.eyebrow}`}>{eyebrow}</p>
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
                <Symbol datei={g.bild} groesse={64} />
                <h3 className={styles.grundsatzTitel}>{g.titel}</h3>
                <p className={styles.grundsatzSatz}>{g.satz}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* ---- 2 Der Kreislauf ------------------------------------------ */}
        <div className={styles.kreislauf}>
          <div className={`${styles.station} ${styles.kunde}`}>
            <Symbol datei={kunde.bild} groesse={64} />
            <h3 className={styles.stationTitel}>{kunde.titel}</h3>
            <ul className={styles.punkte} role="list">
              {kunde.punkte.map((p) => (
                <Punkt key={p}>{p}</Punkt>
              ))}
            </ul>
          </div>

          <div className={styles.schritt}>
            <span className={styles.pfeil} aria-hidden="true" />
            <p className={styles.schrittTitel}>{mandat.titel}</p>
            <p className={styles.schrittSatz}>{mandat.satz}</p>
          </div>

          <div className={`${styles.station} ${styles.zentral}`}>
            <Image
              className={styles.logo}
              src={`/bilder/${mitte.bild}.webp`}
              alt={mitte.alt}
              width={440}
              height={330}
              sizes="240px"
            />
            <ul className={styles.punkte} role="list">
              {mitte.punkte.map((p) => (
                <Punkt key={p}>{p}</Punkt>
              ))}
            </ul>
          </div>

          <div className={styles.schritt}>
            <span className={styles.pfeil} aria-hidden="true" />
            <p className={styles.schrittTitel}>{preisvergleich.titel}</p>
            <p className={styles.schrittSatz}>{preisvergleich.satz}</p>
          </div>

          {/* Das gelieferte Panel. Es bringt seine Karten mit und steht darum
              ohne Rahmen aus dem Layout dahinter. */}
          <div className={styles.markt}>
            <Image
              className={styles.marktBild}
              src={`/bilder/${markt.bild}.webp`}
              alt={markt.alt}
              width={760}
              height={570}
              sizes="(min-width: 64rem) 320px, 100vw"
            />
          </div>
        </div>

        {/* ---- Der Rueckweg zum Kunden ---------------------------------- */}
        <div className={styles.ergebnis}>
          <span className={styles.rueckweg} aria-hidden="true" />
          <p className={styles.ergebnisTitel}>{ergebnis.titel}</p>
          <p className={styles.ergebnisSatz}>{ergebnis.satz}</p>
        </div>

        {/* ---- 3 Die Nutzenleiste --------------------------------------- */}
        <ul className={styles.nutzen} role="list">
          {nutzen.map((n) => (
            <li key={n.titel} className={styles.nutzenPosten}>
              <Symbol datei={n.bild} groesse={56} />
              <h3 className={styles.nutzenTitel}>{n.titel}</h3>
              <p className={styles.nutzenSatz}>{n.satz}</p>
            </li>
          ))}
        </ul>

        {/* ---- 4 Die Schlusszeile --------------------------------------- */}
        <div className={styles.schluss}>
          <p className={styles.schlussText}>
            <span className={styles.schlussStrich} aria-hidden="true" />
            {schluss.links}
          </p>
          <p className={styles.schlussText}>
            {schluss.rechts}
            <span className={styles.schlussStrich} aria-hidden="true" />
          </p>
        </div>
      </div>
    </section>
  )
}
