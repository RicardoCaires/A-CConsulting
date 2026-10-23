/**
 * Einstieg der Startseite mit Bühne (23.10.2026). Ricardo: «ich will eine Animation zu unseren dienstleistungen und
 * unseren vorteilen vorallem digital kundenportal etc», «bitte alle anderen Banner auf den einzelnen seiten löschen
 * nur noch die Startseite hat einen Banner und das wird diese Animation sein».
 *
 * Die Hauptaussage stammt von `/versicherungen` («Wir vertreten Sie, nicht die Versicherung»), die übrigen Sätze aus
 * den Seiten, auf die die Szenen führen. Neu sind nur «Ein Ansprechpartner für alles» (Ricardos Vorgabe) und die
 * kurzen Fassungen der Punkte. Beschriftungen des Portals, der Checkliste und des Blogs liest der Baustein aus deren
 * eigenen Inhalten. QUELLE: `content/source/startseite_buehne_de.md`.
 */
export const einstieg = {
  themenzeile: 'Versicherungen · Treuhand · Steuern',
  titel: { vor: 'Wir vertreten ', akzent: 'Sie', nach: ', nicht die Versicherung.' },
  vorteile: [
    'Ein Ansprechpartner für Versicherungen, Treuhand und Steuern',
    'Ihre Verträge und Unterlagen im Kundenportal',
    'Beratung auf Deutsch, Französisch und Portugiesisch',
  ],
  buehne: 'Unsere Leistungen im Überblick',
  reiter: { portal: 'Kundenportal', versicherungen: 'Versicherungen', steuern: 'Steuern', offerte: 'Offerte online', blog: 'Blog' },
  portal: {
    satz: 'Policen und Dokumente an einem Ort, am Computer oder auf dem Handy.',
    knopf: 'Kundenportal ansehen',
  },
  versicherungen: {
    titel: { vor: 'Ein Ansprechpartner ', akzent: 'für alles' },
    sie: 'Sie',
    ac: 'A&C',
    offerten: 'Offerten',
    empfehlung: 'Empfehlung',
    punkte: ['Vergleichen und empfehlen', 'Im Schadenfall begleiten', 'Im Maklermandat kostenlos'],
    knopf: 'Zu den Versicherungen',
  },
  steuern: {
    titel: { vor: 'Ihre ', akzent: 'Steuererklärung' },
    kostenlos: 'kostenlos',
    schritte: [
      { fett: 'Checkliste zusammenstellen:', text: 'sieben kurze Fragen' },
      { text: 'Sie bringen die Unterlagen' },
      { text: 'Wir erstellen und reichen ein, die Frist verlängern wir' },
      { text: 'Veranlagung nachkontrolliert' },
    ],
  },
  offerte: {
    titel: 'Offerte anfragen',
    frage: 'Wofür möchten Sie eine Offerte?',
    optionen: ['Auto', 'Hausrat und Haftpflicht', 'Gebäude', 'Unternehmen'],
    satz: 'Wir holen die Angebote bei den Gesellschaften ein.',
  },
}
