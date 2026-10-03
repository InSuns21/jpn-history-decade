import type { HistoricalMapDefinition } from '../schema.ts'

export const northernIndochinaAdvance1940Map: HistoricalMapDefinition = {
  id: 'northern-indochina-advance-1940',
  title: '1940年9月の北部仏印進駐と援蒋輸送回廊',
  historicalQuestion:
    '海防から河内・ラオカイを経て雲南へ向かう輸送回廊と、諒山方面・海防周辺で起きた軍事行動は、北部仏印の空間でどう重なっていたのか。',
  readingNote:
    '主要都市・港・国境交通点は現在の地理上の代表位置を使った概略点。海防―河内―ラオカイ―雲南方面の線は、史料で確認できる交通回廊と主要経由地を結んだ模式線で、1940年当時の鉄道・道路中心線を測量復元したものではない。赤い面は9月23〜26日に戦闘・上陸・爆撃が報告された「方面」を示す概略域で、前線・占領境界・実測戦場面積ではない。背景地図・道路・国境は現代のOpenStreetMapで、1940年の歴史境界を示さない。',
  status: 'published',
  period: { startYear: 1940, endYear: 1940 },
  initialView: {
    center: [104.82, 22.55],
    zoom: 5.25,
  },
  datasets: [
    {
      id: 'northern-indochina-reference-points',
      provenance: {
        sourceId: 'a32-reference-points',
        title: '北部仏印・雲南の主要交通点の代表位置',
        institution: 'jpn-history-decade',
        sourceType: 'derived',
        license:
          'Site-authored approximate representative coordinates. Historical roles are derived from cited official and primary-source descriptions; no third-party historical point geometry is copied.',
        derivedFromSourceIds: [
          'jacar-nishihara-martin-1940',
          'jacar-northern-indochina-advance-1940',
          'frus-nishihara-martin-sept22-1940',
          'frus-indochina-sept24-1940',
          'frus-indochina-sept26-1940',
          'frus-yunnan-railway-1940',
        ],
        temporalCoverage: {
          from: '1940-09-01',
          to: '1940-09-26',
          basis: 'range',
          note:
            '北部仏印進駐前後の交通・軍事関係を説明するため、海防・河内・諒山・ラオカイ・昆明の代表位置を用いる。',
        },
        spatialCoverage: '北部フランス領インドシナから中国雲南省南部・昆明',
        geometryConfidence: 'approximate',
        transformations: [
          'JACARとFRUSで1940年9月の海防・河内・諒山方面の役割を確認した。',
          'FRUSの中国南西部交通に関する記述から海防―雲南鉄道・道路接続の存在を確認した。',
          '歴史地名を現在の同名都市・港・国境交通点の代表座標へ概略配置した。',
          '1940年の市街地中心・駅舎・港湾施設・軍施設の正確な座標復元は行っていない。',
        ],
        notes:
          '地点間の相対配置を読むための代表点。地点間距離や軍事施設までの距離を測定する用途には使わない。',
      },
      allowedGeometryTypes: ['Point'],
      requiredProperties: ['category', 'marker', 'label', 'labelPlacement', 'year', 'detail'],
      features: [
        {
          id: 'haiphong-1940',
          geometry: { type: 'Point', coordinates: [106.683, 20.865] },
          properties: {
            category: 'transport-node',
            marker: '港',
            label: '海防（ハイフォン）',
            labelPlacement: 'right',
            year: '1940',
            detail:
              '北部仏印の主要港。中国向け物資が陸上交通へ接続する入口で、日本側監視・進駐の重要地点となった。9月26日朝にも日本軍機の爆撃が報告された。',
          },
        },
        {
          id: 'hanoi-1940',
          geometry: { type: 'Point', coordinates: [105.854, 21.029] },
          properties: {
            category: 'transport-node',
            marker: '都',
            label: '河内（ハノイ）',
            labelPlacement: 'bottom',
            year: '1940',
            detail:
              '仏印総督府の行政中心で、西原機関と仏印当局の交渉が行われた。海防港と中国方面の交通を結ぶ結節点でもあった。',
          },
        },
        {
          id: 'lao-cai-1940',
          geometry: { type: 'Point', coordinates: [103.971, 22.485] },
          properties: {
            category: 'transport-node',
            marker: '境',
            label: 'ラオカイ',
            labelPlacement: 'right',
            year: '1940',
            detail:
              '紅河沿いの中国国境交通点。海防・河内から雲南へ続く鉄道・道路交通の北側接続を示す代表点。',
          },
        },
        {
          id: 'kunming-1940',
          geometry: { type: 'Point', coordinates: [102.712, 25.040] },
          properties: {
            category: 'china-connection',
            marker: '中',
            label: '昆明',
            labelPlacement: 'left',
            year: '1940',
            detail:
              '雲南省の主要都市。北部仏印から雲南へ入る交通回廊の中国側終点方向を理解するための代表点として示す。',
          },
        },
        {
          id: 'lang-son-1940',
          geometry: { type: 'Point', coordinates: [106.759, 21.854] },
          properties: {
            category: 'battle-reference',
            marker: '戦',
            label: '諒山（ランソン）方面',
            labelPlacement: 'right',
            year: '1940-09',
            detail:
              '広西側に近い国境交通地域。9月23日以後、日本軍の進入とフランス軍の抵抗が報告された国境戦闘の主要方面。',
          },
        },
      ],
    },
    {
      id: 'aid-route-corridor-1940',
      provenance: {
        sourceId: 'a32-aid-route-schematic',
        title: '海防―河内―ラオカイ―雲南方面の援蒋輸送回廊（模式）',
        institution: 'jpn-history-decade',
        url: 'https://history.state.gov/historicaldocuments/frus1940v04/d337',
        sourceType: 'derived',
        license:
          'Site-authored schematic LineString derived from textual descriptions of the Haiphong–Yunnan railway/road connection and representative waypoints; no historical map geometry is copied or vector-traced.',
        derivedFromSourceIds: [
          'frus-yunnan-railway-1940',
          'frus-indochina-june25-1940',
        ],
        temporalCoverage: {
          from: '1940-01-01',
          to: '1940-09-26',
          basis: 'range',
          note:
            '1940年に中国南西部への外部交通として認識され、日本が遮断対象とした仏印経由の交通回廊を説明する。',
        },
        spatialCoverage: '海防から河内・紅河流域・ラオカイを経て雲南省昆明方面',
        geometryConfidence: 'schematic',
        transformations: [
          'FRUSでHaiphongと雲南を結ぶ鉄道・道路接続が中国の対外交通として機能していたことを確認した。',
          '海防、河内、越池付近、安沛付近、ラオカイ、河口、蒙自・開遠方面、昆明という地理的に妥当な代表waypointを設定した。',
          'waypointを接続して交通回廊を模式LineString化し、当時の鉄道中心線・道路中心線はトレースしていない。',
          '線の長さ・曲率・局地的な通過地点は測量値として扱わない。',
        ],
        notes:
          '「一本の輸送線が常に同じ線形を通った」ことを主張するgeometryではなく、海防港から雲南へ至る主要交通軸の方向と接続を読むための模式線。',
      },
      allowedGeometryTypes: ['LineString'],
      requiredProperties: ['category', 'label', 'detail'],
      features: [
        {
          id: 'haiphong-yunnan-aid-corridor',
          geometry: {
            type: 'LineString',
            coordinates: [
              [106.683, 20.865],
              [105.854, 21.029],
              [105.430, 21.300],
              [104.870, 21.700],
              [103.971, 22.485],
              [103.961, 22.507],
              [103.390, 23.370],
              [103.270, 23.710],
              [103.140, 24.920],
              [102.712, 25.040],
            ],
          },
          properties: {
            category: 'aid-route',
            label: '援蒋輸送回廊（模式）',
            detail:
              '海防港から河内・紅河流域・ラオカイを経て雲南へつながる主要交通軸を、代表waypointで模式化したもの。1940年の正確な鉄道・道路中心線ではない。',
          },
        },
      ],
    },
    {
      id: 'northern-indochina-battle-areas-1940',
      provenance: {
        sourceId: 'a32-battle-areas-schematic',
        title: '1940年9月23〜26日の北部仏印戦闘方面（模式）',
        institution: 'jpn-history-decade',
        url: 'https://www.jacar.go.jp/exhibition/nichibei/popup/pop_02.html',
        sourceType: 'derived',
        license:
          'Site-authored schematic polygons based on official/primary textual reports of fighting in the Lang Son frontier area and Haiphong/Do Son area. No historical battle-map geometry is copied or vector-traced.',
        derivedFromSourceIds: [
          'jacar-northern-indochina-advance-1940',
          'frus-nishihara-martin-sept22-1940',
          'frus-indochina-sept24-1940',
          'frus-indochina-sept26-1940',
        ],
        temporalCoverage: {
          from: '1940-09-23',
          to: '1940-09-26',
          basis: 'approximate',
          note:
            '進駐開始後、国境方面と海防周辺で戦闘・上陸・爆撃が報告された期間を対象とする。',
        },
        spatialCoverage: '諒山・同登方面および海防・ドーソン周辺',
        geometryConfidence: 'schematic',
        transformations: [
          'JACARとFRUSから、国境の複数地点・諒山方面での戦闘と、海防・ドーソン周辺での上陸・爆撃を確認した。',
          '史料が示す地域名の周囲に小さな説明用Polygonを作成し、前線・占領境界・部隊配置を復元していない。',
          'Polygon外周・面積・中心位置に戦術的な精度を持たせていない。',
        ],
        notes:
          '面は「戦闘が報告された方面」を示す。赤い面の外周を戦線、占領域、砲爆撃範囲として読まない。',
      },
      allowedGeometryTypes: ['Polygon'],
      requiredProperties: ['category'],
      features: [
        {
          id: 'lang-son-battle-area-schematic',
          geometry: {
            type: 'Polygon',
            coordinates: [[
              [106.56, 21.75],
              [106.87, 21.72],
              [107.00, 21.87],
              [106.92, 22.02],
              [106.69, 22.08],
              [106.55, 21.95],
              [106.56, 21.75],
            ]],
          },
          properties: {
            category: 'battle-area',
          },
        },
        {
          id: 'haiphong-battle-area-schematic',
          geometry: {
            type: 'Polygon',
            coordinates: [[
              [106.55, 20.68],
              [106.83, 20.64],
              [106.97, 20.76],
              [106.93, 20.94],
              [106.72, 21.00],
              [106.54, 20.89],
              [106.55, 20.68],
            ]],
          },
          properties: {
            category: 'battle-area',
          },
        },
      ],
    },
  ],
  layers: [
    {
      id: 'a32-aid-route',
      datasetId: 'aid-route-corridor-1940',
      categoryProperty: 'category',
      categories: ['aid-route'],
    },
    {
      id: 'a32-battle-areas',
      datasetId: 'northern-indochina-battle-areas-1940',
      categoryProperty: 'category',
      categories: ['battle-area'],
    },
    {
      id: 'a32-reference-points',
      datasetId: 'northern-indochina-reference-points',
      categoryProperty: 'category',
      categories: ['transport-node', 'china-connection', 'battle-reference'],
    },
  ],
  legend: [
    {
      value: 'aid-route',
      label: '援蒋輸送の主要回廊（模式）',
      marker: '線',
      color: '#5f6f43',
      kind: 'line',
      lineStyle: 'dashed',
    },
    {
      value: 'battle-area',
      label: '9月23〜26日に戦闘が報告された方面（概略）',
      marker: '域',
      color: '#8a4338',
      kind: 'area',
    },
    {
      value: 'transport-node',
      label: '主要港・交通結節点',
      marker: '交',
      color: '#3f5a4b',
    },
    {
      value: 'china-connection',
      label: '中国側の接続方向',
      marker: '中',
      color: '#6f5a34',
    },
    {
      value: 'battle-reference',
      label: '国境戦闘の主要方面',
      marker: '戦',
      color: '#7d3d34',
    },
  ],
  auditState: {
    dataAudit: 'passed',
    styleAudit: 'passed',
    visualAudit: 'passed',
    notes: [
      'A32 map necessityはadopted / high。援蒋輸送回廊と国境・港湾の軍事行動を同時に読むことに地図上の説明価値がある。',
      'Data Auditは2026-10-03改訂のMAP_AUDIT_STANDARDに従い、精密GISの有無ではなく、中心問いに対する精度適合性で判定した。',
      '主要地点はapproximate point、輸送回廊はwaypoint-derived schematic LineString、戦闘方面はschematic Polygonとして公開精度を明示した。',
      'JACARは9月23日以後の多数の戦闘と9月26日朝の海防爆撃を示し、FRUSは9月22日の海防への部隊到着予定と広西国境方面からの進入圧力を記録する。',
      'FRUSの中国南西部交通記述を用い、海防から雲南へつながる鉄道・道路交通を確認した。線形は歴史地図をvector traceせず、代表waypointによる概略線へ縮退した。',
      'Polygonは戦闘が報告された方面だけを示し、前線・占領境界・砲爆撃範囲・面積を表さない。',
      'Style Auditは既存ThematicMapの線・面・点表現に収まり、推定線を破線、戦闘方面を半透明面、主要地点をラベル付きpointとして区別した。',
      '2026-10-03 Human Visual Audit passed。GitHub Pages上でDesktop / Tablet・Touch / Mobile / zoom、ラベル、凡例、popup、模式線・概略面の不確実性表示を人間確認した。',
    ],
  },
}
