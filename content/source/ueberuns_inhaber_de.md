# Über uns - Die beiden Inhaber, Vorlage Ricardo, 15.09.2026

Ricardo hat den Abschnitt als HTML-Vorlage geliefert
(`bilder-quelle/ueberuns_inhaber/vorlage.html`). Der Wortlaut unten stammt
vollständig von dort.

## Kopf

Persönlich für Sie da

Die beiden Inhaber

Ihre Ansprechperson kennt Ihr Dossier und begleitet Sie direkt. So bleiben Wege
kurz und Zuständigkeiten klar.

## Karte 1

Geschäftsführer und Mitinhaber

Ricardo Caires Cerqueira

Ansprechpartner für Treuhand, Steuern und Versicherungen. Als
Versicherungsvermittler bei der FINMA registriert.

Beruflicher Hintergrund

Kaufmann EFZ. Im Finanz- und Rechnungswesen der Creabeton Matériaux AG in Lyss
verantwortlich für Kreditoren, Debitoren und Anlagebuchhaltung sowie Leiter der
Berufsbildung.

Qualifikationen

Sachbearbeiter Rechnungswesen VSK, Feusi Bildungszentrum Bern, und
Versicherungsvermittler VBV.

Beratungssprachen:

Deutsch, Portugiesisch und Englisch

## Karte 2

Mitinhaber

Octavio Nuno Gouveia Andrade

Ansprechpartner für Versicherungsbroking und die persönliche Betreuung von
Versicherungskundinnen und -kunden. Als Versicherungsvermittler bei der FINMA
registriert.

Beruflicher Hintergrund

Kundenberater und Verkaufsleiter bei Allianz Suisse in Biel, danach Hauptagent
der Zurich Versicherungen in Biel und heute selbstständiger Versicherungsbroker.

Qualifikation

Versicherungsvermittler VBV.

Beratungssprachen:

Deutsch, Französisch und Portugiesisch

## Bildbeschriftung für Vorlesewerkzeuge

Porträt Ricardo

Porträt Octavio

## Anmerkungen

**Der bisherige Wortlaut ist ersetzt.** Bis zum 15.09.2026 trugen beide Profile
einen Fliesstext-Werdegang und eine Zeile «Sprachen». Er ist nicht widerrufen,
steht aber nicht mehr auf der Seite.

**Octavio heisst neu nur noch «Mitinhaber».** Bis dahin stand bei beiden
«Geschäftsführer und Mitinhaber». Das widersprach Abschnitt 2 der Hausordnung,
wo die Geschäftsführung allein bei Ricardo liegt; der Auftrag sagt es
ausdruecklich.

**Die Porträts sind eingesetzt.** `portrait_ricardo.webp` und
`portrait_octavio.webp` liegen seit dem Aufbau der Startseite unter
`public/bilder/`; die Alt-Texte sind von dort uebernommen. Die Hinweise
«Aufnahme 4 der Shootingliste» und «Aufnahme 5 der Shootingliste» sind damit aus
dem Frontend verschwunden.

**Die E-Mail-Knöpfe der Vorlage sind nicht gebaut.** Sie zeigen auf
`Ricardo.caires@ac-co.ch` und `Octavio.Andrade@ac-co.ch`. Persönliche Adressen
sind in `src/lib/company.ts` nicht erfasst, und Firmenangaben werden nur dort
gepflegt. Der Auftrag verlangt ausdruecklich «die grünen
Telefonnummer-Buttons». Kommen die Adressen dazu, tritt der zweite Knopf ohne
Umbau daneben.

**Die Telefonnummern stehen als Beschriftung im Knopf**, nicht als Wort
«Anrufen» wie in der Vorlage. Sie kommen aus `direktnummern` in
`src/lib/company.ts` und stehen nirgends sonst ausgeschrieben.

**Französisch.** Die Vorlage fuehrt bei Octavio «Deutsch, Französisch und
Portugiesisch». Abschnitt 10 der Hausordnung haelt seit dem 07.09.2026 fest,
dass keiner der beiden Inhaber Französisch als Beratungssprache fuehrt, und
blockiert damit die ganze Sprachfassung `/fr/`. Der Wortlaut des Auftrags gilt;
Ricardo ist darauf hingewiesen, dass die offene Frage damit berührt ist.
