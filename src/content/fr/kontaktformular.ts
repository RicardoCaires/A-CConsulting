import type { PageContent } from '@/content/types'
import type { Uebersetzt } from '@/lib/sprache'

type Kontaktformular = Extract<PageContent['blocks'][number], { kind: 'kontaktformular' }>

/** Kontaktformular auf /fr/contact – Übersetzung von `src/content/pages/kontakt.ts` (16.10.2026). */
export const kontaktformular: Uebersetzt<Kontaktformular> = {
  kind: 'kontaktformular',
  id: 'formular',
  eyebrow: 'Joignable personnellement',
  heading: 'Écrivez-nous.',
  lead: 'Décrivez-nous brièvement votre demande. Nous vous répondons personnellement et clarifions ensemble la prochaine étape.',
  kontakt: {
    telefonLabel: 'Téléphone',
    telefonText: 'Appeler maintenant',
    emailLabel: 'E-mail',
  },
  zusage: {
    titel: 'Réponse personnelle',
    text: 'Nous répondons en règle générale à votre demande dans un délai d’un jour ouvrable.',
  },
  formular: {
    heading: 'En quoi pouvons-nous vous aider ?',
    pflichtHinweis: '* Champs obligatoires',
    name: 'Nom *',
    email: 'E-mail *',
    telefon: 'Téléphone',
    anliegen: 'Objet *',
    anliegenPlatzhalter: 'Veuillez choisir',
    anliegenWahl: ['Assurances', 'Fiduciaire et comptabilité', 'Impôts', 'Création d’entreprise', 'Autre demande'],
    kontaktartFrage: 'Comment pouvons-nous vous contacter ?',
    kontaktartEmail: 'E-mail',
    kontaktartTelefon: 'Téléphone',
    nachricht: 'Votre message *',
    nachrichtPlatzhalter: 'Décrivez votre demande en quelques phrases.',
    zustimmungVor: 'J’ai lu la ',
    zustimmungLink: 'déclaration de protection des données',
    zustimmungNach: ' et j’accepte le traitement de mes données pour le suivi de ma demande.',
    knopf: 'Envoyer la demande →',
    vertraulich: 'Vos données sont traitées de manière confidentielle et ne sont pas transmises à des tiers.',
  },
}
