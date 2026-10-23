import { einstieg as de } from '@/content/einstieg'
import { einstieg as fr } from '@/content/fr/einstieg'
import { portalDemo as portalFr } from '@/content/fr/portal-beispiel'
import { steuerCheckliste as checklisteFr } from '@/content/fr/steuer-checkliste'
import { vorsorgeKennzahlen as kennzahlenFr } from '@/content/fr/vorsorge-kennzahlen'
import { einstieg as pt } from '@/content/pt/einstieg'
import { portalDemo as portalPt } from '@/content/pt/portal-beispiel'
import { steuerCheckliste as checklistePt } from '@/content/pt/steuer-checkliste'
import { vorsorgeKennzahlen as kennzahlenPt } from '@/content/pt/vorsorge-kennzahlen'
import { portalDemo as portalDe } from '@/content/seiten/portal-beispiel'
import { steuerCheckliste as checklisteDe } from '@/content/steuer-checkliste'
import { vorsorgeKennzahlen as kennzahlenDe } from '@/content/vorsorge-kennzahlen'
import type { Locale } from '@/i18n/config'
import { path } from '@/i18n/routes'
import { getUi } from '@/i18n/messages/ui'
import { datumLang, NEWS_TEXTE, sichtbareBeitraege } from '@/lib/news'
import { nachSprache } from '@/lib/sprache'
import { werteFuer } from '@/lib/vorsorge-kennzahlen'

import { Buehne, type BuehneDaten } from './Buehne'

/**
 * Einstieg der Startseite (23.10.2026): links die Aussage «Wir vertreten Sie, nicht die Versicherung», rechts eine
 * Bühne mit fünf Szenen – Kundenportal, Versicherungen, Steuern, Offerte online und der neueste Blogbeitrag. Jede
 * Szene führt per Klick an ihre Stelle der Website.
 *
 * Dieser Teil läuft auf dem Server und sammelt die Angaben aus den Inhalten, die es schon gibt: Beschriftungen des
 * Portals aus der Portalvorschau, Unterlagen aus der Steuer-Checkliste, den Beitrag aus «News und Blog». Den Wechsel
 * der Szenen steuert `Buehne.tsx` im Browser.
 */

/** Die fünf Farben des Kostenrings, wie im Portal. */
const FARBEN = ['primary-navy', 'accent-green', 'brand-grey', 'border-tint', 'navy-deep'] as const

/** Sechs Gesellschaften mit Logo. Zurich bewusst nicht (Ricardo, 21.10.2026). */
const GESELLSCHAFTEN = [
  { bild: 'partner_allianz_mitte', name: 'Allianz' },
  { bild: 'partner_axa_mitte', name: 'AXA' },
  { bild: 'partner_mobiliar_mitte', name: 'die Mobiliar' },
  { bild: 'partner_helvetia_mitte', name: 'Helvetia' },
  { bild: 'partner_vaudoise_mitte', name: 'Vaudoise' },
  { bild: 'partner_orion_mitte', name: 'Orion' },
]

export function EinstiegBuehne({ locale }: { locale: Locale }) {
  const t = nachSprache(locale, { de, fr, pt })
  const portal = (locale === 'fr' ? portalFr : locale === 'pt' ? portalPt : portalDe) as unknown as typeof portalDe
  const checkliste = nachSprache(locale, { de: checklisteDe, fr: checklisteFr, pt: checklistePt })
  const kennzahlen = nachSprache(locale, { de: kennzahlenDe, fr: kennzahlenFr, pt: kennzahlenPt })
  const ui = getUi(locale)

  // Kostenring wie im Portal: die vier grössten Sparten, der Rest als «Übrige»
  const summen = new Map<string, number>()
  for (const p of portal.policen) summen.set(p.sparte, (summen.get(p.sparte) ?? 0) + p.jahr)
  const sortiert = [...summen].sort((a, b) => b[1] - a[1])
  const bereiche: [string, number][] = [...sortiert.slice(0, 4), [portal.start.ring.uebrige, sortiert.slice(4).reduce((s, [, v]) => s + v, 0)]]
  const total = bereiche.reduce((s, [, v]) => s + v, 0)
  let start = 0
  const ring = bereiche.map(([name, wert], i) => {
    const anteil = (wert / total) * 100
    const segment = { name, anteil, start, farbe: FARBEN[i] ?? 'navy-deep' }
    start += anteil
    return segment
  })

  // Der neueste freigegebene Beitrag; beim Beitrag mit der Vorsorge-Karte zählen drei Beträge von 2026 auf 2027
  const neuester = sichtbareBeitraege(locale)[0] ?? null
  const mitKarte = neuester?.abschnitte.some((a) => a.baustein === 'vorsorgeKarte') ?? false
  const titelVon = (id: string) => kennzahlen.kennzahlen.find((k) => k.id === id)?.titel ?? id
  const [vorher, nachher] = [werteFuer(2026), werteFuer(2027)]
  const zahlen = mitKarte
    ? (['ahvMax', 's3aMit', 'eintritt'] as const).map((id) => ({ titel: titelVon(id), von: vorher[id], bis: nachher[id] }))
    : []

  const daten: BuehneDaten = {
    themenzeile: t.themenzeile,
    titel: t.titel,
    vorteile: t.vorteile,
    kontakt: { href: path('kontakt', locale), text: ui.cta },
    buehne: t.buehne,
    reiter: t.reiter,
    portal: {
      href: path('digital', locale),
      titel: portal.start.vorzeile,
      satz: t.portal.satz,
      ring,
      zeilen: ring.slice(0, 3).map((r) => ({ name: r.name, breite: (r.anteil / (ring[0]?.anteil ?? r.anteil)) * 100, farbe: r.farbe })),
      funktionen: [portal.police.herunterladen, portal.start.termin.knopf, portal.anfragen.schaden.knopf],
      knopf: t.portal.knopf,
    },
    versicherungen: {
      href: `${path('versicherungen', locale)}#modell`,
      ...t.versicherungen,
      gesellschaften: GESELLSCHAFTEN,
    },
    steuern: {
      href: `${path('steuern', locale)}#checkliste`,
      titel: t.steuern.titel,
      listentitel: checkliste.ergebnisTitel,
      kostenlos: t.steuern.kostenlos,
      // Steuererklärung mit Zugangscode, Lohnausweis, Bescheinigung Säule 3a
      unterlagen: ([[0, 0], [1, 0], [4, 1]] as const).map(([g, u]) => checkliste.gruppen[g]?.unterlagen[u]?.text ?? '').filter(Boolean),
      schritte: t.steuern.schritte,
      knopf: checkliste.start,
    },
    offerte: { href: path('offerte', locale), ...t.offerte, knopf: t.offerte.titel },
    blog: neuester
      ? {
          href: `${path('news', locale)}${neuester.slug}/`,
          marke: `${NEWS_TEXTE[locale].vor}${NEWS_TEXTE[locale].akzent}`,
          datum: datumLang(neuester.datum, locale),
          datumIso: neuester.datum,
          titel: neuester.titel,
          kurz: neuester.kurz,
          zahlen,
          knopf: NEWS_TEXTE[locale].lesen,
        }
      : null,
  }

  return <Buehne daten={daten} />
}
