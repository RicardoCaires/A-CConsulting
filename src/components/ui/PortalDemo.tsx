'use client'

import Image from 'next/image'
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react'

import { Kostenring, Zeichen } from '@/components/ui/PortalAnsicht'
import { portalDemo as D, portalRahmen } from '@/content/seiten/portal-beispiel'

import a from './PortalAnsicht.module.css'
import s from './PortalDemo.module.css'

/**
 * Das Kundenportal zum Durchklicken (15.10.2026). Ricardo: «interaktiv das Kundenportal
 * zeigen sodass man … fiktiv browsen kann natürlich mit erfundenen Daten und ohne das man
 * etwas absenden kann».
 *
 * Seiten, Kacheln und Formulare wie in `public-portal/portal.js` im CRM: Start, Meine
 * Versicherungen mit jeder Police, Anfragen mit den fünf Formularen und Meine Angaben.
 * **Es geht keine Anfrage hinaus**: Die Formulare haben kein Ziel, das Absenden wird
 * abgefangen und durch einen Hinweis ersetzt, Herunterladen ebenso. Es wird nichts
 * gespeichert; neu Laden stellt den Anfang wieder her. Alle Angaben sind erfunden.
 */

type Seite = (typeof D.navigation)[number]['seite']
type Formular = (typeof D.anfragen.formulare)[number]['formular']
type Police = (typeof D.policen)[number]
type Anfrage = { betreff: string; datum: string; stand: string; art: 'offen' | 'navy' | 'gruen'; text: string }

const MARKE = { offen: a.marke, navy: `${a.marke} ${a.markeNavy}`, gruen: `${a.marke} ${a.markeGruen}` }

/** 07:30 bis 18:30 im Halbstundentakt, wie im Portal. */
const UHRZEITEN = Array.from({ length: 23 }, (_, i) => `${String(7 + Math.floor((i + 1) / 2)).padStart(2, '0')}:${(i + 1) % 2 ? '30' : '00'}`)

const heute = () => {
  const t = new Date()
  return `${String(t.getDate()).padStart(2, '0')}.${String(t.getMonth() + 1).padStart(2, '0')}.${t.getFullYear()}`
}

function Feld({ id, titel, frei, hilfe, children }: { id: string; titel: string; frei?: boolean; hilfe?: string; children: ReactNode }) {
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

export function PortalDemo() {
  const [seite, setSeite] = useState<Seite>('start')
  const [policeId, setPoliceId] = useState<string | null>(null)
  const [formular, setFormular] = useState<Formular | null>(null)
  const [vorgabe, setVorgabe] = useState<string | null>(null)
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
  }, [seite, policeId, formular])

  const geh = (ziel: Seite, mehr: { police?: string | null; formular?: Formular | null; vorgabe?: string | null } = {}) => {
    setSeite(ziel)
    setPoliceId(mehr.police ?? null)
    setFormular(mehr.formular ?? null)
    setVorgabe(mehr.vorgabe ?? null)
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
    const text = String(daten.get('text') ?? '').trim()
    setAnfragen((x) => [{ betreff: eigen || betreff, datum: heute(), stand: D.anfragen.neu, art: 'offen', text }, ...x])
    setFormular(null)
    melde(D.meldungSenden)
  }

  // Eine Funktion, keine Komponente: sonst entstünde die Überschrift bei jedem Zeichnen neu
  const ueberschrift = (text: string) => (
    <h3 ref={titel} tabIndex={-1} className={`${a.h1} ${s.titel}`}>
      {text}
    </h3>
  )

  const segmente = D.policen.map((p) => ({ text: p.name, betrag: p.jahr }))
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
      <Kostenring titel={D.start.ringTitel} proJahr={D.start.proJahr} segmente={segmente} />
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
      <Kostenring titel={D.start.ringTitel} proJahr={D.start.proJahr} segmente={segmente} />
      <h4 className={a.h2}>{D.versicherungen.gruppe}</h4>
      <div className={a.policen}>
        {D.policen.map((p) => (
          <button key={p.id} type="button" className={`${a.police} ${s.knopfPolice}`} onClick={() => geh('versicherungen', { police: p.id })}>
            <span className={a.rund}>
              <Zeichen name="schild" />
            </span>
            <span className={a.policeText}>
              <strong>{p.name}</strong>
              <span>{p.gesellschaft}</span>
              <span className={a.klein}>
                Police {p.nummer} · {p.dokumente.length}{' '}
                {p.dokumente.length === 1 ? D.versicherungen.unterlage : D.versicherungen.unterlagen}
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
          <span className={`${a.rund} ${a.rundGross}`}>
            <Zeichen name="schild" />
          </span>
          <span className={a.policeKopfText}>
            {ueberschrift(p.name)}
            <span className={a.leise}>
              {p.gesellschaft} <span className={`${a.marke} ${a.markeGruen}`}>{w.status}</span>
            </span>
          </span>
          <button type="button" className={`${a.knopf} ${s.knopf}`} onClick={() => melde(D.meldungLaden)}>
            <Zeichen name="laden" />
            {w.herunterladen}
          </button>
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
            <ul className={a.leistungen}>
              {p.leistungen.map((l) => (
                <li key={l.name}>
                  <span className={a.policeText}>
                    <strong>{l.name}</strong>
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
          <div className={a.dokumente}>
            {p.dokumente.map((d) => (
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
          <button type="button" className={s.leise} onClick={() => geh('anfragen', { formular: 'nachricht', vorgabe: p.id })}>
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
        return (
          <form onSubmit={sende(q.offerte.betreff)}>
            <Feld id="d-sparte" titel={q.offerte.sparte}>
              <select id="d-sparte" name="sparte" required defaultValue="">
                <option value="" disabled>
                  {q.bitteWaehlen}
                </option>
                {q.offerte.sparten.map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </select>
            </Feld>
            <p className={`${s.hinweis} ${s.absatz}`}>{q.offerte.hinweis}</p>
            <Feld id="d-bemerkung" titel={q.offerte.bemerkung} frei>
              <textarea id="d-bemerkung" name="text" />
            </Feld>
            {knopfSenden(q.offerte.knopf)}
          </form>
        )
      case 'rueckruf':
        return (
          <form onSubmit={sende(q.rueckruf.betreff)}>
            <div className={s.felderZeile}>
              <Feld id="d-telefon" titel={q.rueckruf.telefon}>
                <input id="d-telefon" type="tel" required defaultValue={q.rueckruf.nummer} autoComplete="off" />
              </Feld>
              <Feld id="d-zeit" titel={q.rueckruf.zeit}>
                <select id="d-zeit">
                  {q.rueckruf.zeiten.map((x) => (
                    <option key={x}>{x}</option>
                  ))}
                </select>
              </Feld>
            </div>
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
              <Feld id="d-ort" titel={q.termin.ort}>
                <select id="d-ort">
                  {q.termin.orte.map((x) => (
                    <option key={x}>{x}</option>
                  ))}
                </select>
              </Feld>
            </div>
            <Feld id="d-ttext" titel={q.termin.text} frei>
              <textarea id="d-ttext" name="text" />
            </Feld>
            <p className={`${a.klein} ${s.absatz}`}>{q.termin.hinweis}</p>
            {knopfSenden(q.termin.knopf)}
          </form>
        )
      case 'vertrag':
        return (
          <form onSubmit={sende(q.vertrag.betreff)}>
            <Feld id="d-police" titel={q.vertrag.police}>
              <select id="d-police" defaultValue={vorgabe ?? D.policen[0].id}>
                {D.policen.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name.replace(/­/g, '')} · {p.gesellschaft} · {p.nummer}
                  </option>
                ))}
              </select>
            </Feld>
            <div className={s.felderZeile}>
              <Feld id="d-was" titel={q.vertrag.was}>
                <select id="d-was">
                  {q.vertrag.aenderungen.map((x) => (
                    <option key={x}>{x}</option>
                  ))}
                </select>
              </Feld>
              <Feld id="d-ab" titel={q.vertrag.ab} frei>
                <input id="d-ab" type="date" />
              </Feld>
            </div>
            <Feld id="d-vtext" titel={q.vertrag.text} hilfe={q.vertrag.hilfe}>
              <textarea id="d-vtext" name="text" required />
            </Feld>
            <p className={`${a.klein} ${s.absatz}`}>{q.vertrag.hinweis}</p>
            {knopfSenden(q.vertrag.knopf)}
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
    const eintrag = D.anfragen.formulare.find((x) => x.formular === formular)
    return (
      <>
        {ueberschrift(D.anfragen.titel)}
        <div className={`${a.wahl} ${s.wahl}`}>
          {D.anfragen.formulare.map((w) => (
            <button
              key={w.formular}
              type="button"
              aria-pressed={formular === w.formular}
              className={`${a.wahlKnopf} ${s.knopfWahl}`}
              onClick={() => {
                setFormular(formular === w.formular ? null : w.formular)
                setVorgabe(null)
                setMeldung(null)
              }}
            >
              <span className={a.rund}>
                <Zeichen name={w.zeichen} />
              </span>
              <strong>{w.titel}</strong>
              <span className={a.klein}>{w.text}</span>
            </button>
          ))}
        </div>
        {formular && eintrag ? (
          <section className={`${a.karte} ${s.formular}`}>
            <h4 ref={formTitel} tabIndex={-1} className={`${a.h2} ${s.kartenTitel} ${s.titel}`}>
              {eintrag.titel}
            </h4>
            {formularInhalt(formular)}
          </section>
        ) : (
          <p className={`${a.leise} ${s.absatz}`}>{D.anfragen.waehlen}</p>
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
      <div className={a.portal}>
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
      </div>
    </div>
  )
}
