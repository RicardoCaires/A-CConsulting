import { StartseiteTemplate } from '@/components/templates/Startseite'

import { beispielStartseite } from '../beispiel'
import { VorlagenKopf } from '../VorlagenKopf'

/** Vorschau Vorlage A mit Beispieldaten. Kein Inhalt, kein oeffentlicher Text. */
export const metadata = { title: 'Vorlage A — Startseite', robots: { index: false } }

export default function VorlageA() {
  return (
    <main>
      <VorlagenKopf
        name="Vorlage A — Startseite"
        abfolge="Einstieg · Bereiche · Geschäftsfälle · Weshalb A&C · Ansprechpartner · Wissen · Abschluss"
        flaechen="DOMINANT · weiss · hell · flaeche · weiss · hell · flaeche"
        regel="Text und Bildfläche nebeneinander. Keine Sektion über etwa fünfzig Wörter Fliesstext."
      />
      <StartseiteTemplate inhalt={beispielStartseite} locale="de" />
    </main>
  )
}
