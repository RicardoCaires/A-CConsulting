import { steuerCheckliste } from '@/content/steuer-checkliste'

type Inhalt = { readonly gruppen: readonly { readonly titel: string; readonly unterlagen: readonly { readonly text: string; readonly wenn?: readonly string[] }[] }[] }

/**
 * Die Unterlagen zu den gewählten Antworten, nach Gruppen; leere Gruppen fallen weg.
 * `inhalt` ist die Fassung einer Sprache (seit 16.10.2026); die Kennungen in `wenn` sind in allen Sprachen gleich.
 */
export function checklisteFuer(antworten: ReadonlySet<string>, inhalt: Inhalt = steuerCheckliste) {
  return inhalt.gruppen
    .map((g) => ({
      titel: g.titel as string,
      unterlagen: g.unterlagen.filter((u) => !u.wenn || u.wenn.some((w) => antworten.has(w))).map((u) => u.text as string),
    }))
    .filter((g) => g.unterlagen.length > 0)
}

export type Checkliste = ReturnType<typeof checklisteFuer>
