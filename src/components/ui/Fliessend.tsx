'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Fliessende Übergänge für Zahlen (15.10.2026). Ricardo: «die werte die sich bei solchen änderungen
 * … ergeben sollen alle einen angenehmen und fliessenden übergang haben». Eine Zahl läuft vom alten
 * zum neuen Wert, statt zu springen; Balken und Ringe gleiten über CSS-Übergänge in ihren Modulen.
 *
 * Wer im System «Bewegung reduzieren» eingestellt hat, sieht den neuen Wert sofort.
 */

const DAUER = 650

/** Sanft auslaufend: schnell los, ruhig am Ziel. */
const auslaufen = (t: number) => 1 - Math.pow(1 - t, 3)

export function useFliessend(ziel: number, dauer = DAUER) {
  const [wert, setWert] = useState(ziel)
  const aktuell = useRef(ziel)

  useEffect(() => {
    const ruhig = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const von = aktuell.current
    if (ruhig || von === ziel) {
      aktuell.current = ziel
      setWert(ziel)
      return
    }
    let bild = 0
    const start = performance.now()
    const schritt = (jetzt: number) => {
      const t = Math.min((jetzt - start) / dauer, 1)
      const v = von + (ziel - von) * auslaufen(t)
      aktuell.current = v
      setWert(v)
      if (t < 1) bild = requestAnimationFrame(schritt)
    }
    bild = requestAnimationFrame(schritt)
    return () => cancelAnimationFrame(bild)
  }, [ziel, dauer])

  return wert
}

/** Eine Zahl, die fliessend zum neuen Wert läuft. Vorlesewerkzeuge bekommen nur den Endwert. */
export function FliessendeZahl({ wert, format }: { wert: number; format: (n: number) => string }) {
  const angezeigt = useFliessend(wert)
  return (
    <>
      <span aria-hidden="true">{format(angezeigt)}</span>
      <span className="ac-visually-hidden">{format(wert)}</span>
    </>
  )
}
