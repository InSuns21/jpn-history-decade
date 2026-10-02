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
