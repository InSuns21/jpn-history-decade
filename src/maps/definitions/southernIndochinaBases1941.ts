import type { HistoricalMapDefinition } from '../schema.ts'

export const southernIndochinaBases1941Map: HistoricalMapDefinition = {
  id: 'southern-indochina-bases-1941',
  title: '1941年7月の南部仏印基地要求と南方の相対位置',
  historicalQuestion:
    'サイゴン・カムラン湾で要求された軍事施設は、北部仏印とマレー半島・蘭印・フィリピンの間でどのような位置にあり、なぜ南部仏印進駐が軍事的な「南への前進」と受け止められたのか。',
  readingNote:
    '1941年7月23〜24日の米国外交文書に現れる基地占領決定と施設要求を、現在の同名都市・湾周辺の代表点で示す。7月24日付報告はカムラン湾の海軍基地、サイゴンの軍・海軍施設と軍用飛行場、コーチシナ・カンボジアの8航空基地を挙げるが、8基地の個別所在地はこの史料だけでは確定できないため点を作っていない。北部仏印とシンガポール・バタヴィア・マニラは距離感を読むための参照点で、日本側が7月24日時点で各地点への攻撃・占領を決定したことを示さない。点は1941年の施設中心・軍港境界を復元した座標ではない。背景地図・道路・国境は現代のOpenStreetMapで、1941年の歴史境界ではない。',
  status: 'published',
  period: { startYear: 1941, endYear: 1941 },
  initialView: {
    center: [111.0, 7.6],
    zoom: 3.35,
  },
  datasets: [
    {
      id: 'southern-indochina-bases-reference-points-1941',
      provenance: {
        sourceId: 'a38-southern-indochina-bases-reference-points-1941',
        title: '南部仏印基地要求と周辺地域の相対配置から作成した代表点',
        institution: 'jpn-history-decade',
        sourceType: 'derived',
        license:
          'Historical roles are derived from U.S. Department of State FRUS documents and JACAR records. Coordinates are site-authored approximate representative points; no third-party historical facility geometry is copied.',
        derivedFromSourceIds: [
          'frus-indochina-bases-19410723',
          'frus-indochina-facilities-19410724',
          'jacar-liaison-19410724',
        ],
        temporalCoverage: {
          from: '1941-07-23',
          to: '1941-07-24',
          basis: 'range',
          note:
            '南部仏印の基地占領決定が同時代外交報告で観察され、7月24日報告で主要施設要求の概略が伝えられた時点を示す。',
        },
        spatialCoverage:
          '北部・南部フランス領インドシナ、英領マレー方面、蘭領東インド、米領フィリピン',
        geometryConfidence: 'approximate',
        transformations: [
          'FRUS 1941, Far East, Vol. V, doc. 235から、7月23日時点で日本による仏印基地占領決定が外交筋に観察されていたことを確認した。',
          '同 doc. 237から、7月24日時点の要求施設としてカムラン湾の海軍基地、サイゴンの軍・海軍施設と軍用飛行場、コーチシナ・カンボジアの8航空基地が報告されたことを確認した。',
          'JACARの7月24日第41回大本営政府連絡会議資料を、南部仏印進駐細目が日本政府・統帥部側でも実施議題になっていた時点確認に用いた。',
          '史料で固有地点を確認できるサイゴンとカムラン湾だけを基地要求地点として採用し、個別所在地を確認できない8航空基地は点へ割り当てなかった。',
          '北部仏印のハノイ・海防と周辺地域のシンガポール・バタヴィア・マニラは、相対配置を読む参照点として現在の同名都市周辺の代表座標へ概略配置した。',
        ],
        notes:
          '相対配置の理解専用。点間距離、基地の正確な位置・範囲、作戦半径、進軍経路、占領範囲の測定には使わない。7月28日以後の実際の部隊配備はこのデータに含めない。',
      },
      allowedGeometryTypes: ['Point'],
      requiredProperties: ['category', 'marker', 'label', 'labelPlacement', 'year', 'detail'],
      features: [
        {
          id: 'hanoi-reference-1941',
          geometry: { type: 'Point', coordinates: [105.8542, 21.0285] },
          properties: {
            category: 'northern-reference',
            marker: '北',
            label: '河内（ハノイ）',
            labelPlacement: 'left',
            year: '1941',
            detail:
              '仏印総督府の行政中心。南部仏印のサイゴン・カムラン湾が北部仏印よりどれだけ南に位置するかを比較するための参照点。',
          },
        },
        {
          id: 'haiphong-reference-1941',
          geometry: { type: 'Point', coordinates: [106.683, 20.865] },
          properties: {
            category: 'northern-reference',
            marker: '北',
            label: '海防（ハイフォン）',
            labelPlacement: 'right',
            year: '1941',
            detail:
              '北部仏印の主要港。1940年の北部仏印進駐で重要だった北側港湾と、1941年7月に要求された南部基地地点の位置差を読むための参照点。',
          },
        },
        {
          id: 'saigon-demand-1941',
          geometry: { type: 'Point', coordinates: [106.6297, 10.8231] },
          properties: {
            category: 'southern-demand',
            marker: '南',
            label: 'サイゴン',
            labelPlacement: 'left',
            year: '1941-07-24',
            detail:
              '7月24日付FRUS報告が、日本側に認められた要求施設として軍・海軍施設と軍用飛行場を挙げた南部仏印の中心都市。点は施設そのものの正確な座標ではない。',
          },
        },
        {
          id: 'cam-ranh-demand-1941',
          geometry: { type: 'Point', coordinates: [109.1591, 11.9214] },
          properties: {
            category: 'southern-demand',
            marker: '南',
            label: 'カムラン湾',
            labelPlacement: 'right',
            year: '1941-07-24',
            detail:
              '7月24日付FRUS報告が、日本側に認められた要求施設として海軍基地を挙げた湾。点は湾内の特定施設・軍港境界を示さない。',
          },
        },
        {
          id: 'singapore-reference-1941',
          geometry: { type: 'Point', coordinates: [103.8198, 1.3521] },
          properties: {
            category: 'regional-reference',
            marker: '周',
            label: 'シンガポール',
            labelPlacement: 'left',
            year: '1941',
            detail:
              '英領マレー方面との距離感を示す参照点。A38は7月24日時点の相対配置を示すもので、この地点への日本側作戦決定を表す点ではない。',
          },
        },
        {
          id: 'batavia-reference-1941',
          geometry: { type: 'Point', coordinates: [106.8456, -6.2088] },
          properties: {
            category: 'regional-reference',
            marker: '周',
            label: 'バタヴィア（現ジャカルタ）',
            labelPlacement: 'right',
            year: '1941',
            detail:
              '蘭領東インドの行政中心を示す参照点。南部仏印が蘭印方面へ近づく地理的位置を読むために置き、資源産地や日本側の個別作戦目標を代表させない。',
          },
        },
        {
          id: 'manila-reference-1941',
          geometry: { type: 'Point', coordinates: [120.9842, 14.5995] },
          properties: {
            category: 'regional-reference',
            marker: '周',
            label: 'マニラ',
            labelPlacement: 'right',
            year: '1941',
            detail:
              '米領フィリピン側との相対位置を示す参照点。南部仏印の基地利用が米国側の安全保障認識に影響する地理的背景を読むために置く。',
          },
        },
      ],
    },
  ],
  layers: [
    {
      id: 'southern-indochina-bases-reference-points-1941',
      datasetId: 'southern-indochina-bases-reference-points-1941',
      categoryProperty: 'category',
      categories: ['northern-reference', 'southern-demand', 'regional-reference'],
    },
  ],
  legend: [
    { value: 'northern-reference', label: '北部仏印の比較点', marker: '●', color: '#365d70' },
    { value: 'southern-demand', label: '7月24日までに報告された南部基地要求地点', marker: '◆', color: '#7d4b3a' },
    { value: 'regional-reference', label: '周辺地域の参照点', marker: '○', color: '#75653b' },
  ],
  auditState: {
    dataAudit: 'passed',
    styleAudit: 'passed',
    visualAudit: 'not-required-reused-pattern',
    notes: [
      'A38 map necessityはadopted / high。北部仏印から南部仏印への位置変化と英米蘭地域への接近は、本文だけより相対配置地図で明確になる。',
      'FRUS doc. 237は7月24日時点の同時代報告で「roughly as follows」と施設要求の概略を伝えるため、確定した施設一覧・正確な配備図として扱っていない。',
      'サイゴンとカムラン湾は史料で固有地点を確認できるため基地要求地点として採用した。コーチシナ・カンボジアの8航空基地は個別所在地を同史料から確認できないため点を生成していない。',
      'ハノイ・海防・シンガポール・バタヴィア・マニラは相対配置の参照点で、日本側の7月24日時点の作戦目標・占領決定を示すカテゴリから分離した。',
      '7月28日以後の実進駐・部隊配置・進軍経路を前倒しせず、7月23〜24日に確認できる決定・要求段階へtemporalCoverageを限定した。',
      'thai-indochina-mediation-1941等と同じThematicMapのpoint-only表示、ラベル、凡例、popup/touch interactionを再利用し、新しい線・polygon・time slice・interaction・表示ロジックを導入しない。',
      '変更点がpoint featureの位置・ラベル・属性値と既存point凡例カテゴリの内容だけに収まるため、MAP_AUDIT_STANDARDのpoint-only再利用例外を適用し、個別Human Visual Auditを省略する。',
    ],
  },
}
