# Über uns - Standort und neue Geschäftsadresse, 15.09.2026

Ricardo hat den Abschnitt als HTML-Vorlage geliefert
(`bilder-quelle/überuns_standort/vorlage.html`) und im selben Auftrag die
**neue Geschäftsadresse** bestimmt:

> Die Geschäftsadresse hat geändert und lautet neu:
> A&C Consulting GmbH, Bielstrasse 10, 2556 Aegerten

## Der Abschnitt

Unser Standort

Persönlich für Sie da in Aegerten

Bielstrasse 10
2556 Aegerten

Besprechungen sind bei uns vor Ort oder nach Vereinbarung bei Ihnen möglich.
Planen Sie Ihre Anreise direkt über Google Maps.

Route mit Google Maps planen

Route zur {adresse} mit Google Maps planen

Bildplatzhalter

Bielstrasse 10 - Aegerten

## Die Adresse an den übrigen Stellen

Der Auftrag verlangt die Adresse «an sämtlichen weiteren Stellen der Website,
insbesondere im Footer, auf der Kontaktseite, im Impressum, in strukturierten
Daten, Metadaten und allfälligen zentralen Konfigurationsdateien» und
«alle sichtbaren und technischen Vorkommen der bisherigen Adresse» zu
entfernen. Geaendert sind damit auch diese Textstellen:

Treuhand und Versicherungen in Aegerten

Buchhaltung, Versicherungen und Finanzplanung für Selbständige, KMU und
Privatpersonen. Feste Ansprechpartner in Aegerten, Kanton Bern.

Wir unterstützen Selbständige, KMU und Privatpersonen bei Buchhaltung,
Versicherungen und Finanzfragen – mit festen Ansprechpartnern in Aegerten.

A&C Consulting betreut Privatpersonen, Selbständige und KMU im Seeland und im
Kanton Bern. Sie erreichen uns in Aegerten, auf Deutsch, Französisch und
Portugiesisch.

Beratung auf Deutsch, Französisch und Portugiesisch. A&C Consulting GmbH,
Bielstrasse 10, 2556 Aegerten

Übersicht über Einnahmen und Ausgaben, und eine Vorsorge, die zu Ihrer
Situation passt. A&C Consulting in Aegerten.

Kurze Beiträge zu Fragen, die im Erstgespräch immer wieder kommen.
A&C Consulting in Aegerten.

Unser Büro liegt an der Bielstrasse in Aegerten. Termine finden bei uns statt
oder bei Ihnen - wie es Ihnen besser passt.

## Anmerkungen

**Die Postleitzahl ist zu bestätigen.** Der Auftrag nennt dreimal **2556** -
im Adressblock, im Google-Maps-Link und in der Beschriftung des Knopfes.
CLAUDE.md und `src/lib/company.ts` fuehrten bis zum 15.09.2026 **2558**
Aegerten. Es gilt Ricardos geschriebener Wortlaut; die Zahl steht an genau
einer Stelle im Code und ist mit einer Zeile korrigiert, falls 2558 richtig
ist. **Ricardo ist darauf hingewiesen.**

**Der Umzug war auf den 01.11.2026 vorgemerkt.** CLAUDE.md, Abschnitt 2, hielt
fest, dass bis dahin öffentlich Lyss gilt und der Sitz erst nach der
Nachführung von Handelsregister und FINMA wechselt. Ricardo hat den Wechsel
vorgezogen und die Änderung ausdruecklich auch für das Impressum verlangt.
Damit nennt die Website eine andere Adresse als das öffentliche Register,
solange dieses nicht nachgeführt ist. **Ricardo ist darauf hingewiesen.**

**Zwei Stellen ausserhalb dieses Projekts fuehren weiterhin Lyss** und sind
nicht nachgezogen, weil sie nicht hierher gehören: der Skill
`ac-corporate-design` (Fusszeile aller Geschäftsdokumente) und
`00_Shared/Stammdaten.md`. `design/ac-corporate-design.tokens.json` ist die
Kopie der Skill-Tokens und wird hier nicht von Hand geändert; sie fliesst
nicht auf die Website. Dieselbe Lage wie beim Telefonnummernwechsel vom
10.09.2026.

**Strukturierte Daten gibt es nicht.** Die Website fuehrt kein JSON-LD und
keine Schema.org-Auszeichnung; es war also nichts zu aendern. Die Adresse
steht ausschliesslich in `src/lib/company.ts` und wird von dort gelesen -
Fussbereich, Kontaktseite, Impressum, Datenschutz und dieser Abschnitt.

**«Lyss» steht noch an einer Stelle**, und zwar richtig so: im beruflichen
Hintergrund von Ricardo Caires Cerqueira, wo die Creabeton Matériaux AG in
Lyss genannt ist. Das ist eine andere Firma, nicht die Geschäftsadresse.

**Der Knopf öffnet ein neues Fenster** mit `target="_blank"` und
`rel="noopener noreferrer"`. Das Ziel baut `company.ts` aus der Adresse; ein
Umzug aendert den Link mit. Google Maps bestimmt den Ausgangspunkt selbst -
übergeben wird nur das Ziel.

**Der Hinweis «Aufnahme 6 der Shootingliste» ist verschwunden.** Die
Bildfläche ist jetzt eine schlichte getönte Fläche mit `role="img"`; das
Ortsschild darin wiederholt nur die Adresse und ist für Vorlesewerkzeuge
ausgeblendet.
