/**
 * Traduction française (Suisse) de `src/content/offerte-darstellung.ts`.
 * `wahl[].wert` reste la valeur allemande du catalogue (elle est envoyée telle quelle); seul l’affichage est traduit.
 * Les listes (assureurs, sociétés de leasing, institutions de prévoyance) sont des noms propres.
 */
import {
  listen as deListen,
  type nachEndung as DE_ENDUNG,
  type nachSchluessel as DE_SCHLUESSEL,
  type optionText as DE_OPTION,
  type Wahl,
} from '@/content/offerte-darstellung'
import type { Uebersetzt } from '@/lib/sprache'

const chf = (betraege: readonly string[]): Wahl[] => betraege.map((b) => ({ text: `CHF ${b}`, wert: `CHF ${b}` }))
const AUTRE = 'Autre montant'

const SELBSTBEHALT_KLEIN = chf(['0', '200', '500', '1\'000'])
const KUENDIGUNGSFRIST: Wahl[] = [
  { text: '1 mois', wert: '1 Monat' },
  { text: '3 mois', wert: '3 Monate' },
  { text: '6 mois', wert: '6 Monate' },
  { text: 'Je ne sais pas', wert: 'unbekannt' },
]
const SAISIR = 'Tapez les premières lettres. Si la compagnie manque, saisissez-la simplement.'

export const nachEndung: Uebersetzt<typeof DE_ENDUNG> = {
  bestehend_versicherer: {
    titel: 'Auprès de quelle compagnie êtes-vous assuré aujourd’hui?',
    hilfe: SAISIR,
    liste: 'versicherer',
  },
  bestehend_ablauf: { titel: 'Quand la police actuelle arrive-t-elle à échéance?' },
  bestehend_kuendigungsfrist: { titel: 'Quel est le délai de résiliation de la police actuelle?', wahl: KUENDIGUNGSFRIST },
  selbstbehalt: { titel: 'Quelle franchise souhaitez-vous?', wahl: SELBSTBEHALT_KLEIN, andere: AUTRE },
}

export const nachSchluessel: Uebersetzt<typeof DE_SCHLUESSEL> = {
  // ---- Véhicule à moteur
  'mf.marke_typ': {
    titel: 'Quelle marque et quel modèle?',
    hilfe: 'Tapez les premières lettres et choisissez. Si votre véhicule manque, saisissez-le simplement.',
    fahrzeug: true,
  },
  'mf.halter_ist_kunde': { titel: 'Êtes-vous la détentrice ou le détenteur selon le permis de circulation?' },
  'mf.hauptlenker_ist_kunde': { titel: 'Est-ce vous qui conduisez le véhicule le plus souvent?' },
  'mf.kaufdatum': { titel: 'Quand avez-vous acheté le véhicule?' },
  'mf.abstellort': { titel: 'Où le véhicule stationne-t-il la nuit?' },
  'mf.leasing_ende': { titel: 'Quand le contrat de leasing prend-il fin?' },
  'mf.typengenehmigung': { titel: 'Quelle est la réception par type?', hilfe: 'Elle figure dans le permis de circulation sous le chiffre 24.' },
  'mf.stammnummer': { titel: 'Quel est le numéro matricule?', hilfe: 'Il figure dans le permis de circulation sous le chiffre 18.' },
  'mf.kontrollschild': { titel: 'Quelles sont les plaques de contrôle?', hilfe: 'Par exemple BE 123456.' },
  'mf.zubehoer': {
    titel: 'Quelle est la valeur des accessoires supplémentaires?',
    wahl: [{ text: 'Pas d’accessoires', wert: 'keines' }, ...chf(['1\'000', '2\'000', '5\'000'])],
    andere: AUTRE,
  },
  'mf.kilometerstand': {
    titel: 'Combien de kilomètres le véhicule a-t-il aujourd’hui?',
    wahl: [
      { text: 'moins de 20\'000 km', wert: 'unter 20\'000 km' },
      { text: '20\'000 à 50\'000 km', wert: '20\'000 bis 50\'000 km' },
      { text: '50\'000 à 100\'000 km', wert: '50\'000 bis 100\'000 km' },
      { text: '100\'000 à 150\'000 km', wert: '100\'000 bis 150\'000 km' },
      { text: 'plus de 150\'000 km', wert: 'über 150\'000 km' },
    ],
    andere: 'Saisir le kilométrage exact',
  },
  'mf.jahreskilometer': {
    wahl: [
      { text: 'env. 5\'000 km', wert: 'etwa 5\'000 km' },
      { text: 'env. 10\'000 km', wert: 'etwa 10\'000 km' },
      { text: 'env. 15\'000 km', wert: 'etwa 15\'000 km' },
      { text: 'env. 20\'000 km', wert: 'etwa 20\'000 km' },
      { text: 'env. 30\'000 km', wert: 'etwa 30\'000 km' },
      { text: 'plus de 30\'000 km', wert: 'mehr als 30\'000 km' },
    ],
  },
  'mf.leasinggeber': {
    titel: 'Auprès de qui le véhicule est-il en leasing ou financé?',
    hilfe: 'Tapez les premières lettres. Si la société manque, saisissez-la simplement.',
    liste: 'leasing',
  },
  'mf.selbstbehalt_teilkasko': { wahl: chf(['0', '200', '500', '1\'000']), andere: AUTRE },
  'mf.selbstbehalt_vollkasko': { wahl: chf(['500', '1\'000', '2\'000', '3\'000']), andere: AUTRE },

  // ---- Ménage, responsabilité civile, voyage, bâtiment
  'hr.wohnform': { titel: 'Quel est votre type de logement?' },
  'ph.mieter': { titel: 'Habitez-vous dans des locaux loués?' },
  'rs.wohneigentum': { titel: 'Êtes-vous propriétaire de votre logement?' },
  'gb.schaetzung_datum': { titel: 'Quand le bâtiment a-t-il été estimé pour la dernière fois?' },
  'hr.zimmer': {
    wahl: [
      { text: '1 à 1½', wert: '1 bis 1½' },
      { text: '2 à 2½', wert: '2 bis 2½' },
      { text: '3 à 3½', wert: '3 bis 3½' },
      { text: '4 à 4½', wert: '4 bis 4½' },
      { text: '5 à 5½', wert: '5 bis 5½' },
      { text: '6 et plus', wert: '6 und mehr' },
    ],
  },
  'hr.personen': {
    wahl: [
      { text: '1', wert: '1' },
      { text: '2', wert: '2' },
      { text: '3', wert: '3' },
      { text: '4', wert: '4' },
      { text: '5 et plus', wert: '5 und mehr' },
    ],
  },
  'hr.versicherungssumme': {
    wahl: chf(['30\'000', '50\'000', '75\'000', '100\'000', '150\'000', '200\'000']),
    andere: AUTRE,
  },
  'hr.diebstahl_auswaerts_summe': { wahl: chf(['2\'000', '5\'000', '10\'000', '20\'000']), andere: AUTRE },
  'ph.sonderrisiken': {
    titel: 'Y a-t-il des risques particuliers?',
    hilfe: 'Choisissez tout ce qui s’applique.',
    mehrere: true,
    wahl: [
      { text: 'Bateau', wert: 'Boot' },
      { text: 'Drone', wert: 'Drohne' },
      { text: 'Chasse', wert: 'Jagd' },
      { text: 'Bien immobilier loué', wert: 'vermietetes Eigentum' },
    ],
  },
  're.annullierung_summe': { wahl: chf(['5\'000', '10\'000', '20\'000', '30\'000']), andere: AUTRE },
  'gb.anzahl_wohnungen': {
    wahl: [
      { text: '1', wert: '1' },
      { text: '2', wert: '2' },
      { text: '3', wert: '3' },
      { text: '4', wert: '4' },
      { text: '5 à 10', wert: '5 bis 10' },
      { text: 'plus de 10', wert: 'mehr als 10' },
    ],
  },
  'gb.selbstbehalt': { wahl: chf(['200', '500', '1\'000', '2\'000']), andere: AUTRE },
  'gb.photovoltaik_details': {
    titel: 'Quelle est la taille de l’installation photovoltaïque, et quelle est sa valeur?',
    hilfe: 'Puissance en kWc et valeur en francs.',
  },

  // ---- Entreprises
  'uvgz.uvg_versicherer': {
    titel: 'Auprès de qui l’assurance-accidents obligatoire est-elle conclue?',
    hilfe: SAISIR,
    liste: 'versicherer',
  },
  'uvgz.personenkreis_details': { titel: 'Quels groupes de personnes doivent être assurés?', hilfe: 'Avec désignation, nombre et masse salariale.' },
  'uvgz.lohnspitze_summe': { titel: 'À combien s’élève la masse salariale au-delà du maximum LAA?', hilfe: 'Pour la couverture des salaires excédentaires.' },
  'uvgz.kapitalien': { titel: 'Quels capitaux souhaitez-vous en cas d’invalidité et de décès?' },
  'ktg.gav': { titel: 'L’entreprise est-elle soumise à une convention collective de travail?' },
  'ktg.laufende_faelle_details': { titel: 'Quels cas sont actuellement en cours?', hilfe: 'Sans diagnostic, s’il vous plaît.' },
  'bvg.versicherte': {
    wahl: [
      { text: '1 à 5', wert: '1 bis 5' },
      { text: '6 à 10', wert: '6 bis 10' },
      { text: '11 à 20', wert: '11 bis 20' },
      { text: '21 à 50', wert: '21 bis 50' },
      { text: 'plus de 50', wert: 'mehr als 50' },
    ],
  },
  'bvg.bisherige_einrichtung': {
    titel: 'Auprès de quelle institution de prévoyance l’entreprise est-elle affiliée aujourd’hui?',
    hilfe: 'Tapez les premières lettres. Si elle manque, saisissez-la simplement.',
    liste: 'vorsorge',
  },
  'bvg.rentner_details': { titel: 'Comment se compose l’effectif des rentiers?', hilfe: 'Nombre, type de rente et s’il doit être transféré.' },
  'bvg.arbeitsunfaehige_details': { titel: 'Combien de personnes sont en incapacité de travail, et à quel degré?', hilfe: 'Sans diagnostic, s’il vous plaît.' },
  'bvg.risikoleistungen': {
    titel: 'Quelles prestations de risque souhaitez-vous?',
    hilfe: 'Par exemple rente d’invalidité, de partenaire ou d’enfant et capital-décès.',
  },
  'bh.lohnsumme': { titel: 'À combien s’élève la masse salariale?', hilfe: 'Nécessaire seulement si la prime est calculée sur cette base.' },
  'bh.produkte_details': { titel: 'Quels produits fabriquez-vous ou vendez-vous?', hilfe: 'Avec le type et la part du chiffre d’affaires.' },
  'bh.obhut_bearbeitung': { titel: 'Travaillez-vous sur des choses appartenant à des tiers, ou en avez-vous sous votre garde?' },
  'bh.beratung_details': {
    titel: 'Quelle activité de conseil ou de planification exercez-vous?',
    hilfe: 'Avec le type, le chiffre d’affaires des honoraires et les mandants typiques.',
  },
  'bh.selbstbehalt': { wahl: chf(['0', '500', '1\'000', '2\'500', '5\'000']), andere: AUTRE },
  'sach.standorte': { titel: 'Quels sites doivent être assurés?', hilfe: 'Avec adresse et utilisation.' },
  'sach.sicherung': {
    titel: 'Quelles mesures de sécurité existent?',
    hilfe: 'Choisissez tout ce qui s’applique.',
    mehrere: true,
    wahl: [
      { text: 'Système d’alarme', wert: 'Alarmanlage' },
      { text: 'Coffre-fort', wert: 'Tresor' },
      { text: 'Détecteur d’incendie', wert: 'Brandmelder' },
      { text: 'Sprinkler', wert: 'Sprinkler' },
      { text: 'Aucune', wert: 'keine' },
    ],
  },
  'sach.gefahrstoffe_details': { titel: 'Quelles substances dangereuses, et en quelle quantité?' },
  'sach.einrichtung': { titel: 'À combien s’élève la valeur à neuf des installations de l’entreprise?' },
  'sach.diebstahl_summe': { titel: 'Jusqu’à quel montant le vol par effraction doit-il être assuré?', hilfe: 'Assuré au premier risque.' },
  'sach.elektronik': { titel: 'Quels appareils électroniques et quelles machines doivent être assurés?', hilfe: 'Avec la valeur à neuf.' },
  'sach.selbstbehalt': { wahl: chf(['0', '500', '1\'000', '2\'500', '5\'000']), andere: AUTRE },
  'cy.datensaetze': {
    wahl: [
      { text: 'moins de 1\'000', wert: 'unter 1\'000' },
      { text: '1\'000 à 10\'000', wert: '1\'000 bis 10\'000' },
      { text: '10\'000 à 100\'000', wert: '10\'000 bis 100\'000' },
      { text: 'plus de 100\'000', wert: 'über 100\'000' },
    ],
  },
  'cy.onlinehandel_anteil': {
    wahl: [
      { text: 'Pas de commerce en ligne', wert: 'kein Onlinehandel' },
      { text: 'jusqu’à 10 %', wert: 'bis 10 %' },
      { text: '10 à 50 %', wert: '10 bis 50 %' },
      { text: 'plus de 50 %', wert: 'über 50 %' },
    ],
  },
  'cy.it_dienstleister': { titel: 'Travaillez-vous avec un prestataire informatique externe?', hilfe: 'Avec le nom et l’étendue.' },
  'cy.vorfaelle_details': { titel: 'Que s’est-il passé?', hilfe: 'Type, date et dommage.' },
  'grs.fahrzeuge': {
    wahl: [
      { text: 'Aucun', wert: '0' },
      { text: '1', wert: '1' },
      { text: '2', wert: '2' },
      { text: '3', wert: '3' },
      { text: '4', wert: '4' },
      { text: '5 et plus', wert: '5 und mehr' },
    ],
  },
  'grs.versicherungssumme': { wahl: chf(['250\'000', '500\'000', '1\'000\'000']), andere: AUTRE },
  'fl.fahrzeuge_text': {
    titel: 'Quels véhicules font partie de la flotte?',
    hilfe: 'Marque, type, plaques, première mise en circulation et prix catalogue. Vous pouvez aussi nous envoyer une liste plus tard.',
  },
}

export const optionText: Uebersetzt<typeof DE_OPTION> = {
  'Gebäudeglas (bei Mietwohnung)': 'Vitrage du bâtiment pour un logement loué',
  'Arbeitsrecht (unselbständig)': 'Droit du travail pour les salariés',
  'Feuer / Elementar (nur ohne kantonale Gebäudeversicherung)': 'Incendie et éléments naturels, uniquement sans assurance cantonale des bâtiments',
  'teilweise (einzelne Betriebsteile)': 'partiellement, pour certaines parties de l’entreprise',
  'umhüllende Lösung (überobligatorisch)': 'solution enveloppante, surobligatoire',
  'Ertragsausfall (Deckungsbeitrag)': 'perte d’exploitation sur la base de la marge contributive',
  'besonders schützenswerte Daten (z. B. Gesundheit)': 'données sensibles comme les données de santé',
  'Arbeitsrecht (als Arbeitgeber)': 'Droit du travail en tant qu’employeur',
}

/** Noms propres: inchangés. */
export const listen: Uebersetzt<typeof deListen> = deListen
