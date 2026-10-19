/**
 * News und Blog (15.10.2026). Ricardo: «Du entwirfst, ich gebe frei».
 * Veröffentlicht ist nur, was `freigegeben: true` trägt; bei Entwürfen ist `datum` das geplante Datum.
 *
 * QUELLE: `content/source/umbau_news_de.md`. Fristen und Gebühren im
 * Steuerbeitrag wörtlich aus `steuern_checkliste_de.md` (Stand 16.09.2026).
 */
import type { Beitrag } from './typen'

export const beitraege: readonly Beitrag[] = [
  {
    // Erster veröffentlichter Beitrag (19.10.2026). Ricardo: «Ich will den ersten Blogpost online stellen bitte so
    // wie finanzfabio einen Interaktive karte mit unserem Design». Werte: `src/content/vorsorge-kennzahlen.ts`.
    slug: 'vorsorge-kennzahlen-2027',
    art: 'Ratgeber',
    titel: 'Vorsorge-Kennzahlen 2027: alle Grenzbeträge auf einen Blick',
    kurz: 'Ab 1. Januar 2027 steigen AHV-Renten und Grenzbeträge um rund 1.6 %. Tippen Sie in der Karte auf eine Zahl und sehen Sie, wie alles zusammenhängt.',
    datum: '2026-10-19',
    freigegeben: true,
    minuten: 4,
    abschnitte: [
      {
        absaetze: [
          'Der Bundesrat hat am 2. Oktober 2026 die AHV- und IV-Renten an die Lohn- und Preisentwicklung angepasst. Ab 1. Januar 2027 sind sie rund 1.6 % höher.',
          'Mit der Rente verschieben sich fast alle Grenzbeträge der Vorsorge: in der Pensionskasse, in der Säule 3a und bei der AHV selbst. Der Grund: Das Gesetz legt sie als Bruchteil oder Vielfaches der maximalen AHV-Rente fest.',
        ],
        baustein: 'vorsorgeKarte',
      },
      {
        zwischentitel: 'Was sich für Sie ändert',
        absaetze: ['Die Monatsbeträge der AHV gelten ohne die 13. Altersrente, die seit Dezember 2026 einmal im Jahr dazukommt.'],
        punkte: [
          'Säule 3a: Angestellte mit Pensionskasse zahlen 2027 bis CHF 7’373 ein, Selbständige ohne Pensionskasse bis CHF 36’864.',
          'Pensionskasse: Versichert ist, wer bei einem Arbeitgeber mehr als CHF 23’040 im Jahr verdient.',
          'AHV: Die Maximalrente steigt auf CHF 2’560 im Monat, die Minimalrente auf CHF 1’280.',
          'Unfallversicherung: Der höchste versicherte Verdienst liegt bei CHF 148’200.',
        ],
      },
      {
        zwischentitel: 'Drei Dinge, die sich jetzt lohnen',
        absaetze: [],
        punkte: [
          'Den Dauerauftrag für die Säule 3a auf den neuen Betrag anpassen.',
          'Den Vorsorgeausweis 2027 prüfen, besonders bei Teilzeit oder mehreren Arbeitgebern.',
          'Bei Löhnen über CHF 148’200 klären, ob eine UVG-Zusatzversicherung besteht.',
        ],
      },
      {
        zwischentitel: 'Wie wir Sie unterstützen',
        absaetze: [
          'Wir schauen mit Ihnen Vorsorgeausweis, Säule 3a und Versicherungen an und zeigen, wo Lücken bestehen. Für Unternehmen prüfen wir, ob Pensionskasse und UVG-Zusatz zu den Löhnen passen.',
        ],
      },
    ],
    hinweis: 'Dieser Beitrag gibt einen allgemeinen Überblick und ersetzt keine individuelle Beratung. Quelle: Bundesamt für Sozialversicherungen BSV, Stand 2. Oktober 2026.',
  },
  {
    slug: 'neu-kundenportal',
    art: 'News',
    titel: 'Neu: Ihr Kundenportal bei A&C',
    kurz: 'Ihre Policen und Dokumente an einem Ort, Anfragen direkt an uns und der Stand jederzeit sichtbar. So funktioniert das Kundenportal.',
    datum: '2026-10-20',
    freigegeben: false,
    minuten: 3,
    abschnitte: [
      {
        absaetze: [
          'Bisher lief vieles bei uns über Telefon, E-Mail und Papier. Das bleibt möglich. Neu gibt es dazu das Kundenportal: Dort sehen Sie Ihre Versicherungen und Unterlagen, wann es Ihnen passt.',
        ],
      },
      {
        zwischentitel: 'Was Sie im Portal sehen und tun können',
        absaetze: ['Das Portal ist bewusst schlicht gehalten. Es kann das, was Sie im Alltag brauchen:'],
        punkte: [
          'Ihre Policen und Dokumente an einem Ort',
          'Änderungen an Ihren Angaben direkt melden, etwa eine neue Adresse',
          'Anfragen stellen: Offerte, Rückruf, Termin oder Vertragsänderung',
          'Den Stand jeder Anfrage sehen: angefragt, in Bearbeitung, erledigt – bei jedem Wechsel erhalten Sie eine E-Mail',
        ],
      },
      {
        zwischentitel: 'Ein Beispiel aus dem Alltag',
        absaetze: [
          'Sie ziehen um. Statt uns einen Brief zu schreiben, tragen Sie die neue Adresse im Portal ein. Wir bearbeiten die Meldung, und Sie sehen im Portal, wann sie erledigt ist. Sobald sich der Stand ändert, erhalten Sie eine E-Mail.',
          'Genauso bei einer Frage zu Ihrer Police oder wenn Sie eine Offerte möchten: Sie stellen die Anfrage im Portal, und wir melden uns.',
        ],
      },
      {
        zwischentitel: 'So kommen Sie zu Ihrem Zugang',
        absaetze: [
          'Sie registrieren sich im Kundenportal. Wir ordnen Ihren Zugang Ihrem Dossier zu und schalten ihn frei.',
          'Auf dem Handy können Sie das Portal wie eine App auf den Startbildschirm legen. Dann ist es mit einem Tippen da.',
          'Den Zugang finden Sie auf jeder Seite unserer Website unten rechts unter «Kundenportal».',
        ],
      },
      {
        zwischentitel: 'Und wer lieber anruft?',
        absaetze: [
          'Telefon und E-Mail bleiben. Das Portal ist ein zusätzlicher Weg, kein Ersatz für das Gespräch. Für Kundinnen und Kunden von A&C ist es ohne Kosten.',
        ],
      },
    ],
  },
  {
    slug: 'versicherungen-kuendigen-fristen',
    art: 'Ratgeber',
    titel: 'Versicherungen kündigen: Fristen richtig im Blick',
    kurz: 'Wer eine Versicherung wechseln will, muss die Kündigungsfrist kennen. Worauf Sie achten sollten, damit die Kündigung gilt.',
    datum: '2026-11-03',
    freigegeben: false,
    minuten: 3,
    abschnitte: [
      {
        absaetze: [
          'Sie haben eine günstigere Offerte oder brauchen eine Versicherung nicht mehr. Dann wollen Sie den alten Vertrag beenden. Das klappt nur, wenn die Kündigung rechtzeitig ankommt. Verpassen Sie den Termin, verlängert sich der Vertrag in vielen Fällen um ein weiteres Jahr.',
        ],
      },
      {
        zwischentitel: 'Wo die Frist steht',
        absaetze: [
          'Bei vielen Verträgen beträgt die Kündigungsfrist drei Monate vor Ablauf des Versicherungsjahres. Verlassen Sie sich aber nicht auf diese Faustregel. Massgebend ist, was in Ihrer Police und in den Allgemeinen Versicherungsbedingungen steht.',
          'Suchen Sie dort zwei Angaben: wann der Vertrag abläuft und wie lang die Kündigungsfrist ist. Daraus ergibt sich der letzte Tag, an dem Ihre Kündigung bei der Versicherung sein muss.',
          'Für die Grundversicherung der Krankenkasse gelten eigene, gesetzlich festgelegte Termine. Sie unterscheiden sich von denen der übrigen Versicherungen.',
        ],
      },
      {
        zwischentitel: 'Schriftlich und rechtzeitig',
        absaetze: [
          'Kündigen Sie schriftlich, so wie es Ihr Vertrag verlangt. Nennen Sie die Policennummer und das gewünschte Ende des Vertrags, und unterschreiben Sie den Brief.',
          'Entscheidend ist in der Regel, wann die Kündigung bei der Versicherung eintrifft – nicht, wann Sie sie abschicken. Planen Sie deshalb ein paar Tage Reserve ein. Mit einem eingeschriebenen Brief können Sie später belegen, dass und wann Sie ihn verschickt haben.',
        ],
        punkte: [
          'Police und Bedingungen hervornehmen',
          'Ablaufdatum und Kündigungsfrist nachlesen',
          'Den letzten möglichen Tag ausrechnen und Reserve einplanen',
          'Schriftlich kündigen, mit Policennummer und Unterschrift',
          'Den Nachweis des Versands aufbewahren',
        ],
      },
      {
        zwischentitel: 'Erst kündigen, wenn die neue Lösung steht',
        absaetze: [
          'Kündigen Sie eine Versicherung erst, wenn klar ist, wie es danach weitergeht. Sonst entsteht eine Lücke, in der Sie nicht versichert sind.',
        ],
      },
      {
        zwischentitel: 'Wie wir Sie dabei unterstützen',
        absaetze: [
          'Wenn wir Ihre Versicherungen als Broker betreuen, behalten wir die Fristen Ihrer Verträge im Blick. Wir schauen mit Ihnen an, ob ein Wechsel sinnvoll ist und bis wann Sie handeln müssen.',
          'Im Kundenportal sehen Sie Ihre Policen und Dokumente jederzeit an einem Ort.',
        ],
      },
    ],
    hinweis:
      'Dieser Beitrag gibt einen allgemeinen Überblick und ersetzt keine individuelle Beratung. Massgebend sind Ihre Police und die Bedingungen Ihrer Versicherung.',
  },
  {
    slug: 'steuererklaerung-bern-unterlagen',
    art: 'Ratgeber',
    titel: 'Steuererklärung im Kanton Bern: diese Unterlagen brauchen Sie',
    kurz: 'Was Sie für die Steuererklärung zusammentragen sollten, bis wann sie eingereicht sein muss und wie eine Fristverlängerung funktioniert.',
    datum: '2027-01-12',
    freigegeben: false,
    minuten: 3,
    abschnitte: [
      {
        absaetze: [
          'Bei der Steuererklärung liegt die Arbeit selten im Ausfüllen. Sie liegt im Suchen: Wo ist der Lohnausweis, welcher Auszug fehlt noch? Wer die Unterlagen früh beisammen hat, ist schon halb fertig.',
        ],
      },
      {
        zwischentitel: 'Einkommen und Vermögen',
        absaetze: ['Hier gehört alles hin, was Sie verdient haben und was Sie besitzen.'],
        punkte: [
          'Lohnausweise aller Arbeitgeber',
          'Auszüge Ihrer Bank- und Postkonten',
          'Wertschriften und Depotauszüge',
          'Unterlagen zu Liegenschaften',
          'Bei einer selbständigen Nebentätigkeit: eine Aufstellung der Einnahmen und Ausgaben',
        ],
      },
      {
        zwischentitel: 'Versicherungen und Vorsorge',
        absaetze: ['Für Beiträge an die Vorsorge braucht es die Bescheinigungen.'],
        punkte: [
          'Bescheinigungen für Einzahlungen in die Säule 3a',
          'Belege zu Einkäufen in die Pensionskasse',
          'Prämienübersicht der Krankenkasse',
        ],
      },
      {
        zwischentitel: 'Abzüge und besondere Ereignisse',
        absaetze: [
          'Manche Belege fallen nicht jedes Jahr an. Denken Sie an Krankheitskosten, die Sie selbst bezahlt haben, an Kosten für die Kinderbetreuung und an Spenden – und an Veränderungen wie Heirat, Geburt, Umzug oder eine neue Stelle.',
        ],
      },
      {
        zwischentitel: 'Fristen im Kanton Bern',
        absaetze: [
          'Für Privatpersonen ist die übliche Einreichefrist der 15. März. Massgebend ist immer das Datum auf Ihrem Schreiben der Steuerverwaltung.',
          'Reicht die Zeit nicht, können Sie die Frist online verlängern: bis 15. Juli kostenlos, bis 15. September für CHF 20, bis 15. November für CHF 40. Schriftlich eingereichte Fristverlängerungen können höhere Gebühren verursachen.',
        ],
      },
      {
        zwischentitel: 'Wenn wir die Steuererklärung für Sie machen',
        absaetze: [
          'Sie bringen die Unterlagen, wir erstellen die Steuererklärung, reichen sie ein und prüfen später die Veranlagung.',
          'Wenn wir Ihre Steuererklärung erstellen, übernehmen wir auch die Fristverlängerung.',
          'Wenn etwas fehlt, melden wir uns.',
          'Sie können uns die Unterlagen per E-Mail, per Post oder persönlich bringen.',
        ],
      },
    ],
    hinweis:
      'Dieser Beitrag gibt einen allgemeinen Überblick und ersetzt keine individuelle Beratung. Massgebend sind die Angaben der Steuerverwaltung des Kantons Bern.',
  },
]
