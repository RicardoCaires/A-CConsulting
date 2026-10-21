/**
 * À propos, version française de `src/content/seiten/ueber-uns.ts` (16.10.2026).
 * Rôles selon l’instruction de Ricardo du 15.09.2026 : Octavio est gérant et coassocié, Ricardo coassocié.
 */
import type { SeitenInhalt } from '@/content/seiten/typen'

export const ueberUns: SeitenInhalt = {
  meta: {
    title: 'À propos',
    description:
      'Qui se cache derrière A&C Consulting\u00a0: deux associés qui suivent eux-mêmes leurs mandats. Bureau à Aegerten, canton de Berne.',
  },
  banner: { themenzeile: 'À PROPOS D’A&C', ueberschrift: 'Qui se cache derrière A&C Consulting' },
  bloecke: [
    {
      art: 'personen',
      id: 'inhaber',
      ausfuehrlich: true,
      titel: { vor: 'Les deux ', akzent: 'associés' },
      satz: 'Votre interlocuteur connaît votre dossier et vous accompagne directement. Les chemins restent courts et les responsabilités claires.',
      leute: [
        {
          name: 'Ricardo Caires',
          rolle: 'Coassocié',
          angaben: [
            {
              merkmal: 'Parcours professionnel',
              wert: 'Employé de commerce CFC. Finances et comptabilité chez Creabeton Matériaux AG à Lyss.',
            },
            {
              merkmal: 'Qualifi­cations',
              wert: 'Sachbearbeiter Rechnungswesen VSK (gestionnaire en comptabilité), Feusi Bildungszentrum Bern, et intermédiaire d’assurance AFA.',
            },
          ],
          sprachen: 'Langues de conseil\u00a0: allemand, portugais et anglais',
          telefon: 'ricardo',
          email: 'ricardo',
          linkedin: 'https://www.linkedin.com/in/ricardo-caires-84a222214/',
        },
        {
          name: 'Octavio Nuno Gouveia Andrade',
          rolle: 'Gérant et coassocié',
          angaben: [
            {
              merkmal: 'Parcours professionnel',
              wert: 'Allianz Suisse et Zurich Assurances à Bienne, aujourd’hui courtier en assurances indépendant.',
            },
            { merkmal: 'Qualification', wert: 'Intermédiaire d’assurance AFA.' },
          ],
          sprachen: 'Langues de conseil\u00a0: allemand, français et portugais',
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
      titel: { vor: 'Notre façon de ', akzent: 'travailler' },
      punkte: [
        'Direct\u00a0: vous parlez avec la personne qui connaît votre dossier.',
        'Clair\u00a0: nous fixons les tâches et les coûts dès le début.',
        'Confidentiel\u00a0: nous traitons vos informations et documents de manière confidentielle.',
        'Délimité\u00a0: le conseil juridique et la révision au sens du droit de la société anonyme ne font pas partie de nos prestations.',
      ],
    },
    {
      art: 'kontakt',
      id: 'region',
      titel: { vor: 'Notre bureau à ', akzent: 'Aegerten' },
      satz: 'Les entretiens ont lieu chez nous ou, sur rendez-vous, chez vous. Décrivez-nous brièvement votre situation – nous vous recontactons personnellement.',
      beschriftungen: { telefon: 'Téléphone', email: 'E-mail', buero: 'Bureau' },
    },
  ],
}
