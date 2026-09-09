/**
 * /de/datenschutz
 *
 * QUELLE: `content/source/datenschutz_de.md`.
 *
 * Diese Erklaerung beschreibt, was die Website **tatsaechlich** tut. Am
 * 09.09.2026 geprueft: keine Cookies, kein Analysewerkzeug, keine eingebundenen
 * Schriften oder Skripte von fremden Servern, kein Aufruf an Dritte. Die
 * Schriften laedt `next/font` beim Bauen herunter und liefert sie mit.
 *
 * Aendert sich daran etwas — ein Kontaktformular, eine Karte, ein
 * Analysewerkzeug —, aendert sich **zuerst** diese Erklaerung. Ein Mustertext,
 * der mehr behauptet als die Seite tut, waere schlechter als keiner.
 *
 * Postfach und Loeschung hat Ricardo am 09.09.2026 bestaetigt: Das Postfach
 * betreibt A&C selbst, gehostet von Microsoft; Anfragen ohne Mandat werden
 * geloescht. Eine feste Frist ist bewusst **nicht** genannt — sie wurde nicht
 * genannt, und erfunden wird sie nicht.
 *
 * **Vor dem Go-live rechtlich pruefen lassen.** Der Entwurf ist sorgfaeltig,
 * aber er ist ein Entwurf.
 */

import type { PageContent } from '../types'

export const datenschutz: PageContent = {
  key: 'datenschutz',

  meta: {
    title: 'Datenschutzerklärung',
    description:
      'Wie die A&C Consulting GmbH mit Personendaten umgeht — nach dem revidierten Schweizer Datenschutzgesetz.',
  },

  hero: {
    heading: 'Datenschutzerklärung',
    lead: 'Wie wir mit Ihren Daten umgehen, nach dem revidierten Bundesgesetz über den Datenschutz.',
  },

  blocks: [
    // 01 Verantwortliche Stelle
    {
      kind: 'prose',
      id: 'verantwortlich',
      heading: 'Verantwortliche Stelle',
      paragraphs: [
        'Verantwortlich für die Bearbeitung von Personendaten im Zusammenhang mit dieser Website ist die A&C Consulting GmbH.',
        [{ company: 'sitz' }],
        'Für Fragen zum Datenschutz wenden Sie sich an Ricardo Caires Cerqueira.',
      ],
    },

    // 02 Was die Seite nicht tut — steht bewusst vorn
    {
      kind: 'list',
      id: 'nicht',
      heading: 'Was diese Website nicht tut',
      items: [
        'Diese Website setzt keine Cookies.',
        'Sie verwendet kein Analysewerkzeug, keine Zählpixel und keine Werkzeuge zur Verhaltensmessung.',
        'Sie bindet keine Schriften, Karten, Videos oder Schaltflächen von fremden Servern ein. Alles, was Sie sehen, wird von unserem eigenen Webauftritt ausgeliefert.',
        'Es gibt keine Anmeldung, keinen Kundenbereich und keinen Newsletter.',
      ],
    },

    // 03 Beim Besuch
    {
      kind: 'prose',
      id: 'besuch',
      heading: 'Beim Besuch dieser Website',
      paragraphs: [
        'Beim Aufruf einer Seite übermittelt Ihr Browser technische Angaben, die für die Auslieferung nötig sind: IP-Adresse, Zeitpunkt, aufgerufene Adresse, übermittelte Datenmenge und Angaben zu Browser und Betriebssystem.',
        'Diese Angaben fallen bei unserem Hostinganbieter an. Sie dienen dem Betrieb und der Sicherheit der Website — etwa der Abwehr von Angriffen — und werden nicht mit anderen Daten zusammengeführt.',
        'Wir werten diese Angaben nicht aus und erstellen daraus keine Profile.',
      ],
    },

    // 04 Hosting
    {
      kind: 'prose',
      id: 'hosting',
      heading: 'Hosting',
      paragraphs: [
        'Die Website wird von Cloudflare, Inc. betrieben und über deren weltweites Netz ausgeliefert.',
        'Das bedeutet, dass die unter Abschnitt 03 genannten technischen Angaben auch ausserhalb der Schweiz bearbeitet werden können, je nachdem, über welchen Standort Ihr Aufruf läuft.',
        'Cloudflare ist für uns Auftragsbearbeiterin und darf die Daten nur für den Betrieb der Website verwenden.',
        'Diese Angabe betrifft ausschliesslich den Besuch der Website. Unterlagen und Daten aus einem Mandat werden getrennt davon bearbeitet und laufen nicht über diese Website.',
      ],
    },

    // 05 Kontaktaufnahme
    {
      kind: 'prose',
      id: 'kontakt',
      heading: 'Wenn Sie uns kontaktieren',
      paragraphs: [
        'Rufen Sie an oder schreiben Sie uns eine E-Mail, bearbeiten wir die Angaben, die Sie uns dabei geben, um Ihre Anfrage zu beantworten.',
        'Dazu gehören in der Regel Ihr Name, Ihre Telefonnummer oder E-Mail-Adresse und das, was Sie uns mitteilen.',
        'Unser E-Mail-Postfach betreiben wir selbst. Gehostet wird es von Microsoft. Microsoft ist dabei Auftragsbearbeiterin und an unsere Weisungen gebunden.',
        'Anfragen, die zu keinem Mandat führen, löschen wir, sobald sie nicht mehr benötigt werden.',
        'Ein Kontaktformular gibt es zurzeit nicht. Sobald eines aufgeschaltet wird, ergänzen wir diese Erklärung vorher.',
        'Bitte senden Sie uns keine besonders schützenswerten Angaben per E-Mail — etwa Gesundheitsdaten, AHV-Nummer oder Bankangaben. Für den Austausch von Unterlagen richten wir nach dem Erstkontakt einen geschützten Weg ein.',
      ],
    },

    // 06 Weitergabe
    {
      kind: 'prose',
      id: 'weitergabe',
      heading: 'Weitergabe an Dritte',
      paragraphs: [
        'Wir geben Ihre Daten nicht an Dritte weiter, um sie zu verkaufen oder für Werbung zu nutzen.',
        'Eine Weitergabe erfolgt nur, wenn Sie uns dazu beauftragen — etwa an eine Versicherungsgesellschaft im Rahmen eines Maklermandats —, wenn wir gesetzlich dazu verpflichtet sind, oder an Auftragsbearbeiter, die für uns tätig werden und an unsere Weisungen gebunden sind.',
      ],
    },

    // 07 Rechte
    {
      kind: 'list',
      id: 'rechte',
      heading: 'Ihre Rechte',
      items: [
        'Sie haben das Recht, Auskunft über die von uns bearbeiteten Personendaten zu verlangen.',
        'Sie können unrichtige Daten berichtigen und die Löschung von Daten verlangen, soweit wir sie nicht aus rechtlichen Gründen aufbewahren müssen.',
        'Sie können der Bearbeitung widersprechen und die Herausgabe Ihrer Daten in einem gängigen Format verlangen.',
      ],
      outro: [
        'Für eine Auskunft genügt eine formlose Mitteilung an uns. Wir dürfen dabei einen Nachweis Ihrer Identität verlangen.',
        'Sind Sie mit unserer Antwort nicht einverstanden, können Sie sich an den Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten EDÖB wenden.',
      ],
    },

    // 08 Sicherheit
    {
      kind: 'prose',
      id: 'sicherheit',
      heading: 'Sicherheit',
      paragraphs: [
        'Die Website wird ausschliesslich verschlüsselt ausgeliefert.',
        'Wir treffen angemessene technische und organisatorische Massnahmen, um Ihre Daten vor Verlust und unbefugtem Zugriff zu schützen. Eine vollständige Sicherheit kann bei der Übermittlung über das Internet niemand zusichern.',
      ],
    },

    // 09 Änderungen
    {
      kind: 'prose',
      id: 'aenderungen',
      heading: 'Änderungen',
      paragraphs: [
        'Wir passen diese Erklärung an, wenn sich die Website oder die Rechtslage ändert.',
        'Massgebend ist die jeweils auf dieser Seite veröffentlichte Fassung.',
        'Stand: 09.09.2026',
      ],
    },
  ],
}
