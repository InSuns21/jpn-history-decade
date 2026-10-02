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
  '1896': [
    commonsFigure('Governmental Yawata Iron & Steel Works.JPG', {
      alt: '1900年ごろの官営八幡製鉄所を撮影した写真',
      title: '官営八幡製鉄所',
      dateLabel: '1900年',
      credit: '撮影者不詳／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1901': [
    commonsFigure('Japanese Infantry Preparing the Attack during the Siege of Port Arther.jpg', {
      alt: '1904年、旅順攻囲戦で攻撃準備をする日本軍歩兵を撮影した写真',
      title: '旅順攻囲戦の日本軍歩兵',
      dateLabel: '1904年',
      credit: 'P. F. Collier & Son／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1906': [
    commonsFigure('Headquarters of South Manchuria Railway, Dalian (NYPL Hades-2359312-4043668).jpg', {
      alt: '1907年、大連に置かれた南満洲鉄道株式会社本社の建物を撮影した写真',
      title: '大連の南満洲鉄道本社',
      dateLabel: '1907年',
      credit: 'New York Public Library／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1912': [
    homeFigures[2],
  ],
  '1915': [
    commonsFigure('Burning of the Okayama Seimai, 1918 rice riots.jpg', {
      alt: '1918年の米騒動で岡山精米会社が焼ける様子を撮影した写真',
      title: '1918年の米騒動',
      dateLabel: '1918年',
      credit: '撮影者不詳／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1919': [
    commonsFigure('Sixty-Years-of-the-Meiji-and-Taisho-Eras-in-Photographs-1.jpg', {
      alt: '1920年、市川房枝、奥むめお、平塚らいてうら女性運動家を撮影した集合写真',
      title: '女性の政治参加を求める運動',
      dateLabel: '1920年7月18日',
      credit: '撮影者不詳／毎日新聞社資料・Wikimedia Commons',
      license: 'Public Domain',
    }),
    commonsFigure('1920 Empire of Japan Census.jpg', {
      alt: '1920年の第1回国勢調査を記念して発行された記念切手',
      title: '第1回国勢調査記念切手',
      dateLabel: '1920年',
      credit: '日本政府／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1923': [
    commonsFigure('Ejiri Station Great Kanto earthquake of 1923.jpg', {
      alt: '1923年の関東大震災後、江尻駅で列車を待つ避難者を撮影した写真',
      title: '震災後の避難者',
      dateLabel: '1923年',
      credit: '内務省社会局『大正震災志写真帖』／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1926': [
    commonsFigure('Bank run during the Showa Financial Crisis.JPG', {
      alt: '1927年3月、昭和金融恐慌時の銀行取り付け騒ぎを撮影した写真',
      title: '昭和金融恐慌の取り付け騒ぎ',
      dateLabel: '1927年3月23日',
      credit: '撮影者不詳／毎日新聞社資料・Wikimedia Commons',
      license: 'Public Domain',
    }),
    commonsFigure('1928 Japanese General Election Poster.JPG', {
      alt: '1928年、最初の男子普通選挙となった第16回衆議院議員総選挙の大阪府ポスター',
      title: '第16回衆議院議員総選挙ポスター',
      dateLabel: '1928年',
      credit: '大阪府／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1929': [
    commonsFigure('Japanese delegate Wakatsuki at the signing ceremony of the London Naval Treaty.jpg', {
      alt: '1930年4月22日、ロンドン海軍軍縮条約の署名式で署名する若槻礼次郎ら日本代表団',
      title: 'ロンドン海軍軍縮条約の署名',
      dateLabel: '1930年4月22日',
      credit: 'Agence Meurisse／Bibliothèque nationale de France・Wikimedia Commons',
      license: 'Public Domain',
    }),
    commonsFigure('Hamaguchi Osachi Assassination 14 Nov 1930.png', {
      alt: '1930年11月14日、東京駅で銃撃され、ホームから運ばれる浜口雄幸首相を撮影した写真',
      title: '東京駅で銃撃された浜口雄幸',
      dateLabel: '1930年11月14日',
      credit: '撮影者不詳／Wikimedia Commons',
      license: 'Public Domain',
    }),
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
