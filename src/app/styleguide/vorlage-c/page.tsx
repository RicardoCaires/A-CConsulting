import { InhaltsseiteTemplate } from '@/components/templates/Inhaltsseite'

import { beispielInhaltsseite } from '../beispiel'
import { VorlagenKopf } from '../VorlagenKopf'

/** Vorschau Vorlage C mit Beispieldaten. Kein Inhalt, kein oeffentlicher Text. */
export const metadata = { title: 'Vorlage C — Inhaltsseite', robots: { index: false } }

export default function VorlageC() {
  return (
    <main>
      <VorlagenKopf
        name="Vorlage C — Inhaltsseite"
        abfolge="Titel · Einleitung · frei kombinierbare Abschnitte · Abschluss (optional)"
        flaechen="wechselnd, hell beginnend"
        regel="Kein Zwang zu Icons, wo sie nichts erklären."
      />
      <InhaltsseiteTemplate inhalt={beispielInhaltsseite} locale="de" name="Vorlage C" />
    </main>
  )
}
