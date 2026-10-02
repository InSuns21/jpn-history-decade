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
      'https://commons.wikimedia.org/wiki/Special:Redirect/file/Print%2C_Nihon_Bridge%2C_Morning_View%2C_Nihonbashi%2C_in_The_Fifty-Three_Stations_of_the_Tokaido_Road_%28Tokaido_Gojusan_Tsugi-no_Uchi%29%2C_ca._1834_%28CH_18608813%29.jpg?width=1600',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Print,_Nihon_Bridge,_Morning_View,_Nihonbashi,_in_The_Fifty-Three_Stations_of_the_Tokaido_Road_(Tokaido_Gojusan_Tsugi-no_Uchi),_ca._1834_(CH_18608813).jpg',
    alt: '日本橋を渡る大名行列と、橋のたもとの商人や往来を描いた歌川広重の浮世絵',
    title: '東海道五十三次・日本橋 朝之景',
    dateLabel: '1834年ごろ',
    credit: '歌川広重／Cooper Hewitt, Smithsonian Design Museum',
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
