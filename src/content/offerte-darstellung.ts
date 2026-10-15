/**
 * Wie die Fragen des Offertkatalogs auf der Website erscheinen (15.10.2026).
 *
 * Ricardo: «keine in Klammern gesetzte Begriffe», «eine Text eingabe nur dann … wenn es
 * nicht anders geht», «Fahrzeug und Modell suchen oder auswählen … falls es nicht vorhanden
 * ist dann selbst eingeben».
 *
 * Der Katalog selbst bleibt unverändert im CRM – er dient auch dem Offertentool. Hier steht
 * nur die Darstellung: eigener Titel ohne Klammern, Auswahl statt Eingabe, Suchliste mit
 * eigener Eingabe. **Was gesendet wird, ist immer lesbarer Text** («CHF 500», «etwa
 * 10'000 km»); der Server nimmt bei Zahl-, Betrags- und Textfeldern jeden Text an und
 * prüft nur die festen Auswahlfelder, deren Werte hier unverändert bleiben.
 *
 * QUELLE: `content/source/offertanfrage_de.md`, Abschnitt «Darstellung vom 15.10.2026».
 */

export type Wahl = { text: string; wert: string }

export type Darstellung = {
  /** Frage auf der Seite, ersetzt die Katalogfrage. */
  titel?: string
  /** Hinweis unter der Frage. */
  hilfe?: string
  /** Knöpfe statt Eingabe. */
  wahl?: readonly Wahl[]
  /** Beschriftung des Knopfs, der doch ein Eingabefeld öffnet. Fehlt sie, gibt es keine eigene Eingabe. */
  andere?: string
  /** Mehrere Knöpfe wählbar, gesendet als Aufzählung. */
  mehrere?: boolean
  /** Suchliste mit eigener Eingabe. */
  liste?: 'versicherer' | 'leasing' | 'vorsorge'
  /** Marke und Modell suchen. */
  fahrzeug?: boolean
}

const chf = (betraege: readonly string[]): Wahl[] => betraege.map((b) => ({ text: `CHF ${b}`, wert: `CHF ${b}` }))

const SELBSTBEHALT_KLEIN = chf(['0', '200', '500', '1\'000'])
const KUENDIGUNGSFRIST: Wahl[] = [
  { text: '1 Monat', wert: '1 Monat' },
  { text: '3 Monate', wert: '3 Monate' },
  { text: '6 Monate', wert: '6 Monate' },
  { text: 'Weiss ich nicht', wert: 'unbekannt' },
]

/** Nach dem Teil hinter dem Punkt im Schlüssel, für Fragen, die in jeder Sparte vorkommen. */
export const nachEndung: Record<string, Darstellung> = {
  bestehend_versicherer: {
    titel: 'Bei welcher Gesellschaft sind Sie heute versichert?',
    hilfe: 'Tippen Sie die ersten Buchstaben. Fehlt die Gesellschaft, schreiben Sie sie einfach hinein.',
    liste: 'versicherer',
  },
  bestehend_ablauf: { titel: 'Wann läuft die heutige Police ab?' },
  bestehend_kuendigungsfrist: { titel: 'Wie lange ist die Kündigungsfrist der heutigen Police?', wahl: KUENDIGUNGSFRIST },
  selbstbehalt: { titel: 'Welchen Selbstbehalt wünschen Sie?', wahl: SELBSTBEHALT_KLEIN, andere: 'Anderer Betrag' },
}

/** Nach dem ganzen Schlüssel. Geht vor `nachEndung`. */
export const nachSchluessel: Record<string, Darstellung> = {
  // ---- Motorfahrzeug
  'mf.marke_typ': {
    titel: 'Welche Marke und welches Modell?',
    hilfe: 'Tippen Sie die ersten Buchstaben und wählen Sie aus. Fehlt Ihr Fahrzeug, schreiben Sie es einfach hinein.',
    fahrzeug: true,
  },
  // Der Katalog spricht hier von «{kunde}» – auf der Website ist das die Person, die anfragt
  'mf.halter_ist_kunde': { titel: 'Sind Sie Halterin oder Halter gemäss Fahrzeugausweis?' },
  'mf.hauptlenker_ist_kunde': { titel: 'Lenken Sie das Fahrzeug am häufigsten?' },
  'mf.kaufdatum': { titel: 'Wann haben Sie das Fahrzeug gekauft?' },
  'mf.abstellort': { titel: 'Wo steht das Fahrzeug über Nacht?' },
  'mf.leasing_ende': { titel: 'Wann endet der Leasingvertrag?' },
  'mf.typengenehmigung': { titel: 'Wie lautet die Typengenehmigung?', hilfe: 'Sie steht im Fahrzeugausweis unter Ziffer 24.' },
  'mf.stammnummer': { titel: 'Wie lautet die Stammnummer?', hilfe: 'Sie steht im Fahrzeugausweis unter Ziffer 18.' },
  'mf.kontrollschild': { titel: 'Wie lautet das Kontrollschild?', hilfe: 'Zum Beispiel BE 123456.' },
  'mf.zubehoer': {
    titel: 'Wie viel ist zusätzliches Zubehör wert?',
    wahl: [{ text: 'Kein Zubehör', wert: 'keines' }, ...chf(['1\'000', '2\'000', '5\'000'])],
    andere: 'Anderer Betrag',
  },
  'mf.kilometerstand': {
    titel: 'Wie viele Kilometer hat das Fahrzeug heute?',
    wahl: [
      { text: 'unter 20\'000 km', wert: 'unter 20\'000 km' },
      { text: '20\'000 bis 50\'000 km', wert: '20\'000 bis 50\'000 km' },
      { text: '50\'000 bis 100\'000 km', wert: '50\'000 bis 100\'000 km' },
      { text: '100\'000 bis 150\'000 km', wert: '100\'000 bis 150\'000 km' },
      { text: 'über 150\'000 km', wert: 'über 150\'000 km' },
    ],
    andere: 'Genauen Stand eingeben',
  },
  'mf.jahreskilometer': {
    wahl: [
      { text: 'etwa 5\'000 km', wert: 'etwa 5\'000 km' },
      { text: 'etwa 10\'000 km', wert: 'etwa 10\'000 km' },
      { text: 'etwa 15\'000 km', wert: 'etwa 15\'000 km' },
      { text: 'etwa 20\'000 km', wert: 'etwa 20\'000 km' },
      { text: 'etwa 30\'000 km', wert: 'etwa 30\'000 km' },
      { text: 'mehr als 30\'000 km', wert: 'mehr als 30\'000 km' },
    ],
  },
  'mf.leasinggeber': {
    titel: 'Bei wem ist das Fahrzeug geleast oder finanziert?',
    hilfe: 'Tippen Sie die ersten Buchstaben. Fehlt die Firma, schreiben Sie sie einfach hinein.',
    liste: 'leasing',
  },
  'mf.selbstbehalt_teilkasko': { wahl: chf(['0', '200', '500', '1\'000']), andere: 'Anderer Betrag' },
  'mf.selbstbehalt_vollkasko': { wahl: chf(['500', '1\'000', '2\'000', '3\'000']), andere: 'Anderer Betrag' },

  // ---- Hausrat, Haftpflicht, Reise, Gebäude
  'hr.wohnform': { titel: 'Wie wohnen Sie?' },
  'ph.mieter': { titel: 'Wohnen Sie in gemieteten Räumen?' },
  'rs.wohneigentum': { titel: 'Besitzen Sie Wohneigentum?' },
  'gb.schaetzung_datum': { titel: 'Wann wurde das Gebäude zuletzt geschätzt?' },
  'hr.zimmer': {
    wahl: [
      { text: '1 bis 1½', wert: '1 bis 1½' },
      { text: '2 bis 2½', wert: '2 bis 2½' },
      { text: '3 bis 3½', wert: '3 bis 3½' },
      { text: '4 bis 4½', wert: '4 bis 4½' },
      { text: '5 bis 5½', wert: '5 bis 5½' },
      { text: '6 und mehr', wert: '6 und mehr' },
    ],
  },
  'hr.personen': {
    wahl: [
      { text: '1', wert: '1' },
      { text: '2', wert: '2' },
      { text: '3', wert: '3' },
      { text: '4', wert: '4' },
      { text: '5 und mehr', wert: '5 und mehr' },
    ],
  },
  'hr.versicherungssumme': {
    wahl: chf(['30\'000', '50\'000', '75\'000', '100\'000', '150\'000', '200\'000']),
    andere: 'Anderer Betrag',
  },
  'hr.diebstahl_auswaerts_summe': { wahl: chf(['2\'000', '5\'000', '10\'000', '20\'000']), andere: 'Anderer Betrag' },
  'ph.sonderrisiken': {
    titel: 'Gibt es besondere Risiken?',
    hilfe: 'Wählen Sie alles, was zutrifft.',
    mehrere: true,
    wahl: [
      { text: 'Boot', wert: 'Boot' },
      { text: 'Drohne', wert: 'Drohne' },
      { text: 'Jagd', wert: 'Jagd' },
      { text: 'Vermietetes Eigentum', wert: 'vermietetes Eigentum' },
    ],
  },
  're.annullierung_summe': { wahl: chf(['5\'000', '10\'000', '20\'000', '30\'000']), andere: 'Anderer Betrag' },
  'gb.anzahl_wohnungen': {
    wahl: [
      { text: '1', wert: '1' },
      { text: '2', wert: '2' },
      { text: '3', wert: '3' },
      { text: '4', wert: '4' },
      { text: '5 bis 10', wert: '5 bis 10' },
      { text: 'mehr als 10', wert: 'mehr als 10' },
    ],
  },
  'gb.selbstbehalt': { wahl: chf(['200', '500', '1\'000', '2\'000']), andere: 'Anderer Betrag' },
  'gb.photovoltaik_details': {
    titel: 'Wie gross ist die Photovoltaikanlage, und was ist sie wert?',
    hilfe: 'Leistung in kWp und Wert in Franken.',
  },

  // ---- Unternehmen
  'uvgz.uvg_versicherer': {
    titel: 'Bei wem ist die obligatorische Unfallversicherung?',
    hilfe: 'Tippen Sie die ersten Buchstaben. Fehlt die Gesellschaft, schreiben Sie sie einfach hinein.',
    liste: 'versicherer',
  },
  'uvgz.personenkreis_details': { titel: 'Welche Personengruppen sollen versichert werden?', hilfe: 'Mit Bezeichnung, Anzahl und Lohnsumme.' },
  'uvgz.lohnspitze_summe': { titel: 'Wie hoch ist die Lohnsumme über dem UVG-Maximum?', hilfe: 'Für die Deckung der Lohnspitzen.' },
  'uvgz.kapitalien': { titel: 'Welche Kapitalien wünschen Sie bei Invalidität und Tod?' },
  'ktg.gav': { titel: 'Untersteht der Betrieb einem Gesamtarbeitsvertrag?' },
  'ktg.laufende_faelle_details': { titel: 'Welche Fälle laufen derzeit?', hilfe: 'Bitte ohne Diagnosen.' },
  'bvg.versicherte': {
    wahl: [
      { text: '1 bis 5', wert: '1 bis 5' },
      { text: '6 bis 10', wert: '6 bis 10' },
      { text: '11 bis 20', wert: '11 bis 20' },
      { text: '21 bis 50', wert: '21 bis 50' },
      { text: 'mehr als 50', wert: 'mehr als 50' },
    ],
  },
  'bvg.bisherige_einrichtung': {
    titel: 'Bei welcher Vorsorgeeinrichtung ist der Betrieb heute?',
    hilfe: 'Tippen Sie die ersten Buchstaben. Fehlt sie, schreiben Sie sie einfach hinein.',
    liste: 'vorsorge',
  },
  'bvg.rentner_details': { titel: 'Wie sieht der Rentnerbestand aus?', hilfe: 'Anzahl, Rentenart und ob er übertragen werden soll.' },
  'bvg.arbeitsunfaehige_details': { titel: 'Wie viele Personen sind arbeitsunfähig, und zu welchem Grad?', hilfe: 'Bitte ohne Diagnosen.' },
  'bvg.risikoleistungen': {
    titel: 'Welche Risikoleistungen wünschen Sie?',
    hilfe: 'Etwa Invaliden-, Partner- oder Kinderrente und Todesfallkapital.',
  },
  'bh.lohnsumme': { titel: 'Wie hoch ist die Lohnsumme?', hilfe: 'Nur nötig, wenn die Prämie danach berechnet wird.' },
  'bh.produkte_details': { titel: 'Welche Produkte stellen Sie her oder verkaufen Sie?', hilfe: 'Mit Art und Anteil am Umsatz.' },
  'bh.obhut_bearbeitung': { titel: 'Arbeiten Sie an fremden Sachen, oder haben Sie fremde Sachen in Obhut?' },
  'bh.beratung_details': {
    titel: 'Welche beratende oder planende Tätigkeit üben Sie aus?',
    hilfe: 'Mit Art, Honorarumsatz und typischen Auftraggebern.',
  },
  'bh.selbstbehalt': { wahl: chf(['0', '500', '1\'000', '2\'500', '5\'000']), andere: 'Anderer Betrag' },
  'sach.standorte': { titel: 'Welche Standorte sollen versichert werden?', hilfe: 'Mit Adresse und Nutzung.' },
  'sach.sicherung': {
    titel: 'Welche Sicherungen gibt es?',
    hilfe: 'Wählen Sie alles, was zutrifft.',
    mehrere: true,
    wahl: [
      { text: 'Alarmanlage', wert: 'Alarmanlage' },
      { text: 'Tresor', wert: 'Tresor' },
      { text: 'Brandmelder', wert: 'Brandmelder' },
      { text: 'Sprinkler', wert: 'Sprinkler' },
      { text: 'Keine', wert: 'keine' },
    ],
  },
  'sach.gefahrstoffe_details': { titel: 'Welche gefährlichen Stoffe, und in welcher Menge?' },
  'sach.einrichtung': { titel: 'Wie hoch ist der Neuwert der Betriebseinrichtung?' },
  'sach.diebstahl_summe': { titel: 'Bis zu welchem Betrag soll Einbruchdiebstahl versichert sein?', hilfe: 'Versichert auf erstes Risiko.' },
  'sach.elektronik': { titel: 'Welche Elektronik und Maschinen sollen versichert werden?', hilfe: 'Mit Neuwert.' },
  'sach.selbstbehalt': { wahl: chf(['0', '500', '1\'000', '2\'500', '5\'000']), andere: 'Anderer Betrag' },
  'cy.datensaetze': {
    wahl: [
      { text: 'unter 1\'000', wert: 'unter 1\'000' },
      { text: '1\'000 bis 10\'000', wert: '1\'000 bis 10\'000' },
      { text: '10\'000 bis 100\'000', wert: '10\'000 bis 100\'000' },
      { text: 'über 100\'000', wert: 'über 100\'000' },
    ],
  },
  'cy.onlinehandel_anteil': {
    wahl: [
      { text: 'Kein Onlinehandel', wert: 'kein Onlinehandel' },
      { text: 'bis 10 %', wert: 'bis 10 %' },
      { text: '10 bis 50 %', wert: '10 bis 50 %' },
      { text: 'über 50 %', wert: 'über 50 %' },
    ],
  },
  'cy.it_dienstleister': { titel: 'Arbeiten Sie mit einem externen IT-Dienstleister?', hilfe: 'Mit Name und Umfang.' },
  'cy.vorfaelle_details': { titel: 'Was ist passiert?', hilfe: 'Art, Datum und Schaden.' },
  'grs.fahrzeuge': {
    wahl: [
      { text: 'Keine', wert: '0' },
      { text: '1', wert: '1' },
      { text: '2', wert: '2' },
      { text: '3', wert: '3' },
      { text: '4', wert: '4' },
      { text: '5 und mehr', wert: '5 und mehr' },
    ],
  },
  'grs.versicherungssumme': { wahl: chf(['250\'000', '500\'000', '1\'000\'000']), andere: 'Anderer Betrag' },
  'fl.fahrzeuge_text': {
    titel: 'Welche Fahrzeuge gehören zur Flotte?',
    hilfe: 'Marke, Typ, Kontrollschild, erste Inverkehrsetzung und Katalogpreis. Eine Liste können Sie uns auch später senden.',
  },
}

/** Antwortmöglichkeiten des Katalogs, die eine Klammer tragen: nur die Anzeige ändert sich, gesendet wird der Katalogwert. */
export const optionText: Record<string, string> = {
  'Gebäudeglas (bei Mietwohnung)': 'Gebäudeglas bei Mietwohnung',
  'Arbeitsrecht (unselbständig)': 'Arbeitsrecht für Angestellte',
  'Feuer / Elementar (nur ohne kantonale Gebäudeversicherung)': 'Feuer und Elementar, nur ohne kantonale Gebäudeversicherung',
  'teilweise (einzelne Betriebsteile)': 'teilweise, für einzelne Betriebsteile',
  'umhüllende Lösung (überobligatorisch)': 'umhüllende Lösung, überobligatorisch',
  'Ertragsausfall (Deckungsbeitrag)': 'Ertragsausfall auf Basis Deckungsbeitrag',
  'besonders schützenswerte Daten (z. B. Gesundheit)': 'besonders schützenswerte Daten wie Gesundheitsdaten',
  'Arbeitsrecht (als Arbeitgeber)': 'Arbeitsrecht als Arbeitgeber',
}

/** Suchlisten. Eigene Eingabe ist immer möglich. */
export const listen: Record<'versicherer' | 'leasing' | 'vorsorge', readonly string[]> = {
  versicherer: [
    'Allianz Suisse',
    'AXA',
    'Baloise',
    'CSS',
    'Die Mobiliar',
    'Emmental Versicherung',
    'Generali',
    'GVB',
    'Helsana',
    'Helvetia',
    'Simpego',
    'Smile',
    'Suva',
    'Sympany',
    'TCS',
    'Vaudoise',
    'Visana',
    'Zurich',
  ],
  leasing: [
    'AMAG Leasing',
    'BANK-now',
    'BMW Financial Services',
    'Cembra Money Bank',
    'Mercedes-Benz Financial Services',
    'MultiLease',
    'Volkswagen Financial Services',
  ],
  vorsorge: ['AXA Stiftung Berufliche Vorsorge', 'Helvetia Sammelstiftung', 'PAX Sammelstiftung', 'Swiss Life Sammelstiftung', 'Sammelstiftung Vita'],
}
