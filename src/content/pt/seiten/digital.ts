/** «Digital com a A&C», versão portuguesa de `src/content/seiten/digital.ts` (16.10.2026). */
import type { SeitenInhalt } from '@/content/seiten/typen'

export const digital: SeitenInhalt = {
  meta: {
    title: 'Portal do cliente e proposta online',
    description:
      'As suas apólices e documentos num só lugar, pedidos diretamente para nós e uma proposta pedida online.',
  },
  banner: { themenzeile: 'DIGITAL', ueberschrift: 'Portal do cliente e proposta online' },
  bloecke: [
    {
      art: 'text',
      id: 'intro',
      breit: true,
      titel: { vor: 'Sem papel, mas ', akzent: 'pessoal' },
      absaetze: [
        'As suas apólices já não estão numa pasta na cave, mas no portal do cliente. Se preferir telefonar, telefone.',
      ],
    },
    {
      art: 'portalDemo',
      id: 'ansichten',
      titel: { vor: 'O ', akzent: 'portal do cliente' },
      punkte: [
        'Apólices e documentos: num só lugar, no computador ou no telemóvel',
        'Custos: os seus seguros por ano, num gráfico',
        'Alterações: comunicar diretamente, por exemplo, uma nova morada',
        'Pedidos: proposta, chamada de volta, reunião ou alteração de contrato',
        'Situação: pedido, em tratamento, concluído – com um e-mail a cada alteração',
      ],
      probieren: 'Experimente: abrir contratos, ver as coberturas, preencher um pedido. Todos os dados são fictícios.',
      knoepfe: [
        { text: 'Ir para o portal do cliente', href: 'kundenportal' },
      ],
    },
    {
      art: 'schritte',
      id: 'zugang',
      titel: { vor: 'Como obter ', akzent: 'o seu acesso' },
      schritte: [
        { titel: 'Registar-se', text: 'Regista-se no portal do cliente.' },
        { titel: 'Ativar', text: 'Associamos o seu acesso ao seu processo.' },
        { titel: 'Começar', text: 'Ver as apólices, enviar alterações e pedidos.' },
      ],
      nachsatz:
        'O portal destina-se aos clientes da A&C. Se ainda não é cliente, tudo começa com uma conversa.',
    },
    {
      art: 'text',
      id: 'offerte',
      titel: { vor: 'Pedir uma proposta ', akzent: 'online' },
      absaetze: [
        'Quer uma proposta, mas sem telefonar já? Então peça-a online.',
        'Pergunta a pergunta, todas facultativas. O que ficar em aberto, esclarecemos numa conversa.',
      ],
      knoepfe: [{ text: 'Pedir uma proposta', href: 'offerte' }],
    },
    {
      art: 'fragen',
      id: 'fragen',
      titel: { vor: 'Perguntas ', akzent: 'frequentes' },
      fragen: [
        {
          frage: 'O portal do cliente tem algum custo?',
          antwort: 'Não. Para os clientes da A&C, o portal é gratuito.',
        },
        {
          frage: 'Tenho de usar o portal?',
          antwort:
            'Não. O telefone e o e-mail continuam disponíveis. O portal é um meio adicional, não substitui a conversa.',
        },
      ],
    },
    {
      art: 'kontakt',
      titel: { vor: 'Prefere o contacto ', akzent: 'pessoal', nach: '?' },
      satz: 'Telefone-nos ou escreva-nos. O seu processo é acompanhado por um de nós dois – sem linha de apoio.',
      beschriftungen: { telefon: 'Telefone', email: 'E-mail', buero: 'Escritório' },
    },
  ],
}
