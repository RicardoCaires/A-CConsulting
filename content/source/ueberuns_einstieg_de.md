# Über uns — Einstieg, Vorlage Ricardo, 15.09.2026

Ricardo hat den Einstieg als HTML-Vorlage geliefert
(`bilder-quelle/ueberuns_einstieg/vorlage.html`). Der Wortlaut unten stammt
von dort; drei der fünf verlangten Bestandteile standen nur im Auftragstext,
nicht in der Datei — siehe Anmerkungen.

## Inhalt

Über A&C

Zwei Ansprechpartner. Ihre Themen an einer Stelle.

Bei uns sprechen Sie direkt mit der Person, die Ihr Dossier kennt und
bearbeitet.

A&C Consulting wird von Ricardo Caires Cerqueira und Octavio Nuno Gouveia
Andrade geführt. Wir betreuen unsere Mandate persönlich und verbinden
Versicherungsbroking, Treuhand und Steuern dort, wo die Themen zusammengehören.

## Die drei Fachgebiete

Versicherungsbroking

Treuhand

Steuern

## Bildlegende

Ricardo Caires Cerqueira und Octavio Nuno Gouveia Andrade

## Platzhalter

Ricardo und Octavio

## Anmerkungen

**Der bisherige Wortlaut ist ersetzt.** Bis zum 15.09.2026 hiess der Titel
«Zwei Ansprechpartner, drei Bereiche», und darunter stand ein Satz («… Beide
betreuen Mandate selbst.»). Er ist nicht widerrufen, steht aber nicht mehr auf
der Seite.

**Drei der fünf verlangten Bestandteile standen nicht in der Vorlage:** die
drei Bereichsangaben als eigene Elemente, der grüne Eckmarker und die
Bildlegende. Erfunden ist nichts:

- Die **drei Fachgebiete** stehen wörtlich im Beschreibungssatz der Vorlage
  («verbinden Versicherungsbroking, Treuhand und Steuern») und in der
  Reihenfolge, die der Auftrag nennt.
- Die **Namen der Bildlegende** stehen ebenfalls im selben Satz und
  entsprechen der öffentlichen Form aus Abschnitt 2 der Hausordnung.
- Der **Eckmarker** ist Gestaltung, kein Inhalt.

**Reihenfolge der Bereiche.** Der Auftrag nennt Versicherungsbroking, Treuhand,
Steuern. Das ist die Reihenfolge der Fachgebiete aus dem Corporate Design, nicht
die der Navigation — dort steht seit dem 07.09.2026 an dritter Stelle
Finanzplanung, und Steuern ordnet sich unter Treuhand ein. Auf dieser Seite
geht es um die fachliche Herkunft der beiden Inhaber, nicht um die
Seitenstruktur; die Reihenfolge des Auftrags bleibt darum stehen. Ricardo ist
darauf hingewiesen.

**Die interne Regieanweisung ist aus dem Frontend verschwunden.** Die
Bildfläche trug bis dahin «[RICARDO & OCTAVIO]» und darunter «Aufnahme 2 der
Shootingliste». Beides steht nicht mehr auf der Seite; die Fläche ist eine
ruhige getönte Platzhalterfläche mit `role="img"` und dem Namen «Ricardo und
Octavio» für Vorlesewerkzeuge. Dass die Aufnahme fehlt, steht als offener
Punkt in CLAUDE.md, Abschnitt 10.

**Sobald die Aufnahme vorliegt:** Datei unter `public/bilder/` ablegen und in
`src/content/ueberuns.ts` bei `kopf.bild.foto` eintragen, dazu `alt` mit einer
Beschreibung. Der Platzhalter weicht dann von selbst.

**Gesichter bleiben frei.** Die Legende steht **unter** der Fläche, nicht
darüber — ein Name quer über dem Bild verdeckt sonst ein Gesicht. Der grüne
Eckmarker liegt ausserhalb der Bildkante. Der Beschnitt steht auf
`object-position: center 25%`, damit zwei Personen im oberen Drittel im Bild
bleiben, auch wenn die Fläche schmaler wird.
