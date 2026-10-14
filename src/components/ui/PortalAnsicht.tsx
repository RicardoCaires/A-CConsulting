import Image from 'next/image'
import type { ReactNode } from 'react'

import { PortalBeispiel } from '@/components/ui/PortalBeispiel'
import {
  portalAnfragen,
  portalBeispiel,
  portalFenster,
  portalPolice,
  portalRahmen,
  portalUnterlagen,
  portalVersicherungen,
} from '@/content/seiten/portal-beispiel'
import type { PortalAnsicht as Art } from '@/content/seiten/typen'

import styles from './PortalAnsicht.module.css'

/**
 * Das Kundenportal als Fenster (15.10.2026), **nachgebaut nach den echten Portalseiten**
 * (`public-portal/portal.js` und `portal.css` im CRM). Ricardo: «das ist nicht die ansicht
 * in unserem system». Darum: dieselbe Schrift (Arial), derselbe Kopf mit grüner Linie oben
 * und Bereichen, dieselben Karten, Zeichen, Marken und Beschriftungen. Erfunden sind nur
 * Person, Verträge, Nummern und Beträge – sichtbar als Beispiel bezeichnet.
 *
 * Vier Seiten: Start (Cockpit mit Kostenring), Meine Versicherungen, Anfragen und die
 * Unterlagen einer Police. Reines HTML und SVG, ohne Skript.
 */

const chf = (n: number) => `CHF ${String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '’')}.00`

/** Die Linienzeichen des Portals (`ZEICHEN` in portal.js), unverändert übernommen. */
const ZEICHEN = {
  schild: 'M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z',
  dokument: 'M7 3h7l5 5v13H7z M14 3v5h5 M10 13h6 M10 17h6',
  telefon: 'M6 3h3l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2z',
  kalender: 'M4 6h16v15H4z M4 10h16 M8 3v5 M16 3v5',
  nachricht: 'M4 5h16v12H9l-5 4z',
  pfeil: 'M5 12h14 M13 6l6 6-6 6',
  zurueck: 'M19 12H5 M11 6l-6 6 6 6',
  laden: 'M12 4v11 M7 11l5 5 5-5 M5 20h14',
} as const

function Zeichen({ name, klasse }: { name: keyof typeof ZEICHEN; klasse?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={klasse ?? styles.zeichen} aria-hidden="true" focusable="false">
      <path d={ZEICHEN[name]} />
    </svg>
  )
}

/** Browserrahmen und Kopf des Portals; `aktiv` ist der markierte Bereich. */
function Rahmen({ aktiv, titel, children }: { aktiv: number; titel: string; children: ReactNode }) {
  const r = portalRahmen
  return (
    <figure className={styles.fenster} aria-label={`${titel}: ${r.hinweis}`}>
      <div className={styles.leiste} aria-hidden="true">
        <span className={styles.punkte}>
          <span />
          <span />
          <span />
        </span>
        <span className={styles.adresse}>{r.adresse}</span>
      </div>
      <div className={styles.portal}>
        <div className={styles.kopf}>
          <Image src="/logo/ac-logo.png" alt="" width={216} height={47} className={styles.logo} />
          <span className={styles.nav} aria-hidden="true">
            {r.navigation.map((n, i) => (
              <span key={n} className={i === aktiv ? styles.navAktiv : undefined}>
                {n}
              </span>
            ))}
          </span>
        </div>
        <div className={styles.inhalt}>{children}</div>
      </div>
      <figcaption className={styles.hinweis}>{r.hinweis}</figcaption>
    </figure>
  )
}

/* ---- Start: Cockpit mit Kostenring --------------------------------------------- */

const RINGFARBEN = [styles.r0, styles.r1, styles.r2, styles.r3]

function Start() {
  const f = portalFenster
  const summe = f.segmente.reduce((t, x) => t + x.betrag, 0)
  let versatz = 25
  return (
    <Rahmen aktiv={0} titel={f.vorzeile}>
      <div className={styles.willkommen}>
        <span className={styles.vorzeile}>{f.vorzeile}</span>
        <strong className={styles.h1}>{f.gruss}</strong>
        <span className={styles.leise}>{f.satz}</span>
      </div>
      <div className={styles.uebersicht}>
        {f.kennzahlen.map((k) => (
          <span key={k.text} className={styles.stand}>
            <strong>{k.zahl}</strong>
            <span>{k.text}</span>
            {'link' in k ? <span className={styles.standLink}>{k.link}</span> : null}
          </span>
        ))}
        <span className={`${styles.stand} ${styles.termin}`}>
          <span className={styles.standTitel}>{f.termin.titel}</span>
          <span>{f.termin.text}</span>
          <span className={styles.kleinKnopf}>{f.termin.knopf}</span>
        </span>
      </div>
      <div className={`${styles.karte} ${styles.kosten}`}>
        <strong className={styles.h2}>{f.ringTitel}</strong>
        <div className={styles.kostenInhalt}>
          <span className={styles.ring}>
            <svg viewBox="0 0 42 42" aria-hidden="true" focusable="false">
              <circle className={styles.ringGrund} cx="21" cy="21" r="15.9155" fill="none" strokeWidth="5.5" />
              {f.segmente.map((x, i) => {
                const anteil = (x.betrag / summe) * 100
                const lang = Math.max(anteil - 0.8, 0)
                const el = (
                  <circle
                    key={x.text}
                    className={RINGFARBEN[i % RINGFARBEN.length]}
                    cx="21"
                    cy="21"
                    r="15.9155"
                    fill="none"
                    strokeWidth="5.5"
                    strokeDasharray={`${lang} ${100 - lang}`}
                    strokeDashoffset={versatz}
                  />
                )
                versatz -= anteil
                return el
              })}
            </svg>
            <span className={styles.ringMitte}>
              <strong>{chf(summe)}</strong>
              <span>{f.proJahr}</span>
            </span>
          </span>
          <ul className={styles.legende}>
            {f.segmente.map((x, i) => (
              <li key={x.text}>
                <span className={`${styles.legendePunkt} ${RINGFARBEN[i % RINGFARBEN.length]}`} aria-hidden="true" />
                <span className={styles.legendeText}>{x.text}</span>
                <strong>{chf(x.betrag)}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Rahmen>
  )
}

/* ---- Meine Versicherungen ------------------------------------------------------ */

function Versicherungen() {
  const v = portalVersicherungen
  return (
    <Rahmen aktiv={1} titel={v.titel}>
      <strong className={styles.h1}>{v.titel}</strong>
      <strong className={styles.h2}>{v.gruppe}</strong>
      <div className={styles.policen}>
        {v.policen.map((p, i) => (
          <span key={p.zeile} className={i === v.angewaehlt ? `${styles.police} ${styles.policeAktiv}` : styles.police}>
            <span className={styles.rund}>
              <Zeichen name="schild" />
            </span>
            <span className={styles.policeText}>
              <strong>{p.name}</strong>
              <span>{p.gesellschaft}</span>
            </span>
            <Zeichen name="pfeil" klasse={`${styles.zeichen} ${styles.pfeil}`} />
          </span>
        ))}
      </div>
    </Rahmen>
  )
}

/* ---- Eine Police: Motorfahrzeug mit Leistungen und Download -------------------- */

function Police() {
  const p = portalPolice
  return (
    <Rahmen aktiv={1} titel={p.name}>
      <span className={styles.zurueck}>
        <Zeichen name="zurueck" />
        {p.zurueck}
      </span>
      <div className={styles.policeKopf}>
        <span className={`${styles.rund} ${styles.rundGross}`}>
          <Zeichen name="schild" />
        </span>
        <span className={styles.policeKopfText}>
          <strong className={styles.h1}>{p.name}</strong>
          <span className={styles.leise}>
            {p.gesellschaft} <span className={`${styles.marke} ${styles.markeGruen}`}>{p.status}</span>
          </span>
        </span>
        <span className={styles.knopf}>
          <Zeichen name="laden" />
          {p.knopf}
        </span>
      </div>
      <div className={styles.karte}>
        <strong className={styles.h2}>{p.titel}</strong>
        <ul className={styles.leistungen}>
          {p.leistungen.map((l) => (
            <li key={l.name}>
              <span className={styles.policeText}>
                <strong>{l.name}</strong>
                {l.zusatz ? <span className={styles.klein}>{l.zusatz}</span> : null}
              </span>
              {l.wert ? <span className={styles.wert}>{l.wert}</span> : null}
            </li>
          ))}
        </ul>
      </div>
    </Rahmen>
  )
}

/* ---- Anfragen ------------------------------------------------------------------- */

const WAHLZEICHEN = ['dokument', 'telefon', 'kalender', 'schild', 'nachricht'] as const
const MARKE = { offen: styles.marke, navy: `${styles.marke} ${styles.markeNavy}`, gruen: `${styles.marke} ${styles.markeGruen}` }

function Anfragen() {
  const a = portalAnfragen
  return (
    <Rahmen aktiv={2} titel={a.titel}>
      <strong className={styles.h1}>{a.titel}</strong>
      <div className={styles.wahl}>
        {a.wahl.map((w, i) => (
          <span key={w} className={styles.wahlKnopf}>
            <span className={styles.rund}>
              <Zeichen name={WAHLZEICHEN[i] ?? 'nachricht'} />
            </span>
            <strong>{w}</strong>
          </span>
        ))}
      </div>
      <strong className={styles.h2}>{a.bisher}</strong>
      <div className={styles.anfragen}>
        {a.anfragen.map((x) => (
          <span key={x.betreff} className={`${styles.karte} ${styles.anfrage}`}>
            <span>
              <strong>{x.betreff}</strong>
              <span className={styles.klein}> · {x.datum}</span>
            </span>
            <span className={MARKE[x.art]}>{x.stand}</span>
          </span>
        ))}
      </div>
    </Rahmen>
  )
}

/* ---- Eine Police: Unterlagen --------------------------------------------------- */

function Unterlagen() {
  const u = portalUnterlagen
  return (
    <Rahmen aktiv={1} titel={u.titel}>
      <span className={styles.zurueck}>
        <Zeichen name="zurueck" />
        {u.zurueck}
      </span>
      <div className={styles.policeKopf}>
        <span className={`${styles.rund} ${styles.rundGross}`}>
          <Zeichen name="schild" />
        </span>
        <span className={styles.policeKopfText}>
          <strong className={styles.h1}>{u.name}</strong>
          <span className={styles.leise}>
            {u.gesellschaft} <span className={`${styles.marke} ${styles.markeGruen}`}>{u.status}</span>
          </span>
        </span>
      </div>
      <div className={styles.karte}>
        <strong className={styles.h2}>{u.titel}</strong>
        <div className={styles.dokumente}>
          {u.dokumente.map((d) => (
            <span key={d.name} className={styles.dokument}>
              <span className={styles.dokumentBild}>
                <Zeichen name="dokument" />
              </span>
              <span className={styles.policeText}>
                <strong>{d.name}</strong>
                <span className={styles.klein}>{d.zeile}</span>
              </span>
              <span className={d.haupt ? styles.knopf : `${styles.knopf} ${styles.knopfLeise}`}>
                <Zeichen name="laden" />
                {d.knopf}
              </span>
            </span>
          ))}
        </div>
      </div>
    </Rahmen>
  )
}

export function PortalAnsicht({ ansicht = 'praemien' }: { ansicht?: Art }) {
  switch (ansicht) {
    case 'fenster':
      return <Start />
    case 'versicherungen':
      return <Versicherungen />
    case 'police':
      return <Police />
    case 'anfragen':
      return <Anfragen />
    case 'unterlagen':
      return <Unterlagen />
    default:
      return <PortalBeispiel {...portalBeispiel} />
  }
}
