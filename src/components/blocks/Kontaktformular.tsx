import Image from 'next/image'

import { company } from '@/lib/company'
import type { Locale } from '@/i18n/config'
import { getUi } from '@/i18n/messages/ui'
import { path } from '@/i18n/routes'

import styles from './Kontaktformular.module.css'

/**
 * Das Kontaktformular auf `/kontakt`.
 *
 * Nach Ricardos HTML-Vorlage vom 16.09.2026 (`kontaktformular-neu.html`):
 * eine grosse abgerundete hellblaue Flaeche mit feiner Kontur, darin links
 * Kategoriezeile, Titel, Einleitung, zwei anklickbare Kontaktflaechen und die
 * Zusage mit gruenem Strich; rechts auf einer helleren Unterflaeche das
 * Formular. Ab 53.75rem nebeneinander, darunter untereinander.
 *
 * **Keine weissen Karten im Formularbereich** — der Auftrag verlangt
 * abgestufte Hellblautoene: die Flaeche `background_tint`, die Formularhaelfte
 * und die Kontaktflaechen `surface_field`, die Eingabefelder wieder
 * `background_tint`. Keine Schatten, keine Verlaeufe.
 *
 * **Seit dem 16.10.2026 sendet das Formular an die Brokerverwaltung** (`company.crm`,
 * `/oeffentlich/api/kontakt`), nicht mehr an den Worker: Dort entstehen eine
 * Website-Anfrage und eine Aufgabe in «Rückrufe», und eine Mail geht an info@
 * (Antworten an die Person). Kein JavaScript noetig: Das CRM antwortet mit einer
 * Weiterleitung (303) auf `#gesendet` beziehungsweise `#nicht-gesendet` der
 * Kontaktseite in derselben Sprache, und die beiden Meldungen werden ueber
 * `:target` sichtbar. Spamschutz: Honigtopf, Herkunftspruefung und Bremse je
 * Adresse und E-Mail im CRM — ohne Turnstile, also ohne fremden Dienst.
 *
 * **Telefon und E-Mail kommen aus `company.ts`** und stehen nirgends sonst
 * ausgeschrieben. Die beiden Piktogramme sind Ricardos gelieferte Dateien.
 *
 * **Das Honigtopf-Feld** (`website`) ist fuer Menschen unsichtbar und liegt
 * ausserhalb der Tabulatorreihenfolge; Abschnitt 7 verlangt es.
 *
 * **Drei versteckte Felder nennen die Herkunft** (Seite, Sprache,
 * Formulartyp), wie Abschnitt 7 es von Anfang an verlangt — damit spaetere
 * Auswertungen nicht nachtraeglich umgebaut werden muessen.
 *
 * **Die Datenschutzerklaerung ist verlinkt**, wie Abschnitt 7 es verlangt —
 * ueber `path()`, nicht als Zeichenkette.
 */

export type KontaktformularInhalt = {
  eyebrow: string
  heading: string
  lead: string
  /** Beschriftung und Linktext der beiden Kontaktflaechen. */
  kontakt: { telefonLabel: string; telefonText: string; emailLabel: string }
  zusage: { titel: string; text: string }
  formular: {
    heading: string
    pflichtHinweis: string
    name: string
    email: string
    telefon: string
    anliegen: string
    anliegenPlatzhalter: string
    anliegenWahl: readonly string[]
    kontaktartFrage: string
    kontaktartEmail: string
    kontaktartTelefon: string
    nachricht: string
    nachrichtPlatzhalter: string
    zustimmungVor: string
    zustimmungLink: string
    zustimmungNach: string
    knopf: string
    vertraulich: string
  }
}

type Props = KontaktformularInhalt & {
  id?: string
  locale: Locale
  /** Deutsche Werte der Anliegen, gleiche Reihenfolge: gesendet wird deutsch, angezeigt die Sprache der Seite. */
  anliegenWerte?: readonly string[]
}

export function Kontaktformular({
  id,
  locale,
  anliegenWerte,
  eyebrow,
  heading,
  lead,
  kontakt,
  zusage,
  formular,
}: Props) {
  const ui = getUi(locale)
  const headingId = id ? `${id}-titel` : 'kontaktformular-titel'
  const formularTitelId = `${headingId}-formular`
  // Seit 16.10.2026 eingeschaltet (Ricardo: «bitte auch kontaktformular entlich einschalten soll bei info landen und
  // eine aufgabe im CRM auslösen»). Das Formular sendet ohne JavaScript direkt an die Brokerverwaltung
  // (`company.crm`, eigener Server in der Schweiz): Dort entstehen Website-Anfrage und Aufgabe, und eine Mail geht an
  // info@. Zurück kommt eine Weiterleitung auf #gesendet oder #nicht-gesendet. Spamschutz: Honigtopf und Bremse je
  // Adresse und E-Mail im CRM; Turnstile wird damit nicht gebraucht und nicht geladen.

  return (
    <div className={styles.flaeche}>
      <div className={`ac-container ${styles.container}`}>
        <section className={styles.schale} id={id} aria-labelledby={headingId}>
          {/* ---- Links: wer antwortet ---------------------------------- */}
          <div className={styles.einstieg}>
            {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
            <h2 id={headingId} className={styles.titel}>
              {heading}
            </h2>
            <p className={styles.lead}>{lead}</p>

            <ul className={styles.kontakte} role="list">
              <li>
                <a className={styles.kontakt} href={`tel:${company.phoneE164}`}>
                  <Image
                    className={styles.zeichen}
                    src="/bilder/kontakt_telefon.svg"
                    alt=""
                    width={42}
                    height={42}
                    unoptimized
                  />
                  <span>
                    <span className={styles.kontaktLabel}>{kontakt.telefonLabel}</span>
                    <strong className={styles.kontaktWert}>{kontakt.telefonText}</strong>
                  </span>
                </a>
              </li>
              <li>
                <a className={styles.kontakt} href={`mailto:${company.email}`}>
                  <Image
                    className={styles.zeichen}
                    src="/bilder/kontakt_email.svg"
                    alt=""
                    width={42}
                    height={42}
                    unoptimized
                  />
                  <span>
                    <span className={styles.kontaktLabel}>{kontakt.emailLabel}</span>
                    <strong className={styles.kontaktWert}>{company.email}</strong>
                  </span>
                </a>
              </li>
            </ul>

            <p className={styles.zusage}>
              <strong className={styles.zusageTitel}>{zusage.titel}</strong>
              {zusage.text}
            </p>
          </div>

          {/* ---- Rechts: das Formular ---------------------------------- */}
          <form
            className={styles.formular}
            aria-labelledby={formularTitelId}
            method="post"
            action={`${company.crm}/oeffentlich/api/kontakt`}
          >
            {/* Die beiden Rueckmeldungen. Sie stehen immer da und werden ueber
                `:target` sichtbar — der Endpunkt leitet auf die Sprungmarke
                weiter. Ohne JavaScript, ohne Bedingung im Code. */}
            <div id="gesendet" className={`${styles.meldung} ${styles.meldungOk}`} role="status">
              <strong className={styles.meldungTitel}>{ui.formResult.okTitle}</strong>
              {ui.formResult.okBody}
            </div>

            <div id="nicht-gesendet" className={styles.meldung} role="status">
              <strong className={styles.meldungTitel}>{ui.formResult.errorTitle}</strong>
              {ui.formResult.errorBody}
            </div>

            {/* Herkunft der Anfrage — Abschnitt 7 verlangt sie von Anfang an. */}
            <input type="hidden" name="sprache" value={locale} />
            <input type="hidden" name="herkunft" value={path('kontakt', locale)} />
            <input type="hidden" name="formular" value="kontakt" />

            <div className={styles.formularKopf}>
              <h3 id={formularTitelId} className={styles.formularTitel}>
                {formular.heading}
              </h3>
              <p className={styles.pflicht}>{formular.pflichtHinweis}</p>
            </div>

            <div className={styles.raster}>
              <p className={styles.feld}>
                <label htmlFor="kf-name">{formular.name}</label>
                <input id="kf-name" name="name" autoComplete="name" required />
              </p>

              <p className={styles.feld}>
                <label htmlFor="kf-email">{formular.email}</label>
                <input id="kf-email" name="email" type="email" autoComplete="email" required />
              </p>

              <p className={styles.feld}>
                <label htmlFor="kf-telefon">{formular.telefon}</label>
                <input id="kf-telefon" name="telefon" type="tel" autoComplete="tel" />
              </p>

              <p className={styles.feld}>
                <label htmlFor="kf-anliegen">{formular.anliegen}</label>
                <select id="kf-anliegen" name="anliegen" defaultValue="" required>
                  <option value="" disabled>
                    {formular.anliegenPlatzhalter}
                  </option>
                  {formular.anliegenWahl.map((wahl, i) => (
                    <option key={wahl} value={anliegenWerte?.[i] ?? wahl}>
                      {wahl}
                    </option>
                  ))}
                </select>
              </p>

              <fieldset className={`${styles.feld} ${styles.breit} ${styles.wahl}`}>
                <legend>{formular.kontaktartFrage}</legend>
                <span className={styles.wahlReihe}>
                  <label className={styles.wahlFeld}>
                    <input type="radio" name="kontaktart" value="email" defaultChecked />
                    {formular.kontaktartEmail}
                  </label>
                  <label className={styles.wahlFeld}>
                    <input type="radio" name="kontaktart" value="telefon" />
                    {formular.kontaktartTelefon}
                  </label>
                </span>
              </fieldset>

              <p className={`${styles.feld} ${styles.breit}`}>
                <label htmlFor="kf-nachricht">{formular.nachricht}</label>
                <textarea
                  id="kf-nachricht"
                  name="nachricht"
                  placeholder={formular.nachrichtPlatzhalter}
                  required
                />
              </p>
            </div>

            {/* Honigtopf: fuer Menschen unsichtbar, fuer Maschinen verlockend. */}
            <p className={styles.honigtopf} aria-hidden="true">
              <label htmlFor="kf-website">Website</label>
              <input id="kf-website" name="website" tabIndex={-1} autoComplete="off" />
            </p>

            <label className={styles.zustimmung}>
              <input type="checkbox" name="datenschutz" required />
              <span>
                {formular.zustimmungVor}
                <a href={path('datenschutz', locale)}>{formular.zustimmungLink}</a>
                {formular.zustimmungNach}
              </span>
            </label>

            <div className={styles.absendeReihe}>
              <button className={styles.knopf} type="submit">
                {formular.knopf}
              </button>
              <p className={styles.vertraulich}>{formular.vertraulich}</p>
            </div>

          </form>
        </section>
      </div>
    </div>
  )
}
