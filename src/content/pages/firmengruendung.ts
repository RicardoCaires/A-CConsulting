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
    heading: 'Firma gründen im Kanton Bern',
    lead: 'Wir begleiten Sie von der Wahl der Rechtsform bis zur ersten Buchhaltung und sagen Ihnen vorher, was auf Sie zukommt.',
    actions: [
      { kind: 'page', target: 'kontakt', label: 'Erstgespräch anfragen' },
      { kind: 'phone' },
    ],
  },

  blocks: [
    // 02 Einzelfirma oder GmbH — seit dem 14.09.2026 zwei Karten im Vergleich,
    // am selben Tag nach Ricardos zweiter Referenzgrafik samt ausgeschriebenem
    // Auftragstext ueberarbeitet (`content/source/firmengruendung_rechtsformen_de.md`).
    //
    // **Der Wortlaut stammt aus diesem Auftragstext.** Die erste Fassung trug
    // die Saetze aus `schritt4_fassung2_de.md`; sie stehen dort unveraendert
    // weiter, aber nicht mehr auf der Seite.
    //
    // **Die Zahl CHF 20'000 steht jetzt da.** Schritt 4 fuehrt die Hoehe des
    // Stammkapitals als fachlich zu pruefen; Ricardo hat sie im Auftrag
    // ausgeschrieben und ist zweimal auf den Vorbehalt hingewiesen.
    {
      kind: 'rechtsformen',
      id: 'rechtsform',
      eyebrow: 'Rechtsformen in der Schweiz',
      heading: 'Einzelfirma oder GmbH?',
      lead: [
        'Die passende Rechtsform hängt von Kapital, Haftung, Aufwand und Ihrer Situation ab. Hier sehen Sie die wichtigsten Unterschiede auf einen Blick.',
      ],
      hintergrund: 'firmengruendung_muster',
      spalten: [
        {
          bild: 'firmengruendung_einzelfirma',
          titel: 'Einzelfirma',
          untertitel: 'Einfach starten',
          zeilen: [
            { label: 'Kapital', wert: 'Kein Mindestkapital' },
            {
              label: 'Haftung',
              wert: 'Mit dem Privatvermögen',
              zusatz: 'Unbeschränkte Haftung',
            },
            {
              label: 'Gründungsaufwand',
              wert: 'Einfach und günstig',
              zusatz: 'Schnell gegründet',
            },
            {
              label: 'Sozialversicherungen',
              wert: 'Inhaber/in als selbständigerwerbend',
              zusatz: 'Selbst für Sozialversicherungen zuständig',
            },
            {
              label: 'Handelsregister',
              wert: 'Kein Eintrag erforderlich',
              zusatz: 'Nur bei bestimmtem Umsatz verpflichtend',
            },
            {
              label: 'Wirkung / Auftreten',
              wert: 'Einfach und flexibel',
              zusatz: 'Ideal für den Start und kleinere Projekte',
            },
          ],
        },
        {
          bild: 'firmengruendung_gmbh',
          titel: 'GmbH',
          untertitel: 'Stabil wachsen',
          zeilen: [
            { label: 'Kapital', wert: 'CHF 20\'000 Stammkapital' },
            {
              label: 'Haftung',
              wert: 'Auf die Gesellschaft beschränkt',
              zusatz: 'Kein Zugriff auf das Privatvermögen',
            },
            {
              label: 'Gründungsaufwand',
              wert: 'Höherer Aufwand',
              zusatz: 'Notariat und Handelsregister nötig',
            },
            {
              label: 'Sozialversicherungen',
              wert: 'In der eigenen Firma angestellt',
              zusatz: 'Lohn und Sozialversicherungen über die GmbH',
            },
            {
              label: 'Handelsregister',
              wert: 'Eintrag obligatorisch',
              zusatz: 'Öffentliche Eintragung',
            },
            {
              label: 'Wirkung / Auftreten',
              wert: 'Professionell und vertrauenswürdig',
              zusatz: 'Geeignet für Wachstum und Zusammenarbeit mit Partnern',
            },
          ],
        },
      ],
      hinweis: {
        bild: 'firmengruendung_beratung',
        titel: 'Welche Rechtsform ist die richtige für Sie?',
        text: 'Das hängt von Ihren individuellen Zielen, Risiken und Plänen ab. Gerne beraten wir Sie persönlich.',
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

    // 07 Gründungscheckliste
    {
      kind: 'prose',
      id: 'checkliste',
      heading: 'Gründungscheckliste',
      paragraphs: [
        'Der Ablauf und die nötigen Unterlagen auf einer Seite, ohne Anmeldung. Auch nützlich, wenn Sie noch überlegen.',
      ],
      download: { label: 'Checkliste herunterladen (PDF)', file: null },
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
