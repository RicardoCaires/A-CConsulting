import Image from 'next/image'

import { Banner } from '@/components/blocks/Banner'
import { Kontaktformular } from '@/components/blocks/Kontaktformular'
import { UnserModell } from '@/components/blocks/UnserModell'
import { PortalAnsicht } from '@/components/ui/PortalAnsicht'
import { PortalDemo } from '@/components/ui/PortalDemo'
import { Rechner3a } from '@/components/ui/Rechner3a'
import { ZeitleisteKantone } from '@/components/seite/ZeitleisteKantone'
import { RichText } from '@/components/ui/RichText'
import { Standortkarte } from '@/components/ui/Standortkarte'
import { SteuerCheckliste } from '@/components/ui/SteuerCheckliste'
import { kontaktformular as kontaktformularFr } from '@/content/fr/kontaktformular'
import { getPageContent } from '@/content/pages'
import { kontaktformular as kontaktformularPt } from '@/content/pt/kontaktformular'
import type { Block, Knopf, SeitenInhalt, Titel, Ziel } from '@/content/seiten/typen'
import type { Locale } from '@/i18n/config'
import { getUi } from '@/i18n/messages/ui'
import { hrefOrDefault, isPublished, path } from '@/i18n/routes'
import { addressLines, company, direktadressen, direktnummern, mapsRoute } from '@/lib/company'
import { istKostenlos, nachSprache } from '@/lib/sprache'

import styles from './Seite.module.css'

/**
 * Baukasten der Seiten (15.10.2026). Setzt eine Seite aus Blöcken zusammen:
 * Banner, dann weisse Blöcke auf hellblauem Grund. Die Form jedes Blocks steht
 * hier und nur hier – eine Änderung wirkt auf allen Seiten.
 *
 * Vorbild simply.ch, übertragen auf A&C (Ricardo, 14.10.2026): zweifarbige
 * Überschriften ohne Vorzeile, keine Werbesprüche, keine Symbolkacheln, Navy nie
 * als Fläche. Abwechslung kommt aus den verschiedenen Blockarten.
 */

/* ---- Kleine Bausteine ------------------------------------------------------- */

function Ueberschrift({ titel, id, h1 }: { titel: Titel; id?: string; h1?: boolean }) {
  const Tag = h1 ? 'h1' : 'h2'
  return (
    <Tag id={id} className={h1 ? `${styles.titel} ${styles.titelGross}` : styles.titel}>
      {titel.vor}
      <span className={styles.akzent}>{titel.akzent}</span>
      {titel.nach}
    </Tag>
  )
}

function zielHref(z: Ziel, locale: Locale) {
  const basis = isPublished(z.ziel, locale) ? path(z.ziel, locale) : hrefOrDefault(z.ziel, locale)
  return z.anker ? `${basis}#${z.anker}` : basis
}

function knopfHref(k: Knopf, locale: Locale): { href: string; extern?: boolean } {
  if ('datei' in k) return { href: k.datei }
  if ('href' in k) {
    switch (k.href) {
      case 'kundenportal':
        return { href: company.kundenportal }
      case 'telefon':
        return { href: `tel:${company.phoneE164}` }
      case 'email':
        return { href: `mailto:${company.email}` }
      case 'offerte':
        return { href: path('offerte', locale) }
      case 'route':
        return { href: mapsRoute, extern: true }
    }
  }
  return { href: zielHref(k, locale) }
}

/** Farbton der Listenkarten, abwechselnd (Corporate Design: Grün, Navy, Grau). */
const TOENE = ['gruen', 'navy', 'grau'] as const

function Knoepfe({ knoepfe, locale }: { knoepfe?: readonly Knopf[]; locale: Locale }) {
  if (!knoepfe?.length) return null
  return (
    <div className={styles.knoepfe}>
      {knoepfe.map((k) => {
        const { href, extern } = knopfHref(k, locale)
        const klasse = k.art === 'zweit' ? `${styles.knopf} ${styles.knopfZweit}` : styles.knopf
        return (
          <a key={k.text} className={klasse} href={href} {...(extern ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
            {k.text}
            <span className={styles.pfeil} aria-hidden="true">
              {' →'}
            </span>
          </a>
        )
      })}
    </div>
  )
}

function Absaetze({ absaetze }: { absaetze?: readonly Parameters<typeof RichText>[0]['value'][] }) {
  if (!absaetze?.length) return null
  return (
    <>
      {absaetze.map((a, i) => (
        <p key={i} className={styles.absatz}>
          <RichText value={a} />
        </p>
      ))}
    </>
  )
}

/**
 * Haken-Liste. Steht vor dem ersten Doppelpunkt ein Stichwort, wird es fett und
 * dunkel gesetzt – so findet das Auge den Anfang jeder Zeile (Ricardo, 15.10.2026:
 * «man verliest sich in der zeile … wenn alles gleichfarbig ist»).
 */
function Haken({ punkte }: { punkte?: readonly string[] }) {
  if (!punkte?.length) return null
  return (
    <ul className={styles.haken}>
      {punkte.map((p) => {
        const i = p.indexOf(': ')
        return (
          <li key={p}>
            {i > 0 ? (
              <>
                <strong className={styles.stichwort}>{p.slice(0, i)}</strong> {p.slice(i + 2)}
              </>
            ) : (
              p
            )}
          </li>
        )
      })}
    </ul>
  )
}

/** Was zwischen zwei Stellen im Geschäftsmodell hin- und zurückgeht. */
function Pfeile({ paar }: { paar: { hin: string; zurueck: string } }) {
  return (
    <div className={styles.pfeile}>
      <span className={styles.pfeilHin}>{paar.hin}</span>
      <span className={styles.pfeilZurueck}>{paar.zurueck}</span>
    </div>
  )
}

function Kopf({ block, h1, nr }: { block: { titel: Titel; einleitung?: Parameters<typeof RichText>[0]['value'] }; h1: boolean; nr: number }) {
  return (
    <>
      <Ueberschrift titel={block.titel} id={`block-${nr}`} h1={h1} />
      {block.einleitung ? (
        <p className={styles.einleitung}>
          <RichText value={block.einleitung} />
        </p>
      ) : null}
    </>
  )
}

/* ---- Die Blockarten ----------------------------------------------------------- */

function BlockInhalt({ block, locale, h1, nr }: { block: Block; locale: Locale; h1: boolean; nr: number }) {
  switch (block.art) {
    case 'text':
      return (
        <div className={block.breit ? styles.textBreit : undefined}>
          <div>
            <Kopf block={block} h1={h1} nr={nr} />
          </div>
          <div>
            <Absaetze absaetze={block.absaetze} />
            <Haken punkte={block.punkte} />
            <Knoepfe knoepfe={block.knoepfe} locale={locale} />
          </div>
        </div>
      )

    case 'listen':
      if (block.darstellung === 'kacheln') {
        return (
          <>
            <Kopf block={block} h1={h1} nr={nr} />
            <div className={styles.kachelGruppen}>
              {block.listen.map((liste, li) => (
                <section key={liste.titel} id={liste.id} className={styles.kachelGruppe} data-ton={li % 2 ? 'navy' : 'gruen'}>
                  <div className={styles.kachelKopf}>
                    <h3 className={styles.kachelTitel}>{liste.titel}</h3>
                    <span className={styles.kachelZahl} aria-hidden="true">
                      {liste.eintraege.length}
                    </span>
                  </div>
                  <ul className={styles.kacheln}>
                    {liste.eintraege.map((e) => (
                      <li key={e.text}>
                        <span className={styles.kachelHaken} aria-hidden="true">
                          ✓
                        </span>
                        {e.text}
                      </li>
                    ))}
                  </ul>
                  {liste.knopf ? <Knoepfe knoepfe={[liste.knopf]} locale={locale} /> : null}
                </section>
              ))}
            </div>
          </>
        )
      }
      return (
        <>
          <Kopf block={block} h1={h1} nr={nr} />
          <div className={styles.listen} data-anzahl={block.listen.length}>
            {block.listen.map((liste, li) => (
              <nav key={liste.titel} id={liste.id} className={styles.liste} aria-label={liste.titel} data-ton={TOENE[li % TOENE.length]}>
                <h3 className={styles.listeTitel}>
                  {liste.ziel ? <a href={zielHref(liste.ziel, locale)}>{liste.titel}</a> : liste.titel}
                </h3>
                <ul>
                  {liste.eintraege.map((e) => {
                    const inhalt = (
                      <>
                        <span className={styles.listeHaken} aria-hidden="true">
                          ✓
                        </span>
                        <span className={styles.listeText}>
                          {e.text}
                          {e.zusatz ? <span className={styles.zusatz}>{e.zusatz}</span> : null}
                        </span>
                        {e.ziel ? (
                          <span className={styles.chevron} aria-hidden="true">
                            →
                          </span>
                        ) : null}
                      </>
                    )
                    return (
                      <li key={e.text}>
                        {e.ziel ? (
                          <a href={zielHref({ ziel: e.ziel, anker: e.anker }, locale)}>{inhalt}</a>
                        ) : (
                          <div className={styles.eintrag}>{inhalt}</div>
                        )}
                      </li>
                    )
                  })}
                </ul>
                {liste.knopf ? <Knoepfe knoepfe={[liste.knopf]} locale={locale} /> : null}
              </nav>
            ))}
          </div>
        </>
      )

    case 'textBild':
      return (
        <div
          className={`${styles.textBild} ${block.bildLinks ? styles.bildLinks : ''} ${
            block.bild.art === 'portal' && block.bild.ansicht === 'fenster' ? styles.bildGross : ''
          }`}
        >
          <div className={styles.textSpalte}>
            <Kopf block={block} h1={h1} nr={nr} />
            <Absaetze absaetze={block.absaetze} />
            <Haken punkte={block.punkte} />
            <Knoepfe knoepfe={block.knoepfe} locale={locale} />
          </div>
          <div className={styles.bildSpalte}>
            <Bild bild={block.bild} locale={locale} />
          </div>
        </div>
      )

    case 'schritte':
      return (
        <>
          <Kopf block={block} h1={h1} nr={nr} />
          <ol className={styles.schritte} data-anzahl={block.schritte.length}>
            {block.schritte.map((s, i) => (
              <li key={s.titel}>
                <span className={styles.nummer} aria-hidden="true">
                  {i + 1}
                </span>
                <h3 className={styles.schrittTitel}>{s.titel}</h3>
                <p className={styles.schrittText}>{s.text}</p>
              </li>
            ))}
          </ol>
          {block.nachsatz ? (
            <p className={styles.nachsatz}>
              <RichText value={block.nachsatz} />
            </p>
          ) : null}
        </>
      )

    case 'vergleich':
      return (
        <>
          <Kopf block={block} h1={h1} nr={nr} />
          {/* Alle Spalten teilen dieselben Zeilen (Subgrid): Mindestkapital, Haftung … und
              «Passt …» stehen nebeneinander auf gleicher Höhe (Ricardo: «nicht versetzt»). */}
          <div className={styles.vergleich}>
            {block.spalten.map((sp) => (
              <div
                key={sp.titel}
                className={styles.vergleichSpalte}
                style={{ ['--zeilen' as string]: 1 + (sp.untertitel ? 1 : 0) + sp.zeilen.length + (sp.passt ? 1 : 0) }}
              >
                <h3 className={styles.vergleichTitel}>{sp.titel}</h3>
                {sp.untertitel ? <p className={styles.vergleichUnter}>{sp.untertitel}</p> : null}
                <dl className={styles.merkmale}>
                  {sp.zeilen.map((z) => (
                    <div key={z.merkmal}>
                      <dt>{z.merkmal}</dt>
                      <dd>{z.wert}</dd>
                    </div>
                  ))}
                </dl>
                {sp.passt ? <p className={styles.passt}>{sp.passt}</p> : null}
              </div>
            ))}
          </div>
          {block.nachsatz ? (
            <p className={styles.nachsatz}>
              <RichText value={block.nachsatz} />
            </p>
          ) : null}
          <Knoepfe knoepfe={block.knoepfe} locale={locale} />
        </>
      )

    case 'tabelle':
      return (
        <>
          <Kopf block={block} h1={h1} nr={nr} />
          <div className={styles.tabelleRahmen}>
            <table className={styles.tabelle}>
              <thead>
                <tr>
                  {block.kopfzeile.map((k) => (
                    <th key={k} scope="col">
                      {k}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.zeilen.map((z, i) => (
                  <tr key={i}>
                    {z.map((zelle, j) =>
                      j === 0 ? (
                        <th key={j} scope="row">
                          {zelle}
                        </th>
                      ) : (
                        <td key={j}>{zelle}</td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.nachsaetze?.map((n, i) => (
            <p key={i} className={styles.nachsatz}>
              <RichText value={n} />
            </p>
          ))}
          <Knoepfe knoepfe={block.knoepfe} locale={locale} />
        </>
      )

    case 'portalDemo':
      return (
        <>
          <Kopf block={block} h1={h1} nr={nr} />
          <PortalDemo locale={locale} />
          <Knoepfe knoepfe={block.knoepfe} locale={locale} />
        </>
      )

    case 'portalAnsichten':
      return (
        <>
          <Kopf block={block} h1={h1} nr={nr} />
          <ul className={styles.ansichten} data-anzahl={block.ansichten.length}>
            {block.ansichten.map((a) => (
              <li key={a.ansicht} className={styles.ansichtFeld}>
                <PortalAnsicht ansicht={a.ansicht} locale={locale} />
                <h3 className={styles.ansichtTitel}>{a.titel}</h3>
                <p className={styles.ansichtText}>{a.text}</p>
              </li>
            ))}
          </ul>
          <Knoepfe knoepfe={block.knoepfe} locale={locale} />
        </>
      )

    case 'zeitleiste':
      return (
        <>
          <Kopf block={block} h1={h1} nr={nr} />
          {block.kantone ? (
            <ZeitleisteKantone
              beschriftung={block.kantone.beschriftung}
              titelPrivat={block.reihen[0]?.titel ?? ''}
              titelUnternehmen={block.reihen[1]?.titel ?? ''}
              locale={locale}
            />
          ) : (
          <div className={styles.reihen}>
            {block.reihen.map((r, ri) => (
              <div key={r.titel ?? ri} className={styles.reihe}>
                {r.titel ? <h3 className={styles.reiheTitel}>{r.titel}</h3> : null}
                <ol className={styles.leiste} data-anzahl={r.stationen.length}>
                  {r.stationen.map((st) => (
                    <li key={`${st.marke ?? ''}${st.titel}`} className={st.hervor ? styles.stationHervor : styles.station}>
                      <span className={styles.punktLeiste} aria-hidden="true" />
                      {st.marke ? <span className={styles.stationMarke}>{st.marke}</span> : null}
                      <span className={styles.stationTitel}>{st.titel}</span>
                      {st.wert ? (
                        <span className={styles.stationWert} data-kostenlos={istKostenlos(st.wert)}>
                          {st.wert}
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
          )}
          {block.nachsaetze?.map((n, i) => (
            <p key={i} className={styles.nachsatz}>
              <RichText value={n} />
            </p>
          ))}
          <Knoepfe knoepfe={block.knoepfe} locale={locale} />
        </>
      )

    case 'fluss':
      return (
        <>
          <Kopf block={block} h1={h1} nr={nr} />
          <ol className={styles.fluss} data-anzahl={block.stufen.length}>
            {block.stufen.map((st, i) => (
              <li key={st.titel} className={i === block.stufen.length - 1 ? `${styles.stufe} ${styles.stufeZiel}` : styles.stufe}>
                <h3 className={styles.stufeTitel}>{st.titel}</h3>
                <ul className={styles.stufePunkte}>
                  {st.punkte.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
          {block.checkliste ? <SteuerCheckliste datenschutzHref={zielHref({ ziel: 'datenschutz' }, locale)} locale={locale} /> : null}
          {block.nachsatz ? (
            <p className={styles.nachsatz}>
              <RichText value={block.nachsatz} />
            </p>
          ) : null}
          <Knoepfe knoepfe={block.knoepfe} locale={locale} />
        </>
      )

    case 'geschaeftsmodell':
      return (
        <>
          <Kopf block={block} h1={h1} nr={nr} />
          <div className={styles.modell}>
            <div className={styles.knoten}>
              <h3 className={styles.knotenTitel}>{block.sie.titel}</h3>
              <p className={styles.knotenText}>{block.sie.text}</p>
            </div>
            <Pfeile paar={block.hin[0]} />
            <div className={`${styles.knoten} ${styles.knotenAc}`}>
              <Image src="/logo/ac-logo.png" alt="" width={216} height={47} className={styles.knotenLogo} />
              <h3 className={styles.unsichtbar}>{block.ac.titel}</h3>
              <ul className={styles.knotenPunkte}>
                {block.ac.punkte.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            <Pfeile paar={block.hin[1]} />
            <div className={styles.knoten}>
              <h3 className={styles.knotenTitel}>{block.markt.titel}</h3>
              <ul className={styles.knotenLogos}>
                {block.markt.gesellschaften.map((g) => (
                  <li key={g.name}>
                    <Image src={`/bilder/${g.bild}_mitte.webp`} alt={g.name} width={400} height={220} sizes="6rem" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ul className={styles.fakten}>
            {block.fakten.map((f) => (
              <li key={f.titel}>
                <strong>{f.titel}</strong>
                <span>{f.text}</span>
              </li>
            ))}
          </ul>
        </>
      )

    case 'matrix':
      return (
        <>
          <Kopf block={block} h1={h1} nr={nr} />
          {block.gruppen.map((g) => (
            <div key={g.titel} className={styles.matrixGruppe}>
              <h3 className={styles.reiheTitel}>{g.titel}</h3>
              {/* Breit: Tabelle mit Punkten. Schmal: je Ereignis eine Karte mit den betroffenen Versicherungen. */}
              <div className={styles.matrixRahmen}>
                <table className={styles.matrix}>
                  <thead>
                    <tr>
                      <th scope="col">
                        <span className={styles.unsichtbar}>Ereignis</span>
                      </th>
                      {g.spalten.map((s) => (
                        <th key={s} scope="col">
                          {s}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {g.zeilen.map((z) => (
                      <tr key={z.titel}>
                        <th scope="row">{z.titel}</th>
                        {g.spalten.map((s, j) => (
                          <td key={s}>
                            {z.treffer.includes(j) ? (
                              <span className={styles.treffer}>
                                <span className={styles.unsichtbar}>betroffen</span>
                              </span>
                            ) : (
                              <span className={styles.keinTreffer} aria-hidden="true" />
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <ul className={styles.matrixKarten}>
                {g.zeilen.map((z) => (
                  <li key={z.titel}>
                    <strong>{z.titel}</strong>
                    <span className={styles.pillen}>
                      {z.treffer.map((j) => (
                        <span key={j}>{g.spalten[j]}</span>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {block.nachsatz ? (
            <p className={styles.nachsatz}>
              <RichText value={block.nachsatz} />
            </p>
          ) : null}
        </>
      )

    case 'rechner3a':
      return (
        <>
          <Kopf block={block} h1={h1} nr={nr} />
          <Rechner3a kontaktHref={zielHref({ ziel: 'kontakt' }, locale)} locale={locale} />
        </>
      )

    case 'fragen':
      return (
        <div className={styles.fragenRaster}>
          <div>
            <Kopf block={block} h1={h1} nr={nr} />
          </div>
          <div className={styles.fragen}>
            {block.fragen.map((f) => (
              <details key={f.frage} className={styles.frage}>
                <summary>
                  <span>{f.frage}</span>
                  <span className={styles.plus} aria-hidden="true" />
                </summary>
                <p className={styles.antwort}>
                  <RichText value={f.antwort} />
                </p>
              </details>
            ))}
          </div>
        </div>
      )

    case 'personen':
      return (
        <div className={block.ausfuehrlich ? undefined : styles.personenRaster}>
          <div className={styles.personenKopf}>
            <Kopf block={block} h1={h1} nr={nr} />
            {block.satz ? <p className={styles.absatz}>{block.satz}</p> : null}
            <Knoepfe knoepfe={block.knoepfe} locale={locale} />
          </div>
          <ul className={block.ausfuehrlich ? `${styles.leute} ${styles.leuteGross}` : styles.leute}>
            {block.leute.map((p) => (
              <li key={p.name} className={styles.person}>
                <Image
                  src={p.bild.datei}
                  alt={p.bild.alt}
                  width={560}
                  height={420}
                  sizes="(min-width: 64rem) 30rem, (min-width: 40rem) 45vw, 90vw"
                  className={styles.foto}
                />
                <span className={styles.name}>{p.name}</span>
                <span className={styles.rolle}>{p.rolle}</span>
                {p.angaben?.length ? (
                  <dl className={styles.angabenKlein}>
                    {p.angaben.map((a) => (
                      <div key={a.merkmal}>
                        <dt>{a.merkmal}</dt>
                        <dd>{a.wert}</dd>
                      </div>
                    ))}
                  </dl>
                ) : null}
                {p.sprachen ? <span className={styles.sprachen}>{p.sprachen}</span> : null}
                <span className={styles.personLinks}>
                  {p.telefon ? (
                    <a className={styles.knopf} href={`tel:${direktnummern[p.telefon].e164}`}>
                      {direktnummern[p.telefon].anzeige}
                    </a>
                  ) : null}
                  {p.email ? (
                    <a className={`${styles.knopf} ${styles.knopfZweit}`} href={`mailto:${direktadressen[p.email]}`}>
                      E-Mail
                    </a>
                  ) : null}
                  {p.linkedin ? (
                    <a className={`${styles.knopf} ${styles.knopfZweit}`} href={p.linkedin} target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  ) : null}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )

    case 'kontakt': {
      const ui = getUi(locale)
      return (
        <div className={styles.kontakt}>
          <div>
            <Kopf block={block} h1={h1} nr={nr} />
            <p className={styles.absatz}>{block.satz}</p>
            {block.ohneKnopf ? null : (
              <Knoepfe knoepfe={[{ text: ui.cta, ziel: 'kontakt' }]} locale={locale} />
            )}
          </div>
          <dl className={styles.angaben}>
            <div>
              <dt>{block.beschriftungen.telefon}</dt>
              <dd>
                <a href={`tel:${company.phoneE164}`}>{company.phone}</a>
              </dd>
            </div>
            <div>
              <dt>{block.beschriftungen.email}</dt>
              <dd>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </dd>
            </div>
            <div>
              <dt>{block.beschriftungen.buero}</dt>
              <dd>
                {addressLines.map((z) => (
                  <span key={z} className={styles.zeile}>
                    {z}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      )
    }

    case 'modell':
    case 'formular':
      return null
  }
}

function Bild({ bild, locale }: { bild: Extract<Block, { art: 'textBild' }>['bild']; locale: Locale }) {
  switch (bild.art) {
    case 'foto':
      return <Image src={bild.datei} alt={bild.alt} width={bild.breite} height={bild.hoehe} sizes="(min-width: 64rem) 34rem, 90vw" className={styles.bildFoto} />
    case 'portal':
      return (
        <div className={styles.bildFlaeche}>
          <PortalAnsicht ansicht={bild.ansicht} locale={locale} />
        </div>
      )
    case 'karte':
      return (
        <div className={styles.karte}>
          <Standortkarte titel={bild.titel}
          />
        </div>
      )
    case 'versicherer':
      return (
        <div className={styles.bildFlaeche}>
          <p className={styles.versichererHinweis}>{bild.hinweis}</p>
          <ul className={styles.logos} role="list">
            {bild.gesellschaften.map((g) => (
              <li key={g.name}>
                <a href={g.url} target="_blank" rel="noopener noreferrer">
                  <Image src={`/bilder/${g.bild}_mitte.webp`} alt={`${g.name} — Schaden melden`} width={400} height={220} sizes="(min-width: 64rem) 160px, 30vw" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )
  }
}

/* ---- Eigene Bausteine, unverändert übernommen -------------------------------- */

function Modell({ id, locale }: { id?: string; locale: Locale }) {
  const quelle = getPageContent(locale, 'versicherungen') ?? getPageContent('de', 'versicherungen')
  const m = quelle?.blocks.find((b) => b.kind === 'modell')
  if (!m || m.kind !== 'modell') return null
  return (
    <UnserModell
      id={id ?? m.id}
      eyebrow=""
      heading={m.heading}
      lead={m.lead}
      grundsaetze={m.grundsaetze}
      kunde={m.kunde}
      mandat={m.mandat}
      mitte={m.mitte}
      preisvergleich={m.preisvergleich}
      markt={m.markt}
      ergebnis={m.ergebnis}
      nutzen={m.nutzen}
    />
  )
}

function Formular({ id, locale }: { id?: string; locale: Locale }) {
  const quelle = getPageContent('de', 'kontakt')
  const deutsch = quelle?.blocks.find((b) => b.kind === 'kontaktformular')
  if (!deutsch || deutsch.kind !== 'kontaktformular') return null
  const f = nachSprache(locale, { de: deutsch, fr: kontaktformularFr, pt: kontaktformularPt })
  return (
    <Kontaktformular
      id={id ?? f.id}
      locale={locale}
      eyebrow=""
      heading={f.heading}
      lead={f.lead}
      kontakt={f.kontakt}
      zusage={f.zusage}
      formular={f.formular}
    />
  )
}

/* ---- Die Seite ---------------------------------------------------------------- */

export function Seite({ inhalt, locale, vorrang = false }: { inhalt: SeitenInhalt; locale: Locale; vorrang?: boolean }) {
  const ui = getUi(locale)
  const ohneBanner = !inhalt.banner
  return (
    <>
      {inhalt.banner ? (
        <Banner
          themenzeile={inhalt.banner.themenzeile}
          ueberschrift={inhalt.banner.ueberschrift}
          unterzeile={inhalt.banner.unterzeile}
          id="seitenkopf"
          knopf={ui.cta}
          locale={locale}
          vorrang={vorrang}
        />
      ) : null}

      <div className={`${styles.seite} ${ohneBanner ? styles.seiteOhneBanner : ''}`}>
        <div className={`ac-container ${styles.bloecke}`}>
          {inhalt.bloecke.map((block, i) => {
            if (block.art === 'modell') {
              return (
                <div key={i} className={styles.eigen}>
                  <Modell id={block.id} locale={locale} />
                </div>
              )
            }
            if (block.art === 'formular') {
              return (
                <div key={i} className={styles.eigen}>
                  <Formular id={block.id} locale={locale} />
                </div>
              )
            }
            return (
              <section key={i} id={block.id} className={styles.block} aria-labelledby={`block-${i}`}>
                <BlockInhalt block={block} locale={locale} h1={ohneBanner && i === 0} nr={i} />
              </section>
            )
          })}
        </div>
      </div>
    </>
  )
}
