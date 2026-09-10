import styles from './Zonenmuster.module.css'

/**
 * Der Grund unter den beiden Kartenabschnitten.
 *
 * Ricardo hat am 10.09.2026 eine Referenz geliefert und die Fassung am selben
 * Tag nachgeschaerft: **keine Linien mehr**, dafuer mehr von den weichen
 * Flaechen. Die Hoehenlinien und die beiden gruenen Kurven sind ersatzlos
 * entfallen.
 *
 * Geblieben sind acht organische Flaechen, verteilt ueber die ganze Hoehe der
 * Zone. Sie liegen auf zwei Ebenen: die meisten eine Spur heller als der
 * Grund, drei eine Spur dunkler. Dadurch wirkt die Flaeche tief, ohne dass
 * man eine einzelne Form als Form erkennt.
 *
 * Warum eine Zeichnung und kein Bild: Der Bereich ist ueber 2000 px hoch und
 * volle Fensterbreite. Als Datei waeren das je nach Geraet 200 KB und mehr,
 * die niemand sieht; als Vektor ist es ein Kilobyte, und es bleibt bei jeder
 * Aufloesung scharf.
 *
 * `slice` haelt die Formen rund: Das Bild wird beschnitten statt gestaucht.
 * Der Ausschnitt ist 1200 zu 2400 und damit ungefaehr so hoch wie die Zone.
 *
 * Rein dekorativ, darum `aria-hidden`.
 */

export function Zonenmuster() {
  return (
    <svg
      className={styles.muster}
      viewBox="0 0 1200 2400"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <g className={styles.flaechen}>
        {/* Oben links, gross und flach ueber die Ecke */}
        <path d="M60 48c160-84 320 24 330 180 10 168-130 288-270 252C-20 444-80 240 60 48Z" />
        {/* Oben rechts, angeschnitten */}
        <path d="M1150 120c130 90 130 300 10 380-130 86-280-10-300-150-18-130 150-320 290-230Z" />
        {/* Mitte links, kleiner */}
        <path d="M-30 760c120-60 250 30 240 160-10 140-150 200-250 130-80-56-90-230 10-290Z" />
        {/* Mitte rechts, die groesste */}
        <path d="M1180 624c110 120 70 336-60 396-140 60-240-84-200-240 30-132 160-228 260-156Z" />
        {/* Mitte, weit rechts unten davon */}
        <path d="M980 1120c140 40 200 220 100 330-100 108-270 60-300-70-28-124 80-296 200-260Z" />
        {/* Unten links */}
        <path d="M40 1704c160-84 300 60 280 240-20 192-190 276-300 168-90-96-100-312 20-408Z" />
        {/* Unten rechts */}
        <path d="M1120 1800c140 72 160 312 40 420-120 96-260 0-270-156-10-144 110-324 230-264Z" />
        {/* Ganz unten, mittig, flach */}
        <path d="M420 2080c150-50 320 40 330 170 10 140-160 220-300 170-120-42-180-296-30-340Z" />
      </g>
    </svg>
  )
}
