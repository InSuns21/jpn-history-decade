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

function commonsDocumentFigure(
  fileName: string,
  previewUrl: string,
  meta: Omit<HistoricalFigureDefinition, 'imageUrl' | 'sourceUrl'>,
): HistoricalFigureDefinition {
  const encoded = encodeURIComponent(fileName)
  return {
    ...meta,
    imageUrl: previewUrl,
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:' + encoded,
  }
}

export const periodFiguresByRouteKey: Record<string, HistoricalFigureDefinition[]> = {
  '1800': [
    commonsFigure('Ukie Edo nihonbashi odawarachō sakana ichi no su LCCN2008660149.jpg', {
      alt: '江戸日本橋の小田原町魚市場と往来を描いた18世紀末の浮世絵',
      title: '日本橋の魚市場',
      dateLabel: '1796年',
      credit: '歌川豊春／米国議会図書館・Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1810': [
    commonsFigure('Map of Karafuto and the Amur estuary by Mamiya Rinzo (1810)／間宮林蔵『黒竜江中州并天度』（文化7年）.jpg', {
      alt: '間宮林蔵が樺太とアムール河口を描いた1810年の地図',
      title: '間宮林蔵の樺太・アムール河口図',
      dateLabel: '1810年',
      credit: '間宮林蔵／北海道大学北方資料データベース・Wikimedia Commons',
      license: 'CC0',
    }),
    commonsFigure('Capture of Russians and Vasily Golovnin by Tokugawa c1811 Part 7.png', {
      alt: '1811年のゴローニン事件で、ロシア人一行が捕らえられ箱館へ送られる様子を描いた絵巻',
      title: 'ゴローニン事件を描いた絵巻',
      dateLabel: '1811年ごろ',
      credit: '作者不詳／早稲田大学図書館・Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1820': [
    commonsFigure('Kawahara Nagasaki.jpg', {
      alt: '1820年ごろ、長崎港と出島周辺を描いた川原慶賀の絵',
      title: '長崎港と出島',
      dateLabel: '1820年ごろ',
      credit: '川原慶賀／Wikimedia Commons',
      license: 'Public Domain',
    }),
    commonsFigure('VonSiebold1826.jpg', {
      alt: '1826年に日本で描かれたフィリップ・フランツ・フォン・シーボルトの肖像',
      title: 'シーボルト',
      dateLabel: '1826年',
      credit: '作者不詳／国立国会図書館・Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1830': [
    commonsFigure('天保の大飢饉.jpg', {
      alt: '天保の飢饉で御救小屋に収容され救済を受ける人々を描いた渡辺崋山の図',
      title: '天保の飢饉と御救小屋',
      dateLabel: '1838年',
      credit: '渡辺崋山／Wikimedia Commons',
      license: 'Public Domain',
    }),
    commonsFigure('MorrisonShip.jpg', {
      alt: '1837年に日本へ来航したモリソン号を描いた絵',
      title: 'モリソン号',
      dateLabel: '19世紀',
      credit: '作者不詳／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1840': [
    commonsFigure('Opium War.jpg', {
      alt: '1840年、イギリスと清のアヘン戦争を風刺したフランスの挿絵',
      title: 'アヘン戦争を描いた風刺画',
      dateLabel: '1840年',
      credit: 'J. J. Grandville／Le Charivari・Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
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
  '1931': [
    commonsFigure('Reijiro Wakatsuki 01.jpg', {
      alt: '1931年9月に掲載された第二次若槻礼次郎内閣期の若槻礼次郎首相の肖像写真',
      title: '若槻礼次郎',
      dateLabel: '1931年9月',
      credit: '撮影者不詳／『歴史写真』・Wikimedia Commons',
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
  '1932': [
    commonsFigure('May 15 Incident.jpg', {
      alt: '1932年の五・一五事件と犬養毅首相襲撃を報じた新聞紙面',
      title: '五・一五事件を伝える新聞',
      dateLabel: '1932年5月',
      credit: '大阪朝日新聞／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1932-09': [
    commonsFigure('Japan withdrawal from League of Nations 1933 Tokyo Asahi Shimbun.png', {
      alt: '1933年2月、日本の国際連盟脱退をめぐる情勢を報じた東京朝日新聞の紙面',
      title: '国際連盟脱退を報じる新聞',
      dateLabel: '1933年2月25日',
      credit: '東京朝日新聞／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1933-06': [
    commonsFigure('First Imperial Rescript with the seal of Puyi that announced the founding of the new state (Manchukuo).jpg', {
      alt: '1934年3月1日、満洲国の帝制移行後に溥儀の印が押された詔書',
      title: '満洲国・康徳帝の詔書',
      dateLabel: '1934年3月1日',
      credit: '満洲国政府／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1934-07': [
    commonsFigure('Minobe Tatsukichi 1935.JPG', {
      alt: '1935年、貴族院での美濃部達吉を撮影した写真',
      title: '美濃部達吉',
      dateLabel: '1935年',
      credit: '撮影者不詳／『アサヒグラフ』・Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1935-08': [
    commonsFigure('Saburo Aizawa.JPG', {
      alt: '1935年の相沢事件で永田鉄山軍務局長を殺害した相沢三郎中佐の肖像写真',
      title: '相沢三郎',
      dateLabel: '1945年以前',
      credit: '撮影者不詳／毎日新聞社資料・Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1936-02': [
    commonsFigure('Outbreak of the February 26th Incident.jpg', {
      alt: '1936年2月26日、二・二六事件で山王下の幸楽を占拠した反乱部隊を撮影した写真',
      title: '二・二六事件の反乱部隊',
      dateLabel: '1936年2月26日',
      credit: '影山光洋／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1936-03': [
    commonsFigure('Anti-Comintern Pact signing 1936.jpg', {
      alt: '1936年11月25日、ベルリンで日独防共協定に署名するドイツ側代表と日本側関係者',
      title: '日独防共協定の署名',
      dateLabel: '1936年11月25日',
      credit: '撮影者不詳／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],

  '1937-01': [
    commonsFigure('Senjūrō Hayashi Cabinet 19370202.jpg', {
      alt: '1937年2月2日に成立した林銑十郎内閣の閣僚集合写真',
      title: '林銑十郎内閣',
      dateLabel: '1937年2月2日',
      credit: '撮影者不詳／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1937-06': [
    commonsFigure('Fumimaro Konoe Cabinet 19370604.jpg', {
      alt: '1937年6月に成立した第一次近衛文麿内閣の閣僚集合写真',
      title: '第一次近衛内閣',
      dateLabel: '1937年6月',
      credit: '撮影者不詳／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1937-07-07': [
    commonsFigure('Japanese China Garrison Army 1937 Jul.jpg', {
      alt: '1937年7月上旬の中国駐屯軍の兵力配置を示した図',
      title: '盧溝橋事件直前の中国駐屯軍配置',
      dateLabel: '1937年7月上旬',
      credit: 'みや東亞／戦史叢書『支那事変陸軍作戦1』を基に作図・Wikimedia Commons',
      license: 'CC BY 3.0',
    }),
  ],
  '1937-07-11': [
    commonsFigure('Army 29 Fighting 1937.jpg', {
      alt: '1937年、華北で行動する中国第29軍の兵士を撮影した写真',
      title: '中国第29軍',
      dateLabel: '1937年',
      credit: '撮影者不詳／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1937-07-27': [
    commonsFigure('Street battle in Tianjin - July 1937.png', {
      alt: '1937年7月、天津市内で行われた戦闘を撮影した写真',
      title: '天津市街の戦闘',
      dateLabel: '1937年7月',
      credit: '撮影者不詳／『未公開写真に見る日中戦争』・Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1937-08-13': [
    commonsFigure('Japanese Special Naval Landing Forces in Battle of Shanghai 1937.jpg', {
      alt: '1937年8月、上海の市街地で前進準備をする日本海軍特別陸戦隊を撮影した写真',
      title: '上海の海軍特別陸戦隊',
      dateLabel: '1937年8月',
      credit: '海軍省・撮影者不詳／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1937-08-16': [
    commonsFigure('Citizens of Shanghai fleeing into Shanghai International Settlement - Battle of Shanghai (1937).png', {
      alt: '1937年9月、戦闘を避けて上海共同租界へ移動する市民を撮影した写真',
      title: '上海共同租界へ避難する市民',
      dateLabel: '1937年9月',
      credit: '撮影者不詳／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1937-09-11': [
    commonsFigure('Japanese naval infantry near Sanyili, Shanghai.jpg', {
      alt: '1937年10月6日、上海閘北の三義里付近で戦闘する日本海軍陸戦隊を撮影した写真',
      title: '長期化する上海市街戦',
      dateLabel: '1937年10月6日',
      credit: '河村好雄／満洲日日新聞社・Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1937-10-26': [
    commonsFigure('Japanese soldiers landing in Hangzhou Bay 1937.jpg', {
      alt: '1937年11月、杭州湾へ上陸する日本軍兵士を撮影した写真',
      title: '杭州湾上陸',
      dateLabel: '1937年11月',
      credit: '撮影者不詳／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1937-11-13': [
    commonsFigure('Japanese landing at Baimaokou, November 1937.png', {
      alt: '1937年11月、上海北方の白茆口へ上陸する日本陸軍第16師団を撮影した写真',
      title: '白茆口へ上陸する第16師団',
      dateLabel: '1937年11月',
      credit: '朝日新聞・撮影者不詳／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1937-12-01': [
    commonsFigure('Nanjinggatebattle.jpg', {
      alt: '1937年12月12日、南京城壁の門を攻撃する日本軍兵士と九四式軽装甲車を撮影した写真',
      title: '南京城壁への攻撃',
      dateLabel: '1937年12月12日',
      credit: '撮影者不詳／Wikimedia Commons',
      license: 'Public Domain',
    }),
    commonsFigure('USS Panay (PR-5) sinking in the Yangtze River on 12 December 1937 (NH 50805).jpg', {
      alt: '1937年12月12日、日本海軍機の攻撃を受けて長江で沈没する米海軍砲艦パネー号',
      title: 'パネー号事件',
      dateLabel: '1937年12月12日',
      credit: 'U.S. Navy／Naval History and Heritage Command・Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1937-12-14': [
    commonsFigure('Nanking Safety Zone street.PNG', {
      alt: '1937年12月27日、南京安全区内の通りを行き交う人々を撮影した写真',
      title: '南京安全区の通り',
      dateLabel: '1937年12月27日',
      credit: '『アサヒグラフ』掲載写真／朝日新聞・Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],

  '1938-01-01': [
    commonsFigure('Fumimaro Konoe.jpg', {
      alt: '1938年、第一次近衛内閣期の近衛文麿首相を撮影した肖像写真',
      title: '近衛文麿',
      dateLabel: '1938年',
      credit: '内閣情報部『写真週報』／国立国会図書館・Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1938-01-17': [
    commonsFigure('Approval of National Mobilization Law.jpg', {
      alt: '1938年、国家総動員法の成立を報じる新聞紙面',
      title: '国家総動員法を報じる新聞',
      dateLabel: '1938年',
      credit: '撮影者不詳／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1938-02-24': [
    commonsFigure('Liang Hongzhi.jpg', {
      alt: '1938年3月に南京で成立した中華民国維新政府の行政院長となった梁鴻志の肖像写真',
      title: '梁鴻志',
      dateLabel: '1941年以前',
      credit: '『最新支那要人伝』／朝日新聞社・Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1938-04-01': [
    commonsFigure('Terauchi Hisaichi and Shunroku Hata in Xuzhou, 1938.jpg', {
      alt: '1938年、徐州占領後の寺内寿一と畑俊六を撮影した写真',
      title: '徐州占領後の寺内寿一と畑俊六',
      dateLabel: '1938年',
      credit: '撮影者不詳／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1938-05-20': [
    commonsFigure('1938 Yellow River flood.jpg', {
      alt: '1938年6月の黄河堤防決壊後、洪水となった地域を撮影した写真',
      title: '黄河決壊による洪水',
      dateLabel: '1938年',
      credit: '撮影者不詳／『中華民国史画』・Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1938-06-18': [
    commonsFigure("The Japanese 11th Army's assault on Wuhan, 1938.png", {
      alt: '1938年の武漢作戦で日本陸軍第11軍の進攻方向を示した作戦図',
      title: '武漢攻略作戦の進攻図',
      dateLabel: '1938年',
      credit: 'Headquarters, USAFFE and Eighth U.S. Army／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1938-07-27': [
    commonsFigure('Battle of Lake Khasan-Japanese soldiers defending Zaozarnaya Hill.jpg', {
      alt: '1938年の張鼓峰事件で丘陵陣地に展開する日本軍兵士を撮影した写真',
      title: '張鼓峰事件',
      dateLabel: '1938年',
      credit: '赤石澤邦彦『張鼓峰』掲載写真／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1938-09-30': [
    commonsFigure('1938年被日军飞机炸中的广州二中.jpg', {
      alt: '1938年、日本軍の空襲を受けた広州市立第二中学校の被害を撮影した写真',
      title: '空襲を受けた広州の学校',
      dateLabel: '1938年',
      credit: '撮影者不詳／Wikimedia Commons',
      license: 'Public Domain',
    }),
    commonsFigure('Wuhan 1938-10-25.jpg', {
      alt: '1938年10月25日、武漢へ入る日本軍部隊を撮影した写真',
      title: '武漢への日本軍進入',
      dateLabel: '1938年10月25日',
      credit: '撮影者不詳／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1938-10-28': [
    commonsFigure('Hachirō Arita 3.jpg', {
      alt: '1937年ごろの有田八郎を撮影した肖像写真',
      title: '有田八郎',
      dateLabel: '1937年ごろ',
      credit: '撮影者不詳／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1938-12-22': [
    commonsFigure('Portrait of Wang Jingwei (sm997hy4294).jpg', {
      alt: '1937年2月の汪兆銘を撮影した肖像写真',
      title: '汪兆銘',
      dateLabel: '1937年2月',
      credit: '撮影者不詳／Stanford University East Asia Library・Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],

  '1939-01-05': [
    commonsFigure('Kiichirō Hiranuma Cabinet 19390105.jpg', {
      alt: '1939年1月5日に成立した平沼騏一郎内閣の閣僚集合写真',
      title: '平沼騏一郎内閣',
      dateLabel: '1939年1月5日',
      credit: '撮影者不詳／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1939-02-10': [
    commonsFigure('Maizuru 1st SNLF, Hainan 1939.jpg', {
      alt: '1939年、海南島攻略を前に訓示を受ける舞鶴第一海軍特別陸戦隊の兵士',
      title: '海南島攻略前の舞鶴第一特別陸戦隊',
      dateLabel: '1939年',
      credit: '日本海軍／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1939-05-11': [
    commonsFigure('Japanese soldiers battling with the united army of USSR and Mongolia in the Nomonhan Incident - 1939.png', {
      alt: '1939年、ノモンハン事件でソ連・モンゴル軍と交戦する日本軍兵士を撮影した写真',
      title: 'ノモンハン事件',
      dateLabel: '1939年',
      credit: '撮影者不詳／毎日新聞社資料・Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1939-06-14': [
    commonsFigure('Tientsin. 1939 Japanese blockade.jpg', {
      alt: '1939年6月、日本軍が天津の英仏租界周囲に設けた有刺鉄線の内側にいる英軍兵士',
      title: '天津英仏租界の封鎖',
      dateLabel: '1939年6月',
      credit: 'Tientsin press photo／Wikimedia Commons',
      license: 'Public Domain',
    }),
    commonsFigure('Battles of Khalkhin Gol-Anti Aircraft Cannons-JapaneseArmy-1939-06-30.png', {
      alt: '1939年6月30日、ノモンハン事件で対空砲を配置する日本軍部隊を撮影した写真',
      title: 'ノモンハンの日本軍対空陣地',
      dateLabel: '1939年6月30日',
      credit: '撮影者不詳／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1939-07-26': [
    commonsFigure('Secretary of State Hull arrives at White House for final conference on neutrality message. Washington, D.C., July 14. Secretary of State Cordell Hull entering a side door of the White House LCCN2016875949.jpg', {
      alt: '1939年7月、ホワイトハウスへ入る米国務長官コーデル・ハルを撮影した写真',
      title: '米国務長官コーデル・ハル',
      dateLabel: '1939年7月14日',
      credit: 'Harris & Ewing／Library of Congress・Wikimedia Commons',
      license: 'Public Domain',
    }),
    commonsFigure('Khalkhin Gol Captured Japanese soldiers 1939.jpg', {
      alt: '1939年8月、ノモンハン事件で捕虜となった日本軍兵士を撮影した写真',
      title: 'ノモンハンで捕虜となった日本軍兵士',
      dateLabel: '1939年8月',
      credit: 'Viktor Temin／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1939-08-23': [
    commonsFigure('Nobuyuki Abe Cabinet 19390830.jpg', {
      alt: '1939年8月30日に成立した阿部信行内閣の閣僚集合写真',
      title: '阿部信行内閣',
      dateLabel: '1939年8月30日',
      credit: '撮影者不詳／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1939-09-16': [
    commonsFigure('Negotiation-CeaseFire-2-Battles of Khalkhin Gol-1939-09-20.png', {
      alt: '1939年9月20日、ノモンハン事件の停戦後に行われた現地交渉を撮影した写真',
      title: 'ノモンハン停戦後の現地交渉',
      dateLabel: '1939年9月20日',
      credit: '撮影者不詳／毎日新聞社資料・Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1939-10-18': [
    commonsDocumentFigure(
      'NDL1267879 価格等統制令・軍需工場事業場検査令解説.pdf',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/NDL1267879_%E4%BE%A1%E6%A0%BC%E7%AD%89%E7%B5%B1%E5%88%B6%E4%BB%A4%E3%83%BB%E8%BB%8D%E9%9C%80%E5%B7%A5%E5%A0%B4%E4%BA%8B%E6%A5%AD%E5%A0%B4%E6%A4%9C%E6%9F%BB%E4%BB%A4%E8%A7%A3%E8%AA%AC.pdf/page1-1280px-NDL1267879_%E4%BE%A1%E6%A0%BC%E7%AD%89%E7%B5%B1%E5%88%B6%E4%BB%A4%E3%83%BB%E8%BB%8D%E9%9C%80%E5%B7%A5%E5%A0%B4%E4%BA%8B%E6%A5%AD%E5%A0%B4%E6%A4%9C%E6%9F%BB%E4%BB%A4%E8%A7%A3%E8%AA%AC.pdf.jpg',
      {
      alt: '1939年の価格等統制令・軍需工場事業場検査令の解説書表紙',
      title: '『価格等統制令・軍需工場事業場検査令解説』',
      dateLabel: '1939年',
      credit: '大阪銀行協会／国立国会図書館・Wikimedia Commons',
      license: 'Public Domain',
      },
    ),
  ],
  '1940-01-01': [
    commonsFigure('Mitsumasa Yonai Cabinet 19400116.jpg', {
      alt: '1940年1月16日に成立した米内光政内閣の閣僚集合写真',
      title: '米内光政内閣',
      dateLabel: '1940年1月16日',
      credit: '『新生日本外交百年史』／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1940-01-27': [
    commonsFigure('Saito Takao 1937.jpg', {
      alt: '1937年の衆議院要覧に掲載された斎藤隆夫の肖像写真',
      title: '斎藤隆夫',
      dateLabel: '1937年',
      credit: '衆議院事務局『衆議院要覧』／Wikimedia Commons',
      license: 'Public Domain',
    }),
    commonsFigure('Prime Minister Mitsumasa Yonai cropped.jpg', {
      alt: '1940年前半の米内光政首相を撮影した肖像写真',
      title: '米内光政首相',
      dateLabel: '1940年前半',
      credit: '撮影者不詳／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1940-03-07': [
    commonsFigure('Expulsion of Takao Saito.JPG', {
      alt: '1940年、斎藤隆夫の衆議院議員除名をめぐる場面を撮影した写真',
      title: '斎藤隆夫の除名',
      dateLabel: '1940年',
      credit: '撮影者不詳／毎日新聞社資料・Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1940-03-30': [
    commonsFigure('Establishment of Wang Jingwei Regime.jpg', {
      alt: '1940年3月30日、南京で国民政府の還都を宣言する汪兆銘を撮影した写真',
      title: '南京国民政府の成立',
      dateLabel: '1940年3月30日',
      credit: '撮影者不詳／中国第二歴史档案館・Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1940-05-10': [
    commonsFigure('Fumimaro Konoe 6.jpg', {
      alt: '1939年4月に撮影された近衛文麿の肖像写真',
      title: '近衛文麿',
      dateLabel: '1939年4月',
      credit: 'F. L. Hamilton／内閣情報部『写真週報』・Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1940-06-29': [
    commonsDocumentFigure(
      "NDL11919132 Def. Doc. No. 54- The international situation and Japan's position - Address of the Foreign Minister, Mr. Hachiro ARITA, delivered over the air on June 29, 1940.pdf",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/NDL11919132_Def._Doc._No._54-_The_international_situation_and_Japan%27s_position_-_Address_of_the_Foreign_Minister%2C_Mr._Hachiro_ARITA%2C_delivered_over_the_air_on_June_29%2C_1940.pdf/page1-960px-thumbnail.pdf.jpg",
      {
      alt: '1940年6月29日に放送された有田八郎外相「国際情勢ト帝国ノ立場」の英訳文書表紙',
      title: '有田外相「国際情勢ト帝国ノ立場」',
      dateLabel: '1940年6月29日',
      credit: '外務省関係文書／国立国会図書館・Wikimedia Commons',
      license: 'Public Domain',
      },
    ),
  ],
  '1940-07-22': [
    commonsFigure('Fumimaro Konoe Cabinet 19400722.jpg', {
      alt: '1940年7月、第2次近衛文麿内閣の初閣議後に首相官邸で撮影された閣僚集合写真',
      title: '第2次近衛文麿内閣',
      dateLabel: '1940年7月',
      credit: '毎日新聞／アジア歴史資料センター・Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1940-08-01': [
    commonsFigure('Yokusankai junbikai.jpg', {
      alt: '1940年、新体制準備委員が集まった集合写真',
      title: '新体制準備委員',
      dateLabel: '1940年',
      credit: '翼賛運動史刊行会『翼賛国民運動史』／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1940-08-31': [
    commonsFigure('Japanese soldiers and trucks in full disguise.jpg', {
      alt: '1940年9月22日、鎮南関付近で擬装した兵士とトラックを伴って進軍する日本軍を撮影した写真',
      title: '北部仏印進駐直前の日本軍',
      dateLabel: '1940年9月22日',
      credit: '毎日新聞社／アジア歴史資料センター・Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],
  '1940-09-27': [
    commonsFigure('Unterzeichnung des Dreimächtepakts 1940.jpg', {
      alt: '1940年9月27日、ベルリンで行われた日独伊三国同盟の調印式。来栖三郎、チアノ、ヒトラー、リッベントロップが写る',
      title: '日独伊三国同盟の調印',
      dateLabel: '1940年9月27日',
      credit: 'National Digital Archives, Poland／Wikimedia Commons',
      license: 'CC0',
    }),
  ],
  '1940-10-12': [
    commonsFigure('Organizational Chart of IRAA.jpg', {
      alt: '大政翼賛会の中央組織と地方組織の構成を示した組織図',
      title: '大政翼賛会の組織図',
      dateLabel: '1940年ごろ',
      credit: '日本政府資料／国立公文書館デジタルアーカイブ・Wikimedia Commons',
      license: 'Public Domain Mark',
    }),
  ],
  '1940-10-22': [
    commonsFigure('TNA-0004 汪精衛和臧式毅.jpg', {
      alt: '1940年11月30日、南京で汪兆銘と満洲国駐南京国民政府大使の臧式毅が対談する写真',
      title: '日満華共同宣言の日の汪兆銘と臧式毅',
      dateLabel: '1940年11月30日',
      credit: '撮影者不詳／英国国立公文書館（CN 11/11）・Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],

  '1940-12-01': [
    commonsDocumentFigure(
      'NDL1437109 統制経済と新体制.pdf',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/NDL1437109_%E7%B5%B1%E5%88%B6%E7%B5%8C%E6%B8%88%E3%81%A8%E6%96%B0%E4%BD%93%E5%88%B6.pdf/page1-1280px-NDL1437109_%E7%B5%B1%E5%88%B6%E7%B5%8C%E6%B8%88%E3%81%A8%E6%96%B0%E4%BD%93%E5%88%B6.pdf.jpg',
      {
        alt: '1940年刊行の小冊子『統制経済と新体制』の表紙と標題紙を写した国立国会図書館資料',
        title: '『統制経済と新体制』',
        dateLabel: '1940年',
        credit: '野崎竜七／選挙粛正中央聯盟・国立国会図書館／Wikimedia Commons',
        license: 'Public Domain',
      },
    ),
  ],

  '1940-12-14': [
    commonsFigure('Yokusankai chuokyoryokukaigi.jpg', {
      alt: '1940年12月16日、大政翼賛会の最初の臨時中央協力会議の開会式を撮影した写真',
      title: '最初の臨時中央協力会議',
      dateLabel: '1940年12月16日',
      credit: '翼賛運動史刊行会編『翼賛国民運動史』／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],

  '1941-01-01': [
    commonsFigure('Matsuoka Yosuke.jpg', {
      alt: '1940年から1941年に外務大臣を務めた松岡洋右の肖像写真',
      title: '松岡洋右',
      dateLabel: '戦前',
      credit: '作者不詳／国立国会図書館・Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],

  '1941-01-22': [
    commonsFigure('Plaek Phibunsongkhram Inspects Thai Troops 1941.png', {
      alt: '1941年1月16日、仏印国境紛争の最中にタイ軍部隊を視察するプレーク・ピブーンソンクラーム首相',
      title: '泰仏印国境紛争中のタイ軍視察',
      dateLabel: '1941年1月16日',
      credit: 'タイ王国陸軍／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],


  '1941-02-01': [
    commonsFigure('Nomura presenting credentials to Roosevelt at White House.jpg', {
      alt: '1941年2月14日、ルーズヴェルト大統領への信任状捧呈のためホワイトハウスへ入る野村吉三郎駐米大使',
      title: '野村吉三郎駐米大使の信任状捧呈',
      dateLabel: '1941年2月14日',
      credit: '毎日新聞社／アジア歴史資料センター・Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],


  '1941-03-12': [
    commonsFigure('Bundesarchiv Bild 183-B01910, Berlin, Besuch japanischer Aussenminister Matsuokas.jpg', {
      alt: '1941年3月28日、ベルリンの日本大使館でカイテル元帥、スターマーらと会話する松岡洋右外相',
      title: 'ベルリン訪問中の松岡洋右',
      dateLabel: '1941年3月28日',
      credit: 'Bundesarchiv, Bild 183-B01910／Wikimedia Commons',
      license: 'CC BY-SA 3.0 DE',
    }),
  ],

  '1941-04-01': [
    commonsFigure('Soviet Japanese Neutrality Pact 13 April 1941.jpg', {
      alt: '1941年4月13日に調印された日ソ中立条約の署名・印章部分を、外務省外交史料館所蔵資料から撮影した写真',
      title: '日ソ中立条約',
      dateLabel: '1941年4月13日',
      credit: 'World Imaging／外務省外交史料館・Wikimedia Commons',
      license: 'CC BY-SA 3.0',
    }),
  ],


  '1941-04-14': [
    commonsFigure('President Franklin D. Roosevelt-1941.jpg', {
      alt: '1941年3月11日、ホワイトハウスでレンドリース法案に署名するフランクリン・D・ルーズヴェルト大統領',
      title: '1941年春のルーズヴェルト大統領',
      dateLabel: '1941年3月11日',
      credit: 'New York World-Telegram and the Sun／Library of Congress・Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],

  '1941-04-23': [
    commonsFigure('พิธีลงนามอนุสัญญาสันติภาพโตเกียว.jpg', {
      alt: '1941年5月9日、東京でタイとフランス領インドシナの平和条約に署名する式典',
      title: '仏タイ平和条約（東京条約）の調印式',
      dateLabel: '1941年5月9日',
      credit: '作者不詳／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],

  '1941-05-12': [
    commonsFigure('Cordell Hull cph.3a36596.jpg', {
      alt: '日米交渉で米国側の中心となった国務長官コーデル・ハルの肖像写真',
      title: 'コーデル・ハル国務長官',
      dateLabel: '1936年',
      credit: 'Harris & Ewing／Library of Congress・Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],

  '1941-06-22': [
    commonsFigure('German troops crossing the Soviet border.jpg', {
      alt: '1941年6月22日、独ソ戦開始時にソ連国境を越えるドイツ軍部隊を撮影した写真',
      title: '独ソ国境を越えるドイツ軍',
      dateLabel: '1941年6月22日',
      credit: 'Johannes Hähle／WW2 Photo Archive・Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],


  '1941-06-25': [
    commonsFigure('Japanese troops entering Saigon in 1941.jpg', {
      alt: '1941年、南部仏領インドシナ進駐に伴いサイゴンへ入る日本軍を撮影した写真',
      title: 'サイゴンへ入る日本軍',
      dateLabel: '1941年',
      credit: '日本陸軍撮影とされる写真／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],


  '1941-07-03': [
    commonsFigure('Kwantung Army Special Maneuvers1.JPG', {
      alt: '1941年の関東軍特種演習で行動する日本軍部隊を撮影した写真',
      title: '関東軍特種演習',
      dateLabel: '1941年',
      credit: '撮影者不詳／毎日新聞社刊行物由来・Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],


  '1941-07-18': [
    commonsFigure('Fumimaro Konoe Cabinet 19410718.jpg', {
      alt: '1941年7月18日に成立した第3次近衛内閣の閣僚集合写真',
      title: '第3次近衛内閣',
      dateLabel: '1941年7月18日',
      credit: '産経新聞社／Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],



  '1941-07-25': [
    commonsDocumentFigure(
      'CNTS-00125339173 朝鮮新聞 1941-07-26.pdf',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/CNTS-00125339173_%E6%9C%9D%E9%AE%AE%E6%96%B0%E8%81%9E_1941-07-26.pdf/page1-960px-CNTS-00125339173_%E6%9C%9D%E9%AE%AE%E6%96%B0%E8%81%9E_1941-07-26.pdf.jpg',
      {
        alt: '1941年7月26日付「朝鮮新聞」の紙面。米国の対日強硬方針と在米資金凍結を扱う記事を掲載している',
        title: '資産凍結を報じた1941年7月26日付紙面',
        dateLabel: '1941年7月26日',
        credit: '朝鮮新聞社／韓国国立中央図書館・Wikimedia Commons',
        license: 'Public Domain',
      },
    ),
    commonsDocumentFigure(
      'NDL10274630 Court Exh. No. 651- Copies of 2 letter....pdf',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/NDL10274630_Court_Exh._No._651-_Copies_of_2_letter....pdf/page1-960px-NDL10274630_Court_Exh._No._651-_Copies_of_2_letter....pdf.jpg',
      {
        alt: '1941年7月29日に調印された仏領インドシナ共同防衛に関する日本・フランス間議定書の条件を収録した法廷提出資料',
        title: '仏領インドシナ共同防衛に関する日仏議定書',
        dateLabel: '1941年7月29日（1946年法廷提出資料）',
        credit: '日仏共同防衛議定書関係文書／GHQ/SCAP国際検察局・国立国会図書館／Wikimedia Commons',
        license: 'Public Domain',
      },
    ),
  ],


  '1941-08-01': [
    commonsFigure('Kichisaburō Nomura.jpg', {
      alt: '駐米大使として日米交渉を担った野村吉三郎の肖像写真',
      title: '野村吉三郎',
      dateLabel: '1939年以前（人物写真）',
      credit: '撮影者不詳／Wikimedia Commons',
      license: 'Public Domain',
    }),
    commonsFigure('Matsuoka signs the Soviet–Japanese Neutrality Pact-1.jpg', {
      alt: '1941年4月13日、モスクワで日ソ中立条約に署名する松岡洋右外相。スターリン、モロトフらが立ち会う',
      title: '日ソ中立条約の署名',
      dateLabel: '1941年4月13日',
      credit: 'Nikolai Vlasik／Russian Archives・Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],


  '1941-08-17': [
    commonsDocumentFigure(
      'NDL11919913 Def. Doc. No. 1400K-6- Statement handed by President Roosevelt to the Japanese Ambassador (Nomura) on Aug. 17, 1941 Excerpt from Foreign Relations of the United States, Japan- 1931-1941, vol.II.pdf',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/NDL11919913_Def._Doc._No._1400K-6-_Statement_handed_by_President_Roosevelt_to_the_Japanese_Ambassador_%28Nomura%29_on_Aug._17%2C_1941_Excerpt_from_Foreign_Relations_of_the_United_States%2C_Japan-_1931-1941%2C_vol.II.pdf/page1-1280px-thumbnail.pdf.jpg',
      {
        alt: '1941年8月17日にルーズヴェルト大統領から野村吉三郎大使へ手交された声明を収録する法廷提出資料',
        title: '8月17日のルーズヴェルト回答',
        dateLabel: '1941年8月17日（戦後の法廷提出資料）',
        credit: '米国務省関係文書／GHQ/SCAP国際検察局・国立国会図書館／Wikimedia Commons',
        license: 'Public Domain',
      },
    ),
    commonsFigure('Konoe Fumimaro PM.jpg', {
      alt: '1941年7月18日に撮影された第3次近衛内閣首相・近衛文麿の肖像',
      title: '近衛文麿',
      dateLabel: '1941年7月18日',
      credit: '撮影者不詳／首相官邸・Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],



  '1941-08-30': [
    commonsFigure('Osami Nagano.jpg', {
      alt: '1941年9月の国策審議で軍令部総長として資源・戦力と開戦準備の時間条件を説明した永野修身の肖像',
      title: '永野修身 軍令部総長',
      dateLabel: '1940年ごろ',
      credit: '撮影者不詳／U.S. Naval History and Heritage Command・Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],


  '1941-09-25': [
    commonsDocumentFigure(
      'NDL11919830 Def. Doc. No. 1400U-6- Memorandum by the Ambassador in Japan (Grew). Oct. 7, 1941 Excerpt from Foreign Relations of United States, Japan- 1931-1941 vol.II.pdf',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/NDL11919830_Def._Doc._No._1400U-6-_Memorandum_by_the_Ambassador_in_Japan_%28Grew%29._Oct._7%2C_1941_Excerpt_from_Foreign_Relations_of_United_States%2C_Japan-_1931-1941_vol.II.pdf/page1-1280px-thumbnail.pdf.jpg',
      {
        alt: '1941年10月7日、10月2日の米側回答と日米首脳会談の予備条件をめぐるグルー駐日米大使の覚書を収録した法廷提出資料',
        title: '10月7日のグルー駐日米大使覚書',
        dateLabel: '1941年10月7日（戦後の法廷提出資料）',
        credit: 'ジョセフ・グルー関係文書／GHQ/SCAP国際検察局・国立国会図書館／Wikimedia Commons',
        license: 'Public Domain',
      },
    ),
  ],


  '1941-10-18': [
    commonsFigure('Hideki Tōjō Cabinet 19411018 3.jpg', {
      alt: '1941年10月18日、初閣議後に首相官邸で撮影された東条英機内閣の閣僚集合写真',
      title: '東条英機内閣の成立',
      dateLabel: '1941年10月18日',
      credit: '朝日新聞（Commons記録。JACAR掲載は毎日新聞社提供）／JACAR特別展・Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],


  '1941-11-14': [
    commonsFigure('Nomura and Kurusu 27 November 1941.jpg', {
      alt: '1941年11月17日（米時間）、ルーズヴェルト大統領との会談後に記者団の取材を受ける野村吉三郎駐米大使と来栖三郎特命全権大使',
      title: '野村・来栖両大使、ホワイトハウス会談後',
      dateLabel: '1941年11月17日（米時間）',
      credit: '毎日新聞／アジア歴史資料センター・Wikimedia Commons',
      license: 'Public Domain',
    }),
  ],

}
