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
    // 02 Typische Gründe
    {
      kind: 'list',
      id: 'gruende',
      heading: 'Weshalb Mandate wechseln',
      intro: ['Typische Gründe für einen Wechsel sind:'],
      items: [
        'Der Ansprechpartner hat gewechselt oder ist nicht mehr da.',
        'Rückfragen bleiben länger offen, als es im Alltag passt.',
        'Die Zusammensetzung der Kosten ist schwer nachvollziehbar.',
        'Die Zusammenarbeit läuft weitgehend auf Papier, gewünscht wäre ein digitaler Ablauf.',
        'Der Betrieb ist gewachsen und der bisherige Umfang passt nicht mehr.',
        'Beratung in einer anderen Sprache wäre einfacher.',
      ],
      outro: ['Es braucht keinen dieser Gründe, um ein Gespräch zu führen.'],
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

    // 05 Unterlagen
    {
      kind: 'list',
      id: 'unterlagen',
      heading: 'Welche Unterlagen für die Übernahme nötig sind',
      intro: ['Für die Weiterführung sind in der Regel folgende Unterlagen nötig:'],
      items: [
        'Buchhaltungsdaten des laufenden Jahres und Saldenlisten',
        'Jahresabschlüsse der Vorjahre',
        'Belege des laufenden Jahres',
        'Mehrwertsteuerabrechnungen',
        'Lohndaten, Lohnausweise und Unterlagen zu den Sozialversicherungen',
        'bestehende Vollmachten',
      ],
      outro: [
        [
          'Welche Unterlagen Ihnen zustehen und in welcher Form sie übergeben werden, richtet sich nach Ihrer Vereinbarung und der jeweiligen Situation. ',
          
        ],
      ],
      download: { label: 'Übersicht der Unterlagen herunterladen', file: null },
    },

    // 06 Was wir übernehmen
    {
      kind: 'list',
      id: 'uebernahme',
      heading: 'Was wir dabei übernehmen',
      intro: ['Nach Absprache und auf Ihren Auftrag hin:'],
      items: [
        'Kontakt und Abstimmung mit Ihrem bisherigen Treuhänder',
        'Terminierung der Übergabe',
        'Übernahme der Daten und Prüfung auf Vollständigkeit',
        'Einrichtung der Buchhaltung',
      ],
      outro: [
        [
          'Die Kündigung beim bisherigen Treuhänder bereiten wir für Sie vor.',
        ],
      ],
    },

    // 07 Diskretion
    {
      kind: 'prose',
      id: 'diskretion',
      heading: 'Diskretion',
      paragraphs: [
        'Ein Erstgespräch verpflichtet Sie zu nichts. Wir behandeln den Inhalt vertraulich und nehmen erst dann Kontakt zu Ihrem bisherigen Treuhänder auf, wenn Sie uns damit beauftragen.',
      ],
    },

    // 08 Kosten im Wechseljahr
    {
      kind: 'prose',
      id: 'kosten',
      heading: 'Kosten im Jahr des Wechsels',
      paragraphs: [
        [
          'Im Jahr eines Wechsels können auf beiden Seiten Aufwände anfallen. Ihr bisheriger Treuhänder rechnet die Arbeiten bis zum Stichtag ab, wir übernehmen die Weiterführung. Je nach Zeitpunkt und Stand der Arbeiten fällt das unterschiedlich aus. ',
          'Im Jahr des Wechsels rechnen wir pro rata ab.',
        ],
        'Wir schauen im Gespräch an, wie sich das in Ihrem Fall verteilt, und halten unseren Teil in der Offerte fest.',
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

    // 10 Abschluss
    {
      kind: 'cta',
      id: 'abschluss',
      heading: 'Schauen wir Ihre Situation gemeinsam an',
      paragraphs: [
        'Erzählen Sie uns, wie Ihre Buchhaltung heute läuft. Danach wissen Sie, ob und wann ein Wechsel für Sie sinnvoll ist. Ein Gespräch verpflichtet Sie zu nichts.',
      ],
      actions: [
        { kind: 'page', target: 'kontakt', label: 'Erstgespräch anfragen' },
        { kind: 'phone' },
      ],
    },
  ],
}
