'use client'

import { useRef, useState, type FormEvent } from 'react'

import { steuerCheckliste as T } from '@/content/steuer-checkliste'
import { company } from '@/lib/company'
import { checklisteFuer } from '@/lib/steuer-checkliste'

import styles from './SteuerCheckliste.module.css'

/**
 * Fragebogen → persönliche Checkliste der Unterlagen zur Steuererklärung (16.10.2026).
 *
 * Seit dem 16.10.2026 gegen Kontaktangaben. Ricardo: «damit man die Checkliste erhält muss man Name Vorname
 * Telefonnummer und e-mail angeben und dann wird sie automatisch vom info gesendet und bei uns im CRM wird ein Lead
 * eröffnet als aufgabe um anzurufen für die erledigung der Steuererklärung».
 *
 * Weg der Daten: Browser → Brokerverwaltung (`company.crm`, eigener Server in der Schweiz), nicht über Cloudflare.
 * Gesendet werden nur die Kontaktangaben und die Kennungen der gewählten Antworten; Liste und PDF erzeugt das CRM
 * selbst daraus (Kopie dieser Inhalte per `scripts/steuer-checkliste-kopieren.js`) und versendet sie von
 * info@ac-co.ch. Dort entstehen eine Website-Anfrage und eine Aufgabe «Anrufen: Steuererklärung» in «Rückrufe».
 * Keine Gesundheitsfrage (Hausordnung Abschnitt 7). Honigtopf, Mindestdauer und Bremse wie bei der Offertanfrage.
 */

type Phase = 'start' | number | 'kontakt' | 'gesendet'
type Kontakt = { vorname: string; nachname: string; telefon: string; email: string }

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function SteuerCheckliste({ datenschutzHref }: { datenschutzHref: string }) {
  const [phase, setPhase] = useState<Phase>('start')
  const [antworten, setAntworten] = useState<Record<string, string[]>>({})
  const [kontakt, setKontakt] = useState<Kontakt>({ vorname: '', nachname: '', telefon: '', email: '' })
  const [honig, setHonig] = useState('')
  const [fehler, setFehler] = useState<string | null>(null)
  const [sendet, setSendet] = useState(false)
  const [versendet, setVersendet] = useState(true)
  const beginn = useRef(0)
  const titel = useRef<HTMLHeadingElement>(null)

  const n = T.fragen.length
  const gewaehlt = Object.values(antworten).flat()
  const liste = checklisteFuer(new Set(gewaehlt))

  const gehe = (p: Phase) => {
    setPhase(p)
    setFehler(null)
    // Fokus auf die neue Frage, ohne dass die Seite springt
    requestAnimationFrame(() => titel.current?.focus({ preventScroll: true }))
  }
  const setze = (frage: string, werte: string[]) => setAntworten((a) => ({ ...a, [frage]: werte }))
  const k = (feld: keyof Kontakt, v: string) => setKontakt((x) => ({ ...x, [feld]: v }))

  const absenden = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!kontakt.vorname.trim() || !kontakt.nachname.trim() || !kontakt.telefon.trim() || !kontakt.email.trim()) {
      setFehler(T.fehlerPflicht)
      return
    }
    if (!EMAIL.test(kontakt.email.trim())) {
      setFehler(T.fehlerEmail)
      return
    }
    setSendet(true)
    setFehler(null)
    try {
      const r = await fetch(`${company.crm}/oeffentlich/api/checkliste`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          kontakt,
          antworten: gewaehlt,
          website: honig,
          dauer_ms: Date.now() - beginn.current,
          seite: window.location.pathname,
        }),
      })
      const j = (await r.json().catch(() => ({}))) as { fehler?: string; versendet?: boolean }
      if (!r.ok) throw new Error(j.fehler || T.fehlerServer)
      setVersendet(j.versendet !== false)
      gehe('gesendet')
    } catch (err) {
      setFehler(err instanceof Error && err.message !== 'Failed to fetch' ? err.message : T.fehlerServer)
    } finally {
      setSendet(false)
    }
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
          <button
            type="button"
            className={styles.knopf}
            onClick={() => {
              beginn.current = Date.now()
              gehe(0)
            }}
          >
            {T.start} <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    )
  }

  /* ---- Kontaktangaben ------------------------------------------------------- */
  if (phase === 'kontakt') {
    const feld = (id: keyof Kontakt, label: string, typ: string, auto: string) => (
      <div className={styles.feld}>
        <label htmlFor={`ck-${id}`}>{label}</label>
        <input
          id={`ck-${id}`}
          type={typ}
          autoComplete={auto}
          required
          maxLength={id === 'email' ? 160 : 80}
          value={kontakt[id]}
          onChange={(e) => k(id, e.target.value)}
        />
      </div>
    )
    return (
      <div className={styles.karte}>
        <div className={styles.kopf}>
          <span className={styles.stand}>{T.ergebnisTitel}</span>
          <div className={styles.fortschritt} aria-hidden="true">
            <span style={{ width: '100%' }} />
          </div>
        </div>
        <form key="kontakt" className={styles.einblenden} onSubmit={absenden} noValidate>
          <h3 ref={titel} tabIndex={-1} className={styles.frage}>
            {T.kontaktTitel}
          </h3>
          <p className={styles.satz}>{T.kontaktSatz}</p>
          <div className={styles.felder}>
            {feld('vorname', T.vorname, 'text', 'given-name')}
            {feld('nachname', T.nachname, 'text', 'family-name')}
            {feld('telefon', T.telefon, 'tel', 'tel')}
            {feld('email', T.email, 'email', 'email')}
          </div>
          {/* Honigtopf: für Menschen unsichtbar, Programme füllen ihn aus */}
          <div className={styles.honig} aria-hidden="true">
            <label htmlFor="ck-website">Website</label>
            <input id="ck-website" type="text" tabIndex={-1} autoComplete="off" value={honig} onChange={(e) => setHonig(e.target.value)} />
          </div>
          <p className={styles.datenschutz}>
            {T.datenschutzVor}
            <a href={datenschutzHref}>{T.datenschutz}</a>.
          </p>
          {fehler ? (
            <p className={styles.fehler} role="alert">
              {fehler}{' '}
              <a href={`tel:${company.phoneE164}`}>{company.phone}</a>
            </p>
          ) : null}
          <div className={styles.aktionen}>
            <button type="submit" className={styles.knopf} disabled={sendet}>
              {sendet ? T.sendet : T.senden} <span aria-hidden="true">→</span>
            </button>
            <button type="button" className={styles.leise} onClick={() => gehe(n - 1)}>
              ← {T.zurueck}
            </button>
          </div>
        </form>
      </div>
    )
  }

  /* ---- Bestätigung ---------------------------------------------------------- */
  if (phase === 'gesendet') {
    return (
      <div className={styles.karte}>
        <div key="gesendet" className={styles.einblenden} role="status">
          <div className={styles.dankeKopf}>
            <span className={styles.dankeHaken} aria-hidden="true">
              ✓
            </span>
            <div>
              <h3 ref={titel} tabIndex={-1} className={styles.frage}>
                {versendet ? T.dankeTitel : T.dankeTitelOhneMail}
              </h3>
              <p className={styles.satz}>{versendet ? T.dankeSatz : T.dankeSatzOhneMail}</p>
            </div>
          </div>
          <p className={styles.listeTitel}>{T.dankeListe}</p>
          <div className={styles.gruppen}>
            {liste.map((g) => (
              <div key={g.titel} className={styles.gruppe}>
                <p className={styles.gruppeTitel}>{g.titel}</p>
                <ul>
                  {g.unterlagen.map((u) => (
                    <li key={u}>{u}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  /* ---- Fragen --------------------------------------------------------------- */
  const i = phase
  const f = T.fragen[i]
  if (!f) return null
  const werte = antworten[f.id] ?? []
  const weiter = () => gehe(i + 1 < n ? i + 1 : 'kontakt')

  return (
    <div className={styles.karte}>
      <div className={styles.kopf}>
        <span className={styles.stand}>
          {T.frageVon} {i + 1} {T.von} {n}
        </span>
        <div className={styles.fortschritt} aria-hidden="true">
          <span style={{ width: `${((i + 1) / (n + 1)) * 100}%` }} />
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
