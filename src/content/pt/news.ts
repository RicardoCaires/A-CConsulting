import type { Beitrag } from '@/content/seiten/typen'

/**
 * Notícias e blogue – traduções (19.10.2026). Só os artigos traduzidos constam aqui; o `slug` é o mesmo do
 * original alemão, para que a escolha de idioma leve ao mesmo artigo.
 */
export const beitraege: readonly Beitrag[] = [
  {
    slug: 'vorsorge-kennzahlen-2027',
    art: 'Ratgeber',
    titel: 'Indicadores da previdência 2027: todos os montantes-limite num relance',
    kurz: 'A partir de 1 de janeiro de 2027, as pensões AVS e os montantes-limite sobem cerca de 1,6 %. Toque num valor do quadro e veja como tudo se relaciona.',
    datum: '2026-10-19',
    freigegeben: true,
    minuten: 4,
    abschnitte: [
      {
        absaetze: [
          'A 2 de outubro de 2026, o Conselho Federal ajustou as pensões AVS e AI à evolução dos salários e dos preços. A partir de 1 de janeiro de 2027, ficam cerca de 1,6 % mais altas.',
          'Com a pensão mudam quase todos os montantes-limite da previdência: na caixa de pensões, no pilar 3a e na própria AVS. A razão: a lei fixa-os como fração ou múltiplo da pensão AVS máxima.',
        ],
        baustein: 'vorsorgeKarte',
      },
      {
        zwischentitel: 'O que muda para si',
        absaetze: ['Os montantes mensais da AVS não incluem a 13.ª pensão de velhice, paga uma vez por ano desde dezembro de 2026.'],
        punkte: [
          'Pilar 3a: em 2027, quem trabalha por conta de outrem com caixa de pensões pode depositar até CHF 7’373; independentes sem caixa de pensões até CHF 36’864.',
          'Caixa de pensões: fica seguro quem ganha mais de CHF 23’040 por ano num empregador.',
          'AVS: a pensão máxima sobe para CHF 2’560 por mês, a mínima para CHF 1’280.',
          'Seguro de acidentes: o ganho máximo seguro é de CHF 148’200.',
        ],
      },
      {
        zwischentitel: 'Todos os valores em comparação',
        absaetze: [],
        baustein: 'vorsorgeTabelle',
      },
      {
        zwischentitel: 'Três coisas que vale a pena fazer agora',
        absaetze: [],
        punkte: [
          'Ajustar a ordem permanente do pilar 3a ao novo montante.',
          'Verificar o certificado de previdência de 2027, sobretudo em caso de tempo parcial ou de vários empregadores.',
          'Com salários acima de CHF 148’200, confirmar se existe um seguro complementar LAA.',
        ],
      },
      {
        zwischentitel: 'Como o apoiamos',
        absaetze: [
          'Analisamos consigo o certificado de previdência, o pilar 3a e os seguros, e mostramos onde há lacunas. Para empresas, verificamos se a caixa de pensões e o complementar LAA correspondem aos salários.',
        ],
      },
    ],
    hinweis: 'Este artigo dá uma visão geral e não substitui um aconselhamento individual. Fonte: Instituto Federal dos Seguros Sociais (BSV/OFAS), situação a 2 de outubro de 2026.',
  },
]
