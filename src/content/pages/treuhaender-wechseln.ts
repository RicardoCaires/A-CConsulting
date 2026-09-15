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
    heading: 'Den Treuhänder wechseln',
    lead: 'Wir begleiten den Wechsel strukturiert und diskret. Zuerst klären wir mit Ihnen die bestehende Situation, den geeigneten Zeitpunkt und die Unterlagen, die für die Übernahme nötig sind.',
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

    // 03 So gehen wir vor
    {
      kind: 'steps',
      id: 'vorgehen',
      heading: 'So gehen wir vor',
      steps: [
        {
          heading: 'Gespräch über die heutige Situation',
          body: 'Welche Aufgaben laufen, in welchem Rhythmus, mit welcher Software, und was im laufenden Jahr bereits erledigt ist.',
        },
        {
          heading: 'Übersicht und Offerte',
          body: 'Sie erhalten schriftlich, welche Aufgaben wir übernehmen würden und was bei Ihnen bleibt.',
        },
        {
          heading: 'Zeitpunkt und Vertragliches',
          body: [
            'Wir schauen gemeinsam Ihre bestehende Vereinbarung an und legen einen Termin fest. Kündigungsfristen und Bedingungen ergeben sich aus Ihrem Vertrag. ',
            
          ],
        },
        {
          heading: 'Übernahme der Unterlagen',
          body: 'Auf Ihren Auftrag hin nehmen wir Kontakt mit Ihrem bisherigen Treuhänder auf und stimmen die Übergabe ab. Ohne Ihre Beauftragung nehmen wir keinen Kontakt auf.',
        },
        {
          heading: 'Start',
          body: 'Wir richten die Buchhaltung ein, übernehmen die Daten und prüfen sie auf Vollständigkeit. Fehlt etwas, melden wir uns bei Ihnen.',
        },
      ],
    },

    // 04 Der geeignete Zeitpunkt
    {
      kind: 'prose',
      id: 'zeitpunkt',
      heading: 'Wann ein Wechsel sinnvoll ist',
      paragraphs: [
        'Am einfachsten ist ein Wechsel auf den Beginn eines neuen Geschäftsjahres, weil dann ein abgeschlossener Stand übergeben wird.',
        'Ein unterjähriger Wechsel ist grundsätzlich ebenfalls möglich. Er verlangt etwas mehr Abstimmung, vor allem bei der Mehrwertsteuer und bei den Löhnen, weil dort die Zahlen des ganzen Jahres zusammenpassen müssen.',
        'Welcher Zeitpunkt für Sie sinnvoll ist, hängt von Ihrem Vertrag und vom Stand der laufenden Arbeiten ab. Das schauen wir im Gespräch an.',
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
