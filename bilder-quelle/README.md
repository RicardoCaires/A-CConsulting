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
