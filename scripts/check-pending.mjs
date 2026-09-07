/**
 * Zaehlt die offenen Angaben aus Schritt 4, Fassung 2.
 *
 * Stellen, die A&C noch bestaetigen muss, stehen im Inhalt als
 * `{ pending: '…' }` und erscheinen auf der Seite sichtbar markiert. Dieses
 * Skript listet sie auf, damit vor jeder Freigabe klar ist, was noch fehlt.
 *
 * Solange die Seite nicht oeffentlich ist, ist ein offener Punkt nur ein
 * Hinweis. Vor dem Go-live wird aus dem Hinweis ein Fehler — dafuer genuegt es,
 * `STRICT` auf true zu setzen oder das Skript mit `--strict` aufzurufen.
 *
 * Aufruf: npm run check:pending
 */

import { readdirSync, readFileSync, statSync } from 'node:fs'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const STRICT = process.argv.includes('--strict')

const contentDir = join(root, 'src/content')

function walk(dir) {
  const out = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) out.push(...walk(full))
    else if (entry.endsWith('.ts')) out.push(full)
  }
  return out
}

const PENDING = /\{\s*pending:\s*(['"`])([\s\S]*?)\1\s*,?\s*\}/g

/** Abschnittsueberschrift oberhalb einer Zeile — `// 03 Ablauf` oder `// ---- 3 Titel ----`. */
function sectionAbove(lines, line) {
  for (let i = line - 1; i >= 0; i--) {
    const text = lines[i]?.trimStart() ?? ''
    const numbered = text.match(/^\/\/\s*(\d+)\s+(.+?)\s*$/)
    if (numbered) return `${numbered[1]} ${numbered[2]}`
    const dashed = text.match(/^\/\/\s*-+\s*(.+?)\s*-*$/)
    if (dashed) return dashed[1].replace(/\s*-+$/, '')
  }
  return '—'
}

const byFile = new Map()
let total = 0

for (const file of walk(contentDir)) {
  const rel = relative(root, file).replaceAll('\\', '/')
  const text = readFileSync(file, 'utf8')
  const lines = text.split('\n')
  const found = []

  for (const match of text.matchAll(PENDING)) {
    const line = text.slice(0, match.index).split('\n').length
    found.push({
      line,
      text: match[2].replace(/\s+/g, ' ').trim(),
      section: sectionAbove(lines, line),
    })
    total++
  }

  if (found.length > 0) byFile.set(rel, found)
}

if (total === 0) {
  console.log('Offene Angaben: keine.')
  process.exit(0)
}

console.log(`Offene Angaben aus Schritt 4: ${total}\n`)

for (const [file, found] of byFile) {
  console.log(`${file}  (${found.length})`)
  for (const f of found) {
    console.log(`  ${String(f.line).padStart(4)}  [${f.section}]`)
    console.log(`        ${f.text === '' ? '(ohne Präzisierung)' : f.text}`)
  }
  console.log('')
}

if (STRICT) {
  console.error('Mit --strict sind offene Angaben ein Fehler. Vor dem Go-live klaeren.')
  process.exit(1)
}

console.log('Hinweis, kein Fehler: Die Seiten sind noch nicht oeffentlich.')
console.log('Vor dem Go-live: npm run check:pending -- --strict muss ohne Befund durchlaufen.')
