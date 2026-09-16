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
 * **Abgesendet wird noch nichts.** Der serverseitige Endpunkt aus Abschnitt 7
 * der Hausordnung ist nicht gebaut; ein Formular, das Anfragen still
 * verschluckt, waere schlimmer als keines. Der Knopf steht darum sichtbar
 * abgeschaltet mit dem Vermerk und dem bestehenden Hinweis `ui.formPending`,
 * wie die Gruendungscheckliste ohne PDF. Sobald der Endpunkt steht, wird aus
 * `<button disabled>` ein `<button type="submit">` und das `<form>` bekommt
 * sein `action` — sonst aendert sich nichts.
 *
 * **Telefon und E-Mail kommen aus `company.ts`** und stehen nirgends sonst
 * ausgeschrieben. Die beiden Piktogramme sind Ricardos gelieferte Dateien.
 *
 * **Das Honigtopf-Feld** (`website`) ist fuer Menschen unsichtbar und liegt
 * ausserhalb der Tabulatorreihenfolge; Abschnitt 7 verlangt es. Cloudflare
 * Turnstile kommt mit dem Endpunkt dazu.
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
}

export function Kontaktformular({
  id,
  locale,
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
  const hinweisId = `${headingId}-hinweis`

  return (
    <div className={styles.flaeche}>
      <div className={`ac-container ${styles.container}`}>
        <section className={styles.schale} id={id} aria-labelledby={headingId}>
          {/* ---- Links: wer antwortet ---------------------------------- */}
          <div className={styles.einstieg}>
            <p className={styles.eyebrow}>{eyebrow}</p>
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
          <form className={styles.formular} aria-labelledby={formularTitelId}>
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
                  {formular.anliegenWahl.map((wahl) => (
                    <option key={wahl}>{wahl}</option>
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
              {/* Abgeschaltet, solange der Endpunkt fehlt — siehe Kopf. */}
              <button className={styles.knopf} type="submit" disabled aria-describedby={hinweisId}>
                {formular.knopf}
                <span className={styles.folgt}>{ui.pageComing.badge}</span>
              </button>
              <p className={styles.vertraulich}>{formular.vertraulich}</p>
            </div>

            <p id={hinweisId} className={styles.wartet}>
              {ui.formPending}
            </p>
          </form>
        </section>
      </div>
    </div>
  )
}
