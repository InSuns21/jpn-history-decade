import type { HistoricalMapDefinition } from '../schema.ts'

export const railwayExpansion1872To1890Map: HistoricalMapDefinition = {
  id: 'railway-expansion-1872-1890',
  title: '1872年から1889年までの主要鉄道接続（模式）',
  historicalQuestion:
    '新橋―横浜の短い初期鉄道から、1889年の新橋―神戸を結ぶ長距離幹線へ、鉄道が都市間の接続をどのように変えたのか。',
  readingNote:
    '線は国立公文書館が確認する開業区間・全通区間と主要都市の位置関係をもとにした模式線で、当時の線路中心線や駅構内を測量復元したものではない。1889年の線は東海道線の接続関係を示すため主要都市をwaypointとして結んでいる。背景地図・道路・行政界は現代のOpenStreetMapである。',
  status: 'draft',
  period: { startYear: 1872, endYear: 1890 },
  initialView: { center: [136.8, 35.25], zoom: 5.0 },
  timeSlices: [
    {
      id: '1889',
      label: '1889年',
      description: '新橋―神戸間の東海道線が全通し、東西の主要都市が一本の長距離鉄道で接続された段階。',
    },
    {
      id: '1872',
      label: '1872年',
      description: '新橋―横浜間の約29kmから始まった初期鉄道の段階。',
    },
  ],
  datasets: [
    {
      id: 'railway-a6-points',
      provenance: {
        sourceId: 'a6-archives-railway-points',
        title: '1872年新橋・横浜間鉄道および1889年東海道線全通に関する公文書',
        institution: '国立公文書館',
        url: 'https://www.archives.go.jp/ayumi/kobetsu/m22_1889_02.html',
        sourceType: 'derived',
        license: 'Site-authored representative coordinates derived from official historical descriptions; no historical route geometry is copied.',
        derivedFromSourceIds: ['archives-railway-1872', 'archives-tokaido-1889'],
        temporalCoverage: { from: '1872-09-12', to: '1889-07-01', basis: 'range' },
        spatialCoverage: '東京・横浜から東海道沿いに名古屋・京都・大阪・神戸',
        geometryConfidence: 'approximate',
        transformations: [
          '国立公文書館資料で1872年新橋―横浜開業と1889年新橋―神戸全通を確認した。',
          '歴史駅・主要都市を現在の同名地域付近の代表座標へ概略配置した。',
          '駅舎位置・構内・線路中心線の精密復元は行っていない。',
        ],
        notes: '地点は都市間接続を読むための代表位置で、駅施設の測量座標ではない。',
      },
      allowedGeometryTypes: ['Point'],
      requiredProperties: ['category', 'marker', 'label', 'labelPlacement', 'year', 'detail', 'timeSlice'],
      features: [
        { id: 'a6-1889-shimbashi', geometry: { type: 'Point', coordinates: [139.758, 35.666] }, properties: { category: 'station', marker: '駅', label: '新橋', labelPlacement: 'right', year: '1889', detail: '東海道線の東京側起点。', timeSlice: '1889' } },
        { id: 'a6-1889-yokohama', geometry: { type: 'Point', coordinates: [139.637, 35.454] }, properties: { category: 'station', marker: '駅', label: '横浜', labelPlacement: 'bottom', year: '1889', detail: '1872年から鉄道で東京側と結ばれていた開港都市。', timeSlice: '1889' } },
        { id: 'a6-1889-nagoya', geometry: { type: 'Point', coordinates: [136.881, 35.170] }, properties: { category: 'station', marker: '駅', label: '名古屋', labelPlacement: 'top', year: '1889', detail: '東海道の主要都市。全通により東京・京阪神と連続した鉄道接続に入った。', timeSlice: '1889' } },
        { id: 'a6-1889-kyoto', geometry: { type: 'Point', coordinates: [135.758, 34.985] }, properties: { category: 'station', marker: '駅', label: '京都', labelPlacement: 'top', year: '1889', detail: '京阪神側の主要都市。', timeSlice: '1889' } },
        { id: 'a6-1889-osaka', geometry: { type: 'Point', coordinates: [135.498, 34.702] }, properties: { category: 'station', marker: '駅', label: '大阪', labelPlacement: 'bottom', year: '1889', detail: '京阪神の主要都市。', timeSlice: '1889' } },
        { id: 'a6-1889-kobe', geometry: { type: 'Point', coordinates: [135.195, 34.690] }, properties: { category: 'station', marker: '駅', label: '神戸', labelPlacement: 'left', year: '1889', detail: '1889年全通時の西側の主要終点。', timeSlice: '1889' } },
        { id: 'a6-1872-shimbashi', geometry: { type: 'Point', coordinates: [139.758, 35.666] }, properties: { category: 'station', marker: '駅', label: '新橋', labelPlacement: 'right', year: '1872', detail: '1872年に横浜との間で鉄道が開業した東京側起点。', timeSlice: '1872' } },
        { id: 'a6-1872-yokohama', geometry: { type: 'Point', coordinates: [139.637, 35.454] }, properties: { category: 'station', marker: '駅', label: '横浜', labelPlacement: 'left', year: '1872', detail: '1872年に新橋と結ばれた開港都市。', timeSlice: '1872' } },
      ],
    },
    {
      id: 'railway-a6-lines',
      provenance: {
        sourceId: 'a6-railway-schematic-lines',
        title: '1872年・1889年の主要鉄道接続（模式線）',
        institution: 'jpn-history-decade',
        url: 'https://www.archives.go.jp/ayumi/kobetsu/m22_1889_02.html',
        sourceType: 'derived',
        license: 'Site-authored schematic LineStrings from official opening/full-connection facts and representative waypoints; no historical map vector trace.',
        derivedFromSourceIds: ['archives-railway-1872', 'archives-tokaido-1889'],
        temporalCoverage: { from: '1872-09-12', to: '1889-07-01', basis: 'range' },
        spatialCoverage: '新橋―横浜、東海道沿い新橋―神戸',
        geometryConfidence: 'schematic',
        transformations: [
          '公文書で確認できる開業区間・全通区間を地図の主張とした。',
          '主要都市をwaypointとして接続し、歴史線路中心線のトレースは行わなかった。',
          '線の長さ・曲率・局地経路は測量値として扱わない。',
        ],
        notes: '交通ネットワークの接続段階を示す線で、正確な線形・駅間距離の測定用途には使わない。',
      },
      allowedGeometryTypes: ['LineString'],
      requiredProperties: ['category', 'label', 'detail', 'timeSlice'],
      features: [
        {
          id: 'a6-line-1889-tokaido',
          geometry: { type: 'LineString', coordinates: [[139.758,35.666],[139.637,35.454],[138.383,34.975],[137.383,34.762],[136.881,35.170],[136.193,35.315],[135.758,34.985],[135.498,34.702],[135.195,34.690]] },
          properties: { category: 'railway-route', label: '新橋―神戸主要接続（模式）', detail: '1889年全通の東海道線を主要都市waypointで模式化。', timeSlice: '1889' },
        },
        {
          id: 'a6-line-1872-shimbashi-yokohama',
          geometry: { type: 'LineString', coordinates: [[139.758,35.666],[139.738,35.628],[139.696,35.590],[139.642,35.531],[139.637,35.454]] },
          properties: { category: 'railway-route', label: '新橋―横浜（模式）', detail: '1872年開業区間の接続方向を示す模式線。', timeSlice: '1872' },
        },
      ],
    },
  ],
  layers: [
    { id: 'a6-lines', datasetId: 'railway-a6-lines', categoryProperty: 'category', categories: ['railway-route'] },
    { id: 'a6-points', datasetId: 'railway-a6-points', categoryProperty: 'category', categories: ['station'] },
  ],
  legend: [
    { value: 'railway-route', label: '主要鉄道接続（模式）', marker: '線', color: '#5b4b3a', kind: 'line', lineStyle: 'dashed' },
    { value: 'station', label: '主要駅・都市の代表位置', marker: '駅', color: '#38536a' },
  ],
  auditState: {
    dataAudit: 'passed',
    styleAudit: 'passed',
    visualAudit: 'pending-human',
    notes: [
      'A6は旧判定でhistorical route geometry不足によりdeferredだったが、現行標準では接続関係を問うためschematic LineStringで十分と再判定した。',
      '精密線路復元ではなく、1872年の短区間と1889年の長距離接続の差を示す。',
      'LineStringを含むためHuman Visual Auditは後送する。',
    ],
  },
}
