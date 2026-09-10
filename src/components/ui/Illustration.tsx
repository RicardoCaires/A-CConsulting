import Image from 'next/image'

import styles from './Illustration.module.css'

/**
 * Die drei Bereichsillustrationen der Startseite.
 *
 * Sie sind **geliefert, nicht gezeichnet**. Ricardo hat sie am 10.09.2026 als
 * PNG bereitgestellt; sie sind die verbindliche Fassung. Am 09.09. hatte ich
 * an dieser Stelle drei SVG gezeichnet — die sind ersatzlos entfallen.
 *
 * Darum hier keine Pfade, keine Farben, keine Filter: Die Datei wird gezeigt,
 * wie sie ist. `contain` haelt das Seitenverhaeltnis, ohne zu beschneiden.
 *
 * Ausgeliefert wird WebP; die Originale liegen unter `bilder-quelle/`. Eine
 * neue Fassung tritt an dieselbe Stelle — Datei ersetzen, umwandeln, fertig.
 */

export type Motiv = 'versicherungen' | 'treuhand' | 'finanzplanung'

/**
 * Datei und Alternativtext je Motiv.
 *
 * Alle drei sind quadratisch (1254 x 1254) und tragen einen durchsichtigen
 * Grund — sie stehen darum ohne Flaeche und ohne Rahmen auf der Karte.
 */
const MOTIVE: Record<Motiv, { datei: string; alt: string }> = {
  versicherungen: {
    datei: '/bilder/versicherungsschutz_mit_schirm_und_schild.webp',
    alt: 'Illustration: eine Police, darueber ein Schirm und ein Schild mit Haken, davor drei Personen.',
  },
  treuhand: {
    datei: '/bilder/finanzillustration_mit_rechner_und_ordnern.webp',
    alt: 'Illustration: ein Abschluss mit Balkendiagramm, daneben ein Taschenrechner und gestapelte Ordner.',
  },
  finanzplanung: {
    datei: '/bilder/kompass_weg_und_gipfelflagge.webp',
    alt: 'Illustration: ein Weg durch eine Landschaft zu einem Gipfel mit Fahne, davor ein Kompass.',
  },
}

type Props = {
  motiv: Motiv
  className?: string
}

export function Illustration({ motiv, className }: Props) {
  const { datei, alt } = MOTIVE[motiv]

  return (
    <Image
      className={[styles.bild, className].filter(Boolean).join(' ')}
      src={datei}
      alt={alt}
      width={1254}
      height={1254}
      sizes="(min-width: 64rem) 420px, (min-width: 40rem) 320px, 80vw"
    />
  )
}
