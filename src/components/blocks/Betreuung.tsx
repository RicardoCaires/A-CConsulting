import Image from 'next/image'

import styles from './Betreuung.module.css'

/**
 * „Nach dem Abschluss hört es nicht auf" — die Betreuung als Karten.
 *
 * Nach Ricardos Referenzgrafik vom 10.09.2026
 * (`bilder-quelle/versicherungen_betreuung_referenz.png`). Bis dahin war es
 * ein `prose`-Block mit drei Absaetzen; der Text war richtig, aber niemand
 * sah, was gemeint ist.
 *
 * **Der Leadtext ist unveraendert** — er stand schon vorher so da. Neu sind
 * die Kategoriezeile, die vier Karten und die Schlusskarte.
 *
 * Aufbau: Ueberschrift und Lead oben, darunter vier gleich grosse Karten und
 * eine breite Schlusskarte. Das ist die zweite der beiden Varianten, die
 * Ricardo vorgeschlagen hat — die erste haette fuenf Karten in zwei Reihen
 * verteilt und dabei eine Reihe halb leer gelassen.
 *
 * Die fuenf Symbole sind geliefert und stehen unveraendert da: kein Filter,
 * keine Umfaerbung, kein Beschnitt. Sie bringen ihren hellgruenen Kreis mit;
 * im Layout liegt keine Flaeche dahinter.
 *
 * Der Anker `betreuung` bleibt, wie er war — die Sprungmarken unter dem
 * Seitenkopf zeigen darauf.
 */

type Karte = { bild: string; titel: string; satz: string }

type Props = {
  id: string
  eyebrow: string
  heading: string
  lead: readonly string[]
  karten: readonly Karte[]
  schluss: Karte
}

/** Ein geliefertes Symbol. Immer quadratisch, nie eingefaerbt. */
function Symbol({ datei, groesse }: { datei: string; groesse: number }) {
  return (
    <Image
      className={styles.symbol}
      src={`/bilder/${datei}.webp`}
      alt=""
      width={224}
      height={224}
      sizes={`${groesse}px`}
    />
  )
}

export function Betreuung({ id, eyebrow, heading, lead, karten, schluss }: Props) {
  const headingId = `${id}-titel`

  return (
    <section id={id} className={styles.abschnitt} aria-labelledby={headingId}>
      {/* Dasselbe geliefente Muster wie im Modellabschnitt weiter oben: feine
          Boegen, grosse helle Kreise an den Raendern, in der Mitte ruhig. */}
      <div className={styles.muster} aria-hidden="true">
        <Image
          className={styles.musterBild}
          src="/bilder/wide_minimal_abstract_background_design_a_clean.webp"
          alt=""
          width={1672}
          height={941}
          sizes="100vw"
        />
      </div>

      <div className={styles.inner}>
        <div className={styles.kopf}>
          <div>
            <p className={styles.eyebrow}>{eyebrow}</p>
            <h2 id={headingId} className={styles.titel}>
              {heading}
            </h2>
          </div>

          <div className={styles.lead}>
            {lead.map((absatz) => (
              <p key={absatz}>{absatz}</p>
            ))}
          </div>
        </div>

        <ul className={styles.karten} role="list">
          {karten.map((karte) => (
            <li key={karte.titel} className={styles.karte}>
              <Symbol datei={karte.bild} groesse={80} />
              <h3>{karte.titel}</h3>
              <p>{karte.satz}</p>
            </li>
          ))}
        </ul>

        {/* Die breite Schlusskarte. Sie fasst zusammen, statt einen fuenften
            Punkt anzuhaengen — darum liegt sie quer unter dem Raster und
            traegt einen Hauch Gruen. */}
        <div className={styles.schluss}>
          <Symbol datei={schluss.bild} groesse={80} />
          <div>
            <h3>{schluss.titel}</h3>
            <p>{schluss.satz}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
