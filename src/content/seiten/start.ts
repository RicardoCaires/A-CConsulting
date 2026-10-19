/**
 * Startseite im Baukasten (15.10.2026), am selben Tag gekürzt und um Portalansichten
 * ergänzt (Ricardo: «zu viel text», «noch etwas mehr vom portal»). Nichts zum Portal
 * im Zusammenhang mit Sicherheit oder Datenschutz. QUELLEN:
 * `content/source/umbau_2026-10b_de.md`, `umbau_2026-10_de.md`, `startseite_de.md`,
 * `abschluss_kontakt_de.md`, `banner_serie_de.md`.
 */
import type { SeitenInhalt } from './typen'

export const start: SeitenInhalt = {
  meta: {
    title: 'Treuhand und Versicherungen in Aegerten',
    description:
      'Versicherungen und Treuhand für Privatpersonen, Selbständige und KMU. Feste Ansprechpartner in Aegerten, Kanton Bern.',
  },
  banner: { themenzeile: 'VERSICHERUNGEN · TREUHAND', ueberschrift: 'Verwurzelt im Seeland. Blick auf mehr.', form: 'hell', spruch: 'Wir vertreten Sie. Nicht die Versicherung.' },
  bloecke: [
    {
      art: 'listen',
      id: 'leistungen',
      titel: { vor: 'Was wir ', akzent: 'für Sie', nach: ' übernehmen' },
      // Seit dem 16.10.2026 nur das Hauptgeschäft, je drei Punkte (Ricardo: «weniger info nur das essenzielle»)
      listen: [
        {
          titel: 'Versicherungen für Privatpersonen',
          ziel: { ziel: 'versicherungen', anker: 'privatpersonen' },
          eintraege: [
            { text: 'Krankenkasse und Zusatzversicherung' },
            { text: 'Hausrat, Haftpflicht und Auto' },
            { text: 'Vorsorge und Säule 3a' },
          ],
          knopf: { text: 'Mehr erfahren', ziel: 'versicherungen', anker: 'privatpersonen' },
        },
        {
          titel: 'Versicherungen für Unternehmen',
          ziel: { ziel: 'versicherungen', anker: 'unternehmen' },
          eintraege: [
            { text: 'BVG und UVG' },
            { text: 'Krankentaggeld' },
            { text: 'Betriebshaftpflicht und Sachwerte' },
          ],
          knopf: { text: 'Mehr erfahren', ziel: 'versicherungen', anker: 'unternehmen' },
        },
        {
          titel: 'Treuhand und Steuern',
          ziel: { ziel: 'treuhand' },
          eintraege: [
            { text: 'Buchhaltung und Abschluss' },
            { text: 'Lohnadministration' },
            { text: 'Steuererklärung' },
          ],
          knopf: { text: 'Mehr erfahren', ziel: 'treuhand' },
        },
      ],
    },
    {
      art: 'textBild',
      id: 'digital',
      titel: { vor: 'Ihre Versicherungen ', akzent: 'jederzeit', nach: ' im Blick' },
      absaetze: ['Weniger Papier, kürzere Wege. Im Kundenportal haben Sie alles zur Hand.'],
      punkte: [
        'Policen: alle Verträge und Unterlagen an einem Ort, auch auf dem Handy',
        'Kosten: was Sie pro Jahr für Ihre Versicherungen bezahlen, auf einen Blick',
        'Anfragen: Änderungen und Offertwünsche direkt an uns, mit Stand',
      ],
      knoepfe: [
        { text: 'Zum Kundenportal', href: 'kundenportal' },
        { text: 'Offerte online anfragen', href: 'offerte', art: 'zweit' },
      ],
      bild: { art: 'portal', ansicht: 'fenster' },
    },
    {
      art: 'portalDemo',
      id: 'portal',
      titel: { vor: 'So sieht das ', akzent: 'Kundenportal', nach: ' aus' },
      einleitung: 'Probieren Sie es aus: Verträge öffnen, Leistungen ansehen, eine Anfrage ausfüllen. Alle Angaben sind erfunden.',
      knoepfe: [{ text: 'Mehr zum Kundenportal', ziel: 'digital', art: 'zweit' }],
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
      knoepfe: [{ text: 'Mehr über uns', ziel: 'ueberUns', art: 'zweit' }],
    },
    {
      art: 'kontakt',
      titel: { vor: 'So erreichen ', akzent: 'Sie', nach: ' uns' },
      satz: 'Schildern Sie uns kurz Ihre Situation. Wir melden uns persönlich.',
      beschriftungen: { telefon: 'Telefon', email: 'E-Mail', buero: 'Büro' },
    },
  ],
}
