/**
 * Tradução em português europeu de `src/content/offerte-darstellung.ts`.
 * `wahl[].wert` continua a ser o valor alemão do catálogo (é enviado tal como está); só a apresentação é traduzida.
 * As listas (seguradoras, empresas de leasing, instituições de previdência) são nomes próprios.
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
const OUTRO = 'Outro montante'

const SELBSTBEHALT_KLEIN = chf(['0', '200', '500', '1\'000'])
const KUENDIGUNGSFRIST: Wahl[] = [
  { text: '1 mês', wert: '1 Monat' },
  { text: '3 meses', wert: '3 Monate' },
  { text: '6 meses', wert: '6 Monate' },
  { text: 'Não sei', wert: 'unbekannt' },
]
const ESCREVER = 'Escreva as primeiras letras. Se a seguradora não estiver na lista, escreva-a simplesmente.'

export const nachEndung: Uebersetzt<typeof DE_ENDUNG> = {
  bestehend_versicherer: {
    titel: 'Em que seguradora tem hoje o seguro?',
    hilfe: ESCREVER,
    liste: 'versicherer',
  },
  bestehend_ablauf: { titel: 'Quando termina a apólice atual?' },
  bestehend_kuendigungsfrist: { titel: 'Qual é o prazo de rescisão da apólice atual?', wahl: KUENDIGUNGSFRIST },
  selbstbehalt: { titel: 'Que franquia pretende?', wahl: SELBSTBEHALT_KLEIN, andere: OUTRO },
}

export const nachSchluessel: Uebersetzt<typeof DE_SCHLUESSEL> = {
  // ---- Veículo a motor
  'mf.marke_typ': {
    titel: 'Que marca e que modelo?',
    hilfe: 'Escreva as primeiras letras e escolha. Se o seu veículo não estiver na lista, escreva-o simplesmente.',
    fahrzeug: true,
  },
  'mf.halter_ist_kunde': { titel: 'É a pessoa detentora do veículo segundo o livrete (Fahrzeugausweis)?' },
  'mf.hauptlenker_ist_kunde': { titel: 'É quem conduz o veículo com mais frequência?' },
  'mf.kaufdatum': { titel: 'Quando comprou o veículo?' },
  'mf.abstellort': { titel: 'Onde fica o veículo durante a noite?' },
  'mf.leasing_ende': { titel: 'Quando termina o contrato de leasing?' },
  'mf.typengenehmigung': { titel: 'Qual é a homologação do modelo?', hilfe: 'Consta do livrete, no ponto 24.' },
  'mf.stammnummer': { titel: 'Qual é o número de matrícula de base (Stammnummer)?', hilfe: 'Consta do livrete, no ponto 18.' },
  'mf.kontrollschild': { titel: 'Qual é a matrícula?', hilfe: 'Por exemplo BE 123456.' },
  'mf.zubehoer': {
    titel: 'Qual é o valor dos acessórios adicionais?',
    wahl: [{ text: 'Sem acessórios', wert: 'keines' }, ...chf(['1\'000', '2\'000', '5\'000'])],
    andere: OUTRO,
  },
  'mf.kilometerstand': {
    titel: 'Quantos quilómetros tem hoje o veículo?',
    wahl: [
      { text: 'menos de 20\'000 km', wert: 'unter 20\'000 km' },
      { text: '20\'000 a 50\'000 km', wert: '20\'000 bis 50\'000 km' },
      { text: '50\'000 a 100\'000 km', wert: '50\'000 bis 100\'000 km' },
      { text: '100\'000 a 150\'000 km', wert: '100\'000 bis 150\'000 km' },
      { text: 'mais de 150\'000 km', wert: 'über 150\'000 km' },
    ],
    andere: 'Indicar a quilometragem exata',
  },
  'mf.jahreskilometer': {
    wahl: [
      { text: 'cerca de 5\'000 km', wert: 'etwa 5\'000 km' },
      { text: 'cerca de 10\'000 km', wert: 'etwa 10\'000 km' },
      { text: 'cerca de 15\'000 km', wert: 'etwa 15\'000 km' },
      { text: 'cerca de 20\'000 km', wert: 'etwa 20\'000 km' },
      { text: 'cerca de 30\'000 km', wert: 'etwa 30\'000 km' },
      { text: 'mais de 30\'000 km', wert: 'mehr als 30\'000 km' },
    ],
  },
  'mf.leasinggeber': {
    titel: 'Com quem tem o leasing ou o financiamento do veículo?',
    hilfe: 'Escreva as primeiras letras. Se a empresa não estiver na lista, escreva-a simplesmente.',
    liste: 'leasing',
  },
  'mf.selbstbehalt_teilkasko': { wahl: chf(['0', '200', '500', '1\'000']), andere: OUTRO },
  'mf.selbstbehalt_vollkasko': { wahl: chf(['500', '1\'000', '2\'000', '3\'000']), andere: OUTRO },

  // ---- Recheio da casa, responsabilidade civil, viagem, edifício
  'hr.wohnform': { titel: 'Como mora?' },
  'ph.mieter': { titel: 'Mora numa habitação arrendada?' },
  'rs.wohneigentum': { titel: 'Tem habitação própria?' },
  'gb.schaetzung_datum': { titel: 'Quando foi o edifício avaliado pela última vez?' },
  'hr.zimmer': {
    wahl: [
      { text: '1 a 1½', wert: '1 bis 1½' },
      { text: '2 a 2½', wert: '2 bis 2½' },
      { text: '3 a 3½', wert: '3 bis 3½' },
      { text: '4 a 4½', wert: '4 bis 4½' },
      { text: '5 a 5½', wert: '5 bis 5½' },
      { text: '6 ou mais', wert: '6 und mehr' },
    ],
  },
  'hr.personen': {
    wahl: [
      { text: '1', wert: '1' },
      { text: '2', wert: '2' },
      { text: '3', wert: '3' },
      { text: '4', wert: '4' },
      { text: '5 ou mais', wert: '5 und mehr' },
    ],
  },
  'hr.versicherungssumme': {
    wahl: chf(['30\'000', '50\'000', '75\'000', '100\'000', '150\'000', '200\'000']),
    andere: OUTRO,
  },
  'hr.diebstahl_auswaerts_summe': { wahl: chf(['2\'000', '5\'000', '10\'000', '20\'000']), andere: OUTRO },
  'ph.sonderrisiken': {
    titel: 'Existem riscos especiais?',
    hilfe: 'Escolha tudo o que se aplica.',
    mehrere: true,
    wahl: [
      { text: 'Barco', wert: 'Boot' },
      { text: 'Drone', wert: 'Drohne' },
      { text: 'Caça', wert: 'Jagd' },
      { text: 'Imóvel arrendado a terceiros', wert: 'vermietetes Eigentum' },
    ],
  },
  're.annullierung_summe': { wahl: chf(['5\'000', '10\'000', '20\'000', '30\'000']), andere: OUTRO },
  'gb.anzahl_wohnungen': {
    wahl: [
      { text: '1', wert: '1' },
      { text: '2', wert: '2' },
      { text: '3', wert: '3' },
      { text: '4', wert: '4' },
      { text: '5 a 10', wert: '5 bis 10' },
      { text: 'mais de 10', wert: 'mehr als 10' },
    ],
  },
  'gb.selbstbehalt': { wahl: chf(['200', '500', '1\'000', '2\'000']), andere: OUTRO },
  'gb.photovoltaik_details': {
    titel: 'Qual é a dimensão da instalação fotovoltaica, e qual é o seu valor?',
    hilfe: 'Potência em kWp e valor em francos.',
  },

  // ---- Empresas
  'uvgz.uvg_versicherer': {
    titel: 'Em que seguradora está o seguro de acidentes obrigatório (LAA / UVG)?',
    hilfe: ESCREVER,
    liste: 'versicherer',
  },
  'uvgz.personenkreis_details': { titel: 'Que grupos de pessoas devem ficar seguros?', hilfe: 'Com designação, número e massa salarial.' },
  'uvgz.lohnspitze_summe': { titel: 'Qual é a massa salarial acima do máximo LAA?', hilfe: 'Para a cobertura dos salários excedentes.' },
  'uvgz.kapitalien': { titel: 'Que capitais pretende em caso de invalidez e de morte?' },
  'ktg.gav': { titel: 'A empresa está sujeita a uma convenção coletiva de trabalho?' },
  'ktg.laufende_faelle_details': { titel: 'Que casos estão atualmente em curso?', hilfe: 'Por favor, sem diagnósticos.' },
  'bvg.versicherte': {
    wahl: [
      { text: '1 a 5', wert: '1 bis 5' },
      { text: '6 a 10', wert: '6 bis 10' },
      { text: '11 a 20', wert: '11 bis 20' },
      { text: '21 a 50', wert: '21 bis 50' },
      { text: 'mais de 50', wert: 'mehr als 50' },
    ],
  },
  'bvg.bisherige_einrichtung': {
    titel: 'Em que instituição de previdência está hoje a empresa?',
    hilfe: 'Escreva as primeiras letras. Se não estiver na lista, escreva-a simplesmente.',
    liste: 'vorsorge',
  },
  'bvg.rentner_details': { titel: 'Como é composto o grupo de pensionistas?', hilfe: 'Número, tipo de pensão e se deve ser transferido.' },
  'bvg.arbeitsunfaehige_details': { titel: 'Quantas pessoas estão incapacitadas para o trabalho, e em que grau?', hilfe: 'Por favor, sem diagnósticos.' },
  'bvg.risikoleistungen': {
    titel: 'Que prestações de risco pretende?',
    hilfe: 'Por exemplo pensão de invalidez, de cônjuge ou de filhos e capital por morte.',
  },
  'bh.lohnsumme': { titel: 'Qual é a massa salarial?', hilfe: 'Só é necessária se o prémio for calculado com base nela.' },
  'bh.produkte_details': { titel: 'Que produtos fabrica ou vende?', hilfe: 'Com o tipo e a parte do volume de negócios.' },
  'bh.obhut_bearbeitung': { titel: 'Trabalha em bens de terceiros, ou tem bens de terceiros à sua guarda?' },
  'bh.beratung_details': {
    titel: 'Que atividade de consultoria ou de planeamento exerce?',
    hilfe: 'Com o tipo, o volume de honorários e os clientes habituais.',
  },
  'bh.selbstbehalt': { wahl: chf(['0', '500', '1\'000', '2\'500', '5\'000']), andere: OUTRO },
  'sach.standorte': { titel: 'Que instalações devem ficar seguras?', hilfe: 'Com endereço e utilização.' },
  'sach.sicherung': {
    titel: 'Que medidas de segurança existem?',
    hilfe: 'Escolha tudo o que se aplica.',
    mehrere: true,
    wahl: [
      { text: 'Alarme', wert: 'Alarmanlage' },
      { text: 'Cofre', wert: 'Tresor' },
      { text: 'Detetor de incêndio', wert: 'Brandmelder' },
      { text: 'Sprinklers', wert: 'Sprinkler' },
      { text: 'Nenhuma', wert: 'keine' },
    ],
  },
  'sach.gefahrstoffe_details': { titel: 'Que substâncias perigosas, e em que quantidade?' },
  'sach.einrichtung': { titel: 'Qual é o valor em novo do equipamento da empresa?' },
  'sach.diebstahl_summe': { titel: 'Até que montante deve ficar seguro o furto por arrombamento?', hilfe: 'Seguro em primeiro risco.' },
  'sach.elektronik': { titel: 'Que equipamentos eletrónicos e máquinas devem ficar seguros?', hilfe: 'Com o valor em novo.' },
  'sach.selbstbehalt': { wahl: chf(['0', '500', '1\'000', '2\'500', '5\'000']), andere: OUTRO },
  'cy.datensaetze': {
    wahl: [
      { text: 'menos de 1\'000', wert: 'unter 1\'000' },
      { text: '1\'000 a 10\'000', wert: '1\'000 bis 10\'000' },
      { text: '10\'000 a 100\'000', wert: '10\'000 bis 100\'000' },
      { text: 'mais de 100\'000', wert: 'über 100\'000' },
    ],
  },
  'cy.onlinehandel_anteil': {
    wahl: [
      { text: 'Sem comércio online', wert: 'kein Onlinehandel' },
      { text: 'até 10 %', wert: 'bis 10 %' },
      { text: '10 a 50 %', wert: '10 bis 50 %' },
      { text: 'mais de 50 %', wert: 'über 50 %' },
    ],
  },
  'cy.it_dienstleister': { titel: 'Trabalha com um prestador externo de serviços informáticos?', hilfe: 'Com nome e âmbito.' },
  'cy.vorfaelle_details': { titel: 'O que aconteceu?', hilfe: 'Tipo, data e dano.' },
  'grs.fahrzeuge': {
    wahl: [
      { text: 'Nenhum', wert: '0' },
      { text: '1', wert: '1' },
      { text: '2', wert: '2' },
      { text: '3', wert: '3' },
      { text: '4', wert: '4' },
      { text: '5 ou mais', wert: '5 und mehr' },
    ],
  },
  'grs.versicherungssumme': { wahl: chf(['250\'000', '500\'000', '1\'000\'000']), andere: OUTRO },
  'fl.fahrzeuge_text': {
    titel: 'Que veículos fazem parte da frota?',
    hilfe: 'Marca, tipo, matrícula, primeira entrada em circulação e preço de catálogo. Também nos pode enviar uma lista mais tarde.',
  },
}

export const optionText: Uebersetzt<typeof DE_OPTION> = {
  'Gebäudeglas (bei Mietwohnung)': 'Vidros do edifício em habitação arrendada',
  'Arbeitsrecht (unselbständig)': 'Direito do trabalho para trabalhadores por conta de outrem',
  'Feuer / Elementar (nur ohne kantonale Gebäudeversicherung)': 'Incêndio e fenómenos naturais, só sem seguro cantonal de edifícios',
  'teilweise (einzelne Betriebsteile)': 'parcialmente, para partes da empresa',
  'umhüllende Lösung (überobligatorisch)': 'solução envolvente, supraobrigatória',
  'Ertragsausfall (Deckungsbeitrag)': 'perda de exploração com base na margem de contribuição',
  'besonders schützenswerte Daten (z. B. Gesundheit)': 'dados sensíveis como dados de saúde',
  'Arbeitsrecht (als Arbeitgeber)': 'Direito do trabalho como empregador',
}

/** Nomes próprios: inalterados. */
export const listen: Uebersetzt<typeof deListen> = deListen
