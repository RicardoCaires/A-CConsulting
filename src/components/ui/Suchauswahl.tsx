'use client'

import { useId, useMemo, useState } from 'react'

import styles from './Suchauswahl.module.css'

/**
 * Feld mit Suchliste (15.10.2026): Beim Tippen erscheinen passende Einträge direkt darunter;
 * ein Klick oder Enter übernimmt sie. Fehlt ein Eintrag, bleibt das Getippte stehen – eigene
 * Eingabe ist immer möglich (Ricardo: «falls es nicht vorhanden ist dann selbst eingeben»).
 *
 * Eigene Liste statt `<datalist>`: Die sieht je Browser anders aus und erscheint auf dem
 * iPhone nur unzuverlässig. Zugänglich als Combobox nach ARIA (Pfeiltasten, Enter, Escape).
 */
export function Suchauswahl({
  id,
  wert,
  optionen,
  onChange,
  onEnter,
  beschriftetVon,
  platzhalter,
}: {
  id: string
  wert: string
  optionen: readonly string[]
  onChange: (v: string) => void
  onEnter?: () => void
  /** id der Beschriftung (Label oder Frage). */
  beschriftetVon?: string
  platzhalter?: string
}) {
  const [offen, setOffen] = useState(false)
  const [aktiv, setAktiv] = useState(-1)
  const listeId = useId()

  const treffer = useMemo(() => {
    const q = wert.trim().toLowerCase()
    if (!q) return optionen.slice(0, 50)
    const beginnt = optionen.filter((o) => o.toLowerCase().startsWith(q))
    const enthaelt = optionen.filter((o) => !o.toLowerCase().startsWith(q) && o.toLowerCase().includes(q))
    return [...beginnt, ...enthaelt].slice(0, 8)
  }, [wert, optionen])

  // Steht genau ein vollständiger Treffer da, braucht es die Liste nicht mehr
  const sichtbar = offen && treffer.length > 0 && !(treffer.length === 1 && treffer[0] === wert)

  const waehle = (o: string) => {
    onChange(o)
    setOffen(false)
    setAktiv(-1)
  }

  return (
    <div className={styles.suche}>
      <input
        id={id}
        type="text"
        role="combobox"
        aria-expanded={sichtbar}
        aria-controls={listeId}
        aria-autocomplete="list"
        aria-activedescendant={sichtbar && aktiv >= 0 ? `${listeId}-${aktiv}` : undefined}
        aria-labelledby={beschriftetVon}
        autoComplete="off"
        maxLength={80}
        placeholder={platzhalter}
        value={wert}
        onChange={(e) => {
          onChange(e.target.value)
          setOffen(true)
          setAktiv(-1)
        }}
        onFocus={() => setOffen(true)}
        onBlur={() => setTimeout(() => setOffen(false), 150)}
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown') {
            e.preventDefault()
            setOffen(true)
            setAktiv((a) => Math.min(a + 1, treffer.length - 1))
          } else if (e.key === 'ArrowUp') {
            e.preventDefault()
            setAktiv((a) => Math.max(a - 1, 0))
          } else if (e.key === 'Escape') {
            setOffen(false)
          } else if (e.key === 'Enter') {
            e.preventDefault()
            if (sichtbar && aktiv >= 0 && treffer[aktiv]) waehle(treffer[aktiv])
            else {
              setOffen(false)
              onEnter?.()
            }
          }
        }}
      />
      {sichtbar ? (
        <ul id={listeId} role="listbox" className={styles.liste}>
          {treffer.map((o, i) => (
            <li
              key={o}
              id={`${listeId}-${i}`}
              role="option"
              aria-selected={i === aktiv}
              className={i === aktiv ? styles.aktiv : undefined}
              // mousedown statt click: sonst schliesst das Verlassen des Feldes die Liste zuerst
              onMouseDown={(e) => {
                e.preventDefault()
                waehle(o)
              }}
            >
              {o}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
