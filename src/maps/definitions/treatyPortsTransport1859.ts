import type { HistoricalMapDefinition } from '../schema.ts'

export const treatyPortsTransport1859Map: HistoricalMapDefinition = {
  id: 'treaty-ports-transport-1859',
  title: '1859年の開港場と既存国内交通軸（模式図）',
  historicalQuestion:
    '開港場は、どのように既存の国内交通網へ接続され、外国貿易の影響を国内へ伝える結節点になったのか。',
  readingNote:
    '1859年に本格的な対外貿易が始まった横浜・長崎・箱館と、開港以前から存在した主要交通軸の関係を示す模式図。街道・海運線は史料で確認できる起終点・主要経由地を概略的に結んだもので、当時の道路・航路の正確な線形や海岸線を復元しない。背景地図・海岸線は現代のOpenStreetMapであり、歴史境界を示さない。',
  status: 'draft',
  period: { startYear: 1859, endYear: 1859 },
  initialView: {
    center: [136.9, 36.3],
    zoom: 4.15,
  },
  datasets: [
    {
      id: 'ports-and-hubs-1859',
      provenance: {
        sourceId: 'a2-official-place-synthesis',
        title: '1859年開港場・主要交通結節点の概略位置',
        institution: 'jpn-history-decade',
        sourceType: 'derived',
        license:
          'Site-authored approximate coordinates; no third-party geometry copied. Source texts remain subject to each institution\'s terms.',
        derivedFromSourceIds: [
          'archives-five-treaties',
          'yokohama-port-history',
          'mlit-tokaido-history',
          'nagasaki-kaido-history',
          'hakodate-kitamae-history',
        ],
        temporalCoverage: {
          from: '1859',
          to: '1859',
          basis: 'instant',
          note: '1859年に実際に本格的な対外貿易が始まった横浜・長崎・箱館と、接続関係を説明するための主要結節点を対象とする。',
        },
        spatialCoverage: '江戸・大坂・九州北部・箱館を含む日本列島主要地点',
        geometryConfidence: 'approximate',
        transformations: [
          '公的資料に記された歴史地名・交通結節点を抽出した。',
          '各地点を現在の地理上の代表点へ概略配置した。',
          '宿場・港湾区域・当時の海岸線の厳密な範囲は復元していない。',
        ],
        notes:
          '地点間の接続関係を理解する説明地図であり、距離測定・境界分析には使用しない。',
      },
      allowedGeometryTypes: ['Point'],
      requiredProperties: ['category', 'marker', 'label', 'labelPlacement', 'year', 'detail'],
      features: [
        {
          id: 'yokohama-port-1859',
          geometry: { type: 'Point', coordinates: [139.645, 35.447] },
          properties: {
            category: 'open-port',
            marker: '港',
            label: '横浜',
            labelPlacement: 'bottom',
            year: 1859,
            detail:
              '条約上は神奈川開港とされたが、幕府は東海道の神奈川宿を避け、横浜村に開港場を整備した。',
          },
        },
        {
          id: 'nagasaki-port-1859',
          geometry: { type: 'Point', coordinates: [129.87, 32.75] },
          properties: {
            category: 'open-port',
            marker: '港',
            label: '長崎',
            labelPlacement: 'left',
            year: 1859,
            detail:
              '近世以来の対外窓口であり、1859年には通商条約にもとづく開港場として本格的な外国貿易に接続した。',
          },
        },
        {
          id: 'hakodate-port-1859',
          geometry: { type: 'Point', coordinates: [140.72, 41.77] },
          properties: {
            category: 'open-port',
            marker: '港',
            label: '箱館',
            labelPlacement: 'right',
            year: 1859,
            detail:
              '北前船交易で栄えた港湾都市で、1859年に横浜・長崎と並ぶ国際貿易港として開港した。',
          },
        },
        {
          id: 'edo-nihonbashi',
          geometry: { type: 'Point', coordinates: [139.7745, 35.6837] },
          properties: {
            category: 'transport-hub',
            marker: '結',
            label: '江戸・日本橋',
            labelPlacement: 'top',
            year: '近世',
            detail: '五街道の起点。東海道を通じて神奈川宿方面と結ばれていた。',
          },
        },
        {
          id: 'kanagawa-juku',
          geometry: { type: 'Point', coordinates: [139.63, 35.474] },
          properties: {
            category: 'transport-hub',
            marker: '結',
            label: '神奈川宿',
            labelPlacement: 'top',
            year: '1859',
            detail:
              '東海道の宿場。開港場はここではなく横浜に置かれ、横浜道が短期間で整備されて両者を接続した。',
          },
        },
        {
          id: 'osaka-hub',
          geometry: { type: 'Point', coordinates: [135.502, 34.693] },
          properties: {
            category: 'transport-hub',
            marker: '結',
            label: '大坂',
            labelPlacement: 'bottom',
            year: '近世',
            detail:
              '東海道・京街道方面と西廻り海運が接続する大市場。北前船航路の主要な起終点でもあった。',
          },
        },
        {
          id: 'kokura-hub',
          geometry: { type: 'Point', coordinates: [130.883, 33.883] },
          properties: {
            category: 'transport-hub',
            marker: '結',
            label: '小倉',
            labelPlacement: 'right',
            year: '近世',
            detail:
              '長崎街道の起終点の一つ。長崎と九州北部・本州方面を結ぶ交通結節点だった。',
          },
        },
      ],
    },
    {
      id: 'tokaido-schematic',
      provenance: {
        sourceId: 'a2-tokaido-derived',
        title: '近世東海道の主要経由地を結ぶ模式線',
        institution: 'jpn-history-decade',
        url: 'https://www.mlit.go.jp/road/michi-re/3-3.htm',
        sourceType: 'derived',
        license:
          'Site-authored schematic geometry based on public historical descriptions; no source map geometry copied.',
        derivedFromSourceIds: ['mlit-tokaido-history', 'yokohama-port-history'],
        temporalCoverage: {
          from: '1601',
          to: '1867',
          basis: 'range',
          note: '近世東海道の交通軸としての存続期間を概括し、1859年時点の接続関係説明に用いる。',
        },
        spatialCoverage: '江戸・日本橋から京都・大坂方面',
        geometryConfidence: 'schematic',
        transformations: [
          '国土交通省が示す東海道の起終点と主要宿場方向を確認した。',
          '横浜市資料により神奈川宿と1859年開港場の位置関係を確認した。',
          '実際の街道線形をトレースせず、主要地点を少数の折れ線で結んだ。',
        ],
        notes:
          '線は交通軸の接続関係のみを示す。道幅、宿間距離、渡河地点、旧道の正確な位置を表さない。',
      },
      allowedGeometryTypes: ['LineString'],
      requiredProperties: ['category', 'label', 'detail'],
      features: [
        {
          id: 'tokaido-axis',
          geometry: {
            type: 'LineString',
            coordinates: [
              [139.7745, 35.6837],
              [139.63, 35.474],
              [139.16, 35.255],
              [138.92, 35.12],
              [138.38, 34.98],
              [137.73, 34.71],
              [136.91, 35.18],
              [136.62, 34.97],
              [135.96, 35.02],
              [135.77, 35.01],
              [135.502, 34.693],
            ],
          },
          properties: {
            category: 'road-axis',
            label: '東海道・京街道（模式）',
            detail:
              '江戸・日本橋と京都・大坂方面を結ぶ近世の主要陸上交通軸。線形は模式化している。',
          },
        },
        {
          id: 'yokohama-road-link',
          geometry: {
            type: 'LineString',
            coordinates: [
              [139.63, 35.474],
              [139.61, 35.455],
              [139.645, 35.447],
            ],
          },
          properties: {
            category: 'port-link',
            label: '横浜道（模式）',
            detail:
              '1859年、東海道側から新しい横浜開港場へ接続するため短期間で整備された道路。',
          },
        },
      ],
    },
    {
      id: 'nagasaki-kaido-schematic',
      provenance: {
        sourceId: 'a2-nagasaki-kaido-derived',
        title: '長崎街道の主要経由地を結ぶ模式線',
        institution: 'jpn-history-decade',
        url: 'https://www.city.nagasaki.lg.jp/uploaded/attachment/9736.pdf',
        sourceType: 'derived',
        license:
          'Site-authored schematic geometry based on Nagasaki City historical description; no source map geometry copied.',
        derivedFromSourceIds: ['nagasaki-kaido-history'],
        temporalCoverage: {
          from: '1700',
          to: '1867',
          basis: 'approximate',
          note: '18世紀以降の主要ルートとして長崎―諫早―大村―彼杵―佐賀―小倉の接続を示す。',
        },
        spatialCoverage: '長崎から小倉までの九州北部',
        geometryConfidence: 'schematic',
        transformations: [
          '長崎市資料に記された主要ルートと起終点を抽出した。',
          '主要都市・宿場の現在位置を代表点として概略配置した。',
          '旧道の細かな線形を復元せず、接続順のみを折れ線で表現した。',
        ],
        notes:
          '時期により複数ルートが存在するため、18世紀以降の主要ルートを模式化した。',
      },
      allowedGeometryTypes: ['LineString'],
      requiredProperties: ['category', 'label', 'detail'],
      features: [
        {
          id: 'nagasaki-kaido-axis',
          geometry: {
            type: 'LineString',
            coordinates: [
              [129.87, 32.75],
              [130.05, 32.84],
              [129.95, 32.9],
              [129.92, 33.03],
              [130.0, 33.13],
              [130.02, 33.19],
              [130.3, 33.25],
              [130.51, 33.38],
              [130.52, 33.5],
              [130.69, 33.65],
              [130.883, 33.883],
            ],
          },
          properties: {
            category: 'road-axis',
            label: '長崎街道（模式）',
            detail:
              '長崎と小倉を結ぶ主要脇街道。海外情報・貿易品、人員の移動にも利用された。',
          },
        },
      ],
    },
    {
      id: 'western-shipping-schematic',
      provenance: {
        sourceId: 'a2-western-shipping-derived',
        title: '大坂と北海道を結ぶ西廻り海運・北前船の模式線',
        institution: 'jpn-history-decade',
        url: 'https://www.city.osaka.lg.jp/sumiyoshi/page/0000449936.html',
        sourceType: 'derived',
        license:
          'Site-authored schematic geometry based on official descriptions of west-coast shipping; no source map geometry copied.',
        derivedFromSourceIds: ['osaka-kitamae-history', 'hakodate-kitamae-history'],
        temporalCoverage: {
          from: '1700',
          to: '1867',
          basis: 'approximate',
          note: '江戸時代に大阪・西日本と北海道方面を結んだ西廻り海運・北前船の交通軸を概括する。',
        },
        spatialCoverage: '大坂から瀬戸内海・日本海沿岸を経て道南まで',
        geometryConfidence: 'schematic',
        transformations: [
          '大阪市・函館市資料から大坂と北海道・箱館を結ぶ海運の存在を確認した。',
          '代表的な沿岸方向を示すため、瀬戸内海・関門海峡・日本海沿岸を少数点で概略配置した。',
          '特定船の航海経路、寄港順、季節航路を復元していない。',
        ],
        notes:
          '一本の固定航路を示す線ではなく、複数の寄港地を結んだ海運圏の方向を示す模式線。',
      },
      allowedGeometryTypes: ['LineString'],
      requiredProperties: ['category', 'label', 'detail'],
      features: [
        {
          id: 'kitamae-western-axis',
          geometry: {
            type: 'LineString',
            coordinates: [
              [135.502, 34.693],
              [134.69, 34.35],
              [133.93, 34.35],
              [132.45, 34.36],
              [131.0, 34.05],
              [131.2, 35.2],
              [132.75, 35.45],
              [134.23, 35.55],
              [135.75, 35.65],
              [136.75, 37.0],
              [138.2, 38.2],
              [139.85, 39.0],
              [140.1, 40.3],
              [139.9, 41.87],
              [140.72, 41.77],
            ],
          },
          properties: {
            category: 'sea-axis',
            label: '西廻り海運・北前船（模式）',
            detail:
              '大坂と北海道方面を瀬戸内海・日本海沿岸経由で結んだ海運圏。箱館は開港以前から国内海運へ接続していた。',
          },
        },
      ],
    },
  ],
  layers: [
    {
      id: 'ports-and-hubs',
      datasetId: 'ports-and-hubs-1859',
      categoryProperty: 'category',
      categories: ['open-port', 'transport-hub'],
    },
    {
      id: 'tokaido-lines',
      datasetId: 'tokaido-schematic',
      categoryProperty: 'category',
      categories: ['road-axis', 'port-link'],
    },
    {
      id: 'nagasaki-kaido-line',
      datasetId: 'nagasaki-kaido-schematic',
      categoryProperty: 'category',
      categories: ['road-axis'],
    },
    {
      id: 'western-shipping-line',
      datasetId: 'western-shipping-schematic',
      categoryProperty: 'category',
      categories: ['sea-axis'],
    },
  ],
  legend: [
    { value: 'open-port', label: '1859年の開港場', marker: '港', color: '#7d3d34' },
    { value: 'transport-hub', label: '主要交通結節点', marker: '結', color: '#465b4e' },
    { value: 'road-axis', label: '主要街道（模式）', marker: '道', color: '#80623c', kind: 'line' },
    { value: 'port-link', label: '開港場への接続路（模式）', marker: '接', color: '#9a594d', kind: 'line' },
    { value: 'sea-axis', label: '西廻り海運（模式）', marker: '航', color: '#3e667a', kind: 'line' },
  ],
  auditState: {
    dataAudit: 'passed',
    styleAudit: 'passed',
    visualAudit: 'pending-human',
    notes: [
      '1859年の実開港場は横浜・長崎・箱館として表示し、条約上の後年開港予定地とは区別した。',
      '東海道・長崎街道・西廻り海運は公的資料で存在・接続関係を確認し、正確な旧道・航路線形を復元せず geometryConfidence=schematic とした。',
      '横浜は東海道上の神奈川宿と同一視せず、1859年に整備された横浜道を別線で表現した。',
      'Style Auditでは点と線を形状でも区別し、すべての模式線を破線として確定的な精密線形に見せない。',
      'Human Visual AuditはGitHub Pages上でdesktop / tablet-touch / mobile / zoom別に確認する。',
    ],
  },
}
