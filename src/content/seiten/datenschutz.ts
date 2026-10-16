/**
 * /de/datenschutz im Baukasten (15.10.2026).
 *
 * Rechtstext. Der Wortlaut ist unverändert aus `src/content/pages/datenschutz.ts`
 * übernommen (QUELLE: `content/source/datenschutz_de.md`) und wird nie automatisch
 * geändert — Änderungen nur durch Ricardo. Der Sitz kommt als Verweis aus
 * `src/lib/company.ts`.
 *
 * Neu ist nur der Banner: schlichte Überschrift statt Slogan
 * (`content/source/umbau_recht_de.md`).
 *
 * «Ihre Rechte» steht als Absätze und nicht als Liste mit Haken: Der Block `text`
 * setzt Haken immer unter die Absätze, und der Nachsatz «Für eine Auskunft …»
 * gehört hinter die Rechte. So bleibt die Reihenfolge des Wortlauts erhalten.
 */
import type { SeitenInhalt } from './typen'

export const datenschutz: SeitenInhalt = {
  meta: {
    title: 'Datenschutzerklärung',
    description:
      'Wie die A&C Consulting GmbH mit Personendaten umgeht — nach dem revidierten Schweizer Datenschutzgesetz.',
  },
  banner: { themenzeile: 'DATENSCHUTZ', ueberschrift: 'Datenschutz­erklärung' },
  bloecke: [
    {
      art: 'text',
      id: 'verantwortlich',
      titel: { vor: 'Verantwortliche ', akzent: 'Stelle' },
      absaetze: [
        'Verantwortlich für die Bearbeitung von Personendaten im Zusammenhang mit dieser Website ist die A&C Consulting GmbH.',
        [{ company: 'sitz' }],
        'Für Fragen zum Datenschutz wenden Sie sich an Ricardo Caires.',
      ],
    },
    {
      art: 'text',
      id: 'nicht',
      titel: { vor: 'Was diese Website ', akzent: 'nicht', nach: ' tut' },
      punkte: [
        'Diese Website setzt keine Cookies.',
        'Sie verwendet kein Analysewerkzeug, keine Zählpixel und keine Werkzeuge zur Verhaltensmessung.',
        'Sie bindet keine Schriften, Videos oder Schaltflächen von fremden Servern ein. Einzige Ausnahme ist die Karte von Google Maps auf der Startseite und den Seiten «Digital», «Über uns» und «Kontakt».',
        'Diese Website hat keine Anmeldung und keinen Newsletter. Das Kundenportal ist ein eigenes Angebot mit eigener Datenschutzerklärung.',
      ],
    },
    {
      art: 'text',
      id: 'besuch',
      titel: { vor: 'Beim ', akzent: 'Besuch', nach: ' dieser Website' },
      absaetze: [
        'Beim Aufruf einer Seite übermittelt Ihr Browser technische Angaben, die für die Auslieferung nötig sind: IP-Adresse, Zeitpunkt, aufgerufene Adresse, übermittelte Datenmenge und Angaben zu Browser und Betriebssystem.',
        'Diese Angaben fallen bei unserem Hostinganbieter an. Sie dienen dem Betrieb und der Sicherheit der Website — etwa der Abwehr von Angriffen — und werden nicht mit anderen Daten zusammengeführt.',
        'Wir werten diese Angaben nicht aus und erstellen daraus keine Profile.',
      ],
    },
    {
      art: 'text',
      id: 'hosting',
      titel: { akzent: 'Hosting' },
      absaetze: [
        'Die Website wird von Cloudflare, Inc. betrieben und über deren weltweites Netz ausgeliefert.',
        'Das bedeutet, dass die unter Abschnitt 03 genannten technischen Angaben auch ausserhalb der Schweiz bearbeitet werden können, je nachdem, über welchen Standort Ihr Aufruf läuft.',
        'Cloudflare ist für uns Auftragsbearbeiterin und darf die Daten nur für den Betrieb der Website verwenden.',
        'Diese Angabe betrifft ausschliesslich den Besuch der Website. Unterlagen und Daten aus einem Mandat werden getrennt davon bearbeitet und laufen nicht über diese Website.',
      ],
    },
    {
      art: 'text',
      id: 'google-maps',
      titel: { vor: 'Karte von ', akzent: 'Google Maps' },
      absaetze: [
        'Auf der Startseite und den Seiten «Digital», «Über uns» und «Kontakt» binden wir eine Karte von Google Maps ein (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland).',
        'Beim Aufruf der Seite stellt Ihr Browser eine Verbindung zu Servern von Google her; dabei werden insbesondere Ihre IP-Adresse und Angaben zum Browser an Google übermittelt, auch in die USA.',
        'Wir setzen die Karte ein, damit Sie unser Büro leicht finden. Weitere Informationen finden Sie in der Datenschutzerklärung von Google unter policies.google.com/privacy.',
      ],
    },
    {
      art: 'text',
      id: 'kontakt',
      titel: { vor: 'Wenn Sie uns ', akzent: 'kontaktieren' },
      absaetze: [
        'Rufen Sie an oder schreiben Sie uns eine E-Mail, bearbeiten wir die Angaben, die Sie uns dabei geben, um Ihre Anfrage zu beantworten.',
        'Dazu gehören in der Regel Ihr Name, Ihre Telefonnummer oder E-Mail-Adresse und das, was Sie uns mitteilen.',
        'Unser E-Mail-Postfach betreiben wir selbst. Gehostet wird es von Microsoft. Microsoft ist dabei Auftragsbearbeiterin und an unsere Weisungen gebunden.',
        'Anfragen, die zu keinem Mandat führen, löschen wir, sobald sie nicht mehr benötigt werden.',
        'Für Anfragen über die Formulare dieser Website gilt der folgende Abschnitt.',
        'Bitte senden Sie uns keine besonders schützenswerten Angaben per E-Mail oder über ein Formular — etwa Gesundheitsdaten, AHV-Nummer oder Bankangaben. Für den Austausch von Unterlagen richten wir nach dem Erstkontakt einen geschützten Weg ein.',
      ],
    },
    {
      art: 'text',
      id: 'formulare',
      titel: { vor: 'Formulare auf dieser ', akzent: 'Website' },
      absaetze: [
        'Auf dieser Website gibt es drei Formulare: das Kontaktformular, die Offertanfrage und die Checkliste zur Steuererklärung.',
        'Kontaktformular: Name, E-Mail-Adresse, auf Wunsch Telefonnummer, Anliegen und Ihre Nachricht – damit wir Ihre Anfrage beantworten können.',
        'Offertanfrage: Ihre Kontaktangaben und die Angaben zur gewünschten Versicherung – damit wir passende Offerten einholen und mit Ihnen besprechen können. An Versicherungsgesellschaften geben wir die Angaben nur weiter, soweit das für die Offerte nötig ist.',
        'Checkliste zur Steuererklärung: Vorname, Name, Telefonnummer, E-Mail-Adresse und Ihre Antworten im Fragebogen – damit wir Ihnen die Checkliste senden und Sie wegen Ihrer Steuererklärung anrufen können.',
        'Die Angaben gehen verschlüsselt direkt an unseren eigenen Server bei Infomaniak in der Schweiz, nicht über unseren Hostinganbieter. Dort legen wir sie in unserer Kundenverwaltung ab. Bestätigungen und die Checkliste versenden wir über unser E-Mail-Postfach bei Microsoft.',
        'Zum Schutz vor Missbrauch verwenden wir Ihre IP-Adresse kurzzeitig, um die Zahl der Anfragen zu begrenzen. Einen fremden Dienst zur Spam-Abwehr setzen wir nicht ein.',
        'Anfragen, die zu keinem Mandat führen, löschen wir, sobald sie nicht mehr benötigt werden.',
      ],
    },
    {
      art: 'text',
      id: 'weitergabe',
      titel: { vor: 'Weitergabe an ', akzent: 'Dritte' },
      absaetze: [
        'Wir geben Ihre Daten nicht an Dritte weiter, um sie zu verkaufen oder für Werbung zu nutzen.',
        'Eine Weitergabe erfolgt nur, wenn Sie uns dazu beauftragen — etwa an eine Versicherungsgesellschaft im Rahmen eines Maklermandats —, wenn wir gesetzlich dazu verpflichtet sind, oder an Auftragsbearbeiter, die für uns tätig werden und an unsere Weisungen gebunden sind.',
      ],
    },
    {
      art: 'text',
      id: 'rechte',
      titel: { vor: 'Ihre ', akzent: 'Rechte' },
      absaetze: [
        'Sie haben das Recht, Auskunft über die von uns bearbeiteten Personendaten zu verlangen.',
        'Sie können unrichtige Daten berichtigen und die Löschung von Daten verlangen, soweit wir sie nicht aus rechtlichen Gründen aufbewahren müssen.',
        'Sie können der Bearbeitung widersprechen und die Herausgabe Ihrer Daten in einem gängigen Format verlangen.',
        'Für eine Auskunft genügt eine formlose Mitteilung an uns. Wir dürfen dabei einen Nachweis Ihrer Identität verlangen.',
        'Sind Sie mit unserer Antwort nicht einverstanden, können Sie sich an den Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten EDÖB wenden.',
      ],
    },
    {
      art: 'text',
      id: 'sicherheit',
      titel: { akzent: 'Sicherheit' },
      absaetze: [
        'Die Website wird ausschliesslich verschlüsselt ausgeliefert.',
        'Wir treffen angemessene technische und organisatorische Massnahmen, um Ihre Daten vor Verlust und unbefugtem Zugriff zu schützen. Eine vollständige Sicherheit kann bei der Übermittlung über das Internet niemand zusichern.',
      ],
    },
    {
      art: 'text',
      id: 'aenderungen',
      titel: { akzent: 'Änderungen' },
      absaetze: [
        'Wir passen diese Erklärung an, wenn sich die Website oder die Rechtslage ändert.',
        'Massgebend ist die jeweils auf dieser Seite veröffentlichte Fassung.',
        'Stand: 16.10.2026',
      ],
    },
  ],
}
