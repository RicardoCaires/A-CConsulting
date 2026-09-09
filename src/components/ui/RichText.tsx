import { Fragment } from 'react'

import { isCompanyRef, isLegal, isPending, type Rich } from '@/content/types'
import { bueroOneLine, buero, direktnummern, sitzOneLine } from '@/lib/company'
import { showDraft } from '@/lib/draft'

import { DraftNote } from './DraftNote'

/** Firmenangaben, die im Inhalt als Verweis stehen duerfen. */
const FIRMA: Record<'buero' | 'sitz' | 'ort' | 'ricardo' | 'octavio', string> = {
  buero: bueroOneLine,
  sitz: sitzOneLine,
  ort: buero.city,
  ricardo: direktnummern.ricardo.anzeige,
  octavio: direktnummern.octavio.anzeige,
}

/**
 * Gibt einen Absatz aus, der offene Angaben aus Schritt 4 enthalten kann.
 *
 * Klartext bleibt Klartext, offene Angaben werden als `DraftNote` markiert.
 * Seit Schritt 4 laeuft das ueber dieselbe Marke wie die fehlenden
 * Uebersetzungen — und damit auch ueber denselben Schalter: Im Produktionsbau
 * erscheint keine davon (`src/lib/draft.ts`).
 *
 * Das Ausblenden ist ein Sicherheitsnetz, kein Ersatz fuers Nachtragen.
 * `npm run check:pending -- --strict` bleibt die Bedingung fuer den Go-live.
 */
export function RichText({ value }: { value: Rich }) {
  if (typeof value === 'string') return <>{value}</>

  return (
    <>
      {value.map((part, index) => (
        <Fragment key={index}>
          {isPending(part) ? (
            <DraftNote kind="offen">{part.pending}</DraftNote>
          ) : isLegal(part) ? (
            <DraftNote kind="rechtlich">{part.legal}</DraftNote>
          ) : isCompanyRef(part) ? (
            FIRMA[part.company]
          ) : (
            part
          )}
        </Fragment>
      ))}
    </>
  )
}

/**
 * Bleibt von diesem Wert etwas uebrig, wenn die Marken ausgeblendet sind?
 *
 * Ein Absatz, der **nur** aus einer offenen Angabe besteht, waere im
 * Produktionsbau ein leerer Absatz — sichtbar als Loch unter einer
 * Ueberschrift. Wer Absaetze ausgibt, fragt darum vorher hier nach und laesst
 * solche Stellen ganz weg.
 */
export function hatSichtbarenInhalt(value: Rich): boolean {
  if (typeof value === 'string') return value.trim() !== ''
  if (showDraft) return value.length > 0
  // Eine Rechtsmarke steht neben einem lesbaren Satz, ein Firmenverweis wird zu
  // Text — beide machen den Absatz nicht leer. Nur reine Platzhalter tun das.
  return value.some(
    (part) =>
      isCompanyRef(part) || (!isPending(part) && !isLegal(part) && String(part).trim() !== ''),
  )
}
