'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'

import { chfGanz } from '@/lib/vorsorge-kennzahlen'

import styles from './Buehne.module.css'

/**
 * Die Bühne des Startseiten-Einstiegs (23.10.2026). Fünf Szenen wechseln alle sieben Sekunden; der aktive Reiter
 * füllt sich dabei von links nach rechts grün. Zeigen oder Tastaturfokus auf der Bühne hält an, ein Reiter springt
 * zu seiner Szene, ein Klick auf eine Szene führt an ihre Stelle der Website. Unter «Bewegung reduzieren» wechselt
 * nichts von selbst und alles steht sofort da. Die Bewegung innerhalb der Szenen ist reines CSS.
 */

const DAUER = 7000

type Titel = { vor: string; akzent: string; nach?: string }
type Segment = { name: string; anteil: number; start: number; farbe: string }

export type BuehneDaten = {
  themenzeile: string
  titel: Titel
  vorteile: readonly string[]
  kontakt: { href: string; text: string }
  buehne: string
  reiter: { portal: string; versicherungen: string; steuern: string; offerte: string; blog: string }
  portal: {
    href: string
    titel: string
    satz: string
    ring: Segment[]
    zeilen: { name: string; breite: number; farbe: string }[]
    funktionen: string[]
    knopf: string
  }
  versicherungen: {
    href: string
    titel: Titel
    sie: string
    ac: string
    offerten: string
    empfehlung: string
    punkte: readonly string[]
    knopf: string
    gesellschaften: { bild: string; name: string }[]
  }
  steuern: {
    href: string
    titel: Titel
    listentitel: string
    kostenlos: string
    unterlagen: string[]
    schritte: readonly { fett?: string; text: string }[]
    knopf: string
  }
  offerte: { href: string; titel: string; frage: string; optionen: readonly string[]; satz: string; knopf: string }
  blog: {
    href: string
    marke: string
    datum: string
    datumIso: string
    titel: string
    kurz: string
    zahlen: { titel: string; von: number; bis: number }[]
    vorjahr: string
    imBeitrag: string
    inhalte: string[]
    knopf: string
  } | null
}

function Ueberschrift({ titel, className }: { titel: Titel; className: string }) {
  return (
    <h3 className={className}>
      {titel.vor}
      <em>{titel.akzent}</em>
      {titel.nach}
    </h3>
  )
}

function Knopf({ text }: { text: string }) {
  return (
    <span className={styles.mehr}>
      <span>{text}</span>
      <span aria-hidden="true">→</span>
    </span>
  )
}

/** Betrag, der von `von` auf `bis` läuft, sobald die Szene sichtbar wird. */
function Zahl({ von, bis, an }: { von: number; bis: number; an: boolean }) {
  const [wert, setWert] = useState(bis)
  useEffect(() => {
    if (!an || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setWert(bis)
      return
    }
    let rahmen = 0
    const t0 = performance.now() + 700
    const schritt = (t: number) => {
      const p = Math.min(1, Math.max(0, (t - t0) / 1400))
      setWert(von + (bis - von) * (1 - Math.pow(1 - p, 3)))
      if (p < 1) rahmen = requestAnimationFrame(schritt)
    }
    setWert(von)
    rahmen = requestAnimationFrame(schritt)
    return () => cancelAnimationFrame(rahmen)
  }, [an, von, bis])
  return <>{chfGanz(wert)}</>
}

const verzoegert = (s: number) => ({ '--v': s }) as React.CSSProperties

export function Buehne({ daten: d }: { daten: BuehneDaten }) {
  const szenen = (['portal', 'versicherungen', 'steuern', 'offerte', 'blog'] as const).filter((k) => k !== 'blog' || d.blog)
  const [jetzt, setJetzt] = useState(0)
  const [lauf, setLauf] = useState(0) // zählt jeden Wechsel, damit die Füllung des Reiters neu beginnt
  const [halt, setHalt] = useState(false)
  const [still, setStill] = useState(false)
  const rest = useRef(DAUER) // verbleibende Zeit der aktuellen Szene
  const seit = useRef(0) // wann die Uhr zuletzt losgelaufen ist
  const gehalten = useRef(false)

  useEffect(() => {
    const m = window.matchMedia('(prefers-reduced-motion: reduce)')
    const pruefen = () => setStill(m.matches)
    pruefen()
    m.addEventListener('change', pruefen)
    return () => m.removeEventListener('change', pruefen)
  }, [])

  const zeige = useCallback((n: number) => {
    rest.current = DAUER
    setJetzt(n)
    setLauf((x) => x + 1)
  }, [])

  // Weiterschalten: läuft, solange niemand auf der Bühne zeigt oder sie fokussiert hat. Jede Szene bekommt die volle
  // Dauer; nur ein Anhalten zieht die schon gelaufene Zeit ab, damit Uhr und Füllung des Reiters gleich bleiben.
  useEffect(() => {
    if (halt || still) return
    seit.current = performance.now()
    const uhr = window.setTimeout(() => zeige((jetzt + 1) % szenen.length), rest.current)
    return () => window.clearTimeout(uhr)
  }, [jetzt, lauf, halt, still, szenen.length, zeige])

  const anhalten = () => {
    if (gehalten.current) return
    gehalten.current = true
    rest.current = Math.max(300, rest.current - (performance.now() - seit.current))
    setHalt(true)
  }
  const weiterlaufen = () => {
    if (!gehalten.current) return
    gehalten.current = false
    setHalt(false)
  }

  const an = (k: (typeof szenen)[number]) => szenen[jetzt] === k
  const szene = (k: (typeof szenen)[number]) => ({
    className: `${styles.szene} ${an(k) ? styles.an : ''}`,
    id: `szene-${k}`,
    role: 'tabpanel',
    'aria-labelledby': `reiter-${k}`,
    'aria-hidden': !an(k),
    tabIndex: an(k) ? 0 : -1,
    inert: !an(k),
  })

  return (
    <section className={styles.einstieg} id="seitenkopf" aria-labelledby="seitenkopf-titel">
      <div className={`ac-container ${styles.raster}`}>
        <div className={styles.links}>
          <p className={styles.themenzeile}>{d.themenzeile}</p>
          <h1 id="seitenkopf-titel" className={styles.titel}>
            {d.titel.vor}
            <em>{d.titel.akzent}</em>
            {d.titel.nach}
          </h1>
          <ul className={styles.vorteile}>
            {d.vorteile.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
          <a className={styles.knopfHaupt} href={d.kontakt.href}>
            {d.kontakt.text} <span aria-hidden="true">→</span>
          </a>
        </div>

        <div
          className={styles.buehne}
          aria-label={d.buehne}
          role="region"
          onMouseEnter={anhalten}
          onMouseLeave={weiterlaufen}
          onFocus={anhalten}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node)) weiterlaufen()
          }}
        >
          <div className={styles.flaeche}>
            {/* 1 Kundenportal */}
            <a href={d.portal.href} {...szene('portal')}>
              <div className={styles.blatt}>
                <p className={`${styles.kartentitel} ${styles.ani}`}>
                  <Image src="/logo/ac-bildmarke.png" alt="" width={24} height={24} />
                  {d.portal.titel}
                </p>
                <p className={`${styles.satz} ${styles.ani}`} style={verzoegert(0.15)}>
                  {d.portal.satz}
                </p>
                <div className={styles.portalzeile}>
                  <svg className={styles.ring} viewBox="0 0 120 120" aria-hidden="true">
                    <g transform="rotate(-90 60 60)">
                      {d.portal.ring.map((s, i) => (
                        <circle
                          key={s.name}
                          cx="60"
                          cy="60"
                          r="46"
                          pathLength={100}
                          style={{
                            stroke: `var(--ac-color-${s.farbe})`,
                            strokeDasharray: `${Math.max(0, s.anteil - 1.2)} 100`,
                            strokeDashoffset: -s.start,
                            animationDelay: `${0.5 + i * 0.12}s`,
                          }}
                        />
                      ))}
                    </g>
                  </svg>
                  <ul className={styles.zeilen} aria-hidden="true">
                    {d.portal.zeilen.map((z, i) => (
                      <li key={z.name} className={styles.ani} style={verzoegert(0.6 + i * 0.12)}>
                        <i style={{ background: `var(--ac-color-${z.farbe})` }} />
                        {z.name}
                        <b>
                          <span style={{ width: `${z.breite}%`, background: `var(--ac-color-${z.farbe})`, animationDelay: `${0.8 + i * 0.12}s` }} />
                        </b>
                      </li>
                    ))}
                  </ul>
                </div>
                <ul className={styles.funktionen}>
                  {d.portal.funktionen.map((f, i) => (
                    <li key={f} className={`${styles.ani} ${i === 2 ? styles.gruen : ''}`} style={verzoegert(1.2 + i * 0.15)}>
                      <span className={styles.zeichen} aria-hidden="true">
                        <Zeichen art={i} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <span className={styles.ani} style={verzoegert(1.8)}>
                  <Knopf text={d.portal.knopf} />
                </span>
              </div>
            </a>

            {/* 2 Versicherungen */}
            <a href={d.versicherungen.href} {...szene('versicherungen')}>
              <div className={styles.blatt}>
                <Ueberschrift titel={d.versicherungen.titel} className={`${styles.h3} ${styles.ani}`} />
                <div className={styles.achse}>
                  <div className={`${styles.knotenSie} ${styles.ani}`} style={verzoegert(0.3)}>
                    <span className={styles.kopfKreis} aria-hidden="true">
                      <svg viewBox="0 0 24 24">
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
                      </svg>
                    </span>
                    <b>{d.versicherungen.sie}</b>
                  </div>
                  <span className={`${styles.strecke} ${styles.streckeGruen}`} aria-hidden="true">
                    <em className={styles.empf}>{d.versicherungen.empfehlung}</em>
                  </span>
                  <div className={`${styles.knotenAc} ${styles.ani}`} style={verzoegert(0.5)}>
                    <span className={styles.hubKreis} aria-hidden="true">
                      <Image src="/logo/ac-bildmarke.png" alt="" width={46} height={46} />
                    </span>
                    <b>{d.versicherungen.ac}</b>
                  </div>
                  <span className={`${styles.strecke} ${styles.streckeZwei}`} aria-hidden="true">
                    <em className={styles.anfr}>{d.versicherungen.offerten}</em>
                  </span>
                  <ul className={styles.logos}>
                    {d.versicherungen.gesellschaften.map((g, i) => (
                      <li key={g.bild} className={styles.ani} style={verzoegert(1.0 + i * 0.1)}>
                        <Image src={`/bilder/${g.bild}.webp`} alt={g.name} width={400} height={220} />
                      </li>
                    ))}
                  </ul>
                </div>
                <ul className={styles.punkte}>
                  {d.versicherungen.punkte.map((p, i) => (
                    <li key={p} className={styles.ani} style={verzoegert(2.6 + i * 0.15)}>
                      {p}
                    </li>
                  ))}
                </ul>
                <span className={styles.ani} style={verzoegert(3.1)}>
                  <Knopf text={d.versicherungen.knopf} />
                </span>
              </div>
            </a>

            {/* 3 Steuern */}
            <a href={d.steuern.href} {...szene('steuern')}>
              <div className={styles.blatt}>
                <Ueberschrift titel={d.steuern.titel} className={`${styles.h3} ${styles.ani}`} />
                <div className={styles.steuer}>
                  <div className={`${styles.liste} ${styles.ani}`} style={verzoegert(0.3)}>
                    <p className={styles.listenkopf}>
                      {d.steuern.listentitel} <span>{d.steuern.kostenlos}</span>
                    </p>
                    <ul>
                      {d.steuern.unterlagen.map((u, i) => (
                        <li key={u}>
                          <i aria-hidden="true" style={{ '--a': 1.0 + i * 0.4 } as React.CSSProperties} />
                          {u}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <ol className={styles.ablauf}>
                    {d.steuern.schritte.map((s, i) => (
                      <li key={s.text} className={styles.ani} style={verzoegert(0.6 + i * 0.3)}>
                        <span>
                          {s.fett ? <strong>{s.fett} </strong> : null}
                          {s.text}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
                <span className={styles.ani} style={verzoegert(2.2)}>
                  <Knopf text={d.steuern.knopf} />
                </span>
              </div>
            </a>

            {/* 4 Offerte online */}
            <a href={d.offerte.href} {...szene('offerte')}>
              <div className={styles.blatt}>
                <p className={`${styles.kartentitel} ${styles.ani}`}>
                  <Image src="/logo/ac-bildmarke.png" alt="" width={24} height={24} />
                  {d.offerte.titel}
                </p>
                <div className={styles.balken} aria-hidden="true">
                  <span />
                </div>
                <p className={`${styles.frage} ${styles.ani}`} style={verzoegert(0.2)}>
                  {d.offerte.frage}
                </p>
                <ul className={styles.optionen}>
                  {d.offerte.optionen.map((o, i) => (
                    <li key={o} className={`${styles.ani} ${i === 0 ? styles.gewaehlt : ''}`} style={verzoegert(0.4 + i * 0.1)}>
                      {o}
                    </li>
                  ))}
                </ul>
                <p className={`${styles.satz} ${styles.ani}`} style={verzoegert(1.8)}>
                  {d.offerte.satz}
                </p>
                <span className={styles.ani} style={verzoegert(2.2)}>
                  <Knopf text={d.offerte.knopf} />
                </span>
              </div>
            </a>

            {/* 5 Blog: immer der neueste Beitrag */}
            {d.blog ? (
              <a href={d.blog.href} {...szene('blog')}>
                <div className={styles.blatt}>
                  <p className={`${styles.marke} ${styles.ani}`}>
                    {d.blog.marke} <time dateTime={d.blog.datumIso}>{d.blog.datum}</time>
                  </p>
                  <h3 className={`${styles.h3} ${styles.blogTitel} ${styles.ani}`} style={verzoegert(0.15)}>
                    {d.blog.titel}
                  </h3>
                  {d.blog.zahlen.length ? (
                    <ul className={styles.zahlen}>
                      {d.blog.zahlen.map((z, i) => (
                        <li key={z.titel} className={styles.ani} style={verzoegert(0.45 + i * 0.15)}>
                          <span className={styles.zahlName}>
                            {z.titel}
                            <small>
                              {d.blog?.vorjahr}: {chfGanz(z.von)} <em>+{chfGanz(z.bis - z.von).replace('CHF ', '')}</em>
                            </small>
                          </span>
                          <b>
                            <Zahl von={z.von} bis={z.bis} an={an('blog')} />
                          </b>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <>
                      <p className={`${styles.satz} ${styles.ani}`} style={verzoegert(0.4)}>
                        {d.blog.kurz}
                      </p>
                      {d.blog.inhalte.length ? (
                        <div className={`${styles.inhalte} ${styles.ani}`} style={verzoegert(0.7)}>
                          <p>{d.blog.imBeitrag}</p>
                          <ul>
                            {d.blog.inhalte.map((z) => (
                              <li key={z}>{z}</li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </>
                  )}
                  <span className={styles.ani} style={verzoegert(2.0)}>
                    <Knopf text={d.blog.knopf} />
                  </span>
                </div>
              </a>
            ) : null}
          </div>

          <div className={styles.reiter} role="tablist" aria-label={d.buehne}>
            {szenen.map((k, i) => (
              <button
                key={k}
                type="button"
                role="tab"
                id={`reiter-${k}`}
                aria-controls={`szene-${k}`}
                aria-selected={i === jetzt}
                className={i === jetzt ? styles.reiterAn : undefined}
                onClick={() => zeige(i)}
              >
                {d.reiter[k]}
                <i key={`${k}-${i === jetzt ? lauf : 0}`} aria-hidden="true" style={{ animationPlayState: halt ? 'paused' : 'running', animationDuration: `${DAUER}ms` }}>
                  <span>{d.reiter[k]}</span>
                </i>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Zeichen({ art }: { art: number }) {
  if (art === 0)
    return (
      <svg viewBox="0 0 24 24">
        <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
      </svg>
    )
  if (art === 1)
    return (
      <svg viewBox="0 0 24 24">
        <rect x="3.5" y="5" width="17" height="15" rx="2" />
        <path d="M3.5 10h17M8 3v4M16 3v4" />
      </svg>
    )
  return (
    <svg viewBox="0 0 24 24">
      <path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z" />
      <path d="M12 8v5M12 16.5v.01" />
    </svg>
  )
}
