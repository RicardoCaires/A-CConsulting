import type { PageContent } from '@/content/types'
import type { Uebersetzt } from '@/lib/sprache'

type Kontaktformular = Extract<PageContent['blocks'][number], { kind: 'kontaktformular' }>

/** Formulário de contacto em /pt/contacto – tradução de `src/content/pages/kontakt.ts` (16.10.2026). */
export const kontaktformular: Uebersetzt<Kontaktformular> = {
  kind: 'kontaktformular',
  id: 'formular',
  eyebrow: 'Contacto pessoal',
  heading: 'Escreva-nos.',
  lead: 'Descreva-nos brevemente o seu pedido. Respondemos-lhe pessoalmente e esclarecemos em conjunto o próximo passo.',
  kontakt: {
    telefonLabel: 'Telefone',
    telefonText: 'Ligar agora',
    emailLabel: 'E-mail',
  },
  zusage: {
    titel: 'Resposta pessoal',
    text: 'Em regra, respondemos ao seu pedido no prazo de um dia útil.',
  },
  formular: {
    heading: 'Em que podemos ajudar?',
    pflichtHinweis: '* Campos obrigatórios',
    name: 'Nome *',
    email: 'E-mail *',
    telefon: 'Telefone',
    anliegen: 'Assunto *',
    anliegenPlatzhalter: 'Selecione',
    anliegenWahl: ['Seguros', 'Contabilidade e fiduciária', 'Impostos', 'Constituição de empresa', 'Outro assunto'],
    kontaktartFrage: 'Como prefere ser contactado?',
    kontaktartEmail: 'E-mail',
    kontaktartTelefon: 'Telefone',
    nachricht: 'A sua mensagem *',
    nachrichtPlatzhalter: 'Descreva o seu pedido em poucas frases.',
    zustimmungVor: 'Li a ',
    zustimmungLink: 'declaração de proteção de dados',
    zustimmungNach: ' e aceito o tratamento dos meus dados para o seguimento do pedido.',
    knopf: 'Enviar pedido →',
    vertraulich: 'Os seus dados são tratados de forma confidencial e não são transmitidos a terceiros.',
  },
}
