/**
 * /de/versicherungen
 *
 * QUELLE: `content/source/schritt4_fassung2_de.md`, Abschnitt „Versicherungen".
 * Wortlaut unveraendert uebernommen.
 *
 * **Fuenf Abschnitte sind am 10.09.2026 auf Ricardos Anweisung entfallen:**
 * „Wir arbeiten in Ihrem Auftrag", „Wie wir entschaedigt werden", „So laeuft
 * eine Vertragspruefung ab", „Wenn Sie selbstaendig sind oder Personal haben"
 * und der Abschluss „Lassen Sie Ihre Vertraege anschauen". Ihr Wortlaut steht
 * unveraendert in der Quelle und ist nicht widerrufen — er steht nur nicht
 * mehr auf der Seite. Mit dem Ablauf ist auch seine Sprungmarke entfallen;
 * sie haette ins Leere gezeigt.
 *
 * **Die Seite hat damit keinen Abschluss mehr.** Der einzige Handlungsknopf
 * steht oben im Seitenkopf und im Kopfbereich der Seite.
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
      lead: 'Wir prüfen Ihre Verträge, holen passende Angebote ein und begleiten Sie – auch im Schadenfall.',
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
          satz: 'Wir prüfen den Markt und finden die Lösung, die wirklich zu Ihnen passt.',
        },
        {
          bild: '09_benefit_schild',
          titel: 'Zeitersparnis',
          satz: 'Wir übernehmen die Abklärungen und den administrativen Aufwand für Sie.',
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

    // 05 Die beiden Zielgruppen
    //
    // Seit dem 10.09.2026 ein Block nach Ricardos Referenzgrafik
    // (`bilder-quelle/versicherungen_segmente_referenz.png`). Bis dahin waren
    // es zwei `subsections`; Wortlaut und Anker sind unveraendert uebernommen,
    // damit die Sprungmarken darueber weiter treffen.
    //
    // Aus dem Satz „Bereiche: Kranken- und Zusatzversicherung, …" sind die
    // fuenf Pills geworden. Derselbe Inhalt, andere Form.
    {
      kind: 'segmente',
      bloecke: [
        {
          id: 'privatpersonen',
          eyebrow: 'Für Privatpersonen',
          heading: 'Für Privatpersonen',
          lead: 'Wir prüfen, ob Ihre Deckung noch zu Ihrer Lebenssituation passt, und beraten Sie bei Anpassungen.',
          pills: [
            'Kranken- und Zusatzversicherung',
            'Hausrat und Haftpflicht',
            'Motorfahrzeug',
            'Leben und Säule 3a',
            'Rechtsschutz',
          ],
          karten: [
            {
              bild: '01_privathaushalt_haus',
              titel: 'Wann sich eine Überprüfung lohnt',
              satz: 'Sie ziehen um, heiraten, bekommen ein Kind, kaufen Wohneigentum, wechseln die Stelle oder nähern sich der Pensionierung. In solchen Situationen kann mehr als eine Police betroffen sein.',
            },
          ],
        },
        {
          id: 'unternehmen',
          eyebrow: 'Für Unternehmen',
          heading: 'Für Unternehmen',
          karten: [
            {
              bild: '02_mitarbeitende',
              titel: 'Wenn Sie Mitarbeitende beschäftigen',
              satz: 'Mit der ersten Anstellung kommen die obligatorische Unfallversicherung, die berufliche Vorsorge und je nach Betrieb ein Krankentaggeld dazu. Wir klären mit Ihnen, was in Ihrem Fall vorgeschrieben ist und was freiwillig bleibt.',
            },
            {
              bild: '03_betrieb_gebaeude',
              titel: 'Für den Betrieb selbst',
              satz: 'Je nach Tätigkeit gehören Haftpflicht, Sachversicherung, Fahrzeuge oder Transportdeckungen dazu.',
            },
          ],
        },
      ],
    },

    // 07 Betreuung — der Abschnitt, an dem sich ein Mandat von einem
    // Direktabschluss unterscheidet. Quelle: ergaenzungen_de.md
    //
    // Seit dem 10.09.2026 nach Ricardos Referenzgrafik als Karten statt als
    // Textblock. Der **Leadtext ist unveraendert** — er stand schon vorher so
    // da. Neu sind die vier Kartentexte und die Schlusskarte; sie stehen in
    // `content/source/versicherungen_betreuung_de.md`.
    {
      kind: 'betreuung',
      id: 'betreuung',
      eyebrow: 'Betreuung nach dem Abschluss',
      heading: 'Nach dem Abschluss hört es nicht auf',
      lead: [
        'Die meisten Policen liegen jahrelang unangetastet in einem Ordner, während sich das Leben darum herum ändert. Genau da entstehen die Lücken.',
        'Wir behalten Ihre Verträge im Blick: Wir melden Adress- und Personenänderungen, sehen uns Prämienanpassungen an, wenn sie ins Haus kommen, und melden uns, wenn wir etwas bemerken, das Ihre Deckung betrifft.',
        'Für Sie ändert sich damit vor allem eines: Sie haben eine Stelle, bei der Sie anrufen, statt bei jeder Gesellschaft einzeln.',
      ],
      karten: [
        {
          bild: '01_betreuung_adresse',
          titel: 'Adress- und Datenänderungen',
          satz: 'Wenn sich Adresse, Haushalt oder persönliche Angaben ändern, helfen wir bei der Aktualisierung der relevanten Verträge.',
        },
        {
          bild: '02_betreuung_familie',
          titel: 'Veränderungen im Leben',
          satz: 'Heirat, Kinder, Wohneigentum, Berufswechsel oder Pensionierung können Auswirkungen auf mehrere Policen haben.',
        },
        {
          bild: '03_betreuung_praemie',
          titel: 'Prämien im Blick behalten',
          satz: 'Wenn Anpassungen oder neue Prämieninformationen eintreffen, schauen wir mit darauf und melden uns bei Auffälligkeiten.',
        },
        {
          bild: '04_betreuung_ansprechpartner',
          titel: 'Eine Stelle für Ihre Anliegen',
          satz: 'Statt jede Gesellschaft einzeln zu kontaktieren, haben Sie bei Fragen, Änderungen oder im Schadenfall einen festen Ansprechpartner.',
        },
      ],
      schluss: {
        bild: '05_betreuung_persoenlich',
        titel: 'Persönlich. Vorausschauend. An Ihrer Seite.',
        satz: 'Wir begleiten Sie nicht nur beim Abschluss, sondern auch danach – damit Ihre Lösung mit Ihrer Situation mitwächst.',
      },
    },
    // 08 Im Schadenfall
    //
    // Seit dem 11.09.2026 nach Ricardos Referenzgrafik zweispaltig statt als
    // Textblock. **Titel, Lead und Linkbeschriftung sind unveraendert** — die
    // Referenzgrafik zeigt einen anderen Wortlaut, sein Auftragstext nennt
    // aber ausdruecklich den bestehenden, und der ist freigegeben.
    //
    // Neu sind die Kategoriezeile, die drei Schrittbeschriftungen und der
    // Titel der Partnerkarte. Sie stehen in
    // `content/source/versicherungen_schadenfall_de.md`.
    {
      kind: 'schadenfall',
      id: 'schadenfall',
      eyebrow: 'Schadenfall',
      heading: 'Wenn ein Schaden eintritt',
      lead: 'Melden Sie sich bei uns. Wir nehmen den Fall auf, melden ihn der Versicherung und begleiten die Abwicklung. Im Notfall sind wir auch ausserhalb der Bürozeiten erreichbar. Die laufende Schadenbegleitung erledigen wir während der Bürozeiten.',
      schritte: [
        { bild: '03_schaden_telefon', titel: 'Fall aufnehmen' },
        { bild: '02_schaden_dokument', titel: 'Versicherung informieren' },
        { bild: '04_schaden_begleitung', titel: 'Abwicklung begleiten' },
      ],
      link: { target: 'schadenfall', label: 'Was im Schadenfall zu tun ist' },
      partner: {
        bild: '01_schaden_warnung',
        titel: 'Wir begleiten Sie persönlich',
        rasterBild: '05_versicherungspartner',
        rasterAlt:
          'Logos der Versicherungsgesellschaften: Allianz, AXA, Generali, GVB, Helvetia, die Mobiliar, Smile, Vaudoise und Zurich.',
      },
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
  ],
}
