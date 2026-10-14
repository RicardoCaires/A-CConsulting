/**
 * Startseite im Baukasten (15.10.2026). Inhalt unverändert gegenüber der Fassung
 * vom 14.10.2026, die Ricardo gutgeheissen hat («Finde ich gut bitte durchwegs
 * durchziehen»). QUELLEN: `content/source/umbau_2026-10_de.md`, `startseite_de.md`,
 * `abschluss_kontakt_de.md`, `banner_serie_de.md`.
 */
import type { SeitenInhalt } from './typen'

export const start: SeitenInhalt = {
  meta: {
    title: 'Treuhand und Versicherungen in Aegerten',
    description:
      'Versicherungen und Treuhand für Privatpersonen, Selbständige und KMU. Feste Ansprechpartner in Aegerten, Kanton Bern.',
  },
  banner: { themenzeile: 'VERSICHERUNGEN · TREUHAND', ueberschrift: 'Verwurzelt im Seeland. Blick auf mehr.' },
  bloecke: [
    {
      art: 'text',
      id: 'intro',
      titel: { vor: 'Ihr ', akzent: 'unabhängiger', nach: ' Versicherungsbroker im Seeland' },
      absaetze: [
        'Wir sind bei der FINMA als Versicherungsvermittler registriert und arbeiten in Ihrem Auftrag, nicht im Auftrag einer Versicherung.',
        'Dazu übernehmen wir Buchhaltung, Löhne und Steuererklärungen – für Privatpersonen, Selbständige und kleine Unternehmen.',
      ],
      knoepfe: [
        { text: 'Offerte anfragen', href: 'offerte' },
        { text: 'Zum Kundenportal', href: 'kundenportal', art: 'zweit' },
      ],
    },
    {
      art: 'listen',
      id: 'leistungen',
      titel: { vor: 'Was wir ', akzent: 'für Sie', nach: ' übernehmen' },
      listen: [
        {
          titel: 'Für Privatpersonen',
          ziel: { ziel: 'versicherungen', anker: 'privatpersonen' },
          eintraege: [
            { text: 'Kranken- und Zusatzversicherung', ziel: 'versicherungen', anker: 'privatpersonen' },
            { text: 'Hausrat und Haftpflicht', ziel: 'versicherungen', anker: 'privatpersonen' },
            { text: 'Motorfahrzeug', ziel: 'versicherungen', anker: 'privatpersonen' },
            { text: 'Leben und Säule 3a', ziel: 'versicherungen', anker: 'privatpersonen' },
            { text: 'Rechtsschutz', ziel: 'versicherungen', anker: 'privatpersonen' },
          ],
        },
        {
          titel: 'Für Unternehmen',
          ziel: { ziel: 'versicherungen', anker: 'unternehmen' },
          eintraege: [
            { text: 'BVG', ziel: 'versicherungen', anker: 'unternehmen' },
            { text: 'UVG und UVG-Zusatz', ziel: 'versicherungen', anker: 'unternehmen' },
            { text: 'Krankentaggeld', ziel: 'versicherungen', anker: 'unternehmen' },
            { text: 'Betriebshaftpflicht', ziel: 'versicherungen', anker: 'unternehmen' },
            { text: 'Sachversicherung', ziel: 'versicherungen', anker: 'unternehmen' },
          ],
        },
        {
          titel: 'Treuhand und Steuern',
          ziel: { ziel: 'treuhand' },
          eintraege: [
            { text: 'Buchhaltung', ziel: 'treuhand', anker: 'buchhaltung' },
            { text: 'Lohnadministration', ziel: 'treuhand', anker: 'leistungen' },
            { text: 'Mehrwertsteuer und Jahresabschluss', ziel: 'treuhand', anker: 'leistungen' },
            { text: 'Steuererklärung', ziel: 'steuern' },
            { text: 'Firmengründung', ziel: 'treuhand', anker: 'firmengruendung' },
          ],
        },
        {
          titel: 'Ihre Situation',
          eintraege: [
            { text: 'Ich gründe ein Unternehmen', ziel: 'treuhand', anker: 'firmengruendung' },
            { text: 'Ich stelle Mitarbeitende ein', ziel: 'treuhand', anker: 'leistungen' },
            { text: 'Ich möchte meinen Treuhänder wechseln', ziel: 'treuhand', anker: 'wechsel' },
            { text: 'Ich möchte meine Versicherungen prüfen', ziel: 'versicherungen' },
            { text: 'Ich habe einen Schadenfall', ziel: 'versicherungen', anker: 'schadenfall' },
          ],
        },
      ],
    },
    {
      art: 'textBild',
      id: 'digital',
      titel: { vor: 'Ihre Versicherungen ', akzent: 'jederzeit', nach: ' im Blick' },
      absaetze: [
        'Wir nutzen moderne Software dort, wo sie Administration reduziert, Abläufe vereinfacht und Fehler vermeidet. Die fachliche Prüfung, die Beratung und die Verantwortung bleiben bei uns.',
        'Sie merken davon vor allem eines: weniger Papier und kürzere Wege.',
      ],
      punkte: [
        'Alle Policen und Unterlagen an einem Ort, auch auf dem Handy',
        'Deckungen und Selbstbehalte jeder Police zum Nachlesen',
        'Änderungen, Fragen und Offertwünsche direkt an uns',
        'Anmeldung mit Code per E-Mail, Daten auf unserem eigenen Server in der Schweiz',
      ],
      knoepfe: [
        { text: 'Zum Kundenportal', href: 'kundenportal' },
        { text: 'Offerte online anfragen', href: 'offerte', art: 'link' },
      ],
      bild: { art: 'portal' },
    },
    {
      art: 'personen',
      titel: { vor: 'Zwei ', akzent: 'Ansprechpartner' },
      satz: 'Keine Hotline. Ihr Dossier wird von einem von uns beiden geführt — und der geht auch ans Telefon.',
      leute: [
        {
          name: 'Ricardo Caires',
          rolle: 'Treuhand · Versicherungen',
          bild: { datei: '/bilder/portrait_ricardo.webp', alt: 'Ricardo Caires, Porträt vor hellem Bürohintergrund.' },
          linkedin: 'https://www.linkedin.com/in/ricardo-caires-84a222214/',
        },
        {
          name: 'Octavio Nuno Gouveia Andrade',
          rolle: 'Treuhand · Versicherungen',
          bild: {
            datei: '/bilder/portrait_octavio.webp',
            alt: 'Octavio Nuno Gouveia Andrade, Porträt vor hellem Bürohintergrund.',
          },
          linkedin: 'https://www.linkedin.com/in/octavio-andrade-211083130/',
        },
      ],
      knoepfe: [{ text: 'Mehr über uns', ziel: 'ueberUns', art: 'link' }],
    },
    {
      art: 'kontakt',
      titel: { vor: 'So erreichen ', akzent: 'Sie', nach: ' uns' },
      satz: 'Schildern Sie uns kurz Ihre Situation. Wir melden uns persönlich bei Ihnen und besprechen, welche nächsten Schritte sinnvoll sind.',
      beschriftungen: { telefon: 'Telefon', email: 'E-Mail', buero: 'Büro' },
    },
  ],
}
