/**
 * Seguros, versão portuguesa de `src/content/seiten/versicherungen.ts` (16.10.2026).
 * As âncoras `privatpersonen`, `unternehmen` e `schadenfall` mantêm-se.
 */
import type { SeitenInhalt } from '@/content/seiten/typen'

export const versicherungen: SeitenInhalt = {
  meta: {
    title: 'Seguros para particulares e empresas',
    description:
      'Analisamos os seus contratos atuais, comparamos soluções adequadas entre as ofertas e seguradoras a que temos acesso e continuamos a ser o seu interlocutor, também em caso de sinistro.',
  },
  banner: { themenzeile: 'SEGUROS', ueberschrift: 'Seguros para particulares e empresas' },
  bloecke: [
    {
      art: 'geschaeftsmodell',
      id: 'modell',
      titel: { vor: 'Representamos ', akzent: 'o cliente', nach: ', não a seguradora' },
      sie: { titel: 'O cliente', text: 'Particular ou empresa' },
      ac: {
        titel: 'A&C Consulting',
        punkte: ['Esclarecer necessidades', 'Comparar ofertas', 'Fazer uma recomendação', 'Acompanhar em caso de sinistro'],
      },
      markt: {
        titel: 'Segura­doras',
        gesellschaften: [
          { bild: 'partner_allianz', name: 'Allianz' },
          { bild: 'partner_axa', name: 'AXA' },
          { bild: 'partner_mobiliar', name: 'die Mobiliar' },
          { bild: 'partner_generali', name: 'Generali' },
          { bild: 'partner_gvb', name: 'GVB' },
          { bild: 'partner_helvetia', name: 'Helvetia' },
          { bild: 'partner_orion', name: 'Orion' },
          { bild: 'partner_smile', name: 'Smile' },
          { bild: 'partner_vaudoise', name: 'Vaudoise' },
        ],
      },
      hin: [
        { hin: 'Mandato', zurueck: 'Recomendação' },
        { hin: 'Pedido', zurueck: 'Propostas' },
      ],
      fakten: [
        { titel: 'O cliente decide', text: 'Pomos em prática o que escolher.' },
        {
          titel: 'Gratuito para o cliente',
          text: 'No mandato de corretagem, a seguradora remunera-nos através de uma comissão de corretagem.',
        },
        { titel: 'Continuamos presentes', text: 'Também depois da contratação e em caso de sinistro.' },
      ],
    },
    {
      art: 'listen',
      id: 'bereiche',
      titel: { vor: 'O que ', akzent: 'analisamos', nach: ' por si' },
      darstellung: 'kacheln',
      listen: [
        {
          titel: 'Para particulares',
          id: 'privatpersonen',
          eintraege: [
            { text: 'Seguro de saúde básico e complementar' },
            { text: 'Recheio da casa e responsabilidade civil' },
            { text: 'Veículo a motor' },
            { text: 'Vida e 3.º pilar a' },
            { text: 'Proteção jurídica' },
          ],
          knopf: { text: 'Pedir uma proposta', href: 'offerte', art: 'zweit' },
        },
        {
          titel: 'Para empresas',
          id: 'unternehmen',
          eintraege: [
            { text: 'LPP (BVG / 2.º pilar)' },
            { text: 'LAA (UVG) e LAA complementar' },
            { text: 'Subsídio diário de doença' },
            { text: 'Responsabilidade civil empresarial' },
            { text: 'Seguro de bens' },
            { text: 'Proteção jurídica' },
          ],
          knopf: { text: 'Pedir uma proposta', href: 'offerte', art: 'zweit' },
        },
      ],
    },
    {
      art: 'matrix',
      id: 'ueberpruefung',
      titel: { vor: 'Quando vale a pena ', akzent: 'rever', nach: ' os seguros' },
      einleitung: 'Nestes acontecimentos, pode estar em causa mais do que uma apólice.',
      gruppen: [
        {
          titel: 'Particular',
          spalten: ['Seguro de saúde', 'Recheio e responsa­bilidade civil', 'Veículo a motor', 'Vida e 3.º pilar a'],
          zeilen: [
            { titel: 'Mudança de casa', treffer: [0, 1, 2] },
            { titel: 'Casamento', treffer: [1, 3] },
            { titel: 'Filho', treffer: [0, 1, 3] },
            { titel: 'Casa própria', treffer: [1, 3] },
            { titel: 'Mudança de emprego', treffer: [0, 3] },
            { titel: 'Reforma', treffer: [0, 3] },
          ],
        },
        {
          titel: 'Na empresa',
          spalten: ['LAA', 'LPP', 'Subsídio diário de doença', 'Responsa­bilidade civil empresarial', 'Seguro de bens'],
          zeilen: [
            { titel: 'Constituição', treffer: [3, 4] },
            { titel: 'Primeira contratação', treffer: [0, 1, 2] },
            { titel: 'Novos veículos ou instalações', treffer: [3, 4] },
            { titel: 'Crescimento', treffer: [0, 1, 2, 3, 4] },
          ],
        },
      ],
      nachsatz: 'Uma visão geral, não uma lista exaustiva. O que o afeta a si, vemos em conjunto.',
    },
    {
      art: 'schritte',
      id: 'pruefung',
      titel: { vor: 'Como decorre uma ', akzent: 'análise de contratos' },
      schritte: [
        {
          titel: 'Rever os documentos',
          text: 'Entrega-nos as suas apólices. Nós analisamo-las.',
        },
        {
          titel: 'Avaliar',
          text: 'Mostramos lacunas, duplicações e prémios que não correspondem às coberturas.',
        },
        {
          titel: 'Proposta',
          text: 'Recebe uma visão geral com uma recomendação. A decisão é sua.',
        },
      ],
      nachsatz: 'Não precisa de cancelar nada. Primeiro vemos o que já tem.',
    },
    {
      art: 'textBild',
      id: 'schadenfall',
      titel: { vor: 'Também depois da contratação, ', akzent: 'ao seu lado' },
      punkte: [
        'Alterações: morada ou família – comunicamos à seguradora.',
        'Prémios: analisamos os ajustes quando chegam.',
        'Sinistro: registamo-lo, participamo-lo e acompanhamos a regularização.',
        'Urgência: contactáveis também fora do horário de expediente.',
      ],
      knoepfe: [{ text: 'Participar sinistro por telefone', href: 'telefon' }],
      bild: {
        art: 'versicherer',
        hinweis: 'Para participar um sinistro, clique na sua seguradora.',
        gesellschaften: [
          {
            bild: 'partner_allianz',
            name: 'Allianz',
            url: 'https://www.allianz.ch/de/privatkunden/services/meine-versicherung/schaden-melden.html',
          },
          {
            bild: 'partner_axa',
            name: 'AXA',
            url: 'https://www.axa.ch/de/privatkunden/schaden/rund-um-den-schaden/schaden-melden.html',
          },
          {
            bild: 'partner_mobiliar',
            name: 'die Mobiliar',
            url: 'https://www.mobiliar.ch/versicherungen-und-vorsorge/services/schaden-melden',
          },
          {
            bild: 'partner_generali',
            name: 'Generali',
            url: 'https://www.generali.ch/privatkunden/services/schaden-online-melden',
          },
          { bild: 'partner_gvb', name: 'GVB', url: 'https://schaden.gvb.ch/' },
          {
            bild: 'partner_helvetia',
            name: 'Helvetia',
            url: 'https://www.helvetia.com/ch/web/de/services/schaden-und-leistung/schaden-melden-privatkunden.html',
          },
          { bild: 'partner_orion', name: 'Orion', url: 'https://www.orion.ch/de/rechtsfall-melden' },
          {
            bild: 'partner_smile',
            name: 'Smile',
            url: 'https://www.smile-insurances.com/ch/main/de/home/service/schadenmeldung.html',
          },
          { bild: 'partner_vaudoise', name: 'Vaudoise', url: 'https://www.vaudoise.ch/de/service-center/schadenmeldung' },
        ],
      },
    },
    {
      art: 'fragen',
      id: 'fragen',
      titel: { vor: 'Perguntas ', akzent: 'frequentes' },
      fragen: [
        {
          frage: 'O aconselhamento tem algum custo?',
          antwort:
            'No âmbito do mandato de corretagem, não. As seguradoras remuneram-nos através de uma comissão de corretagem. Se um trabalho for além disso, acordamos previamente os honorários.',
        },
        {
          frage: 'Trabalham com todas as seguradoras?',
          antwort:
            'Não estamos vinculados a nenhuma seguradora e comparamos as ofertas de um amplo leque de seguradoras. Qual se adequa ao seu caso, indicamos na proposta.',
        },
        {
          frage: 'Fico vinculado a alguma coisa se vos der um mandato?',
          antwort: 'O mandato de corretagem é por tempo indeterminado e pode ser rescindido a qualquer momento por qualquer das partes.',
        },
      ],
    },
    {
      art: 'kontakt',
      titel: { vor: 'Peça-nos para analisar os seus ', akzent: 'contratos' },
      satz: 'Uma primeira conversa não obriga a nada. Traga o que tiver.',
      beschriftungen: { telefon: 'Telefone', email: 'E-mail', buero: 'Escritório' },
    },
  ],
}
