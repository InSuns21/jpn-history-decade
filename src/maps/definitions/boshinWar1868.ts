import type { HistoricalMapDefinition } from '../schema.ts'

export const boshinWar1868Map: HistoricalMapDefinition = {
  id: 'boshin-war-1868-1869',
  title: '戊辰戦争の空間展開（1868–1869）',
  historicalQuestion:
    '新政府の軍事的・政治的支配は、京都周辺の政変からどのように東国・東北・箱館へ広がったのか。',
  readingNote:
    '主要局面の位置関係を読むための概略点地図であり、部隊の進軍路・戦線・支配境界を再現しない。各点は戦闘・政権移管・降伏などの代表地点を現在の地理上へ概略配置したもの。背景地図・海岸線は現代のOpenStreetMapで、1868–1869年の行政境界や海岸線を示さない。',
  status: 'published',
  period: { startYear: 1868, endYear: 1869 },
  initialView: {
    center: [138.7, 37.5],
    zoom: 4.25,
  },
  datasets: [
    {
      id: 'boshin-major-phases',
      provenance: {
        sourceId: 'jh10-boshin-official-synthesis',
        title: '戊辰戦争主要局面の概略位置',
        institution: 'jpn-history-decade',
        sourceType: 'derived',
        license:
          'Site-authored approximate coordinates; no third-party geometry copied. Source texts remain subject to each institution\'s terms.',
        derivedFromSourceIds: [
          'archives-boshin-war',
          'archives-boshin-start',
          'ndl-katsu-edo',
          'nagaoka-boshin',
          'fukushima-boshin',
          'hakodate-boshin',
        ],
        temporalCoverage: {
          from: '1868',
          to: '1869',
          basis: 'range',
          note: '鳥羽・伏見から江戸、北越・会津、箱館まで、戊辰戦争の主要局面を対象とする。',
        },
        spatialCoverage: '京都南部・東京・新潟・会津・箱館',
        geometryConfidence: 'approximate',
        transformations: [
          '国立公文書館・国立国会図書館・自治体資料から主要局面の歴史地名を抽出した。',
          '地点は現在の地理上の代表点へ概略配置した。',
          '戦場範囲、進軍路、戦線、藩境、個別部隊位置は復元していない。',
        ],
        notes:
          '点の並びは戦争の空間的拡大を説明するためのもので、各点間を直線的な進軍経路として読まない。',
      },
      allowedGeometryTypes: ['Point'],
      requiredProperties: ['category', 'marker', 'label', 'labelPlacement', 'year', 'detail'],
      features: [
        {
          id: 'toba-fushimi-1868',
          geometry: { type: 'Point', coordinates: [135.75, 34.94] },
          properties: {
            category: 'opening',
            marker: '始',
            label: '鳥羽・伏見',
            labelPlacement: 'right',
            year: '1868',
            detail:
              '京都南方で新政府側と旧幕府側が衝突し、戊辰戦争が始まった。点は鳥羽・伏見の広い戦場を代表する概略位置。',
          },
        },
        {
          id: 'edo-transfer-1868',
          geometry: { type: 'Point', coordinates: [139.7528, 35.6852] },
          properties: {
            category: 'transition',
            marker: '転',
            label: '江戸城',
            labelPlacement: 'bottom',
            year: '1868',
            detail:
              '勝海舟・西郷隆盛らの交渉を経て江戸城が新政府へ引き渡された。江戸開城後も上野などで戦闘は続いた。',
          },
        },
        {
          id: 'nagaoka-1868',
          geometry: { type: 'Point', coordinates: [138.853, 37.447] },
          properties: {
            category: 'northern',
            marker: '北',
            label: '長岡',
            labelPlacement: 'left',
            year: '1868',
            detail:
              '北越戦争の主要戦場。新政府軍と長岡藩などの軍勢が長岡城周辺で激しく戦った。',
          },
        },
        {
          id: 'aizu-wakamatsu-1868',
          geometry: { type: 'Point', coordinates: [139.9298, 37.4879] },
          properties: {
            category: 'northern',
            marker: '北',
            label: '会津若松',
            labelPlacement: 'right',
            year: '1868',
            detail:
              '奥羽越列藩同盟をめぐる戦争の主要地点。1868年9月、会津藩主松平容保が若松城を明け渡した。',
          },
        },
        {
          id: 'goryokaku-1869',
          geometry: { type: 'Point', coordinates: [140.7569, 41.7969] },
          properties: {
            category: 'final',
            marker: '終',
            label: '箱館・五稜郭',
            labelPlacement: 'right',
            year: '1869',
            detail:
              '旧幕府脱走軍の拠点。1869年5月に榎本武揚らが降伏し、戊辰戦争の大規模戦闘が終結した。',
          },
        },
      ],
    },
  ],
  layers: [
    {
      id: 'boshin-major-phases',
      datasetId: 'boshin-major-phases',
      categoryProperty: 'category',
      categories: ['opening', 'transition', 'northern', 'final'],
    },
  ],
  legend: [
    { value: 'opening', label: '戦争の開始', marker: '始', color: '#7d3d34' },
    { value: 'transition', label: '江戸の政権移管', marker: '転', color: '#355f77' },
    { value: 'northern', label: '北越・東北の戦闘', marker: '北', color: '#735f2b' },
    { value: 'final', label: '箱館戦争・終結', marker: '終', color: '#37624f' },
  ],
  auditState: {
    dataAudit: 'passed',
    styleAudit: 'passed',
    visualAudit: 'passed',
    notes: [
      '主要局面の歴史地名・時期は国立公文書館、国立国会図書館、長岡市、福島県、函館市の資料で照合した。',
      '戦線・進軍路を史料以上の精度で描かないためLineStringを使用せず、代表地点の点群だけで空間展開を示す。',
      '座標は代表地点の概略位置でgeometryConfidence=approximateとした。',
      'Data Audit / Style Auditは実装時にpassed。2026-09-26、GitHub Pages上の実画面についてHuman Visual Auditで表示・ラベル・popup・pan / zoomを確認しpassedとした。',
    ],
  },
}
