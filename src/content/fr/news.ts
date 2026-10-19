import type { Beitrag } from '@/content/seiten/typen'

/**
 * Actualités et blog – traductions (19.10.2026). Seuls les articles traduits figurent ici; le `slug` est le même
 * que l’original allemand, pour que le choix de langue mène au même article.
 */
export const beitraege: readonly Beitrag[] = [
  {
    slug: 'vorsorge-kennzahlen-2027',
    art: 'Ratgeber',
    titel: 'Indicateurs de prévoyance 2027 : tous les montants limites en un coup d’œil',
    kurz: 'Dès le 1er janvier 2027, les rentes AVS et les montants limites augmentent d’environ 1,6 %. Touchez un chiffre de la carte et voyez comment tout est lié.',
    datum: '2026-10-19',
    freigegeben: true,
    minuten: 4,
    abschnitte: [
      {
        absaetze: [
          'Le 2 octobre 2026, le Conseil fédéral a adapté les rentes AVS et AI à l’évolution des salaires et des prix. Dès le 1er janvier 2027, elles augmentent d’environ 1,6 %.',
          'Avec la rente, presque tous les montants limites de la prévoyance se déplacent : dans la caisse de pension, dans le pilier 3a et dans l’AVS elle-même. La raison : la loi les fixe comme fraction ou multiple de la rente AVS maximale.',
        ],
        baustein: 'vorsorgeKarte',
      },
      {
        zwischentitel: 'Ce qui change pour vous',
        absaetze: ['Les montants mensuels de l’AVS s’entendent sans la 13e rente de vieillesse, versée une fois par an depuis décembre 2026.'],
        punkte: [
          'Pilier 3a : en 2027, les salariés avec caisse de pension versent jusqu’à CHF 7’373, les indépendants sans caisse de pension jusqu’à CHF 36’864.',
          'Caisse de pension : est assurée toute personne qui gagne plus de CHF 23’040 par an chez un employeur.',
          'AVS : la rente maximale passe à CHF 2’560 par mois, la rente minimale à CHF 1’280.',
          'Assurance-accidents : le gain maximal assuré est de CHF 148’200.',
        ],
      },
      {
        zwischentitel: 'Toutes les valeurs en comparaison',
        absaetze: [],
        baustein: 'vorsorgeTabelle',
      },
      {
        zwischentitel: 'Trois choses à faire maintenant',
        absaetze: [],
        punkte: [
          'Adapter l’ordre permanent du pilier 3a au nouveau montant.',
          'Vérifier le certificat de prévoyance 2027, surtout en cas de temps partiel ou de plusieurs employeurs.',
          'Pour les salaires supérieurs à CHF 148’200, vérifier qu’une assurance complémentaire LAA existe.',
        ],
      },
      {
        zwischentitel: 'Comment nous vous aidons',
        absaetze: [
          'Nous examinons avec vous le certificat de prévoyance, le pilier 3a et vos assurances, et vous montrons où se trouvent les lacunes. Pour les entreprises, nous vérifions si la caisse de pension et la complémentaire LAA correspondent aux salaires.',
        ],
      },
    ],
    hinweis: 'Cet article donne un aperçu général et ne remplace pas un conseil individuel. Source : Office fédéral des assurances sociales OFAS, état au 2 octobre 2026.',
  },
]
