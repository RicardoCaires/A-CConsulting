/**
 * /de/digital – «Digital mit A&C» (15.10.2026). Ricardo: «ich will unsere
 * Digitalisierung und Kundenportal in den vordergrund stellen».
 *
 * Inhalt nur, was es gibt: Kundenportal (crm.ac-co.ch/portal) und die
 * Offertanfrage Frage für Frage. Digitalisierung ist Werkzeug, nicht
 * Verkaufsargument (Hausordnung Abschnitt 9).
 *
 * QUELLEN: `content/source/umbau_digital_de.md`, `startseite_de.md`.
 */
import type { SeitenInhalt } from './typen'

export const digital: SeitenInhalt = {
  meta: {
    title: 'Kundenportal und Offerte online',
    description:
      'Ihre Policen und Dokumente an einem Ort, Anfragen direkt an uns und eine Offerte online anfragen. Daten auf unserem eigenen Server in der Schweiz.',
  },
  banner: { themenzeile: 'DIGITAL', ueberschrift: 'Kundenportal und Offerte online' },
  bloecke: [
    {
      art: 'text',
      id: 'intro',
      breit: true,
      titel: { vor: 'Papierlos, aber ', akzent: 'persönlich' },
      absaetze: [
        'Wir nutzen moderne Software dort, wo sie Administration reduziert, Abläufe vereinfacht und Fehler vermeidet. Die fachliche Prüfung, die Beratung und die Verantwortung bleiben bei uns.',
        'Für Sie heisst das: Ihre Policen liegen nicht mehr in einem Ordner im Keller, sondern im Kundenportal. Eine neue Adresse melden Sie dort, statt einen Brief zu schreiben. Und wenn Sie lieber anrufen, rufen Sie an.',
      ],
    },
    {
      art: 'textBild',
      id: 'kundenportal',
      titel: { vor: 'Das ', akzent: 'Kundenportal' },
      absaetze: [
        'Im Kundenportal sehen Sie Ihre Versicherungen und Unterlagen, wann es Ihnen passt – am Computer oder auf dem Handy.',
      ],
      punkte: [
        'Ihre Policen und Dokumente an einem Ort',
        'Änderungen an Ihren Angaben direkt melden, etwa eine neue Adresse',
        'Anfragen stellen: Offerte, Rückruf, Termin oder Vertragsänderung',
        'Den Stand jeder Anfrage sehen: angefragt, in Bearbeitung, erledigt – bei jedem Wechsel erhalten Sie eine E-Mail',
        'Auf dem Handy wie eine App auf den Startbildschirm legen',
        'Anmeldung mit Passwort und Code per E-Mail, Daten auf unserem eigenen Server in der Schweiz',
      ],
      knoepfe: [{ text: 'Zum Kundenportal', href: 'kundenportal' }],
      bild: { art: 'portal' },
    },
    {
      art: 'schritte',
      id: 'zugang',
      titel: { vor: 'So kommen Sie zu ', akzent: 'Ihrem Zugang' },
      schritte: [
        { titel: 'Registrieren', text: 'Sie registrieren sich im Kundenportal.' },
        {
          titel: 'Wir prüfen und schalten frei',
          text: 'Wir ordnen Ihren Zugang Ihrem Dossier zu und schalten ihn frei. Erst dann sehen Sie Ihre Daten.',
        },
        {
          titel: 'Code per E-Mail',
          text: 'Bei der Anmeldung geben Sie Ihr Passwort ein und danach einen Code, den Sie per E-Mail erhalten.',
        },
        {
          titel: 'Loslegen',
          text: 'Sie sehen Ihre Policen und Dokumente und schicken uns Änderungen und Anfragen direkt.',
        },
      ],
      nachsatz:
        'Das Portal ist für Kundinnen und Kunden von A&C. Sind Sie es noch nicht, beginnt es mit einem Gespräch.',
    },
    {
      art: 'text',
      id: 'offerte',
      titel: { vor: 'Offerte ', akzent: 'online', nach: ' anfragen' },
      absaetze: [
        'Sie möchten eine Offerte, aber nicht gleich telefonieren? Dann fragen Sie online an.',
        'Wir fragen Frage für Frage, was wir für die Offerte wissen müssen. Jede Frage ist freiwillig. Was Sie nicht beantworten möchten, klären wir im Gespräch.',
      ],
      knoepfe: [{ text: 'Offerte anfragen', href: 'offerte' }],
    },
    {
      art: 'fragen',
      id: 'fragen',
      titel: { vor: 'Häufige ', akzent: 'Fragen' },
      fragen: [
        {
          frage: 'Kostet das Kundenportal etwas?',
          antwort: 'Nein. Für Kundinnen und Kunden von A&C ist das Portal ohne Kosten.',
        },
        {
          frage: 'Sind meine Daten sicher?',
          antwort:
            'Ihre Daten liegen auf unserem eigenen Server in der Schweiz. Für die Anmeldung brauchen Sie Ihr Passwort und zusätzlich einen Code, den Sie per E-Mail erhalten. Und Sie sehen erst etwas, wenn wir Ihren Zugang Ihrem Dossier zugeordnet haben.',
        },
        {
          frage: 'Muss ich das Portal nutzen?',
          antwort: 'Nein. Telefon und E-Mail bleiben. Das Portal ist ein zusätzlicher Weg, kein Ersatz für das Gespräch.',
        },
      ],
    },
    {
      art: 'kontakt',
      titel: { vor: 'Lieber ', akzent: 'persönlich', nach: '?' },
      satz: 'Rufen Sie an oder schreiben Sie uns. Ihr Dossier wird von einem von uns beiden geführt – keine Hotline.',
      beschriftungen: { telefon: 'Telefon', email: 'E-Mail', buero: 'Büro' },
    },
  ],
}
