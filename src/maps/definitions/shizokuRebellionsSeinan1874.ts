import type { HistoricalMapDefinition } from '../schema.ts'

export const shizokuRebellionsSeinan1874Map: HistoricalMapDefinition = {
  id: 'shizoku-rebellions-seinan-1874-1877',
  title: '士族反乱と西南戦争の空間展開（1874–1877）',
  historicalQuestion:
    '政府への武力的な異議申し立てはどの地域で起こり、西南戦争では戦場がどのように九州内を移ったのか。',
  readingNote:
    '代表地点の位置関係を読むための概略点地図であり、反乱勢力の支配範囲・進軍路・戦線を再現しない。各点は公的資料で確認できる事件・戦闘の代表地点を、現在の地理上の目印へ概略配置したもの。背景地図・海岸線・道路は現代のOpenStreetMapで、1874–1877年の行政境界や交通網を示さない。',
  status: 'draft',
  period: { startYear: 1874, endYear: 1877 },
  initialView: {
    center: [131.15, 33.0],
    zoom: 5.15,
  },
  datasets: [
    {
      id: 'shizoku-rebellions-seinan-major-points',
      provenance: {
        sourceId: 'jh12-a5-official-synthesis',
        title: '1874–1877年の士族反乱・西南戦争主要地点の概略位置',
        institution: 'jpn-history-decade',
        sourceType: 'derived',
        license:
          'Site-authored approximate coordinates; no third-party geometry copied. Source texts remain subject to each institution\'s terms.',
        derivedFromSourceIds: [
          'archives-saga-1874',
          'archives-rebellions',
          'archives-seinan-1877',
        ],
        temporalCoverage: {
          from: '1874',
          to: '1877',
          basis: 'range',
          note: '佐賀の乱、1876年の士族反乱、西南戦争の主要局面を対象とする。',
        },
        spatialCoverage: '佐賀・秋月・萩・熊本・田原坂・延岡・鹿児島',
        geometryConfidence: 'approximate',
        transformations: [
          '国立公文書館と自治体・公的文化施設の資料から、反乱・戦闘の代表的な歴史地名を抽出した。',
          '現存する城跡・城下・戦跡など現在の地理上で識別可能な代表地点へ概略配置した。',
          '進軍路、戦線、支配範囲、旧行政境界、個別部隊位置は復元していない。',
        ],
        notes:
          '重要度Aの地図として、佐賀城、秋月、萩、熊本城、田原坂、和田越、城山を公的資料でサンプル照合した。点の連なりを一本の進軍経路として読まない。',
      },
      allowedGeometryTypes: ['Point'],
      requiredProperties: ['category', 'marker', 'label', 'labelPlacement', 'year', 'detail'],
      features: [
        {
          id: 'saga-castle-1874',
          geometry: { type: 'Point', coordinates: [130.3009, 33.2454] },
          properties: {
            category: 'shizoku-rebellion',
            marker: '乱',
            label: '佐賀城',
            labelPlacement: 'left',
            year: '1874',
            detail:
              '佐賀の乱の主要地点。佐賀城では戦闘があり、二ノ丸・三ノ丸が焼失した。点は現在の佐賀城跡を代表する概略位置。',
          },
        },
        {
          id: 'akizuki-1876',
          geometry: { type: 'Point', coordinates: [130.6956, 33.4665] },
          properties: {
            category: 'shizoku-rebellion',
            marker: '乱',
            label: '秋月',
            labelPlacement: 'top',
            year: '1876',
            detail:
              '秋月の乱の出発地域。秋月士族が挙兵し、豊津方面へ進んだ。点は旧秋月城下を代表する概略位置。',
          },
        },
        {
          id: 'hagi-1876',
          geometry: { type: 'Point', coordinates: [131.3995, 34.4100] },
          properties: {
            category: 'shizoku-rebellion',
            marker: '乱',
            label: '萩',
            labelPlacement: 'right',
            year: '1876',
            detail:
              '萩の乱の中心地。前原一誠らが旧萩藩校明倫館を拠点に挙兵した。点は萩城下の代表地点を概略配置したもの。',
          },
        },
        {
          id: 'kumamoto-castle-1876-1877',
          geometry: { type: 'Point', coordinates: [130.7058, 32.8062] },
          properties: {
            category: 'kumamoto-pivot',
            marker: '熊',
            label: '熊本・熊本城',
            labelPlacement: 'bottom',
            year: '1876・1877',
            detail:
              '1876年の神風連の変と、1877年西南戦争の熊本城籠城戦が重なる地点。1874年には熊本鎮台本営が城内へ移されていた。',
          },
        },
        {
          id: 'tabaruzaka-1877',
          geometry: { type: 'Point', coordinates: [130.6856, 32.9972] },
          properties: {
            category: 'seinan-war',
            marker: '戦',
            label: '田原坂',
            labelPlacement: 'right',
            year: '1877',
            detail:
              '西南戦争の主要激戦地の一つ。熊本城救援をめぐり政府軍と薩軍が激しく戦った。点は現在の田原坂戦跡周辺の概略位置。',
          },
        },
        {
          id: 'wadagoe-1877',
          geometry: { type: 'Point', coordinates: [131.662, 32.590] },
          properties: {
            category: 'seinan-war',
            marker: '戦',
            label: '延岡・和田越',
            labelPlacement: 'right',
            year: '1877',
            detail:
              '1877年8月の和田越の戦い。薩軍は敗れて北川方面へ退き、その後九州山地を経て鹿児島へ戻った。点は和田越周辺を代表する概略位置。',
          },
        },
        {
          id: 'shiroyama-1877',
          geometry: { type: 'Point', coordinates: [130.5530, 31.5962] },
          properties: {
            category: 'seinan-final',
            marker: '終',
            label: '鹿児島・城山',
            labelPlacement: 'left',
            year: '1877',
            detail:
              '西南戦争最後の局面。薩軍は城山に本営を置き、9月24日の戦闘で大規模な戦争が終結した。点は城山一帯の代表位置。',
          },
        },
      ],
    },
  ],
  layers: [
    {
      id: 'shizoku-rebellions-seinan-major-points',
      datasetId: 'shizoku-rebellions-seinan-major-points',
      categoryProperty: 'category',
      categories: ['shizoku-rebellion', 'kumamoto-pivot', 'seinan-war', 'seinan-final'],
    },
  ],
  legend: [
    { value: 'shizoku-rebellion', label: '士族反乱（1874・1876）', marker: '乱', color: '#7d3d34' },
    { value: 'kumamoto-pivot', label: '熊本（1876・1877）', marker: '熊', color: '#735f2b' },
    { value: 'seinan-war', label: '西南戦争の主要戦場', marker: '戦', color: '#355f77' },
    { value: 'seinan-final', label: '西南戦争の終結局面', marker: '終', color: '#37624f' },
  ],
  auditState: {
    dataAudit: 'passed',
    styleAudit: 'passed',
    visualAudit: 'pending-human',
    notes: [
      '佐賀城は佐賀市資料、秋月は朝倉市、萩は萩市、熊本城・田原坂は熊本市関係資料、和田越は延岡市、城山は鹿児島市の公的資料で代表地点を照合した。',
      '統一的に監査可能な進軍路geometryが得られないためLineStringを作らず、代表地点のPointのみを使用した。',
      '座標は現存する史跡・城下・戦跡の現在位置をもとにした概略代表点で、geometryConfidence=approximateとした。',
      'カテゴリは事件の重要度ではなく、1874/1876年の士族反乱、西南戦争、熊本での時期重複を区別するために用いる。',
      'Data Audit / Style Auditは実装時にpassed。Human Visual AuditはGitHub Pages上のdesktop / tablet-touch / mobile確認待ち。',
    ],
  },
}
