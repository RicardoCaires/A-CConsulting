/**
 * Firmenangaben — Pflichtangaben.
 *
 * Einzige Quelle im Code. Kein anderer Ort schreibt Adresse, Telefon, E-Mail,
 * UID oder FINMA-Nummer aus. Wer eine dieser Angaben braucht, importiert sie hier.
 *
 * Herkunft der Werte: `design/ac-corporate-design.tokens.json`, Abschnitt `firma`
 * (Skill `ac-corporate-design`, dort belegt aus BFS-Schreiben und Dokumentfusszeilen).
 *
 * Aenderungen ausschliesslich auf ausdrueckliche Anweisung von Ricardo —
 * nie automatisch, nie durch einen Pflege-Agenten.
 */

export const company = {
  legalName: 'A&C Consulting GmbH',
  shortName: 'A&C Consulting',

  address: {
    street: 'Bielstrasse 22',
    postalCode: '3250',
    city: 'Lyss',
    region: 'Kanton Bern',
    countryCode: 'CH',
  },

  /**
   * Telefon und E-Mail stammen aus der Fusszeile der bestehenden A&C-Dokumente
   * und sind von Ricardo am 04.09.2026 zur oeffentlichen Verwendung auf der
   * Website freigegeben. Sie stehen nur hier — nie in einer Komponente.
   */
  phone: '078 625 53 85',
  /** Maschinenlesbare Form fuer `tel:` — E.164. */
  phoneE164: '+41786255385',
  email: 'info@ac-co.ch',

  domain: 'ac-co.ch',
  url: 'https://www.ac-co.ch',

  /** UID ist zugleich die Handelsregisternummer (BFS-Schreiben vom 23.02.2026). */
  uid: 'CHE-332.960.986',
  commercialRegister: 'CHE-332.960.986',

  /**
   * FINMA-Register des Unternehmens. Gehoert in den Fussbereich jeder Seite.
   * Die persoenliche FINMA-Nummer gehoert NICHT auf die Website.
   */
  finmaCompany: 'F01568855',

  founded: '2026-02-03',

  /**
   * Namen.
   *
   * Oeffentlich auf der Website gilt die vollstaendige Form
   * „Ricardo Caires Cerqueira" (Festlegung Ricardo, 04.09.2026).
   * Die Kurzform darf in knappen Oberflaechen-Zusammenhaengen stehen —
   * Bildunterschrift, Tabellenzelle, Signatur —, aber nur, wenn der
   * vollstaendige Name auf derselben Seite bereits eindeutig zu lesen ist.
   */
  people: {
    managingDirector: 'Ricardo Caires Cerqueira',
    managingDirectorShort: 'Ricardo Caires',
    coOwner: 'Octavio Andrade',
  },

  /**
   * Oeffnungszeiten sind noch nicht festgelegt (offener Punkt in CLAUDE.md).
   * Bis zur Freigabe erscheinen auf der Website keine Zeiten — lieber keine
   * Angabe als eine erfundene.
   */
  openingHours: null,
} as const

/** Adresse einzeilig, fuer Fusszeile und Meta-Angaben. */
export const addressOneLine = `${company.address.street}, ${company.address.postalCode} ${company.address.city}`

/** Postanschrift mehrzeilig. */
export const addressLines: readonly string[] = [
  company.legalName,
  company.address.street,
  `${company.address.postalCode} ${company.address.city}`,
]
