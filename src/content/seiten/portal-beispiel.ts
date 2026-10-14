/**
 * Beispielansichten des Kundenportals (Startseite und «Digital mit A&C»).
 * QUELLEN: `content/source/umbau_2026-10_de.md`, `umbau_2026-10b_de.md`.
 *
 * Seit dem 15.10.2026 nachgebaut nach den **echten** Portalseiten (`public-portal/portal.js`
 * im CRM) – Ricardo: «das ist nicht die ansicht in unserem system». Beschriftungen, Aufbau
 * und Reihenfolge stammen von dort; nur Person, Verträge, Nummern und Beträge sind erfunden
 * und als Beispiel bezeichnet. Lange Wörter tragen weiche Trennstellen.
 */

/** Ringdiagramm allein (steht auf keiner Seite mehr, bleibt für `PortalBeispiel`). */
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

/** Kopf des Portals, wie nach der Anmeldung. */
export const portalRahmen = {
  adresse: 'crm.ac-co.ch/portal',
  navigation: ['Start', 'Versicherungen', 'Anfragen', 'Meine Angaben', 'Zugang'],
  abmelden: 'Abmelden',
  hinweis: 'Beispielansicht mit erfundenen Angaben.',
} as const

/** Startseite des Portals (Cockpit). */
export const portalFenster = {
  vorzeile: 'Ihr Kundenportal',
  gruss: 'Guten Tag, Frau Muster',
  satz: 'Hier sehen Sie Ihre Versicherungen und erreichen uns direkt.',
  kennzahlen: [
    { zahl: '4', text: 'laufende Verträge', link: 'Ansehen' },
    { zahl: '4', text: 'Gesellschaften' },
  ],
  termin: { titel: 'Nächster Termin', text: 'Noch keiner vereinbart', knopf: 'Termin vereinbaren' },
  ringTitel: 'Ihre Versicherungskosten pro Jahr',
  proJahr: 'pro Jahr',
  segmente: [
    { text: 'Kranken­versicherung', betrag: 4200 },
    { text: 'Motor­fahrzeug', betrag: 1350 },
    { text: 'Hausrat und Privat­haftpflicht', betrag: 620 },
    { text: 'Rechtsschutz', betrag: 310 },
  ],
} as const

/** «Meine Versicherungen»: die Verträge als anklickbare Karten. */
export const portalVersicherungen = {
  titel: 'Meine Versicherungen',
  einleitung: 'Klicken Sie auf einen Vertrag, um die Einzelheiten zu sehen und die Police herunterzuladen.',
  gruppe: 'Über A&C betreut',
  policen: [
    { name: 'Kranken­versicherung', gesellschaft: 'Beispiel Versicherung AG', zeile: 'Police KV-100100 · 2 Unterlagen' },
    { name: 'Motor­fahrzeug', gesellschaft: 'Beispiel Versicherung AG', zeile: 'Police MF-100300 · 1 Unterlage' },
    { name: 'Hausrat und Privat­haftpflicht', gesellschaft: 'Beispiel Versicherung AG', zeile: 'Police BV-100200 · 1 Unterlage' },
  ],
} as const

/** «Anfragen»: Auswahl oben, darunter die bisherigen Anfragen mit Stand. Ein Rückruf ist angefragt oder erledigt. */
export const portalAnfragen = {
  titel: 'Anfragen',
  wahl: ['Offerte anfragen', 'Rückruf wünschen', 'Termin vereinbaren', 'Änderung melden', 'Nachricht senden'],
  bisher: 'Ihre bisherigen Anfragen',
  anfragen: [
    { betreff: 'Offertanfrage Motorfahrzeug', datum: '12.10.2026', stand: 'in Bearbeitung', art: 'navy' },
    { betreff: 'Bitte um Rückruf', datum: '14.10.2026', stand: 'angefragt', art: 'offen' },
    { betreff: 'Terminwunsch', datum: '02.10.2026', stand: 'erledigt', art: 'gruen' },
  ],
} as const

/** Eine Police von innen: Kopf mit «Police herunterladen», darunter die Unterlagen zum Vertrag. */
export const portalUnterlagen = {
  zurueck: 'Alle Versicherungen',
  name: 'Hausrat und Privat­haftpflicht',
  gesellschaft: 'Beispiel Versicherung AG',
  status: 'in Kraft',
  knopf: 'Police herunterladen',
  titel: 'Unterlagen zu diesem Vertrag',
  dokumente: [
    { name: 'Police 2026', zeile: 'Police · 01.01.2026 · 245 KB', knopf: 'Police herunterladen', haupt: true },
    { name: 'Nachtrag Wohnungswechsel', zeile: 'Nachtrag · 15.03.2026 · 120 KB', knopf: 'Herunterladen', haupt: false },
  ],
} as const
