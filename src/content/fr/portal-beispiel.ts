/**
 * Vues d’exemple du portail clients, version française de `src/content/seiten/portal-beispiel.ts` (16.10.2026).
 * Personne, compagnies, contrats, numéros et montants sont fictifs. Identifiants (`id`, `seite`, `formular`,
 * `zeichen`, `art`, `key`, `typ`, `feld`) et montants inchangés. Si l’original change, mettre à jour ici.
 */
import type {
  portalAnfragen as DeAnfragen,
  portalBeispiel as DeBeispiel,
  portalDemo as DeDemo,
  portalFenster as DeFenster,
  portalPolice as DePolice,
  portalRahmen as DeRahmen,
  portalUnterlagen as DeUnterlagen,
  portalVersicherungen as DeVersicherungen,
} from '@/content/seiten/portal-beispiel'
import type { Uebersetzt } from '@/lib/sprache'

export const portalBeispiel: Uebersetzt<typeof DeBeispiel> = {
  titel: 'Mes assurances',
  untertitel: 'Vue d’exemple',
  diagrammTitel: 'Primes par an',
  segmente: [
    { text: 'Santé', betrag: 4200 },
    { text: 'Véhicule', betrag: 1350 },
    { text: 'Logement', betrag: 620 },
    { text: 'Protection juridique', betrag: 310 },
  ],
  hinweis: 'Exemple avec des chiffres fictifs.',
}

export const portalRahmen: Uebersetzt<typeof DeRahmen> = {
  adresse: 'crm.ac-co.ch/portal',
  navigation: ['Accueil', 'Assurances', 'Demandes'],
  hinweis: 'Vue d’exemple avec des données fictives.',
}

export const portalFenster: Uebersetzt<typeof DeFenster> = {
  vorzeile: 'Votre portail clients',
  gruss: 'Bonjour Madame Exemple',
  satz: 'Ici, vous voyez vos assurances et nous joignez directement.',
  kennzahlen: [
    { zahl: '4', text: 'contrats en cours', link: 'Voir' },
    { zahl: '4', text: 'compagnies' },
  ],
  termin: { titel: 'Prochain rendez-vous', text: 'Aucun pour l’instant', knopf: 'Prendre rendez-vous' },
  ringTitel: 'Vos coûts d’assurance par an',
  proJahr: 'par an',
  segmente: [
    { text: 'Assurance-maladie', betrag: 4200 },
    { text: 'Véhicule à moteur', betrag: 1350 },
    { text: 'Ménage et responsabilité civile privée', betrag: 620 },
    { text: 'Protection juridique', betrag: 310 },
  ],
}

export const portalVersicherungen: Uebersetzt<typeof DeVersicherungen> = {
  titel: 'Mes assurances',
  einleitung: 'Cliquez sur un contrat pour en voir les détails et télécharger la police.',
  gruppe: 'Suivi par A&C',
  angewaehlt: 1,
  policen: [
    { name: 'Assurance-maladie', gesellschaft: 'Assurance Exemple SA', zeile: 'Police KV-100100 · 2 documents' },
    { name: 'Véhicule à moteur', gesellschaft: 'Assurance Exemple SA', zeile: 'Police MF-100300 · 1 document' },
    {
      name: 'Ménage et responsabilité civile privée',
      gesellschaft: 'Assurance Exemple SA',
      zeile: 'Police BV-100200 · 1 document',
    },
  ],
}

export const portalPolice: Uebersetzt<typeof DePolice> = {
  zurueck: 'Toutes les assurances',
  name: 'Véhicule à moteur',
  gesellschaft: 'Assurance Exemple SA',
  status: 'en vigueur',
  knopf: 'Télécharger la police',
  titel: 'Ce qui est assuré',
  leistungen: [
    { name: 'Responsabilité civile véhicule à moteur', zusatz: null, wert: "CHF 100'000'000" },
    { name: 'Casco partielle', zusatz: 'Franchise CHF 200', wert: null },
    { name: 'Dommages de parking', zusatz: 'Franchise CHF 500', wert: null },
  ],
}

export const portalAnfragen: Uebersetzt<typeof DeAnfragen> = {
  titel: 'Demandes',
  wahl: ['Demander une offre', 'Demander un rappel', 'Prendre rendez-vous', 'Annoncer une modification', 'Envoyer un message'],
  bisher: 'Vos demandes précédentes',
  anfragen: [
    { betreff: 'Demande d’offre véhicule à moteur', datum: '12.10.2026', stand: 'en traitement', art: 'navy' },
    { betreff: 'Demande de rappel', datum: '14.10.2026', stand: 'demandé', art: 'offen' },
    { betreff: 'Souhait de rendez-vous', datum: '02.10.2026', stand: 'réglé', art: 'gruen' },
  ],
}

export const portalUnterlagen: Uebersetzt<typeof DeUnterlagen> = {
  zurueck: 'Toutes les assurances',
  name: 'Ménage et responsabilité civile privée',
  gesellschaft: 'Assurance Exemple SA',
  status: 'en vigueur',
  knopf: 'Télécharger la police',
  titel: 'Documents relatifs à ce contrat',
  dokumente: [
    { name: 'Police 2026', zeile: 'Police · 01.01.2026 · 245 KB', knopf: 'Télécharger la police', haupt: true },
    { name: 'Avenant changement de logement', zeile: 'Avenant · 15.03.2026 · 120 KB', knopf: 'Télécharger', haupt: false },
  ],
}

export const portalDemo: Uebersetzt<typeof DeDemo> = {
  navigation: [
    { seite: 'start', text: 'Accueil' },
    { seite: 'versicherungen', text: 'Assurances' },
    { seite: 'anfragen', text: 'Demandes' },
    { seite: 'angaben', text: 'Mes données' },
  ],
  bereiche: 'Rubriques',
  zurStart: 'Vers la page d’accueil',
  band: 'Portail d’exemple avec des données fictives – cliquez librement. Rien n’est envoyé.',
  meldungSenden: 'Dans le portail d’exemple, rien n’est envoyé. Dans le vrai portail, votre demande nous serait maintenant parvenue.',
  meldungLaden: 'Le portail d’exemple ne contient pas de fichiers. Dans le vrai portail, vous téléchargez ici le fichier PDF.',
  meldungAngabe: 'Dans le portail d’exemple, rien n’est envoyé. Dans le vrai portail, nous reprenons votre modification.',
  schliessen: 'Fermer la remarque',

  start: {
    vorzeile: 'Votre portail clients',
    gruss: 'Bonjour Madame Exemple',
    satz: 'Ici, vous voyez vos assurances et nous joignez directement.',
    vertraege: 'contrats en cours',
    gesellschaften: 'compagnies',
    ansehen: 'Voir',
    termin: { titel: 'Prochain rendez-vous', text: 'Aucun pour l’instant', knopf: 'Prendre rendez-vous' },
    ringTitel: 'Vos coûts d’assurance par an',
    proJahr: 'par an',
    tun: 'Que souhaitez-vous faire\u00a0?',
    kacheln: [
      {
        zeichen: 'schild',
        titel: 'Mes assurances',
        text: 'Contrats, couvertures et polices à télécharger',
        seite: 'versicherungen',
        formular: null,
      },
      { zeichen: 'dokument', titel: 'Demander une offre', text: 'Pour une assurance nouvelle ou meilleure', seite: 'anfragen', formular: 'offerte' },
      { zeichen: 'telefon', titel: 'Demander un rappel', text: 'Nous vous appelons à l’heure souhaitée', seite: 'anfragen', formular: 'rueckruf' },
      { zeichen: 'kalender', titel: 'Prendre rendez-vous', text: 'Au bureau ou par téléphone', seite: 'anfragen', formular: 'termin' },
      { zeichen: 'person', titel: 'Mes données', text: 'Modifier l’adresse, le téléphone ou l’e-mail', seite: 'angaben', formular: null },
      { zeichen: 'nachricht', titel: 'Envoyer un message', text: 'Une question ou une demande', seite: 'anfragen', formular: 'nachricht' },
    ],
    offenEine: 'Une demande est ouverte',
    offenMehr: 'demandes sont ouvertes',
    alleAnfragen: 'Voir toutes les demandes',
  },

  versicherungen: {
    titel: 'Mes assurances',
    einleitung: 'Cliquez sur un contrat pour en voir les détails et télécharger la police.',
    gruppe: 'Suivi par A&C',
    unterlage: 'document',
    unterlagen: 'documents',
    stand: 'Se fonde sur les données saisies chez A&C. Fait foi la police de la compagnie concernée.',
  },

  police: {
    zurueck: 'Toutes les assurances',
    status: 'en vigueur',
    herunterladen: 'Télécharger la police',
    laden: 'Télécharger',
    vertrag: 'Contrat',
    versichert: 'Ce qui est assuré',
    versichertHinweis:
      'Est indiqué ce qui est saisi chez nous. S’il manque une prestation de votre police, merci de nous le signaler.',
    unterlagen: 'Documents relatifs à ce contrat',
    aendern: 'Annoncer une modification de ce contrat',
    frage: 'Question sur ce contrat',
    rueckruf: 'Demander un rappel',
    massgebend: 'Fait foi la police de la compagnie. Les indications ici proviennent de notre saisie.',
    angaben: {
      gesellschaft: 'Compagnie',
      versicherung: 'Assurance',
      nummer: 'Numéro de police',
      laufzeit: 'Durée',
      verfall: 'Échéance principale',
      praemie: 'Prime',
    },
  },

  policen: [
    {
      id: 'kv',
      name: 'Assurance-maladie',
      sparte: 'Assurance de base et complémentaire',
      gesellschaft: 'Caisse-maladie Exemple',
      nummer: 'KV-100100',
      laufzeit: 'du 01.01.2026 au 31.12.2026',
      verfall: '31 décembre',
      praemie: 'CHF 350.00 par mois',
      jahr: 4200,
      leistungen: [
        { name: 'Assurance de base', zusatz: 'Franchise CHF 1’500', wert: null },
        { name: 'Hospitalisation demi-privée', zusatz: null, wert: null },
        { name: 'Médecine alternative', zusatz: '80 % des coûts', wert: null },
      ],
      objekt: null,
      dokumente: [
        { name: 'Police 2026', zeile: 'Police · 01.01.2026 · 210 KB', police: true },
        { name: 'Carte d’assuré', zeile: 'Carte · 01.01.2026 · 85 KB', police: false },
      ],
    },
    {
      id: 'mf',
      name: 'Véhicule à moteur',
      sparte: 'Véhicule à moteur',
      gesellschaft: 'Assurance Exemple SA',
      nummer: 'MF-100300',
      laufzeit: 'du 01.03.2025 au 28.02.2028',
      verfall: '1er mars',
      praemie: 'CHF 1’350.00 par an',
      jahr: 1350,
      leistungen: [
        { name: 'Responsabilité civile véhicule à moteur', zusatz: null, wert: "CHF 100'000'000" },
        { name: 'Casco partielle', zusatz: 'Franchise CHF 200', wert: null },
        { name: 'Dommages de parking', zusatz: 'Franchise CHF 500', wert: null },
      ],
      objekt: {
        titel: 'Véhicule\u00a0: break exemple',
        angaben: [
          { name: '1re mise en circulation', wert: '03.2021' },
          { name: 'Prix catalogue', wert: 'CHF 42’000.00' },
          { name: 'Conductrice principale', wert: 'Anna Exemple' },
        ],
      },
      dokumente: [{ name: 'Police 2025', zeile: 'Police · 01.03.2025 · 245 KB', police: true }],
    },
    {
      id: 'hr',
      name: 'Ménage et responsabilité civile privée',
      sparte: 'Ménage et responsabilité civile privée',
      gesellschaft: 'Assurance Modèle SA',
      nummer: 'BV-100200',
      laufzeit: 'du 01.04.2024 au 31.03.2027',
      verfall: '1er avril',
      praemie: 'CHF 620.00 par an',
      jahr: 620,
      leistungen: [
        { name: 'Ménage', zusatz: 'Franchise CHF 200', wert: 'CHF 80’000.00' },
        { name: 'Responsabilité civile privée', zusatz: null, wert: 'CHF 5’000’000.00' },
        { name: 'Vol simple à l’extérieur', zusatz: null, wert: 'CHF 3’000.00' },
      ],
      objekt: null,
      dokumente: [
        { name: 'Police 2024', zeile: 'Police · 01.04.2024 · 230 KB', police: true },
        { name: 'Avenant changement de logement', zeile: 'Avenant · 15.03.2026 · 120 KB', police: false },
      ],
    },
    {
      id: 'rs',
      name: 'Protection juridique',
      sparte: 'Protection juridique privée et circulation',
      gesellschaft: 'Protection juridique Exemple SA',
      nummer: 'RS-100400',
      laufzeit: 'du 01.01.2026 au 31.12.2028',
      verfall: '1er janvier',
      praemie: 'CHF 310.00 par an',
      jahr: 310,
      leistungen: [
        { name: 'Protection juridique privée', zusatz: null, wert: 'CHF 600’000.00' },
        { name: 'Protection juridique circulation', zusatz: null, wert: 'CHF 600’000.00' },
      ],
      objekt: null,
      dokumente: [{ name: 'Police 2026', zeile: 'Police · 01.01.2026 · 190 KB', police: true }],
    },
  ],

  anfragen: {
    titel: 'Demandes',
    waehlen: 'Choisissez ci-dessus de quoi il s’agit.',
    bisher: 'Vos demandes précédentes',
    formulare: [
      { formular: 'offerte', zeichen: 'dokument', titel: 'Demander une offre', text: 'Avec les indications dont une compagnie a besoin' },
      { formular: 'rueckruf', zeichen: 'telefon', titel: 'Demander un rappel', text: 'Nous vous appelons' },
      { formular: 'termin', zeichen: 'kalender', titel: 'Prendre rendez-vous', text: 'Au bureau ou par téléphone' },
      { formular: 'vertrag', zeichen: 'schild', titel: 'Annoncer une modification', text: 'Concernant un contrat existant' },
      { formular: 'nachricht', zeichen: 'nachricht', titel: 'Envoyer un message', text: 'Question ou demande' },
    ],
    liste: [
      {
        betreff: 'Demande d’offre véhicule à moteur',
        datum: '12.10.2026',
        stand: 'en traitement',
        art: 'navy',
        text: 'Merci d’établir une offre comparative avec casco complète.',
      },
      { betreff: 'Souhait de rendez-vous', datum: '02.10.2026', stand: 'réglé', art: 'gruen', text: 'Entretien annuel au bureau.' },
    ],
    neu: 'demandé',
    freiwillig: 'facultatif',
    bitteWaehlen: 'Veuillez choisir',
    offerte: {
      sparte: 'Pour quoi souhaitez-vous une offre\u00a0?',
      sparteHilfe: 'Choisissez une assurance. Nous discutons volontiers des autres lors d’un entretien.',
      fragen: [
        {
          sparte: 'Véhicule à moteur',
          fragen: [
            {
              titel: 'De quel type de véhicule s’agit-il\u00a0?',
              optionen: ['Voiture de tourisme', 'Camionnette jusqu’à 3.5 t', 'Moto', 'Camping-car'],
            },
            { titel: 'Quelle marque et quel modèle\u00a0?', fahrzeug: true },
            {
              titel: 'Combien de kilomètres le véhicule parcourt-il par an\u00a0?',
              optionen: ['environ 5’000 km', 'environ 10’000 km', 'environ 15’000 km', 'environ 20’000 km', 'plus de 30’000 km'],
            },
            {
              titel: 'Où le véhicule stationne-t-il la nuit\u00a0?',
              optionen: ['Garage individuel', 'Garage collectif', 'Couvert', 'Place de parc extérieure'],
            },
            { titel: 'Quelle couverture souhaitez-vous\u00a0?', optionen: ['responsabilité civile seule', 'casco partielle', 'casco complète'] },
          ],
        },
        {
          sparte: 'Ménage',
          fragen: [
            { titel: 'Comment vivez-vous\u00a0?', optionen: ['Appartement en location', 'Appartement en propriété', 'Maison individuelle'] },
            {
              titel: 'Combien de pièces compte l’appartement ou la maison\u00a0?',
              optionen: ['1 à 1½', '2 à 2½', '3 à 3½', '4 à 4½', '5 à 5½', '6 et plus'],
            },
            { titel: 'Combien de personnes vivent dans le ménage\u00a0?', optionen: ['1', '2', '3', '4', '5 et plus'] },
          ],
        },
        {
          sparte: 'Responsabilité civile privée',
          fragen: [
            { titel: 'Qui doit être assuré\u00a0?', optionen: ['Personne seule', 'Couple sans enfants', 'Famille', 'Ménage'] },
            { titel: 'Quelle somme d’assurance souhaitez-vous\u00a0?', optionen: ['CHF 3 mio', 'CHF 5 mio', 'CHF 10 mio'] },
          ],
        },
        {
          sparte: 'Protection juridique',
          fragen: [
            { titel: 'Qui doit être assuré\u00a0?', optionen: ['Personne seule', 'Famille', 'Ménage'] },
            { titel: 'Êtes-vous propriétaire de votre logement\u00a0?', optionen: ['oui', 'non'] },
          ],
        },
        {
          sparte: 'Assurance voyage',
          fragen: [
            {
              titel: 'Faut-il assurer toute l’année ou un seul voyage\u00a0?',
              optionen: ['Assurance annuelle', 'Voyage unique'],
            },
            { titel: 'Quelle est la destination\u00a0?', optionen: ['Europe', 'monde entier'] },
          ],
        },
      ],
      frageVon: 'Question',
      von: 'sur',
      letzter: 'Dernière étape',
      weiter: 'Suivant',
      ueberspringen: 'Passer',
      gespraech: 'Clarifier le reste lors d’un entretien',
      zurueck: 'Retour',
      fastFertig: 'Presque terminé',
      mitteilen: 'Souhaitez-vous encore nous communiquer quelque chose\u00a0?',
      zusammenfassung: 'Résumé',
      ihre: 'Votre demande d’offre',
      keineAngaben: 'Nous clarifierons tout le reste lors d’un entretien.',
      angaben: 'Indications',
      marke: 'Marque',
      modell: 'Modèle',
      ausfuehrung: 'Version, si connue',
      beispiel: 'par exemple 2.0 TDI',
      bemerkung: 'Remarque',
      knopf: 'Envoyer la demande d’offre',
      betreff: 'Demande d’offre',
    },
    rueckruf: {
      telefon: 'Numéro auquel nous pouvons vous joindre',
      nummer: '079 000 00 00',
      zeit: 'Meilleur moment pour vous joindre',
      zeiten: ['à tout moment', 'le matin', 'à midi', 'l’après-midi', 'en fin de journée'],
      thema: 'De quoi s’agit-il\u00a0?',
      themen: ['Contrat existant', 'Nouvelle assurance', 'Sinistre', 'Fiduciaire ou impôts', 'Autre'],
      tag: 'Jour souhaité',
      text: 'Souhaitez-vous ajouter quelque chose\u00a0?',
      knopf: 'Demander un rappel',
      betreff: 'Demande de rappel',
    },
    termin: {
      tag: 'Quel jour\u00a0?',
      uhr: 'À quelle heure\u00a0?',
      ort: 'Comment souhaitez-vous nous rencontrer\u00a0?',
      orte: ['au bureau', 'par téléphone'],
      text: 'De quoi s’agit-il\u00a0?',
      hinweis:
        'Il s’agit de votre rendez-vous souhaité. Il n’est valable qu’une fois confirmé par nous\u00a0; s’il ne nous convient pas, nous vous en proposons un autre.',
      knopf: 'Envoyer le souhait de rendez-vous',
      betreff: 'Souhait de rendez-vous',
      uhrzeit: 'h',
    },
    vertrag: {
      police: 'Quel contrat\u00a0?',
      was: 'Qu’est-ce qui change\u00a0?',
      arten: [
        {
          art: 'Changement de véhicule',
          nurFahrzeug: true,
          felder: [
            {
              key: 'fzart',
              typ: 'wahl',
              titel: 'Quel type de véhicule\u00a0?',
              optionen: ['Voiture de tourisme', 'Camionnette', 'Moto', 'Camping-car'],
            },
            { key: 'fahrzeug', typ: 'fahrzeug', titel: 'Nouveau véhicule' },
            { key: 'ausfuehrung', typ: 'text', titel: 'Version' },
            { key: 'iv', typ: 'datum', titel: '1re mise en circulation' },
            { key: 'zustand', typ: 'wahl', titel: 'Neuf ou d’occasion\u00a0?', optionen: ['neuf', 'occasion'] },
            { key: 'schild', typ: 'wahl', titel: 'Plaques', optionen: ['reprendre les plaques actuelles', 'nouvelles plaques'] },
            { key: 'leasing', typ: 'wahl', titel: 'Le véhicule est-il en leasing\u00a0?', optionen: ['oui', 'non'] },
            { key: 'preis', typ: 'text', titel: 'Prix catalogue accessoires compris, si connu' },
          ],
        },
        {
          art: 'Adresse ou lieu de stationnement',
          nurFahrzeug: false,
          felder: [
            { key: 'strasse', typ: 'text', titel: 'Nouvelle rue et numéro' },
            { key: 'plzort', typ: 'text', titel: 'NPA et localité' },
          ],
        },
        {
          art: 'Adapter la couverture ou les prestations',
          nurFahrzeug: false,
          felder: [
            {
              key: 'richtung',
              typ: 'wahl',
              titel: 'Que souhaitez-vous\u00a0?',
              optionen: ['Étendre la couverture', 'Réduire la couverture', 'Conseil sur la couverture'],
            },
            { key: 'betrifft', typ: 'deckungen', titel: 'Quelles prestations sont concernées\u00a0?' },
          ],
        },
        {
          art: 'Somme d’assurance ou franchise',
          nurFahrzeug: false,
          felder: [
            {
              key: 'selbstbehalt',
              typ: 'wahl',
              titel: 'Quelle franchise souhaitez-vous\u00a0?',
              optionen: ['CHF 0', 'CHF 200', 'CHF 500', 'CHF 1’000', 'CHF 2’500'],
            },
            { key: 'summe', typ: 'text', titel: 'Nouvelle somme d’assurance' },
          ],
        },
        {
          art: 'Personnes assurées ou conducteurs',
          nurFahrzeug: false,
          felder: [
            { key: 'aktion', typ: 'wahl', titel: 'Qu’est-ce qui change\u00a0?', optionen: ['Ajouter une personne', 'Retirer une personne'] },
            { key: 'person', typ: 'text', titel: 'Prénom et nom' },
          ],
        },
        {
          art: 'Résiliation ou suspension',
          nurFahrzeug: false,
          felder: [
            {
              key: 'kart',
              typ: 'wahl',
              titel: 'Que souhaitez-vous\u00a0?',
              optionen: ['Résiliation', 'Suspension, véhicule temporairement hors circulation'],
            },
            {
              key: 'grund',
              typ: 'wahl',
              titel: 'Pour quelle raison\u00a0?',
              optionen: ['Véhicule vendu', 'Départ à l’étranger', 'Changement de compagnie', 'Autre raison'],
            },
          ],
        },
        { art: 'Autre', nurFahrzeug: false, felder: [] },
      ],
      ab: 'À partir de quand\u00a0?',
      ergaenzen: 'Souhaitez-vous ajouter quelque chose\u00a0?',
      anderes: 'Qu’est-ce qui change\u00a0?',
      suchen: 'Tapez les premières lettres. Si votre véhicule n’y figure pas, saisissez-le simplement.',
      hinweis:
        'Votre annonce ne modifie pas encore le contrat. Nous clarifions la modification avec la compagnie et vous la confirmons.',
      fehlt: 'Veuillez choisir ou compléter ce qui change.',
      knopf: 'Annoncer la modification',
      betreff: 'Modification concernant',
    },
    nachricht: {
      betreff: 'Objet',
      text: 'Votre message',
      knopf: 'Envoyer le message',
      standard: 'Message',
    },
  },

  angaben: {
    titel: 'Mes données',
    hinweis:
      'Votre annonce nous parvient et est reprise manuellement — ainsi, l’origine de chaque indication reste traçable. Nous modifions le nom, la date de naissance et les données de l’entreprise après en avoir discuté avec vous.',
    knopf: 'Annoncer une modification',
    felder: [
      { feld: 'strasse', name: 'Rue et numéro', wert: 'Chemin Exemple 1' },
      { feld: 'ort', name: 'NPA et localité', wert: '2558 Aegerten' },
      { feld: 'mobile', name: 'Mobile', wert: '079 000 00 00' },
      { feld: 'email', name: 'E-mail', wert: 'anna.exemple@exemple.ch' },
    ],
  },
}
