import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { CTASection } from '@/components/blocks/CTASection'
import { IconFeatureGrid, type IconFeatureItem } from '@/components/blocks/IconFeature'
import { PersonCard, PersonGrid } from '@/components/blocks/PersonCard'
import { SectionHeader } from '@/components/blocks/SectionHeader'
import { ServiceCard } from '@/components/blocks/ServiceCard'
import { Button } from '@/components/ui/Button'
import { type IconName } from '@/components/ui/Icon'
import { IconCircle } from '@/components/ui/IconCircle'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
import { PageLink } from '@/components/ui/PageLink'
import { Pending } from '@/components/ui/Pending'
import { getHomeContent } from '@/content/home'
import { htmlLang, isLocale, locales } from '@/i18n/config'
import { getUi } from '@/i18n/messages/ui'
import { isPublished, path } from '@/i18n/routes'
import { company } from '@/lib/company'

import styles from './page.module.css'

/**
 * Startseite.
 *
 * Sechs Bereiche: Einstieg, unsere Bereiche, haeufige Anliegen, warum A&C,
 * Ansprechpartner, Kontakt. Sie gibt Orientierung und fuehrt weiter — sie
 * erklaert nicht. Ablauf, Kosten und Standort stehen auf den Unterseiten.
 *
 * Der Wortlaut stammt unveraendert aus `src/content/home.ts`. Wo die Startseite
 * kuerzer sein soll, wird weggelassen, nie umformuliert.
 *
 * Gestaltung: Seit Schritt 2 baut die Seite ausschliesslich auf den geteilten
 * Bausteinen — `ServiceCard`, `IconFeatureGrid`, `PersonCard`, `CTASection`,
 * `SectionHeader`, `IconCircle`. Es gibt hier keine eigene Auspraegung mehr,
 * die es nicht auch auf einer Unterseite gaebe.
 */

type PageProps = {
  params: Promise<{ locale: string }>
}

/**
 * Die Startseite gibt es nur, wo ihre Uebersetzung vorliegt.
 *
 * Das Sprachlayout erzeugt seit Schritt 3 auch FR und PT, weil dort die
 * Pilotseite liegt. Ohne diese eigene Liste wuerde Next auch `/fr/` und `/pt/`
 * vorzurendern versuchen und dabei jedes Mal auf 404 laufen.
 */
export function generateStaticParams() {
  return locales.filter((locale) => isPublished('home', locale)).map((locale) => ({ locale }))
}

const SERVICE_ICON: Record<string, IconName> = {
  versicherungen: 'schild',
  treuhand: 'buch',
  steuern: 'beleg',
}

/** Icons der sechs Anliegen, nach Position — zwei fuehren auf dieselbe Seite. */
const OCCASION_ICONS: readonly IconName[] = [
  'buch',
  'wechsel',
  'gebaeude',
  'personen',
  'schild',
  'beleg',
]

const WHY_ICONS: readonly IconName[] = [
  'verbindung',
  'person',
  'sprachen',
  'ablauf',
  'automatisierung',
]

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}

  const content = getHomeContent(locale)
  if (!content) return {}

  return {
    title: content.meta.title,
    description: content.meta.description,
    alternates: { canonical: path('home', locale) },
    openGraph: {
      title: `${content.meta.title} — ${company.shortName}`,
      description: content.meta.description,
      url: path('home', locale),
      locale: htmlLang[locale].replace('-', '_'),
    },
  }
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const content = getHomeContent(locale)
  if (!content) notFound()

  const ui = getUi(locale)
  const tel = `tel:${company.phoneE164}`

  /** „Warum A&C" — nur die Merkmalstitel, ohne die erlaeuternden Absaetze. */
  const whyItems: readonly IconFeatureItem[] = content.why.items.map((item, index) => ({
    icon: WHY_ICONS[index] ?? 'verbindung',
    heading: item.heading,
  }))

  return (
    <>
      {/* ============ 1 — Einstieg ===================================== */}
      <section className={styles.hero} aria-labelledby="einstieg">
        <div className={`ac-container ${styles.heroGrid}`}>
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>{ui.footer.roleNote}</p>

            <h1 id="einstieg" className={styles.heroHeading}>
              {content.hero.heading}
            </h1>

            {/* Nur der erste Satz des freigegebenen Absatzes. */}
            <p className={styles.heroLead}>{content.hero.lead}</p>

            <div className={styles.heroActions}>
              <Button href={path('kontakt', locale)}>{content.primaryCta}</Button>
              <Button href={tel} variant="ghost">
                {company.phone}
              </Button>
            </div>
          </div>

          <ImagePlaceholder
            className={styles.heroImage}
            label="TEAM / BERATUNG"
            note="Echte Aufnahme aus dem Büro in Lyss"
          />
        </div>
      </section>

      {/* ============ 2 — Unsere Bereiche ============================== */}
      <section className="ac-section" aria-labelledby="leistungen">
        <div className="ac-container">
          <SectionHeader id="leistungen" heading={content.services.heading} />

          <ul className={styles.services} role="list">
            {content.services.items.map((item) => (
              <li key={item.page}>
                <ServiceCard
                  icon={SERVICE_ICON[item.page] ?? 'schild'}
                  heading={item.heading}
                  chips={item.facets}
                  target={item.page}
                  locale={locale}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ 3 — Häufige Anliegen ============================= */}
      <section className="ac-section ac-section--blue" aria-labelledby="anlaesse">
        <div className="ac-container">
          <SectionHeader id="anlaesse" heading={content.occasions.heading} />

          <ul className={styles.occasions} role="list">
            {content.occasions.items.map((item, index) => (
              <li key={item.label} className={styles.occasion}>
                <PageLink
                  target={item.target}
                  label={item.label}
                  locale={locale}
                  className={styles.occasionLink}
                  icon={<IconCircle name={OCCASION_ICONS[index] ?? 'buch'} size="md" />}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ 4 — Warum A&C ====================================
           Der einzige dunkle Abschnitt. Er sitzt in der Mitte und gibt der
           Seite einen Halt, ohne den Abschluss zu überdecken. */}
      <section className="ac-section ac-section--navy on-navy" aria-labelledby="warum">
        <div className="ac-container">
          <SectionHeader id="warum" heading={content.why.heading} />
          <IconFeatureGrid items={whyItems} columns={2} tone="outline" />
        </div>
      </section>

      {/* ============ 5 — Ansprechpartner ============================== */}
      <section className="ac-section" aria-labelledby="personen">
        <div className="ac-container">
          <SectionHeader
            id="personen"
            heading={content.people.heading}
            lead={content.people.body}
          />

          <PersonGrid>
            {content.people.members.map((member) => (
              <PersonCard key={member.name} name={member.name} role={member.role} locale={locale} />
            ))}
          </PersonGrid>

          <p className={styles.peopleDetail}>
            <Pending>{content.people.detail.pending}</Pending>
          </p>

          <p className={styles.peopleLink}>
            <PageLink
              target={content.people.link.target}
              label={content.people.link.label}
              locale={locale}
            />
          </p>
        </div>
      </section>

      {/* ============ 6 — Kontaktabschluss ============================= */}
      <CTASection
        id="kontakt"
        heading={content.contact.heading}
        showContact
        actions={<Button href={path('kontakt', locale)}>{content.primaryCta}</Button>}
      />
    </>
  )
}
