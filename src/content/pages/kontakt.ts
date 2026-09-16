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
    // 01 Direktkontakt
    // Die Ueberschrift dieses Abschnitts ist zugleich der Seitentitel
    // („So erreichen Sie uns"), darum steht sie oben und nicht noch einmal hier.
    {
      kind: 'contact',
      id: 'direkt',
    },

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

    // 03 Was danach passiert
    {
      kind: 'prose',
      id: 'ablauf',
      heading: 'Was nach Ihrer Anfrage passiert',
      paragraphs: [
        'Wir melden uns telefonisch oder per E-Mail und schlagen einen Termin für ein Erstgespräch vor.',
        'Damit das Gespräch für Sie etwas bringt, senden wir Ihnen vorher einige Fragen zu Ihrer Situation, zum Beispiel zur Rechtsform, zur Grösse Ihres Betriebs und zu den Aufgaben, um die es geht. Das Ausfüllen ist freiwillig und dauert wenige Minuten.',
      ],
    },

    // 04 Büro und Anfahrt
    {
      kind: 'prose',
      id: 'buero',
      heading: 'Unser Büro',
      paragraphs: [
        [{ company: 'buero' }],
        'Öffnungszeiten: 08:00–12:00 und 13:30–17:00 Uhr',
        'Anfahrt: Beim Büro stehen drei Parkplätze zur Verfügung.',
      ],
    },

    // 05 Termine ausserhalb der Bürozeiten
    {
      kind: 'prose',
      id: 'randzeiten',
      heading: 'Termine ausserhalb der Bürozeiten',
      paragraphs: [
        'Termine am Abend oder am Samstag bieten wir auf Anfrage an.',
      ],
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
