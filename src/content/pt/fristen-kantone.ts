/**
 * Portugiesische Fassung von `src/content/fristen-kantone.ts` (16.10.2026). Daten, Kürzel und Quellen
 * unverändert; nur Kantonsnamen, Fristen und Hinweise übersetzt. Ändert sich das deutsche Original, hier nachziehen.
 */
import type { fristenKantone as DE } from '@/content/fristen-kantone'
import type { Uebersetzt } from '@/lib/sprache'

export const fristenKantone: Uebersetzt<typeof DE> = {
  stand: '2026-10-15',
  kantone: [
    {
    kuerzel: 'ZH',
    name: 'Zurique',
    privat: {
      stationen: [
        { marke: '31 de março', titel: 'Entregar a declaração', hervor: true },
        { marke: '30 de novembro', titel: 'Prorrogar, no máximo' },
      ],
      nachsatz: 'Independentes: 30 de setembro sem pedido; o cantão não indica taxas.',
    },
    unternehmen: {
      stationen: [
        { marke: '30 de setembro', titel: 'Entregar a declaração', hervor: true },
        { marke: '30 de novembro', titel: 'Prorrogar online, no máximo' },
      ],
      nachsatz: 'O cantão não indica taxas de prorrogação.',
    },
    quelle: 'https://www.zh.ch/de/steuern-finanzen/steuern/treuhaender/steuerbuch/steuerbuch-definition/zstb-132-1.html',
    },
    {
    kuerzel: 'BE',
    name: 'Berna',
    privat: {
      stationen: [
        { marke: '15 de março', titel: 'Entregar a declaração', hervor: true },
        { marke: '15 de julho', titel: 'Prorrogar online', wert: 'gratuito' },
        { marke: '15 de setembro', titel: 'Prorrogar online', wert: 'CHF 20' },
        { marke: '15 de novembro', titel: 'Prorrogar online', wert: 'CHF 40' },
      ],
      nachsatz: 'Independentes: 15 de maio; para a declaração de 2025, o último prazo é automaticamente 30 de novembro.',
    },
    unternehmen: {
      stationen: [
        { marke: '7 meses', titel: 'Entregar após o fecho de contas', hervor: true },
        { marke: '+ 1½ meses', titel: 'Prorrogar online', wert: 'gratuito' },
        { marke: '+ 3½ meses', titel: 'Prorrogar online, no máximo', wert: 'CHF 20' },
      ],
    },
    quelle: 'https://www.sv.fin.be.ch/de/start/themen/frist-verlaengern.html',
    },
    {
    kuerzel: 'LU',
    name: 'Lucerna',
    privat: {
      stationen: [
        { marke: 'conforme o formulário', titel: 'Entregar a declaração', hervor: true },
        { marke: '31 de agosto', titel: 'Prorrogar online, no máximo' },
      ],
      nachsatz: 'Independentes: 31 de agosto; o cantão não indica taxas de prorrogação.',
    },
    unternehmen: {
      stationen: [
        { marke: '31 de agosto', titel: 'Entregar a declaração', hervor: true },
        { marke: '30 de novembro', titel: 'Prorrogar online' },
        { marke: '31 de dezembro', titel: 'Prorrogar, no máximo' },
      ],
      nachsatz: 'O cantão não indica taxas de prorrogação.',
    },
    quelle: 'https://steuerbuch.lu.ch/band2/verfahren/frist_zur_einreichung_der_steuererklaerung',
    },
    {
    kuerzel: 'UR',
    name: 'Uri',
    privat: {
      stationen: [
        { marke: '31 de março', titel: 'Entregar a declaração', hervor: true },
        { marke: 'a pedido', titel: 'Prorrogar online' },
      ],
      nachsatz: 'O cantão não indica prazo máximo nem taxas.',
    },
    unternehmen: {
      stationen: [
        { marke: '31 de julho', titel: 'Entregar a declaração', hervor: true },
        { marke: 'a pedido', titel: 'Prorrogar online' },
      ],
      nachsatz: 'O cantão não indica prazo máximo nem taxas.',
    },
    quelle: 'https://www.ur.ch/online-schalter/2714/detail',
    },
    {
    kuerzel: 'SZ',
    name: 'Schwyz',
    privat: {
      stationen: [
        { marke: '31 de março', titel: 'Entregar a declaração', hervor: true },
        { marke: '31 de outubro', titel: 'Prorrogar online' },
        { marke: '30 de novembro', titel: 'Prorrogar online' },
        { marke: '31 de dezembro', titel: 'Prorrogar online, no máximo' },
      ],
      nachsatz: 'O cantão não indica taxas de prorrogação.',
    },
    unternehmen: {
      stationen: [
        { marke: '31 de julho', titel: 'Entregar a declaração', hervor: true },
        { marke: '31 de dezembro', titel: 'Prorrogar, no máximo' },
      ],
      nachsatz: 'O cantão não indica taxas de prorrogação.',
    },
    quelle: 'https://www.sz.ch/finanzdepartement/steuerverwaltung/natuerliche-personen/online-schalter/fristerstreckung-steuererklaerung.html/8756-8758-8802-10332-10354-10376-10750-10402',
    },
    {
    kuerzel: 'OW',
    name: 'Obwalden',
    privat: {
      stationen: [
        { marke: '30 de abril', titel: 'Entregar a declaração', hervor: true },
        { marke: '31 de dezembro', titel: 'Prorrogar online', wert: 'gratuito' },
        { marke: 'por trimestre', titel: 'Prorrogar com justificação', wert: 'CHF 30' },
      ],
      nachsatz: 'Os pedidos por escrito custam CHF 30.',
    },
    unternehmen: {
      stationen: [
        { marke: '30 dias', titel: 'Entregar após a AG', hervor: true },
        { marke: '31 de março', titel: 'Prorrogar online', wert: 'gratuito' },
        { marke: 'por trimestre', titel: 'Prorrogar com justificação', wert: 'CHF 30' },
      ],
      nachsatz: 'Os pedidos por escrito custam CHF 30.',
    },
    quelle: 'https://www.ow.ch/online-schalter/916/detail',
    },
    {
    kuerzel: 'NW',
    name: 'Nidwalden',
    privat: {
      stationen: [
        { marke: '31 de março', titel: 'Entregar a declaração', hervor: true },
        { marke: '31 de dezembro', titel: 'Prorrogar online, no máximo' },
      ],
      nachsatz: 'Independentes e pessoas representadas: 30 de junho; o cantão não indica taxas.',
    },
    unternehmen: {
      stationen: [
        { marke: '30 de junho', titel: 'Entregar a declaração', hervor: true },
        { marke: '31 de dezembro', titel: 'Prorrogar online, no máximo' },
      ],
      nachsatz: 'O cantão não indica taxas de prorrogação.',
    },
    quelle: 'https://www.steuern-nw.ch/services/fristerstreckung/',
    },
    {
    kuerzel: 'GL',
    name: 'Glarus',
    privat: {
      stationen: [
        { marke: 'conforme o formulário', titel: 'Entregar a declaração', hervor: true },
        { marke: '31 de dezembro', titel: 'Prorrogar online', wert: 'gratuito' },
        { marke: 'depois', titel: 'Prorrogar por escrito', wert: 'CHF 30' },
      ],
    },
    unternehmen: {
      stationen: [
        { marke: 'conforme o formulário', titel: 'Entregar a declaração', hervor: true },
        { marke: '31 de março', titel: 'Prorrogar online', wert: 'gratuito' },
        { marke: 'depois', titel: 'Prorrogar por escrito', wert: 'CHF 30' },
      ],
    },
    quelle: 'https://www.gl.ch/verwaltung/finanzen-und-gesundheit/steuern/online-formulare/fuer-natuerliche-personen.html/500',
    },
    {
    kuerzel: 'ZG',
    name: 'Zug',
    privat: {
      stationen: [
        { marke: '30 de abril', titel: 'Entregar a declaração', hervor: true },
        { marke: '31 de dezembro', titel: 'Prorrogar online', wert: 'gratuito' },
        { marke: 'depois', titel: 'Prorrogar com justificação', wert: 'CHF 35' },
      ],
    },
    unternehmen: {
      stationen: [
        { marke: '30 de setembro', titel: 'Entregar a declaração', hervor: true },
        { marke: '30 de junho', titel: 'Prorrogar online, no máximo' },
      ],
      nachsatz: 'O cantão não indica taxas de prorrogação.',
    },
    quelle: 'https://zg.ch/de/steuern-finanzen/steuern/natuerliche-personen/fristerstreckung-steuererklaerung',
    },
    {
    kuerzel: 'FR',
    name: 'Friburgo',
    privat: {
      stationen: [
        { marke: '31 de março', titel: 'Entregar a declaração', hervor: true },
        { marke: 'a pedido', titel: 'Prorrogar', wert: 'CHF 20' },
        { marke: '15 de dezembro', titel: 'Prorrogar, no máximo', wert: 'CHF 20 cada' },
      ],
      nachsatz: 'No máximo quatro prorrogações; a primeira é paga com a fatura QR anexa.',
    },
    unternehmen: {
      stationen: [
        { marke: '31 de agosto', titel: 'Entregar a declaração', hervor: true },
        { marke: 'a pedido', titel: 'Prorrogar', wert: 'gratuito' },
      ],
      nachsatz: 'Aplica-se às sociedades de capitais; associações e fundações: 30 de abril.',
    },
    quelle: 'https://www.fr.ch/de/steuern/natuerliche-personen/fristerstreckung-fuer-die-abgabe-der-steuererklaerung-steuer-der-natuerlichen-personen',
    },
    {
    kuerzel: 'SO',
    name: 'Soleura',
    privat: {
      stationen: [
        { marke: '31 de março', titel: 'Entregar a declaração', hervor: true },
        { marke: '31 de julho', titel: 'Prorrogar online', wert: 'gratuito' },
        { marke: '30 de novembro', titel: 'Prorrogar com justificação', wert: 'CHF 30' },
        { marke: 'depois', titel: 'Prorrogar a título excecional', wert: 'CHF 30' },
      ],
    },
    unternehmen: {
      stationen: [
        { marke: '30 de junho', titel: 'Entregar a declaração', hervor: true },
        { marke: '31 de outubro', titel: 'Prorrogar online', wert: 'gratuito' },
        { marke: '30 de novembro', titel: 'Prorrogar com justificação', wert: 'CHF 30' },
        { marke: 'depois', titel: 'Prorrogar a título excecional', wert: 'CHF 30' },
      ],
      nachsatz: 'Sociedades em nome coletivo e em comandita: 31 de julho.',
    },
    quelle: 'https://so.ch/verwaltung/finanzdepartement/steueramt/privatpersonen-und-selbstaendig-erwerbende/fristverlaengerungen/',
    },
    {
    kuerzel: 'BS',
    name: 'Basileia-Cidade',
    privat: {
      stationen: [
        { marke: '31 de março', titel: 'Entregar a declaração', hervor: true },
        { marke: '30 de setembro', titel: 'Prorrogar online', wert: 'gratuito' },
        { marke: 'até ao fim do ano', titel: 'Prorrogar online', wert: 'CHF 40 por pedido' },
        { marke: 'depois', titel: 'Prorrogar com justificação', wert: 'CHF 40' },
      ],
      nachsatz: 'Para além do fim do ano, só mediante pagamento antecipado.',
    },
    unternehmen: {
      stationen: [
        { marke: '30 de junho', titel: 'Entregar a declaração', hervor: true },
        { marke: '30 de setembro', titel: 'Prorrogar online', wert: 'gratuito' },
        { marke: '31 de dezembro', titel: 'Prorrogar online', wert: 'CHF 40 por pedido' },
        { marke: 'depois', titel: 'Prorrogar com justificação', wert: 'CHF 40' },
      ],
      nachsatz: 'Para além do fim do ano, só mediante pagamento antecipado.',
    },
    quelle: 'https://www.bs.ch/themen/arbeit-und-steuern/steuererklaerung/steuererklaerung-als-natuerliche-person-einreichen',
    },
    {
    kuerzel: 'BL',
    name: 'Basileia-Campo',
    privat: {
      stationen: [
        { marke: '31 de março', titel: 'Entregar a declaração', hervor: true },
        { marke: '31 de maio', titel: 'Prorrogado sem pedido', wert: 'gratuito' },
        { marke: '30 de novembro', titel: 'Prorrogar online', wert: 'CHF 40' },
        { marke: 'depois', titel: 'Prorrogar com justificação', wert: 'CHF 40' },
      ],
      nachsatz: 'Independentes: 30 de junho; as prorrogações são adiadas em conformidade.',
    },
    unternehmen: {
      stationen: [
        { marke: '30 de junho', titel: 'Entregar a declaração', hervor: true },
        { marke: '31 de agosto', titel: 'Prorrogado sem pedido', wert: 'gratuito' },
        { marke: '28 de fevereiro', titel: 'Prorrogar online', wert: 'CHF 40' },
        { marke: 'depois', titel: 'Prorrogar com justificação', wert: 'CHF 40' },
      ],
    },
    quelle: 'https://www.baselland.ch/politik-und-behorden/direktionen/finanz-und-kirchendirektion/steuerverwaltung/steuererklaerung-natuerliche-personen-und-e-tax-bl/fristen-und-termine/fristverlaengerung-fuer-privatpersonen',
    },
    {
    kuerzel: 'SH',
    name: 'Schaffhausen',
    privat: {
      stationen: [
        { marke: '31 de março', titel: 'Entregar a declaração', hervor: true },
        { marke: '30 de novembro', titel: 'Prorrogar online, no máximo' },
      ],
      nachsatz: 'O cantão não indica taxas de prorrogação.',
    },
    unternehmen: {
      stationen: [
        { marke: 'conforme o formulário', titel: 'Entregar a declaração', hervor: true },
        { marke: '31 de dezembro', titel: 'Prorrogar online, no máximo' },
      ],
      nachsatz: 'O cantão não indica taxas de prorrogação.',
    },
    quelle: 'https://sh.ch/CMS/Webseite/Kanton-Schaffhausen/Beh-rde/Verwaltung/Finanzdepartement/Steuerverwaltung-110769-DE.html',
    },
    {
    kuerzel: 'AR',
    name: 'Appenzell Exterior',
    privat: {
      stationen: [
        { marke: 'conforme o formulário', titel: 'Entregar a declaração', hervor: true },
        { marke: 'a pedido', titel: 'Prorrogar online', wert: 'gratuito' },
        { marke: 'cada uma seguinte', titel: 'Prorrogar online', wert: 'CHF 25' },
      ],
      nachsatz: 'O cantão não indica prazo máximo.',
    },
    unternehmen: {
      stationen: [
        { marke: 'conforme o formulário', titel: 'Entregar a declaração', hervor: true },
        { marke: 'a pedido', titel: 'Prorrogar online' },
      ],
      nachsatz: 'O cantão não indica prazo máximo nem taxas.',
    },
    quelle: 'https://ar.ch/verwaltung/departement-finanzen/steuerverwaltung/steuererklaerungen-fristverlaengerungen/fristverlaengerungsgesuche/',
    },
    {
    kuerzel: 'AI',
    name: 'Appenzell Interior',
    privat: {
      stationen: [
        { marke: '30 de abril', titel: 'Entregar a declaração', hervor: true },
        { marke: '30 de novembro', titel: 'Prorrogar online, no máximo' },
      ],
      nachsatz: 'O cantão não indica taxas; só prorroga com os impostos pagos.',
    },
    unternehmen: {
      stationen: [
        { marke: '31 de maio', titel: 'Entregar a declaração', hervor: true },
        { marke: 'a pedido', titel: 'Prorrogar online' },
      ],
      nachsatz: 'O cantão não indica prazo máximo nem taxas.',
    },
    quelle: 'https://www.ai.ch/themen/steuern/steuererklaerung-ausfuellen/fristerstreckung-steuererklaerung',
    },
    {
    kuerzel: 'SG',
    name: 'São Galo',
    privat: {
      stationen: [
        { marke: 'conforme o formulário', titel: 'Entregar a declaração', hervor: true },
        { marke: 'a pedido', titel: 'Prorrogar online' },
      ],
      nachsatz: 'O cantão não indica prazo máximo nem taxas.',
    },
    unternehmen: {
      stationen: [
        { marke: '6 meses', titel: 'Entregar após o fecho de contas', hervor: true },
        { marke: '+ 6 meses', titel: 'Prorrogar online' },
        { marke: 'depois', titel: 'Prorrogar com justificação' },
      ],
      nachsatz: 'O cantão não indica taxas de prorrogação.',
    },
    quelle: 'https://www.sg.ch/steuern-finanzen/steuern/fristverlaengerung.html',
    },
    {
    kuerzel: 'GR',
    name: 'Grisões',
    privat: {
      stationen: [
        { marke: '31 de março', titel: 'Entregar a declaração', hervor: true },
        { marke: '30 de setembro', titel: 'Prorrogar online, no máximo' },
        { marke: '30 de novembro', titel: 'Prorrogar com justificação' },
      ],
      nachsatz: 'Independentes: 30 de setembro; o cantão não indica taxas.',
    },
    unternehmen: {
      stationen: [
        { marke: '9 meses', titel: 'Entregar após o fecho de contas', hervor: true },
        { marke: '+ 3 meses', titel: 'Prorrogar, no máximo' },
      ],
      nachsatz: 'Associações e fundações: 6 meses; o cantão não indica taxas.',
    },
    quelle: 'https://www.gr.ch/DE/institutionen/verwaltung/dfg/stv/dokumentation/praxis/Verfahren/127-01.pdf',
    },
    {
    kuerzel: 'AG',
    name: 'Argóvia',
    privat: {
      stationen: [
        { marke: '31 de março', titel: 'Entregar a declaração', hervor: true },
        { marke: '30 de junho', titel: 'Prorrogado sem pedido', wert: 'gratuito' },
        { marke: 'a pedido', titel: 'Prorrogar online' },
      ],
      nachsatz: 'Independentes: 30 de junho; o cantão não indica prazo máximo nem taxas.',
    },
    unternehmen: {
      stationen: [
        { marke: 'conforme o formulário', titel: 'Entregar a declaração', hervor: true },
        { marke: '31 de dezembro', titel: 'Prorrogar online', wert: 'gratuito' },
        { marke: 'depois', titel: 'Prorrogar por escrito' },
      ],
    },
    quelle: 'https://www.ag.ch/de/themen/steuern-finanzen/steuern/steuererklaerung-einreichen/frist-verlaengern',
    },
    {
    kuerzel: 'TG',
    name: 'Turgóvia',
    privat: {
      stationen: [
        { marke: '30 de abril', titel: 'Entregar a declaração', hervor: true },
        { marke: '30 de setembro', titel: 'Prorrogar' },
        { marke: '30 de novembro', titel: 'Prorrogar com justificação' },
      ],
      nachsatz: 'Com fiduciária, até 31 de dezembro; o cantão não indica taxas.',
    },
    unternehmen: {
      stationen: [
        { marke: '30 de junho', titel: 'Entregar a declaração', hervor: true },
        { marke: '31 de dezembro', titel: 'Prorrogar online', wert: 'gratuito' },
        { marke: 'depois', titel: 'Prorrogar com justificação', wert: 'CHF 30 por mês' },
      ],
    },
    quelle: 'https://steuerverwaltung.tg.ch/hauptrubrik-1/veranlagung-und-bezug/fristverlaengerungen.html/2884',
    },
    {
    kuerzel: 'TI',
    name: 'Ticino',
    privat: {
      stationen: [
        { marke: '30 de abril', titel: 'Entregar a declaração', hervor: true },
        { marke: 'a pedido', titel: 'Prorrogar online' },
      ],
      nachsatz: 'O cantão não indica prazo máximo nem taxas.',
    },
    unternehmen: {
      stationen: [
        { marke: 'conforme o formulário', titel: 'Entregar a declaração', hervor: true },
        { marke: '31 de janeiro', titel: 'Prorrogar online, no máximo' },
      ],
      nachsatz: 'O cantão não indica taxas de prorrogação.',
    },
    quelle: 'https://www4.ti.ch/tich/area-media/comunicati/dettaglio-comunicato?NEWS_ID=257983&cHash=155880c40e5f8328a3c7c401c6afa133',
    },
    {
    kuerzel: 'VD',
    name: 'Vaud',
    privat: {
      stationen: [
        { marke: '15 de março', titel: 'Entregar a declaração', hervor: true },
        { marke: '30 de junho', titel: 'Prorrogar online', wert: 'gratuito' },
        { marke: '30 de setembro', titel: 'Prorrogar online, no máximo', wert: 'gratuito' },
      ],
      nachsatz: 'Até 30 de junho aplica-se uma tolerância, mesmo sem pedido.',
    },
    unternehmen: {
      stationen: [
        { marke: '255 dias', titel: 'Entregar após o fecho de contas', hervor: true },
        { marke: '+ 30 dias', titel: 'Prorrogar online, no máximo' },
      ],
      nachsatz: 'O cantão não indica taxas de prorrogação.',
    },
    quelle: 'https://www.vd.ch/etat-droit-finances/impots/impots-pour-les-individus/demander-un-delai-pour-deposer-ma-declaration-dimpot',
    },
    {
    kuerzel: 'VS',
    name: 'Valais',
    privat: {
      stationen: [
        { marke: '31 de março', titel: 'Entregar a declaração', hervor: true },
        { marke: '31 de julho', titel: 'Prorrogar', wert: 'CHF 20' },
        { marke: '31 de dezembro', titel: 'Prorrogar em casos especiais' },
      ],
      nachsatz: 'A prorrogação obtém-se pagando com a guia anexa antes de 31 de março; para independentes, até 31 de outubro.',
    },
    unternehmen: {
      stationen: [
        { marke: '30 de junho', titel: 'Entregar a declaração', hervor: true },
        { marke: '31 de outubro', titel: 'Prorrogar' },
        { marke: '31 de dezembro', titel: 'Prorrogar em casos especiais' },
      ],
      nachsatz: 'O cantão não indica taxas de prorrogação.',
    },
    quelle: 'https://www.vs.ch/web/scc/planning-delais',
    },
    {
    kuerzel: 'NE',
    name: 'Neuchâtel',
    privat: {
      stationen: [
        { marke: '20 de fevereiro', titel: 'Entregar a declaração', hervor: true },
        { marke: '30 de abril', titel: 'Prorrogar', wert: 'gratuito' },
        { marke: '30 de junho', titel: 'Prorrogar', wert: 'CHF 25' },
        { marke: '31 de outubro', titel: 'Prorrogar, no máximo', wert: 'CHF 40' },
      ],
      nachsatz: 'A taxa depende da data efetiva de entrega.',
    },
    unternehmen: {
      stationen: [
        { marke: '31 de março', titel: 'Entregar a declaração', hervor: true },
        { marke: '30 de abril', titel: 'Prorrogar', wert: 'gratuito' },
        { marke: '31 de outubro', titel: 'Prorrogar, no máximo' },
      ],
      nachsatz: 'O cantão não indica taxas após 30 de abril.',
    },
    quelle: 'https://www.ne.ch/themes/impots/impot-des-personnes-physiques/demande-delai',
    },
    {
    kuerzel: 'GE',
    name: 'Genebra',
    privat: {
      stationen: [
        { marke: '31 de março', titel: 'Entregar a declaração', hervor: true },
        { marke: '30 de junho', titel: 'Prorrogar online', wert: 'CHF 20' },
        { marke: '31 de agosto', titel: 'Prorrogar online', wert: 'CHF 40' },
        { marke: '31 de dezembro', titel: 'Prorrogar, no máximo', wert: 'CHF 60' },
      ],
      nachsatz: 'A partir de novembro, só por correio e com justificação.',
    },
    unternehmen: {
      stationen: [
        { marke: '30 de abril', titel: 'Entregar a declaração', hervor: true },
        { marke: '31 de julho', titel: 'Prorrogar online', wert: 'CHF 20' },
        { marke: '30 de setembro', titel: 'Prorrogar online', wert: 'CHF 40' },
        { marke: '31 de outubro', titel: 'Prorrogar online, no máximo', wert: 'CHF 60' },
      ],
    },
    quelle: 'https://www.ge.ch/remplir-ma-declaration-impot-tant-que-particulier/demander-delai-ma-declaration-impot',
    },
    {
    kuerzel: 'JU',
    name: 'Jura',
    privat: {
      stationen: [
        { marke: '28 de fevereiro', titel: 'Entregar a declaração', hervor: true },
        { marke: '31 de julho', titel: 'Prorrogado sem pedido', wert: 'gratuito' },
        { marke: '31 de outubro', titel: 'Prorrogar online, no máximo', wert: 'CHF 31' },
      ],
      nachsatz: 'Em papel, o prazo sem pedido vai até 30 de junho.',
    },
    unternehmen: {
      stationen: [
        { marke: 'conforme o formulário', titel: 'Entregar a declaração', hervor: true },
        { marke: '15 de julho', titel: 'Prorrogado sem pedido', wert: 'gratuito' },
        { marke: '31 de outubro', titel: 'Prorrogar, no máximo', wert: 'CHF 31' },
      ],
    },
    quelle: 'https://www.jura.ch/Htdocs/Files/v/81cc78891c5f1637d43c7c3fa46061ce931b57ab3a48c0e43a09d8c662c2395d.pdf/Guide-general-2025.pdf?download=1',
    },
  ],
}
