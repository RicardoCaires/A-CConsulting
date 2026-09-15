# Bannerserie, Vorlage Ricardo, 15.09.2026

Ricardo hat eine **Banner-Serie** geliefert: für jede veröffentlichte Seite
einen Banner — Themenzeile in Versalien, kurze Überschrift, grüner Knopf
«Erstgespräch anfragen» auf die deutsche Kontaktseite. Vorlagen und
gemeinsames Stylesheet liegen unter `bilder-quelle/banner_serie/`.

Ein erster Anlauf mit dreizehn Bannern — darunter sechs für Abschnitte mitten
auf einer Seite — ist am selben Tag auf seine Anweisung zurückgenommen worden.
Diese Fassung setzt **nur Seitenbanner**, genau die zwölf, die er danach
geschickt hat.

## Die zwölf Banner

VERSICHERUNGEN · TREUHAND

Verwurzelt im Seeland. Blick auf mehr.

VERSICHERUNGEN

Versicherungen für Privatpersonen und Unternehmen

TREUHAND

Klar geführt. Persönlich begleitet.

BUCHHALTUNG

Zahlen im Griff. Zeit fürs Geschäft.

TREUHÄNDERWECHSEL

Klar wechseln. Sicher weiter.

STEUERN

Klar deklariert. Sicher geplant.

UNTERNEHMENSGRÜNDUNG

Klar gründen. Sicher starten.

FINANZPLANUNG

Überblick. Spielraum. Sicherheit.

ÜBER A&C

Persönlich. Verlässlich. Nah.

KONTAKT

Ihr Anliegen. Unser nächster Schritt.

IMPRESSUM

Angaben. Verantwortung. Transparenz.

DATENSCHUTZ

Ihre Daten. Vertraulich geschützt.

## Wo sie stehen

| Banner | Seite |
|---|---|
| VERSICHERUNGEN · TREUHAND | `/de/` |
| VERSICHERUNGEN | `/de/versicherungen` |
| TREUHAND | `/de/treuhand` |
| BUCHHALTUNG | `/de/treuhand/buchhaltung` |
| TREUHÄNDERWECHSEL | `/de/treuhand/treuhaender-wechseln` |
| STEUERN | `/de/steuern` |
| UNTERNEHMENSGRÜNDUNG | `/de/firmengruendung` |
| FINANZPLANUNG | `/de/finanzplanung` |
| ÜBER A&C | `/de/ueber-uns` |
| KONTAKT | `/de/kontakt` |
| IMPRESSUM | `/de/impressum` |
| DATENSCHUTZ | `/de/datenschutz` |

Damit trägt **jede veröffentlichte Seite** einen Banner. Keine Ausnahme mehr.

## Anmerkungen

**Alle zwölf laufen über denselben Baustein**
(`src/components/blocks/Banner.tsx`). Er nimmt nur Themenzeile, Überschrift,
Anker und Knopfbeschriftung; Höhe, Bildausschnitt und Anordnung sind nicht
einstellbar. Eine abweichende Abmessung je Seite ist damit nicht möglich.

**Masse aus `banner-shared.css`**, Fassung 15:42 Uhr: Höhe 360 bis 600 px,
Innenbreite 1360 px, Polster 48 bis 88 px, Textblock 690 px oder 54 Prozent,
Überschrift 44 bis 76 px bei Zeilenhöhe 0.98, Themenzeile 13 px mit grünem
Strich 54 x 4 px, Bildausschnitt `center 8%`.

**Ohne Abdunklung.** Kein Verlauf, keine farbige Schicht, kein Schatten. Die
Aufnahme steht so da, wie sie geliefert wurde.

**Keine Abschnittsbanner.** Die sechs Banner für Rechtsform, Wechselablauf,
Vorsorge, Arbeitsweise, Inhaber und Standort sind nicht gesetzt; die
Überschriften dieser Abschnitte bleiben Text. Die Vorlagen bleiben liegen.

**Zwölf Seitentitel sind ersetzt.** Weggefallen sind unter anderem «Firma
gründen im Kanton Bern», «Den Treuhänder wechseln», «Zwei Fragen, die im
Alltag untergehen», «So erreichen Sie uns», «Impressum» und
«Datenschutzerklärung» als Überschrift im Kopf. Ihr Wortlaut bleibt in den
Quelldateien; die Angaben in `meta.title` sind unverändert.

**Der Fliesstext im Seitenkopf ist überall entfallen** — die Vorlage zeigt
Themenzeile, Überschrift und Knopf, sonst nichts.

**Der Einstieg von «Über uns» ist entfallen.** Der zweispaltige Block mit
Pillen, Bildfläche und grünem Eckmarker weicht dem Banner. **Damit hat die
gemeinsame Aufnahme von Ricardo und Octavio auf der Seite keinen Platz mehr**;
der offene Punkt in CLAUDE.md, Abschnitt 10, ist gegenstandslos, solange kein
neuer Ort dafür bestimmt ist. **Ricardo ist darauf hingewiesen.**

**Der Knopf trägt weisse, fette und unterstrichene Schrift** auf A&C-Grün und
wechselt beim Zeigen und bei Tastaturfokus auf Navy. Er ist damit eine dritte
Knopfform neben den beiden bestehenden und kommt nur im Banner vor.
