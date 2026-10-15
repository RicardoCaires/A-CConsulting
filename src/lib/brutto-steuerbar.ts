/**
 * Vom Bruttolohn zum steuerbaren Einkommen, geschätzt für Angestellte (15.10.2026). Ricardo: «ich will das man
 * hier noch sein Bruttoeinkommen ungefähr in steuerbares einkommen ausrechnen kann anhand von infos die du
 * öffentlich findest».
 *
 * QUELLEN (Daten in `public/daten/steuern-2026/abzuege.json`):
 * - Sozialabzüge 2026: AHV/IV/EO 5.3 % (Merkblatt 2.01), ALV 1.1 % bis CHF 148'200 (Merkblatt 2.08),
 *   https://www.ahv-iv.ch; NBU 1 % und BVG 6.5 % des Bruttolohns sind die Schätzannahmen der ESTV für die
 *   Quellensteuertarife 2026, https://www.estv.admin.ch/dam/de/sd-web/nuQbhdzXDPm0/qst-berechnungsgrundlagen-2026-de.pdf
 * - Bund 2026: ESTV-Rundschreiben vom 11.09.2025, https://www.estv.admin.ch/dam/de/sd-web/vFK3ntWLQ4s4/2-215-D-2025-d.pdf
 * - Kantone: ESTV-Steuermäppchen 2025 (https://www.estv2.admin.ch/stp/sm/), wo vorhanden ersetzt durch die
 *   kantonalen «Grundlagen für die Berechnung der Quellensteuertarife 2026» und die Steuergesetze 2026.
 *   Einzelne Werte sind nur Stand 2025 oder nicht eindeutig belegt – Liste in CLAUDE.md, Abschnitt 9a.
 *
 * Annahmen (auf der Seite genannt): ganzjährige Stelle, ein Erwerbseinkommen, Fahrkosten CHF 800, keine weiteren
 * Abzüge (Schuldzinsen, Weiterbildung, Krankheitskosten, Spenden …), Versicherungsprämien mindestens so hoch wie der
 * Höchstabzug, Kinder minderjährig im eigenen Haushalt. **Jedes Jahr nachführen.**
 */

export type Abzugsebene = {
  jahr: number
  berufskosten: { satz: number | null; min: number; max: number | null; fix: number | null; sockel?: number; inklFahrtVerpflegung: boolean }
  fahrkostenMax: number | null
  versicherung: { ledig: number; verheiratet: number; proKind: number; ohne2?: { ledig: number | null; verheiratet: number | null } }
  versicherungImModell?: boolean
  krankenkasseSeparatDetail?: { ledig: number; verheiratet: number; proKind: number }
  kinderabzug: number
  persoenlich: { ledig: number; ledigMitKindern: number; verheiratet: number }
  sozialZusatzSatz?: number
}
export type Abzuege = {
  sozial: { ahvIvEo: number; alv: { satz: number; bis: number }; nbuAnnahme: { satz: number; bis: number }; bvgAnnahme: number }
  saeule3a: { mitPk: number; ohnePk: number }
  ebenen: Record<string, Abzugsebene>
}

const FAHRKOSTEN = 800

export type Umrechnung = {
  sozial: number
  pensionskasse: number
  netto: number
  bund: { berufskosten: number; versicherung: number; familie: number; steuerbar: number }
  kanton: { berufskosten: number; versicherung: number; familie: number; steuerbar: number }
}

function ebene(e: Abzugsebene, netto: number, p: { verheiratet: boolean; kinder: number; pk: boolean }) {
  const b = e.berufskosten
  const bk = b.fix != null ? b.fix : Math.min(Math.max((b.sockel ?? 0) + (b.satz ?? 0) * netto, b.min ?? 0), b.max ?? Infinity)
  const fahrt = b.inklFahrtVerpflegung ? 0 : Math.min(FAHRKOSTEN, e.fahrkostenMax ?? Infinity)
  let versicherung: number
  const kk = e.krankenkasseSeparatDetail
  if (e.versicherungImModell === false && kk) {
    versicherung = (p.verheiratet ? kk.verheiratet : kk.ledig) + p.kinder * kk.proKind
  } else {
    const v = e.versicherung
    const ohne = p.pk ? null : v.ohne2
    const basis = p.verheiratet ? (ohne?.verheiratet ?? v.verheiratet) : (ohne?.ledig ?? v.ledig)
    versicherung = basis + p.kinder * v.proKind
  }
  const pers = p.verheiratet ? e.persoenlich.verheiratet : p.kinder ? e.persoenlich.ledigMitKindern : e.persoenlich.ledig
  const familie = p.kinder * e.kinderabzug + pers
  const steuerbar = Math.max(0, netto - bk - fahrt - versicherung - familie)
  return { berufskosten: bk + fahrt, versicherung, familie, steuerbar }
}

/** Ohne Säule 3a: Die Einzahlung zieht der Rechner danach ab. */
export function bruttoZuSteuerbar(
  p: { brutto: number; verheiratet: boolean; kinder: number; pk: boolean; kanton: string },
  a: Abzuege,
): Umrechnung | null {
  const kt = a.ebenen[p.kanton]
  const bund = a.ebenen.bund
  if (!kt || !bund) return null
  const s = a.sozial
  const B = Math.max(0, p.brutto)
  const sozial =
    s.ahvIvEo * B + s.alv.satz * Math.min(B, s.alv.bis) + s.nbuAnnahme.satz * Math.min(B, s.nbuAnnahme.bis) + (kt.sozialZusatzSatz ?? 0) * B
  // Ohne Pensionskasse kein BVG-Beitrag
  const pensionskasse = p.pk ? s.bvgAnnahme * B : 0
  const netto = B - sozial - pensionskasse
  const q = { verheiratet: p.verheiratet, kinder: p.kinder, pk: p.pk }
  return { sozial, pensionskasse, netto, bund: ebene(bund, netto, q), kanton: ebene(kt, netto, q) }
}
