'use client'

import { createContext, useContext } from 'react'

import { portalDemo as fr } from '@/content/fr/portal-beispiel'
import { portalDemo as pt } from '@/content/pt/portal-beispiel'
import { portalDemo as de } from '@/content/seiten/portal-beispiel'
import type { Locale } from '@/i18n/config'

/**
 * Texte der Portalvorschau je Sprache (16.10.2026). Die Übersetzungen haben denselben Aufbau wie das deutsche
 * Original (`Uebersetzt<…>`); Kennungen wie `seite`, `formular` und `art` bleiben dort unverändert, darum darf die
 * Vorschau sie wie die deutsche Fassung behandeln.
 */
export type DemoText = typeof de

export function demoText(locale: Locale): DemoText {
  return (locale === 'fr' ? fr : locale === 'pt' ? pt : de) as unknown as DemoText
}

export const DemoKontext = createContext<DemoText>(de)
export const useDemo = () => useContext(DemoKontext)
