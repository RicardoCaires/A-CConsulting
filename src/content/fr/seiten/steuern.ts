/** Impôts, version française de `src/content/seiten/steuern.ts` (16.10.2026). */
import type { SeitenInhalt } from '@/content/seiten/typen'

export const steuern: SeitenInhalt = {
  meta: {
    title: 'Déclaration d’impôt pour particuliers, indépendants et entreprises',
    description:
      'Vous apportez les documents, nous établissons la déclaration d’impôt, la déposons et contrôlons ensuite la taxation.',
  },
  banner: { themenzeile: 'IMPÔTS', ueberschrift: 'Déclaration d’impôt dans le canton de Berne' },
  bloecke: [
    {
      art: 'fluss',
      id: 'checkliste',
      titel: { vor: 'Vous apportez les ', akzent: 'documents', nach: ', nous faisons le reste' },
      stufen: [
        {
          titel: 'Vous apportez',
          punkte: ['Revenu et fortune', 'Assurances et prévoyance', 'Déductions et événements particuliers'],
        },
        {
          titel: 'Nous nous chargeons',
          punkte: ['Établir la déclaration d’impôt', 'Prolonger le délai si nécessaire', 'Déposer dans les délais'],
        },
        {
          titel: 'Vous recevez',
          punkte: ['La taxation contrôlée', 'Un retour pour savoir si tout est correct'],
        },
      ],
      checkliste: true,
      knoepfe: [{ text: 'Prendre rendez-vous', ziel: 'kontakt' }],
    },
    {
      art: 'rechner3a',
      id: 'saeule-3a',
      titel: { vor: 'Économiser des impôts avec le ', akzent: '3e pilier a' },
      einleitung: 'Estimez combien d’impôts en moins vous payez avec un versement dans le 3e pilier a.',
    },
    {
      art: 'listen',
      id: 'zielgruppen',
      titel: { vor: 'Pour les particuliers ', akzent: 'et', nach: ' les entreprises' },
      listen: [
        {
          titel: 'Pour les particuliers',
          id: 'privatpersonen',
          eintraege: [
            {
              text: 'Déposée dans les délais',
              zusatz: 'Avec les déductions auxquelles vous avez droit.',
            },
            {
              text: 'Taxation contrôlée',
              zusatz: 'Nous vérifions qu’elle correspond à la déclaration.',
            },
            {
              text: 'Liste de contrôle pour particuliers',
              zusatz: 'Ce que vous apportez.',
              ziel: 'steuern',
              anker: 'checkliste',
            },
          ],
        },
        {
          titel: 'Pour les indépendants et les entreprises',
          id: 'firmen',
          eintraege: [
            {
              text: 'Le bouclement comme base',
              zusatz: 'La déclaration d’impôt repose directement sur la comptabilité.',
            },
            {
              text: 'Documents déjà disponibles',
              zusatz: 'Si nous tenons votre comptabilité.',
            },
            {
              text: 'Comptabilité et bouclement annuel',
              zusatz: 'Les deux au même endroit.',
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
      titel: { vor: 'Délais et ', akzent: 'frais' },
      kantone: { beschriftung: 'Votre canton' },
      reihen: [
        {
          titel: 'Particuliers',
          stationen: [
            { marke: '15 mars', titel: 'Délai de dépôt habituel', hervor: true },
            { marke: '15 juillet', titel: 'Prolonger en ligne', wert: 'gratuit' },
            { marke: '15 septembre', titel: 'Prolonger en ligne', wert: 'CHF 20' },
            { marke: '15 novembre', titel: 'Prolonger en ligne', wert: 'CHF 40' },
          ],
        },
        {
          titel: 'Entreprises',
          stationen: [
            { marke: '7 mois', titel: 'après la clôture de l’exercice', hervor: true },
            { marke: '+ 1½ mois', titel: 'Prolonger en ligne', wert: 'gratuit' },
            { marke: '+ 3½ mois', titel: 'Prolonger en ligne, au plus', wert: 'CHF 20' },
          ],
        },
      ],
      nachsaetze: [
        'Fait toujours foi la date figurant sur le courrier de l’administration fiscale. Les frais s’appliquent aux prolongations demandées en ligne.',
        'Si nous établissons votre déclaration d’impôt, nous nous chargeons aussi de la prolongation du délai.',
      ],
    },
    {
      art: 'fragen',
      id: 'fragen',
      titel: { vor: 'Questions ', akzent: 'fréquentes' },
      fragen: [
        {
          frage: 'Que dois-je apporter\u00a0?',
          antwort: 'Tout ce qui figure dans la liste de contrôle. S’il manque quelque chose, nous vous contactons.',
        },
        {
          frage: 'Pouvez-vous prolonger le délai\u00a0?',
          antwort: 'Nous demandons la prolongation du délai pour vous.',
        },
        {
          frage: 'Dois-je passer en personne\u00a0?',
          antwort: 'Pas obligatoirement. Vous pouvez nous transmettre les documents par e-mail, par la poste ou en personne.',
        },
      ],
    },
    {
      art: 'kontakt',
      titel: { vor: 'Comment nous ', akzent: 'joindre' },
      satz: 'Contactez-nous, nous conviendrons d’un rendez-vous.',
      beschriftungen: { telefon: 'Téléphone', email: 'E-mail', buero: 'Bureau' },
    },
  ],
}
