/**
 * Prueft, dass jeder Satz der deutschen Seiten aus der freigegebenen Quelle stammt.
 *
 * Verbindlich ist **jede** Datei in `content/source/`. Gesucht wird in ihrer
 * Summe, nicht je Datei — ein Satz darf aus jeder von ihnen stammen.
 *
 *   `schritt4_fassung2_de.md`   die acht Kernseiten, Fassung vom 04.09.2026
 *   `startseite_de.md`          die Startseite, sieben Abschnitte
 *   `personal-finance_de.md`    Budget und Vorsorge
 *   `wissen_de.md`              der Wissensbereich
 *
 * Das Verzeichnis wird gelesen, nicht aufgezaehlt: Eine neue Quelle gilt,
 * sobald sie dort liegt. Das ist Absicht — eine Liste im Code haette bedeutet,
 * dass ein vergessener Eintrag als „erfundener Text" erscheint, obwohl der
 * Wortlaut sauber niedergeschrieben ist.
 *
 * Dieses Skript liest jedes Textstueck aus `src/content/` und sucht es dort.
 * Was nirgends gefunden wird, ist entweder ein Tippfehler oder eine Erfindung —
 * beides soll auffallen, bevor es jemand liest.
 *
 * Offene Angaben werden gegen `[ZU BESTAETIGEN: …]` in der Quelle geprueft,
 * damit auch dort nichts umformuliert wird.
 *
 * Aufruf: npm run check:source
 */

import { readdirSync, readFileSync, statSync } from 'node:fs'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

/** Whitespace vereinheitlichen, typografische Zeichen angleichen. */
const normalize = (s) =>
  s
    .replace(/\s+/g, ' ')
    .replaceAll('’', "'")
    .replaceAll('‘', "'")
    .replaceAll('„', '"')
    .replaceAll('“', '"')
    .replaceAll('”', '"')
    .trim()

const QUELLEN_DIR = 'content/source'

/** Alle Quelldateien, alphabetisch — damit die Meldung stabil bleibt. */
const QUELLEN = readdirSync(join(root, QUELLEN_DIR))
  .filter((datei) => datei.endsWith('.md'))
  .sort()

if (QUELLEN.length === 0) {
  console.error(`Keine Quelldatei in ${QUELLEN_DIR} gefunden.`)
  process.exit(1)
}

/** Alle Quellen hintereinander. Gesucht wird in der Summe, nicht je Datei. */
const source = QUELLEN.map((datei) =>
  normalize(readFileSync(join(root, QUELLEN_DIR, datei), 'utf8')),
).join(' ')

/**
 * Technische Werte, die keine Website-Texte sind: Blockarten, Seitenschluessel,
 * Varianten, Dateipfade. Sie werden nicht in der Quelle gesucht.
 */
const TECHNICAL = new Set([
  'prose',
  'subsections',
  'steps',
  'list',
  'faq',
  'anchors',
  'cta',
  'contact',
  'formOutline',
  'page',
  'mail',
  'phone',
  'primary',
  'ghost',
])

/** Ein Wert ist technisch, wenn er wie ein Bezeichner aussieht. */
const isTechnical = (value) =>
  TECHNICAL.has(value) ||
  /^[a-z][a-zA-Z0-9]*$/.test(value) || // camelCase-Schluessel, Anker, Slugs
  /^[a-z0-9-]+$/.test(value) || // kebab-case Anker
  /^[0-9]{2}_[a-z0-9_]+$/.test(value) || // gelieferte Bilddateien: `07_benefit_sparschwein`
  value.startsWith('/') ||
  value.startsWith('.') ||
  value.startsWith('@/')

function walk(dir) {
  const out = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) out.push(...walk(full))
    else if (entry.endsWith('.ts')) out.push(full)
  }
  return out
}

/** Alle einfachen String-Literale einer Datei, ohne die im Kommentarkopf. */
function literals(text) {
  // Blockkommentare und Zeilenkommentare entfernen, damit Beispiele darin
  // nicht als Inhalt gelten.
  const NEWLINE = String.fromCharCode(10)
  const keepLines = (m) => NEWLINE.repeat(m.split(NEWLINE).length - 1)
  // `\s` wuerde auch Zeilenumbrueche schlucken und die Zeilennummern verschieben.
  const code = text.replace(/\/\*[\s\S]*?\*\//g, keepLines).replace(/^[ \t]*\/\/.*$/gm, '')

  const found = []
  // Der Schluessel vor dem Wert wird mitgenommen: An ihm haengt, ob ein Wert
  // ueberhaupt Website-Text ist oder eine Notiz an uns.
  const re = /(?:([A-Za-z_$][\w$]*)\s*:\s*)?'((?:[^'\\]|\\.)*)'/g
  for (const m of code.matchAll(re)) {
    const raw = m[2].replace(/\\'/g, "'").replace(/\\\\/g, '\\')
    const line = code.slice(0, m.index).split('\n').length
    found.push({ key: m[1] ?? null, value: raw, line })
  }
  return found
}

/**
 * Schluessel, deren Werte niemals auf der Website erscheinen.
 *
 * `missing` haelt fest, welcher Text in einer Sprache noch fehlt. `legal` sagt,
 * worauf sich eine Aussage stuetzt und wer sie pruefen muss. Beides sind Notizen
 * an uns, die im Produktionsbau gar nicht ausgegeben werden — sie koennen per
 * Definition nicht in der deutschen Quelle stehen.
 */
const NOTIZ_SCHLUESSEL = new Set(['missing', 'legal'])

/**
 * Beschriftung einer Platzhalterflaeche, etwa `BUCHHALTUNG / BELEGE`.
 *
 * Solche Beschriftungen sind Hinweise an uns, welche Aufnahme hier hingehoert.
 * Sie stehen durchgehend in Grossbuchstaben und verschwinden, sobald das Bild
 * vorliegt — Website-Text ist in diesem Projekt nie durchgehend gross.
 */
const istPlatzhalterLabel = (value) =>
  value.length >= 2 && /^[A-ZÄÖÜ0-9][A-ZÄÖÜ0-9 /&.\-–]*$/.test(value)

/**
 * Steht der Text in der Quelle?
 *
 * Zuerst als Ganzes. Schlaegt das fehl, wird satzweise geprueft — Titel und
 * Beschreibung fuer Suchmaschinen fassen mehrere Saetze der Quelle zusammen,
 * und auch dann muss jeder einzelne belegt sein.
 */
function textInSource(value) {
  const normalized = normalize(value)
  if (source.includes(normalized)) return true

  const sentences = normalized
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0)

  return sentences.length > 1 && sentences.every((s) => source.includes(s))
}

/** Steht der Wert als offene Angabe in der Quelle? */
function pendingInSource(value) {
  if (value.trim() === '') return source.includes('[ZU BESTÄTIGEN]')
  return source.includes(`[ZU BESTÄTIGEN: ${normalize(value)}]`)
}

/**
 * Dateien unter `src/content`, die kein Inhalt sind, sondern seine Form:
 * Typen, Schema samt Pruefmeldungen und das Verzeichnis. Ihre Zeichenketten
 * sind Feldnamen und Fehlertexte fuer die Entwicklung, keine Website-Texte.
 */
const KEIN_INHALT = ['types.ts', 'schema.ts', 'leistungsseiten.ts']

const files = [...walk(join(root, 'src/content'))].filter(
  (f) => !KEIN_INHALT.some((name) => f.endsWith(name)),
)

const missing = []
let checked = 0

for (const file of files) {
  const rel = relative(root, file).replaceAll('\\', '/')
  const text = readFileSync(file, 'utf8')

  // In einer Zeile koennen Fliesstext und offene Angabe nebeneinander stehen:
  //   ['Beratungssprachen: ', { pending: '' }]
  // Darum wird jeder Wert gegen beide Formen geprueft.
  for (const { key, value, line } of literals(text)) {
    if (key !== null && NOTIZ_SCHLUESSEL.has(key)) continue
    if (istPlatzhalterLabel(value)) continue
    if (isTechnical(value)) continue

    checked++
    if (value === '') {
      // Ein leerer Wert ist nur als offene Angabe ohne Praezisierung zulaessig.
      if (!pendingInSource('')) missing.push({ file: rel, line, value, pending: true })
      continue
    }

    if (!textInSource(value) && !pendingInSource(value)) {
      missing.push({ file: rel, line, value, pending: false })
    }
  }
}

if (missing.length > 0) {
  console.error(`Nicht in der Quelle gefunden: ${missing.length} von ${checked} Textstücken\n`)
  for (const m of missing) {
    console.error(`  ${m.file}:${m.line}${m.pending ? '  [offene Angabe]' : ''}`)
    console.error(`    "${m.value.slice(0, 140)}${m.value.length > 140 ? '…' : ''}"\n`)
  }
  console.error(`Verbindlich ist jede Datei in ${QUELLEN_DIR}/: ${QUELLEN.join(', ')}`)
  console.error('Texte werden von dort uebernommen, nicht umformuliert und nicht erfunden.')
  process.exit(1)
}

console.log(`Quellenpruefung: alle ${checked} Textstücke stammen aus den freigegebenen Quellen.`)
