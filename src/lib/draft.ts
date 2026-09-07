/**
 * Sichtbarkeit der Redaktionsmarker.
 *
 * Offene Angaben und fehlende Uebersetzungen werden waehrend der Arbeit
 * sichtbar markiert. Im Produktionsbau erscheinen sie nicht — ein Besucher
 * soll nie „Zu bestätigen" auf der Seite lesen.
 *
 * Fuer die Durchsicht eines produktionsnahen Baus laesst sich die Anzeige
 * erzwingen:
 *
 *     AC_SHOW_DRAFT=1 npm run build
 *
 * Der Wert wird beim Bauen eingesetzt und ist danach fest — die Seiten sind
 * statisch, es gibt zur Laufzeit keine Umschaltung.
 *
 * Wichtig: Das Ausblenden ist keine Loesung, sondern ein Sicherheitsnetz.
 * `npm run check:pending -- --strict` bleibt die Bedingung fuer den Go-live.
 */

const erzwungen = process.env.AC_SHOW_DRAFT

export const showDraft: boolean =
  erzwungen === '1' || erzwungen === 'true'
    ? true
    : erzwungen === '0' || erzwungen === 'false'
      ? false
      : process.env.NODE_ENV !== 'production'
