/**
 * /de/versicherungen im Baukasten (15.10.2026), auf Ricardos Auftrag kürzer und
 * im Ton «direkt und persönlich». Betreuung und Schadenfall sind ein Abschnitt.
 * Am selben Tag gekürzt, Lebensereignisse als Zeitleiste (Ricardo: «zu viel text»,
 * «häufiger bildlich dar mit diagrammen»).
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
    { art: 'modell', id: 'modell' },
    {
      art: 'listen',
      id: 'bereiche',
      titel: { vor: 'Was wir für Sie ', akzent: 'prüfen' },
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
        },
      ],
    },
    {
      art: 'zeitleiste',
      id: 'ueberpruefung',
      titel: { vor: 'Wann sich eine ', akzent: 'Überprüfung', nach: ' lohnt' },
      einleitung: 'Bei diesen Ereignissen kann mehr als eine Police betroffen sein.',
      reihen: [
        {
          titel: 'Privat',
          stationen: [
            { titel: 'Umzug' },
            { titel: 'Heirat' },
            { titel: 'Kind' },
            { titel: 'Wohneigentum' },
            { titel: 'Stellenwechsel' },
            { titel: 'Pensionierung', hervor: true },
          ],
        },
        {
          titel: 'Im Betrieb',
          stationen: [
            { titel: 'Gründung' },
            { titel: 'Erste Anstellung' },
            { titel: 'Neue Fahrzeuge oder Räume' },
            { titel: 'Wachstum', hervor: true },
          ],
        },
      ],
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
          {
            bild: 'partner_smile',
            name: 'Smile',
            url: 'https://www.smile-insurances.com/ch/main/de/home/service/schadenmeldung.html',
          },
          { bild: 'partner_vaudoise', name: 'Vaudoise', url: 'https://www.vaudoise.ch/de/service-center/schadenmeldung' },
          {
            bild: 'partner_zurich',
            name: 'Zurich',
            url: 'https://www.zurich.ch/de/services/schadenservices/schadenmeldung',
          },
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
