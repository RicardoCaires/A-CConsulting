/** Contacto, versão portuguesa de `src/content/seiten/kontakt.ts` (16.10.2026). */
import type { SeitenInhalt } from '@/content/seiten/typen'

export const kontakt: SeitenInhalt = {
  meta: {
    title: 'Contacto',
    description:
      'Como contactar a A&C Consulting em Aegerten: por telefone, por e-mail ou através do formulário de contacto. Aconselhamento em alemão, francês e português.',
  },
  banner: { themenzeile: 'CONTACTO', ueberschrift: 'Como nos contactar' },
  bloecke: [
    { art: 'formular', id: 'formular' },
    {
      art: 'text',
      id: 'offerte',
      breit: true,
      titel: { vor: 'Pedir uma proposta ', akzent: 'online' },
      absaetze: ['Pergunta a pergunta, todas facultativas. O que ficar em aberto, esclarecemos numa conversa.'],
      knoepfe: [{ text: 'Pedir uma proposta', href: 'offerte' }],
    },
    {
      art: 'kontakt',
      id: 'direkt',
      titel: { vor: 'O mais rápido é por ', akzent: 'telefone' },
      satz: 'Se prefere falar em vez de escrever: telefone-nos. Fala com um de nós dois, não com uma fila de espera.',
      beschriftungen: { telefon: 'Telefone', email: 'E-mail', buero: 'Escritório' },
      ohneKnopf: true,
    },
  ],
}
