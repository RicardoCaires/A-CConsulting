import type { einstieg as DE } from '@/content/einstieg'
import type { Uebersetzt } from '@/lib/sprache'

/** Entrada da página inicial com cena (23.10.2026) – tradução de `src/content/einstieg.ts`. */
export const einstieg: Uebersetzt<typeof DE> = {
  themenzeile: 'Seguros · Fiduciária · Impostos',
  titel: { vor: 'Representamos ', akzent: 'o cliente', nach: ', não a seguradora.' },
  vorteile: [
    'Um só interlocutor para seguros, fiduciária e impostos',
    'Os seus contratos e documentos no portal do cliente',
    'Aconselhamento em alemão, francês e português',
  ],
  buehne: 'Os nossos serviços num relance',
  reiter: { portal: 'Portal do cliente', versicherungen: 'Seguros', steuern: 'Impostos', offerte: 'Proposta online', blog: 'Blogue' },
  portal: {
    satz: 'Apólices e documentos num só lugar, no computador ou no telemóvel.',
    knopf: 'Ver o portal do cliente',
  },
  versicherungen: {
    titel: { vor: 'Um só interlocutor ', akzent: 'para tudo' },
    sie: 'Cliente',
    ac: 'A&C',
    offerten: 'Propostas',
    empfehlung: 'Recomendação',
    punkte: ['Comparar e recomendar', 'Acompanhar em caso de sinistro', 'Gratuito com o mandato de corretagem'],
    knopf: 'Ver os seguros',
  },
  steuern: {
    titel: { vor: 'A sua ', akzent: 'declaração de impostos' },
    kostenlos: 'gratuita',
    schritte: [
      { fett: 'Criar a lista de verificação:', text: 'sete perguntas curtas' },
      { text: 'Traz os documentos' },
      { text: 'Elaboramos e entregamos a declaração e prorrogamos o prazo' },
      { text: 'Nota de liquidação verificada' },
    ],
  },
  offerte: {
    titel: 'Pedir uma proposta',
    frage: 'Para que deseja uma proposta?',
    optionen: ['Automóvel', 'Recheio da casa e responsabilidade civil', 'Edifício', 'Empresa'],
    satz: 'Pedimos as propostas às seguradoras.',
  },
}
