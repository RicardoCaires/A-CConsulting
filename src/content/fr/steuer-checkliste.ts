/**
 * Questionnaire et liste de contrôle pour la déclaration d’impôt, version française de
 * `src/content/steuer-checkliste.ts` (16.10.2026). Les identifiants des options et les listes `wenn` sont inchangés.
 */
import type { steuerCheckliste as DE } from '@/content/steuer-checkliste'
import type { Uebersetzt } from '@/lib/sprache'

export const steuerCheckliste: Uebersetzt<typeof DE> = {
  start: 'Établir la liste de contrôle',
  einleitung: 'Sept brèves questions, puis nous vous envoyons votre liste personnelle des documents.',
  frageVon: 'Question',
  von: 'sur',
  weiter: 'Suivant',
  zurueck: 'Retour',
  keine: 'Rien de tout cela',
  mehrere: 'Plusieurs réponses possibles.',
  ergebnisTitel: 'Votre liste de contrôle',
  ergebnisSatz: 'Cochez ce que vous avez déjà préparé.',
  neu: 'Recommencer',
  mailBetreff: 'Liste de contrôle déclaration d’impôt',
  mailEinleitung: 'Voici les documents dont j’ai besoin pour la déclaration d’impôt\u00a0:',
  pdfTitel: 'Vos documents pour la déclaration d’impôt',
  pdfKopf: 'Liste de contrôle déclaration d’impôt',
  pdfUntertitel: 'Établie sur ac-co.ch',
  pdfSatz: 'Préparez ces documents. Ce qui manque, nous le clarifions volontiers lors d’un entretien.',
  kontaktTitel: 'Où pouvons-nous envoyer votre liste de contrôle\u00a0?',
  kontaktSatz:
    'Vous recevez la liste de contrôle en PDF par e-mail. Nous vous appelons pour parler de votre déclaration d’impôt.',
  vorname: 'Prénom',
  nachname: 'Nom',
  telefon: 'Téléphone',
  email: 'E-mail',
  datenschutzVor:
    'Nous utilisons vos indications pour vous envoyer la liste de contrôle et vous appeler au sujet de votre déclaration d’impôt. Plus d’informations dans la ',
  datenschutz: 'déclaration de protection des données',
  senden: 'Envoyer la liste de contrôle',
  sendet: 'Envoi en cours …',
  fehlerPflicht: 'Veuillez remplir tous les champs.',
  fehlerEmail: 'Veuillez vérifier l’adresse e-mail.',
  fehlerServer: 'La liste de contrôle n’a pas pu être envoyée pour le moment. Veuillez nous appeler.',
  dankeTitel: 'Votre liste de contrôle est en route',
  dankeSatz: 'Nous l’avons envoyée à votre adresse e-mail et vous contacterons par téléphone.',
  dankeListe: 'Voici ce qu’elle contient\u00a0:',
  dankeTitelOhneMail: 'Merci, nous avons bien reçu vos indications',
  dankeSatzOhneMail:
    'L’e-mail avec la liste de contrôle n’a pas pu être envoyé pour le moment. Nous vous appelons et vous l’envoyons.',

  fragen: [
    {
      id: 'stand',
      titel: 'Quelle est votre situation\u00a0?',
      mehrfach: false,
      optionen: [
        { id: 'allein', text: 'Personne seule' },
        { id: 'paar', text: 'Marié ou en partenariat enregistré' },
      ],
    },
    {
      id: 'kinder',
      titel: 'Avez-vous des enfants\u00a0?',
      mehrfach: false,
      optionen: [
        { id: 'kinderNein', text: 'Non' },
        { id: 'kinderJa', text: 'Oui' },
        { id: 'kinderBetreuung', text: 'Oui, avec crèche ou école à journée continue' },
      ],
    },
    {
      id: 'einkommen',
      titel: 'D’où provient votre revenu\u00a0?',
      mehrfach: true,
      optionen: [
        { id: 'angestellt', text: 'Emploi salarié' },
        { id: 'selbstaendig', text: 'Activité indépendante' },
        { id: 'rente', text: 'Rente AVS ou de caisse de pension' },
        { id: 'taggeld', text: 'Indemnités de chômage, de maladie ou d’accident' },
        { id: 'neben', text: 'Activité accessoire' },
      ],
    },
    {
      id: 'wohnen',
      titel: 'Comment vivez-vous\u00a0?',
      mehrfach: false,
      optionen: [
        { id: 'miete', text: 'En location' },
        { id: 'eigentum', text: 'Dans votre propre maison ou appartement' },
      ],
    },
    {
      id: 'vermoegen',
      titel: 'Que possédez-vous\u00a0?',
      mehrfach: true,
      optionen: [
        { id: 'wertschriften', text: 'Des titres ou un dépôt' },
        { id: 'krypto', text: 'Des cryptomonnaies' },
        { id: 'lebensversicherung', text: 'Une assurance-vie avec valeur de rachat' },
        { id: 'ausland', text: 'Un compte ou un immeuble à l’étranger' },
        { id: 'schulden', text: 'Des crédits ou des prêts' },
      ],
    },
    {
      id: 'vorsorge',
      titel: 'Qu’est-ce qui s’applique à l’année dernière\u00a0?',
      mehrfach: true,
      optionen: [
        { id: 's3a', text: 'Versement dans le 3e pilier a' },
        { id: 'pkEinkauf', text: 'Rachat dans la caisse de pension' },
        { id: 'kapitalbezug', text: 'Retrait de capital de la caisse de pension ou du 3e pilier a' },
      ],
    },
    {
      id: 'weiteres',
      titel: 'Y a-t-il eu d’autres dépenses ou événements\u00a0?',
      mehrfach: true,
      optionen: [
        { id: 'spenden', text: 'Dons' },
        { id: 'weiterbildung', text: 'Formation continue professionnelle' },
        { id: 'unterhalt', text: 'Pensions alimentaires' },
        { id: 'erbschaft', text: 'Héritage ou donation' },
        { id: 'umzug', text: 'Déménagement dans une autre commune' },
      ],
    },
  ],

  gruppen: [
    {
      titel: 'Général',
      unterlagen: [
        { text: 'Déclaration d’impôt avec code d’accès' },
        { text: 'Dernière taxation définitive' },
        { text: 'Indications sur les enfants et leur formation', wenn: ['kinderJa', 'kinderBetreuung'] },
        { text: 'Factures de crèche, d’école à journée continue ou de famille de jour', wenn: ['kinderBetreuung'] },
      ],
    },
    {
      titel: 'Revenu',
      unterlagen: [
        { text: 'Certificat de salaire, pour les couples des deux', wenn: ['angestellt'] },
        {
          text: 'Justificatifs des frais professionnels, par exemple l’abonnement pour le trajet au travail',
          wenn: ['angestellt', 'neben'],
        },
        { text: 'Comptes annuels avec bilan et compte de résultat', wenn: ['selbstaendig'] },
        { text: 'Décision de cotisations de la caisse de compensation AVS', wenn: ['selbstaendig'] },
        { text: 'Attestations de rente de l’AVS et de la caisse de pension', wenn: ['rente'] },
        { text: 'Attestations d’indemnités journalières', wenn: ['taggeld'] },
        { text: 'Certificats de salaire ou décomptes de l’activité accessoire', wenn: ['neben'] },
      ],
    },
    {
      titel: 'Fortune et dettes',
      unterlagen: [
        { text: 'Relevés de compte au 31 décembre avec attestation d’intérêts' },
        { text: 'Relevé de dépôt et relevé fiscal de la banque', wenn: ['wertschriften'] },
        { text: 'État des cryptomonnaies au 31 décembre', wenn: ['krypto'] },
        { text: 'Attestation de la valeur de rachat de l’assurance-vie', wenn: ['lebensversicherung'] },
        { text: 'Justificatifs des comptes et immeubles à l’étranger', wenn: ['ausland'] },
        { text: 'Attestation de dette avec les intérêts payés', wenn: ['schulden'] },
      ],
    },
    {
      titel: 'Propriété du logement',
      unterlagen: [
        { text: 'Attestation des intérêts hypothécaires', wenn: ['eigentum'] },
        { text: 'Factures d’entretien et de rénovation', wenn: ['eigentum'] },
        { text: 'Valeur officielle et valeur locative de l’immeuble', wenn: ['eigentum'] },
      ],
    },
    {
      titel: 'Prévoyance et assurances',
      unterlagen: [
        { text: 'Récapitulatif des primes de la caisse-maladie' },
        { text: 'Attestation de versement dans le 3e pilier a', wenn: ['s3a'] },
        { text: 'Confirmation de rachat de la caisse de pension', wenn: ['pkEinkauf'] },
        { text: 'Décompte du retrait de capital', wenn: ['kapitalbezug'] },
      ],
    },
    {
      titel: 'Autres déductions et événements',
      unterlagen: [
        { text: 'Attestations de dons', wenn: ['spenden'] },
        { text: 'Factures de formation continue', wenn: ['weiterbildung'] },
        { text: 'Justificatifs des pensions alimentaires', wenn: ['unterhalt'] },
        { text: 'Documents relatifs à l’héritage ou à la donation', wenn: ['erbschaft'] },
        { text: 'Date du déménagement et nouvelle adresse', wenn: ['umzug'] },
      ],
    },
  ],
}
