import type { HistoricalMapDefinition } from '../schema.ts'

export const shanghaiNanjingAdvance1937Map: HistoricalMapDefinition = {
  id:'shanghai-nanjing-advance-1937',
  title:'1937年11月の上海―南京間 — 西進空間（模式）',
  historicalQuestion:
    '上海から南京まで約300kmの間に複数の都市が連なり、現地軍の西進が中央の制限とずれながら広がったことを、どのような距離・方向として読めるか。',
  readingNote:
    '都市は代表点、破線は上海―蘇州―無錫―常州―鎮江―南京という主要都市列を結んだ「西進方向」の模式線で、実際の第10軍・上海派遣軍の進軍路、鉄道・道路、制令線ではない。背景地図・道路・行政界・水際線は現代のOpenStreetMapである。',
  status:'draft',
  period:{startYear:1937,endYear:1937},
  initialView:{center:[119.65,31.45],zoom:6.0},
  datasets:[
    {
      id:'a23-points',
      provenance:{
        sourceId:'a23-shanghai-nanjing-points',
        title:'1937年上海―南京間の主要都市',
        institution:'jpn-history-decade',
        url:'https://ndlsearch.ndl.go.jp/books/R100000002-I000011194813',
        sourceType:'derived',
        license:'Site-authored approximate representative coordinates checked against 1937 regional maps.',
        derivedFromSourceIds:['ndl-shanghai-nanjing-1937','ndl-nanjing-guangde-1937','ndl-jiangsu-zhejiang-transport-1937','nids-forum-2019-tobe'],
        temporalCoverage:{from:'1937-11-13',to:'1937-11-30',basis:'range'},
        spatialCoverage:'上海から南京までの長江下流・太湖北側',
        geometryConfidence:'approximate',
        transformations:[
          '1937年地域図で上海・蘇州・無錫・常州・鎮江・南京の位置関係を照合した。',
          '各都市を代表点として配置した。',
        ],
        notes:'都市列の距離感を読むための代表点。',
      },
      allowedGeometryTypes:['Point'],
      requiredProperties:['category','marker','label','labelPlacement','year','detail'],
      features:[
        {id:'shanghai',geometry:{type:'Point',coordinates:[121.474,31.230]},properties:{category:'city',marker:'都',label:'上海',labelPlacement:'right',year:'1937-11',detail:'直前の上海戦の終点・西進の東側基準点。'}},
        {id:'suzhou',geometry:{type:'Point',coordinates:[120.62,31.30]},properties:{category:'city',marker:'都',label:'蘇州',labelPlacement:'bottom',year:'1937-11',detail:'上海西方、太湖北東側の主要都市。'}},
        {id:'wuxi',geometry:{type:'Point',coordinates:[120.31,31.49]},properties:{category:'city',marker:'都',label:'無錫',labelPlacement:'top',year:'1937-11',detail:'太湖北側の主要都市。'}},
        {id:'changzhou',geometry:{type:'Point',coordinates:[119.97,31.81]},properties:{category:'city',marker:'都',label:'常州',labelPlacement:'bottom',year:'1937-11',detail:'南京へ向かう中間都市。'}},
        {id:'zhenjiang',geometry:{type:'Point',coordinates:[119.42,32.19]},properties:{category:'city',marker:'都',label:'鎮江',labelPlacement:'top',year:'1937-11',detail:'南京東方・長江沿いの主要都市。'}},
        {id:'nanjing',geometry:{type:'Point',coordinates:[118.80,32.06]},properties:{category:'target-reference',marker:'京',label:'南京',labelPlacement:'left',year:'1937-11',detail:'国民政府の首都。11月末には正式攻略命令より先に現地軍が接近した。'}},
      ],
    },
    {
      id:'a23-direction',
      provenance:{
        sourceId:'a23-westward-direction-schematic',
        title:'上海から南京方面への西進方向（模式）',
        institution:'jpn-history-decade',
        url:'https://www.nids.mod.go.jp/event/proceedings/forum/pdf/2019/02_tobe.pdf',
        sourceType:'derived',
        license:'Site-authored schematic LineString connecting representative cities; it is not a traced campaign route.',
        derivedFromSourceIds:['nids-forum-2019-tobe','ndl-shanghai-nanjing-1937','ndl-jiangsu-zhejiang-transport-1937'],
        temporalCoverage:{from:'1937-11-13',to:'1937-11-30',basis:'range'},
        spatialCoverage:'上海―南京方向',
        geometryConfidence:'schematic',
        transformations:[
          '現地軍が上海から南京方面へ西進したことと、主要都市列を史料・同時代地図で確認した。',
          '相対方向を示すため都市代表点を順に接続した。',
          '実際の進軍路、制令線、鉄道・道路中心線は表さない。',
        ],
        notes:'方向と距離感の説明用。線上の通過を主張しない。',
      },
      allowedGeometryTypes:['LineString'],
      requiredProperties:['category','label','detail'],
      features:[{id:'westward-direction',geometry:{type:'LineString',coordinates:[[121.474,31.230],[120.62,31.30],[120.31,31.49],[119.97,31.81],[119.42,32.19],[118.80,32.06]]},properties:{category:'advance-direction',label:'南京方面への西進方向（模式）',detail:'主要都市列を結んだ方向表示で、部隊の進軍路ではない。'}}],
    },
  ],
  layers:[
    {id:'a23-line',datasetId:'a23-direction',categoryProperty:'category',categories:['advance-direction']},
    {id:'a23-points-layer',datasetId:'a23-points',categoryProperty:'category',categories:['city','target-reference']},
  ],
  legend:[
    {value:'advance-direction',label:'南京方面への西進方向（模式）',marker:'線',color:'#765044',kind:'line',lineStyle:'dashed'},
    {value:'city',label:'主要都市',marker:'都',color:'#4f6372'},
    {value:'target-reference',label:'南京',marker:'京',color:'#7b4339'},
  ],
  auditState:{dataAudit:'passed',styleAudit:'passed',visualAudit:'pending-human',notes:[
    'A23はadopted/highを維持し、新基準で主要都市pointに加えて西進方向のschematic LineStringを採用した。',
    '旧計画で禁止した「もっともらしい進軍路」にならないよう、都市列を結ぶ方向表示と明示し、実進軍経路・制令線・交通線を主張しない。',
    'LineStringを含むためHuman Visual Auditは後送する。',
  ]},
}
