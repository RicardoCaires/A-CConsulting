/**
 * Bedienoberflaeche — Beschriftungen, die auf jeder Seite vorkommen.
 *
 * Hier stehen nur kurze, wiederkehrende Begriffe (Navigation, Sprachwahl,
 * Fussbereich). Seiteninhalte gehoeren nach `src/content/`.
 *
 * Alle drei Sprachen sind hier vollstaendig — das erzwingt der Typ.
 * FR ist Schweizer Franzoesisch, PT europaeisches Portugiesisch.
 */

import type { Locale } from '../config'
import type { NavSectionKey, PageKey } from '../routes'

type UiMessages = {
  /** Sprungmarke fuer Tastatur- und Screenreader-Bedienung. */
  skipToContent: string
  /** Beschriftung des Logo-Links. */
  toHomepage: string
  nav: {
    label: string
    menu: string
    close: string
  }
  language: {
    label: string
    choose: string
    /** Hinweis, in welchen Sprachen beraten wird. */
    spokenNote: string
    /** Fuer Sprachen, deren Uebersetzung noch aussteht. */
    notAvailable: string
  }
  /** Beschriftung der Seiteneinordnung auf Unterseiten. */
  breadcrumbLabel: string
  footer: {
    contactHeading: string
    legalHeading: string
    servicesHeading: string
    /** Spaltentitel „Unternehmen" im Fussbereich. */
    companyHeading: string
    phone: string
    email: string
    uid: string
    finma: string
    /** Kurze Rollenangabe im Fussbereich. */
    roleNote: string
    /** Spaltentitel ueber UID und FINMA-Nummer. */
    registryHeading: string
    /** Rechtevorbehalt in der untersten Zeile, hinter dem Copyright. */
    rightsReserved: string
    /** Der Zusatz rechts unten. Wird in Grossbuchstaben gesetzt. */
    claim: string
  }
  /** Beschriftung der Seiten in Navigation und Fussbereich. */
  page: Record<PageKey, string>
  /**
   * Beschriftung der Unterpunkte, die auf einen Abschnitt fuehren.
   * Navigationsbezeichnungen, keine Seitentitel.
   */
  navSection: Record<NavSectionKey, string>
  /**
   * Der eine Handlungsknopf der Website.
   *
   * Er steht im Kopfbereich, am Ende jeder Seite und im Menue — immer mit
   * demselben Wortlaut. Ein zweiter Knopf mit anderer Beschriftung waere eine
   * zweite Aufforderung, und die schwaecht beide.
   */
  cta: string
  /** Beschriftung der Adresszeile im Direktkontakt. */
  contactAddressLabel: string
  /**
   * Beschriftungen in der Personenkarte. Sie stehen nicht sichtbar auf der
   * Seite, sondern ordnen die Angaben fuer Hilfstechnik zu.
   */
  person: {
    responsibility: string
    languages: string
  }
  /** Beschriftung der Sprungmarken innerhalb einer Seite. */
  sectionsNavLabel: string
  /**
   * Wegweiser am Fuss einer Karte, die als Ganzes verlinkt ist.
   *
   * Oberflaechentext, kein Inhalt: Er steht sechsmal gleich und benennt keine
   * Leistung. Darum hier und nicht in `src/content/`.
   */
  moreLabel: string
  /** Hinweis am Formular, solange der Endpunkt fehlt. */
  formPending: string
  /** Verweis auf eine Seite, die es noch nicht gibt. */
  pageComing: {
    /** Kurzer sichtbarer Vermerk neben der Beschriftung. */
    badge: string
    /** Ausfuehrlicher Hinweis, nur fuer Screenreader. */
    hint: string
  }
  notFound: {
    title: string
    body: string
    action: string
  }
}

export const ui: Record<Locale, UiMessages> = {
  de: {
    skipToContent: 'Zum Inhalt springen',
    toHomepage: 'A&C Consulting — zur Startseite',
    nav: {
      label: 'Hauptnavigation',
      menu: 'Menü',
      close: 'Schliessen',
    },
    language: {
      label: 'Sprache',
      choose: 'Sprache wählen',
      spokenNote: 'Beratung auf Deutsch, Französisch und Portugiesisch.',
      notAvailable: 'Diese Sprachfassung wird noch erstellt.',
    },
    breadcrumbLabel: 'Sie sind hier',
    footer: {
      contactHeading: 'Kontakt',
      legalHeading: 'Rechtliches',
      servicesHeading: 'Leistungen',
      companyHeading: 'Unternehmen',
      phone: 'Telefon',
      email: 'E-Mail',
      uid: 'UID',
      finma: 'FINMA-Register',
      roleNote: 'Versicherungen · Treuhand · Finanzplanung',
      registryHeading: 'Regulatorisches',
      rightsReserved: 'Alle Rechte vorbehalten.',
      claim: 'Perspektiven für morgen',
    },
    page: {
      home: 'Startseite',
      versicherungen: 'Versicherungen',
      treuhand: 'Treuhand',
      buchhaltung: 'Buchhaltung',
      lohnbuchhaltung: 'Lohnbuchhaltung',
      mehrwertsteuer: 'Mehrwertsteuer',
      jahresabschluss: 'Jahresabschluss',
      treuhaenderWechseln: 'Treuhänder wechseln',
      steuern: 'Steuern',
      firmengruendung: 'Firmengründung',
      personalFinance: 'Finanzplanung',
      wissen: 'Wissen',
      ueberUns: 'Über uns',
      transparenz: 'Transparenz',
      schadenfall: 'Schadenfall',
      kontakt: 'Kontakt',
      impressum: 'Impressum',
      datenschutz: 'Datenschutz',
    },
    navSection: {
      privatkunden: 'Für Privatpersonen',
      unternehmen: 'Für Unternehmen',
      vertragspruefung: 'Vertragsprüfung',
      schadenfall: 'Schadenfall',
      budget: 'Budget',
      vorsorge: 'Vorsorge',
      team: 'Die Inhaber',
      arbeitsweise: 'Arbeitsweise',
      standort: 'Standort',
    },
    contactAddressLabel: 'Adresse',
    person: {
      responsibility: 'Zuständigkeit',
      languages: 'Sprachen',
    },
    sectionsNavLabel: 'Abschnitte dieser Seite',
    moreLabel: 'Mehr erfahren',
    formPending:
      'Das Formular wird aufgeschaltet, sobald der serverseitige Endpunkt eingerichtet ist. Bis dahin erreichen Sie uns telefonisch oder per E-Mail.',
    pageComing: {
      badge: 'folgt',
      hint: 'Diese Seite ist noch nicht verfügbar.',
    },
    cta: 'Erstgespräch anfragen',
    notFound: {
      title: 'Seite nicht gefunden',
      body: 'Die aufgerufene Adresse gibt es nicht oder nicht mehr.',
      action: 'Zur Startseite',
    },
  },

  fr: {
    skipToContent: 'Aller au contenu',
    toHomepage: 'A&C Consulting — page d’accueil',
    nav: {
      label: 'Navigation principale',
      menu: 'Menu',
      close: 'Fermer',
    },
    language: {
      label: 'Langue',
      choose: 'Choisir la langue',
      spokenNote: 'Conseil en allemand, français et portugais.',
      notAvailable: 'Cette version linguistique est en préparation.',
    },
    breadcrumbLabel: 'Vous êtes ici',
    footer: {
      contactHeading: 'Contact',
      legalHeading: 'Mentions légales',
      servicesHeading: 'Prestations',
      companyHeading: 'Entreprise',
      phone: 'Téléphone',
      email: 'Courriel',
      uid: 'IDE',
      finma: 'Registre FINMA',
      roleNote: 'Assurances · Fiduciaire · Finances personnelles',
      registryHeading: 'Réglementaire',
      rightsReserved: 'Tous droits réservés.',
      claim: 'Des perspectives pour demain',
    },
    page: {
      home: 'Accueil',
      versicherungen: 'Assurances',
      treuhand: 'Fiduciaire',
      buchhaltung: 'Comptabilité',
      lohnbuchhaltung: 'Salaires',
      mehrwertsteuer: 'TVA',
      jahresabschluss: 'Clôture annuelle',
      treuhaenderWechseln: 'Changer de fiduciaire',
      steuern: 'Impôts',
      firmengruendung: 'Création d’entreprise',
      personalFinance: 'Finances personnelles',
      wissen: 'Savoir',
      ueberUns: 'À propos',
      transparenz: 'Transparence',
      schadenfall: 'Sinistre',
      kontakt: 'Contact',
      impressum: 'Mentions légales',
      datenschutz: 'Protection des données',
    },
    navSection: {
      privatkunden: 'Pour les particuliers',
      unternehmen: 'Pour les entreprises',
      vertragspruefung: 'Analyse des contrats',
      schadenfall: 'Sinistre',
      budget: 'Budget',
      vorsorge: 'Prévoyance',
      team: 'Les associés',
      arbeitsweise: 'Notre façon de travailler',
      standort: 'Situation',
    },
    contactAddressLabel: 'Adresse',
    person: {
      responsibility: 'Domaine de responsabilité',
      languages: 'Langues',
    },
    sectionsNavLabel: 'Sections de cette page',
    moreLabel: 'En savoir plus',
    formPending:
      'Le formulaire sera activé dès que le point de réception côté serveur sera en place. D’ici là, vous pouvez nous joindre par téléphone ou par courriel.',
    pageComing: {
      badge: 'à venir',
      hint: 'Cette page n’est pas encore disponible.',
    },
    cta: 'Prendre rendez-vous',
    notFound: {
      title: 'Page introuvable',
      body: 'L’adresse demandée n’existe pas ou n’existe plus.',
      action: 'Retour à l’accueil',
    },
  },

  pt: {
    skipToContent: 'Ir para o conteúdo',
    toHomepage: 'A&C Consulting — página inicial',
    nav: {
      label: 'Navegação principal',
      menu: 'Menu',
      close: 'Fechar',
    },
    language: {
      label: 'Idioma',
      choose: 'Escolher idioma',
      spokenNote: 'Aconselhamento em alemão, francês e português.',
      notAvailable: 'Esta versão linguística está em preparação.',
    },
    breadcrumbLabel: 'Encontra-se aqui',
    footer: {
      contactHeading: 'Contacto',
      legalHeading: 'Informação legal',
      servicesHeading: 'Serviços',
      companyHeading: 'Empresa',
      phone: 'Telefone',
      email: 'E-mail',
      uid: 'IDE',
      finma: 'Registo FINMA',
      roleNote: 'Seguros · Fiduciária · Finanças pessoais',
      registryHeading: 'Regulatório',
      rightsReserved: 'Todos os direitos reservados.',
      claim: 'Perspectivas para amanhã',
    },
    page: {
      home: 'Início',
      versicherungen: 'Seguros',
      treuhand: 'Fiduciária',
      buchhaltung: 'Contabilidade',
      lohnbuchhaltung: 'Salários',
      mehrwertsteuer: 'IVA',
      jahresabschluss: 'Encerramento anual',
      treuhaenderWechseln: 'Mudar de fiduciária',
      steuern: 'Impostos',
      firmengruendung: 'Constituição de empresa',
      personalFinance: 'Finanças pessoais',
      wissen: 'Conhecimento',
      ueberUns: 'Sobre nós',
      transparenz: 'Transparência',
      schadenfall: 'Sinistro',
      kontakt: 'Contacto',
      impressum: 'Informação legal',
      datenschutz: 'Proteção de dados',
    },
    navSection: {
      privatkunden: 'Para particulares',
      unternehmen: 'Para empresas',
      vertragspruefung: 'Análise de contratos',
      schadenfall: 'Sinistro',
      budget: 'Orçamento',
      vorsorge: 'Previdência',
      team: 'Os sócios',
      arbeitsweise: 'Como trabalhamos',
      standort: 'Localização',
    },
    contactAddressLabel: 'Morada',
    person: {
      responsibility: 'Área de responsabilidade',
      languages: 'Línguas',
    },
    sectionsNavLabel: 'Secções desta página',
    moreLabel: 'Saber mais',
    formPending:
      'O formulário será activado assim que o ponto de recepção no servidor estiver disponível. Até lá, contacte-nos por telefone ou por e-mail.',
    pageComing: {
      badge: 'em breve',
      hint: 'Esta página ainda não está disponível.',
    },
    cta: 'Marcar uma primeira conversa',
    notFound: {
      title: 'Página não encontrada',
      body: 'O endereço indicado não existe ou já não está disponível.',
      action: 'Voltar ao início',
    },
  },
}

export function getUi(locale: Locale): UiMessages {
  return ui[locale]
}
