# Rechtsprüfung der Website-Aussagen

**Status: abgeschlossen. Freigegeben durch Ricardo Caires Cerqueira am 09.09.2026.**

Diese Datei ist der Nachweis darüber, welche Aussagen der Website vor der
Veröffentlichung fachlich geprüft wurden. Sie entstand, weil die Prüfmarken im
Code nach der Freigabe entfernt wurden — ohne diese Liste wäre nicht mehr
nachvollziehbar, was überhaupt zur Prüfung stand.

Bitte die schriftliche Bestätigung der prüfenden Stelle zu den Geschäftsakten
nehmen. Diese Datei ersetzt sie nicht, sie verweist nur darauf.

---

## Wie die Prüfung geführt wurde

Jede Aussage, die eine Rechtslage beschreibt — Fristen, Schwellenwerte,
Pflichten, Haftung —, trug im Inhalt eine Marke `{ legal: '…' }`. Die Marke
enthielt nicht die Aussage selbst, sondern **worauf sich die Prüfung beziehen
musste**. Im Produktionsbau war sie unsichtbar; `npm run check:pending --strict`
zählte sie und verhinderte den Go-live.

Am 09.09.2026 wurden alle 27 Marken entfernt. Kontrolle: Das ausgelieferte HTML
aller 16 Seiten ist vor und nach dem Entfernen wortgleich — die Marken waren
Notizen an uns, kein Website-Text.

---

## Geprüfte Stellen

### `/firmengruendung` — 15

| # | Prüfgegenstand |
|---|---|
| 1 | Höhe des Stammkapitals und Einzahlungsvorschriften |
| 2 | Haftungsdarstellung je Rechtsform, inklusive Ausnahmen |
| 3 | Handelsregisterpflicht und Umsatzschwelle für die Einzelfirma |
| 4 | Behandlung bei AHV, ALV, UVG und BVG je Rechtsform |
| 5 | sämtliche Angaben des Abschnitts „Einzelfirma oder GmbH" mit Stand und Jahresangabe versehen |
| 6 | Verfahren der Kapitaleinzahlung |
| 7 | Anmeldepflichten, Fristen und Zuständigkeiten |
| 8 | Buchführungs- und Rechnungslegungspflicht je Rechtsform und Umsatzschwelle |
| 9 | AHV-Anmeldepflicht und Fristen |
| 10 | Umsatzschwelle, Ausnahmen und Befreiungsmöglichkeiten (MWST) |
| 11 | BVG-Eintrittsschwelle und UVG-Pflicht |
| 12 | Kontovorschriften |
| 13 | Umsatzschwelle, Ausnahmen und Sonderfälle |
| 14 | steuerliche Folgen einer Umwandlung |
| 15 | AHV-Anmeldepflicht je Rechtsform |

### `/steuern` — 7

| # | Prüfgegenstand |
|---|---|
| 16 | Einsprachefrist im Kanton Bern |
| 17 | Jahresangabe auf der Checkliste; jährlich zu aktualisieren |
| 18 | Einreichefrist für Privatpersonen und für Firmen, mit Jahresangabe |
| 19 | Fristverlängerung: Verfahren, mögliche Dauer und allfällige Gebühren |
| 20 | ab wann eine Anmeldung als selbständigerwerbend erforderlich ist |
| 21 | bis wann eine Verlängerung beantragt werden muss |
| 22 | Vorgehen und Folgen einer Einschätzung nach Ermessen im Kanton Bern |

### `/treuhand/treuhaender-wechseln` — 3

| # | Prüfgegenstand |
|---|---|
| 23 | Formulierung zum Mandatsübergang |
| 24 | Herausgabe, Zurückbehaltungsrecht und offene Honorare |
| 25 | Antwort zur Herausgabe, inklusive Hinweis auf mögliche Zurückbehaltung bei offenen Rechnungen |

### `/versicherungen` — 1

| # | Prüfgegenstand |
|---|---|
| 26 | Obligatorien und Eintrittsschwellen bei UVG und BVG |

### `/personal-finance` — 1

| # | Prüfgegenstand |
|---|---|
| 27 | Darstellung von Säule 3a, Bindung und Unterschied Bank/Versicherung — **Grenze zur bewilligungspflichtigen Anlageberatung** |

---

## Zwei Auflagen, die mit der Freigabe nicht erledigt sind

Nummer 5 und 17 waren keine Rechtsfragen, sondern **Wartungsauflagen**. Eine
Bestätigung, dass die Angaben heute stimmen, erzeugt weder die Jahresangabe noch
die jährliche Nachführung. Beide bleiben offen:

- **Nr. 5** — Der Abschnitt „Einzelfirma oder GmbH" auf `/firmengruendung` nennt
  Schwellenwerte ohne Stand. Rechtslagen ändern sich; ohne Jahresangabe ist für
  Lesende nicht erkennbar, worauf sich die Angabe bezieht.
- **Nr. 17** — Die Checkliste Steuererklärung auf `/steuern` braucht eine
  Jahresangabe und muss jährlich nachgeführt werden. Das PDF liegt bis heute
  nicht vor (`download.file` ist `null`).

Beide stehen als offene Punkte in `CLAUDE.md`.

---

## Wenn eine Aussage sich ändert

Wird eine der 27 Stellen umformuliert oder eine neue Aussage zur Rechtslage
ergänzt, gilt sie als **ungeprüft**. Dann kommt die Marke zurück:

```ts
[{ legal: 'worauf sich die Prüfung beziehen muss' }]
```

`npm run check:pending` sammelt sie wieder ein, und diese Datei bekommt eine
neue Zeile.
