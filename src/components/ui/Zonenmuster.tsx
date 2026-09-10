import styles from './Zonenmuster.module.css'

/**
 * Der Grund unter den beiden Kartenabschnitten.
 *
 * Ricardo hat am 10.09.2026 eine Referenz geliefert: helle blaugraue Flaeche,
 * darauf weiche organische Formen, feine Hoehenlinien und ein paar duenne
 * gruene Kurven — alles sehr zurueckhaltend, damit die Karten vorn bleiben.
 *
 * Warum eine Zeichnung und kein Bild: Der Bereich ist ueber 2000 px hoch und
 * volle Fensterbreite. Als Datei waeren das je nach Geraet 200 KB und mehr,
 * die niemand sieht; als Vektor sind es zwei Kilobyte, und sie bleiben bei
 * jeder Aufloesung scharf.
 *
 * Aufbau von hinten nach vorn:
 *
 *   1. vier organische Flaechen, kaum heller als der Grund
 *   2. Hoehenlinien in Gruppen, Ton in Ton
 *   3. zwei gruene Kurven, nur am Rand
 *
 * `slice` haelt die Formen rund: Das Bild wird beschnitten statt gestaucht.
 * Der Ausschnitt ist 1200 zu 2400 und damit ungefaehr so hoch wie die Zone —
 * bei 1200 zu 2000 war er zu breit gerechnet, und die Formen an den Raendern
 * wurden seitlich weggeschnitten.
 *
 * Auf schmalen Geraeten bleiben nur die Flaechen und eine gruene Kurve —
 * alles Weitere waere dort Unruhe.
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
      {/* ---- Organische Flaechen ---------------------------------------- */}
      <g className={styles.flaechen}>
        <path d="M60 48c160-84 320 24 330 180 10 168-130 288-270 252C-20 444-80 240 60 48Z" />
        <path d="M1180 624c110 120 70 336-60 396-140 60-240-84-200-240 30-132 160-228 260-156Z" />
        <path d="M40 1704c160-84 300 60 280 240-20 192-190 276-300 168-90-96-100-312 20-408Z" />
        <path d="M1120 1800c140 72 160 312 40 420-120 96-260 0-270-156-10-144 110-324 230-264Z" />
      </g>

      {/* ---- Hoehenlinien ------------------------------------------------
          Drei Gruppen, jede aus vier fast parallelen Kurven. Sie liegen am
          Rand, nicht hinter den Karten. */}
      <g className={styles.hoehen}>
        <path d="M-60 288C60 408 40 564 130 672s110 240 40 360" />
        <path d="M-60 348C70 468 50 624 140 732s110 240 40 360" />
        <path d="M-60 408C80 528 60 684 150 792s110 240 40 360" />
        <path d="M-60 468C90 588 70 744 160 852s110 240 40 360" />

        <path d="M1260 1056c-120 132-90 300-190 408s-130 276-60 408" />
        <path d="M1260 1116c-120 132-90 300-190 408s-130 276-60 408" />
        <path d="M1260 1176c-120 132-90 300-190 408s-130 276-60 408" />
        <path d="M1260 1236c-120 132-90 300-190 408s-130 276-60 408" />

        <path d="M-40 1368c140 72 190 228 320 288s200 192 180 336" />
        <path d="M-40 1428c140 72 190 228 320 288s200 192 180 336" />
        <path d="M-40 1488c140 72 190 228 320 288s200 192 180 336" />
      </g>

      {/* ---- Gruene Kurven ------------------------------------------------
          Zwei, mehr nicht. Sie laufen an den Kanten entlang und kreuzen
          keinen Textblock. */}
      <path
        className={styles.gruen}
        d="M-40 0c160 360 100 744 220 1080s60 960 160 1320"
      />
      <path
        className={`${styles.gruen} ${styles.gruenRechts}`}
        d="M1240 144c-160 360-60 720-180 1056s60 960-20 1200"
      />
    </svg>
  )
}
