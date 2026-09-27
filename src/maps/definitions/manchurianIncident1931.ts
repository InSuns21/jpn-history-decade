import type { HistoricalMapDefinition } from '../schema.ts'

export const manchurianIncident1931Map: HistoricalMapDefinition = {
  id: 'manchurian-incident-1931',
  title: '満州事変 1931年9〜11月：主要地点の時系列',
  historicalQuestion:
    '柳条湖事件後、軍事行動と増援は中国東北部のどの方向へ広がったのか。',
  readingNote:
    '1931年9〜11月の主要4地点を日付付き代表点で示す。軍の進路線・前線・占領地域・国境は描いていない。点は出来事の厳密な戦闘位置ではなく、史料で確認できる地名を現在の地理上へ概略配置したもの。背景地図・国境・海岸線は現代のOpenStreetMapであり、1931年の政治境界ではない。',
  status: 'published',
  period: { startYear: 1931, endYear: 1931 },
  initialView: {
    center: [123.2, 43.4],
    zoom: 4.3,
  },
  datasets: [
    {
      id: 'manchurian-incident-points-1931',
      provenance: {
        sourceId: 'a16-manchurian-incident-points-1931',
        title: '1931年満州事変の主要地点・日付から作成した代表点',
        institution: 'jpn-history-decade',
        sourceType: 'derived',
        license:
          'Historical dates and place names are derived from public explanatory materials of JACAR and the Diplomatic Archives of Japan. Coordinates are site-authored approximate representative points; no historical map geometry is copied.',
        derivedFromSourceIds: [
          'jacar-manchurian-incident-1931',
          'mofa-shidehara-end-1931',
        ],
        temporalCoverage: {
          from: '1931-09-18',
          to: '1931-11-18',
          basis: 'range',
          note: '柳条湖事件からチチハル占領までの主要地点を対象とする。',
        },
        spatialCoverage: '中国東北部および鴨緑江周辺',
        geometryConfidence: 'approximate',
        transformations: [
          'JACAR・外務省外交史料館の解説から、JH27の状態遷移を空間的に示す4件を抽出した。',
          '柳条湖事件、朝鮮軍越境、錦州爆撃、チチハル占領の日付と地名を属性として付与した。',
          '歴史的な作戦進路・前線・占領地域は生成せず、各地名を現在の地理上の代表点へ概略配置した。',
        ],
        notes:
          '点間を結んでも実際の進軍路にはならない。特に朝鮮軍越境点は鴨緑江沿線の概略位置で、渡河地点の厳密な座標を主張しない。',
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
          id: 'liutiaohu-1931-09-18',
          geometry: { type: 'Point', coordinates: [123.45, 41.84] },
          properties: {
            category: 'trigger',
            marker: '●',
            label: '柳条湖・奉天',
            labelPlacement: 'right',
            year: '1931-09-18',
            detail:
              '柳条湖付近で満鉄線路が爆破され、関東軍が軍事行動を開始した。点は奉天北部の概略位置。',
          },
        },
        {
          id: 'yalu-crossing-1931-09-21',
          geometry: { type: 'Point', coordinates: [124.39, 40.13] },
          properties: {
            category: 'reinforcement',
            marker: '◆',
            label: '鴨緑江越境',
            labelPlacement: 'right',
            year: '1931-09-21',
            detail:
              '朝鮮軍が政府の事前承認を得ず満洲へ越境し、その後に内閣が追認した。点は鴨緑江沿線の概略位置。',
          },
        },
        {
          id: 'jinzhou-bombing-1931-10-08',
          geometry: { type: 'Point', coordinates: [121.13, 41.10] },
          properties: {
            category: 'air-attack',
            marker: '■',
            label: '錦州',
            labelPlacement: 'left',
            year: '1931-10-08',
            detail:
              '関東軍が錦州を爆撃した。JH27では不拡大方針と軍事行動拡大のずれを示す節目として扱う。',
          },
        },
        {
          id: 'qiqihar-occupation-1931-11-18',
          geometry: { type: 'Point', coordinates: [123.95, 47.35] },
          properties: {
            category: 'occupation',
            marker: '○',
            label: 'チチハル',
            labelPlacement: 'right',
            year: '1931-11-18',
            detail:
              '日本軍がチチハルを占領した。軍事行動が南満洲の満鉄沿線を越えて北方へ広がったことを示す。',
          },
        },
      ],
    },
  ],
  layers: [
    {
      id: 'manchurian-incident-points-1931',
      datasetId: 'manchurian-incident-points-1931',
      categoryProperty: 'category',
      categories: ['trigger', 'reinforcement', 'air-attack', 'occupation'],
    },
  ],
  legend: [
    { value: 'trigger', label: '事件発端', marker: '●', color: '#5f4030' },
    { value: 'reinforcement', label: '増援・越境', marker: '◆', color: '#365d70' },
    { value: 'air-attack', label: '爆撃', marker: '■', color: '#69602e' },
    { value: 'occupation', label: '占領', marker: '○', color: '#55624b' },
  ],
  auditState: {
    dataAudit: 'passed',
    styleAudit: 'passed',
    visualAudit: 'not-required-reused-pattern',
    notes: [
      'A16は地理理解に有効だが、信頼できる作戦進路geometryを確保できないため、線・支配域polygonは実装しない。',
      '日付と主要地名はJACAR・外務省外交史料館の公的解説で照合した。',
      '位置は歴史的市街・戦闘地点の確定座標ではなく代表点なので geometryConfidence=approximate とした。',
      'A12/A14と同じThematicMapのpoint-only表示、点記号セット、ラベル、popup/touch interactionを再利用し、新しい線・polygon・interactionを導入しない。',
      'point-only再利用パターンとして、既確認の表示パターンを用いるため個別Human Visual Auditを省略する。',
    ],
  },
}
