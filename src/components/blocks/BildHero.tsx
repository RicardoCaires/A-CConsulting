import Image from 'next/image'
import type { ReactNode } from 'react'

import { Icon } from '@/components/ui/Icon'

import styles from './BildHero.module.css'

/**
 * Seitenkopf mit geliefertem Bild — zweispaltig.
 *
 * Nach Ricardos Referenzgrafik vom 10.09.2026
 * (`bilder-quelle/versicherungen_seitenkopf_referenz.png`): links Kategorie,
 * Titel, Satz, Knopf und drei Belege; rechts das Bild, das bis an die
 * Fensterkante laeuft.
 *
 * **Nicht** `Hero`: Der Baustein traegt acht andere Seitenkoepfe und bleibt,
 * wie er ist. Dieser hier gilt nur fuer Seiten, fuer die Ricardo ein Bild
 * geliefert hat — heute genau `/versicherungen`. Kommen weitere Bilder,
 * treten sie an dieselbe Stelle.
 *
 * Masse aus der Vorlage (1896 px breit, Kopf 559 px hoch):
 *   Kopfhoehe       29.5 % der Breite
 *   Text ab         12.5 % — also die normale Containerkante
 *   helles Motiv ab 58.5 %
 *
 * Das gelieferte Bild traegt links seinen eigenen Navy-Grund (3,34,74 —
 * praktisch `navy_deep`) und wird darum nicht freigestellt, sondern rechts
 * angesetzt: Sein linker Rand geht nahtlos in die Flaeche ueber. Das helle
 * Motiv beginnt bei 45.6 % der Bildbreite; bei 78 % Breite liegt es damit ab
 * 57.6 % des Kopfes, also dort, wo die Vorlage es zeigt.
 *
 * Die Haken der Belege sind das **bestehende** Zeichen aus `Icon.tsx`, das
 * schon die Aufzaehlungen in „Das uebernehmen wir" traegt — kein neues
 * Zeichen, keine Bibliothek. Ricardo hat dafuer keine Datei geliefert.
 *
 * Die Groesse kommt ueber `size`, nicht ueber die Klasse: `Icon` setzt Breite
 * und Hoehe als Attribut, und das schlaegt jede Regel aus dem Stylesheet.
 */

type Props = {
  eyebrow?: string
  titel: ReactNode
  satz?: ReactNode
  aktion?: ReactNode
  /** Drei kurze Belege unter dem Knopf. */
  belege?: readonly string[]
  bild: { src: string; alt: string }
  id?: string
}

export function BildHero({
  eyebrow,
  titel,
  satz,
  aktion,
  belege,
  bild,
  id = 'seitenkopf',
}: Props) {
  return (
    <section className={`ac-section--navy on-navy ${styles.hero}`} aria-labelledby={id}>
      {/* Das Bild ist Gestaltung, kein Inhalt: Was es zeigt, steht daneben im
          Text. Es traegt darum einen leeren Alternativtext und liegt hinter
          dem Inhalt. */}
      <div className={styles.bild} aria-hidden="true">
        <Image
          className={styles.bildDatei}
          src={bild.src}
          alt=""
          width={1600}
          height={700}
          sizes="(min-width: 64rem) 78vw, 100vw"
          priority
        />
      </div>

      {/* Verlauf von links: haelt den Text lesbar, wo das Motiv heller wird.
          Kein Schein, keine Deko — nur Navy, das nach rechts ausblendet. */}
      <div className={styles.verlauf} aria-hidden="true" />

      <div className={`ac-container ${styles.inhalt}`}>
        <div className={styles.text}>
          {eyebrow && <p className={`ac-eyebrow ${styles.eyebrow}`}>{eyebrow}</p>}

          <h1 id={id} className={styles.titel}>
            {titel}
          </h1>

          {satz && <p className={styles.satz}>{satz}</p>}
          {aktion && <div className={styles.aktion}>{aktion}</div>}

          {belege && belege.length > 0 && (
            <ul className={styles.belege} role="list">
              {belege.map((beleg) => (
                <li key={beleg} className={styles.beleg}>
                  <Icon name="haken" size={1.125} className={styles.haken} />
                  {beleg}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}
