import type { Beitrag } from '@/content/seiten/typen'

/** Sources officielles en français (21.10.2026). Le portugais renvoie aux mêmes pages. */
export const QUELLEN_FR = {
  ahv: 'https://www.eak.admin.ch/fr/rentes-avsai-plus-elevees-des-le-1er-janvier-2027',
  s3a: 'https://www.bsv.admin.ch/fr/newnsb/6ck3kzVxBNQ4',
  dreizehnte: 'https://www.bsv.admin.ch/fr/newnsb/GfSUvYXM1WibRS3P9FOJr',
} as const

/**
 * Actualités et blog – traductions (19.10.2026). Seuls les articles traduits figurent ici; le `slug` est le même
 * que l’original allemand, pour que le choix de langue mène au même article.
 */
export const beitraege: readonly Beitrag[] = [
  {
    slug: 'vorsorge-kennzahlen-2027',
    art: 'Ratgeber',
    titel: 'Indicateurs de prévoyance 2027 : les principaux montants limites en un coup d’œil',
    kurz: 'Dès le 1er janvier 2027, les rentes AVS et les montants limites augmentent d’environ 1,6 %. Touchez un chiffre de la carte et voyez comment tout est lié.',
    datum: '2026-10-19',
    freigegeben: true,
    minuten: 4,
    abschnitte: [
      {
        absaetze: [
          [
            'Le 2 octobre 2026, le Conseil fédéral a adapté les rentes AVS et AI à l’évolution des salaires et des prix. Dès le 1er janvier 2027, elles augmentent d’environ 1,6 %. ',
            { url: QUELLEN_FR.ahv, label: 'Communiqué de la Caisse fédérale de compensation' },
          ],
          'Avec la rente, presque tous les montants limites de la prévoyance se déplacent : dans la caisse de pension, dans le pilier 3a et dans l’AVS elle-même. La raison : la loi les fixe comme fraction ou multiple de la rente AVS maximale.',
        ],
        baustein: 'vorsorgeKarte',
      },
      {
        zwischentitel: 'Ce qui change pour vous',
        absaetze: [
          [
            'Les montants AVS s’entendent sans la 13e rente de vieillesse. Celle-ci sera versée pour la première fois en décembre 2026. ',
            { url: QUELLEN_FR.dreizehnte, label: 'Communiqué de l’OFAS sur la 13e rente' },
          ],
        ],
        punkte: [
          [
            'Pilier 3a : en 2027, les personnes actives affiliées à une caisse de pension peuvent verser jusqu’à CHF 7’373 dans le pilier 3a. Sans caisse de pension, c’est jusqu’à 20 % du revenu de l’activité lucrative, au maximum CHF 36’864 par an. ',
            { url: QUELLEN_FR.s3a, label: 'Communiqué de l’OFAS' },
          ],
          'Caisse de pension : l’assurance LPP obligatoire s’applique en principe dès un salaire annuel supérieur à CHF 23’040 par employeur.',
          [
            'AVS : la rente maximale passe à CHF 2’560 par mois, la rente minimale à CHF 1’280. ',
            { url: QUELLEN_FR.ahv, label: 'Communiqué de la CFC' },
          ],
          'Assurance-accidents : le gain maximal assuré est de CHF 148’200.',
        ],
      },
      {
        zwischentitel: 'Trois choses à faire maintenant',
        absaetze: [],
        punkte: [
          'Adapter dès janvier 2027 l’ordre permanent du pilier 3a au nouveau montant.',
          'Vérifier le certificat de prévoyance 2027, surtout en cas de temps partiel ou de plusieurs employeurs.',
          'Pour les salaires supérieurs à CHF 148’200, vérifier qu’une assurance complémentaire LAA existe.',
        ],
      },
    ],
    abschluss:
      'Lors de l’entretien, nous examinons votre certificat de prévoyance, vos versements au pilier 3a et d’éventuelles lacunes dans vos assurances. Pour les entreprises, nous vérifions aussi si la caisse de pension et la complémentaire LAA correspondent aux salaires.',
    hinweis:
      'Cet article donne un aperçu général et ne remplace pas un conseil individuel. Sources : Office fédéral des assurances sociales OFAS et Caisse fédérale de compensation CFC, état octobre 2026.',
  },
]
