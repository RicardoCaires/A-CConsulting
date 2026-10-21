/**
 * Sobre nós, versão portuguesa de `src/content/seiten/ueber-uns.ts` (16.10.2026).
 * Funções conforme a instrução do Ricardo de 15.09.2026: Octavio é gerente e sócio, Ricardo é sócio.
 */
import type { SeitenInhalt } from '@/content/seiten/typen'

export const ueberUns: SeitenInhalt = {
  meta: {
    title: 'Sobre nós',
    description:
      'Quem está por trás da A&C Consulting: dois sócios que acompanham pessoalmente os seus mandatos. Escritório em Aegerten, cantão de Berna.',
  },
  banner: { themenzeile: 'SOBRE A A&C', ueberschrift: 'Quem está por trás da A&C Consulting' },
  bloecke: [
    {
      art: 'personen',
      id: 'inhaber',
      ausfuehrlich: true,
      titel: { vor: 'Os dois ', akzent: 'sócios' },
      satz: 'O seu interlocutor conhece o seu processo e acompanha-o diretamente. Assim, os caminhos são curtos e as responsabilidades claras.',
      leute: [
        {
          name: 'Ricardo Caires',
          rolle: 'Sócio',
          angaben: [
            {
              merkmal: 'Percurso profissional',
              wert: 'Empregado de comércio CFC (EFZ). Finanças e contabilidade na Creabeton Matériaux AG em Lyss.',
            },
            {
              merkmal: 'Qualifi­cações',
              wert: 'Sachbearbeiter Rechnungswesen VSK (técnico de contabilidade), Feusi Bildungszentrum Bern, e intermediário de seguros VBV.',
            },
          ],
          sprachen: 'Línguas de aconselhamento: alemão, português e inglês',
          telefon: 'ricardo',
          email: 'ricardo',
          linkedin: 'https://www.linkedin.com/in/ricardo-caires-84a222214/',
        },
        {
          name: 'Octavio Nuno Gouveia Andrade',
          rolle: 'Gerente e sócio',
          angaben: [
            {
              merkmal: 'Percurso profissional',
              wert: 'Allianz Suisse e Zurich Seguros em Biel/Bienne, hoje corretor de seguros independente.',
            },
            { merkmal: 'Qualificação', wert: 'Intermediário de seguros VBV.' },
          ],
          sprachen: 'Línguas de aconselhamento: alemão, francês e português',
          telefon: 'octavio',
          email: 'octavio',
          linkedin: 'https://www.linkedin.com/in/octavio-andrade-211083130/',
        },
      ],
    },
    {
      art: 'text',
      id: 'arbeitsweise',
      breit: true,
      titel: { vor: 'Como ', akzent: 'trabalhamos' },
      punkte: [
        'Direto: fala com a pessoa que conhece o seu processo.',
        'Claro: definimos as tarefas e os custos logo no início.',
        'Confidencial: tratamos as suas informações e documentos de forma confidencial.',
        'Delimitado: o aconselhamento jurídico e a revisão de contas prevista no direito das sociedades anónimas não fazem parte dos nossos serviços.',
      ],
    },
    {
      art: 'kontakt',
      id: 'region',
      titel: { vor: 'O nosso escritório em ', akzent: 'Aegerten' },
      satz: 'As reuniões podem ser no nosso escritório ou, por marcação, em sua casa ou empresa. Descreva-nos brevemente a sua situação – entraremos em contacto pessoalmente.',
      beschriftungen: { telefon: 'Telefone', email: 'E-mail', buero: 'Escritório' },
    },
  ],
}
