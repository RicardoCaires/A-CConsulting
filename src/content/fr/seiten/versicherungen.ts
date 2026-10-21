/**
 * Assurances, version française de `src/content/seiten/versicherungen.ts` (16.10.2026).
 * Les ancres `privatpersonen`, `unternehmen` et `schadenfall` restent inchangées.
 */
import type { SeitenInhalt } from '@/content/seiten/typen'

export const versicherungen: SeitenInhalt = {
  meta: {
    title: 'Assurances pour particuliers et entreprises',
    description:
      'Nous examinons vos contrats existants, comparons des solutions adaptées parmi les offres et compagnies qui nous sont accessibles et restons votre interlocuteur, aussi en cas de sinistre.',
  },
  banner: { themenzeile: 'ASSURANCES', ueberschrift: 'Assurances pour particuliers et entreprises' },
  bloecke: [
    {
      art: 'geschaeftsmodell',
      id: 'modell',
      titel: { vor: 'Nous ', akzent: 'vous', nach: ' représentons, pas l’assurance' },
      sie: { titel: 'Vous', text: 'Particulier ou entreprise' },
      ac: {
        titel: 'A&C Consulting',
        punkte: ['Clarifier les besoins', 'Comparer les offres', 'Formuler une recommandation', 'Accompagner en cas de sinistre'],
      },
      markt: {
        titel: 'Compagnies d’assurance',
        gesellschaften: [
          { bild: 'partner_allianz', name: 'Allianz' },
          { bild: 'partner_axa', name: 'AXA' },
          { bild: 'partner_mobiliar', name: 'La Mobilière' },
          { bild: 'partner_generali', name: 'Generali' },
          { bild: 'partner_gvb', name: 'GVB' },
          { bild: 'partner_helvetia', name: 'Helvetia' },
          { bild: 'partner_orion', name: 'Orion' },
          { bild: 'partner_smile', name: 'Smile' },
          { bild: 'partner_vaudoise', name: 'Vaudoise' },
        ],
      },
      hin: [
        { hin: 'Mandat', zurueck: 'Recommandation' },
        { hin: 'Demande', zurueck: 'Offres' },
      ],
      fakten: [
        { titel: 'Vous décidez', text: 'Nous mettons en œuvre ce que vous choisissez.' },
        {
          titel: 'Gratuit pour vous',
          text: 'Dans le mandat de courtage, la compagnie nous rémunère par une commission de courtage.',
        },
        { titel: 'Nous restons', text: 'Aussi après la conclusion et en cas de sinistre.' },
      ],
    },
    {
      art: 'listen',
      id: 'bereiche',
      titel: { vor: 'Ce que nous ', akzent: 'examinons', nach: ' pour vous' },
      darstellung: 'kacheln',
      listen: [
        {
          titel: 'Pour les particuliers',
          id: 'privatpersonen',
          eintraege: [
            { text: 'Assurance-maladie de base et complémentaire' },
            { text: 'Ménage et responsabilité civile' },
            { text: 'Véhicule à moteur' },
            { text: 'Vie et 3e pilier a' },
            { text: 'Protection juridique' },
          ],
          knopf: { text: 'Demander une offre', href: 'offerte', art: 'zweit' },
        },
        {
          titel: 'Pour les entreprises',
          id: 'unternehmen',
          eintraege: [
            { text: 'LPP' },
            { text: 'LAA et LAA complémentaire' },
            { text: 'Indemnités journalières maladie' },
            { text: 'Responsabilité civile entreprise' },
            { text: 'Assurance de choses' },
            { text: 'Protection juridique' },
          ],
          knopf: { text: 'Demander une offre', href: 'offerte', art: 'zweit' },
        },
      ],
    },
    {
      art: 'matrix',
      id: 'ueberpruefung',
      titel: { vor: 'Quand un ', akzent: 'contrôle', nach: ' vaut la peine' },
      einleitung: 'Lors de ces événements, plus d’une police peut être concernée.',
      gruppen: [
        {
          titel: 'Privé',
          spalten: ['Caisse-maladie', 'Ménage et responsabilité civile', 'Véhicule à moteur', 'Vie et 3e pilier a'],
          zeilen: [
            { titel: 'Déménagement', treffer: [0, 1, 2] },
            { titel: 'Mariage', treffer: [1, 3] },
            { titel: 'Enfant', treffer: [0, 1, 3] },
            { titel: 'Propriété du logement', treffer: [1, 3] },
            { titel: 'Changement d’emploi', treffer: [0, 3] },
            { titel: 'Retraite', treffer: [0, 3] },
          ],
        },
        {
          titel: 'Dans l’entreprise',
          spalten: ['LAA', 'LPP', 'Indemnités journalières', 'Responsabilité civile entreprise', 'Assurance de choses'],
          zeilen: [
            { titel: 'Création', treffer: [3, 4] },
            { titel: 'Premier engagement', treffer: [0, 1, 2] },
            { titel: 'Nouveaux véhicules ou locaux', treffer: [3, 4] },
            { titel: 'Croissance', treffer: [0, 1, 2, 3, 4] },
          ],
        },
      ],
      nachsatz:
        'Un aperçu, pas une liste exhaustive. Ce qui vous concerne, nous l’examinons ensemble.',
    },
    {
      art: 'schritte',
      id: 'pruefung',
      titel: { vor: 'Comment se déroule une ', akzent: 'analyse de contrats' },
      schritte: [
        {
          titel: 'Passer en revue les documents',
          text: 'Vous nous remettez vos polices. Nous les passons en revue.',
        },
        {
          titel: 'Analyser',
          text: 'Nous montrons les lacunes, les doublons et les primes qui ne correspondent pas aux prestations.',
        },
        {
          titel: 'Proposition',
          text: 'Vous recevez un aperçu avec une recommandation. Vous décidez.',
        },
      ],
      nachsatz: 'Vous n’avez rien à résilier pour cela. Nous regardons d’abord ce que vous avez.',
    },
    {
      art: 'textBild',
      id: 'schadenfall',
      titel: { vor: 'Là ', akzent: 'pour vous', nach: ', aussi après la conclusion' },
      punkte: [
        'Modifications\u00a0: adresse ou famille – nous l’annonçons à l’assurance.',
        'Primes\u00a0: nous examinons les adaptations quand elles arrivent.',
        'Sinistre\u00a0: nous l’enregistrons, l’annonçons et accompagnons le règlement.',
        'Urgence\u00a0: joignables aussi en dehors des heures de bureau.',
      ],
      knoepfe: [{ text: 'Annoncer un sinistre par téléphone', href: 'telefon' }],
      bild: {
        art: 'versicherer',
        hinweis: 'Pour annoncer un sinistre, cliquez sur votre compagnie.',
        gesellschaften: [
          {
            bild: 'partner_allianz',
            name: 'Allianz',
            url: 'https://www.allianz.ch/de/privatkunden/services/meine-versicherung/schaden-melden.html',
          },
          {
            bild: 'partner_axa',
            name: 'AXA',
            url: 'https://www.axa.ch/de/privatkunden/schaden/rund-um-den-schaden/schaden-melden.html',
          },
          {
            bild: 'partner_mobiliar',
            name: 'La Mobilière',
            url: 'https://www.mobiliar.ch/versicherungen-und-vorsorge/services/schaden-melden',
          },
          {
            bild: 'partner_generali',
            name: 'Generali',
            url: 'https://www.generali.ch/privatkunden/services/schaden-online-melden',
          },
          { bild: 'partner_gvb', name: 'GVB', url: 'https://schaden.gvb.ch/' },
          {
            bild: 'partner_helvetia',
            name: 'Helvetia',
            url: 'https://www.helvetia.com/ch/web/de/services/schaden-und-leistung/schaden-melden-privatkunden.html',
          },
          { bild: 'partner_orion', name: 'Orion', url: 'https://www.orion.ch/de/rechtsfall-melden' },
          {
            bild: 'partner_smile',
            name: 'Smile',
            url: 'https://www.smile-insurances.com/ch/main/de/home/service/schadenmeldung.html',
          },
          { bild: 'partner_vaudoise', name: 'Vaudoise', url: 'https://www.vaudoise.ch/de/service-center/schadenmeldung' },
        ],
      },
    },
    {
      art: 'fragen',
      id: 'fragen',
      titel: { vor: 'Questions ', akzent: 'fréquentes' },
      fragen: [
        {
          frage: 'Le conseil me coûte-t-il quelque chose\u00a0?',
          antwort:
            'Pas dans le cadre du mandat de courtage. Les compagnies nous rémunèrent par une commission de courtage. Si une mission va au-delà, nous convenons d’honoraires au préalable.',
        },
        {
          frage: 'Travaillez-vous avec toutes les compagnies\u00a0?',
          antwort:
            'Nous ne sommes liés à aucune compagnie et comparons pour vous les offres d’un large choix de compagnies. Laquelle convient dans votre cas, nous vous le disons dans la proposition.',
        },
        {
          frage: 'Suis-je lié à quelque chose si je vous mandate\u00a0?',
          antwort: 'Le mandat de courtage est conclu pour une durée indéterminée et peut être résilié en tout temps par chacune des parties.',
        },
      ],
    },
    {
      art: 'kontakt',
      titel: { vor: 'Faites examiner vos ', akzent: 'contrats' },
      satz: 'Un premier entretien n’engage à rien. Apportez ce que vous avez.',
      beschriftungen: { telefon: 'Téléphone', email: 'E-mail', buero: 'Bureau' },
    },
  ],
}
