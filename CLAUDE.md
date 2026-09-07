# CLAUDE.md — A&C Consulting Website

Diese Datei ist die Hausordnung für dieses Projekt. Sie gilt bei jedem Auftrag,
ohne dass sie erwähnt werden muss.

---

## 1. Projekt

Öffentliche Firmenwebsite der **A&C Consulting GmbH**, Domain `ac-co.ch`.

Zweck: Vertrauen aufbauen und qualifizierte Erstkontakte auslösen — keine
Online-Abschlüsse, keine Tarifrechner. Wer die Seite verlässt, soll wissen, wer
wir sind, was wir tun und wie man uns erreicht.

---

## 2. Firmenangaben (Pflichtangaben — nie eigenmächtig ändern)

- Firma: A&C Consulting GmbH
- Adresse: Bielstrasse 22, 3250 Lyss, Kanton Bern
- FINMA-Registernummer Unternehmen: **F01568855**
- Geschäftsführung: **Ricardo Caires Cerqueira**
- Mitinhaber: Octavio Andrade

> Öffentlich auf der Website gilt die vollständige Form „Ricardo Caires Cerqueira"
> (Festlegung Ricardo, 04.09.2026). Die Kurzform „Ricardo Caires" ist in knappen
> Oberflächen-Zusammenhängen zulässig, aber nur, wenn der vollständige Name auf
> derselben Seite bereits eindeutig zu lesen ist. Gepflegt wird beides in
> `src/lib/company.ts`.
- UID / Handelsregister-Nr.: **CHE-332.960.986**
  (BFS-Schreiben vom 23.02.2026; eingetragen am 03.09.2026 auf Anweisung von Ricardo)
- Telefon: **078 625 53 85**
- E-Mail: **info@ac-co.ch**

> Von Ricardo am 04.09.2026 zur öffentlichen Verwendung freigegeben.
> Sie werden ausschliesslich zentral in `src/lib/company.ts` gepflegt —
> nirgends sonst im Code ausgeschrieben.

Diese Angaben stehen im Footer **jeder** Seite und vollständig im Impressum.
Änderungen daran nur auf ausdrückliche Anweisung von Ricardo — nie automatisch,
nie durch den Pflege-Agenten.

Die persönliche FINMA-Nummer von Ricardo gehört **nicht** auf die Website; sie
ist für Mandats- und Beratungsdokumente reserviert. Sie wird deshalb hier nicht
ausgeschrieben und steht ausschliesslich in `00_Shared/Stammdaten.md`.

---

## 3. Positionierung und Tonalität

A&C ist Versicherungsbroker mit Treuhand als zweitem Standbein. Beide Bereiche
sind auf der Seite sichtbar, aber nicht gleichrangig: Broking führt, Treuhand
ergänzt.

Was uns unterscheidet und im Text durchscheinen soll:

- Unabhängigkeit — wir vertreten den Kunden, nicht eine Versicherung
- Mehrsprachigkeit — Deutsch, Französisch, Portugiesisch, gleichwertig
- Nähe zur portugiesischsprachigen Community im Seeland und in Bern
- Gründlichkeit statt Verkaufsdruck

Ton: sachlich, ruhig, in der Sie-Form. Kurze Sätze. Keine Superlative
("die Nummer 1", "beste Beratung"), keine Ausrufezeichen, keine
Marketing-Floskeln. Wer die Texte liest, soll den Eindruck eines soliden
Berufsmanns haben, nicht einer Werbeagentur.

Verboten in Texten:
- Renditeversprechen, Ersparnis-Garantien, konkrete Prozentangaben zu Einsparungen
- Aussagen, die als individuelle Beratung gelesen werden könnten
- Nennung von Kundennamen, Fallbeispielen mit erkennbaren Details, Logos von
  Versicherern ohne schriftliche Freigabe

Berufsbezeichnung: "Versicherungsbroker" bzw. "Treuhand / Steuern". Nicht
"Treuhänder mit eidg. Fachausweis" — dieser Titel ist geschützt und liegt nicht vor.

---

## 4. Sprachen

Drei gleichwertige Sprachversionen: **DE (Leitsprache) · FR · PT**

- Pfadstruktur: `/de/…`, `/fr/…`, `/pt/…`, Root leitet auf `/de/` weiter
- Jede Seite existiert in allen drei Sprachen. Fehlt eine Übersetzung, wird die
  Seite nicht veröffentlicht
- Deutsch ist die Quelle. Änderungen beginnen immer auf DE, FR und PT werden
  nachgezogen
- FR: Schweizer Französisch. PT: europäisches Portugiesisch (nicht brasilianisch)
- Fachbegriffe konsistent halten: Krankentaggeld = indemnités journalières maladie
  = subsídio diário de doença. Ein Glossar liegt unter `content/glossar.md`
- Pflichtangaben und Rechtstexte werden nicht frei übersetzt, sondern
  wortgetreu — im Zweifel unübersetzt lassen und markieren

---

## 5. Marke und Gestaltung

Farben:

| Zweck | Token | Wert |
|---|---|---|
| Primär (Navy) | `primary_navy` | `#1A3A5C` |
| Grosse Flächen | `navy_deep` | `#08234E` |
| Akzent (Grün) | `accent_green` | `#207730` |
| Text | `text_primary` | `#222222` — nie reines `#000000` |
| Flächen | `white` / `background_light` | `#FFFFFF` / `#F2F4F6` |

Grün ist Akzent, nicht Fläche — Links, Hervorhebungen, kleine Marker. Navy trägt
Kopf- und Fussbereich sowie Überschriften.

**Zentraler Standard:** Für alle A&C-Dokumente und visuellen Artefakte gilt der Skill
`ac-corporate-design` (`~/.claude/skills/ac-corporate-design/`) als Single Source of Truth.
Farben und Typografie werden dort definiert, nicht hier.

Die frühere Website stand auf `#1B2A4A` / `#2F6B4F` und wich damit vom Logo ab.
Mit dem Neuaufbau gilt ausschliesslich `tokens.json` aus dem Skill. Die alte
Fassung liegt unverändert unter `archiv/alte-website/`.

**Farbwerte stehen nie im Code.** `design/ac-corporate-design.tokens.json` ist
eine Kopie der Skill-Tokens; `scripts/generate-tokens.mjs` erzeugt daraus
`src/styles/tokens.generated.css` und `src/lib/tokens.generated.ts`. Beide
Zieldateien sind erzeugt, stehen in `.gitignore` und werden nie von Hand
angefasst. Das Skript prüft bei jedem Lauf die Kontraste gegen WCAG AA und
bricht ab, wenn eine Paarung durchfällt. Ein Hex-Wert in einer Komponente ist
ein ESLint-Fehler.

Gestaltungsprinzipien (ergänzend gilt der hinterlegte Design-Skill unter
`.claude/skills/`):

- Viel Weissraum, ruhige Typo-Hierarchie, wenige Schriftgrössen
- Zurückhaltende Farbe, keine Verläufe, keine Schlagschatten
- Grosszügige Abstände zwischen Abschnitten
- Bildsprache: Landschaft und Architektur der Region, Porträts der Inhaber.
  Keine Stockfotos mit lachenden Menschen am Konferenztisch

Schrift: **kein SF Pro** — lizenzrechtlich nicht für Websites nutzbar. Stattdessen
Inter oder ein System-Font-Stack.

Mobil zuerst. Ein erheblicher Teil der Zielgruppe kommt vom Smartphone.

---

## 6. Technik

Entschieden am 04.09.2026 (Schritt 5).

| Thema | Entscheidung |
|---|---|
| Framework | **Next.js 15 (App Router) mit TypeScript** |
| Hosting | **Vercel**. Domain `ac-co.ch` bleibt bei Hostpoint, DNS erst beim Go-live |
| Repository | `RicardoCaires/ac-website`, privat |
| CMS | keines. Inhalte strukturiert im Repository |
| Datenbank | keine. Score-Tools rechnen lokal im Browser |
| Formulare | eigener serverseitiger Endpunkt auf Vercel |
| Analytics | keines |

Warum Next.js und nicht reines HTML: Die Seite ist heute inhaltsorientiert,
soll aber zu einer interaktiveren Plattform wachsen — Finance Score, Business
Health Check, strukturierte Lead-Auswertung, später möglicherweise CRM-Anbindung
und Kundenbereich. Die breitere Basis wird heute gewählt, um in ein bis zwei
Jahren nicht das Framework wechseln zu müssen.

Daraus folgt aber **keine** App-Komplexität:

- Inhaltsseiten werden beim Bauen statisch erzeugt (`dynamicParams = false`)
- Server-Komponenten sind der Normalfall. `'use client'` nur, wo eine Funktion
  es zwingend braucht — heute sind das genau zwei kleine Komponenten
  (`Nav`, `LanguageSwitcher`, beide nur für die Markierung der aktuellen Seite)
- kein CSS-Framework, keine UI-Bibliothek, kein State-Management
- Gestaltung über CSS-Module und die erzeugten Design-Tokens

Weitere Vorgaben:

- Kein JavaScript für Inhalte, die auch ohne funktionieren müssen. Die mobile
  Navigation läuft über `<details>` und funktioniert ohne Skript
- Keine extern geladenen Schriften. Inter wird von Next.js beim Bauen
  heruntergeladen und mitgeliefert; zur Laufzeit geht kein Aufruf an einen
  fremden Server. Kein SF Pro (nicht für Websites lizenziert)
- Keine Analyse- oder Tracking-Dienste ohne Rücksprache (revDSG)
- Ladezeit und Zugänglichkeit gehen vor Effekt. Kontraste WCAG AA, Bilder mit
  Alt-Text, sinnvolle Überschriftenhierarchie, Trefferflächen mindestens 44 px
- Mobil zuerst, und zwar gleichwertig — nicht als verkleinerte Desktopfassung

### Inhalte: strukturiert oder MDX

Zwei Arten, bewusst getrennt:

- **Strukturierte Seiten** (Start, Leistungsseiten) liegen als typisierter
  Inhalt unter `src/content/`. Der Typ erzwingt, dass beim Übersetzen kein
  Block verlorengeht
- **Fliesstextseiten** (Datenschutz, Impressum, Transparenz und spätere
  Wissensinhalte) werden als MDX geführt. Wird eingerichtet, sobald die erste
  solche Seite ansteht

### Ordnerstruktur

```
design/          Design-Tokens: Kopie der Skill-Tokens + Website-Ableitungen
scripts/         Erzeugung der Tokens
public/logo/     Logo in Farb-, Negativ- und Mono-Fassung
src/app/         Routen (App Router), globals.css, sitemap, robots
  [locale]/      alles Öffentliche liegt unter einer Sprache
src/components/  layout/ (Header, Nav, Footer, Logo, Sprachwahl), ui/
src/content/     Seiteninhalte je Sprache
src/i18n/        Sprachen, Pfad-Registry, Oberflächentexte
src/lib/         Firmendaten, Schrift, erzeugte Tokens
src/styles/      erzeugte Token-CSS
archiv/          frühere Website, unverändert aufbewahrt
CLAUDE.md        diese Datei
```

Interne Geschäftsvorlagen (Mandatsvertrag, Honorarblatt, Checklisten)
gehören **nicht** in dieses Repository. Sie liegen in `00_Shared/Vorlagen/`;
`References/` steht zusätzlich in `.gitignore`.

### Pfade und Sprachen

`src/i18n/routes.ts` ist die **einzige** Stelle, an der Pfade festgelegt werden.
Jede Seite hat je Sprache einen eigenen Slug (`/de/versicherungen/`,
`/fr/assurances/`, `/pt/seguros/`) und ein Kennzeichen `published`. Eine Seite,
deren Übersetzung fehlt, steht dort auf `false` und erscheint in dieser Sprache
weder in der Navigation noch in der Sitemap — sie liefert 404. Links werden nie
als Zeichenkette geschrieben, sondern immer über `path()` gebaut.

Firmenangaben stehen ausschliesslich in `src/lib/company.ts`.

### Befehle

```
npm run dev        Entwicklungsserver auf Port 4321
npm run build      Produktionsbau
npm run tokens     Design-Tokens neu erzeugen (läuft vor dev und build mit)
npm run check      Tokens, Typprüfung und Lint in einem Lauf
```

## 7. Datenschutz und Formulare

- Keine Personendaten im Repository. Keine Kundenlisten, keine Policen, keine
  Offerten, keine Screenshots mit Kundendaten
- Datenschutzerklärung nach revDSG ist Pflicht und wird wie die Pflichtangaben
  behandelt: keine automatischen Änderungen
- Keine Cookies ausser technisch notwendigen

### Formulare

Vier Formulare, alle nach demselben Muster:

| Formular | Zweck |
|---|---|
| Kontakt | auf jeder Seite erreichbar, minimal |
| Rückruf | Name, Nummer, Zeitfenster, Sprache |
| Offertanfrage Versicherung | Privat oder Firma, Sparte, Rückrufwunsch |
| Anfrage Steuererklärung | Privat oder Firma, Kanton, Situation |
| Anfrage Treuhand | Rechtsform, Umfang, gewünschter Start |
| Anfrage Firmengründung | Rechtsform, Zeitpunkt, Ausgangslage |
| Score-Ergebnis (später) | nur wenn der Nutzer die Kontaktaufnahme selbst auslöst |

Alle Formulare übermitteln strukturierte Felder und die Herkunft der Anfrage
(Seite, Sprache, Formulartyp) — von Anfang an, damit spätere Auswertungen und
eine CRM-Anbindung nicht nachträglich umgebaut werden müssen. Eine CRM-Anbindung
gibt es vorerst nicht.

Interaktive Werkzeuge (A&C Finance Score, Business Health Check und weitere
Checks) rechnen **im Browser** und senden nichts, solange der Nutzer nicht
selbst eine Kontaktaufnahme auslöst. Ergebnisse werden nicht gespeichert.

Technische Vorgaben:

- Übermittlung ausschliesslich per HTTPS an einen eigenen Route Handler
  (`src/app/api/…`), gehostet auf Vercel in einer europäischen Region. Kein
  Formular-Dienst, der die Eingaben ausserhalb der Schweiz oder der EU speichert
- Die Funktion versendet eine E-Mail an eine A&C-Firmenadresse und **speichert
  nichts** — keine Datenbank, keine Logs mit Formularinhalt
- Spamschutz über Honeypot-Feld und Cloudflare Turnstile (als eigenständiger
  Dienst, unabhängig vom Hosting). Kein Google reCAPTCHA
- Funktioniert auch ohne JavaScript, zumindest als Rückfallebene

Inhaltliche Grenzen — das gehört **nicht** in ein öffentliches Formular:

- Datei-Uploads jeder Art (Policen, Lohnausweise, Steuerunterlagen)
- Geburtsdatum, AHV-Nummer, Policennummern, Bank- oder Kontoangaben
- Gesundheitsangaben, auch nicht als Freitextfrage
- Angaben zu Dritten (Familienmitglieder, Mitarbeitende)

Das öffentliche Formular dient der **Kontaktaufnahme**, nicht der
Dossieraufnahme. Unterlagen werden erst nach dem Erstkontakt über einen
geschützten Kanal ausgetauscht (SharePoint-Freigabelink oder
OneDrive-Dateianforderung), nie über die Website.

Jedes Formular nennt vor dem Absendeknopf in einem Satz, was mit den Angaben
geschieht, und verlinkt die Datenschutzerklärung. Keine vorangekreuzten
Kästchen, keine Newsletter-Anmeldung im selben Formular.

---

## 8. Arbeitsweise

- Kleine, nachvollziehbare Commits. Eine Änderung, ein Commit
- Commit-Nachrichten auf Deutsch, im Imperativ: "Ergänze Seite Krankentaggeld"
- Nie direkt auf `main` veröffentlichen. Änderungen laufen über einen Pull
  Request, den Ricardo freigibt
- Bei Änderungen an DE immer im selben Vorgang FR und PT nachziehen
- Bei Unsicherheit über eine Rechts- oder Pflichtangabe: nachfragen statt
  annehmen. Lieber ein `TODO` stehen lassen als eine plausible Erfindung

Für den geplanten Pflege-Agenten gilt zusätzlich:

**Darf selbstständig vorschlagen:** tote Links, veraltete Jahreszahlen,
fehlende Übersetzungen, Rechtschreibung, Bildoptimierung, technische Fehler.

**Darf nie ohne ausdrückliche Anweisung ändern:** Pflichtangaben, Impressum,
Datenschutzerklärung, FINMA-Nummer, Preise oder Leistungsbeschreibungen,
Aussagen zur Rolle als Broker.

---

## 9. Seitenstruktur und Inhalte

Rangfolge der Bereiche — überall gleich, in Navigation, Startseite und Footer:
**1. Versicherungsbroking · 2. Treuhand · 3. Steuern.** Broking führt, die
anderen beiden ergänzen. Diese Reihenfolge wird nie umgestellt.

Seitenbaum:

| Pfad | Inhalt | Stand DE |
|---|---|---|
| `/` | Start, neun Bereiche | gebaut |
| `/versicherungen` | Leitbereich, Broking Privat und Firma | gebaut |
| `/treuhand` | Buchhaltung, Lohn, MWST, Abschluss | gebaut |
| `/treuhand/treuhaender-wechseln` | Wechsel eines bestehenden Mandats | gebaut |
| `/steuern` | Steuererklärung Privat, Selbständige, Firma | gebaut |
| `/firmengruendung` | Rechtsform, Ablauf, Kosten | gebaut |
| `/ueber-uns` | Inhaber, Werdegang, Sprachen | gebaut |
| `/kontakt` | Direktkontakt, Formular, Anfahrt | gebaut |
| `/transparenz` | Vermittlerstatus, Vergütung, Beschwerdeweg | offen |
| `/schadenfall` | Was im Schadenfall zu tun ist | offen |
| `/impressum` | Pflichtangaben | offen |
| `/datenschutz` | revDSG | offen |

Je Sprache derselbe Baum unter `/de/`, `/fr/`, `/pt/`. Verbindlich sind die
acht Kernseiten aus Schritt 4, Fassung 2; `/transparenz` und `/schadenfall`
werden von dort verlinkt und kommen später dazu.

### Startseite

Verbindlich ist die in **Schritt 4, Fassung 2** freigegebene Struktur mit neun
Bereichen. Der Wortlaut steht in `content/source/schritt4_fassung2_de.md` und
wird nicht umformuliert. Diese Reihenfolge wird nicht verkürzt und nicht
umgestellt:

| # | Bereich | Überschrift auf der Seite |
|---|---|---|
| 1 | Einstieg / Positionierung | Versicherungen, Treuhand und Steuern bei denselben Ansprechpartnern |
| 2 | Versicherungen → Treuhand → Steuern | Was wir für Sie übernehmen |
| 3 | Häufige Anlässe | Womit Menschen zu uns kommen |
| 4 | Warum A&C | Weshalb Kundinnen und Kunden mit uns arbeiten |
| 5 | So arbeiten wir | In drei Schritten zur Zusammenarbeit |
| 6 | Kosten und Vergütung | Was unsere Arbeit kostet |
| 7 | Wer wir sind | Zwei Ansprechpartner |
| 8 | Standort und Region | Sie finden uns in Lyss |
| 9 | Kontaktabschluss | Sprechen wir über Ihre Situation |

Bereich 3 ist für die Wachstumsstrategie zentral und trägt sechs
Anlass-Einstiege — sie müssen sichtbar sein, nicht in einer Aufklappliste:

1. Ich suche eine Buchhaltung → Treuhand
2. Ich möchte den Treuhänder wechseln → Treuhänder wechseln
3. Ich gründe eine Firma → Firmengründung
4. Ich stelle Mitarbeitende an → Treuhand
5. Ich möchte meine Versicherungen prüfen lassen → Versicherungen
6. Meine Steuererklärung steht an → Steuern

Keine Zähler mit erfundenen Zahlen ("X Jahre, Y Kunden"). Nur Angaben, die
belegbar sind.

### Offene Angaben aus Schritt 4

Stellen, die A&C noch bestätigen muss, stehen im Inhalt als `{ pending: '…' }`
und erscheinen auf der Seite sichtbar markiert. Sie werden **nie** erfunden und
nie stillschweigend weggelassen.

`npm run check` listet sie bei jedem Lauf auf. Vor dem Go-live muss
`npm run check:pending -- --strict` ohne Befund durchlaufen.

Auf der Startseite sind derzeit fünf Angaben offen: Korrespondenzsprachen
(Bereich 4), automatisierte Arbeitsschritte (5), Courtage und Honorar (6),
Funktion und Zuständigkeit je Person (7), Öffnungszeiten (8).

### Verweise auf noch nicht gebaute Seiten

Ein Verweis wird nur dann zum Link, wenn die Zielseite in dieser Sprache
veröffentlicht ist. Sonst steht die Beschriftung mit dem Vermerk „folgt" —
sichtbar, aber nicht klickbar. Kein toter Link, keine stille Auslassung.

### Ablauf-Muster

Jede Leistungsseite enthält einen nummerierten Ablauf. Das ist das wichtigste
Element der Seite: Es nimmt die Hemmschwelle, weil der Kunde sieht, was auf ihn
zukommt.

Wortlaut und Anzahl der Schritte stehen je Seite in Schritt 4, Fassung 2 und
werden nicht vereinheitlicht — Versicherungen und Steuern haben drei Schritte,
Treuhand vier, der Treuhänderwechsel fünf, die Firmengründung sechs.

### /versicherungen

Zuerst die Rolle erklären: A&C vertritt den Kunden, nicht die Versicherung.
Was ein Maklermandat ist, was es kostet (nichts), wie die Entschädigung
funktioniert.

Dann zwei Blöcke mit Ankern:
- **Privat** — Kranken- und Zusatzversicherung, Hausrat und Haftpflicht,
  Motorfahrzeug, Leben und Säule 3a, Rechtsschutz
- **Firmen** — BVG, UVG und UVG-Zusatz, Krankentaggeld, Betriebshaftpflicht,
  Sachversicherung, Rechtsschutz

Eigener Abschnitt zur Schadenbetreuung — das ist der Punkt, an dem sich ein
Broker von einem Direktabschluss unterscheidet.

Kein Prämienrechner, keine Vergleichstabellen mit Versicherernamen.

### /treuhand

Buchhaltung, Lohnadministration, MWST-Abrechnung, Jahresabschluss,
Gründungsberatung und Umwandlung Einzelfirma zu GmbH. Zielgruppe sind kleine
Betriebe und Selbstständige in der Region.

### /steuern

Getrennt für Privatpersonen und Firmen. Enthält zusätzlich:
- eine herunterladbare Unterlagen-Checkliste
- den Hinweis, dass wir die Fristverlängerung übernehmen
- den Hinweis, dass wir die definitive Veranlagung nachkontrollieren

Formulierung zur Qualifikation: "Treuhand / Steuern", nie ein Titel, der einen
eidg. Fachausweis suggeriert.

### /ueber-uns

Die Inhaber mit Namen, Werdegang und Sprachen. Warum es die Firma gibt. Kein
Fliesstext über Werte — konkrete Sätze über konkrete Menschen.

### /kontakt

Adresse, Öffnungszeiten, Karte, Telefon, E-Mail. Sprachhinweis: Beratung auf
Deutsch, Französisch und Portugiesisch.

### Preisdarstellung

Keine Lockpreise ("Steuererklärung ab CHF 35"). Das passt nicht zur
Positionierung und zieht die falsche Kundschaft an. Stattdessen: Preisrahmen
nennen und erklären, wovon der Aufwand abhängt. Was A&C angibt, muss stimmen.

### Später, nicht jetzt

Blog oder Wissensbereich, Kundenlogin, Newsletter. Erst wenn die Grundseite
steht und gepflegt wird.

---

## 10. Offene Punkte

Technik und Infrastruktur:

- [ ] Repository auf GitHub in `ac-website` umbenennen — **erst nach der
      lokalen Freigabe der Website.** Bis dahin wird nichts veröffentlicht
- [ ] Vercel-Projekt anlegen und mit dem Repository verbinden
- [ ] DNS bei Hostpoint erst beim Go-live auf Vercel umstellen
- [ ] MDX für Fliesstextseiten einrichten (mit der ersten Rechtstextseite)
- [ ] Formular-Endpunkt und Cloudflare Turnstile einrichten

Inhalt und Freigaben:

- [ ] Öffnungszeiten festlegen — bis dahin steht keine Angabe auf der Seite
- [ ] Preisrahmen für Steuererklärung und Treuhand festlegen
- [ ] Bildmaterial: Porträts der Inhaber und Regionalaufnahmen beschaffen
      (die Startseite kommt bewusst ohne Fotos aus, statt Stockbilder zu setzen)
- [ ] Vektorlogo (SVG) beschaffen — bisher nur PNG, siehe `offene-punkte.md`
      des Corporate-Design-Skills. Betrifft auch das Favicon
- [ ] Unterlagen-Checkliste Steuern erstellen (DE/FR/PT)
- [ ] Glossar DE/FR/PT für Fachbegriffe aufbauen (`content/glossar.md`)

Übersetzungen:

- [ ] FR und PT: Startseite und alle Kernseiten. Bis dahin stehen beide Sprachen
      in `src/i18n/routes.ts` auf `published: false` und sind nicht erreichbar
- [ ] Die FR- und PT-Slugs sind gesetzt, aber noch nicht abgenommen:
      `assurances` / `seguros`, `fiduciaire` / `fiduciaria`, `impots` / `impostos`,
      `a-propos` / `sobre-nos`, `contact` / `contacto`,
      `mentions-legales` / `informacao-legal`,
      `protection-des-donnees` / `protecao-de-dados`
