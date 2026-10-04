import type { HistoricalMapDefinition } from '../schema.ts'

export const southernOperationPreparation1941Map: HistoricalMapDefinition = {
  id: 'southern-operation-preparation-1941',
  title: '1941年9〜10月の南方作戦準備：集積地域と作戦対象方面',
  historicalQuestion:
    '日米交渉の期限が迫る1941年9〜10月、軍事側が進めていた「戦争準備」は、東アジア・東南アジアのどの地域へ広がる準備だったのか。',
  readingNote:
    '9月6日の御前会議後に南方作戦用の兵力・資材を移し始めた地域と、米陸軍公式戦史が9月までに攻勢計画がほぼ整っていたとするマレー・フィリピン・蘭領東インド方面を、模式的な代表点で比較する。点は部隊の正確な駐屯地、上陸地点、飛行場、港、侵攻経路を示さない。11月に正式示達された南方作戦の最終的な兵力配分・作戦順序・進攻線は逆投影せず、9〜10月時点で確認できる「準備地域」と「対象方面」だけを表示する。背景地図・道路・国境は現代のOpenStreetMapで、1941年の政治境界ではない。',
  status: 'published',
  period: { startYear: 1941, endYear: 1941 },
  initialView: {
    center: [121.0, 14.0],
    zoom: 2.75,
    minZoom: 1.5,
  },
  datasets: [
    {
      id: 'a40-preparation-regions-1941',
      provenance: {
        sourceId: 'a40-preparation-regions-1941',
        title: '9月6日国策決定後の南方作戦準備地域から作成した代表点',
        institution: 'jpn-history-decade',
        url: 'https://www.ibiblio.org/hyperwar/Japan/Monos/pdfs/JM-45/JM-45.pdf',
        sourceType: 'derived',
        license:
          'Historical roles are derived from Japanese Monograph No. 45, prepared under SCAP/Far East Command historical-records programs and hosted by HyperWar. Coordinates are site-authored approximate representative points; no historical facility geometry is copied.',
        derivedFromSourceIds: ['japanese-monograph-45-southern-operations-preparation'],
        temporalCoverage: {
          from: '1941-09-06',
          to: '1941-10-31',
          basis: 'range',
          note:
            'Japanese Monograph No. 45 states that, in accordance with the 6 September Imperial Conference decision, the Army began moving troops, materials and munitions for Southern Operations to French Indo-China, Hainan, south China, Formosa, Amami Oshima, Palau and the Bonin Islands; the monograph distinguishes these preparatory moves from the orders of battle issued on 6 November.',
        },
        spatialCoverage:
          'フランス領インドシナ、海南島、華南、台湾、奄美大島、パラオ、小笠原諸島',
        geometryConfidence: 'approximate',
        transformations: [
          'Japanese Monograph No. 45が列挙する準備地域を抽出し、9月6日決定後に南方作戦用の兵力・資材・軍需品を移した地域として分類した。',
          '広域の地域名しか示されない場合は、現在の同名地域内または代表都市・島の近傍に説明用の代表点を置いた。点は部隊の駐屯地・港湾・飛行場・集積施設の正確な位置を示さない。',
          '仏印はA38で監査済みの南部仏印前進を読むためサイゴン代表点を採用したが、Monograph 45の「French Indo-China」をサイゴンだけに限定する意味ではない。',
          '11月6日に示達されたSouthern Armyの正式戦闘序列、上陸地点、作戦順序、航路はこのdatasetへ取り込まなかった。',
        ],
        notes:
          '準備地域どうしの距離、部隊数、輸送量、準備完了率を示すデータではない。Pointは広域地域のラベルアンカーとして用いる。',
      },
      allowedGeometryTypes: ['Point'],
      requiredProperties: ['category', 'marker', 'label', 'labelPlacement', 'year', 'detail'],
      features: [
        {
          id: 'french-indochina-preparation-1941',
          geometry: { type: 'Point', coordinates: [106.6297, 10.8231] },
          properties: {
            category: 'preparation-region',
            marker: '準',
            label: '仏印（サイゴン参照）',
            labelPlacement: 'left',
            year: '1941-09〜10',
            detail:
              '9月6日決定後、南方作戦用の兵力・資材・軍需品を移す地域としてJapanese Monograph No. 45が挙げるフランス領インドシナ。サイゴンは表示用代表点で、仏印全体の準備を一地点へ限定しない。',
          },
        },
        {
          id: 'hainan-preparation-1941',
          geometry: { type: 'Point', coordinates: [109.75, 19.20] },
          properties: {
            category: 'preparation-region',
            marker: '準',
            label: '海南島（代表点）',
            labelPlacement: 'left',
            year: '1941-09〜10',
            detail:
              '南方作戦用の兵力・資材・軍需品を移す地域として列挙された海南島。島内の特定港湾・飛行場・部隊位置を示さない。',
          },
        },
        {
          id: 'south-china-preparation-1941',
          geometry: { type: 'Point', coordinates: [113.2644, 23.1291] },
          properties: {
            category: 'preparation-region',
            marker: '準',
            label: '華南（広州参照）',
            labelPlacement: 'left',
            year: '1941-09〜10',
            detail:
              'Monograph No. 45が準備地域として挙げるsouth Chinaを広州付近の代表点で表示する。特定の部隊集結地点や作戦基地を意味しない。',
          },
        },
        {
          id: 'formosa-preparation-1941',
          geometry: { type: 'Point', coordinates: [120.80, 23.60] },
          properties: {
            category: 'preparation-region',
            marker: '準',
            label: '台湾（代表点）',
            labelPlacement: 'right',
            year: '1941-09〜10',
            detail:
              '南方作戦準備の集積地域として列挙された台湾。島内の航空基地・港湾・部隊配置を確定する点ではない。',
          },
        },
        {
          id: 'amami-preparation-1941',
          geometry: { type: 'Point', coordinates: [129.49, 28.32] },
          properties: {
            category: 'preparation-region',
            marker: '準',
            label: '奄美大島',
            labelPlacement: 'left',
            year: '1941-09〜10',
            detail:
              '南方作戦用の兵力・資材・軍需品の準備地域として列挙された奄美大島。特定施設ではなく島の代表点。',
          },
        },
        {
          id: 'palau-preparation-1941',
          geometry: { type: 'Point', coordinates: [134.48, 7.50] },
          properties: {
            category: 'preparation-region',
            marker: '準',
            label: 'パラオ（代表点）',
            labelPlacement: 'right',
            year: '1941-09〜10',
            detail:
              '南方作戦準備地域として列挙されたパラオ。島嶼群内の特定軍港・飛行場・部隊位置を示さない。',
          },
        },
        {
          id: 'bonin-preparation-1941',
          geometry: { type: 'Point', coordinates: [142.19, 27.09] },
          properties: {
            category: 'preparation-region',
            marker: '準',
            label: '小笠原（父島参照）',
            labelPlacement: 'right',
            year: '1941-09〜10',
            detail:
              'Monograph No. 45がBonin Islandsとして列挙する準備地域。父島付近を表示用代表点とし、特定施設を示さない。',
          },
        },
      ],
    },
    {
      id: 'a40-planned-objective-regions-1941',
      provenance: {
        sourceId: 'a40-planned-objective-regions-1941',
        title: '1941年9月までに具体化していた南方攻勢の対象方面から作成した代表点',
        institution: 'jpn-history-decade',
        url: 'https://history.army.mil/Research/Reference-Topics/Army-Campaigns/Brief-Summaries/World-War-II/World-War-II-Asiatic-Pacific-Theater/',
        sourceType: 'derived',
        license:
          'Historical roles are derived from the U.S. Army Center of Military History. Coordinates are site-authored schematic label anchors for broad regions; no operational route geometry is copied.',
        derivedFromSourceIds: ['us-army-cmh-asiatic-pacific-japanese-plans-1941'],
        temporalCoverage: {
          from: '1941-09-01',
          to: '1941-09-30',
          basis: 'approximate',
          note:
            'U.S. Army Center of Military History states that by September 1941 Japanese secret plans for a large assault against Malaya, the Philippines and the Netherlands East Indies were practically completed. This dataset represents only those broad objective regions, not the November finalized operation order.',
        },
        spatialCoverage: '英領マレー、米領フィリピン、蘭領東インド',
        geometryConfidence: 'schematic',
        transformations: [
          'U.S. Army Center of Military Historyの記述から、1941年9月までに計画対象として具体化していたMalaya, the Philippines, the Netherlands East Indiesの3方面を抽出した。',
          '広域地域をPolygonで確定境界化せず、相対配置を読むための代表Pointへ落とした。',
          '英領マレーは半島中部、フィリピンはマニラ周辺、蘭領東インドは行政中心バタヴィア周辺をラベルアンカーとして置いた。いずれも上陸地点・攻撃目標・作戦中心を意味しない。',
          '同じCMH記述にある真珠湾攻撃計画は、A40の中心問いが南方作戦準備の空間であるため表示対象から外し、南方3方面の読みやすさを優先した。',
          '11月のArmy-Navy Central Agreement、Southern Army戦闘序列、個別の侵攻順序・航路・上陸地点はこのdatasetへ取り込まなかった。',
        ],
        notes:
          'Pointの位置から進攻方向・距離・優先順位・作戦順序を推定しない。対象方面が複数海域へ広がっていたことだけを読む。',
      },
      allowedGeometryTypes: ['Point'],
      requiredProperties: ['category', 'marker', 'label', 'labelPlacement', 'year', 'detail'],
      features: [
        {
          id: 'malaya-objective-region-1941',
          geometry: { type: 'Point', coordinates: [102.30, 4.50] },
          properties: {
            category: 'objective-region',
            marker: '対',
            label: '英領マレー方面（代表点）',
            labelPlacement: 'left',
            year: '1941-09',
            detail:
              '米陸軍公式戦史が1941年9月までに大規模攻勢の計画対象として挙げるMalaya。半島中部の表示用アンカーで、上陸地点・攻撃経路を示さない。',
          },
        },
        {
          id: 'philippines-objective-region-1941',
          geometry: { type: 'Point', coordinates: [120.9842, 14.5995] },
          properties: {
            category: 'objective-region',
            marker: '対',
            label: 'フィリピン方面（マニラ参照）',
            labelPlacement: 'right',
            year: '1941-09',
            detail:
              '米陸軍公式戦史が1941年9月までに攻勢計画対象として挙げるPhilippines。マニラ周辺は地域表示用の代表点で、個別攻撃目標を示さない。',
          },
        },
        {
          id: 'nei-objective-region-1941',
          geometry: { type: 'Point', coordinates: [106.8456, -6.2088] },
          properties: {
            category: 'objective-region',
            marker: '対',
            label: '蘭領東インド方面（バタヴィア参照）',
            labelPlacement: 'right',
            year: '1941-09',
            detail:
              '米陸軍公式戦史が1941年9月までに攻勢計画対象として挙げるNetherlands East Indies。バタヴィアは広域地域の表示用参照点で、最終作戦の上陸地点・順序を示さない。',
          },
        },
      ],
    },
  ],
  layers: [
    {
      id: 'a40-preparation-regions',
      datasetId: 'a40-preparation-regions-1941',
      categoryProperty: 'category',
      categories: ['preparation-region'],
    },
    {
      id: 'a40-objective-regions',
      datasetId: 'a40-planned-objective-regions-1941',
      categoryProperty: 'category',
      categories: ['objective-region'],
    },
  ],
  legend: [
    {
      value: 'preparation-region',
      label: '9月6日決定後の南方作戦準備地域（代表点）',
      marker: '準',
      color: '#4f6471',
    },
    {
      value: 'objective-region',
      label: '9月までに具体化していた作戦対象方面（模式点）',
      marker: '対',
      color: '#7d4b3a',
    },
  ],
  auditState: {
    dataAudit: 'passed',
    styleAudit: 'passed',
    visualAudit: 'not-required-reused-pattern',
    notes: [
      'A40 map necessityはadopted / high。外交期限と並行した「戦争準備」が、南部仏印一地点ではなく、東アジア・東南アジアの複数準備地域と複数対象方面を持つ広域作戦準備だったことを本文だけより明確にする。',
      'Japanese Monograph No. 45は9月6日の御前会議決定後、南方作戦に用いる兵力・資材・軍需品を仏印、海南島、華南、台湾、奄美大島、パラオ、小笠原へ移し始めたと記し、11月6日の正式戦闘序列示達と段階を分けている。',
      'U.S. Army Center of Military Historyは、1941年9月までにマレー、フィリピン、蘭領東インドへの大規模攻勢の秘密計画がほぼ整っていたと整理している。',
      '11月以後の最終作戦線・上陸地点・作戦順序を逆投影しないためLineString / Polygonを使わず、準備地域と対象方面を別カテゴリのPointで表示した。',
      'A38は7月の南部仏印基地要求の相対位置、A39は南進と石油供給制約の逆転、A40は9〜10月の広域な軍事準備対象を扱うため、中心問いを分離している。',
      '全Pointは広域地域の代表点またはラベルアンカーであり、個別部隊位置・港湾・飛行場・上陸地点・攻撃中心の精密座標ではない。',
      'southern-indochina-bases-1941等で監査済みのThematicMap point-only表示、ラベル、凡例、popup/touch interactionを再利用し、新しい線・polygon・time slice・interaction・表示ロジックを導入しない。',
      '変更点がPoint featureの位置・ラベル・属性値と既存point凡例カテゴリに限定されるため、MAP_AUDIT_STANDARDのpoint-only再利用例外を適用し、個別Human Visual Auditを省略する。',
      '広域表示の初期zoomとminZoomはA39で導入・監査済みの広域zoom対応を再利用し、必要地域を初期表示に収める設定とした。',
    ],
  },
}
