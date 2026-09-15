# Bannerserie, Vorlage Ricardo, 15.09.2026

Ricardo hat zwölf Banner als HTML-Vorlagen samt gemeinsamem Stylesheet
geliefert (`bilder-quelle/banner_serie/`, Übersicht in
`banner-uebersicht.html`) und am selben Tag den Auftrag nachgeschoben, daraus
**eine zentrale, wiederverwendbare Banner-Komponente** zu bauen und damit
**alle dreizehn** Seiten- und Abschnittsbanner umzusetzen. Der Wortlaut unten
ist seiner: «Verwende exakt diese Inhalte.»

## Die dreizehn Banner

VERSICHERUNGEN · TREUHAND

Verwurzelt im Seeland. Blick auf mehr.

VERSICHERUNGEN

Versicherungen für Privatpersonen und Unternehmen

UNTERNEHMENSGRÜNDUNG

Klar gründen. Sicher starten.

RECHTSFORM

Einzelfirma oder GmbH?

TREUHÄNDERWECHSEL

Klar wechseln. Sicher weiter.

DER WECHSEL

Geordnet übergeben. Direkt starten.

FINANZPLANUNG

Überblick. Spielraum. Sicherheit.

VORSORGE

Heute planen. Morgen vorsorgen.

ÜBER A&C

Persönlich. Verlässlich. Nah.

UNSERE ARBEITSWEISE

Klar geregelt. Persönlich betreut.

DIE INHABER

Zwei Ansprechpartner. Ein Team.

STANDORT AEGERTEN

Regional verankert. Persönlich erreichbar.

KONTAKT

Ihr Anliegen. Unser nächster Schritt.

## Wo sie stehen

| Banner | Ort |
|---|---|
| Versicherungen · Treuhand | Startseite, Seitenkopf |
| Versicherungen | `/versicherungen`, Seitenkopf |
| Unternehmensgründung | `/firmengruendung`, Seitenkopf |
| Rechtsform | `/firmengruendung`, Abschnitt `#rechtsform` |
| Treuhänderwechsel | `/treuhand/treuhaender-wechseln`, Seitenkopf |
| Der Wechsel | `/treuhand/treuhaender-wechseln`, Abschnitt `#vorgehen` |
| Finanzplanung | `/finanzplanung`, Seitenkopf |
| Vorsorge | `/finanzplanung`, Abschnitt `#vorsorge` |
| Über A&C | `/ueber-uns`, Seitenkopf |
| Die Inhaber | `/ueber-uns`, Abschnitt `#inhaber` |
| Unsere Arbeitsweise | `/ueber-uns`, Abschnitt `#arbeitsweise` |
| Standort Aegerten | `/ueber-uns`, Abschnitt `#region` |
| Kontakt | `/kontakt`, Seitenkopf |

## Anmerkungen

**Alle dreizehn laufen über denselben Baustein**
(`src/components/blocks/Banner.tsx`). Er hat bewusst keine Eigenschaft für
Höhe, Bildausschnitt oder Anordnung — nur Themenzeile, Überschrift, Anker,
Überschriftenebene und die Knopfbeschriftung. Eine abweichende Abmessung je
Seite ist damit nicht möglich.

**Ohne Abdunklung.** Kein Verlauf, keine farbige Schicht, kein Schatten. Die
Aufnahme steht so da, wie sie geliefert wurde.

**Seitenverhältnis 1774 : 887**, also glatt 2 : 1, auf jedem Banner. Auf
schmalen Geräten greift eine gemeinsame Mindesthöhe, damit Überschrift und
Knopf vollständig sichtbar bleiben — auch sie gilt für alle dreizehn gleich.

**Diese Überschriften ersetzen vorherige.** Weggefallen sind die Seitentitel
«Firma gründen im Kanton Bern», «Überblick über Ihre Finanzen» und «So
erreichen Sie uns» sowie die Abschnittsüberschriften «Einzelfirma oder GmbH?»
(unverändert), «So läuft der Wechsel ab», «Vorsorge beginnt mit einem
Gesamtbild.», «Die beiden Inhaber», «Verlässlich im Alltag. Klar in der
Verantwortung.» und «Persönlich für Sie da in Aegerten». Ihr Wortlaut bleibt
in den Quelldateien.

**Der Einstieg von «Über uns» ist entfallen.** Der zweispaltige Block vom
selben Tag — Beschreibungsabsatz, die drei Fachgebiete als Pillen, die
Bildfläche mit grünem Eckmarker und der Legende — weicht dem Banner. **Damit
hat die gemeinsame Aufnahme von Ricardo und Octavio auf der Seite keinen Platz
mehr**; der offene Punkt in CLAUDE.md, Abschnitt 10, ist gegenstandslos,
solange kein neuer Ort dafür bestimmt ist. **Ricardo ist darauf hingewiesen.**

**Der Einstieg der Startseite ist entfallen.** Der Satz «Wir unterstützen
Selbständige, KMU und Privatpersonen bei Buchhaltung, Versicherungen und
Finanzfragen – mit festen Ansprechpartnern in Aegerten.» stand dort als
Fliesstext; der Banner trägt keinen. Der Wortlaut bleibt in
`content/source/startseite_de.md`.

**Fünf Seiten haben keinen gelieferten Banner** — Treuhand, Buchhaltung,
Steuern, Impressum und Datenschutz. Sie behalten ihren bisherigen Seitenkopf,
weil für sie keine Themenzeile und keine Überschrift vorliegen und beides
nicht erfunden wird. **Ricardo ist darauf hingewiesen.**

**Der Knopf trägt weisse, fette und unterstrichene Schrift** auf A&C-Grün und
wechselt beim Zeigen und bei Tastaturfokus auf Navy — so verlangt es der
Auftrag ausdrücklich. Er ist damit eine dritte Knopfform neben den beiden
bestehenden und kommt nur im Banner vor.
