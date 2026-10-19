'use client'

import { useEffect, useId, useLayoutEffect, useRef, useState, type CSSProperties } from 'react'

import { FliessendeZahl } from '@/components/ui/Fliessend'
import { vorsorgeKennzahlen as fr } from '@/content/fr/vorsorge-kennzahlen'
import { vorsorgeKennzahlen as pt } from '@/content/pt/vorsorge-kennzahlen'
import { vorsorgeKennzahlen as de, type KennzahlId } from '@/content/vorsorge-kennzahlen'
import type { Locale } from '@/i18n/config'
import { ANTEIL, chfGanz, prozent, verbunden, werteFuer, type Jahr } from '@/lib/vorsorge-kennzahlen'

import styles from './VorsorgeKarte.module.css'

/**
 * Vorsorge-Kennzahlen als Karte um die AHV-Rente (19.10.2026, dritter Wurf).
 * Ricardo: «es soll wie bei finanzfabio sich um die AHV rente drehen wie die Versicherungskarte bitte darstellung
 * so übernehmen». Eigene Zeichnung im A&C-Design, nicht das Bild von FinanzFabio.
 *
 * Breit: eine Karte im Querformat. In der Mitte die maximale AHV-Rente, rundherum die Beträge, die das Gesetz als
 * Anteil von ihr festlegt; jeder Pfeil trägt den Anteil in Prozent. Links das Band «1. Säule», rechts «2. Säule»,
 * unten «3. Säule». Ein Druck auf einen Betrag öffnet seitlich die Erklärung; die verbundenen Beträge und Pfeile
 * bleiben stark, die übrigen treten zurück. Escape oder ✕ schliessen.
 * Schmal (unter 720 px Kartenbreite): dieselben Beziehungen untereinander, Erklärung als Blatt von unten.
 * Der Jahreswechsel lässt alle Beträge fliessend laufen. Rechnet im Browser, sendet nichts.
 */

const texte = (locale: Locale) => (locale === 'fr' ? fr : locale === 'pt' ? pt : de) as unknown as typeof de

type Lage = { x: number; y: number }

/** Lage in Prozent der Kartenfläche (Breite 1000, Höhe 560). */
const LAGE: Record<KennzahlId, Lage> = {
  ahvMax: { x: 50, y: 40 },
  koord: { x: 50, y: 9 },
  grenzbetrag: { x: 21, y: 15 },
  ahvMin: { x: 21, y: 40 },
  ehepaar: { x: 21, y: 65 },
  koordMax: { x: 79, y: 15 },
  eintritt: { x: 79, y: 40 },
  koordMin: { x: 79, y: 65 },
  uvg: { x: 50, y: 66 },
  s3aMit: { x: 21, y: 92 },
  s3aOhne: { x: 79, y: 92 },
}

const W = 1000
const H = 560
/** Halbe Masse der Mittelbox und eines Betrags, in Einheiten der Zeichnung – für Anfang und Ende der Pfeile. */
const MITTE = { hb: 140, hh: 52 }
const ZIEL = { hb: 100, hh: 40 }

function rand(dx: number, dy: number, hb: number, hh: number) {
  const t = Math.min(hb / Math.max(Math.abs(dx), 1e-6), hh / Math.max(Math.abs(dy), 1e-6))
  return { x: dx * t, y: dy * t }
}

function pfeil(id: KennzahlId) {
  const c = { x: (LAGE.ahvMax.x / 100) * W, y: (LAGE.ahvMax.y / 100) * H }
  const z = { x: (LAGE[id].x / 100) * W, y: (LAGE[id].y / 100) * H }
  const dx = z.x - c.x
  const dy = z.y - c.y
  const a = rand(dx, dy, MITTE.hb + 8, MITTE.hh + 8)
  const b = rand(-dx, -dy, ZIEL.hb + 6, ZIEL.hh + 6)
  const x1 = c.x + a.x
  const y1 = c.y + a.y
  const x2 = z.x + b.x
  const y2 = z.y + b.y
  return { x1, y1, x2, y2, mx: (x1 + x2) / 2, my: (y1 + y2) / 2 }
}

const MIT_PFEIL = (Object.keys(LAGE) as KennzahlId[]).filter((k) => k !== 'ahvMax' && ANTEIL[k] !== null)

const SAEULE: Record<KennzahlId, 's1' | 's2' | 's3' | null> = {
  ahvMax: 's1', ahvMin: 's1', ehepaar: 's1', grenzbetrag: 's1',
  koord: 's2', koordMax: 's2', eintritt: 's2', koordMin: 's2',
  s3aMit: 's3', s3aOhne: 's3', uvg: null,
}

const ohneChf = (n: number) => chfGanz(n).replace('CHF ', '')

export function VorsorgeKarte({ locale = 'de' }: { locale?: Locale }) {
  const V = texte(locale)
  const komma = locale !== 'de'
  const [jahr, setJahr] = useState<Jahr>(2027)
  const [offen, setOffen] = useState<KennzahlId | null>(null)
  const [kompakt, setKompakt] = useState(false)
  // Unter 860 px Kartenbreite deckte das Feld die Mitte zu: dort öffnet die Erklärung als Blatt
  const [mitBlatt, setMitBlatt] = useState(false)
  const karte = useRef<HTMLDivElement>(null)
  const blatt = useRef<HTMLDialogElement>(null)
  const zuletzt = useRef<HTMLButtonElement | null>(null)
  const feldTitel = useRef<HTMLHeadingElement>(null)
  const id = useId()
  const w = werteFuer(jahr)
  const vorher = jahr > V.jahre[0] ? werteFuer((jahr - 1) as Jahr) : null

  // Breite der Karte bestimmt die Darstellung (Schaubild oder untereinander)
  useLayoutEffect(() => {
    const el = karte.current
    if (!el) return
    const pruefe = () => {
      setKompakt(el.clientWidth < 720)
      setMitBlatt(el.clientWidth < 860)
    }
    pruefe()
    const ro = new ResizeObserver(pruefe)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // Schmal: Erklärung als Blatt (<dialog>); breit: Feld in der Karte, Escape schliesst
  useEffect(() => {
    const d = blatt.current
    if (mitBlatt && d) {
      if (offen && !d.open) d.showModal()
      if (!offen && d.open) d.close()
    }
    if (!mitBlatt && offen) {
      feldTitel.current?.focus({ preventScroll: true })
      const taste = (e: KeyboardEvent) => {
        if (e.key === 'Escape') schliessen()
      }
      window.addEventListener('keydown', taste)
      return () => window.removeEventListener('keydown', taste)
    }
    return undefined
  }, [offen, mitBlatt])

  const oeffnen = (k: KennzahlId, knopf?: HTMLButtonElement | null) => {
    if (knopf) zuletzt.current = knopf
    setOffen(k)
  }
  function schliessen() {
    setOffen(null)
    zuletzt.current?.focus({ preventScroll: true })
  }

  const nah = offen ? verbunden(offen) : new Set<KennzahlId>()
  const zustand = (k: KennzahlId) => (!offen ? undefined : k === offen ? 'gewaehlt' : nah.has(k) || offen === 'ahvMax' || k === 'ahvMax' ? 'verbunden' : 'blass')
  const titel = (k: KennzahlId) => V.kennzahlen.find((x) => x.id === k)?.titel ?? k
  const anteilText = (k: KennzahlId) => (ANTEIL[k] === null ? V.unabhaengig : `${prozent(ANTEIL[k]!, komma)} ${V.anteil}`)

  function erklaerung(k: KennzahlId) {
    const x = V.kennzahlen.find((y) => y.id === k)!
    const rechnungen = V.beziehungen.filter((b) => b.ergebnis === k || (b.teile as readonly string[]).includes(k))
    const saeule = SAEULE[k]
    return (
      <>
        <div className={styles.feldKopf}>
          <p className={styles.feldGruppe}>
            {saeule ? `${V.saeulen[saeule]} · ` : ''}
            {k === 'ahvMax' ? V.mitte : anteilText(k)}
          </p>
          <button type="button" className={styles.zu} onClick={schliessen} aria-label={V.schliessen}>
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M6 6l12 12 M18 6L6 18" />
            </svg>
          </button>
        </div>
        <p className={styles.feldWert}>{chfGanz(w[k])}</p>
        <h3 ref={feldTitel} tabIndex={-1} id={`${id}-feld-titel`} className={styles.feldTitel}>
          {x.titel} {jahr}
        </h3>
        <p className={styles.feldEinheit}>
          {x.einheit}
          {'monat' in x && x.monat ? ` · ${chfGanz(w[k] / 12)} ${V.proMonat}` : ''}
          {vorher ? (
            <span className={styles.diff}>
              {' · '}
              {w[k] - vorher[k] ? `+${ohneChf(w[k] - vorher[k])} ${V.gegenueber} ${jahr - 1}` : V.unveraendert}
            </span>
          ) : null}
        </p>
        <p className={styles.kurz}>{x.kurz}</p>
        {rechnungen.length ? (
          <>
            <p className={styles.unter}>{V.soHaengtZusammen}</p>
            <ul className={styles.rechnungen}>
              {rechnungen.map((b) => (
                <li key={b.ergebnis + b.text}>
                  <button type="button" className={styles.rechnung} onClick={() => oeffnen(b.ergebnis as KennzahlId)} disabled={b.ergebnis === k}>
                    <span className={styles.rechnungName}>{titel(b.ergebnis as KennzahlId)}</span>
                    <span className={styles.rechnungText}>
                      {b.text} = <strong>{chfGanz(w[b.ergebnis as KennzahlId])}</strong>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </>
        ) : null}
        {x.tipps.length ? (
          <>
            <p className={styles.unter}>{V.gutZuWissen}</p>
            <ul className={styles.tipps}>
              {x.tipps.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </>
        ) : null}
      </>
    )
  }
  const feldInhalt = offen ? erklaerung(offen) : null

  const betrag = (k: KennzahlId, klasse: string | undefined, mitAnteil = false) => (
    <button
      key={k}
      type="button"
      className={klasse}
      data-zustand={zustand(k)}
      aria-expanded={offen === k}
      onClick={(e) => (offen === k ? schliessen() : oeffnen(k, e.currentTarget))}
      style={kompakt ? undefined : ({ '--x': `${LAGE[k].x}%`, '--y': `${LAGE[k].y}%` } as CSSProperties)}
    >
      {mitAnteil && ANTEIL[k] !== null ? <span className={styles.anteilChip}>{prozent(ANTEIL[k]!, komma)}</span> : null}
      <span className={styles.betragWert}>
        <FliessendeZahl wert={w[k]} format={ohneChf} />
      </span>
      <span className={styles.betragName}>{k === 'ahvMax' ? V.mitte : titel(k)}</span>
    </button>
  )

  return (
    <div ref={karte} className={styles.karte} data-kompakt={kompakt || undefined}>
      <div className={styles.kopf}>
        <div>
          <p className={styles.kopfTitel}>
            {V.titel} {jahr}
          </p>
          <p className={styles.kopfSatz}>{V.untertitel}</p>
        </div>
        <div className={styles.jahre} role="group" aria-label={V.jahrWahl}>
          {V.jahre.map((j) => (
            <button key={j} type="button" aria-pressed={j === jahr} onClick={() => setJahr(j)}>
              {j}
            </button>
          ))}
        </div>
      </div>
      <p className={styles.hinweis}>{V.hinweisAntippen}</p>

      {kompakt ? (
        <div className={styles.stapel}>
          {betrag('ahvMax', styles.stapelMitte)}
          {(['s1', 's2', 's3'] as const).map((s) => (
            <section key={s} className={styles.stapelGruppe} data-saeule={s} aria-label={V.saeulen[s]}>
              <p className={styles.stapelTitel}>{V.saeulen[s]}</p>
              {(Object.keys(SAEULE) as KennzahlId[])
                .filter((k) => SAEULE[k] === s && k !== 'ahvMax')
                .map((k) => betrag(k, styles.stapelZeile, true))}
            </section>
          ))}
          <section className={styles.stapelGruppe} data-saeule="uvg" aria-label={titel('uvg')}>
            {betrag('uvg', styles.stapelZeile)}
            <p className={styles.stapelZusatz}>{V.unabhaengig}</p>
          </section>
        </div>
      ) : (
        <div className={styles.flaeche}>
          {/* Bänder der drei Säulen und die Pfeile mit ihrem Anteil */}
          <svg className={styles.zeichnung} viewBox={`0 0 ${W} ${H}`} aria-hidden="true" focusable="false">
            <defs>
              <marker id={`${id}-spitze`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M0 0 L10 5 L0 10 z" className={styles.spitze} />
              </marker>
            </defs>
            <rect x="18" y="22" width="34" height="400" rx="6" className={styles.band1} />
            <rect x={W - 52} y="22" width="34" height="400" rx="6" className={styles.band2} />
            <rect x="18" y="440" width={W - 36} height="34" rx="6" className={styles.band3} />
            <text x="35" y="222" className={styles.bandText} transform="rotate(-90 35 222)" textAnchor="middle" dominantBaseline="central">
              {V.saeulen.s1}
            </text>
            <text x={W - 35} y="222" className={styles.bandText} transform={`rotate(90 ${W - 35} 222)`} textAnchor="middle" dominantBaseline="central">
              {V.saeulen.s2}
            </text>
            <text x={W / 2} y="457" className={styles.bandText} textAnchor="middle" dominantBaseline="central">
              {V.saeulen.s3}
            </text>
            {MIT_PFEIL.map((k) => {
              const p = pfeil(k)
              return (
                <g key={k} className={styles.pfeil} data-zustand={zustand(k)}>
                  <line x1={p.x1} y1={p.y1} x2={p.x2} y2={p.y2} markerEnd={`url(#${id}-spitze)`} />
                  <text x={p.mx} y={p.my} textAnchor="middle" dominantBaseline="central" className={styles.pfeilText}>
                    {prozent(ANTEIL[k]!, komma)}
                  </text>
                </g>
              )
            })}
          </svg>

          {betrag('ahvMax', styles.mitte)}
          {MIT_PFEIL.map((k) => betrag(k, styles.betrag))}
          {betrag('uvg', `${styles.betrag} ${styles.betragUvg}`)}
          <p className={styles.s3aMitte} style={{ '--x': '50%', '--y': `${LAGE.s3aMit.y}%` } as CSSProperties}>
            {V.s3aMitte}
          </p>

          {offen && !mitBlatt ? (
            <section
              className={styles.feld}
              data-seite={LAGE[offen].x < 50 ? 'rechts' : 'links'}
              aria-labelledby={`${id}-feld-titel`}
            >
              {feldInhalt}
            </section>
          ) : null}
        </div>
      )}

      <p className={styles.stand}>{V.stand}</p>

      {mitBlatt ? (
        <dialog
          ref={blatt}
          className={styles.blatt}
          aria-labelledby={`${id}-feld-titel`}
          onClose={() => setOffen(null)}
          onClick={(e) => {
            if (e.target === e.currentTarget) schliessen()
          }}
        >
          {offen ? <div className={styles.blattInhalt}>{feldInhalt}</div> : null}
        </dialog>
      ) : null}
    </div>
  )
}
