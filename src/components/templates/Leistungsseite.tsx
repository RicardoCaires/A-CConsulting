import Image from 'next/image'

import { CTASection } from '@/components/blocks/CTASection'
import { Fragen } from '@/components/blocks/Fragen'
import { Banner } from '@/components/blocks/Banner'
import { pruefeFlaechen, type Surface } from '@/components/blocks/Section'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { RichText } from '@/components/ui/RichText'
import { alsText, Translated, TranslatedRich } from '@/components/ui/Translated'
import type { Leistungsseite } from '@/content/schema'
import type { Locale } from '@/i18n/config'
import { getUi } from '@/i18n/messages/ui'
import { hrefOrDefault } from '@/i18n/routes'

import styles from './Leistungsseite.module.css'

/**
 * Vorlage B — Leistungsseite.
 *
 * Jede Leistung ist gleich aufgebaut, damit der Besucher sich nur einmal
 * zurechtfinden muss:
 *
 *   1 Seitenkopf     einspaltig, Bild als Flaeche, Titel darauf  — DOMINANT
 *   2 Leistungen     Karten mit Symbol                            ┐ eine
 *   3 Ablauf         vier Karten, Nummern verbunden               ┘ Flaeche
 *   4 Vertiefung     optional; hier landet abgegebener Fliesstext — weiss
 *   5 Fragen         der Baustein `Fragen`, hellblau
 *   6 Abschluss      CTASection, optional                         — FLAECHE
 *
 * **2 und 3 seit dem 11.09.2026 nach Ricardos Referenzgrafik** fuer
 * `/treuhand/buchhaltung`: beide auf einer gemeinsamen Flaeche mit dem
 * gelieferten Hintergrund, der Ablauf eine Spur blauer abgesetzt. Die
 * Symbole kommen aus `bild`, wo die Seite geliefert hat; sonst bleibt das
 * Zeichen aus `Icon.tsx` — die Vorlage bleibt fuer kuenftige Seiten nutzbar.
 *
 * Die beiden leisen Zusaetze der Grafik („Zuverlässig. Strukturiert. An Ihrer
 * Seite.", „Klar. Persönlich. Effizient.") und die Marke „A&C Consulting"
 * unten rechts sind **nicht** uebernommen. Ricardo hat Zusaetze, die nicht im
 * Auftragstext stehen, mehrfach streichen lassen.
 *
 * **5 seit demselben Tag der Baustein `Fragen`** — „häufige Fragen überall
 * gleich designen".
 *
 * Fest ist die **Reihenfolge**, nicht der Wortlaut: Die Zwischentitel kommen
 * aus dem Inhalt, weil Schritt 4 je Seite eigene Ueberschriften nennt.
 *
 * `pruefeFlaechen` prueft die zugewiesene Folge weiterhin; die Abschnitte 2, 3
 * und 5 tragen seit dem Umbau eine eigene Flaeche.
 */

/**
 * Flaechen der Inhaltsabschnitte zwischen Kopf und Abschluss.
 *
 * Sie wechseln weiss und Off-White. Der Kopf ist immer dominant, der Abschluss
 * bringt seine Flaeche selbst mit — beide zaehlen hier nicht mit.
 */
function flaechenFolge(anzahl: number): Surface[] {
  return Array.from({ length: anzahl }, (_, i) => (i % 2 === 0 ? 'weiss' : 'hell'))
}

type Props = {
  inhalt: Leistungsseite
  locale: Locale
}

export function LeistungsseiteTemplate({ inhalt, locale }: Props) {
  const ui = getUi(locale)

  // Kopf und Abschluss bringen ihre Flaeche selbst mit.
  const flaechen = flaechenFolge(inhalt.vertiefung ? 4 : 3)
  // Der Abschluss ist optional — auf `/treuhand/buchhaltung` seit dem
  // 11.09.2026 gestrichen.
  const fAbschluss: Surface | undefined = inhalt.cta
    ? inhalt.ctaVariante === 'hell'
      ? 'hell'
      : 'flaeche'
    : undefined

  pruefeFlaechen(
    ['dominant', ...flaechen, ...(fAbschluss ? [fAbschluss] : [])],
    String(inhalt.slug),
  )

  const vertiefung = inhalt.vertiefung

  // Ohne Abschluss nimmt der Knopf im Seitenkopf die Beschriftung der Kopfzeile.
  const knopf = inhalt.cta ? alsText(inhalt.cta.knopf, ui.cta) : ui.cta
  // Ohne Endung ein WebP, mit Endung die gelieferte Datei (etwa `.svg`).
  const bildPfad = (datei: string) =>
    `/bilder/${inhalt.slug}/${datei.includes('.') ? datei : `${datei}.webp`}`

  const symbol = (bild: string | undefined, fallback: Parameters<typeof Icon>[0]['name']) =>
    bild ? (
      <Image
        className={styles.symbol}
        src={bildPfad(bild)}
        alt=""
        width={256}
        height={256}
        unoptimized
      />
    ) : (
      <span className={`${styles.symbol} ${styles.symbolZeichen}`} aria-hidden="true">
        <Icon name={fallback} size={1.5} />
      </span>
    )

  return (
    <>
      {/* ---- 1 Seitenkopf — die dominante Flaeche der Seite -------------- */}
      <Banner
        themenzeile={inhalt.banner.themenzeile}
        ueberschrift={inhalt.banner.ueberschrift}
        id="seitenkopf"
        knopf={knopf}
        locale={locale}
      />

      {/* ---- 2 und 3 auf einer gemeinsamen Flaeche ------------------------ */}
      <div
        className={styles.zone}
        style={
          inhalt.hintergrund
            ? { backgroundImage: `url(${bildPfad(inhalt.hintergrund)})` }
            : undefined
        }
      >
        {/* ---- 2 Was wir übernehmen ----------------------------------------

            Seit dem 16.09.2026 nach Ricardos HTML-Vorlage: Kategoriezeile und
            Titel links, Einleitung rechts, darunter sechs gleich grosse
            Kacheln. Die Kacheln tragen `tabIndex={0}` — sie enthalten keinen
            Link, und der Auftrag verlangt denselben Zustand bei Tastaturfokus. */}
        <section
          id="leistungen"
          aria-labelledby="leistungen-titel"
          className={styles.zonenAbschnitt}
        >
          <div className="ac-container">
            <div className={styles.leistungsKopf}>
              <div>
                {inhalt.leistungenKopf && (
                  <p className={styles.leistungsEyebrow}>
                    <Translated value={inhalt.leistungenKopf.kategorie} />
                  </p>
                )}
                <h2 id="leistungen-titel" className={styles.leistungsHaupttitel}>
                  <Translated value={inhalt.abschnitte.leistungen} />
                </h2>
              </div>
              {inhalt.leistungenKopf && (
                <p className={styles.leistungsEinleitung}>
                  <Translated value={inhalt.leistungenKopf.einleitung} />
                </p>
              )}
            </div>

            <ul className={styles.leistungsKarten} role="list">
              {inhalt.leistungen.map((leistung, index) => (
                <li key={index} className={styles.leistungsKarte} tabIndex={0}>
                  {symbol(leistung.bild, leistung.icon)}
                  <h3 className={styles.leistungsTitel}>
                    <Translated value={leistung.titel} />
                  </h3>
                  <span className={styles.strich} aria-hidden="true" />
                  {leistung.text && (
                    <p className={styles.leistungsSatz}>
                      <Translated value={leistung.text} />
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

      </div>

      {/* ---- 4 Vertiefung, optional ---------------------------------------

          Seit dem 11.09.2026 nach Ricardos Referenzgrafik fuer „Was Sie uns
          liefern": links Titel und Einleitung, rechts die Aufzaehlung als
          Karte mit Symbolen, unten der Nachsatz als Leiste. Was eine Seite
          nicht mitbringt (Liste, Symbole, Nachsatz, Hintergrund), entfaellt
          einfach — die Vorlage bleibt fuer andere Seiten nutzbar. */}
      {vertiefung && (
        <section
          id="vertiefung"
          aria-labelledby="vertiefung-titel"
          className={styles.liefern}
          style={
            vertiefung.hintergrund
              ? { backgroundImage: `url(${bildPfad(vertiefung.hintergrund)})` }
              : undefined
          }
        >
          <div className={`ac-container ${styles.liefernContainer}`}>
            <div className={styles.liefernRaster}>
              <div>
                <h2 id="vertiefung-titel" className={styles.zonenTitel}>
                  <Translated value={vertiefung.titel} />
                </h2>
                {vertiefung.absaetze.map((absatz, index) => (
                  <p key={index} className={styles.liefernLead}>
                    <TranslatedRich value={absatz} />
                  </p>
                ))}
              </div>

              {vertiefung.liste && vertiefung.liste.length > 0 && (
                <div className={styles.liefernKarte}>
                  {vertiefung.listenTitel && (
                    <p className={styles.liefernKartenTitel}>
                      <Translated value={vertiefung.listenTitel} />
                    </p>
                  )}
                  <ul className={styles.liefernListe} role="list">
                    {vertiefung.liste.map((eintrag, index) => {
                      const bild = vertiefung.listenBilder?.[index]
                      return (
                        <li key={index} className={styles.liefernEintrag}>
                          {bild ? (
                            <Image
                              className={styles.liefernSymbol}
                              src={bildPfad(bild)}
                              alt=""
                              width={256}
                              height={256}
                              unoptimized
                            />
                          ) : (
                            <span aria-hidden="true" />
                          )}
                          <span className={styles.liefernEintragText}>
                            <RichText value={eintrag} />
                          </span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )}

              {vertiefung.nachsatz && vertiefung.nachsatz.length > 0 && (
                <div className={styles.liefernHinweis}>
                  {vertiefung.nachsatzBild && (
                    <Image
                      className={styles.liefernSymbol}
                      src={bildPfad(vertiefung.nachsatzBild)}
                      alt=""
                      width={256}
                      height={256}
                      unoptimized
                    />
                  )}
                  <div className={styles.liefernHinweisText}>
                    {vertiefung.nachsatz.map((absatz, index) => (
                      <p key={index}>
                        <RichText value={absatz} />
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ---- 5 Häufige Fragen — derselbe Baustein wie auf jeder Seite ----- */}
      <Fragen
        id="fragen"
        eyebrow={
          inhalt.fragenZusatz ? <Translated value={inhalt.fragenZusatz.kategorie} /> : undefined
        }
        heading={<Translated value={inhalt.abschnitte.fragen} />}
        lead={inhalt.fragenZusatz?.einleitung.map((satz, index) => (
          <Translated key={index} value={satz} />
        ))}
        items={inhalt.faq.map((eintrag) => ({
          question: <Translated value={eintrag.frage} />,
          answer: <TranslatedRich value={eintrag.antwort} />,
        }))}
        schluss={
          inhalt.fragenZusatz ? <Translated value={inhalt.fragenZusatz.schluss} /> : undefined
        }
      />

      {/* ---- 6 Abschluss, optional ---------------------------------------- */}
      {inhalt.cta && fAbschluss && (
        <CTASection
          id="abschluss"
          heading={<Translated value={inhalt.cta.titel} />}
          surface={fAbschluss}
          lead={
            <p>
              <TranslatedRich value={inhalt.cta.text} />
            </p>
          }
          actions={<Button href={hrefOrDefault('kontakt', locale)}>{knopf}</Button>}
        />
      )}
    </>
  )
}
