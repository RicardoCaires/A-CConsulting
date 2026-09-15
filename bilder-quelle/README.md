# Bildquellen

Die von Ricardo gelieferten Originale, unveraendert.

Ausgeliefert wird nicht von hier, sondern die WebP-Fassung in `public/bilder/`.
Sie ist bei gleicher Groesse rund ein Zehntel so schwer:

| Datei | PNG | WebP (q90) |
|---|---|---|
| `unser-modell` | 1479 KB | 141 KB |
| `startseite-seeland` | 1864 KB | 177 KB |
| `versicherungsschutz_mit_schirm_und_schild` | 641 KB | 67 KB |
| `finanzillustration_mit_rechner_und_ordnern` | 587 KB | 53 KB |
| `kompass_weg_und_gipfelflagge` | 733 KB | 78 KB |

Die drei letzten sind die Bereichsillustrationen der Startseite, von Ricardo am
10.09.2026 geliefert. Sie sind quadratisch (1254 x 1254) und durchsichtig; die
Namen sind seine und werden nicht geändert.

Am selben Tag kamen die sechs Piktogramme der Ausgangslagen dazu, ebenfalls
1254 x 1254 und durchsichtig — zusammen 2257 KB PNG, 278 KB WebP:

| Quelle (Ricardos Name) | ausgeliefert als |
|---|---|
| `moderne_bürogebäude_mit_grünen_akzenten` | `moderne-buerogebaeude` |
| `personen_hinzufügen_symbol` | `personen-hinzufuegen` |
| `minimalist_icon_für_buchhaltung_und_finanzen` | `buchhaltung-und-finanzen` |
| `dokument_mit_grünen_austauschpfeilen` | `dokument-austauschpfeile` |
| `schild_und_lupe_im_mintkreis` | `schild-und-lupe` |
| `schild_warnsymbol_mit_grünen_akzenten` | `schild-warnsymbol` |

Warum umbenannt: Ein Umlaut in einer Adresse geht lokal gut und macht auf dem
Weg über ein CDN, einen Zwischenspeicher oder eine Verknüpfung früher oder
später Ärger. Die Quelldatei behält Ricardos Namen; nur der ausgelieferte
Name ist ASCII. Die Zuordnung steht in `src/components/ui/Piktogramm.tsx`.

`unser-modell` wurde am 09.09.2026 ausgetauscht: Die vorherige Fassung trug
eine falsche Bildmarke — die gruene Spitze sass neben dem Navy-Berg statt auf
ihm. Verbindlich ist die von Ricardo freigegebene Fassung, 1448 x 1086.

Die Originale bleiben liegen, weil sie die Quelle sind: Aus ihnen wird die
ausgelieferte Fassung erzeugt, nie umgekehrt. Wer eine neue Fassung eines
Bildes bekommt, legt sie hier ab und wandelt sie um:

```
node -e "require('sharp')('bilder-quelle/NAME.png').webp({quality:90,effort:6}).toFile('public/bilder/NAME.webp')"
```

Dieser Ordner liegt ausserhalb von `public/` und wird darum nicht mit
ausgeliefert.


## Eine Stelle für Ihre Administration

Am 10.09.2026 geliefert und am selben Tag durch eine zweite Fassung ersetzt.
Verbindlich ist die zweite: fünf quadratische Symbole (1254 x 1254) auf
weissem Plättchen und das Bürobild als freigestelltes Foto (1672 x 941).

**Diese sechs werden vor dem Ausliefern verkleinert**, anders als alle übrigen
Bilder im Projekt. Grund: Die Symbole tragen weiche Schatten und wiegen in
voller Grösse rund 84 KB je Stück, stehen aber bei höchstens 112 px. 384 px
decken die doppelte Punktdichte samt Reserve.

| Datei | Quelle | ausgeliefert |
|---|---|---|
| `01_gruendung` | 1254 px, 490 KB | 384 px, 16 KB |
| `02_buchhaltung` | 1254 px, 581 KB | 384 px, 16 KB |
| `03_lohn` | 1254 px, 487 KB | 384 px, 15 KB |
| `04_versicherungen` | 1254 px, 458 KB | 384 px, 14 KB |
| `05_steuern` | 1254 px, 444 KB | 384 px, 14 KB |
| `06_buero_visual` | 1672 px, 1045 KB | 1400 px, 146 KB |

Umwandeln mit Verkleinern:

```
node -e "require('sharp')('bilder-quelle/NAME.png').resize({width:384}).webp({quality:90,effort:6}).toFile('public/bilder/NAME.webp')"
```


## Zwei Ansprechpartner

Am 10.09.2026 geliefert. Auch diese drei werden vor dem Ausliefern
verkleinert: Die Porträts stehen bei höchstens 200 px, das Logo bei 20 px.

| Datei | Quelle | ausgeliefert |
|---|---|---|
| `portrait_ricardo` | 1448 x 1086 | 560 px, 17 KB |
| `portrait_octavio` | 1448 x 1086 | 560 px, 18 KB |
| `linkedin_logo` | 1254 x 1254 | 96 px, 2 KB |

Das LinkedIn-Logo ist die Marke eines Dritten. Es wird nicht eingefärbt, nicht
beschnitten und nicht an das A&C-Grün angepasst.


## So beginnt die Zusammenarbeit

Am 10.09.2026 geliefert, quadratisch (1024 x 1024) und durchsichtig. Auch
diese werden verkleinert: Die vier Schrittsymbole stehen bei höchstens 72 px,
das Symbol im Hinweiskasten bei 32 px. 177 KB PNG werden zu 29 KB WebP.

| Datei | ausgeliefert |
|---|---|
| `01_kennenlernen` | 256 px, 8 KB |
| `02_situation_pruefen` | 256 px, 6 KB |
| `03_vorschlag_erhalten` | 256 px, 6 KB |
| `04_wir_uebernehmen` | 256 px, 6 KB |
| `05_info` | 128 px, 3 KB |
## Kontaktbereich

Am 10.09.2026 geliefert. Die beiden Symbole bringen ihren gruenen Ring mit —
sie stehen ohne Kreis aus dem Layout dahinter und ohne Umfaerbung.

| Datei | Quelle | ausgeliefert |
|---|---|---|
| `01_telefon` | 1254 x 1254 | 128 px, 3 KB |
| `02_email` | 1254 x 1254 | 128 px, 5 KB |
| `03_kontakt_hintergrundmuster` | 1920 x 720 | 1600 x 600, 42 KB |

Die beiden Symbole hat Ricardo am 10.09.2026 um 13:56 und 14:01 ein zweites
Mal geliefert; die Fassung von 13:36 (je 1024 x 1024) ist ersetzt.

**Sie haben nicht gleich viel Luft um den Kreis:** beim Telefon misst er
74.6 %, bei der E-Mail 82.9 % der Kantenlaenge. In derselben Box waeren die
Kreise elf Prozent verschieden gross. Ausgeglichen wird das im CSS
(`Kontaktabschluss.module.css`) ueber zwei Faktoren, die beide auf 27.3 px
bringen — die Dateien selbst bleiben unangetastet.

**Die Telefondatei hat keinen durchsichtigen Grund**, sondern ein Weiss von
254/255. Auf dem weissen Abschnitt faellt das nicht auf; auf einer Flaeche
stuende dort ein heller Kasten.

Das Hintergrundmuster ist links zu 53.6 Prozent leer — gemessen, nicht
geschaetzt. Es bringt seinen eigenen Rand mit und ist als Band ueber die volle
Abschnittsbreite gedacht, nicht als Aufkleber in der Ecke. Es wird darum
unbeschnitten eingesetzt, obwohl gut die Haelfte der Datei durchsichtig ist.
Sein Ton ist Navy bei acht Prozent Deckung; darum steht der Abschnitt auf
Weiss und nicht auf getoentem Grund.
## Fussbereich

Am 10.09.2026 geliefert. Ricardo hat im Auftrag **sechs** Dateien genannt;
im Assets-Ordner lag zu diesem Zeitpunkt genau eine davon.

| Datei | Quelle | ausgeliefert |
|---|---|---|
| `dunkelblaue_minimalismus_landschaft_mit_gruener_linie` | 1916 x 821 | 1600 x 686, 8 KB |
| `footer_referenz` | 1916 x 821 | nur Vorlage, nicht ausgeliefert |

Das Hintergrundbild lag unter einem zufaelligen Namen
(`c20f6b12-eee1-458c-a018-811fa35dbcd5.png`) und ist hier auf den Namen aus
dem Auftrag umbenannt. Seine gruene Linie sitzt in den obersten **drei** von
821 Pixeln, der Grundton ist 1,33,74 — praktisch `navy_deep`. Darum steht der
Fussbereich auf dem Token und das Bild nur darueber.

`footer_referenz.png` ist die Gestaltungsvorlage, kein Seitenbestandteil. Alle
Masse im Fussbereich stammen daraus: senkrechte Trennlinien bei 28.5, 50.0 und
71.5 Prozent der Inhaltsbreite, Logo 20.8 Prozent, gruener Strich unter den
Spaltentiteln 42 von 1916 px.

**Diese vier Dateien fehlen** und sind im Auftrag genannt:

| erwartet | wofuer |
|---|---|
| `minimalist_weisser_standort_pin` | Adresszeile |
| `minimalist_weisses_telefonhoerer_symbol` | Telefonzeile |
| `minimalistisches_weisses_briefsymbol` | E-Mail-Zeile |
| `gruener_chevron_auf_transparentem_hintergrund` | hinter jedem Link |

Solange sie fehlen, stehen die Zeilen und Links ohne Symbol. Es wird nichts
nachgezeichnet und nichts aus einer Bibliothek geholt.

`a_c_consulting_berglogo` fehlt ebenfalls. Dafuer wird nichts beschafft: Das
Negativlogo aus dem Corporate Design liegt bereits unter
`public/logo/ac-logo-negativ.png` und ist die verbindliche Fassung.
## Seitenkopf Versicherungen

Am 10.09.2026 geliefert. Beide Dateien lagen unter Arbeitsnamen
(`Background bild.png`, `Header Versicherungen.png`) und sind hier auf die
Namen aus dem Auftrag umbenannt.

| Datei | Quelle | ausgeliefert |
|---|---|---|
| `wide_cinematic_vector_3d_illustration_style_insu` | 1896 x 830 | 1600 x 700, 260 KB |
| `versicherungen_seitenkopf_referenz` | 1896 x 829 | nur Vorlage, nicht ausgeliefert |

**260 KB sind viel** — mehr als alles andere auf der Seite zusammen. Die Datei
ist ein Farbverlauf mit weichen Uebergaengen; niedrigere Qualitaet bringt fast
nichts (bei q68 noch 237 KB). Kleiner ginge es nur ueber die Breite, und die
ist mit 1600 px schon knapp: Der Kopf zeigt das Bild auf 78 Prozent der
Fensterbreite.

Das Bild traegt links seinen eigenen Navy-Grund (3,34,74 — praktisch
`navy_deep`) und wird darum nicht freigestellt, sondern rechts angesetzt. Das
helle Motiv beginnt bei 45.6 Prozent der Bildbreite.

`versicherungen_seitenkopf_referenz.png` ist die Gestaltungsvorlage. Alle Masse
im Kopf stammen daraus: Kopfhoehe 29.5 Prozent der Breite, Text ab der normalen
Containerkante, helles Motiv ab 58.5 Prozent.
## Unser Modell (Versicherungsseite)

Am 10.09.2026 geliefert, **in zwei Runden**. Die erste Runde waren
Bildschirmausschnitte aus der Referenzgrafik: In `01` bis `03` klebte der Titel
im Bild, `04` und `05` enthielten Reste der Nachbarelemente, und die eigentlichen
Symbole massen rund 60 px. Sie sind nicht eingesetzt worden. Ricardo hat noch am
selben Tag freigestellte Symbole nachgeliefert; diese liegen hier.

| Datei | Quelle | ausgeliefert |
|---|---|---|
| `01_icon_unabhaengig` | 1254 x 1254 | 192 px, 5 KB |
| `02_icon_objektiv` | 1254 x 1254 | 192 px, 7 KB |
| `03_icon_interesse` | 1254 x 1254 | 192 px, 4 KB |
| `04_icon_kunde` | 1254 x 1254 | 192 px, 5 KB |
| `05_logo_ac_consulting` | 1448 x 1086 | 440 px, 22 KB |
| `06_panel_versicherungsgesellschaften` | 1448 x 1086 | 760 px, 58 KB |
| `07_benefit_sparschwein` | 1254 x 1254 | 192 px, 5 KB |
| `08_benefit_diamant` | 1254 x 1254 | 192 px, 4 KB |
| `09_benefit_schild` | 1254 x 1254 | 192 px, 4 KB |
| `10_benefit_handshake` | 1254 x 1254 | 192 px, 4 KB |
| `11_hintergrundmuster` | 1600 x 900 | 1600 x 900, 6 KB |
| `unser-modell_referenz` | 1600 x 1080 | nur Vorlage, nicht ausgeliefert |

Zusammen 124 KB — der ganze Abschnitt wiegt weniger als die eine Bilddatei,
die er ersetzt (`unser-modell.webp`, 96 KB, plus unlesbar auf dem Telefon).

Die Titel stehen **nicht** in den Bildern, sondern als Text daneben. Die
Symbole tragen ihren hellblauen Kreis selbst; im Layout liegt keine Flaeche
dahinter und es wird nichts umgefaerbt.

`05_logo_ac_consulting` ist die Fassung mit dem Zusatz „Versicherungen ·
Treuhand". Sie steht **nur** in diesem Abschnitt. Kopf- und Fussbereich tragen
weiterhin die Fassung aus dem Corporate Design (`public/logo/`).

`unser-modell.webp` bleibt liegen. Die Datei ist von Ricardo freigegeben und
wird nicht geloescht, steht seit dem 10.09.2026 aber auf keiner Seite mehr.

`unser-modell_referenz.html` ist Ricardos dritte und verbindliche Vorlage fuer
diesen Abschnitt, geliefert am 10.09.2026. Sie ist kein Bild, sondern fertiger
Quelltext — Aufbau, Groessen und Abstaende stammen von dort. Uebernommen wurde
die Gestaltung, nicht der Code: Farbwerte und Georgia sind durch die
Projekt-Tokens und die Schrift der Website ersetzt.

`wide_minimal_abstract_background_design_a_clean.png` (1672 x 941, ausgeliefert
als WebP mit 12 KB) ist der Hintergrund des Modellabschnitts, geliefert am
10.09.2026. Grundton 229,235,244, Tonumfang 213 bis 250 — der ganze Umfang
liegt so eng beieinander, dass die Datei ohne Abschwaechung deckt.

`11_hintergrundmuster` war die erste Fassung und bleibt liegen; sie steht auf
keiner Seite mehr.
## Für Privatpersonen / Für Unternehmen

Am 10.09.2026 geliefert, freigestellt und quadratisch. Die Piktogramme bringen
ihren gruenen Kreis mit; im Layout liegt keine Flaeche dahinter.

| Datei | Quelle | ausgeliefert |
|---|---|---|
| `01_privathaushalt_haus` | 1024 x 1024 | 192 px, 4 KB |
| `02_mitarbeitende` | 1024 x 1024 | 192 px, 6 KB |
| `03_betrieb_gebaeude` | 1024 x 1024 | 192 px, 5 KB |
| `versicherungen_segmente_referenz` | 1672 x 941 | nur Vorlage, nicht ausgeliefert |

**`04_hintergrundmuster.png` war im Auftrag genannt, lag aber nicht im
Assets-Ordner.** Der Abschnitt steht darum auf dem ruhigen Grundton der hellen
Bereiche, ohne Muster. Nachgezeichnet wird nichts; kommt die Datei, tritt sie
ohne Umbau dazu.
## Nach dem Abschluss hört es nicht auf

Am 10.09.2026 geliefert, freigestellt und quadratisch. Sie bringen ihren
hellgruenen Kreis mit; im Layout liegt keine Flaeche dahinter.

| Datei | Quelle | ausgeliefert |
|---|---|---|
| `01_betreuung_adresse` | 1254 x 1254 | 224 px, 8 KB |
| `02_betreuung_familie` | 1254 x 1254 | 224 px, 10 KB |
| `03_betreuung_praemie` | 1254 x 1254 | 224 px, 8 KB |
| `04_betreuung_ansprechpartner` | 1254 x 1254 | 224 px, 9 KB |
| `05_betreuung_persoenlich` | 1254 x 1254 | 224 px, 9 KB |
| `versicherungen_betreuung_referenz` | 1672 x 941 | nur Vorlage, nicht ausgeliefert |

Zusammen 44 KB. Ausgeliefert bei 224 px, dargestellt bei 80 px — Reserve fuer
Bildschirme mit doppelter Punktdichte.

Fuer den Hintergrund war keine eigene Datei dabei. Der Abschnitt nimmt darum
`wide_minimal_abstract_background_design_a_clean`, dieselbe Datei wie der
Modellabschnitt weiter oben auf derselben Seite.
## Wenn ein Schaden eintritt

Am 11.09.2026 geliefert.

| Datei | Quelle | ausgeliefert |
|---|---|---|
| `01_schaden_warnung` | 1254 x 1254 | 224 px, 7 KB |
| `02_schaden_dokument` | 1254 x 1254 | 224 px, 6 KB |
| `03_schaden_telefon` | 1254 x 1254 | 224 px, 7 KB |
| `04_schaden_begleitung` | 1254 x 1254 | 224 px, 7 KB |
| `05_versicherungspartner` | 1448 x 1086 | 900 px, 92 KB |
| `06_schaden_hintergrund` | 1672 x 941 | 1672 px, 15 KB |
| `versicherungen_schadenfall_referenz` | 1672 x 941 | nur Vorlage, nicht ausgeliefert |

Zusammen 134 KB.

**Das Logoraster bleibt eine Datei** und wird nicht in neun Teile zerlegt: Ein
Zuschnitt waere eine Veraenderung an fremden Marken. Sein Alternativtext
zaehlt die neun Gesellschaften auf.

**Es zeigt andere Gesellschaften als das Raster im Modellabschnitt**: hier GVB
und Smile, dort Swiss Life. Auf derselben Seite stehen damit zwei
verschiedene Aufzaehlungen.

## Treuhand — Was wir uebernehmen

Am 11.09.2026 geliefert, als SVG. Die Quellen liegen unter
`treuhand_leistungen/`, ausgeliefert werden sie **unveraendert** aus
`public/bilder/treuhand/` — keine Umwandlung in WebP: Ein SVG dieser Art ist
bereits die kleinste und schaerfste Form.

| Datei | Quelle | ausgeliefert |
|---|---|---|
| `01_buchhaltung` | SVG, 512 x 512 | unveraendert, 608 B |
| `02_lohnbuchhaltung` | SVG, 512 x 512 | unveraendert, 722 B |
| `03_mehrwertsteuer` | SVG, 512 x 512 | unveraendert, 648 B |
| `04_jahresabschluss` | SVG, 512 x 512 | unveraendert, 581 B |
| `05_unternehmensadministration` | SVG, 512 x 512 | unveraendert, 761 B |
| `06_firmengruendung` | SVG, 512 x 512 | unveraendert, 612 B |
| `07_steuern_firmen` | SVG, 512 x 512 | unveraendert, 556 B |

Zusammen 4.4 KB.

Jede Datei bringt ihren hellen Kreis selbst mit (Radius 168 von 512) und
ringsum einen transparenten Rand. Das Stylesheet gleicht den Rand mit einem
negativen Aussenabstand aus, statt die Datei zu beschneiden.

**Die Farben stehen in den Dateien** und stammen nicht aus den Design-Tokens:
ein Navy nahe `navy_deep` und ein helleres Gruen als `accent_green`. Auf
Ricardos Anweisung bleiben sie, wie sie sind. `07_steuern_firmen` setzt das
Paragrafenzeichen als Text in Arial.

## Treuhand — So laeuft eine Zusammenarbeit an

Am 11.09.2026 geliefert, als SVG. Die Quellen liegen unter
`treuhand_vorgehen/`, ausgeliefert werden sie **unveraendert** aus
`public/bilder/treuhand/`.

| Datei | Quelle | ausgeliefert |
|---|---|---|
| `01_schritt_01` | SVG, 512 x 512 | unveraendert, 454 B |
| `02_schritt_02` | SVG, 512 x 512 | unveraendert, 454 B |
| `03_schritt_03` | SVG, 512 x 512 | unveraendert, 454 B |
| `04_schritt_04` | SVG, 512 x 512 | unveraendert, 454 B |

Zusammen 1.8 KB.

Jede Datei ist ein heller gruener Kreis mit feinem Rand (Radius 168, Rand 6)
und der Nummer als Text in Georgia. Wie bei den Leistungssymbolen gleicht das
Stylesheet den transparenten Rand mit einem negativen Aussenabstand aus.

## Treuhand — Sie haben bereits einen Treuhaender?

Am 11.09.2026 geliefert, als SVG. Die Quellen liegen unter
`treuhand_wechsel/`, ausgeliefert werden sie **unveraendert** aus
`public/bilder/treuhand/wechsel/` — ein eigener Ordner, weil `04_schritt_1`
neben `04_schritt_04` des Ablaufs zu leicht zu verwechseln waere.

| Datei | Quelle | ausgeliefert |
|---|---|---|
| `01_situation_pruefen` | SVG, 512 x 512 | unveraendert |
| `02_uebergabe_planen` | SVG, 512 x 512 | unveraendert |
| `03_reibungslos_uebernehmen` | SVG, 512 x 512 | unveraendert |
| `04_schritt_1` | SVG, 512 x 512 | unveraendert |
| `05_schritt_2` | SVG, 512 x 512 | unveraendert |
| `06_schritt_3` | SVG, 512 x 512 | unveraendert |

Die Symbole tragen einen hellen Kreis (Radius 160), die Nummern einen Kreis
mit Rand (Radius 170, Rand 6) und die Ziffer in Arial. Beide gruenen Toene der
Dateien weichen von `accent_green` ab; sie bleiben, wie sie sind.

**Nachlieferung Handschlag, 11.09.2026.** Ricardo hat das Symbol fuer
„Reibungslos uebernehmen" ersetzt, als PNG unter dem Namen
`367ab906-f35d-4d62-9ebf-bc35287bd99e.png` (1254 x 1254, weisser Grund, kein
Alphakanal). Die Datei liegt mit diesem Namen unter `treuhand_wechsel/`,
ausgeliefert wird sie als `03_handschlag.webp` (224 px). Nichts beschnitten,
nichts umgefaerbt.

Ihr Kreis misst 913 von 1254 px, also 72.8 Prozent; bei den SVG sind es 62.5.
Der Baustein setzt die Datei darum etwas kleiner, damit der Kreis so gross
steht wie die beiden anderen. `03_reibungslos_uebernehmen.svg` bleibt liegen,
steht aber auf keiner Seite mehr.

## Buchhaltung — Was wir uebernehmen und So laeuft die Zusammenarbeit

Am 11.09.2026 geliefert, sechs PNG mit den Namen, die ChatGPT vergeben hat.
Sie liegen mit diesen Namen unter `buchhaltung/`; ausgeliefert werden sie aus
`public/bilder/buchhaltung/` unter sprechenden Namen.

| Datei (Lieferung) | ausgeliefert | Quelle | ausgeliefert |
|---|---|---|---|
| `… 13_41_48 (1).png` | `dokument.webp` | 1254 x 1254, RGBA | 256 px, 8 KB |
| `… 13_41_48 (2).png` | `balken.webp` | 1254 x 1254, RGBA | 256 px, 8 KB |
| `… 13_41_49 (3).png` | `uhr.webp` | 1254 x 1254, RGBA | 256 px, 10 KB |
| `… 13_41_49 (4).png` | `sprechblase.webp` | 1254 x 1254, RGBA | 256 px, 9 KB |
| `… 13_41_50 (5).png` | `zahnrad.webp` | 1254 x 1254, RGBA | 256 px, 11 KB |
| `… 13_41_50 (6).png` | `hintergrund.webp` | 1448 x 1086, RGB | 1448 px, 10 KB |

**Die fuenf Symbole sind auf ihren Kreis zugeschnitten.** Der Kreis mass je
Datei zwischen 69 und 82 Prozent der Kantenlaenge, und um ihn lagen lose
halbtransparente Pixel. Zugeschnitten wurde mechanisch: ein Quadrat um den
Kreis mit 2 Prozent Rand, ausserhalb des Kreises transparent. Kreis und
Zeichen sind unveraendert, nichts umgefaerbt.

Der Hintergrund hat genau das Format der Referenzgrafik (1448 x 1086) und
traegt beide Abschnitte zusammen; er wird nicht beschnitten, sondern deckt die
Flaeche.

Die Nummernkreise des Ablaufs sind keine neuen Dateien, sondern
`01_schritt_01` bis `04_schritt_04` aus dem Ablauf der Treuhandseite.

## Buchhaltung — Was Sie uns liefern

Am 11.09.2026 geliefert, acht PNG. Sie liegen mit ihren Namen unter
`buchhaltung/`; die Referenzgrafik heisst dort `was-sie-liefern_referenz.png`
(1672 x 941, nicht ausgeliefert).

| Datei (Lieferung) | ausgeliefert | Quelle | ausgeliefert |
|---|---|---|---|
| `… 14_43_03 (1).png` | `liefern_dokument.webp` | 1254 x 1254, RGB | 256 px, 6 KB |
| `… 14_43_03 (2).png` | `liefern_eingang.webp` | 1254 x 1254, RGB | 256 px, 6 KB |
| `… 14_43_04 (3).png` | `liefern_quittung.webp` | 1254 x 1254, RGB | 256 px, 7 KB |
| `… 14_43_05 (4).png` | `liefern_personen.webp` | 1254 x 1254, RGB | 256 px, 8 KB |
| `… 14_43_06 (5).png` | `liefern_laptop.webp` | 1254 x 1254, RGB | 256 px, 5 KB |
| `… 14_43_07 (6).png` | `liefern_hintergrund.webp` | 1672 x 941, RGB | 1672 px, 13 KB |
| `… 14_43_07 (7).png` | — | 1254 x 1254, RGB | nicht ausgeliefert |

**Die Symbole standen auf weissem Grund** und trugen ihren Kreis in
verschiedenen Groessen (48 bis 66 Prozent der Datei). Zugeschnitten wie bei
den Symbolen darueber: Quadrat um den Kreis mit 2 Prozent Rand, ausserhalb des
Kreises transparent. Kreis und Zeichen unveraendert.

**Die Linie (7)** ist eine 4 px dicke Linie im Ton 190/212/236 auf Weiss. Sie
steht als Rahmen in `border_tint` im Stylesheet, nicht als Bild.

## Steuern — Für Privatpersonen / Für Selbständige und Firmen

Am 11.09.2026 geliefert, sechs PNG. Sie liegen mit ihren Namen unter
`steuern/`; die Referenzgrafik heisst dort `zielgruppen_referenz.png`
(1672 x 941, nicht ausgeliefert). Ausgeliefert wird flach unter
`public/bilder/`, mit dem Vorsatz `steuern_`.

| Datei (Lieferung) | ausgeliefert | Quelle |
|---|---|---|
| `… 15_08_42 (1).png` | `steuern_frist.webp` (Uhr) | 1254 x 1254, RGBA |
| `… 15_08_43 (2).png` | `steuern_abzuege.webp` (Münzen) | 1254 x 1254, RGBA |
| `… 15_08_43 (3).png` | `steuern_veranlagung.webp` (Dokument mit Haken) | 1254 x 1254, RGBA |
| `… 15_08_43 (4).png` | `steuern_einort.webp` (Balken) | 1254 x 1254, RGBA |
| `… 15_08_44 (5).png` | `steuern_hintergrund.webp` | 1672 x 941, RGB |

Die Symbole sind wie die der Buchhaltungsseite auf ihren Kreis zugeschnitten
(Quadrat mit 2 Prozent Rand, ausserhalb des Kreises transparent); Kreis und
Zeichen unverändert.

## Steuern — Checkliste und Fristen

Am 14.09.2026 geliefert: drei SVG, ein PNG und die Referenzgrafik. Die SVG
werden **unveraendert** ausgeliefert.

| Datei (Lieferung) | ausgeliefert | Quelle |
|---|---|---|
| `01_checkliste_kanton_bern.svg` | `steuern_checkliste.svg` | SVG, 900 x 1100 |
| `02_icon_privatpersonen.svg` | `steuern_icon_privatpersonen.svg` | SVG, 700 x 700 |
| `03_icon_unternehmen.svg` | `steuern_icon_unternehmen.svg` | SVG, 700 x 700 |
| `04_bern_stockfoto_original.png` | — | PNG, 505 x 280, **nicht im Repository** |
| `321eb36b-…png` | — | Referenz, 1672 x 941 |

**Das Bern-Foto ist nicht ausgeliefert.** Die Datei misst 505 x 280 px und
traegt am unteren Rand das Wasserzeichen „shutterstock.com 2181102791". Eine
unlizenzierte Vorschau wird weder veroeffentlicht noch ins Repository
uebernommen; ausserdem waere sie fuer ein
Bild ueber die volle Breite zu klein. Noetig ist eine lizenzierte Fassung mit
mindestens 2000 px Breite.

Die Checklisten-Abbildung traegt laut Kommentar in der Datei bewusst **kein
offizielles Berner Wappen**, sondern eine neutrale Form.

**Zweite Lieferung am selben Tag.** Ricardo hat den Abschnitt mit einer
zweiten Referenzgrafik und einem ausgeschriebenen Auftragstext neu bestellt.
Die drei SVG sind unveraendert dieselben; neu ist nur der Aufbau. Der
Bildstreifen ist gebaut und bleibt leer, bis das lizenzierte Foto vorliegt.
Zwei im Auftrag genannte Zeichen fehlen ebenfalls — Kalender und Uhr fuer die
Fristenzeilen, dazu das Pin- und das Download-Zeichen. Nachgezeichnet wird
nichts.

## Firmengruendung — Einzelfirma oder GmbH?

Am 14.09.2026 geliefert, vier SVG. Sie werden **unveraendert** ausgeliefert.

| Datei (Lieferung) | ausgeliefert | Quelle |
|---|---|---|
| `01_icon_einzelfirma.svg` | `firmengruendung_einzelfirma.svg` | SVG, 700 x 700 |
| `02_icon_gmbh.svg` | `firmengruendung_gmbh.svg` | SVG, 700 x 700 |
| `03_icon_beratung.svg` | `firmengruendung_beratung.svg` | SVG, 700 x 700 |
| `04_hintergrundmuster.svg` | `firmengruendung_muster.svg` | SVG, 1920 x 1200 |

Die drei Symbole bringen ihren Kreis mit (Radius 250 von 700, also 71.4
Prozent); den durchsichtigen Rest gleicht das Stylesheet mit einem negativen
Aussenabstand aus. Das Muster bringt seinen eigenen hellen Grund mit — der
Abschnitt legt darum keine zweite Flaeche darunter.

**Zweite Lieferung am selben Tag.** Ricardo hat den Abschnitt mit einer
zweiten Referenzgrafik und einem ausgeschriebenen Auftragstext neu bestellt.
Die vier SVG sind unveraendert dieselben; neu sind Aufbau und Wortlaut.

## Firmengruendung — Wer uebernimmt welchen Teil?

Am 14.09.2026 geliefert: eine fertige HTML-Vorlage und vier Piktogramme, je
als SVG und PNG. Die SVG werden **unveraendert** ausgeliefert; die PNG liegen
nur als Reserve hier.

| Datei (Lieferung) | ausgeliefert | Quelle |
|---|---|---|
| `piktogramm-ac-consulting.svg` | `firmengruendung_rolle_ac.svg` | SVG, viewBox 160 |
| `piktogramm-notariat.svg` | `firmengruendung_rolle_notariat.svg` | SVG, viewBox 120 |
| `piktogramm-bank.svg` | `firmengruendung_rolle_bank.svg` | SVG, viewBox 120 |
| `piktogramm-behoerden.svg` | `firmengruendung_rolle_behoerden.svg` | SVG, viewBox 120 |
| `gruendung-zustaendigkeiten.html` | — | Vorlage, liegt als `vorlage.html` |

Die Dateien tragen keine `width`- und `height`-Angaben, nur eine viewBox. Der
Browser meldet dafuer `naturalWidth: 0`; das Stylesheet gibt die Groesse vor,
gezeichnet werden sie normal. Nachgeprueft am 14.09.2026, indem die vier Bilder
auf eine Leinwand gezeichnet und die Pixel gezaehlt wurden.

## Firmengruendung — Gruendungscheckliste

Am 14.09.2026 als fertige HTML-Vorlage geliefert; die Abbildung stand im
Quelltext, nicht als eigene Datei. Sie ist unveraendert herausgeloest.

| Datei (Lieferung) | ausgeliefert | Quelle |
|---|---|---|
| `gruendungscheckliste.html` | — | Vorlage, liegt als `vorlage.html` |
| daraus das SVG | `firmengruendung_checkliste.svg` | SVG, viewBox 220 |

## Treuhaender wechseln — Was einen Wechsel ausloesen kann

Am 14.09.2026 als HTML-Vorlage geliefert, dazu drei Piktogramme als SVG und
PNG. Die SVG werden **unveraendert** ausgeliefert.

| Datei (Lieferung) | ausgeliefert | Quelle |
|---|---|---|
| `piktogramm-treuhaenderwechsel-betreuung.svg` | `wechsel_grund_betreuung.svg` | SVG, viewBox 96 |
| `piktogramm-treuhaenderwechsel-ueberblick.svg` | `wechsel_grund_ueberblick.svg` | SVG, viewBox 96 |
| `piktogramm-treuhaenderwechsel-entwicklung.svg` | `wechsel_grund_entwicklung.svg` | SVG, viewBox 96 |
| `treuhaenderwechsel-gruende.html` | — | Vorlage, liegt als `vorlage.html` |

Alle drei tragen denselben Kreisanteil: Radius 43 von 96, also 89.6 Prozent
der Datei.

## Firmengruendung — Rechtsformvergleich, dritte Fassung

Am 15.09.2026 als HTML-Vorlage geliefert, dazu zwei Piktogramme als SVG und
PNG. Sie ersetzen die vom 14.09.2026 und werden **unveraendert** ausgeliefert.

| Datei (Lieferung) | ausgeliefert | Quelle |
|---|---|---|
| `piktogramm-rechtsform-einzelfirma.svg` | `firmengruendung_einzelfirma.svg` | SVG, viewBox 96 |
| `piktogramm-rechtsform-gmbh.svg` | `firmengruendung_gmbh.svg` | SVG, viewBox 96 |
| `rechtsformvergleich.html` | — | Vorlage, liegt als `vorlage.html` |

Beide tragen ihren Kreis auf 89.6 Prozent der Datei (Radius 43 von 96); die
vorigen lagen bei 71.4. Das Stylesheet rechnet den durchsichtigen Rand
entsprechend heraus. `firmengruendung_beratung.svg` bleibt liegen — die neue
Vorlage zeigt in der Hinweisleiste kein Symbol mehr.

## Treuhaender wechseln — Wann ist ein Wechsel sinnvoll?

Am 15.09.2026 als HTML-Vorlage geliefert, dazu zwei Piktogramme als SVG und
PNG. Die SVG werden **unveraendert** ausgeliefert.

| Datei (Lieferung) | ausgeliefert | Quelle |
|---|---|---|
| `piktogramm-wechselzeitpunkt-geschaeftsjahr.svg` | `wechsel_zeitpunkt_geschaeftsjahr.svg` | SVG, viewBox 112 |
| `piktogramm-wechselzeitpunkt-unterjaehrig.svg` | `wechsel_zeitpunkt_unterjaehrig.svg` | SVG, viewBox 112 |
| `treuhaenderwechsel-zeitpunkt.html` | — | Vorlage, liegt als `vorlage.html` |

## Treuhaender wechseln — So laeuft der Wechsel ab

Am 15.09.2026 als HTML-Vorlage geliefert, zwanzig Minuten spaeter fuenf
Piktogramme als SVG und PNG. Die SVG werden **unveraendert** ausgeliefert.

| Datei (Lieferung) | ausgeliefert | Quelle |
|---|---|---|
| `piktogramm-wechselablauf-situation.svg` | `wechsel_ablauf_situation.svg` | SVG, viewBox 96 |
| `piktogramm-wechselablauf-leistungen.svg` | `wechsel_ablauf_leistungen.svg` | SVG, viewBox 96 |
| `piktogramm-wechselablauf-zeitpunkt.svg` | `wechsel_ablauf_zeitpunkt.svg` | SVG, viewBox 96 |
| `piktogramm-wechselablauf-uebergabe.svg` | `wechsel_ablauf_uebergabe.svg` | SVG, viewBox 96 |
| `piktogramm-wechselablauf-start.svg` | `wechsel_ablauf_start.svg` | SVG, viewBox 96 |
| `treuhaenderwechsel-ablauf-horizontal.html` | — | Vorlage, liegt als `vorlage.html` |

Die Vorlage selbst zeigt nur die Nummernkreise. Die Piktogramme sind trotzdem
eingesetzt, weil sie nach genau diesen fuenf Schritten benannt sind.

## Finanzplanung — Budget

Am 15.09.2026 als HTML-Vorlage geliefert; die Illustration stand im Quelltext,
nicht als eigene Datei. Sie ist unveraendert herausgeloest.

| Datei (Lieferung) | ausgeliefert | Quelle |
|---|---|---|
| `finanzplanung-budget.html` | — | Vorlage, liegt als `vorlage.html` |
| daraus das SVG | `finanzplanung_budget.svg` | SVG, viewBox 360 x 300 |

## Finanzplanung — Vorsorge

Am 15.09.2026 als HTML-Vorlage geliefert; die Dreisaeulenillustration stand im
Quelltext. Sie ist unveraendert herausgeloest.

| Datei (Lieferung) | ausgeliefert | Quelle |
|---|---|---|
| `finanzplanung-vorsorge.html` | — | Vorlage, liegt als `vorlage.html` |
| daraus das SVG | `finanzplanung_vorsorge.svg` | SVG, viewBox 420 x 360 |

Die Ziffern 1, 2 und 3 stehen in der Datei als Schrift (Arial). Diese
Illustration traegt als einzige einen Alternativtext, weil sie die drei
Saeulen nummeriert.

## Ueber uns — Einstieg und die beiden Inhaber

Am 15.09.2026 als zwei HTML-Vorlagen geliefert. **Keine der beiden brachte
Bilddateien mit**; die Ordner enthalten darum nur die Vorlage.

| Datei (Lieferung) | ausgeliefert | Quelle |
|---|---|---|
| `ueber-uns-einstieg.html` | — | Vorlage, liegt als `ueberuns_einstieg/vorlage.html` |
| `ueber-uns-inhaber.html` | — | Vorlage, liegt als `ueberuns_inhaber/vorlage.html` |

Die beiden Profilkarten zeigen `portrait_ricardo.webp` und
`portrait_octavio.webp`. Beide lagen seit dem Aufbau der Startseite unter
`public/bilder/` und sind unveraendert; die Vorlage sah dort Platzhalter vor.
Fuer die gemeinsame Aufnahme im Einstieg fehlt die Datei weiterhin.

## Ueber uns — Wie wir arbeiten

Am 15.09.2026 als HTML-Vorlage mit fuenf Piktogrammen geliefert, je als SVG
und PNG. Ausgeliefert wird das SVG; die Dateien sind unveraendert.

| Datei (Lieferung) | ausgeliefert | Quelle |
|---|---|---|
| `ueber-uns-arbeitsweise.html` | — | Vorlage, liegt als `vorlage.html` |
| `piktogramm-arbeitsweise-persoenlich.svg` | `arbeitsweise_persoenlich.svg` | SVG, viewBox 96 |
| `piktogramm-arbeitsweise-nachvollziehbar.svg` | `arbeitsweise_nachvollziehbar.svg` | SVG, viewBox 96 |
| `piktogramm-arbeitsweise-digital.svg` | `arbeitsweise_digital.svg` | SVG, viewBox 96 |
| `piktogramm-arbeitsweise-vertraulich.svg` | `arbeitsweise_vertraulich.svg` | SVG, viewBox 96 |
| `piktogramm-arbeitsweise-klare-grenzen.svg` | `arbeitsweise_grenzen.svg` | SVG, viewBox 96 |

Der helle Kreis fuellt bei allen fuenf Dateien denselben Anteil (r = 43 von
96). Sie stehen darum ohne Umrechnung gleich gross. Die PNG-Fassungen liegen
als Quelle daneben und werden nicht ausgeliefert.

## Ueber uns — Standort

Am 15.09.2026 als HTML-Vorlage geliefert. Bilddateien lagen keine bei; das
Ortsschild traegt ein kleines Pin-Zeichen, das im Quelltext der Vorlage stand
und unveraendert herausgeloest ist.

| Datei (Lieferung) | ausgeliefert | Quelle |
|---|---|---|
| `ueber-uns-standort.html` | — | Vorlage, liegt als `vorlage.html` |
| daraus das Pin-SVG | `standort_pin.svg` | SVG, viewBox 24 |

Die Aufnahme des Standorts in Aegerten fehlt weiterhin; die Flaeche ist bis
dahin ein ruhiger getoenter Platzhalter ohne Hinweis auf interne Listen.

