import type { HistoricalMapDefinition } from '../schema.ts'

export const february26Tokyo1936Map: HistoricalMapDefinition = {
  id: 'february-26-tokyo-1936',
  title: '二・二六事件：東京の政治・軍事中枢と部隊拠点',
  historicalQuestion:
    '決起部隊の兵営と襲撃・占拠の主要地点はどの程度近接し、永田町・三宅坂への政治・軍事中枢の集中は事件の展開にどう関係したのか。',
  readingNote:
    '1936年2月26日の事件理解に必要な代表点だけを示す。決起部隊の移動経路、占拠範囲、警戒線は描いていない。高橋是清邸は現在の高橋是清翁記念公園が旧邸宅跡であることを公的資料で確認した。首相官邸と三宅坂の点は施設・一帯の概略位置で、1936年の建物中心座標を測量復元したものではない。背景地図・道路・行政境界は現代のOpenStreetMapである。',
  status: 'published',
  period: { startYear: 1936, endYear: 1936 },
  initialView: {
    center: [139.7367, 35.6718],
    zoom: 12.2,
  },
  datasets: [
    {
      id: 'february-26-tokyo-points-1936',
      provenance: {
        sourceId: 'a19-february-26-tokyo-points-1936',
        title: '二・二六事件の東京中心部主要地点から作成した代表点',
        institution: 'jpn-history-decade',
        sourceType: 'derived',
        license:
          'Historical roles and place identifications are derived from public materials of the National Archives of Japan, National Diet Library, Prime Minister\'s Office, and Minato City. Coordinates are site-authored approximate representative points; no historical map geometry is copied.',
        derivedFromSourceIds: [
          'archives-february-26-martial-law',
          'ndl-february-26-incident',
          'kantei-old-prime-ministers-residence',
          'minato-takahashi-residence',
          'minato-february-26-regiment-sites',
        ],
        temporalCoverage: {
          from: '1936-02-26',
          to: '1936-02-29',
          basis: 'range',
          note: '二・二六事件の襲撃・占拠・鎮圧局面に関係する東京中心部の代表点。',
        },
        spatialCoverage: '東京市麹町・赤坂・麻布周辺',
        geometryConfidence: 'approximate',
        transformations: [
          '国立公文書館・国立国会図書館の解説から、永田町・三宅坂が政治・軍事中枢の占拠地域だったことを確認した。',
          '首相官邸、高橋是清邸、歩兵第一・第三連隊兵舎について、現在地との対応を公的機関の解説で確認した。',
          '歴史的道路網、部隊移動経路、占拠範囲は生成せず、確認できる施設・一帯を現在の地理上へ代表点として概略配置した。',
        ],
        notes:
          '斎藤実邸・鈴木貫太郎邸・渡辺錠太郎邸など事件の全襲撃地点を網羅する地図ではない。位置精度と現在地対応を公的資料で確認できる地点、および史料が明示する三宅坂一帯に限定した。',
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
          id: 'prime-ministers-residence-1936',
          geometry: { type: 'Point', coordinates: [139.7445, 35.6732] },
          properties: {
            category: 'attack-target',
            marker: '●',
            label: '首相官邸',
            labelPlacement: 'right',
            year: '1936-02-26',
            detail:
              '岡田啓介首相の官邸が襲撃された。1929年竣工の旧官邸は後に敷地内で移築・改修されており、この点は1936年の建物中心を精密復元した座標ではない。',
          },
        },
        {
          id: 'miyakezaka-army-center-1936',
          geometry: { type: 'Point', coordinates: [139.7441, 35.6793] },
          properties: {
            category: 'occupied-center',
            marker: '◆',
            label: '三宅坂・陸軍中枢',
            labelPlacement: 'right',
            year: '1936-02-26',
            detail:
              '陸軍省・参謀本部などが集中した三宅坂一帯。国立公文書館・国立国会図書館は、永田町・三宅坂の政治・軍事中枢が占拠されたと説明している。',
          },
        },
        {
          id: 'takahashi-residence-1936',
          geometry: { type: 'Point', coordinates: [139.7300, 35.6736] },
          properties: {
            category: 'attack-target',
            marker: '●',
            label: '高橋是清邸',
            labelPlacement: 'left',
            year: '1936-02-26',
            detail:
              '高橋是清蔵相が自宅で殺害された。現在の高橋是清翁記念公園（赤坂七丁目3番39号）が邸宅跡である。',
          },
        },
        {
          id: 'first-infantry-regiment-1936',
          geometry: { type: 'Point', coordinates: [139.7316, 35.6681] },
          properties: {
            category: 'troop-base',
            marker: '■',
            label: '歩兵第一連隊',
            labelPlacement: 'right',
            year: '1936-02-26',
            detail:
              '事件に関係した部隊の兵舎があった地点。港区は現在の檜町公園を歩兵第一連隊跡地として案内している。',
          },
        },
        {
          id: 'third-infantry-regiment-1936',
          geometry: { type: 'Point', coordinates: [139.7264, 35.6653] },
          properties: {
            category: 'troop-base',
            marker: '■',
            label: '歩兵第三連隊',
            labelPlacement: 'left',
            year: '1936-02-26',
            detail:
              '事件に関係した部隊の兵舎があった地点。港区は現在の国立新美術館一帯を歩兵第三連隊兵舎跡地として案内している。',
          },
        },
      ],
    },
  ],
  layers: [
    {
      id: 'february-26-tokyo-points-1936',
      datasetId: 'february-26-tokyo-points-1936',
      categoryProperty: 'category',
      categories: ['attack-target', 'occupied-center', 'troop-base'],
    },
  ],
  legend: [
    { value: 'attack-target', label: '襲撃対象', marker: '●', color: '#5f4030' },
    { value: 'occupied-center', label: '占拠された政治・軍事中枢', marker: '◆', color: '#365d70' },
    { value: 'troop-base', label: '事件関係部隊の兵舎', marker: '■', color: '#69602e' },
  ],
  auditState: {
    dataAudit: 'passed',
    styleAudit: 'passed',
    visualAudit: 'not-required-reused-pattern',
    notes: [
      'A19は、永田町・三宅坂の政治・軍事中枢と赤坂・麻布の部隊拠点が近接していたことを本文より直感的に示せるためmap必要性をpassとした。',
      '移動経路・占拠範囲・警戒線は信頼できる再利用可能geometryを確保していないため実装しない。',
      '点は現在地対応または史料上の地域名から置いた代表点で、1936年の建物中心を測量復元したものではないため geometryConfidence=approximate とした。',
      'A12/A14/A16と同じThematicMapのpoint-only表示、点記号、ラベル、popup/touch interactionを再利用し、新しい線・polygon・interactionを導入しない。',
      'point-only再利用パターンとして、既確認の表示パターンを用いるため個別Human Visual Auditを省略する。',
    ],
  },
}
