/**
 * Checkliste Steuererklärung als PDF, erzeugt im Browser (16.10.2026). Keine fremde Bibliothek und kein Server:
 * Die Antworten verlassen den Browser nicht.
 *
 * Erscheinungsbild nach dem Skill `ac-corporate-design` (Klasse A, operativ): A4, Ränder 2.3 cm, Kopf- und Fusszeile
 * 1.25 cm vom Rand, Logo links 5.4 cm breit, rechts Dokumenttyp 9.5 pt fett Navy und Untertitel 8.5 pt grau, darunter
 * eine Linie 0.25 pt Navy; Titel 18 pt, Abschnitte 13 pt, Text 10.5 pt; Fusszeile 8 pt grau mit Linie 0.25 pt, rechts
 * «Seite X von Y». Schrift Helvetica (Arial ist im PDF nicht ohne Einbettung möglich; Helvetica ist der vorgesehene
 * Ersatz). Ankreuzfelder als leere Quadrate in Navy. Farben aus den Design-Tokens.
 */

import { acColor } from '@/lib/tokens.generated'

const MM = 72 / 25.4
const SEITE = { b: 210 * MM, h: 297 * MM }
const RAND = 23 * MM
const KOPF = 12.5 * MM
const LOGO_B = 54 * MM

/** Breiten der Helvetica (AFM, je 1000 Einheiten) für die Zeichen 32–126; fett etwa 7 % breiter. */
const BREITE: number[] = [
  278, 278, 355, 556, 556, 889, 667, 191, 333, 333, 389, 584, 278, 333, 278, 278, 556, 556, 556, 556, 556, 556, 556, 556, 556, 556,
  278, 278, 584, 584, 584, 556, 1015, 667, 667, 722, 722, 667, 611, 778, 722, 278, 500, 667, 556, 833, 722, 778, 667, 778, 722, 667,
  611, 722, 667, 944, 667, 667, 611, 278, 278, 278, 469, 556, 333, 556, 556, 500, 556, 556, 278, 556, 556, 222, 222, 500, 222, 833,
  556, 556, 556, 556, 333, 500, 278, 556, 500, 722, 500, 500, 500, 334, 260, 334, 584,
]
const BASIS: Record<string, string> = { ä: 'a', ö: 'o', ü: 'u', Ä: 'A', Ö: 'O', Ü: 'U', é: 'e', è: 'e', à: 'a', ç: 'c', â: 'a', ê: 'e', ô: 'o', î: 'i' }

function breite(text: string, groesse: number, fett = false) {
  let w = 0
  for (const z of text) {
    const b = BASIS[z] ?? z
    const c = b.charCodeAt(0)
    w += c >= 32 && c <= 126 ? (BREITE[c - 32] ?? 556) : z === 'ß' ? 611 : z === '–' ? 556 : z === '·' ? 278 : z === '’' ? 222 : 556
  }
  return ((w * groesse) / 1000) * (fett ? 1.07 : 1)
}

/** WinAnsi-Kodierung (Standardschriften im PDF); weiche Trennstellen fallen weg. */
const WIN: Record<string, number> = { '–': 0x96, '—': 0x97, '’': 0x92, '‘': 0x91, '“': 0x93, '”': 0x94, '…': 0x85, '€': 0x80, '•': 0x95 }
function ansi(text: string): number[] {
  const out: number[] = []
  for (const z of text.replace(/­/g, '')) {
    const c = z.charCodeAt(0)
    const b = WIN[z] ?? (c < 256 ? c : 63)
    if (b === 0x28 || b === 0x29 || b === 0x5c) out.push(0x5c)
    out.push(b)
  }
  return out
}

const rgb = (hex: string) =>
  [1, 3, 5].map((i) => (parseInt(hex.slice(i, i + 2), 16) / 255).toFixed(3)).join(' ')
const NAVY = rgb(acColor.primary_navy)
const TEXT = rgb(acColor.text_primary)
const GRAU = rgb(acColor.text_muted)
const LINIE = rgb(acColor.border_light)
const GRUEN = rgb(acColor.accent_green)

function umbrechen(text: string, groesse: number, max: number, fett = false) {
  const zeilen: string[] = []
  let z = ''
  for (const wort of text.split(' ')) {
    const probe = z ? `${z} ${wort}` : wort
    if (z && breite(probe, groesse, fett) > max) {
      zeilen.push(z)
      z = wort
    } else z = probe
  }
  if (z) zeilen.push(z)
  return zeilen
}

type Teil = number[] | string

export type PdfDaten = {
  kopf: string
  untertitel: string
  titel: string
  satz: string
  gruppen: readonly { titel: string; unterlagen: readonly string[] }[]
  fuss: string
  logo: Uint8Array | null
  logoMass: { b: number; h: number }
  /** Was auf der Website schon abgehakt ist, steht im PDF angekreuzt. */
  abgehakt?: ReadonlySet<string>
}

export function checklistePdf(d: PdfDaten): Blob {
  const seiten: Teil[][] = []
  let s: Teil[] = []
  let y = 0
  const breiteText = SEITE.b - 2 * RAND

  const text = (x: number, yy: number, t: string, groesse: number, fett: boolean, farbe: string) => {
    s.push(`BT /${fett ? 'F2' : 'F1'} ${groesse} Tf ${farbe} rg ${x.toFixed(2)} ${yy.toFixed(2)} Td (`, ansi(t), ') Tj ET\n')
  }
  const neueSeite = () => {
    s = []
    seiten.push(s)
    // Kopfzeile: Logo links, Dokumenttyp rechts, Linie darunter
    const logoH = (LOGO_B * d.logoMass.h) / d.logoMass.b
    const oben = SEITE.h - KOPF
    if (d.logo) s.push(`q ${LOGO_B.toFixed(2)} 0 0 ${logoH.toFixed(2)} ${RAND.toFixed(2)} ${(oben - logoH).toFixed(2)} cm /Logo Do Q\n`)
    const rechts = SEITE.b - RAND
    text(rechts - breite(d.kopf, 9.5, true), oben - logoH / 2 + 1, d.kopf, 9.5, true, NAVY)
    text(rechts - breite(d.untertitel, 8.5), oben - logoH / 2 - 10, d.untertitel, 8.5, false, GRAU)
    const linie = oben - logoH - 6
    s.push(`${NAVY} RG 0.25 w ${RAND.toFixed(2)} ${linie.toFixed(2)} m ${rechts.toFixed(2)} ${linie.toFixed(2)} l S\n`)
    y = linie - 30
  }
  const platz = (h: number) => {
    if (y - h < RAND + 10) neueSeite()
  }

  neueSeite()
  // Titel und Einleitung
  for (const z of umbrechen(d.titel, 18, breiteText, true)) {
    text(RAND, y, z, 18, true, NAVY)
    y -= 22
  }
  s.push(`${GRUEN} RG 3 w ${RAND.toFixed(2)} ${(y + 8).toFixed(2)} m ${(RAND + 26 * MM).toFixed(2)} ${(y + 8).toFixed(2)} l S\n`)
  y -= 10
  for (const z of umbrechen(d.satz, 10.5, breiteText)) {
    text(RAND, y, z, 10.5, false, TEXT)
    y -= 14
  }
  y -= 6

  for (const g of d.gruppen) {
    // Eine Gruppe bleibt beisammen, wenn sie auf eine Seite passt; sonst steht die Überschrift
    // wenigstens mit ihrem ersten Eintrag zusammen
    const hoehe = 18 + 19 + g.unterlagen.reduce((t, u) => t + umbrechen(u, 10.5, breiteText - 20).length * 14 + 6, 0)
    const seitenHoehe = SEITE.h - KOPF - 90 - RAND
    platz(hoehe < seitenHoehe ? hoehe : 18 + 13 + 6 + 16)
    y -= 18
    text(RAND, y, g.titel, 13, true, NAVY)
    y -= 6 + 13
    for (const u of g.unterlagen) {
      const zeilen = umbrechen(u, 10.5, breiteText - 20)
      platz(zeilen.length * 14 + 4)
      // Ankreuzfeld; schon Bereitgelegtes mit grünem Haken (Ricardo, 16.10.2026)
      const y0 = y - 1.5
      s.push(`${NAVY} RG 0.75 w ${RAND.toFixed(2)} ${y0.toFixed(2)} 9 9 re S\n`)
      if (d.abgehakt?.has(u)) {
        s.push(
          `${GRUEN} RG 1.6 w 1 J 1 j ${(RAND + 1.8).toFixed(2)} ${(y0 + 4.6).toFixed(2)} m ${(RAND + 3.9).toFixed(2)} ${(y0 + 2.2).toFixed(2)} l ${(RAND + 8).toFixed(2)} ${(y0 + 8).toFixed(2)} l S 0 J 0 j\n`,
        )
      }
      zeilen.forEach((z, i) => text(RAND + 20, y - i * 14, z, 10.5, false, TEXT))
      y -= zeilen.length * 14 + 6
    }
  }

  // Fusszeile auf jeder Seite, mit «Seite X von Y»
  seiten.forEach((teile, i) => {
    s = teile
    const fy = KOPF
    s.push(`${LINIE} RG 0.25 w ${RAND.toFixed(2)} ${(fy + 12).toFixed(2)} m ${(SEITE.b - RAND).toFixed(2)} ${(fy + 12).toFixed(2)} l S\n`)
    text((SEITE.b - breite(d.fuss, 8)) / 2, fy, d.fuss, 8, false, GRAU)
    const seite = `Seite ${i + 1} von ${seiten.length}`
    text(SEITE.b - RAND - breite(seite, 8), fy, seite, 8, false, GRAU)
  })

  return baue(seiten, d)
}

/** Setzt die PDF-Datei zusammen: Katalog, Seiten, zwei Standardschriften, Logo als JPEG. */
function baue(seiten: Teil[][], d: PdfDaten): Blob {
  const enc = new TextEncoder()
  const teile: Uint8Array[] = []
  let laenge = 0
  const lage: number[] = []
  const add = (t: string | Uint8Array | number[]) => {
    const b = typeof t === 'string' ? enc.encode(t) : t instanceof Uint8Array ? t : new Uint8Array(t)
    teile.push(b)
    laenge += b.length
  }
  const strom = (teile2: Teil[]) => {
    const b: number[] = []
    for (const t of teile2) {
      if (typeof t === 'string') for (const c of enc.encode(t)) b.push(c)
      else b.push(...t)
    }
    return new Uint8Array(b)
  }

  const n = seiten.length
  // Objektnummern: 1 Katalog, 2 Seiten, 3 F1, 4 F2, 5 Logo, danach je Seite: Seite, Inhalt
  const seitenObj = seiten.map((_, i) => 6 + i * 2)
  const objekt = (nr: number) => {
    lage[nr] = laenge
    add(`${nr} 0 obj\n`)
  }
  add('%PDF-1.4\n%âãÏÓ\n')
  objekt(1)
  add('<< /Type /Catalog /Pages 2 0 R >>\nendobj\n')
  objekt(2)
  add(`<< /Type /Pages /Kids [${seitenObj.map((x) => `${x} 0 R`).join(' ')}] /Count ${n} >>\nendobj\n`)
  objekt(3)
  add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>\nendobj\n')
  objekt(4)
  add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>\nendobj\n')
  objekt(5)
  if (d.logo) {
    add(
      `<< /Type /XObject /Subtype /Image /Width ${d.logoMass.b} /Height ${d.logoMass.h} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${d.logo.length} >>\nstream\n`,
    )
    add(d.logo)
    add('\nendstream\nendobj\n')
  } else add('null\nendobj\n')
  seiten.forEach((teile2, i) => {
    const nr = seitenObj[i] as number
    objekt(nr)
    add(
      `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${SEITE.b.toFixed(2)} ${SEITE.h.toFixed(2)}] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> /XObject << /Logo 5 0 R >> >> /Contents ${nr + 1} 0 R >>\nendobj\n`,
    )
    const inhalt = strom(teile2)
    objekt(nr + 1)
    add(`<< /Length ${inhalt.length} >>\nstream\n`)
    add(inhalt)
    add('\nendstream\nendobj\n')
  })
  const anzahl = 6 + n * 2
  const xref = laenge
  add(`xref\n0 ${anzahl}\n0000000000 65535 f \n`)
  for (let i = 1; i < anzahl; i++) add(`${String(lage[i] ?? 0).padStart(10, '0')} 00000 n \n`)
  add(`trailer\n<< /Size ${anzahl} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`)
  return new Blob(teile as BlobPart[], { type: 'application/pdf' })
}
