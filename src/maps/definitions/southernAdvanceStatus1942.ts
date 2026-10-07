import type { HistoricalMapDefinition } from '../schema.ts'

export const southernAdvanceStatus1942Map: HistoricalMapDefinition = {
  id: 'southern-advance-status-1942-02-15',
  title: '1942年2月15日の南方戦線：主要拠点ごとの占領・継戦状態',
  historicalQuestion:
    '1942年2月15日時点で、南方の主要戦域は「占領後の管理」「都市・拠点占領」「戦闘継続」「同盟国経由」のどこまで進んでいたのか。',
  readingNote:
    '1942年2月15日前後の主要都市・軍事拠点・残存戦線をPointで比較する模式図。色と記号は各地点の制度・軍事状態を示す。Pointは都市・島・戦域の代表位置であり、占領範囲、前線、実進攻路、海上航路を表さない。パレンバンは2月14〜15日に空挺攻撃と地上部隊進出が重なった移行中の戦域として「戦闘継続」に置く。タイは国家政府と条約主体が存続する同盟国であり、軍事占領地と同じカテゴリにしない。背景地図・国境は現代のOpenStreetMapで、1942年の政治境界ではない。',
  status: 'published',
  period: { startYear: 1941, endYear: 1942 },
  initialView: {
    center: [121.0, 8.5],
    zoom: 2.05,
    minZoom: 1.5,
    maxZoom: 6,
  },
  datasets: [
    {
      id: 'a44-southern-status-1942-02-15',
      provenance: {
        sourceId: 'a44-southern-status-1942-02-15',
        title: '1941年12月26日〜1942年2月15日の主要占領・継戦状態から作成した代表Point',
        institution:
          'アジア歴史資料センター / U.S. Army Center of Military History / U.S. Naval History and Heritage Command / Australian War Memorial / Royal Air Force Air Historical Branch',
        url: 'https://www.awm.gov.au/collection/RELAWM32783',
        sourceType: 'derived',
        license:
          'Historical dates and roles are derived from official institutional sources already cited in JH117–JH121. Coordinates are site-authored approximate representative points for named cities, islands, or active fronts; no historical route, boundary, or occupation-area geometry is copied.',
        derivedFromSourceIds: [
          'jacar-hong-kong-military-administration-19411226',
          'jacar-greater-manila-defense-hq-19420103',
          'cmh-fall-philippines-jh121',
          'jacar-japan-thailand-alliance-19411221',
          'awm-singapore-fall-jh121',
          'indische-kamp-archives-borneo-jh118',
          'cmh-strategy-command-jh120',
          'awm-rabaul-jh119',
          'raf-far-east-vol2-jh120',
          'awm-ambon-jh121',
          'nhhc-java-sea-jh121',
        ],
        temporalCoverage: {
          from: '1941-12-26',
          to: '1942-02-15',
          basis: 'range',
          note:
            'JH117〜JH121で確認した状態遷移を、1942年2月15日時点の比較用に整理した。各PointのeventDateはその状態へ移る主要日付を示す。',
        },
        spatialCoverage:
          '香港、ルソン島、タイ、マレー・シンガポール、ボルネオ、ニューギニア準州、ビルマ、モルッカ諸島、スマトラ',
        geometryConfidence: 'approximate',
        transformations: [
          'JH117〜JH121で公的史料・公的戦史から確認済みの主要都市・拠点・残存戦線を抽出した。',
          '占領地Polygonや進攻LineStringを復元せず、1942年2月15日時点の状態差を比較する代表Pointへ落とした。',
          '状態を「占領後の管理機構が稼働」「都市・拠点の軍事占領成立」「戦闘・攻略継続」「同盟国・作戦通過基盤」の4カテゴリに分けた。',
          'マニラ占領とバターン抗戦を別Pointにし、首都占領をフィリピン全域制圧へ拡張しなかった。',
          'シンガポールは2月15日の守備隊降伏までを「軍事占領成立」とし、その後の占領行政・「昭南」統治を先取りしなかった。',
          'パレンバンは2月14〜15日の空挺攻撃・地上進出・施設破壊が重なる移行中の状態として「戦闘・攻略継続」に置き、安定した資源供給成立を表示しなかった。',
          'ビルマはモールメン占領後もシッタン・ラングーン方面の戦闘が続くため、占領済み都市だけで戦域全体を代表させず「ビルマ戦線（モールメン以北）」として示した。',
          'タイは政府・条約主体の存続を保つ同盟国として別カテゴリにし、軍事占領地へ含めなかった。',
        ],
        notes:
          'このdatasetは、南方作戦の「進撃距離」ではなく、同じ2月15日時点に異なる支配・戦闘段階が並存したことを読むためのもの。Pointの大きさ・Point間の距離を兵力、作戦優先度、支配面積の代用にしない。',
      },
      allowedGeometryTypes: ['Point'],
      requiredProperties: [
        'category',
        'marker',
        'label',
        'labelPlacement',
        'year',
        'eventDate',
        'status',
        'detail',
      ],
      features: [
        {
          id: 'hong-kong-military-administration-1942-02-15',
          geometry: { type: 'Point', coordinates: [114.17, 22.30] },
          properties: {
            category: 'occupation-administration',
            marker: '政',
            label: '香港',
            labelPlacement: 'left',
            year: '1941-12-26〜',
            eventDate: '1941-12-26',
            status: '占領後の軍政機構が稼働',
            detail:
              '12月25日の守備隊降伏後、26日に第二十三軍軍政庁が置かれた。2月15日時点では軍事占領だけでなく、行政・警備を担う占領後の管理段階へ進んでいた。',
          },
        },
        {
          id: 'manila-occupation-administration-1942-02-15',
          geometry: { type: 'Point', coordinates: [120.984, 14.600] },
          properties: {
            category: 'occupation-administration',
            marker: '政',
            label: 'マニラ',
            labelPlacement: 'right',
            year: '1942-01-02〜',
            eventDate: '1942-01-03',
            status: '都市占領後の警備・防衛機構',
            detail:
              '1月2日に日本軍がマニラへ入り、3日に大マニラ市防衛司令部が置かれた。首都の占領後管理が始まった一方、近接するバターンでは米比軍の抗戦が続いた。',
          },
        },
        {
          id: 'bataan-campaign-ongoing-1942-02-15',
          geometry: { type: 'Point', coordinates: [120.44, 14.65] },
          properties: {
            category: 'campaign-ongoing',
            marker: '戦',
            label: 'バターン半島',
            labelPlacement: 'left',
            year: '1942-01-07〜',
            eventDate: '1942-02-15',
            status: '米比軍の抗戦継続',
            detail:
              'マニラ占領後も米比軍主力はバターン半島で組織的抵抗を続けた。2月15日時点でフィリピン戦線は終結していない。',
          },
        },
        {
          id: 'thailand-allied-transit-1942-02-15',
          geometry: { type: 'Point', coordinates: [100.50, 13.75] },
          properties: {
            category: 'allied-transit',
            marker: '盟',
            label: 'タイ（バンコク）',
            labelPlacement: 'left',
            year: '1941-12-21〜',
            eventDate: '1941-12-21',
            status: '同盟国・作戦通過基盤',
            detail:
              '日本とタイは12月21日に同盟条約を締結した。タイ政府は国家・条約主体として存続し、日本軍はタイ領をマレー・ビルマ方面の作戦基盤として利用した。',
          },
        },
        {
          id: 'singapore-occupation-1942-02-15',
          geometry: { type: 'Point', coordinates: [103.82, 1.35] },
          properties: {
            category: 'occupation-established',
            marker: '占',
            label: 'シンガポール',
            labelPlacement: 'right',
            year: '1942-02-15',
            eventDate: '1942-02-15',
            status: '守備隊降伏・軍事占領成立',
            detail:
              '2月8日の島内上陸後、15日にパーシヴァル中将が英連邦軍の降伏を受け入れた。占領行政の制度化はこの後の段階である。',
          },
        },
        {
          id: 'tarakan-occupation-1942-02-15',
          geometry: { type: 'Point', coordinates: [117.63, 3.30] },
          properties: {
            category: 'occupation-established',
            marker: '占',
            label: 'タラカン',
            labelPlacement: 'left',
            year: '1942-01-11〜',
            eventDate: '1942-01-12',
            status: '石油拠点の軍事占領成立',
            detail:
              '1月11日の上陸後、日本軍はタラカンを占領した。油井・貯油施設は撤退側によって破壊され、軍事占領と資源利用の成立には時間差があった。',
          },
        },
        {
          id: 'balikpapan-occupation-1942-02-15',
          geometry: { type: 'Point', coordinates: [116.83, -1.27] },
          properties: {
            category: 'occupation-established',
            marker: '占',
            label: 'バリックパパン',
            labelPlacement: 'left',
            year: '1942-01-24〜',
            eventDate: '1942-01-24',
            status: '石油・港湾拠点の軍事占領成立',
            detail:
              '1月24日、日本軍はバリックパパンを確保した。製油所などは撤退前に破壊されており、占領後には修復・生産・積出し・海上輸送の工程が残った。',
          },
        },
        {
          id: 'rabaul-occupation-1942-02-15',
          geometry: { type: 'Point', coordinates: [152.17, -4.20] },
          properties: {
            category: 'occupation-established',
            marker: '占',
            label: 'ラバウル',
            labelPlacement: 'right',
            year: '1942-01-23〜',
            eventDate: '1942-01-23',
            status: '港湾・飛行場拠点の軍事占領成立',
            detail:
              '1月23日に日本軍がラバウルを占領し、南西太平洋の港湾・飛行場拠点を得た。Pointは拠点状態だけを示し、ニューギニア方面全体の支配を表さない。',
          },
        },
        {
          id: 'burma-campaign-ongoing-1942-02-15',
          geometry: { type: 'Point', coordinates: [97.35, 17.15] },
          properties: {
            category: 'campaign-ongoing',
            marker: '戦',
            label: 'ビルマ戦線（モールメン以北）',
            labelPlacement: 'right',
            year: '1942-01-30〜',
            eventDate: '1942-02-15',
            status: 'シッタン・ラングーン方面で戦闘継続',
            detail:
              '1月30日にモールメンへ日本軍が進入した後も戦線は北へ移り、2月15日時点でラングーンは未占領だった。占領済み都市と戦域全体の終結を分けて示す。',
          },
        },
        {
          id: 'ambon-occupation-1942-02-15',
          geometry: { type: 'Point', coordinates: [128.18, -3.70] },
          properties: {
            category: 'occupation-established',
            marker: '占',
            label: 'アンボン',
            labelPlacement: 'right',
            year: '1942-02-03〜',
            eventDate: '1942-02-03',
            status: '守備隊降伏・軍事占領成立',
            detail:
              '1月末の上陸・攻撃後、連合軍守備隊主力は2月3日に降伏した。飛行場・港湾の軍事占領後には捕虜管理と施設利用という別の占領実務が生じた。',
          },
        },
        {
          id: 'palembang-campaign-ongoing-1942-02-15',
          geometry: { type: 'Point', coordinates: [104.75, -2.99] },
          properties: {
            category: 'campaign-ongoing',
            marker: '戦',
            label: 'パレンバン',
            labelPlacement: 'left',
            year: '1942-02-14〜15',
            eventDate: '1942-02-15',
            status: '空挺攻撃・地上進出が進行',
            detail:
              '2月14日に空挺部隊が飛行場・製油所方面を攻撃し、15日に地上部隊も進出した。施設の破壊・確保・修復が重なっており、安定した石油供給成立とは分ける。',
          },
        },
      ],
    },
  ],
  layers: [
    {
      id: 'a44-southern-status',
      datasetId: 'a44-southern-status-1942-02-15',
      categoryProperty: 'category',
      categories: [
        'occupation-administration',
        'occupation-established',
        'campaign-ongoing',
        'allied-transit',
      ],
    },
  ],
  legend: [
    {
      value: 'occupation-administration',
      label: '占領後の管理機構が稼働',
      marker: '政',
      color: '#66587b',
    },
    {
      value: 'occupation-established',
      label: '都市・拠点の軍事占領成立',
      marker: '占',
      color: '#7a4545',
    },
    {
      value: 'campaign-ongoing',
      label: '2月15日時点で戦闘・攻略継続',
      marker: '戦',
      color: '#7a6436',
    },
    {
      value: 'allied-transit',
      label: '同盟国・作戦通過基盤',
      marker: '盟',
      color: '#4f6570',
    },
  ],
  auditState: {
    dataAudit: 'passed',
    styleAudit: 'passed',
    visualAudit: 'not-required-reused-pattern',
    notes: [
      'A44 map necessityはadopted / high。香港からラバウルまで広がった南方各戦域が、1942年2月15日時点で軍政・軍事占領・継戦・同盟国という異なる段階に分かれているため、本文だけよりPoint比較の方が状態差と距離感を把握しやすい。',
      'A43が1941年12月25日時点の開戦初動を扱うのに対し、A44はその後の占領後管理・資源拠点化・残存戦線を2月15日時点で比較し、主題を分離した。',
      'Point-onlyとし、進攻路・海上航路・前線・占領範囲のLineString / Polygonは作成していない。広大な面支配や正確な作戦経路を過剰主張しない。',
      'マニラとバターンを別Pointにし、首都占領後にもフィリピン戦線が継続したことを地理的に分離した。',
      'シンガポールは2月15日の軍事的降伏まで、パレンバンは2月14〜15日の攻略進行中として扱い、後続する占領行政・施設復旧・資源供給を先取りしない。',
      'タイを軍事占領地と分け、政府・条約主体が存続する同盟国・作戦通過基盤として表示した。',
      'Style Auditではカテゴリごとに色だけでなく「政・占・戦・盟」の記号と凡例を分け、Point sizeで兵力・支配面積・重要度を表現しない。',
      'A43 opening-multifront-operations-1941 と同じThematicMap point-only表示、ラベル、凡例、popup/touch interaction、広域zoom設計を再利用し、新しいinteractionやtime-slice UIを導入しない。',
      '変更はPoint feature・初期表示・ラベル・属性値に限定されるため、MAP_AUDIT_STANDARDのpoint-only再利用例外を適用し、個別Human Visual Auditを省略する。',
    ],
  },
}
