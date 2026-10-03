import type { HistoricalMapDefinition } from '../schema.ts'

export const xuzhouRail1938Map: HistoricalMapDefinition = {
  id:'xuzhou-rail-1938',
  title:'1938年春の徐州 — 津浦・隴海鉄道の結節（模式）',
  historicalQuestion:
    'なぜ徐州は軍事目標になったのか。華北―華中の南北軸と、沿海―河南の東西軸が交差する交通地理から読めるか。',
  readingNote:
    '鉄道線は1930年代の歴史鉄道図・歴史GISで存在と主要経由地を照合し、代表waypointを結んだ一般化線で、1938年の線路中心線を測量復元したものではない。日本軍・中国軍の進撃路、包囲線、退却路は描かない。背景地図は現代のOpenStreetMapである。',
  status:'draft',
  period:{startYear:1938,endYear:1938},
  initialView:{center:[117.3,34.4],zoom:5.2},
  datasets:[
    {
      id:'a25-points',
      provenance:{
        sourceId:'a25-xuzhou-reference-points',
        title:'徐州作戦と鉄道結節の主要地点',
        institution:'jpn-history-decade',
        url:'https://www.nids.mod.go.jp/military_history_search/SoshoView?kanno=089',
        sourceType:'derived',
        license:'Site-authored approximate representative coordinates checked against NIDS operational history and historical railway maps.',
        derivedFromSourceIds:['nids-china-ops-89','nids-forum-expansion-2019','mhgis-railway','sinica-historical-railroad'],
        temporalCoverage:{from:'1938-04-01',to:'1938-05-19',basis:'range'},
        spatialCoverage:'山東・江蘇・河南・南京方面',
        geometryConfidence:'approximate',
        transformations:['徐州・台児荘・済南・浦口／南京・海州・開封・鄭州を歴史資料で照合し代表点化した。','部隊配置・戦線は作成していない。'],
        notes:'鉄道結節を読むための都市・戦場代表点。',
      },
      allowedGeometryTypes:['Point'],
      requiredProperties:['category','marker','label','labelPlacement','year','detail'],
      features:[
        {id:'xuzhou',geometry:{type:'Point',coordinates:[117.29,34.21]},properties:{category:'junction',marker:'結',label:'徐州',labelPlacement:'right',year:'1938',detail:'津浦鉄道と隴海鉄道が交差する主要交通結節。'}},
        {id:'taierzhuang',geometry:{type:'Point',coordinates:[117.73,34.56]},properties:{category:'battle-reference',marker:'戦',label:'台児荘',labelPlacement:'right',year:'1938',detail:'徐州北東側の主要戦闘地域。局地戦線は描かない。'}},
        {id:'jinan',geometry:{type:'Point',coordinates:[117.12,36.65]},properties:{category:'rail-node',marker:'鉄',label:'済南',labelPlacement:'right',year:'1938',detail:'津浦鉄道北側の主要都市。'}},
        {id:'pukou',geometry:{type:'Point',coordinates:[118.72,32.12]},properties:{category:'rail-node',marker:'鉄',label:'浦口／南京方面',labelPlacement:'right',year:'1938',detail:'津浦鉄道南側の長江・南京方面への接続参照点。'}},
        {id:'haizhou',geometry:{type:'Point',coordinates:[119.17,34.60]},properties:{category:'rail-node',marker:'鉄',label:'海州',labelPlacement:'right',year:'1938',detail:'隴海鉄道東側の参照地点。'}},
        {id:'kaifeng',geometry:{type:'Point',coordinates:[114.31,34.80]},properties:{category:'rail-node',marker:'鉄',label:'開封',labelPlacement:'top',year:'1938',detail:'隴海鉄道西方の主要都市。'}},
        {id:'zhengzhou',geometry:{type:'Point',coordinates:[113.63,34.75]},properties:{category:'rail-node',marker:'鉄',label:'鄭州',labelPlacement:'left',year:'1938',detail:'隴海鉄道と平漢鉄道が接続する内陸交通結節。'}},
      ],
    },
    {
      id:'a25-rail-lines',
      provenance:{
        sourceId:'a25-railway-lines-schematic',
        title:'津浦・隴海鉄道の主要接続（一般化）',
        institution:'jpn-history-decade',
        url:'https://mhdb.mh.sinica.edu.tw/MHGIS/railway/',
        sourceType:'derived',
        license:'Site-authored generalized LineStrings informed by MHGIS and historical railway maps; source vector geometry is not redistributed.',
        derivedFromSourceIds:['mhgis-railway','sinica-historical-railroad','loc-china-map-1931'],
        temporalCoverage:{from:'1938-01-01',to:'1938-05-19',basis:'range'},
        spatialCoverage:'津浦鉄道・隴海鉄道の徐州周辺主要区間',
        geometryConfidence:'approximate',
        transformations:[
          '1938年以前に存在した津浦・隴海鉄道と主要経由都市を歴史GIS・同時代鉄道図で照合した。',
          '主要都市waypointを追加して一般化線を作り、source vectorをコピーしていない。',
          '局地的線形・駅位置・曲線半径は測定用途に使わない。',
        ],
        notes:'二つの幹線の交差関係を読むための一般化線。',
      },
      allowedGeometryTypes:['LineString'],
      requiredProperties:['category','label','detail'],
      features:[
        {id:'jinpu',geometry:{type:'LineString',coordinates:[[117.12,36.65],[116.59,35.42],[117.29,34.21],[117.93,33.95],[118.72,32.12]]},properties:{category:'jinpu',label:'津浦鉄道（一般化）',detail:'済南―徐州―浦口／南京方面を結ぶ南北幹線。'}},
        {id:'longhai',geometry:{type:'LineString',coordinates:[[119.17,34.60],[118.36,34.36],[117.29,34.21],[115.66,34.45],[114.31,34.80],[113.63,34.75]]},properties:{category:'longhai',label:'隴海鉄道（一般化）',detail:'海州―徐州―開封―鄭州方面を結ぶ東西幹線。'}} ,
      ],
    },
  ],
  layers:[
    {id:'a25-lines',datasetId:'a25-rail-lines',categoryProperty:'category',categories:['jinpu','longhai']},
    {id:'a25-points-layer',datasetId:'a25-points',categoryProperty:'category',categories:['junction','battle-reference','rail-node']},
  ],
  legend:[
    {value:'jinpu',label:'津浦鉄道（一般化）',marker:'南',color:'#4c6473',kind:'line',lineStyle:'solid'},
    {value:'longhai',label:'隴海鉄道（一般化）',marker:'東',color:'#735747',kind:'line',lineStyle:'dashed'},
    {value:'junction',label:'鉄道結節・徐州',marker:'結',color:'#81483d'},
    {value:'battle-reference',label:'主要戦闘参照点',marker:'戦',color:'#7a4038'},
    {value:'rail-node',label:'主要鉄道都市',marker:'鉄',color:'#4d6355'},
  ],
  auditState:{dataAudit:'passed',styleAudit:'passed',visualAudit:'pending-human',notes:[
    'A25はadopted/highを維持し、交通結節性だけを地図化した。',
    '鉄道線は歴史GIS・鉄道図をcontrol sourceとして一般化し、戦史付図の進軍線・包囲線はトレースしていない。',
    'LineStringを含むためHuman Visual Auditは後送する。',
  ]},
}
