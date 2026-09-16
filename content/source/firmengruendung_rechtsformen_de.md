# Firmengründung — Einzelfirma oder GmbH?, Vorlage Ricardo, 15.09.2026

Dritte Fassung dieses Abschnitts. Am 14.09.2026 zuerst nach einer
Referenzgrafik gebaut, am selben Tag nach einem ausgeschriebenen Auftragstext
überarbeitet; am 15.09.2026 hat Ricardo eine fertige HTML-Vorlage geliefert
(`bilder-quelle/firmengruendung_rechtsformen/vorlage.html`) samt zwei neuen
Piktogrammen. Der Wortlaut unten stammt aus dieser Vorlage.

## Kopf

Rechtsformen in der Schweiz

Einzelfirma oder GmbH?

Beide Rechtsformen können ein guter Start sein. Entscheidend sind Ihre
Risiken, das verfügbare Kapital und die Frage, wie Sie Ihr Unternehmen
entwickeln möchten.

## Karte links

Direkt starten

Einzelfirma

| Merkmal | Hauptzeile | Erklärung |
|---|---|---|
| Mindestkapital | Keines vorgeschrieben | — |
| Haftung | Persönlich und unbeschränkt | Geschäfts- und Privatvermögen sind rechtlich nicht getrennt. |
| Gründung | Einfach und ohne öffentliche Beurkundung | — |
| Sozialversicherungen | Status als selbständigerwerbend | Die Anerkennung erfolgt durch die zuständige Ausgleichskasse. |
| Handelsregister | Je nach Tätigkeit freiwillig oder obligatorisch | Bei einem kaufmännisch geführten Gewerbe ab CHF 100'000 Jahresumsatz obligatorisch. |

Passt häufig, wenn …

Sie allein starten, wenig formalen Aufwand möchten und das persönliche
Haftungsrisiko überschaubar ist.

## Karte rechts

Getrennt aufbauen

GmbH

| Merkmal | Hauptzeile | Erklärung |
|---|---|---|
| Mindestkapital | CHF 20'000 | Bei der Gründung vollständig einbezahlt oder durch Sacheinlagen gedeckt. |
| Haftung | Grundsätzlich mit dem Gesellschaftsvermögen | Statutarische Nachschusspflichten und persönliche Garantien bleiben möglich. |
| Gründung | Öffentliche Beurkundung und Statuten erforderlich | — |
| Sozialversicherungen | In der eigenen GmbH angestellt | Lohn und Sozialversicherungen laufen über die Gesellschaft. |
| Handelsregister | Eintrag obligatorisch | Die GmbH entsteht rechtlich erst mit der Eintragung. |

Passt häufig, wenn …

Sie Privat- und Geschäftsvermögen trennen, mit mehreren Personen gründen oder
eine eigenständige Gesellschaft aufbauen möchten.

## Leiste darunter

Welche Rechtsform passt zu Ihrem Vorhaben?

Neben Haftung und Kapital zählen auch Steuern, Vorsorge und Ihre weiteren
Pläne. Wir vergleichen die Varianten anhand Ihrer Situation.

Rechtsform besprechen

## Anmerkungen

**Drei Angaben sind neu und fachlich zu prüfen.** Sie standen vorher nicht auf
der Seite, und `schritt4_fassung2_de.md` führt das Umfeld ausdrücklich als zu
prüfen:

- die Umsatzschwelle **CHF 100'000** für den obligatorischen
  Handelsregistereintrag,
- dass das Stammkapital auch **durch Sacheinlagen** gedeckt sein kann,
- **statutarische Nachschusspflichten** als Einschränkung der Haftungstrennung.

Ricardo ist darauf hingewiesen. **CHF 20'000** hatte er bereits am 14.09.2026
ausgeschrieben.

**Die Fassung vom 14.09.2026 ist ersetzt.** Sie trug sechs Merkmale ohne
Erklärungen (darunter «Wirkung / Auftreten»), die Unterzeilen «Einfach
starten» und «Stabil wachsen» und eine Hinweisleiste ohne Knopf. Der
Wortlaut steht in der Versionsgeschichte, nicht mehr auf der Seite.

**Schreibweise «selbständigerwerbend».** Die Vorlage schreibt «selbstständig
erwerbend» in zwei Wörtern; auf der Website steht überall die Schweizer Form
mit einem t und zusammengeschrieben — auch auf `/steuern`. Sie ist
beibehalten, damit nicht zwei Schreibweisen nebeneinander stehen.

**Der Knopf ist grün** (`Button variant="akzent"`), wie in der Vorlage. Sein
Ziel kommt über `path()` aus der Pfad-Registry; die Vorlage schreibt dort die
volle Adresse der Vorschau hinein.

**Die zwei Piktogramme sind unverändert übernommen** und ersetzen die vom
14.09.2026. Beide tragen ihren Kreis auf 89.6 Prozent der Datei (Radius 43 von
96); der negative Rand im Stylesheet ist entsprechend von 14.3 auf 5.2 Prozent
angepasst. Die Hinweisleiste steht neu **ohne Symbol** — die Vorlage zeigt
dort keines; `03_icon_beratung.svg` bleibt im Repository liegen.

---

# Rechtsformvergleich — vierte Fassung, HTML-Vorlage Ricardo, 16.09.2026

Aus seinem Auftrag vom 16.09.2026 samt der Datei `rechtsformvergleich-neu.html`.
Wörtlich so in seinem Auftragstext.

Kleine Überschrift: Rechtsform wählen

Hauptüberschrift: Einzelunternehmen oder GmbH?

Einleitung: Entscheidend sind Haftung, Kapital, Gründungsaufwand und die gewünschte Trennung zwischen Privat- und Geschäftsvermögen.

## Einzelunternehmen — Einfach starten

- Mindestkapital: Keines vorgeschrieben — Der tatsächliche Kapitalbedarf hängt vom Vorhaben ab.
- Haftung: Persönlich und unbeschränkt — Die inhabende Person haftet auch mit dem Privatvermögen.
- Gründung: Einfach und ohne Beurkundung — Die Tätigkeit kann grundsätzlich direkt aufgenommen werden.
- Handelsregister: Je nach Tätigkeit — Bei kaufmännischem Gewerbe ab CHF 100'000 Jahresumsatz obligatorisch.
- Rechtsstellung: Keine eigene Rechtspersönlichkeit — Unternehmen und inhabende Person sind rechtlich nicht getrennt.

Passt häufig, wenn … Sie allein starten, wenig Formalitäten wünschen und das persönliche Haftungsrisiko überschaubar ist.

## GmbH — Getrennt aufbauen

- Mindestkapital: CHF 20'000 — Vollständig einbezahlt oder durch Sacheinlagen gedeckt.
- Haftung: Grundsätzlich Gesellschaftsvermögen — Statutarische Nachschusspflichten können vorgesehen werden.
- Gründung: Beurkundung und Statuten — Die Gründung muss öffentlich beurkundet werden.
- Handelsregister: Eintrag obligatorisch — Die GmbH entsteht rechtlich erst mit der Eintragung.
- Rechtsstellung: Eigene juristische Person — Gesellschaft und Privatpersonen sind rechtlich getrennt.

Passt häufig, wenn … Sie Geschäfts- und Privatvermögen trennen oder mit mehreren Personen gründen möchten.

## Abschluss

Welche Rechtsform passt zu Ihrem Vorhaben?

Wir vergleichen die Varianten anhand Ihrer Risiken, Pläne und finanziellen Situation.

Knopf: Rechtsform besprechen

Kurzvergleich gemäss KMU-Portal des Bundes. Die passende Rechtsform ist im Einzelfall zu prüfen.
