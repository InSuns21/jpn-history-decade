import type { HistoricalMapDefinition } from '../schema.ts'

export const yellowRiverFlood1938Map: HistoricalMapDefinition = {
  id:'yellow-river-flood-1938',
  title:'1938年6月の黄河決壊 — 水系・鉄道・洪水方向（模式）',
  historicalQuestion:
    '花園口の決壊は、鄭州・開封・徐州を結ぶ東西交通と、鄭州から武漢へ向かう南北交通の近くで、洪水をどの方向へ広げたのか。',
  readingNote:
    '黄河・鉄道は大きな位置関係を読むための一般化線、洪水線は花園口から河南東部・淮河水系へ向かった大方向だけを示す模式線で、実測河道・確定浸水境界・洪水先端ではない。浸水域polygonは表示しない。背景地図・河川・行政界は現代のOpenStreetMapである。',
  status:'draft',
  period:{startYear:1938,endYear:1938},
  initialView:{center:[114.8,33.8],zoom:5.0},
  datasets:[
    {
      id:'a26-points',
      provenance:{
        sourceId:'a26-yellow-river-points',
        title:'黄河決壊と主要交通点',
        institution:'jpn-history-decade',
        url:'https://disasterhistory.org/yellow-river-flood-1938-47',
        sourceType:'derived',
        license:'Site-authored approximate representative coordinates based on cited historical research and official map controls.',
        derivedFromSourceIds:['cambridge-muscolino-ecology-war','cambridge-edgerton-tarpley-yellow-river','frus-yellow-river-1938-06-15','loc-china-map-1931'],
        temporalCoverage:{from:'1938-06-01',to:'1938-06-17',basis:'range'},
        spatialCoverage:'河南東部から武漢方面',
        geometryConfidence:'approximate',
        transformations:['花園口・鄭州・開封・徐州・武漢の位置を研究・歴史地図で照合し代表点化した。','決壊口幅・堤防形状は復元していない。'],
        notes:'水系・交通軸との相対配置を読むための代表点。',
      },
      allowedGeometryTypes:['Point'],
      requiredProperties:['category','marker','label','labelPlacement','year','detail'],
      features:[
        {id:'huayuankou',geometry:{type:'Point',coordinates:[113.65,34.92]},properties:{category:'breach',marker:'決',label:'花園口',labelPlacement:'left',year:'1938-06',detail:'黄河堤防決壊の主要地点を示す代表位置。'}},
        {id:'zhengzhou',geometry:{type:'Point',coordinates:[113.63,34.75]},properties:{category:'transport-node',marker:'鉄',label:'鄭州',labelPlacement:'right',year:'1938',detail:'黄河の南側で隴海・平漢鉄道が接続する主要都市。'}},
        {id:'kaifeng',geometry:{type:'Point',coordinates:[114.31,34.80]},properties:{category:'transport-node',marker:'鉄',label:'開封',labelPlacement:'top',year:'1938',detail:'河南東部・隴海鉄道沿線の主要都市。'}},
        {id:'xuzhou',geometry:{type:'Point',coordinates:[117.29,34.21]},properties:{category:'transport-node',marker:'鉄',label:'徐州',labelPlacement:'right',year:'1938',detail:'直前フェーズの交通結節。隴海鉄道で河南方面へつながる。'}},
        {id:'wuhan',geometry:{type:'Point',coordinates:[114.30,30.59]},properties:{category:'transport-node',marker:'都',label:'武漢',labelPlacement:'right',year:'1938',detail:'平漢鉄道南側の主要交通・軍事中心。'}},
      ],
    },
    {
      id:'a26-lines',
      provenance:{
        sourceId:'a26-water-transport-schematic',
        title:'決壊前黄河・鉄道・洪水方向（一般化／模式）',
        institution:'jpn-history-decade',
        url:'https://www.loc.gov/item/2016587371/',
        sourceType:'derived',
        license:'Site-authored generalized and schematic lines checked against rights-clear historical map controls and cited research; no research flood polygon is traced.',
        derivedFromSourceIds:['loc-china-map-1931','mhgis-railway','cambridge-muscolino-ecology-war','frus-yellow-river-1938-06-15'],
        temporalCoverage:{from:'1938-01-01',to:'1938-06-17',basis:'range'},
        spatialCoverage:'河南東部・華中北部',
        geometryConfidence:'schematic',
        transformations:[
          '1938年前の黄河の大きな流路と主要鉄道接続を歴史地図で確認した。',
          '黄河・鉄道は主要waypointによる一般化線とした。',
          '洪水は研究記述の「河南東部へ南東に広がり淮河水系へ入る」という方向だけを模式線化し、浸水polygonは作らない。',
        ],
        notes:'洪水線は水の大方向だけを表し、河道・浸水境界・時点別先端を意味しない。',
      },
      allowedGeometryTypes:['LineString'],
      requiredProperties:['category','label','detail'],
      features:[
        {id:'yellow-river-prebreach',geometry:{type:'LineString',coordinates:[[112.4,34.85],[113.65,34.92],[114.31,34.80],[115.0,35.0],[116.0,35.2],[117.0,35.0]]},properties:{category:'river-axis',label:'決壊前黄河の概略軸',detail:'1938年6月前の大きな位置関係を示す一般化線。'}},
        {id:'longhai-axis',geometry:{type:'LineString',coordinates:[[113.63,34.75],[114.31,34.80],[115.66,34.45],[117.29,34.21]]},properties:{category:'rail-axis',label:'隴海鉄道（一般化）',detail:'鄭州―開封―徐州を結ぶ東西交通軸。'}},
        {id:'pinghan-axis',geometry:{type:'LineString',coordinates:[[113.63,34.75],[113.84,33.58],[114.02,32.98],[114.09,32.13],[114.30,30.59]]},properties:{category:'rail-axis',label:'平漢鉄道（一般化）',detail:'鄭州から漢口／武漢方面へ南下する主要交通軸。'}},
        {id:'flood-direction',geometry:{type:'LineString',coordinates:[[113.65,34.92],[114.10,34.30],[114.65,33.75],[115.25,33.30],[116.05,33.05]]},properties:{category:'flood-direction',label:'洪水の南東方向（模式）',detail:'決壊水が河南東部へ南東に広がり淮河水系へ向かった大方向だけを示す。'}} ,
      ],
    },
  ],
  layers:[
    {id:'a26-lines-layer',datasetId:'a26-lines',categoryProperty:'category',categories:['river-axis','rail-axis','flood-direction']},
    {id:'a26-points-layer',datasetId:'a26-points',categoryProperty:'category',categories:['breach','transport-node']},
  ],
  legend:[
    {value:'river-axis',label:'決壊前黄河の概略軸',marker:'川',color:'#477080',kind:'line',lineStyle:'dashed'},
    {value:'rail-axis',label:'主要鉄道（一般化）',marker:'鉄',color:'#5b5b52',kind:'line',lineStyle:'solid'},
    {value:'flood-direction',label:'洪水の大方向（模式）',marker:'水',color:'#6b718a',kind:'line',lineStyle:'dashed'},
    {value:'breach',label:'主要決壊地点',marker:'決',color:'#88453b'},
    {value:'transport-node',label:'主要交通都市',marker:'鉄',color:'#4e6358'},
  ],
  auditState:{dataAudit:'passed',styleAudit:'passed',visualAudit:'pending-human',notes:[
    'A26はadopted/highを維持し、旧判定どおり浸水polygonを捨てたまま、洪水方向のschematic lineを中心表現として採用した。',
    '洪水方向は実測河道・確定浸水境界ではなく、面積・距離測定に使えない。',
    'LineStringを含むためHuman Visual Auditは後送する。',
  ]},
}
