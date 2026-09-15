# Finanzplanung — Budget, Vorlage Ricardo, 15.09.2026

Ricardo hat den Abschnitt als fertige HTML-Vorlage geliefert
(`bilder-quelle/finanzplanung_budget/vorlage.html`), die Illustration im
Quelltext. Der Wortlaut unten stammt von dort.

## Karte

Klarheit im Alltag

Ein Budget zeigt, was möglich ist.

Es geht nicht darum, auf alles zu verzichten. Es geht darum, Einnahmen, feste
Verpflichtungen und persönliche Wünsche miteinander in Einklang zu bringen.

Gemeinsam ordnen wir Ihre Einnahmen und Ausgaben, unterscheiden fixe und
veränderbare Kosten und machen sichtbar, welcher Spielraum bleibt. Sie erhalten
eine verständliche Übersicht, die Sie selbst weiterführen können.

## Situationen

Besonders hilfreich bei Veränderungen

1. Neue Stelle oder verändertes Einkommen
2. Schritt in die Selbstständigkeit
3. Neue familiäre Situation
4. Grössere Anschaffung oder neues Ziel
5. Weniger übrig als erwartet

## Anmerkungen

**Der bisherige Wortlaut ist ersetzt.** Bis zum 15.09.2026 standen hier drei
Absätze und eine Aufzählung mit fünf Punkten aus `schritt4_fassung2_de.md`
(«Ein Budget ist keine Verzichtsübung …», «vor oder nach einem Wechsel der
Anstellung» und so fort). Sie stehen dort unverändert weiter und sind nicht
widerrufen. Die fünf Situationen sagen dasselbe in knapperer Form.

**Die Illustration ist unverändert aus dem Quelltext der Vorlage gelöst** und
liegt als `public/bilder/finanzplanung_budget.svg`. Nicht nachgezeichnet, nicht
skaliert. Sie steht auf dem Desktop rechts neben dem Text und unter 40.625 rem
darüber; im Quelltext steht der Text zuerst, damit Vorlesewerkzeuge ihn zuerst
bekommen.

**Die Zwischenzeile «Besonders hilfreich bei Veränderungen» ist ein Absatz,
keine Überschrift** — so wie in der Vorlage. Die fünf Felder sind `h3` unter
der `h2` des Abschnitts; eine Überschrift dazwischen würde die Ebene doppelt
belegen. Damit die Gruppe trotzdem benannt ist, verweist die Liste über
`aria-labelledby` auf diese Zeile.

**Der letzte Nummernkreis ist grün**, die vier davor eisblau — so zeigt es die
Vorlage.

**Der Anker `budget` bleibt.** Die Sprungmarke unter dem Seitenkopf zeigt
darauf.
