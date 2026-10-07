import type { HistoricalMapDefinition } from '../schema.ts'

export const openingMultifrontOperations1941Map: HistoricalMapDefinition = {
  id: 'opening-multifront-operations-1941',
  title: '1941年12月8〜25日の開戦初動：主要戦域の広がりと12月25日時点の状態',
  historicalQuestion:
    '1941年12月8日に始まった日本軍の開戦初動は、太平洋・東南アジアのどこへ同時並行に広がり、12月25日までに各地点でどの状態へ分かれたのか。',
  readingNote:
    '主要戦域・政治拠点の相対配置をPointで示す模式図。色と記号は12月25日時点の状態を表し、各PointのeventDate / localDateでその状態へ移る主要日付を補う。真珠湾は現地時間12月7日（日本時間12月8日）の攻撃、タイは12月21日の同盟成立を示す。進攻路・海上航路・戦線・占領範囲は描かず、Point間を結んで実際の作戦経路を推定しない。背景地図・国境は現代のOpenStreetMapで、1941年の政治境界ではない。',
  status: 'published',
  period: { startYear: 1941, endYear: 1941 },
  initialView: {
    center: [145.0, 15.0],
    zoom: 1.1,
    minZoom: 0.8,
    maxZoom: 6,
  },
  datasets: [
    {
      id: 'a43-opening-theaters-status-1941',
      provenance: {
        sourceId: 'a43-opening-theaters-status-1941',
        title: '1941年12月8〜25日の主要戦域・占領・同盟関係から作成した代表Point',
        institution:
          'アジア歴史資料センター / U.S. Naval History and Heritage Command / U.S. Army Center of Military History / Australian War Memorial / Government of Canada',
        url: 'https://www.jacar.go.jp/exhibition/shuhou/nenpyo/nenpyo19411208.html',
        sourceType: 'derived',
        license:
          'Historical dates and roles are derived from official institutional sources already cited in JH114–JH116. Coordinates are site-authored approximate representative points for named theaters or political centers; no historical route, boundary, or occupation-area geometry is copied.',
        derivedFromSourceIds: [
          'jacar-pearl-harbor-attack-19411208',
          'awm-invasion-malaya-19411208',
          'cmh-philippines-19411208',
          'nhhc-philippines-guam-wake-19411208',
          'awm-borneo-invasion-1941',
          'jacar-japan-thailand-alliance-19411221',
          'nhhc-wake-capture-19411223',
          'canada-hong-kong-surrender-19411225',
        ],
        temporalCoverage: {
          from: '1941-12-07',
          to: '1941-12-25',
          basis: 'range',
          note:
            '真珠湾のみ現地時間1941年12月7日（日本時間12月8日）。その他は各戦域の現地日付または日本側記事で扱う日付を属性に保持し、12月25日時点の状態をカテゴリ化した。',
        },
        spatialCoverage:
          'ハワイ、マレー半島、タイ、ルソン島、香港、グアム、ウェーク島、英領ボルネオ北西部',
        geometryConfidence: 'approximate',
        transformations: [
          'JH114〜JH116で公式史料・公的戦史から確認済みの主要戦域と政治拠点を抽出した。',
          '各戦域を戦線Polygonや進攻LineStringへ復元せず、相対配置を読むための代表Pointへ落とした。',
          '同一の「日本支配」に潰さないため、12月25日時点を「初撃後」「戦闘継続」「軍事占領成立」「国家間同盟成立」の4カテゴリに分けた。',
          '真珠湾は現地時間12月7日と日本時間12月8日を併記し、時差による日付差をPoint属性へ保持した。',
          'フィリピン・マレーは12月25日時点で作戦継続中として扱い、後の占領結果を12月時点へ逆投影しなかった。',
          'グアム・ウェーク・香港・ミリは都市・島・拠点単位の状態だけを示し、周辺地域全体の面支配を表現しなかった。',
        ],
        notes:
          'このdatasetは「12月8日に始まった主要戦域が12月25日までにどう分岐したか」を比較するためのもの。Pointの大きさ、Point間の距離、直線距離を兵力・作戦優先度・実航路の代用にしない。',
      },
      allowedGeometryTypes: ['Point'],
      requiredProperties: [
        'category',
        'marker',
        'label',
        'labelPlacement',
        'year',
        'eventDate',
        'localDate',
        'status',
        'detail',
      ],
      features: [
        {
          id: 'pearl-harbor-opening-strike-1941',
          geometry: { type: 'Point', coordinates: [-157.95, 21.35] },
          properties: {
            category: 'raid-completed',
            marker: '撃',
            label: '真珠湾',
            labelPlacement: 'left',
            year: '1941-12-07（現地）／12-08（JST）',
            eventDate: '1941-12-08 JST',
            localDate: '1941-12-07 Hawaii',
            status: '初撃後・占領なし',
            detail:
              'ハワイ現地時間12月7日朝、日本海軍航空部隊が真珠湾の米太平洋艦隊・航空基地を攻撃した。日本時間では12月8日。12月25日時点で日本軍の軍事占領へは移っていない。',
          },
        },
        {
          id: 'malaya-campaign-opening-1941',
          geometry: { type: 'Point', coordinates: [102.24, 6.13] },
          properties: {
            category: 'campaign-ongoing',
            marker: '戦',
            label: 'マレー半島（コタバル）',
            labelPlacement: 'left',
            year: '1941-12-08〜',
            eventDate: '1941-12-08',
            localDate: '1941-12-08 Malaya',
            status: '12月25日時点で戦闘継続',
            detail:
              '12月8日、英領マレー北東岸コタバル方面で上陸作戦が始まった。日本軍はその後マレー半島を南下し、12月25日時点でも作戦は継続していた。',
          },
        },
        {
          id: 'luzon-campaign-opening-1941',
          geometry: { type: 'Point', coordinates: [121.0, 15.6] },
          properties: {
            category: 'campaign-ongoing',
            marker: '戦',
            label: 'ルソン島',
            labelPlacement: 'right',
            year: '1941-12-08〜',
            eventDate: '1941-12-22',
            localDate: '1941-12-22 Philippines',
            status: '12月25日時点で戦闘継続',
            detail:
              'フィリピンでは12月8日から航空攻撃が始まり、22日にはリンガエン湾方面で主力上陸が始まった。12月25日時点ではルソン島の戦闘は継続中だった。',
          },
        },
        {
          id: 'guam-occupation-1941',
          geometry: { type: 'Point', coordinates: [144.79, 13.45] },
          properties: {
            category: 'occupation-established',
            marker: '占',
            label: 'グアム',
            labelPlacement: 'right',
            year: '1941-12-10',
            eventDate: '1941-12-10',
            localDate: '1941-12-10 Guam',
            status: '軍事占領成立',
            detail:
              '12月8日の攻撃開始後、グアム守備隊は12月10日に降伏し、日本軍による軍事占領が成立した。',
          },
        },
        {
          id: 'wake-occupation-1941',
          geometry: { type: 'Point', coordinates: [166.62, 19.29] },
          properties: {
            category: 'occupation-established',
            marker: '占',
            label: 'ウェーク島',
            labelPlacement: 'right',
            year: '1941-12-23',
            eventDate: '1941-12-23',
            localDate: '1941-12-23 Wake',
            status: '軍事占領成立',
            detail:
              '12月11日の第一次上陸は撃退されたが、日本軍は増援後の第二次上陸で12月23日にウェーク島を占領した。',
          },
        },
        {
          id: 'hong-kong-occupation-1941',
          geometry: { type: 'Point', coordinates: [114.17, 22.30] },
          properties: {
            category: 'occupation-established',
            marker: '占',
            label: '香港',
            labelPlacement: 'right',
            year: '1941-12-25',
            eventDate: '1941-12-25',
            localDate: '1941-12-25 Hong Kong',
            status: '軍事占領成立',
            detail:
              '12月8日に戦闘が始まり、英植民地守備隊は12月25日に降伏した。これにより香港では日本軍の軍事占領が成立した。',
          },
        },
        {
          id: 'miri-occupation-1941',
          geometry: { type: 'Point', coordinates: [113.99, 4.40] },
          properties: {
            category: 'occupation-established',
            marker: '占',
            label: 'ミリ（英領ボルネオ）',
            labelPlacement: 'left',
            year: '1941-12-16〜',
            eventDate: '1941-12-16',
            localDate: '1941-12-16 Borneo',
            status: '油田地帯の軍事占領開始',
            detail:
              '12月16日、英領ボルネオ北西部ミリ方面への上陸が始まり、油田地帯の確保へ進んだ。ここではミリ周辺の拠点状態だけを示し、ボルネオ全体の占領範囲は表さない。',
          },
        },
        {
          id: 'thailand-alliance-1941',
          geometry: { type: 'Point', coordinates: [100.50, 13.75] },
          properties: {
            category: 'alliance-established',
            marker: '盟',
            label: 'タイ（バンコク）',
            labelPlacement: 'left',
            year: '1941-12-21',
            eventDate: '1941-12-21',
            localDate: '1941-12-21 Thailand',
            status: '国家間同盟成立',
            detail:
              '12月8日の日本軍通過容認を経て、12月21日に日本とタイは同盟条約を締結した。タイ政府は条約主体として存続しており、香港・ウェーク等の軍事占領とは制度類型が異なる。',
          },
        },
      ],
    },
  ],
  layers: [
    {
      id: 'a43-opening-theaters-status',
      datasetId: 'a43-opening-theaters-status-1941',
      categoryProperty: 'category',
      categories: [
        'raid-completed',
        'campaign-ongoing',
        'occupation-established',
        'alliance-established',
      ],
    },
  ],
  legend: [
    {
      value: 'raid-completed',
      label: '初撃後・占領へ移らず',
      marker: '撃',
      color: '#725a48',
    },
    {
      value: 'campaign-ongoing',
      label: '12月25日時点で戦闘継続',
      marker: '戦',
      color: '#7a6436',
    },
    {
      value: 'occupation-established',
      label: '12月25日までに軍事占領成立',
      marker: '占',
      color: '#7a4545',
    },
    {
      value: 'alliance-established',
      label: '国家間同盟成立',
      marker: '盟',
      color: '#4f6570',
    },
  ],
  auditState: {
    dataAudit: 'passed',
    styleAudit: 'passed',
    visualAudit: 'not-required-reused-pattern',
    notes: [
      'A43 map necessityはadopted / high。本文だけでは、ハワイからマレー・香港・ルソン・グアム・ウェーク・ボルネオまで、同じ12月に複数戦域が同時進行した距離感を把握しにくい。',
      'A42が11月の集結・出撃準備を扱うのに対し、A43は12月8日以後の実戦開始と12月25日時点の状態分岐を扱い、主題を分離した。',
      '12月25日時点の状態を「初撃後」「戦闘継続」「軍事占領成立」「国家間同盟成立」に分け、タイを軍事占領地と同じカテゴリへ入れなかった。',
      'Point中心とし、海上航路・進攻路・戦線・占領範囲のLineString / Polygonは作成していない。これにより実航路や面支配の精度を過剰主張しない。',
      '真珠湾は現地時間12月7日／日本時間12月8日を属性で併記し、他戦域の日付と機械的に同一視しない。',
      'フィリピン・マレーは12月25日時点で戦闘継続中とし、1942年の占領結果をこの時点へ逆投影しない。',
      'Style Auditではカテゴリごとに記号・凡例を分け、Point sizeで兵力・被害・重要度を表現しない。',
      'A36 matsuoka-parallel-diplomacy-1941 および A42 final-diplomacy-operational-preparation-1941 と同じThematicMap point-only表示、ラベル、凡例、popup/touch interaction、広域zoom設計を再利用し、新しいinteractionやtime-slice UIを導入しない。',
      '変更はPoint feature・初期表示・ラベル・属性値に限定されるため、MAP_AUDIT_STANDARDのpoint-only再利用例外を適用し、個別Human Visual Auditを省略する。',
    ],
  },
}
