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
        abfolge="Einstieg · Bereiche · Anliegen · Weshalb A&C · Ablauf · Ansprechpartner · Abschluss"
        flaechen="hell · weiss · hell · DUNKEL · weiss · hell · weiss"
        regel="Keine Sektion über etwa fünfzig Wörter Fliesstext."
      />
      <StartseiteTemplate inhalt={beispielStartseite} locale="de" />
    </main>
  )
}
