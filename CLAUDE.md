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
- Adresse: **Bielstrasse 10, 2558 Aegerten**, Kanton Bern
  > **Geändert am 15.09.2026 auf Ricardos ausdrückliche Anweisung** („Die
  > Geschäftsadresse hat geändert und lautet neu"). Bis dahin galt öffentlich
  > Bielstrasse 22, 3250 Lyss, und der Umzug war auf den 01.11.2026
  > vorgemerkt. Die alte Adresse steht an keiner Stelle der Website mehr —
  > Fussbereich, Kontaktseite, Impressum, Datenschutz, Metadaten und
  > Seitentitel sind nachgezogen. Sie wird wie bisher ausschliesslich in
  > `src/lib/company.ts` gepflegt.
  >
  > **Die Postleitzahl ist 2558.** Ricardos Auftrag nannte zuerst dreimal
  > 2556; er hat das am selben Tag korrigiert („2558 Aegertn nicht 2556").
  > Eine Abfrage bei Nominatim löst „Bielstrasse 10, 2558 Aegerten" als
  > bestehendes Gebäude auf und bestätigt die Zahl.
  >
  > **Handelsregister und FINMA sind nicht nachgeführt.** Der Auftrag verlangt
  > die neue Adresse ausdrücklich auch im Impressum; bis zur Nachführung nennt
  > die Website damit eine andere Adresse als das öffentliche Register.
  > `buero` und `sitz` in `company.ts` zeigen seither auf dieselbe Adresse,
  > die Unterscheidung bleibt aber bestehen.
  >
  > **Zwei Stellen ausserhalb dieses Projekts führen weiterhin Lyss**: der
  > Skill `ac-corporate-design` (Fusszeile aller Geschäftsdokumente) und
  > `00_Shared/Stammdaten.md`. `design/ac-corporate-design.tokens.json` ist die
  > Kopie der Skill-Tokens und wird hier nicht von Hand geändert; sie fliesst
  > nicht auf die Website. Dieselbe Lage wie beim Telefonwechsel vom
  > 10.09.2026.
- FINMA-Registernummer Unternehmen: **F01568855**
- Geschäftsführung: **Octavio Nuno Gouveia Andrade**
- Mitinhaber: Ricardo Caires Cerqueira
  > **Getauscht am 15.09.2026 auf Ricardos ausdrückliche Anweisung:**
  > „octavio ist inhaber und Geschäftsführer ich bin nur inhaber". Bis dahin
  > stand hier Ricardo als Geschäftsführer — so auch in einem Auftrag vom
  > selben Tag, der ausdrücklich verlangte, Octavio **nicht** als
  > Geschäftsführer zu bezeichnen. Es gilt die jüngere Anweisung. Die Angabe
  > steht im Impressum unter „Vertretungsberechtigte Personen" und muss mit
  > dem Handelsregistereintrag übereinstimmen; **Ricardo ist darauf
  > hingewiesen.** Der Corporate-Design-Skill führt weiterhin die alte
  > Zuordnung und wird von hier aus nicht geändert.

> **Öffentlich auf der Website heisst er seit dem 15.09.2026 „Ricardo Caires".**
> Auf seine Anweisung: „bitte mein namen auf der ganzen seite auf caires statt
> caires cerqueira wechseln". Die Festlegung vom 04.09.2026, die überall die
> vollständige Form „Ricardo Caires Cerqueira" verlangte, ist damit aufgehoben.
> Gepflegt wird der Name weiterhin in `src/lib/company.ts`.
>
> Der Corporate-Design-Skill und `00_Shared/Stammdaten.md` führen weiterhin die
> lange Form; beide gehören nicht in dieses Projekt — dieselbe Lage wie bei
> Telefonnummer und Adresse.
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

> **Knöpfe sind seit dem 15.09.2026 die eine Ausnahme, und zwar alle.** Ricardo
> hat angeordnet: „alle buttons müssen so sein" — grüne Fläche, weisse Schrift,
> beim Darüberfahren und bei Tastaturfokus navy. `Button` rendert `primary` und
> `akzent` seither gleich; der grün umrandete Link im Wechselhinweis ist
> ebenfalls zum Knopf geworden. Bis dahin war Grün auf einer Fläche die
> begründete Einzelfallausnahme.

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
>
> **Seit dem 11.09.2026 ab 75rem (1200 px) wieder einzeilig**, nach Ricardos
> Referenz: grüne Linie oben, Logo links, Kategorien mittig, dunkler Knopf mit
> Pfeil rechts, unten Haarlinie mit sehr weichem Schatten. Möglich, weil
> „Wissen" aus der Navigation genommen ist — vier Kategorien passen in eine
> Zeile. Der Kopf hat dafür ab 75rem einen eigenen, breiteren Container
> (1440 px); im Standardmass von 1160 px blieben zwischen Logo und Navigation
> nur 23 px Luft. **Zwischen 64rem und 75rem bleibt es zweizeilig** — dort
> passt eine Zeile nachgemessen nicht.

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
| 4 | Ansprechpartner | Zwei Ansprechpartner | hell |
| 5 | Abschluss | Wobei können wir Sie unterstützen? | hell (getönt) |

> **Ebenfalls am 15.09.2026 gestrichen und geändert**, alles auf Ricardos
> Anweisung (`content/source/namensform_de.md`):
>
> - Abschnitt 3 trägt **keine Nummern** mehr (01 bis 06) und **keinen
>   Merksatz** rechts oben. Die Karten werden beim Darüberfahren und bei
>   Tastaturfokus **navy**, die Schrift weiss.
> - „Zur Treuhand" und „Zur Finanzplanung" sind **grüne Knöpfe** wie „Zu den
>   Versicherungen".
> - Bei den Ansprechpartnern steht bei beiden dieselbe Zuständigkeit
>   „Treuhand · Versicherungen"; der Einleitungssatz ist entfallen und
>   „Mehr über uns" ist ein grüner Knopf.
> - Die **Sprungmarken** auf `/versicherungen` und `/finanzplanung` und die
>   **Bereichsnavigation** auf `/treuhand` sind gestrichen.
> - Auf `/finanzplanung` tragen die fünf Situationsfelder **keine Nummern**
>   mehr und werden beim Darüberfahren navy; die drei Nummernkreise der
>   Vorsorge sind **alle grün**.
> - Auf `/ueber-uns` sind drei Einleitungen und die beiden Schwerpunktsätze
>   der Profile entfallen.
> - Die **Brotkrumennavigation ist auf allen Seiten entfernt** („Startseite ›
>   Steuern"). Sie stand über jedem Seitenkopf; `Breadcrumb.tsx` bleibt
>   liegen. Der Weg zurück führt jetzt über Kopfbereich und Fussbereich.
> - **Alle Piktogramme sind am 15.09.2026 ersetzt.** Ricardo hat die ganze
>   Bibliothek überarbeitet geliefert — 98 Motive als SVG und PNG, geordnet
>   nach Seite (`bilder-quelle/piktogramme/`). Die Dateinamen im Projekt sind
>   geblieben; wo die Seite ein SVG zeigte, steht sein SVG, wo sie ein WebP
>   zeigte, sein nach WebP umgewandeltes PNG. **Die zwölf Leistungszeichen
>   der Startseite waren bis dahin Konturen aus `Icon.tsx`** und sind jetzt
>   ebenfalls gelieferte Bilder.
> - **Die Motive stammen aus Lucide** — so nennt es sein `manifest.json`.
>   Die Regel „nichts aus einer Bibliothek" galt für Zeichen, die *wir*
>   sonst hätten erfinden müssen; geliefertes Material geht vor. Lucide steht
>   unter der ISC-Lizenz.
> - Der Abschnitt **Vorsorge auf `/finanzplanung` steht auf hellblauem Grund**
>   (`background_tint`) statt auf Weiss.
> - **Kein Knopf ist unterstrichen.** Ricardos Bannervorlage sah eine
>   Unterstreichung vor; er hat sie am selben Tag streichen lassen.
> - Der Merksatz **„Ein Ansprechpartner. Mehr Überblick. Langfristige
>   Sicherheit."** neben den Leistungen ist entfallen. Damit trägt die
>   Startseite keinen Merksatz mehr.
> - **Drei Flächen sind jetzt einfach hellblau** (`background_tint`), ohne
>   Muster und ohne Hintergrundbild: die Kartenzone der Startseite (die acht
>   organischen Formen aus `Zonenmuster.tsx` sind weg), der Modellabschnitt
>   und die Betreuung auf `/versicherungen` (die gelieferte Datei
>   `wide_minimal_abstract_background_design_a_clean` steht auf keiner Seite
>   mehr). Beide Dateien bleiben liegen.
> - Die **Schlusszeile des Modellabschnitts** ist entfallen — „A&C Consulting
>   GmbH" links, „Persönlich. Unabhängig. An Ihrer Seite." rechts. Der Zusatz
>   steht damit nur noch unter den häufigen Fragen.
> - **Die Ergebniskarte und die Nutzenleiste sind eingefasst** (16.09.2026):
>   „Die beste Lösung für Sie" steht als weisse Karte mit feinem Rand und
>   12 px Radius mittig unter der Klammer — nachgemessen 313 px Abstand nach
>   links wie nach rechts. Die Nutzenleiste hat statt zweier Haarlinien einen
>   Rand rundherum und dieselben abgerundeten Ecken.

> **Am 15.09.2026 von sieben auf fünf verkürzt** auf Ricardos Anweisung, per
> Screenshot. Weggefallen sind **„Eine Stelle für Ihre Administration"** — die
> Kette Gründung → Buchhaltung → Lohn → Versicherungen → Steuern mit dem
> Bürobild — und **„So beginnt die Zusammenarbeit"** mit den vier Schritten
> auf der Zeitachse. Ihr Wortlaut steht unverändert in
> `content/source/startseite_de.md`.
>
> **Damit ist auch der letzte grüne Knopf aus der Seitenmitte verschwunden**
> („Mehr über unseren Ansatz"); der einzige Handlungsknopf steht im
> Kopfbereich und im Abschluss. Die Bausteine `Ablauf` und `Schrittbild`
> bleiben liegen — `StepList` trägt denselben Ablauf weiter auf den
> Leistungsseiten. Ricardo ist darauf hingewiesen.
>
> **Im Seitenkopf ist der Textlink „Unsere Leistungen" entfallen und der Knopf
> „Erstgespräch anfragen" ist grün** (`Button variant="akzent"`), beides am
> 15.09.2026 auf Ricardos Anweisung. Der Kopf trägt damit genau einen Weg
> weiter.

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

**Der Abschluss, seit dem 15.09.2026 nach Ricardos HTML-Vorlage**
(`content/source/abschluss_kontakt_de.md`), im eigenen Baustein
`src/components/blocks/Kontaktabschluss.tsx` — **nicht** `CTASection`, der am
Fuss von `/kontakt` unverändert bleibt. Links Vorzeile „Direkt und
persönlich", der Titel, ein Satz und der grüne Knopf; rechts zwei weisse,
**ganz anklickbare** Felder für Telefon und E-Mail mit den gelieferten
Piktogrammen. Ab 47.5rem nebeneinander, darunter untereinander. Telefon und
E-Mail kommen aus `src/lib/company.ts`, das Ziel des Knopfes über `path()`.

Vier Punkte, die man wissen muss:

- **Die Überschrift steht jetzt zweimal auf der Startseite.** „Wobei können
  wir Sie unterstützen?" ist seit dem 09.09.2026 auch die Überschrift von
  Abschnitt 3. Die Vorlage setzt denselben Satz an den Schluss. **Ricardo ist
  darauf hingewiesen.**
- **Der Grund ist hellblau** (`background_tint`), wie die Vorlage ihn zeigt.
  Darüber stehen die Ansprechpartner auf `background_light` — zwei nahe Töne
  hintereinander. Genau deswegen stand der Abschluss seit dem 10.09.2026
  bewusst auf Weiss. Die Vorlage gibt den Ton ausdrücklich vor; **Ricardo ist
  darauf hingewiesen.**
- **Die Hintergrundgrafik ist entfallen**, wie der Auftrag es verlangt („keine
  Hintergrundgrafik, Verläufe oder Schatten"). `03_kontakt_hintergrundmuster.webp`
  bleibt liegen, steht aber auf keiner Seite mehr — dasselbe gilt für die
  bisherigen Symbole `01_telefon.webp` und `02_email.webp`.
- **Darüberfahren und Tastaturfokus zeigen denselben Zustand:** die ganze
  Kachel wird navy, Beschriftung, Angabe und Pfeil weiss (9.4:1). **Der Kreis
  hinter dem Piktogramm bleibt hell** — das gelieferte Zeichen ist grün, und
  Grün auf Navy trägt nicht (1.4:1), auf dem hellen Kreis dagegen 4.9:1.
  Dieselbe Lösung wie bei den Piktogrammen auf `/ueber-uns`.

**Der Abschluss sieht auf der Startseite anders aus als auf `/kontakt`**, das
weiterhin `CTASection` trägt. Das war nicht so gewollt, sondern die Folge
davon, dass die Startseite als Erste umgebaut wurde. Bekommt `/kontakt` seinen
Umbau, gehört das wieder zusammengeführt.

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

Stand 14.09.2026: **vier** offene Angaben — der Link auf den
FINMA-Registereintrag im Impressum und drei Veröffentlichungsdaten im
Wissensbereich, der nicht veröffentlicht ist. Die Fristen auf `/steuern`
standen zwischenzeitlich ebenfalls offen; Ricardo hat sie am 14.09.2026
bestätigt.

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
> **Zur Vergütung steht auf der Seite nur noch die häufige Frage „Kostet mich
> die Beratung etwas?".** Ihre Antwort sagt, dass A&C über die Courtage
> entschädigt wird und das Maklermandat für die Kundschaft kostenlos ist. Der
> ausführliche Abschnitt „Wie wir entschädigt werden" ist entfallen. Eine
> frühere Fassung dieser Notiz behauptete, die Aussage stehe nirgends mehr —
> das war falsch und ist am 11.09.2026 korrigiert.
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
> **Der Abschnitt heisst seit dem 16.09.2026 „Auch nach dem Abschluss für Sie
> da."** — Ricardos Wortlaut („BITTE DIESE FORMULIERUNG EINSETZEN"). Er
> ersetzt „Nach dem Abschluss hört es nicht auf" aus
> `content/source/ergaenzungen_de.md`; der alte Wortlaut steht dort
> unverändert weiter.
>
> **Der Leadtext ist am 16.09.2026 auf Ricardos Anweisung entfallen** — die
> drei Absätze rechts neben dem Titel („Die meisten Policen liegen jahrelang
> unangetastet in einem Ordner …"). Der Kopf läuft seither einspaltig; der
> Wortlaut steht unverändert in `content/source/schritt4_fassung2_de.md`.
> **Die vier Karten werden beim Darüberfahren navy**, Überschrift und Text
> weiss (9.4:1) — wie die Ausgangslagen auf der Startseite. Das Piktogramm
> bringt seinen hellen Kreis mit und bleibt, wie es ist.
>
> Der Anker `betreuung` bleibt; die Kategoriezeile, die vier Karten mit
> geliefertem Symbol und die breite Schlusskarte stehen weiter da.
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
>
> Noch am selben Tag nachgeschärft: **Das Schildsymbol über der Partnerkarte
> ist entfallen**, und aus der Überschrift „Wir begleiten Sie persönlich" ist
> ein Hinweis geworden — „Für die Schadenmeldung auf Ihre Gesellschaft
> klicken.", grün unterstrichen wie die Kontaktangaben im Abschluss der
> Startseite. Die Bewegung beim Darüberfahren ist verstärkt; sie bleibt hinter
> `prefers-reduced-motion` abschaltbar.

> **„Häufige Fragen" ist seit dem 11.09.2026 ein eigener Baustein**
> (`src/components/blocks/Fragen.tsx`), nach Ricardos Referenzgrafik: grüne
> Kategoriezeile „Gut zu wissen", grosser Titel, zwei Einleitungssätze, eine
> zentrierte weisse Karte mit den Fragen, darunter der Zusatz zwischen zwei
> Linien. **Fragen und Antworten sind unverändert.** Seit dem 11.09.2026
> tragen alle Seiten mit Fragen diesen Baustein — siehe `/treuhand`.
>
> **`<details>` statt Knopf mit `aria-expanded`.** Der Auftrag nannte Knöpfe;
> `<details>` bringt dieselbe Zugänglichkeit ohne JavaScript mit, und die
> Hausordnung verlangt, dass Inhalte ohne Skript funktionieren. Das Aufklappen
> ist animiert, wo der Browser es kann, und öffnet sonst sofort.
>
> **„Persönlich. Unabhängig. An Ihrer Seite." steht damit zweimal auf der
> Seite** — im Modellabschnitt und unter den Fragen. Ricardo hat es hier
> ausdrücklich verlangt und ist darauf hingewiesen.

Kein Prämienrechner, keine Vergleichstabellen mit Versicherernamen.

#### Seitenkopf — seit dem 15.09.2026 auf allen Seiten derselbe

Ricardo hat eine Aufnahme geliefert und angeordnet: „bitte bei allen seiten
den Hintergrund des Banners mit diesem Bild ersetzen die überschiften sollen
bleiben". Der Seitenkopf trägt seither auf **jeder** Seite dasselbe Bild —
Blick über das Seeland bei Dämmerung, mit der hellen A&C-Bildmarke oben
rechts. Dazu die HTML-Vorlage `bilder-quelle/seitenkopf_banner/vorlage.html`.

- **Ein Baustein für alle.** `Hero.tsx` trägt jetzt jede Inhaltsseite. Der
  zweispaltige `BildHero` von `/versicherungen` ist damit nicht mehr im
  Einsatz; **Titel, Vorzeile, Satz, der grüne Knopf und die drei Belege
  bleiben** und stehen im neuen Kopf. Die Komponente und ihre Illustration
  `wide_cinematic_vector_3d_illustration_style_insu.webp` bleiben liegen.
- **Kopfhöhe 560 bis 760 px**, wie die Vorlage sie angibt. Vorher trug der
  Kopf kein Bild und war 304 bis 384 px flach.
- **`PAGE_VISUAL` ist entfallen.** Die Platzhalterflächen mit den
  Regieanweisungen („BERATUNGSSITUATION", „Aufnahme 1 der Shootingliste")
  gibt es nicht mehr — an ihrer Stelle steht das Bild.
- **Die Startseite trägt dieselbe Aufnahme.** Ihr bisheriges Bild
  `startseite-seeland.webp` hatte Überschrift, Strich und Vorzeile
  **eingebrannt**; darum versteckte `StartHero` ab 40rem den HTML-Text und
  setzte den Knopf prozentual unter den ersten Buchstaben. Die neue Aufnahme
  trägt keinen Text — die ganze Mechanik ist ersatzlos gestrichen, und
  Überschrift, Vorzeile, Satz und Knopf stehen auf jeder Breite als Text da.
  Die alte Datei bleibt liegen.
- **Die Deckung ist stärker als in der Vorlage: 42 statt 32 Prozent**
  (mobil 52 statt 46), dazu ein Verlauf über die volle Höhe. Die Vorlage
  trägt eine einzelne grosse Überschrift; unser Kopf trägt zusätzlich
  Vorzeile, Fliesstext und Knopf, und die Vorzeile steht bei 74 Prozent der
  Kopfhöhe — über dem hellsten Teil des Himmels. Nachgemessen ergaben
  32 Prozent dort **3.1:1**. Mit 42 Prozent sind es 6.9:1 an der Vorzeile,
  9.4:1 an der Überschrift und 10.3:1 am Fliesstext.
- **`alt=""`.** Dasselbe Bild auf zehn Seiten zu beschreiben wäre für
  Vorlesewerkzeuge Rauschen; die Aussage der Seite steht in der Überschrift.
  Die Startseite behält ihren Alt-Text, dort ist es das eine Kopfbild.
- **`/ueber-uns` hat den Banner nicht.** Die Seite läuft über die eigene
  Vorlage, und ihr Einstieg ist am selben Tag nach Ricardos Vorlage als
  heller zweispaltiger Block gebaut — mit Pillen, Bildfläche und grünem
  Eckmarker. Dort gibt es keinen dunklen Bannergrund zu ersetzen. **Ricardo
  ist darauf hingewiesen.**

> **Seit dem 15.09.2026 trägt jede veröffentlichte Seite einen Banner**
> (`src/components/blocks/Banner.tsx`, Texte in
> `content/source/banner_serie_de.md`). Ricardo hat dafür zwölf Vorlagen
> geliefert, eine je Seite — nach einem ersten Anlauf mit dreizehn Bannern,
> der auch sechs Abschnitte erfasste und noch am selben Tag zurückgenommen
> wurde.
>
> | Seite | Themenzeile | Überschrift |
> |---|---|---|
> | `/de/` | VERSICHERUNGEN · TREUHAND | Verwurzelt im Seeland. Blick auf mehr. |
> | `/versicherungen` | VERSICHERUNGEN | Versicherungen für Privatpersonen und Unternehmen |
> | `/treuhand` | TREUHAND | Klar geführt. Persönlich begleitet. |
> | `/treuhand/buchhaltung` | BUCHHALTUNG | Zahlen im Griff. Zeit fürs Geschäft. |
> | `/treuhand/treuhaender-wechseln` | TREUHÄNDERWECHSEL | Klar wechseln. Sicher weiter. |
> | `/steuern` | STEUERN | Klar deklariert. Sicher geplant. |
> | `/firmengruendung` | UNTERNEHMENSGRÜNDUNG | Klar gründen. Sicher starten. |
> | `/finanzplanung` | FINANZPLANUNG | Überblick. Spielraum. Sicherheit. |
> | `/ueber-uns` | ÜBER A&C | Persönlich. Verlässlich. Nah. |
> | `/kontakt` | KONTAKT | Ihr Anliegen. Unser nächster Schritt. |
> | `/impressum` | IMPRESSUM | Angaben. Verantwortung. Transparenz. |
> | `/datenschutz` | DATENSCHUTZ | Ihre Daten. Vertraulich geschützt. |
>
> - **Ein Baustein, ein Satz Masse**, aus `banner-shared.css`: Innenbreite
>   1360 px, Polster 48 bis 88 px, Textblock 690 px oder 54 Prozent,
>   Zeilenhöhe 0.98, grüner Strich 54 x 4 px. Höhe, Ausschnitt und Anordnung
>   sind nicht einstellbar.
> - **Zwei Änderungen daran, am 15.09.2026 auf Ricardos Anweisung** („das
>   Stadtbild muss sichtbar sein und schrift grösser machen"):
>   - **Der Banner hat das Seitenverhältnis der Aufnahme**, 1774 : 887 und
>     damit glatt 2 : 1. Bei `cover` wird sie so **gar nicht beschnitten** —
>     nachgemessen null Pixel waagrecht wie senkrecht. See, Himmel, Bergmarke
>     **und die Stadtlichter unten links** stehen vollständig da. Die Fassung
>     davor war 360 bis 600 px hoch und schnitt genau den unteren Streifen
>     weg, in dem die Stadt liegt.
>   - **Die Schrift ist eine Stufe grösser**: Überschrift 52 bis 104 statt 44
>     bis 76 px, Themenzeile 15 statt 13 px.
> - **Alle zwölf sind damit exakt gleich gross** — nachgemessen 1410 x 705 px
>   bei gleicher Textposition und gleicher Schriftgrösse. Vorher wuchs
>   `/versicherungen` als einzige Seite über die anderen hinaus, weil ihre
>   Überschrift mehr Zeilen braucht; mit dem festen Seitenverhältnis liegen
>   auch ihre fünf Zeilen samt Knopf innerhalb des Banners (562 von 713 px).
> - **Ohne Abdunklung** — kein Verlauf, keine farbige Schicht, kein Schatten.
>   Nachgemessen trägt die weisse Schrift trotzdem: Themenzeile 8.3:1, die
>   Zeilen der Überschrift 7.7 bis 15.6:1 im Flächenmittel.
> - **Auf schmalen Geräten** greift eine Mindesthöhe von 30rem — bei 2 : 1
>   wäre der Banner dort 187 px hoch. `cover` schneidet dafür seitlich; der
>   Ausschnitt steht auf `28%`, damit die Stadtlichter im Bild bleiben.
> - **Keine Abschnittsbanner.** Die sechs Vorlagen für Rechtsform,
>   Wechselablauf, Vorsorge, Arbeitsweise, Inhaber und Standort bleiben
>   liegen; die Überschriften dieser Abschnitte sind weiterhin Text.
> - **Der Fliesstext im Seitenkopf ist überall entfallen**, und zwölf
>   Seitentitel sind ersetzt. Der Wortlaut bleibt in den Quelldateien; die
>   Angaben in `meta.title` sind unverändert.
> - **Der Einstieg von `/ueber-uns` ist entfallen** — der zweispaltige Block
>   mit Pillen, Bildfläche und grünem Eckmarker. **Damit hat die gemeinsame
>   Aufnahme von Ricardo und Octavio auf der Seite keinen Platz mehr**; der
>   offene Punkt in Abschnitt 10 ist gegenstandslos, solange kein neuer Ort
>   dafür bestimmt ist. **Ricardo ist darauf hingewiesen.**
> - **`StartHero.tsx` und `BildHero.tsx` sind nicht mehr im Einsatz** und
>   bleiben liegen. `Hero.tsx` trägt keine Seite mehr, bleibt aber für den
>   Fall, dass eine Seite ohne Banner dazukommt.
> - **Der Knopf ist die dritte Knopfform im Projekt** und kommt nur im Banner
>   vor: A&C-Grün, weisse fette unterstrichene Schrift, beim Zeigen und bei
>   Tastaturfokus Navy, weisser Fokusring, Ziel immer `/de/kontakt/`.

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

> **„Was wir übernehmen" ist seit dem 16.09.2026 ein Kachelraster aus sechs
> gleich grossen Kacheln**, nach Ricardos Designreferenz: Piktogramm auf
> hellblauem Kreis, Überschrift in Source Serif, kurzer grüner Strich, drei
> Stichpunkte. Desktop drei Spalten und zwei Reihen (ab 64rem), Tablet zwei
> (ab 40rem), Telefon eine. Darunter der Hinweis „Sie behalten den Überblick:
> Auswertungen und Abschlüsse erhalten Sie zu den gemeinsam vereinbarten
> Terminen." als weisse Leiste mit grünem Marker. **Der Grund ist hellblau**
> (`background_tint`), auf seine Vorgabe — `PageBlocks` setzt dafür
> `leistungenFlaeche` statt der zugewiesenen Fläche, wie beim Vorgehen
> darunter; der Wechsel der Abschnitte darunter verschiebt sich nicht.
> Nachgemessen bei 1024 px: alle sechs Kacheln 301 x 385 px, bei 768 px
> 338 x 346, bei 375 px 335 x 346 — exakt gleich gross, wie der Auftrag es
> verlangt.
>
> **Beim Darüberfahren und bei Tastaturfokus wird die ganze Kachel navy**,
> Rahmen navy, Überschrift und Stichpunkte weiss (11.6:1), die Kachel drei
> Pixel angehoben. Angehoben wird mit `transform` — nachgemessen verschiebt
> sich keine Nachbarkachel um einen Pixel. Der grüne Strich und die grünen
> Aufzählungspunkte bleiben grün, das Piktogramm bleibt unverändert auf seinem
> hellblauen Kreis. Keine Schatten, keine Verläufe, keine weiteren Farben.
> Abgeschaltet unter `prefers-reduced-motion: reduce`.
>
> **Grün auf Navy steht bei 2.1:1.** Das ist für Text zu wenig und für eine
> Marke genug: Strich und Aufzählungspunkte tragen keinen Inhalt, der Text
> daneben steht in Weiss. Ricardo hat beides ausdrücklich verlangt.
>
> **Der Rahmen `#CCD6DF` ist ein neuer Token** (`border_soft` in
> `design/website.tokens.json`). Er stand so im Auftrag und liegt zwischen
> `border_light` (`#CCCCCC`, zu grau) und `border_tint` (`#B0C4DE`, zu
> kräftig). Hex-Werte stehen nie in einer Komponente.
>
> **Aus sieben Karten sind sechs Kacheln geworden.** Titel und Stichpunkte
> stehen wörtlich in seinem Auftrag
> (`content/source/treuhand_leistungen_de.md`). Die sieben Kartensätze vom
> 11.09.2026 sind nicht widerrufen — sie stehen nur nicht mehr auf der Seite.
> **„Firmengründung" hat kein Gegenstück** unter den sechs Kacheln;
> `/firmengruendung` ist von `/treuhand` damit nicht mehr verlinkt. Erreichbar
> bleibt die Seite über den Fussbereich und den Geschäftsfall „Ich gründe ein
> Unternehmen" auf der Startseite. Ricardo ist darauf hingewiesen.
>
> **Verlinkt bleibt, was veröffentlicht ist:** Finanzbuchhaltung zeigt auf
> `/treuhand/buchhaltung`, Steuerberatung auf `/steuern#firmen`. Abschlüsse,
> Lohn und Mehrwertsteuer werden von selbst zu Links, sobald ihre Seiten auf
> `published: true` stehen; Debitoren & Kreditoren hat keine eigene Seite und
> bleibt ohne Pfeil. Der Link auf der Überschrift ist zugleich der Grund,
> weshalb `:focus-within` greift.
>
> **Die sechs Piktogramme sind die gelieferten SVG**, unverändert und ohne
> Umfärbung, auch im Zustand beim Darüberfahren: `01_buchhaltung`,
> `05_unternehmensadministration`, `04_jahresabschluss`, `02_lohnbuchhaltung`,
> `03_mehrwertsteuer`, `07_steuern_firmen`. **`06_firmengruendung` steht auf
> dieser Seite nicht mehr**, bleibt aber liegen.
>
> **Die Überschrift lautet weiterhin „Was wir übernehmen".** Ricardos Auftrag
> nennt den Abschnitt „Was wir für Sie übernehmen" — so heisst Abschnitt 2 der
> Startseite. Ob das der neue Titel dieses Abschnitts sein soll, entscheidet
> er; eine Leistungsüberschrift wird nicht nebenbei geändert.
>
> Die folgende Notiz beschreibt die Fassung vom 11.09.2026.

> **„Was wir übernehmen" ist seit dem 11.09.2026 ein Kartenraster**
> (`src/components/blocks/Leistungen.tsx`), nach Ricardos Referenzgrafik:
> Kategoriezeile „Unsere Leistungen", Titel, Einleitung, sieben weisse Karten
> in zwei Spalten, je mit geliefertem Symbol. Zwei Spalten erst ab 75rem
> (1200 px); bei 1024 px lief der Satz zur Buchhaltung in der halben Breite auf
> sechs Zeilen. Darunter eine Karte je Reihe. Vorher ein `subsections`-Block
> aus reinem Text. **Die Kartentexte sind unverändert**; neu sind
> Kategoriezeile und Einleitung (`content/source/treuhand_leistungen_de.md`).
> Der Anker `leistungen` bleibt.
>
> **Verlinkt ist nur, was veröffentlicht ist:** Buchhaltung, Firmengründung und
> Steuern (dort der Abschnitt `#firmen`). Lohnbuchhaltung, Mehrwertsteuer und
> Jahresabschluss werden von selbst zu Links, sobald ihre Seiten auf
> `published: true` stehen. Unternehmensadministration hat keine eigene Seite
> und bleibt ohne Pfeil. Die Referenz zeigt an allen sieben Karten einen Pfeil —
> ein Pfeil ohne Ziel wäre ein Fake-Link, und den verbietet der Auftrag.
>
> **Der Abschnitt bleibt in der Flächenfolge** und steht darum auf Weiss, nicht
> auf dem hellen Grund der Referenz: Direkt darunter folgt „Für wen wir
> arbeiten" auf `background_light`, und zwei fast gleiche Töne hintereinander
> hätten die Seite gestreift. Die Karten tragen dafür Kontur und einen sehr
> weichen Schatten — dieselbe kleine Ausnahme von „keine Schlagschatten" wie
> bei den Leistungskarten der Startseite.
>
> **Die sieben Symbole sind SVG und stehen unverändert da.** Sie bringen eigene
> Farbwerte mit — ein Navy nahe `navy_deep` und ein helleres Grün als
> `accent_green`. Auf Ricardos ausdrückliche Anweisung werden sie nicht
> umgefärbt. `07_steuern_firmen` setzt das Paragrafenzeichen als Schrift
> (Arial); auf Geräten ohne Arial nimmt der Browser eine ähnliche.

> **Fünf Abschnitte sind am 11.09.2026 auf Ricardos Anweisung entfallen:**
> „Für wen wir arbeiten", „Wie wir arbeiten", „Klare Kosten vor Beginn",
> „Was dazugehört" und der Abschluss **„Reden wir über Ihre Administration"**.
> Ihr Wortlaut steht unverändert unter `content/source/` und ist nicht
> widerrufen — er steht nur nicht mehr auf der Seite. Keiner der Anker wurde
> von anderswo angesprungen.
>
> Die Seite läuft seither: Seitenkopf → Bereichsnavigation → „Was wir
> übernehmen" → Ablauf → Wechsel-Hinweis → häufige Fragen. **Sie hat damit wie
> `/versicherungen` keinen Abschluss mehr**; Handlungsknöpfe stehen nur noch im
> Seitenkopf und im Kopfbereich. Ricardo ist darauf hingewiesen.
>
> Zwei Folgen, auf die Ricardo hingewiesen ist:
>
> - **Wovon die Kosten abhängen, steht nicht mehr auf der Seite.** Abschnitt 9,
>   „Preisdarstellung", verlangt, zu erklären, wovon der Aufwand abhängt. Der
>   Ablauf sagt noch, dass der Umfang samt Kosten vor Beginn schriftlich
>   festgehalten wird.
> - **Die Verweise auf Versicherungen und Steuern** aus „Was dazugehört" sind
>   weg. Steuern bleibt über die Bereichsnavigation und die Karte „Steuern für
>   Firmen" erreichbar, Versicherungen nur noch über den Kopfbereich.
>
> Dass Daten in der Schweiz verarbeitet werden, steht weiterhin in den
> häufigen Fragen.

> **„So läuft eine Zusammenarbeit an" ist seit dem 11.09.2026 ein eigener
> Baustein** (`src/components/blocks/Vorgehen.tsx`), nach Ricardos
> Referenzgrafik: Kategoriezeile „Unser Vorgehen", Titel, ein Satz, darunter
> vier weisse Karten mit gelieferter Nummer, Titel, kurzem grünem Strich und
> Text; zwischen den Karten eine feine Linie mit grünem Punkt. `StepList`
> bleibt für die übrigen Seiten unverändert. **Titel und Schritte sind
> unverändert.**
>
> **Kategoriezeile und Satz** („Klar strukturiert, persönlich begleitet – von
> Anfang an.") stammen **aus der Referenzgrafik**, nicht aus einem
> Auftragstext (`content/source/treuhand_vorgehen_de.md`). Ricardo ist darauf
> hingewiesen.
>
> **Der Grund ist hellblau** (`background_tint`), auf Ricardos Anweisung —
> derselbe Ton wie „So beginnt die Zusammenarbeit" auf der Startseite. Der
> Abschnitt zählt im Flächenwechsel weiter mit; die Abschnitte darunter
> behalten ihren Grund.
>
> Vier Karten in einer Reihe ab 75rem (1200 px), darunter zwei, auf dem
> Telefon eine. Die Verbindungslinien stehen nur in der Viererreihe. Die
> Nummern sind SVG mit Georgia als Schrift; fehlt Georgia, nimmt der Browser
> eine ähnliche Serifenschrift.
>
> **Seit dem 16.09.2026 werden die vier Karten beim Darüberfahren navy**,
> Überschrift und Text weiss (9.4:1). Nummernkreis und grüner Strich bringen
> ihre Farbe selbst mit und bleiben.

> **„Sie haben bereits einen Treuhänder?" ist seit dem 11.09.2026 ein eigener
> Baustein** (`src/components/blocks/WechselHinweis.tsx`), nach Ricardos
> Referenzgrafik: links Kategoriezeile „Treuhand wechseln", Titel, Absatz und
> ein grün umrandeter Link auf `/treuhand/treuhaender-wechseln`; rechts eine
> Karte mit drei Schritten — gelieferte Nummer, geliefertes Symbol, Titel und
> Satz, die Nummern senkrecht verbunden. **Titel, Absatz und Link sind
> unverändert.** Der Link ist kein `Button`; die allgemeinen Knöpfe bleiben
> unberührt.
>
> **Kategoriezeile und die drei Schritte stammen aus der Referenzgrafik**
> (`content/source/treuhand_wechsel_de.md`). Ricardo ist auf den Ton
> hingewiesen: „Reibungslos", „idealen Zeitpunkt" und „sichere Übernahme"
> klingen verbindlicher als der Absatz daneben, der vom „geeigneten Zeitpunkt"
> spricht.
>
> **Der Grund bleibt weiss** (Flächenfolge): Darüber steht der Ablauf
> hellblau, darunter die Fragen auf `background_light`. Die Referenz zeigt
> dahinter feine Bögen — dafür lag keine Datei bei, nachgezeichnet wird nichts.
>
> Die Symbole und Nummern tragen ein Grün, das weder `accent_green` noch dem
> Grün der Leistungssymbole entspricht. Auf Ricardos Regel hin unverändert.
>
> **Seit dem 16.09.2026 hebt sich der einzelne Schritt beim Darüberfahren
> ab** — ein sehr leichter Grund in Navy, gerade genug, um ihn von den beiden
> anderen zu trennen. Die Schrift bleibt dunkel: Ein voller Navy-Grund liesse
> den hellen Kreis von Nummer und Symbol mitten im Text stehen.
>
> **Das Handschlag-Symbol ist seit dem 11.09.2026 Ricardos zweite Lieferung**,
> ein PNG statt des SVG (`03_handschlag.webp`). Sein Kreis nimmt 72.8 Prozent
> der Datei ein, bei den beiden anderen Symbolen 62.5; der Baustein rechnet die
> Grösse je Datei um, damit alle drei Kreise gleich gross stehen.
> `03_reibungslos_uebernehmen.svg` bleibt liegen, steht aber auf keiner Seite
> mehr.

> **„Häufige Fragen" auf `/treuhand` läuft seit dem 11.09.2026 über denselben
> Baustein wie auf `/versicherungen`** (`fragen`), auf Ricardos Anweisung
> „gleich wie bei Versicherungen": Kategoriezeile „Gut zu wissen", zwei
> Einleitungssätze, weisse Karte, Zusatz darunter, hellblauer Grund. **Fragen
> und Antworten sind unverändert.** Kategoriezeile, Einleitung und Zusatz
> sind wörtlich die der Versicherungsseite.
>
> Damit steht „Persönlich. Unabhängig. An Ihrer Seite." jetzt auch auf
> `/treuhand`.

> **Seit dem 11.09.2026 tragen alle Seiten mit häufigen Fragen denselben
> Baustein** (`src/components/blocks/Fragen.tsx`), auf Ricardos Anweisung
> „häufige Fragen überall gleich designen": `/versicherungen`, `/treuhand`,
> `/treuhand/buchhaltung`, `/treuhand/treuhaender-wechseln`, `/steuern` und
> `/firmengruendung`. Überall dieselbe Kategoriezeile „Gut zu wissen", dieselben
> zwei Einleitungssätze und derselbe Zusatz „Persönlich. Unabhängig. An Ihrer
> Seite." — wörtlich die der Versicherungsseite. **Fragen und Antworten sind
> auf keiner Seite verändert.** Der allgemeine `Accordion` steht nur noch im
> Styleguide.
>
> Auf den Blockseiten ist der Block `fragen`, in Vorlage B der Baustein direkt
> in der Vorlage; Kategoriezeile, Einleitung und Zusatz stehen dort im
> optionalen Feld `fragenZusatz` je Sprache. Fehlt es (FR, PT), steht nur der
> Titel über der Karte.

> **`/treuhand/buchhaltung`: „Was wir übernehmen" und „So läuft die
> Zusammenarbeit" seit dem 11.09.2026 nach Ricardos Referenzgrafik**, in
> Vorlage B (`src/components/templates/Leistungsseite.tsx`). Beide Abschnitte
> liegen auf einer gemeinsamen Fläche mit dem gelieferten Hintergrund (feine
> grüne Bögen oben rechts und unten links); der Ablauf ist eine Spur blauer
> abgesetzt. Leistungen als drei weisse Karten mit geliefertem Symbol, Titel
> und grünem Strich; Ablauf als vier Karten mit Nummernkreis halb über der
> Kante, gepunktet verbunden, Symbol, Titel und Text. Die Nummernkreise sind
> die Dateien, die Ricardo für den Ablauf auf `/treuhand` geliefert hat.
>
> Die Fläche hat einen **eigenen, breiteren Container (1344 px)** — dieselbe
> Ausnahme wie beim Modellabschnitt auf `/versicherungen`. Im Standardmass
> brachen die Titel der Karten eine Zeile tiefer als in der Vorlage.
>
> Drei Punkte, auf die Ricardo hingewiesen ist:
>
> - **Die zweite Leistung heisst weiterhin „Abstimmung der Konten".** Die
>   Referenzgrafik zeigt dort „Jahresabschluss". Das ist eine
>   Leistungsbeschreibung und wird nicht ohne ausdrückliche Anweisung
>   geändert (Abschnitt 8). Das Symbol der Grafik — das Balkendiagramm — steht
>   an dieser Stelle.
> - **Die zwei Zusätze der Grafik sind nicht übernommen** („Zuverlässig.
>   Strukturiert. An Ihrer Seite.", „Klar. Persönlich. Effizient.") und auch
>   nicht die Marke „A&C Consulting" unten rechts.
> - **Die fünf Symbole sind auf ihren Kreis zugeschnitten.** Ricardos Dateien
>   trugen den Kreis in verschiedenen Grössen (69 bis 82 Prozent der Datei)
>   und lose halbtransparente Pixel daneben. Zugeschnitten ist nur der
>   transparente Rand; Kreis und Zeichen sind unverändert.
>
> Vorlage B gilt heute nur für diese Seite. Die neuen Felder `bild` und
> `hintergrund` sind optional; ohne sie fällt die Vorlage auf die Zeichen aus
> `Icon.tsx` und den hellen Grundton zurück.
>
> **Der Abschnitt „So läuft die Zusammenarbeit" ist am 16.09.2026 entfallen**,
> auf Ricardos Anweisung. Die Seite trägt seither Seitenkopf, „Was wir
> übernehmen", „Was Sie uns liefern" und die häufigen Fragen. Der Wortlaut
> der vier Schritte steht unverändert in `src/content/pages/buchhaltung/`;
> die Nummernkreise `01_schritt_01` bis `04_schritt_04` stehen damit auf
> `/treuhand/buchhaltung` auf keiner Seite mehr — auf `/treuhand` tragen sie
> weiterhin den Ablauf.
>
> **Der Abschluss „Reden wir über Ihre Administration" ist auf
> `/treuhand/buchhaltung` am 11.09.2026 entfallen**, auf Ricardos Anweisung.
> Die Seite endet damit — wie `/versicherungen` und `/treuhand` — mit den
> häufigen Fragen. Der Wortlaut steht unverändert in
> `content/source/schritt4_fassung2_de.md`. In Vorlage B ist der Abschluss
> seither optional (`cta?`); FR und PT tragen ihn ebenfalls nicht mehr, damit
> alle drei Sprachfassungen dieselbe Struktur haben. Der Knopf im Seitenkopf
> heisst weiterhin „Erstgespräch anfragen" — er nimmt jetzt die Beschriftung
> der Kopfzeile (`ui.cta`).

> **„Was Sie uns liefern" auf `/treuhand/buchhaltung` seit dem 11.09.2026 nach
> Ricardos Referenzgrafik** (Vorlage B, Abschnitt 4): links Titel mit grünem
> Strich und Einleitung, rechts die Aufzählung als weisse Karte mit Titel,
> gelieferten Symbolen und feinen Trennlinien, unten der Nachsatz als Leiste
> mit Laptop-Symbol. Gelieferter Hintergrund, derselbe breite Container wie
> die Fläche darüber.
>
> **Der Wortlaut ist unverändert.** Neu ist nur die Form: „In der Regel
> brauchen wir von Ihnen:" steht als Kartentitel (`listenTitel`) statt als
> zweiter Absatz. Die Referenzgrafik zeigt durchgehend andere Formulierungen —
> etwa „Bank- und Postkontoauszüge", „Rechnungen an Ihre Kunden",
> „Eingangsrechnungen und Quittungen", „Belege zu Spesen, Barzahlungen und
> Einkäufen", „Ein- und Austritte, Lohnänderungen und Absenzen" und einen
> anderen Einleitungs- und Schlusssatz. Sie sind **nicht** übernommen; was
> A&C von Kundinnen und Kunden verlangt, ändert sich nur auf ausdrückliche
> Anweisung. Ricardo ist darauf hingewiesen.
>
> Die gelieferte Trennlinie (eigene Datei) steht als Rahmen im Stylesheet in
> `border_tint`, nicht als Bild; sie war farblich nahezu dieser Token.

### /treuhand/treuhaender-wechseln

> **„Was einen Wechsel auslösen kann" ist seit dem 14.09.2026 ein eigener
> Baustein** (`src/components/blocks/Themenkarten.tsx`), nach Ricardos
> HTML-Vorlage: Kategoriezeile „Zusammenarbeit neu ausrichten", Titel, ein
> Satz, darunter **drei gleich grosse Karten** — Betreuung, Überblick,
> Entwicklung — mit dem gelieferten Piktogramm oben, kleiner Versalzeile,
> Überschrift und Text. Darunter eine Leiste mit einem Satz und dem grünen
> Knopf „Situation besprechen". `grid-auto-rows: 1fr` hält die Karten auf
> gleicher Höhe. Der Anker `gruende` bleibt; der Abschnitt bringt seine
> Fläche selbst mit und zählt beim Flächenwechsel nicht mit.
>
> **Die Überschrift ist neu** — der Abschnitt hiess „Weshalb Mandate
> wechseln". **Der Wortlaut stammt aus der Vorlage**
> (`content/source/wechsel_gruende_de.md`) und ersetzt die Aufzählung mit
> sechs Punkten aus `schritt4_fassung2_de.md`. Die drei Karten fassen dieselben
> sechs Punkte zu drei Themen zusammen.
>
> **Der Knopf ist grün** (`Button variant="akzent"`), auf Ricardos Vorgabe.
> Sonst gilt „Grün ist Akzent, nicht Fläche"; auf dieser Seite kommt er genau
> einmal vor. **Sein Ziel kommt über `path()` aus der Pfad-Registry** — die
> Vorlage schreibt dort die volle Adresse der Vorschau hinein, was beim
> Domainwechsel bräche und die Sprachfassungen ignorierte.
>
> Der Baustein heisst bewusst allgemein: Drei Karten mit Piktogramm, Titel und
> Text plus Einladung sind ein Muster, das weitere Seiten brauchen können.

> **„So läuft der Wechsel ab" ist seit dem 15.09.2026 eine waagrechte
> Reihe** (`src/components/blocks/Prozessreihe.tsx`), nach Ricardos
> HTML-Vorlage: Kategoriezeile „Strukturiert übergeben", Titel, ein Satz,
> darunter fünf gleich grosse Karten nebeneinander mit nummeriertem Kreis auf
> einer durchgehenden Linie, Piktogramm, Überschrift und Text; darunter der
> Hinweis „Sie behalten die Kontrolle:" mit grünem Strich. Der letzte Kreis
> ist grün — er markiert das Ziel. Der Anker `vorgehen` bleibt; der Abschnitt
> hiess vorher „So gehen wir vor".
>
> **Die Reihe bricht nie in eine senkrechte Liste um.** Auf schmalen Geräten
> wird sie waagrecht gescrollt, mit Einrasten (`scroll-snap-type: x
> proximity`, `scroll-snap-align: start`). Das verlangt der Auftrag
> ausdrücklich. Bei 1440 px stehen alle fünf in einer Reihe ohne Scrollen.
>
> **Der Scrollbereich ist mit der Tastatur erreichbar:** eine `region` mit dem
> Namen „Fünf Schritte des Treuhänderwechsels" und `tabindex="0"`, wie in der
> Vorlage. Ohne das käme man ohne Maus nicht an die hinteren Schritte. Die
> Reihenfolge steht in einer `<ol>`, die Nummernkreise sind für
> Vorlesewerkzeuge ausgeblendet.
>
> **Der Satz zur Kontaktaufnahme bleibt** — er stand vorher im vierten Schritt
> und steht jetzt als eigener Hinweis unter der Reihe. Damit ersetzt er
> zugleich den Abschnitt „Diskretion", der am selben Tag entfallen ist.
>
> **Die fünf Piktogramme stehen in den Karten, obwohl die Vorlage nur die
> Nummernkreise zeigt.** Ricardo hat sie zwanzig Minuten nach der Vorlage
> geliefert, benannt nach genau diesen fünf Schritten. Ohne `bild` fallen sie
> weg.
>
> Damit gibt es sechs Prozessdarstellungen im Projekt. Der Baustein heisst
> bewusst allgemein; er kann die übrigen später aufnehmen.

> **„Wann ist ein Wechsel sinnvoll?" ist seit dem 15.09.2026 ein zweiter
> `rollen`-Block**, nach Ricardos HTML-Vorlage: Kategoriezeile „Den Übergang
> gut planen", Titel, ein Satz, darunter zwei gleich grosse Kacheln — „Zum
> neuen Geschäftsjahr" und „Während des Geschäftsjahres" — mit Versalzeile,
> Überschrift, Text und drei Stichpunkten mit grünem Haken. Der Baustein hat
> dafür das optionale Feld `punkte` bekommen; der Haken ist ein Zeichen, keine
> Bilddatei. Der Anker `zeitpunkt` bleibt. Vorher drei Absätze aus
> `schritt4_fassung2_de.md` (`content/source/wechsel_zeitpunkt_de.md`).
>
> **Der unterjährige Wechsel bleibt eine Möglichkeit**, nicht die Ausnahme —
> so verlangt es der Auftrag, und die Vorlage hält es ein.
>
> **Die Vorlage enthält keine Beratungsbox und keinen Knopf.** Der Auftrag
> nennt beides; in der gelieferten Datei steht weder das eine noch das andere,
> und ein Text dafür wird nicht erfunden. Dazu kommt: Zwei Abschnitte weiter
> oben trägt die Seite bereits eine Einladung mit grünem Knopf auf die
> Kontaktseite. Ricardo entscheidet, ob eine zweite dazukommt.

> **„Diskretion" ist am 15.09.2026 auf Ricardos Anweisung entfallen.** Der
> Absatz sagte, dass ein Erstgespräch zu nichts verpflichtet und A&C den
> bisherigen Treuhänder erst auf Auftrag kontaktiert. Sein Wortlaut steht
> unverändert in `content/source/schritt4_fassung2_de.md`; der Anker
> `diskretion` war von nirgends verlinkt.

### /steuern

Getrennt für Privatpersonen und Firmen. Enthält zusätzlich:
- eine herunterladbare Unterlagen-Checkliste
- den Hinweis, dass wir die Fristverlängerung übernehmen
- den Hinweis, dass wir die definitive Veranlagung nachkontrollieren

Formulierung zur Qualifikation: "Treuhand / Steuern", nie ein Titel, der einen
eidg. Fachausweis suggeriert.

> **Vier Abschnitte sind am 11.09.2026 auf Ricardos Anweisung entfallen:**
> „So läuft es ab", „Was es kostet", „Wenn Sie nebenbei selbständig sind" und
> der Abschluss **„Termin für Ihre Steuererklärung vereinbaren"**. Ihr Wortlaut
> steht unverändert in `content/source/schritt4_fassung2_de.md`. Keiner der
> Anker wurde von anderswo angesprungen.
>
> Die Seite läuft seither: Seitenkopf → Für Privatpersonen → Für Selbständige
> und Firmen → Checkliste → Fristen und Fristverlängerung → häufige Fragen.
> **Sie hat damit keinen Abschluss mehr** — wie `/versicherungen`, `/treuhand`
> und `/treuhand/buchhaltung`.
>
> Die drei Pflichthinweise oben bleiben erhalten: Die Nachkontrolle der
> Veranlagung steht im Seitenkopf und bei „Für Privatpersonen", die
> Fristverlängerung und die Checkliste in eigenen Abschnitten.
>
> Zwei Folgen, auf die Ricardo hingewiesen ist: **Wovon der Aufwand abhängt,
> steht nicht mehr auf der Seite** (Abschnitt 9, „Preisdarstellung", verlangt
> es). Und **der Hinweis für Nebenerwerbstätige** — Aufstellung der Einnahmen
> und Ausgaben, Anmeldung bei der Ausgleichskasse — samt den Verweisen auf
> Treuhand und Firmengründung ist weg.

> **„Für Privatpersonen" und „Für Selbständige und Firmen" seit dem 11.09.2026
> nach Ricardos Referenzgrafik** — ein eigener Baustein
> (`src/components/blocks/ZielgruppenKarten.tsx`): zwei grosse weisse Karten
> auf dem gelieferten Hintergrund, links Titel mit grünem Strich, Absätze und
> Link mit Pfeil, rechts hinter einer feinen Linie drei Merkmale mit Symbol
> beziehungsweise ein grün getönter Hinweis. **Titel, Absätze und Link sind
> unverändert; die Anker `privatpersonen` und `firmen` bleiben** — `#firmen`
> ist von der Karte „Steuern für Firmen" auf `/treuhand` verlinkt.
>
> **Die Merkmale und der Hinweis stammen aus der Referenzgrafik**
> (`content/source/steuern_zielgruppen_de.md`). Ricardo ist auf den Ton
> hingewiesen: „zuverlässig", „effizient" und „für weniger Aufwand und mehr
> Übersicht" versprechen mehr als die Absätze daneben.
>
> Der Baustein bringt seine Fläche selbst mit und zählt beim Flächenwechsel
> nicht mit; die Abschnitte darunter behalten ihren Grund. Derselbe breite
> Container wie auf `/treuhand/buchhaltung` (1344 px).

> **„Checkliste, Fristen und Gebühren" ist seit dem 16.09.2026 nach Ricardos
> HTML-Vorlage gebaut** (`steuern-fristen-checkliste-neu.html`,
> `content/source/steuern_checkliste_de.md`): hellblauer Grund
> (`background_tint`), zwei weisse Flächen mit feiner Kontur in `border_soft`
> und 18 px Radius. **Links** Kategoriezeile „Steuererklärung Kanton Bern",
> Titel „Alle Unterlagen auf einen Blick.", ein Satz, das gelieferte
> Piktogramm, drei Punkte mit grünem Haken, der grüne Knopf und der Hinweis
> „Ohne Anmeldung · sofort verfügbar". **Rechts** Kategoriezeile „Fristen und
> Gebühren", Titel „Die wichtigsten Termine.", ein Satz und zwei gleich grosse
> Fristenkarten, darunter der Nachsatz. **Die Anker `checkliste` und `fristen`
> bleiben.**
>
> Nachgemessen bei 1440 px: Flächen 387 und 689 px (das Verhältnis 0.72 : 1.28
> der Vorlage), beide 653 px hoch, beide Fristenkarten 302 x 348 px; bei
> 1024 px 334 / 595 px und Karten 263 x 383; bei 375 px stehen alle Bereiche
> untereinander, Karten 285 x 366 — kein waagrechter Überlauf.
>
> **Beim Darüberfahren und bei Tastaturfokus wird die ganze Fristenkarte
> navy**, jeder Text darin weiss (11.6:1), die Karte zwei Pixel angehoben
> (`transform`, also ohne Layoutverschiebung), Übergang 180 ms. Die Karten
> tragen `tabindex="0"` samt grünem Fokusring — sie enthalten keinen Link, und
> ohne das gäbe es den verlangten Fokuszustand nicht. Dieselbe Lösung wie beim
> Bentoraster auf `/ueber-uns`. Das Piktogramm bleibt unverändert auf seinem
> hellen Kreis. Der grüne Knopf wird beim Darüberfahren navy, wie jeder Knopf
> der Website.
>
> **Drei Änderungen gegenüber dem 14.09.2026, auf die Ricardo hingewiesen ist:**
>
> - **Die Fristen der Unternehmen sind andere.** Bis dahin galten 15. September
>   ordentlich und Verlängerungen bis 15. November (kostenlos), 15. Januar
>   (CHF 20) und 15. März (CHF 40). Die Vorlage nennt stattdessen **sieben
>   Monate nach Geschäftsabschluss** und die Verlängerung um 1½ Monate
>   (kostenlos) beziehungsweise maximal 3½ Monate (CHF 20). Der alte Stand
>   steht unverändert in der Quelldatei.
> - **Die Fristenzeilen der linken Kachel sind entfallen.** Sie standen seit
>   dem 14.09.2026 ohne sichtbaren Rahmen da („nur die ränder der Tabelle
>   sollen durchsichtig sein"). Beide Angaben — 15. März und die Verlängerung
>   bis 15. November — stehen rechts in der Karte „Privatpersonen"; es geht
>   nichts verloren.
> - **Der Satz „Wenn wir Ihre Steuererklärung erstellen, übernehmen wir auch
>   die Fristverlängerung." bleibt.** Die Vorlage führt ihn nicht; Abschnitt 9
>   verlangt den Hinweis ausdrücklich. Er steht als zweiter Nachsatz unter den
>   Karten.
>
> **Der eigene Container von 1560 px ist entfallen** — die neue Vorlage läuft
> auf 1180 px, und für 20 px Unterschied lohnt keine vierte Containerbreite.
> Der Abschnitt steht seither im Standardcontainer (1160 px). **Der gelieferte
> Hintergrund `steuern_hintergrund` und der weiche Schatten sind weg**; der
> Auftrag verlangt hellblau und „keine Schatten". Die Datei bleibt liegen.
>
> **Die Titel sind neu.** „Privatpersonen" heisst jetzt „Alle Unterlagen auf
> einen Blick.", „Fristen und Kosten" heisst „Die wichtigsten Termine." — damit
> steht „Privatpersonen" nur noch zweimal als Überschrift auf der Seite statt
> dreimal.
>
> **Die drei Piktogramme sind die gelieferten SVG**, unverändert:
> `steuern_checkliste`, `steuern_icon_privatpersonen`,
> `steuern_icon_unternehmen` — dieselben Dateien, die seine Vorlage nennt.
>
> Die folgende Notiz beschreibt die Fassung vom 14.09.2026.

> **„Checkliste" und „Fristen und Fristverlängerung" seit dem 14.09.2026 als
> zwei Kacheln nebeneinander** (`src/components/blocks/ChecklisteFristen.tsx`).
> Zuerst nach einer Referenzgrafik gebaut, am selben Tag nach Ricardos zweitem,
> ausgeschriebenem Auftrag überarbeitet: grosse Serifenüberschrift, links die
> Checkliste mit der gelieferten Abbildung, den beiden Fristenzeilen, dem
> grünen Knopf und dem Hinweis
> „Ohne Anmeldung. Sofort verfügbar."; rechts „Fristen und Kosten" mit zwei
> Unterkarten (Privatpersonen, Unternehmen) mit den gelieferten Symbolen.
> **Die Anker `checkliste` und `fristen` bleiben.**
>
> Der Abschnitt hat einen **eigenen Container von 1560 px** — breiter als jede
> andere Ausnahme im Projekt (Standard 1160, sonst 1344 und 1380). Das steht so
> in Ricardos Auftrag („max-width ca. 1560–1620px").
>
> **Die Fristen und Gebühren sind seit dem 14.09.2026 keine offene Angabe
> mehr.** Ricardo hat sie im zweiten Auftrag ausgeschrieben. Damit stehen
> wieder **vier** offene Angaben auf der Website, wie vor dem ersten Umbau.
>
> **Die Kategoriezeile „A&C Consulting" über beiden Titeln ist noch am
> 14.09.2026 entfallen**, auf Ricardos Anweisung.
>
> **Es gilt der 15. März.** Die linke Kachel nannte zuerst den 31. März des
> Folgejahres, die rechte den 15. März; Ricardo hat den 15. März bestimmt.
>
> **Die Fristenzeilen links stehen ohne sichtbaren Rahmen.** Auf „15. März
> und die tabelle soll nicht sichtbar sein" war die ganze Box entfallen; er hat
> das am selben Tag präzisiert: „nur die ränder der Tabelle sollen durchsichtig
> sein der inhalt muss vorhanden sein". Inhalt, Raster und Ausrichtung sind
> darum unverändert, Rahmen und Füllung stehen auf `transparent`.
>
> **Der Titel der linken Kachel lautet „Privatpersonen".** Damit steht das Wort
> dreimal als Überschrift auf der Seite — Zielgruppenblock, Kachel und
> Unterkarte. Ricardo ist darauf hingewiesen.
>
> **Der Satz „Wenn wir Ihre Steuererklärung erstellen, übernehmen wir auch die
> Fristverlängerung." bleibt.** Der Auftragstext führt ihn nicht mehr,
> Abschnitt 9 verlangt den Hinweis aber ausdrücklich; er steht als Nachsatz
> unter den Unterkarten. Die Beschreibung der linken Kachel ist dagegen neu und
> ersetzt den Satz aus `schritt4_fassung2_de.md`.
>
> **Das Bern-Foto fehlt weiterhin.** Die gelieferte Datei
> `04_bern_stockfoto_original.png` ist unverändert 505 x 280 px gross und
> trägt das Wasserzeichen „shutterstock.com 2181102791" — eine unlizenzierte
> Vorschau. **Das Wasserzeichen wird nicht entfernt.** Der Bildstreifen ist
> gebaut (`banner`, mit den Schildchen „Bern" und „Für Steuererklärungen im
> Kanton Bern") und erscheint von selbst, sobald eine lizenzierte Fassung von
> mindestens 2000 px Breite unter `public/bilder/` liegt. Ohne Datei steht kein
> Platzhalter.
>
> **Vier Zeichen des Auftrags fehlen** und werden nicht nachgezeichnet: das
> Kalender- und das Uhrzeichen der beiden Fristenzeilen, das Pin-Zeichen im
> Schildchen „Bern" und das Download-Zeichen im Knopf.
>
> Unterkarten nebeneinander erst ab 88rem (1408 px): Bei 1280 px blieben je
> Beschriftung 150 px, und „Fristverlängerung online bis 15. November" lief
> dreizeilig. Darunter stehen sie voll breit untereinander.

### /firmengruendung

> **Dritte Fassung seit dem 15.09.2026.** Ricardo hat eine ausgeschriebene
> HTML-Vorlage geliefert. Neu: unter jedem Merkmal eine hellere Erklärung,
> am Fuss jeder Karte die Einordnung „Passt häufig, wenn …" mit grünem
> Strich, und in der Leiste darunter ein grüner Knopf „Rechtsform besprechen"
> auf `/de/kontakt/` (über `path()`, nicht als Adresse). Die Leiste steht
> seither **ohne Symbol**; die Unterzeilen heissen „Direkt starten" und
> „Getrennt aufbauen", die Merkmalzeile „Wirkung / Auftreten" ist entfallen.
> Zwei neue Piktogramme ersetzen die vom 14.09.2026; ihr Kreis nimmt 89.6
> statt 71.4 Prozent der Datei ein, der negative Rand ist entsprechend
> angepasst.
>
> **Drei Angaben sind neu und fachlich zu prüfen:** die Umsatzschwelle
> CHF 100'000 für den obligatorischen Handelsregistereintrag, die Sacheinlage
> als Deckung des Stammkapitals und statutarische Nachschusspflichten.
> Ricardo ist darauf hingewiesen.
>
> **„Einzelfirma oder GmbH?" ist seit dem 14.09.2026 ein eigener Baustein**
> (`src/components/blocks/Rechtsformen.tsx`). Zuerst nach einer Referenzgrafik
> gebaut, am selben Tag nach Ricardos zweiter Grafik samt ausgeschriebenem
> Auftragstext überarbeitet: Kategoriezeile „Rechtsformen in der Schweiz",
> Titel, ein Satz, darunter zwei Karten mit geliefertem Symbol, Titel und
> Unterzeile; je sechs Merkmale (Kapital, Haftung, Gründungsaufwand,
> Sozialversicherungen, Handelsregister, Wirkung / Auftreten) mit der
> Kategorie links und dem Inhalt rechts — eine Hauptzeile in Navy, darunter
> eine hellere Erklärung. Unten eine breite Hinweisleiste. Der Anker
> `rechtsform` bleibt. Der Abschnitt bringt den gelieferten Hintergrund selbst
> mit und zählt beim Flächenwechsel nicht mit. Container 1560 px, dasselbe
> Mass wie Checkliste und Fristen auf `/steuern`.
>
> **Der Wortlaut stammt aus Ricardos Auftragstext**
> (`content/source/firmengruendung_rechtsformen_de.md`). Die erste Fassung
> trug die sechs Sätze aus `schritt4_fassung2_de.md`, an der Satzgrenze
> geteilt. Sie stehen dort unverändert weiter, aber nicht mehr auf der Seite.
> Dass das Stammkapital vor der Gründung einbezahlt wird, steht weiterhin im
> Abschnitt „So läuft eine Gründung ab".
>
> **„CHF 20'000 Stammkapital" steht seit dem zweiten Auftrag auf der Seite.**
> Schritt 4 führt die Höhe des Stammkapitals und die Einzahlungsvorschriften
> als fachlich zu prüfen; die Zahl war zweimal ausdrücklich nicht übernommen.
> Ricardo hat sie im Auftragstext ausgeschrieben und ist auf den Vorbehalt
> hingewiesen. Schreibweise nach Corporate Design, mit geradem Apostroph.
>
> **„Einfach starten" und „Stabil wachsen" stehen jetzt ebenfalls da.** Auch
> sie waren aus der ersten Grafik bewusst weggelassen. Sie gehören zur
> jeweiligen Rechtsform, sind also keine Firmenzusätze; es bleiben die drei
> von A&C: „Kompetenz schafft Klarheit", „Perspektiven für morgen" und
> „Persönlich. Unabhängig. An Ihrer Seite.".
>
> **Schreibweise „selbständigerwerbend".** Der Auftragstext schreibt
> „selbstständigerwerbend"; auf der Website steht überall die Schweizer Form
> mit einem t, auch auf `/steuern` und weiter unten auf derselben Seite. Sie
> ist beibehalten, damit nicht zwei Schreibweisen nebeneinander stehen.

> **Die Gründungscheckliste ist seit dem 14.09.2026 ein eigener Baustein**
> (`src/components/blocks/Checkliste.tsx`), nach Ricardos HTML-Vorlage: eine
> weisse Karte auf hellem Grund, links Kategoriezeile „Für Ihren Start",
> Titel, ein Satz, der Knopf und der Hinweis, rechts die gelieferte
> Abbildung. Der Anker `checkliste` bleibt.
>
> **Der Knopf hat zwei Zustände, und der Inhalt schaltet um.** Steht
> `download.file` auf `null`, rendert der Baustein ein `<button disabled>` in
> derselben Form, sichtbar abgeschaltet, mit dem Hinweis „Die PDF-Checkliste
> ist in Vorbereitung." darunter — über `aria-describedby` mit dem Knopf
> verbunden. Sobald ein Pfad eingetragen ist, wird daraus der grüne Knopf der
> Startseite (`Button variant="akzent"`, `accent_green`) mit `download`, und
> der Hinweis fällt weg. Beide Zustände erben ihre Form über `composes` aus
> `Button.module.css`, damit sie nicht auseinanderlaufen.
>
> **Der abgeschaltete Knopf ist nicht einfach blasser.** Grün auf halber
> Deckung trägt den weissen Text nicht mehr (unter 3:1). Die Fläche ist darum
> hell und die Schrift navy, rund 9:1. Ricardos Vorlage setzt `opacity: 1` und
> ändert nur den Mauszeiger; das wäre auf dem Bildschirm nicht als
> abgeschaltet zu erkennen.
>
> **Der Satz stammt aus der Vorlage** und ersetzt den bisherigen aus
> `schritt4_fassung2_de.md` (`content/source/firmengruendung_checkliste_de.md`).
> Die Abbildung ist unverändert aus dem Quelltext der Vorlage gelöst.

> **„Wer übernimmt welchen Teil?" ist seit dem 14.09.2026 ein eigener
> Baustein** (`src/components/blocks/Rollen.tsx`), nach Ricardos
> HTML-Vorlage: Kategoriezeile „Gut aufeinander abgestimmt", Titel, ein Satz,
> darunter **vier gleich grosse Kacheln** zwei mal zwei — A&C Consulting,
> Notariat, Bank, Behörden. Je Kachel links eine Versalzeile mit grünem
> Strich, die Überschrift und der Text, rechts das gelieferte Piktogramm.
> Keine Kachel reicht über zwei Spalten; `grid-auto-rows: 1fr` hält sie auf
> gleicher Höhe. Der Anker `zustaendigkeiten` bleibt. Der Abschnitt bringt
> seine Fläche selbst mit und zählt beim Flächenwechsel nicht mit.
>
> **Der Wortlaut stammt aus der Vorlage**
> (`content/source/firmengruendung_rollen_de.md`) und ersetzt die vier
> Absätze aus `schritt4_fassung2_de.md`. Aus „Ämter" wurde „Behörden".
>
> **Zwei Angaben sind neu und fachlich zu prüfen:** dass die Bank ein
> **Kapitaleinzahlungskonto** stellt — bisher hiess es „Sperrkonto" — und
> dass neben dem Stammkapital auch **Aktienkapital** in Frage kommt; die Seite
> behandelt sonst nur Einzelfirma und GmbH. Ricardo ist darauf hingewiesen.
>
> Die vier Piktogramme sind unverändert übernommen. Der Kreis des
> A&C-Piktogramms nimmt 83.8 Prozent seiner Datei ein, bei den drei anderen
> 86.7 — bei 112 px rund 3 px Unterschied im Durchmesser.

> **Vier Abschnitte sind am 14.09.2026 auf Ricardos Anweisung entfallen**
> — auf drei Seiten zugleich:
>
> - `/firmengruendung`: „So läuft eine Gründung ab", „Was eine Gründung
>   kostet", „Was nach der Gründung auf Sie zukommt" und der Abschluss
>   „Besprechen Sie Ihre Gründung mit uns". Es bleiben Seitenkopf,
>   Rechtsformvergleich, „Wer welchen Teil übernimmt", die
>   Gründungscheckliste und die häufigen Fragen.
> - `/treuhand/treuhaender-wechseln`: „Welche Unterlagen für die Übernahme
>   nötig sind", „Was wir dabei übernehmen", „Kosten im Jahr des Wechsels"
>   und der Abschluss „Schauen wir Ihre Situation gemeinsam an".
> - `/finanzplanung`: „Was wir nicht machen", „So läuft es ab" und der
>   Abschluss „Sprechen wir über Ihre Situation". Die Seite trägt damit nur
>   noch Budget und Vorsorge. **Mit dem Ablauf ist auch seine Sprungmarke
>   entfallen** — sie hätte ins Leere gezeigt.
> - `/ueber-uns`: der Abschluss „Lernen Sie uns kennen". Er stand nicht im
>   Blockmodell, sondern in der eigenen Vorlage (`Ueberuns.tsx`); der Baustein
>   ist dort samt Flächenzuweisung entfernt.
>
> **Der Wortlaut ist nicht widerrufen.** Er steht unverändert in
> `content/source/schritt4_fassung2_de.md` und in `src/content/ueberuns.ts`
> gab es ihn nur an dieser einen Stelle.
>
> **Vier Seiten haben damit keinen Abschluss mehr**, zusätzlich zu
> `/versicherungen`, `/treuhand`, `/treuhand/buchhaltung` und `/steuern`.
> Handlungsknöpfe stehen nur noch im Seitenkopf und im Kopfbereich.
> `/kontakt` trägt als einzige Seite noch einen Abschluss. Ricardo ist darauf
> hingewiesen.
>
> **Zwei Folgen, auf die Ricardo hingewiesen ist:** Wovon der Aufwand bei
> Gründung und Wechsel abhängt, steht nicht mehr auf der Seite — Abschnitt 9,
> „Preisdarstellung", verlangt es. Und auf `/finanzplanung` steht nicht mehr,
> dass A&C keine Vermögensverwaltung anbietet; diese Abgrenzung stand dort
> bewusst vorn.

### /finanzplanung

> **„Ein Budget zeigt, was möglich ist." ist seit dem 15.09.2026 ein eigener
> Baustein** (`src/components/blocks/Bereich.tsx`), nach Ricardos
> HTML-Vorlage: eine weisse Karte auf hellem Grund mit Kategoriezeile
> „Klarheit im Alltag", Titel, einem grösseren Satz in Navy und einem
> Erklärungsabsatz, rechts die gelieferte Illustration; darunter die Zeile
> „Besonders hilfreich bei Veränderungen" und fünf gleich grosse
> Situationsfelder mit Nummernkreis. Der letzte Kreis ist grün. Der Anker
> `budget` bleibt — die Sprungmarke zeigt darauf.
>
> **Die Illustration steht auf dem Desktop rechts, unter 40.625rem über dem
> Text.** Im Quelltext steht der Text zuerst, damit Vorlesewerkzeuge ihn
> zuerst bekommen; das Raster dreht die Reihenfolge nur optisch um. Sie ist
> unverändert aus dem Quelltext der Vorlage gelöst und liegt als
> `public/bilder/finanzplanung_budget.svg`.
>
> **Die Zeile „Besonders hilfreich bei Veränderungen" ist ein Absatz, keine
> Überschrift** — so wie in der Vorlage. Die fünf Felder sind `h3` unter der
> `h2` des Abschnitts. Damit die Gruppe dennoch benannt ist, verweist die
> Liste über `aria-labelledby` auf diese Zeile.
>
> **Der Wortlaut stammt aus der Vorlage**
> (`content/source/finanzplanung_budget_de.md`) und ersetzt die drei Absätze
> und die Aufzählung aus `schritt4_fassung2_de.md`. Die fünf Situationen
> sagen dasselbe in knapperer Form.
>
> Die Seite trägt seit dem 14.09.2026 nur noch Budget und Vorsorge.

> **„Vorsorge beginnt mit einem Gesamtbild." ist seit dem 15.09.2026 ein
> eigener Baustein** (`src/components/blocks/Systemuebersicht.tsx`), nach
> Ricardos HTML-Vorlage: Kategoriezeile „Heute verstehen. Morgen planen.",
> Titel, ein Satz; darunter links die gelieferte Dreisäulenillustration in
> einer getönten Karte, rechts drei Karten mit Nummernkreis, Versalzeile,
> Titel und Satz — AHV und IV, Pensionskasse, Säule 3a und freie Vorsorge.
> Darunter die Prüfliste „Was wir mit Ihnen anschauen" mit drei Haken und der
> Grundsatz „Zuerst die Ausgangslage, dann die Lösung." mit grünem Strich.
> Unter 50rem steht alles untereinander. Der Anker `vorsorge` bleibt.
>
> **Die vorsichtigen Formulierungen sind unverändert:** „voraussichtlich",
> „könnte", „hängt ab". **Keine Grenzbeträge, keine Renditeangaben, keine
> Leistungsversprechen** — so verlangt es der Auftrag, und Abschnitt 3 der
> Hausordnung verbietet sie ohnehin.
>
> **Diese Illustration hat als einzige im Projekt einen Alternativtext**
> („Die drei Säulen der Vorsorge, unterschiedlich hoch gefüllt."). Sie
> nummeriert die drei Säulen und trägt damit Inhalt; die übrigen Piktogramme
> sind reine Gestaltung und bleiben `alt=""`. Die Ziffern in der Datei sind
> Schrift (Arial); fehlt Arial, nimmt der Browser eine ähnliche.
>
> **Der Grundsatz bleibt inhaltlich erhalten**, genauer formuliert als bisher
> („bevor Ziele, bestehende Vorsorge und finanzieller Spielraum geklärt
> sind" statt „bevor wir Ihre Ausgangslage kennen").

### /ueber-uns

Die Inhaber mit Namen, Werdegang und Sprachen. Warum es die Firma gibt. Kein
Fliesstext über Werte — konkrete Sätze über konkrete Menschen.

> **Der Einstieg ist seit dem 15.09.2026 nach Ricardos HTML-Vorlage gebaut:**
> Kategoriezeile „Über A&C", Titel „Zwei Ansprechpartner. Ihre Themen an
> einer Stelle.", ein grösserer Satz in Navy, der Beschreibungsabsatz und
> darunter die drei Fachgebiete als Pillen — Versicherungsbroking, Treuhand,
> Steuern. Rechts die grössere Bildfläche mit grünem Eckmarker oben rechts
> und der Legende darunter. Unter 48rem stehen Text und Bild untereinander.
>
> **Die interne Regieanweisung steht nicht mehr im Frontend.** Die Fläche
> trug „[RICARDO & OCTAVIO]" und „Aufnahme 2 der Shootingliste"; beides ist
> weg. Es bleibt eine ruhige getönte Fläche mit `role="img"` und dem Namen
> „Ricardo und Octavio" für Vorlesewerkzeuge. **Drei weitere Flächen auf
> derselben Seite tragen die Anweisung weiterhin** — die zwei Porträts und das
> Büro. Sie gehörten nicht zum Auftrag; Ricardo ist darauf hingewiesen.
>
> **Gesichter bleiben frei.** Die Legende steht **unter** der Fläche, nie
> darüber; der Eckmarker liegt ausserhalb der Bildkante; der Beschnitt steht
> auf `object-position: center 25%`, damit zwei Personen im oberen Drittel im
> Bild bleiben.
>
> **Sobald die gemeinsame Aufnahme vorliegt:** Datei unter `public/bilder/`
> ablegen und in `src/content/ueberuns.ts` bei `kopf.bild.foto` eintragen,
> dazu `alt`. Der Platzhalter weicht dann von selbst.
>
> **Die Reihenfolge der drei Fachgebiete** folgt dem Auftrag und dem Corporate
> Design (Versicherungsbroking, Treuhand, Steuern), nicht der Navigation — die
> führt seit dem 07.09.2026 an dritter Stelle Finanzplanung. Hier geht es um
> die fachliche Herkunft der Inhaber, nicht um die Seitenstruktur.
>
> **Der Seitentitel lautet weiterhin „Zwei Ansprechpartner, drei Bereiche".**
> Er steht in `meta.title` und wurde nicht geändert, weil der Auftrag nur die
> Überschrift nennt. Damit tragen Browserreiter und Überschrift verschiedene
> Texte; Ricardo entscheidet.

> **„Die beiden Inhaber" ist seit dem 15.09.2026 nach Ricardos zweiter
> HTML-Vorlage gebaut** (`content/source/ueberuns_inhaber_de.md`):
> Kategoriezeile „Persönlich für Sie da", Titel, eine Einleitung und darunter
> **zwei gleich grosse Profilkarten** mit demselben Aufbau — Porträt, Rolle
> mit grünem Strich, Name, Schwerpunktsatz, die gegliederten Angaben zu
> beruflichem Hintergrund und Qualifikation, die Beratungssprachen und der
> grüne Telefonknopf. Ab 47.5rem nebeneinander, darunter untereinander;
> `grid-auto-rows: 1fr` hält sie in **beiden** Darstellungen gleich hoch, und
> die Sprachzeile schiebt sich an den Fuss, damit die Knöpfe auf einer Linie
> stehen. Der Anker `inhaber` bleibt.
>
> **Die Rollen sind seit dem 15.09.2026 vertauscht:** Octavio ist
> „Geschäftsführer und Mitinhaber", Ricardo „Mitinhaber". Am selben Tag hatte
> ein Auftrag noch das Gegenteil verlangt; Ricardos spätere Anweisung
> („octavio ist inhaber und Geschäftsführer ich bin nur inhaber") gilt. Siehe
> Abschnitt 2.
>
> **Die Porträts sind eingesetzt.** `portrait_ricardo.webp` und
> `portrait_octavio.webp` lagen längst unter `public/bilder/`; die Alt-Texte
> stammen von der Startseite. Damit sind zwei der drei verbliebenen
> „Shootinglisten"-Vermerke verschwunden; es bleibt das Büro weiter unten.
> Das Seitenverhältnis ist **4 / 3** statt der 16/10 der Vorlage — genau das
> Mass der Dateien (560 x 420). 16/10 nähme oben rund 17 Prozent weg, also
> dort, wo die Köpfe sind.
>
> **Die E-Mail-Knöpfe stehen seit dem 15.09.2026 neben den Telefonknöpfen.**
> Ricardo hat die beiden Adressen an diesem Tag freigegeben; sie stehen als
> `direktadressen` in `src/lib/company.ts` und nirgends sonst. **Die Nummer
> ist die Beschriftung** des ersten Knopfes statt des Wortes „Anrufen" der
> Vorlage. Unter 30rem stehen die beiden Knöpfe untereinander und füllen die
> Breite.
>
> **Die Beratungssprachen unterscheiden sich neu je Person** — Ricardo
> Deutsch, Portugiesisch, Englisch; Octavio Deutsch, Französisch,
> Portugiesisch. Bis dahin stand bei beiden dieselbe Reihe. **Damit führt die
> Website erstmals wieder Französisch als Beratungssprache einer Person**,
> was Abschnitt 10 seit dem 07.09.2026 ausdrücklich offen hält und wovon die
> ganze Fassung `/fr/` abhängt. Der Wortlaut des Auftrags gilt; Ricardo ist
> darauf hingewiesen.

> **„Wie wir arbeiten" ist seit dem 15.09.2026 ein Bentoraster** nach Ricardos
> HTML-Vorlage (`content/source/ueberuns_arbeitsweise_de.md`): Kategoriezeile
> „Unsere Zusammenarbeit", der neue Titel „Verlässlich im Alltag. Klar in der
> Verantwortung.", eine Einleitung und darunter **fünf Karten** — zwei grosse
> oben (Text links, Piktogramm rechts), drei kompakte darunter (Piktogramm
> oben, Text darunter). Ab 36.875rem zwei Karten je Reihe, darunter eine. Der
> Anker `arbeitsweise` bleibt. Die frühere nummerierte Liste mit der klebenden
> Überschrift ist entfallen.
>
> **Beim Darüberfahren und bei Tastaturfokus wird die ganze Karte navy**,
> Kategorie, Überschrift und Text weiss (9.4:1); **der grüne Strich vor der
> Kategorie bleibt grün**. Übergang nur auf Farbe, abgeschaltet unter
> `prefers-reduced-motion: reduce`. Keine Schatten, keine Verläufe, keine
> neuen Farben.
>
> **Die Karten tragen `tabindex="0"`.** Sie enthalten keinen Link; ohne das
> gäbe es den verlangten Fokuszustand nicht. Zusätzlich zum Farbwechsel steht
> der grüne Fokusring der Website — der Farbwechsel allein ist im Umriss nicht
> eindeutig.
>
> **Die fünf Piktogramme sind unverändert übernommen** (heller Kreis,
> Navy-Linien, grüner Akzent). Auf der navy Karte trägt der helle Kreis das
> Zeichen weiter; nachgemessen bleibt es klar lesbar.
>
> **Zwei Aussagen sind mit dem Umbau verschwunden**, Ricardo ist darauf
> hingewiesen: „Ihre Daten werden in der Schweiz verarbeitet." — die Vorlage
> sagt „mit angemessenen organisatorischen Massnahmen"; die Schweizer
> Verarbeitung steht weiterhin in den häufigen Fragen auf `/treuhand`. Und
> „Tätigkeitsbereiche: Versicherungen, Treuhand und Steuern." — die drei
> Bereiche stehen seit dem 15.09.2026 als Pillen im Einstieg derselben Seite.

> **Der Standortabschnitt ist seit dem 15.09.2026 eine Karte** nach Ricardos
> HTML-Vorlage (`content/source/ueberuns_standort_de.md`): links Kategoriezeile
> „Unser Standort", der neue Titel „Persönlich für Sie da in Aegerten", die
> Anschrift als `<address>`, ein Satz und der grüne Knopf „Route mit Google
> Maps planen"; rechts die schlichte getönte Bildfläche mit dem navy
> Ortsschild unten rechts. Ab 48.75rem nebeneinander, darunter steht die
> Fläche oben. Der Anker `region` bleibt.
>
> **Der Knopf öffnet Google Maps in einem neuen Fenster** (`target="_blank"`,
> `rel="noopener noreferrer"`) und startet die Routenplanung zum Büro. Das
> Ziel baut `company.ts` aus der Adresse — ein Umzug ändert Link, Anschrift
> und Ortsschild auf einmal. Google Maps bestimmt den Ausgangspunkt selbst.
> Die zugängliche Beschriftung nennt die vollständige Adresse; `{adresse}` im
> Inhalt wird beim Rendern eingesetzt, damit keine Strasse im Text steht.
>
> **„Aufnahme 6 der Shootingliste" ist verschwunden.** Die Fläche trägt
> `role="img"` mit dem Namen „Bildplatzhalter"; das Ortsschild wiederholt nur
> die Adresse und ist für Vorlesewerkzeuge ausgeblendet. Damit steht auf
> `/ueber-uns` kein interner Vermerk mehr.
>
> **Strukturierte Daten gibt es auf der Website nicht** — kein JSON-LD, keine
> Schema.org-Auszeichnung. Bei der Adressänderung war dort nichts zu tun.
>
> **Seit dem 15.09.2026 zeigt die Fläche eine Karte** (`Standortkarte.tsx`,
> die einzige neue Client-Komponente). **Sie lädt erst auf Klick:** Ein
> eingebetteter Kartendienst holt beim Aufruf der Seite Daten von einem fremden
> Server und übermittelt dabei die IP-Adresse der Besucherin; Abschnitt 6 und 7
> verlangen, dass ohne Rücksprache kein fremder Dienst mitläuft, und die
> Datenschutzerklärung wird nicht selbständig geändert. Bis zum Klick steht in
> der Fläche ein Knopf „Karte anzeigen" mit dem Hinweis, woher die Karte kommt.
> Danach erscheint die Karte von **OpenStreetMap**, mit Stecknadel auf dem
> Büro. Anschrift und Routenknopf funktionieren ohne Skript und ohne fremden
> Dienst. **Soll die Karte sofort erscheinen**, ist das eine Zeile — dann
> gehört aber ein Satz zum Kartendienst in die Datenschutzerklärung, und den
> ändert nur Ricardo.
>
> **Die Koordinaten stehen in `company.ts`** (`bueroLage`), nachgeschlagen bei
> Nominatim. Die Abfrage löst „Bielstrasse 10, 2558 Aegerten" als bestehendes
> Gebäude auf — damit ist die Postleitzahl belegt.
>
> **Die Randzeile unter dem Abschnitt ist entfallen** („Seeland · Kanton Bern ·
> Deutsch · Französisch · Portugiesisch"), auf Ricardos Anweisung vom
> 15.09.2026.


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
- [ ] **Gemeinsame Aufnahme von Ricardo und Octavio beschaffen** — für den
      Einstieg auf `/ueber-uns`. Bis dahin steht dort eine getönte
      Platzhalterfläche ohne sichtbaren Hinweis
- [ ] Bildmaterial: Porträts der Inhaber und Regionalaufnahmen beschaffen
      (die Startseite kommt bewusst ohne Fotos aus, statt Stockbilder zu setzen)
- [ ] Vektorlogo (SVG) beschaffen — bisher nur PNG, siehe `offene-punkte.md`
      des Corporate-Design-Skills. Betrifft auch das Favicon
- [ ] **PDF für den Schadenfall hinterlegen** — `public/dokumente/schadenfall.pdf`.
      Der grüne Knopf im Abschnitt „Wenn ein Schaden eintritt" zeigt seit dem
      11.09.2026 darauf und führt bis dahin ins Leere. Auf Ricardos Anweisung;
      er legt die Datei später ab. **Vor dem Go-live zwingend.**
- [ ] Unterlagen-Checkliste Steuern erstellen (DE/FR/PT)
- [ ] **Gründungscheckliste als PDF erstellen** — unter `public/dokumente/`
      ablegen und den Pfad in `src/content/pages/firmengruendung.ts` bei
      `download.file` eintragen. Der Knopf wird damit von selbst grün und
      verlinkt; bis dahin steht er abgeschaltet mit dem Hinweis „Die
      PDF-Checkliste ist in Vorbereitung."
- [ ] **Lizenzierte Bern-Aufnahme beschaffen** — mindestens 2000 px breit,
      ohne Wasserzeichen. Der Bildstreifen unter den beiden Kacheln auf
      `/steuern` ist gebaut und erscheint, sobald die Datei unter
      `public/bilder/` liegt. Die gelieferte Vorschau (505 x 280 px,
      Shutterstock-Wasserzeichen) wird nicht verwendet
- [ ] Glossar DE/FR/PT für Fachbegriffe aufbauen (`content/glossar.md`)

**Französisch — offen, blockiert alles Weitere in dieser Sprache**

**Teilweise geklärt am 15.09.2026.** Ricardo hat die Beratungssprachen der
beiden Profile auf `/ueber-uns` ausdrücklich bestätigt („Beratungssprachen
stimmen so"): **Ricardo** berät auf Deutsch, Portugiesisch und Englisch,
**Octavio** auf Deutsch, Französisch und Portugiesisch. Damit stimmt die Zeile
„Beratung auf Deutsch, Französisch und Portugiesisch" im Fussbereich wieder.

Offen bleibt, **ob `/fr/` aufgeschaltet wird** — das ist eine Entscheidung
über ein Drittel der Übersetzungsarbeit und nicht dasselbe wie die Frage nach
der Beratungssprache. Bis Ricardo das sagt, bleibt `/fr/` auf
`published: false`.

Der bisherige Stand vom 07.09.2026 lautete: Keiner der beiden Inhaber führt
Französisch als Beratungssprache; Ricardo klärt das mit Octavio.

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
