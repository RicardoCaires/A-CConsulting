'use client'

import { useEffect, useId, useRef, useState } from 'react'

import { FliessendeZahl } from '@/components/ui/Fliessend'
import { vorsorgeKennzahlen as fr } from '@/content/fr/vorsorge-kennzahlen'
import { vorsorgeKennzahlen as pt } from '@/content/pt/vorsorge-kennzahlen'
import { vorsorgeKennzahlen as de, type Gruppe, type KennzahlId } from '@/content/vorsorge-kennzahlen'
import type { Locale } from '@/i18n/config'
import { chfGanz, werteFuer, type Jahr } from '@/lib/vorsorge-kennzahlen'

import styles from './VorsorgeKarte.module.css'

/**
 * Interaktive Karte der Vorsorge-Kennzahlen (19.10.2026), im Beitrag «Vorsorge-Kennzahlen 2027».
 *
 * Seit dem zweiten Wurf vom selben Tag kompakt, nach Ricardos Rückmeldung: «sehr unübersichtlich … wie bei
 * finanzfabio beim drücken der Kennzahl soll die Beschreibung aufgerufen werden man soll nicht ewigsscrollen …
 * alles auf einen Blick». Alle elf Werte stehen als Zeilen «Bezeichnung – Betrag» in vier Spalten (AHV, BVG, 3a,
 * UVG). Ein Druck auf eine Zeile öffnet ein Fenster (`<dialog>`) mit Beschreibung, Rechnung und Hinweisen; die
 * Rechnung lässt sich dort direkt weiterverfolgen. Escape, der Schliessknopf und ein Klick daneben schliessen es.
 * Der Jahreswechsel lässt alle Beträge fliessend zum neuen Wert laufen. Rechnet im Browser, sendet nichts.
 */

/** Texte der Sprache; Kennungen und Zahlen sind in allen Fassungen gleich. */
const texte = (locale: Locale) => (locale === 'fr' ? fr : locale === 'pt' ? pt : de) as unknown as typeof de

const TON: Record<Gruppe, string | undefined> = { ahv: styles.tonNavy, bvg: styles.tonGruen, s3a: styles.tonGrau, uvg: styles.tonTief }

const SCHLIESSEN: Record<Locale, string> = { de: 'Schliessen', fr: 'Fermer', pt: 'Fechar' }

const ohneChf = (n: number) => chfGanz(n).replace('CHF ', '')

export function VorsorgeKarte({ locale = 'de' }: { locale?: Locale }) {
  const V = texte(locale)
  const [jahr, setJahr] = useState<Jahr>(2027)
  const [offen, setOffen] = useState<KennzahlId | null>(null)
  const fenster = useRef<HTMLDialogElement>(null)
  const id = useId()
  const w = werteFuer(jahr)
  const vorher = jahr > V.jahre[0] ? werteFuer((jahr - 1) as Jahr) : null

  // Fenster öffnen und schliessen, wie der Zustand es sagt
  useEffect(() => {
    const d = fenster.current
    if (!d) return
    if (offen && !d.open) d.showModal()
    if (!offen && d.open) d.close()
  }, [offen])

  const k = offen ? V.kennzahlen.find((x) => x.id === offen) : null
  const rechnungen = offen ? V.beziehungen.filter((b) => b.ergebnis === offen || (b.teile as readonly string[]).includes(offen)) : []
  const name = (kid: string) => V.kennzahlen.find((x) => x.id === kid)?.titel ?? kid
  const gruppeVon = (kid: string) => V.gruppen.find((g) => g.id === V.kennzahlen.find((x) => x.id === kid)?.gruppe)

  return (
    <div className={styles.karte}>
      <div className={styles.kopf}>
        <div>
          <p className={styles.kopfTitel}>
            {V.titel} {jahr}
          </p>
          <p className={styles.kopfSatz}>{V.hinweisAntippen}</p>
        </div>
        <div className={styles.jahre} role="group" aria-label={V.jahrWahl}>
          {V.jahre.map((j) => (
            <button key={j} type="button" aria-pressed={j === jahr} onClick={() => setJahr(j)}>
              {j}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.spalten}>
        {V.gruppen.map((g) => (
          <section key={g.id} data-gruppe={g.id} className={`${styles.spalte} ${TON[g.id] ?? ''}`} aria-labelledby={`${id}-${g.id}`}>
            <h3 id={`${id}-${g.id}`} className={styles.spalteTitel}>
              {g.titel}
            </h3>
            <ul className={styles.zeilen}>
              {V.kennzahlen
                .filter((x) => x.gruppe === g.id)
                .map((x) => (
                  <li key={x.id}>
                    <button type="button" className={styles.zeile} aria-haspopup="dialog" onClick={() => setOffen(x.id)}>
                      <span className={styles.zeileTitel}>{x.titel}</span>
                      <span className={styles.zeileWert}>
                        <FliessendeZahl wert={w[x.id]} format={ohneChf} />
                      </span>
                    </button>
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </div>

      <p className={styles.stand}>{V.stand}</p>

      <dialog
        ref={fenster}
        className={styles.fenster}
        aria-labelledby={`${id}-fenster-titel`}
        onClose={() => setOffen(null)}
        onClick={(e) => {
          // Klick auf den abgedunkelten Rand schliesst
          if (e.target === e.currentTarget) setOffen(null)
        }}
      >
        {k ? (
          <div className={`${styles.fensterInhalt} ${TON[k.gruppe] ?? ''}`}>
            <div className={styles.fensterKopf}>
              <p className={styles.fensterGruppe}>{gruppeVon(k.id)?.titel}</p>
              <button type="button" className={styles.zu} onClick={() => setOffen(null)} aria-label={SCHLIESSEN[locale]}>
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M6 6l12 12 M18 6L6 18" />
                </svg>
              </button>
            </div>
            <h3 id={`${id}-fenster-titel`} className={styles.fensterTitel}>
              {k.titel} {jahr}
            </h3>
            <p className={styles.fensterWert}>{chfGanz(w[k.id])}</p>
            <p className={styles.fensterEinheit}>
              {k.einheit}
              {'monat' in k && k.monat ? ` · ${chfGanz(w[k.id] / 12)} ${V.proMonat}` : ''}
              {vorher ? (
                <span className={styles.diff}>
                  {' · '}
                  {w[k.id] - vorher[k.id] ? `+${ohneChf(w[k.id] - vorher[k.id])} ${V.gegenueber} ${jahr - 1}` : V.unveraendert}
                </span>
              ) : null}
            </p>
            <p className={styles.kurz}>{k.kurz}</p>

            <p className={styles.unter}>{V.soHaengtZusammen}</p>
            {rechnungen.length ? (
              <ul className={styles.rechnungen}>
                {rechnungen.map((b) => (
                  <li key={b.ergebnis + b.text}>
                    <button type="button" className={styles.rechnung} onClick={() => setOffen(b.ergebnis as KennzahlId)} disabled={b.ergebnis === k.id}>
                      <span className={styles.rechnungName}>{name(b.ergebnis)}</span>
                      <span className={styles.rechnungText}>
                        {b.text} = <strong>{chfGanz(w[b.ergebnis as KennzahlId])}</strong>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className={styles.kurz}>{V.ohneBeziehung}</p>
            )}

            {k.tipps.length ? (
              <>
                <p className={styles.unter}>{V.gutZuWissen}</p>
                <ul className={styles.tipps}>
                  {k.tipps.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>
        ) : null}
      </dialog>
    </div>
  )
}
