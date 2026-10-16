/**
 * Declaração de proteção de dados, tradução fiel de `src/content/seiten/datenschutz.ts` (16.10.2026).
 * Apenas a versão alemã faz fé. Qualquer alteração parte do texto alemão (apenas pelo Ricardo).
 */
import type { SeitenInhalt } from '@/content/seiten/typen'

export const datenschutz: SeitenInhalt = {
  meta: {
    title: 'Declaração de proteção de dados',
    description:
      'Como a A&C Consulting GmbH trata os dados pessoais — segundo a lei suíça revista sobre a proteção de dados.',
  },
  banner: { themenzeile: 'PROTEÇÃO DE DADOS', ueberschrift: 'Proteção de dados' },
  bloecke: [
    {
      art: 'text',
      id: 'verantwortlich',
      titel: { vor: 'Entidade ', akzent: 'responsável' },
      absaetze: [
        'Apenas a versão alemã faz fé.',
        'A responsável pelo tratamento de dados pessoais relacionado com este site é a A&C Consulting GmbH.',
        [{ company: 'sitz' }],
        'Para questões sobre proteção de dados, dirija-se a Ricardo Caires.',
      ],
    },
    {
      art: 'text',
      id: 'nicht',
      titel: { vor: 'O que este site ', akzent: 'não', nach: ' faz' },
      punkte: [
        'Este site não utiliza cookies.',
        'Não utiliza ferramentas de análise, pixéis de rastreio nem ferramentas de medição de comportamento.',
        'Não integra tipos de letra, vídeos nem botões de servidores de terceiros. A única exceção é o mapa do Google Maps na página «Sobre nós».',
        'Não há registo, área de cliente nem newsletter.',
      ],
    },
    {
      art: 'text',
      id: 'besuch',
      titel: { vor: 'Ao ', akzent: 'visitar', nach: ' este site' },
      absaetze: [
        'Ao abrir uma página, o seu navegador transmite informações técnicas necessárias para a apresentar: endereço IP, momento, endereço acedido, volume de dados transmitido e informações sobre o navegador e o sistema operativo.',
        'Estas informações são geradas no nosso fornecedor de alojamento. Servem para o funcionamento e a segurança do site — por exemplo, para a defesa contra ataques — e não são combinadas com outros dados.',
        'Não analisamos estas informações nem criamos perfis a partir delas.',
      ],
    },
    {
      art: 'text',
      id: 'hosting',
      titel: { akzent: 'Alojamento' },
      absaetze: [
        'O site é operado pela Cloudflare, Inc. e disponibilizado através da sua rede mundial.',
        'Isto significa que as informações técnicas referidas na secção 03 podem também ser tratadas fora da Suíça, consoante o local por onde passa o seu acesso.',
        'A Cloudflare atua para nós como subcontratante e só pode utilizar os dados para o funcionamento do site.',
        'Esta indicação diz respeito exclusivamente à visita do site. Os documentos e dados de um mandato são tratados separadamente e não passam por este site.',
      ],
    },
    {
      art: 'text',
      id: 'google-maps',
      titel: { vor: 'Mapa do ', akzent: 'Google Maps' },
      absaetze: [
        'Na página «Sobre nós» integramos um mapa do Google Maps (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irlanda).',
        'Ao abrir a página, o seu navegador estabelece uma ligação aos servidores da Google; são transmitidos à Google, em particular, o seu endereço IP e informações sobre o navegador, também para os EUA.',
        'Utilizamos o mapa para que encontre facilmente o nosso escritório. Mais informações na declaração de privacidade da Google em policies.google.com/privacy.',
      ],
    },
    {
      art: 'text',
      id: 'kontakt',
      titel: { vor: 'Quando nos ', akzent: 'contacta' },
      absaetze: [
        'Se nos telefonar ou enviar um e-mail, tratamos os dados que nos fornece para responder ao seu pedido.',
        'Em regra, trata-se do seu nome, do seu número de telefone ou endereço de e-mail e do que nos comunicar.',
        'Gerimos nós próprios a nossa caixa de correio eletrónico. Está alojada na Microsoft. A Microsoft atua como subcontratante e está vinculada às nossas instruções.',
        'Os pedidos que não resultem num mandato são apagados logo que deixem de ser necessários.',
        'De momento não existe formulário de contacto. Assim que um for disponibilizado, completaremos previamente esta declaração.',
        'Por favor, não nos envie por e-mail dados particularmente sensíveis — por exemplo, dados de saúde, número AVS (AHV) ou dados bancários. Para a troca de documentos, criamos um canal protegido após o primeiro contacto.',
      ],
    },
    {
      art: 'text',
      id: 'weitergabe',
      titel: { vor: 'Transmissão a ', akzent: 'terceiros' },
      absaetze: [
        'Não transmitimos os seus dados a terceiros para os vender ou utilizar para publicidade.',
        'A transmissão só ocorre se nos encarregar disso — por exemplo, a uma seguradora no âmbito de um mandato de corretagem —, se a lei a isso nos obrigar, ou a subcontratantes que trabalham para nós e estão vinculados às nossas instruções.',
      ],
    },
    {
      art: 'text',
      id: 'rechte',
      titel: { vor: 'Os seus ', akzent: 'direitos' },
      absaetze: [
        'Tem o direito de pedir informações sobre os dados pessoais que tratamos.',
        'Pode retificar dados incorretos e pedir o apagamento de dados, desde que não tenhamos de os conservar por razões legais.',
        'Pode opor-se ao tratamento e pedir a entrega dos seus dados num formato corrente.',
        'Para um pedido de informação basta uma comunicação informal. Podemos pedir-lhe uma prova da sua identidade.',
        'Se não concordar com a nossa resposta, pode dirigir-se ao Comissário Federal para a Proteção de Dados e a Transparência (PFPDT/EDÖB).',
      ],
    },
    {
      art: 'text',
      id: 'sicherheit',
      titel: { akzent: 'Segurança' },
      absaetze: [
        'O site é disponibilizado exclusivamente de forma cifrada.',
        'Tomamos medidas técnicas e organizativas adequadas para proteger os seus dados contra perda e acesso não autorizado. Ninguém pode garantir segurança total na transmissão pela Internet.',
      ],
    },
    {
      art: 'text',
      id: 'aenderungen',
      titel: { akzent: 'Alterações' },
      absaetze: [
        'Adaptamos esta declaração quando o site ou a situação jurídica mudam.',
        'Conta a versão publicada nesta página em cada momento.',
        'Versão de: 09.09.2026',
      ],
    },
  ],
}
