# Designsprache — Analyse Nexova, Ableitung A&C

Stand 07.09.2026. Grundlage für den Neuaufbau der Startseite.

Nexova (`nexova.ch/de/`) ist die Referenz für **Rhythmus und Handwerk**, nicht
für Inhalt. Übernommen werden Prinzipien; übernommen wird kein Text, kein Bild,
kein Icon, keine Illustration, kein Logo, keine Komponente und kein Abstandswert.

---

## 1. Was gemessen wurde

Vermessen am 07.09.2026 im Browser, Fenster 1440 px.

| Grösse | Nexova |
|---|---|
| Seitenlänge Startseite | 13 013 px, 15 Abschnitte |
| Inhaltsbreite | 1140 px (max. 1500) |
| Abschnittspolster | 65 px oben / 77 px unten — asymmetrisch, unten mehr |
| Flächenfolge | Weiss ↔ heller Markenton, dazwischen **zwei** dunkle Bänder |
| Heller Ton | 4-%-Tint der Markenfarbe, kein neutrales Grau |
| Dunkle Bänder | Abschnitt 8 (Regionen) und Abschnitt 15 (Abschluss) |
| Abschluss-CTA | nur 199 px hoch — eine Aussage, ein Knopf |
| Überschriften | 43 px / Gewicht 200, H2 34 px / Gewicht 300 |
| Fliesstext | 16 px / Gewicht 200 |
| Karten | Radius 8 px, **kein** Schatten, kein Rahmen, nur Flächenwechsel |
| Navigation | Logo links, fünf Punkte, rechts Sprache und ein Knopf |

---

## 2. Was A&C übernimmt

**Seitenrhythmus.** Der Wechsel Weiss ↔ heller Ton trägt die Gliederung, nicht
Linien und nicht Rahmen. Dunkle Bänder sind selten und dadurch wirksam.

**Der flache Abschluss.** Nexovas letzter Abschnitt ist mit Abstand der
niedrigste der Seite. Eine Aussage, ein Knopf, kein Beiwerk. Das ist die
stärkste einzelne Beobachtung und wird übernommen.

**Karten ohne Schatten.** Eine Karte ist eine Fläche, kein schwebendes Objekt.
Radius klein, Kontur nur, wo die Fläche allein nicht trägt.

**Ruhige Navigation.** Fünf Punkte, ein Knopf rechts, sonst nichts.

**Weissraum als Material.** Die Ruhe entsteht aus wenigen hohen Blöcken,
nicht aus vielen schwachen Tönungen.

**Editoriale Wissensdarstellung.** Datum, Titel, kurzer Anriss, ein Verweis —
gesetzt wie in einer Zeitschrift, nicht wie eine Produktkachel.

---

## 3. Was A&C bewusst anders macht

| | Nexova | A&C |
|---|---|---|
| Länge Startseite | 15 Abschnitte, 13 000 px | **7 Abschnitte** |
| Schrift | eine Groteske, sehr leichte Schnitte | **zwei Schriften**: Source Serif 4 für Überschriften, Inter für alles andere |
| Überschriftgewicht | 200/300 — dünn, technisch | **600** — die Serife trägt die Hierarchie, nicht der Kontrast dünn/dick |
| Hero | 3-D-Objekt, gerendert | **Bildfläche mit echtem Foto**, bis dahin ruhiger Platzhalter |
| Belege | „Über 250 Unternehmen", Kundenstimmen, Logos | **keine Zahlen ohne Beleg**, keine erfundenen Referenzen |
| Menü | Aufklappmenüs mit bis zu zwölf Zielen | **flache Navigation**, keine Aufklappebene |
| Tonfall | Produkt, Skalierung, „digital" | **zwei Ansprechpartner**, regional, direkt |
| Farbe | Violett als Signalfarbe | **Navy als Fläche, Grün nur als Akzent** |

Nexova verkauft eine Plattform. A&C verkauft zwei Menschen, die erreichbar
sind. Die Seite darf darum kürzer, ruhiger und persönlicher sein — das ist
kein Verzicht, sondern die Positionierung.

---

## 4. A&C-Designsystem

Alle Werte stammen aus `design/ac-corporate-design.tokens.json` (Skill
`ac-corporate-design`, Fassung 1.1) und `design/website.tokens.json`.
Im Code steht kein einziger Farbwert.

### Flächen

Vier, mehr nicht. Die Regel ist erzwungen, nicht empfohlen
(`pruefeFlaechen` in `components/blocks/Section.tsx` bricht den Build).

| Rolle | Farbe | Einsatz |
|---|---|---|
| `weiss` | `#FFFFFF` | Grundfläche, dominiert |
| `hell` | `#F2F4F6` | der ruhige Wechsel dazu |
| `flaeche` | `#1A3A5C` Navy | wiederkehrende Elemente, Abschluss |
| `dominant` | `#08234E` Deep Navy | **genau eine** je Seite — der Hero — und der Fussbereich |

Grün (`#207730`) ist Akzent: Marker, Vorzeile, Fokusrahmen. Nie Fläche.

### Typografie

Überschriften Source Serif 4, Gewicht 600. Alles andere Inter 400/600.
Keine dritte Schrift. Beide werden beim Bauen mitgeliefert — zur Laufzeit
geht kein Aufruf an einen fremden Server.

| Rolle | Mobil | Desktop |
|---|---|---|
| Hero-Titel | 36 px | 56 px |
| H1 | 34 px | 48 px |
| H2 | 32 px | 38 px |
| H3 | 20 px | 22 px |
| Lead | 19 px | 21 px |
| Fliesstext | 17 px | 17 px |

### Raster und Form

- Inhaltsbreite 1160 px, enger Lesebereich 760 px, Fliesstext höchstens 60 Zeichen
- Abschnittsabstand: **ein** Token, `clamp(3.75rem, 6.2vw, 7rem)`
- Radien: 4 px für kleine Marken, 12 px für Karten und Bildflächen. Kein dritter
- Schatten: keine. Eine Karte ist eine Fläche
- Trefferflächen mindestens 44 px, auch auf dem Desktop

### Bewegung

180 ms, `cubic-bezier(0.2, 0, 0.2, 1)`, nur auf Zustandswechsel
(Hover, Fokus). Keine Einblendungen beim Scrollen — Nexova baut seine Inhalte
per Scroll-Animation auf; ohne JavaScript bleibt die Seite dort leer. A&C
zeigt seine Inhalte sofort.
