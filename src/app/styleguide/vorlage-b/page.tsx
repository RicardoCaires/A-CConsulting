import { LeistungsseiteTemplate } from '@/components/templates/Leistungsseite'

import { beispielLeistungsseite } from '../beispiel'
import { VorlagenKopf } from '../VorlagenKopf'

/** Vorschau Vorlage B mit Beispieldaten. Kein Inhalt, kein oeffentlicher Text. */
export const metadata = { title: 'Vorlage B — Leistungsseite', robots: { index: false } }

export default function VorlageB() {
  return (
    <main>
      <VorlagenKopf
        name="Vorlage B — Leistungsseite"
        abfolge="Seitenkopf (einspaltig) · Das übernehmen wir · Ablauf · Vertiefung (optional) · Fragen · Abschluss"
        flaechen="DOMINANT · weiss · hell · weiss · hell · flaeche"
        regel="Für jede Leistung identisch. Der Wortlaut der Zwischentitel kommt aus dem Inhalt."
      />
      <LeistungsseiteTemplate inhalt={beispielLeistungsseite} locale="de" />
    </main>
  )
}
