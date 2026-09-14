# Firmengründung — Gründungscheckliste, Vorlage Ricardo, 14.09.2026

Ricardo hat den Abschnitt als fertige HTML-Vorlage geliefert
(`bilder-quelle/firmengruendung_checkliste/vorlage.html`), samt der
Checklisten-Abbildung im Quelltext. Der Wortlaut unten stammt von dort.

## Inhalt

Für Ihren Start

Gründungscheckliste

Welche Unterlagen brauchen Sie, und was geschieht in welcher Reihenfolge? Die
Checkliste fasst die wichtigsten Schritte auf einer Seite zusammen.

Checkliste herunterladen (PDF)

Die PDF-Checkliste ist in Vorbereitung.

## Anmerkungen

**Der bisherige Satz ist ersetzt.** Bis zum 14.09.2026 stand hier «Der Ablauf
und die nötigen Unterlagen auf einer Seite, ohne Anmeldung. Auch nützlich, wenn
Sie noch überlegen.» aus `schritt4_fassung2_de.md`. Er steht dort unverändert
weiter und ist nicht widerrufen.

**Der Knopf hat zwei Zustände.** Liegt die Datei vor, ist er der grüne Knopf
der Startseite und verlinkt sie. Fehlt sie, steht dieselbe Form als
abgeschalteter Knopf da, und der Hinweis nennt den Grund.

Ein abgeschalteter Knopf ist hier nicht nur blasser: Grün auf halber Deckung
trägt den weissen Text nicht mehr (unter 3:1). Die Fläche wird darum hell und
die Schrift navy — rund 9:1, dieselbe Form, klar als nicht anklickbar zu
erkennen. Die Vorlage setzt `opacity: 1` und ändert nur den Mauszeiger; das
allein wäre auf dem Bildschirm nicht als abgeschaltet zu sehen.

**Die Abbildung ist unverändert aus der Vorlage gelöst** und liegt als
`public/bilder/firmengruendung_checkliste.svg`. Nicht nachgezeichnet, nicht
skaliert.

**Sobald das PDF vorliegt:** Datei unter `public/dokumente/` ablegen und den
Pfad in `src/content/pages/firmengruendung.ts` bei `download.file` eintragen.
Der Knopf wird damit von selbst grün und verlinkt, der Hinweis fällt weg.
