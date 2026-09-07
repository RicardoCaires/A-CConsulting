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
        abfolge="Seitenkopf · Das übernehmen wir · Ablauf · Vertiefung (optional) · Fragen · Abschluss"
        flaechen="berechnet; der Abschluss steht nie auf derselben Fläche wie der Abschnitt davor"
        regel="Für jede Leistung identisch. Der Wortlaut der Zwischentitel kommt aus dem Inhalt."
      />
      <LeistungsseiteTemplate inhalt={beispielLeistungsseite} locale="de" />
    </main>
  )
}
