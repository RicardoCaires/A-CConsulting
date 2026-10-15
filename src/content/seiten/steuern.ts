/**
 * /de/steuern im Baukasten (15.10.2026). QUELLEN: `content/source/umbau_steuern_de.md`,
 * `schritt4_fassung2_de.md`, `steuern_zielgruppen_de.md`, `steuern_checkliste_de.md`.
 *
 * Pflicht nach CLAUDE.md Abschnitt 9: Checkliste, Fristverlängerung durch A&C,
 * Nachkontrolle der Veranlagung. Fristen und Gebühren unverändert aus der
 * Fassung vom 16.09.2026. Die Checkliste hat noch keine Datei (`file: null`),
 * darum steht kein Download-Knopf.
 *
 * Am 15.10.2026 gekürzt: Ablauf und Checkliste als drei Stufen, Fristen als
 * Zeitleiste statt Tabelle (Ricardo: «zu viel text», «häufiger bildlich dar mit
 * diagrammen»). Neue Wortlaute in `content/source/umbau_2026-10b_de.md`.
 */
import type { SeitenInhalt } from './typen'

export const steuern: SeitenInhalt = {
  meta: {
    title: 'Steuererklärung für Privatpersonen, Selbständige und Firmen',
    description:
      'Sie bringen die Unterlagen, wir erstellen die Steuererklärung, reichen sie ein und prüfen später die Veranlagung.',
  },
  banner: { themenzeile: 'STEUERN', ueberschrift: 'Steuer­erklärung im Kanton Bern' },
  bloecke: [
    {
      art: 'fluss',
      id: 'checkliste',
      titel: { vor: 'Sie bringen die ', akzent: 'Unterlagen', nach: ', wir den Rest' },
      stufen: [
        {
          titel: 'Sie bringen',
          punkte: ['Einkommen und Vermögen', 'Versicherungen und Vorsorge', 'Abzüge und besondere Ereignisse'],
        },
        {
          titel: 'Wir erledigen',
          punkte: ['Steuererklärung erstellen', 'Frist verlängern, wenn nötig', 'Fristgerecht einreichen'],
        },
        {
          titel: 'Sie erhalten',
          punkte: ['Veranlagung nachkontrolliert', 'Rückmeldung, ob alles stimmt'],
        },
      ],
      nachsatz: 'Die PDF-Checkliste ist in Vorbereitung.',
      knoepfe: [{ text: 'Termin vereinbaren', ziel: 'kontakt' }],
    },
    {
      art: 'rechner3a',
      id: 'saeule-3a',
      titel: { vor: 'Steuern sparen mit der ', akzent: 'Säule 3a' },
      einleitung: 'Schätzen Sie, wie viel weniger Steuern Sie mit einer Einzahlung in die Säule 3a bezahlen.',
    },
    {
      art: 'listen',
      id: 'zielgruppen',
      titel: { vor: 'Für Privatpersonen ', akzent: 'und', nach: ' Firmen' },
      listen: [
        {
          titel: 'Für Privatpersonen',
          id: 'privatpersonen',
          eintraege: [
            {
              text: 'Fristgerecht eingereicht',
              zusatz: 'Mit den Abzügen, die Ihnen zustehen.',
            },
            {
              text: 'Veranlagung nachkontrolliert',
              zusatz: 'Wir prüfen, ob sie zur Eingabe passt.',
            },
            {
              text: 'Checkliste für Privatpersonen',
              zusatz: 'Was Sie mitbringen.',
              ziel: 'steuern',
              anker: 'checkliste',
            },
          ],
        },
        {
          titel: 'Für Selbständige und Firmen',
          id: 'firmen',
          eintraege: [
            { text: 'Abschluss als Grundlage', zusatz: 'Die Steuererklärung baut direkt auf der Buchhaltung auf.' },
            {
              text: 'Unterlagen bereits vorhanden',
              zusatz: 'Wenn wir Ihre Buchhaltung führen.',
            },
            {
              text: 'Buchhaltung und Jahresabschluss',
              zusatz: 'Beides an derselben Stelle.',
              ziel: 'treuhand',
              anker: 'buchhaltung',
            },
          ],
        },
      ],
    },
    {
      art: 'zeitleiste',
      id: 'fristen',
      titel: { vor: 'Fristen und ', akzent: 'Gebühren' },
      kantone: { beschriftung: 'Ihr Kanton' },
      reihen: [
        {
          titel: 'Privatpersonen',
          stationen: [
            { marke: '15. März', titel: 'Übliche Einreichefrist', hervor: true },
            { marke: '15. Juli', titel: 'Online verlängern', wert: 'kostenlos' },
            { marke: '15. September', titel: 'Online verlängern', wert: 'CHF 20' },
            { marke: '15. November', titel: 'Online verlängern', wert: 'CHF 40' },
          ],
        },
        {
          titel: 'Unternehmen',
          stationen: [
            { marke: '7 Monate', titel: 'nach Geschäftsabschluss', hervor: true },
            { marke: '+ 1½ Monate', titel: 'Online verlängern', wert: 'kostenlos' },
            { marke: '+ 3½ Monate', titel: 'Online verlängern, maximal', wert: 'CHF 20' },
          ],
        },
      ],
      nachsaetze: [
        'Massgebend ist immer das Datum auf Ihrem Schreiben der Steuerverwaltung. Die Gebühren gelten für online eingereichte Fristverlängerungen.',
        'Wenn wir Ihre Steuererklärung erstellen, übernehmen wir auch die Fristverlängerung.',
      ],
    },
    {
      art: 'fragen',
      id: 'fragen',
      titel: { vor: 'Häufige ', akzent: 'Fragen' },
      fragen: [
        {
          frage: 'Was muss ich mitbringen?',
          antwort: 'Alles, was in der Checkliste steht. Wenn etwas fehlt, melden wir uns.',
        },
        { frage: 'Können Sie die Frist verlängern?', antwort: 'Die Fristverlängerung beantragen wir für Sie.' },
        {
          frage: 'Muss ich persönlich vorbeikommen?',
          antwort: 'Nicht zwingend. Sie können uns die Unterlagen per E-Mail, per Post oder persönlich bringen.',
        },
      ],
    },
    {
      art: 'kontakt',
      titel: { vor: 'So erreichen ', akzent: 'Sie', nach: ' uns' },
      satz: 'Melden Sie sich, dann vereinbaren wir einen Termin.',
      beschriftungen: { telefon: 'Telefon', email: 'E-Mail', buero: 'Büro' },
    },
  ],
}
