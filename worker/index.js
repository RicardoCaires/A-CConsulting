/**
 * Der serverseitige Endpunkt des Kontaktformulars.
 *
 * Abschnitt 7 der Hausordnung verlangt ihn genau so: eigener Endpunkt, kein
 * fremder Formulardienst, Spamschutz ueber Honigtopf und Cloudflare Turnstile,
 * **keine Speicherung** — die Anfrage wird als E-Mail zugestellt und danach
 * vergessen. Es gibt keine Datenbank und kein Protokoll mit Formularinhalt.
 *
 * Versendet wird ueber **Microsoft 365**, den Tenant von A&C selbst
 * (Ricardos Entscheid vom 24.09.2026). Damit kommt kein neuer
 * Auftragsbearbeiter dazu und die Angaben verlassen das eigene System nicht —
 * unter revDSG der sauberste Weg. Der Zugang laeuft ueber eine
 * App-Registrierung mit `Mail.Send`; die vier Werte stehen als Secrets beim
 * Worker und nirgends im Repository.
 *
 * **Ohne JavaScript funktioniert das Absenden.** Das Formular ist ein
 * gewoehnliches `<form method="post">`; die Bestaetigung erscheint ueber die
 * Sprungmarke `#gesendet` und die CSS-Regel `:target`, nicht ueber ein Skript.
 * Turnstile braucht JavaScript — fehlt der Nachweis, weist der Endpunkt die
 * Anfrage ab und nennt Telefon und E-Mail.
 *
 * Alles ausser `/api/kontakt` liefert der Dateiserver aus. Der Worker reicht
 * es unveraendert an `env.ASSETS` weiter; `_headers`, `_redirects` und die
 * eigene 404-Seite gelten damit wie bisher.
 */

const TURNSTILE_PRUEFUNG = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'
const GRAPH = 'https://graph.microsoft.com/v1.0'

/** Die Sprachen der Website. Alles andere fuehrt auf die Leitsprache. */
const SPRACHEN = new Set(['de', 'fr', 'pt'])

const worker = {
  async fetch(request, env) {
    const url = new URL(request.url)

    if (url.pathname === '/api/kontakt') return kontakt(request, env)

    // Alles Uebrige ist eine Datei aus `out/`.
    return env.ASSETS.fetch(request)
  },
}

export default worker

/* ---- Die Anfrage ---------------------------------------------------------- */

async function kontakt(request, env) {
  if (request.method !== 'POST') {
    return new Response('Nur POST.', { status: 405, headers: { Allow: 'POST' } })
  }

  let felder
  try {
    felder = await request.formData()
  } catch {
    return zurueck('de', 'nicht-gesendet')
  }

  const wert = (name) => String(felder.get(name) ?? '').trim()

  const sprache = SPRACHEN.has(wert('sprache')) ? wert('sprache') : 'de'

  // Der Honigtopf. Ein Mensch sieht das Feld nicht und fuellt es nie aus.
  // Fuer die Maschine sieht es aus wie ein Erfolg — wir senden nur nichts.
  if (wert('website') !== '') return zurueck(sprache, 'gesendet')

  const name = wert('name')
  const email = wert('email')
  const anliegen = wert('anliegen')
  const nachricht = wert('nachricht')
  const zustimmung = felder.get('datenschutz') !== null

  if (!name || !email || !anliegen || !nachricht || !zustimmung) {
    return zurueck(sprache, 'nicht-gesendet')
  }

  const echt = await turnstileGeprueft(request, env, wert('cf-turnstile-response'))
  if (!echt) return zurueck(sprache, 'nicht-gesendet')

  try {
    await sendeMail(env, {
      sprache,
      name,
      email,
      telefon: wert('telefon'),
      anliegen,
      kontaktart: wert('kontaktart'),
      nachricht,
      herkunft: wert('herkunft'),
      formular: wert('formular') || 'kontakt',
    })
  } catch {
    // Bewusst ohne Inhalt: Ein Protokoll mit Formulardaten ist eine
    // Speicherung, und Abschnitt 7 verbietet sie.
    return zurueck(sprache, 'nicht-gesendet')
  }

  return zurueck(sprache, 'gesendet')
}

/** Zurueck auf die Kontaktseite — die Sprungmarke zeigt das Ergebnis. */
function zurueck(sprache, marke) {
  return new Response(null, {
    // 303: Der Browser holt die Seite mit GET. Ein Neuladen schickt das
    // Formular damit nicht ein zweites Mal ab.
    status: 303,
    headers: { Location: `/${sprache}/kontakt/#${marke}` },
  })
}

/* ---- Spamschutz ----------------------------------------------------------- */

async function turnstileGeprueft(request, env, nachweis) {
  if (!env.TURNSTILE_SECRET) return false
  if (!nachweis) return false

  const daten = new FormData()
  daten.append('secret', env.TURNSTILE_SECRET)
  daten.append('response', nachweis)

  const ip = request.headers.get('CF-Connecting-IP')
  if (ip) daten.append('remoteip', ip)

  const antwort = await fetch(TURNSTILE_PRUEFUNG, { method: 'POST', body: daten })
  if (!antwort.ok) return false

  const ergebnis = await antwort.json()
  return ergebnis.success === true
}

/* ---- Versand ueber Microsoft 365 ------------------------------------------ */

async function zugangstoken(env) {
  const daten = new URLSearchParams({
    client_id: env.MS_CLIENT_ID,
    client_secret: env.MS_CLIENT_SECRET,
    scope: 'https://graph.microsoft.com/.default',
    grant_type: 'client_credentials',
  })

  const antwort = await fetch(
    `https://login.microsoftonline.com/${env.MS_TENANT_ID}/oauth2/v2.0/token`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: daten,
    },
  )

  if (!antwort.ok) throw new Error('Kein Zugangstoken.')

  const ergebnis = await antwort.json()
  if (!ergebnis.access_token) throw new Error('Kein Zugangstoken.')
  return ergebnis.access_token
}

async function sendeMail(env, anfrage) {
  const token = await zugangstoken(env)
  const postfach = env.MS_POSTFACH

  const zeilen = [
    `Name:       ${anfrage.name}`,
    `E-Mail:     ${anfrage.email}`,
    `Telefon:    ${anfrage.telefon || '—'}`,
    `Anliegen:   ${anfrage.anliegen}`,
    `Antwort per: ${anfrage.kontaktart || '—'}`,
    '',
    'Nachricht:',
    anfrage.nachricht,
    '',
    '— Herkunft —',
    `Seite:      ${anfrage.herkunft || '—'}`,
    `Sprache:    ${anfrage.sprache}`,
    `Formular:   ${anfrage.formular}`,
    `Zeitpunkt:  ${new Date().toISOString()}`,
  ]

  const antwort = await fetch(`${GRAPH}/users/${encodeURIComponent(postfach)}/sendMail`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: {
        subject: `Anfrage über die Website — ${anfrage.anliegen}`,
        body: { contentType: 'Text', content: zeilen.join('\n') },
        toRecipients: [{ emailAddress: { address: postfach } }],
        // Damit eine Antwort direkt bei der Absenderin landet.
        replyTo: [{ emailAddress: { address: anfrage.email } }],
      },
      // Die Anfrage liegt ohnehin im Posteingang. Ein zweites Mal unter
      // „Gesendet" braucht sie nicht.
      saveToSentItems: false,
    }),
  })

  if (!antwort.ok) throw new Error('Versand fehlgeschlagen.')
}
