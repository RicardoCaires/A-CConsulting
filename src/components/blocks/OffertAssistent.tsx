'use client'

import { Fragment, useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'

import { Suchauswahl } from '@/components/ui/Suchauswahl'
import { autos, motorraeder } from '@/content/fahrzeuge'
import { listen } from '@/content/offerte-darstellung'
import { offerteAssistentTexte as textDe } from '@/content/offerte-assistent-texte'
import { offerteAssistentTexte as textFr } from '@/content/fr/offerte-assistent-texte'
import { offerteAssistentTexte as textPt } from '@/content/pt/offerte-assistent-texte'
import type { Locale } from '@/i18n/config'
import { darstellungVon, ohneKlammern, optionTextVon } from '@/lib/offerte'
import { nachSprache } from '@/lib/sprache'

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
 * **Darstellung (15.10.2026)** – Ricardo: keine Begriffe in Klammern, Texteingabe nur, wo es
 * nicht anders geht, Fahrzeug suchen statt tippen. Wie jede Frage erscheint, steht in
 * `src/content/offerte-darstellung.ts`: eigener Titel, Knöpfe statt Eingabe, Suchliste mit
 * eigener Eingabe. Der Katalog im CRM bleibt unverändert; gesendet wird lesbarer Text.
 *
 * **Ohne JavaScript** gibt es keinen Assistenten; dann stehen Telefon und
 * E-Mail da (`<noscript>` in der Seite und hier als Rueckfall, wenn der
 * Server nicht antwortet).
 *
 * **Sprachen (16.10.2026).** Der Katalog kommt in der Sprache der Seite (`?sprache=`); bei FR/PT liefert der
 * Server zu jeder Auswahl `optionenText` in gleicher Reihenfolge. Angezeigt wird die Übersetzung, **gesendet
 * immer der deutsche Katalogwert** – ebenso bei Anrede und Erreichbarkeit. Die festen Texte stehen in
 * `src/content/offerte-assistent-texte.ts` und den Übersetzungen unter `src/content/fr|pt/`.
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
  /** Übersetzte Anzeige zu `optionen` (gleiche Länge und Reihenfolge), nur bei FR/PT. */
  optionenText?: string[] | null
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
const SPRACHEN = ['de', 'fr', 'pt'] as const
/** Gesendet wird immer der deutsche Wortlaut; die Übersetzung steht an derselben Stelle der Liste. */
const ANREDEN = textDe.anreden
const ERREICHBAR = textDe.erreichbar

/** Platzhalter `{name}` in einem Text füllen. */
const fuelle = (text: string, werte: Record<string, string | number>) =>
  text.replace(/\{(\w+)\}/g, (m, k: string) => (k in werte ? String(werte[k]) : m))

/** Platzhalter `{name}` durch Elemente ersetzen (Links mitten im Satz). */
const mitElementen = (text: string, teile: Record<string, ReactNode>) =>
  text.split(/(\{\w+\})/).map((stueck, i) => {
    const k = /^\{(\w+)\}$/.exec(stueck)?.[1]
    return <Fragment key={i}>{k && k in teile ? teile[k] : stueck}</Fragment>
  })

/** Deutscher Wert → Anzeige in der Sprache der Seite (gleiche Stelle in der Liste). */
const uebersetzeWert = (deutsch: readonly string[], anzeige: readonly string[], v: string) => anzeige[deutsch.indexOf(v)] ?? v

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

/** ISO-Datum der Datumswahl als 31.12.2026 – so liest es das Offertentool. */
const datumText = (iso: string) => {
  const [j, m, t] = iso.split('-')
  return t ? `${t}.${m}.${j}` : ''
}
const JAHRE = Array.from({ length: new Date().getFullYear() - 1899 }, (_, i) => String(new Date().getFullYear() - i))

type Props = {
  /** Sprache der Seite: Katalog, Texte und vorgewählte Beratungssprache. */
  locale: Locale
  /** Adresse der Brokerverwaltung, ohne Schraegstrich am Ende. */
  crm: string
  telefon: string
  telefonHref: string
  email: string
  datenschutzHref: string
}

export function OffertAssistent({ locale, crm, telefon, telefonHref, email, datenschutzHref }: Props) {
  const t = nachSprache(locale, { de: textDe, fr: textFr, pt: textPt })

  /** Anzeige einer Option: Übersetzung des Servers, sonst eigene Darstellung ohne Klammern; gesendet wird der Katalogwert. */
  const optionAnzeige = (f: Feld, o: string) => {
    const i = f.optionen?.indexOf(o) ?? -1
    const uebersetzt = i >= 0 ? f.optionenText?.[i] : undefined
    if (uebersetzt) return uebersetzt
    if (!f.optionen?.length && (o === 'ja' || o === 'nein')) return t.janein[o]
    return optionTextVon(o, locale) ?? ohneKlammern(o)
  }
  /** Die Frage, wie sie erscheint – auch in der Zusammenfassung statt der internen Bezeichnung. */
  const frageText = (f: Feld) =>
    darstellungVon(f.key ?? '', locale).titel ?? ohneKlammern(f.frage && !f.frage.includes('{') ? f.frage : f.label || '')
  /** Antwort in der Zusammenfassung so, wie sie gewählt wurde (Knopftext statt gesendetem Wert). */
  const zeige = (f: Feld, v: Wert) => {
    const wahl = darstellungVon(f.key ?? '', locale).wahl
    const eins = (o: string) => wahl?.find((w) => w.wert === o)?.text ?? optionAnzeige(f, o)
    if (Array.isArray(v)) return v.map(eins).join(', ')
    if (wahl && !wahl.some((w) => w.wert === v) && v.includes(', ')) return v.split(', ').map(eins).join(', ')
    return eins(v)
  }

  const [katalog, setKatalog] = useState<Katalog | null>(null)
  const [ladefehler, setLadefehler] = useState(false)
  const [typ, setTyp] = useState<Kundentyp | null>(null)
  const [sparteKey, setSparteKey] = useState<string | null>(null)
  const [werte, setWerte] = useState<Record<string, Wert>>({})
  // Die Beratungssprache ist mit der Sprache der Seite vorgewählt
  const [kontakt, setKontakt] = useState<Kontakt>(() => ({ ...KONTAKT_LEER, sprache: locale }))
  const [schritt, setSchritt] = useState<string>('typ')
  const [verlauf, setVerlauf] = useState<string[]>([])
  const [fehler, setFehler] = useState<Record<string, string>>({})
  const [sendefehler, setSendefehler] = useState<string | null>(null)
  const [sendet, setSendet] = useState(false)
  const [honig, setHonig] = useState('')
  // Eigene Eingabe geöffnet («Anderer Betrag»), Datumswahl als ISO, Fahrzeug in drei Teilen
  const [frei, setFrei] = useState<Record<string, boolean>>({})
  const [tage, setTage] = useState<Record<string, string>>({})
  const [fahrzeug, setFahrzeug] = useState({ marke: '', modell: '', ausfuehrung: '' })
  const beginn = useRef<number>(Date.now())
  const titelRef = useRef<HTMLHeadingElement>(null)
  const karteRef = useRef<HTMLDivElement>(null)
  const erstes = useRef(true)

  useEffect(() => {
    let ab = false
    fetch(`${crm}/oeffentlich/api/offertkatalog?sprache=${locale}`)
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
  }, [crm, locale])

  // Nach jedem Schritt steht der Fokus im ersten Eingabefeld, sonst auf der Frage —
  // fuer Tastatur und Vorlesewerkzeuge. Das Feld traegt die Frage als Beschriftung.
  useEffect(() => {
    if (erstes.current) {
      erstes.current = false
      return
    }
    const feld = karteRef.current?.querySelector<HTMLElement>(
      'input[type="text"]:not(#website), input[type="email"], input[type="tel"], input[type="date"], select, textarea',
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
      if (typ === 'unternehmen' && !kontakt.firma.trim()) f.firma = t.fehler.firma
      if (!kontakt.nachname.trim()) f.nachname = t.fehler.nachname
    }
    if (s === 'k:ort') {
      if (!/^\d{4}$/.test(kontakt.plz.trim())) f.plz = t.fehler.plz
      if (!kontakt.ort.trim()) f.ort = t.fehler.ort
    }
    if (s === 'k:erreichbar') {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(kontakt.email.trim())) f.email = t.fehler.email
      if (kontakt.rueckruf && !kontakt.telefon.trim()) f.telefon = t.fehler.telefon
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
      if (!r.ok) throw new Error(j?.fehler || t.fehler.senden)
      setVerlauf([])
      setSchritt('gesendet')
    } catch (e) {
      setSendefehler(e instanceof Error && e.message !== 'Failed to fetch' ? e.message : t.fehler.verbindung)
    } finally {
      setSendet(false)
    }
  }

  /* ---- Bausteine ------------------------------------------------------- */

  const rueckfall = (
    <p className={styles.rueckfall}>
      {mitElementen(t.rueckfall, {
        telefon: <a href={telefonHref}>{telefon}</a>,
        email: <a href={`mailto:${email}`}>{email}</a>,
      })}
    </p>
  )

  const fortschritt = schritt !== 'gesendet' && (
    <div className={styles.fortschritt}>
      <div
        className={styles.balken}
        role="progressbar"
        aria-label={t.fortschritt}
        aria-valuemin={0}
        aria-valuemax={ablauf.length - 1}
        aria-valuenow={position}
      >
        <span style={{ width: `${Math.round((position / (ablauf.length - 1)) * 100)}%` }} />
      </div>
      <span className={styles.schrittzahl}>
        {schritt.startsWith('f:')
          ? fuelle(t.frageVon, { n: fragen.findIndex((x) => `f:${x.feld.key}` === schritt) + 1, gesamt: fragen.length })
          : null}
        {schritt.startsWith('k:')
          ? fuelle(t.kontaktVon, {
              n: KONTAKT_SCHRITTE.indexOf(schritt as (typeof KONTAKT_SCHRITTE)[number]) + 1,
              gesamt: KONTAKT_SCHRITTE.length,
            })
          : null}
        {schritt === 'pruefen' ? t.letzterSchritt : null}
      </span>
    </div>
  )

  const zurueckKnopf = verlauf.length > 0 && (
    <button type="button" className={styles.zurueck} onClick={zurueck}>
      <span aria-hidden="true">← </span>
      {t.zurueck}
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
        {opt.pflicht ? <span className={styles.pflicht}> {t.noetig}</span> : null}
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

  let inhalt: ReactNode = null

  if (ladefehler) {
    inhalt = (
      <>
        {titel(t.ladefehlerTitel)}
        <p className={styles.hilfe}>{t.ladefehlerText}</p>
        {rueckfall}
      </>
    )
  } else if (!katalog) {
    inhalt = (
      <p className={styles.hilfe} role="status">
        {t.laden}
      </p>
    )
  } else if (schritt === 'typ') {
    inhalt = (
      <>
        {titel(t.typTitel)}
        <div className={styles.kacheln}>
          {(['privat', 'unternehmen'] as const).map((wert) => (
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
              <span className={styles.kachelTitel}>{t.typen[wert].titel}</span>
              <span className={styles.kachelText}>{t.typen[wert].text}</span>
            </button>
          ))}
        </div>
      </>
    )
  } else if (schritt === 'sparte' && typ) {
    inhalt = (
      <>
        {titel(t.sparteTitel)}
        <p className={styles.hilfe}>{t.sparteHilfe}</p>
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
              <span className={styles.kachelTitel}>{ohneKlammern(s.label)}</span>
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
      const d = darstellungVon(key, locale)
      const id = `frage-${key.replace(/\W/g, '-')}`
      const text = typeof wert === 'string' ? wert : ''
      const enter = (e: { key: string; preventDefault: () => void }) => {
        if (e.key === 'Enter') {
          e.preventDefault()
          weiter()
        }
      }
      const eingabefeld = (attr: { zahl?: boolean } = {}) => (
        <div className={styles.feld}>
          <input
            id={id}
            aria-labelledby="assistent-frage"
            type="text"
            maxLength={200}
            inputMode={attr.zahl ? 'decimal' : undefined}
            autoComplete="off"
            value={text}
            onChange={(e) => setzeWert(key, e.target.value)}
            onKeyDown={enter}
          />
        </div>
      )
      let eingabe: ReactNode
      if (f.typ === 'auswahl' || f.typ === 'janein') {
        eingabe = (
          <div className={styles.wahl} role="group" aria-label={ohneKlammern(f.label ?? '')}>
            {ops.map((o) => (
              <button
                key={o}
                type="button"
                className={styles.wahlKnopf}
                aria-pressed={wert === o}
                onClick={() => weiter(setzeWert(key, o))}
              >
                {optionAnzeige(f, o)}
              </button>
            ))}
          </div>
        )
      } else if (f.typ === 'mehrfach') {
        const liste = Array.isArray(wert) ? wert : []
        eingabe = (
          <fieldset className={styles.mehrfach}>
            <legend className={styles.unsichtbar}>{ohneKlammern(f.label ?? '')}</legend>
            {ops.map((o) => (
              <label key={o} className={styles.haken}>
                <input
                  type="checkbox"
                  checked={liste.includes(o)}
                  onChange={(e) => setzeWert(key, e.target.checked ? [...liste, o] : liste.filter((x) => x !== o))}
                />
                <span>{optionAnzeige(f, o)}</span>
              </label>
            ))}
          </fieldset>
        )
      } else if (d.fahrzeug) {
        // Marke und Modell suchen; was fehlt, schreibt man hinein
        const marken = werte['mf.art'] === 'Motorrad' ? motorraeder : autos
        const modelle = marken[fahrzeug.marke] ?? []
        const setzeFz = (teil: 'marke' | 'modell' | 'ausfuehrung', v: string) => {
          const neu = { ...fahrzeug, [teil]: v, ...(teil === 'marke' ? { modell: '' } : {}) }
          setFahrzeug(neu)
          setzeWert(key, [neu.marke, neu.modell, neu.ausfuehrung].map((x) => x.trim()).filter(Boolean).join(' '))
        }
        eingabe = (
          <div className={styles.fahrzeug}>
            <div className={styles.feld}>
              <label htmlFor={`${id}-marke`} id={`${id}-marke-titel`}>
                {t.marke}
              </label>
              <Suchauswahl id={`${id}-marke`} beschriftetVon={`${id}-marke-titel`} wert={fahrzeug.marke} optionen={Object.keys(marken)} onChange={(v) => setzeFz('marke', v)} onEnter={() => weiter()} />
            </div>
            <div className={styles.feld}>
              <label htmlFor={`${id}-modell`} id={`${id}-modell-titel`}>
                {t.modell}
              </label>
              <Suchauswahl id={`${id}-modell`} beschriftetVon={`${id}-modell-titel`} wert={fahrzeug.modell} optionen={modelle} onChange={(v) => setzeFz('modell', v)} onEnter={() => weiter()} />
            </div>
            <div className={styles.feld}>
              <label htmlFor={`${id}-ausfuehrung`}>{t.ausfuehrung}</label>
              <input id={`${id}-ausfuehrung`} type="text" autoComplete="off" maxLength={60} placeholder={t.ausfuehrungBeispiel} value={fahrzeug.ausfuehrung} onChange={(e) => setzeFz('ausfuehrung', e.target.value)} onKeyDown={enter} />
            </div>
          </div>
        )
      } else if (d.wahl) {
        const gewaehlt = d.mehrere ? text.split(', ').filter(Boolean) : []
        eingabe = (
          <>
            <div className={styles.wahl} role="group" aria-labelledby="assistent-frage">
              {d.wahl.map((o) => (
                <button
                  key={o.wert}
                  type="button"
                  className={styles.wahlKnopf}
                  aria-pressed={d.mehrere ? gewaehlt.includes(o.wert) : wert === o.wert && !frei[key]}
                  onClick={() => {
                    if (d.mehrere) {
                      const neu = gewaehlt.includes(o.wert) ? gewaehlt.filter((x) => x !== o.wert) : [...gewaehlt, o.wert]
                      setzeWert(key, neu.join(', '))
                    } else {
                      setFrei((x) => ({ ...x, [key]: false }))
                      weiter(setzeWert(key, o.wert))
                    }
                  }}
                >
                  {o.text}
                </button>
              ))}
              {d.andere ? (
                <button
                  type="button"
                  className={styles.wahlKnopf}
                  aria-pressed={!!frei[key]}
                  onClick={() => {
                    setFrei((x) => ({ ...x, [key]: true }))
                    setzeWert(key, '')
                  }}
                >
                  {d.andere}
                </button>
              ) : null}
            </div>
            {frei[key] ? eingabefeld({ zahl: f.typ !== 'text' }) : null}
          </>
        )
      } else if (d.liste) {
        const liste = d.liste
        eingabe = (
          <div className={styles.feld}>
            <Suchauswahl id={id} beschriftetVon="assistent-frage" wert={text} optionen={listen[liste]} onChange={(v) => setzeWert(key, v)} onEnter={() => weiter()} />
          </div>
        )
      } else if (f.typ === 'textarea') {
        eingabe = (
          <div className={styles.feld}>
            <textarea id={id} aria-labelledby="assistent-frage" rows={4} maxLength={1500} value={text} onChange={(e) => setzeWert(key, e.target.value)} />
          </div>
        )
      } else if (f.typ === 'datum') {
        // Datumswahl statt Eintippen; gesendet wird 31.12.2026
        eingabe = (
          <div className={styles.feld}>
            <input
              id={id}
              aria-labelledby="assistent-frage"
              type="date"
              min="1900-01-01"
              value={tage[key] ?? ''}
              onChange={(e) => {
                setTage((x) => ({ ...x, [key]: e.target.value }))
                setzeWert(key, datumText(e.target.value))
              }}
            />
          </div>
        )
      } else if (f.typ === 'jahr') {
        eingabe = (
          <div className={styles.feld}>
            <select id={id} aria-labelledby="assistent-frage" value={text} onChange={(e) => setzeWert(key, e.target.value)}>
              <option value="">{t.bitteWaehlen}</option>
              {JAHRE.map((j) => (
                <option key={j} value={j}>
                  {j}
                </option>
              ))}
            </select>
          </div>
        )
      } else {
        eingabe = eingabefeld({ zahl: f.typ === 'zahl' || f.typ === 'betrag' })
      }
      // Ein Klick auf eine einzelne Antwort geht von selbst weiter; sonst steht «Weiter» da
      const auswahl = f.typ === 'auswahl' || f.typ === 'janein' || (!!d.wahl && !d.mehrere && !frei[key])
      inhalt = (
        <>
          {eintrag.abschnitt ? <p className={styles.abschnitt}>{eintrag.abschnitt}</p> : null}
          {titel(frageText(f))}
          {d.hilfe || f.hilfe ? <p className={styles.hilfe}>{d.hilfe ?? ohneKlammern(f.hilfe ?? '')}</p> : null}
          {eingabe}
          {f.wichtig ? (
            <p className={styles.wichtig}>{t.wichtig}</p>
          ) : null}
          <div className={styles.aktionen}>
            {!auswahl ? (
              <button type="button" className={styles.knopf} onClick={() => weiter()}>
                {t.weiter}
              </button>
            ) : null}
            <button type="button" className={styles.leise} onClick={() => weiter(setzeWert(key, ''))}>
              {t.ueberspringen}
            </button>
            <button type="button" className={styles.leise} onClick={() => gehe('k:name')}>
              {t.restImGespraech}
            </button>
          </div>
        </>
      )
    }
  } else if (schritt === 'k:name') {
    inhalt = (
      <>
        <p className={styles.abschnitt}>{t.kontaktAbschnitt}</p>
        {titel(typ === 'unternehmen' ? t.nameTitelFirma : t.nameTitelPrivat)}
        {typ === 'unternehmen'
          ? textfeld('firma', t.firma, kontakt.firma, (v) => k('firma', v), { pflicht: true, auto: 'organization' })
          : null}
        <div className={styles.wahl} role="group" aria-label={t.anrede}>
          {ANREDEN.map((a, i) => (
            <button
              key={a}
              type="button"
              className={styles.wahlKnopf}
              aria-pressed={kontakt.anrede === a}
              onClick={() => k('anrede', kontakt.anrede === a ? '' : a)}
            >
              {t.anreden[i] ?? a}
            </button>
          ))}
        </div>
        <div className={styles.zweispaltig}>
          {textfeld('vorname', t.vorname, kontakt.vorname, (v) => k('vorname', v), { auto: 'given-name' })}
          {textfeld('nachname', t.nachname, kontakt.nachname, (v) => k('nachname', v), { pflicht: true, auto: 'family-name' })}
        </div>
      </>
    )
  } else if (schritt === 'k:ort') {
    inhalt = (
      <>
        <p className={styles.abschnitt}>{t.kontaktAbschnitt}</p>
        {titel(typ === 'unternehmen' ? t.ortTitelFirma : t.ortTitelPrivat)}
        <p className={styles.hilfe}>{t.ortHilfe}</p>
        {textfeld('strasse', t.strasse, kontakt.strasse, (v) => k('strasse', v), { auto: 'street-address' })}
        <div className={styles.plzOrt}>
          {textfeld('plz', t.plz, kontakt.plz, (v) => k('plz', v), { pflicht: true, auto: 'postal-code', modus: 'numeric' })}
          {textfeld('ort', t.ort, kontakt.ort, (v) => k('ort', v), { pflicht: true, auto: 'address-level2' })}
        </div>
      </>
    )
  } else if (schritt === 'k:erreichbar') {
    inhalt = (
      <>
        <p className={styles.abschnitt}>{t.kontaktAbschnitt}</p>
        {titel(t.erreichbarTitel)}
        {textfeld('email', t.email, kontakt.email, (v) => k('email', v), { pflicht: true, typ: 'email', auto: 'email', modus: 'email' })}
        {textfeld('telefon', t.telefon, kontakt.telefon, (v) => k('telefon', v), { typ: 'tel', auto: 'tel', modus: 'tel', pflicht: kontakt.rueckruf })}
        <label className={styles.haken}>
          <input type="checkbox" checked={kontakt.rueckruf} onChange={(e) => k('rueckruf', e.target.checked)} />
          <span>{t.rueckruf}</span>
        </label>
        {kontakt.rueckruf ? (
          <div className={styles.feld}>
            <span className={styles.feldTitel} id="erreichbar-titel">
              {t.erreichbarWann}
            </span>
            <div className={styles.wahl} role="group" aria-labelledby="erreichbar-titel">
              {ERREICHBAR.map((z, i) => (
                <button key={z} type="button" className={styles.wahlKnopf} aria-pressed={kontakt.erreichbar === z} onClick={() => k('erreichbar', kontakt.erreichbar === z ? '' : z)}>
                  {t.erreichbar[i] ?? z}
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </>
    )
  } else if (schritt === 'k:bemerkung') {
    inhalt = (
      <>
        <p className={styles.abschnitt}>{t.fastFertig}</p>
        {titel(t.bemerkungTitel)}
        <div className={styles.feld}>
          <label htmlFor="bemerkung">{t.bemerkung}</label>
          <textarea id="bemerkung" rows={4} maxLength={1500} value={kontakt.bemerkung} onChange={(e) => k('bemerkung', e.target.value)} />
          <p className={styles.hilfe}>{t.bemerkungHilfe}</p>
        </div>
        <div className={styles.feld}>
          <span className={styles.feldTitel} id="sprache-titel">
            {t.spracheTitel}
          </span>
          <div className={styles.wahl} role="group" aria-labelledby="sprache-titel">
            {SPRACHEN.map((code) => (
              <button key={code} type="button" className={styles.wahlKnopf} aria-pressed={kontakt.sprache === code} onClick={() => k('sprache', code)}>
                {t.sprachen[code]}
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
        <p className={styles.abschnitt}>{t.zusammenfassung}</p>
        {titel(fuelle(t.pruefenTitel, { sparte: ohneKlammern(sparte.label) }))}
        <dl className={styles.zusammenfassung}>
          <dt>{t.kontakt}</dt>
          <dd>
            {[typ === 'unternehmen' ? kontakt.firma : null, [uebersetzeWert(ANREDEN, t.anreden, kontakt.anrede), kontakt.vorname, kontakt.nachname].filter(Boolean).join(' ')]
              .filter(Boolean)
              .join(', ')}
            <br />
            {[kontakt.strasse, `${kontakt.plz} ${kontakt.ort}`].filter((x) => x.trim()).join(', ')}
            <br />
            {[kontakt.email, kontakt.telefon].filter(Boolean).join(' · ')}
            {kontakt.rueckruf ? (
              <>
                <br />
                {t.rueckrufGewuenscht}
                {kontakt.erreichbar ? `, ${uebersetzeWert(ERREICHBAR, t.erreichbar, kontakt.erreichbar)}` : ''}
              </>
            ) : null}
          </dd>
          {beantwortet.length ? (
            beantwortet.map(({ feld }) => (
              <div key={feld.key} className={styles.zeile}>
                <dt>{frageText(feld)}</dt>
                <dd>{zeige(feld, werte[feld.key as string] ?? '')}</dd>
              </div>
            ))
          ) : (
            <>
              <dt>{t.angaben}</dt>
              <dd>{t.allesWeitere}</dd>
            </>
          )}
        </dl>
        <p className={styles.datenschutz}>
          {mitElementen(t.datenschutz, { link: <a href={datenschutzHref}>{t.datenschutzLink}</a> })}
        </p>
        {/* Honigtopf: fuer Menschen unsichtbar, Programme fuellen ihn aus */}
        <div className={styles.honig} aria-hidden="true">
          <label htmlFor="website">{t.honigtopf}</label>
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
            {sendet ? t.wirdGesendet : t.senden}
          </button>
        </div>
      </>
    )
  } else if (schritt === 'gesendet') {
    inhalt = (
      <div className={styles.dank} role="status">
        {titel(t.dankTitel)}
        <p className={styles.hilfe}>{t.dankText}</p>
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
            {t.weiter}
          </button>
        </div>
      ) : null}
      {schritt !== 'gesendet' && zurueckKnopf ? <div className={styles.fuss}>{zurueckKnopf}</div> : null}
    </div>
  )
}
