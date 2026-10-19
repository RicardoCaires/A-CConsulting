import { vorsorgeKennzahlen as V, type KennzahlId } from '@/content/vorsorge-kennzahlen'

export type Jahr = (typeof V.jahre)[number]

/**
 * Werte eines Jahres, aus der maximalen AHV-Rente gerechnet (Verhältnisse wie in `V.beziehungen`, gesetzlich:
 * AHVG, BVG Art. 2, 7, 8, BVV 3 Art. 7). Nachgerechnet gegen die amtlichen Beträge 2026 und 2027.
 */
export function werteFuer(jahr: Jahr): Record<KennzahlId, number> {
  const r = V.ahvMaxJahr[jahr]
  const grenzbetrag = r * 3
  const koord = (r * 7) / 8
  const eintritt = (r * 3) / 4
  return {
    ahvMax: r,
    ahvMin: r / 2,
    ehepaar: r * 1.5,
    grenzbetrag,
    eintritt,
    koord,
    koordMax: grenzbetrag - koord,
    koordMin: koord - eintritt,
    s3aMit: Math.round(grenzbetrag * 0.08),
    s3aOhne: grenzbetrag * 0.4,
    uvg: V.uvg[jahr],
  }
}

/** Kennzahlen, die mit `id` in einer Rechnung stehen – in beide Richtungen. */
export function verbunden(id: KennzahlId): Set<KennzahlId> {
  const s = new Set<KennzahlId>()
  for (const b of V.beziehungen) {
    const teile = b.teile as readonly KennzahlId[]
    if (b.ergebnis === id) teile.forEach((t) => s.add(t))
    if (teile.includes(id)) s.add(b.ergebnis as KennzahlId)
  }
  return s
}

export const chfGanz = (n: number) => `CHF ${Math.round(n).toLocaleString('de-CH').replace(/[’']/g, '’')}`
