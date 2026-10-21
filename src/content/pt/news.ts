import { QUELLEN_FR as QUELLEN } from '@/content/fr/news'
import type { Beitrag } from '@/content/seiten/typen'

/**
 * Notícias e blogue – traduções (19.10.2026). Só os artigos traduzidos constam aqui; o `slug` é o mesmo do
 * original alemão, para que a escolha de idioma leve ao mesmo artigo.
 */
export const beitraege: readonly Beitrag[] = [
  {
    slug: 'vorsorge-kennzahlen-2027',
    art: 'Ratgeber',
    titel: 'Indicadores da previdência 2027: os principais montantes-limite num relance',
    kurz: 'A partir de 1 de janeiro de 2027, as pensões AVS e os montantes-limite sobem cerca de 1,6 %. Toque num valor do quadro e veja como tudo se relaciona.',
    datum: '2026-10-19',
    freigegeben: true,
    minuten: 4,
    abschnitte: [
      {
        absaetze: [
          [
            'A 2 de outubro de 2026, o Conselho Federal ajustou as pensões AVS e AI à evolução dos salários e dos preços. A partir de 1 de janeiro de 2027, ficam cerca de 1,6 % mais altas. ',
            { url: QUELLEN.ahv, label: 'Comunicado da Caixa Federal de Compensação, em francês' },
          ],
          'Com a pensão mudam quase todos os montantes-limite da previdência: na caixa de pensões, no pilar 3a e na própria AVS. A razão: a lei fixa-os como fração ou múltiplo da pensão AVS máxima.',
        ],
        baustein: 'vorsorgeKarte',
      },
      {
        zwischentitel: 'O que muda para si',
        absaetze: [
          [
            'Os montantes da AVS não incluem a 13.ª pensão de velhice. Esta é paga pela primeira vez em dezembro de 2026. ',
            { url: QUELLEN.dreizehnte, label: 'Comunicado do OFAS sobre a 13.ª pensão, em francês' },
          ],
        ],
        punkte: [
          [
            'Pilar 3a: em 2027, quem exerce uma atividade lucrativa e tem caixa de pensões pode depositar até CHF 7’373 no pilar 3a. Sem caixa de pensões, são até 20 % do rendimento da atividade, no máximo CHF 36’864 por ano. ',
            { url: QUELLEN.s3a, label: 'Comunicado do OFAS, em francês' },
          ],
          'Caixa de pensões: o seguro LPP obrigatório aplica-se, em princípio, a partir de um salário anual superior a CHF 23’040 por empregador.',
          [
            'AVS: a pensão máxima sobe para CHF 2’560 por mês, a mínima para CHF 1’280. ',
            { url: QUELLEN.ahv, label: 'Comunicado da CFC, em francês' },
          ],
          'Seguro de acidentes: o ganho máximo seguro é de CHF 148’200.',
        ],
      },
      {
        zwischentitel: 'Três coisas que vale a pena fazer agora',
        absaetze: [],
        punkte: [
          'Ajustar a partir de janeiro de 2027 a ordem permanente do pilar 3a ao novo montante.',
          'Verificar o certificado de previdência de 2027, sobretudo em caso de tempo parcial ou de vários empregadores.',
          'Com salários acima de CHF 148’200, confirmar se existe um seguro complementar LAA.',
        ],
      },
    ],
    abschluss:
      'Na reunião, analisamos o seu certificado de previdência, as suas contribuições para o pilar 3a e possíveis lacunas nos seus seguros. Para empresas, verificamos também se a caixa de pensões e o complementar LAA correspondem aos salários.',
    hinweis:
      'Este artigo dá uma visão geral e não substitui um aconselhamento individual. Fontes: Instituto Federal dos Seguros Sociais (BSV/OFAS) e Caixa Federal de Compensação (EAK/CFC), situação em outubro de 2026.',
  },
]
