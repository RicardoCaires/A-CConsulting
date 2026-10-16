/** Fiduciaire, version française de `src/content/seiten/treuhand.ts` (16.10.2026). */
import type { SeitenInhalt } from '@/content/seiten/typen'

export const treuhand: SeitenInhalt = {
  meta: {
    title: 'Comptabilité, salaires et bouclement pour indépendants et PME',
    description:
      'Vous fournissez les documents, nous tenons la comptabilité en continu. Vous avez un interlocuteur fixe et savez à tout moment ce qui vient ensuite.',
  },
  banner: { themenzeile: 'FIDUCIAIRE', ueberschrift: 'Comptabilité, salaires et bouclement pour indépendants et PME' },
  bloecke: [
    {
      art: 'listen',
      id: 'leistungen',
      titel: { vor: 'Ce que nous ', akzent: 'prenons en charge' },
      listen: [
        {
          titel: 'Comptabilité et bouclement',
          ziel: { ziel: 'treuhand', anker: 'buchhaltung' },
          eintraege: [
            {
              text: 'Comptabilité courante',
              zusatz: 'Saisir et comptabiliser les pièces.',
              ziel: 'treuhand',
              anker: 'buchhaltung',
            },
            { text: 'Débiteurs et créanciers', zusatz: 'Postes ouverts et délais de paiement.' },
            {
              text: 'Bouclement annuel',
              zusatz: 'Avec annexe et entretien.',
            },
          ],
        },
        {
          titel: 'Salaires et TVA',
          eintraege: [
            {
              text: 'Gestion des salaires',
              zusatz: 'Décomptes de salaire, certificats de salaire, assurances sociales.',
            },
            { text: 'TVA', zusatz: 'Décomptes et délais.' },
            {
              text: 'Administration d’entreprise',
              zusatz: 'Trafic des paiements, rappels, autorités.',
            },
          ],
        },
        {
          titel: 'Création, changement, impôts',
          eintraege: [
            {
              text: 'Création d’entreprise',
              zusatz: 'De la forme juridique à la première comptabilité.',
              ziel: 'treuhand',
              anker: 'firmengruendung',
            },
            {
              text: 'Changer de fiduciaire',
              zusatz: 'Nous reprenons la situation existante.',
              ziel: 'treuhand',
              anker: 'wechsel',
            },
            {
              text: 'Déclaration d’impôt',
              zusatz: 'Sur la base du bouclement.',
              ziel: 'steuern',
              anker: 'firmen',
            },
          ],
        },
      ],
    },
    {
      art: 'fluss',
      id: 'buchhaltung',
      titel: { vor: 'Votre ', akzent: 'comptabilité', nach: ' sans saisie préalable' },
      stufen: [
        {
          titel: 'Vous fournissez',
          punkte: [
            'Relevés bancaires et de caisse',
            'Factures clients et fournisseurs',
            'Frais et justificatifs en espèces',
            'Documents du personnel, si vous avez des collaborateurs',
          ],
        },
        {
          titel: 'Nous nous chargeons',
          punkte: ['Classer et comptabiliser', 'Salaires et TVA', 'Garder les délais à l’œil'],
        },
        {
          titel: 'Vous recevez',
          punkte: ['Rapports à dates fixes', 'Bouclement annuel', 'Base pour la déclaration d’impôt'],
        },
      ],
      nachsatz: 'Pas de logiciel, pas de saisie préalable. En numérique ou sur papier.',
    },
    {
      art: 'schritte',
      id: 'ablauf',
      titel: { vor: 'Comment ', akzent: 'commence', nach: ' la collaboration' },
      schritte: [
        {
          titel: 'Premier entretien',
          text: 'Qu’est-ce qui fonctionne aujourd’hui, que souhaitez-vous confier\u00a0?',
        },
        {
          titel: 'Offre et étendue des prestations',
          text: 'Par écrit\u00a0: ce que nous reprenons, ce qui reste chez vous.',
        },
        {
          titel: 'Reprise et démarrage',
          text: 'Nous reprenons la situation existante.',
        },
        {
          titel: 'Suivi courant',
          text: 'Vous fournissez, nous comptabilisons et nous vous contactons s’il manque quelque chose.',
        },
      ],
      nachsatz: 'Le premier entretien est gratuit.',
    },
    {
      art: 'vergleich',
      id: 'firmengruendung',
      titel: { vor: 'Entreprise individuelle ', akzent: 'ou', nach: ' Sàrl\u00a0?' },
      einleitung: 'Nous clarifions la forme juridique et coordonnons la banque et le notariat.',
      spalten: [
        {
          titel: 'Entreprise individuelle',
          untertitel: 'Démarrer simplement',
          zeilen: [
            { merkmal: 'Capital minimum', wert: 'Aucun n’est prescrit' },
            { merkmal: 'Responsabilité', wert: 'Personnelle, y compris sur la fortune privée' },
            { merkmal: 'Création', wert: 'Sans acte authentique' },
            {
              merkmal: 'Registre du commerce',
              wert: 'Obligatoire pour une activité commerciale dès CHF 100\'000 de chiffre d’affaires',
            },
            { merkmal: 'Statut juridique', wert: 'Pas de personnalité juridique propre' },
          ],
          passt: 'Convient si vous démarrez seul et avec un risque limité.',
        },
        {
          titel: 'Sàrl',
          untertitel: 'Construire séparément',
          zeilen: [
            { merkmal: 'Capital minimum', wert: 'CHF 20\'000, entièrement libéré' },
            {
              merkmal: 'Responsabilité',
              wert: 'En principe uniquement la fortune sociale',
            },
            { merkmal: 'Création', wert: 'Acte authentique et statuts' },
            { merkmal: 'Registre du commerce', wert: 'Toujours obligatoire' },
            { merkmal: 'Statut juridique', wert: 'Personne morale propre' },
          ],
          passt: 'Convient si vous voulez séparer privé et entreprise ou fonder à plusieurs.',
        },
      ],
      nachsatz:
        'Comparaison succincte selon le portail PME de la Confédération. La forme juridique adaptée doit être examinée au cas par cas.',
      knoepfe: [{ text: 'Discuter de la forme juridique', ziel: 'kontakt' }],
    },
    {
      art: 'text',
      id: 'wechsel',
      titel: { vor: 'Vous avez déjà une ', akzent: 'fiduciaire', nach: '\u00a0?' },
      absaetze: ['Un changement est possible aussi en cours d’année, le plus simple étant en début d’année.'],
      punkte: [
        'Discret\u00a0: votre fiduciaire actuelle ne l’apprend que lorsque vous nous mandatez.',
        'Résiliation\u00a0: nous la préparons pour vous.',
        'Remise\u00a0: nous reprenons la situation existante.',
      ],
      knoepfe: [{ text: 'Discuter de votre situation', ziel: 'kontakt', art: 'zweit' }],
    },
    {
      art: 'fragen',
      id: 'fragen',
      titel: { vor: 'Questions ', akzent: 'fréquentes' },
      fragen: [
        {
          frage: 'Puis-je commencer en cours d’année\u00a0?',
          antwort: 'Oui. Nous reprenons la situation existante et poursuivons à partir de là.',
        },
        {
          frage: 'Qui est mon interlocuteur\u00a0?',
          antwort:
            'Une personne fixe qui suit votre dossier. Tous deux s’occupent des clients en assurances\u00a0; les mandats fiduciaires sont suivis par Ricardo Caires.',
        },
        {
          frage: 'Qu’advient-il de mes données\u00a0?',
          antwort: 'Vos données sont traitées en Suisse et de manière confidentielle.',
        },
      ],
    },
    {
      art: 'kontakt',
      titel: { vor: 'Comment nous ', akzent: 'joindre' },
      satz: 'Lors du premier entretien, nous regardons ce qui se trouve chez vous aujourd’hui. Il est gratuit.',
      beschriftungen: { telefon: 'Téléphone', email: 'E-mail', buero: 'Bureau' },
    },
  ],
}
