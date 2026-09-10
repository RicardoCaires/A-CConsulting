import styles from './Icon.module.css'

/**
 * Das Icon-Set der Website.
 *
 * Ein Stil fuer alle: 24er Raster, nur Kontur, Strichstaerke 1.5, runde Enden
 * und Ecken, Farbe immer `currentColor`. Keine Flaechen, keine zweite Farbe,
 * keine Illustrationen, keine zweite Bibliothek. Icons schaffen Orientierung —
 * sie schmuecken nicht.
 *
 * Zugaenglichkeit: Ohne `label` ist ein Icon dekorativ und wird ausgeblendet
 * (`aria-hidden`) — das ist der Normalfall, weil neben jedem Icon der Begriff
 * im Text steht. Traegt ein Icon ausnahmsweise die Bedeutung allein, bekommt
 * es ein `label` und damit einen zugaenglichen Namen.
 *
 * Alle Icons werden gleich behandelt. Die Kreisflaeche darum herum kommt von
 * `IconCircle`; ihre Farbe ist dort geregelt und nie am einzelnen Icon.
 */

export type IconName =
  | 'schild'
  | 'buch'
  | 'beleg'
  | 'wechsel'
  | 'gebaeude'
  | 'personen'
  | 'verbindung'
  | 'person'
  | 'sprachen'
  | 'ablauf'
  | 'automatisierung'
  | 'standort'
  | 'telefon'
  | 'mail'
  | 'chevron'
  | 'haken'
  | 'pfeil'
  | 'dokument'
  | 'uhr'
  | 'schildPlus'
  | 'fahrzeug'
  | 'diagramm'
  | 'muenzen'
  | 'pflanze'
  | 'kompass'

const PATHS: Record<IconName, React.ReactNode> = {
  // Versicherungen — Schild
  schild: <path d="M12 3.2 19 6v5.4c0 4-2.8 7.4-7 9.4-4.2-2-7-5.4-7-9.4V6l7-2.8Z" />,

  // Treuhand — aufgeschlagenes Kontobuch
  buch: (
    <>
      <path d="M4 5.5h5.2c1.5 0 2.8.7 2.8 1.9V19c0-1-1.3-1.7-2.8-1.7H4V5.5Z" />
      <path d="M20 5.5h-5.2c-1.5 0-2.8.7-2.8 1.9V19c0-1 1.3-1.7 2.8-1.7H20V5.5Z" />
    </>
  ),

  // Steuern — Beleg
  beleg: (
    <>
      <path d="M6 3.5h12v17l-2-1.4-2 1.4-2-1.4-2 1.4-2-1.4-2 1.4v-17Z" />
      <path d="M9.5 8.5h5M9.5 12.5h5" />
    </>
  ),

  // Wechsel — zwei Pfeile
  wechsel: (
    <>
      <path d="M4 9h13l-3.2-3.2M20 15H7l3.2 3.2" />
    </>
  ),

  // Firmengruendung — Gebaeude
  gebaeude: (
    <>
      <path d="M4 20.5V7.5l7-4 7 4v13" />
      <path d="M4 20.5h16M9.5 20.5v-4.5h5v4.5M9.5 10.5h1M13.5 10.5h1M9.5 13.5h1M13.5 13.5h1" />
    </>
  ),

  // Mitarbeitende — zwei Personen
  personen: (
    <>
      <circle cx="9.5" cy="8" r="3" />
      <path d="M3.5 20c0-3.1 2.7-5.2 6-5.2s6 2.1 6 5.2" />
      <path d="M16 5.4a3 3 0 0 1 0 5.2M17.5 14.9c1.9.6 3 2.4 3 4.6" />
    </>
  ),

  // Mehrere Bereiche, ein Ansprechpartner — verbundene Punkte
  verbindung: (
    <>
      <circle cx="6" cy="7" r="2.2" />
      <circle cx="6" cy="17" r="2.2" />
      <circle cx="18" cy="12" r="2.2" />
      <path d="M8 8.2 15.9 11M8 15.8 15.9 13" />
    </>
  ),

  // Persoenliche Betreuung — eine Person
  person: (
    <>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5.5 20c0-3.4 2.9-5.6 6.5-5.6s6.5 2.2 6.5 5.6" />
    </>
  ),

  // Drei Sprachen — Globus mit Meridian
  sprachen: (
    <>
      <circle cx="12" cy="12" r="8.2" />
      <path d="M3.8 12h16.4" />
      <path d="M12 3.8c2.1 2.3 3.2 5.1 3.2 8.2s-1.1 5.9-3.2 8.2c-2.1-2.3-3.2-5.1-3.2-8.2S9.9 6.1 12 3.8Z" />
    </>
  ),

  // Klare Ablaeufe — Liste mit Haken
  ablauf: (
    <>
      <path d="M10 7h9M10 12h9M10 17h9" />
      <path d="M4.5 6.6 5.6 7.8 7.4 5.9M4.5 11.6l1.1 1.2 1.8-1.9M4.5 16.6l1.1 1.2 1.8-1.9" />
    </>
  ),

  // Moderne Arbeitsweise — Zahnrad, reduziert
  automatisierung: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3.5v2.2M12 18.3v2.2M20.5 12h-2.2M5.7 12H3.5M18 6l-1.6 1.6M7.6 16.4 6 18M18 18l-1.6-1.6M7.6 7.6 6 6" />
    </>
  ),

  // Telefon — Hoerer
  telefon: (
    <path d="M8.4 4.3 5.9 4a1.6 1.6 0 0 0-1.7 1.2c-.9 3.6 3.3 11.5 6.9 13.5a1.6 1.6 0 0 0 2-.4l1.7-2a1 1 0 0 0-.2-1.4l-2-1.4a1 1 0 0 0-1.2.1l-.8.7c-1.3-.9-2.4-2.4-3-4l.9-.5a1 1 0 0 0 .4-1.1L8.4 4.3Z" />
  ),

  // E-Mail — Umschlag
  mail: (
    <>
      <rect x="3.2" y="5.6" width="17.6" height="12.8" rx="1.8" />
      <path d="M4 7.2 12 12.6l8-5.4" />
    </>
  ),

  // Pfeil nach unten — Aufklappmenue und Accordion
  chevron: <path d="m6.5 9.5 5.5 5.5 5.5-5.5" />,

  // Standort — Ortsmarke
  standort: (
    <>
      <path d="M12 21.2c3.7-4.2 5.6-7.4 5.6-9.7a5.6 5.6 0 1 0-11.2 0c0 2.3 1.9 5.5 5.6 9.7Z" />
      <circle cx="12" cy="11.2" r="2.1" />
    </>
  ),

  // Erledigt — Haken. Traegt die Aufzaehlungen in „Das uebernehmen wir".
  haken: <path d="m5 12.6 4.4 4.4L19 7.4" />,

  // Weiterfuehrung — Pfeil nach rechts
  pfeil: <path d="M4.5 12h14M13.4 6.6 18.8 12l-5.4 5.4" />,

  // Unterlagen — Blatt mit Knick
  dokument: (
    <>
      <path d="M13.6 3.5H7a1.5 1.5 0 0 0-1.5 1.5v14A1.5 1.5 0 0 0 7 20.5h10a1.5 1.5 0 0 0 1.5-1.5V8.4L13.6 3.5Z" />
      <path d="M13.4 3.7v4.6h4.8M8.6 13h6.8M8.6 16.5h4.4" />
    </>
  ),

  // Fristen und Zeiten — Zifferblatt
  uhr: (
    <>
      <circle cx="12" cy="12" r="8.2" />
      <path d="M12 7.2V12l3.2 2" />
    </>
  ),

  // Krankenversicherung — Schild mit Kreuz
  schildPlus: (
    <>
      <path d="M12 3.2 19 6v5.4c0 4-2.8 7.4-7 9.4-4.2-2-7-5.4-7-9.4V6l7-2.8Z" />
      <path d="M12 8.9v5M9.5 11.4h5" />
    </>
  ),

  // Motorfahrzeug — Wagen von der Seite
  fahrzeug: (
    <>
      <path d="M4 15.5v-2.1l1.9-4.3c.2-.5.7-.8 1.2-.8h9.8c.5 0 1 .3 1.2.8L20 13.4v2.1" />
      <path d="M4 15.5h16v2.2h-2.6M4 15.5v2.2h2.6" />
      <path d="M6.6 17.7a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0M14.4 17.7a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0" />
    </>
  ),

  // Auswertung — Balken
  diagramm: (
    <>
      <path d="M4 19.5h16" />
      <path d="M7 19.5v-5.2M12 19.5V8.4M17 19.5v-8" />
    </>
  ),

  // Budget — gestapelte Muenzen
  muenzen: (
    <>
      <path d="M5 7.2c0-1.2 3.1-2.2 7-2.2s7 1 7 2.2-3.1 2.2-7 2.2-7-1-7-2.2Z" />
      <path d="M5 7.2V12c0 1.2 3.1 2.2 7 2.2s7-1 7-2.2V7.2" />
      <path d="M5 12v4.8c0 1.2 3.1 2.2 7 2.2s7-1 7-2.2V12" />
    </>
  ),

  // Vorsorge — Blatt am Trieb
  pflanze: (
    <>
      <path d="M12 20.5v-7.2" />
      <path d="M12 13.3c0-3.4 2.4-6.2 6.2-6.6.4 3.8-2.3 6.6-6.2 6.6Z" />
      <path d="M12 15.6C9.2 15.6 7 13.4 6.6 10.4c3 .3 5 2.4 5.4 5.2Z" />
    </>
  ),

  // Begleitung — Kompass
  kompass: (
    <>
      <path d="M12 3.6a8.4 8.4 0 1 0 0 16.8 8.4 8.4 0 0 0 0-16.8Z" />
      <path d="m14.9 9.1-1.6 4.2-4.2 1.6 1.6-4.2 4.2-1.6Z" />
    </>
  ),
}

type Props = {
  name: IconName
  /** Kantenlaenge in rem. Standard 1.5rem = 24 px. */
  size?: number
  className?: string
  /**
   * Zugaenglicher Name. Nur setzen, wenn das Icon die Bedeutung allein
   * traegt — steht der Begriff daneben im Text, bleibt das Icon dekorativ.
   */
  label?: string
}

export function Icon({ name, size = 1.5, className, label }: Props) {
  const beschriftet = label !== undefined && label !== ''

  return (
    <svg
      className={[styles.icon, className].filter(Boolean).join(' ')}
      style={{ width: `${size}rem`, height: `${size}rem` }}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={beschriftet ? 'img' : undefined}
      aria-label={beschriftet ? label : undefined}
      aria-hidden={beschriftet ? undefined : true}
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  )
}
