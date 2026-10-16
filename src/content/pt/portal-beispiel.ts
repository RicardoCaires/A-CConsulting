/**
 * Vistas de exemplo do portal do cliente, versão portuguesa de `src/content/seiten/portal-beispiel.ts` (16.10.2026).
 * Pessoa, seguradoras, contratos, números e montantes são fictícios. Identificadores (`id`, `seite`, `formular`,
 * `zeichen`, `art`, `key`, `typ`, `feld`) e montantes mantêm-se. Se o original mudar, atualizar aqui.
 */
import type {
  portalAnfragen as DeAnfragen,
  portalBeispiel as DeBeispiel,
  portalDemo as DeDemo,
  portalFenster as DeFenster,
  portalPolice as DePolice,
  portalRahmen as DeRahmen,
  portalUnterlagen as DeUnterlagen,
  portalVersicherungen as DeVersicherungen,
} from '@/content/seiten/portal-beispiel'
import type { Uebersetzt } from '@/lib/sprache'

export const portalBeispiel: Uebersetzt<typeof DeBeispiel> = {
  titel: 'Os meus seguros',
  untertitel: 'Vista de exemplo',
  diagrammTitel: 'Prémios por ano',
  segmente: [
    { text: 'Saúde', betrag: 4200 },
    { text: 'Veículo', betrag: 1350 },
    { text: 'Habitação', betrag: 620 },
    { text: 'Proteção jurídica', betrag: 310 },
  ],
  hinweis: 'Exemplo com números fictícios.',
}

export const portalRahmen: Uebersetzt<typeof DeRahmen> = {
  adresse: 'crm.ac-co.ch/portal',
  navigation: ['Início', 'Seguros', 'Pedidos'],
  hinweis: 'Vista de exemplo com dados fictícios.',
}

export const portalFenster: Uebersetzt<typeof DeFenster> = {
  vorzeile: 'O seu portal do cliente',
  gruss: 'Bom dia, Sra. Exemplo',
  satz: 'Aqui vê os seus seguros e contacta-nos diretamente.',
  kennzahlen: [
    { zahl: '4', text: 'contratos em vigor', link: 'Ver' },
    { zahl: '4', text: 'seguradoras' },
  ],
  termin: { titel: 'Próxima reunião', text: 'Ainda nenhuma marcada', knopf: 'Marcar reunião' },
  ringTitel: 'Os seus custos com seguros por ano',
  proJahr: 'por ano',
  segmente: [
    { text: 'Seguro de saúde', betrag: 4200 },
    { text: 'Veículo a motor', betrag: 1350 },
    { text: 'Recheio e responsa­bilidade civil privada', betrag: 620 },
    { text: 'Proteção jurídica', betrag: 310 },
  ],
}

export const portalVersicherungen: Uebersetzt<typeof DeVersicherungen> = {
  titel: 'Os meus seguros',
  einleitung: 'Clique num contrato para ver os detalhes e descarregar a apólice.',
  gruppe: 'Acompanhado pela A&C',
  angewaehlt: 1,
  policen: [
    { name: 'Seguro de saúde', gesellschaft: 'Seguradora Exemplo SA', zeile: 'Apólice KV-100100 · 2 documentos' },
    { name: 'Veículo a motor', gesellschaft: 'Seguradora Exemplo SA', zeile: 'Apólice MF-100300 · 1 documento' },
    {
      name: 'Recheio e responsa­bilidade civil privada',
      gesellschaft: 'Seguradora Exemplo SA',
      zeile: 'Apólice BV-100200 · 1 documento',
    },
  ],
}

export const portalPolice: Uebersetzt<typeof DePolice> = {
  zurueck: 'Todos os seguros',
  name: 'Veículo a motor',
  gesellschaft: 'Seguradora Exemplo SA',
  status: 'em vigor',
  knopf: 'Descarregar apólice',
  titel: 'O que está seguro',
  leistungen: [
    { name: 'Responsabilidade civil automóvel', zusatz: null, wert: "CHF 100'000'000" },
    { name: 'Casco parcial', zusatz: 'Franquia CHF 200', wert: null },
    { name: 'Danos de estacionamento', zusatz: 'Franquia CHF 500', wert: null },
  ],
}

export const portalAnfragen: Uebersetzt<typeof DeAnfragen> = {
  titel: 'Pedidos',
  wahl: ['Pedir uma proposta', 'Pedir que lhe liguemos', 'Marcar reunião', 'Comunicar alteração', 'Enviar mensagem'],
  bisher: 'Os seus pedidos anteriores',
  anfragen: [
    { betreff: 'Pedido de proposta veículo a motor', datum: '12.10.2026', stand: 'em tratamento', art: 'navy' },
    { betreff: 'Pedido de chamada', datum: '14.10.2026', stand: 'pedido', art: 'offen' },
    { betreff: 'Pedido de reunião', datum: '02.10.2026', stand: 'concluído', art: 'gruen' },
  ],
}

export const portalUnterlagen: Uebersetzt<typeof DeUnterlagen> = {
  zurueck: 'Todos os seguros',
  name: 'Recheio e responsa­bilidade civil privada',
  gesellschaft: 'Seguradora Exemplo SA',
  status: 'em vigor',
  knopf: 'Descarregar apólice',
  titel: 'Documentos deste contrato',
  dokumente: [
    { name: 'Apólice 2026', zeile: 'Apólice · 01.01.2026 · 245 KB', knopf: 'Descarregar apólice', haupt: true },
    { name: 'Aditamento mudança de casa', zeile: 'Aditamento · 15.03.2026 · 120 KB', knopf: 'Descarregar', haupt: false },
  ],
}

export const portalDemo: Uebersetzt<typeof DeDemo> = {
  navigation: [
    { seite: 'start', text: 'Início' },
    { seite: 'versicherungen', text: 'Seguros' },
    { seite: 'anfragen', text: 'Pedidos' },
    { seite: 'angaben', text: 'Os meus dados' },
  ],
  bereiche: 'Áreas',
  zurStart: 'Ir para o início',
  band: 'Portal de exemplo com dados fictícios – explore à vontade. Nada é enviado.',
  meldungSenden: 'No portal de exemplo nada é enviado. No portal real, o seu pedido já teria chegado até nós.',
  meldungLaden: 'O portal de exemplo não tem ficheiros. No portal real, descarrega aqui o ficheiro PDF.',
  meldungAngabe: 'No portal de exemplo nada é enviado. No portal real, registamos a sua alteração.',
  schliessen: 'Fechar aviso',

  start: {
    vorzeile: 'O seu portal do cliente',
    gruss: 'Bom dia, Sra. Exemplo',
    satz: 'Aqui vê os seus seguros e contacta-nos diretamente.',
    vertraege: 'contratos em vigor',
    gesellschaften: 'seguradoras',
    ansehen: 'Ver',
    termin: { titel: 'Próxima reunião', text: 'Ainda nenhuma marcada', knopf: 'Marcar reunião' },
    ringTitel: 'Os seus custos com seguros por ano',
    proJahr: 'por ano',
    tun: 'O que pretende fazer?',
    kacheln: [
      {
        zeichen: 'schild',
        titel: 'Os meus seguros',
        text: 'Contratos, coberturas e apólices para descarregar',
        seite: 'versicherungen',
        formular: null,
      },
      { zeichen: 'dokument', titel: 'Pedir uma proposta', text: 'Para um seguro novo ou melhor', seite: 'anfragen', formular: 'offerte' },
      { zeichen: 'telefon', titel: 'Pedir que lhe liguemos', text: 'Ligamos-lhe à hora pretendida', seite: 'anfragen', formular: 'rueckruf' },
      { zeichen: 'kalender', titel: 'Marcar reunião', text: 'No escritório ou por telefone', seite: 'anfragen', formular: 'termin' },
      { zeichen: 'person', titel: 'Os meus dados', text: 'Alterar morada, telefone ou e-mail', seite: 'angaben', formular: null },
      { zeichen: 'nachricht', titel: 'Enviar mensagem', text: 'Uma pergunta ou um assunto', seite: 'anfragen', formular: 'nachricht' },
    ],
    offenEine: 'Um pedido está em aberto',
    offenMehr: 'pedidos estão em aberto',
    alleAnfragen: 'Ver todos os pedidos',
  },

  versicherungen: {
    titel: 'Os meus seguros',
    einleitung: 'Clique num contrato para ver os detalhes e descarregar a apólice.',
    gruppe: 'Acompanhado pela A&C',
    unterlage: 'documento',
    unterlagen: 'documentos',
    stand: 'Baseia-se nos dados registados na A&C. Conta a apólice da respetiva seguradora.',
  },

  police: {
    zurueck: 'Todos os seguros',
    status: 'em vigor',
    herunterladen: 'Descarregar apólice',
    laden: 'Descarregar',
    vertrag: 'Contrato',
    versichert: 'O que está seguro',
    versichertHinweis:
      'Consta o que está registado connosco. Se faltar uma cobertura da sua apólice, por favor informe-nos.',
    unterlagen: 'Documentos deste contrato',
    aendern: 'Comunicar alteração a este contrato',
    frage: 'Pergunta sobre este contrato',
    rueckruf: 'Pedir que lhe liguemos',
    massgebend: 'Conta a apólice da seguradora. Os dados aqui provêm do nosso registo.',
    angaben: {
      gesellschaft: 'Seguradora',
      versicherung: 'Seguro',
      nummer: 'Número da apólice',
      laufzeit: 'Duração',
      verfall: 'Vencimento principal',
      praemie: 'Prémio',
    },
  },

  policen: [
    {
      id: 'kv',
      name: 'Seguro de saúde',
      sparte: 'Seguro básico e complementar',
      gesellschaft: 'Seguro de Saúde Exemplo',
      nummer: 'KV-100100',
      laufzeit: '01.01.2026 a 31.12.2026',
      verfall: '31 de dezembro',
      praemie: 'CHF 350.00 por mês',
      jahr: 4200,
      leistungen: [
        { name: 'Seguro básico', zusatz: 'Franquia CHF 1’500', wert: null },
        { name: 'Hospital semiprivado', zusatz: null, wert: null },
        { name: 'Medicina alternativa', zusatz: '80 % dos custos', wert: null },
      ],
      objekt: null,
      dokumente: [
        { name: 'Apólice 2026', zeile: 'Apólice · 01.01.2026 · 210 KB', police: true },
        { name: 'Cartão de segurado', zeile: 'Cartão · 01.01.2026 · 85 KB', police: false },
      ],
    },
    {
      id: 'mf',
      name: 'Veículo a motor',
      sparte: 'Veículo a motor',
      gesellschaft: 'Seguradora Exemplo SA',
      nummer: 'MF-100300',
      laufzeit: '01.03.2025 a 28.02.2028',
      verfall: '1 de março',
      praemie: 'CHF 1’350.00 por ano',
      jahr: 1350,
      leistungen: [
        { name: 'Responsabilidade civil automóvel', zusatz: null, wert: "CHF 100'000'000" },
        { name: 'Casco parcial', zusatz: 'Franquia CHF 200', wert: null },
        { name: 'Danos de estacionamento', zusatz: 'Franquia CHF 500', wert: null },
      ],
      objekt: {
        titel: 'Veículo: carrinha exemplo',
        angaben: [
          { name: 'Primeira matrícula', wert: '03.2021' },
          { name: 'Preço de catálogo', wert: 'CHF 42’000.00' },
          { name: 'Condutora principal', wert: 'Ana Exemplo' },
        ],
      },
      dokumente: [{ name: 'Apólice 2025', zeile: 'Apólice · 01.03.2025 · 245 KB', police: true }],
    },
    {
      id: 'hr',
      name: 'Recheio e responsa­bilidade civil privada',
      sparte: 'Recheio da casa e responsabilidade civil privada',
      gesellschaft: 'Seguradora Modelo SA',
      nummer: 'BV-100200',
      laufzeit: '01.04.2024 a 31.03.2027',
      verfall: '1 de abril',
      praemie: 'CHF 620.00 por ano',
      jahr: 620,
      leistungen: [
        { name: 'Recheio da casa', zusatz: 'Franquia CHF 200', wert: 'CHF 80’000.00' },
        { name: 'Responsabilidade civil privada', zusatz: null, wert: 'CHF 5’000’000.00' },
        { name: 'Furto simples fora de casa', zusatz: null, wert: 'CHF 3’000.00' },
      ],
      objekt: null,
      dokumente: [
        { name: 'Apólice 2024', zeile: 'Apólice · 01.04.2024 · 230 KB', police: true },
        { name: 'Aditamento mudança de casa', zeile: 'Aditamento · 15.03.2026 · 120 KB', police: false },
      ],
    },
    {
      id: 'rs',
      name: 'Proteção jurídica',
      sparte: 'Proteção jurídica privada e de circulação',
      gesellschaft: 'Proteção Jurídica Exemplo SA',
      nummer: 'RS-100400',
      laufzeit: '01.01.2026 a 31.12.2028',
      verfall: '1 de janeiro',
      praemie: 'CHF 310.00 por ano',
      jahr: 310,
      leistungen: [
        { name: 'Proteção jurídica privada', zusatz: null, wert: 'CHF 600’000.00' },
        { name: 'Proteção jurídica de circulação', zusatz: null, wert: 'CHF 600’000.00' },
      ],
      objekt: null,
      dokumente: [{ name: 'Apólice 2026', zeile: 'Apólice · 01.01.2026 · 190 KB', police: true }],
    },
  ],

  anfragen: {
    titel: 'Pedidos',
    waehlen: 'Escolha acima o assunto.',
    bisher: 'Os seus pedidos anteriores',
    formulare: [
      { formular: 'offerte', zeichen: 'dokument', titel: 'Pedir uma proposta', text: 'Com os dados de que uma seguradora precisa' },
      { formular: 'rueckruf', zeichen: 'telefon', titel: 'Pedir que lhe liguemos', text: 'Nós ligamos-lhe' },
      { formular: 'termin', zeichen: 'kalender', titel: 'Marcar reunião', text: 'No escritório ou por telefone' },
      { formular: 'vertrag', zeichen: 'schild', titel: 'Comunicar alteração', text: 'A um contrato existente' },
      { formular: 'nachricht', zeichen: 'nachricht', titel: 'Enviar mensagem', text: 'Pergunta ou assunto' },
    ],
    liste: [
      {
        betreff: 'Pedido de proposta veículo a motor',
        datum: '12.10.2026',
        stand: 'em tratamento',
        art: 'navy',
        text: 'Peço uma proposta comparativa com casco total.',
      },
      { betreff: 'Pedido de reunião', datum: '02.10.2026', stand: 'concluído', art: 'gruen', text: 'Reunião anual no escritório.' },
    ],
    neu: 'pedido',
    freiwillig: 'facultativo',
    bitteWaehlen: 'Escolha, por favor',
    offerte: {
      sparte: 'Para que seguro pretende uma proposta?',
      sparteHilfe: 'Escolha um seguro. Outros, falamos de bom grado numa conversa.',
      fragen: [
        {
          sparte: 'Veículo a motor',
          fragen: [
            {
              titel: 'De que tipo de veículo se trata?',
              optionen: ['Automóvel ligeiro', 'Carrinha até 3,5 t', 'Motociclo', 'Autocaravana'],
            },
            { titel: 'Que marca e que modelo?', fahrzeug: true },
            {
              titel: 'Quantos quilómetros faz o veículo por ano?',
              optionen: ['cerca de 5’000 km', 'cerca de 10’000 km', 'cerca de 15’000 km', 'cerca de 20’000 km', 'mais de 30’000 km'],
            },
            {
              titel: 'Onde fica o veículo durante a noite?',
              optionen: ['Garagem individual', 'Garagem coletiva', 'Telheiro', 'Estacionamento exterior'],
            },
            { titel: 'Que cobertura pretende?', optionen: ['só responsabilidade civil', 'casco parcial', 'casco total'] },
          ],
        },
        {
          sparte: 'Recheio da casa',
          fragen: [
            { titel: 'Como vive?', optionen: ['Apartamento arrendado', 'Apartamento próprio', 'Moradia'] },
            {
              titel: 'Quantas divisões tem o apartamento ou a casa?',
              optionen: ['1 a 1½', '2 a 2½', '3 a 3½', '4 a 4½', '5 a 5½', '6 ou mais'],
            },
            { titel: 'Quantas pessoas vivem no agregado?', optionen: ['1', '2', '3', '4', '5 ou mais'] },
          ],
        },
        {
          sparte: 'Responsabilidade civil privada',
          fragen: [
            { titel: 'Quem deve ficar seguro?', optionen: ['Uma pessoa', 'Casal sem filhos', 'Família', 'Agregado'] },
            { titel: 'Que capital seguro pretende?', optionen: ['CHF 3 milhões', 'CHF 5 milhões', 'CHF 10 milhões'] },
          ],
        },
        {
          sparte: 'Proteção jurídica',
          fragen: [
            { titel: 'Quem deve ficar seguro?', optionen: ['Uma pessoa', 'Família', 'Agregado'] },
            { titel: 'Tem casa própria?', optionen: ['sim', 'não'] },
          ],
        },
        {
          sparte: 'Seguro de viagem',
          fragen: [
            {
              titel: 'Pretende um seguro anual ou para uma única viagem?',
              optionen: ['Seguro anual', 'Viagem única'],
            },
            { titel: 'Para onde vai viajar?', optionen: ['Europa', 'todo o mundo'] },
          ],
        },
      ],
      frageVon: 'Pergunta',
      von: 'de',
      letzter: 'Último passo',
      weiter: 'Seguinte',
      ueberspringen: 'Saltar',
      gespraech: 'Esclarecer o resto numa conversa',
      zurueck: 'Voltar',
      fastFertig: 'Quase pronto',
      mitteilen: 'Quer acrescentar mais alguma coisa?',
      zusammenfassung: 'Resumo',
      ihre: 'O seu pedido de proposta',
      keineAngaben: 'O resto esclarecemos numa conversa.',
      angaben: 'Dados',
      marke: 'Marca',
      modell: 'Modelo',
      ausfuehrung: 'Versão, se souber',
      beispiel: 'por exemplo 2.0 TDI',
      bemerkung: 'Observação',
      knopf: 'Enviar pedido de proposta',
      betreff: 'Pedido de proposta',
    },
    rueckruf: {
      telefon: 'Número em que o podemos contactar',
      nummer: '079 000 00 00',
      zeit: 'Melhor altura para o contactar',
      zeiten: ['a qualquer hora', 'de manhã', 'à hora de almoço', 'à tarde', 'ao fim do dia'],
      thema: 'De que se trata?',
      themen: ['Contrato existente', 'Novo seguro', 'Sinistro', 'Fiduciária ou impostos', 'Outro'],
      tag: 'Dia pretendido',
      text: 'Quer acrescentar alguma coisa?',
      knopf: 'Pedir chamada',
      betreff: 'Pedido de chamada',
    },
    termin: {
      tag: 'Em que dia?',
      uhr: 'A que horas?',
      ort: 'Como prefere encontrar-se connosco?',
      orte: ['no escritório', 'por telefone'],
      text: 'De que se trata?',
      hinweis:
        'Esta é a data que pretende. Só é válida depois de a confirmarmos; se não nos for possível, propomos-lhe outra.',
      knopf: 'Enviar pedido de reunião',
      betreff: 'Pedido de reunião',
      uhrzeit: 'h',
    },
    vertrag: {
      police: 'Que contrato?',
      was: 'O que muda?',
      arten: [
        {
          art: 'Troca de veículo',
          nurFahrzeug: true,
          felder: [
            {
              key: 'fzart',
              typ: 'wahl',
              titel: 'Que tipo de veículo?',
              optionen: ['Automóvel ligeiro', 'Carrinha', 'Motociclo', 'Autocaravana'],
            },
            { key: 'fahrzeug', typ: 'fahrzeug', titel: 'Novo veículo' },
            { key: 'ausfuehrung', typ: 'text', titel: 'Versão' },
            { key: 'iv', typ: 'datum', titel: 'Primeira matrícula' },
            { key: 'zustand', typ: 'wahl', titel: 'Novo ou usado?', optionen: ['novo', 'usado'] },
            { key: 'schild', typ: 'wahl', titel: 'Matrícula', optionen: ['manter a matrícula atual', 'nova matrícula'] },
            { key: 'leasing', typ: 'wahl', titel: 'O veículo está em leasing?', optionen: ['sim', 'não'] },
            { key: 'preis', typ: 'text', titel: 'Preço de catálogo com acessórios, se souber' },
          ],
        },
        {
          art: 'Morada ou local de estacionamento',
          nurFahrzeug: false,
          felder: [
            { key: 'strasse', typ: 'text', titel: 'Nova rua e número' },
            { key: 'plzort', typ: 'text', titel: 'Código postal e localidade' },
          ],
        },
        {
          art: 'Ajustar cobertura ou garantias',
          nurFahrzeug: false,
          felder: [
            {
              key: 'richtung',
              typ: 'wahl',
              titel: 'O que pretende?',
              optionen: ['Alargar a cobertura', 'Reduzir a cobertura', 'Aconselhamento sobre a cobertura'],
            },
            { key: 'betrifft', typ: 'deckungen', titel: 'Que garantias estão em causa?' },
          ],
        },
        {
          art: 'Capital seguro ou franquia',
          nurFahrzeug: false,
          felder: [
            {
              key: 'selbstbehalt',
              typ: 'wahl',
              titel: 'Que franquia pretende?',
              optionen: ['CHF 0', 'CHF 200', 'CHF 500', 'CHF 1’000', 'CHF 2’500'],
            },
            { key: 'summe', typ: 'text', titel: 'Novo capital seguro' },
          ],
        },
        {
          art: 'Pessoas seguras ou condutores',
          nurFahrzeug: false,
          felder: [
            { key: 'aktion', typ: 'wahl', titel: 'O que muda?', optionen: ['Acrescentar pessoa', 'Retirar pessoa'] },
            { key: 'person', typ: 'text', titel: 'Nome próprio e apelido' },
          ],
        },
        {
          art: 'Rescisão ou suspensão',
          nurFahrzeug: false,
          felder: [
            {
              key: 'kart',
              typ: 'wahl',
              titel: 'O que pretende?',
              optionen: ['Rescisão', 'Suspensão, veículo temporariamente fora de circulação'],
            },
            {
              key: 'grund',
              typ: 'wahl',
              titel: 'Por que motivo?',
              optionen: ['Veículo vendido', 'Mudança para o estrangeiro', 'Mudança de seguradora', 'Outro motivo'],
            },
          ],
        },
        { art: 'Outro', nurFahrzeug: false, felder: [] },
      ],
      ab: 'A partir de quando?',
      ergaenzen: 'Quer acrescentar alguma coisa?',
      anderes: 'O que muda?',
      suchen: 'Escreva as primeiras letras. Se o seu veículo não constar, escreva-o simplesmente.',
      hinweis:
        'A sua comunicação ainda não altera o contrato. Esclarecemos a alteração com a seguradora e confirmamo-la.',
      fehlt: 'Escolha ou indique o que muda, por favor.',
      knopf: 'Comunicar alteração',
      betreff: 'Alteração a',
    },
    nachricht: {
      betreff: 'Assunto',
      text: 'A sua mensagem',
      knopf: 'Enviar mensagem',
      standard: 'Mensagem',
    },
  },

  angaben: {
    titel: 'Os meus dados',
    hinweis:
      'A sua comunicação chega até nós e é registada manualmente — assim fica claro de onde vem cada dado. O nome, a data de nascimento e os dados da empresa alteramos depois de falarmos consigo.',
    knopf: 'Comunicar alteração',
    felder: [
      { feld: 'strasse', name: 'Rua e número', wert: 'Rua Exemplo 1' },
      { feld: 'ort', name: 'Código postal e localidade', wert: '2558 Aegerten' },
      { feld: 'mobile', name: 'Telemóvel', wert: '079 000 00 00' },
      { feld: 'email', name: 'E-mail', wert: 'ana.exemplo@exemplo.ch' },
    ],
  },
}
