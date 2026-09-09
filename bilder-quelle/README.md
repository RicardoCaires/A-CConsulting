# Bildquellen

Die von Ricardo gelieferten Originale, unveraendert.

Ausgeliefert wird nicht von hier, sondern die WebP-Fassung in `public/bilder/`.
Sie ist bei gleicher Groesse rund ein Zehntel so schwer:

| Datei | PNG | WebP (q90) |
|---|---|---|
| `unser-modell` | 1393 KB | 150 KB |
| `startseite-seeland` | 1864 KB | 177 KB |

Die Originale bleiben liegen, weil sie die Quelle sind: Aus ihnen wird die
ausgelieferte Fassung erzeugt, nie umgekehrt. Wer eine neue Fassung eines
Bildes bekommt, legt sie hier ab und wandelt sie um:

```
node -e "require('sharp')('bilder-quelle/NAME.png').webp({quality:90,effort:6}).toFile('public/bilder/NAME.webp')"
```

Dieser Ordner liegt ausserhalb von `public/` und wird darum nicht mit
ausgeliefert.
