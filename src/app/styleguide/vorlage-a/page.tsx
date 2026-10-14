import { Seite } from '@/components/seite/Seite'
import { getSeite } from '@/content/seiten'

import { VorlagenKopf } from '../VorlagenKopf'

/** Vorschau Vorlage A mit dem Inhalt der deutschen Startseite. */
export const metadata = { title: 'Vorlage A — Startseite', robots: { index: false } }

export default function VorlageA() {
  const inhalt = getSeite('de', 'home')
  return (
    <main>
      <VorlagenKopf
        name="Vorlage A — Startseite"
        abfolge="Banner · Einstieg · Leistungen als Listen · Digital mit Beispielansicht · Ansprechpartner · Kontakt"
        flaechen="DOMINANT · weisse Blöcke auf hellblauem Grund"
        regel="Baukasten der Seiten (15.10.2026, Vorbild simply.ch). Zeigt den echten Inhalt der Startseite."
      />
      {inhalt ? <Seite inhalt={inhalt} locale="de" /> : null}
    </main>
  )
}
