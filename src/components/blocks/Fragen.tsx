import { Icon } from '@/components/ui/Icon'
import { RichText } from '@/components/ui/RichText'
import type { Rich } from '@/content/types'

import styles from './Fragen.module.css'

/**
 * Haeufige Fragen auf `/versicherungen` — nach Ricardos Referenzgrafik vom
 * 11.09.2026.
 *
 * Kategoriezeile, Titel, zwei Einleitungssaetze, eine weisse Karte mit den
 * Fragen und ein leiser Zusatz darunter. Keine Symbole, keine zweite Spalte.
 *
 * **Nicht** `Accordion`: Der Baustein traegt die Fragen auf fuenf anderen
 * Seiten und bleibt, wie er ist. Fragen und Antworten sind unveraendert
 * uebernommen.
 *
 * **`<details>` statt Knopf mit `aria-expanded`.** Der Auftrag nennt Knoepfe
 * und `aria-expanded` als Weg zur Zugaenglichkeit; `<details>` erreicht
 * dasselbe ohne eine Zeile JavaScript: Vorlesewerkzeuge melden „aufgeklappt"
 * und „zugeklappt" von selbst, die Tastatur bedient der Browser. Die
 * Hausordnung verlangt, dass Inhalte ohne Skript funktionieren — eine
 * Antwort, die ohne Skript nicht aufgeht, waere keine.
 *
 * Alle Fragen sind anfangs zu. Mehrere duerfen gleichzeitig offen sein; wer
 * zwei Antworten vergleicht, soll nicht zwischen ihnen hin und her klappen.
 *
 * Die Frage ist zugleich Ueberschrift, damit sie in der Gliederung und fuer
 * Vorlesewerkzeuge auffindbar bleibt, auch wenn die Antwort zu ist.
 */

type Props = {
  id: string
  eyebrow: string
  heading: string
  lead: readonly string[]
  items: readonly { question: string; answer: Rich }[]
  schluss: string
}

export function Fragen({ id, eyebrow, heading, lead, items, schluss }: Props) {
  const headingId = `${id}-titel`

  return (
    <section id={id} className={styles.abschnitt} aria-labelledby={headingId}>
      <div className={styles.inner}>
        <div className={styles.kopf}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 id={headingId} className={styles.titel}>
            {heading}
          </h2>
          {/* Zwei Saetze, je auf eigener Zeile wie in der Vorlage. Das
              Leerzeichen davor haelt sie fuer Vorlesewerkzeuge getrennt. */}
          <p className={styles.lead}>
            {lead.map((satz, index) => (
              <span key={satz}>
                {index > 0 ? ' ' : ''}
                {satz}
              </span>
            ))}
          </p>
        </div>

        <div className={styles.karte}>
          {items.map((item) => (
            <details key={item.question} className={styles.eintrag}>
              <summary className={styles.frage}>
                <h3>{item.question}</h3>
                <span className={styles.chevron} aria-hidden="true">
                  <Icon name="chevron" size={1.375} />
                </span>
              </summary>
              <div className={styles.antwort}>
                <RichText value={item.answer} />
              </div>
            </details>
          ))}
        </div>

        {/* Der Zusatz steht auf dieser Seite zum zweiten Mal — auch im
            Modellabschnitt. Ricardo hat ihn hier ausdruecklich verlangt. */}
        <p className={styles.schluss}>{schluss}</p>
      </div>
    </section>
  )
}
