/**
 * /de/kontakt
 *
 * QUELLE: `content/source/schritt4_fassung2_de.md`, Abschnitt „Kontakt".
 * Wortlaut unveraendert uebernommen.
 *
 * Telefon und E-Mail stehen bewusst ueber dem Formular, damit der telefonische
 * Weg nicht darunter verschwindet.
 *
 * Das Formular ist seit dem 16.09.2026 eine Eingabemaske nach Ricardos
 * HTML-Vorlage. Der serverseitige Endpunkt fehlt weiterhin; der Absendeknopf
 * steht darum sichtbar abgeschaltet mit dem Hinweis `ui.formPending`. Ein
 * Formular, das Anfragen still verschluckt, waere schlechter als keines.
 */

import type { PageContent } from '../types'

export const kontakt: PageContent = {
  key: 'kontakt',

  meta: {
    title: 'So erreichen Sie uns',
    description:
      'Beratung auf Deutsch, Französisch und Portugiesisch. A&C Consulting GmbH, Bielstrasse 10, 2558 Aegerten',
  },

  hero: {
    banner: {
      themenzeile: 'KONTAKT',
      ueberschrift: 'Ihr Anliegen. Unser nächster Schritt.',
    },
    heading: 'So erreichen Sie uns',
  },

  blocks: [
    // Am 16.09.2026 auf Ricardos Anweisung entfallen: 01 Direktkontakt
    // (Telefon, E-Mail, Adresse), 03 „Was nach Ihrer Anfrage passiert",
    // 04 „Unser Büro" und 05 „Termine ausserhalb der Bürozeiten". Der Wortlaut
    // steht unveraendert in `content/source/schritt4_fassung2_de.md`; Telefon
    // und E-Mail stehen weiterhin im Kontaktformular und im Fussbereich.

    // 02 Kontaktformular — seit dem 16.09.2026 nach Ricardos HTML-Vorlage
    // (`content/source/kontakt_formular_de.md`). Bis dahin stand hier der
    // Umriss `formOutline`; der Wortlaut steht dort unveraendert.
    //
    // **Abgesendet wird noch nichts:** Der serverseitige Endpunkt aus
    // Abschnitt 7 der Hausordnung fehlt. Der Knopf steht darum abgeschaltet
    // mit dem bestehenden Hinweis `ui.formPending`.
    {
      kind: 'kontaktformular',
      id: 'formular',
      eyebrow: 'Persönlich erreichbar',
      heading: 'Schreiben Sie uns.',
      lead: 'Schildern Sie uns kurz Ihr Anliegen. Wir melden uns persönlich bei Ihnen und klären gemeinsam den nächsten Schritt.',
      kontakt: {
        telefonLabel: 'Telefon',
        telefonText: 'Jetzt anrufen',
        emailLabel: 'E-Mail',
      },
      zusage: {
        titel: 'Persönliche Rückmeldung',
        text: 'Wir beantworten Ihre Anfrage in der Regel innerhalb eines Werktags.',
      },
      formular: {
        heading: 'Wobei dürfen wir Sie unterstützen?',
        pflichtHinweis: '* Pflichtfelder',
        name: 'Name *',
        email: 'E-Mail *',
        telefon: 'Telefon',
        anliegen: 'Anliegen *',
        anliegenPlatzhalter: 'Bitte auswählen',
        anliegenWahl: [
          'Versicherungen',
          'Treuhand und Buchhaltung',
          'Steuern',
          'Firmengründung',
          'Finanzplanung',
          'Anderes Anliegen',
        ],
        kontaktartFrage: 'Wie dürfen wir Sie kontaktieren?',
        kontaktartEmail: 'E-Mail',
        kontaktartTelefon: 'Telefon',
        nachricht: 'Ihre Nachricht *',
        nachrichtPlatzhalter: 'Beschreiben Sie Ihr Anliegen in wenigen Sätzen.',
        zustimmungVor: 'Ich habe die ',
        zustimmungLink: 'Datenschutzerklärung',
        zustimmungNach:
          ' gelesen und stimme der Verarbeitung meiner Angaben zur Bearbeitung der Anfrage zu.',
        knopf: 'Anfrage senden →',
        vertraulich: 'Ihre Angaben werden vertraulich behandelt und nicht weitergegeben.',
      },
    },

    // 06 Abschluss
    {
      kind: 'cta',
      id: 'abschluss',
      heading: 'Am schnellsten geht es telefonisch',
      paragraphs: [
        'Wenn Sie lieber sprechen als schreiben: Rufen Sie an. Sie landen bei einem von uns beiden, nicht in einer Warteschlange.',
      ],
      actions: [
        { kind: 'mail', label: 'E-Mail schreiben' },
        { kind: 'phone' },
      ],
    },
  ],
}
