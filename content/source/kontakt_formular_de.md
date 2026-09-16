# Kontaktformular — HTML-Vorlage Ricardo, 16.09.2026

Aus seinem Auftrag vom 16.09.2026 samt der Datei `kontaktformular-neu.html`.
Die folgenden Zeilen stehen wörtlich so in seinem Auftragstext.

## Linker Bereich

Kleine Überschrift: **Persönlich erreichbar**

Hauptüberschrift: **Schreiben Sie uns.**

Einleitung: Schildern Sie uns kurz Ihr Anliegen. Wir melden uns persönlich bei
Ihnen und klären gemeinsam den nächsten Schritt.

Zwei anklickbare Kontaktflächen:

- Telefon — Linktext «Jetzt anrufen», als `tel:`-Link
- E-Mail — Linktext «info@ac-co.ch», als `mailto:`-Link

Hinweis mit grüner Linie:

> **Persönliche Rückmeldung**
> Wir beantworten Ihre Anfrage in der Regel innerhalb eines Werktags.

## Rechter Bereich

Überschrift: **Wobei dürfen wir Sie unterstützen?**

Hinweis: * Pflichtfelder

Felder: Name *, E-Mail *, Telefon, Anliegen *

Auswahl beim Anliegen (erste Zeile aus dem Quelltext der Vorlage:
«Bitte auswählen»):

- Versicherungen
- Treuhand und Buchhaltung
- Steuern
- Firmengründung
- Finanzplanung
- Anderes Anliegen

Auswahlfrage: **Wie dürfen wir Sie kontaktieren?** — E-Mail, Telefon

Nachrichtenfeld: **Ihre Nachricht *** mit dem Platzhalter «Beschreiben Sie Ihr
Anliegen in wenigen Sätzen.»

Zustimmung: Ich habe die Datenschutzerklärung gelesen und stimme der
Verarbeitung meiner Angaben zur Bearbeitung der Anfrage zu.

Knopf: **Anfrage senden →**

Hinweis daneben: Ihre Angaben werden vertraulich behandelt und nicht
weitergegeben.

## Was davon abweicht

- **Der Absendeknopf ist abgeschaltet.** Der serverseitige Endpunkt aus
  Abschnitt 7 der Hausordnung ist nicht gebaut; die Vorlage schickt an `#`,
  also nirgendwohin. Ein Formular, das Anfragen still verschluckt, wäre
  schlechter als keines. Der Knopf trägt den Vermerk «folgt» und darunter den
  bestehenden Hinweis `ui.formPending` — derselbe, der bisher unter dem Umriss
  stand. Sobald der Endpunkt steht, fällt beides weg.
- **«Datenschutzerklärung» ist verlinkt.** Abschnitt 7 verlangt den Verweis;
  die Vorlage nennt das Wort nur.
- **Ein Honigtopf-Feld ist ergänzt**, ebenfalls nach Abschnitt 7. Cloudflare
  Turnstile kommt mit dem Endpunkt dazu.
- **Der Fliesstext steht im Ton der Website** (`text_secondary`), nicht in dem
  der Vorlage (`#445367`). Sonst trüge die Seite zwei Fliesstextfarben.
- **Die Überschrift «Wobei dürfen wir Sie unterstützen?» ist eine `h3`**, nicht
  die `h1` der Vorlage: Die `h1` der Seite ist der Seitentitel, und «Schreiben
  Sie uns.» ist die `h2` des Abschnitts.
- **Der bisherige Umriss steht nicht mehr auf der Seite.** Sein Wortlaut —
  «Oder schreiben Sie uns», die fünf Angaben und der Hinweis zur Zustimmung —
  steht unverändert in `content/source/schritt4_fassung2_de.md` und ist nicht
  widerrufen.
