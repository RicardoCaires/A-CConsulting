/**
 * Déclaration de protection des données, traduction fidèle de `src/content/seiten/datenschutz.ts` (16.10.2026).
 * Seule la version allemande fait foi. Toute modification part du texte allemand (uniquement par Ricardo).
 */
import type { SeitenInhalt } from '@/content/seiten/typen'

export const datenschutz: SeitenInhalt = {
  meta: {
    title: 'Déclaration de protection des données',
    description:
      'Comment A&C Consulting GmbH traite les données personnelles — selon la loi suisse révisée sur la protection des données.',
  },
  banner: { themenzeile: 'PROTECTION DES DONNÉES', ueberschrift: 'Protection des données' },
  bloecke: [
    {
      art: 'text',
      id: 'verantwortlich',
      titel: { vor: 'Organe ', akzent: 'responsable' },
      absaetze: [
        'Seule la version allemande fait foi.',
        'Le responsable du traitement des données personnelles en lien avec ce site est A&C Consulting GmbH.',
        [{ company: 'sitz' }],
        'Pour toute question relative à la protection des données, adressez-vous à Ricardo Caires.',
      ],
    },
    {
      art: 'text',
      id: 'nicht',
      titel: { vor: 'Ce que ce site ', akzent: 'ne fait pas' },
      punkte: [
        'Ce site n’utilise pas de cookies.',
        'Il n’utilise aucun outil d’analyse, aucun pixel de suivi et aucun outil de mesure du comportement.',
        'Il n’intègre pas de polices, de vidéos ni de boutons provenant de serveurs tiers. Seule exception\u00a0: la carte Google Maps sur la page « À propos ».',
        'Il n’y a pas d’inscription, pas d’espace client et pas de newsletter.',
      ],
    },
    {
      art: 'text',
      id: 'besuch',
      titel: { vor: 'Lors de la ', akzent: 'visite', nach: ' de ce site' },
      absaetze: [
        'Lors de l’appel d’une page, votre navigateur transmet des informations techniques nécessaires à sa diffusion\u00a0: adresse IP, moment, adresse appelée, volume de données transmis et informations sur le navigateur et le système d’exploitation.',
        'Ces informations sont générées chez notre hébergeur. Elles servent au fonctionnement et à la sécurité du site — par exemple à la défense contre des attaques — et ne sont pas combinées avec d’autres données.',
        'Nous n’analysons pas ces informations et n’en tirons aucun profil.',
      ],
    },
    {
      art: 'text',
      id: 'hosting',
      titel: { akzent: 'Hébergement' },
      absaetze: [
        'Le site est exploité par Cloudflare, Inc. et diffusé via son réseau mondial.',
        'Cela signifie que les informations techniques mentionnées à la section 03 peuvent aussi être traitées hors de Suisse, selon le site par lequel passe votre requête.',
        'Cloudflare agit pour nous en tant que sous-traitant et ne peut utiliser les données que pour l’exploitation du site.',
        'Cette indication concerne uniquement la visite du site. Les documents et données issus d’un mandat sont traités séparément et ne passent pas par ce site.',
      ],
    },
    {
      art: 'text',
      id: 'google-maps',
      titel: { vor: 'Carte ', akzent: 'Google Maps' },
      absaetze: [
        'Sur la page « À propos », nous intégrons une carte de Google Maps (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irlande).',
        'Lors de l’appel de la page, votre navigateur établit une connexion avec des serveurs de Google\u00a0; votre adresse IP et des informations sur le navigateur sont notamment transmises à Google, y compris aux États-Unis.',
        'Nous utilisons la carte pour que vous trouviez facilement notre bureau. Vous trouverez de plus amples informations dans la déclaration de protection des données de Google sous policies.google.com/privacy.',
      ],
    },
    {
      art: 'text',
      id: 'kontakt',
      titel: { vor: 'Lorsque vous nous ', akzent: 'contactez' },
      absaetze: [
        'Si vous nous appelez ou nous écrivez un e-mail, nous traitons les informations que vous nous communiquez afin de répondre à votre demande.',
        'Il s’agit en règle générale de votre nom, de votre numéro de téléphone ou de votre adresse e-mail et de ce que vous nous communiquez.',
        'Nous exploitons nous-mêmes notre boîte e-mail. Elle est hébergée par Microsoft. Microsoft agit à cet égard en tant que sous-traitant et est lié par nos instructions.',
        'Les demandes qui n’aboutissent à aucun mandat sont supprimées dès qu’elles ne sont plus nécessaires.',
        'Il n’existe actuellement pas de formulaire de contact. Dès qu’un formulaire sera mis en ligne, nous compléterons préalablement la présente déclaration.',
        'Merci de ne pas nous envoyer par e-mail de données particulièrement sensibles — par exemple des données de santé, un numéro AVS ou des coordonnées bancaires. Pour l’échange de documents, nous mettons en place un canal protégé après le premier contact.',
      ],
    },
    {
      art: 'text',
      id: 'weitergabe',
      titel: { vor: 'Transmission à des ', akzent: 'tiers' },
      absaetze: [
        'Nous ne transmettons pas vos données à des tiers pour les vendre ou les utiliser à des fins publicitaires.',
        'Une transmission n’a lieu que si vous nous en chargez — par exemple à une compagnie d’assurance dans le cadre d’un mandat de courtage —, si la loi nous y oblige, ou à des sous-traitants qui agissent pour nous et sont liés par nos instructions.',
      ],
    },
    {
      art: 'text',
      id: 'rechte',
      titel: { vor: 'Vos ', akzent: 'droits' },
      absaetze: [
        'Vous avez le droit de demander des renseignements sur les données personnelles que nous traitons.',
        'Vous pouvez faire rectifier des données inexactes et demander l’effacement de données, pour autant que nous ne devions pas les conserver pour des raisons légales.',
        'Vous pouvez vous opposer au traitement et demander la remise de vos données dans un format courant.',
        'Pour une demande de renseignements, une communication sans forme particulière suffit. Nous pouvons vous demander une preuve de votre identité.',
        'Si vous n’êtes pas d’accord avec notre réponse, vous pouvez vous adresser au Préposé fédéral à la protection des données et à la transparence (PFPDT).',
      ],
    },
    {
      art: 'text',
      id: 'sicherheit',
      titel: { akzent: 'Sécurité' },
      absaetze: [
        'Le site est diffusé exclusivement de manière chiffrée.',
        'Nous prenons des mesures techniques et organisationnelles appropriées pour protéger vos données contre la perte et l’accès non autorisé. Personne ne peut garantir une sécurité totale lors de la transmission par Internet.',
      ],
    },
    {
      art: 'text',
      id: 'aenderungen',
      titel: { akzent: 'Modifications' },
      absaetze: [
        'Nous adaptons cette déclaration lorsque le site ou la situation juridique change.',
        'Fait foi la version publiée sur cette page au moment considéré.',
        'État\u00a0: 09.09.2026',
      ],
    },
  ],
}
