/**
 * /de/firmengruendung
 *
 * QUELLE: `content/source/schritt4_fassung2_de.md`, Abschnitt „Firmengründung".
 * Wortlaut unveraendert uebernommen. Reihenfolge der neun Abschnitte wie dort.
 *
 * Auf dieser Seite steht jede rechtliche und fachliche Aussage einzeln unter
 * Vorbehalt — so verlangt es die Quelle, damit beim Pruefen keine Angabe
 * uebersehen wird.
 */

import type { PageContent } from '../types'

export const firmengruendung: PageContent = {
  key: 'firmengruendung',

  meta: {
    title: 'Firma gründen im Kanton Bern',
    description:
      'Wir begleiten Sie von der Wahl der Rechtsform bis zur ersten Buchhaltung und sagen Ihnen vorher, was auf Sie zukommt.',
  },

  // 01 Seitenkopf
  hero: {
    banner: {
      themenzeile: 'UNTERNEHMENSGRÜNDUNG',
      ueberschrift: 'Klar gründen. Sicher starten.',
    },
    heading: 'Firma gründen im Kanton Bern',
    actions: [
      { kind: 'page', target: 'kontakt', label: 'Erstgespräch anfragen' },
      { kind: 'phone' },
    ],
  },

  blocks: [
    // 02 Einzelunternehmen oder GmbH — seit dem 16.09.2026 nach Ricardos
    // vierter Fassung, einer HTML-Vorlage
    // (`content/source/firmengruendung_rechtsformen_de.md`): fuenf Kriterien je
    // Karte, Orientierungshinweis, Abschlussflaeche mit Knopf und Quellenzeile.
    // Der Vergleich stuetzt sich laut Auftrag auf das KMU-Portal des Bundes.
    {
      kind: 'rechtsformen',
      id: 'rechtsform',
      eyebrow: 'Rechtsform wählen',
      heading: 'Einzelunternehmen oder GmbH?',
      lead: [
        'Entscheidend sind Haftung, Kapital, Gründungsaufwand und die gewünschte Trennung zwischen Privat- und Geschäftsvermögen.',
      ],
      spalten: [
        {
          bild: 'firmengruendung_einzelfirma',
          titel: 'Einzelunternehmen',
          untertitel: 'Einfach starten',
          zeilen: [
            {
              label: 'Mindestkapital',
              wert: 'Keines vorgeschrieben',
              zusatz: 'Der tatsächliche Kapitalbedarf hängt vom Vorhaben ab.',
            },
            {
              label: 'Haftung',
              wert: 'Persönlich und unbeschränkt',
              zusatz: 'Die inhabende Person haftet auch mit dem Privatvermögen.',
            },
            {
              label: 'Gründung',
              wert: 'Einfach und ohne Beurkundung',
              zusatz: 'Die Tätigkeit kann grundsätzlich direkt aufgenommen werden.',
            },
            {
              label: 'Handelsregister',
              wert: 'Je nach Tätigkeit',
              zusatz: 'Bei kaufmännischem Gewerbe ab CHF 100\'000 Jahresumsatz obligatorisch.',
            },
            {
              label: 'Rechtsstellung',
              wert: 'Keine eigene Rechtspersönlichkeit',
              zusatz: 'Unternehmen und inhabende Person sind rechtlich nicht getrennt.',
            },
          ],
          passt: {
            titel: 'Passt häufig, wenn …',
            text: 'Sie allein starten, wenig Formalitäten wünschen und das persönliche Haftungsrisiko überschaubar ist.',
          },
        },
        {
          bild: 'firmengruendung_gmbh',
          titel: 'GmbH',
          untertitel: 'Getrennt aufbauen',
          zeilen: [
            {
              label: 'Mindestkapital',
              wert: 'CHF 20\'000',
              zusatz: 'Vollständig einbezahlt oder durch Sacheinlagen gedeckt.',
            },
            {
              label: 'Haftung',
              wert: 'Grundsätzlich Gesellschaftsvermögen',
              zusatz: 'Statutarische Nachschusspflichten können vorgesehen werden.',
            },
            {
              label: 'Gründung',
              wert: 'Beurkundung und Statuten',
              zusatz: 'Die Gründung muss öffentlich beurkundet werden.',
            },
            {
              label: 'Handelsregister',
              wert: 'Eintrag obligatorisch',
              zusatz: 'Die GmbH entsteht rechtlich erst mit der Eintragung.',
            },
            {
              label: 'Rechtsstellung',
              wert: 'Eigene juristische Person',
              zusatz: 'Gesellschaft und Privatpersonen sind rechtlich getrennt.',
            },
          ],
          passt: {
            titel: 'Passt häufig, wenn …',
            text: 'Sie Geschäfts- und Privatvermögen trennen oder mit mehreren Personen gründen möchten.',
          },
        },
      ],
      hinweis: {
        titel: 'Welche Rechtsform passt zu Ihrem Vorhaben?',
        text: 'Wir vergleichen die Varianten anhand Ihrer Risiken, Pläne und finanziellen Situation.',
        aktion: { target: 'kontakt', label: 'Rechtsform besprechen' },
      },
      quelle:
        'Kurzvergleich gemäss KMU-Portal des Bundes. Die passende Rechtsform ist im Einzelfall zu prüfen.',
    },

    // 04 Wer welchen Teil uebernimmt — seit dem 14.09.2026 vier gleich grosse
    // Kacheln nach Ricardos HTML-Vorlage
    // (`content/source/firmengruendung_rollen_de.md`). Vorher vier Absaetze
    // aus `schritt4_fassung2_de.md`; deren Wortlaut steht dort unveraendert
    // weiter, aber nicht mehr auf der Seite. Der Anker bleibt.
    {
      kind: 'rollen',
      id: 'zustaendigkeiten',
      eyebrow: 'Gut aufeinander abgestimmt',
      heading: 'Wer übernimmt welchen Teil?',
      lead: [
        'Eine Gründung bringt mehrere Stellen zusammen. Wir koordinieren den Ablauf und zeigen Ihnen, wer wofür zuständig ist.',
      ],
      karten: [
        {
          bild: 'firmengruendung_rolle_ac',
          tag: 'Ihr Ansprechpartner',
          titel: 'A&C Consulting',
          text: 'Wir klären mit Ihnen die Rechtsform, bereiten die Unterlagen vor und koordinieren die nächsten Schritte mit Bank und Notariat. Anmeldungen und den Aufbau der Buchhaltung begleiten wir ebenfalls.',
        },
        {
          bild: 'firmengruendung_rolle_notariat',
          tag: 'Beurkundung',
          titel: 'Notariat',
          text: 'Wo eine öffentliche Beurkundung nötig ist, übernimmt sie das Notariat. Es erstellt die erforderlichen Urkunden und reicht die Anmeldung beim Handelsregister ein.',
        },
        {
          bild: 'firmengruendung_rolle_bank',
          tag: 'Kapitaleinzahlung',
          titel: 'Bank',
          text: 'Ist Stamm- oder Aktienkapital erforderlich, stellt die Bank das Kapitaleinzahlungskonto bereit. Nach der Eintragung kann das Geschäftskonto eingerichtet werden.',
        },
        {
          bild: 'firmengruendung_rolle_behoerden',
          tag: 'Eintrag und Anmeldung',
          titel: 'Behörden',
          text: 'Je nach Rechtsform und Tätigkeit folgen Einträge und Anmeldungen beim Handelsregisteramt, bei der Ausgleichskasse und bei der Steuerverwaltung.',
        },
      ],
    },

    // 07 Gründungscheckliste — am 16.09.2026 auf Ricardos Anweisung
    // entfallen. Wortlaut in `content/source/firmengruendung_checkliste_de.md`.

    // 08 Häufige Fragen
    // Seit dem 11.09.2026 im Baustein der Versicherungsseite („häufige Fragen
    // überall gleich designen", Ricardo). Fragen und Antworten unveraendert.
    {
      kind: 'fragen',
      id: 'fragen',
      eyebrow: 'Gut zu wissen',
      heading: 'Häufige Fragen',
      lead: [
        'Hier finden Sie kompakte Antworten auf die wichtigsten Fragen.',
        'Sollten Sie weitere Anliegen haben, sind wir gerne persönlich für Sie da.',
      ],
      items: [
        {
          question: 'Wie lange dauert eine Gründung?',
          answer:
            'Das hängt von Notariat, Bank und Handelsregisteramt ab. Wir sagen Ihnen im Gespräch, womit derzeit zu rechnen ist.',
        },
        {
          question: 'Brauche ich ein Geschäftskonto?',
          answer: [
            'Für die GmbH braucht es zuerst ein Sperrkonto für das Stammkapital, das anschliessend in ein Geschäftskonto übergeht. Bei der Einzelfirma ist ein getrenntes Konto nicht vorgeschrieben, für die Buchhaltung aber sinnvoll. ',
            
          ],
        },
        {
          question: 'Ab wann bin ich mehrwertsteuerpflichtig?',
          answer: [
            'Das hängt von Ihrem Umsatz und Ihrer Tätigkeit ab. Wir rechnen vor der Gründung mit Ihnen durch, ob und ab wann die Pflicht für Sie gilt. ',
            
          ],
        },
        {
          question: 'Kann ich später von der Einzelfirma in eine GmbH wechseln?',
          answer: [
            'Ein Wechsel der Rechtsform ist möglich. Er sollte vorbereitet werden, insbesondere steuerlich. ',
            
          ],
        },
        {
          question: 'Muss ich mich bei der AHV anmelden?',
          answer: [
            'Bei einer Einzelfirma als selbständigerwerbend, bei einer GmbH als Arbeitgeberin für den eigenen Lohn. ',
            
            ' Die Anmeldung übernehmen wir.',
          ],
        },
        {
          question: 'Übernehmen Sie danach auch die Buchhaltung?',
          answer:
            'Wenn Sie möchten. Die Unterlagen aus der Gründung liegen dann bereits vor. Eine Verpflichtung entsteht durch die Gründungsbegleitung nicht.',
        },
      ],
      schluss: 'Persönlich. Unabhängig. An Ihrer Seite.',
    },

  ],
}
