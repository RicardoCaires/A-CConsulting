/**
 * Steuerersparnis durch Einzahlungen in die Säule 3a – Grundlagen und Rechnung (15.10.2026).
 * Ricardo: «eine Steuerersparnis berechnung … wo man anhand von säule 3a einzahlungen ungefähr
 * berechnen kann wie viel steuerersparnis man hätte».
 *
 * Alle Zahlen amtlich, Steuerjahr 2026, Wohnsitz Aegerten BE:
 * - Säule 3a: BSV, «Beträge gültig ab dem 1. Januar 2026»
 *   https://www.bsv.admin.ch/dam/de/sd-web/sAgdISSXenMT/d_Betr%C3%A4ge%202026.pdf
 * - Direkte Bundessteuer, Art. 36 DBG, Tarif 2026: ESTV-Rundschreiben 2-215-D-2025-d vom 11.09.2025
 *   https://www.estv.admin.ch/dam/de/sd-web/vFK3ntWLQ4s4/2-215-D-2025-d.pdf
 * - Kanton Bern, Art. 42 StG (BSG 661.11), Stand 01.01.2026: https://be.lexwork.naz.ch/de/dta/661.11.pdf
 * - Steueranlagen Kanton, Gemeinde Aegerten und Kirchgemeinden 2026: Finanzverwaltung Bern, Stand 01.02.2026
 *   https://www.fin.be.ch/content/dam/fin/dokumente/de/finanzverwaltung/finanzausgleich/publikationen/fv-stat-steueranlage_2026_1.pdf
 *
 * Vereinfachung, auf der Seite genannt: Das steuerbare Einkommen ist bei Bund und Kanton gleich
 * angenommen. Es rechnet im Browser; nichts wird gesendet oder gespeichert (Hausordnung Abschnitt 7).
 *
 * ⚠️ Jedes Jahr nachführen: 3a-Beträge (2027: 7'373 / 36'864), Bundestarif, Kantonstarif, Anlagen.
 */

export const STEUERJAHR = 2026
export const MAX_3A_MIT_PK = 7258
export const MAX_3A_OHNE_PK = 36288

/** Bund: [ab Einkommen, Steuer an dieser Grenze, je weitere 100 CHF]. */
type Stufe = readonly [number, number, number]

const BUND_ALLEINSTEHEND: readonly Stufe[] = [
  [15200, 0, 0.77],
  [33200, 138.6, 0.88],
  [43500, 229.2, 2.64],
  [58000, 612.0, 2.97],
  [76200, 1152.5, 5.94],
  [82100, 1502.95, 6.6],
  [108900, 3271.75, 8.8],
  [141500, 6140.55, 11.0],
  [185100, 10936.55, 13.2],
  [793900, 91298.15, 13.2],
]

const BUND_VERHEIRATET: readonly Stufe[] = [
  [29700, 0, 1],
  [53400, 237, 2],
  [61300, 395, 3],
  [79100, 929, 4],
  [94900, 1561, 5],
  [108700, 2251, 6],
  [120600, 2965, 7],
  [130500, 3658, 8],
  [138400, 4290, 9],
  [144300, 4821, 10],
  [148300, 5221, 11],
  [150400, 5452, 12],
  [152400, 5692, 13],
  [941300, 108249, 13],
]

/** Ab diesem Einkommen gilt flach 11,5 % auf dem ganzen Einkommen. */
const BUND_FLACH = { alleinstehend: 794000, verheiratet: 941400 }
/** Elterntarif: Ermässigung je Kind (Art. 36 Abs. 2bis DBG). */
const BUND_JE_KIND = 263

export function bundessteuer(einkommen: number, verheiratetentarif: boolean, kinder: number): number {
  const e = Math.max(0, einkommen)
  const flach = verheiratetentarif ? BUND_FLACH.verheiratet : BUND_FLACH.alleinstehend
  let steuer: number
  if (e >= flach) steuer = e * 0.115
  else {
    const stufen = verheiratetentarif ? BUND_VERHEIRATET : BUND_ALLEINSTEHEND
    const s = [...stufen].reverse().find(([ab]) => e >= ab)
    steuer = s ? s[1] + Math.floor((e - s[0]) / 100) * s[2] : 0
  }
  if (verheiratetentarif) steuer -= kinder * BUND_JE_KIND
  // Steuerbeträge unter CHF 25 werden nicht erhoben (Art. 36 Abs. 3 DBG)
  return steuer < 25 ? 0 : steuer
}

/** Kanton Bern: [Satz in Prozent, Breite der Scheibe]; die letzte Zeile gilt für jedes weitere Einkommen. */
type Scheibe = readonly [number, number]

const BE_VERHEIRATET: readonly Scheibe[] = [
  [1.55, 3300], [1.65, 3300], [2.85, 9800], [3.65, 16100], [3.8, 26900], [4.3, 26900], [4.85, 26900],
  [5.2, 26900], [5.7, 41700], [5.85, 54300], [5.95, 54300], [6.2, 54300], [6.4, 141300], [6.5, Infinity],
]

const BE_ALLEINSTEHEND: readonly Scheibe[] = [
  [1.95, 3300], [2.9, 3300], [3.6, 9800], [4.15, 16100], [4.45, 26900], [5.0, 26900], [5.6, 26900],
  [5.75, 26900], [5.9, 26900], [6.05, 26900], [6.15, 37700], [6.3, 86900], [6.4, 152100], [6.5, Infinity],
]

/** Einfache Steuer Kanton Bern; das Einkommen wird auf 100 abgerundet (Art. 42 Abs. 4 StG). */
export function einfacheSteuerBern(einkommen: number, verheiratetentarif: boolean): number {
  let rest = Math.floor(Math.max(0, einkommen) / 100) * 100
  let steuer = 0
  for (const [satz, breite] of verheiratetentarif ? BE_VERHEIRATET : BE_ALLEINSTEHEND) {
    const teil = Math.min(rest, breite)
    steuer += (teil * satz) / 100
    rest -= teil
    if (rest <= 0) break
  }
  return steuer
}

/** Steueranlagen 2026: Kanton, Gemeinde Aegerten, Kirchgemeinden. */
export const ANLAGE_KANTON = 2.975
export const ANLAGE_GEMEINDE_AEGERTEN = 1.79
export const KIRCHE = { keine: 0, reformiert: 0.2, katholisch: 0.19, christkatholisch: 0.28 } as const
export type Kirche = keyof typeof KIRCHE

export type Eingabe = {
  einkommen: number
  verheiratetentarif: boolean
  kinder: number
  kirche: Kirche
  einzahlung: number
}

export type Ersparnis = { bund: number; kantonGemeinde: number; kirche: number; total: number }

export function ersparnis3a(e: Eingabe): Ersparnis {
  const nachher = Math.max(0, e.einkommen - e.einzahlung)
  const bund = bundessteuer(e.einkommen, e.verheiratetentarif, e.kinder) - bundessteuer(nachher, e.verheiratetentarif, e.kinder)
  const einfach = einfacheSteuerBern(e.einkommen, e.verheiratetentarif) - einfacheSteuerBern(nachher, e.verheiratetentarif)
  const kantonGemeinde = einfach * (ANLAGE_KANTON + ANLAGE_GEMEINDE_AEGERTEN)
  const kirche = einfach * KIRCHE[e.kirche]
  return { bund, kantonGemeinde, kirche, total: bund + kantonGemeinde + kirche }
}
