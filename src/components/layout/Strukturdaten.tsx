import {
  bueroLage,
  company,
  buero,
} from '@/lib/company'

/**
 * Strukturierte Daten nach schema.org.
 *
 * Bis zum 11.10.2026 hatte die Website keine — Google wusste nicht, dass
 * hinter `ac-co.ch` ein ortsgebundenes Unternehmen in Aegerten steht. Fuer
 * ein Buero, das aus der Region leben soll, ist das der groesste Hebel, den
 * die Seite technisch noch hatte.
 *
 * **Jede Angabe kommt aus `company.ts`** und steht damit genau einmal im
 * Projekt. Was dort nicht steht, steht auch hier nicht:
 *
 *   - **Keine Oeffnungszeiten** (`openingHours`). Sie sind nicht festgelegt;
 *     siehe Abschnitt 10. Eine erfundene Zeit waere schlimmer als keine —
 *     Google zeigt sie im Suchergebnis an, und wer dann vor verschlossener
 *     Tuer steht, kommt nicht wieder.
 *   - **Keine Bewertungen, keine Preise.** Beides gibt es nicht.
 *   - **Kein `sameAs`.** Profile in sozialen Netzen sind nicht erfasst.
 *
 * `ProfessionalService` ist die passende Unterart von `LocalBusiness`:
 * ortsgebunden, aber keine Ladenflaeche.
 */
export function Strukturdaten() {
  const daten = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${company.url}/#organisation`,
    name: company.legalName,
    url: company.url,
    logo: `${company.url}/logo/ac-logo.png`,
    image: `${company.url}/bilder/og-vorschau.jpg`,
    telephone: company.phoneE164,
    email: company.email,
    vatID: company.uid,
    address: {
      '@type': 'PostalAddress',
      streetAddress: buero.street,
      postalCode: buero.postalCode,
      addressLocality: buero.city,
      addressRegion: 'BE',
      addressCountry: 'CH',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: bueroLage.breite,
      longitude: bueroLage.laenge,
    },
    areaServed: { '@type': 'AdministrativeArea', name: 'Kanton Bern' },
    // Die Nummer des Unternehmens, nie die persoenliche.
    identifier: {
      '@type': 'PropertyValue',
      name: 'FINMA-Register',
      value: company.finmaCompany,
    },
  }

  return (
    <script
      type="application/ld+json"
      // Die Daten sind unsere eigenen und enthalten keine Nutzereingaben.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(daten) }}
    />
  )
}
