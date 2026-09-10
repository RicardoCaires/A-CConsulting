/**
 * /de/versicherungen
 *
 * QUELLE: `content/source/schritt4_fassung2_de.md`, Abschnitt „Versicherungen".
 * Wortlaut unveraendert uebernommen. Reihenfolge der elf Abschnitte wie dort.
 */

import type { PageContent } from '../types'

export const versicherungen: PageContent = {
  key: 'versicherungen',

  meta: {
    title: 'Versicherungen für Privatpersonen und Unternehmen',
    description:
      'Wir prüfen Ihre bestehenden Verträge, vergleichen passende Lösungen aus den uns zugänglichen Angeboten und Gesellschaften und bleiben Ihr Ansprechpartner, auch wenn ein Schaden eintritt.',
  },

  // 01 Seitenkopf
  hero: {
    heading: 'Versicherungen für Privatpersonen und Unternehmen',
    lead: 'Wir prüfen Ihre bestehenden Verträge, vergleichen passende Lösungen aus den uns zugänglichen Angeboten und Gesellschaften und bleiben Ihr Ansprechpartner, auch wenn ein Schaden eintritt.',
    actions: [{ kind: 'page', target: 'kontakt', label: 'Erstgespräch anfragen' }],
    // Von Ricardo am 10.09.2026 vorgegeben, Wortlaut unveraendert.
    // Quelle: `content/source/versicherungen_seitenkopf_de.md`.
    belege: ['Unabhängig beraten', 'Passende Lösungen', 'Langfristig an Ihrer Seite'],
  },

  blocks: [
    // 02 Zwei Wege
    {
      kind: 'anchors',
      items: [
        { label: 'Für Privatpersonen', anchor: 'privatpersonen' },
        { label: 'Für Unternehmen', anchor: 'unternehmen' },
        { label: 'Betreuung', anchor: 'betreuung' },
        { label: 'Schadenfall', anchor: 'schadenfall' },
        { label: 'Ablauf', anchor: 'ablauf' },
      ],
    },

    // 03 Das Modell als Schaubild
    //
    // Der Abschnitt „Wir arbeiten in Ihrem Auftrag", der hier bis zum
    // 10.09.2026 davorstand, ist auf Ricardos Anweisung entfallen. Sein
    // Wortlaut steht unveraendert in `content/source/schritt4_fassung2_de.md`
    // und ist nicht widerrufen — er steht nur nicht mehr auf der Seite.
    //
    // Damit erklaert das Schaubild das Modell allein. Die FINMA-Registrierung,
    // die im gestrichenen Text stand, steht weiterhin im Fussbereich jeder
    // Seite und vollstaendig im Impressum.
    //
    // Seit dem 10.09.2026 ein gebauter Abschnitt statt einer Bilddatei: Ricardo
    // hat eine Referenzgrafik und elf Einzelbilder geliefert und ausdruecklich
    // verlangt, dass daraus ein Webabschnitt wird. Text bleibt damit Text —
    // waehlbar, uebersetzbar und fuer Vorlesewerkzeuge lesbar.
    //
    // Die frueher hier eingesetzte Datei `unser-modell.webp` bleibt unter
    // `public/bilder/` liegen; sie ist von Ricardo freigegeben und wird nicht
    // geloescht, steht aber auf keiner Seite mehr.
    {
      kind: 'modell',
      id: 'modell',
      eyebrow: 'Unser Modell',
      heading: 'Wir vertreten Sie, nicht die Versicherung.',
      lead: 'Wir prüfen Ihre Verträge, holen Offerten ein und übernehmen den Schriftverkehr – auch im Schadenfall.',
      grundsaetze: [
        {
          bild: '01_icon_unabhaengig',
          titel: 'Unabhängig',
          satz: 'Wir sind an keine Versicherungsgesellschaft gebunden.',
        },
        {
          bild: '02_icon_objektiv',
          titel: 'Objektiv',
          satz: 'Wir vergleichen Angebote und empfehlen die beste Lösung für Ihre Situation.',
        },
        {
          bild: '03_icon_interesse',
          titel: 'In Ihrem Interesse',
          satz: 'Wir vertreten Sie – bei Vertragsabschluss und im Schadenfall.',
        },
      ],
      kunde: {
        bild: '04_icon_kunde',
        titel: 'Sie als Kunde',
        punkte: ['Ihre Bedürfnisse', 'Ihre aktuelle Situation', 'Ihre Fragen und Ziele'],
      },
      mandat: {
        titel: 'Mandat',
        satz: 'Sie beauftragen uns mit der Analyse und Beratung.',
      },
      mitte: {
        bild: '05_logo_ac_consulting',
        alt: 'A&C Consulting GmbH — Versicherungen und Treuhand',
        punkte: [
          'Analysieren Ihren Bedarf',
          'Vergleichen Angebote am Markt',
          'Beraten Sie neutral und transparent',
          'Übernehmen den gesamten Schriftverkehr',
          'Begleiten Sie langfristig – auch im Schadenfall',
        ],
      },
      preisvergleich: {
        titel: 'Preisvergleich',
        satz: 'Wir holen Offerten bei verschiedenen Gesellschaften ein und vergleichen für Sie Leistungen und Preise.',
      },
      markt: {
        bild: '06_panel_versicherungsgesellschaften',
        alt: 'Versicherungsgesellschaften: Zurich, Helvetia, AXA, Allianz, Vaudoise, die Mobiliar, Generali, Swiss Life und weitere.',
      },
      ergebnis: {
        titel: 'Die beste Lösung für Sie',
        satz: 'Sie erhalten unseren Vorschlag – transparent, nachvollziehbar und in Ihrem Interesse.',
      },
      nutzen: [
        {
          bild: '07_benefit_sparschwein',
          titel: 'Bessere Konditionen',
          satz: 'Durch den Vergleich profitieren Sie von einem optimalen Preis-Leistungs-Verhältnis.',
        },
        {
          bild: '08_benefit_diamant',
          titel: 'Mehr Auswahl',
          satz: 'Wir prüfen den gesamten Markt und finden die Lösung, die wirklich zu Ihnen passt.',
        },
        {
          bild: '09_benefit_schild',
          titel: 'Zeitersparnis',
          satz: 'Wir übernehmen die Abklärungen und den Administrationsaufwand für Sie.',
        },
        {
          bild: '10_benefit_handshake',
          titel: 'Langfristige Betreuung',
          satz: 'Ein Ansprechpartner für alle Ihre Versicherungen – auch im Schadenfall.',
        },
      ],
      schluss: {
        links: 'A&C Consulting GmbH',
        rechts: 'Persönlich. Unabhängig. An Ihrer Seite.',
      },
    },

    // 04 Wie wir entschädigt werden
    {
      kind: 'prose',
      id: 'verguetung',
      heading: 'Wie wir entschädigt werden',
      paragraphs: [
        'Für die Vermittlung und die laufende Betreuung erhalten wir von den Versicherungsgesellschaften eine Courtage. Für Sie ist die Arbeit im Rahmen des Maklermandats kostenlos. Für Aufgaben, die über das Mandat hinausgehen, vereinbaren wir vorher ein Honorar.',
        'Wie das in Ihrem Fall aussieht, sagen wir Ihnen auf Nachfrage im Detail.',
      ],
      links: [{ target: 'transparenz', label: 'Vermittlerstatus, Vergütung und Beschwerdeweg' }],
    },
    // 05 Für Privatpersonen
    {
      kind: 'subsections',
      id: 'privatpersonen',
      heading: 'Für Privatpersonen',
      intro: [
        'Wir prüfen, ob Ihre Deckung noch zu Ihrer Lebenssituation passt, und beraten Sie bei Anpassungen.',
        'Bereiche: Kranken- und Zusatzversicherung, Hausrat und Haftpflicht, Motorfahrzeug, Leben und Säule 3a, Rechtsschutz.',
      ],
      items: [
        {
          heading: 'Wann sich eine Überprüfung lohnt',
          paragraphs: [
            'Sie ziehen um, heiraten, bekommen ein Kind, kaufen Wohneigentum, wechseln die Stelle oder nähern sich der Pensionierung. In solchen Situationen kann mehr als eine Police betroffen sein.',
          ],
        },
      ],
    },

    // 06 Für Unternehmen
    {
      kind: 'subsections',
      id: 'unternehmen',
      heading: 'Für Unternehmen',
      items: [
        {
          heading: 'Wenn Sie Mitarbeitende beschäftigen',
          paragraphs: [
            [
              'Mit der ersten Anstellung kommen die obligatorische Unfallversicherung, die berufliche Vorsorge und je nach Betrieb ein Krankentaggeld dazu. ',
              
              ' Wir klären mit Ihnen, was in Ihrem Fall vorgeschrieben ist und was freiwillig bleibt.',
            ],
          ],
        },
        {
          heading: 'Für den Betrieb selbst',
          paragraphs: [
            'Je nach Tätigkeit gehören Haftpflicht, Sachversicherung, Fahrzeuge oder Transportdeckungen dazu.',
          ],
        },
      ],
    },

    // 07 Betreuung — der Abschnitt, an dem sich ein Mandat von einem
    // Direktabschluss unterscheidet. Quelle: ergaenzungen_de.md
    {
      kind: 'prose',
      id: 'betreuung',
      heading: 'Nach dem Abschluss hört es nicht auf',
      paragraphs: [
        'Die meisten Policen liegen jahrelang unangetastet in einem Ordner, während sich das Leben darum herum ändert. Genau da entstehen die Lücken.',
        'Wir behalten Ihre Verträge im Blick: Wir melden Adress- und Personenänderungen, sehen uns Prämienanpassungen an, wenn sie ins Haus kommen, und melden uns, wenn wir etwas bemerken, das Ihre Deckung betrifft.',
        'Für Sie ändert sich damit vor allem eines: Sie haben eine Stelle, bei der Sie anrufen, statt bei jeder Gesellschaft einzeln.',
      ],
    },
    // 08 Im Schadenfall
    {
      kind: 'prose',
      id: 'schadenfall',
      heading: 'Wenn ein Schaden eintritt',
      paragraphs: [
        'Melden Sie sich bei uns. Wir nehmen den Fall auf, melden ihn der Versicherung und begleiten die Abwicklung. Im Notfall sind wir auch ausserhalb der Bürozeiten erreichbar. Die laufende Schadenbegleitung erledigen wir während der Bürozeiten.',
      ],
      links: [{ target: 'schadenfall', label: 'Was im Schadenfall zu tun ist' }],
    },

    // 09 Ablauf einer Vertragsprüfung
    {
      kind: 'steps',
      id: 'ablauf',
      heading: 'So läuft eine Vertragsprüfung ab',
      steps: [
        {
          heading: 'Unterlagen sichten',
          body: 'Sie stellen uns Ihre bestehenden Policen zusammen. Wir schauen sie durch und stellen Rückfragen, wo etwas unklar ist.',
        },
        {
          heading: 'Auswerten',
          body: 'Wir zeigen Ihnen, wo eine Deckung fehlt, wo sich zwei Verträge überschneiden und wo Prämie und Leistung nicht zusammenpassen.',
        },
        {
          heading: 'Vorschlag',
          body: 'Sie erhalten eine Übersicht mit unseren Empfehlungen und, wo es sinnvoll ist, einen Vergleich. Sie entscheiden, was umgesetzt wird.',
        },
      ],
    },
    // 10 Übergang zum Treuhand
    {
      kind: 'prose',
      id: 'treuhand-uebergang',
      heading: 'Wenn Sie selbständig sind oder Personal haben',
      paragraphs: [
        'Sobald Sie jemanden anstellen, gehören zur Unfallversicherung und zur beruflichen Vorsorge auch die monatliche Lohnabrechnung und die Meldungen an die Sozialversicherungen. Beides lässt sich im selben Gespräch klären.',
      ],
      links: [{ target: 'treuhand', label: 'Buchhaltung, Löhne und Abschluss' }],
    },

    // 11 Häufige Fragen
    {
      kind: 'faq',
      id: 'fragen',
      heading: 'Häufige Fragen',
      items: [
        {
          question: 'Kostet mich die Beratung etwas?',
          answer: 'Für die Vermittlung und Betreuung von Versicherungen werden wir von den Gesellschaften über eine Courtage entschädigt. Für Sie ist die Arbeit im Rahmen des Maklermandats kostenlos. Geht ein Auftrag darüber hinaus, vereinbaren wir vorher ein Honorar.',
        },
        {
          question: 'Arbeiten Sie mit allen Gesellschaften zusammen?',
          answer: 'Wir sind ungebunden und vergleichen für Sie die Angebote einer breiten Auswahl von Gesellschaften. Welche in Ihrem Fall passt, sagen wir Ihnen im Vorschlag.',
        },
        {
          question: 'Muss ich meine bestehenden Verträge kündigen?',
          answer:
            'Nein. Wir schauen zuerst an, was Sie haben. Ob und wann eine Anpassung sinnvoll ist, besprechen wir danach.',
        },
        {
          question: 'Bin ich an etwas gebunden, wenn ich Sie beauftrage?',
          answer: 'Das Maklermandat gilt unbefristet und kann von beiden Seiten jederzeit gekündigt werden.',
        },
        {
          question: 'In welcher Sprache werde ich beraten?',
          answer:
            'Auf Deutsch, Französisch oder Portugiesisch. Sagen Sie uns einfach, was Ihnen lieber ist.',
        },
      ],
    },

    // 12 Abschluss
    {
      kind: 'cta',
      id: 'abschluss',
      heading: 'Lassen Sie Ihre Verträge anschauen',
      paragraphs: [
        'Ein erstes Gespräch verpflichtet Sie zu nichts. Bringen Sie mit, was Sie haben, und wir sagen Ihnen, was uns auffällt.',
      ],
      actions: [
        { kind: 'page', target: 'kontakt', label: 'Erstgespräch anfragen' },
        { kind: 'phone' },
      ],
    },
  ],
}
