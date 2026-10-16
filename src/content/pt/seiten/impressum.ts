/**
 * Informação legal, tradução fiel de `src/content/seiten/impressum.ts` (16.10.2026).
 * Apenas a versão alemã faz fé. Firma, sede, IDE e número FINMA vêm de `src/lib/company.ts`.
 */
import type { SeitenInhalt } from '@/content/seiten/typen'

export const impressum: SeitenInhalt = {
  meta: {
    title: 'Informação legal',
    description:
      'Informações obrigatórias da A&C Consulting GmbH: firma, sede, registo comercial, registo na FINMA e contacto.',
  },
  banner: { themenzeile: 'INFORMAÇÃO LEGAL', ueberschrift: 'Informação legal' },
  bloecke: [
    {
      art: 'text',
      id: 'verantwortlich',
      titel: { vor: 'Responsável por este ', akzent: 'site' },
      absaetze: [
        'Apenas a versão alemã faz fé.',
        [{ company: 'firma' }],
        [{ company: 'sitz' }],
        'Sociedade de responsabilidade limitada, inscrita no registo comercial do cantão de Berna.',
        ['IDE e número do registo comercial: ', { company: 'uid' }],
      ],
    },
    {
      art: 'kontakt',
      id: 'kontakt',
      titel: { akzent: 'Contacto' },
      satz: 'O telefone e o e-mail constam do rodapé de cada página e da página de contacto.',
      beschriftungen: { telefon: 'Telefone', email: 'E-mail', buero: 'Morada' },
      ohneKnopf: true,
      ohneKarte: true,
    },
    {
      art: 'text',
      id: 'vertretung',
      titel: { vor: 'Pessoas com poderes de ', akzent: 'representação' },
      absaetze: ['Gerente e sócio: Octavio Nuno Gouveia Andrade', 'Sócio: Ricardo Caires'],
    },
    {
      art: 'text',
      id: 'aufsicht',
      titel: { akzent: 'Supervisão', nach: ' e registo' },
      absaetze: [
        'A A&C Consulting GmbH está inscrita como intermediária de seguros no registo da Autoridade Federal de Supervisão dos Mercados Financeiros FINMA.',
        ['Número de registo: ', { company: 'finma' }],
        [
          'A inscrição pode ser consultada publicamente: ',
          {
            url: 'https://www.finma.ch/de/bewilligung/versicherungsvermittlung/registersuche/F01568855',
            label: 'Inscrição no registo da FINMA',
          },
        ],
        'Autoridade de supervisão competente: Autoridade Federal de Supervisão dos Mercados Financeiros FINMA, Laupenstrasse 27, 3003 Bern.',
        'Enquanto intermediária de seguros não vinculada, defendemos os interesses dos nossos clientes e não os de uma seguradora.',
      ],
    },
    {
      art: 'text',
      id: 'berufsbezeichnung',
      titel: { akzent: 'Designação profissional' },
      absaetze: [
        'Corretor de seguros, bem como fiduciária e impostos. As designações profissionais não são protegidas na Suíça, com exceção dos certificados profissionais federais (eidgenössischer Fachausweis), que não possuímos.',
      ],
    },
    {
      art: 'text',
      id: 'haftung',
      titel: { vor: 'Responsabilidade pelos ', akzent: 'conteúdos' },
      absaetze: [
        'Elaboramos os conteúdos deste site com cuidado. No entanto, não garantimos a sua exatidão, integralidade nem atualidade.',
        'As informações deste site são de caráter geral. Não substituem um aconselhamento individual e não constituem qualquer relação de mandato.',
        'As situações jurídicas, os prazos e os limiares mudam. Conta sempre a versão da respetiva disposição em vigor no momento.',
      ],
    },
    {
      art: 'text',
      id: 'verweise',
      titel: { vor: 'Responsabilidade pelas ', akzent: 'ligações' },
      absaetze: [
        'Este site contém ligações para sites de terceiros. Não temos qualquer influência sobre os seus conteúdos e não assumimos responsabilidade por eles.',
        'O conteúdo de uma página ligada é da responsabilidade do respetivo operador.',
      ],
    },
    {
      art: 'text',
      id: 'urheberrecht',
      titel: { akzent: 'Direitos de autor' },
      absaetze: [
        'Os textos, imagens, gráficos e o logótipo deste site estão protegidos por direitos de autor.',
        'Qualquer utilização para além dos limites do direito de autor requer o nosso consentimento por escrito.',
      ],
    },
  ],
}
