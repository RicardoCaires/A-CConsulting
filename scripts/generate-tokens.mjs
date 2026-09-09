/**
 * A&C Consulting — Design-Tokens erzeugen
 *
 * Einzige Quelle der Wahrheit fuer Farben ist der Skill `ac-corporate-design`.
 * Dessen `tokens.json` liegt als Kopie unter `design/ac-corporate-design.tokens.json`.
 * Website-spezifische Groessen (Raster, Radien, Web-Typoskala) und die
 * abgeleiteten Interaktionsfarben stehen in `design/website.tokens.json`.
 *
 * Dieses Skript erzeugt daraus:
 *   src/styles/tokens.generated.css   CSS-Variablen fuer alle Komponenten
 *   src/lib/tokens.generated.ts       dieselben Werte typisiert fuer TSX/Metadaten
 *
 * Beide Zieldateien sind erzeugt und stehen in .gitignore. Nie von Hand aendern —
 * Aenderungen gehoeren in den Skill bzw. in design/website.tokens.json.
 *
 * Aufruf: npm run tokens   (laeuft automatisch vor dev und build)
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const read = (p) => JSON.parse(readFileSync(join(root, p), 'utf8'))

const cd = read('design/ac-corporate-design.tokens.json')
const web = read('design/website.tokens.json')

const kebab = (s) => s.replace(/_/g, '-')
const banner = (target) => `/* ============================================================
   ERZEUGTE DATEI — NICHT VON HAND AENDERN
   Erzeugt von scripts/generate-tokens.mjs
   Quelle Farben  : design/ac-corporate-design.tokens.json (Skill ac-corporate-design, v${cd.version})
   Quelle Groessen: design/website.tokens.json
   Ziel           : ${target}
   ============================================================ */`

/* ---- Farben aufloesen ------------------------------------------------- */

const colorHex = Object.fromEntries(
  Object.entries(cd.color).map(([name, def]) => [name, def.hex]),
)

/** Ableitung: entweder direkte Referenz auf eine CD-Farbe oder ein eigener Hex-Wert. */
const derivedHex = {}
for (const [name, def] of Object.entries(web.color_derived)) {
  if (def.ref) {
    if (!(def.ref in colorHex)) {
      throw new Error(`website.tokens.json: unbekannte Farbreferenz "${def.ref}" bei "${name}"`)
    }
    derivedHex[name] = colorHex[def.ref]
  } else if (def.hex) {
    derivedHex[name] = def.hex
  } else {
    throw new Error(`website.tokens.json: "${name}" hat weder "ref" noch "hex"`)
  }
}

/* ---- Sperrliste pruefen ----------------------------------------------- */

const verboten = new Set((cd.verboten_color ?? []).map((c) => c.toUpperCase()))
for (const [name, hex] of Object.entries({ ...colorHex, ...derivedHex })) {
  if (verboten.has(hex.toUpperCase())) {
    throw new Error(`Token "${name}" verwendet die gesperrte Farbe ${hex}`)
  }
}

/* ---- WCAG-Kontrast ----------------------------------------------------- */

const luminance = (hex) => {
  const c = hex.replace('#', '')
  const ch = [0, 2, 4].map((i) => {
    const v = parseInt(c.slice(i, i + 2), 16) / 255
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * ch[0] + 0.7152 * ch[1] + 0.0722 * ch[2]
}
const contrast = (a, b) => {
  const [l1, l2] = [luminance(a), luminance(b)].sort((x, y) => y - x)
  return (l1 + 0.05) / (l2 + 0.05)
}

/** Paarungen, die die Website tatsaechlich verwendet. Alle muessen WCAG AA erfuellen. */
const contrastChecks = [
  ['Fliesstext auf Weiss', colorHex.text_primary, colorHex.white, 4.5],
  ['Sekundaertext auf Weiss', colorHex.text_secondary, colorHex.white, 4.5],
  ['Ueberschrift auf Weiss', colorHex.primary_navy, colorHex.white, 4.5],
  ['Link auf Weiss', derivedHex.link, colorHex.white, 4.5],
  ['Link (hover) auf Weiss', derivedHex.link_hover, colorHex.white, 4.5],
  ['Fliesstext auf background_light', colorHex.text_primary, colorHex.background_light, 4.5],
  ['Link auf background_light', derivedHex.link, colorHex.background_light, 4.5],
  ['Weiss auf primary_navy', colorHex.white, colorHex.primary_navy, 4.5],
  ['Weiss auf navy_deep', colorHex.white, colorHex.navy_deep, 4.5],
  ['Untertitel auf navy_deep', colorHex.deckblatt_subtitle, colorHex.navy_deep, 4.5],
  ['accent_green_light auf navy_deep', colorHex.accent_green_light, colorHex.navy_deep, 3.0],
  ['Platzhaltertext auf signal_warn_bg', colorHex.text_primary, colorHex.signal_warn_bg, 4.5],
  ['Platzhalter-Label auf signal_warn_bg', colorHex.text_secondary, colorHex.signal_warn_bg, 4.5],
  ['Sekundaertext auf background_light', colorHex.text_secondary, colorHex.background_light, 4.5],
  ['Ueberschrift auf background_light', colorHex.primary_navy, colorHex.background_light, 4.5],
  ['Vermerk auf background_tint', colorHex.text_secondary, colorHex.background_tint, 4.5],
  ['Icon auf background_tint', colorHex.primary_navy, colorHex.background_tint, 4.5],
  ['Fliesstext auf background_tint', colorHex.text_primary, colorHex.background_tint, 4.5],
]

const kontrastZeilen = []
let verstoesse = 0
for (const [label, fg, bg, min] of contrastChecks) {
  const value = contrast(fg, bg)
  const ok = value >= min
  if (!ok) verstoesse++
  kontrastZeilen.push(`   ${ok ? 'OK  ' : 'FEHL'} ${value.toFixed(2)}:1 (min ${min}) — ${label}`)
}
if (verstoesse > 0) {
  console.error('\nKontrastpruefung fehlgeschlagen:\n' + kontrastZeilen.join('\n'))
  throw new Error(`${verstoesse} Farbpaarung(en) erfuellen WCAG AA nicht.`)
}

/* ---- CSS erzeugen ------------------------------------------------------ */

const css = []
css.push(banner('src/styles/tokens.generated.css'), '', ':root {')

css.push('  /* --- Marke: Farben aus dem Corporate Design ------------------- */')
for (const [name, def] of Object.entries(cd.color)) {
  css.push(`  --ac-color-${kebab(name)}: ${def.hex}; /* ${def.verwendung} */`)
}

css.push('', '  /* --- Abgeleitete Rollenfarben der Website --------------------- */')
for (const [name, def] of Object.entries(web.color_derived)) {
  const quelle = def.ref ? `= ${kebab(def.ref)}` : 'abgeleitet'
  css.push(`  --ac-${kebab(name)}: ${derivedHex[name]}; /* ${quelle} — ${def.verwendung} */`)
}

css.push('', '  /* --- Abstaende ------------------------------------------------ */')
for (const [name, rem] of Object.entries(web.space_rem)) {
  css.push(`  --ac-space-${name}: ${rem}rem;`)
}

css.push('', '  /* --- Layout --------------------------------------------------- */')
css.push(`  --ac-container: ${web.layout.container_max_px}px;`)
css.push(`  --ac-container-narrow: ${web.layout.container_narrow_px}px;`)
css.push(`  --ac-content-measure: ${web.layout.content_max_ch};`)
css.push(`  --ac-gutter: ${web.layout.gutter};`)
// Genau ein Abstand zwischen Abschnitten. Es gibt keine engere Variante:
// Die Ruhe kommt aus wenigen hohen Bloecken, nicht aus feiner Abstufung.
css.push(`  --ac-section-y: ${web.layout.section_y};`)
css.push(`  --ac-header-height: ${web.layout.header_height};`)
css.push(`  --ac-header-height-wide: ${web.layout.header_height_wide};`)

css.push('', '  /* --- Radien und Linien ---------------------------------------- */')
for (const [name, px] of Object.entries(web.radius_px)) {
  css.push(`  --ac-radius-${name}: ${px}px;`)
}
for (const [name, px] of Object.entries(web.border_width_px)) {
  css.push(`  --ac-border-${name}: ${px}px;`)
}

css.push('', '  /* --- Typografie ----------------------------------------------- */')
css.push(`  --ac-font-sans: ${web.font_web.sans};`)
css.push(`  --ac-font-display: ${web.font_web.display};`)
for (const [name, t] of Object.entries(web.type_scale_web)) {
  css.push(`  --ac-${name}-size: ${t.size};`)
  css.push(`  --ac-${name}-line: ${t.line};`)
  css.push(`  --ac-${name}-weight: ${t.weight};`)
  css.push(`  --ac-${name}-tracking: ${t.tracking};`)
}

css.push('', '  /* --- Bewegung ------------------------------------------------- */')
css.push(`  --ac-motion-fast: ${web.motion.fast};`)
css.push(`  --ac-motion-base: ${web.motion.base};`)
css.push(`  --ac-motion-easing: ${web.motion.easing};`)

css.push('}', '')

mkdirSync(join(root, 'src/styles'), { recursive: true })
writeFileSync(join(root, 'src/styles/tokens.generated.css'), css.join('\n'), 'utf8')

/* ---- TypeScript erzeugen ----------------------------------------------- */

mkdirSync(join(root, 'src/lib'), { recursive: true })
const ts = `${banner('src/lib/tokens.generated.ts')}

export const acColor = ${JSON.stringify(colorHex, null, 2)} as const

export const acColorRole = ${JSON.stringify(derivedHex, null, 2)} as const

export type AcColorName = keyof typeof acColor
export type AcColorRole = keyof typeof acColorRole
`
writeFileSync(join(root, 'src/lib/tokens.generated.ts'), ts, 'utf8')

/* ---- Bericht ------------------------------------------------------------ */

console.log('Design-Tokens erzeugt:')
console.log(
  `  src/styles/tokens.generated.css  (${Object.keys(cd.color).length} Markenfarben, ${Object.keys(derivedHex).length} Rollenfarben)`,
)
console.log('  src/lib/tokens.generated.ts')
console.log('Kontrastpruefung WCAG AA:')
console.log(kontrastZeilen.join('\n'))
