'use client'

import { useId, useLayoutEffect, useRef, useState } from 'react'

import { fristenKantone as fristenDe, type Station } from '@/content/fristen-kantone'
import { fristenKantone as fristenFr } from '@/content/fr/fristen-kantone'
import { fristenKantone as fristenPt } from '@/content/pt/fristen-kantone'
import type { Locale } from '@/i18n/config'
import { istKostenlos, nachSprache } from '@/lib/sprache'

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
              <span className={styles.stationWert} data-kostenlos={istKostenlos(st.wert)}>
                {st.wert}
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  )
}

export function ZeitleisteKantone({ titelPrivat, titelUnternehmen, beschriftung, locale = 'de' }: { titelPrivat: string; titelUnternehmen: string; beschriftung: string; locale?: Locale }) {
  const fristenKantone = nachSprache(locale, { de: fristenDe, fr: fristenFr, pt: fristenPt })
  const [kuerzel, setKuerzel] = useState(VORGABE)
  const id = useId()
  // Die Höhe gleitet beim Wechsel von der alten zur neuen und steht danach wieder auf «auto» –
  // so bleibt nie etwas abgeschnitten (Ricardo, 16.10.2026: «fliessenden übergang»)
  const aussen = useRef<HTMLDivElement>(null)
  const innen = useRef<HTMLDivElement>(null)
  const vorher = useRef<number | null>(null)
  const [hoehe, setHoehe] = useState<number | null>(null)
  useLayoutEffect(() => {
    const alt = vorher.current
    const neu = innen.current?.offsetHeight
    vorher.current = null
    if (alt == null || neu == null || alt === neu) return
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
    setHoehe(alt)
    const bild = requestAnimationFrame(() => requestAnimationFrame(() => setHoehe(neu)))
    // Rückfall, falls das Ende des Übergangs nicht gemeldet wird: Höhe sicher wieder freigeben
    const frei = window.setTimeout(() => setHoehe(null), 700)
    return () => {
      cancelAnimationFrame(bild)
      window.clearTimeout(frei)
    }
  }, [kuerzel])
  const wechsle = (neu: string) => {
    vorher.current = aussen.current?.offsetHeight ?? null
    setKuerzel(neu)
  }
  const k = fristenKantone.kantone.find((x) => x.kuerzel === kuerzel) ?? fristenKantone.kantone[0]
  if (!k) return null

  return (
    <>
      <div className={styles.kantonWahl}>
        <label htmlFor={id}>{beschriftung}</label>
        <select id={id} value={kuerzel} onChange={(e) => wechsle(e.target.value)}>
          {fristenKantone.kantone.map((x) => (
            <option key={x.kuerzel} value={x.kuerzel}>
              {x.name}
            </option>
          ))}
        </select>
      </div>
      <div
        ref={aussen}
        className={styles.gleiten}
        style={hoehe != null ? { height: hoehe } : undefined}
        onTransitionEnd={(e) => {
          if (e.target === e.currentTarget) setHoehe(null)
        }}
      >
      <div ref={innen} className={styles.gleitenInhalt}>
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
