'use client'

import { useEffect, useId, useRef, useState } from 'react'

import { fristenKantone, type Station } from '@/content/fristen-kantone'

import styles from './Seite.module.css'

/**
 * Fristen und Gebühren je Kanton (15.10.2026). Ricardo: «bei den Fristverlängerungen soll man auch den
 * Kanton anpassen können», voreingestellt Bern. Daten in `src/content/fristen-kantone.ts`, recherchiert
 * auf den Seiten der kantonalen Steuerverwaltungen (Stand siehe dort). Beim Wechsel blendet die Zeitleiste
 * sanft über; wer «Bewegung reduzieren» eingestellt hat, sieht sie sofort.
 */

const VORGABE = 'BE'

function Leiste({ titel, stationen }: { titel: string; stationen: readonly Station[] }) {
  return (
    <div className={styles.reihe}>
      <h3 className={styles.reiheTitel}>{titel}</h3>
      <ol className={styles.leiste} data-anzahl={stationen.length}>
        {stationen.map((st) => (
          <li key={`${st.marke ?? ''}${st.titel}`} className={st.hervor ? styles.stationHervor : styles.station}>
            <span className={styles.punktLeiste} aria-hidden="true" />
            {st.marke ? <span className={styles.stationMarke}>{st.marke}</span> : null}
            <span className={styles.stationTitel}>{st.titel}</span>
            {st.wert ? (
              <span className={styles.stationWert} data-kostenlos={st.wert === 'kostenlos'}>
                {st.wert}
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  )
}

export function ZeitleisteKantone({ titelPrivat, titelUnternehmen, beschriftung }: { titelPrivat: string; titelUnternehmen: string; beschriftung: string }) {
  const [kuerzel, setKuerzel] = useState(VORGABE)
  const id = useId()
  // Die Höhe gleitet zum neuen Inhalt, statt zu springen (Ricardo, 16.10.2026: «fliessenden übergang»)
  const innen = useRef<HTMLDivElement>(null)
  const [hoehe, setHoehe] = useState<number | null>(null)
  useEffect(() => {
    const el = innen.current
    if (!el || typeof ResizeObserver === 'undefined') return
    const ro = new ResizeObserver(() => setHoehe(el.offsetHeight))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])
  const k = fristenKantone.kantone.find((x) => x.kuerzel === kuerzel) ?? fristenKantone.kantone[0]
  if (!k) return null

  return (
    <>
      <div className={styles.kantonWahl}>
        <label htmlFor={id}>{beschriftung}</label>
        <select id={id} value={kuerzel} onChange={(e) => setKuerzel(e.target.value)}>
          {fristenKantone.kantone.map((x) => (
            <option key={x.kuerzel} value={x.kuerzel}>
              {x.name}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.gleiten} style={hoehe != null ? { height: hoehe } : undefined}>
      <div ref={innen}>
      {/* key: Beim Kantonswechsel neu einblenden statt springen; die Stationen erscheinen nacheinander */}
      <div key={k.kuerzel} className={`${styles.reihen} ${styles.einblenden}`} aria-live="polite">
        <Leiste titel={titelPrivat} stationen={k.privat.stationen} />
        {k.privat.nachsatz ? <p className={styles.nachsatz}>{k.privat.nachsatz}</p> : null}
        <Leiste titel={titelUnternehmen} stationen={k.unternehmen.stationen} />
        {k.unternehmen.nachsatz ? <p className={styles.nachsatz}>{k.unternehmen.nachsatz}</p> : null}
      </div>
      </div>
      </div>
    </>
  )
}
