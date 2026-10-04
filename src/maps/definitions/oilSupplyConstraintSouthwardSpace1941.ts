import type { HistoricalMapDefinition } from '../schema.ts'

export const oilSupplyConstraintSouthwardSpace1941Map: HistoricalMapDefinition = {
  id: 'oil-supply-constraint-southward-space-1941',
  title: '1941年夏の南方資源空間：基地前進と石油供給制約',
  historicalQuestion:
    '南部仏印へ軍事的位置を前進させた日本は、なぜ蘭領東インドの石油へ地理的に近づきながら、平時の石油調達経路をむしろ失っていったのか。',
  readingNote:
    '蘭領東インドから日本への石油調達関係と、南部仏印の基地位置を同じ画面で比較する模式図。石油の線は個別タンカーの航跡・固定航路・輸送距離を示さず、蘭印から日本へ平時に石油が供給されていた関係を説明するための模式線である。7月28日以後の表示は、蘭印の凍結規則、輸出許可、支払条件が重なって石油引渡しが実質的に止まった状態を示す。米国の凍結統制は蘭印石油取引で広く使われたドル決済にも影響したが、金融制度を地理的な「包囲線」と誤認させないため米国からの線は描かない。サイゴン・カムラン湾は軍事的位置の南進を読む参照点で、石油積出港や資源産地を意味しない。背景地図・道路・国境は現代のOpenStreetMapで、1941年の政治境界ではない。',
  status: 'draft',
  period: { startYear: 1941, endYear: 1941 },
  initialView: {
    center: [123.0, 17.5],
    zoom: 3.15,
    minZoom: 1.25,
  },
  timeSlices: [
    {
      id: 'after-freeze',
      label: '7月28日以後',
      description:
        '蘭印の凍結規則発動後。事前支払済みの一隻分などを除き石油引渡しが止まり、輸出許可・決済・船舶条件が供給を拘束する。',
    },
    {
      id: 'before-freeze',
      label: '7月28日以前',
      description:
        '6月1日から7月28日まで、蘭印から日本へ鉱油80,800トンが輸出された。線はその供給関係を示す模式線で、個別航路ではない。',
    },
  ],
  datasets: [
    {
      id: 'a39-oil-supply-links-1941',
      provenance: {
        sourceId: 'a39-oil-supply-links-1941',
        title: '1941年夏の蘭領東インド―日本間石油供給関係から作成した模式線',
        institution: 'jpn-history-decade',
        url: 'https://history.state.gov/historicaldocuments/frus1941v04/d711',
        sourceType: 'derived',
        license:
          'Site-authored schematic LineStrings derived from U.S. Department of State FRUS records. No historical shipping-route geometry is copied or claimed.',
        derivedFromSourceIds: [
          'frus-nei-freeze-19410728',
          'frus-nei-dollar-finance-19411122',
          'frus-nei-tarakan-oil-19410818',
        ],
        temporalCoverage: {
          from: '1941-06-01',
          to: '1941-08-18',
          basis: 'range',
          note:
            '6月1日〜7月28日の対日鉱油輸出、7月28日の蘭印凍結規則、その後の引渡し停止、および8月18日時点の蘭印石油輸出規格に関する同時代記録を用いる。',
        },
        spatialCoverage:
          '日本本土、蘭領東インド北東部（タラカン方面）および両者の平時石油調達関係',
        geometryConfidence: 'schematic',
        transformations: [
          'FRUS 1941, Far East, Vol. IV, doc. 711から、1941年6月1日〜7月28日に蘭印から日本へ鉱油80,800トンが輸出され、7月28日の凍結規則発動後は事前支払済み一隻分などを除き石油引渡しが止まったことを確認した。',
          'FRUS 1941, Far East, Vol. IV, doc. 726から、蘭印との石油取引がドル決済へ大きく依存し、米国の凍結統制も取引停止の要因になったという米国務省の後続整理を確認した。',
          'FRUS 1941, Far East, Vol. V, doc. 290から、8月18日時点の輸出規格検討でTarakan産の特殊原油が具体的に言及されていることを確認し、蘭印石油供給圏を読む代表地点としてタラカンを採用した。',
          'LineStringはタラカンから日本側到着域までを海上に折った説明用リンクである。中間waypointは陸地横断を避けて供給関係を読みやすくするための作図点で、史料で確認した寄港地・航路点ではない。航海日誌・海図・タンカー航跡をトレースしていない。',
          '凍結前後を同一geometry・別timeSliceとして表し、供給関係の地理ではなく制度状態が変わったことを比較できるようにした。',
        ],
        notes:
          '線の形状・長さ・経由地点から実航路、航行距離、所要日数を測定しない。数量80,800トンは蘭印全体から日本への6月1日〜7月28日の集計であり、タラカン単独の輸出量ではない。',
      },
      allowedGeometryTypes: ['LineString'],
      requiredProperties: ['category', 'label', 'detail', 'timeSlice'],
      features: [
        {
          id: 'nei-japan-oil-link-after-freeze-1941',
          geometry: {
            type: 'LineString',
            coordinates: [
              [117.633, 3.300],
              [122.000, 3.600],
              [128.000, 5.300],
              [128.500, 10.000],
              [129.000, 17.000],
              [131.000, 24.000],
              [135.000, 30.000],
              [140.300, 33.800],
              [139.550, 34.850],
              [139.720, 35.150],
            ],
          },
          properties: {
            category: 'supply-constrained',
            timeSlice: 'after-freeze',
            label: '蘭印→日本の石油調達関係（凍結後・模式）',
            detail:
              '7月28日の蘭印凍結規則後、事前支払済み一隻分などを除いて石油引渡しが止まった。線は失われた平時調達関係を示し、実航路ではない。',
          },
        },
        {
          id: 'nei-japan-oil-link-before-freeze-1941',
          geometry: {
            type: 'LineString',
            coordinates: [
              [117.633, 3.300],
              [122.000, 3.600],
              [128.000, 5.300],
              [128.500, 10.000],
              [129.000, 17.000],
              [131.000, 24.000],
              [135.000, 30.000],
              [140.300, 33.800],
              [139.550, 34.850],
              [139.720, 35.150],
            ],
          },
          properties: {
            category: 'supply-active',
            timeSlice: 'before-freeze',
            label: '蘭印→日本の石油調達関係（凍結前・模式）',
            detail:
              '6月1日から7月28日まで蘭印から日本へ鉱油80,800トンが輸出されたという集計を、供給関係として模式的に結ぶ。個別タンカーの航跡ではない。',
          },
        },
      ],
    },
    {
      id: 'a39-resource-space-reference-points-1941',
      provenance: {
        sourceId: 'a39-resource-space-reference-points-1941',
        title: '石油供給制約と南部仏印基地位置を読むための代表地点',
        institution: 'jpn-history-decade',
        url: 'https://history.state.gov/historicaldocuments/frus1941v05/d290',
        sourceType: 'derived',
        license:
          'Historical roles are derived from FRUS and JACAR records. Coordinates are site-authored approximate representative points around current same-name places; no historical facility boundary is copied.',
        derivedFromSourceIds: [
          'frus-nei-tarakan-oil-19410818',
          'frus-nei-freeze-19410728',
          'frus-indochina-facilities-19410724',
          'jacar-southern-indochina-19410728',
        ],
        temporalCoverage: {
          from: '1941-07-24',
          to: '1941-08-18',
          basis: 'range',
          note:
            '南部仏印基地要求、実進駐、蘭印凍結と石油輸出条件の変化を比較するための代表地点。',
        },
        spatialCoverage:
          '日本本土、南部仏領インドシナ、蘭領東インド（バタヴィア・タラカン）',
        geometryConfidence: 'approximate',
        transformations: [
          'A38で監査済みのサイゴン・カムラン湾代表点を再利用し、7月24日時点の基地要求地点という意味を維持した。',
          'バタヴィアは蘭印政府の凍結・輸出管理を読む行政上の参照点として現在の同名都市周辺へ代表点を置いた。',
          'タラカンはFRUS doc. 290で日本向け輸出規格の検討対象となる特殊原油が具体的に言及されるため、蘭印石油供給圏の代表地点として現在の同名島・都市周辺へ概略配置した。',
          '日本側は個別の石油受入港を特定する地図ではないため、東京湾口付近の海上に「日本側到着域」の代表点を置き、港湾施設の正確な位置を主張しない。',
        ],
        notes:
          '代表点の役割は制度・資源・軍事位置の相対配置を読むこと。油田範囲、基地境界、港湾施設、タンカー積出埠頭の測定には使わない。',
      },
      allowedGeometryTypes: ['Point'],
      requiredProperties: ['category', 'marker', 'label', 'labelPlacement', 'year', 'detail'],
      features: [
        {
          id: 'japan-oil-demand-reference-1941',
          geometry: { type: 'Point', coordinates: [139.720, 35.150] },
          properties: {
            category: 'japan-endpoint',
            marker: '日',
            label: '日本側到着域（東京湾口・代表）',
            labelPlacement: 'left',
            year: '1941',
            detail:
              '蘭印から日本への石油調達関係の日本側代表点。東京湾口付近の海上に置いた説明用地点で、特定の製油所・油槽所・荷揚港を示さない。',
          },
        },
        {
          id: 'tarakan-oil-reference-1941',
          geometry: { type: 'Point', coordinates: [117.633, 3.300] },
          properties: {
            category: 'oil-source',
            marker: '油',
            label: 'タラカン',
            labelPlacement: 'right',
            year: '1941-08',
            detail:
              '蘭領東インドの石油供給圏を読む代表地点。8月18日付FRUSは、日本向け輸出規格の検討でTarakan産の特殊原油を具体的に言及する。表示点は油田・積出施設の正確な位置ではない。',
          },
        },
        {
          id: 'batavia-control-reference-1941',
          geometry: { type: 'Point', coordinates: [106.8456, -6.2088] },
          properties: {
            category: 'control-node',
            marker: '制',
            label: 'バタヴィア',
            labelPlacement: 'right',
            year: '1941-07-28',
            detail:
              '蘭領東インド政府の行政中心。7月28日の凍結規則とその後の輸出許可運用を読む制度上の参照点で、石油産地や積出港を意味しない。',
          },
        },
        {
          id: 'saigon-southward-position-1941',
          geometry: { type: 'Point', coordinates: [106.6297, 10.8231] },
          properties: {
            category: 'southern-base',
            marker: '南',
            label: 'サイゴン',
            labelPlacement: 'left',
            year: '1941-07',
            detail:
              'A38で確認した南部仏印の主要基地要求地点。日本軍の軍事的位置が南へ前進したことを、蘭印石油供給圏との相対配置で読むため再掲する。',
          },
        },
        {
          id: 'cam-ranh-southward-position-1941',
          geometry: { type: 'Point', coordinates: [109.1591, 11.9214] },
          properties: {
            category: 'southern-base',
            marker: '南',
            label: 'カムラン湾',
            labelPlacement: 'right',
            year: '1941-07',
            detail:
              'A38で確認した南部仏印の海軍基地要求地点。軍事的な南方接近と、平時の資源調達能力が別問題だったことを比較する参照点。',
          },
        },
      ],
    },
  ],
  layers: [
    {
      id: 'a39-oil-supply-links',
      datasetId: 'a39-oil-supply-links-1941',
      categoryProperty: 'category',
      categories: ['supply-constrained', 'supply-active'],
    },
    {
      id: 'a39-resource-reference-points',
      datasetId: 'a39-resource-space-reference-points-1941',
      categoryProperty: 'category',
      categories: ['japan-endpoint', 'oil-source', 'control-node', 'southern-base'],
    },
  ],
  legend: [
    {
      value: 'supply-constrained',
      label: '7月28日以後：蘭印→日本の石油調達関係（停止・模式）',
      marker: '線',
      color: '#7b4e45',
      kind: 'line',
      lineStyle: 'dashed',
    },
    {
      value: 'supply-active',
      label: '7月28日以前：蘭印→日本の石油調達関係（模式）',
      marker: '線',
      color: '#426d78',
      kind: 'line',
      lineStyle: 'dashed',
    },
    { value: 'oil-source', label: '蘭印石油供給圏の代表地点', marker: '油', color: '#6f5a3a' },
    { value: 'control-node', label: '凍結・輸出管理の行政参照点', marker: '制', color: '#435f69' },
    { value: 'southern-base', label: '南部仏印の基地要求地点', marker: '南', color: '#7d4b3a' },
    { value: 'japan-endpoint', label: '日本側到着域の代表点', marker: '日', color: '#4f5e70' },
  ],
  auditState: {
    dataAudit: 'passed',
    styleAudit: 'passed',
    visualAudit: 'pending-human',
    notes: [
      'A39 map necessityはadopted / high。A38の基地位置再掲ではなく、南部仏印への軍事的前進と平時石油調達ネットワークの閉塞が逆方向に進んだことを主題とする。',
      'Data Auditでは、FRUS doc. 711の6月1日〜7月28日の蘭印対日鉱油80,800トンと凍結後の引渡し停止を供給関係の時点根拠に用いた。',
      'FRUS doc. 726は後続の米国務省整理として、蘭印石油取引がドル決済へ大きく依存し米国の凍結統制も停止要因だったことを確認するため使用した。金融制度自体を地理的な線として描いていない。',
      'FRUS doc. 290のTarakan言及を蘭印石油供給圏の代表地点選定に用いたが、80,800トンをタラカン単独の輸出量とはしていない。',
      'LineStringはタラカン―日本側到着域の供給関係を示す海上模式リンクへ修正した。中間waypointは陸地貫通を避ける作図点で、実タンカー航路・距離・所要時間・寄港地を表さない。',
      'A38のサイゴン・カムラン湾pointを同じ意味で再利用し、軍事的接近と経済的アクセスを別のカテゴリとして比較できるようにした。',
      'Style Auditでは模式線を破線とし、凍結前後をtime sliceで切り替える。数量を線幅へ符号化せず、集計定義の違いによる量的誤読を避けた。',
      'LineStringとtime sliceを含むためHuman Visual Auditは省略せずpending-human。Desktop / Tablet・Touch / Mobile、zoom、legend、time切替、ラベル重なり、模式線が実航路・侵攻線に見えないことを実表示で確認する。',
    ],
  },
}
