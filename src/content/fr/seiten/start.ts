/** Page d’accueil, version française de `src/content/seiten/start.ts` (16.10.2026). */
import type { SeitenInhalt } from '@/content/seiten/typen'

export const start: SeitenInhalt = {
  meta: {
    title: 'Fiduciaire et assurances à Aegerten',
    description:
      'Assurances et fiduciaire pour particuliers, indépendants et PME. Des interlocuteurs fixes à Aegerten, canton de Berne.',
  },
  banner: { themenzeile: 'ASSURANCES · FIDUCIAIRE', ueberschrift: 'Ancrés dans le Seeland. Le regard plus loin.' },
  bloecke: [
    {
      art: 'listen',
      id: 'leistungen',
      titel: { vor: 'Ce que nous ', akzent: 'prenons en charge', nach: ' pour vous' },
      listen: [
        {
          titel: 'Assurances pour particuliers',
          ziel: { ziel: 'versicherungen', anker: 'privatpersonen' },
          eintraege: [
            { text: 'Caisse-maladie et assurance complémentaire' },
            { text: 'Ménage, responsabilité civile et voiture' },
            { text: 'Prévoyance et 3e pilier a' },
          ],
          knopf: { text: 'En savoir plus', ziel: 'versicherungen', anker: 'privatpersonen' },
        },
        {
          titel: 'Assurances pour entreprises',
          ziel: { ziel: 'versicherungen', anker: 'unternehmen' },
          eintraege: [
            { text: 'LPP et LAA' },
            { text: 'Indemnités journalières maladie' },
            { text: 'Responsabilité civile entreprise et biens' },
          ],
          knopf: { text: 'En savoir plus', ziel: 'versicherungen', anker: 'unternehmen' },
        },
        {
          titel: 'Fiduciaire et impôts',
          ziel: { ziel: 'treuhand' },
          eintraege: [
            { text: 'Comptabilité et bouclement' },
            { text: 'Gestion des salaires' },
            { text: 'Déclaration d’impôt' },
          ],
          knopf: { text: 'En savoir plus', ziel: 'treuhand' },
        },
      ],
    },
    {
      art: 'portalDemo',
      id: 'portal',
      titel: { vor: 'Vos assurances ', akzent: 'à tout moment', nach: ' sous les yeux' },
      einleitung: 'Moins de papier, des chemins plus courts. Dans le portail clients, vous avez tout sous la main.',
      punkte: [
        'Polices\u00a0: tous les contrats et documents au même endroit, aussi sur le téléphone',
        'Coûts\u00a0: ce que vous payez par an pour vos assurances, en un coup d’œil',
        'Demandes\u00a0: modifications et demandes d’offre directement à nous, avec leur état',
      ],
      probieren: 'Essayez\u00a0: ouvrir des contrats, consulter les prestations, remplir une demande. Toutes les données sont fictives.',
      knoepfe: [
        { text: 'Vers le portail clients', href: 'kundenportal' },
        { text: 'Demander une offre en ligne', href: 'offerte', art: 'zweit' },
        { text: 'En savoir plus sur le portail clients', ziel: 'digital', art: 'zweit' },
      ],
    },
    {
      art: 'personen',
      titel: { vor: 'Deux ', akzent: 'interlocuteurs' },
      satz: 'Pas de hotline. Votre dossier est suivi par l’un de nous deux — et c’est lui qui répond au téléphone.',
      leute: [
        {
          name: 'Ricardo Caires',
          rolle: 'Fiduciaire · Assurances',
          linkedin: 'https://www.linkedin.com/in/ricardo-caires-84a222214/',
        },
        {
          name: 'Octavio Nuno Gouveia Andrade',
          rolle: 'Fiduciaire · Assurances',
          linkedin: 'https://www.linkedin.com/in/octavio-andrade-211083130/',
        },
      ],
      knoepfe: [{ text: 'En savoir plus sur nous', ziel: 'ueberUns', art: 'zweit' }],
    },
    {
      art: 'kontakt',
      titel: { vor: 'Comment nous ', akzent: 'joindre' },
      satz: 'Décrivez-nous brièvement votre situation. Nous vous recontactons personnellement.',
      beschriftungen: { telefon: 'Téléphone', email: 'E-mail', buero: 'Bureau' },
    },
  ],
}
