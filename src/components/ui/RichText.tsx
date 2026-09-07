import { Fragment } from 'react'

import { isPending, type Rich } from '@/content/types'

import { Pending } from './Pending'

/**
 * Gibt einen Absatz aus, der offene Angaben aus Schritt 4 enthalten kann.
 * Klartext bleibt Klartext, offene Angaben werden sichtbar markiert.
 */
export function RichText({ value }: { value: Rich }) {
  if (typeof value === 'string') return <>{value}</>

  return (
    <>
      {value.map((part, index) => (
        <Fragment key={index}>
          {isPending(part) ? <Pending>{part.pending}</Pending> : part}
        </Fragment>
      ))}
    </>
  )
}
