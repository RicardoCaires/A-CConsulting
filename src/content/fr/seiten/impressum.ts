/**
 * Mentions légales, traduction fidèle de `src/content/seiten/impressum.ts` (16.10.2026).
 * Seule la version allemande fait foi. Raison sociale, siège, IDE et numéro FINMA viennent de `src/lib/company.ts`.
 */
import type { SeitenInhalt } from '@/content/seiten/typen'

export const impressum: SeitenInhalt = {
  meta: {
    title: 'Mentions légales',
    description:
      'Indications obligatoires d’A&C Consulting GmbH\u00a0: raison sociale, siège, registre du commerce, enregistrement FINMA et contact.',
  },
  banner: { themenzeile: 'MENTIONS LÉGALES', ueberschrift: 'Mentions légales' },
  bloecke: [
    {
      art: 'text',
      id: 'verantwortlich',
      titel: { vor: 'Responsable de ce ', akzent: 'site' },
      absaetze: [
        'Seule la version allemande fait foi.',
        [{ company: 'firma' }],
        [{ company: 'sitz' }],
        'Société à responsabilité limitée, inscrite au registre du commerce du canton de Berne.',
        ['IDE et numéro du registre du commerce\u00a0: ', { company: 'uid' }],
      ],
    },
    {
      art: 'kontakt',
      id: 'kontakt',
      titel: { akzent: 'Contact' },
      satz: 'Le téléphone et l’e-mail figurent au bas de chaque page et sur la page de contact.',
      beschriftungen: { telefon: 'Téléphone', email: 'E-mail', buero: 'Adresse' },
      ohneKnopf: true,
    },
    {
      art: 'text',
      id: 'vertretung',
      titel: { vor: 'Personnes autorisées à ', akzent: 'représenter' },
      absaetze: ['Gérant et coassocié\u00a0: Octavio Nuno Gouveia Andrade', 'Coassocié\u00a0: Ricardo Caires'],
    },
    {
      art: 'text',
      id: 'aufsicht',
      titel: { akzent: 'Surveillance', nach: ' et enregistrement' },
      absaetze: [
        'A&C Consulting GmbH est inscrite en tant qu’intermédiaire d’assurance au registre de l’Autorité fédérale de surveillance des marchés financiers FINMA.',
        ['Numéro de registre\u00a0: ', { company: 'finma' }],
        [
          'L’inscription peut être consultée publiquement\u00a0: ',
          {
            url: 'https://www.finma.ch/de/bewilligung/versicherungsvermittlung/registersuche/F01568855',
            label: 'Inscription au registre de la FINMA',
          },
        ],
        'Autorité de surveillance compétente\u00a0: Autorité fédérale de surveillance des marchés financiers FINMA, Laupenstrasse 27, 3003 Bern.',
        'En tant qu’intermédiaire d’assurance non lié, nous défendons les intérêts de nos clientes et clients et non ceux d’une compagnie d’assurance.',
      ],
    },
    {
      art: 'text',
      id: 'berufsbezeichnung',
      titel: { akzent: 'Désignation professionnelle' },
      absaetze: [
        'Courtier en assurances ainsi que fiduciaire et impôts. Les désignations professionnelles ne sont pas protégées en Suisse, à l’exception des brevets fédéraux, que nous ne détenons pas.',
      ],
    },
    {
      art: 'text',
      id: 'haftung',
      titel: { vor: 'Responsabilité quant aux ', akzent: 'contenus' },
      absaetze: [
        'Nous élaborons les contenus de ce site avec soin. Nous ne garantissons toutefois pas leur exactitude, leur exhaustivité ni leur actualité.',
        'Les informations de ce site sont de nature générale. Elles ne remplacent pas un conseil individuel et ne fondent aucun mandat.',
        'Les situations juridiques, délais et seuils changent. Seule fait foi la version de la disposition en vigueur au moment considéré.',
      ],
    },
    {
      art: 'text',
      id: 'verweise',
      titel: { vor: 'Responsabilité quant aux ', akzent: 'liens' },
      absaetze: [
        'Ce site contient des liens vers des sites de tiers. Nous n’avons aucune influence sur leurs contenus et n’en assumons aucune responsabilité.',
        'Le contenu d’une page liée relève de la responsabilité de son exploitante ou exploitant.',
      ],
    },
    {
      art: 'text',
      id: 'urheberrecht',
      titel: { akzent: 'Droit d’auteur' },
      absaetze: [
        'Les textes, images, graphiques et le logo de ce site sont protégés par le droit d’auteur.',
        'Toute utilisation au-delà des limites du droit d’auteur requiert notre accord écrit.',
      ],
    },
  ],
}
