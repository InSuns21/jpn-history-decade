export interface HistoricalFigureDefinition {
  imageUrl: string
  sourceUrl: string
  alt: string
  title: string
  dateLabel: string
  credit: string
  license: string
}

export const homeFigures: HistoricalFigureDefinition[] = [
  {
    imageUrl:
      'https://commons.wikimedia.org/wiki/Special:Redirect/file/Fumimaro_Konoe_Cabinet_19410718.jpg?width=1600',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Fumimaro_Konoe_Cabinet_19410718.jpg',
    alt: '1941年7月18日に成立した第三次近衛文麿内閣の閣僚集合写真',
    title: '第三次近衛内閣',
    dateLabel: '1941年7月18日',
    credit: '産経新聞社／Wikimedia Commons',
    license: 'Public Domain',
  },
  {
    imageUrl:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/Japanese_1854_print_Commodore_Perry.jpg/1280px-Japanese_1854_print_Commodore_Perry.jpg',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Japanese_1854_print_Commodore_Perry.jpg',
    alt: '蒸気軍艦を含むペリー艦隊と江戸湾周辺を描いた1854年の日本の刷物',
    title: 'ペリー来航を描いた日本の刷物',
    dateLabel: '1854年',
    credit: '作者不詳／Wikimedia Commons',
    license: 'Public Domain',
  },
  {
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Tokyo_Station_%281914%29.webp/1280px-Tokyo_Station_%281914%29.webp.png',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Tokyo_Station_(1914).webp',
    alt: '開業したころの東京駅丸の内駅舎を正面から撮影した1914年の写真',
    title: '開業当時の東京駅',
    dateLabel: '1914年',
    credit: '鉄道院東京改良事務所／Wikimedia Commons',
    license: 'Public Domain',
  },
]
