/**
 * /de/digital – «Digital mit A&C» (15.10.2026). Ricardo: «ich will unsere
 * Digitalisierung und Kundenportal in den vordergrund stellen».
 *
 * Inhalt nur, was es gibt: Kundenportal (crm.ac-co.ch/portal) und die
 * Offertanfrage Frage für Frage. Digitalisierung ist Werkzeug, nicht
 * Verkaufsargument (Hausordnung Abschnitt 9).
 *
 * Am 15.10.2026 gekürzt, mit mehr Portalansichten und ohne jede Aussage zu
 * Anmeldung, Server oder Datenschutz (Ricardo: «ich will nicht das etwas
 * bezüglich kundenprotal im zusammenhang mit sicherheit oder datenschutz genannt
 * wird»).
 *
 * QUELLEN: `content/source/umbau_2026-10b_de.md`, `umbau_digital_de.md`, `startseite_de.md`.
 */
import type { SeitenInhalt } from './typen'

export const digital: SeitenInhalt = {
  meta: {
    title: 'Kundenportal und Offerte online',
    description:
      'Ihre Policen und Dokumente an einem Ort, Anfragen direkt an uns und eine Offerte online anfragen.',
  },
  banner: { themenzeile: 'DIGITAL', ueberschrift: 'Kundenportal und Offerte online' },
  bloecke: [
    {
      art: 'text',
      id: 'intro',
      breit: true,
      titel: { vor: 'Papierlos, aber ', akzent: 'persönlich' },
      absaetze: [
        'Ihre Policen liegen nicht mehr im Ordner im Keller, sondern im Kundenportal. Wenn Sie lieber anrufen, rufen Sie an.',
      ],
    },
    {
      art: 'textBild',
      id: 'kundenportal',
      titel: { vor: 'Das ', akzent: 'Kundenportal' },
      punkte: [
        'Policen und Dokumente: an einem Ort, am Computer oder auf dem Handy',
        'Kosten: Ihre Versicherungen pro Jahr als Diagramm',
        'Änderungen: etwa eine neue Adresse direkt melden',
        'Anfragen: Offerte, Rückruf, Termin oder Vertragsänderung',
        'Stand: angefragt, in Bearbeitung, erledigt – mit E-Mail bei jedem Wechsel',
      ],
      knoepfe: [{ text: 'Zum Kundenportal', href: 'kundenportal' }],
      bild: { art: 'portal', ansicht: 'fenster' },
    },
    {
      art: 'portalDemo',
      id: 'ansichten',
      titel: { vor: 'Ein Blick ', akzent: 'hinein' },
      einleitung: 'Probieren Sie es aus: Verträge öffnen, Leistungen ansehen, eine Anfrage ausfüllen. Alle Angaben sind erfunden.',
    },
    {
      art: 'schritte',
      id: 'zugang',
      titel: { vor: 'So kommen Sie zu ', akzent: 'Ihrem Zugang' },
      schritte: [
        { titel: 'Registrieren', text: 'Sie registrieren sich im Kundenportal.' },
        { titel: 'Freischalten', text: 'Wir ordnen Ihren Zugang Ihrem Dossier zu.' },
        { titel: 'Loslegen', text: 'Policen ansehen, Änderungen und Anfragen schicken.' },
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
        'Frage für Frage, jede freiwillig. Was offen bleibt, klären wir im Gespräch.',
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
