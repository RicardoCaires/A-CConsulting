/** Contact, version française de `src/content/seiten/kontakt.ts` (16.10.2026). */
import type { SeitenInhalt } from '@/content/seiten/typen'

export const kontakt: SeitenInhalt = {
  meta: {
    title: 'Contact',
    description:
      'Comment joindre A&C Consulting à Aegerten\u00a0: par téléphone, par e-mail ou via le formulaire de contact. Conseil en allemand, français et portugais.',
  },
  banner: { themenzeile: 'CONTACT', ueberschrift: 'Comment nous joindre' },
  bloecke: [
    { art: 'formular', id: 'formular' },
    {
      art: 'text',
      id: 'offerte',
      breit: true,
      titel: { vor: 'Demander une offre ', akzent: 'en ligne' },
      absaetze: ['Question par question, chacune facultative. Ce qui reste ouvert, nous le clarifions lors d’un entretien.'],
      knoepfe: [{ text: 'Demander une offre', href: 'offerte' }],
    },
    {
      art: 'kontakt',
      id: 'direkt',
      titel: { vor: 'Le plus rapide, c’est par ', akzent: 'téléphone' },
      satz: 'Si vous préférez parler plutôt qu’écrire\u00a0: appelez-nous. Vous tombez sur l’un de nous deux, pas dans une file d’attente.',
      beschriftungen: { telefon: 'Téléphone', email: 'E-mail', buero: 'Bureau' },
      ohneKnopf: true,
    },
  ],
}
