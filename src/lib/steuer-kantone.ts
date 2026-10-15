/**
 * Einkommenssteuer für alle Kantone und Gemeinden, Steuerjahr 2026 (15.10.2026).
 *
 * Ricardo: «ausserdem soll man seine Gemeinde aussuchen können und kanton». Die Daten liegen als eigene Dateien
 * auf der Website (`public/daten/steuern-2026/`) und werden erst geladen, wenn jemand den Rechner benutzt –
 * kein Aufruf an einen fremden Server.
 *
 * QUELLE: Steuerrechner der ESTV, https://swisstaxcalculator.estv.admin.ch, Schnittstellen
 * API_exportManyTaxScales (Tarife), API_exportManySimpleRates (Steuerfüsse aller 2110 Gemeinden),
 * API_exportManyDeductions, Steuerjahr 2026, abgerufen am 15.10.2026. Die Berechnung folgt der dort geprüften
 * Referenz: gegen API_calculateSimpleTaxes über alle Gemeinden höchstens rund CHF 2 Abweichung (die ESTV rundet
 * jede Teilsteuer auf ganze Franken). Sonderregeln (VD Quotient familial, VS Index und Rabatt, BL Formeln und
 * Kinderabzug vom Steuerbetrag, GE Faktor, Rundungen) sind aus Antworten des ESTV-Rechners abgeleitet.
 * **Jedes Jahr neu erzeugen.**
 *
 * Nicht enthalten: Personalsteuer, Vermögenssteuer, gemischtkonfessionelle Ehen.
 */

export type Stand = 'ledig' | 'verheiratet' | 'alleinerziehend'
export type Konfession = 'ref' | 'kath' | 'chk' | 'keine'

type Zeile = (number | string | null)[]
type TarifDef = {
  art: 'stufen' | 'basis' | 'satzlinear' | 'formel' | 'flat'
  tarife: Record<string, Zeile[] | number>
  ledig?: { tarif: string; divisor?: number }
  verheiratet?: { tarif: string; divisor?: number }
  alleinerziehend?: { tarif: string; divisor?: number }
  satzeinkommenAbrunden100?: boolean
}
type Kanton = TarifDef & {
  name: string
  einkommenAbrunden100?: boolean
  index?: { kanton?: number }
  quotient?: { ledig: number; verheiratet: number; alleinerziehend: number; proKind: number; blocage: { a: number; b: number } }
  kinderabzugVomSteuerbetrag?: { einfacheSteuer?: number; kanton?: number }
  mindestEinfacheSteuer?: number
  gemeinde?: TarifDef
  kantonFaktor?: number
  kantonFaktorZusatz?: number
  rabattVerheiratet?: { prozent: number; min: number; max: number }
  mindestKantonssteuer?: number
  hoechstbelastung?: { satz: number }
  kirche?: Record<string, { basis?: string; teiler: number }>
  steuergutschriftProKind?: number
}
export type Tarife = {
  bund: { art: 'basis'; tarife: { ledig: Zeile[]; verheiratet: Zeile[] }; kinderabzugVomSteuerbetrag: number; mindeststeuer?: number }
  kantone: Record<string, Kanton>
}
export type Gemeinde = { bfs: number; name: string; kt: string; k: number; g: number; ref?: number; kath?: number; chk?: number; vsIndex?: number }

const n = (x: number | string | null | undefined) => Number(x ?? 0)

function tarifSteuer(art: TarifDef['art'], tab: Zeile[] | number, E: number): number {
  if (E <= 0) return 0
  if (art === 'flat') return (E * Number(tab)) / 100
  const t = tab as Zeile[]
  switch (art) {
    case 'stufen': {
      let rest = E
      let s = 0
      for (const [b, p] of t) {
        const w = b == null ? rest : Math.min(rest, n(b))
        if (w <= 0) break
        s += (w * n(p)) / 100
        rest -= w
      }
      return s
    }
    case 'basis': {
      let z: Zeile | null = null
      for (const r of t) if (E >= n(r[0])) z = r
      return z ? n(z[1]) + ((E - n(z[0])) * n(z[2])) / 100 : 0
    }
    case 'satzlinear': {
      const k = t.length
      const erste = t[0]
      const letzte = t[k - 1]
      if (!erste || !letzte) return 0
      let p = n(erste[1])
      if (E >= n(letzte[0])) p = n(letzte[1])
      else if (E > n(erste[0]))
        for (let i = 0; i < k - 1; i++) {
          const a = t[i]
          const b = t[i + 1]
          if (a && b && E >= n(a[0]) && E < n(b[0])) {
            p = n(a[1]) + ((n(b[1]) - n(a[1])) * (E - n(a[0]))) / (n(b[0]) - n(a[0]))
            break
          }
        }
      return (E * p) / 100
    }
    case 'formel': {
      let z: Zeile | null = null
      for (const r of t) if (E >= n(r[0])) z = r
      return z && z[1] ? formel(String(z[1]), E) : 0
    }
  }
  return 0
}

/** Kleiner Auswerter für die Formeln von Basel-Landschaft (+ - * / ( ) log E und Zahlen), ohne eval. */
function formel(src: string, E: number): number {
  const t = src.match(/\d+\.?\d*(?:[eE][-+]?\d+)?|log|E|[-+*/()]/g) ?? []
  let i = 0
  const peek = () => t[i]
  const next = () => t[i++]
  const expr = (): number => {
    let v = term()
    while (peek() === '+' || peek() === '-') {
      const o = next()
      const w = term()
      v = o === '+' ? v + w : v - w
    }
    return v
  }
  const term = (): number => {
    let v = fac()
    while (peek() === '*' || peek() === '/') {
      const o = next()
      const w = fac()
      v = o === '*' ? v * w : v / w
    }
    return v
  }
  const fac = (): number => {
    const x = next()
    if (x === '-') return -fac()
    if (x === '(') {
      const v = expr()
      next()
      return v
    }
    if (x === 'E') return E
    if (x === 'log') return Math.log(fac())
    return parseFloat(x ?? '0')
  }
  return expr()
}

/** Steuer mit Satzeinkommen S: E · T(S) / S. */
function mitSatz(art: TarifDef['art'], tab: Zeile[] | number, E: number, S0: number, runden: boolean) {
  const S = runden ? Math.floor(S0 / 100 + 1e-9) * 100 : S0
  if (S <= 0 || E <= 0) return 0
  if (S === E) return tarifSteuer(art, tab, E)
  return (E * tarifSteuer(art, tab, S)) / S
}

function einfacheSteuer(def: TarifDef, E: number, stand: Stand, kinder: number, index?: number, kt?: Kanton) {
  const g = def[stand] ?? def.verheiratet ?? def.ledig
  if (!g) return 0
  const tab = def.tarife[g.tarif]
  if (tab === undefined) return 0
  if (kt?.quotient) {
    // Waadt: Quotient familial mit Begrenzung
    const q0 = kt.quotient[stand]
    const q = q0 + (stand === 'ledig' ? 0 : kt.quotient.proKind * kinder)
    let S = E / q
    if (kinder > 0 && stand !== 'ledig') {
      const T = kt.quotient.blocage.a + kt.quotient.blocage.b * kinder
      if (E > T) S = Math.max(S, E / q0 - T * (1 / q0 - 1 / q))
    }
    return mitSatz(def.art, tab, E, S, true)
  }
  const S = E / (index || g.divisor || 1)
  return mitSatz(def.art, tab, E, S, !!def.satzeinkommenAbrunden100)
}

export type Ergebnis = { kanton: number; gemeinde: number; kirche: number; total: number; bund: number }

/**
 * Steuern auf dem steuerbaren Einkommen: `einkommenKanton` für Kanton, Gemeinde und Kirche, `einkommenBund`
 * für die direkte Bundessteuer (die beiden unterscheiden sich durch die Abzüge).
 */
export function berechne(
  p: { einkommenKanton: number; einkommenBund: number; stand: Stand; kinder: number; konfession: Konfession; gemeinde: Gemeinde },
  tarife: Tarife,
): Ergebnis {
  const kinder = p.kinder
  const stand: Stand = p.stand === 'ledig' && kinder > 0 ? 'alleinerziehend' : p.stand
  const gem = p.gemeinde
  const kt = tarife.kantone[gem.kt]
  let K = 0
  let G = 0
  let Ch = 0
  let total = 0
  if (kt) {
    const E = Math.max(0, p.einkommenKanton)
    const EK = kt.einkommenAbrunden100 ? Math.floor(E / 100) * 100 : E
    let eK = einfacheSteuer(kt, EK, stand, kinder, kt.index?.kanton, kt)
    if (kt.kinderabzugVomSteuerbetrag?.einfacheSteuer) eK = Math.max(0, eK - kinder * kt.kinderabzugVomSteuerbetrag.einfacheSteuer)
    if (kt.mindestEinfacheSteuer && eK < kt.mindestEinfacheSteuer) eK = 0
    const eG = kt.gemeinde ? einfacheSteuer(kt.gemeinde, EK, stand, kinder, gem.vsIndex) : eK
    const fK = kt.kantonFaktor != null ? kt.kantonFaktor : (gem.k / 100) * (kt.kantonFaktorZusatz || 1)
    K = eK * fK
    G = (eG * gem.g) / 100
    const ksatz = p.konfession !== 'keine' ? (gem[p.konfession] ?? 0) : 0
    const r = kt.rabattVerheiratet
    if (r && stand !== 'ledig') {
      const rab = (x: number) => Math.min(r.max, Math.max(r.min, (x * r.prozent) / 100))
      K = Math.max(0, K - rab(K))
      G = Math.max(0, G - rab(G))
    }
    if (kt.kinderabzugVomSteuerbetrag?.kanton) K = Math.max(0, K - kinder * kt.kinderabzugVomSteuerbetrag.kanton)
    if (kt.mindestKantonssteuer && eK > 0) K = Math.max(K, kt.mindestKantonssteuer)
    if (kt.hoechstbelastung) {
      const cap = (EK * kt.hoechstbelastung.satz) / 100
      if (K + G > cap) {
        const f = cap / (K + G)
        K *= f
        G *= f
      }
    }
    const kr = kt.kirche && (kt.kirche[p.konfession] ?? kt.kirche.alle)
    const kbasis = !kr ? eK : kr.basis === 'einkommen' ? EK : kr.basis === 'kantonssteuer' ? K : kr.basis === 'gemeindesteuer' ? G : eK
    Ch = (kbasis * ksatz) / (kr ? kr.teiler : 100)
    const gutschrift = kt.steuergutschriftProKind ? kinder * kt.steuergutschriftProKind : 0
    total = Math.max(0, K + G + Ch - gutschrift)
  }
  const b = tarife.bund
  const bt = stand === 'ledig' ? b.tarife.ledig : b.tarife.verheiratet
  let bund = Math.max(0, tarifSteuer(b.art, bt, Math.floor(Math.max(0, p.einkommenBund) / 100) * 100) - kinder * b.kinderabzugVomSteuerbetrag)
  if (bund < (b.mindeststeuer ?? 0)) bund = 0
  return { kanton: K, gemeinde: G, kirche: Ch, total, bund }
}
