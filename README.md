# ac-website — A&C Consulting

Öffentliche Firmenwebsite der A&C Consulting GmbH, Domain `ac-co.ch`.

Die verbindlichen Regeln für dieses Projekt stehen in [CLAUDE.md](CLAUDE.md) —
Positionierung, Tonalität, Pflichtangaben, Seitenstruktur, Datenschutz.
Diese Datei erklärt nur, wie man das Projekt startet.

## Voraussetzungen

Node.js 20.9 oder neuer.

## Loslegen

```bash
npm install
npm run dev
```

Der Entwicklungsserver läuft danach auf <http://localhost:4321>.
Die Wurzel leitet auf `/de/` weiter.

## Befehle

| Befehl | Wirkung |
|---|---|
| `npm run dev` | Entwicklungsserver, Port 4321 |
| `npm run build` | Produktionsbau |
| `npm run start` | Produktionsbau lokal ausliefern |
| `npm run tokens` | Design-Tokens neu erzeugen (läuft vor `dev` und `build` automatisch mit) |
| `npm run check` | Tokens, Farbprüfung, Typprüfung und Lint in einem Lauf |

`npm run check` sollte vor jedem Pull Request durchlaufen.

## Design-Tokens

Farben und Typografie kommen aus dem Corporate-Design-Standard und werden
**nie von Hand in Komponenten geschrieben**.

```
design/ac-corporate-design.tokens.json   Kopie der Skill-Tokens (Farben, Schrift, Firmendaten)
design/website.tokens.json               Website-Ableitungen (Raster, Radien, Web-Typoskala)
        ↓  scripts/generate-tokens.mjs
src/styles/tokens.generated.css          CSS-Variablen  (erzeugt, in .gitignore)
src/lib/tokens.generated.ts              dieselben Werte typisiert  (erzeugt, in .gitignore)
```

Das Skript prüft bei jedem Lauf die tatsächlich verwendeten Farbpaarungen gegen
WCAG AA und bricht ab, wenn eine durchfällt. `scripts/check-no-hex.mjs` stellt
sicher, dass ausserhalb der erzeugten Dateien kein Farbwert steht — in CSS wie
in TypeScript.

Ändert sich das Corporate Design, wird es im Skill `ac-corporate-design`
geändert und die Kopie unter `design/` nachgezogen. Nie umgekehrt.

## Sprachen

Drei gleichwertige Sprachversionen unter `/de/`, `/fr/`, `/pt/`. Deutsch ist die
Quelle.

`src/i18n/routes.ts` ist die einzige Stelle, an der Pfade festgelegt werden.
Jede Seite hat je Sprache einen eigenen Slug und ein Kennzeichen `published`.
Eine Seite ohne Übersetzung steht dort auf `false`, erscheint in dieser Sprache
nicht in Navigation und Sitemap und liefert 404. Links werden nie als
Zeichenkette geschrieben, sondern über `path(seite, sprache)` gebaut.

Stand heute ist nur die deutsche Startseite veröffentlicht.

## Aufbau

```
design/          Design-Tokens
scripts/         Token-Erzeugung und Prüfungen
public/logo/     Logo in Farb-, Negativ- und Mono-Fassung
src/app/         Routen (App Router), globals.css, sitemap, robots
  [locale]/      alles Öffentliche liegt unter einer Sprache
src/components/  layout/ und ui/
src/content/     Seiteninhalte je Sprache
src/i18n/        Sprachen, Pfad-Registry, Oberflächentexte
src/lib/         Firmendaten, Schrift, erzeugte Tokens
archiv/          frühere Website, unverändert aufbewahrt
References/      interne Vorlagen, nicht Teil der Website
```

Firmenangaben stehen ausschliesslich in `src/lib/company.ts`.

## Hinweis für Windows

Der Projektpfad enthält ein `&`. Die von npm erzeugten Startdateien
(`node_modules/.bin/next.cmd`) brechen daran, weil `cmd.exe` das `&` als
Befehlstrenner liest. Die Skripte in `package.json` rufen darum `node` direkt
mit dem Modulpfad auf statt über den Shim. Das funktioniert unter Windows und
unter Linux gleichermassen.

## Datenschutz

- keine Analytics, keine Marketing-Tracker, keine Cookies ausser technisch nötigen
- keine extern geladenen Schriften: Inter wird beim Bauen heruntergeladen und
  mitgeliefert, zur Laufzeit geht kein Aufruf an einen fremden Server
- Next.js-Telemetrie ist abgeschaltet. Auf Vercel zusätzlich
  `NEXT_TELEMETRY_DISABLED=1` setzen
- keine Kundendaten im Repository

## Veröffentlichen

Hosting auf Vercel. Nie direkt auf `main` veröffentlichen — Änderungen laufen
über einen Pull Request, den Ricardo freigibt.

Das Repository heisst `ac-website`. Bis zur Freigabe der lokalen Website wird
nichts auf GitHub veröffentlicht.
