import { homeFigures, type HistoricalFigureDefinition } from './homeFigures'

function commonsFigure(
  fileName: string,
  meta: Omit<HistoricalFigureDefinition, 'imageUrl' | 'sourceUrl'>,
): HistoricalFigureDefinition {
  const encoded = encodeURIComponent(fileName)
  return {
    ...meta,
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/' + encoded + '?width=1600',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:' + encoded,
  }
}

export const periodFiguresByRouteKey: Record<string, HistoricalFigureDefinition[]> = {
  '1850': [
    homeFigures[1],
  ],
  '1855': [
    commonsFigure('Townsend Harris 01.jpg', {
      alt: '1850年代後半、日本初代米国総領事タウンゼント・ハリスを撮影した肖像写真',
      title: 'タウンゼント・ハリス',
      dateLabel: '1855〜1865年ごろ',
      credit: '撮影者不詳／米国議会図書館・Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1860': [
    commonsFigure(
      "Japanese Embassy to the United States, Harper's Weekly, 1860, from the National Portrait Gallery - NPG-S-NPG 75 12.jpg",
      {
        alt: '1860年、日米修好通商条約の批准書交換のため米国を訪れた日本使節団を紹介するハーパーズ・ウィークリーの図版',
        title: '万延元年遣米使節',
        dateLabel: '1860年',
        credit: "Harper's Weekly／National Portrait Gallery",
        license: 'CC0',
      },
    ),
  ],
  '1865': [
    commonsFigure('YoshinobuTokugawa.jpg', {
      alt: '1866年3月、徳川慶喜を撮影した肖像写真',
      title: '徳川慶喜',
      dateLabel: '1866年3月',
      credit: '撮影者不詳／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1868': [
    commonsFigure('Battle of Ueno 4 July 1868.jpg', {
      alt: '1868年の上野戦争を描いた歌川芳虎の錦絵',
      title: '上野戦争',
      dateLabel: '1868年',
      credit: '歌川芳虎／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1872': [
    commonsFigure('Iwakura mission.jpg', {
      alt: '1872年の岩倉使節団主要メンバー。木戸孝允、山口尚芳、岩倉具視、伊藤博文、大久保利通が並ぶ集合写真',
      title: '岩倉使節団',
      dateLabel: '1872年',
      credit: '撮影者不詳／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1874': [
    commonsFigure('ShiroyamaFortifications.jpg', {
      alt: '1877年、西南戦争末期の城山周辺に築かれた政府軍の陣地を撮影した写真',
      title: '城山を包囲する政府軍陣地',
      dateLabel: '1877年',
      credit: '撮影者不詳／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1878': [
    commonsFigure('Itagaki Taisuke young.jpg', {
      alt: '1880年に撮影された自由民権運動の指導者・板垣退助の肖像写真',
      title: '板垣退助',
      dateLabel: '1880年',
      credit: '撮影者不詳／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1882': [
    commonsFigure('Distress of Itagaki Taisuke by Utagawa Toyonobu 1882.png', {
      alt: '1882年、岐阜で板垣退助が襲撃された事件を描いた歌川豊宣の錦絵',
      title: '板垣退助岐阜遭難',
      dateLabel: '1882年',
      credit: '歌川豊宣／早稲田大学図書館・Wikimedia Commons',
      license: 'Public Domain',
    }),
    commonsFigure('Matsukata Masayoshi.jpg', {
      alt: '松方財政を主導した松方正義の肖像写真',
      title: '松方正義',
      dateLabel: '1924年以前',
      credit: '撮影者不詳／国立国会図書館・Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1886': [
    commonsFigure(
      '憲法発布式之図-Illustration of the Ceremony Issuing the Constitution (Kenpō happu shiki no zu) MET DP147647.jpg',
      {
        alt: '1889年の大日本帝国憲法発布式を描いた豊原周延の三枚続錦絵',
        title: '憲法発布式之図',
        dateLabel: '1889年',
        credit: '豊原周延／The Metropolitan Museum of Art',
        license: 'CC0',
      },
    ),
  ],
  '1891': [
    commonsFigure('Great Victory of Pyongyang and Capture of Chinese Qing Generals by Migita Toshihide 1894.jpg', {
      alt: '1894年の日清戦争、平壌の戦闘を描いた右田年英の戦争錦絵',
      title: '平壌戦を描いた錦絵',
      dateLabel: '1894年',
      credit: '右田年英／Wikimedia Commons',
      license: 'CC0',
    }),
  ],
  '1912': [
    homeFigures[2],
  ],
  '1931-09': [
    commonsFigure('Japanese soldiers near Mukden, October 1931.jpg', {
      alt: '1931年10月、奉天付近で行動する日本軍兵士を撮影した写真',
      title: '奉天付近の日本軍',
      dateLabel: '1931年10月',
      credit: 'Agence de presse Meurisse／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1940-06-29': [
    commonsFigure('Mitsumasa Yonai Cabinet 19400116.jpg', {
      alt: '1940年1月16日の米内光政内閣の閣僚集合写真',
      title: '米内内閣',
      dateLabel: '1940年1月16日',
      credit: '『新生日本外交百年史』／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
}
