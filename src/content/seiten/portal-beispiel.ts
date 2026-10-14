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

export const portalPolicen = {
  titel: 'Meine Policen',
  untertitel: 'Beispielansicht',
  spalte: 'Prämie pro Jahr',
  status: 'Aktiv',
  policen: [
    { sparte: 'Krankenversicherung', detail: 'Grund- und Zusatzversicherung', betrag: 4200 },
    { sparte: 'Motorfahrzeug', detail: 'Haftpflicht und Teilkasko', betrag: 1350 },
    { sparte: 'Hausrat und Haftpflicht', detail: 'Wohnung und Privathaftpflicht', betrag: 620 },
    { sparte: 'Rechtsschutz', detail: 'Privat- und Verkehrsrechtsschutz', betrag: 310 },
  ],
  hinweis: 'Beispiel mit erfundenen Angaben.',
} as const

export const portalAnfragen = {
  titel: 'Meine Anfragen',
  untertitel: 'Beispielansicht',
  stufen: ['Angefragt', 'In Bearbeitung', 'Erledigt'],
  anfragen: [
    { text: 'Offerte Motorfahrzeug', stand: 1 },
    { text: 'Neue Adresse', stand: 2 },
    { text: 'Rückruf zur Hausratversicherung', stand: 0 },
  ],
  hinweis: 'Beispiel mit erfundenen Angaben.',
} as const

export const portalDokumente = {
  titel: 'Meine Dokumente',
  untertitel: 'Beispielansicht',
  dokumente: [
    { name: 'Police Krankenversicherung', art: 'PDF' },
    { name: 'Police Motorfahrzeug', art: 'PDF' },
    { name: 'Police Hausrat und Haftpflicht', art: 'PDF' },
    { name: 'Offerte Rechtsschutz', art: 'PDF' },
  ],
  hinweis: 'Beispiel mit erfundenen Angaben.',
} as const
