/**
 * Fragebogen und Unterlagen-Checkliste zur Steuererklärung (16.10.2026). Ricardo: «hier soll man einen kurzen
 * Fragebogen ausfüllen können und es soll dann eine checkliste erstellen mit den unterlagen die benötigt werden
 * diese soll dann heruntergeladen werden oder per Mail versendet werden können».
 *
 * QUELLE: `content/source/umbau_2026-10b_de.md`, Abschnitt «Checkliste Steuererklärung». Die Zuordnung Frage →
 * Unterlage ist ein Vorschlag nach den üblichen Unterlagen zur Steuererklärung natürlicher Personen; Ricardo
 * bestätigt sie fachlich. Die Antworten bleiben im Browser – gerechnet, gespeichert oder gesendet wird nichts.
 */

export type Frage = {
  id: string
  titel: string
  hilfe?: string
  mehrfach: boolean
  optionen: readonly { id: string; text: string }[]
}

export type Unterlage = { text: string; wenn?: readonly string[] }
export type Gruppe = { titel: string; unterlagen: readonly Unterlage[] }

export const steuerCheckliste = {
  start: 'Checkliste zusammenstellen',
  einleitung: 'Sieben kurze Fragen, danach senden wir Ihnen Ihre persönliche Liste der Unterlagen.',
  frageVon: 'Frage',
  von: 'von',
  weiter: 'Weiter',
  zurueck: 'Zurück',
  keine: 'Nichts davon',
  mehrere: 'Mehrere Antworten möglich.',
  ergebnisTitel: 'Ihre Checkliste',
  ergebnisSatz: 'Haken Sie ab, was Sie schon bereitgelegt haben.',
  neu: 'Neu beginnen',
  mailBetreff: 'Checkliste Steuererklärung',
  mailEinleitung: 'Diese Unterlagen brauche ich für die Steuererklärung:',
  pdfTitel: 'Ihre Unterlagen für die Steuererklärung',
  pdfKopf: 'Checkliste Steuererklärung',
  pdfUntertitel: 'Zusammengestellt auf ac-co.ch',
  pdfSatz: 'Legen Sie diese Unterlagen bereit. Was fehlt, klären wir gerne im Gespräch.',
  // Seit dem 16.10.2026 gegen Kontaktangaben: Versand von info@ac-co.ch, im CRM eine Aufgabe «anrufen»
  kontaktTitel: 'Wohin dürfen wir Ihre Checkliste senden?',
  kontaktSatz: 'Sie erhalten die Checkliste als PDF per E-Mail. Wir rufen Sie an und besprechen Ihre Steuererklärung.',
  vorname: 'Vorname',
  nachname: 'Name',
  telefon: 'Telefon',
  email: 'E-Mail',
  datenschutzVor: 'Wir verwenden Ihre Angaben, um Ihnen die Checkliste zu senden und Sie wegen Ihrer Steuererklärung anzurufen. Mehr dazu in der ',
  datenschutz: 'Datenschutzerklärung',
  senden: 'Checkliste senden',
  sendet: 'Wird gesendet …',
  fehlerPflicht: 'Bitte füllen Sie alle Felder aus.',
  fehlerEmail: 'Bitte prüfen Sie die E-Mail-Adresse.',
  fehlerServer: 'Die Checkliste konnte gerade nicht gesendet werden. Bitte rufen Sie uns an.',
  dankeTitel: 'Ihre Checkliste ist unterwegs',
  dankeSatz: 'Wir haben sie an Ihre E-Mail-Adresse gesendet und melden uns telefonisch bei Ihnen.',
  dankeListe: 'Das steht darauf:',
  dankeTitelOhneMail: 'Vielen Dank, Ihre Angaben sind bei uns',
  dankeSatzOhneMail: 'Die E-Mail mit der Checkliste konnte gerade nicht versendet werden. Wir rufen Sie an und senden sie Ihnen.',

  fragen: [
    {
      id: 'stand',
      titel: 'Wie ist Ihre Situation?',
      mehrfach: false,
      optionen: [
        { id: 'allein', text: 'Alleinstehend' },
        { id: 'paar', text: 'Verheiratet oder eingetragene Partnerschaft' },
      ],
    },
    {
      id: 'kinder',
      titel: 'Haben Sie Kinder?',
      mehrfach: false,
      optionen: [
        { id: 'kinderNein', text: 'Nein' },
        { id: 'kinderJa', text: 'Ja' },
        { id: 'kinderBetreuung', text: 'Ja, mit Kita oder Tagesschule' },
      ],
    },
    {
      id: 'einkommen',
      titel: 'Woher kommt Ihr Einkommen?',
      mehrfach: true,
      optionen: [
        { id: 'angestellt', text: 'Anstellung' },
        { id: 'selbstaendig', text: 'Selbständige Tätigkeit' },
        { id: 'rente', text: 'AHV- oder Pensionskassenrente' },
        { id: 'taggeld', text: 'Arbeitslosen-, Kranken- oder Unfalltaggeld' },
        { id: 'neben', text: 'Nebenerwerb' },
      ],
    },
    {
      id: 'wohnen',
      titel: 'Wie wohnen Sie?',
      mehrfach: false,
      optionen: [
        { id: 'miete', text: 'Zur Miete' },
        { id: 'eigentum', text: 'Im eigenen Haus oder in der eigenen Wohnung' },
      ],
    },
    {
      id: 'vermoegen',
      titel: 'Was besitzen Sie?',
      mehrfach: true,
      optionen: [
        { id: 'wertschriften', text: 'Wertschriften oder ein Depot' },
        { id: 'krypto', text: 'Kryptowährungen' },
        { id: 'lebensversicherung', text: 'Lebensversicherung mit Rückkaufswert' },
        { id: 'ausland', text: 'Konto oder Liegenschaft im Ausland' },
        { id: 'schulden', text: 'Kredite oder Darlehen' },
      ],
    },
    {
      id: 'vorsorge',
      titel: 'Was trifft für das letzte Jahr zu?',
      mehrfach: true,
      optionen: [
        { id: 's3a', text: 'In die Säule 3a eingezahlt' },
        { id: 'pkEinkauf', text: 'In die Pensionskasse eingekauft' },
        { id: 'kapitalbezug', text: 'Kapital aus Pensionskasse oder Säule 3a bezogen' },
      ],
    },
    {
      id: 'weiteres',
      titel: 'Gab es weitere Ausgaben oder Ereignisse?',
      mehrfach: true,
      optionen: [
        { id: 'spenden', text: 'Spenden' },
        { id: 'weiterbildung', text: 'Berufliche Weiterbildung' },
        { id: 'unterhalt', text: 'Unterhaltszahlungen' },
        { id: 'erbschaft', text: 'Erbschaft oder Schenkung' },
        { id: 'umzug', text: 'Umzug in eine andere Gemeinde' },
      ],
    },
  ],

  gruppen: [
    {
      titel: 'Allgemein',
      unterlagen: [
        { text: 'Steuererklärung mit Zugangscode' },
        { text: 'Letzte definitive Veranlagung' },
        { text: 'Angaben zu den Kindern und ihrer Ausbildung', wenn: ['kinderJa', 'kinderBetreuung'] },
        { text: 'Rechnungen für Kita, Tagesschule oder Tagesfamilie', wenn: ['kinderBetreuung'] },
      ],
    },
    {
      titel: 'Einkommen',
      unterlagen: [
        { text: 'Lohnausweis, bei Paaren von beiden', wenn: ['angestellt'] },
        { text: 'Belege zu Berufskosten, zum Beispiel das Abonnement für den Arbeitsweg', wenn: ['angestellt', 'neben'] },
        { text: 'Jahresrechnung mit Bilanz und Erfolgsrechnung', wenn: ['selbstaendig'] },
        { text: 'Beitragsverfügung der AHV-Ausgleichskasse', wenn: ['selbstaendig'] },
        { text: 'Rentenbescheinigungen von AHV und Pensionskasse', wenn: ['rente'] },
        { text: 'Bescheinigungen über Taggelder', wenn: ['taggeld'] },
        { text: 'Lohnausweise oder Abrechnungen aus dem Nebenerwerb', wenn: ['neben'] },
      ],
    },
    {
      titel: 'Vermögen und Schulden',
      unterlagen: [
        { text: 'Kontoauszüge per 31. Dezember mit Zinsausweis' },
        { text: 'Depotauszug und Steuerverzeichnis der Bank', wenn: ['wertschriften'] },
        { text: 'Bestand der Kryptowährungen per 31. Dezember', wenn: ['krypto'] },
        { text: 'Bescheinigung über den Rückkaufswert der Lebensversicherung', wenn: ['lebensversicherung'] },
        { text: 'Belege zu Konten und Liegenschaften im Ausland', wenn: ['ausland'] },
        { text: 'Schuldenausweis mit den bezahlten Zinsen', wenn: ['schulden'] },
      ],
    },
    {
      titel: 'Wohneigentum',
      unterlagen: [
        { text: 'Bescheinigung der Hypothekarzinsen', wenn: ['eigentum'] },
        { text: 'Rechnungen für Unterhalt und Renovationen', wenn: ['eigentum'] },
        { text: 'Amtlicher Wert und Eigenmietwert der Liegenschaft', wenn: ['eigentum'] },
      ],
    },
    {
      titel: 'Vorsorge und Versicherungen',
      unterlagen: [
        { text: 'Prämienübersicht der Krankenkasse' },
        { text: 'Bescheinigung über die Einzahlung in die Säule 3a', wenn: ['s3a'] },
        { text: 'Bestätigung der Pensionskasse über den Einkauf', wenn: ['pkEinkauf'] },
        { text: 'Abrechnung über den Kapitalbezug', wenn: ['kapitalbezug'] },
      ],
    },
    {
      titel: 'Weitere Abzüge und Ereignisse',
      unterlagen: [
        { text: 'Spendenbestätigungen', wenn: ['spenden'] },
        { text: 'Rechnungen für die Weiterbildung', wenn: ['weiterbildung'] },
        { text: 'Belege zu den Unterhaltszahlungen', wenn: ['unterhalt'] },
        { text: 'Unterlagen zur Erbschaft oder Schenkung', wenn: ['erbschaft'] },
        { text: 'Datum des Umzugs und die neue Adresse', wenn: ['umzug'] },
      ],
    },
  ],
} as const
