# Seitenarchetypen und Bausteine

Stand 07.09.2026 · Schritt 3

Diese Datei sagt, welche Vorlage welche Abschnitte enthält, in welcher
Reihenfolge, wie viel Text vorgesehen ist und welcher Baustein wofür zuständig
ist. Sie ist die Referenz beim Anlegen einer Seite — nicht die Diskussion
darüber.

Zum Anschauen: `/styleguide/` zeigt die Bausteine, `/styleguide/vorlage-a/`,
`-b/` und `-c/` zeigen die drei Vorlagen als ganze Seiten mit Beispieldaten.

---

## 1. Grundlagen

**Flächen.** Drei, mehr nicht: `weiss`, `hell` (Off-White), `dunkel` (Navy).
Der Wechsel zwischen ihnen ist das Mittel gegen die Textlastigkeit — nicht mehr
Icons. Zwei Regeln, und sie sind erzwungen, nicht empfohlen:

1. Nie zwei gleiche Flächen hintereinander.
2. Höchstens zwei dunkle Flächen je Seite.

`pruefeFlaechen()` in `components/blocks/Section.tsx` wirft bei einem Verstoss.
Da jede Seite beim Bauen erzeugt wird, bricht das den Build.

**Container.** `.ac-container` gibt die Maximalbreite. Lesetext wird zusätzlich
auf `--ac-content-measure` begrenzt — über `<Section measure>` für einen ganzen
Abschnitt oder `.ac-measure` für einen Teil.

**Abstand.** Ein einziger Token: `--ac-section-y`. Es gibt keine engere und
keine weitere Variante. Wo ein Abschnitt anders wirken soll, ändert die Fläche
das, nicht der Abstand.

---

## 2. Bausteine

| Baustein | Zuständig für | Datei |
|---|---|---|
| `Section` | Abschnittsrahmen, Fläche, Abstand | `blocks/Section.tsx` |
| `SectionHeader` | Vorzeile, Überschrift, Einleitung | `blocks/SectionHeader.tsx` |
| `ServiceCard` | Leistungsbereich: Icon, Titel, max. 3 Chips, ganze Karte verlinkt | `blocks/ServiceCard.tsx` |
| `IconFeature` / `Grid` | Icon plus kurze Aussage — der Ersatz für den Absatz | `blocks/IconFeature.tsx` |
| `StepList` | Nummerierter Ablauf, gestapelt oder nebeneinander | `blocks/StepList.tsx` |
| `FactRow` | Angaben als Paare (Zeiten, Fristen, Nummern) | `blocks/FactRow.tsx` |
| `Accordion` | Fragen und Antworten, auf `<details>`, ohne JavaScript | `blocks/Accordion.tsx` |
| `PersonCard` / `Grid` | Porträt 3:4, Name, Funktion, Zuständigkeit, Sprachen | `blocks/PersonCard.tsx` |
| `CTASection` | Abschluss, hell oder dunkel | `blocks/CTASection.tsx` |
| `IconCircle` | Kreisfläche hinter einem Icon; vier Töne | `ui/IconCircle.tsx` |
| `Icon` | Das Set, 19 Icons, 24er-Raster, `currentColor` | `ui/Icon.tsx` |
| `ImagePlaceholder` | Fläche für eine fehlende Aufnahme | `ui/ImagePlaceholder.tsx` |
| `DraftNote` | Redaktionsmarke; im Produktionsbau nicht ausgegeben | `ui/DraftNote.tsx` |
| `Translated` | Textfeld des Schemas: Text oder Übersetzungsmarke | `ui/Translated.tsx` |

Eine Seite baut ausschliesslich darauf. Eine Einzellösung in einem
Seiten-Stylesheet ist ein Fehler, kein Sonderfall.

---

## 3. Vorlage A — Startseite

`components/templates/Startseite.tsx`

| # | Abschnitt | Baustein | Fläche | Textmenge |
|---|---|---|---|---|
| 1 | Einstieg | Hero + `ImagePlaceholder` | hell | Titel + **1 Satz** |
| 2 | Unsere Bereiche | 3 × `ServiceCard` | weiss | je Titel + max. 3 Chips |
| 3 | Häufige Anliegen | Kachelliste mit `IconCircle` | hell | je 3–6 Wörter |
| 4 | Weshalb A&C | `IconFeatureGrid`, 3 Spalten | **dunkel** | je max. 5 Wörter |
| 5 | So läuft es ab | `StepList`, nebeneinander | weiss | je Titel + 1 Satz |
| 6 | Ansprechpartner | `PersonCard` × 2 | hell | je Name, Funktion, Sprachen |
| 7 | Abschluss | `CTASection` | weiss | Titel + 1 Satz |

**Regel: keine Sektion über etwa fünfzig Wörter Fliesstext.** Was mehr braucht,
gehört auf eine Leistungsseite — dort ist der vertiefende Abschnitt dafür da.

Genau eine dunkle Fläche, und sie sitzt in der Mitte.

---

## 4. Vorlage B — Leistungsseite

`components/templates/Leistungsseite.tsx` · Schema in `content/schema.ts`

| # | Abschnitt | Baustein | Textmenge |
|---|---|---|---|
| 1 | Seitenkopf | Titel, Nutzensatz, `ImagePlaceholder` | Titel + **1 Satz** |
| 2 | Das übernehmen wir | `IconFeatureGrid`, 3 Spalten | je Titel + max. 3 Chips |
| 3 | Ablauf | `StepList`, gestapelt | je Titel + 1–2 Sätze |
| 4 | Vertiefung *(optional)* | Fliesstext, Liste, Nachsatz | bis ~200 Wörter |
| 5 | Häufige Fragen | `Accordion` | je Frage + 1–3 Sätze |
| 6 | Abschluss | `CTASection` | Titel + 1 Satz |

Die Flächen werden berechnet: Sie wechseln durchgehend, und die Folge wird so
gewählt, dass der Abschluss nie auf derselben Fläche steht wie der Abschnitt
davor.

Fest ist die **Reihenfolge**, nicht der Wortlaut. Die drei Zwischentitel stehen
im Inhalt, weil Schritt 4 je Seite eigene Überschriften nennt und die nicht
vereinheitlicht werden.

Abschnitt 4 ist der Ort, an dem Fliesstext landet, den die Startseite abgibt.

---

## 5. Vorlage C — Inhaltsseite

`components/templates/Inhaltsseite.tsx`

Für Über uns, Kontakt und die Rechtstexte. Hier ist nicht die Abfolge
festgelegt, sondern der Vorrat:

| Abschnittsart | Baustein | wofür |
|---|---|---|
| `text` | Absätze auf Lesebreite | Fliesstext, Rechtstext |
| `fakten` | `FactRow` | Zeiten, Adresse, Registernummern |
| `personen` | `PersonCard` | Inhaber, Team |
| `fragen` | `Accordion` | Fragen zur Seite |
| `bild` | `ImagePlaceholder` | Aufnahme im Verlauf |

Titel und Einleitung stehen immer oben, der Abschluss ist optional. Flächen
wechseln, hell beginnend.

**Kein Zwang zu Icons.** Ein Rechtstext erklärt sich nicht besser, weil neben
jedem Absatz ein Piktogramm steht.

---

## 6. Content-Schema

`content/schema.ts` · Verzeichnis in `content/leistungsseiten.ts`

Pflichtfelder einer Leistungsseite:

```
slug · locale · titel · nutzenSatz · seoTitel · seoBeschreibung · bereich
abschnitte { leistungen · ablauf · fragen }
bild · leistungen[] { icon · titel · chips } · ablauf[] { titel · text }
faq[] { frage · antwort } · ctaVariante · cta { titel · text · knopf }
vertiefung?  { titel · absaetze · liste? · nachsatz? }
```

Mindestmengen: 3 Leistungen, 2 Ablaufschritte, 2 Fragen.

`pruefeLeistungsseite()` läuft beim Laden des Verzeichnisses und sammelt alle
Befunde in **einer** Meldung. Ist eine Seite unvollständig, wirft sie — und
weil jede Seite beim Bauen erzeugt wird, bricht der Build. Eine halbfertige
Seite kann nicht aufgeschaltet werden.

### Drei Arten von Lücke, sauber getrennt

| Marke | Bedeutung | Wer schliesst sie |
|---|---|---|
| `{ pending: '…' }` | A&C hat die Auskunft noch nicht geliefert | Ricardo |
| `{ missing: '…' }` | Der Text liegt in dieser Sprache nicht vor | Übersetzung |
| `ImagePlaceholder` | Die Aufnahme fehlt | Fotografie |

Eine fehlende Übersetzung fällt **nicht** stillschweigend auf Deutsch zurück.
Sie erscheint als sichtbare Marke, damit beim Durchsehen auffällt, was noch
fehlt. Einzige Ausnahme ist die Seitenüberschrift: Dort tritt die bereits
abgenommene Navigationsbezeichnung ein, weil eine Seite ohne `h1` kaputt wäre —
mit der Marke daneben.

---

## 7. Was noch nicht auf den Vorlagen läuft

Stand Schritt 3 läuft genau eine Seite auf Vorlage B: `/treuhand/buchhaltung`
in DE, FR und PT. Alle übrigen Seiten laufen weiter über das bisherige
Blockmodell (`blocks/PageBlocks.tsx`) und ziehen in Schritt 5 um. Die
Startseite zieht in Schritt 4 auf Vorlage A.

Bis dahin gelten zwei Flächenmodelle nebeneinander: die drei Flächen dieser
Vorlagen und die alte Viererrotation in `PageBlocks`. Das ist bekannt und
endet mit Schritt 5.
