import { steuerCheckliste } from '@/content/steuer-checkliste'

/** Die Unterlagen zu den gewählten Antworten, nach Gruppen; leere Gruppen fallen weg. */
export function checklisteFuer(antworten: ReadonlySet<string>) {
  return steuerCheckliste.gruppen
    .map((g) => ({
      titel: g.titel as string,
      unterlagen: g.unterlagen
        .filter((u) => !('wenn' in u) || u.wenn.some((w) => antworten.has(w)))
        .map((u) => u.text as string),
    }))
    .filter((g) => g.unterlagen.length > 0)
}

export type Checkliste = ReturnType<typeof checklisteFuer>
