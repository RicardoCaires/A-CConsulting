/**
 * /de/kontakt im Baukasten (15.10.2026): Banner, Kontaktformular (unverändert aus
 * `src/content/pages/kontakt.ts`), Hinweis auf die Offertanfrage, Kontakt.
 * QUELLEN: `content/source/umbau_kontakt_de.md`, `kontakt_formular_de.md`, `ergaenzungen_de.md`,
 * `offertanfrage_de.md`.
 *
 * Der Kontaktblock trägt keinen Knopf: Er würde auf dieselbe Seite führen.
 */
import type { SeitenInhalt } from './typen'

export const kontakt: SeitenInhalt = {
  meta: {
    title: 'Kontakt',
    description:
      'So erreichen Sie A&C Consulting in Aegerten: per Telefon, per E-Mail oder über das Kontaktformular. Beratung auf Deutsch, Französisch und Portugiesisch.',
  },
  banner: { themenzeile: 'KONTAKT', ueberschrift: 'So erreichen Sie uns' },
  bloecke: [
    { art: 'formular', id: 'formular' },
    {
      art: 'text',
      id: 'offerte',
      breit: true,
      titel: { vor: 'Offerte ', akzent: 'online', nach: ' anfragen' },
      absaetze: [
        'Frage für Frage, jede freiwillig. Was offen bleibt, klären wir im Gespräch.',
      ],
      knoepfe: [{ text: 'Offerte anfragen', href: 'offerte' }],
    },
    {
      art: 'kontakt',
      id: 'direkt',
      titel: { vor: 'Am schnellsten geht es ', akzent: 'telefonisch' },
      satz: 'Wenn Sie lieber sprechen als schreiben: Rufen Sie an. Sie landen bei einem von uns beiden, nicht in einer Warteschlange.',
      beschriftungen: { telefon: 'Telefon', email: 'E-Mail', buero: 'Büro' },
      ohneKnopf: true,
    },
  ],
}
