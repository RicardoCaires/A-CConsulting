import type { ReactNode } from 'react'

import { Icon } from '@/components/ui/Icon'

import styles from './Fragen.module.css'

/**
 * Haeufige Fragen — der eine Baustein fuer alle Seiten.
 *
 * Nach Ricardos Referenzgrafik vom 11.09.2026, zuerst auf `/versicherungen`.
 * Seit demselben Tag auf seine Anweisung („häufige Fragen überall gleich
 * designen") auf jeder Seite mit Fragen: Kategoriezeile, Titel, zwei
 * Einleitungssaetze, eine weisse Karte mit den Fragen und ein leiser Zusatz
 * darunter, auf hellblauem Grund.
 *
 * Kategoriezeile, Einleitung und Zusatz sind optional. Die Leistungsseiten
 * (Vorlage B) fuehren sie je Sprache; fehlen sie, steht nur der Titel ueber
 * der Karte — das Aussehen bleibt dasselbe.
 *
 * Die Inhalte kommen fertig gesetzt herein (`ReactNode`): Das Blockmodell
 * reicht Zeichenketten und `RichText`, Vorlage B uebersetzte Felder.
 *
 * **`<details>` statt Knopf mit `aria-expanded`.** `<details>` bringt dieselbe
 * Zugaenglichkeit ohne eine Zeile JavaScript mit: Vorlesewerkzeuge melden
 * „aufgeklappt" und „zugeklappt" von selbst, die Tastatur bedient der Browser.
 * Die Hausordnung verlangt, dass Inhalte ohne Skript funktionieren.
 *
 * Alle Fragen sind anfangs zu. Mehrere duerfen gleichzeitig offen sein.
 *
 * Die Frage ist zugleich Ueberschrift, damit sie in der Gliederung und fuer
 * Vorlesewerkzeuge auffindbar bleibt, auch wenn die Antwort zu ist.
 */

type Props = {
  id: string
  eyebrow?: ReactNode
  heading: ReactNode
  lead?: readonly ReactNode[]
  items: readonly { question: ReactNode; answer: ReactNode }[]
  schluss?: ReactNode
}

export function Fragen({ id, eyebrow, heading, lead, items, schluss }: Props) {
  const headingId = `${id}-titel`

  return (
    <section id={id} className={styles.abschnitt} aria-labelledby={headingId}>
      <div className={styles.inner}>
        <div className={styles.kopf}>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <h2 id={headingId} className={styles.titel}>
            {heading}
          </h2>
          {/* Zwei Saetze, je auf eigener Zeile wie in der Vorlage. Das
              Leerzeichen davor haelt sie fuer Vorlesewerkzeuge getrennt. */}
          {lead && lead.length > 0 && (
            <p className={styles.lead}>
              {lead.map((satz, index) => (
                <span key={index}>
                  {index > 0 ? ' ' : ''}
                  {satz}
                </span>
              ))}
            </p>
          )}
        </div>

        <div className={styles.karte}>
          {items.map((item, index) => (
            <details key={index} className={styles.eintrag}>
              <summary className={styles.frage}>
                <h3>{item.question}</h3>
                <span className={styles.chevron} aria-hidden="true">
                  <Icon name="chevron" size={1.375} />
                </span>
              </summary>
              <div className={styles.antwort}>{item.answer}</div>
            </details>
          ))}
        </div>

        {/* „Persönlich. Unabhängig. An Ihrer Seite." Auf `/versicherungen`
            steht der Zusatz zum zweiten Mal — auch im Modellabschnitt. Ricardo
            hat ihn dort verlangt und am 11.09.2026 fuer alle Fragen
            uebernommen. */}
        {schluss && <p className={styles.schluss}>{schluss}</p>}
      </div>
    </section>
  )
}
