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
