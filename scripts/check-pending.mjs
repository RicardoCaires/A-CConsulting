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

/** Form statt Inhalt: Typen und Schema erklaeren die Marken, sie tragen keine. */
const KEIN_INHALT = ['types.ts', 'schema.ts', 'leistungsseiten.ts']

function walk(dir) {
  const out = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) out.push(...walk(full))
    else if (entry.endsWith('.ts') && !KEIN_INHALT.some((n) => entry === n)) out.push(full)
  }
  return out
}

/** Fehlende Uebersetzung: `{ missing: '…' }`. */
const MISSING = /\{\s*missing:\s*(['"`])([\s\S]*?)\1\s*,?\s*\}/g

/** Rechtlich zu pruefende Aussage: `{ legal: '…' }`. */
const LEGAL = /\{\s*legal:\s*(['"`])([\s\S]*?)\1\s*,?\s*\}/g

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
/** Fehlende Uebersetzungen je Datei. */
const fehlendeUebersetzung = new Map()
let totalMissing = 0
/** Rechtlich zu pruefende Aussagen je Datei. */
const rechtlich = new Map()
let totalLegal = 0

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

  const missing = [...text.matchAll(MISSING)].length
  if (missing > 0) {
    fehlendeUebersetzung.set(rel, missing)
    totalMissing += missing
  }

  const legal = [...text.matchAll(LEGAL)].map((m) => ({
    line: text.slice(0, m.index).split('\n').length,
    text: m[2].replace(/\s+/g, ' ').trim(),
  }))
  if (legal.length > 0) {
    rechtlich.set(rel, legal)
    totalLegal += legal.length
  }
}

/**
 * Rechtlich zu pruefende Aussagen melden.
 *
 * Anders als bei den offenen Angaben fehlt hier nichts — der Satz steht und ist
 * lesbar. Er darf nur nicht live gehen, bevor jemand mit der noetigen Fachkunde
 * ihn bestaetigt hat. Diese Liste geht zur externen Pruefung.
 */
function meldeRechtliches() {
  if (totalLegal === 0) return

  console.log(`Rechtlich zu pruefen: ${totalLegal}`)
  console.log('')
  for (const [file, stellen] of rechtlich) {
    console.log(`${file}  (${stellen.length})`)
    for (const st of stellen) {
      console.log(`  ${String(st.line).padStart(4)}  ${st.text}`)
    }
    console.log('')
  }
  console.log('Keine dieser Aussagen geht ohne Freigabe live.')
  console.log('')
}

/**
 * Fehlende Uebersetzungen melden.
 *
 * Sie verschwinden im Produktionsbau wie die offenen Angaben — eine Seite,
 * deren Texte alle fehlen, waere dort eine leere Seite. Darum muss vor dem
 * Go-live entweder uebersetzt oder die Sprache abgeschaltet werden.
 */
function meldeUebersetzungen() {
  if (totalMissing === 0) return

  console.log(`Fehlende Uebersetzungen: ${totalMissing}\n`)
  for (const [file, anzahl] of fehlendeUebersetzung) {
    console.log(`${file}  (${anzahl})`)
  }
  console.log('')
  console.log('Diese Seiten erscheinen im Produktionsbau weitgehend leer.')
  console.log('Vor dem Go-live: uebersetzen — oder in src/i18n/routes.ts auf published: false.')
  console.log('')
}

if (total === 0 && totalMissing === 0 && totalLegal === 0) {
  console.log('Offene Angaben: keine. Fehlende Uebersetzungen: keine.')
  console.log('Rechtlich zu pruefen: nichts offen.')
  process.exit(0)
}

if (total === 0) {
  console.log('Offene Angaben: keine.\n')
  meldeRechtliches()
  meldeUebersetzungen()
  if (STRICT) {
    console.error('Mit --strict sind offene Pruefpunkte ein Fehler.')
    process.exit(1)
  }
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

meldeRechtliches()
meldeUebersetzungen()

if (STRICT) {
  console.error(
    'Mit --strict sind offene Angaben, rechtliche Pruefpunkte und fehlende ' +
      'Uebersetzungen ein Fehler.',
  )
  console.error('Vor dem Go-live klaeren.')
  process.exit(1)
}

console.log('Hinweis, kein Fehler: Die Seiten sind noch nicht oeffentlich.')
console.log('Vor dem Go-live: npm run check:pending -- --strict muss ohne Befund durchlaufen.')
