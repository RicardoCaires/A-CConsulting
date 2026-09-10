import styles from './Illustration.module.css'

/**
 * Die drei Bereichsillustrationen der Startseite.
 *
 * Sie sind der einzige Ort auf der Seite, an dem gezeichnet statt gesetzt
 * wird. Darum eine feste Regel, damit daraus keine Bildersammlung wird:
 *
 *   - flache Vektorformen, kein Verlauf, kein Schatten, keine dritte Dimension
 *   - nur Farben aus dem Corporate Design, ueber `currentColor` und die
 *     Token-Variablen — nie ein Hex-Wert im Pfad
 *   - eine ruhige Flaeche im Hintergrund, damit die Form nicht im Weiss
 *     schwimmt; sie ist die einzige gruene Flaeche und bleibt sehr blass
 *   - 4:3, damit alle drei gleich hoch stehen koennen
 *
 * Sie sind Schmuck und tragen keine Aussage: Was der Bereich leistet, steht
 * daneben im Text. Darum `aria-hidden` ohne Ausnahme.
 *
 * Sie sind gezeichnet, nicht geliefert. Kommt spaeter eine Datei von A&C an
 * diese Stelle, tritt sie an dieselbe Stelle im Layout — die Komponente
 * bekommt dann ein `src` statt eines `motiv`.
 */

export type Motiv = 'versicherungen' | 'treuhand' | 'finanzplanung'

type Props = {
  motiv: Motiv
  className?: string
}

/** Der blasse Grund hinter jeder Illustration. Eine Form, keine zwei. */
function Grund({ d }: { d: string }) {
  return <path className={styles.grund} d={d} />
}

const MOTIVE: Record<Motiv, React.ReactNode> = {
  /* Versicherungen — die Police, das Schild darueber, der Schirm, und die
     Menschen, fuer die die Deckung gilt. */
  versicherungen: (
    <>
      <Grund d="M232 34c52 0 88 30 92 74s-18 80-58 104-92 34-134 20-58-48-52-90 22-64 56-82 44-26 96-26Z" />

      {/* Schirm: Dach, zwei Rippen, Stiel mit Griff */}
      <path className={styles.hell} d="M204 108a68 62 0 0 1 136 0Z" />
      <path className={styles.kontur} d="M204 108a68 62 0 0 1 136 0Z" />
      <path className={styles.linie} d="M249 108a23 62 0 0 1 46 0M272 46v62" />
      <path className={styles.kontur} d="M272 108v84c0 10-8 17-17 17s-17-7-17-17" />

      {/* Police */}
      <path className={styles.weiss} d="M44 76h108v136H44z" />
      <path className={styles.kontur} d="M44 76h108v136H44z" />
      <path className={styles.linie} d="M62 104h72M62 126h72M62 148h48" />

      {/* Schild mit Haken */}
      <path
        className={styles.gruen}
        d="M186 106l46 16v34c0 27-19 49-46 58-27-9-46-31-46-58v-34l46-16Z"
      />
      <path className={styles.haken} d="m166 162 14 14 27-29" />

      {/* Drei Menschen */}
      <path className={styles.dunkel} d="M56 258a22 22 0 0 1 44 0Zm22-30a14 14 0 1 0 0-28 14 14 0 0 0 0 28Z" />
      <path className={styles.mittel} d="M98 258a22 22 0 0 1 44 0Zm22-30a14 14 0 1 0 0-28 14 14 0 0 0 0 28Z" />
      <path className={styles.dunkel} d="M140 258a22 22 0 0 1 44 0Zm22-30a14 14 0 1 0 0-28 14 14 0 0 0 0 28Z" />
    </>
  ),

  /* Treuhand — Abschluss mit Auswertung, Rechner, Ablage. */
  treuhand: (
    <>
      <Grund d="M104 30c50-8 96 0 122 24s28 62 14 94-44 56-84 64-84 2-110-24-30-64-14-96 22-54 72-62Z" />

      {/* Abschluss */}
      <path className={styles.weiss} d="M44 40h132v196H44z" />
      <path className={styles.kontur} d="M44 40h132v196H44z" />
      <path className={styles.linie} d="M64 70h92M64 92h92M64 114h60" />

      {/* Auswertung darin */}
      <path className={styles.kontur} d="M64 208h92" />
      <path className={styles.mittel} d="M68 208v-34h16v34zM98 208v-56h16v56zM128 208v-42h16v42z" />

      {/* Rechner */}
      <path className={styles.dunkel} d="M192 118h80v118h-80z" />
      <path className={styles.weiss} d="M204 132h56v26h-56z" />
      <path className={styles.gruenPunkt} d="M204 172h16v14h-16z" />
      <path className={styles.hellPunkt} d="M230 172h16v14h-16zM204 196h16v14h-16zM230 196h16v14h-16z" />

      {/* Ablage */}
      <path className={styles.hell} d="M288 84h60v26h-60zM288 122h60v26h-60zM288 160h60v26h-60z" />
      <path className={styles.kontur} d="M288 84h60v26h-60zM288 122h60v26h-60zM288 160h60v26h-60z" />
      <path className={styles.mittel} d="M306 93h24v8h-24zM306 131h24v8h-24zM306 169h24v8h-24z" />
    </>
  ),

  /* Finanzplanung — der Weg, das Ziel mit der Fahne, der Kompass. */
  finanzplanung: (
    <>
      <Grund d="M212 28c50 2 82 30 88 72s-14 78-48 102-80 34-116 20-52-46-46-86 22-62 52-80 20-30 70-28Z" />

      {/* Huegel dahinter */}
      <path className={styles.hell} d="M40 208L120 108l54 68 30-34 84 66z" />

      {/* Ziel */}
      <path className={styles.dunkel} d="M148 208L228 88l80 120z" />
      <path className={styles.weiss} d="M228 88l24 36h-48z" />

      {/* Fahne */}
      <path className={styles.kontur} d="M228 88V40" />
      <path className={styles.gruen} d="M228 42h44l-13 14 13 14h-44z" />

      {/* Der Weg dorthin — vom Kompass aus, gestrichelt, weil er noch vor
          einem liegt */}
      <path className={styles.weg} d="M116 250c44 0 48-16 82-16s44 12 78 8" />

      {/* Kompass */}
      <path className={styles.weiss} d="M72 202a30 30 0 1 1 0 60 30 30 0 0 1 0-60Z" />
      <path className={styles.kontur} d="M72 202a30 30 0 1 1 0 60 30 30 0 0 1 0-60Z" />
      <path className={styles.gruen} d="m85 219-7 20-20 7 7-20 20-7Z" />
    </>
  ),
}

export function Illustration({ motiv, className }: Props) {
  return (
    <svg
      className={[styles.svg, className].filter(Boolean).join(' ')}
      viewBox="0 0 384 288"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {MOTIVE[motiv]}
    </svg>
  )
}
