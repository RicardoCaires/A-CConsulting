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
   *
   * Fuer Octavio gilt seit dem 10.09.2026 dasselbe, auf Ricardos Anweisung:
   * ueberall die vollstaendige Form „Octavio Nuno Gouveia Andrade". Die
   * Kurzform „Octavio Andrade" stand bis dahin an achtzehn Stellen,
   * einschliesslich Impressum und Fussbereich, und ist ersetzt.
   */
  people: {
    managingDirector: 'Ricardo Caires Cerqueira',
    managingDirectorShort: 'Ricardo Caires',
    coOwner: 'Octavio Nuno Gouveia Andrade',
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

/* ---- Umzug nach Aegerten, wirksam 01.11.2026 --------------------------- */

/**
 * Zwei Adressen, bewusst getrennt.
 *
 * `sitz` ist der Sitz laut Handelsregister und FINMA-Register. Er aendert sich
 * **erst**, wenn die Register nachgefuehrt sind — eine Website, die einen
 * anderen Sitz nennt als das oeffentliche Register, widerspricht sich selbst.
 * Bis dahin bleibt hier Lyss stehen.
 *
 * `buero` ist der Ort, an dem Kundinnen und Kunden empfangen werden. Er
 * wechselt am **01.11.2026** von Lyss nach Aegerten.
 *
 * Der Wechsel geschieht beim naechsten Bau nach dem Stichtag von selbst — die
 * Seiten werden statisch erzeugt, und `Date.now()` wird dabei ausgewertet. Es
 * ist an keiner anderen Stelle etwas von Hand zu aendern.
 *
 * Wenn die Register nachgefuehrt sind: `registerNachgefuehrt` auf `true` —
 * dann folgt der Sitz dem Buero.
 */

const UMZUG_AB = Date.UTC(2026, 10, 1) // 01.11.2026

/** Sobald Handelsregister und FINMA die neue Adresse fuehren: auf true. */
const registerNachgefuehrt = false

const bueroAegerten = {
  street: 'Bielstrasse 10',
  postalCode: '2558',
  city: 'Aegerten',
  region: 'Kanton Bern',
  countryCode: 'CH',
} as const

/** Buero-Adresse zum Zeitpunkt des Baus. */
export const buero = Date.now() >= UMZUG_AB ? bueroAegerten : company.address

/** Sitz laut Register. Folgt dem Buero erst nach der Registeraenderung. */
export const sitz = registerNachgefuehrt ? buero : company.address

/** Buero-Adresse einzeilig — fuer Kontaktseite und Standortangaben. */
export const bueroOneLine = `${buero.street}, ${buero.postalCode} ${buero.city}`

/** Sitz einzeilig — fuer Impressum und die Angabe zum Unternehmen. */
export const sitzOneLine = `${sitz.street}, ${sitz.postalCode} ${sitz.city}`

/**
 * Direktnummern der beiden Inhaber.
 * Von Ricardo am 07.09.2026 freigegeben, Octavios Nummer mit seiner Zustimmung.
 */
export const direktnummern = {
  ricardo: { anzeige: '078 625 53 85', e164: '+41786255385' },
  octavio: { anzeige: '078 679 56 37', e164: '+41786795637' },
} as const
