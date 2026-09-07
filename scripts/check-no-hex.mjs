/**
 * Prueft, dass ausserhalb der erzeugten Token-Dateien kein Farbwert steht.
 *
 * ESLint deckt nur TypeScript ab. Diese Pruefung nimmt zusaetzlich die
 * CSS-Dateien mit — dort waeren von Hand gesetzte Farben am wahrscheinlichsten.
 *
 * Erlaubt sind ausschliesslich `var(--ac-…)`-Verweise.
 *
 * Aufruf: npm run check
 */

import { readdirSync, readFileSync, statSync } from 'node:fs'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

const SEARCH_DIRS = ['src', 'scripts']
const EXTENSIONS = ['.css', '.ts', '.tsx', '.mjs']
/** Erzeugte Dateien und der Generator selbst duerfen Farbwerte enthalten. */
const ALLOWED = [
  'src/styles/tokens.generated.css',
  'src/lib/tokens.generated.ts',
  'scripts/generate-tokens.mjs',
  'scripts/check-no-hex.mjs',
]

const HEX = /#(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\b/g

function walk(dir) {
  const out = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      out.push(...walk(full))
    } else if (EXTENSIONS.some((ext) => entry.endsWith(ext))) {
      out.push(full)
    }
  }
  return out
}

const findings = []

for (const dir of SEARCH_DIRS) {
  for (const file of walk(join(root, dir))) {
    const rel = relative(root, file).replaceAll('\\', '/')
    if (ALLOWED.includes(rel)) continue

    const lines = readFileSync(file, 'utf8').split('\n')
    lines.forEach((line, index) => {
      for (const match of line.matchAll(HEX)) {
        findings.push(`${rel}:${index + 1}  ${match[0]}  →  ${line.trim()}`)
      }
    })
  }
}

if (findings.length > 0) {
  console.error('Farbwerte ausserhalb der Design-Tokens gefunden:\n')
  console.error(findings.map((f) => `  ${f}`).join('\n'))
  console.error(
    '\nFarben werden nie direkt geschrieben. Verwende var(--ac-color-…) bzw. var(--ac-…);' +
      '\nneue Werte gehoeren in den Skill ac-corporate-design oder in design/website.tokens.json.',
  )
  process.exit(1)
}

console.log(`Farbpruefung: keine Hex-Werte ausserhalb der Token-Dateien.`)
