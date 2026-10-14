/**
 * Beispielansichten des Kundenportals (Startseite und «Digital mit A&C»).
 * QUELLEN: `content/source/umbau_2026-10_de.md`, `umbau_2026-10b_de.md`.
 *
 * Alle Angaben sind erfunden und stehen auf der Seite sichtbar als Beispiel.
 * Die Prämien der Policenliste sind dieselben wie im Ringdiagramm, damit die
 * Ansichten zusammenpassen. Gezeigt wird nur, was das Portal tatsächlich kann:
 * Policen mit Prämie, Anfragen mit Stand, Dokumente.
 */
export const portalBeispiel = {
  titel: 'Meine Versicherungen',
  untertitel: 'Beispielansicht',
  diagrammTitel: 'Prämien pro Jahr',
  segmente: [
    { text: 'Gesundheit', betrag: 4200 },
    { text: 'Fahrzeug', betrag: 1350 },
    { text: 'Wohnen', betrag: 620 },
    { text: 'Rechtsschutz', betrag: 310 },
  ],
  hinweis: 'Beispiel mit erfundenen Zahlen.',
} as const

/**
 * Das Portal als Fenster, so wie es Kundinnen und Kunden nach der Anmeldung sehen:
 * Kopf, Begrüssung, Kennzahlen und das Ringdiagramm der Versicherungskosten
 * (seit dem 15.10.2026 im Portal). Erfundene Person, erfundene Zahlen.
 */
export const portalFenster = {
  adresse: 'crm.ac-co.ch/portal',
  navigation: ['Start', 'Versicherungen', 'Anfragen', 'Meine Angaben'],
  vorzeile: 'Ihr Kundenportal',
  gruss: 'Guten Tag, Frau Muster',
  satz: 'Hier sehen Sie Ihre Versicherungen und erreichen uns direkt.',
  kennzahlen: [
    { zahl: '4', text: 'laufende Verträge' },
    { zahl: '4', text: 'Gesellschaften' },
  ],
  termin: { titel: 'Nächster Termin', knopf: 'Termin vereinbaren' },
  ringTitel: 'Ihre Versicherungskosten pro Jahr',
  proJahr: 'pro Jahr',
  segmente: [
    { text: 'Kranken­versicherung', betrag: 4200 },
    { text: 'Motor­fahrzeug', betrag: 1350 },
    { text: 'Hausrat und Privat­haftpflicht', betrag: 620 },
    { text: 'Rechtsschutz', betrag: 310 },
  ],
  hinweis: 'Beispielansicht mit erfundenen Angaben.',
} as const

export const portalPolicen = {
  titel: 'Meine Policen',
  untertitel: 'Beispielansicht',
  spalte: 'Prämie pro Jahr',
  status: 'Aktiv',
  policen: [
    { sparte: 'Kranken­versicherung', detail: 'Grund- und Zusatz­versicherung', betrag: 4200 },
    { sparte: 'Motorfahrzeug', detail: 'Haftpflicht und Teilkasko', betrag: 1350 },
    { sparte: 'Hausrat und Privat­haftpflicht', detail: 'Wohnung und Privat­haftpflicht', betrag: 620 },
    { sparte: 'Rechtsschutz', detail: 'Privat- und Verkehrs­rechtsschutz', betrag: 310 },
  ],
  hinweis: 'Beispiel mit erfundenen Angaben.',
} as const

// Ein Rückruf kennt nur «Angefragt» und «Erledigt» – wie im Portal (Ricardo, 15.10.2026).
const DREI = ['Angefragt', 'In Bearbeitung', 'Erledigt'] as const
const ZWEI = ['Angefragt', 'Erledigt'] as const

export const portalAnfragen = {
  titel: 'Meine Anfragen',
  untertitel: 'Beispielansicht',
  anfragen: [
    { text: 'Offerte Motorfahrzeug', stufen: DREI, stand: 1 },
    { text: 'Neue Adresse', stufen: DREI, stand: 2 },
    { text: 'Rückruf zur Hausratversicherung', stufen: ZWEI, stand: 0 },
  ],
  hinweis: 'Beispiel mit erfundenen Angaben.',
} as const

export const portalDokumente = {
  titel: 'Meine Dokumente',
  untertitel: 'Beispielansicht',
  dokumente: [
    { name: 'Police Kranken­versicherung', art: 'PDF' },
    { name: 'Police Motorfahrzeug', art: 'PDF' },
    { name: 'Police Hausrat und Haftpflicht', art: 'PDF' },
    { name: 'Offerte Rechtsschutz', art: 'PDF' },
  ],
  hinweis: 'Beispiel mit erfundenen Angaben.',
} as const
