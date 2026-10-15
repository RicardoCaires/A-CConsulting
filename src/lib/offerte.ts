import { nachEndung, nachSchluessel, type Darstellung } from '@/content/offerte-darstellung'

/** Klammern aus einem Katalogtext entfernen, wo keine eigene Darstellung festgelegt ist (15.10.2026). */
export const ohneKlammern = (s: string) =>
  s
    .replace(/\s*\([^)]*\)/g, '')
    .replace(/\s+([?.,:])/g, '$1')
    .trim()

/** Darstellung einer Katalogfrage: zuerst nach ganzem Schlüssel, sonst nach der Endung (z. B. `selbstbehalt`). */
export function darstellungVon(key: string): Darstellung {
  const endung = key.split('.').slice(1).join('.')
  return { ...(nachEndung[endung] ?? {}), ...(nachSchluessel[key] ?? {}) }
}
