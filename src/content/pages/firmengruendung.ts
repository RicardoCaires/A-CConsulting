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
    eyebrow: 'Unternehmensgründung',
    heading: 'Klar gründen. Sicher starten.',
    actions: [
      { kind: 'page', target: 'kontakt', label: 'Erstgespräch anfragen' },
      { kind: 'phone' },
    ],
  },

  blocks: [
    // 02 Einzelfirma oder GmbH — seit dem 15.09.2026 nach Ricardos dritter
    // Fassung, einer ausgeschriebenen HTML-Vorlage
    // (`content/source/firmengruendung_rechtsformen_de.md`). Neu sind die
    // Erklaerungen unter den Merkmalen, die Einordnung am Fuss jeder Karte
    // und der gruene Knopf in der Leiste darunter.
    //
    // **Drei Angaben sind fachlich zu pruefen** und standen vorher nicht so
    // auf der Seite: die Umsatzschwelle von CHF 100'000 fuer den
    // Handelsregistereintrag, die Sacheinlage als Deckung des Stammkapitals
    // und die Nachschusspflichten. Ricardo ist darauf hingewiesen.
    {
      kind: 'rechtsformen',
      id: 'rechtsform',
      eyebrow: 'Rechtsformen in der Schweiz',
      heading: 'Einzelfirma oder GmbH?',
      lead: [
        'Beide Rechtsformen können ein guter Start sein. Entscheidend sind Ihre Risiken, das verfügbare Kapital und die Frage, wie Sie Ihr Unternehmen entwickeln möchten.',
      ],
      hintergrund: 'firmengruendung_muster',
      spalten: [
        {
          bild: 'firmengruendung_einzelfirma',
          titel: 'Einzelfirma',
          untertitel: 'Direkt starten',
          zeilen: [
            { label: 'Mindestkapital', wert: 'Keines vorgeschrieben' },
            {
              label: 'Haftung',
              wert: 'Persönlich und unbeschränkt',
              zusatz: 'Geschäfts- und Privatvermögen sind rechtlich nicht getrennt.',
            },
            { label: 'Gründung', wert: 'Einfach und ohne öffentliche Beurkundung' },
            {
              label: 'Sozialversicherungen',
              wert: 'Status als selbständigerwerbend',
              zusatz: 'Die Anerkennung erfolgt durch die zuständige Ausgleichskasse.',
            },
            {
              label: 'Handelsregister',
              wert: 'Je nach Tätigkeit freiwillig oder obligatorisch',
              zusatz: 'Bei einem kaufmännisch geführten Gewerbe ab CHF 100\'000 Jahresumsatz obligatorisch.',
            },
          ],
          passt: {
            titel: 'Passt häufig, wenn …',
            text: 'Sie allein starten, wenig formalen Aufwand möchten und das persönliche Haftungsrisiko überschaubar ist.',
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
              zusatz: 'Bei der Gründung vollständig einbezahlt oder durch Sacheinlagen gedeckt.',
            },
            {
              label: 'Haftung',
              wert: 'Grundsätzlich mit dem Gesellschaftsvermögen',
              zusatz: 'Statutarische Nachschusspflichten und persönliche Garantien bleiben möglich.',
            },
            { label: 'Gründung', wert: 'Öffentliche Beurkundung und Statuten erforderlich' },
            {
              label: 'Sozialversicherungen',
              wert: 'In der eigenen GmbH angestellt',
              zusatz: 'Lohn und Sozialversicherungen laufen über die Gesellschaft.',
            },
            {
              label: 'Handelsregister',
              wert: 'Eintrag obligatorisch',
              zusatz: 'Die GmbH entsteht rechtlich erst mit der Eintragung.',
            },
          ],
          passt: {
            titel: 'Passt häufig, wenn …',
            text: 'Sie Privat- und Geschäftsvermögen trennen, mit mehreren Personen gründen oder eine eigenständige Gesellschaft aufbauen möchten.',
          },
        },
      ],
      hinweis: {
        titel: 'Welche Rechtsform passt zu Ihrem Vorhaben?',
        text: 'Neben Haftung und Kapital zählen auch Steuern, Vorsorge und Ihre weiteren Pläne. Wir vergleichen die Varianten anhand Ihrer Situation.',
        aktion: { target: 'kontakt', label: 'Rechtsform besprechen' },
      },
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

    // 07 Gründungscheckliste — seit dem 14.09.2026 eine Karte mit Abbildung
    // nach Ricardos HTML-Vorlage
    // (`content/source/firmengruendung_checkliste_de.md`). Kategoriezeile,
    // Titel und Satz stammen von dort; der bisherige Satz steht unveraendert
    // in `schritt4_fassung2_de.md`.
    //
    // **Der Knopf bleibt abgeschaltet, solange `file` auf `null` steht.**
    // Liegt die Datei unter `public/dokumente/` , traegt man sie hier ein —
    // dann wird der Knopf gruen und verlinkt, und der Hinweis faellt weg.
    {
      kind: 'checkliste',
      id: 'checkliste',
      eyebrow: 'Für Ihren Start',
      heading: 'Gründungscheckliste',
      bild: 'firmengruendung_checkliste',
      paragraphs: [
        'Welche Unterlagen brauchen Sie, und was geschieht in welcher Reihenfolge? Die Checkliste fasst die wichtigsten Schritte auf einer Seite zusammen.',
      ],
      download: { label: 'Checkliste herunterladen (PDF)', file: null },
      hinweis: 'Die PDF-Checkliste ist in Vorbereitung.',
    },

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
