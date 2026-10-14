/**
 * /de/steuern im Baukasten (15.10.2026). QUELLEN: `content/source/umbau_steuern_de.md`,
 * `schritt4_fassung2_de.md`, `steuern_zielgruppen_de.md`, `steuern_checkliste_de.md`.
 *
 * Pflicht nach CLAUDE.md Abschnitt 9: Checkliste, Fristverlängerung durch A&C,
 * Nachkontrolle der Veranlagung. Fristen und Gebühren unverändert aus der
 * Fassung vom 16.09.2026. Die Checkliste hat noch keine Datei (`file: null`),
 * darum steht kein Download-Knopf.
 */
import type { SeitenInhalt } from './typen'

export const steuern: SeitenInhalt = {
  meta: {
    title: 'Steuererklärung für Privatpersonen, Selbständige und Firmen',
    description:
      'Sie bringen die Unterlagen, wir erstellen die Steuererklärung, reichen sie ein und prüfen später die Veranlagung.',
  },
  banner: { themenzeile: 'STEUERN', ueberschrift: 'Steuererklärung im Kanton Bern' },
  bloecke: [
    {
      art: 'text',
      id: 'einstieg',
      breit: true,
      titel: { vor: 'Sie bringen die ', akzent: 'Unterlagen', nach: ', wir den Rest' },
      absaetze: [
        'Sie bringen die Unterlagen, wir erstellen die Steuererklärung, reichen sie ein und prüfen später die Veranlagung.',
        'Wir erstellen Steuererklärungen hauptsächlich im Kanton Bern.',
      ],
      knoepfe: [{ text: 'Termin vereinbaren', ziel: 'kontakt' }],
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
              zusatz: 'Wir achten auf die Abzüge, die Ihnen zustehen, und reichen fristgerecht ein.',
            },
            {
              text: 'Veranlagung nachkontrolliert',
              zusatz:
                'Wenn die Veranlagung kommt, prüfen wir sie und sagen Ihnen, ob sie mit dem übereinstimmt, was eingereicht wurde.',
            },
            {
              text: 'Checkliste für Privatpersonen',
              zusatz: 'Was Sie zusammenstellen sollten.',
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
              zusatz: 'Führen wir Ihre Buchhaltung, sind die nötigen Unterlagen bereits vorhanden.',
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
      art: 'text',
      id: 'checkliste',
      titel: { akzent: 'Checkliste', nach: ' Steuererklärung Kanton Bern' },
      absaetze: [
        'Die Checkliste zeigt, welche Dokumente Privatpersonen für die Steuererklärung üblicherweise benötigen.',
        'Die PDF-Checkliste ist in Vorbereitung.',
      ],
      punkte: ['Einkommen und Vermögen', 'Versicherungen und Vorsorge', 'Abzüge und besondere Ereignisse'],
    },
    {
      art: 'tabelle',
      id: 'fristen',
      titel: { vor: 'Fristen und ', akzent: 'Gebühren' },
      kopfzeile: ['Wer', 'Was', 'Bis wann', 'Gebühr'],
      zeilen: [
        ['Privatpersonen', 'Übliche Einreichefrist', '15. März', '–'],
        ['Privatpersonen', 'Online verlängern', 'bis 15. Juli', 'kostenlos'],
        ['Privatpersonen', 'Online verlängern', 'bis 15. September', 'CHF 20'],
        ['Privatpersonen', 'Online verlängern', 'bis 15. November', 'CHF 40'],
        ['Unternehmen', 'Ordentliche Einreichefrist', '7 Monate nach Geschäftsabschluss', '–'],
        ['Unternehmen', 'Online verlängern', 'zusätzliche 1½ Monate', 'kostenlos'],
        ['Unternehmen', 'Online verlängern', 'maximal zusätzliche 3½ Monate', 'CHF 20'],
      ],
      nachsaetze: [
        'Massgebend ist immer das Datum auf Ihrem Schreiben der Steuerverwaltung.',
        'Die Gebühren gelten für online eingereichte Fristverlängerungen. Schriftlich eingereichte Fristverlängerungen können höhere Gebühren verursachen.',
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
