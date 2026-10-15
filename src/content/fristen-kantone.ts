/**
 * Fristen und Gebühren der Steuererklärung je Kanton (Steuerperiode 2025, geprüft am 15.10.2026).
 * QUELLEN: Seiten der kantonalen Steuerverwaltungen, je Kanton unter `quelle`; Wortlaut in
 * `content/source/umbau_2026-10b_de.md`. Zwei getrennte Recherchen je Kanton; was nicht belegt ist, steht nicht da
 * (keine Gebühr ohne Quelle, «gemäss Formular» ohne veröffentlichtes Datum). Jährlich nachführen.
 */

export type Station = { marke?: string; titel: string; wert?: string; hervor?: boolean }
type Reihe = { stationen: readonly Station[]; nachsatz?: string }
type Kanton = { kuerzel: string; name: string; privat: Reihe; unternehmen: Reihe; quelle: string }

export const fristenKantone: { stand: string; kantone: readonly Kanton[] } = {
  stand: '2026-10-15',
  kantone: [
    {
    kuerzel: 'ZH',
    name: 'Zürich',
    privat: {
      stationen: [
        { marke: '31. März', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: '30. November', titel: 'Verlängern, höchstens' },
      ],
      nachsatz: 'Selbständige: 30. September ohne Gesuch; Gebühren nennt der Kanton nicht.',
    },
    unternehmen: {
      stationen: [
        { marke: '30. September', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: '30. November', titel: 'Online verlängern, höchstens' },
      ],
      nachsatz: 'Gebühren für Verlängerungen nennt der Kanton nicht.',
    },
    quelle: 'https://www.zh.ch/de/steuern-finanzen/steuern/treuhaender/steuerbuch/steuerbuch-definition/zstb-132-1.html',
    },
    {
    kuerzel: 'BE',
    name: 'Bern',
    privat: {
      stationen: [
        { marke: '15. März', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: '15. Juli', titel: 'Online verlängern', wert: 'kostenlos' },
        { marke: '15. September', titel: 'Online verlängern', wert: 'CHF 20' },
        { marke: '15. November', titel: 'Online verlängern', wert: 'CHF 40' },
      ],
      nachsatz: 'Selbständige: 15. Mai; für die Steuererklärung 2025 gilt als letzte Frist automatisch der 30. November.',
    },
    unternehmen: {
      stationen: [
        { marke: '7 Monate', titel: 'Nach Abschluss einreichen', hervor: true },
        { marke: '+ 1½ Monate', titel: 'Online verlängern', wert: 'kostenlos' },
        { marke: '+ 3½ Monate', titel: 'Online verlängern, maximal', wert: 'CHF 20' },
      ],
    },
    quelle: 'https://www.sv.fin.be.ch/de/start/themen/frist-verlaengern.html',
    },
    {
    kuerzel: 'LU',
    name: 'Luzern',
    privat: {
      stationen: [
        { marke: 'gemäss Formular', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: '31. August', titel: 'Online verlängern, höchstens' },
      ],
      nachsatz: 'Selbständige: 31. August; Gebühren für Verlängerungen nennt der Kanton nicht.',
    },
    unternehmen: {
      stationen: [
        { marke: '31. August', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: '30. November', titel: 'Online verlängern' },
        { marke: '31. Dezember', titel: 'Verlängern, höchstens' },
      ],
      nachsatz: 'Gebühren für Verlängerungen nennt der Kanton nicht.',
    },
    quelle: 'https://steuerbuch.lu.ch/band2/verfahren/frist_zur_einreichung_der_steuererklaerung',
    },
    {
    kuerzel: 'UR',
    name: 'Uri',
    privat: {
      stationen: [
        { marke: '31. März', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: 'auf Gesuch', titel: 'Online verlängern' },
      ],
      nachsatz: 'Höchstfrist und Gebühren nennt der Kanton nicht.',
    },
    unternehmen: {
      stationen: [
        { marke: '31. Juli', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: 'auf Gesuch', titel: 'Online verlängern' },
      ],
      nachsatz: 'Höchstfrist und Gebühren nennt der Kanton nicht.',
    },
    quelle: 'https://www.ur.ch/online-schalter/2714/detail',
    },
    {
    kuerzel: 'SZ',
    name: 'Schwyz',
    privat: {
      stationen: [
        { marke: '31. März', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: '31. Oktober', titel: 'Online verlängern' },
        { marke: '30. November', titel: 'Online verlängern' },
        { marke: '31. Dezember', titel: 'Online verlängern, maximal' },
      ],
      nachsatz: 'Gebühren für Verlängerungen nennt der Kanton nicht.',
    },
    unternehmen: {
      stationen: [
        { marke: '31. Juli', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: '31. Dezember', titel: 'Verlängern, höchstens' },
      ],
      nachsatz: 'Gebühren für Verlängerungen nennt der Kanton nicht.',
    },
    quelle: 'https://www.sz.ch/finanzdepartement/steuerverwaltung/natuerliche-personen/online-schalter/fristerstreckung-steuererklaerung.html/8756-8758-8802-10332-10354-10376-10750-10402',
    },
    {
    kuerzel: 'OW',
    name: 'Obwalden',
    privat: {
      stationen: [
        { marke: '30. April', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: '31. Dezember', titel: 'Online verlängern', wert: 'kostenlos' },
        { marke: 'je Quartal', titel: 'Begründet verlängern', wert: 'CHF 30' },
      ],
      nachsatz: 'Schriftliche Gesuche kosten CHF 30.',
    },
    unternehmen: {
      stationen: [
        { marke: '30 Tage', titel: 'Nach der GV einreichen', hervor: true },
        { marke: '31. März', titel: 'Online verlängern', wert: 'kostenlos' },
        { marke: 'je Quartal', titel: 'Begründet verlängern', wert: 'CHF 30' },
      ],
      nachsatz: 'Schriftliche Gesuche kosten CHF 30.',
    },
    quelle: 'https://www.ow.ch/online-schalter/916/detail',
    },
    {
    kuerzel: 'NW',
    name: 'Nidwalden',
    privat: {
      stationen: [
        { marke: '31. März', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: '31. Dezember', titel: 'Online verlängern, höchstens' },
      ],
      nachsatz: 'Selbständige und Vertretene: 30. Juni; Gebühren nennt der Kanton nicht.',
    },
    unternehmen: {
      stationen: [
        { marke: '30. Juni', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: '31. Dezember', titel: 'Online verlängern, höchstens' },
      ],
      nachsatz: 'Gebühren für Verlängerungen nennt der Kanton nicht.',
    },
    quelle: 'https://www.steuern-nw.ch/services/fristerstreckung/',
    },
    {
    kuerzel: 'GL',
    name: 'Glarus',
    privat: {
      stationen: [
        { marke: 'gemäss Formular', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: '31. Dezember', titel: 'Online verlängern', wert: 'kostenlos' },
        { marke: 'danach', titel: 'Schriftlich verlängern', wert: 'CHF 30' },
      ],
    },
    unternehmen: {
      stationen: [
        { marke: 'gemäss Formular', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: '31. März', titel: 'Online verlängern', wert: 'kostenlos' },
        { marke: 'danach', titel: 'Schriftlich verlängern', wert: 'CHF 30' },
      ],
    },
    quelle: 'https://www.gl.ch/verwaltung/finanzen-und-gesundheit/steuern/online-formulare/fuer-natuerliche-personen.html/500',
    },
    {
    kuerzel: 'ZG',
    name: 'Zug',
    privat: {
      stationen: [
        { marke: '30. April', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: '31. Dezember', titel: 'Online verlängern', wert: 'kostenlos' },
        { marke: 'danach', titel: 'Begründet verlängern', wert: 'CHF 35' },
      ],
    },
    unternehmen: {
      stationen: [
        { marke: '30. September', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: '30. Juni', titel: 'Online verlängern, höchstens' },
      ],
      nachsatz: 'Gebühren für Verlängerungen nennt der Kanton nicht.',
    },
    quelle: 'https://zg.ch/de/steuern-finanzen/steuern/natuerliche-personen/fristerstreckung-steuererklaerung',
    },
    {
    kuerzel: 'FR',
    name: 'Freiburg',
    privat: {
      stationen: [
        { marke: '31. März', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: 'auf Gesuch', titel: 'Verlängern', wert: 'CHF 20' },
        { marke: '15. Dezember', titel: 'Verlängern, höchstens', wert: 'je CHF 20' },
      ],
      nachsatz: 'Höchstens vier Verlängerungen; die erste wird mit der beiliegenden QR-Rechnung bezahlt.',
    },
    unternehmen: {
      stationen: [
        { marke: '31. August', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: 'auf Gesuch', titel: 'Verlängern', wert: 'kostenlos' },
      ],
      nachsatz: 'Gilt für Kapitalgesellschaften; Vereine und Stiftungen: 30. April.',
    },
    quelle: 'https://www.fr.ch/de/steuern/natuerliche-personen/fristerstreckung-fuer-die-abgabe-der-steuererklaerung-steuer-der-natuerlichen-personen',
    },
    {
    kuerzel: 'SO',
    name: 'Solothurn',
    privat: {
      stationen: [
        { marke: '31. März', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: '31. Juli', titel: 'Online verlängern', wert: 'kostenlos' },
        { marke: '30. November', titel: 'Begründet verlängern', wert: 'CHF 30' },
        { marke: 'danach', titel: 'Ausnahmsweise verlängern', wert: 'CHF 30' },
      ],
    },
    unternehmen: {
      stationen: [
        { marke: '30. Juni', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: '31. Oktober', titel: 'Online verlängern', wert: 'kostenlos' },
        { marke: '30. November', titel: 'Begründet verlängern', wert: 'CHF 30' },
        { marke: 'danach', titel: 'Ausnahmsweise verlängern', wert: 'CHF 30' },
      ],
      nachsatz: 'Kollektiv- und Kommanditgesellschaften: 31. Juli.',
    },
    quelle: 'https://so.ch/verwaltung/finanzdepartement/steueramt/privatpersonen-und-selbstaendig-erwerbende/fristverlaengerungen/',
    },
    {
    kuerzel: 'BS',
    name: 'Basel-Stadt',
    privat: {
      stationen: [
        { marke: '31. März', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: '30. September', titel: 'Online verlängern', wert: 'kostenlos' },
        { marke: 'bis Jahresende', titel: 'Online verlängern', wert: 'CHF 40 je Gesuch' },
        { marke: 'danach', titel: 'Begründet verlängern', wert: 'CHF 40' },
      ],
      nachsatz: 'Über das Jahresende hinaus nur gegen Vorauszahlung.',
    },
    unternehmen: {
      stationen: [
        { marke: '30. Juni', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: '30. September', titel: 'Online verlängern', wert: 'kostenlos' },
        { marke: '31. Dezember', titel: 'Online verlängern', wert: 'CHF 40 je Gesuch' },
        { marke: 'danach', titel: 'Begründet verlängern', wert: 'CHF 40' },
      ],
      nachsatz: 'Über das Jahresende hinaus nur gegen Vorauszahlung.',
    },
    quelle: 'https://www.bs.ch/themen/arbeit-und-steuern/steuererklaerung/steuererklaerung-als-natuerliche-person-einreichen',
    },
    {
    kuerzel: 'BL',
    name: 'Basel-Landschaft',
    privat: {
      stationen: [
        { marke: '31. März', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: '31. Mai', titel: 'Ohne Gesuch verlängert', wert: 'kostenlos' },
        { marke: '30. November', titel: 'Online verlängern', wert: 'CHF 40' },
        { marke: 'danach', titel: 'Begründet verlängern', wert: 'CHF 40' },
      ],
      nachsatz: 'Selbständige: 30. Juni, die Verlängerungen verschieben sich entsprechend.',
    },
    unternehmen: {
      stationen: [
        { marke: '30. Juni', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: '31. August', titel: 'Ohne Gesuch verlängert', wert: 'kostenlos' },
        { marke: '28. Februar', titel: 'Online verlängern', wert: 'CHF 40' },
        { marke: 'danach', titel: 'Begründet verlängern', wert: 'CHF 40' },
      ],
    },
    quelle: 'https://www.baselland.ch/politik-und-behorden/direktionen/finanz-und-kirchendirektion/steuerverwaltung/steuererklaerung-natuerliche-personen-und-e-tax-bl/fristen-und-termine/fristverlaengerung-fuer-privatpersonen',
    },
    {
    kuerzel: 'SH',
    name: 'Schaffhausen',
    privat: {
      stationen: [
        { marke: '31. März', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: '30. November', titel: 'Online verlängern, höchstens' },
      ],
      nachsatz: 'Gebühren für Verlängerungen nennt der Kanton nicht.',
    },
    unternehmen: {
      stationen: [
        { marke: 'gemäss Formular', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: '31. Dezember', titel: 'Online verlängern, höchstens' },
      ],
      nachsatz: 'Gebühren für Verlängerungen nennt der Kanton nicht.',
    },
    quelle: 'https://sh.ch/CMS/Webseite/Kanton-Schaffhausen/Beh-rde/Verwaltung/Finanzdepartement/Steuerverwaltung-110769-DE.html',
    },
    {
    kuerzel: 'AR',
    name: 'Appenzell Ausserrhoden',
    privat: {
      stationen: [
        { marke: 'gemäss Formular', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: 'auf Gesuch', titel: 'Online verlängern', wert: 'kostenlos' },
        { marke: 'jede weitere', titel: 'Online verlängern', wert: 'CHF 25' },
      ],
      nachsatz: 'Eine Höchstfrist nennt der Kanton nicht.',
    },
    unternehmen: {
      stationen: [
        { marke: 'gemäss Formular', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: 'auf Gesuch', titel: 'Online verlängern' },
      ],
      nachsatz: 'Höchstfrist und Gebühren nennt der Kanton nicht.',
    },
    quelle: 'https://ar.ch/verwaltung/departement-finanzen/steuerverwaltung/steuererklaerungen-fristverlaengerungen/fristverlaengerungsgesuche/',
    },
    {
    kuerzel: 'AI',
    name: 'Appenzell Innerrhoden',
    privat: {
      stationen: [
        { marke: '30. April', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: '30. November', titel: 'Online verlängern, höchstens' },
      ],
      nachsatz: 'Gebühren nennt der Kanton nicht; verlängert wird nur bei bezahlten Steuern.',
    },
    unternehmen: {
      stationen: [
        { marke: '31. Mai', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: 'auf Gesuch', titel: 'Online verlängern' },
      ],
      nachsatz: 'Höchstfrist und Gebühren nennt der Kanton nicht.',
    },
    quelle: 'https://www.ai.ch/themen/steuern/steuererklaerung-ausfuellen/fristerstreckung-steuererklaerung',
    },
    {
    kuerzel: 'SG',
    name: 'St. Gallen',
    privat: {
      stationen: [
        { marke: 'gemäss Formular', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: 'auf Gesuch', titel: 'Online verlängern' },
      ],
      nachsatz: 'Höchstfrist und Gebühren nennt der Kanton nicht.',
    },
    unternehmen: {
      stationen: [
        { marke: '6 Monate', titel: 'Nach Abschluss einreichen', hervor: true },
        { marke: '+ 6 Monate', titel: 'Online verlängern' },
        { marke: 'danach', titel: 'Begründet verlängern' },
      ],
      nachsatz: 'Gebühren für Verlängerungen nennt der Kanton nicht.',
    },
    quelle: 'https://www.sg.ch/steuern-finanzen/steuern/fristverlaengerung.html',
    },
    {
    kuerzel: 'GR',
    name: 'Graubünden',
    privat: {
      stationen: [
        { marke: '31. März', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: '30. September', titel: 'Online verlängern, höchstens' },
        { marke: '30. November', titel: 'Begründet verlängern' },
      ],
      nachsatz: 'Selbständige: 30. September; Gebühren nennt der Kanton nicht.',
    },
    unternehmen: {
      stationen: [
        { marke: '9 Monate', titel: 'Nach Abschluss einreichen', hervor: true },
        { marke: '+ 3 Monate', titel: 'Verlängern, höchstens' },
      ],
      nachsatz: 'Vereine und Stiftungen: 6 Monate; Gebühren nennt der Kanton nicht.',
    },
    quelle: 'https://www.gr.ch/DE/institutionen/verwaltung/dfg/stv/dokumentation/praxis/Verfahren/127-01.pdf',
    },
    {
    kuerzel: 'AG',
    name: 'Aargau',
    privat: {
      stationen: [
        { marke: '31. März', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: '30. Juni', titel: 'Ohne Gesuch verlängert', wert: 'kostenlos' },
        { marke: 'auf Gesuch', titel: 'Online verlängern' },
      ],
      nachsatz: 'Selbständige: 30. Juni; Höchstfrist und Gebühren nennt der Kanton nicht.',
    },
    unternehmen: {
      stationen: [
        { marke: 'gemäss Formular', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: '31. Dezember', titel: 'Online verlängern', wert: 'kostenlos' },
        { marke: 'danach', titel: 'Schriftlich verlängern' },
      ],
    },
    quelle: 'https://www.ag.ch/de/themen/steuern-finanzen/steuern/steuererklaerung-einreichen/frist-verlaengern',
    },
    {
    kuerzel: 'TG',
    name: 'Thurgau',
    privat: {
      stationen: [
        { marke: '30. April', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: '30. September', titel: 'Verlängern' },
        { marke: '30. November', titel: 'Begründet verlängern' },
      ],
      nachsatz: 'Mit Treuhänder bis 31. Dezember; Gebühren nennt der Kanton nicht.',
    },
    unternehmen: {
      stationen: [
        { marke: '30. Juni', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: '31. Dezember', titel: 'Online verlängern', wert: 'kostenlos' },
        { marke: 'danach', titel: 'Begründet verlängern', wert: 'CHF 30 je Monat' },
      ],
    },
    quelle: 'https://steuerverwaltung.tg.ch/hauptrubrik-1/veranlagung-und-bezug/fristverlaengerungen.html/2884',
    },
    {
    kuerzel: 'TI',
    name: 'Tessin',
    privat: {
      stationen: [
        { marke: '30. April', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: 'auf Gesuch', titel: 'Online verlängern' },
      ],
      nachsatz: 'Höchstfrist und Gebühren nennt der Kanton nicht.',
    },
    unternehmen: {
      stationen: [
        { marke: 'gemäss Formular', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: '31. Januar', titel: 'Online verlängern, höchstens' },
      ],
      nachsatz: 'Gebühren für Verlängerungen nennt der Kanton nicht.',
    },
    quelle: 'https://www4.ti.ch/tich/area-media/comunicati/dettaglio-comunicato?NEWS_ID=257983&cHash=155880c40e5f8328a3c7c401c6afa133',
    },
    {
    kuerzel: 'VD',
    name: 'Waadt',
    privat: {
      stationen: [
        { marke: '15. März', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: '30. Juni', titel: 'Online verlängern', wert: 'kostenlos' },
        { marke: '30. September', titel: 'Online verlängern, maximal', wert: 'kostenlos' },
      ],
      nachsatz: 'Bis 30. Juni gilt eine Toleranz auch ohne Gesuch.',
    },
    unternehmen: {
      stationen: [
        { marke: '255 Tage', titel: 'Nach Abschluss einreichen', hervor: true },
        { marke: '+ 30 Tage', titel: 'Online verlängern, maximal' },
      ],
      nachsatz: 'Gebühren für Verlängerungen nennt der Kanton nicht.',
    },
    quelle: 'https://www.vd.ch/etat-droit-finances/impots/impots-pour-les-individus/demander-un-delai-pour-deposer-ma-declaration-dimpot',
    },
    {
    kuerzel: 'VS',
    name: 'Wallis',
    privat: {
      stationen: [
        { marke: '31. März', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: '31. Juli', titel: 'Verlängern', wert: 'CHF 20' },
        { marke: '31. Dezember', titel: 'Verlängern in Sonderfällen' },
      ],
      nachsatz: 'Verlängert wird mit dem beiliegenden Einzahlungsschein vor dem 31. März, für Selbständige bis 31. Oktober.',
    },
    unternehmen: {
      stationen: [
        { marke: '30. Juni', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: '31. Oktober', titel: 'Verlängern' },
        { marke: '31. Dezember', titel: 'Verlängern in Sonderfällen' },
      ],
      nachsatz: 'Gebühren für Verlängerungen nennt der Kanton nicht.',
    },
    quelle: 'https://www.vs.ch/web/scc/planning-delais',
    },
    {
    kuerzel: 'NE',
    name: 'Neuenburg',
    privat: {
      stationen: [
        { marke: '20. Februar', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: '30. April', titel: 'Verlängern', wert: 'kostenlos' },
        { marke: '30. Juni', titel: 'Verlängern', wert: 'CHF 25' },
        { marke: '31. Oktober', titel: 'Verlängern, höchstens', wert: 'CHF 40' },
      ],
      nachsatz: 'Die Gebühr richtet sich nach dem tatsächlichen Einreichedatum.',
    },
    unternehmen: {
      stationen: [
        { marke: '31. März', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: '30. April', titel: 'Verlängern', wert: 'kostenlos' },
        { marke: '31. Oktober', titel: 'Verlängern, höchstens' },
      ],
      nachsatz: 'Gebühren nach dem 30. April nennt der Kanton nicht.',
    },
    quelle: 'https://www.ne.ch/themes/impots/impot-des-personnes-physiques/demande-delai',
    },
    {
    kuerzel: 'GE',
    name: 'Genf',
    privat: {
      stationen: [
        { marke: '31. März', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: '30. Juni', titel: 'Online verlängern', wert: 'CHF 20' },
        { marke: '31. August', titel: 'Online verlängern', wert: 'CHF 40' },
        { marke: '31. Dezember', titel: 'Verlängern, höchstens', wert: 'CHF 60' },
      ],
      nachsatz: 'Ab November nur noch per Post und mit Begründung.',
    },
    unternehmen: {
      stationen: [
        { marke: '30. April', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: '31. Juli', titel: 'Online verlängern', wert: 'CHF 20' },
        { marke: '30. September', titel: 'Online verlängern', wert: 'CHF 40' },
        { marke: '31. Oktober', titel: 'Online verlängern, maximal', wert: 'CHF 60' },
      ],
    },
    quelle: 'https://www.ge.ch/remplir-ma-declaration-impot-tant-que-particulier/demander-delai-ma-declaration-impot',
    },
    {
    kuerzel: 'JU',
    name: 'Jura',
    privat: {
      stationen: [
        { marke: '28. Februar', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: '31. Juli', titel: 'Ohne Gesuch verlängert', wert: 'kostenlos' },
        { marke: '31. Oktober', titel: 'Online verlängern, maximal', wert: 'CHF 31' },
      ],
      nachsatz: 'Auf Papier gilt die Frist ohne Gesuch bis 30. Juni.',
    },
    unternehmen: {
      stationen: [
        { marke: 'gemäss Formular', titel: 'Steuererklärung einreichen', hervor: true },
        { marke: '15. Juli', titel: 'Ohne Gesuch verlängert', wert: 'kostenlos' },
        { marke: '31. Oktober', titel: 'Verlängern, höchstens', wert: 'CHF 31' },
      ],
    },
    quelle: 'https://www.jura.ch/Htdocs/Files/v/81cc78891c5f1637d43c7c3fa46061ce931b57ab3a48c0e43a09d8c662c2395d.pdf/Guide-general-2025.pdf?download=1',
    },
  ],
}
