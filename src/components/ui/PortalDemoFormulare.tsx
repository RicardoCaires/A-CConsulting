'use client'

import { useState } from 'react'

import { Suchauswahl } from '@/components/ui/Suchauswahl'
import { autos, motorraeder } from '@/content/fahrzeuge'
import { useDemo } from '@/components/ui/PortalDemoText'

import a from './PortalAnsicht.module.css'
import s from './PortalDemo.module.css'

/**
 * Offertanfrage und Änderungsmeldung im Beispielportal (15.10.2026), aufgebaut wie im echten
 * Portal (`public-portal/offerte-assistent.js` und `vertragsformular` in `portal.js`):
 * Offerte Frage für Frage, Änderung mit gezielten Fragen je Art – beim Fahrzeugwechsel das
 * neue Fahrzeug mit Marken- und Modellsuche. Gesendet wird nichts; `ablegen` zeigt die
 * Anfrage nur in der Liste der Vorschau.
 */

type Ablegen = (betreff: string, text: string) => void
const ohneTrennung = (t: string) => t.split(String.fromCharCode(173)).join('')

/** Knöpfe für genau eine Antwort; ein zweiter Klick hebt die Wahl auf. Optional als Formularwert. */
export function Wahl({
  id,
  titel,
  optionen,
  wert,
  setze,
  name,
}: {
  id: string
  titel: string
  optionen: readonly string[]
  wert: string
  setze: (v: string) => void
  name?: string
}) {
  return (
    <div className={s.feld}>
      <span className={s.feldTitel} id={id}>
        {titel}
      </span>
      <div className={s.wahlReihe} role="group" aria-labelledby={id}>
        {optionen.map((o) => (
          <button key={o} type="button" className={s.wahlOption} aria-pressed={wert === o} onClick={() => setze(wert === o ? '' : o)}>
            {o}
          </button>
        ))}
      </div>
      {name ? <input type="hidden" name={name} value={wert} /> : null}
    </div>
  )
}

/** Wahl mit eigenem Zustand, als Formularwert `name`; `fest` verhindert das Abwählen. */
export function WahlFeld({
  id,
  titel,
  optionen,
  start = '',
  name,
  fest = false,
  onChange,
}: {
  id: string
  titel: string
  optionen: readonly string[]
  start?: string
  name: string
  fest?: boolean
  onChange?: (v: string) => void
}) {
  const [wert, setWert] = useState(start)
  return (
    <Wahl
      id={id}
      titel={titel}
      optionen={optionen}
      wert={wert}
      name={name}
      setze={(v) => {
        const neu = v || (fest ? wert : '')
        setWert(neu)
        onChange?.(neu)
      }}
    />
  )
}

function Fahrzeug({ art, wert, setze }: { art: string; wert: { marke: string; modell: string }; setze: (v: { marke: string; modell: string }) => void }) {
  const D = useDemo()
  // Motorrad · Moto · Mota/Motociclo – die Wahl kommt aus den übersetzten Optionen
  const marken = /^mot/i.test(art) ? motorraeder : autos
  const o = D.anfragen.offerte
  return (
    <div className={s.felderZeile}>
      <div className={s.feld}>
        <label htmlFor="d-marke" id="d-marke-titel">
          {o.marke}
        </label>
        <Suchauswahl id="d-marke" beschriftetVon="d-marke-titel" wert={wert.marke} optionen={Object.keys(marken)} onChange={(v) => setze({ marke: v, modell: '' })} />
      </div>
      <div className={s.feld}>
        <label htmlFor="d-modell" id="d-modell-titel">
          {o.modell}
        </label>
        <Suchauswahl id="d-modell" beschriftetVon="d-modell-titel" wert={wert.modell} optionen={marken[wert.marke] ?? []} onChange={(v) => setze({ ...wert, modell: v })} />
      </div>
    </div>
  )
}

/* ---- Offertanfrage Frage für Frage ------------------------------------------------- */

export function OfferteDemo({ ablegen }: { ablegen: Ablegen }) {
  const D = useDemo()
  const o = D.anfragen.offerte
  const [sparte, setSparte] = useState<number | null>(null)
  const [schritt, setSchritt] = useState(-1) // -1 Versicherung, 0… Fragen, n Bemerkung, n+1 Zusammenfassung
  const [verlauf, setVerlauf] = useState<number[]>([])
  const [werte, setWerte] = useState<Record<number, string>>({})
  const [fz, setFz] = useState({ marke: '', modell: '', ausfuehrung: '' })
  const [bemerkung, setBemerkung] = useState('')

  const fragen = sparte === null ? [] : (o.fragen[sparte]?.fragen ?? [])
  const n = fragen.length
  const gehe = (z: number) => {
    setVerlauf((v) => [...v, schritt])
    setSchritt(z)
  }
  const weiter = () => gehe(Math.min(schritt + 1, n + 1))
  const fahrzeugText = [fz.marke, fz.modell, fz.ausfuehrung].map((x) => x.trim()).filter(Boolean).join(' ')
  const antwort = (i: number) => {
    const f = fragen[i]
    return f && 'fahrzeug' in f ? fahrzeugText : (werte[i] ?? '')
  }
  const aktuelle = schritt >= 0 && schritt < n ? fragen[schritt] : undefined

  let inhalt
  if (schritt < 0) {
    inhalt = (
      <>
        <h5 className={s.frage}>{o.sparte}</h5>
        <p className={`${a.klein} ${s.absatz}`}>{o.sparteHilfe}</p>
        <div className={s.wahlKacheln}>
          {o.fragen.map((x, i) => (
            <button
              key={x.sparte}
              type="button"
              className={s.wahlOption}
              aria-pressed={sparte === i}
              onClick={() => {
                if (sparte !== i) {
                  setWerte({})
                  setFz({ marke: '', modell: '', ausfuehrung: '' })
                }
                setSparte(i)
                gehe(0)
              }}
            >
              {x.sparte}
            </button>
          ))}
        </div>
      </>
    )
  } else if (aktuelle) {
    const f = aktuelle
    const auswahl = 'optionen' in f
    inhalt = (
      <>
        <h5 className={s.frage} id="d-frage">
          {f.titel}
        </h5>
        {'optionen' in f ? (
          <div className={s.wahlReihe} role="group" aria-labelledby="d-frage">
            {f.optionen.map((x) => (
              <button
                key={x}
                type="button"
                className={s.wahlOption}
                aria-pressed={werte[schritt] === x}
                onClick={() => {
                  setWerte((w) => ({ ...w, [schritt]: x }))
                  weiter()
                }}
              >
                {x}
              </button>
            ))}
          </div>
        ) : (
          <>
            <Fahrzeug art={werte[0] ?? ''} wert={fz} setze={(v) => setFz((alt) => ({ ...alt, ...v }))} />
            <p className={`${a.klein} ${s.absatz}`}>{D.anfragen.vertrag.suchen}</p>
            <div className={s.feld}>
              <label htmlFor="d-ausfuehrung">{o.ausfuehrung}</label>
              <input id="d-ausfuehrung" type="text" autoComplete="off" placeholder={o.beispiel} value={fz.ausfuehrung} onChange={(e) => setFz((x) => ({ ...x, ausfuehrung: e.target.value }))} />
            </div>
          </>
        )}
        <div className={s.knoepfe}>
          {!auswahl ? (
            <button type="button" className={`${a.knopf} ${s.knopf}`} onClick={weiter}>
              {o.weiter}
            </button>
          ) : null}
          <button
            type="button"
            className={s.leise}
            onClick={() => {
              setWerte((w) => {
                const neu = { ...w }
                delete neu[schritt]
                return neu
              })
              weiter()
            }}
          >
            {o.ueberspringen}
          </button>
          <button type="button" className={s.leise} onClick={() => gehe(n)}>
            {o.gespraech}
          </button>
        </div>
      </>
    )
  } else if (schritt === n) {
    inhalt = (
      <>
        <p className={s.vorzeile}>{o.fastFertig}</p>
        <h5 className={s.frage}>{o.mitteilen}</h5>
        <div className={s.feld}>
          <label htmlFor="d-bemerkung">{o.bemerkung}</label>
          <textarea id="d-bemerkung" value={bemerkung} onChange={(e) => setBemerkung(e.target.value)} />
        </div>
        <div className={s.knoepfe}>
          <button type="button" className={`${a.knopf} ${s.knopf}`} onClick={weiter}>
            {o.weiter}
          </button>
        </div>
      </>
    )
  } else {
    const beantwortet = fragen.map((f, i) => ({ f, v: antwort(i) })).filter((x) => x.v)
    const name = sparte === null ? '' : (o.fragen[sparte]?.sparte ?? '')
    inhalt = (
      <>
        <p className={s.vorzeile}>{o.zusammenfassung}</p>
        <h5 className={s.frage}>
          {o.ihre} {name}
        </h5>
        <dl className={s.angaben}>
          {beantwortet.length ? (
            beantwortet.map(({ f, v }) => (
              <div key={f.titel}>
                <dt>{f.titel}</dt>
                <dd>{v}</dd>
              </div>
            ))
          ) : (
            <div>
              <dt>{o.angaben}</dt>
              <dd>{o.keineAngaben}</dd>
            </div>
          )}
          {bemerkung.trim() ? (
            <div>
              <dt>{o.bemerkung}</dt>
              <dd>{bemerkung.trim()}</dd>
            </div>
          ) : null}
        </dl>
        <div className={s.knoepfe}>
          <button
            type="button"
            className={`${a.knopf} ${s.knopf}`}
            onClick={() =>
              ablegen(
                `${o.betreff} ${name}`,
                [...beantwortet.map(({ f, v }) => `${f.titel} ${v}`), bemerkung.trim()].filter(Boolean).join('\n'),
              )
            }
          >
            {o.knopf}
          </button>
        </div>
      </>
    )
  }

  const ablauf = n + 2
  return (
    <div className={s.assistent}>
      {schritt >= 0 ? (
        <div className={s.fortschritt}>
          <progress max={ablauf} value={schritt + 1} aria-label={o.frageVon} />
          <span className={a.klein}>{schritt < n ? `${o.frageVon} ${schritt + 1} ${o.von} ${n}` : schritt > n ? o.letzter : null}</span>
        </div>
      ) : null}
      {inhalt}
      {verlauf.length ? (
        <div className={s.assistentFuss}>
          <button
            type="button"
            className={`${a.zurueck} ${s.zurueck}`}
            onClick={() => {
              setVerlauf((v) => v.slice(0, -1))
              setSchritt(verlauf[verlauf.length - 1] ?? -1)
            }}
          >
            ← {o.zurueck}
          </button>
        </div>
      ) : null}
    </div>
  )
}

/* ---- Änderung melden: gezielte Fragen je Art ---------------------------------------- */

const istFahrzeug = (name: string) => /fahrzeug|v[ée]hicule|ve[íi]culo|auto/i.test(name)

export function VertragDemo({ ablegen, vorgabe }: { ablegen: Ablegen; vorgabe: string | null }) {
  const D = useDemo()
  const v = D.anfragen.vertrag
  const [policeId, setPoliceId] = useState(vorgabe ?? D.policen[0].id)
  const [art, setArt] = useState('')
  const [werte, setWerte] = useState<Record<string, string>>({})
  const [fz, setFz] = useState({ marke: '', modell: '' })
  const [deckungen, setDeckungen] = useState<string[]>([])
  const [ergaenzung, setErgaenzung] = useState('')
  const [fehler, setFehler] = useState(false)

  const police = D.policen.find((p) => p.id === policeId) ?? D.policen[0]
  const fahrzeug = istFahrzeug(ohneTrennung(police.name))
  const arten = v.arten.filter((x) => !x.nurFahrzeug || fahrzeug)
  const gewaehlt = arten.find((x) => x.art === art)
  // «Anderes» ist die letzte Art, in jeder Sprache
  const istAnderes = art !== '' && art === v.arten[v.arten.length - 1]?.art
  const neu = (a2: string) => {
    setArt(a2)
    setWerte({})
    setFz({ marke: '', modell: '' })
    setDeckungen([])
    setFehler(false)
  }
  const setze = (key: string, w: string) => setWerte((x) => ({ ...x, [key]: w }))

  const zeilen = (gewaehlt?.felder ?? [])
    .map((f) => {
      if (f.typ === 'fahrzeug') {
        const t = [fz.marke, fz.modell, werte.ausfuehrung].filter(Boolean).join(' ')
        return t ? `${f.titel}: ${t}` : null
      }
      if (f.key === 'ausfuehrung') return null
      if (f.typ === 'deckungen') return deckungen.length ? `${f.titel} ${deckungen.join(', ')}` : null
      return werte[f.key] ? `${f.titel} ${werte[f.key]}` : null
    })
    .filter(Boolean)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const text = [...zeilen, ergaenzung.trim()].filter(Boolean).join('\n')
        if (!art || !text) {
          setFehler(true)
          return
        }
        ablegen(`${v.betreff} ${ohneTrennung(police.name)}`, `${art}\n${text}`)
      }}
    >
      <div className={s.feld}>
        <label htmlFor="d-police">{v.police}</label>
        <select
          id="d-police"
          value={policeId}
          onChange={(e) => {
            setPoliceId(e.target.value)
            neu('')
          }}
        >
          {D.policen.map((p) => (
            <option key={p.id} value={p.id}>
              {ohneTrennung(p.name)} · {p.gesellschaft} · {p.nummer}
            </option>
          ))}
        </select>
      </div>
      <Wahl id="d-was" titel={v.was} optionen={arten.map((x) => x.art)} wert={art} setze={neu} />
      {gewaehlt ? (
        <>
          {gewaehlt.felder.map((f) => {
            const id = `d-v-${f.key}`
            if (f.typ === 'wahl') {
              const optionen = f.key === 'kart' && !fahrzeug ? f.optionen.slice(0, 1) : f.optionen
              return <Wahl key={f.key} id={id} titel={f.titel} optionen={optionen} wert={werte[f.key] ?? ''} setze={(w) => setze(f.key, w)} />
            }
            if (f.typ === 'fahrzeug')
              return (
                <div key={f.key}>
                  <Fahrzeug art={werte.fzart ?? ''} wert={fz} setze={setFz} />
                  <p className={`${a.klein} ${s.absatz}`}>{v.suchen}</p>
                </div>
              )
            if (f.typ === 'deckungen')
              return (
                <fieldset key={f.key} className={s.hakenListe}>
                  <legend>{f.titel}</legend>
                  {police.leistungen.map((l) => {
                    const name = ohneTrennung(l.name)
                    return (
                      <label key={name} className={s.haken}>
                        <input
                          type="checkbox"
                          checked={deckungen.includes(name)}
                          onChange={(e) => setDeckungen((d) => (e.target.checked ? [...d, name] : d.filter((x) => x !== name)))}
                        />
                        <span>{name}</span>
                      </label>
                    )
                  })}
                </fieldset>
              )
            return (
              <div key={f.key} className={s.feld}>
                <label htmlFor={id}>
                  {f.titel}
                  <span className={s.frei}> · {D.anfragen.freiwillig}</span>
                </label>
                <input
                  id={id}
                  type={f.typ === 'datum' ? 'date' : 'text'}
                  autoComplete="off"
                  placeholder={f.key === 'ausfuehrung' ? D.anfragen.offerte.beispiel : undefined}
                  value={f.typ === 'datum' ? undefined : werte[f.key] ?? ''}
                  onChange={(e) => setze(f.key, f.typ === 'datum' ? e.target.value.split('-').reverse().join('.') : e.target.value)}
                />
              </div>
            )
          })}
          <div className={s.feld}>
            <label htmlFor="d-ab">
              {v.ab}
              <span className={s.frei}> · {D.anfragen.freiwillig}</span>
            </label>
            <input id="d-ab" type="date" />
          </div>
          <div className={s.feld}>
            <label htmlFor="d-ergaenzung">
              {istAnderes ? v.anderes : v.ergaenzen}
              {istAnderes ? null : <span className={s.frei}> · {D.anfragen.freiwillig}</span>}
            </label>
            <textarea id="d-ergaenzung" required={istAnderes} value={ergaenzung} onChange={(e) => setErgaenzung(e.target.value)} />
          </div>
          <p className={`${a.klein} ${s.absatz}`}>{v.hinweis}</p>
          {fehler ? (
            <p className={s.fehler} role="alert">
              {v.fehlt}
            </p>
          ) : null}
          <div className={s.knoepfe}>
            <button type="submit" className={`${a.knopf} ${s.knopf}`}>
              {v.knopf}
            </button>
          </div>
        </>
      ) : null}
    </form>
  )
}
