/** « Numérique avec A&C », version française de `src/content/seiten/digital.ts` (16.10.2026). */
import type { SeitenInhalt } from '@/content/seiten/typen'

export const digital: SeitenInhalt = {
  meta: {
    title: 'Portail clients et offre en ligne',
    description:
      'Vos polices et documents au même endroit, des demandes directement à nous et une offre à demander en ligne.',
  },
  banner: { themenzeile: 'NUMÉRIQUE', ueberschrift: 'Portail clients et offre en ligne' },
  bloecke: [
    {
      art: 'text',
      id: 'intro',
      breit: true,
      titel: { vor: 'Sans papier, mais ', akzent: 'personnel' },
      absaetze: [
        'Vos polices ne sont plus dans un classeur à la cave, mais dans le portail clients. Si vous préférez téléphoner, téléphonez.',
      ],
    },
    {
      art: 'portalDemo',
      id: 'ansichten',
      titel: { vor: 'Le ', akzent: 'portail clients' },
      punkte: [
        'Polices et documents\u00a0: au même endroit, sur l’ordinateur ou sur le téléphone',
        'Coûts\u00a0: vos assurances par an, sous forme de graphique',
        'Modifications\u00a0: annoncer directement par exemple une nouvelle adresse',
        'Demandes\u00a0: offre, rappel, rendez-vous ou modification de contrat',
        'État\u00a0: demandé, en traitement, réglé – avec un e-mail à chaque changement',
      ],
      probieren: 'Essayez\u00a0: ouvrir des contrats, consulter les prestations, remplir une demande. Toutes les données sont fictives.',
      knoepfe: [
        { text: 'Vers le portail clients', href: 'kundenportal' },
      ],
    },
    {
      art: 'schritte',
      id: 'zugang',
      titel: { vor: 'Comment obtenir ', akzent: 'votre accès' },
      schritte: [
        { titel: 'S’inscrire', text: 'Vous vous inscrivez dans le portail clients.' },
        { titel: 'Activer', text: 'Nous associons votre accès à votre dossier.' },
        { titel: 'Commencer', text: 'Consulter vos polices, envoyer des modifications et des demandes.' },
      ],
      nachsatz:
        'Le portail est destiné aux clientes et clients d’A&C. Si vous ne l’êtes pas encore, tout commence par un entretien.',
    },
    {
      art: 'text',
      id: 'offerte',
      titel: { vor: 'Demander une offre ', akzent: 'en ligne' },
      absaetze: [
        'Vous souhaitez une offre sans téléphoner tout de suite\u00a0? Faites votre demande en ligne.',
        'Question par question, chacune facultative. Ce qui reste ouvert, nous le clarifions lors d’un entretien.',
      ],
      knoepfe: [{ text: 'Demander une offre', href: 'offerte' }],
    },
    {
      art: 'fragen',
      id: 'fragen',
      titel: { vor: 'Questions ', akzent: 'fréquentes' },
      fragen: [
        {
          frage: 'Le portail clients coûte-t-il quelque chose\u00a0?',
          antwort: 'Non. Pour les clientes et clients d’A&C, le portail est gratuit.',
        },
        {
          frage: 'Dois-je utiliser le portail\u00a0?',
          antwort:
            'Non. Le téléphone et l’e-mail restent. Le portail est un moyen supplémentaire, pas un substitut à l’entretien.',
        },
      ],
    },
    {
      art: 'kontakt',
      titel: { vor: 'Vous préférez un contact ', akzent: 'personnel', nach: '\u00a0?' },
      satz: 'Appelez-nous ou écrivez-nous. Votre dossier est suivi par l’un de nous deux – pas de hotline.',
      beschriftungen: { telefon: 'Téléphone', email: 'E-mail', buero: 'Bureau' },
    },
  ],
}
