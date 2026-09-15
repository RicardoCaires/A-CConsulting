/**
 * /de/treuhand/treuhaender-wechseln
 *
 * QUELLE: `content/source/schritt4_fassung2_de.md`, Abschnitt
 * „Treuhänder wechseln". Wortlaut unveraendert uebernommen.
 *
 * Die Seite arbeitet durchgehend mit der Beschreibung des Vorgehens statt mit
 * Zusagen oder Erfahrungsangaben. Keine Aussage ueber die Arbeitsweise anderer
 * Anbieter.
 */

import type { PageContent } from '../types'

export const treuhaenderWechseln: PageContent = {
  key: 'treuhaenderWechseln',

  meta: {
    title: 'Den Treuhänder wechseln',
    description:
      'Wir begleiten den Wechsel strukturiert und diskret. Zuerst klären wir mit Ihnen die bestehende Situation, den geeigneten Zeitpunkt und die Unterlagen, die für die Übernahme nötig sind.',
  },

  // 01 Seitenkopf
  hero: {
    banner: {
      themenzeile: 'TREUHÄNDERWECHSEL',
      ueberschrift: 'Klar wechseln. Sicher weiter.',
    },
    heading: 'Klar wechseln. Sicher weiter.',
    actions: [
      { kind: 'page', target: 'kontakt', label: 'Erstgespräch anfragen' },
      { kind: 'phone' },
    ],
  },

  blocks: [
    // 02 Was einen Wechsel ausloesen kann — seit dem 14.09.2026 drei gleich
    // grosse Themenkarten nach Ricardos HTML-Vorlage
    // (`content/source/wechsel_gruende_de.md`). Vorher eine Aufzaehlung mit
    // sechs Punkten aus `schritt4_fassung2_de.md`; deren Wortlaut steht dort
    // unveraendert weiter. Der Anker `gruende` bleibt.
    //
    // Das Ziel des Knopfs kommt ueber `path()` aus der Pfad-Registry; die
    // Vorlage schreibt dort die volle Adresse der Vorschau hinein.
    {
      kind: 'themenkarten',
      id: 'gruende',
      eyebrow: 'Zusammenarbeit neu ausrichten',
      heading: 'Was einen Wechsel auslösen kann',
      lead: [
        'Manchmal ändern sich die Anforderungen. Manchmal passt die Zusammenarbeit nicht mehr. Diese Fragen kommen in Gesprächen mit uns häufig zur Sprache.',
      ],
      karten: [
        {
          bild: 'wechsel_grund_betreuung',
          tag: 'Betreuung',
          titel: 'Ein fester Kontakt fehlt',
          text: 'Ihre Ansprechperson hat gewechselt, oder Rückfragen bleiben zu lange offen. Sie wünschen sich wieder klare Zuständigkeiten und verlässliche Antworten.',
        },
        {
          bild: 'wechsel_grund_ueberblick',
          tag: 'Überblick',
          titel: 'Kosten und Abläufe sollen klarer werden',
          text: 'Sie möchten Leistungen und Kosten besser nachvollziehen oder Unterlagen digital austauschen, statt vorwiegend auf Papier zu arbeiten.',
        },
        {
          bild: 'wechsel_grund_entwicklung',
          tag: 'Entwicklung',
          titel: 'Ihr Bedarf hat sich verändert',
          text: 'Ihr Betrieb ist gewachsen, neue Aufgaben sind dazugekommen oder eine Beratung in einer anderen Sprache würde die Zusammenarbeit erleichtern.',
        },
      ],
      abschluss: {
        text: 'Sie brauchen keinen besonderen Anlass für ein Erstgespräch. Wir hören zu und besprechen mit Ihnen, ob und wie ein Wechsel sinnvoll wäre.',
        aktion: { target: 'kontakt', label: 'Situation besprechen' },
      },
    },

    // 03 So laeuft der Wechsel ab — seit dem 15.09.2026 eine waagrechte Reihe
    // nach Ricardos HTML-Vorlage (`content/source/wechsel_ablauf_de.md`).
    // Vorher eine senkrechte `steps`-Liste; deren Wortlaut steht unveraendert
    // in `schritt4_fassung2_de.md`. Der Anker `vorgehen` bleibt.
    //
    // **Die Reihe bricht nie in eine Liste um** — auf schmalen Geraeten wird
    // sie gescrollt, mit Einrasten. Das verlangt der Auftrag ausdruecklich.
    //
    // Die fuenf Piktogramme hat Ricardo zusammen mit der Vorlage geliefert,
    // benannt nach genau diesen fuenf Schritten. Die Vorlage selbst zeigt nur
    // die Nummernkreise; ohne `bild` faellt das Piktogramm weg.
    {
      kind: 'prozessreihe',
      id: 'vorgehen',
      banner: {
        themenzeile: 'DER WECHSEL',
        ueberschrift: 'Geordnet übergeben. Direkt starten.',
      },
      eyebrow: 'Strukturiert übergeben',
      heading: 'So läuft der Wechsel ab',
      bereichsname: 'Fünf Schritte des Treuhänderwechsels',
      lead: [
        'Wir klären zuerst die Ausgangslage und führen die Übergabe danach Schritt für Schritt durch. Sie wissen jederzeit, was als Nächstes geschieht.',
      ],
      schritte: [
        {
          bild: 'wechsel_ablauf_situation',
          titel: 'Situation klären',
          text: 'Wir erfassen die heutigen Aufgaben, Termine, Systeme und den Stand der laufenden Arbeiten.',
        },
        {
          bild: 'wechsel_ablauf_leistungen',
          titel: 'Leistungen festlegen',
          text: 'Sie erhalten eine klare Übersicht: Was übernehmen wir, was bleibt bei Ihnen und welche Kosten entstehen?',
        },
        {
          bild: 'wechsel_ablauf_zeitpunkt',
          titel: 'Zeitpunkt bestimmen',
          text: 'Wir prüfen Vertrag, Kündigungsfristen und offene Arbeiten und legen einen passenden Übergabetermin fest.',
        },
        {
          bild: 'wechsel_ablauf_uebergabe',
          titel: 'Übergabe koordinieren',
          text: 'Nach Ihrem Auftrag stimmen wir die Übergabe mit dem bisherigen Treuhänder ab und übernehmen die Unterlagen.',
        },
        {
          bild: 'wechsel_ablauf_start',
          titel: 'Zusammenarbeit starten',
          text: 'Wir richten die Abläufe ein, prüfen die übernommenen Daten und melden uns, falls etwas ergänzt werden muss.',
        },
      ],
      hinweis: {
        titel: 'Sie behalten die Kontrolle:',
        text: 'Ohne Ihren ausdrücklichen Auftrag nehmen wir keinen Kontakt zu Ihrem bisherigen Treuhänder auf.',
      },
    },

    // 04 Wann ist ein Wechsel sinnvoll — seit dem 15.09.2026 zwei gleich grosse
    // Kacheln nach Ricardos HTML-Vorlage
    // (`content/source/wechsel_zeitpunkt_de.md`). Vorher drei Absaetze aus
    // `schritt4_fassung2_de.md`; deren Wortlaut steht dort unveraendert
    // weiter. Der Anker `zeitpunkt` bleibt.
    //
    // **Die Vorlage bringt keine Beratungsbox und keinen Knopf mit.** Beides
    // war im Auftrag genannt, steht aber nicht in der Datei; erfunden wird
    // nichts. Zwei Abschnitte weiter oben traegt die Seite bereits eine
    // Einladung mit gruenem Knopf.
    {
      kind: 'rollen',
      id: 'zeitpunkt',
      eyebrow: 'Den Übergang gut planen',
      heading: 'Wann ist ein Wechsel sinnvoll?',
      lead: [
        'Ein Wechsel ist zum Jahresbeginn besonders übersichtlich. Er kann aber auch während des Geschäftsjahres gut gelingen, wenn die Übergabe sorgfältig abgestimmt wird.',
      ],
      karten: [
        {
          bild: 'wechsel_zeitpunkt_geschaeftsjahr',
          tag: 'Klarer Schnitt',
          titel: 'Zum neuen Geschäftsjahr',
          text: 'Der bisherige Jahresabschluss bildet einen sauberen Übergabepunkt. Neue Prozesse und Zuständigkeiten starten gemeinsam mit dem neuen Geschäftsjahr.',
          punkte: [
            'Abgeschlossener Buchungsstand',
            'Klare Abgrenzung der Zuständigkeiten',
            'Einfacher Start mit neuen Abläufen',
          ],
        },
        {
          bild: 'wechsel_zeitpunkt_unterjaehrig',
          tag: 'Flexibel möglich',
          titel: 'Während des Geschäftsjahres',
          text: 'Ein unterjähriger Wechsel ist ebenfalls möglich. Wichtig ist, dass der aktuelle Stand vollständig übergeben und offene Arbeiten eindeutig zugeteilt werden.',
          punkte: [
            'Buchhaltung bis zum Stichtag abgestimmt',
            'Löhne und Mehrwertsteuer vollständig übergeben',
            'Offene Fristen und Aufgaben dokumentiert',
          ],
        },
      ],
    },

    // 09 Häufige Fragen
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
          question: 'Kann ich mitten im Jahr wechseln?',
          answer:
            'Ein unterjähriger Wechsel ist grundsätzlich möglich. Er verlangt etwas mehr Abstimmung bei Mehrwertsteuer und Löhnen.',
        },
        {
          question: 'Was, wenn der Abschluss noch offen ist?',
          answer:
            'Dann wird zuerst festgelegt, wer ihn erstellt. Beide Wege sind möglich. Entscheidend ist, dass die Zuständigkeit vor dem Wechsel geklärt ist.',
        },
        {
          question: 'Erfährt mein bisheriger Treuhänder davon?',
          answer:
            'Erst dann, wenn Sie uns beauftragen, mit ihm Kontakt aufzunehmen. Vorher nicht.',
        },
        {
          question: 'Erhalte ich alle Unterlagen zurück?',
          answer: [
            'Was herausgegeben wird und in welcher Form, richtet sich nach Ihrer Vereinbarung und der Situation. ',
            
          ],
        },
        {
          question: 'Muss ich die Software wechseln?',
          answer: 'Wir prüfen von Fall zu Fall, welches System sich übernehmen lässt.',
        },
        {
          question: 'Wer schreibt die Kündigung?',
          answer: 'Die Kündigung beim bisherigen Treuhänder bereiten wir für Sie vor.',
        },
      ],
      schluss: 'Persönlich. Unabhängig. An Ihrer Seite.',
    },

  ],
}
