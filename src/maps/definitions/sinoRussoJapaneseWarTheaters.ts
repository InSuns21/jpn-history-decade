import type { HistoricalMapDefinition } from '../schema.ts'

export const sinoRussoJapaneseWarTheatersMap: HistoricalMapDefinition = {
  id: 'sino-russo-japanese-war-theaters-1894-1905',
  title: '日清・日露戦争の主要戦域と作戦軸（模式）',
  historicalQuestion:
    '1894〜95年と1904〜05年の戦争では、朝鮮半島・遼東半島・満洲南部・海峡という複数の空間が、どのように軍事行動と外交条件に関わったのか。',
  readingNote:
    '地点は主要戦場・港・政治中心の代表位置、線は複数の主要地点を結ぶ作戦軸の模式表現で、部隊の実際の進軍経路・前線・占領境界ではない。日露戦争側を最初に表示し、切替で日清戦争側を比較できる。背景地図・国境・道路は現代のOpenStreetMapである。',
  status: 'draft',
  period: { startYear: 1894, endYear: 1905 },
  initialView: { center: [126.5, 39.0], zoom: 4.25 },
  timeSlices: [
    { id: 'russo-1904-1905', label: '1904–1905', description: '日露戦争。朝鮮半島から鴨緑江・遼陽・奉天へ向かう陸上戦と、旅順・対馬海峡を含む海上戦を比較する。' },
    { id: 'sino-1894-1895', label: '1894–1895', description: '日清戦争。朝鮮半島から平壌・鴨緑江へ進む戦域と、遼東・山東・台湾方面への拡大を比較する。' },
  ],
  datasets: [
    {
      id: 'a7-war-points',
      provenance: {
        sourceId: 'a7-official-war-points',
        title: '日清戦争・日露戦争の主要戦場・講和関係地点',
        institution: '国立公文書館・アジア歴史資料センター',
        url: 'https://www.archives.go.jp/learning/archive_collection_9/',
        sourceType: 'derived',
        license: 'Site-authored approximate representative coordinates based on official historical descriptions; no battle-map geometry is copied.',
        derivedFromSourceIds: ['archives-war-background-1894', 'archives-russo-japanese-war-1904', 'jacar-russo-japanese-war-map'],
        temporalCoverage: { from: '1894-07-01', to: '1905-09-05', basis: 'range' },
        spatialCoverage: '朝鮮半島・遼東半島・満洲南部・山東半島・対馬海峡',
        geometryConfidence: 'approximate',
        transformations: [
          '公的史料で主要戦場・港・政治中心の名称と時期を確認した。',
          '現在の同名都市・海域付近へ代表点を配置した。',
          '要塞・陣地・艦隊位置・戦闘時の正確な座標は復元していない。',
        ],
        notes: '戦域の相対配置を読むための代表点。',
      },
      allowedGeometryTypes: ['Point'],
      requiredProperties: ['category','marker','label','labelPlacement','year','detail','timeSlice'],
      features: [
        { id:'a7-r-seoul', geometry:{type:'Point',coordinates:[126.978,37.566]}, properties:{category:'political-node',marker:'都',label:'漢城（ソウル）',labelPlacement:'bottom',year:'1904',detail:'大韓帝国の首都。日露戦争期の日本軍行動と韓国への介入を考える基準点。',timeSlice:'russo-1904-1905'} },
        { id:'a7-r-yalu', geometry:{type:'Point',coordinates:[124.40,40.10]}, properties:{category:'battle-site',marker:'戦',label:'鴨緑江方面',labelPlacement:'left',year:'1904',detail:'朝鮮半島北部から満洲方面へ移る陸上戦の重要境界地域。',timeSlice:'russo-1904-1905'} },
        { id:'a7-r-liaoyang', geometry:{type:'Point',coordinates:[123.17,41.27]}, properties:{category:'battle-site',marker:'戦',label:'遼陽',labelPlacement:'right',year:'1904',detail:'満洲南部の主要会戦地。',timeSlice:'russo-1904-1905'} },
        { id:'a7-r-mukden', geometry:{type:'Point',coordinates:[123.43,41.80]}, properties:{category:'battle-site',marker:'戦',label:'奉天',labelPlacement:'right',year:'1905',detail:'1905年の奉天会戦の主要地域。',timeSlice:'russo-1904-1905'} },
        { id:'a7-r-portarthur', geometry:{type:'Point',coordinates:[121.26,38.81]}, properties:{category:'battle-site',marker:'戦',label:'旅順',labelPlacement:'left',year:'1904–1905',detail:'ロシア軍要塞・艦隊拠点をめぐる攻囲戦の中心。',timeSlice:'russo-1904-1905'} },
        { id:'a7-r-tsushima', geometry:{type:'Point',coordinates:[129.35,34.50]}, properties:{category:'naval-site',marker:'海',label:'対馬海峡',labelPlacement:'right',year:'1905',detail:'日本海海戦の主要海域を示す代表点。',timeSlice:'russo-1904-1905'} },

        { id:'a7-s-seoul', geometry:{type:'Point',coordinates:[126.978,37.566]}, properties:{category:'political-node',marker:'都',label:'漢城（ソウル）',labelPlacement:'bottom',year:'1894',detail:'朝鮮国内政治と日清両国の出兵が交差した政治中心。',timeSlice:'sino-1894-1895'} },
        { id:'a7-s-pyongyang', geometry:{type:'Point',coordinates:[125.76,39.04]}, properties:{category:'battle-site',marker:'戦',label:'平壌',labelPlacement:'right',year:'1894',detail:'朝鮮半島北部の主要戦場。',timeSlice:'sino-1894-1895'} },
        { id:'a7-s-yalu', geometry:{type:'Point',coordinates:[124.40,40.10]}, properties:{category:'battle-site',marker:'戦',label:'鴨緑江方面',labelPlacement:'left',year:'1894',detail:'朝鮮半島から清領側へ戦域が移る主要地域。',timeSlice:'sino-1894-1895'} },
        { id:'a7-s-portarthur', geometry:{type:'Point',coordinates:[121.26,38.81]}, properties:{category:'battle-site',marker:'戦',label:'旅順',labelPlacement:'left',year:'1894',detail:'遼東半島での主要攻略地点。',timeSlice:'sino-1894-1895'} },
        { id:'a7-s-weihai', geometry:{type:'Point',coordinates:[122.12,37.51]}, properties:{category:'naval-site',marker:'海',label:'威海衛',labelPlacement:'right',year:'1895',detail:'山東半島の清国海軍拠点をめぐる主要戦場。',timeSlice:'sino-1894-1895'} },
        { id:'a7-s-penghu', geometry:{type:'Point',coordinates:[119.57,23.57]}, properties:{category:'battle-site',marker:'戦',label:'澎湖諸島',labelPlacement:'left',year:'1895',detail:'講和直前に日本軍が占領した台湾海峡の島嶼群。',timeSlice:'sino-1894-1895'} },
      ],
    },
    {
      id: 'a7-war-axes',
      provenance: {
        sourceId: 'a7-war-axes-schematic',
        title: '日清・日露戦争の主要作戦軸（模式）',
        institution: 'jpn-history-decade',
        url: 'https://www.jacar.go.jp/exhibition/nichiro2/sensoushi/rikujou04_detail.html',
        sourceType: 'derived',
        license: 'Site-authored schematic corridors connecting documented major theaters; no historical battle-map geometry is copied or traced.',
        derivedFromSourceIds: ['archives-war-background-1894','archives-russo-japanese-war-1904','jacar-russo-japanese-war-map'],
        temporalCoverage: { from:'1894-07-01',to:'1905-09-05',basis:'range' },
        spatialCoverage: '朝鮮半島から満洲南部・遼東半島',
        geometryConfidence: 'schematic',
        transformations: [
          '主要会戦地・政治中心の時系列を公的史料で確認した。',
          '相対的な戦域拡大を読むため、代表地点を順序づけて模式線で接続した。',
          '線は部隊別進軍路、前線、補給路を意味しない。',
        ],
        notes: '主要作戦軸の方向を示すだけで、戦闘線・占領境界・正確な経路ではない。',
      },
      allowedGeometryTypes:['LineString'],
      requiredProperties:['category','label','detail','timeSlice'],
      features:[
        { id:'a7-r-land-axis', geometry:{type:'LineString',coordinates:[[126.978,37.566],[124.40,40.10],[123.17,41.27],[123.43,41.80]]}, properties:{category:'campaign-axis',label:'朝鮮―満洲主要作戦軸（模式）',detail:'漢城から鴨緑江、遼陽、奉天へ続く陸上戦の相対方向を示す。',timeSlice:'russo-1904-1905'} },
        { id:'a7-s-korea-axis', geometry:{type:'LineString',coordinates:[[126.978,37.566],[125.76,39.04],[124.40,40.10]]}, properties:{category:'campaign-axis',label:'朝鮮北上軸（模式）',detail:'漢城・平壌・鴨緑江という主要戦域の相対方向を示す。',timeSlice:'sino-1894-1895'} },
        { id:'a7-s-liaodong-shandong', geometry:{type:'LineString',coordinates:[[124.40,40.10],[121.26,38.81],[122.12,37.51]]}, properties:{category:'campaign-axis',label:'遼東・山東方面の戦域拡大（模式）',detail:'遼東半島・山東半島へ戦域が広がったことを示す説明線で、部隊の連続進路ではない。',timeSlice:'sino-1894-1895'} },
      ],
    },
  ],
  layers:[
    {id:'a7-axes',datasetId:'a7-war-axes',categoryProperty:'category',categories:['campaign-axis']},
    {id:'a7-points',datasetId:'a7-war-points',categoryProperty:'category',categories:['political-node','battle-site','naval-site']},
  ],
  legend:[
    {value:'campaign-axis',label:'主要作戦軸・戦域拡大（模式）',marker:'線',color:'#75513b',kind:'line',lineStyle:'dashed'},
    {value:'political-node',label:'政治中心',marker:'都',color:'#4d5e72'},
    {value:'battle-site',label:'主要陸上戦場・攻略地点',marker:'戦',color:'#7d4338'},
    {value:'naval-site',label:'主要海上戦場・海軍拠点',marker:'海',color:'#3d6173'},
  ],
  auditState:{
    dataAudit:'passed',
    styleAudit:'passed',
    visualAudit:'pending-human',
    notes:[
      'A7は旧判定で時点別vector戦線がないためno-mapだったが、地図の問いを主要戦域・方向へ限定し、point + schematic axisへ縮退できると再判定した。',
      '前線・占領地域・部隊移動の精密復元は行わない。',
      'LineStringを含むためHuman Visual Auditは後送する。',
    ],
  },
}
