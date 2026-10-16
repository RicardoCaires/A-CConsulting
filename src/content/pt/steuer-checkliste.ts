/**
 * Questionário e lista de verificação para a declaração de impostos, versão portuguesa de
 * `src/content/steuer-checkliste.ts` (16.10.2026). Os identificadores das opções e as listas `wenn` mantêm-se.
 */
import type { steuerCheckliste as DE } from '@/content/steuer-checkliste'
import type { Uebersetzt } from '@/lib/sprache'

export const steuerCheckliste: Uebersetzt<typeof DE> = {
  start: 'Criar a lista de verificação',
  einleitung: 'Sete perguntas breves e depois enviamos-lhe a sua lista pessoal de documentos.',
  frageVon: 'Pergunta',
  von: 'de',
  weiter: 'Seguinte',
  zurueck: 'Voltar',
  keine: 'Nada disto',
  mehrere: 'Pode escolher várias respostas.',
  ergebnisTitel: 'A sua lista de verificação',
  ergebnisSatz: 'Assinale o que já tem preparado.',
  neu: 'Recomeçar',
  mailBetreff: 'Lista de verificação da declaração de impostos',
  mailEinleitung: 'Estes são os documentos de que preciso para a declaração de impostos:',
  pdfTitel: 'Os seus documentos para a declaração de impostos',
  pdfKopf: 'Lista de verificação da declaração de impostos',
  pdfUntertitel: 'Elaborada em ac-co.ch',
  pdfSatz: 'Prepare estes documentos. O que faltar, esclarecemos de bom grado numa conversa.',
  kontaktTitel: 'Para onde podemos enviar a sua lista de verificação?',
  kontaktSatz:
    'Recebe a lista de verificação em PDF por e-mail. Telefonamos-lhe para falar sobre a sua declaração de impostos.',
  vorname: 'Nome próprio',
  nachname: 'Apelido',
  telefon: 'Telefone',
  email: 'E-mail',
  datenschutzVor:
    'Utilizamos os seus dados para lhe enviar a lista de verificação e para lhe telefonar sobre a sua declaração de impostos. Mais informações na ',
  datenschutz: 'declaração de proteção de dados',
  senden: 'Enviar a lista de verificação',
  sendet: 'A enviar …',
  fehlerPflicht: 'Preencha todos os campos, por favor.',
  fehlerEmail: 'Verifique o endereço de e-mail, por favor.',
  fehlerServer: 'Neste momento não foi possível enviar a lista de verificação. Por favor, telefone-nos.',
  dankeTitel: 'A sua lista de verificação está a caminho',
  dankeSatz: 'Enviámo-la para o seu endereço de e-mail e entraremos em contacto por telefone.',
  dankeListe: 'O que contém:',
  dankeTitelOhneMail: 'Obrigado, recebemos os seus dados',
  dankeSatzOhneMail:
    'Neste momento não foi possível enviar o e-mail com a lista de verificação. Telefonamos-lhe e enviamo-la.',
  dankeTitelBereits: 'Obrigado, recebemos os seus dados',
  dankeSatzBereits: 'Já lhe enviámos hoje uma lista para este endereço de e-mail. Vamos telefonar-lhe para falar da sua declaração de impostos.',

  fragen: [
    {
      id: 'stand',
      titel: 'Qual é a sua situação?',
      mehrfach: false,
      optionen: [
        { id: 'allein', text: 'Pessoa só' },
        { id: 'paar', text: 'Casado/a ou em união de facto registada' },
      ],
    },
    {
      id: 'kinder',
      titel: 'Tem filhos?',
      mehrfach: false,
      optionen: [
        { id: 'kinderNein', text: 'Não' },
        { id: 'kinderJa', text: 'Sim' },
        { id: 'kinderBetreuung', text: 'Sim, com creche ou escola a tempo inteiro' },
      ],
    },
    {
      id: 'einkommen',
      titel: 'De onde vem o seu rendimento?',
      mehrfach: true,
      optionen: [
        { id: 'angestellt', text: 'Trabalho por conta de outrem' },
        { id: 'selbstaendig', text: 'Atividade independente' },
        { id: 'rente', text: 'Pensão AVS (AHV) ou da caixa de pensões' },
        { id: 'taggeld', text: 'Subsídio de desemprego, de doença ou de acidente' },
        { id: 'neben', text: 'Atividade secundária' },
      ],
    },
    {
      id: 'wohnen',
      titel: 'Como vive?',
      mehrfach: false,
      optionen: [
        { id: 'miete', text: 'Em casa arrendada' },
        { id: 'eigentum', text: 'Em casa ou apartamento próprio' },
      ],
    },
    {
      id: 'vermoegen',
      titel: 'O que possui?',
      mehrfach: true,
      optionen: [
        { id: 'wertschriften', text: 'Títulos ou uma conta de custódia' },
        { id: 'krypto', text: 'Criptomoedas' },
        { id: 'lebensversicherung', text: 'Seguro de vida com valor de resgate' },
        { id: 'ausland', text: 'Conta ou imóvel no estrangeiro' },
        { id: 'schulden', text: 'Créditos ou empréstimos' },
      ],
    },
    {
      id: 'vorsorge',
      titel: 'O que se aplica ao ano passado?',
      mehrfach: true,
      optionen: [
        { id: 's3a', text: 'Fiz entradas no 3.º pilar a' },
        { id: 'pkEinkauf', text: 'Fiz uma compra de anos de contribuição na caixa de pensões' },
        { id: 'kapitalbezug', text: 'Levantei capital da caixa de pensões ou do 3.º pilar a' },
      ],
    },
    {
      id: 'weiteres',
      titel: 'Houve outras despesas ou acontecimentos?',
      mehrfach: true,
      optionen: [
        { id: 'spenden', text: 'Donativos' },
        { id: 'weiterbildung', text: 'Formação profissional contínua' },
        { id: 'unterhalt', text: 'Pensões de alimentos' },
        { id: 'erbschaft', text: 'Herança ou doação' },
        { id: 'umzug', text: 'Mudança para outro município' },
      ],
    },
  ],

  gruppen: [
    {
      titel: 'Geral',
      unterlagen: [
        { text: 'Declaração de impostos com código de acesso' },
        { text: 'Última nota de liquidação definitiva' },
        { text: 'Dados sobre os filhos e a sua formação', wenn: ['kinderJa', 'kinderBetreuung'] },
        { text: 'Faturas da creche, da escola a tempo inteiro ou da ama', wenn: ['kinderBetreuung'] },
      ],
    },
    {
      titel: 'Rendimentos',
      unterlagen: [
        { text: 'Certificado de salário, no caso de casais de ambos', wenn: ['angestellt'] },
        {
          text: 'Comprovativos de despesas profissionais, por exemplo o passe para o trajeto até ao trabalho',
          wenn: ['angestellt', 'neben'],
        },
        { text: 'Contas anuais com balanço e demonstração de resultados', wenn: ['selbstaendig'] },
        { text: 'Decisão de contribuições da caixa de compensação AVS (AHV)', wenn: ['selbstaendig'] },
        { text: 'Comprovativos de pensão da AVS e da caixa de pensões', wenn: ['rente'] },
        { text: 'Comprovativos de subsídios diários', wenn: ['taggeld'] },
        { text: 'Certificados de salário ou extratos da atividade secundária', wenn: ['neben'] },
      ],
    },
    {
      titel: 'Património e dívidas',
      unterlagen: [
        { text: 'Extratos de conta a 31 de dezembro com comprovativo de juros' },
        { text: 'Extrato da conta de custódia e extrato fiscal do banco', wenn: ['wertschriften'] },
        { text: 'Saldo das criptomoedas a 31 de dezembro', wenn: ['krypto'] },
        { text: 'Comprovativo do valor de resgate do seguro de vida', wenn: ['lebensversicherung'] },
        { text: 'Comprovativos de contas e imóveis no estrangeiro', wenn: ['ausland'] },
        { text: 'Comprovativo de dívida com os juros pagos', wenn: ['schulden'] },
      ],
    },
    {
      titel: 'Casa própria',
      unterlagen: [
        { text: 'Comprovativo dos juros hipotecários', wenn: ['eigentum'] },
        { text: 'Faturas de manutenção e renovação', wenn: ['eigentum'] },
        { text: 'Valor oficial e valor locativo do imóvel', wenn: ['eigentum'] },
      ],
    },
    {
      titel: 'Previdência e seguros',
      unterlagen: [
        { text: 'Resumo dos prémios do seguro de saúde' },
        { text: 'Comprovativo de entrada no 3.º pilar a', wenn: ['s3a'] },
        { text: 'Confirmação da caixa de pensões sobre a compra de anos de contribuição', wenn: ['pkEinkauf'] },
        { text: 'Extrato do levantamento de capital', wenn: ['kapitalbezug'] },
      ],
    },
    {
      titel: 'Outras deduções e acontecimentos',
      unterlagen: [
        { text: 'Comprovativos de donativos', wenn: ['spenden'] },
        { text: 'Faturas da formação contínua', wenn: ['weiterbildung'] },
        { text: 'Comprovativos das pensões de alimentos', wenn: ['unterhalt'] },
        { text: 'Documentos sobre a herança ou doação', wenn: ['erbschaft'] },
        { text: 'Data da mudança e nova morada', wenn: ['umzug'] },
      ],
    },
  ],
}
