import codhRoadsRaw from '../data/geojson/a2-codh-roads.geojson?raw'
import type { HistoricalMapDefinition, HistoricalMapFeature } from '../schema.ts'

type CodhRoadFeature = {
  id: string
  properties: {
    routeId: string
    category: string
    label: string
    detail: string
  }
  geometry: {
    type: 'LineString'
    coordinates: number[][]
  }
}

const codhRoads = JSON.parse(codhRoadsRaw) as { features: CodhRoadFeature[] }

const codhFeatures = codhRoads.features.map(
  (feature): HistoricalMapFeature => ({
    id: feature.id,
    geometry: {
      type: 'LineString',
      coordinates: feature.geometry.coordinates,
    },
    properties: {
      category: feature.properties.category,
      label: feature.properties.label,
      detail: feature.properties.detail,
      routeId: feature.properties.routeId,
    },
  }),
)

const codhRoadFeatures = (routeIds: string[]) =>
  codhFeatures.filter((feature) => routeIds.includes(String(feature.properties.routeId)))

export const treatyPortsTransport1859Map: HistoricalMapDefinition = {
  id: 'treaty-ports-transport-1859',
  title: '1859年の開港場と国内交通ネットワーク',
  historicalQuestion:
    '開港場は、どのように既存の国内交通網へ接続され、外国貿易の影響を国内へ伝える結節点になったのか。',
  readingNote:
    '1859年に本格的な対外貿易が始まった横浜・長崎・箱館と、開港以前から存在した主要交通網の関係を示す。東海道・京街道・長崎街道はCODH「江戸主要街道データセット」v4の歴史GIS形状を使用する。横浜道は横浜市の現地案内で確認できる経由地点を代表点として結ぶ概略線であり、敷地単位の正確な旧道線形ではない。西廻り海運・北前船は一本の固定航路を仮定せず、代表的な寄港地を点で示す。背景地図・海岸線は現代のOpenStreetMapであり、歴史境界を示さない。',
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
          'Site-authored approximate coordinates; no third-party point geometry copied. Source texts remain subject to each institution\'s terms.',
        derivedFromSourceIds: [
          'archives-five-treaties',
          'yokohama-port-history',
          'hakodate-kitamae-history',
        ],
        temporalCoverage: {
          from: '1859',
          to: '1859',
          basis: 'instant',
          note: '1859年に実際に本格的な対外貿易が始まった横浜・長崎・箱館と、接続関係を説明する主要結節点を対象とする。',
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
              '条約上は神奈川開港とされたが、幕府は横浜村側に開港場を整備した。',
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
              '国内海運へ接続していた港湾都市で、1859年に横浜・長崎と並ぶ国際貿易港として開港した。',
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
            detail: '五街道の起点。東海道を通じて京都方面へ結ばれていた。',
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
              '東海道の宿場。横浜道は神奈川宿そのものから直線的に伸びたのではなく、芝生村付近で東海道から分岐して開港場へ向かった。',
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
              '京街道方面と海運が接続する大市場。北前船・西廻り海運の上方側の結節点だった。',
          },
        },
        {
          id: 'kokura-hub',
          geometry: { type: 'Point', coordinates: [130.9415, 33.9195] },
          properties: {
            category: 'transport-hub',
            marker: '結',
            label: '大里・小倉方面',
            labelPlacement: 'right',
            year: '近世',
            detail:
              'CODHの長崎街道R900は大里を起点として長崎へ至る。九州北部と本州方面を結ぶ交通圏の結節点として表示する。',
          },
        },
      ],
    },
    {
      id: 'codh-tokaido-kyokaido',
      provenance: {
        sourceId: 'codh-edo-road-v4-r001-r600',
        title: '江戸主要街道データセット v4 — R001 東海道 / R600 京街道',
        institution: 'ROIS-DS 人文学オープンデータ共同利用センター（CODH）',
        url: 'https://codh.rois.ac.jp/historical-gis/edo-road/',
        sourceType: 'research',
        license: 'CC BY 4.0; doi:10.20676/00000452',
        temporalCoverage: {
          from: '1601',
          to: '1867',
          basis: 'range',
          note: '江戸期の主要街道データを、1859年時点の国内交通軸の把握に用いる。',
        },
        spatialCoverage: '江戸から京都・大坂方面',
        geometryConfidence: 'derived',
        transformations: [
          'CODH v4 GeoPackageからR001とR600を抽出した。',
          'FionaでEPSG:4326へ座標変換した。',
          '幾何の単純化・手描き補間は行っていない。',
        ],
        notes:
          '元データは旧版地形図、天保国絵図、伊能図、各地の歴史の道調査報告書などを参照してCODHが構築した歴史GISデータ。',
      },
      allowedGeometryTypes: ['LineString'],
      requiredProperties: ['category', 'label', 'detail', 'routeId'],
      features: codhRoadFeatures(['R001', 'R600']),
    },
    {
      id: 'codh-nagasaki-kaido',
      provenance: {
        sourceId: 'codh-edo-road-v4-r900',
        title: '江戸主要街道データセット v4 — R900 長崎街道',
        institution: 'ROIS-DS 人文学オープンデータ共同利用センター（CODH）',
        url: 'https://codh.rois.ac.jp/historical-gis/edo-road/',
        sourceType: 'research',
        license: 'CC BY 4.0; doi:10.20676/00000452',
        temporalCoverage: {
          from: '1700',
          to: '1867',
          basis: 'approximate',
          note: '江戸期の長崎街道の地理形状を、1859年時点の国内交通軸の把握に用いる。',
        },
        spatialCoverage: '大里から長崎までの九州北部',
        geometryConfidence: 'derived',
        transformations: [
          'CODH v4 GeoPackageからR900を抽出した。',
          'FionaでEPSG:4326へ座標変換した。',
          '幾何の単純化・手描き補間は行っていない。',
        ],
        notes:
          'CODHは福岡県・佐賀県・長崎県各教育委員会の「歴史の道」調査報告等を参照している。',
      },
      allowedGeometryTypes: ['LineString'],
      requiredProperties: ['category', 'label', 'detail', 'routeId'],
      features: codhRoadFeatures(['R900']),
    },
    {
      id: 'yokohama-road-1859',
      provenance: {
        sourceId: 'yokohama-road-waypoints-1859',
        title: '横浜道 — 横浜市西区歴史街道案内サインに基づく経由地点の概略線',
        institution: '横浜市西区 / jpn-history-decade',
        url: 'https://www.city.yokohama.lg.jp/nishi/shokai/kanko/courses/rekishikaido04.html',
        sourceType: 'derived',
        license:
          'Site-authored schematic geometry from publicly described route waypoints; no municipal map geometry copied.',
        derivedFromSourceIds: ['yokohama-port-history'],
        temporalCoverage: {
          from: '1859',
          to: '1859',
          basis: 'instant',
          note: '開港場と東海道を接続するため1859年に整備された横浜道。',
        },
        spatialCoverage: '芝生村・浅間下付近から横浜開港場',
        geometryConfidence: 'schematic',
        transformations: [
          '横浜市の案内サイン一覧にある浅間下、新田間橋、平沼、戸部、野毛坂方面などの通過順を確認した。',
          '現地の代表地点を概略座標化し、通過順にLineString化した。',
          '旧道の道路幅・敷地境界・1859年当時の細かな曲線は復元していない。',
        ],
        notes:
          '神奈川宿と横浜を単純な直線で結ばず、芝生村付近の東海道分岐から野毛を経て開港場へ至る経路構造を示す。',
      },
      allowedGeometryTypes: ['LineString'],
      requiredProperties: ['category', 'label', 'detail'],
      features: [
        {
          id: 'yokohama-road-link',
          geometry: {
            type: 'LineString',
            coordinates: [
              [139.6123, 35.4660],
              [139.6151, 35.4633],
              [139.61827, 35.46196],
              [139.62172, 35.45922],
              [139.6243, 35.4546],
              [139.62688, 35.44860],
              [139.63114, 35.44694],
              [139.63417, 35.44539],
              [139.645, 35.447],
            ],
          },
          properties: {
            category: 'port-link',
            label: '横浜道（経由地点模式）',
            detail:
              '芝生村付近で東海道から分岐し、新田間・平沼・戸部・野毛方面を経て横浜開港場へ至る接続路。線は案内サイン等から確認できる経由順を示す概略で、正確な旧道中心線ではない。',
          },
        },
      ],
    },
    {
      id: 'western-shipping-ports',
      provenance: {
        sourceId: 'kitamaebune-representative-ports',
        title: '西廻り海運・北前船の代表的寄港地',
        institution: '文化庁 日本遺産 / jpn-history-decade',
        url: 'https://www.japan-heritage.bunka.go.jp/ja/stories/story039/',
        sourceType: 'derived',
        license:
          'Site-authored approximate point locations. Historical interpretation is based on the Agency for Cultural Affairs Japan Heritage description; no route geometry copied.',
        derivedFromSourceIds: ['osaka-kitamae-history', 'hakodate-kitamae-history'],
        temporalCoverage: {
          from: '1700',
          to: '1867',
          basis: 'approximate',
          note: '江戸期に日本海・瀬戸内海沿岸の多数の寄港地を介して北日本と上方を結んだ海運圏を示す。',
        },
        spatialCoverage: '日本海沿岸・道南の代表的寄港地',
        geometryConfidence: 'approximate',
        transformations: [
          '文化庁日本遺産が説明する西廻り航路・北前船の多数の寄港地という性格を採用した。',
          '一本の固定航路を作らず、代表的な港町を現在地の概略点として配置した。',
          '港域・船着場・個別船の寄港順・季節航路は復元していない。',
        ],
        notes:
          '北前船を一本の航路線として描くと史料以上の精密さを生むため、代表寄港地の点群として表現する。',
      },
      allowedGeometryTypes: ['Point'],
      requiredProperties: ['category', 'marker', 'label', 'labelPlacement', 'year', 'detail'],
      features: [
        {
          id: 'kitamae-tsuruga',
          geometry: { type: 'Point', coordinates: [136.0694, 35.6620] },
          properties: {
            category: 'shipping-port',
            marker: '航',
            label: '敦賀',
            labelPlacement: 'right',
            year: '近世',
            detail:
              '日本海側と上方を結ぶ海運圏の代表的な港町。ここでは北前船ネットワークを示す代表点として配置する。',
          },
        },
        {
          id: 'kitamae-niigata',
          geometry: { type: 'Point', coordinates: [139.05, 37.93] },
          properties: {
            category: 'shipping-port',
            marker: '航',
            label: '新潟',
            labelPlacement: 'right',
            year: '近世',
            detail:
              '日本海沿岸の代表的な港町。点は歴史的港域の厳密な範囲ではなく、海運ネットワークを読むための概略位置。',
          },
        },
        {
          id: 'kitamae-sakata',
          geometry: { type: 'Point', coordinates: [139.8189, 38.9311] },
          properties: {
            category: 'shipping-port',
            marker: '航',
            label: '酒田',
            labelPlacement: 'right',
            year: '近世',
            detail:
              '最上川河口の港町として北前船・西廻り海運に接続した代表的な結節点。',
          },
        },
        {
          id: 'kitamae-matsumae',
          geometry: { type: 'Point', coordinates: [140.0917, 41.4206] },
          properties: {
            category: 'shipping-port',
            marker: '航',
            label: '松前',
            labelPlacement: 'left',
            year: '近世',
            detail:
              '道南の代表的な港町。箱館とともに北日本側の海運ネットワークを理解する補助点として示す。',
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
      id: 'codh-tokaido-kyokaido-lines',
      datasetId: 'codh-tokaido-kyokaido',
      categoryProperty: 'category',
      categories: ['road-axis'],
    },
    {
      id: 'codh-nagasaki-kaido-line',
      datasetId: 'codh-nagasaki-kaido',
      categoryProperty: 'category',
      categories: ['road-axis'],
    },
    {
      id: 'yokohama-road-line',
      datasetId: 'yokohama-road-1859',
      categoryProperty: 'category',
      categories: ['port-link'],
    },
    {
      id: 'western-shipping-ports-layer',
      datasetId: 'western-shipping-ports',
      categoryProperty: 'category',
      categories: ['shipping-port'],
    },
  ],
  legend: [
    { value: 'open-port', label: '1859年の開港場', marker: '港', color: '#7d3d34' },
    { value: 'transport-hub', label: '主要交通結節点', marker: '結', color: '#465b4e' },
    { value: 'road-axis', label: '主要街道（歴史GIS）', marker: '道', color: '#80623c', kind: 'line' },
    { value: 'port-link', label: '横浜道（経由地点模式）', marker: '接', color: '#9a594d', kind: 'line' },
    { value: 'shipping-port', label: '西廻り海運・北前船の代表寄港地', marker: '航', color: '#3e667a' },
  ],
  auditState: {
    dataAudit: 'passed',
    styleAudit: 'passed',
    visualAudit: 'pending-human',
    notes: [
      '2026-09-26のHuman Visual Auditで、旧A2の自作模式線は陸路が過度に直線的で、海運線には陸地横断があり、模式図としても地理的妥当性が不足すると判定した。',
      '東海道R001・京街道R600・長崎街道R900はCODH「江戸主要街道データセット」v4のGeoPackageからGeoJSONへ抽出し、手描き線を廃止した。',
      'CODH由来の3街道は幾何を単純化せずEPSG:4326へ変換し、出典・CC BY 4.0・DOIを記録した。',
      '横浜道は神奈川宿と開港場の直線接続を廃止し、横浜市の案内サインに基づく芝生村付近の分岐、新田間・平沼・戸部・野毛方面の経由順を概略線にした。',
      '西廻り海運・北前船は一本の固定航路ではなく多数の寄港地を介する海運圏として扱い、陸地を横切る自作LineStringを廃止して代表寄港地の点群へ変更した。',
      'Data Audit / Style Auditは新データ構成で再実施しpassed。Human Visual AuditはGitHub Pages上でdesktop / tablet-touch / mobile / zoom別に再確認する。',
    ],
  },
}
