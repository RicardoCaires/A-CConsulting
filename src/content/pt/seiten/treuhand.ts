/** Fiduciária, versão portuguesa de `src/content/seiten/treuhand.ts` (16.10.2026). */
import type { SeitenInhalt } from '@/content/seiten/typen'

export const treuhand: SeitenInhalt = {
  meta: {
    title: 'Contabilidade, salários e fecho de contas para independentes e PME',
    description:
      'Entrega-nos os documentos e nós mantemos a contabilidade em dia. Tem um interlocutor fixo e sabe sempre o que vem a seguir.',
  },
  banner: { themenzeile: 'FIDUCIÁRIA', ueberschrift: 'Contabilidade, salários e fecho de contas para independentes e PME' },
  bloecke: [
    {
      art: 'listen',
      id: 'leistungen',
      titel: { vor: 'O que ', akzent: 'tratamos', nach: ' por si' },
      listen: [
        {
          titel: 'Contabilidade e fecho de contas',
          ziel: { ziel: 'treuhand', anker: 'buchhaltung' },
          eintraege: [
            {
              text: 'Contabilidade corrente',
              zusatz: 'Registar e lançar os documentos.',
              ziel: 'treuhand',
              anker: 'buchhaltung',
            },
            { text: 'Clientes e fornecedores', zusatz: 'Valores em aberto e prazos de pagamento.' },
            {
              text: 'Fecho de contas anual',
              zusatz: 'Com anexo e reunião de análise.',
            },
          ],
        },
        {
          titel: 'Salários e IVA',
          eintraege: [
            {
              text: 'Processamento salarial',
              zusatz: 'Recibos de vencimento, certificados de salário, seguros sociais.',
            },
            { text: 'IVA', zusatz: 'Declarações e prazos.' },
            {
              text: 'Administração da empresa',
              zusatz: 'Pagamentos, cobranças, contactos com as autoridades.',
            },
          ],
        },
        {
          titel: 'Constituição, mudança, impostos',
          eintraege: [
            {
              text: 'Constituição de empresa',
              zusatz: 'Da forma jurídica à primeira contabilidade.',
              ziel: 'treuhand',
              anker: 'firmengruendung',
            },
            {
              text: 'Mudar de fiduciária',
              zusatz: 'Retomamos a situação existente.',
              ziel: 'treuhand',
              anker: 'wechsel',
            },
            {
              text: 'Declaração de impostos',
              zusatz: 'Com base no fecho de contas.',
              ziel: 'steuern',
              anker: 'firmen',
            },
          ],
        },
      ],
    },
    {
      art: 'fluss',
      id: 'buchhaltung',
      titel: { vor: 'A sua ', akzent: 'contabilidade', nach: ' sem pré-lançamentos' },
      stufen: [
        {
          titel: 'O cliente entrega',
          punkte: [
            'Extratos bancários e de caixa',
            'Faturas de clientes e fornecedores',
            'Despesas e talões de pagamentos em dinheiro',
            'Documentos do pessoal, se tiver colaboradores',
          ],
        },
        {
          titel: 'Nós tratamos',
          punkte: ['Organizar e lançar', 'Salários e IVA', 'Atenção aos prazos'],
        },
        {
          titel: 'O cliente recebe',
          punkte: ['Relatórios em datas fixas', 'Fecho de contas anual', 'Base para a declaração de impostos'],
        },
      ],
      nachsatz: 'Sem software, sem pré-lançamentos. Em formato digital ou em papel.',
    },
    {
      art: 'schritte',
      id: 'ablauf',
      titel: { vor: 'Como ', akzent: 'começa', nach: ' a colaboração' },
      schritte: [
        {
          titel: 'Primeira conversa',
          text: 'O que funciona hoje e o que pretende delegar?',
        },
        {
          titel: 'Proposta e âmbito dos serviços',
          text: 'Por escrito: o que assumimos e o que fica do seu lado.',
        },
        {
          titel: 'Transição e arranque',
          text: 'Retomamos a situação existente.',
        },
        {
          titel: 'Acompanhamento corrente',
          text: 'Entrega os documentos, nós lançamos e avisamos se faltar alguma coisa.',
        },
      ],
      nachsatz: 'A primeira conversa é gratuita.',
    },
    {
      art: 'vergleich',
      id: 'firmengruendung',
      titel: { vor: 'Empresa em nome individual ', akzent: 'ou', nach: ' Sàrl (GmbH)?' },
      einleitung: 'Esclarecemos a forma jurídica e coordenamos o banco e o notário.',
      spalten: [
        {
          titel: 'Empresa em nome individual',
          untertitel: 'Começar de forma simples',
          zeilen: [
            { merkmal: 'Capital mínimo', wert: 'Nenhum obrigatório' },
            { merkmal: 'Responsabilidade', wert: 'Pessoal, também com o património privado' },
            { merkmal: 'Constituição', wert: 'Sem escritura pública' },
            {
              merkmal: 'Registo comercial',
              wert: 'Obrigatório para atividade comercial a partir de CHF 100\'000 de volume de negócios',
            },
            { merkmal: 'Estatuto jurídico', wert: 'Sem personalidade jurídica própria' },
          ],
          passt: 'Adequada se começar sozinho e com um risco limitado.',
        },
        {
          titel: 'Sàrl (GmbH)',
          untertitel: 'Construir em separado',
          zeilen: [
            { merkmal: 'Capital mínimo', wert: 'CHF 20\'000, integralmente realizado' },
            {
              merkmal: 'Responsabilidade',
              wert: 'Em princípio, apenas o património da sociedade',
            },
            { merkmal: 'Constituição', wert: 'Escritura pública e estatutos' },
            { merkmal: 'Registo comercial', wert: 'Sempre obrigatório' },
            { merkmal: 'Estatuto jurídico', wert: 'Pessoa coletiva própria' },
          ],
          passt: 'Adequada se quiser separar o privado da empresa ou constituir com outras pessoas.',
        },
      ],
      nachsatz:
        'Comparação resumida segundo o portal PME da Confederação. A forma jurídica adequada deve ser analisada caso a caso.',
      knoepfe: [{ text: 'Falar sobre a forma jurídica', ziel: 'kontakt' }],
    },
    {
      art: 'text',
      id: 'wechsel',
      titel: { vor: 'Já tem uma ', akzent: 'fiduciária', nach: '?' },
      absaetze: ['Mudar é possível também a meio do ano; o mais simples é no início do ano.'],
      punkte: [
        'Discreto: a sua fiduciária atual só fica a saber quando nos der o mandato.',
        'Rescisão: preparamo-la por si.',
        'Transição: retomamos a situação existente.',
      ],
      knoepfe: [{ text: 'Falar sobre a sua situação', ziel: 'kontakt', art: 'zweit' }],
    },
    {
      art: 'fragen',
      id: 'fragen',
      titel: { vor: 'Perguntas ', akzent: 'frequentes' },
      fragen: [
        {
          frage: 'Posso começar a meio do ano?',
          antwort: 'Sim. Retomamos a situação existente e continuamos a partir daí.',
        },
        {
          frage: 'Quem é o meu interlocutor?',
          antwort:
            'Uma pessoa fixa que acompanha o seu processo. Ambos acompanham clientes de seguros; os mandatos de fiduciária são acompanhados por Ricardo Caires.',
        },
        {
          frage: 'O que acontece aos meus dados?',
          antwort: 'Os seus dados são tratados na Suíça e de forma confidencial.',
        },
      ],
    },
    {
      art: 'kontakt',
      titel: { vor: 'Como nos ', akzent: 'contactar' },
      satz: 'Na primeira conversa vemos o que tem hoje em mãos. É gratuita.',
      beschriftungen: { telefon: 'Telefone', email: 'E-mail', buero: 'Escritório' },
    },
  ],
}
