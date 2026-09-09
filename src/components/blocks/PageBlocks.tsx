import { Button } from '@/components/ui/Button'
import { Icon, type IconName } from '@/components/ui/Icon'
import { KLASSE, type Surface } from './Section'
import { PageLink } from '@/components/ui/PageLink'
import { hatSichtbarenInhalt, RichText } from '@/components/ui/RichText'
import { Accordion } from './Accordion'
import { CTASection } from './CTASection'
import { StepList } from './StepList'
import type { Action, Block, Download, PageRef, Rich } from '@/content/types'
import type { Locale } from '@/i18n/config'
import { getUi } from '@/i18n/messages/ui'
import { isPublished, path, type PageKey } from '@/i18n/routes'
import { buero, company } from '@/lib/company'

import styles from './PageBlocks.module.css'

/**
 * Gibt die Abschnitte einer Inhaltsseite aus.
 *
 * Dieselbe Gestaltung wie auf Startseite und Pilotseite: dunkler Seitenkopf
 * darueber, dazwischen der Wechsel aus Weiss und Off-White, am Schluss die
 * wiederkehrende Farbflaeche. Fliesstext auf lesbare Zeilenlaenge begrenzt,
 * Gruen nur als Marker.
 *
 * Verweise werden nur dann zu Links, wenn die Zielseite in dieser Sprache
 * veroeffentlicht ist — sonst steht die Beschriftung mit dem Vermerk „folgt".
 */

/** Flaeche des Abschlussblocks. Auf jeder Seite dieselbe. */
const ABSCHLUSS: Surface = 'flaeche'

/** Icons der Unterkategorien. Gestaltung, darum hier und nicht im Inhalt. */
const SERVICE_NAV_ICON: Partial<Record<PageKey, IconName>> = {
  buchhaltung: 'buch',
  lohnbuchhaltung: 'personen',
  mehrwertsteuer: 'beleg',
  jahresabschluss: 'ablauf',
  steuern: 'beleg',
  firmengruendung: 'gebaeude',
  treuhaenderWechseln: 'wechsel',
  versicherungen: 'schild',
  treuhand: 'buch',
}

/* ---- Handlungsknoepfe --------------------------------------------------- */

function Actions({ actions, locale }: { actions: readonly Action[]; locale: Locale }) {
  if (actions.length === 0) return null
  const ui = getUi(locale)

  return (
    <div className={styles.actions}>
      {actions.map((action, index) => {
        if (action.kind === 'phone') {
          return (
            <a key={index} className={styles.phoneLink} href={`tel:${company.phoneE164}`}>
              {action.label ?? company.phone}
            </a>
          )
        }

        if (action.kind === 'mail') {
          return (
            <Button key={index} href={`mailto:${company.email}`} variant={action.variant}>
              {action.label}
            </Button>
          )
        }

        // Verweist auf eine Seite: nur als Knopf, wenn es sie gibt.
        if (!isPublished(action.target, locale)) {
          return (
            <span key={index} className={styles.actionPending}>
              {action.label}
              <span className={styles.comingBadge}>{ui.pageComing.badge}</span>
              <span className="ac-visually-hidden"> {ui.pageComing.hint}</span>
            </span>
          )
        }

        return (
          <Button key={index} href={path(action.target, locale)} variant={action.variant}>
            {action.label}
          </Button>
        )
      })}
    </div>
  )
}

/* ---- Verweiszeile ------------------------------------------------------- */

function Links({ links, locale }: { links?: readonly PageRef[]; locale: Locale }) {
  if (!links || links.length === 0) return null

  return (
    <ul className={styles.links} role="list">
      {links.map((link) => (
        <li key={`${link.target}-${link.label}`}>
          <PageLink target={link.target} label={link.label} locale={locale} />
        </li>
      ))}
    </ul>
  )
}

/* ---- Download ----------------------------------------------------------- */

function DownloadButton({ download, locale }: { download: Download; locale: Locale }) {
  const ui = getUi(locale)

  // Die Checklisten liegen noch nicht als PDF vor. Bis dahin kein Link.
  if (download.file === null) {
    return (
      <p className={styles.downloadPending}>
        {download.label}
        <span className={styles.comingBadge}>{ui.pageComing.badge}</span>
        <span className="ac-visually-hidden"> {ui.pageComing.hint}</span>
      </p>
    )
  }

  return (
    <p className={styles.actions}>
      <Button href={download.file} variant="ghost">
        {download.label}
      </Button>
    </p>
  )
}

/* ---- Absaetze ----------------------------------------------------------- */

function Paragraphs({ items, className }: { items: readonly Rich[]; className?: string }) {
  // Ein Absatz, der nur aus einer offenen Angabe besteht, faellt im
  // Produktionsbau ganz weg — sonst bliebe ein leeres Loch stehen.
  const sichtbar = items.filter(hatSichtbarenInhalt)

  return (
    <>
      {sichtbar.map((paragraph, index) => (
        <p key={index} className={className ?? styles.paragraph}>
          <RichText value={paragraph} />
        </p>
      ))}
    </>
  )
}

/* ---- Ein Abschnitt ------------------------------------------------------ */

function BlockBody({ block, locale }: { block: Block; locale: Locale }) {
  const headingId =
    block.kind === 'anchors' || block.kind === 'serviceNav'
      ? undefined
      : block.id
        ? `${block.id}-titel`
        : undefined

  switch (block.kind) {
    case 'prose':
      return (
        <div className="ac-measure">
          <h2 id={headingId}>{block.heading}</h2>
          <Paragraphs items={block.paragraphs} />
          <Links links={block.links} locale={locale} />
          {block.download && <DownloadButton download={block.download} locale={locale} />}
        </div>
      )

    case 'subsections':
      return (
        <>
          <div className="ac-measure">
            <h2 id={headingId}>{block.heading}</h2>
            {block.intro && <Paragraphs items={block.intro} />}
          </div>

          <ul className={styles.subsections} role="list">
            {block.items.map((item, index) => (
              <li key={index} className={styles.subsection}>
                <h3 className={styles.subsectionHeading}>{item.heading}</h3>
                <Paragraphs items={item.paragraphs} className={styles.subsectionBody} />
              </li>
            ))}
          </ul>

          {block.outro && (
            <div className="ac-measure">
              <Paragraphs items={block.outro} />
            </div>
          )}
          <Links links={block.links} locale={locale} />
        </>
      )

    case 'steps':
      return (
        <>
          <div className="ac-measure">
            <h2 id={headingId}>{block.heading}</h2>
            {block.intro && <Paragraphs items={block.intro} />}
          </div>

          <StepList
            steps={block.steps.map((step) => ({
              heading: step.heading,
              body: <RichText value={step.body} />,
            }))}
          />

          {block.outro && (
            <div className="ac-measure">
              <Paragraphs items={block.outro} />
            </div>
          )}
        </>
      )

    case 'list':
      return (
        <div className="ac-measure">
          <h2 id={headingId}>{block.heading}</h2>
          {block.intro && <Paragraphs items={block.intro} />}

          <ul className={styles.bullets}>
            {block.items.filter(hatSichtbarenInhalt).map((item, index) => (
              <li key={index}>
                <RichText value={item} />
              </li>
            ))}
          </ul>

          {block.outro && <Paragraphs items={block.outro} />}
          <Links links={block.links} locale={locale} />
          {block.download && <DownloadButton download={block.download} locale={locale} />}
        </div>
      )

    case 'faq':
      return (
        <div className="ac-measure">
          <h2 id={headingId}>{block.heading}</h2>
          <Accordion
            items={block.items.map((item) => ({
              question: item.question,
              answer: <RichText value={item.answer} />,
            }))}
          />
        </div>
      )

    case 'serviceNav': {
      const ui = getUi(locale)
      return (
        <nav aria-label={ui.footer.servicesHeading}>
          <ul className={styles.serviceNav} role="list">
            {block.items.map((key) => {
              const available = isPublished(key, locale)
              const label = ui.page[key]
              const icon = <Icon name={SERVICE_NAV_ICON[key] ?? 'buch'} size={1.375} />

              return (
                <li key={key}>
                  {available ? (
                    <a className={styles.serviceNavItem} href={path(key, locale)}>
                      {icon}
                      <span>{label}</span>
                    </a>
                  ) : (
                    <span className={`${styles.serviceNavItem} ${styles.serviceNavPending}`}>
                      {icon}
                      <span>{label}</span>
                      <span className={styles.comingBadge}>{ui.pageComing.badge}</span>
                      <span className="ac-visually-hidden"> {ui.pageComing.hint}</span>
                    </span>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>
      )
    }

    case 'anchors':
      return (
        <nav className={styles.anchorNav} aria-label={getUi(locale).sectionsNavLabel}>
          <ul className={styles.anchorList} role="list">
            {block.items.map((item) => (
              <li key={item.anchor}>
                <a className={styles.anchorLink} href={`#${item.anchor}`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )

    // Der Abschlussblock bringt seine eigene Sektion mit — siehe unten in
    // `PageBlocks`. Hier kann er darum nicht landen.
    case 'cta':
      return null

    case 'contact':
      return (
        <div className="ac-measure">
          {block.heading && <h2 id={headingId}>{block.heading}</h2>}
          <dl className={styles.contactList}>
            <div className={styles.contactRow}>
              <dt>{getUi(locale).footer.phone}</dt>
              <dd>
                <a href={`tel:${company.phoneE164}`}>{company.phone}</a>
              </dd>
            </div>
            <div className={styles.contactRow}>
              <dt>{getUi(locale).footer.email}</dt>
              <dd>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </dd>
            </div>
            <div className={styles.contactRow}>
              <dt>{getUi(locale).contactAddressLabel}</dt>
              <dd>
                <address className={styles.address}>
                  {company.legalName}, {buero.street}, {buero.postalCode} {buero.city}
                </address>
              </dd>
            </div>
          </dl>
          {block.note && (
            <p className={styles.paragraph}>
              <RichText value={block.note} />
            </p>
          )}
        </div>
      )

    case 'formOutline': {
      const ui = getUi(locale)
      return (
        <div className="ac-measure">
          <h2 id={headingId}>{block.heading}</h2>
          <Paragraphs items={block.intro} />

          <ul className={styles.bullets}>
            {block.fields.map((field) => (
              <li key={field}>{field}</li>
            ))}
          </ul>

          <p className={styles.paragraph}>
            <RichText value={block.consentNote} />
          </p>

          <p className={styles.downloadPending}>
            {block.submitLabel}
            <span className={styles.comingBadge}>{ui.pageComing.badge}</span>
          </p>
          <p className={styles.formNote}>{ui.formPending}</p>
        </div>
      )
    }
  }
}

/* ---- Alle Abschnitte ---------------------------------------------------- */

export function PageBlocks({ blocks, locale }: { blocks: readonly Block[]; locale: Locale }) {
  // Baender zaehlen beim Flaechenwechsel nicht mit, sonst verschiebt sich der
  // Rhythmus je nachdem, ob eine Seite eine Bereichsnavigation hat.
  let surfaceIndex = 0

  return (
    <>
      {blocks.map((block, index) => {
        // Sprungmarken und die Bereichsnavigation sitzen direkt unter dem
        // Seitenkopf, ohne eigene Flaeche.
        if (block.kind === 'anchors' || block.kind === 'serviceNav') {
          return (
            <div key={index} className={styles.anchorBand}>
              <div className="ac-container">
                <BlockBody block={block} locale={locale} />
              </div>
            </div>
          )
        }

        // Der Abschlussblock ist ein eigener Baustein und bringt seine Flaeche
        // selbst mit. Er zaehlt beim Flaechenwechsel nicht mit, weil er immer
        // gleich aussieht — auf jeder Seite dieselbe Stelle, dieselbe Wirkung.
        //
        // Die Flaeche ist `flaeche`, wie auf Startseite und Pilotseite: Der
        // Abschluss ist eine wiederkehrende Farbflaeche, keine getoente.
        if (block.kind === 'cta') {
          return (
            <CTASection
              key={index}
              id={block.id}
              surface={ABSCHLUSS}
              heading={block.heading}
              lead={<Paragraphs items={block.paragraphs} className={styles.ctaLead} />}
              actions={<Actions actions={block.actions} locale={locale} />}
            />
          )
        }

        // Zwei Flaechen im Wechsel: weiss und Off-White. Der frueher dritte,
        // blaugraue Tint ist entfallen — drei kaum unterscheidbare helle Toene
        // haben die Seite gestreift statt gegliedert.
        const surface = KLASSE[surfaceIndex++ % 2 === 0 ? 'weiss' : 'hell']

        return (
          <section
            key={index}
            id={block.id}
            className={['ac-section', surface].filter(Boolean).join(' ')}
            aria-labelledby={block.id ? `${block.id}-titel` : undefined}
          >
            <div className="ac-container">
              <BlockBody block={block} locale={locale} />
            </div>
          </section>
        )
      })}
    </>
  )
}
