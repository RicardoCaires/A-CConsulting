'use client'

import Image from 'next/image'
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react'

import { Kostenring } from '@/components/ui/Kostenring'
import { Zeichen } from '@/components/ui/PortalAnsicht'
import { OfferteDemo, VertragDemo, WahlFeld } from '@/components/ui/PortalDemoFormulare'
import { DemoKontext, demoText, useDemo } from '@/components/ui/PortalDemoText'
import { portalDemo, portalRahmen } from '@/content/seiten/portal-beispiel'
import type { Locale } from '@/i18n/config'

import a from './PortalAnsicht.module.css'
import s from './PortalDemo.module.css'

/**
 * Das Kundenportal zum Durchklicken (15.10.2026). Ricardo: «interaktiv das Kundenportal
 * zeigen sodass man … fiktiv browsen kann natürlich mit erfundenen Daten und ohne das man
 * etwas absenden kann».
 *
 * Seiten, Kacheln und Formulare wie in `public-portal/portal.js` im CRM: Start, Meine
 * Versicherungen mit jeder Police, Anfragen mit den fünf Formularen und Meine Angaben.
 *
 * Seit dem 20.10.2026 genau wie das Portal mit dem Demokunden (Ricardo: «diese version des
 * Portals muss dann auch auf der Website erscheinen genau mit dem Demokunden»): Logos der
 * Gesellschaften, Leistungen im Detail mit Prämie je Deckung, die geführte Anfrage mit
 * Schadenmeldung, Frage zum Vertrag und Treuhand, und der schwebende Knopf «Termin
 * vereinbaren». Verträge, Nummern und Beträge des Demokunden sind erfunden.
 * **Es geht keine Anfrage hinaus**: Die Formulare haben kein Ziel, das Absenden wird
 * abgefangen und durch einen Hinweis ersetzt, Herunterladen ebenso. Es wird nichts
 * gespeichert; neu Laden stellt den Anfang wieder her. Alle Angaben sind erfunden.
 */

type Seite = (typeof portalDemo.navigation)[number]['seite']
type Formular = (typeof portalDemo.anfragen.formulare)[number]['formular']
type Police = (typeof portalDemo.policen)[number]
type Anfrage = { betreff: string; datum: string; stand: string; art: 'offen' | 'navy' | 'gruen'; text: string }

const MARKE = { offen: a.marke, navy: `${a.marke} ${a.markeNavy}`, gruen: `${a.marke} ${a.markeGruen}` }
type Dokument = { name: string; zeile: string; police: boolean }
type Stufe = keyof typeof portalDemo.anfragen.assistent.fragen
type Antwort = keyof typeof portalDemo.anfragen.assistent.antworten

/** Der Weg durch die Fragen, wie im Portal (`WEG` in portal.js). */
const WEG: Record<Stufe, readonly [Antwort, { formular?: Formular; weiter?: Stufe; thema?: number }][]> = {
  start: [['neu', { formular: 'offerte' }], ['vertrag', { weiter: 'vertrag' }], ['schaden', { formular: 'schaden' }], ['treuhand', { formular: 'treuhand' }], ['anderes', { weiter: 'weg', thema: 4 }]],
  vertrag: [['aendern', { formular: 'vertrag' }], ['frage', { formular: 'frage' }]],
  weg: [['rueckruf', { formular: 'rueckruf' }], ['termin', { formular: 'termin' }], ['nachricht', { formular: 'nachricht' }]],
}

/** Welche Deckungen einen Schaden tragen, in der Reihenfolge der Schadenarten (wie `SCHADEN_DECKUNG` im Portal). */
const SCHADEN_DECKUNG: readonly (readonly string[] | null)[] = [
  ['motorfahrzeug_haftpflicht', 'motorfahrzeug_kasko'],
  ['motorfahrzeug_kasko'],
  ['hausrat', 'inventar'],
  ['hausrat', 'gebaeude', 'inventar'],
  ['hausrat', 'gebaeude', 'inventar'],
  ['privathaftpflicht', 'gebaeude_haftpflicht', 'betriebshaftpflicht', 'berufshaftpflicht', 'motorfahrzeug_haftpflicht'],
  ['rechtsschutz_privat', 'rechtsschutz_verkehr', 'rechtsschutz_betrieb'],
  null,
]

function Logo({ p, gross = false }: { p: Police; gross?: boolean }) {
  return (
    <span className={gross ? `${s.logo} ${s.logoGross}` : s.logo}>
      <Image src={`/bilder/gesellschaften/${p.logo}`} alt="" width={352} height={192} unoptimized />
    </span>
  )
}

/** «Wie sollen wir uns bei Ihnen melden?» – Telefon mit vorbelegter Nummer oder E-Mail. */
function Rueckmeldung({ id }: { id: string }) {
  const D = useDemo()
  const r = D.anfragen.rueckmeldung
  const [weg, setWeg] = useState<string>(r.optionen[0])
  return (
    <>
      <WahlFeld id={`${id}-weg`} titel={r.wie} optionen={r.optionen} start={r.optionen[0]} name="rueckmeldung" fest onChange={setWeg} />
      {weg === r.optionen[0] ? (
        <Feld id={`${id}-tel`} titel={r.nummer}>
          <input id={`${id}-tel`} name="telefon" type="tel" required defaultValue={D.anfragen.rueckruf.nummer} autoComplete="off" />
        </Feld>
      ) : (
        <p className={`${a.klein} ${s.absatz}`}>{r.mail}</p>
      )}
    </>
  )
}

/** 07:30 bis 18:30 im Halbstundentakt, wie im Portal. */
const UHRZEITEN = Array.from({ length: 23 }, (_, i) => `${String(7 + Math.floor((i + 1) / 2)).padStart(2, '0')}:${(i + 1) % 2 ? '30' : '00'}`)

const heute = () => {
  const t = new Date()
  return `${String(t.getDate()).padStart(2, '0')}.${String(t.getMonth() + 1).padStart(2, '0')}.${t.getFullYear()}`
}

function Feld({ id, titel, frei, hilfe, children }: { id: string; titel: string; frei?: boolean; hilfe?: string; children: ReactNode }) {
  const D = useDemo()
  return (
    <div className={s.feld}>
      <label htmlFor={id}>
        {titel}
        {frei ? <span className={s.frei}> · {D.anfragen.freiwillig}</span> : null}
      </label>
      {children}
      {hilfe ? <p className={a.klein}>{hilfe}</p> : null}
    </div>
  )
}

export function PortalDemo({ locale = 'de' }: { locale?: Locale }) {
  const D = demoText(locale)
  const [seite, setSeite] = useState<Seite>('start')
  const [policeId, setPoliceId] = useState<string | null>(null)
  const [formular, setFormular] = useState<Formular | null>(null)
  const [vorgabe, setVorgabe] = useState<string | null>(null)
  const [pfad, setPfad] = useState<[Stufe, Antwort][]>([])
  const [thema, setThema] = useState<number | null>(null)
  const [meldung, setMeldung] = useState<string | null>(null)
  const [anfragen, setAnfragen] = useState<Anfrage[]>(() => D.anfragen.liste.map((x) => ({ ...x })))
  const flaeche = useRef<HTMLDivElement>(null)
  const titel = useRef<HTMLHeadingElement>(null)
  const formTitel = useRef<HTMLHeadingElement>(null)
  const erst = useRef(true)

  // Nach jedem Seitenwechsel: oben beginnen und den Fokus auf die Überschrift setzen,
  // ohne dass die Website selbst springt.
  useEffect(() => {
    if (erst.current) {
      erst.current = false
      return
    }
    const f = flaeche.current
    // Ein gewähltes Formular steht unter den Kacheln: dorthin springen, sonst nach oben
    if (f && formular && formTitel.current) {
      f.scrollTop += formTitel.current.getBoundingClientRect().top - f.getBoundingClientRect().top - 16
      formTitel.current.focus({ preventScroll: true })
      return
    }
    f?.scrollTo({ top: 0 })
    titel.current?.focus({ preventScroll: true })
  }, [seite, policeId, formular, pfad])

  const geh = (ziel: Seite, mehr: { police?: string | null; formular?: Formular | null; vorgabe?: string | null } = {}) => {
    setSeite(ziel)
    setPoliceId(mehr.police ?? null)
    setFormular(mehr.formular ?? null)
    setVorgabe(mehr.vorgabe ?? null)
    setPfad([])
    setThema(null)
    setMeldung(null)
  }

  const melde = (text: string) => {
    setMeldung(text)
    flaeche.current?.scrollTo({ top: 0, behavior: 'smooth' })
  }

  /** Absenden abfangen: nichts verlassen lassen, die Anfrage nur hier in der Liste zeigen. */
  const sende = (betreff: string) => (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const daten = new FormData(e.currentTarget)
    const eigen = String(daten.get('betreff') ?? '').trim()
    const thema = String(daten.get('thema') ?? '').trim()
    const text = [thema, String(daten.get('text') ?? '').trim()].filter(Boolean).join(String.fromCharCode(10))
    ablegen(eigen || betreff, text)
  }

  const ablegen = (betreff: string, text: string) => {
    setAnfragen((x) => [{ betreff, datum: heute(), stand: D.anfragen.neu, art: 'offen', text }, ...x])
    setFormular(null)
    setPfad([])
    setThema(null)
    melde(D.meldungSenden)
  }

  // Eine Funktion, keine Komponente: sonst entstünde die Überschrift bei jedem Zeichnen neu
  const ueberschrift = (text: string) => (
    <h3 ref={titel} tabIndex={-1} className={`${a.h1} ${s.titel}`}>
      {text}
    </h3>
  )

  // Kostenring nach Sparte, die grösste zuerst – wie im Portal; ein Vertrag darin führt zu seiner Seite
  const ring = (
    <Kostenring
      texte={{ titel: D.start.ringTitel, proJahr: D.start.proJahr, ...D.start.ring }}
      vertraege={D.policen.map((p) => ({ id: p.id, name: p.name, gesellschaft: p.gesellschaft, logo: p.logo, sparte: p.sparte, betrag: p.jahr }))}
      onVertrag={(id) => geh('versicherungen', { police: id })}
    />
  )
  const gesellschaften = new Set(D.policen.map((p) => p.gesellschaft)).size
  const offen = anfragen.filter((x) => x.art !== 'gruen')

  /* ---- Start ------------------------------------------------------------------ */

  const start = () => (
    <>
      <div className={a.willkommen}>
        <span className={a.vorzeile}>{D.start.vorzeile}</span>
        {ueberschrift(D.start.gruss)}
        <span className={a.leise}>{D.start.satz}</span>
      </div>
      <div className={a.uebersicht}>
        <button type="button" className={`${a.stand} ${s.knopfStand}`} onClick={() => geh('versicherungen')}>
          <strong>{D.policen.length}</strong>
          <span>{D.start.vertraege}</span>
          <span className={a.standLink}>{D.start.ansehen}</span>
        </button>
        <span className={a.stand}>
          <strong>{gesellschaften}</strong>
          <span>{D.start.gesellschaften}</span>
        </span>
        <span className={`${a.stand} ${a.termin}`}>
          <span className={a.standTitel}>{D.start.termin.titel}</span>
          <span>{D.start.termin.text}</span>
          <button type="button" className={`${a.kleinKnopf} ${s.knopfKlein}`} onClick={() => geh('anfragen', { formular: 'termin' })}>
            {D.start.termin.knopf}
          </button>
        </span>
      </div>
      {ring}
      <h4 className={a.h2}>{D.start.tun}</h4>
      <div className={s.kacheln}>
        {D.start.kacheln.map((k) => (
          <button key={k.titel} type="button" className={s.kachel} onClick={() => geh(k.seite, { formular: k.formular })}>
            <span className={a.rund}>
              <Zeichen name={k.zeichen} />
            </span>
            <span className={a.policeText}>
              <strong>{k.titel}</strong>
              <span>{k.text}</span>
            </span>
            <Zeichen name="pfeil" klasse={`${a.zeichen} ${a.pfeil}`} />
          </button>
        ))}
      </div>
      {offen.length ? (
        <>
          <h4 className={a.h2}>{offen.length === 1 ? D.start.offenEine : `${offen.length} ${D.start.offenMehr}`}</h4>
          <div className={`${a.karte} ${s.liste}`}>
            {offen.slice(0, 3).map((x, i) => (
              <div key={i} className={s.zeile}>
                <span>
                  <strong>{x.betreff}</strong>
                  <span className={a.klein}> · {x.datum}</span>
                </span>
                <span className={MARKE[x.art]}>{x.stand}</span>
              </div>
            ))}
            <div className={s.zeile}>
              <button type="button" className={s.leise} onClick={() => geh('anfragen')}>
                {D.start.alleAnfragen}
              </button>
            </div>
          </div>
        </>
      ) : null}
    </>
  )

  /* ---- Meine Versicherungen ---------------------------------------------------- */

  const versicherungen = () => (
    <>
      {ueberschrift(D.versicherungen.titel)}
      <p className={`${a.leise} ${s.absatz}`}>{D.versicherungen.einleitung}</p>
      {ring}
      <h4 className={a.h2}>{D.versicherungen.gruppe}</h4>
      <div className={a.policen}>
        {D.policen.map((p) => (
          <button key={p.id} type="button" className={`${a.police} ${s.knopfPolice} ${s.mitLogo}`} onClick={() => geh('versicherungen', { police: p.id })}>
            <Logo p={p} />
            <span className={a.policeText}>
              <strong>{p.name}</strong>
              <span>{p.gesellschaft}</span>
              <span className={a.klein}>
                Police {p.nummer} ·{' '}
                {(() => {
                  const n = (p.dokumente as readonly Dokument[]).length
                  return n ? `${n} ${n === 1 ? D.versicherungen.unterlage : D.versicherungen.unterlagen}` : D.anfragen.keineUnterlage
                })()}
              </span>
            </span>
            <Zeichen name="pfeil" klasse={`${a.zeichen} ${a.pfeil}`} />
          </button>
        ))}
      </div>
      <p className={`${a.klein} ${s.absatz}`}>{D.versicherungen.stand}</p>
    </>
  )

  /* ---- Eine Police -------------------------------------------------------------- */

  const police = (p: Police) => {
    const w = D.police
    const doks = p.dokumente as readonly Dokument[]
    const angaben: [string, string][] = [
      [w.angaben.gesellschaft, p.gesellschaft],
      [w.angaben.versicherung, p.sparte],
      [w.angaben.nummer, p.nummer],
      [w.angaben.laufzeit, p.laufzeit],
      [w.angaben.verfall, p.verfall],
      [w.angaben.praemie, p.praemie],
    ]
    return (
      <>
        <button type="button" className={`${a.zurueck} ${s.zurueck}`} onClick={() => geh('versicherungen')}>
          <Zeichen name="zurueck" />
          {w.zurueck}
        </button>
        <div className={a.policeKopf}>
          <Logo p={p} gross />
          <span className={a.policeKopfText}>
            {ueberschrift(p.name)}
            <span className={a.leise}>
              {p.gesellschaft} <span className={`${a.marke} ${a.markeGruen}`}>{w.status}</span>
            </span>
          </span>
          {doks.some((d) => d.police) ? (
            <button type="button" className={`${a.knopf} ${s.knopf}`} onClick={() => melde(D.meldungLaden)}>
              <Zeichen name="laden" />
              {w.herunterladen}
            </button>
          ) : null}
        </div>
        <div className={s.zwei}>
          <section className={a.karte}>
            <h4 className={`${a.h2} ${s.kartenTitel}`}>{w.vertrag}</h4>
            <dl className={s.angaben}>
              {angaben.map(([b, v]) => (
                <div key={b}>
                  <dt>{b}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </section>
          <section className={a.karte}>
            <h4 className={`${a.h2} ${s.kartenTitel}`}>{w.versichert}</h4>
            <ul className={`${a.leistungen} ${s.leistungen}`}>
              {p.leistungen.map((l) => (
                <li key={l.name}>
                  <span className={a.policeText}>
                    <strong className={s.deckung}>{l.name}</strong>
                    {l.praemie ? (
                      <span className={s.deckungPraemie}>
                        {w.angaben.praemie} {l.praemie} {D.start.proJahr}
                      </span>
                    ) : null}
                    {l.details.length ? (
                      <ul className={s.details}>
                        {l.details.map((z) => (
                          <li key={z}>{z}</li>
                        ))}
                      </ul>
                    ) : null}
                    {l.zusatz ? <span className={a.klein}>{l.zusatz}</span> : null}
                  </span>
                  {l.wert ? <span className={a.wert}>{l.wert}</span> : null}
                </li>
              ))}
            </ul>
            <p className={`${a.klein} ${s.absatz}`}>{w.versichertHinweis}</p>
          </section>
        </div>
        {p.objekt ? (
          <section className={a.karte}>
            <h4 className={`${a.h2} ${s.kartenTitel}`}>{p.objekt.titel}</h4>
            <dl className={s.angaben}>
              {p.objekt.angaben.map((x) => (
                <div key={x.name}>
                  <dt>{x.name}</dt>
                  <dd>{x.wert}</dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}
        <section className={a.karte}>
          <h4 className={`${a.h2} ${s.kartenTitel}`}>{w.unterlagen}</h4>
          {doks.length ? null : <p className={`${a.klein} ${s.absatz}`}>{D.anfragen.keineUnterlage}</p>}
          <div className={a.dokumente}>
            {doks.map((d) => (
              <span key={d.name} className={a.dokument}>
                <span className={a.dokumentBild}>
                  <Zeichen name="dokument" />
                </span>
                <span className={a.policeText}>
                  <strong>{d.name}</strong>
                  <span className={a.klein}>{d.zeile}</span>
                </span>
                <button
                  type="button"
                  className={d.police ? `${a.knopf} ${s.knopf}` : `${a.knopf} ${a.knopfLeise} ${s.knopf} ${s.knopfHell}`}
                  onClick={() => melde(D.meldungLaden)}
                >
                  <Zeichen name="laden" />
                  {d.police ? w.herunterladen : w.laden}
                </button>
              </span>
            ))}
          </div>
        </section>
        <div className={s.knoepfe}>
          <button type="button" className={`${a.knopf} ${s.knopf}`} onClick={() => geh('anfragen', { formular: 'vertrag', vorgabe: p.id })}>
            {w.aendern}
          </button>
          <button type="button" className={s.leise} onClick={() => geh('anfragen', { formular: 'frage', vorgabe: p.id })}>
            {w.frage}
          </button>
          <button type="button" className={s.leise} onClick={() => geh('anfragen', { formular: 'rueckruf' })}>
            {w.rueckruf}
          </button>
        </div>
        <p className={a.klein}>{w.massgebend}</p>
      </>
    )
  }

  /* ---- Anfragen ------------------------------------------------------------------ */

  const knopfSenden = (text: string) => (
    <div className={s.knoepfe}>
      <button type="submit" className={`${a.knopf} ${s.knopf}`}>
        {text}
      </button>
    </div>
  )

  const formularInhalt = (f: Formular) => {
    const q = D.anfragen
    switch (f) {
      case 'offerte':
        return <OfferteDemo ablegen={ablegen} />
      case 'rueckruf':
        return (
          <form onSubmit={sende(q.rueckruf.betreff)}>
            <div className={s.felderZeile}>
              <Feld id="d-telefon" titel={q.rueckruf.telefon}>
                <input id="d-telefon" type="tel" required defaultValue={q.rueckruf.nummer} autoComplete="off" />
              </Feld>
            </div>
            <WahlFeld id="d-zeit" titel={q.rueckruf.zeit} optionen={q.rueckruf.zeiten} start={q.rueckruf.zeiten[0]} name="zeit" fest />
            <WahlFeld id="d-thema" titel={q.rueckruf.thema} optionen={q.rueckruf.themen} start={thema === null ? '' : q.rueckruf.themen[thema]} name="thema" />
            <Feld id="d-tag" titel={q.rueckruf.tag} frei>
              <input id="d-tag" type="date" />
            </Feld>
            <Feld id="d-text" titel={q.rueckruf.text} frei>
              <textarea id="d-text" name="text" />
            </Feld>
            {knopfSenden(q.rueckruf.knopf)}
          </form>
        )
      case 'termin':
        return (
          <form onSubmit={sende(q.termin.betreff)}>
            <div className={s.felderZeile}>
              <Feld id="d-ttag" titel={q.termin.tag}>
                <input id="d-ttag" type="date" required />
              </Feld>
              <Feld id="d-uhr" titel={q.termin.uhr}>
                <select id="d-uhr" required defaultValue="">
                  <option value="" disabled>
                    {q.bitteWaehlen}
                  </option>
                  {UHRZEITEN.map((x) => (
                    <option key={x} value={x}>
                      {x} {q.termin.uhrzeit}
                    </option>
                  ))}
                </select>
              </Feld>
            </div>
            <WahlFeld id="d-ort" titel={q.termin.ort} optionen={q.termin.orte} start={q.termin.orte[0]} name="ort" fest />
            <Feld id="d-ttext" titel={q.termin.text} frei>
              <textarea id="d-ttext" name="text" />
            </Feld>
            <p className={`${a.klein} ${s.absatz}`}>{q.termin.hinweis}</p>
            {knopfSenden(q.termin.knopf)}
          </form>
        )
      case 'vertrag':
        return <VertragDemo ablegen={ablegen} vorgabe={vorgabe} />
      case 'schaden':
        return <SchadenDemo ablegen={ablegen} nachricht={() => { setFormular('nachricht'); setVorgabe(null) }} />
      case 'treuhand':
        return <TreuhandDemo ablegen={ablegen} />
      case 'frage':
        return (
          <form
            onSubmit={(e) => {
              e.preventDefault()
              const d = new FormData(e.currentTarget)
              const p = D.policen.find((x) => x.id === d.get('police'))
              ablegen(`${q.frage.betreff} ${(p?.name ?? '').replace(/\u00ad/g, '')}`, String(d.get('text') ?? '').trim())
            }}
          >
            <Feld id="d-qpolice" titel={q.frage.police}>
              <select id="d-qpolice" name="police" defaultValue={vorgabe ?? D.policen[0].id}>
                {D.policen.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name.replace(/\u00ad/g, '')} · {p.gesellschaft} · {p.nummer}
                  </option>
                ))}
              </select>
            </Feld>
            <Feld id="d-qtext" titel={q.frage.frage}>
              <textarea id="d-qtext" name="text" required />
            </Feld>
            <Rueckmeldung id="d-q" />
            {knopfSenden(q.frage.knopf)}
          </form>
        )
      case 'nachricht': {
        const p = D.policen.find((x) => x.id === vorgabe)
        return (
          <form onSubmit={sende(q.nachricht.standard)}>
            <Feld id="d-betreff" titel={q.nachricht.betreff} frei>
              <input
                id="d-betreff"
                name="betreff"
                type="text"
                autoComplete="off"
                defaultValue={p ? `${D.police.frage}: ${p.name.replace(/­/g, '')}` : ''}
              />
            </Feld>
            <Feld id="d-ntext" titel={q.nachricht.text}>
              <textarea id="d-ntext" name="text" required />
            </Feld>
            {knopfSenden(q.nachricht.knopf)}
          </form>
        )
      }
    }
  }

  const anfragenSeite = () => {
    const A = D.anfragen.assistent
    const eintrag = D.anfragen.formulare.find((x) => x.formular === formular)
    let stufe: Stufe = 'start'
    for (const [st, an] of pfad) {
      const ziel = WEG[st].find(([k]) => k === an)?.[1]
      if (ziel?.weiter) stufe = ziel.weiter
    }
    const waehle = (st: Stufe, an: Antwort, ziel: { formular?: Formular; weiter?: Stufe; thema?: number }) => {
      setPfad([...pfad, [st, an]])
      if (ziel.thema !== undefined) setThema(ziel.thema)
      setFormular(ziel.formular ?? null)
      setVorgabe(null)
      setMeldung(null)
    }
    const zurueck = () => {
      setPfad(pfad.slice(0, -1))
      setFormular(null)
      setMeldung(null)
    }
    const neu = () => {
      setPfad([])
      setThema(null)
      setFormular(null)
      setMeldung(null)
    }
    const wegAnzeige = pfad.length ? (
      <ol className={s.pfad} aria-label={A.ihreWahl}>
        {pfad.map(([st, an]) => (
          <li key={`${st}-${an}`}>{A.antworten[an][0]}</li>
        ))}
      </ol>
    ) : null
    const fuss =
      pfad.length || formular ? (
        <div className={s.knoepfe}>
          <button type="button" className={s.leise} onClick={zurueck}>
            {A.zurueck}
          </button>
          {pfad.length > 1 || (formular && pfad.length) ? (
            <button type="button" className={s.leise} onClick={neu}>
              {A.neuBeginnen}
            </button>
          ) : null}
        </div>
      ) : null
    return (
      <>
        {ueberschrift(D.anfragen.titel)}
        {formular && eintrag ? (
          <section className={`${a.karte} ${s.formular}`}>
            {wegAnzeige}
            <h4 ref={formTitel} tabIndex={-1} className={`${a.h2} ${s.kartenTitel} ${s.titel}`}>
              {eintrag.titel}
            </h4>
            {formularInhalt(formular)}
            {fuss}
          </section>
        ) : (
          <section className={`${a.karte} ${s.formular}`}>
            <p className={s.schritt}>
              {A.schritt} {pfad.length + 1}
            </p>
            {wegAnzeige}
            <h4 ref={formTitel} tabIndex={-1} className={`${a.h2} ${s.kartenTitel} ${s.titel}`}>
              {A.fragen[stufe]}
            </h4>
            <div className={s.antworten}>
              {WEG[stufe].map(([an, ziel]) => (
                <button key={an} type="button" className={s.antwort} onClick={() => waehle(stufe, an, ziel)}>
                  <span>
                    <strong>{A.antworten[an][0]}</strong>
                    <span className={a.klein}>{A.antworten[an][1]}</span>
                  </span>
                  <Zeichen name="pfeil" klasse={`${a.zeichen} ${a.pfeil}`} />
                </button>
              ))}
            </div>
            {fuss}
          </section>
        )}
        <h4 className={a.h2}>{D.anfragen.bisher}</h4>
        <div className={a.anfragen}>
          {anfragen.map((x, i) => (
            <details key={`${x.betreff}-${i}`} className={`${a.karte} ${s.anfrage}`}>
              <summary>
                <span>
                  <strong>{x.betreff}</strong>
                  <span className={a.klein}> · {x.datum}</span>
                </span>
                <span className={MARKE[x.art]}>{x.stand}</span>
              </summary>
              {x.text ? <p className={s.absatz}>{x.text}</p> : null}
            </details>
          ))}
        </div>
      </>
    )
  }

  /* ---- Meine Angaben ---------------------------------------------------------------- */

  const angaben = () => (
    <>
      {ueberschrift(D.angaben.titel)}
      <p className={s.hinweis}>{D.angaben.hinweis}</p>
      {D.angaben.felder.map((f) => (
        <form
          key={f.feld}
          className={a.karte}
          onSubmit={(e) => {
            e.preventDefault()
            melde(D.meldungAngabe)
          }}
        >
          <Feld id={`d-${f.feld}`} titel={f.name}>
            <input id={`d-${f.feld}`} type="text" defaultValue={f.wert} autoComplete="off" />
          </Feld>
          <div className={s.knoepfe}>
            <button type="submit" className={s.leise}>
              {D.angaben.knopf}
            </button>
          </div>
        </form>
      ))}
    </>
  )

  const aktuellePolice = seite === 'versicherungen' && policeId ? D.policen.find((p) => p.id === policeId) : undefined
  const inhalt =
    seite === 'start'
      ? start()
      : seite === 'versicherungen'
        ? aktuellePolice
          ? police(aktuellePolice)
          : versicherungen()
        : seite === 'anfragen'
          ? anfragenSeite()
          : angaben()

  return (
    <DemoKontext.Provider value={D}>
    <div className={`${a.fenster} ${s.demo}`} role="region" aria-label={D.band}>
      <div className={a.leiste} aria-hidden="true">
        <span className={a.punkte}>
          <span />
          <span />
          <span />
        </span>
        <span className={a.adresse}>{portalRahmen.adresse}</span>
      </div>
      <p className={s.band}>{D.band}</p>
      <div className={`${a.portal} ${s.portal}`}>
        <div className={a.kopf}>
          <button type="button" className={s.logoKnopf} aria-label={D.zurStart} onClick={() => geh('start')}>
            <Image src="/logo/ac-logo.png" alt="" width={216} height={47} className={a.logo} />
          </button>
          <nav className={s.nav} aria-label={D.bereiche}>
            {D.navigation.map((n) => (
              <button
                key={n.seite}
                type="button"
                aria-current={seite === n.seite ? 'page' : undefined}
                onClick={() => geh(n.seite)}
              >
                {n.text}
              </button>
            ))}
          </nav>
        </div>
        <div ref={flaeche} className={s.flaeche}>
          <div role="status" aria-live="polite" className={s.meldungOrt}>
            {meldung ? (
              <div className={s.meldung}>
                <span>{meldung}</span>
                <button type="button" className={s.meldungZu} aria-label={D.schliessen} onClick={() => setMeldung(null)}>
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M6 6l12 12 M18 6L6 18" />
                  </svg>
                </button>
              </div>
            ) : null}
          </div>
          <div className={`${a.inhalt} ${s.inhalt}`}>{inhalt}</div>
        </div>
        <button type="button" className={s.terminKnopf} aria-label={D.start.termin.knopf} onClick={() => geh('anfragen', { formular: 'termin' })}>
          <Zeichen name="kalender" />
          <span className={s.terminText}>{D.start.termin.knopf}</span>
        </button>
      </div>
    </div>
    </DemoKontext.Provider>
  )
}

/* ---- Schadenmeldung und Treuhand (20.10.2026), wie im Portal ------------------------------------ */

function SchadenDemo({ ablegen, nachricht }: { ablegen: (betreff: string, text: string) => void; nachricht: () => void }) {
  const D = useDemo()
  const q = D.anfragen.schaden
  const [art, setArt] = useState<number | null>(null)
  const [fehler, setFehler] = useState(false)
  // Versichert? Geprüft gegen die Deckungen der Verträge; «Anderes» wird nicht geprüft
  const noetig = art === null ? null : SCHADEN_DECKUNG[art]
  const deckend = noetig ? D.policen.filter((p) => p.bereiche.some((b) => noetig.includes(b))) : null
  const nichtVersichert = !!deckend && deckend.length === 0
  // Genau ein passender Vertrag: gleich vorwählen, wie im Portal
  const vorwahl = deckend?.length === 1 ? (deckend[0]?.id ?? '') : ''
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const d = new FormData(e.currentTarget)
        const hergang = String(d.get('text') ?? '').trim()
        if (art === null || !hergang) {
          setFehler(true)
          return
        }
        ablegen(`${q.betreff}: ${q.arten[art]}`, hergang)
      }}
    >
      <WahlFeld
        id="d-sart"
        titel={q.was}
        optionen={q.arten}
        name="art"
        onChange={(v) => {
          const i = q.arten.indexOf(v as never)
          setArt(i < 0 ? null : i)
          setFehler(false)
        }}
      />
      {nichtVersichert ? (
        <div className={s.warnung}>
          <strong>{q.nichtTitel}</strong>
          <p>{q.nichtText}</p>
          <div className={s.knoepfe}>
            <a className={`${a.knopf} ${s.knopf}`} href="tel:0323732244">
              {q.anrufen}
            </a>
            <button type="button" className={s.leise} onClick={nachricht}>
              {q.nachricht}
            </button>
          </div>
        </div>
      ) : (
        <>
          <Feld id="d-spolice" titel={q.vertrag}>
            <select id="d-spolice" name="police" key={vorwahl || 'leer'} defaultValue={vorwahl}>
              <option value="">{q.weissNicht}</option>
              {D.policen.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name.replace(/\u00ad/g, '')} · {p.gesellschaft} · {p.nummer}
                </option>
              ))}
            </select>
          </Feld>
          <div className={s.felderZeile}>
            <Feld id="d-swann" titel={q.wann} frei>
              <input id="d-swann" type="date" />
            </Feld>
            <Feld id="d-swo" titel={q.wo} frei>
              <input id="d-swo" type="text" autoComplete="off" />
            </Feld>
          </div>
          <Feld id="d-stext" titel={q.hergang} hilfe={q.hergangHilfe}>
            <textarea id="d-stext" name="text" required />
          </Feld>
          <WahlFeld id="d-shoehe" titel={q.hoehe} optionen={q.hoehen} name="hoehe" />
          <WahlFeld id="d-sdritte" titel={q.dritte} optionen={q.janein} name="dritte" />
          <WahlFeld id="d-spolizei" titel={q.polizei} optionen={q.janein} name="polizei" />
          <p className={s.hinweis}>{q.tipp}</p>
          <Rueckmeldung id="d-s" />
          {fehler ? (
            <p className={s.fehler} role="alert">
              {q.fehler}
            </p>
          ) : null}
          <div className={s.knoepfe}>
            <button type="submit" className={`${a.knopf} ${s.knopf}`}>
              {q.knopf}
            </button>
          </div>
        </>
      )}
    </form>
  )
}

function TreuhandDemo({ ablegen }: { ablegen: (betreff: string, text: string) => void }) {
  const D = useDemo()
  const q = D.anfragen.treuhand
  const [bereich, setBereich] = useState<number | null>(null)
  const [fehler, setFehler] = useState(false)
  const jahr = new Date().getFullYear()
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (bereich === null) {
          setFehler(true)
          return
        }
        const d = new FormData(e.currentTarget)
        const text = ['fuer', 'jahr', 'rechtsform', 'ab', 'text'].map((k) => String(d.get(k) ?? '').trim()).filter(Boolean).join(' · ')
        ablegen(`${q.betreff}: ${q.bereiche[bereich]}`, text)
      }}
    >
      <WahlFeld
        id="d-tbereich"
        titel={q.was}
        optionen={q.bereiche}
        name="bereich"
        onChange={(v) => {
          const i = q.bereiche.indexOf(v as never)
          setBereich(i < 0 ? null : i)
          setFehler(false)
        }}
      />
      {bereich === 0 ? (
        <>
          <WahlFeld id="d-tfuer" titel={q.fuer} optionen={q.fuerOptionen} name="fuer" />
          <WahlFeld id="d-tjahr" titel={q.jahr} optionen={[String(jahr - 1), String(jahr - 2), q.aelter]} name="jahr" />
        </>
      ) : bereich === 1 ? (
        <>
          <WahlFeld id="d-tform" titel={q.rechtsform} optionen={q.rechtsformen} name="rechtsform" />
          <WahlFeld id="d-tab" titel={q.ab} optionen={q.abOptionen} name="ab" />
        </>
      ) : null}
      <Feld id="d-ttext2" titel={q.text} frei>
        <textarea id="d-ttext2" name="text" />
      </Feld>
      <Rueckmeldung id="d-t" />
      {fehler ? (
        <p className={s.fehler} role="alert">
          {q.fehler}
        </p>
      ) : null}
      <div className={s.knoepfe}>
        <button type="submit" className={`${a.knopf} ${s.knopf}`}>
          {q.knopf}
        </button>
      </div>
    </form>
  )
}
