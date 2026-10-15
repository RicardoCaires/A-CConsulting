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
  // Gekürzt auf drei Bereiche (Ricardo, 15.10.2026: «trotzdem weniger anzeigen»)
  navigation: ['Start', 'Versicherungen', 'Anfragen'],
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
  ringTitel: 'Ihre Versicherungs­kosten pro Jahr',
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
  // Motorfahrzeug ist angewählt: daneben steht seine Police (Ricardo: «nimm MF als Beispiel»)
  angewaehlt: 1,
  policen: [
    { name: 'Kranken­versicherung', gesellschaft: 'Beispiel Versicherung AG', zeile: 'Police KV-100100 · 2 Unterlagen' },
    { name: 'Motor­fahrzeug', gesellschaft: 'Beispiel Versicherung AG', zeile: 'Police MF-100300 · 1 Unterlage' },
    { name: 'Hausrat und Privat­haftpflicht', gesellschaft: 'Beispiel Versicherung AG', zeile: 'Police BV-100200 · 1 Unterlage' },
  ],
} as const

/**
 * Eine Police von innen, am Beispiel Motorfahrzeug: Kopf mit «Police herunterladen» und
 * «Was versichert ist» – Leistung, Selbstbehalt, Versicherungssumme wie im Portal.
 */
export const portalPolice = {
  zurueck: 'Alle Versicherungen',
  name: 'Motor­fahrzeug',
  gesellschaft: 'Beispiel Versicherung AG',
  status: 'in Kraft',
  knopf: 'Police herunterladen',
  titel: 'Was versichert ist',
  leistungen: [
    { name: 'Motorfahrzeug­haftpflicht', zusatz: null, wert: "CHF 100'000'000" },
    { name: 'Teilkasko', zusatz: 'Selbstbehalt CHF 200', wert: null },
    { name: 'Parkschaden', zusatz: 'Selbstbehalt CHF 500', wert: null },
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

/**
 * Das Portal zum Ausprobieren (15.10.2026). Ricardo: «interaktiv das Kundenportal zeigen
 * sodass man … fiktiv browsen kann natürlich mit erfundenen Daten und ohne das man etwas
 * absenden kann». Aufbau, Beschriftungen und Formulare wie in `public-portal/portal.js`;
 * Person, Gesellschaften, Verträge, Nummern und Beträge sind erfunden. Gesendet und
 * heruntergeladen wird nichts – an deren Stelle steht ein Hinweis.
 */
export const portalDemo = {
  navigation: [
    { seite: 'start', text: 'Start' },
    { seite: 'versicherungen', text: 'Versiche­rungen' },
    { seite: 'anfragen', text: 'Anfragen' },
    { seite: 'angaben', text: 'Meine Angaben' },
  ],
  bereiche: 'Bereiche',
  zurStart: 'Zur Startseite',
  band: 'Beispielportal mit erfundenen Angaben – klicken Sie sich durch. Gesendet wird nichts.',
  meldungSenden: 'Im Beispielportal wird nichts gesendet. Im echten Portal wäre Ihre Anfrage jetzt bei uns.',
  meldungLaden: 'Im Beispielportal gibt es keine Dateien. Im echten Portal laden Sie hier die PDF-Datei herunter.',
  meldungAngabe: 'Im Beispielportal wird nichts gesendet. Im echten Portal übernehmen wir Ihre Änderung.',
  schliessen: 'Hinweis schliessen',

  start: {
    vorzeile: 'Ihr Kundenportal',
    gruss: 'Guten Tag, Frau Muster',
    satz: 'Hier sehen Sie Ihre Versicherungen und erreichen uns direkt.',
    vertraege: 'laufende Verträge',
    gesellschaften: 'Gesellschaften',
    ansehen: 'Ansehen',
    termin: { titel: 'Nächster Termin', text: 'Noch keiner vereinbart', knopf: 'Termin vereinbaren' },
    ringTitel: 'Ihre Versicherungs­kosten pro Jahr',
    proJahr: 'pro Jahr',
    tun: 'Was möchten Sie tun?',
    kacheln: [
      { zeichen: 'schild', titel: 'Meine Versicherungen', text: 'Verträge, Deckungen und Policen zum Herunterladen', seite: 'versicherungen', formular: null },
      { zeichen: 'dokument', titel: 'Offerte anfragen', text: 'Für eine neue oder bessere Versicherung', seite: 'anfragen', formular: 'offerte' },
      { zeichen: 'telefon', titel: 'Rückruf wünschen', text: 'Wir rufen Sie zur gewünschten Zeit an', seite: 'anfragen', formular: 'rueckruf' },
      { zeichen: 'kalender', titel: 'Termin vereinbaren', text: 'Im Büro oder am Telefon', seite: 'anfragen', formular: 'termin' },
      { zeichen: 'person', titel: 'Meine Angaben', text: 'Adresse, Telefon oder E-Mail ändern', seite: 'angaben', formular: null },
      { zeichen: 'nachricht', titel: 'Nachricht senden', text: 'Eine Frage oder ein Anliegen', seite: 'anfragen', formular: 'nachricht' },
    ],
    offenEine: 'Eine Anfrage ist offen',
    offenMehr: 'Anfragen sind offen',
    alleAnfragen: 'Alle Anfragen ansehen',
  },

  versicherungen: {
    titel: 'Meine Versicherungen',
    einleitung: 'Klicken Sie auf einen Vertrag, um die Einzelheiten zu sehen und die Police herunterzuladen.',
    gruppe: 'Über A&C betreut',
    unterlage: 'Unterlage',
    unterlagen: 'Unterlagen',
    stand: 'Grundlage sind die bei A&C erfassten Angaben. Massgebend ist die Police der jeweiligen Gesellschaft.',
  },

  police: {
    zurueck: 'Alle Versicherungen',
    status: 'in Kraft',
    herunterladen: 'Police herunterladen',
    laden: 'Herunterladen',
    vertrag: 'Vertrag',
    versichert: 'Was versichert ist',
    versichertHinweis: 'Aufgeführt ist, was bei uns erfasst ist. Fehlt eine Leistung aus Ihrer Police, melden Sie es uns bitte.',
    unterlagen: 'Unterlagen zu diesem Vertrag',
    aendern: 'Änderung zu diesem Vertrag melden',
    frage: 'Frage zu diesem Vertrag',
    rueckruf: 'Rückruf wünschen',
    massgebend: 'Massgebend ist die Police der Gesellschaft. Die Angaben hier stammen aus unserer Erfassung.',
    angaben: {
      gesellschaft: 'Gesellschaft',
      versicherung: 'Versicherung',
      nummer: 'Policennummer',
      laufzeit: 'Laufzeit',
      verfall: 'Hauptverfall',
      praemie: 'Prämie',
    },
  },

  policen: [
    {
      id: 'kv',
      name: 'Kranken­versicherung',
      sparte: 'Grund- und Zusatzversicherung',
      gesellschaft: 'Beispiel Krankenkasse',
      nummer: 'KV-100100',
      laufzeit: '01.01.2026 bis 31.12.2026',
      verfall: '31. Dezember',
      praemie: 'CHF 350.00 monatlich',
      jahr: 4200,
      leistungen: [
        { name: 'Grundversicherung', zusatz: 'Franchise CHF 1’500', wert: null },
        { name: 'Spital halbprivat', zusatz: null, wert: null },
        { name: 'Alternativmedizin', zusatz: '80 % der Kosten', wert: null },
      ],
      objekt: null,
      dokumente: [
        { name: 'Police 2026', zeile: 'Police · 01.01.2026 · 210 KB', police: true },
        { name: 'Versicherungsausweis', zeile: 'Ausweis · 01.01.2026 · 85 KB', police: false },
      ],
    },
    {
      id: 'mf',
      name: 'Motor­fahrzeug',
      sparte: 'Motorfahrzeug',
      gesellschaft: 'Beispiel Versicherung AG',
      nummer: 'MF-100300',
      laufzeit: '01.03.2025 bis 28.02.2028',
      verfall: '1. März',
      praemie: 'CHF 1’350.00 jährlich',
      jahr: 1350,
      leistungen: [
        { name: 'Motorfahrzeug­haftpflicht', zusatz: null, wert: "CHF 100'000'000" },
        { name: 'Teilkasko', zusatz: 'Selbstbehalt CHF 200', wert: null },
        { name: 'Parkschaden', zusatz: 'Selbstbehalt CHF 500', wert: null },
      ],
      objekt: {
        titel: 'Fahrzeug: Beispielwagen Kombi',
        angaben: [
          { name: '1. Inverkehrsetzung', wert: '03.2021' },
          { name: 'Katalogpreis', wert: 'CHF 42’000.00' },
          { name: 'Hauptlenkerin', wert: 'Anna Muster' },
        ],
      },
      dokumente: [{ name: 'Police 2025', zeile: 'Police · 01.03.2025 · 245 KB', police: true }],
    },
    {
      id: 'hr',
      name: 'Hausrat und Privat­haftpflicht',
      sparte: 'Hausrat und Privathaftpflicht',
      gesellschaft: 'Muster Versicherung AG',
      nummer: 'BV-100200',
      laufzeit: '01.04.2024 bis 31.03.2027',
      verfall: '1. April',
      praemie: 'CHF 620.00 jährlich',
      jahr: 620,
      leistungen: [
        { name: 'Hausrat', zusatz: 'Selbstbehalt CHF 200', wert: 'CHF 80’000.00' },
        { name: 'Privathaftpflicht', zusatz: null, wert: 'CHF 5’000’000.00' },
        { name: 'Einfacher Diebstahl auswärts', zusatz: null, wert: 'CHF 3’000.00' },
      ],
      objekt: null,
      dokumente: [
        { name: 'Police 2024', zeile: 'Police · 01.04.2024 · 230 KB', police: true },
        { name: 'Nachtrag Wohnungswechsel', zeile: 'Nachtrag · 15.03.2026 · 120 KB', police: false },
      ],
    },
    {
      id: 'rs',
      name: 'Rechtsschutz',
      sparte: 'Privat- und Verkehrsrechtsschutz',
      gesellschaft: 'Beispiel Rechtsschutz AG',
      nummer: 'RS-100400',
      laufzeit: '01.01.2026 bis 31.12.2028',
      verfall: '1. Januar',
      praemie: 'CHF 310.00 jährlich',
      jahr: 310,
      leistungen: [
        { name: 'Privatrechtsschutz', zusatz: null, wert: 'CHF 600’000.00' },
        { name: 'Verkehrsrechtsschutz', zusatz: null, wert: 'CHF 600’000.00' },
      ],
      objekt: null,
      dokumente: [{ name: 'Police 2026', zeile: 'Police · 01.01.2026 · 190 KB', police: true }],
    },
  ],

  anfragen: {
    titel: 'Anfragen',
    waehlen: 'Wählen Sie oben, worum es geht.',
    bisher: 'Ihre bisherigen Anfragen',
    formulare: [
      { formular: 'offerte', zeichen: 'dokument', titel: 'Offerte anfragen', text: 'Mit den Angaben, die eine Gesellschaft braucht' },
      { formular: 'rueckruf', zeichen: 'telefon', titel: 'Rückruf wünschen', text: 'Wir rufen Sie an' },
      { formular: 'termin', zeichen: 'kalender', titel: 'Termin vereinbaren', text: 'Im Büro oder am Telefon' },
      { formular: 'vertrag', zeichen: 'schild', titel: 'Änderung melden', text: 'Zu einem bestehenden Vertrag' },
      { formular: 'nachricht', zeichen: 'nachricht', titel: 'Nachricht senden', text: 'Frage oder Anliegen' },
    ],
    liste: [
      { betreff: 'Offertanfrage Motorfahrzeug', datum: '12.10.2026', stand: 'in Bearbeitung', art: 'navy', text: 'Bitte um eine Vergleichsofferte mit Vollkasko.' },
      { betreff: 'Terminwunsch', datum: '02.10.2026', stand: 'erledigt', art: 'gruen', text: 'Jahresgespräch im Büro.' },
    ],
    neu: 'angefragt',
    freiwillig: 'freiwillig',
    bitteWaehlen: 'Bitte wählen',
    // Frage für Frage wie im Portal (15.10.2026); eine Auswahl der echten Fragen je Versicherung
    offerte: {
      sparte: 'Wofür wünschen Sie eine Offerte?',
      sparteHilfe: 'Wählen Sie eine Versicherung. Weitere besprechen wir gerne im Gespräch.',
      fragen: [
        {
          sparte: 'Motorfahrzeug',
          fragen: [
            { titel: 'Um welche Art Fahrzeug geht es?', optionen: ['Personenwagen', 'Lieferwagen bis 3.5 t', 'Motorrad', 'Wohnmobil'] },
            { titel: 'Welche Marke und welches Modell?', fahrzeug: true },
            { titel: 'Wie viele Kilometer wird das Fahrzeug pro Jahr gefahren?', optionen: ['etwa 5’000 km', 'etwa 10’000 km', 'etwa 15’000 km', 'etwa 20’000 km', 'mehr als 30’000 km'] },
            { titel: 'Wo steht das Fahrzeug über Nacht?', optionen: ['Einzelgarage', 'Sammelgarage', 'Carport', 'Aussenparkplatz'] },
            { titel: 'Welcher Versicherungsumfang ist gewünscht?', optionen: ['nur Haftpflicht', 'Teilkasko', 'Vollkasko'] },
          ],
        },
        {
          sparte: 'Hausrat',
          fragen: [
            { titel: 'Wie wohnen Sie?', optionen: ['Mietwohnung', 'Eigentumswohnung', 'Einfamilienhaus'] },
            { titel: 'Wie viele Zimmer hat die Wohnung oder das Haus?', optionen: ['1 bis 1½', '2 bis 2½', '3 bis 3½', '4 bis 4½', '5 bis 5½', '6 und mehr'] },
            { titel: 'Wie viele Personen leben im Haushalt?', optionen: ['1', '2', '3', '4', '5 und mehr'] },
          ],
        },
        {
          sparte: 'Privathaftpflicht',
          fragen: [
            { titel: 'Wer soll versichert sein?', optionen: ['Einzelperson', 'Paar ohne Kinder', 'Familie', 'Haushalt'] },
            { titel: 'Welche Versicherungssumme ist gewünscht?', optionen: ['CHF 3 Mio.', 'CHF 5 Mio.', 'CHF 10 Mio.'] },
          ],
        },
        {
          sparte: 'Rechtsschutz',
          fragen: [
            { titel: 'Wer soll versichert sein?', optionen: ['Einzelperson', 'Familie', 'Haushalt'] },
            { titel: 'Besitzen Sie Wohneigentum?', optionen: ['ja', 'nein'] },
          ],
        },
        {
          sparte: 'Reiseversicherung',
          fragen: [
            { titel: 'Soll eine Jahresversicherung oder eine einzelne Reise versichert werden?', optionen: ['Jahresversicherung', 'Einzelreise'] },
            { titel: 'Wohin wird gereist?', optionen: ['Europa', 'weltweit'] },
          ],
        },
      ],
      frageVon: 'Frage',
      von: 'von',
      letzter: 'Letzter Schritt',
      weiter: 'Weiter',
      ueberspringen: 'Überspringen',
      gespraech: 'Rest im Gespräch klären',
      zurueck: 'Zurück',
      fastFertig: 'Fast fertig',
      mitteilen: 'Möchten Sie uns noch etwas mitteilen?',
      zusammenfassung: 'Zusammenfassung',
      ihre: 'Ihre Offertanfrage',
      keineAngaben: 'Alles Weitere klären wir im Gespräch.',
      angaben: 'Angaben',
      marke: 'Marke',
      modell: 'Modell',
      ausfuehrung: 'Ausführung, falls bekannt',
      beispiel: 'zum Beispiel 2.0 TDI',
      bemerkung: 'Bemerkung',
      knopf: 'Offertanfrage senden',
      betreff: 'Offertanfrage',
    },
    rueckruf: {
      telefon: 'Unter dieser Nummer erreichen wir Sie',
      nummer: '079 000 00 00',
      zeit: 'Am besten erreichbar',
      zeiten: ['jederzeit', 'vormittags', 'über Mittag', 'nachmittags', 'gegen Abend'],
      thema: 'Worum geht es?',
      themen: ['Bestehender Vertrag', 'Neue Versicherung', 'Schadenfall', 'Treuhand oder Steuern', 'Anderes'],
      tag: 'Wunschtag',
      text: 'Möchten Sie noch etwas ergänzen?',
      knopf: 'Rückruf anfordern',
      betreff: 'Bitte um Rückruf',
    },
    termin: {
      tag: 'An welchem Tag?',
      uhr: 'Um welche Zeit?',
      ort: 'Wie möchten Sie uns treffen?',
      orte: ['im Büro', 'telefonisch'],
      text: 'Worum geht es?',
      hinweis: 'Das ist Ihr Wunschtermin. Er gilt erst, wenn wir ihn Ihnen bestätigt haben; passt er uns nicht, schlagen wir Ihnen einen anderen vor.',
      knopf: 'Terminwunsch senden',
      betreff: 'Terminwunsch',
      uhrzeit: 'Uhr',
    },
    // Gezielte Fragen je Art der Änderung, wie im Portal (15.10.2026). Ricardo: «wenn man z.B das
    // Fahrzeug wechseln möchte soll man auch das neue Fahrzeug angeben und nicht einfach text eingeben»
    vertrag: {
      police: 'Welcher Vertrag?',
      was: 'Was ändert sich?',
      arten: [
        {
          art: 'Fahrzeugwechsel',
          nurFahrzeug: true,
          felder: [
            { key: 'fzart', typ: 'wahl', titel: 'Was für ein Fahrzeug?', optionen: ['Personenwagen', 'Lieferwagen', 'Motorrad', 'Wohnmobil'] },
            { key: 'fahrzeug', typ: 'fahrzeug', titel: 'Neues Fahrzeug' },
            { key: 'ausfuehrung', typ: 'text', titel: 'Ausführung' },
            { key: 'iv', typ: 'datum', titel: '1. Inverkehrsetzung' },
            { key: 'zustand', typ: 'wahl', titel: 'Neu oder Occasion?', optionen: ['neu', 'Occasion'] },
            { key: 'schild', typ: 'wahl', titel: 'Kontrollschild', optionen: ['bisheriges übernehmen', 'neues Kontrollschild'] },
            { key: 'leasing', typ: 'wahl', titel: 'Ist das Fahrzeug geleast?', optionen: ['ja', 'nein'] },
            { key: 'preis', typ: 'text', titel: 'Katalogpreis inklusive Zubehör, falls bekannt' },
          ],
        },
        {
          art: 'Adresse oder Standort',
          nurFahrzeug: false,
          felder: [
            { key: 'strasse', typ: 'text', titel: 'Neue Strasse und Nummer' },
            { key: 'plzort', typ: 'text', titel: 'PLZ und Ort' },
          ],
        },
        {
          art: 'Deckung oder Leistungen anpassen',
          nurFahrzeug: false,
          felder: [
            { key: 'richtung', typ: 'wahl', titel: 'Was möchten Sie?', optionen: ['Deckung erweitern', 'Deckung reduzieren', 'Beratung zur Deckung'] },
            { key: 'betrifft', typ: 'deckungen', titel: 'Welche Leistungen betrifft es?' },
          ],
        },
        {
          art: 'Versicherungssumme oder Selbstbehalt',
          nurFahrzeug: false,
          felder: [
            { key: 'selbstbehalt', typ: 'wahl', titel: 'Welchen Selbstbehalt wünschen Sie?', optionen: ['CHF 0', 'CHF 200', 'CHF 500', 'CHF 1’000', 'CHF 2’500'] },
            { key: 'summe', typ: 'text', titel: 'Neue Versicherungssumme' },
          ],
        },
        {
          art: 'Versicherte Personen oder Lenker',
          nurFahrzeug: false,
          felder: [
            { key: 'aktion', typ: 'wahl', titel: 'Was ändert sich?', optionen: ['Person hinzufügen', 'Person entfernen'] },
            { key: 'person', typ: 'text', titel: 'Vorname und Nachname' },
          ],
        },
        {
          art: 'Kündigung oder Sistierung',
          nurFahrzeug: false,
          felder: [
            { key: 'kart', typ: 'wahl', titel: 'Was möchten Sie?', optionen: ['Kündigung', 'Sistierung, Fahrzeug vorübergehend ausser Verkehr'] },
            { key: 'grund', typ: 'wahl', titel: 'Aus welchem Grund?', optionen: ['Fahrzeug verkauft', 'Umzug ins Ausland', 'Wechsel der Gesellschaft', 'Anderer Grund'] },
          ],
        },
        { art: 'Anderes', nurFahrzeug: false, felder: [] },
      ],
      ab: 'Ab wann?',
      ergaenzen: 'Möchten Sie noch etwas ergänzen?',
      anderes: 'Was ändert sich?',
      suchen: 'Tippen Sie die ersten Buchstaben. Fehlt Ihr Fahrzeug, schreiben Sie es einfach hinein.',
      hinweis: 'Ihre Meldung ändert den Vertrag noch nicht. Wir klären die Änderung mit der Gesellschaft und bestätigen sie Ihnen.',
      fehlt: 'Bitte wählen oder ergänzen Sie, was sich ändert.',
      knopf: 'Änderung melden',
      betreff: 'Änderung zu',
    },
    nachricht: {
      betreff: 'Betreff',
      text: 'Ihre Nachricht',
      knopf: 'Nachricht senden',
      standard: 'Nachricht',
    },
  },

  angaben: {
    titel: 'Meine Angaben',
    hinweis: 'Ihre Meldung kommt bei uns an und wird von Hand übernommen — so bleibt nachvollziehbar, woher eine Angabe stammt. Name, Geburtsdatum und Firmenangaben ändern wir nach Rücksprache.',
    knopf: 'Änderung melden',
    felder: [
      { feld: 'strasse', name: 'Strasse und Nummer', wert: 'Musterweg 1' },
      { feld: 'ort', name: 'PLZ und Ort', wert: '2558 Aegerten' },
      { feld: 'mobile', name: 'Mobile', wert: '079 000 00 00' },
      { feld: 'email', name: 'E-Mail', wert: 'anna.muster@beispiel.ch' },
    ],
  },
} as const
