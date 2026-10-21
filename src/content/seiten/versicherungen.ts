/**
 * /de/versicherungen im Baukasten (15.10.2026), auf Ricardos Auftrag kürzer und
 * im Ton «direkt und persönlich». Betreuung und Schadenfall sind ein Abschnitt.
 * Am selben Tag gekürzt; dann Geschäftsmodell und Lebensereignisse neu gezeichnet
 * (Ricardo: «unser Geschäftsmodell soll bildlich erklärt werden aber nicht so», die
 * Zeitleiste «sieht nicht gut aus»). Das frühere Schaubild `modell` steht nicht mehr hier.
 * QUELLEN: `content/source/umbau_2026-10b_de.md`, `umbau_versicherungen_de.md`, `schritt4_fassung2_de.md`,
 * `ergaenzungen_de.md`, `versicherungen_schadenfall_de.md`, `versicherungen_modell_de.md`.
 *
 * Die Anker `privatpersonen`, `unternehmen` und `schadenfall` werden von der
 * Navigation und der Startseite angesprungen und dürfen nicht entfallen.
 */
import type { SeitenInhalt } from './typen'

export const versicherungen: SeitenInhalt = {
  meta: {
    title: 'Versicherungen für Privatpersonen und Unternehmen',
    description:
      'Wir prüfen Ihre bestehenden Verträge, vergleichen passende Lösungen aus den uns zugänglichen Angeboten und Gesellschaften und bleiben Ihr Ansprechpartner, auch wenn ein Schaden eintritt.',
  },
  banner: { themenzeile: 'VERSICHERUNGEN', ueberschrift: 'Versicherungen für Privatpersonen und Unternehmen' },
  bloecke: [
    {
      art: 'geschaeftsmodell',
      id: 'modell',
      titel: { vor: 'Wir vertreten ', akzent: 'Sie', nach: ', nicht die Versicherung' },
      sie: { titel: 'Sie', text: 'Privatperson oder Unternehmen' },
      ac: {
        titel: 'A&C Consulting',
        punkte: ['Bedarf klären', 'Angebote vergleichen', 'Empfehlung abgeben', 'Im Schadenfall begleiten'],
      },
      markt: {
        titel: 'Versicherungs­gesellschaften',
        gesellschaften: [
          { bild: 'partner_allianz', name: 'Allianz' },
          { bild: 'partner_axa', name: 'AXA' },
          { bild: 'partner_mobiliar', name: 'die Mobiliar' },
          { bild: 'partner_generali', name: 'Generali' },
          { bild: 'partner_gvb', name: 'GVB' },
          { bild: 'partner_helvetia', name: 'Helvetia' },
          { bild: 'partner_orion', name: 'Orion' },
          { bild: 'partner_smile', name: 'Smile' },
          { bild: 'partner_vaudoise', name: 'Vaudoise' },
        ],
      },
      hin: [
        { hin: 'Mandat', zurueck: 'Empfehlung' },
        { hin: 'Anfrage', zurueck: 'Offerten' },
      ],
      fakten: [
        { titel: 'Sie entscheiden', text: 'Wir setzen um, was Sie wählen.' },
        { titel: 'Für Sie kostenlos', text: 'Im Maklermandat entschädigt uns die Gesellschaft über eine Courtage.' },
        { titel: 'Wir bleiben', text: 'Auch nach dem Abschluss und im Schadenfall.' },
      ],
    },
    {
      art: 'listen',
      id: 'bereiche',
      titel: { vor: 'Was wir für Sie ', akzent: 'prüfen' },
      darstellung: 'kacheln',
      listen: [
        {
          titel: 'Für Privatpersonen',
          id: 'privatpersonen',
          eintraege: [
            { text: 'Kranken- und Zusatzversicherung' },
            { text: 'Hausrat und Haftpflicht' },
            { text: 'Motorfahrzeug' },
            { text: 'Leben und Säule 3a' },
            { text: 'Rechtsschutz' },
          ],
          knopf: { text: 'Offerte anfragen', href: 'offerte', art: 'zweit' },
        },
        {
          titel: 'Für Unternehmen',
          id: 'unternehmen',
          eintraege: [
            { text: 'BVG' },
            { text: 'UVG und UVG-Zusatz' },
            { text: 'Krankentaggeld' },
            { text: 'Betriebshaftpflicht' },
            { text: 'Sachversicherung' },
            { text: 'Rechtsschutz' },
          ],
          knopf: { text: 'Offerte anfragen', href: 'offerte', art: 'zweit' },
        },
      ],
    },
    {
      art: 'matrix',
      id: 'ueberpruefung',
      titel: { vor: 'Wann sich eine ', akzent: 'Überprüfung', nach: ' lohnt' },
      einleitung: 'Bei diesen Ereignissen kann mehr als eine Police betroffen sein.',
      gruppen: [
        {
          titel: 'Privat',
          spalten: ['Kranken­kasse', 'Hausrat und Haftpflicht', 'Motorfahrzeug', 'Leben und Säule 3a'],
          zeilen: [
            { titel: 'Umzug', treffer: [0, 1, 2] },
            { titel: 'Heirat', treffer: [1, 3] },
            { titel: 'Kind', treffer: [0, 1, 3] },
            { titel: 'Wohneigentum', treffer: [1, 3] },
            { titel: 'Stellenwechsel', treffer: [0, 3] },
            { titel: 'Pensionierung', treffer: [0, 3] },
          ],
        },
        {
          titel: 'Im Betrieb',
          spalten: ['UVG', 'BVG', 'Kranken­taggeld', 'Betriebs­haftpflicht', 'Sach­versicherung'],
          zeilen: [
            { titel: 'Gründung', treffer: [3, 4] },
            { titel: 'Erste Anstellung', treffer: [0, 1, 2] },
            { titel: 'Neue Fahrzeuge oder Räume', treffer: [3, 4] },
            { titel: 'Wachstum', treffer: [0, 1, 2, 3, 4] },
          ],
        },
      ],
      nachsatz: 'Eine Übersicht, keine abschliessende Liste. Was bei Ihnen betroffen ist, schauen wir gemeinsam an.',
    },
    {
      art: 'schritte',
      id: 'pruefung',
      titel: { vor: 'So läuft eine ', akzent: 'Vertragsprüfung', nach: ' ab' },
      schritte: [
        {
          titel: 'Unterlagen sichten',
          text: 'Sie geben uns Ihre Policen. Wir sehen sie durch.',
        },
        {
          titel: 'Auswerten',
          text: 'Wir zeigen Lücken, Doppelungen und Prämien, die nicht zur Leistung passen.',
        },
        {
          titel: 'Vorschlag',
          text: 'Sie erhalten eine Übersicht mit Empfehlung. Sie entscheiden.',
        },
      ],
      nachsatz: 'Sie müssen dafür nichts kündigen. Wir schauen zuerst an, was Sie haben.',
    },
    {
      art: 'textBild',
      id: 'schadenfall',
      titel: { vor: 'Auch nach dem Abschluss ', akzent: 'für Sie', nach: ' da' },
      punkte: [
        'Änderungen: Adresse oder Familie – wir melden es der Versicherung.',
        'Prämien: Anpassungen sehen wir uns an, wenn sie kommen.',
        'Schadenfall: Wir nehmen ihn auf, melden ihn und begleiten die Abwicklung.',
        'Notfall: auch ausserhalb der Bürozeiten erreichbar.',
      ],
      knoepfe: [{ text: 'Schaden telefonisch melden', href: 'telefon' }],
      bild: {
        art: 'versicherer',
        hinweis: 'Für die Schadenmeldung auf Ihre Gesellschaft klicken.',
        gesellschaften: [
          {
            bild: 'partner_allianz',
            name: 'Allianz',
            url: 'https://www.allianz.ch/de/privatkunden/services/meine-versicherung/schaden-melden.html',
          },
          {
            bild: 'partner_axa',
            name: 'AXA',
            url: 'https://www.axa.ch/de/privatkunden/schaden/rund-um-den-schaden/schaden-melden.html',
          },
          {
            bild: 'partner_mobiliar',
            name: 'die Mobiliar',
            url: 'https://www.mobiliar.ch/versicherungen-und-vorsorge/services/schaden-melden',
          },
          {
            bild: 'partner_generali',
            name: 'Generali',
            url: 'https://www.generali.ch/privatkunden/services/schaden-online-melden',
          },
          { bild: 'partner_gvb', name: 'GVB', url: 'https://schaden.gvb.ch/' },
          {
            bild: 'partner_helvetia',
            name: 'Helvetia',
            url: 'https://www.helvetia.com/ch/web/de/services/schaden-und-leistung/schaden-melden-privatkunden.html',
          },
          { bild: 'partner_orion', name: 'Orion', url: 'https://www.orion.ch/de/rechtsfall-melden' },
          {
            bild: 'partner_smile',
            name: 'Smile',
            url: 'https://www.smile-insurances.com/ch/main/de/home/service/schadenmeldung.html',
          },
          { bild: 'partner_vaudoise', name: 'Vaudoise', url: 'https://www.vaudoise.ch/de/service-center/schadenmeldung' },
        ],
      },
    },
    {
      art: 'fragen',
      id: 'fragen',
      titel: { vor: 'Häufige ', akzent: 'Fragen' },
      fragen: [
        {
          frage: 'Kostet mich die Beratung etwas?',
          antwort:
            'Im Rahmen des Maklermandats nicht. Uns entschädigen die Gesellschaften über eine Courtage. Geht ein Auftrag darüber hinaus, vereinbaren wir vorher ein Honorar.',
        },
        {
          frage: 'Arbeiten Sie mit allen Gesellschaften zusammen?',
          antwort:
            'Wir sind ungebunden und vergleichen für Sie die Angebote einer breiten Auswahl von Gesellschaften. Welche in Ihrem Fall passt, sagen wir Ihnen im Vorschlag.',
        },
        {
          frage: 'Bin ich an etwas gebunden, wenn ich Sie beauftrage?',
          antwort: 'Das Maklermandat gilt unbefristet und kann von beiden Seiten jederzeit gekündigt werden.',
        },
      ],
    },
    {
      art: 'kontakt',
      titel: { vor: 'Lassen Sie Ihre ', akzent: 'Verträge', nach: ' anschauen' },
      satz: 'Ein erstes Gespräch verpflichtet zu nichts. Bringen Sie mit, was Sie haben.',
      beschriftungen: { telefon: 'Telefon', email: 'E-Mail', buero: 'Büro' },
    },
  ],
}
