import type { einstieg as DE } from '@/content/einstieg'
import type { Uebersetzt } from '@/lib/sprache'

/** Entrée de la page d’accueil avec scène (23.10.2026) – traduction de `src/content/einstieg.ts`. */
export const einstieg: Uebersetzt<typeof DE> = {
  themenzeile: 'Assurances · Fiduciaire · Impôts',
  titel: { vor: 'Nous ', akzent: 'vous', nach: ' représentons, pas l’assurance.' },
  vorteile: [
    'Un seul interlocuteur pour les assurances, la fiduciaire et les impôts',
    'Vos contrats et documents dans le portail clients',
    'Conseil en allemand, français et portugais',
  ],
  buehne: 'Nos prestations en un coup d’œil',
  reiter: { portal: 'Portail clients', versicherungen: 'Assurances', steuern: 'Impôts', offerte: 'Offre en ligne', blog: 'Blog' },
  portal: {
    satz: 'Polices et documents au même endroit, sur l’ordinateur ou sur le téléphone.',
    knopf: 'Voir le portail clients',
  },
  versicherungen: {
    titel: { vor: 'Un seul interlocuteur ', akzent: 'pour tout' },
    sie: 'Vous',
    ac: 'A&C',
    offerten: 'Offres',
    empfehlung: 'Recommandation',
    punkte: ['Comparer et recommander', 'Accompagner en cas de sinistre', 'Gratuit avec le mandat de courtage'],
    knopf: 'Vers les assurances',
  },
  steuern: {
    titel: { vor: 'Votre ', akzent: 'déclaration d’impôt' },
    kostenlos: 'gratuit',
    schritte: [
      { fett: 'Établir la liste de contrôle :', text: 'sept questions courtes' },
      { text: 'Vous apportez les documents' },
      { text: 'Nous établissons et déposons la déclaration, nous prolongeons le délai' },
      { text: 'Taxation vérifiée' },
    ],
  },
  offerte: {
    titel: 'Demander une offre',
    frage: 'Pour quoi souhaitez-vous une offre ?',
    optionen: ['Voiture', 'Ménage et responsabilité civile', 'Bâtiment', 'Entreprise'],
    satz: 'Nous demandons les offres aux compagnies.',
  },
}
