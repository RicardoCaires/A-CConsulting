/**
 * /de/ueber-uns im Baukasten (15.10.2026). Kürzer als die Fassung vom 15.09.2026:
 * Inhaber, Arbeitsweise, Standort, Kontakt. QUELLEN: `content/source/umbau_ueberuns_de.md`,
 * `ueberuns_inhaber_de.md`, `ueberuns_arbeitsweise_de.md`, `ueberuns_standort_de.md`,
 * `abschluss_kontakt_de.md`, `schritt4_fassung2_de.md`.
 *
 * Rollen verbindlich nach Ricardos Anweisung vom 15.09.2026: Octavio ist Geschäftsführer
 * und Mitinhaber, Ricardo Mitinhaber. Die Anker `inhaber`, `arbeitsweise` und `region` bleiben.
 */
import type { SeitenInhalt } from './typen'

export const ueberUns: SeitenInhalt = {
  meta: {
    title: 'Über uns',
    description:
      'Wer hinter A&C Consulting steht: zwei Inhaber, die ihre Mandate selbst betreuen. Büro in Aegerten, Kanton Bern.',
  },
  banner: { themenzeile: 'ÜBER A&C', ueberschrift: 'Wer hinter A&C Consulting steht' },
  bloecke: [
    {
      art: 'personen',
      id: 'inhaber',
      ausfuehrlich: true,
      titel: { vor: 'Die beiden ', akzent: 'Inhaber' },
      satz: 'Ihre Ansprechperson kennt Ihr Dossier und begleitet Sie direkt. So bleiben Wege kurz und Zuständigkeiten klar.',
      leute: [
        {
          name: 'Ricardo Caires',
          rolle: 'Mitinhaber',
          bild: { datei: '/bilder/portrait_ricardo.webp', alt: 'Ricardo Caires, Porträt vor hellem Bürohintergrund.' },
          angaben: [
            {
              merkmal: 'Beruflicher Hintergrund',
              wert: 'Kaufmann EFZ. Im Finanz- und Rechnungswesen der Creabeton Matériaux AG in Lyss verantwortlich für Kreditoren, Debitoren und Anlagebuchhaltung sowie Leiter der Berufsbildung.',
            },
            {
              merkmal: 'Qualifikationen',
              wert: 'Sachbearbeiter Rechnungswesen VSK, Feusi Bildungszentrum Bern, und Versicherungsvermittler VBV.',
            },
          ],
          sprachen: 'Beratungssprachen: Deutsch, Portugiesisch und Englisch',
          telefon: 'ricardo',
          email: 'ricardo',
          linkedin: 'https://www.linkedin.com/in/ricardo-caires-84a222214/',
        },
        {
          name: 'Octavio Nuno Gouveia Andrade',
          rolle: 'Geschäftsführer und Mitinhaber',
          bild: {
            datei: '/bilder/portrait_octavio.webp',
            alt: 'Octavio Nuno Gouveia Andrade, Porträt vor hellem Bürohintergrund.',
          },
          angaben: [
            {
              merkmal: 'Beruflicher Hintergrund',
              wert: 'Kundenberater und Verkaufsleiter bei Allianz Suisse in Biel, danach Hauptagent der Zurich Versicherungen in Biel und heute selbstständiger Versicherungsbroker.',
            },
            { merkmal: 'Qualifikation', wert: 'Versicherungsvermittler VBV.' },
          ],
          sprachen: 'Beratungssprachen: Deutsch, Französisch und Portugiesisch',
          telefon: 'octavio',
          email: 'octavio',
          linkedin: 'https://www.linkedin.com/in/octavio-andrade-211083130/',
        },
      ],
    },
    {
      art: 'text',
      id: 'arbeitsweise',
      breit: true,
      titel: { vor: 'So ', akzent: 'arbeiten', nach: ' wir' },
      einleitung:
        'Sie sollen wissen, wer Ihr Dossier betreut, was wir übernehmen und wie Entscheidungen zustande kommen.',
      punkte: [
        'Sie sprechen mit der Person, die Ihr Dossier kennt und bearbeitet.',
        'Aufgaben, Zuständigkeiten und Kosten halten wir zu Beginn fest. Ändert sich der Umfang, besprechen wir das vorgängig mit Ihnen.',
        'Digitale Prozesse reduzieren administrative Umwege. Die fachliche Prüfung und Verantwortung bleiben bei uns.',
        'Wir behandeln Ihre Angaben und Unterlagen vertraulich und schützen sie mit angemessenen organisatorischen Massnahmen.',
        'Rechtsberatung und aktienrechtliche Revision gehören nicht zu unseren Leistungen. Bei Bedarf beziehen wir geeignete Fachpersonen ein.',
      ],
    },
    {
      art: 'textBild',
      id: 'region',
      titel: { vor: 'Unser Büro in ', akzent: 'Aegerten' },
      absaetze: ['Besprechungen sind bei uns vor Ort oder nach Vereinbarung bei Ihnen möglich.'],
      knoepfe: [{ text: 'Route mit Google Maps planen', href: 'route' }],
      bild: {
        art: 'karte',
        titel: 'Karte mit dem Standort von A&C Consulting in Aegerten',
        knopf: 'Karte anzeigen',
        hinweis: 'Beim Anzeigen wird die Karte von OpenStreetMap geladen.',
      },
    },
    {
      art: 'kontakt',
      titel: { vor: 'Lernen Sie uns ', akzent: 'kennen' },
      satz: 'Schildern Sie uns kurz Ihre Situation. Wir melden uns persönlich bei Ihnen und besprechen, welche nächsten Schritte sinnvoll sind.',
      beschriftungen: { telefon: 'Telefon', email: 'E-Mail', buero: 'Büro' },
    },
  ],
}
