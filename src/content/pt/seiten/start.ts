/** Página inicial, versão portuguesa de `src/content/seiten/start.ts` (16.10.2026). */
import type { SeitenInhalt } from '@/content/seiten/typen'

export const start: SeitenInhalt = {
  meta: {
    title: 'Fiduciária e seguros em Aegerten',
    description:
      'Seguros e fiduciária para particulares, independentes e PME. Interlocutores fixos em Aegerten, cantão de Berna.',
  },
  banner: { form: 'buehne', themenzeile: 'Seguros · Fiduciária · Impostos', ueberschrift: 'Representamos o cliente, não a seguradora.' },
  bloecke: [
    {
      art: 'listen',
      id: 'leistungen',
      titel: { vor: 'O que tratamos ', akzent: 'por si' },
      listen: [
        {
          titel: 'Seguros para particulares',
          ziel: { ziel: 'versicherungen', anker: 'privatpersonen' },
          eintraege: [
            { text: 'Seguro de saúde e seguro complementar' },
            { text: 'Recheio da casa, responsabilidade civil e automóvel' },
            { text: 'Previdência e 3.º pilar a' },
          ],
          knopf: { text: 'Saber mais', ziel: 'versicherungen', anker: 'privatpersonen' },
        },
        {
          titel: 'Seguros para empresas',
          ziel: { ziel: 'versicherungen', anker: 'unternehmen' },
          eintraege: [
            { text: 'LPP (BVG / 2.º pilar) e LAA (UVG)' },
            { text: 'Subsídio diário de doença' },
            { text: 'Responsabilidade civil empresarial e bens' },
          ],
          knopf: { text: 'Saber mais', ziel: 'versicherungen', anker: 'unternehmen' },
        },
        {
          titel: 'Fiduciária e impostos',
          ziel: { ziel: 'treuhand' },
          eintraege: [
            { text: 'Contabilidade e fecho de contas' },
            { text: 'Processamento salarial' },
            { text: 'Declaração de impostos' },
          ],
          knopf: { text: 'Saber mais', ziel: 'treuhand' },
        },
      ],
    },
    {
      art: 'portalDemo',
      id: 'portal',
      titel: { vor: 'Os seus seguros ', akzent: 'sempre', nach: ' à vista' },
      einleitung: 'Menos papel, caminhos mais curtos. No portal do cliente tem tudo à mão.',
      punkte: [
        'Apólices: todos os contratos e documentos num só lugar, também no telemóvel',
        'Custos: o que paga por ano pelos seus seguros, num relance',
        'Pedidos: alterações e pedidos de proposta diretamente para nós, com o ponto de situação',
      ],
      probieren: 'Experimente: abrir contratos, ver as coberturas, preencher um pedido. Todos os dados são fictícios.',
      knoepfe: [
        { text: 'Ir para o portal do cliente', href: 'kundenportal' },
        { text: 'Pedir uma proposta online', href: 'offerte', art: 'zweit' },
        { text: 'Mais sobre o portal do cliente', ziel: 'digital', art: 'zweit' },
      ],
    },
    {
      art: 'personen',
      titel: { vor: 'Dois ', akzent: 'interlocutores' },
      satz: 'Sem linha de apoio. O seu processo é acompanhado por um de nós dois — e é ele que atende o telefone.',
      leute: [
        {
          name: 'Ricardo Caires',
          rolle: 'Fiduciária · Seguros',
          linkedin: 'https://www.linkedin.com/in/ricardo-caires-84a222214/',
        },
        {
          name: 'Octavio Nuno Gouveia Andrade',
          rolle: 'Fiduciária · Seguros',
          linkedin: 'https://www.linkedin.com/in/octavio-andrade-211083130/',
        },
      ],
      knoepfe: [{ text: 'Mais sobre nós', ziel: 'ueberUns', art: 'zweit' }],
    },
    {
      art: 'kontakt',
      titel: { vor: 'Como nos ', akzent: 'contactar' },
      satz: 'Descreva-nos brevemente a sua situação. Entraremos em contacto pessoalmente.',
      beschriftungen: { telefon: 'Telefone', email: 'E-mail', buero: 'Escritório' },
    },
  ],
}
