/**
 * Der oeffentliche Schluessel von Cloudflare Turnstile.
 *
 * Er steht im Quelltext jeder Seite und ist **kein** Geheimnis — der geheime
 * Gegenpart liegt als Secret beim Worker und nie im Repository.
 *
 * **Solange hier nichts steht, bleibt das Formular abgeschaltet.** Das ist
 * Absicht: Ohne Spamschutz weist der Endpunkt jede Anfrage ab, und ein Knopf,
 * der ins Leere fuehrt, waere schlimmer als ein sichtbar abgeschalteter. Traegt
 * dieser Wert den Schluessel aus Ricardos Cloudflare-Konto, schaltet sich das
 * Formular von selbst frei.
 */
export const turnstileSiteKey = ''
