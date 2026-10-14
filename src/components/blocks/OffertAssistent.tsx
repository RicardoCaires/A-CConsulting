'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import styles from './OffertAssistent.module.css'

/**
 * Offertanfrage Frage fuer Frage (Ricardo, 14.10.2026: «es soll aber frage
 * fuer frage gestellt werden und nicht ein grosses Formular sein»).
 *
 * **Woher die Fragen kommen.** Aus dem Offertkatalog der Brokerverwaltung
 * (`crm.ac-co.ch/oeffentlich/api/offertkatalog`) — derselbe Katalog, mit dem
 * A&C die Offerten bei den Gesellschaften anfragt. Eine Frage, die dort neu
 * dazukommt, steht ohne Bau auch hier. Der Server laesst die Fragen weg, die
 * auf eine oeffentliche Seite nicht gehoeren (Abschnitt 7 der Hausordnung):
 * Geburtsdaten, Angaben zu Dritten, Ausweisentzug, Gesundheit.
 *
 * **Wohin die Antworten gehen.** Direkt an den eigenen Server in der Schweiz,
 * nicht ueber Cloudflare und nicht per E-Mail. Dort entsteht eine
 * «Website-Anfrage» mit Aufgabe; zum Kunden wird die Person erst, wenn A&C
 * sie anlegt.
 *
 * **Jede Frage ist freiwillig.** «Ueberspringen» geht zur naechsten Frage,
 * «Rest im Gespraech klaeren» direkt zu den Kontaktangaben. Pflicht sind nur
 * Name, Postleitzahl, Ort und E-Mail — ohne sie kann niemand antworten.
 *
 * **Ohne JavaScript** gibt es keinen Assistenten; dann stehen Telefon und
 * E-Mail da (`<noscript>` in der Seite und hier als Rueckfall, wenn der
 * Server nicht antwortet).
 */

type Bedingung = { feld: string; gleich?: string; in?: string[]; enthaelt?: string }
type Feld = {
  key?: string
  abschnitt?: string
  label?: string
  frage?: string | null
  hilfe?: string | null
  typ?: string
  optionen?: string[] | null
  wichtig?: boolean
  wenn?: Bedingung | null
}
type Sparte = { key: string; label: string; felder: Feld[] }
type Katalog = { privat: Sparte[]; unternehmen: Sparte[] }
type Kundentyp = 'privat' | 'unternehmen'
type Wert = string | string[]

type Kontakt = {
  anrede: string
  vorname: string
  nachname: string
  firma: string
  strasse: string
  plz: string
  ort: string
  email: string
  telefon: string
  rueckruf: boolean
  erreichbar: string
  sprache: string
  bemerkung: string
}

const KONTAKT_LEER: Kontakt = {
  anrede: '',
  vorname: '',
  nachname: '',
  firma: '',
  strasse: '',
  plz: '',
  ort: '',
  email: '',
  telefon: '',
  rueckruf: false,
  erreichbar: '',
  sprache: 'de',
  bemerkung: '',
}

const KONTAKT_SCHRITTE = ['k:name', 'k:ort', 'k:erreichbar', 'k:bemerkung'] as const
const SPRACHEN: [string, string][] = [
  ['de', 'Deutsch'],
  ['fr', 'Französisch'],
  ['pt', 'Portugiesisch'],
]

const leer = (v: Wert | undefined) => v === undefined || v === '' || (Array.isArray(v) && v.length === 0)

function sichtbar(f: Feld, werte: Record<string, Wert>) {
  if (!f.wenn) return true
  const w = werte[f.wenn.feld]
  if (f.wenn.gleich !== undefined) return w === f.wenn.gleich
  if (f.wenn.in) return typeof w === 'string' && f.wenn.in.includes(w)
  if (f.wenn.enthaelt !== undefined) return Array.isArray(w) ? w.includes(f.wenn.enthaelt) : String(w ?? '').includes(f.wenn.enthaelt)
  return true
}

const optionenVon = (f: Feld) => (f.optionen && f.optionen.length ? f.optionen : f.typ === 'janein' ? ['ja', 'nein'] : [])
const zeige = (v: Wert) => (Array.isArray(v) ? v.join(', ') : v)

type Props = {
  /** Adresse der Brokerverwaltung, ohne Schraegstrich am Ende. */
  crm: string
  telefon: string
  telefonHref: string
  email: string
  datenschutzHref: string
}

export function OffertAssistent({ crm, telefon, telefonHref, email, datenschutzHref }: Props) {
  const [katalog, setKatalog] = useState<Katalog | null>(null)
  const [ladefehler, setLadefehler] = useState(false)
  const [typ, setTyp] = useState<Kundentyp | null>(null)
  const [sparteKey, setSparteKey] = useState<string | null>(null)
  const [werte, setWerte] = useState<Record<string, Wert>>({})
  const [kontakt, setKontakt] = useState<Kontakt>(KONTAKT_LEER)
  const [schritt, setSchritt] = useState<string>('typ')
  const [verlauf, setVerlauf] = useState<string[]>([])
  const [fehler, setFehler] = useState<Record<string, string>>({})
  const [sendefehler, setSendefehler] = useState<string | null>(null)
  const [sendet, setSendet] = useState(false)
  const [honig, setHonig] = useState('')
  const beginn = useRef<number>(Date.now())
  const titelRef = useRef<HTMLHeadingElement>(null)
  const karteRef = useRef<HTMLDivElement>(null)
  const erstes = useRef(true)

  useEffect(() => {
    let ab = false
    fetch(`${crm}/oeffentlich/api/offertkatalog`)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((k: Katalog) => {
        if (!ab) setKatalog(k)
      })
      .catch(() => {
        if (!ab) setLadefehler(true)
      })
    return () => {
      ab = true
    }
  }, [crm])

  // Nach jedem Schritt steht der Fokus im ersten Eingabefeld, sonst auf der Frage —
  // fuer Tastatur und Vorlesewerkzeuge. Das Feld traegt die Frage als Beschriftung.
  useEffect(() => {
    if (erstes.current) {
      erstes.current = false
      return
    }
    const feld = karteRef.current?.querySelector<HTMLElement>(
      'input[type="text"]:not(#website), input[type="email"], input[type="tel"], textarea',
    )
    ;(feld ?? titelRef.current)?.focus()
  }, [schritt])

  const sparte = useMemo(
    () => (katalog && typ && sparteKey ? katalog[typ].find((s) => s.key === sparteKey) ?? null : null),
    [katalog, typ, sparteKey],
  )

  // Die Fragen, die bei den bisherigen Antworten gestellt werden, samt Abschnitt
  const fragen = useMemo(() => {
    const out: { feld: Feld; abschnitt: string | null }[] = []
    if (!sparte) return out
    let abschnitt: string | null = null
    for (const f of sparte.felder) {
      if (f.abschnitt) {
        abschnitt = f.abschnitt
        continue
      }
      if (f.key && sichtbar(f, werte)) out.push({ feld: f, abschnitt })
    }
    return out
  }, [sparte, werte])

  const ablauf = useMemo(
    () => ['typ', 'sparte', ...fragen.map((x) => `f:${x.feld.key}`), ...KONTAKT_SCHRITTE, 'pruefen'],
    [fragen],
  )
  const position = Math.max(0, ablauf.indexOf(schritt))

  const gehe = useCallback(
    (ziel: string) => {
      setVerlauf((v) => [...v, schritt])
      setFehler({})
      setSendefehler(null)
      setSchritt(ziel)
    },
    [schritt],
  )

  const weiter = useCallback(
    (nachWerten?: Record<string, Wert>) => {
      // Mit den neuen Antworten rechnen: eine Antwort kann Folgefragen ein- oder ausblenden
      const w = nachWerten ?? werte
      const liste: string[] = ['typ', 'sparte']
      if (sparte) {
        for (const f of sparte.felder) if (f.key && !f.abschnitt && sichtbar(f, w)) liste.push(`f:${f.key}`)
      }
      liste.push(...KONTAKT_SCHRITTE, 'pruefen')
      const i = liste.indexOf(schritt)
      gehe(liste[Math.min(i + 1, liste.length - 1)] ?? 'pruefen')
    },
    [werte, sparte, schritt, gehe],
  )

  const zurueck = () => {
    setVerlauf((v) => {
      const neu = [...v]
      const ziel = neu.pop()
      if (ziel) setSchritt(ziel)
      return neu
    })
    setFehler({})
    setSendefehler(null)
  }

  const setzeWert = (key: string, v: Wert) => {
    const neu = { ...werte }
    if (leer(v)) delete neu[key]
    else neu[key] = v
    setWerte(neu)
    return neu
  }

  const k = (feld: keyof Kontakt, v: string | boolean) => setKontakt((alt) => ({ ...alt, [feld]: v }))

  /* ---- Pruefung der Kontaktschritte ------------------------------------ */

  const pruefeKontakt = (s: string): Record<string, string> => {
    const f: Record<string, string> = {}
    if (s === 'k:name') {
      if (typ === 'unternehmen' && !kontakt.firma.trim()) f.firma = 'Bitte geben Sie den Namen der Firma an.'
      if (!kontakt.nachname.trim()) f.nachname = 'Bitte geben Sie Ihren Nachnamen an.'
    }
    if (s === 'k:ort') {
      if (!/^\d{4}$/.test(kontakt.plz.trim())) f.plz = 'Bitte vier Ziffern, zum Beispiel 2558.'
      if (!kontakt.ort.trim()) f.ort = 'Bitte geben Sie den Ort an.'
    }
    if (s === 'k:erreichbar') {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(kontakt.email.trim())) f.email = 'Bitte geben Sie eine gültige E-Mail-Adresse an.'
      if (kontakt.rueckruf && !kontakt.telefon.trim()) f.telefon = 'Für einen Rückruf brauchen wir Ihre Telefonnummer.'
    }
    return f
  }

  const kontaktWeiter = () => {
    const f = pruefeKontakt(schritt)
    setFehler(f)
    if (Object.keys(f).length === 0) weiter()
  }

  /* ---- Absenden -------------------------------------------------------- */

  const absenden = async () => {
    // Alle Kontaktschritte nochmals pruefen; wer zurueckgesprungen ist, landet beim ersten Fehler
    for (const s of KONTAKT_SCHRITTE) {
      const f = pruefeKontakt(s)
      if (Object.keys(f).length) {
        setVerlauf((v) => [...v, schritt])
        setFehler(f)
        setSchritt(s)
        return
      }
    }
    setSendet(true)
    setSendefehler(null)
    const antworten: Record<string, Wert> = {}
    for (const { feld } of fragen) {
      const v = feld.key ? werte[feld.key] : undefined
      if (feld.key && v !== undefined && !leer(v)) antworten[feld.key] = v
    }
    try {
      const r = await fetch(`${crm}/oeffentlich/api/offertanfrage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          kundentyp: typ,
          sparte: sparteKey,
          antworten,
          kontakt: { ...kontakt, rueckruf: kontakt.rueckruf },
          website: honig,
          dauer_ms: Date.now() - beginn.current,
          seite: typeof window !== 'undefined' ? window.location.pathname : null,
        }),
      })
      const j = await r.json().catch(() => ({}))
      if (!r.ok) throw new Error(j?.fehler || 'Die Anfrage konnte nicht gesendet werden.')
      setVerlauf([])
      setSchritt('gesendet')
    } catch (e) {
      setSendefehler(e instanceof Error && e.message !== 'Failed to fetch' ? e.message : 'Die Verbindung zu unserem Server hat nicht geklappt.')
    } finally {
      setSendet(false)
    }
  }

  /* ---- Bausteine ------------------------------------------------------- */

  const rueckfall = (
    <p className={styles.rueckfall}>
      Sie erreichen uns auch direkt: <a href={telefonHref}>{telefon}</a> oder{' '}
      <a href={`mailto:${email}`}>{email}</a>.
    </p>
  )

  const fortschritt = schritt !== 'gesendet' && (
    <div className={styles.fortschritt}>
      <div
        className={styles.balken}
        role="progressbar"
        aria-label="Fortschritt"
        aria-valuemin={0}
        aria-valuemax={ablauf.length - 1}
        aria-valuenow={position}
      >
        <span style={{ width: `${Math.round((position / (ablauf.length - 1)) * 100)}%` }} />
      </div>
      <span className={styles.schrittzahl}>
        {schritt.startsWith('f:') ? `Frage ${fragen.findIndex((x) => `f:${x.feld.key}` === schritt) + 1} von ${fragen.length}` : null}
        {schritt.startsWith('k:') ? `Kontakt ${KONTAKT_SCHRITTE.indexOf(schritt as (typeof KONTAKT_SCHRITTE)[number]) + 1} von ${KONTAKT_SCHRITTE.length}` : null}
        {schritt === 'pruefen' ? 'Letzter Schritt' : null}
      </span>
    </div>
  )

  const zurueckKnopf = verlauf.length > 0 && (
    <button type="button" className={styles.zurueck} onClick={zurueck}>
      <span aria-hidden="true">← </span>Zurück
    </button>
  )

  const titel = (text: string) => (
    <h2 className={styles.frage} ref={titelRef} tabIndex={-1} id="assistent-frage">
      {text}
    </h2>
  )

  const textfeld = (
    id: string,
    label: string,
    wert: string,
    setze: (v: string) => void,
    opt: { typ?: string; auto?: string; pflicht?: boolean; modus?: 'numeric' | 'tel' | 'email' | 'text'; platzhalter?: string } = {},
  ) => (
    <div className={styles.feld}>
      <label htmlFor={id}>
        {label}
        {opt.pflicht ? <span className={styles.pflicht}> (nötig)</span> : null}
      </label>
      <input
        id={id}
        type={opt.typ ?? 'text'}
        value={wert}
        autoComplete={opt.auto}
        inputMode={opt.modus}
        placeholder={opt.platzhalter}
        aria-invalid={fehler[id] ? true : undefined}
        aria-describedby={fehler[id] ? `${id}-fehler` : undefined}
        onChange={(e) => setze(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault()
            kontaktWeiter()
          }
        }}
      />
      {fehler[id] ? (
        <p className={styles.fehler} id={`${id}-fehler`}>
          {fehler[id]}
        </p>
      ) : null}
    </div>
  )

  /* ---- Inhalt je Schritt ----------------------------------------------- */

  let inhalt: React.ReactNode = null

  if (ladefehler) {
    inhalt = (
      <>
        {titel('Die Fragen lassen sich gerade nicht laden.')}
        <p className={styles.hilfe}>Bitte versuchen Sie es später noch einmal.</p>
        {rueckfall}
      </>
    )
  } else if (!katalog) {
    inhalt = <p className={styles.hilfe} role="status">Die Fragen werden geladen …</p>
  } else if (schritt === 'typ') {
    inhalt = (
      <>
        {titel('Für wen wünschen Sie eine Offerte?')}
        <div className={styles.kacheln}>
          {(
            [
              ['privat', 'Für mich privat', 'Fahrzeug, Hausrat, Haftpflicht, Rechtsschutz, Reise, Gebäude'],
              ['unternehmen', 'Für mein Unternehmen', 'UVG, Krankentaggeld, BVG, Haftpflicht, Sachwerte, Cyber, Fahrzeuge'],
            ] as const
          ).map(([wert, t, text]) => (
            <button
              key={wert}
              type="button"
              className={styles.kachel}
              aria-pressed={typ === wert}
              onClick={() => {
                if (typ !== wert) {
                  setSparteKey(null)
                  setWerte({})
                }
                setTyp(wert)
                gehe('sparte')
              }}
            >
              <span className={styles.kachelTitel}>{t}</span>
              <span className={styles.kachelText}>{text}</span>
            </button>
          ))}
        </div>
      </>
    )
  } else if (schritt === 'sparte' && typ) {
    inhalt = (
      <>
        {titel('Wofür wünschen Sie eine Offerte?')}
        <p className={styles.hilfe}>Wählen Sie eine Versicherung. Weitere besprechen wir gerne im Gespräch.</p>
        <div className={styles.kacheln}>
          {katalog[typ].map((s) => (
            <button
              key={s.key}
              type="button"
              className={styles.kachel}
              aria-pressed={sparteKey === s.key}
              onClick={() => {
                if (sparteKey !== s.key) setWerte({})
                setSparteKey(s.key)
                // Die erste Frage der neuen Sparte; die Liste ist erst nach dem Neuzeichnen da
                const erste = s.felder.find((f) => f.key && !f.abschnitt && sichtbar(f, {}))
                gehe(erste?.key ? `f:${erste.key}` : 'k:name')
              }}
            >
              <span className={styles.kachelTitel}>{s.label}</span>
            </button>
          ))}
        </div>
      </>
    )
  } else if (schritt.startsWith('f:')) {
    const eintrag = fragen.find((x) => `f:${x.feld.key}` === schritt)
    if (!eintrag) {
      inhalt = null
    } else {
      const f = eintrag.feld
      const key = f.key as string
      const wert = werte[key]
      const ops = optionenVon(f)
      const id = `frage-${key.replace(/\W/g, '-')}`
      let eingabe: React.ReactNode
      if (f.typ === 'auswahl' || f.typ === 'janein') {
        eingabe = (
          <div className={styles.wahl} role="group" aria-label={f.label}>
            {ops.map((o) => (
              <button
                key={o}
                type="button"
                className={styles.wahlKnopf}
                aria-pressed={wert === o}
                onClick={() => weiter(setzeWert(key, o))}
              >
                {o}
              </button>
            ))}
          </div>
        )
      } else if (f.typ === 'mehrfach') {
        const liste = Array.isArray(wert) ? wert : []
        eingabe = (
          <fieldset className={styles.mehrfach}>
            <legend className={styles.unsichtbar}>{f.label}</legend>
            {ops.map((o) => (
              <label key={o} className={styles.haken}>
                <input
                  type="checkbox"
                  checked={liste.includes(o)}
                  onChange={(e) => setzeWert(key, e.target.checked ? [...liste, o] : liste.filter((x) => x !== o))}
                />
                <span>{o}</span>
              </label>
            ))}
          </fieldset>
        )
      } else if (f.typ === 'textarea') {
        eingabe = (
          <div className={styles.feld}>
            <textarea id={id} aria-labelledby="assistent-frage" rows={4} maxLength={1500} value={typeof wert === 'string' ? wert : ''} onChange={(e) => setzeWert(key, e.target.value)} />
          </div>
        )
      } else {
        const zahl = f.typ === 'zahl' || f.typ === 'betrag' || f.typ === 'jahr'
        eingabe = (
          <div className={styles.feld}>
            <input
              id={id}
              aria-labelledby="assistent-frage"
              type="text"
              maxLength={200}
              inputMode={zahl ? 'decimal' : undefined}
              placeholder={f.typ === 'datum' ? 'TT.MM.JJJJ' : f.typ === 'betrag' ? 'CHF' : f.typ === 'jahr' ? 'JJJJ' : undefined}
              value={typeof wert === 'string' ? wert : ''}
              onChange={(e) => setzeWert(key, e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  weiter()
                }
              }}
            />
          </div>
        )
      }
      const auswahl = f.typ === 'auswahl' || f.typ === 'janein'
      inhalt = (
        <>
          {eintrag.abschnitt ? <p className={styles.abschnitt}>{eintrag.abschnitt}</p> : null}
          {titel(f.frage || f.label || '')}
          {f.hilfe ? <p className={styles.hilfe}>{f.hilfe}</p> : null}
          {eingabe}
          {f.wichtig ? (
            <p className={styles.wichtig}>Diese Angabe brauchen wir für die Offerte. Sie können sie aber auch im Gespräch nennen.</p>
          ) : null}
          <div className={styles.aktionen}>
            {!auswahl ? (
              <button type="button" className={styles.knopf} onClick={() => weiter()}>
                Weiter
              </button>
            ) : null}
            <button type="button" className={styles.leise} onClick={() => weiter(setzeWert(key, ''))}>
              Überspringen
            </button>
            <button type="button" className={styles.leise} onClick={() => gehe('k:name')}>
              Rest im Gespräch klären
            </button>
          </div>
        </>
      )
    }
  } else if (schritt === 'k:name') {
    inhalt = (
      <>
        <p className={styles.abschnitt}>Ihre Kontaktangaben</p>
        {titel(typ === 'unternehmen' ? 'Für welche Firma, und wer ist Ansprechperson?' : 'Wie heissen Sie?')}
        {typ === 'unternehmen'
          ? textfeld('firma', 'Firma', kontakt.firma, (v) => k('firma', v), { pflicht: true, auto: 'organization' })
          : null}
        <div className={styles.wahl} role="group" aria-label="Anrede">
          {['Frau', 'Herr'].map((a) => (
            <button
              key={a}
              type="button"
              className={styles.wahlKnopf}
              aria-pressed={kontakt.anrede === a}
              onClick={() => k('anrede', kontakt.anrede === a ? '' : a)}
            >
              {a}
            </button>
          ))}
        </div>
        <div className={styles.zweispaltig}>
          {textfeld('vorname', 'Vorname', kontakt.vorname, (v) => k('vorname', v), { auto: 'given-name' })}
          {textfeld('nachname', 'Nachname', kontakt.nachname, (v) => k('nachname', v), { pflicht: true, auto: 'family-name' })}
        </div>
      </>
    )
  } else if (schritt === 'k:ort') {
    inhalt = (
      <>
        <p className={styles.abschnitt}>Ihre Kontaktangaben</p>
        {titel(typ === 'unternehmen' ? 'Wo ist Ihr Betrieb?' : 'Wo wohnen Sie?')}
        <p className={styles.hilfe}>Die Prämie hängt oft vom Ort ab.</p>
        {textfeld('strasse', 'Strasse und Nummer', kontakt.strasse, (v) => k('strasse', v), { auto: 'street-address' })}
        <div className={styles.plzOrt}>
          {textfeld('plz', 'PLZ', kontakt.plz, (v) => k('plz', v), { pflicht: true, auto: 'postal-code', modus: 'numeric' })}
          {textfeld('ort', 'Ort', kontakt.ort, (v) => k('ort', v), { pflicht: true, auto: 'address-level2' })}
        </div>
      </>
    )
  } else if (schritt === 'k:erreichbar') {
    inhalt = (
      <>
        <p className={styles.abschnitt}>Ihre Kontaktangaben</p>
        {titel('Wie erreichen wir Sie?')}
        {textfeld('email', 'E-Mail', kontakt.email, (v) => k('email', v), { pflicht: true, typ: 'email', auto: 'email', modus: 'email' })}
        {textfeld('telefon', 'Telefon', kontakt.telefon, (v) => k('telefon', v), { typ: 'tel', auto: 'tel', modus: 'tel', pflicht: kontakt.rueckruf })}
        <label className={styles.haken}>
          <input type="checkbox" checked={kontakt.rueckruf} onChange={(e) => k('rueckruf', e.target.checked)} />
          <span>Bitte rufen Sie mich an.</span>
        </label>
        {kontakt.rueckruf
          ? textfeld('erreichbar', 'Wann erreichen wir Sie am besten?', kontakt.erreichbar, (v) => k('erreichbar', v), { platzhalter: 'zum Beispiel werktags ab 17 Uhr' })
          : null}
      </>
    )
  } else if (schritt === 'k:bemerkung') {
    inhalt = (
      <>
        <p className={styles.abschnitt}>Fast fertig</p>
        {titel('Möchten Sie uns noch etwas mitteilen?')}
        <div className={styles.feld}>
          <label htmlFor="bemerkung">Bemerkung (freiwillig)</label>
          <textarea id="bemerkung" rows={4} maxLength={1500} value={kontakt.bemerkung} onChange={(e) => k('bemerkung', e.target.value)} />
          <p className={styles.hilfe}>Bitte keine Gesundheitsangaben und keine Angaben zu weiteren Personen.</p>
        </div>
        <div className={styles.feld}>
          <span className={styles.feldTitel} id="sprache-titel">
            In welcher Sprache möchten Sie beraten werden?
          </span>
          <div className={styles.wahl} role="group" aria-labelledby="sprache-titel">
            {SPRACHEN.map(([code, name]) => (
              <button key={code} type="button" className={styles.wahlKnopf} aria-pressed={kontakt.sprache === code} onClick={() => k('sprache', code)}>
                {name}
              </button>
            ))}
          </div>
        </div>
      </>
    )
  } else if (schritt === 'pruefen' && sparte) {
    const beantwortet = fragen.filter(({ feld }) => feld.key && !leer(werte[feld.key]))
    inhalt = (
      <>
        <p className={styles.abschnitt}>Zusammenfassung</p>
        {titel(`Ihre Offertanfrage ${sparte.label}`)}
        <dl className={styles.zusammenfassung}>
          <dt>Kontakt</dt>
          <dd>
            {[typ === 'unternehmen' ? kontakt.firma : null, [kontakt.anrede, kontakt.vorname, kontakt.nachname].filter(Boolean).join(' ')]
              .filter(Boolean)
              .join(', ')}
            <br />
            {[kontakt.strasse, `${kontakt.plz} ${kontakt.ort}`].filter((x) => x.trim()).join(', ')}
            <br />
            {[kontakt.email, kontakt.telefon].filter(Boolean).join(' · ')}
            {kontakt.rueckruf ? (
              <>
                <br />
                Rückruf gewünscht{kontakt.erreichbar ? ` (${kontakt.erreichbar})` : ''}
              </>
            ) : null}
          </dd>
          {beantwortet.length ? (
            beantwortet.map(({ feld }) => (
              <div key={feld.key} className={styles.zeile}>
                <dt>{feld.label}</dt>
                <dd>{zeige(werte[feld.key as string] ?? '')}</dd>
              </div>
            ))
          ) : (
            <>
              <dt>Angaben</dt>
              <dd>Alles Weitere klären wir im Gespräch.</dd>
            </>
          )}
        </dl>
        <p className={styles.datenschutz}>
          Ihre Angaben gehen verschlüsselt an unseren eigenen Server in der Schweiz und werden nur verwendet, um Ihre Anfrage
          zu beantworten. Mehr dazu in der <a href={datenschutzHref}>Datenschutzerklärung</a>.
        </p>
        {/* Honigtopf: fuer Menschen unsichtbar, Programme fuellen ihn aus */}
        <div className={styles.honig} aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" type="text" tabIndex={-1} autoComplete="off" value={honig} onChange={(e) => setHonig(e.target.value)} />
        </div>
        {sendefehler ? (
          <div className={styles.sendefehler} role="alert">
            <p>{sendefehler}</p>
            {rueckfall}
          </div>
        ) : null}
        <div className={styles.aktionen}>
          <button type="button" className={styles.knopf} onClick={absenden} disabled={sendet}>
            {sendet ? 'Wird gesendet …' : 'Anfrage senden'}
          </button>
        </div>
      </>
    )
  } else if (schritt === 'gesendet') {
    inhalt = (
      <div className={styles.dank} role="status">
        {titel('Vielen Dank. Ihre Anfrage ist bei uns eingegangen.')}
        <p className={styles.hilfe}>
          Wir melden uns bei Ihnen, in der Regel innerhalb eines Werktags.
        </p>
        {rueckfall}
      </div>
    )
  }

  // Weiter-Knopf der Kontaktschritte
  const kontaktSchritt = schritt.startsWith('k:')

  return (
    <div className={styles.karte} ref={karteRef}>
      {katalog && !ladefehler ? fortschritt : null}
      <div className={styles.inhalt}>
        {inhalt}
      </div>
      {kontaktSchritt ? (
        <div className={styles.aktionen}>
          <button type="button" className={styles.knopf} onClick={kontaktWeiter}>
            Weiter
          </button>
        </div>
      ) : null}
      {schritt !== 'gesendet' && zurueckKnopf ? <div className={styles.fuss}>{zurueckKnopf}</div> : null}
    </div>
  )
}
