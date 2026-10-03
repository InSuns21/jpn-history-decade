import type { HistoricalMapDefinition } from '../schema.ts'

export const hangzhouBayLanding1937Map: HistoricalMapDefinition = {
  id: 'hangzhou-bay-landing-1937',
  title: '1937年11月の上海正面と杭州湾北岸',
  historicalQuestion:
    '上海正面の南西側に杭州湾上陸という別の作戦軸が生じたことで、松江・金山衛・嘉興・蘇州を含む空間条件はどう変わったのか。',
  readingNote:
    '主要都市は代表点、金山衛周辺の面は11月5日の上陸が行われた「方面」を示す小さな模式面で、上陸浜・橋頭堡・占領境界・前線の精密形状ではない。進軍路・中国軍退却路は描かない。背景地図・海岸線・道路は現代のOpenStreetMapである。',
  status:'draft',
  period:{startYear:1937,endYear:1937},
  initialView:{center:[121.15,31.00],zoom:7.1},
  datasets:[
    {
      id:'a22-reference-points',
      provenance:{
        sourceId:'a22-shanghai-hangzhou-points',
        title:'上海・杭州湾北岸の主要地点',
        institution:'jpn-history-decade',
        url:'https://ndlsearch.ndl.go.jp/books/R100000002-I000008300106',
        sourceType:'derived',
        license:'Site-authored approximate representative coordinates checked against 1937 regional maps and NIDS historical studies.',
        derivedFromSourceIds:['ndl-shanghai-suzhou-1937','nids-sosho-072','nids-sosho-086','nids-forum-2019-tobe'],
        temporalCoverage:{from:'1937-10-26',to:'1937-11-12',basis:'range'},
        spatialCoverage:'上海・松江・金山衛・嘉興・蘇州',
        geometryConfidence:'approximate',
        transformations:[
          '1937年地域図で主要都市・湾岸地点の相対配置を照合した。',
          '現在の同名地域付近へ代表点を配置し、道路・進軍路・退却路は復元していない。',
        ],
        notes:'広域位置関係を読むための代表点。',
      },
      allowedGeometryTypes:['Point'],
      requiredProperties:['category','marker','label','labelPlacement','year','detail'],
      features:[
        {id:'shanghai',geometry:{type:'Point',coordinates:[121.474,31.230]},properties:{category:'front-reference',marker:'正',label:'上海',labelPlacement:'right',year:'1937-11',detail:'正面戦が続いていた都市・戦場。'}},
        {id:'songjiang',geometry:{type:'Point',coordinates:[121.227,31.033]},properties:{category:'route-reference',marker:'地',label:'松江',labelPlacement:'top',year:'1937-11',detail:'上海南西側の主要地点。杭州湾北岸からの圧力との位置関係を読む。'}},
        {id:'jinshanwei',geometry:{type:'Point',coordinates:[121.30,30.73]},properties:{category:'landing-reference',marker:'上',label:'金山衛付近',labelPlacement:'right',year:'1937-11-05',detail:'第10軍の杭州湾北岸上陸を示す代表地点。'}},
        {id:'jiaxing',geometry:{type:'Point',coordinates:[120.76,30.75]},properties:{category:'route-reference',marker:'地',label:'嘉興',labelPlacement:'left',year:'1937-11',detail:'杭州湾北岸から西方へ広がる作戦空間の参照都市。'}},
        {id:'suzhou',geometry:{type:'Point',coordinates:[120.62,31.30]},properties:{category:'route-reference',marker:'地',label:'蘇州',labelPlacement:'left',year:'1937-11',detail:'上海西方の主要都市。中国軍退却方向を考える広域参照点。'}},
      ],
    },
    {
      id:'a22-landing-area',
      provenance:{
        sourceId:'a22-jinshanwei-landing-area',
        title:'1937年11月5日 杭州湾北岸上陸方面（模式）',
        institution:'jpn-history-decade',
        url:'https://www.nids.mod.go.jp/military_history_search/SoshoView?kanno=072',
        sourceType:'derived',
        license:'Site-authored schematic area based on NIDS descriptions of the Hangzhou Bay landing; no battle-map polygon is copied or traced.',
        derivedFromSourceIds:['nids-sosho-072','nids-sosho-086','nids-forum-2019-tobe'],
        temporalCoverage:{from:'1937-11-05',to:'1937-11-06',basis:'approximate'},
        spatialCoverage:'杭州湾北岸・金山衛周辺',
        geometryConfidence:'schematic',
        transformations:[
          '防衛研究所資料で11月5日の杭州湾北岸上陸と金山衛方面を確認した。',
          '上陸の方向を理解するため、金山衛周辺に小さな説明用polygonを置いた。',
          '外周・面積は橋頭堡、占領境界、戦闘範囲を表さない。',
        ],
        notes:'上陸「方面」だけを示す説明面。',
      },
      allowedGeometryTypes:['Polygon'],
      requiredProperties:['category'],
      features:[{id:'jinshanwei-landing-schematic',geometry:{type:'Polygon',coordinates:[[[121.16,30.66],[121.39,30.66],[121.42,30.79],[121.18,30.82],[121.16,30.66]]]},properties:{category:'landing-area'}}],
    },
  ],
  layers:[
    {id:'a22-area',datasetId:'a22-landing-area',categoryProperty:'category',categories:['landing-area']},
    {id:'a22-points',datasetId:'a22-reference-points',categoryProperty:'category',categories:['front-reference','route-reference','landing-reference']},
  ],
  legend:[
    {value:'landing-area',label:'杭州湾北岸上陸方面（概略）',marker:'域',color:'#825044',kind:'area'},
    {value:'front-reference',label:'上海正面',marker:'正',color:'#654d43'},
    {value:'route-reference',label:'主要地理参照点',marker:'地',color:'#526777'},
    {value:'landing-reference',label:'上陸代表地点',marker:'上',color:'#85443a'},
  ],
  auditState:{dataAudit:'passed',styleAudit:'passed',visualAudit:'pending-human',notes:[
    'A22はadopted/highを維持し、新基準でpoint-onlyから「上陸方面の小さなschematic area」まで拡張した。',
    '作戦線・退却路は追加していない。',
    'polygonを含むためHuman Visual Auditは後送する。',
  ]},
}
