'use client'

import { useId, useState } from 'react'

import { FliessendeZahl } from '@/components/ui/Fliessend'
import { vorsorgeKennzahlen as fr } from '@/content/fr/vorsorge-kennzahlen'
import { vorsorgeKennzahlen as pt } from '@/content/pt/vorsorge-kennzahlen'
import { vorsorgeKennzahlen as de, type Gruppe, type KennzahlId } from '@/content/vorsorge-kennzahlen'
import type { Locale } from '@/i18n/config'
import { chfGanz, verbunden, werteFuer, type Jahr } from '@/lib/vorsorge-kennzahlen'

import styles from './VorsorgeKarte.module.css'

/**
 * Interaktive Karte der Vorsorge-Kennzahlen (19.10.2026), im Beitrag «Vorsorge-Kennzahlen 2027».
 * Ricardo: «so wie finanzfabio einen Interaktive karte mit unserem Design».
 *
 * Eine Zahl antippen: Sie wird navy, die Zahlen, mit denen sie verrechnet ist, bekommen einen grünen Rand, und
 * darunter steht die Rechnung mit den Beträgen des gewählten Jahres. Der Jahreswechsel lässt alle Beträge fliessend
 * zum neuen Wert laufen. Rechnet im Browser, sendet nichts. Ohne JavaScript bleibt die Tabelle darunter lesbar.
 */

/** Texte der Sprache; Kennungen und Zahlen sind in allen Fassungen gleich. */
const texte = (locale: Locale) => (locale === 'fr' ? fr : locale === 'pt' ? pt : de) as unknown as typeof de

const TON: Record<Gruppe, string | undefined> = { ahv: styles.tonNavy, bvg: styles.tonGruen, s3a: styles.tonGrau, uvg: styles.tonTief }

export function VorsorgeKarte({ locale = 'de' }: { locale?: Locale }) {
  const V = texte(locale)
  const [jahr, setJahr] = useState<Jahr>(2027)
  const [wahl, setWahl] = useState<KennzahlId>('ahvMax')
  const id = useId()
  const w = werteFuer(jahr)
  const vorher = jahr > V.jahre[0] ? werteFuer((jahr - 1) as Jahr) : null
  const nah = verbunden(wahl)
  const k = V.kennzahlen.find((x) => x.id === wahl)!
  const rechnungen = V.beziehungen.filter((b) => b.ergebnis === wahl || (b.teile as readonly string[]).includes(wahl))
  const name = (kid: string) => V.kennzahlen.find((x) => x.id === kid)?.titel ?? kid

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

      <div className={styles.gruppen}>
        {V.gruppen.map((g) => (
          <section key={g.id} className={`${styles.gruppe} ${TON[g.id] ?? ""}`} aria-labelledby={`${id}-${g.id}`}>
            <h3 id={`${id}-${g.id}`} className={styles.gruppeTitel}>
              {g.titel}
            </h3>
            <div className={styles.kacheln}>
              {V.kennzahlen
                .filter((x) => x.gruppe === g.id)
                .map((x) => {
                  const diff = vorher ? w[x.id] - vorher[x.id] : 0
                  return (
                    <button
                      key={x.id}
                      type="button"
                      className={styles.kachel}
                      aria-pressed={wahl === x.id}
                      data-verbunden={nah.has(x.id) || undefined}
                      aria-controls={`${id}-detail`}
                      onClick={() => setWahl(x.id)}
                    >
                      <span className={styles.kachelTitel}>{x.titel}</span>
                      <span className={styles.wert}>
                        <FliessendeZahl wert={w[x.id]} format={chfGanz} />
                      </span>
                      <span className={styles.einheit}>
                        {x.einheit}
                        {'monat' in x && x.monat ? (
                          <>
                            {' · '}
                            <FliessendeZahl wert={w[x.id] / 12} format={chfGanz} /> {V.proMonat}
                          </>
                        ) : null}
                      </span>
                      {vorher ? (
                        <span className={styles.diff}>
                          {diff ? `+${chfGanz(diff).replace('CHF ', '')} ${V.gegenueber} ${jahr - 1}` : V.unveraendert}
                        </span>
                      ) : null}
                    </button>
                  )
                })}
            </div>
          </section>
        ))}
      </div>

      <div id={`${id}-detail`} className={styles.detail} aria-live="polite">
        <p className={styles.detailTitel}>
          {k.titel} {jahr}: <strong>{chfGanz(w[k.id])}</strong>
        </p>
        <p className={styles.detailKurz}>{k.kurz}</p>
        <div className={styles.detailSpalten}>
          <div>
            <p className={styles.detailUnter}>{V.soHaengtZusammen}</p>
            {rechnungen.length ? (
              <ul className={styles.rechnungen}>
                {rechnungen.map((b) => (
                  <li key={b.ergebnis + b.text}>
                    <button type="button" className={styles.rechnungKnopf} onClick={() => setWahl(b.ergebnis as KennzahlId)}>
                      <span className={styles.rechnungErgebnis}>{name(b.ergebnis)}</span>
                      <span className={styles.rechnungText}>
                        = {b.text} = <strong>{chfGanz(w[b.ergebnis as KennzahlId])}</strong>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className={styles.detailKurz}>{V.ohneBeziehung}</p>
            )}
          </div>
          {k.tipps.length ? (
            <div>
              <p className={styles.detailUnter}>{V.gutZuWissen}</p>
              <ul className={styles.tipps}>
                {k.tipps.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>

      <p className={styles.stand}>{V.stand}</p>
    </div>
  )
}

/** Vergleichstabelle 2026 / 2027 – für Suchmaschinen und ohne JavaScript lesbar. */
export function VorsorgeTabelle({ locale = 'de' }: { locale?: Locale }) {
  const V = texte(locale)
  const [a, b] = V.jahre
  const wa = werteFuer(a)
  const wb = werteFuer(b)
  return (
    <div className={styles.tabelleRahmen}>
      <table className={styles.tabelle}>
        <caption>
          {V.tabelleTitel} · {V.tabelleBetrag}
        </caption>
        <thead>
          <tr>
            <th scope="col">{V.tabelleKennzahl}</th>
            <th scope="col">{a}</th>
            <th scope="col">{b}</th>
          </tr>
        </thead>
        <tbody>
          {V.kennzahlen.map((x) => (
            <tr key={x.id}>
              <th scope="row">{x.titel}</th>
              <td>{chfGanz(wa[x.id]).replace('CHF ', '')}</td>
              <td>{chfGanz(wb[x.id]).replace('CHF ', '')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
