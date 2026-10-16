/** Impostos, versão portuguesa de `src/content/seiten/steuern.ts` (16.10.2026). */
import type { SeitenInhalt } from '@/content/seiten/typen'

export const steuern: SeitenInhalt = {
  meta: {
    title: 'Declaração de impostos para particulares, independentes e empresas',
    description:
      'Traz os documentos, nós preparamos a declaração de impostos, entregamo-la e verificamos depois a nota de liquidação.',
  },
  banner: { themenzeile: 'IMPOSTOS', ueberschrift: 'Declaração de impostos no cantão de Berna' },
  bloecke: [
    {
      art: 'fluss',
      id: 'checkliste',
      titel: { vor: 'Traz os ', akzent: 'documentos', nach: ', nós tratamos do resto' },
      stufen: [
        {
          titel: 'O cliente traz',
          punkte: ['Rendimentos e património', 'Seguros e previdência', 'Deduções e acontecimentos especiais'],
        },
        {
          titel: 'Nós tratamos',
          punkte: ['Preparar a declaração de impostos', 'Prorrogar o prazo, se necessário', 'Entregar dentro do prazo'],
        },
        {
          titel: 'O cliente recebe',
          punkte: ['Nota de liquidação verificada', 'Feedback sobre se está tudo certo'],
        },
      ],
      checkliste: true,
      knoepfe: [{ text: 'Marcar uma reunião', ziel: 'kontakt' }],
    },
    {
      art: 'rechner3a',
      id: 'saeule-3a',
      titel: { vor: 'Poupar impostos com o ', akzent: '3.º pilar a' },
      einleitung: 'Calcule quanto paga a menos em impostos com uma entrada no 3.º pilar a.',
    },
    {
      art: 'listen',
      id: 'zielgruppen',
      titel: { vor: 'Para particulares ', akzent: 'e', nach: ' empresas' },
      listen: [
        {
          titel: 'Para particulares',
          id: 'privatpersonen',
          eintraege: [
            {
              text: 'Entregue dentro do prazo',
              zusatz: 'Com as deduções a que tem direito.',
            },
            {
              text: 'Nota de liquidação verificada',
              zusatz: 'Verificamos se corresponde à declaração.',
            },
            {
              text: 'Lista de verificação para particulares',
              zusatz: 'O que deve trazer.',
              ziel: 'steuern',
              anker: 'checkliste',
            },
          ],
        },
        {
          titel: 'Para independentes e empresas',
          id: 'firmen',
          eintraege: [
            {
              text: 'O fecho de contas como base',
              zusatz: 'A declaração de impostos assenta diretamente na contabilidade.',
            },
            {
              text: 'Documentos já disponíveis',
              zusatz: 'Se formos nós a tratar da sua contabilidade.',
            },
            {
              text: 'Contabilidade e fecho de contas anual',
              zusatz: 'Ambos no mesmo lugar.',
              ziel: 'treuhand',
              anker: 'buchhaltung',
            },
          ],
        },
      ],
    },
    {
      art: 'zeitleiste',
      id: 'fristen',
      titel: { vor: 'Prazos e ', akzent: 'taxas' },
      kantone: { beschriftung: 'O seu cantão' },
      reihen: [
        {
          titel: 'Particulares',
          stationen: [
            { marke: '15 de março', titel: 'Prazo habitual de entrega', hervor: true },
            { marke: '15 de julho', titel: 'Prorrogar online', wert: 'gratuito' },
            { marke: '15 de setembro', titel: 'Prorrogar online', wert: 'CHF 20' },
            { marke: '15 de novembro', titel: 'Prorrogar online', wert: 'CHF 40' },
          ],
        },
        {
          titel: 'Empresas',
          stationen: [
            { marke: '7 meses', titel: 'após o fecho do exercício', hervor: true },
            { marke: '+ 1½ meses', titel: 'Prorrogar online', wert: 'gratuito' },
            { marke: '+ 3½ meses', titel: 'Prorrogar online, no máximo', wert: 'CHF 20' },
          ],
        },
      ],
      nachsaetze: [
        'Conta sempre a data indicada na carta da administração fiscal. As taxas aplicam-se às prorrogações pedidas online.',
        'Se formos nós a preparar a sua declaração de impostos, tratamos também da prorrogação do prazo.',
      ],
    },
    {
      art: 'fragen',
      id: 'fragen',
      titel: { vor: 'Perguntas ', akzent: 'frequentes' },
      fragen: [
        {
          frage: 'O que tenho de trazer?',
          antwort: 'Tudo o que consta da lista de verificação. Se faltar alguma coisa, entramos em contacto.',
        },
        {
          frage: 'Podem prorrogar o prazo?',
          antwort: 'Pedimos a prorrogação do prazo por si.',
        },
        {
          frage: 'Tenho de ir pessoalmente?',
          antwort: 'Não é obrigatório. Pode enviar-nos os documentos por e-mail, por correio ou entregá-los pessoalmente.',
        },
      ],
    },
    {
      art: 'kontakt',
      titel: { vor: 'Como nos ', akzent: 'contactar' },
      satz: 'Entre em contacto connosco e marcamos uma reunião.',
      beschriftungen: { telefon: 'Telefone', email: 'E-mail', buero: 'Escritório' },
    },
  ],
}
