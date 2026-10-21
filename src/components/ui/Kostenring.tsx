'use client'

/**
 * Der Kostenring des Kundenportals zum Anklicken – wie `kostenring()` in `public-portal/portal.js` im CRM
 * (21.10.2026, Ricardo: «etwas schöner gestalten und weniger eingepfercht … interaktiver»).
 *
 * Umschalten Jahr / Monat, Zeigen auf einen Bereich hebt ihn im Ring hervor und zeigt ihn in der Mitte,
 * ein Klick klappt die Verträge darin auf; jeder Vertrag führt in der Vorschau zu seiner Seite.
 * Höchstens fünf Bereiche (Corporate Design): die vier grössten, der Rest als «Übrige».
 */

import Image from 'next/image'
import { useEffect, useState } from 'react'

import { chf, Zeichen } from '@/components/ui/PortalAnsicht'

import a from './PortalAnsicht.module.css'
import s from './Kostenring.module.css'

export type RingVertrag = { id: string; name: string; gesellschaft: string; logo: string; betrag: number }
export type RingTexte = {
  titel: string
  titelMonat: string
  proJahr: string
  proMonat: string
  jahr: string
  monat: string
  zeitraum: string
  total: string
  tipp: string
  vertrag: string
  vertraege: string
  uebrige: string
}

const FARBEN = [s.r0, s.r1, s.r2, s.r3, s.r4]

export function Kostenring({
  texte,
  vertraege,
  onVertrag,
}: {
  texte: RingTexte
  vertraege: readonly (RingVertrag & { sparte: string })[]
  onVertrag?: (id: string) => void
}) {
  const [monat, setMonat] = useState(false)
  const [gewaehlt, setGewaehlt] = useState(-1)
  const [vorschau, setVorschau] = useState(-1)
  const [gezeichnet, setGezeichnet] = useState(false)

  // Die Bögen wachsen beim Erscheinen in ihre Länge (unter «Bewegung reduzieren» sofort, siehe CSS)
  useEffect(() => {
    const id = requestAnimationFrame(() => setGezeichnet(true))
    return () => cancelAnimationFrame(id)
  }, [])

  const jeSparte = new Map<string, RingVertrag[]>()
  for (const v of vertraege) jeSparte.set(v.sparte, [...(jeSparte.get(v.sparte) ?? []), v])
  let teile = [...jeSparte].map(([text, liste]) => ({
    text,
    betrag: liste.reduce((t, x) => t + x.betrag, 0),
    liste: [...liste].sort((x, y) => y.betrag - x.betrag),
  }))
  teile.sort((x, y) => y.betrag - x.betrag)
  if (teile.length > 5) {
    const rest = teile.slice(4)
    teile = [
      ...teile.slice(0, 4),
      {
        text: texte.uebrige,
        betrag: rest.reduce((t, x) => t + x.betrag, 0),
        liste: rest.flatMap((x) => x.liste).sort((x, y) => y.betrag - x.betrag),
      },
    ]
  }
  const summe = teile.reduce((t, x) => t + x.betrag, 0)
  if (!summe) return null

  const betrag = (n: number) => chf(monat ? n / 12 : n)
  const pct = (n: number) => Math.round((n / summe) * 100)
  const zeitraum = monat ? texte.proMonat : texte.proJahr
  const aktiv = vorschau >= 0 ? vorschau : gewaehlt
  const mitte = teile[aktiv]
  const waehle = (i: number) => setGewaehlt((g) => (g === i ? -1 : i))
  const zeigen = (i: number) => ({
    onMouseEnter: () => setVorschau(i),
    onMouseLeave: () => setVorschau(-1),
  })

  let versatz = 25
  return (
    <div className={`${a.karte} ${s.kosten}`}>
      <div className={s.kopf}>
        <strong className={a.h2}>{monat ? texte.titelMonat : texte.titel}</strong>
        <span className={s.schalter} role="group" aria-label={texte.zeitraum}>
          <button type="button" aria-pressed={!monat} onClick={() => setMonat(false)}>
            {texte.jahr}
          </button>
          <button type="button" aria-pressed={monat} onClick={() => setMonat(true)}>
            {texte.monat}
          </button>
        </span>
      </div>
      <div className={s.inhalt}>
        <span className={s.ring}>
          <svg viewBox="0 0 42 42" aria-hidden="true" focusable="false">
            <circle className={s.grund} cx="21" cy="21" r="15.9155" fill="none" />
            {teile.map((x, i) => {
              const anteil = (x.betrag / summe) * 100
              const lang = teile.length > 1 ? Math.max(anteil - 1.2, 0.4) : 100
              const el = (
                <circle
                  key={x.text}
                  className={`${s.teil} ${FARBEN[i % FARBEN.length]} ${i === aktiv ? s.aktiv : ''} ${aktiv >= 0 && i !== aktiv ? s.blass : ''}`}
                  cx="21"
                  cy="21"
                  r="15.9155"
                  fill="none"
                  strokeDasharray={gezeichnet ? `${lang} ${100 - lang}` : '0 100'}
                  strokeDashoffset={versatz}
                  onClick={() => waehle(i)}
                  {...zeigen(i)}
                />
              )
              versatz -= anteil
              return el
            })}
          </svg>
          <span className={s.mitte} aria-live="polite">
            <span>{mitte ? mitte.text : texte.total}</span>
            <strong>{betrag(mitte ? mitte.betrag : summe)}</strong>
            <span>{mitte ? `${pct(mitte.betrag)} % · ${zeitraum}` : zeitraum}</span>
          </span>
        </span>
        <ul className={s.legende}>
          {teile.map((x, i) => {
            const offen = i === gewaehlt
            return (
              <li
                key={x.text}
                className={`${s.eintrag} ${offen ? s.offen : ''} ${aktiv >= 0 && i !== aktiv ? s.blass : ''}`}
              >
                <button
                  type="button"
                  className={s.zeile}
                  aria-expanded={offen}
                  onClick={() => waehle(i)}
                  onFocus={() => setVorschau(i)}
                  onBlur={() => setVorschau(-1)}
                  {...zeigen(i)}
                >
                  <span className={`${s.punkt} ${FARBEN[i % FARBEN.length]}`} aria-hidden="true" />
                  <span className={s.name}>
                    {x.text}
                    <span className={s.anzahl}>
                      {x.liste.length} {x.liste.length === 1 ? texte.vertrag : texte.vertraege}
                    </span>
                  </span>
                  <strong className={s.wert}>{betrag(x.betrag)}</strong>
                  <span className={s.pct}>{pct(x.betrag)} %</span>
                  <Zeichen name="pfeil" klasse={s.auf} />
                  <svg className={s.balken} viewBox="0 0 100 4" preserveAspectRatio="none" aria-hidden="true" focusable="false">
                    <rect className={s.balkenGrund} x="0" y="0" width="100" height="4" rx="2" />
                    <rect
                      className={FARBEN[i % FARBEN.length]}
                      x="0"
                      y="0"
                      width={gezeichnet ? Math.max(pct(x.betrag), 2) : 0}
                      height="4"
                      rx="2"
                    />
                  </svg>
                </button>
                {offen ? (
                  <ul className={s.vertraege}>
                    {x.liste.map((v) => (
                      <li key={v.id}>
                        <button type="button" className={s.vertrag} onClick={() => onVertrag?.(v.id)}>
                          <span className={s.logo}>
                            <Image src={`/bilder/gesellschaften/${v.logo}`} alt="" width={352} height={192} unoptimized />
                          </span>
                          <span className={s.vertragText}>
                            <span>{v.name}</span>
                            <span className={s.anzahl}>{v.gesellschaft}</span>
                          </span>
                          <strong>{betrag(v.betrag)}</strong>
                          <Zeichen name="pfeil" klasse={s.pfeil} />
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            )
          })}
        </ul>
      </div>
      <p className={s.fuss}>{texte.tipp}</p>
    </div>
  )
}
