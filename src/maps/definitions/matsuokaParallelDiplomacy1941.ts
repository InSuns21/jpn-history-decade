import type { HistoricalMapDefinition } from '../schema.ts'

export const matsuokaParallelDiplomacy1941Map: HistoricalMapDefinition = {
  id: 'matsuoka-parallel-diplomacy-1941',
  title: '1941年3〜4月：松岡訪欧と並行外交の主要都市',
  historicalQuestion:
    '松岡外相、野村駐米大使、東京の政府・統帥部が別々の都市で外交情報を持ったことは、4月の日米諒解案をめぐる政府内調整にどう関係したのか。',
  readingNote:
    '1941年3月12日〜4月22日の外交理解に必要な5都市を代表点で示す。松岡の正確な鉄道・航空経路、途中停車地、国境通過地点は描いていない。モスクワは往路と帰路で役割が変わったため同じ点の説明内で時系列を分ける。背景地図・国境は現代のOpenStreetMapであり、1941年の政治境界を示すものではない。',
  status: 'published',
  period: { startYear: 1941, endYear: 1941 },
  initialView: {
    center: [68, 45],
    zoom: 1.15,
  },
  datasets: [
    {
      id: 'matsuoka-parallel-diplomacy-points-1941',
      provenance: {
        sourceId: 'a36-matsuoka-parallel-diplomacy-points-1941',
        title: '1941年3〜4月の松岡訪欧・日ソ交渉・日米交渉の主要都市から作成した代表点',
        institution: 'jpn-history-decade',
        sourceType: 'derived',
        license:
          'Historical dates, cities, and diplomatic roles are derived from JACAR and Diplomatic Archives of Japan materials. Coordinates are site-authored approximate city-center representative points; no historical route geometry is copied.',
        derivedFromSourceIds: [
          'jacar-matsuoka-europe-trip-19410312',
          'mofa-tripartite-soviet-neutrality-volume1',
          'jacar-soviet-japanese-neutrality-19410413',
          'jacar-us-japan-draft-understanding-19410416',
          'jacar-liaison-conference-19410418',
          'jacar-liaison-conference-19410422',
        ],
        temporalCoverage: {
          from: '1941-03-12',
          to: '1941-04-22',
          basis: 'range',
          note:
            '松岡外相の出発から帰国までに、枢軸・対ソ外交、対米対話、東京の政府内調整が並行した期間。',
        },
        spatialCoverage: '東京、モスクワ、ベルリン、ローマ、ワシントンD.C.',
        geometryConfidence: 'approximate',
        transformations: [
          'JACAR・外務省資料から、松岡が東京から出発し、往復でモスクワを経由してベルリン・ローマを訪れたことを確認した。',
          'JACARの日米交渉資料から、同期間に野村吉三郎駐米大使がワシントンでハル国務長官との対話を続けたことを確認した。',
          '各都市は現在の市街地中心付近へ代表点として配置し、外務省・大使館・駅・会談建物の厳密な歴史座標は主張しない。',
          '移動経路を推定するLineStringは作らず、都市ごとの役割と時系列をpopup属性で示す。',
        ],
        notes:
          '距離・経路測定用ではない。東京・ワシントン・欧州・モスクワへ情報と権限が分散していたことを読み取るための概略地図。',
      },
      allowedGeometryTypes: ['Point'],
      requiredProperties: [
        'category',
        'marker',
        'label',
        'labelPlacement',
        'year',
        'detail',
      ],
      features: [
        {
          id: 'tokyo-policy-center-1941',
          geometry: { type: 'Point', coordinates: [139.6917, 35.6895] },
          properties: {
            category: 'policy-center',
            marker: '政',
            label: '東京',
            labelPlacement: 'right',
            year: '1941-03-12〜04-22',
            detail:
              '近衛内閣、外務省本省、陸海軍、大本営政府連絡懇談会が政策調整を行った中心。4月18日に日米諒解案を検討し、松岡帰国後に態度を再調整した。',
          },
        },
        {
          id: 'moscow-matsuoka-1941',
          geometry: { type: 'Point', coordinates: [37.6173, 55.7558] },
          properties: {
            category: 'matsuoka-trip',
            marker: '松',
            label: 'モスクワ',
            labelPlacement: 'right',
            year: '1941-03 / 04-13',
            detail:
              '往路では四国協商構想と対ソ国交調整を探り、帰路には日ソ二国間交渉へ焦点を移した。4月13日に日ソ中立条約を調印。',
          },
        },
        {
          id: 'berlin-matsuoka-1941',
          geometry: { type: 'Point', coordinates: [13.405, 52.52] },
          properties: {
            category: 'matsuoka-trip',
            marker: '松',
            label: 'ベルリン',
            labelPlacement: 'right',
            year: '1941-03',
            detail:
              '松岡がヒトラー、リッベントロップらと会談し、三国同盟、対英政策、欧州情勢、独ソ関係を直接確認した。',
          },
        },
        {
          id: 'rome-matsuoka-1941',
          geometry: { type: 'Point', coordinates: [12.4964, 41.9028] },
          properties: {
            category: 'matsuoka-trip',
            marker: '松',
            label: 'ローマ',
            labelPlacement: 'left',
            year: '1941-03〜04',
            detail:
              '松岡がイタリア側首脳と会談した訪欧先。ベルリン訪問と合わせ、三国同盟国との直接外交を行った。',
          },
        },
        {
          id: 'washington-nomura-1941',
          geometry: { type: 'Point', coordinates: [-77.0369, 38.9072] },
          properties: {
            category: 'parallel-channel',
            marker: '野',
            label: 'ワシントンD.C.',
            labelPlacement: 'left',
            year: '1941-03〜04',
            detail:
              '野村吉三郎駐米大使がハル国務長官との対話を継続。4月16日、日米諒解案を交渉の出発点へ接続するため日本政府の正式訓令が課題になった。',
          },
        },
      ],
    },
  ],
  layers: [
    {
      id: 'matsuoka-parallel-diplomacy-points-1941',
      datasetId: 'matsuoka-parallel-diplomacy-points-1941',
      categoryProperty: 'category',
      categories: ['policy-center', 'matsuoka-trip', 'parallel-channel'],
    },
  ],
  legend: [
    { value: 'policy-center', label: '政府・統帥部の政策調整', marker: '●', color: '#5f4030' },
    { value: 'matsuoka-trip', label: '松岡外相の訪問都市', marker: '◆', color: '#365d70' },
    { value: 'parallel-channel', label: '並行する対米外交', marker: '■', color: '#69602e' },
  ],
  auditState: {
    dataAudit: 'passed',
    styleAudit: 'passed',
    visualAudit: 'not-required-reused-pattern',
    notes: [
      'A36はadopted / medium。外相が欧州・モスクワ、駐米大使がワシントン、政府・統帥部が東京に分かれていた空間的配置が、4月18日の「松岡帰国待ち」という意思決定制約を本文より直感的に示す。',
      '史料で確認できる都市と外交上の役割に限定し、鉄道・航空の正確な旅程線、途中停車地、会談建物の厳密座標は復元しない。',
      'モスクワは往路と帰路の両方を一つの代表点で扱い、popup本文で時系列と役割の変化を分離した。',
      '既存ThematicMapのpoint-only表示、点記号、ラベル、popup/touch interactionのみを再利用し、新しいLineString / Polygon / interactionを導入しない。',
      'point-only再利用パターンとしてMAP_AUDIT_STANDARDの例外要件を満たすため、個別Human Visual Auditを省略する。',
    ],
  },
}
