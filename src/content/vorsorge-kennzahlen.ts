/**
 * Vorsorge-Kennzahlen 2026 und 2027 für den Beitrag in «News und Blog» (19.10.2026).
 * Ricardo: «Ich will den ersten Blogpost online stellen bitte so wie finanzfabio einen Interaktive karte mit
 * unserem Design».
 *
 * Fast alle Grenzbeträge hängen gesetzlich an der maximalen AHV-Rente. Darum steht hier nur sie je Jahr; die
 * übrigen Werte rechnet `src/lib/vorsorge-kennzahlen.ts` nach den Verhältnissen in `beziehungen` aus, und die
 * Karte zeigt dieselben Verhältnisse als Erklärung. Einzige Ausnahme ist der UVG-Lohn.
 *
 * QUELLE der Werte: siehe `quelle`. Wortlaut: `content/source/news_vorsorge_2027_de.md`.
 * **Jedes Jahr nachführen**, sobald der Bundesrat die Renten anpasst.
 */

export type KennzahlId =
  | 'ahvMax'
  | 'ahvMin'
  | 'ehepaar'
  | 'grenzbetrag'
  | 'eintritt'
  | 'koord'
  | 'koordMax'
  | 'koordMin'
  | 's3aMit'
  | 's3aOhne'
  | 'uvg'

export type Gruppe = 'ahv' | 'bvg' | 's3a' | 'uvg'

export const vorsorgeKennzahlen = {
  jahre: [2026, 2027],
  /** Maximale AHV-Rente pro Jahr; Basis aller abgeleiteten Werte. */
  ahvMaxJahr: { 2026: 30240, 2027: 30720 },
  /** Höchster versicherter Verdienst UVG, unabhängig von der AHV-Rente festgelegt. */
  uvg: { 2026: 148200, 2027: 148200 },
  titel: 'Vorsorge-Kennzahlen',
  hinweisAntippen: 'Tippen Sie auf eine Zahl. Wir zeigen, wovon sie abhängt.',
  untertitel: 'Alle Beträge in CHF. Prozent: Anteil an der maximalen AHV-Rente.',
  saeulen: { s1: '1. Säule', s2: '2. Säule', s3: '3. Säule' },
  mitte: 'maximale AHV-Altersrente',
  anteil: 'der maximalen AHV-Rente',
  s3aMitte: 'Säule 3a: jährlich höchstens abziehbar',
  unabhaengig: 'unabhängig von der AHV-Rente',
  schliessen: 'Schliessen',
  jahrWahl: 'Jahr',
  gegenueber: 'gegenüber',
  unveraendert: 'unverändert',
  soHaengtZusammen: 'So hängt die Zahl zusammen',
  gutZuWissen: 'Gut zu wissen',
  proMonat: 'pro Monat',
  stand: 'Stand: Beschluss des Bundesrates vom 2. Oktober 2026, gültig ab 1. Januar 2027. UVG: Stand 2026, eine Änderung für 2027 ist nicht bekannt.',
  tabelleTitel: 'Alle Werte im Vergleich',
  tabelleKennzahl: 'Kennzahl',
  tabelleBetrag: 'Beträge in CHF',
  gruppen: [
    { id: 'ahv', titel: '1. Säule: AHV' },
    { id: 'bvg', titel: '2. Säule: Pensionskasse (BVG)' },
    { id: 's3a', titel: '3. Säule: Säule 3a' },
    { id: 'uvg', titel: 'Unfallversicherung (UVG)' },
  ],
  kennzahlen: [
    {
      id: 'ahvMax',
      gruppe: 'ahv',
      titel: 'Maximale AHV-Rente',
      einheit: 'pro Jahr, ohne 13. Rente',
      monat: true,
      kurz: 'Die Basis: Fast alle anderen Grenzbeträge leiten sich von ihr ab.',
      tipps: [
        'Volle Rente nur mit 44 Beitragsjahren ohne Lücke.',
        'Seit Dezember 2026 kommt jedes Jahr eine 13. Altersrente dazu: ein Zwölftel der im Jahr bezogenen Renten.',
        'Jedes fehlende Beitragsjahr kürzt die Rente lebenslang um rund 1/44.',
        'Den Auszug aus dem individuellen Konto (IK) erhalten Sie kostenlos bei Ihrer Ausgleichskasse.',
      ],
    },
    {
      id: 'ahvMin',
      gruppe: 'ahv',
      titel: 'Minimale AHV-Rente',
      einheit: 'pro Jahr, ohne 13. Rente',
      monat: true,
      kurz: 'Gilt bei voller Beitragsdauer und kleinem Einkommen.',
      tipps: ['Beitragslücken lassen sich nur fünf Jahre rückwirkend schliessen.', 'Mindestbeitrag AHV/IV/EO für Selbständige und Nichterwerbstätige 2027: CHF 541 pro Jahr.'],
    },
    {
      id: 'ehepaar',
      gruppe: 'ahv',
      titel: 'Maximale Ehepaarrente',
      einheit: 'pro Jahr',
      kurz: 'Zwei Renten eines Ehepaars zusammen, höchstens 150 % einer Maximalrente.',
      tipps: ['Für Paare im Konkubinat gilt diese Obergrenze nicht.'],
    },
    {
      id: 'grenzbetrag',
      gruppe: 'bvg',
      titel: 'Oberer Grenzbetrag BVG',
      einheit: 'Jahreslohn',
      kurz: 'Bis zu diesem Lohn reicht die obligatorische berufliche Vorsorge.',
      tipps: ['Lohn darüber versichert die Pensionskasse nur, wenn ihr Reglement es vorsieht (überobligatorisch).'],
    },
    {
      id: 'eintritt',
      gruppe: 'bvg',
      titel: 'Eintrittsschwelle BVG',
      einheit: 'Jahreslohn',
      kurz: 'Ab diesem Jahreslohn bei einem Arbeitgeber sind Sie in der Pensionskasse versichert.',
      tipps: ['Die Schwelle gilt je Arbeitgeber. Mehrere kleine Pensen können darum ohne Pensionskasse bleiben.'],
    },
    {
      id: 'koord',
      gruppe: 'bvg',
      titel: 'Koordinationsabzug',
      einheit: 'pro Jahr',
      kurz: 'Dieser Teil des Lohns ist schon über die AHV abgedeckt und wird vom versicherten Lohn abgezogen.',
      tipps: ['Bei Teilzeit fällt der Abzug stark ins Gewicht. Ihr Vorsorgeausweis zeigt, wie Ihre Kasse rechnet.'],
    },
    {
      id: 'koordMax',
      gruppe: 'bvg',
      titel: 'Maximaler koordinierter Lohn',
      einheit: 'pro Jahr',
      kurz: 'Der höchste Lohn, der im Obligatorium versichert ist.',
      tipps: ['Für den Teil darüber gelten die Regeln Ihrer Pensionskasse.'],
    },
    {
      id: 'koordMin',
      gruppe: 'bvg',
      titel: 'Minimaler koordinierter Lohn',
      einheit: 'pro Jahr',
      kurz: 'Liegt Ihr Lohn knapp über der Eintrittsschwelle, ist mindestens dieser Betrag versichert.',
      tipps: [],
    },
    {
      id: 's3aMit',
      gruppe: 's3a',
      titel: 'Säule 3a mit Pensionskasse',
      einheit: 'höchstens pro Jahr',
      kurz: 'Für Angestellte mit Pensionskasse.',
      tipps: ['Der Betrag muss bis 31. Dezember auf dem 3a-Konto sein.', 'Wer bei der eigenen GmbH oder AG angestellt ist, hat diesen Betrag, nicht den grossen.'],
    },
    {
      id: 's3aOhne',
      gruppe: 's3a',
      titel: 'Säule 3a ohne Pensionskasse',
      einheit: 'höchstens pro Jahr',
      kurz: 'Für Selbständige ohne Pensionskasse: 20 % des Erwerbseinkommens, höchstens dieser Betrag.',
      tipps: ['Ohne Pensionskasse fehlt auch deren Schutz bei Invalidität und Tod. Das lässt sich versichern.'],
    },
    {
      id: 'uvg',
      gruppe: 'uvg',
      titel: 'Höchster versicherter Verdienst UVG',
      einheit: 'Jahreslohn',
      kurz: 'Bis zu diesem Lohn zahlt die Unfallversicherung 80 % als Taggeld.',
      tipps: ['Für höhere Löhne braucht es eine UVG-Zusatzversicherung.', 'Dieselbe Grenze gilt für die Arbeitslosenversicherung.'],
    },
  ],
  /** Wie die Werte zusammenhängen. `teile` sind die Kennzahlen, die in der Rechnung vorkommen. */
  beziehungen: [
    { ergebnis: 'grenzbetrag', text: 'Maximale AHV-Rente × 3', teile: ['ahvMax'] },
    { ergebnis: 'ahvMin', text: 'Maximale AHV-Rente ÷ 2', teile: ['ahvMax'] },
    { ergebnis: 'ehepaar', text: 'Maximale AHV-Rente × 150 %', teile: ['ahvMax'] },
    { ergebnis: 'koord', text: 'Maximale AHV-Rente × 7/8', teile: ['ahvMax'] },
    { ergebnis: 'eintritt', text: 'Maximale AHV-Rente × 3/4', teile: ['ahvMax'] },
    { ergebnis: 'koordMin', text: 'Koordinationsabzug − Eintrittsschwelle', teile: ['koord', 'eintritt'] },
    { ergebnis: 'koordMax', text: 'Oberer Grenzbetrag − Koordinationsabzug', teile: ['grenzbetrag', 'koord'] },
    { ergebnis: 's3aMit', text: 'Oberer Grenzbetrag × 8 %, gerundet', teile: ['grenzbetrag'] },
    { ergebnis: 's3aOhne', text: 'Oberer Grenzbetrag × 40 %', teile: ['grenzbetrag'] },
  ],
  ohneBeziehung: 'Wird unabhängig von der AHV-Rente festgelegt.',
  quelle: 'Bundesamt für Sozialversicherungen BSV, «Beträge gültig ab dem 1. Januar 2027» (2.10.2026); Masszahlen berufliche Vorsorge 2025/2026',
} as const
