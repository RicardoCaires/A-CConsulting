/**
 * Französische Fassung von `src/content/fristen-kantone.ts` (16.10.2026). Daten, Kürzel und Quellen
 * unverändert; nur Kantonsnamen, Fristen und Hinweise übersetzt. Ändert sich das deutsche Original, hier nachziehen.
 */
import type { fristenKantone as DE } from '@/content/fristen-kantone'
import type { Uebersetzt } from '@/lib/sprache'

export const fristenKantone: Uebersetzt<typeof DE> = {
  stand: '2026-10-15',
  kantone: [
    {
    kuerzel: 'ZH',
    name: 'Zurich',
    privat: {
      stationen: [
        { marke: '31 mars', titel: 'Déposer la déclaration', hervor: true },
        { marke: '30 novembre', titel: 'Prolonger, au plus' },
      ],
      nachsatz: 'Indépendants\u00a0: 30 septembre sans demande\u00a0; le canton n’indique pas de frais.',
    },
    unternehmen: {
      stationen: [
        { marke: '30 septembre', titel: 'Déposer la déclaration', hervor: true },
        { marke: '30 novembre', titel: 'Prolonger en ligne, au plus' },
      ],
      nachsatz: 'Le canton n’indique pas de frais de prolongation.',
    },
    quelle: 'https://www.zh.ch/de/steuern-finanzen/steuern/treuhaender/steuerbuch/steuerbuch-definition/zstb-132-1.html',
    },
    {
    kuerzel: 'BE',
    name: 'Berne',
    privat: {
      stationen: [
        { marke: '15 mars', titel: 'Déposer la déclaration', hervor: true },
        { marke: '15 juillet', titel: 'Prolonger en ligne', wert: 'gratuit' },
        { marke: '15 septembre', titel: 'Prolonger en ligne', wert: 'CHF 20' },
        { marke: '15 novembre', titel: 'Prolonger en ligne', wert: 'CHF 40' },
      ],
      nachsatz: 'Indépendants\u00a0: 15 mai\u00a0; pour la déclaration 2025, le dernier délai est automatiquement le 30 novembre.',
    },
    unternehmen: {
      stationen: [
        { marke: '7 mois', titel: 'Déposer après la clôture', hervor: true },
        { marke: '+ 1½ mois', titel: 'Prolonger en ligne', wert: 'gratuit' },
        { marke: '+ 3½ mois', titel: 'Prolonger en ligne, au plus', wert: 'CHF 20' },
      ],
    },
    quelle: 'https://www.sv.fin.be.ch/de/start/themen/frist-verlaengern.html',
    },
    {
    kuerzel: 'LU',
    name: 'Lucerne',
    privat: {
      stationen: [
        { marke: 'selon le formulaire', titel: 'Déposer la déclaration', hervor: true },
        { marke: '31 août', titel: 'Prolonger en ligne, au plus' },
      ],
      nachsatz: 'Indépendants\u00a0: 31 août\u00a0; le canton n’indique pas de frais de prolongation.',
    },
    unternehmen: {
      stationen: [
        { marke: '31 août', titel: 'Déposer la déclaration', hervor: true },
        { marke: '30 novembre', titel: 'Prolonger en ligne' },
        { marke: '31 décembre', titel: 'Prolonger, au plus' },
      ],
      nachsatz: 'Le canton n’indique pas de frais de prolongation.',
    },
    quelle: 'https://steuerbuch.lu.ch/band2/verfahren/frist_zur_einreichung_der_steuererklaerung',
    },
    {
    kuerzel: 'UR',
    name: 'Uri',
    privat: {
      stationen: [
        { marke: '31 mars', titel: 'Déposer la déclaration', hervor: true },
        { marke: 'sur demande', titel: 'Prolonger en ligne' },
      ],
      nachsatz: 'Le canton n’indique ni délai maximal ni frais.',
    },
    unternehmen: {
      stationen: [
        { marke: '31 juillet', titel: 'Déposer la déclaration', hervor: true },
        { marke: 'sur demande', titel: 'Prolonger en ligne' },
      ],
      nachsatz: 'Le canton n’indique ni délai maximal ni frais.',
    },
    quelle: 'https://www.ur.ch/online-schalter/2714/detail',
    },
    {
    kuerzel: 'SZ',
    name: 'Schwyz',
    privat: {
      stationen: [
        { marke: '31 mars', titel: 'Déposer la déclaration', hervor: true },
        { marke: '31 octobre', titel: 'Prolonger en ligne' },
        { marke: '30 novembre', titel: 'Prolonger en ligne' },
        { marke: '31 décembre', titel: 'Prolonger en ligne, au plus' },
      ],
      nachsatz: 'Le canton n’indique pas de frais de prolongation.',
    },
    unternehmen: {
      stationen: [
        { marke: '31 juillet', titel: 'Déposer la déclaration', hervor: true },
        { marke: '31 décembre', titel: 'Prolonger, au plus' },
      ],
      nachsatz: 'Le canton n’indique pas de frais de prolongation.',
    },
    quelle: 'https://www.sz.ch/finanzdepartement/steuerverwaltung/natuerliche-personen/online-schalter/fristerstreckung-steuererklaerung.html/8756-8758-8802-10332-10354-10376-10750-10402',
    },
    {
    kuerzel: 'OW',
    name: 'Obwald',
    privat: {
      stationen: [
        { marke: '30 avril', titel: 'Déposer la déclaration', hervor: true },
        { marke: '31 décembre', titel: 'Prolonger en ligne', wert: 'gratuit' },
        { marke: 'par trimestre', titel: 'Prolonger sur demande motivée', wert: 'CHF 30' },
      ],
      nachsatz: 'Les demandes écrites coûtent CHF 30.',
    },
    unternehmen: {
      stationen: [
        { marke: '30 jours', titel: 'Déposer après l’AG', hervor: true },
        { marke: '31 mars', titel: 'Prolonger en ligne', wert: 'gratuit' },
        { marke: 'par trimestre', titel: 'Prolonger sur demande motivée', wert: 'CHF 30' },
      ],
      nachsatz: 'Les demandes écrites coûtent CHF 30.',
    },
    quelle: 'https://www.ow.ch/online-schalter/916/detail',
    },
    {
    kuerzel: 'NW',
    name: 'Nidwald',
    privat: {
      stationen: [
        { marke: '31 mars', titel: 'Déposer la déclaration', hervor: true },
        { marke: '31 décembre', titel: 'Prolonger en ligne, au plus' },
      ],
      nachsatz: 'Indépendants et personnes représentées\u00a0: 30 juin\u00a0; le canton n’indique pas de frais.',
    },
    unternehmen: {
      stationen: [
        { marke: '30 juin', titel: 'Déposer la déclaration', hervor: true },
        { marke: '31 décembre', titel: 'Prolonger en ligne, au plus' },
      ],
      nachsatz: 'Le canton n’indique pas de frais de prolongation.',
    },
    quelle: 'https://www.steuern-nw.ch/services/fristerstreckung/',
    },
    {
    kuerzel: 'GL',
    name: 'Glaris',
    privat: {
      stationen: [
        { marke: 'selon le formulaire', titel: 'Déposer la déclaration', hervor: true },
        { marke: '31 décembre', titel: 'Prolonger en ligne', wert: 'gratuit' },
        { marke: 'ensuite', titel: 'Prolonger par écrit', wert: 'CHF 30' },
      ],
    },
    unternehmen: {
      stationen: [
        { marke: 'selon le formulaire', titel: 'Déposer la déclaration', hervor: true },
        { marke: '31 mars', titel: 'Prolonger en ligne', wert: 'gratuit' },
        { marke: 'ensuite', titel: 'Prolonger par écrit', wert: 'CHF 30' },
      ],
    },
    quelle: 'https://www.gl.ch/verwaltung/finanzen-und-gesundheit/steuern/online-formulare/fuer-natuerliche-personen.html/500',
    },
    {
    kuerzel: 'ZG',
    name: 'Zoug',
    privat: {
      stationen: [
        { marke: '30 avril', titel: 'Déposer la déclaration', hervor: true },
        { marke: '31 décembre', titel: 'Prolonger en ligne', wert: 'gratuit' },
        { marke: 'ensuite', titel: 'Prolonger sur demande motivée', wert: 'CHF 35' },
      ],
    },
    unternehmen: {
      stationen: [
        { marke: '30 septembre', titel: 'Déposer la déclaration', hervor: true },
        { marke: '30 juin', titel: 'Prolonger en ligne, au plus' },
      ],
      nachsatz: 'Le canton n’indique pas de frais de prolongation.',
    },
    quelle: 'https://zg.ch/de/steuern-finanzen/steuern/natuerliche-personen/fristerstreckung-steuererklaerung',
    },
    {
    kuerzel: 'FR',
    name: 'Fribourg',
    privat: {
      stationen: [
        { marke: '31 mars', titel: 'Déposer la déclaration', hervor: true },
        { marke: 'sur demande', titel: 'Prolonger', wert: 'CHF 20' },
        { marke: '15 décembre', titel: 'Prolonger, au plus', wert: 'CHF 20 chacune' },
      ],
      nachsatz: 'Quatre prolongations au plus\u00a0; la première se paie avec la facture QR jointe.',
    },
    unternehmen: {
      stationen: [
        { marke: '31 août', titel: 'Déposer la déclaration', hervor: true },
        { marke: 'sur demande', titel: 'Prolonger', wert: 'gratuit' },
      ],
      nachsatz: 'Valable pour les sociétés de capitaux\u00a0; associations et fondations\u00a0: 30 avril.',
    },
    quelle: 'https://www.fr.ch/de/steuern/natuerliche-personen/fristerstreckung-fuer-die-abgabe-der-steuererklaerung-steuer-der-natuerlichen-personen',
    },
    {
    kuerzel: 'SO',
    name: 'Soleure',
    privat: {
      stationen: [
        { marke: '31 mars', titel: 'Déposer la déclaration', hervor: true },
        { marke: '31 juillet', titel: 'Prolonger en ligne', wert: 'gratuit' },
        { marke: '30 novembre', titel: 'Prolonger sur demande motivée', wert: 'CHF 30' },
        { marke: 'ensuite', titel: 'Prolonger à titre exceptionnel', wert: 'CHF 30' },
      ],
    },
    unternehmen: {
      stationen: [
        { marke: '30 juin', titel: 'Déposer la déclaration', hervor: true },
        { marke: '31 octobre', titel: 'Prolonger en ligne', wert: 'gratuit' },
        { marke: '30 novembre', titel: 'Prolonger sur demande motivée', wert: 'CHF 30' },
        { marke: 'ensuite', titel: 'Prolonger à titre exceptionnel', wert: 'CHF 30' },
      ],
      nachsatz: 'Sociétés en nom collectif et en commandite\u00a0: 31 juillet.',
    },
    quelle: 'https://so.ch/verwaltung/finanzdepartement/steueramt/privatpersonen-und-selbstaendig-erwerbende/fristverlaengerungen/',
    },
    {
    kuerzel: 'BS',
    name: 'Bâle-Ville',
    privat: {
      stationen: [
        { marke: '31 mars', titel: 'Déposer la déclaration', hervor: true },
        { marke: '30 septembre', titel: 'Prolonger en ligne', wert: 'gratuit' },
        { marke: 'jusqu’à la fin de l’année', titel: 'Prolonger en ligne', wert: 'CHF 40 par demande' },
        { marke: 'ensuite', titel: 'Prolonger sur demande motivée', wert: 'CHF 40' },
      ],
      nachsatz: 'Au-delà de la fin de l’année, uniquement contre paiement anticipé.',
    },
    unternehmen: {
      stationen: [
        { marke: '30 juin', titel: 'Déposer la déclaration', hervor: true },
        { marke: '30 septembre', titel: 'Prolonger en ligne', wert: 'gratuit' },
        { marke: '31 décembre', titel: 'Prolonger en ligne', wert: 'CHF 40 par demande' },
        { marke: 'ensuite', titel: 'Prolonger sur demande motivée', wert: 'CHF 40' },
      ],
      nachsatz: 'Au-delà de la fin de l’année, uniquement contre paiement anticipé.',
    },
    quelle: 'https://www.bs.ch/themen/arbeit-und-steuern/steuererklaerung/steuererklaerung-als-natuerliche-person-einreichen',
    },
    {
    kuerzel: 'BL',
    name: 'Bâle-Campagne',
    privat: {
      stationen: [
        { marke: '31 mars', titel: 'Déposer la déclaration', hervor: true },
        { marke: '31 mai', titel: 'Prolongé sans demande', wert: 'gratuit' },
        { marke: '30 novembre', titel: 'Prolonger en ligne', wert: 'CHF 40' },
        { marke: 'ensuite', titel: 'Prolonger sur demande motivée', wert: 'CHF 40' },
      ],
      nachsatz: 'Indépendants\u00a0: 30 juin, les prolongations sont décalées d’autant.',
    },
    unternehmen: {
      stationen: [
        { marke: '30 juin', titel: 'Déposer la déclaration', hervor: true },
        { marke: '31 août', titel: 'Prolongé sans demande', wert: 'gratuit' },
        { marke: '28 février', titel: 'Prolonger en ligne', wert: 'CHF 40' },
        { marke: 'ensuite', titel: 'Prolonger sur demande motivée', wert: 'CHF 40' },
      ],
    },
    quelle: 'https://www.baselland.ch/politik-und-behorden/direktionen/finanz-und-kirchendirektion/steuerverwaltung/steuererklaerung-natuerliche-personen-und-e-tax-bl/fristen-und-termine/fristverlaengerung-fuer-privatpersonen',
    },
    {
    kuerzel: 'SH',
    name: 'Schaffhouse',
    privat: {
      stationen: [
        { marke: '31 mars', titel: 'Déposer la déclaration', hervor: true },
        { marke: '30 novembre', titel: 'Prolonger en ligne, au plus' },
      ],
      nachsatz: 'Le canton n’indique pas de frais de prolongation.',
    },
    unternehmen: {
      stationen: [
        { marke: 'selon le formulaire', titel: 'Déposer la déclaration', hervor: true },
        { marke: '31 décembre', titel: 'Prolonger en ligne, au plus' },
      ],
      nachsatz: 'Le canton n’indique pas de frais de prolongation.',
    },
    quelle: 'https://sh.ch/CMS/Webseite/Kanton-Schaffhausen/Beh-rde/Verwaltung/Finanzdepartement/Steuerverwaltung-110769-DE.html',
    },
    {
    kuerzel: 'AR',
    name: 'Appenzell Rhodes-Extérieures',
    privat: {
      stationen: [
        { marke: 'selon le formulaire', titel: 'Déposer la déclaration', hervor: true },
        { marke: 'sur demande', titel: 'Prolonger en ligne', wert: 'gratuit' },
        { marke: 'chacune des suivantes', titel: 'Prolonger en ligne', wert: 'CHF 25' },
      ],
      nachsatz: 'Le canton n’indique pas de délai maximal.',
    },
    unternehmen: {
      stationen: [
        { marke: 'selon le formulaire', titel: 'Déposer la déclaration', hervor: true },
        { marke: 'sur demande', titel: 'Prolonger en ligne' },
      ],
      nachsatz: 'Le canton n’indique ni délai maximal ni frais.',
    },
    quelle: 'https://ar.ch/verwaltung/departement-finanzen/steuerverwaltung/steuererklaerungen-fristverlaengerungen/fristverlaengerungsgesuche/',
    },
    {
    kuerzel: 'AI',
    name: 'Appenzell Rhodes-Intérieures',
    privat: {
      stationen: [
        { marke: '30 avril', titel: 'Déposer la déclaration', hervor: true },
        { marke: '30 novembre', titel: 'Prolonger en ligne, au plus' },
      ],
      nachsatz: 'Le canton n’indique pas de frais\u00a0; la prolongation n’est accordée que si les impôts sont payés.',
    },
    unternehmen: {
      stationen: [
        { marke: '31 mai', titel: 'Déposer la déclaration', hervor: true },
        { marke: 'sur demande', titel: 'Prolonger en ligne' },
      ],
      nachsatz: 'Le canton n’indique ni délai maximal ni frais.',
    },
    quelle: 'https://www.ai.ch/themen/steuern/steuererklaerung-ausfuellen/fristerstreckung-steuererklaerung',
    },
    {
    kuerzel: 'SG',
    name: 'Saint-Gall',
    privat: {
      stationen: [
        { marke: 'selon le formulaire', titel: 'Déposer la déclaration', hervor: true },
        { marke: 'sur demande', titel: 'Prolonger en ligne' },
      ],
      nachsatz: 'Le canton n’indique ni délai maximal ni frais.',
    },
    unternehmen: {
      stationen: [
        { marke: '6 mois', titel: 'Déposer après la clôture', hervor: true },
        { marke: '+ 6 mois', titel: 'Prolonger en ligne' },
        { marke: 'ensuite', titel: 'Prolonger sur demande motivée' },
      ],
      nachsatz: 'Le canton n’indique pas de frais de prolongation.',
    },
    quelle: 'https://www.sg.ch/steuern-finanzen/steuern/fristverlaengerung.html',
    },
    {
    kuerzel: 'GR',
    name: 'Grisons',
    privat: {
      stationen: [
        { marke: '31 mars', titel: 'Déposer la déclaration', hervor: true },
        { marke: '30 septembre', titel: 'Prolonger en ligne, au plus' },
        { marke: '30 novembre', titel: 'Prolonger sur demande motivée' },
      ],
      nachsatz: 'Indépendants\u00a0: 30 septembre\u00a0; le canton n’indique pas de frais.',
    },
    unternehmen: {
      stationen: [
        { marke: '9 mois', titel: 'Déposer après la clôture', hervor: true },
        { marke: '+ 3 mois', titel: 'Prolonger, au plus' },
      ],
      nachsatz: 'Associations et fondations\u00a0: 6 mois\u00a0; le canton n’indique pas de frais.',
    },
    quelle: 'https://www.gr.ch/DE/institutionen/verwaltung/dfg/stv/dokumentation/praxis/Verfahren/127-01.pdf',
    },
    {
    kuerzel: 'AG',
    name: 'Argovie',
    privat: {
      stationen: [
        { marke: '31 mars', titel: 'Déposer la déclaration', hervor: true },
        { marke: '30 juin', titel: 'Prolongé sans demande', wert: 'gratuit' },
        { marke: 'sur demande', titel: 'Prolonger en ligne' },
      ],
      nachsatz: 'Indépendants\u00a0: 30 juin\u00a0; le canton n’indique ni délai maximal ni frais.',
    },
    unternehmen: {
      stationen: [
        { marke: 'selon le formulaire', titel: 'Déposer la déclaration', hervor: true },
        { marke: '31 décembre', titel: 'Prolonger en ligne', wert: 'gratuit' },
        { marke: 'ensuite', titel: 'Prolonger par écrit' },
      ],
    },
    quelle: 'https://www.ag.ch/de/themen/steuern-finanzen/steuern/steuererklaerung-einreichen/frist-verlaengern',
    },
    {
    kuerzel: 'TG',
    name: 'Thurgovie',
    privat: {
      stationen: [
        { marke: '30 avril', titel: 'Déposer la déclaration', hervor: true },
        { marke: '30 septembre', titel: 'Prolonger' },
        { marke: '30 novembre', titel: 'Prolonger sur demande motivée' },
      ],
      nachsatz: 'Avec une fiduciaire, jusqu’au 31 décembre\u00a0; le canton n’indique pas de frais.',
    },
    unternehmen: {
      stationen: [
        { marke: '30 juin', titel: 'Déposer la déclaration', hervor: true },
        { marke: '31 décembre', titel: 'Prolonger en ligne', wert: 'gratuit' },
        { marke: 'ensuite', titel: 'Prolonger sur demande motivée', wert: 'CHF 30 par mois' },
      ],
    },
    quelle: 'https://steuerverwaltung.tg.ch/hauptrubrik-1/veranlagung-und-bezug/fristverlaengerungen.html/2884',
    },
    {
    kuerzel: 'TI',
    name: 'Tessin',
    privat: {
      stationen: [
        { marke: '30 avril', titel: 'Déposer la déclaration', hervor: true },
        { marke: 'sur demande', titel: 'Prolonger en ligne' },
      ],
      nachsatz: 'Le canton n’indique ni délai maximal ni frais.',
    },
    unternehmen: {
      stationen: [
        { marke: 'selon le formulaire', titel: 'Déposer la déclaration', hervor: true },
        { marke: '31 janvier', titel: 'Prolonger en ligne, au plus' },
      ],
      nachsatz: 'Le canton n’indique pas de frais de prolongation.',
    },
    quelle: 'https://www4.ti.ch/tich/area-media/comunicati/dettaglio-comunicato?NEWS_ID=257983&cHash=155880c40e5f8328a3c7c401c6afa133',
    },
    {
    kuerzel: 'VD',
    name: 'Vaud',
    privat: {
      stationen: [
        { marke: '15 mars', titel: 'Déposer la déclaration', hervor: true },
        { marke: '30 juin', titel: 'Prolonger en ligne', wert: 'gratuit' },
        { marke: '30 septembre', titel: 'Prolonger en ligne, au plus', wert: 'gratuit' },
      ],
      nachsatz: 'Une tolérance s’applique jusqu’au 30 juin, même sans demande.',
    },
    unternehmen: {
      stationen: [
        { marke: '255 jours', titel: 'Déposer après la clôture', hervor: true },
        { marke: '+ 30 jours', titel: 'Prolonger en ligne, au plus' },
      ],
      nachsatz: 'Le canton n’indique pas de frais de prolongation.',
    },
    quelle: 'https://www.vd.ch/etat-droit-finances/impots/impots-pour-les-individus/demander-un-delai-pour-deposer-ma-declaration-dimpot',
    },
    {
    kuerzel: 'VS',
    name: 'Valais',
    privat: {
      stationen: [
        { marke: '31 mars', titel: 'Déposer la déclaration', hervor: true },
        { marke: '31 juillet', titel: 'Prolonger', wert: 'CHF 20' },
        { marke: '31 décembre', titel: 'Prolonger dans des cas particuliers' },
      ],
      nachsatz: 'La prolongation s’obtient en payant avec le bulletin de versement joint avant le 31 mars, pour les indépendants jusqu’au 31 octobre.',
    },
    unternehmen: {
      stationen: [
        { marke: '30 juin', titel: 'Déposer la déclaration', hervor: true },
        { marke: '31 octobre', titel: 'Prolonger' },
        { marke: '31 décembre', titel: 'Prolonger dans des cas particuliers' },
      ],
      nachsatz: 'Le canton n’indique pas de frais de prolongation.',
    },
    quelle: 'https://www.vs.ch/web/scc/planning-delais',
    },
    {
    kuerzel: 'NE',
    name: 'Neuchâtel',
    privat: {
      stationen: [
        { marke: '20 février', titel: 'Déposer la déclaration', hervor: true },
        { marke: '30 avril', titel: 'Prolonger', wert: 'gratuit' },
        { marke: '30 juin', titel: 'Prolonger', wert: 'CHF 25' },
        { marke: '31 octobre', titel: 'Prolonger, au plus', wert: 'CHF 40' },
      ],
      nachsatz: 'Les frais dépendent de la date effective de dépôt.',
    },
    unternehmen: {
      stationen: [
        { marke: '31 mars', titel: 'Déposer la déclaration', hervor: true },
        { marke: '30 avril', titel: 'Prolonger', wert: 'gratuit' },
        { marke: '31 octobre', titel: 'Prolonger, au plus' },
      ],
      nachsatz: 'Le canton n’indique pas de frais après le 30 avril.',
    },
    quelle: 'https://www.ne.ch/themes/impots/impot-des-personnes-physiques/demande-delai',
    },
    {
    kuerzel: 'GE',
    name: 'Genève',
    privat: {
      stationen: [
        { marke: '31 mars', titel: 'Déposer la déclaration', hervor: true },
        { marke: '30 juin', titel: 'Prolonger en ligne', wert: 'CHF 20' },
        { marke: '31 août', titel: 'Prolonger en ligne', wert: 'CHF 40' },
        { marke: '31 décembre', titel: 'Prolonger, au plus', wert: 'CHF 60' },
      ],
      nachsatz: 'Dès novembre, uniquement par courrier et avec justification.',
    },
    unternehmen: {
      stationen: [
        { marke: '30 avril', titel: 'Déposer la déclaration', hervor: true },
        { marke: '31 juillet', titel: 'Prolonger en ligne', wert: 'CHF 20' },
        { marke: '30 septembre', titel: 'Prolonger en ligne', wert: 'CHF 40' },
        { marke: '31 octobre', titel: 'Prolonger en ligne, au plus', wert: 'CHF 60' },
      ],
    },
    quelle: 'https://www.ge.ch/remplir-ma-declaration-impot-tant-que-particulier/demander-delai-ma-declaration-impot',
    },
    {
    kuerzel: 'JU',
    name: 'Jura',
    privat: {
      stationen: [
        { marke: '28 février', titel: 'Déposer la déclaration', hervor: true },
        { marke: '31 juillet', titel: 'Prolongé sans demande', wert: 'gratuit' },
        { marke: '31 octobre', titel: 'Prolonger en ligne, au plus', wert: 'CHF 31' },
      ],
      nachsatz: 'Sur papier, le délai sans demande court jusqu’au 30 juin.',
    },
    unternehmen: {
      stationen: [
        { marke: 'selon le formulaire', titel: 'Déposer la déclaration', hervor: true },
        { marke: '15 juillet', titel: 'Prolongé sans demande', wert: 'gratuit' },
        { marke: '31 octobre', titel: 'Prolonger, au plus', wert: 'CHF 31' },
      ],
    },
    quelle: 'https://www.jura.ch/Htdocs/Files/v/81cc78891c5f1637d43c7c3fa46061ce931b57ab3a48c0e43a09d8c662c2395d.pdf/Guide-general-2025.pdf?download=1',
    },
  ],
}
