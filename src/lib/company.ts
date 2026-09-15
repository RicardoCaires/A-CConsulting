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

  /**
   * **Adresse seit dem 15.09.2026: Bielstrasse 10, 2558 Aegerten.**
   *
   * Auf Ricardos ausdrueckliche Anweisung („Die Geschaeftsadresse hat
   * geaendert und lautet neu"). Bis dahin stand hier Bielstrasse 22,
   * 3250 Lyss, und der Umzug war auf den 01.11.2026 vorgemerkt. Der Wechsel
   * gilt jetzt, und die alte Adresse steht an keiner Stelle mehr.
   *
   * **Die Postleitzahl ist 2558.** Ricardos Auftrag nannte zuerst dreimal
   * 2556; er hat das noch am selben Tag korrigiert („2558 Aegertn nicht
   * 2556"). Die Zahl steht nur hier — Anschrift, Ortsschild, Karte und der
   * Google-Maps-Link lesen sie von hier.
   *
   * **Offen und bei Ricardo**: Handelsregister und FINMA-Register fuehren den
   * Sitz; solange sie nicht nachgefuehrt sind, nennt die Website eine andere
   * Adresse als das oeffentliche Register. Der Auftrag verlangt die Aenderung
   * ausdruecklich auch im Impressum.
   */
  address: {
    street: 'Bielstrasse 10',
    postalCode: '2558',
    city: 'Aegerten',
    region: 'Kanton Bern',
    countryCode: 'CH',
  },

  /**
   * Telefon und E-Mail sind Pflichtangaben und stehen nur hier — nie in einer
   * Komponente. Die E-Mail ist von Ricardo am 04.09.2026 zur oeffentlichen
   * Verwendung freigegeben.
   *
   * **Die Telefonnummer ist am 10.09.2026 gewechselt**, auf Ricardos
   * ausdrueckliche Anweisung („ja soll die hauptnummer werden"). Bis dahin
   * stand hier seine Mobilnummer 078 625 53 85; sie stammte aus der Fusszeile
   * der bestehenden A&C-Dokumente. Neu ist es die Festnetznummer des Bueros.
   *
   * Die Aenderung wirkt ueberall auf einmal: Fussbereich jeder Seite,
   * Impressum, Kontaktseite, die Leistungsseiten und der Kontaktbereich der
   * Startseite lesen alle diesen Wert.
   *
   * Seine Mobilnummer ist damit **nicht** verschwunden — sie steht weiter
   * unter `direktnummern.ricardo` als seine persoenliche Direktnummer. Das ist
   * die Trennung, die jetzt gilt: hier die Firma, dort die Person.
   *
   * Noch offen und ausserhalb dieses Projekts: Der Corporate-Design-Skill und
   * `00_Shared/Stammdaten.md` fuehren in ihren Fusszeilen weiterhin die
   * Mobilnummer. Beide gehoeren nicht hierher und werden nicht von hier aus
   * geaendert.
   */
  phone: '032 373 22 44',
  /** Maschinenlesbare Form fuer `tel:` — E.164. */
  phoneE164: '+41323732244',

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
   * „Ricardo Caires" (Festlegung Ricardo, 04.09.2026).
   * Die Kurzform darf in knappen Oberflaechen-Zusammenhaengen stehen —
   * Bildunterschrift, Tabellenzelle, Signatur —, aber nur, wenn der
   * vollstaendige Name auf derselben Seite bereits eindeutig zu lesen ist.
   *
   * Fuer Octavio gilt seit dem 10.09.2026 dasselbe, auf Ricardos Anweisung:
   * ueberall die vollstaendige Form „Octavio Nuno Gouveia Andrade". Die
   * Kurzform „Octavio Andrade" stand bis dahin an achtzehn Stellen,
   * einschliesslich Impressum und Fussbereich, und ist ersetzt.
   */
  /**
   * **Die Geschaeftsfuehrung liegt seit dem 15.09.2026 bei Octavio.**
   *
   * Ricardo hat es an diesem Tag ausdruecklich festgehalten: „octavio ist
   * inhaber und Geschaeftsfuehrer ich bin nur inhaber". Bis dahin stand hier
   * — und in CLAUDE.md, Abschnitt 2 — Ricardo als Geschaeftsfuehrer; noch am
   * selben Tag hatte ein Auftrag von ihm dasselbe gesagt. Es gilt die
   * juengere, ausdrueckliche Anweisung.
   *
   * Die Angabe steht im Impressum unter „Vertretungsberechtigte Personen"
   * und ist damit eine Pflichtangabe. **Ricardo ist darauf hingewiesen, dass
   * sie mit dem Handelsregistereintrag uebereinstimmen muss.**
   */
  people: {
    managingDirector: 'Octavio Nuno Gouveia Andrade',
    coOwner: 'Ricardo Caires',
    coOwnerShort: 'Ricardo Caires',
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

/* ---- Buero und Sitz ------------------------------------------------------ */

/**
 * Buero und Sitz sind seit dem 15.09.2026 dieselbe Adresse.
 *
 * Bis dahin standen sie bewusst getrennt: `buero` waere am 01.11.2026 nach
 * Aegerten gewechselt, `sitz` erst nach der Registeraenderung. Ricardo hat den
 * Wechsel vorgezogen und ausdruecklich verlangt, dass die Adresse „an
 * saemtlichen weiteren Stellen" gilt — auch im Impressum. Die beiden Namen
 * bleiben, damit die Unterscheidung wieder greifen kann, sobald sie noetig ist.
 */
export const buero = company.address
export const sitz = company.address

/** Buero-Adresse einzeilig — fuer Kontaktseite und Standortangaben. */
export const bueroOneLine = `${buero.street}, ${buero.postalCode} ${buero.city}`

/**
 * Lage des Bueros, fuer die Karte.
 *
 * Nachgeschlagen am 15.09.2026 bei Nominatim (OpenStreetMap) fuer
 * "Bielstrasse 10, 2558 Aegerten, Schweiz" — die Abfrage loeste die Adresse
 * als bestehendes Gebaeude auf und bestaetigt damit die Postleitzahl 2558.
 * Nicht geschaetzt und nicht gerundet.
 */
export const bueroLage = {
  breite: 47.1222112,
  laenge: 7.2868003,
  /** Ausschnitt der Karte: links, unten, rechts, oben. */
  bbox: [7.2828, 47.1202, 7.2908, 47.1242],
} as const

/** Buero-Adresse als Satzteil — „Bielstrasse 10 in 2558 Aegerten". */
export const bueroImSatz = `${buero.street} in ${buero.postalCode} ${buero.city}`

/** Sitz einzeilig — fuer Impressum und die Angabe zum Unternehmen. */
export const sitzOneLine = `${sitz.street}, ${sitz.postalCode} ${sitz.city}`

/**
 * Routenplanung zum Buero, als Adresse statt als Koordinate.
 *
 * Google Maps bestimmt den Ausgangspunkt selbst; uebergeben wird nur das Ziel.
 * Die Adresse kommt aus `company.address` — ein Umzug aendert den Link mit.
 */
export const mapsRoute = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${buero.street}, ${buero.postalCode} ${buero.city}, Schweiz`,
)}`

/**
 * Direktnummern der beiden Inhaber.
 * Von Ricardo am 07.09.2026 freigegeben, Octavios Nummer mit seiner Zustimmung.
 */
export const direktnummern = {
  ricardo: { anzeige: '078 625 53 85', e164: '+41786255385' },
  octavio: { anzeige: '078 679 56 37', e164: '+41786795637' },
} as const

/**
 * Persoenliche E-Mail-Adressen der beiden Inhaber.
 * Von Ricardo am 15.09.2026 in dieser Schreibweise zur oeffentlichen
 * Verwendung freigegeben. `info@ac-co.ch` bleibt die Firmenadresse.
 */
export const direktadressen = {
  ricardo: 'Ricardo.caires@ac-co.ch',
  octavio: 'Octavio.andrade@ac-co.ch',
} as const
