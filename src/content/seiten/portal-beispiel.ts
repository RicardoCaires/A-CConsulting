/**
 * Beispielansicht des Kundenportals (Startseite und «Digital mit A&C»).
 * QUELLE: `content/source/umbau_2026-10_de.md`. Die Zahlen sind erfunden und
 * stehen auf der Seite sichtbar als Beispiel.
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
  hinweis: 'Beispiel mit erfundenen Zahlen. Im Kundenportal sehen Sie jede Police mit Prämie und Deckungen.',
} as const
