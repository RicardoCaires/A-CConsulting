import Image from 'next/image'

import { Banner } from '@/components/blocks/Banner'
import { PortalBeispiel } from '@/components/ui/PortalBeispiel'
import type { StartseiteContent, Titel, Ziel } from '@/content/startseite'
import type { Locale } from '@/i18n/config'
import { hrefOrDefault, isPublished, path } from '@/i18n/routes'
import { addressLines, company } from '@/lib/company'

import styles from './Startseite.module.css'

/**
 * Startseite, Fassung vom 14.10.2026.
 *
 * Auf Ricardos Auftrag schlanker und «weniger nach KI»: Vorbild simply.ch, übertragen
 * auf A&C. Jeder Abschnitt ist ein weisser Block mit grossen Ecken auf dem hellblauen
 * Grund. Überschriften zweifarbig, ohne Vorzeilen. Leistungen als Listen statt
 * Symbolkacheln, Digital mit einer Beispielansicht samt Diagramm, Ansprechpartner mit
 * Fotos. Abwechslung entsteht aus verschiedenen Formen, nicht aus Effekten.
 *
 * Der Banner bleibt: Ricardos Festlegung vom 15.09.2026 («das Stadtbild muss sichtbar
 * sein») gilt weiter.
 */

/** Zweifarbige Überschrift. Das mittlere Wort ist grün; Grün bleibt damit Akzent. */
function Ueberschrift({ titel, id, als = 'h2' }: { titel: Titel; id?: string; als?: 'h2' | 'h3' }) {
  const Tag = als
  return (
    <Tag id={id} className={styles.titel}>
      {titel.vor}
      <span className={styles.akzent}>{titel.akzent}</span>
      {titel.nach}
    </Tag>
  )
}

/** Ziel mit Anker – nur auf veröffentlichte Seiten. */
function href(z: Ziel, locale: Locale) {
  const basis = isPublished(z.ziel, locale) ? path(z.ziel, locale) : hrefOrDefault(z.ziel, locale)
  return z.anker ? `${basis}#${z.anker}` : basis
}

const Pfeil = () => (
  <span className={styles.pfeil} aria-hidden="true">
    →
  </span>
)

export function StartseiteTemplate({ inhalt, locale }: { inhalt: StartseiteContent; locale: Locale }) {
  const { intro, leistungen, digital, personen, kontakt } = inhalt

  return (
    <>
      <Banner
        themenzeile={inhalt.einstieg.themenzeile}
        ueberschrift={inhalt.einstieg.titel}
        id="einstieg"
        knopf={inhalt.cta}
        locale={locale}
        vorrang
      />

      <div className={styles.seite}>
        <div className={`ac-container ${styles.bloecke}`}>
          {/* ---- Wer wir sind --------------------------------------------- */}
          <section className={`${styles.block} ${styles.intro}`} aria-labelledby="intro">
            <Ueberschrift titel={intro.titel} id="intro" />
            <div className={styles.introText}>
              {intro.absaetze.map((a) => (
                <p key={a}>{a}</p>
              ))}
            </div>
            <div className={styles.knoepfe}>
              <a className={styles.knopf} href={path('offerte', locale)}>
                {intro.offerte} <Pfeil />
              </a>
              <a className={`${styles.knopf} ${styles.knopfZweit}`} href={company.kundenportal}>
                {intro.portal} <Pfeil />
              </a>
            </div>
          </section>

          {/* ---- Leistungen als Listen ------------------------------------ */}
          <section className={styles.block} aria-labelledby="leistungen-titel" id="leistungen">
            <Ueberschrift titel={leistungen.titel} id="leistungen-titel" />
            <div className={styles.listen}>
              {leistungen.listen.map((liste) => (
                <nav key={liste.titel} className={styles.liste} aria-label={liste.titel}>
                  <h3 className={styles.listeTitel}>
                    <a href={href(liste, locale)}>{liste.titel}</a>
                  </h3>
                  <ul>
                    {liste.eintraege.map((e) => (
                      <li key={e.text}>
                        <a href={href(e, locale)}>
                          <span>{e.text}</span>
                          <span className={styles.chevron} aria-hidden="true">
                            ›
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>
          </section>

          {/* ---- Digital und Kundenportal ---------------------------------- */}
          <section className={`${styles.block} ${styles.digital}`} aria-labelledby="digital-titel" id="digital">
            <div className={styles.digitalText}>
              <Ueberschrift titel={digital.titel} id="digital-titel" />
              {digital.absaetze.map((a) => (
                <p key={a} className={styles.absatz}>
                  {a}
                </p>
              ))}
              <ul className={styles.haken}>
                {digital.punkte.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className={styles.knoepfe}>
                <a className={styles.knopf} href={company.kundenportal}>
                  {digital.portal} <Pfeil />
                </a>
                <a className={styles.textlink} href={path('offerte', locale)}>
                  {digital.offerte}
                </a>
              </div>
            </div>
            <div className={styles.digitalBild}>
              <PortalBeispiel {...digital.beispiel} />
            </div>
          </section>

          {/* ---- Ansprechpartner ------------------------------------------- */}
          <section className={`${styles.block} ${styles.personen}`} aria-labelledby="personen">
            <div className={styles.personenKopf}>
              <Ueberschrift titel={personen.titel} id="personen" />
              <p className={styles.absatz}>{personen.satz}</p>
              <a className={styles.textlink} href={hrefOrDefault(personen.link.ziel, locale)}>
                {personen.link.text}
              </a>
            </div>
            <ul className={styles.leute}>
              {personen.leute.map((p) => (
                <li key={p.name} className={styles.person}>
                  <Image
                    src={p.bild.datei}
                    alt={p.bild.alt}
                    width={560}
                    height={420}
                    sizes="(min-width: 64rem) 22rem, (min-width: 40rem) 45vw, 90vw"
                    className={styles.foto}
                  />
                  <span className={styles.name}>{p.name}</span>
                  <span className={styles.funktion}>{p.funktion}</span>
                  {p.linkedin ? (
                    <a className={styles.textlinkKlein} href={p.linkedin} target="_blank" rel="noopener noreferrer">
                      {personen.linkedinText}
                    </a>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>

          {/* ---- Kontakt -------------------------------------------------- */}
          <section className={`${styles.block} ${styles.kontakt}`} aria-labelledby="kontakt">
            <div>
              <Ueberschrift titel={kontakt.titel} id="kontakt" />
              <p className={styles.absatz}>{kontakt.satz}</p>
              <div className={styles.knoepfe}>
                <a className={styles.knopf} href={hrefOrDefault('kontakt', locale)}>
                  {inhalt.cta} <Pfeil />
                </a>
              </div>
            </div>
            <dl className={styles.angaben}>
              <div>
                <dt>{kontakt.felder.telefon}</dt>
                <dd>
                  <a href={`tel:${company.phoneE164}`}>{company.phone}</a>
                </dd>
              </div>
              <div>
                <dt>{kontakt.felder.email}</dt>
                <dd>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </dd>
              </div>
              <div>
                <dt>{kontakt.felder.adresse}</dt>
                <dd>
                  {addressLines.map((z) => (
                    <span key={z} className={styles.zeile}>
                      {z}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </section>
        </div>
      </div>
    </>
  )
}
