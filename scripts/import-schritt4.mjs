/**
 * Einmaliger Import: Schritt 4, Fassung 2 (Artifact) nach Markdown.
 *
 * Die verbindliche Inhaltsquelle lag nur als veroeffentlichtes Artifact vor.
 * Dieses Skript legt sie als Datei im Repository ab, damit sie versioniert ist
 * und nicht erneut verlorengeht.
 *
 * Das Artifact ist verschachteltes HTML. Statt Bloecke ueber zusammengehoerige
 * <div>-Paare zu greifen — was bei Verschachtelung bricht — laeuft dieses
 * Skript einmal linear durch das Dokument und gibt jedes inhaltstragende
 * Element in seiner Reihenfolge aus.
 *
 * Aufruf: node scripts/import-schritt4.mjs <pfad-zur-artifact-html>
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const src = process.argv[2]
if (!src) {
  console.error('Aufruf: node scripts/import-schritt4.mjs <pfad-zur-artifact-html>')
  process.exit(1)
}

const html = readFileSync(src, 'utf8')
const body = html.slice(html.indexOf('<section id="s1">'), html.indexOf('<footer'))

const entities = (s) =>
  s
    .replaceAll('&amp;', '&')
    .replaceAll('&nbsp;', ' ')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")

/** Innentext eines Fragments; Markierungen bleiben als [ZU BESTAETIGEN: …] erhalten. */
const text = (s) =>
  entities(
    s
      .replace(/<span class="tb">([\s\S]*?)<\/span>/g, (_, t) => ` **${t.replace(/<[^>]+>/g, '')}** `)
      .replace(/<[^>]+>/g, ''),
  )
    .replace(/\s+/g, ' ')
    .replace(/\*\*\s+([.,;:])/g, '**$1')
    .trim()

/**
 * Ein Muster, alle Elemente, Dokumentreihenfolge. Jede Alternative hat ihre
 * eigene Gruppe; welche Gruppe gefuellt ist, bestimmt den Typ.
 */
const TOKEN =
  /<section id="(s\d+)">|<span class="num">([\s\S]*?)<\/span>|<span class="url">([\s\S]*?)<\/span>|<h2>([\s\S]*?)<\/h2>|<p class="intent">([\s\S]*?)<\/p>|<div class="blk-lbl">([\s\S]*?)<\/div>|<div class="h1d">([\s\S]*?)<\/div>|<div class="hd">([\s\S]*?)<\/div>|<div class="sub">([\s\S]*?)<\/div>|<p class="linkline">([\s\S]*?)<\/p>|<p class="kern">([\s\S]*?)<\/p>|<p>([\s\S]*?)<\/p>|<li>([\s\S]*?)<\/li>|<span class="cta[^"]*">([\s\S]*?)<\/span>|<span class="tel">([\s\S]*?)<\/span>|<div class="q">([\s\S]*?)<\/div>|<div class="a">([\s\S]*?)<\/div>|<div class="note">([\s\S]*?)<\/div>|<(ol)>|<\/(ol)>/g

const out = [
  '# Schritt 4, Fassung 2 — Website-Texte Deutsch',
  '',
  '> Verbindliche Inhaltsquelle für die deutsche Website.',
  '> Übernommen am 04.09.2026 aus dem Artifact „A&C Website-Texte Deutsch",',
  '> Schritt 4 / 6, Sprache Deutsch, Fassung 2, Stand 04.09.2026.',
  '>',
  '> Bei Konflikten mit anderen Dokumenten hat diese Datei für **Inhalte** Vorrang.',
  '> `CLAUDE.md` regelt die Arbeitsweise, nicht den Wortlaut.',
  '>',
  '> Gelb markierte Stellen des Originals stehen hier als `[ZU BESTÄTIGEN: …]`.',
  '> Sie bleiben offen und werden nicht ersetzt.',
  '',
]

const push = (line) => {
  out.push(line, '')
}

let ordered = false
let counter = 1
let ctas = []
let tels = []

const flushCtas = () => {
  if (ctas.length) push(`**Handlungsknopf:** ${ctas.join(' · ')}`)
  if (tels.length) push(`**Daneben:** ${tels.join(' · ')}`)
  ctas = []
  tels = []
}

for (const m of body.matchAll(TOKEN)) {
  const [
    ,
    section,
    num,
    url,
    h2,
    intent,
    blkLbl,
    h1d,
    hd,
    sub,
    linkline,
    kern,
    p,
    li,
    cta,
    tel,
    faqQ,
    faqA,
    note,
    olOpen,
    olClose,
  ] = m

  // Handlungsknoepfe stehen am Blockende; sie werden ausgegeben, sobald ein
  // Element anderen Typs folgt.
  if (!cta && !tel && (ctas.length || tels.length)) flushCtas()

  if (section) {
    out.push('---', '')
  } else if (h2) {
    push(`## ${text(h2)}`)
  } else if (num) {
    out.push(`**${text(num)}**`)
  } else if (url) {
    out[out.length - 1] += ` · \`${text(url)}\``
    out.push('')
  } else if (intent) {
    push(`*${text(intent)}*`)
  } else if (blkLbl) {
    push(`### ${text(blkLbl)}`)
  } else if (h1d || hd) {
    push(`#### ${text(h1d || hd)}`)
  } else if (sub) {
    push(`##### ${text(sub)}`)
  } else if (linkline) {
    push(`→ ${text(linkline)}`)
  } else if (kern || p) {
    const t = text(kern || p)
    if (t) push(t)
  } else if (li) {
    out.push(ordered ? `${counter++}. ${text(li)}` : `- ${text(li)}`)
  } else if (cta) {
    ctas.push(text(cta))
  } else if (tel) {
    tels.push(text(tel))
  } else if (faqQ) {
    out.push(`**F: ${text(faqQ)}**`)
  } else if (faqA) {
    push(`A: ${text(faqA)}`)
  } else if (note) {
    push(`> *Redaktionsnotiz (nicht auf die Website): ${text(note).replace(/^Hinweis\s*/, '')}*`)
  } else if (olOpen) {
    ordered = true
    counter = 1
  } else if (olClose) {
    ordered = false
    out.push('')
  }
}
flushCtas()

const target = join(root, 'content/source/schritt4_fassung2_de.md')
mkdirSync(dirname(target), { recursive: true })
writeFileSync(target, out.join('\n').replace(/\n{3,}/g, '\n\n') + '\n', 'utf8')
console.log('Geschrieben:', target)
