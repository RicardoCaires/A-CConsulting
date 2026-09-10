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
  > Umzug nach **Bielstrasse 10, 2558 Aegerten** ab **01.11.2026**. Bis dahin
  > gilt öffentlich Lyss. Handelsregister und FINMA sind noch nicht
  > nachgeführt — der **Sitz** wechselt erst danach. Beide Adressen stehen in
  > `src/lib/company.ts`; der Wechsel geschieht beim ersten Bau nach dem
  > Stichtag von selbst. Kein Livegang vor dem 01.11.2026.
- FINMA-Registernummer Unternehmen: **F01568855**
- Geschäftsführung: **Ricardo Caires Cerqueira**
- Mitinhaber: Octavio Nuno Gouveia Andrade

> Öffentlich auf der Website gilt die vollständige Form „Ricardo Caires Cerqueira"
> (Festlegung Ricardo, 04.09.2026). Die Kurzform „Ricardo Caires" ist in knappen
> Oberflächen-Zusammenhängen zulässig, aber nur, wenn der vollständige Name auf
> derselben Seite bereits eindeutig zu lesen ist. Gepflegt wird beides in
> `src/lib/company.ts`.
- UID / Handelsregister-Nr.: **CHE-332.960.986**
  (BFS-Schreiben vom 23.02.2026; eingetragen am 03.09.2026 auf Anweisung von Ricardo)
- Telefon: **032 373 22 44**
- E-Mail: **info@ac-co.ch**

> Von Ricardo am 04.09.2026 zur öffentlichen Verwendung freigegeben.
> Sie werden ausschliesslich zentral in `src/lib/company.ts` gepflegt —
> nirgends sonst im Code ausgeschrieben.

> **Die Telefonnummer ist am 10.09.2026 gewechselt** — auf Ricardos
> ausdrückliche Anweisung („ja soll die hauptnummer werden"). Bis dahin galt
> öffentlich seine Mobilnummer **078 625 53 85**; sie stammte aus der Fusszeile
> der bestehenden A&C-Dokumente. Neu gilt die Festnetznummer des Büros.
>
> Seine Mobilnummer ist damit nicht verschwunden: Sie steht weiterhin unter
> `direktnummern.ricardo` als seine **persönliche** Direktnummer. Das ist die
> Trennung, die jetzt gilt — hier die Firma, dort die Person.
>
> **Zwei Stellen ausserhalb dieses Projekts führen weiterhin die Mobilnummer**
> und sind nicht nachgezogen, weil sie nicht hierher gehören: der Skill
> `ac-corporate-design` (Abschnitt 5, Fusszeile aller Geschäftsdokumente) und
> `00_Shared/Stammdaten.md`. Beide ändert Ricardo oder der zuständige Bereich,
> nicht dieses Projekt. Solange das offen ist, tragen Website und
> Geschäftsdokumente **verschiedene** Nummern.
>
> `design/ac-corporate-design.tokens.json` ist eine Kopie der Skill-Tokens und
> enthält die Nummer ebenfalls. Sie wird hier nicht von Hand geändert — sonst
> läuft die Kopie vom Skill weg. Sie fliesst auch nicht auf die Website: Die
> Seite liest ausschliesslich `src/lib/company.ts`.

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
**1. Versicherungsbroking · 2. Treuhand · 3. Finanzplanung.** Broking führt,
die anderen beiden ergänzen. Diese Reihenfolge wird nie umgestellt.

> Geändert am 07.09.2026 auf Anweisung von Ricardo. Bis dahin stand an dritter
> Stelle **Steuern**. Steuern ist damit kein eigener Hauptpunkt mehr: Die Seite
> `/steuern` bleibt bestehen, wird gepflegt und ist über den Fussbereich und
> die Geschäftsfälle erreichbar — sie ordnet sich unter Treuhand ein. Neu an
> dritter Stelle steht **Finanzplanung** mit genau zwei Leistungen, Budget
> und Vorsorge. Weitere werden nicht erfunden.
>
> Am 09.09.2026 von **Personal Finance** in **Finanzplanung** umbenannt
> (Revisionsauftrag Ricardo): „Personal Finance" weckt die Erwartung von
> Anlageberatung oder Vermögensverwaltung. Beides bietet A&C nicht an. Die
> Adresse lautet seither `/de/finanzplanung`.

Hauptnavigation, fünf Punkte, flach — kein Aufklappmenü, kein Mega-Menü:

**Versicherungen · Treuhand · Finanzplanung · Über uns**, rechts der Knopf
„Erstgespräch anfragen". Kontakt steht nicht in der Reihe, sondern im Knopf;
auf schmalen Geräten zusätzlich in der Menüliste. Ein Punkt, dessen Seite es
noch nicht gibt, bleibt sichtbar und trägt den Vermerk „folgt".

> **Wissen ist am 09.09.2026 aus der Navigation genommen** (Revisionsauftrag
> Ricardo). Der Bereich hat keinen einzigen Beitrag; eine Wissensseite, die nur
> ankündigt, ist kein Wissensbereich. `/wissen` steht auf `published: false`
> und erscheint weder in der Navigation noch in der Sitemap. Inhalt und Vorlage
> bleiben stehen. **Zurück in die Navigation, sobald drei echte Beiträge
> vorliegen** — dann sind es wieder fünf Hauptpunkte.

> **Der Kopfbereich läuft seit dem 09.09.2026 zweizeilig**: Wortmarke mittig und
> grösser, darunter die Kategorien, ebenfalls mittig. Sprachwahl und Knopf
> stehen rechts. Grund: Mit fünf Kategorien war die eine Zeile voll, und die
> Navigation lief bei rund 1280 px über das Logo.

Seitenbaum:

| Pfad | Inhalt | Stand DE |
|---|---|---|
| `/` | Start, sieben Abschnitte | gebaut |
| `/versicherungen` | Leitbereich, Broking Privat und Firma | gebaut |
| `/treuhand` | Buchhaltung, Lohn, MWST, Abschluss | gebaut |
| `/treuhand/treuhaender-wechseln` | Wechsel eines bestehenden Mandats | gebaut |
| `/steuern` | Steuererklärung Privat, Selbständige, Firma | gebaut |
| `/firmengruendung` | Rechtsform, Ablauf, Kosten | gebaut |
| `/finanzplanung` | Budget und Vorsorge | gebaut |
| `/wissen` | Ratgeberbeiträge | gebaut, **nicht veröffentlicht** |
| `/ueber-uns` | Inhaber, Werdegang, Sprachen | gebaut |
| `/kontakt` | Direktkontakt, Formular, Anfahrt | gebaut |
| `/transparenz` | Vermittlerstatus, Vergütung, Beschwerdeweg | offen |
| `/schadenfall` | Was im Schadenfall zu tun ist | offen |
| `/impressum` | Pflichtangaben | gebaut |
| `/datenschutz` | revDSG | gebaut |

Je Sprache derselbe Baum unter `/de/`, `/fr/`, `/pt/`. Verbindlich sind die
acht Kernseiten aus Schritt 4, Fassung 2; `/transparenz` und `/schadenfall`
werden von dort verlinkt und kommen später dazu.

### Startseite

Verbindlich sind **sieben** Abschnitte. Der Wortlaut steht in
`content/source/startseite_de.md` und wird nicht umformuliert.

| # | Abschnitt | Überschrift auf der Seite | Fläche |
|---|---|---|---|
| 1 | Einstieg | Verwurzelt im Seeland. Blick auf mehr. | DOMINANT |
| 2 | Leistungen | Was wir für Sie übernehmen. | hell (getönt) |
| 3 | Situationen | Wobei können wir Sie unterstützen? | weiss |
| 4 | Eine Stelle | Eine Stelle für Ihre Administration | FLÄCHE |
| 5 | Ansprechpartner | Zwei Ansprechpartner | hell |
| 6 | Ablauf | So beginnt die Zusammenarbeit | weiss |
| 7 | Abschluss | Erzählen Sie uns, wobei wir Sie entlasten können. | weiss |

> **Am 10.09.2026 von neun auf sieben verkürzt** auf Anweisung von Ricardo.
> Weggefallen sind **„Unsere Rolle"** („Wir vertreten Sie, nicht die
> Versicherung.") und **„Persönlich beraten. Digital effizient."**. Beide
> Wortlaute stehen unverändert in `content/source/startseite_de.md` und sind
> nicht widerrufen — sie sind nur nicht mehr auf der Startseite.
>
> Der Satz „Wir vertreten Sie, nicht die Versicherung." steht seither in der
> Leistungskarte Versicherungen (Abschnitt 2). Ausführlich erklärt das Modell
> weiterhin das Schaubild auf `/versicherungen`.

**Abschnitt 2 als Karten, seit dem 10.09.2026.** Ricardo hat eine
Referenzgrafik geliefert und den Abschnitt danach nachbauen lassen: weisse
Karten auf getöntem Grund, je Bereich eine Kategorie, eine eigene Überschrift,
vier Leistungen mit Icon und eine Illustration. Die Rangfolge bleibt sichtbar —
Versicherungen über die volle Breite, Treuhand und Finanzplanung halb so gross
darunter.

Drei Abweichungen von den Gestaltungsprinzipien, alle auf seine ausdrückliche
Anweisung und alle bewusst klein gehalten. Sie gelten **nur** für diesen
Abschnitt und werden nicht zum neuen Standard:

- **Die Karten tragen einen Schatten.** Abschnitt 5 sagt „keine
  Schlagschatten". Hier ist es der schwächste, der eine weisse Karte vom Grund
  noch abhebt, und er ergänzt eine Kontur, statt sie zu ersetzen.
- **Der Knopf des Leitbereichs ist grün.** Sonst gilt „Grün ist Akzent, nicht
  Fläche". Ein Knopf ist die kleinste Fläche, auf der das noch vertretbar ist;
  er kommt genau einmal auf der Seite vor (`Button variant="akzent"`).
- **Der Abschnittsgrund ist `background_tint`, nicht `background_light`.** Auf
  dem gewohnten Off-White wären weisse Karten kaum als Karten zu erkennen. Es
  ist keine neue Farbe, sondern die zweite Stufe derselben.

**Die Abschnitte 2 und 3 liegen auf einer gemeinsamen Fläche** (`kartenzone`),
seit dem 10.09.2026 und nach Ricardos Referenz. Beide tragen Karten; eine Naht
dazwischen gibt es bewusst nicht. Im Grund liegen acht weiche organische
Formen — gezeichnet als ein einziges SVG (`src/components/ui/Zonenmuster.tsx`),
nicht als Bilddatei: Die Fläche ist über 2000 px hoch, als Datei wären das je
nach Gerät 200 KB und mehr.

**Keine Linien.** Die erste Fassung hatte zusätzlich feine Höhenlinien und
zwei grüne Kurven; Ricardo hat sie am 10.09.2026 streichen lassen und dafür
mehr von den Flächen verlangt. Die Deckkraft bleibt niedrig: Was man als
Muster erkennt, ist schon zu viel.

Die drei Illustrationen sind **geliefert, nicht gezeichnet**
(`src/components/ui/Illustration.tsx`). Ricardo hat sie am 10.09.2026 als PNG
bereitgestellt; die drei SVG, die vorher an dieser Stelle standen, sind
ersatzlos entfallen. Die Datei wird unverändert gezeigt: kein Filter, keine
Umfärbung, kein Beschnitt. Eine neue Fassung tritt an dieselbe Stelle —
Datei ersetzen, umwandeln, fertig.

> Geändert am 09.09.2026 auf Anweisung von Ricardo (Revisionsauftrag). Bis dahin
> galten sieben Abschnitte. Vier Änderungen:
>
> - **Der Einstieg sagt jetzt, was A&C tut.** „Zwei Ansprechpartner statt drei
>   Adressen" war für Erstbesucher zu abstrakt.
> - **Die Situationen stehen vor den Leistungen.** Wer auf die Seite kommt,
>   denkt in seinem Problem, nicht in unseren Bereichen.
> - **Drei Abschnitte sind neu:** die Vertrauenszeile, „Eine Stelle für Ihre
>   Administration" und „Persönlich beraten. Digital effizient.".
> - **Der Wissensbereich ist weg**, solange es keine Beiträge gibt.
>
> Der frühere Abschnitt „Weshalb Kundinnen und Kunden mit uns arbeiten" ist
> entfallen. Seine vier Aussagen stehen jetzt dort, wo sie hingehören:
> „Zwei Bereiche, eine Stelle" ist Abschnitt 5, „Digital organisiert" ist
> Abschnitt 6, „Feste Ansprechpartner" trägt Abschnitt 7 und „Verständliche
> Entscheidungen" Abschnitt 8. Jeder Gedanke steht einmal.

Die Flächenfolge ist fest und wird beim Bauen erzwungen (`pruefeFlaechen`).
Ein Verstoss bricht den Build.

Abschnitt 3 ist für die Wachstumsstrategie zentral und trägt sechs
Geschäftsfälle — sie müssen sichtbar sein, nicht in einer Aufklappliste,
und nummeriert:

1. Ich gründe ein Unternehmen → Firmengründung
2. Ich stelle Mitarbeitende ein → Treuhand
3. Ich möchte meine Buchhaltung abgeben → Buchhaltung
4. Ich möchte meinen Treuhänder wechseln → Treuhänder wechseln
5. Ich möchte meine Versicherungen prüfen → Versicherungen
6. Ich habe einen Schadenfall → Versicherungen, Abschnitt Schadenfall

> **Seit dem 10.09.2026 mit Piktogrammen**, als sechs Karten drei mal zwei,
> nach Ricardos Referenzgrafik. Bis dahin galt hier ausdrücklich „ohne Icons —
> sechs bunte Zeichen wären genau das Rauschen, das die Seite nicht haben
> soll". Ricardo hat die sechs Piktogramme geliefert und den Umbau angeordnet;
> die Regel gilt für diesen Abschnitt nicht mehr.
>
> Sie bleibt für alles, wofür er **keine** Bilder geliefert hat: Dort wird
> nichts nachgezeichnet und nichts aus einer Bibliothek geholt. Die Dateien
> liegen unter `bilder-quelle/` mit seinen Namen; ausgeliefert werden sie
> ohne Umlaut im Dateinamen. Die Zuordnung steht in
> `src/components/ui/Piktogramm.tsx` und nirgends sonst.

Keine Zähler mit erfundenen Zahlen ("X Jahre, Y Kunden"), keine Kundenstimmen,
keine Versicherer-Logos. Nur Angaben, die belegbar sind.

**Digitalisierung — derzeit nicht auf der Startseite.** Der Abschnitt
„Persönlich beraten. Digital effizient." ist am 10.09.2026 entfallen. Die
inhaltliche Regel bleibt und gilt, sobald das Thema irgendwo wieder auftaucht:
**Werkzeug, nicht Verkaufsargument.** Erlaubt ist, was Software für die
Kundschaft tut; verboten bleiben Schlagwörter („KI-gestützt" als Auszeichnung,
„AI-powered", „disruptiv", „next generation"). Die fachliche Prüfung, die
Beratung und die Verantwortung liegen im Text ausdrücklich bei A&C.

**Modellgrafik — nicht auf der Startseite.** Die Grafik „Unser Modell"
(Kunde → Mandat → A&C → Preisvergleich) stand am 09.09.2026 kurz unter dem
Statement und wurde von Ricardo am selben Tag wieder herausgenommen. Sie steht
seither **nur** auf `/versicherungen`. Bis zum 10.09.2026 stand sie dort direkt
nach „Wir arbeiten in Ihrem Auftrag"; seit dieser Abschnitt entfallen ist,
steht sie unmittelbar nach den Sprungmarken und erklärt das Modell allein. Der Abschnitt, unter dem
sie stand, ist am 10.09.2026 ganz entfallen.

**Sie zeigt die Logos von acht Versicherungsgesellschaften** (Zurich, Helvetia,
AXA, Allianz, Vaudoise, Die Mobiliar, Generali, Swiss Life). Das widerspricht
der Regel in Abschnitt 3 („Logos von Versicherern ohne schriftliche Freigabe").
Ricardo wurde darauf hingewiesen und hat am 09.09.2026 entschieden, die Grafik
so zu verwenden — die Verantwortung für Freigaben liegt bei ihm.

**Seit dem 10.09.2026 ist das Modell kein Bild mehr, sondern ein Abschnitt.**
Ricardo hat eine Referenzgrafik und elf Einzelbilder geliefert und ausdrücklich
verlangt, dass daraus ein Webabschnitt wird
(`src/components/blocks/UnserModell.tsx`). Der Unterschied ist nicht nur
Gestaltung: Text bleibt Text — wählbar, übersetzbar, durchsuchbar und für
Vorlesewerkzeuge lesbar. Aus den Bildern kommen nur die Symbole.

Vier Ebenen: Einleitung und drei Grundsätze, der Kreislauf
(Kunde → Mandat → A&C → Preisvergleich → Markt → Ergebnis), die Nutzenleiste,
die Schlusszeile. Alle elf Dateien zusammen wiegen 124 KB — weniger als die
eine Bilddatei, die sie ersetzen.

**Der Abschnitt hat als einziger einen eigenen, breiteren Container: 1380 px
statt der 1160 des Standards.** Das ist eine bewusste Ausnahme, keine neue
Regel. Die erste Fassung lief im Standardmass; Ricardo hat sie am 10.09.2026
als „zu klein, zu schwach gewichtet" zurückgewiesen — zu Recht: Im
Standardcontainer musste alles darin schrumpfen.

**Verbindlich ist seit dem 10.09.2026 Ricardos HTML-Vorlage**
(`bilder-quelle/unser-modell_referenz.html`). Er hat die Referenz nicht als
Bild, sondern als fertigen Quelltext geliefert; Aufbau, Grössen und Abstände
stammen von dort und stehen im Kopf von `UnserModell.module.css` aufgelistet.
Der Ablauf misst `286px 165px minmax(340px, 1fr) 175px 300px` — nachgemessen
bei 1500 px Fensterbreite trifft er das exakt.

**Übernommen ist die Gestaltung, nicht der Code.** Die Vorlage schreibt
Farbwerte und Georgia direkt hinein; im Projekt stehen dafür die Tokens und die
Schrift der Website. Ein Hex-Wert in einer Komponente ist hier ein Fehler, und
eine zweite Schriftfamilie wäre eine zweite Marke.

**Der Hintergrund** ist seit dem 10.09.2026 Ricardos zweite Datei
(`wide_minimal_abstract_background_design_a_clean`): grosse helle Kreise in den
Ecken, feine Bögen, vereinzelte Punkte — und in der Mitte bewusst ruhig. Sie
deckt voll statt halbtransparent; die Datei ist von sich aus zurückhaltend
genug (Tonumfang 213 bis 250), und halbtransparent verloren die Kreise die
Wirkung, wegen der sie da sind. Fliesstext auf der dunkelsten Stelle trägt
5.5:1 und damit mehr als die geforderten 4.5:1.

Auf schmalen Geräten ist nur die ruhige Mitte der Datei sichtbar — bei 375 px
noch 6.1 Prozent ihrer Breite. Das ist gewollt: Dort soll kein Kreis hinter
einem Text liegen. `11_hintergrundmuster` bleibt im Repository liegen, steht
aber auf keiner Seite mehr.

**Die Rückführung** — die U-Klammer von den Gesellschaften zurück zum Kunden —
ist der Teil, der in den ersten beiden Fassungen fehlte. Sie hat eigenen
senkrechten Raum, damit nichts überlappt, und entfällt unterhalb von 1180 px:
Untereinander gelesen ist der Ablauf eine Kette, und eine gequetschte Klammer
wäre ein Muster statt einer Aussage.

Vier Punkte, die man wissen muss:

- **Die erste Lieferung war unbrauchbar.** Es waren Bildschirmausschnitte aus
  der Referenz: Titel im Bild eingebacken, Reste der Nachbarelemente, Symbole
  von rund 60 px. Sie sind **nicht** eingesetzt worden; Ricardo hat freigestellte
  Symbole nachgeliefert. Nichts wurde nachgezeichnet.
- **Das Logo in der Mitte ist die Fassung mit „Versicherungen · Treuhand"** und
  steht nur in diesem Abschnitt. Kopf- und Fussbereich tragen weiterhin die
  Fassung aus dem Corporate Design.
- **Der Zusatz „Persönlich. Unabhängig. An Ihrer Seite."** kommt aus der
  Referenzgrafik. Er ist der dritte neben „Kompetenz schafft Klarheit"
  (Wortmarke) und „Perspektiven für morgen" (Fussbereich). Ricardo ist darauf
  hingewiesen.
- **Die Marker vor den Stichpunkten sind feine grüne Ringe aus CSS**, keine
  Häkchen und keine Bilddatei. Ricardo hat sie ausdrücklich „deutlich dezenter"
  verlangt.

`unser-modell.webp` bleibt liegen — freigegeben, nicht gelöscht, aber auf
keiner Seite mehr. Der folgende Abschnitt beschreibt sie und gilt weiter,
falls sie je zurückkehrt.

**Die Datei ist verbindlich, nicht beliebig.** Ricardo hat am 09.09.2026
festgestellt, dass die eingesetzte Fassung eine falsche Bildmarke trägt: Die
grüne Spitze sitzt neben dem Navy-Berg statt auf ihm. Es gilt ausschliesslich
die von Ricardo zuletzt freigegebene Datei. Eine Fassung, die nicht von ihm
kommt, wird nicht eingesetzt und nicht nachgebaut. Gepflegt wird sie an einer
Stelle: `bilder-quelle/unser-modell.png` als Quelle, `public/bilder/unser-modell.webp` als ausgelieferte Fassung, eingebunden in
`src/content/pages/versicherungen.ts`.

**Abschnitt 7, der Abschluss, seit dem 10.09.2026 nach Ricardos Referenz.**
Er läuft **nicht** mehr über `CTASection`, sondern über den eigenen Baustein
`src/components/blocks/Kontaktabschluss.tsx`: Titel, ein Satz, Telefon und
E-Mail mit den gelieferten Symbolen, darunter der Knopf. Telefon und E-Mail
kommen aus `src/lib/company.ts` und stehen nirgends sonst ausgeschrieben.

Zwei Punkte, die man wissen muss:

- **Der Grund ist weiss, nicht FLÄCHE.** Der Ablauf darüber steht auf
  `background_tint`. Gäbe man dem Abschluss denselben Ton, stünden 1300 Pixel
  Grundton ohne Kante untereinander — am 10.09.2026 gemessen, vorher war genau
  das der Fall. Das gelieferte Hintergrundmuster ist ausserdem Navy bei acht
  Prozent Deckung; auf Weiss trägt es, auf dem getönten Grund verschwände es.
- **Der Abschluss sieht auf der Startseite jetzt anders aus als auf den fünf
  Leistungsseiten**, die weiterhin `CTASection` tragen. Das war nicht so
  gewollt, sondern die Folge davon, dass die Startseite als Erste umgebaut
  wurde. Bekommen die Leistungsseiten ihren Umbau, gehört das wieder
  zusammengeführt.

**Die Flächenfolge beschreibt die Startseite nicht mehr vollständig.** Vier
Abschnitte setzen sich über die zugewiesene Fläche hinweg und tragen eine
eigene: 2 und 3 liegen zusammen in der Kartenzone, 6 und 7 sind seit dem
10.09.2026 selbst eingefärbt. `pruefeFlaechen` prüft damit eine Reihe, die so
nicht mehr auf dem Schirm steht. Das zu bereinigen ist ein eigener Auftrag —
entweder die Regel anpassen oder die Zuweisungen wieder in die Folge holen.

### Fussbereich

Seit dem 10.09.2026 nach Ricardos Referenzgrafik
(`bilder-quelle/footer_referenz.png`). Er steht auf **jeder** Seite — der
Auftrag sprach von der Startseite, es gibt aber nur einen Fussbereich.

Vier Spalten statt bisher drei: **Unternehmen · Leistungen · Rechtliches ·
Regulatorisches.** Register und Rechtliches standen bis dahin zusammen.
Darunter eine Schlusszeile mit Copyright links und dem Zusatz rechts.

Alle Masse stammen aus der Vorlage, nicht aus dem Gefühl: senkrechte
Trennlinien bei 28.5 / 50.0 / 71.5 Prozent der Inhaltsbreite, Spalten im
Verhältnis 1.33 : 1 : 1 : 1.33, Logo 20.8 Prozent der Inhaltsbreite, grüner
Strich unter den Spaltentiteln 42 von 1916 px.

**Das gelieferte Hintergrundbild** hängt unten und behält sein
Seitenverhältnis. Auf breiten Fenstern deckt es den ganzen Fussbereich, auf
schmalen liegt es als Band am unteren Rand — nie verzerrt, die Bergformen
immer unten rechts. Die grüne Linie der Datei wird abgeschnitten; dieselbe
Linie steht bereits als Rand des Fussbereichs im Tokenwert und läge sonst
doppelt.

**Vier gelieferte Symbole fehlen** (Standort-Pin, Telefonhörer, Briefsymbol,
grüner Chevron). Sie waren am 10.09.2026 nicht im Assets-Ordner. Bis sie
kommen, stehen die Kontaktzeilen und die Links ohne Symbol. **Es wird nichts
nachgezeichnet und nichts aus einer Bibliothek geholt** — dieselbe Regel wie
überall sonst. Der Aufbau ist so, dass die Bilder ohne Umbau davortreten.

Das Logo im Fussbereich ist die **Negativfassung aus dem Corporate Design**
(`public/logo/ac-logo-negativ.png`), nicht eine neu gelieferte Datei. Es ist
grösser als im Kopfbereich; `Logo.module.css` deckelt die Breite dort bei
9.25rem, der Fussbereich überschreibt das für sich allein.

**Der Zusatz „Perspektiven für morgen" ist neu.** Die Wortmarke trägt daneben
weiterhin „Kompetenz schafft Klarheit" — A&C führt damit zwei Zusätze.
Ricardo ist darauf hingewiesen; die Entscheidung liegt bei ihm.

**Die Jahreszahl im Copyright kommt aus dem Bau**, nicht aus einer Zahl im
Code. Die Vorlage zeigt 2024; das ist die Jahreszahl der Vorlage, nicht die
gewünschte Angabe.

**Sprachwahl.** Gezeigt werden nur Sprachen, die es gibt. Solange nur Deutsch
vorliegt, entfällt die Sprachwahl im Kopfbereich ganz — eine Auswahl mit einem
Eintrag ist keine Auswahl. Sie erscheint von selbst wieder, sobald FR oder PT
auf `published: true` stehen.

### Offene Angaben

Stellen, die A&C noch bestätigen muss, stehen im Inhalt als `{ pending: '…' }`
und erscheinen auf der Seite sichtbar markiert. Sie werden **nie** erfunden und
nie stillschweigend weggelassen.

`npm run check` listet sie bei jedem Lauf auf. Vor dem Go-live muss
`npm run check:pending -- --strict` ohne Befund durchlaufen.

Stand 09.09.2026: **vier** offene Angaben — der Link auf den
FINMA-Registereintrag im Impressum und drei Veröffentlichungsdaten im
Wissensbereich, der nicht veröffentlicht ist.

Alle Bildflächen sind Platzhalter mit Formatangabe. Das spätere Foto tritt an
dieselbe Stelle, ohne dass sich das Layout verschiebt. Kein Stockbild.

### /versicherungen

Die Rolle erklärt seit dem 10.09.2026 das **Schaubild**, nicht mehr ein
Textabschnitt: A&C vertritt den Kunden, nicht die Versicherung.

> **Fünf Abschnitte sind am 10.09.2026 auf Ricardos Anweisung entfallen:**
> „Wir arbeiten in Ihrem Auftrag", „Wie wir entschädigt werden", „So läuft eine
> Vertragsprüfung ab", „Wenn Sie selbständig sind oder Personal haben" und der
> Abschluss **„Lassen Sie Ihre Verträge anschauen"**.
> Ihr Wortlaut steht unverändert in `content/source/schritt4_fassung2_de.md`
> und ist nicht widerrufen — er steht nur nicht mehr auf der Seite. Mit dem
> Ablauf ist auch seine **Sprungmarke** entfallen; sie hätte ins Leere gezeigt.
>
> **Die Seite hat damit keinen Abschluss mehr** und endet mit den häufigen
> Fragen. Sie ist die einzige Leistungsseite ohne `CTASection`; der einzige
> Handlungsknopf steht im Seitenkopf und im Kopfbereich. **Ricardo ist darauf
> hingewiesen.**
>
> **Damit sagt die Seite nichts mehr zur Vergütung.** Das betrifft drei Punkte,
> die weiter oben in diesem Abschnitt als Inhalt von `/versicherungen` stehen:
> was ein Maklermandat ist, **was es kostet (nichts)** und wie die Entschädigung
> funktioniert. Der Satz „Für Sie ist die Arbeit im Rahmen des Maklermandats
> kostenlos" stand nur dort. **Ricardo ist darauf hingewiesen; die Entscheidung
> ist seine.**
>
> Für einen Broker ist das keine gestalterische Frage: Wie er entschädigt wird,
> ist die Angabe, die ihn vom Direktabschluss unterscheidet. Solange
> `/transparenz` nicht existiert, steht sie nirgends auf der Website.
>
> Die **FINMA-Registrierung** stand ebenfalls in einem der gestrichenen Texte.
> Sie ist nicht verloren: Sie steht im Fussbereich jeder Seite und vollständig
> im Impressum.

Dann zwei Blöcke mit Ankern:
- **Privat** — Kranken- und Zusatzversicherung, Hausrat und Haftpflicht,
  Motorfahrzeug, Leben und Säule 3a, Rechtsschutz
- **Firmen** — BVG, UVG und UVG-Zusatz, Krankentaggeld, Betriebshaftpflicht,
  Sachversicherung, Rechtsschutz

> **Seit dem 10.09.2026 ein eigener Baustein** nach Ricardos Referenzgrafik:
> `src/components/blocks/Segmente.tsx`. Vorher zwei `subsections` aus dem
> allgemeinen Blockmodell. Je Block links Kategorie, Überschrift und die
> Bereiche als Pills, rechts Karten mit geliefertem Piktogramm; dazwischen
> eine feine Linie.
>
> **Die Anker `privatpersonen` und `unternehmen` sind unverändert** — die
> Sprungmarken unter dem Seitenkopf und die Hauptnavigation zeigen darauf. Ein
> Umbau der Gestaltung darf keine Verweise brechen.
>
> Der Satz „Bereiche: Kranken- und Zusatzversicherung, …" steht jetzt als fünf
> Pills. Derselbe Inhalt, andere Form.
>
> **Ohne Zusätze.** Die Vorlage zeigt oben rechts je einen leisen Zusatz
> („Persönlich vorausdenken", „Starke Partner für nachhaltige Sicherheit");
> Ricardo hat beide am 10.09.2026 noch am selben Tag wieder streichen lassen.
> A&C führte damit vier Zusätze, drei davon auf dieser einen Seite. Es bleiben
> „Kompetenz schafft Klarheit" (Wortmarke), „Perspektiven für morgen"
> (Fussbereich) und „Persönlich. Unabhängig. An Ihrer Seite."
> (Modellabschnitt).
>
> `04_hintergrundmuster.png` war im Auftrag genannt, lag aber nicht im
> Assets-Ordner. Der Abschnitt steht darum ohne Muster auf dem Grundton der
> hellen Bereiche.

Eigener Abschnitt zur Schadenbetreuung — das ist der Punkt, an dem sich ein
Broker von einem Direktabschluss unterscheidet.

> **„Nach dem Abschluss hört es nicht auf" ist seit dem 10.09.2026 ein eigener
> Baustein** (`src/components/blocks/Betreuung.tsx`), nach Ricardos
> Referenzgrafik. Vorher ein `prose`-Block mit drei Absätzen: Der Text war
> richtig, aber niemand sah, was gemeint ist.
>
> **Der Leadtext ist unverändert** — er stand schon vorher so da. Neu sind die
> Kategoriezeile, vier Karten mit geliefertem Symbol und eine breite
> Schlusskarte. Der Anker `betreuung` bleibt; die Sprungmarken zeigen darauf.
>
> **„Persönlich. Vorausschauend. An Ihrer Seite." ist fast derselbe Zusatz wie
> „Persönlich. Unabhängig. An Ihrer Seite."** im Modellabschnitt. Beide stehen
> auf derselben Seite und unterscheiden sich in einem Wort. Ricardo ist darauf
> hingewiesen.
>
> Für den Hintergrund lag keine eigene Datei bei; der Abschnitt nimmt dieselbe
> wie der Modellabschnitt.

> **„Wenn ein Schaden eintritt" ist seit dem 11.09.2026 ein eigener Baustein**
> (`src/components/blocks/Schadenfall.tsx`), nach Ricardos Referenzgrafik:
> links Kategorie, Titel, Lead, drei Schritte und der Link, rechts die
> Partnerkarte mit dem gelieferten Logoraster.
>
> **Titel, Lead und Linkbeschriftung sind unverändert.** Die Referenzgrafik
> zeigt einen anderen Wortlaut („Wir begleiten Sie durch den Schadenfall.",
> „Jetzt Schadenfall melden"); Ricardos Auftragstext nennt ausdrücklich den
> bestehenden, und der ist freigegeben.
>
> **Die drei Zusätze der Grafik sind nicht übernommen** („Starke Partner. Für
> Ihre Sicherheit.", „Gemeinsam Lösungen finden.", „Persönlich. Unabhängig. An
> Ihrer Seite."). Ricardo hat am 10.09.2026 zwei Zusätze von dieser Seite
> streichen lassen; drei neue wären ein Rückschritt.
>
> Für die Partnerkarte war **kein Zusatztext** vorgegeben. Es wird keiner
> erfunden.
>
> **Das Logoraster zeigt neun Gesellschaften und weicht vom Raster im
> Modellabschnitt ab** — hier GVB und Smile, dort Swiss Life. Auf derselben
> Seite stehen damit zwei verschiedene Aufzählungen. Ricardo ist darauf
> hingewiesen. Für beide gilt weiterhin: Die Freigaben der Versicherer
> verantwortet er.
>
> **Am 11.09.2026 auf Ricardos Anweisung geändert:** Der Grund ist weiss statt
> gemustert. „Wir begleiten Sie persönlich" fluchtet mit den Logokacheln — das
> Symbol steht darüber statt daneben. **Jedes Logo ist ein Link** auf die
> Schadenmeldung seiner Gesellschaft; die Adressen stammen von der Übersicht,
> die Ricardo genannt hat. Dafür ist das gelieferte Raster in seine neun
> Kacheln geschnitten — mechanisch, entlang der Kartenkanten. Anders ginge es
> nicht: Ein Bild kann nicht neun Ziele haben.
>
> **Statt des Vermerks „folgt" steht ein grüner Knopf „Herunterladen".** Das
> PDF fehlt noch und steht als offener Punkt in Abschnitt 10.

Kein Prämienrechner, keine Vergleichstabellen mit Versicherernamen.

#### Seitenkopf mit Bild, seit dem 10.09.2026

Ricardo hat für `/versicherungen` ein Kopfbild und eine Referenzgrafik
geliefert. Der Kopf läuft dort über den eigenen Baustein
`src/components/blocks/BildHero.tsx`: links Kategorie, Titel, Satz, grüner
Knopf und drei Belege, rechts das Bild bis an die Fensterkante.

**`Hero.tsx` bleibt unverändert.** Er trägt acht andere Seitenköpfe. Welche
Seite ein Bild bekommt, steht in `PAGE_HERO_BILD` in
`src/app/[locale]/[...slug]/page.tsx` — heute genau eine. Kommen weitere
Bilder, treten sie dort dazu.

Masse aus der Vorlage: Kopfhöhe 29.5 Prozent der Breite, helles Motiv ab
58.5 Prozent. Nachgemessen bei 1900 px: 30.4 Prozent und 57.6 Prozent.

Drei Punkte, die man wissen muss:

- **Der Knopf ist grün** (`variant="akzent"`), auf Ricardos Vorgabe. Sonst gilt
  „Grün ist Akzent, nicht Fläche". Er kommt auf der Seite genau einmal vor.
- **Der Titel läuft in der H1-Grösse**, nicht in der Display-Grösse. In der
  Display-Grösse brach „Versicherungen für Privatpersonen und Unternehmen" in
  fünf Zeilen und der Kopf wurde 840 px hoch. Dieselbe Entscheidung trifft
  `Hero` als `titelLaenge="lang"`.
- **Die Kategoriezeile heisst „Versicherungen", nicht „[BERATUNGSSITUATION]".**
  Der Auftrag nannte Letzteres; das ist aber die interne Regieanweisung für das
  fehlende Foto aus `PAGE_VISUAL` und kein Website-Text. Die Referenzgrafik hat
  sie aus der bestehenden Seite übernommen. Ricardo entscheidet, ob es so
  bleibt.

Die **Sprungmarken** unter dem Kopf sind neu gestaltet: mittig, weisse Pillen
mit feiner Kontur, alle gleich. Sie stehen auf mehreren Seiten, die Änderung
gilt darum überall.

Die erste war zunächst leicht hinterlegt, wie die Referenzgrafik sie zeigt;
Ricardo hat das am 10.09.2026 zurücknehmen lassen. Die Füllung sah aus wie ein
Zustand („hier bin ich"), war aber nur Gestaltung — welcher Abschnitt gerade
sichtbar ist, wüsste nur JavaScript. Das Hellblau erscheint jetzt beim
Darüberfahren.

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

Kundenlogin, Newsletter. Erst wenn die Grundseite steht und gepflegt wird.

Der Wissensbereich ist seit dem 07.09.2026 **nicht** mehr vertagt: Er ist
eigener Hauptpunkt der Navigation und Abschnitt 6 der Startseite. Beiträge
gibt es noch keine.

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
- [ ] **PDF für den Schadenfall hinterlegen** — `public/dokumente/schadenfall.pdf`.
      Der grüne Knopf im Abschnitt „Wenn ein Schaden eintritt" zeigt seit dem
      11.09.2026 darauf und führt bis dahin ins Leere. Auf Ricardos Anweisung;
      er legt die Datei später ab. **Vor dem Go-live zwingend.**
- [ ] Unterlagen-Checkliste Steuern erstellen (DE/FR/PT)
- [ ] Glossar DE/FR/PT für Fachbegriffe aufbauen (`content/glossar.md`)

**Französisch — offen, blockiert alles Weitere in dieser Sprache**

Stand 07.09.2026: Keiner der beiden Inhaber führt Französisch als
Beratungssprache. Ricardo und Octavio beraten auf Deutsch, Portugiesisch und
Englisch. Ob A&C Französisch in der bisherigen Form überhaupt anbietet, klärt
Ricardo mit Octavio.

Davon hängt ab:

- die Zeile „Beratung auf Deutsch, Französisch und Portugiesisch" im
  **Fussbereich jeder Seite** — `ui.language.spokenNote`
- der Grund „Beratung auf Deutsch, Französisch und Portugiesisch" bei
  „Weshalb Kundinnen und Kunden mit uns arbeiten" auf der Startseite
- der Abschnitt „Region und Sprachen" auf `/ueber-uns`
- die **gesamte Sprachfassung unter `/fr/`** und damit ein Drittel der
  Übersetzungsarbeit
- die Angabe in der Suchmaschinen-Beschreibung der Startseite

Bis zur Klärung: `/fr/` bleibt auf `published: false`, es entstehen keine
weiteren französischen Texte, und es wird keine Übersetzungsarbeit begonnen.

---

Übersetzungen:

- [ ] FR und PT: Startseite und alle Kernseiten. Bis dahin stehen beide Sprachen
      in `src/i18n/routes.ts` auf `published: false` und sind nicht erreichbar
- [ ] Die FR- und PT-Slugs sind gesetzt, aber noch nicht abgenommen:
      `assurances` / `seguros`, `fiduciaire` / `fiduciaria`, `impots` / `impostos`,
      `a-propos` / `sobre-nos`, `contact` / `contacto`,
      `mentions-legales` / `informacao-legal`,
      `protection-des-donnees` / `protecao-de-dados`
