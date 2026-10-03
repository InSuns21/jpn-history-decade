import type { HistoricalMapDefinition } from '../schema.ts'

export const hainanSupply1939Map: HistoricalMapDefinition = {
  id:'hainan-supply-1939',
  title:'1939年の海南島と華南・仏印から中国への交通',
  historicalQuestion:
    '海南島占領は、香港・広東・仏印・雲南／広西を結ぶ既存の対外交通網に対して、どの位置から圧力を加えうるようになったのか。',
  readingNote:
    '海南島は海口・三亜の代表点で示し、島全域を「完全占領域」として塗らない。海防―河内―ラオカイ―昆明は歴史的接続を主要waypointで一般化した線、海防―河内―諒山―広西方面は1939年2月に報告された自動車輸送方向の模式線で、正確な鉄道・道路中心線ではない。背景地図・国境は現代のOpenStreetMapである。',
  status:'draft',
  period:{startYear:1939,endYear:1939},
  initialView:{center:[108.0,22.2],zoom:4.0},
  datasets:[
    {
      id:'a28-points',
      provenance:{
        sourceId:'a28-hainan-supply-points',
        title:'海南島・華南・仏印・雲南の主要交通／軍事地点',
        institution:'jpn-history-decade',
        url:'https://history.state.gov/historicaldocuments/frus1939v03/d95',
        sourceType:'derived',
        license:'Site-authored approximate representative coordinates from cited FRUS, JACAR, and historical transport descriptions.',
        derivedFromSourceIds:['frus-hainan-1939-02-10','frus1939v03-d709','frus1939v03-d710','jacar-hainan-naval-office'],
        temporalCoverage:{from:'1939-02-08',to:'1939-05-10',basis:'range'},
        spatialCoverage:'香港・広東・海南島・北部仏印・雲南／広西方面',
        geometryConfidence:'approximate',
        transformations:['海口・三亜・海防・河内・ラオカイ・昆明・諒山などを史料で確認し代表点化した。','上陸浜・部隊配置・占領境界は復元していない。'],
        notes:'交通網への位置的圧力を読むための代表点。',
      },
      allowedGeometryTypes:['Point'],
      requiredProperties:['category','marker','label','labelPlacement','year','detail'],
      features:[
        {id:'hongkong',geometry:{type:'Point',coordinates:[114.17,22.30]},properties:{category:'coastal-node',marker:'港',label:'香港／九龍',labelPlacement:'right',year:'1939',detail:'華南沿岸の主要対外交通参照点。'}},
        {id:'guangzhou',geometry:{type:'Point',coordinates:[113.26,23.13]},properties:{category:'coastal-node',marker:'広',label:'広東（広州）',labelPlacement:'right',year:'1939',detail:'華南沿岸・内陸交通の主要結節。'}},
        {id:'haikou',geometry:{type:'Point',coordinates:[110.33,20.02]},properties:{category:'occupation-node',marker:'占',label:'海口',labelPlacement:'right',year:'1939-02',detail:'海南島北部の占領・軍政拠点を示す代表点。'}},
        {id:'sanya',geometry:{type:'Point',coordinates:[109.51,18.25]},properties:{category:'occupation-node',marker:'占',label:'三亜',labelPlacement:'right',year:'1939',detail:'海南島南部の海軍拠点を示す代表点。'}},
        {id:'haiphong',geometry:{type:'Point',coordinates:[106.68,20.86]},properties:{category:'indochina-node',marker:'港',label:'海防',labelPlacement:'right',year:'1939',detail:'仏印側の主要港。雲南・広西方面への外部輸送入口。'}},
        {id:'hanoi',geometry:{type:'Point',coordinates:[105.85,21.03]},properties:{category:'indochina-node',marker:'交',label:'河内',labelPlacement:'bottom',year:'1939',detail:'仏印内陸交通の結節。'}},
        {id:'laocai',geometry:{type:'Point',coordinates:[103.97,22.49]},properties:{category:'indochina-node',marker:'境',label:'ラオカイ',labelPlacement:'right',year:'1939',detail:'仏印―雲南鉄道の国境側主要地点。'}},
        {id:'kunming',geometry:{type:'Point',coordinates:[102.71,25.04]},properties:{category:'china-node',marker:'中',label:'昆明',labelPlacement:'left',year:'1939',detail:'雲南側の主要到達都市。'}},
        {id:'langson',geometry:{type:'Point',coordinates:[106.76,21.85]},properties:{category:'indochina-node',marker:'路',label:'諒山',labelPlacement:'right',year:'1939',detail:'海防方面から広西へ向かう自動車輸送の主要経由地域。'}},
      ],
    },
    {
      id:'a28-lines',
      provenance:{
        sourceId:'a28-supply-lines-schematic',
        title:'仏印から雲南／広西方面への交通（一般化・模式）',
        institution:'jpn-history-decade',
        url:'https://history.state.gov/historicaldocuments/frus1939v03/d709',
        sourceType:'derived',
        license:'Site-authored generalized/schematic LineStrings from U.S. diplomatic descriptions and representative waypoints; no modern transport centerline is copied.',
        derivedFromSourceIds:['frus1939v03-d709','frus1939v03-d710'],
        temporalCoverage:{from:'1939-02-08',to:'1939-02-18',basis:'range'},
        spatialCoverage:'海防―河内―ラオカイ―昆明、海防―河内―諒山―広西方面',
        geometryConfidence:'schematic',
        transformations:[
          'FRUSでIndo-China–Yunnan Railwayが中国向け輸送路として稼働していたことを確認した。',
          '海防から諒山を経て広西へ入る自動車輸送が報告されたことを確認した。',
          '主要waypointを結んで一般化・模式線とし、現代鉄道・道路geometryは流用していない。',
        ],
        notes:'輸送方向・接続を示す。線幅は輸送量、線形は正確な路線を表さない。',
      },
      allowedGeometryTypes:['LineString'],
      requiredProperties:['category','label','detail'],
      features:[
        {id:'yunnan-rail-corridor',geometry:{type:'LineString',coordinates:[[106.68,20.86],[105.85,21.03],[104.87,21.70],[103.97,22.49],[103.39,23.37],[102.71,25.04]]},properties:{category:'rail-corridor',label:'仏印―雲南鉄道の主要接続（一般化）',detail:'海防・河内・ラオカイから昆明方面へ至る主要waypointを結ぶ一般化線。'}},
        {id:'guangxi-road-direction',geometry:{type:'LineString',coordinates:[[106.68,20.86],[105.85,21.03],[106.76,21.85],[107.50,22.30],[108.30,22.80]]},properties:{category:'road-corridor',label:'広西方面への自動車輸送方向（模式）',detail:'1939年2月に報告された海防―諒山―広西方面の輸送方向を示す。'}} ,
      ],
    },
  ],
  layers:[
    {id:'a28-lines-layer',datasetId:'a28-lines',categoryProperty:'category',categories:['rail-corridor','road-corridor']},
    {id:'a28-points-layer',datasetId:'a28-points',categoryProperty:'category',categories:['coastal-node','occupation-node','indochina-node','china-node']},
  ],
  legend:[
    {value:'rail-corridor',label:'仏印―雲南鉄道主要接続（一般化）',marker:'鉄',color:'#53636d',kind:'line',lineStyle:'solid'},
    {value:'road-corridor',label:'広西方面の自動車輸送方向（模式）',marker:'路',color:'#756144',kind:'line',lineStyle:'dashed'},
    {value:'coastal-node',label:'華南沿岸の主要交通点',marker:'港',color:'#446879'},
    {value:'occupation-node',label:'海南島の占領・軍政拠点',marker:'占',color:'#81473c'},
    {value:'indochina-node',label:'仏印側の主要交通点',marker:'交',color:'#4d6654'},
    {value:'china-node',label:'中国側主要到達点',marker:'中',color:'#6c583b'},
  ],
  auditState:{dataAudit:'passed',styleAudit:'passed',visualAudit:'pending-human',notes:[
    'A28はadopted/highを維持し、海南島をoccupation polygonで塗らず、占領拠点pointと既存輸送回廊を分離して実装した。',
    '海南島から仏印への「遮断済み」線や1940〜41年への先取り矢印は描かない。',
    'LineStringを含むためHuman Visual Auditは後送する。',
  ]},
}
