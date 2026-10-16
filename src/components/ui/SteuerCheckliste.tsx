'use client'

import { useRef, useState } from 'react'

import { steuerCheckliste as T } from '@/content/steuer-checkliste'
import { company } from '@/lib/company'
import { checklistePdf } from '@/lib/pdf-checkliste'
import { checklisteFuer } from '@/lib/steuer-checkliste'

import styles from './SteuerCheckliste.module.css'

/**
 * Fragebogen → persönliche Checkliste der Unterlagen zur Steuererklärung (16.10.2026). Ricardo: «einen kurzen
 * Fragebogen ausfüllen … eine checkliste erstellen mit den unterlagen … heruntergeladen werden oder per Mail
 * versendet werden».
 *
 * Alles geschieht im Browser: Das PDF baut `src/lib/pdf-checkliste.ts`, die E-Mail öffnet das eigene Mailprogramm
 * (`mailto:`) mit der Liste – die Empfängeradresse wählt man dort selbst. Über den Server von A&C läuft nichts,
 * gespeichert wird nichts. Frage für Frage wie die Offertanfrage, mit fliessenden Übergängen.
 */

type Phase = 'start' | number | 'ergebnis'

const fuss = `${company.legalName} · ${company.address.street} · ${company.address.postalCode} ${company.address.city} · ${company.email} · ${company.phone}`

export function SteuerCheckliste() {
  const [phase, setPhase] = useState<Phase>('start')
  const [antworten, setAntworten] = useState<Record<string, string[]>>({})
  const [abgehakt, setAbgehakt] = useState<Set<string>>(new Set())
  const [laedt, setLaedt] = useState(false)
  const titel = useRef<HTMLHeadingElement>(null)

  const n = T.fragen.length
  const gewaehlt = new Set(Object.values(antworten).flat())
  const liste = checklisteFuer(gewaehlt)

  const gehe = (p: Phase) => {
    setPhase(p)
    // Fokus auf die neue Frage, ohne dass die Seite springt
    requestAnimationFrame(() => titel.current?.focus({ preventScroll: true }))
  }

  const setze = (frage: string, werte: string[]) => setAntworten((a) => ({ ...a, [frage]: werte }))

  const pdf = async () => {
    setLaedt(true)
    try {
      let logo: Uint8Array | null = null
      try {
        const r = await fetch('/logo/ac-logo-druck.jpg')
        if (r.ok) logo = new Uint8Array(await r.arrayBuffer())
      } catch {
        logo = null
      }
      const blob = checklistePdf({
        kopf: T.pdfKopf,
        untertitel: T.pdfUntertitel,
        titel: T.pdfTitel,
        satz: T.pdfSatz,
        gruppen: liste,
        fuss,
        logo,
        logoMass: { b: 1064, h: 234 },
      })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'Checkliste-Steuererklaerung.pdf'
      document.body.append(a)
      a.click()
      a.remove()
      setTimeout(() => URL.revokeObjectURL(url), 2000)
    } finally {
      setLaedt(false)
    }
  }

  const mailHref = () => {
    const zeilen = [T.mailEinleitung, '']
    for (const g of liste) {
      zeilen.push(g.titel.toUpperCase())
      for (const u of g.unterlagen) zeilen.push(`[ ] ${u}`)
      zeilen.push('')
    }
    zeilen.push(fuss)
    return `mailto:?subject=${encodeURIComponent(T.mailBetreff)}&body=${encodeURIComponent(zeilen.join('\n'))}`
  }

  /* ---- Start ---------------------------------------------------------------- */
  if (phase === 'start') {
    return (
      <div className={styles.karte}>
        <div className={styles.start}>
          <div>
            <h3 className={styles.frage}>{T.ergebnisTitel}</h3>
            <p className={styles.satz}>{T.einleitung}</p>
          </div>
          <button type="button" className={styles.knopf} onClick={() => gehe(0)}>
            {T.start} <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    )
  }

  /* ---- Ergebnis ------------------------------------------------------------- */
  if (phase === 'ergebnis') {
    const total = liste.reduce((t, g) => t + g.unterlagen.length, 0)
    return (
      <div className={styles.karte}>
        <div key="ergebnis" className={styles.einblenden}>
          <div className={styles.ergebnisKopf}>
            <div>
              <h3 ref={titel} tabIndex={-1} className={styles.frage}>
                {T.ergebnisTitel}
              </h3>
              <p className={styles.satz}>{T.ergebnisSatz}</p>
            </div>
            <span className={styles.zaehler} aria-live="polite">
              {abgehakt.size} / {total}
            </span>
          </div>
          <div className={styles.fortschritt} aria-hidden="true">
            <span style={{ width: `${total ? (abgehakt.size / total) * 100 : 0}%` }} />
          </div>
          <div className={styles.gruppen}>
            {liste.map((g) => (
              <fieldset key={g.titel} className={styles.gruppe}>
                <legend>{g.titel}</legend>
                {g.unterlagen.map((u) => (
                  <label key={u} className={styles.punkt}>
                    <input
                      type="checkbox"
                      checked={abgehakt.has(u)}
                      onChange={(e) =>
                        setAbgehakt((s) => {
                          const neu = new Set(s)
                          if (e.target.checked) neu.add(u)
                          else neu.delete(u)
                          return neu
                        })
                      }
                    />
                    <span>{u}</span>
                  </label>
                ))}
              </fieldset>
            ))}
          </div>
          <div className={styles.aktionen}>
            <button type="button" className={styles.knopf} onClick={pdf} disabled={laedt}>
              {T.pdf} <span aria-hidden="true">↓</span>
            </button>
            <a className={`${styles.knopf} ${styles.knopfZweit}`} href={mailHref()}>
              {T.mail} <span aria-hidden="true">→</span>
            </a>
            <button
              type="button"
              className={styles.leise}
              onClick={() => {
                setAntworten({})
                setAbgehakt(new Set())
                gehe(0)
              }}
            >
              {T.neu}
            </button>
          </div>
          <p className={styles.hinweis}>{T.hinweis}</p>
        </div>
      </div>
    )
  }

  /* ---- Fragen --------------------------------------------------------------- */
  const i = phase
  const f = T.fragen[i]
  if (!f) return null
  const werte = antworten[f.id] ?? []
  const weiter = () => gehe(i + 1 < n ? i + 1 : 'ergebnis')

  return (
    <div className={styles.karte}>
      <div className={styles.kopf}>
        <span className={styles.stand}>
          {T.frageVon} {i + 1} {T.von} {n}
        </span>
        <div className={styles.fortschritt} aria-hidden="true">
          <span style={{ width: `${((i + 1) / n) * 100}%` }} />
        </div>
      </div>
      <div key={f.id} className={styles.einblenden}>
        <h3 ref={titel} tabIndex={-1} className={styles.frage} id={`ck-${f.id}`}>
          {f.titel}
        </h3>
        {f.mehrfach ? <p className={styles.satz}>{T.mehrere}</p> : null}
        <div className={styles.wahl} role="group" aria-labelledby={`ck-${f.id}`}>
          {f.optionen.map((o) => {
            const an = werte.includes(o.id)
            return (
              <button
                key={o.id}
                type="button"
                aria-pressed={an}
                className={styles.option}
                onClick={() => {
                  if (f.mehrfach) setze(f.id, an ? werte.filter((w) => w !== o.id) : [...werte, o.id])
                  else {
                    setze(f.id, [o.id])
                    weiter()
                  }
                }}
              >
                {f.mehrfach ? <span className={styles.haken} aria-hidden="true" /> : null}
                {o.text}
              </button>
            )
          })}
        </div>
        <div className={styles.aktionen}>
          {f.mehrfach ? (
            <button type="button" className={styles.knopf} onClick={weiter}>
              {werte.length ? T.weiter : T.keine} <span aria-hidden="true">→</span>
            </button>
          ) : null}
          <button type="button" className={styles.leise} onClick={() => gehe(i === 0 ? 'start' : i - 1)}>
            ← {T.zurueck}
          </button>
        </div>
      </div>
    </div>
  )
}
