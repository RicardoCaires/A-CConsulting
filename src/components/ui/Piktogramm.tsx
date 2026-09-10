import Image from 'next/image'

import styles from './Piktogramm.module.css'

/**
 * Die sechs Piktogramme der Ausgangslagen.
 *
 * Geliefert, nicht gezeichnet: Ricardo hat sie am 10.09.2026 als PNG
 * bereitgestellt, mit seinen Dateinamen. Sie werden gezeigt, wie sie sind —
 * kein Filter, keine Farbaenderung, kein Schatten, kein Beschnitt.
 *
 * Sie sind Schmuck und tragen keine Aussage: Neben jedem steht der Satz, um
 * den es geht. Darum ein leerer Alternativtext — ein Vorlesewerkzeug soll
 * nicht „Gebaeude" sagen und danach „Ich gruende ein Unternehmen".
 *
 * Nicht zu verwechseln mit `Icon`: Das sind die Konturzeichen im Text, 24er
 * Raster, `currentColor`. Diese hier sind Bilddateien und bringen ihre Farben
 * mit. Beide Wege nebeneinander sind Absicht, kein Wildwuchs — sie stehen an
 * verschiedenen Stellen und in verschiedenen Groessen.
 */

export type PiktogrammName =
  | 'firmengruendung'
  | 'mitarbeitende'
  | 'buchhaltung'
  | 'treuhaenderwechsel'
  | 'versicherungspruefung'
  | 'schadenfall'

/**
 * Die ausgelieferten Dateinamen.
 *
 * Ricardos Namen tragen Umlaute; unter `bilder-quelle/` stehen sie
 * unveraendert. Ausgeliefert wird ohne — ein Umlaut in einer Adresse geht
 * lokal gut und macht auf dem Weg ueber ein CDN, einen Zwischenspeicher oder
 * eine Verknuepfung frueher oder spaeter Aerger. Die Zuordnung steht hier und
 * nirgends sonst:
 *
 *   moderne_bürogebäude_mit_grünen_akzenten      -> moderne-buerogebaeude
 *   personen_hinzufügen_symbol                    -> personen-hinzufuegen
 *   minimalist_icon_für_buchhaltung_und_finanzen  -> buchhaltung-und-finanzen
 *   dokument_mit_grünen_austauschpfeilen          -> dokument-austauschpfeile
 *   schild_und_lupe_im_mintkreis                  -> schild-und-lupe
 *   schild_warnsymbol_mit_grünen_akzenten         -> schild-warnsymbol
 */
const DATEIEN: Record<PiktogrammName, string> = {
  firmengruendung: 'moderne-buerogebaeude',
  mitarbeitende: 'personen-hinzufuegen',
  buchhaltung: 'buchhaltung-und-finanzen',
  treuhaenderwechsel: 'dokument-austauschpfeile',
  versicherungspruefung: 'schild-und-lupe',
  schadenfall: 'schild-warnsymbol',
}

type Props = {
  name: PiktogrammName
  className?: string
}

export function Piktogramm({ name, className }: Props) {
  return (
    <Image
      className={[styles.bild, className].filter(Boolean).join(' ')}
      src={`/bilder/${DATEIEN[name]}.webp`}
      alt=""
      width={1254}
      height={1254}
      sizes="112px"
    />
  )
}
