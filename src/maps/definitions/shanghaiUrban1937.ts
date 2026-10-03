import type { HistoricalMapDefinition } from '../schema.ts'

export const shanghaiUrban1937Map: HistoricalMapDefinition = {
  id: 'shanghai-urban-1937',
  title: '1937年8月の上海 — 租界と主要戦闘地区（概略）',
  historicalQuestion:
    '共同租界・フランス租界という外国統治空間と、虹口・閘北・江湾などの主要軍事地区は、上海市街でどれほど近接していたのか。',
  readingNote:
    '租界の面はVirtual Shanghaiの1935–45年共同租界資料・1937年フランス租界資料と同時代市街図を参照して本サイト側で一般化した模式面で、法的境界の精密復元ではない。軍事地区は代表点であり、前線・部隊配置・中国側市街全体の境界は描かない。背景地図・道路・水際線は現代のOpenStreetMapである。',
  status: 'draft',
  period: { startYear: 1937, endYear: 1937 },
  initialView: { center: [121.48, 31.26], zoom: 10.0 },
  datasets: [
    {
      id: 'a21-concession-areas',
      provenance: {
        sourceId: 'a21-shanghai-concessions-schematic',
        title: '1937年前後の上海共同租界・フランス租界（一般化表示）',
        institution: 'jpn-history-decade / Virtual Shanghai',
        url: 'https://www.virtualshanghai.net/Data/Tables?ID=224',
        sourceType: 'derived',
        license: 'Site-authored generalized polygons informed by Virtual Shanghai Resource 224 (CC BY 4.0), Resource 223 (CC0 1.0), and a 1937 NDL city map; not a copy of source vector geometry.',
        derivedFromSourceIds: ['virtual-shanghai-224', 'virtual-shanghai-223', 'ndl-shanghai-city-map-1937'],
        temporalCoverage: { from: '1937-08-01', to: '1937-08-31', basis: 'range' },
        spatialCoverage: '上海共同租界・フランス租界',
        geometryConfidence: 'schematic',
        transformations: [
          'Virtual Shanghaiの共同租界・フランス租界資料で1937年前後の統治空間の配置を確認した。',
          '法的境界を精密転写せず、市街スケールで相対配置を読むため外周を単純化した説明用polygonを作成した。',
          '面積・境界からの距離・街区単位の帰属判定には使用しない。',
        ],
        notes: '租界が隣接する外国統治空間だったことを示す模式面。',
      },
      allowedGeometryTypes: ['Polygon'],
      requiredProperties: ['category'],
      features: [
        { id: 'international-settlement-schematic', geometry: { type: 'Polygon', coordinates: [[[121.447,31.232],[121.488,31.232],[121.505,31.247],[121.505,31.266],[121.478,31.276],[121.448,31.261],[121.447,31.232]]] }, properties: { category: 'international-settlement' } },
        { id: 'french-concession-schematic', geometry: { type: 'Polygon', coordinates: [[[121.424,31.207],[121.466,31.207],[121.481,31.226],[121.465,31.238],[121.431,31.231],[121.424,31.207]]] }, properties: { category: 'french-concession' } },
      ],
    },
    {
      id: 'a21-reference-points',
      provenance: {
        sourceId: 'a21-shanghai-reference-points',
        title: '1937年8月上海の主要軍事・地理地区',
        institution: 'jpn-history-decade',
        url: 'https://ndlsearch.ndl.go.jp/books/R100000002-I000008307139',
        sourceType: 'derived',
        license: 'Site-authored approximate representative coordinates checked against a 1937 city map and cited historical research; no battle-line geometry is copied.',
        derivedFromSourceIds: ['ndl-shanghai-city-map-1937', 'virtual-shanghai-eatlas-274', 'jacar-shanghai-snlf'],
        temporalCoverage: { from: '1937-08-13', to: '1937-08-31', basis: 'range' },
        spatialCoverage: '上海市街北部・黄浦江沿岸',
        geometryConfidence: 'approximate',
        transformations: [
          '虹口・閘北・江湾・呉淞口等の同時代地名と配置を資料で照合した。',
          '地区中心付近を代表点として配置し、部隊線・前線・道路は作成していない。',
        ],
        notes: '地区の近接関係を示す代表点。',
      },
      allowedGeometryTypes: ['Point'],
      requiredProperties: ['category','marker','label','labelPlacement','year','detail'],
      features: [
        { id:'hongkou', geometry:{type:'Point',coordinates:[121.494,31.270]}, properties:{category:'japanese-reference',marker:'日',label:'虹口',labelPlacement:'right',year:'1937-08',detail:'日本海軍陸戦隊の活動・居留民保護を考える主要地区。'} },
        { id:'zhabei', geometry:{type:'Point',coordinates:[121.458,31.273]}, properties:{category:'battle-reference',marker:'戦',label:'閘北',labelPlacement:'left',year:'1937-08',detail:'上海戦初期の主要戦闘地区の一つ。'} },
        { id:'jiangwan', geometry:{type:'Point',coordinates:[121.485,31.326]}, properties:{category:'battle-reference',marker:'戦',label:'江湾',labelPlacement:'right',year:'1937-08',detail:'上海市街北方の主要戦闘地区。'} },
        { id:'wusong', geometry:{type:'Point',coordinates:[121.500,31.374]}, properties:{category:'water-reference',marker:'河',label:'呉淞口',labelPlacement:'right',year:'1937-08',detail:'黄浦江と長江河口側の接続を考える地理参照点。'} },
      ],
    },
  ],
  layers: [
    { id:'a21-concessions',datasetId:'a21-concession-areas',categoryProperty:'category',categories:['international-settlement','french-concession'] },
    { id:'a21-points',datasetId:'a21-reference-points',categoryProperty:'category',categories:['japanese-reference','battle-reference','water-reference'] },
  ],
  legend: [
    { value:'international-settlement',label:'共同租界（模式面）',marker:'域',color:'#566b78',kind:'area' },
    { value:'french-concession',label:'フランス租界（模式面）',marker:'域',color:'#75635b',kind:'area' },
    { value:'japanese-reference',label:'日本側活動の主要地区',marker:'日',color:'#715143' },
    { value:'battle-reference',label:'主要戦闘地区',marker:'戦',color:'#84453b' },
    { value:'water-reference',label:'河口・水運参照点',marker:'河',color:'#3f6675' },
  ],
  auditState: {
    dataAudit:'passed',
    styleAudit:'passed',
    visualAudit:'pending-human',
    notes:[
      'A21はadopted/highを維持した。',
      '旧計画の精密Historical GIS外周を直接取り込まず、現行標準に合わせて相対配置を読むためのschematic areaへ一般化した。',
      '中国側市街全体、前線、部隊配置、進軍路は描かない。',
      'polygonを含むためHuman Visual Auditは後送する。',
    ],
  },
}
