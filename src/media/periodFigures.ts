import { homeFigures, type HistoricalFigureDefinition } from './homeFigures'

export const periodFiguresByRouteKey: Record<string, HistoricalFigureDefinition[]> = {
  '1850': [
    homeFigures[1],
  ],
  '1912': [
    homeFigures[2],
  ],
  '1931-09': [
    {
      imageUrl:
        'https://commons.wikimedia.org/wiki/Special:Redirect/file/Japanese_soldiers_near_Mukden%2C_October_1931.jpg?width=1600',
      sourceUrl:
        'https://commons.wikimedia.org/wiki/File:Japanese_soldiers_near_Mukden,_October_1931.jpg',
      alt: '1931年10月、奉天付近で行動する日本軍兵士を撮影した写真',
      title: '奉天付近の日本軍',
      dateLabel: '1931年10月',
      credit: 'Agence de presse Meurisse／Wikimedia Commons',
      license: 'Public Domain',
    },
  ],
  '1940-06-29': [
    {
      imageUrl:
        'https://commons.wikimedia.org/wiki/Special:Redirect/file/Mitsumasa_Yonai_Cabinet_19400116.jpg?width=1600',
      sourceUrl:
        'https://commons.wikimedia.org/wiki/File:Mitsumasa_Yonai_Cabinet_19400116.jpg',
      alt: '1940年1月16日の米内光政内閣の閣僚集合写真',
      title: '米内内閣',
      dateLabel: '1940年1月16日',
      credit: '『新生日本外交百年史』／Wikimedia Commons',
      license: 'Public Domain',
    },
  ],
}
