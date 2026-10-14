import { StartseiteTemplate } from '@/components/templates/Startseite'

import { getStartseite } from '@/content/startseite'
import { VorlagenKopf } from '../VorlagenKopf'

/** Vorschau Vorlage A mit dem Inhalt der deutschen Startseite. */
export const metadata = { title: 'Vorlage A — Startseite', robots: { index: false } }

export default function VorlageA() {
  const inhalt = getStartseite('de')
  return (
    <main>
      <VorlagenKopf
        name="Vorlage A — Startseite"
        abfolge="Banner · Einstieg · Leistungen als Listen · Digital mit Beispielansicht · Ansprechpartner · Kontakt"
        flaechen="DOMINANT · weisse Blöcke auf hellblauem Grund"
        regel="Fassung vom 14.10.2026 (Vorbild simply.ch). Zeigt den echten Inhalt der Startseite."
      />
      {inhalt ? <StartseiteTemplate inhalt={inhalt} locale="de" /> : null}
    </main>
  )
}
