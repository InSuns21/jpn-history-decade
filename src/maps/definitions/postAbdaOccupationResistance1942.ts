import type { HistoricalMapDefinition } from '../schema.ts'

export const postAbdaOccupationResistance1942Map: HistoricalMapDefinition = {
  id: 'post-abda-occupation-resistance-1942-03-09',
  title: '1942年3月9日の南方戦線：占領拠点と残存戦線',
  historicalQuestion:
    '1942年3月9日時点で、ABDA最高司令部解体後の主要地点は「占領後の管理」「軍事占領成立」「戦闘・抵抗継続」「同盟国経由」のどの状態に分かれていたのか。',
  readingNote:
    '1942年3月9日時点の主要都市・軍事拠点・残存戦線をPointで比較する模式図。色と記号は各地点の制度・軍事状態を示す。「戦」にはバターン・コレヒドールの組織的防衛、ビルマ中北部の後退戦、東ティモールのゲリラ抵抗という異なる戦闘形態を含み、ラベルと説明で区別する。Pointは都市・島・戦域の代表位置であり、占領範囲、前線、実進攻路、海上航路を表さない。ジャワは3月8〜9日の降伏命令を受けた軍事占領への移行段階としてバンドンを代表点に置く。背景地図・国境は現代のOpenStreetMapで、1942年の政治境界ではない。',
  status: 'published',
  period: { startYear: 1942, endYear: 1942 },
  initialView: {
    center: [111.0, 7.0],
    zoom: 2.15,
    minZoom: 1.5,
    maxZoom: 6,
  },
  datasets: [
    {
      id: 'a45-post-abda-status-1942-03-09',
      provenance: {
        sourceId: 'a45-post-abda-status-1942-03-09',
        title: '1942年2月16日〜3月9日の主要占領・降伏・残存戦線から作成した代表Point',
        institution:
          'アジア歴史資料センター / National Archives of Singapore / National Library Board Singapore / U.S. Army Center of Military History / Australian War Memorial / Royal Air Force Air Historical Branch',
        url: 'https://history.army.mil/portals/143/Images/Publications/catalog/72-22.pdf',
        sourceType: 'derived',
        license:
          'Historical dates and roles are derived from official institutional sources already cited in JH121–JH125. Coordinates are site-authored approximate representative points for named cities, islands, or active fronts; no historical route, boundary, or occupation-area geometry is copied.',
        derivedFromSourceIds: [
          'jacar-hong-kong-governor-jh122',
          'nas-becoming-syonan-jh122',
          'nlb-tokubetsu-shi-jh122',
          'cmh-fall-philippines-jh121',
          'jacar-japan-thailand-alliance-19411221',
          'raf-far-east-vol2-jh121',
          'awm-timor-jh123',
          'cmh-east-indies-jh125',
          'indonesia-kalijati-jh125',
          'cmh-burma-jh125',
          'cmh-chronology-jh125',
        ],
        temporalCoverage: {
          from: '1942-02-16',
          to: '1942-03-09',
          basis: 'range',
          note:
            'JH122〜JH125で確認した状態遷移を、1942年3月9日時点の比較用に整理した。各PointのeventDateはその状態へ移る主要日付または比較基準日を示す。',
        },
        spatialCoverage:
          '香港、ルソン島、タイ、シンガポール、スマトラ、ジャワ、ビルマ、ティモール',
        geometryConfidence: 'approximate',
        transformations: [
          'JH121〜JH125で公的史料・公的戦史から確認済みの主要都市・拠点・残存戦線を抽出した。',
          '占領地Polygonや進攻LineStringを復元せず、1942年3月9日時点の状態差を比較する代表Pointへ落とした。',
          'A44と同じ4カテゴリ「占領後の管理機構が稼働」「都市・拠点の軍事占領成立」「戦闘・攻略継続」「同盟国・作戦通過基盤」を維持し、2月15日から3月9日までの状態変化を比較可能にした。',
          '香港とシンガポールは占領行政、マニラは都市占領後管理、ジャワ・ラングーン・西ティモール・パレンバンは軍事占領成立として分類した。',
          'バターン・コレヒドール、東ティモール、ビルマ中北部は戦闘継続として残し、正規戦・ゲリラ戦・後退戦の違いをstatusとdetailで明示した。',
          'ジャワはバタヴィア占領だけで全島支配を代表させず、3月8〜9日の降伏交渉・命令と結びつくバンドンを代表Pointにした。',
          '東ティモールのPointはゲリラ活動域の厳密な中心ではなく、東部山地で抵抗が続いたことを示す模式的代表位置として置いた。',
          'ビルマはラングーン占領と中北部戦線を別Pointにし、首都・港湾の喪失を戦役全体の終結へ拡張しなかった。',
        ],
        notes:
          'このdatasetは、ABDA解体後の「占領拠点と残存戦線の並存」を読むための比較図である。Pointの大きさ・Point間の距離を兵力、支配面積、攻略速度の代用にしない。',
      },
      allowedGeometryTypes: ['Point'],
      requiredProperties: [
        'category',
        'marker',
        'label',
        'labelPlacement',
        'year',
        'eventDate',
        'status',
        'detail',
      ],
      features: [
        {
          id: 'hong-kong-occupation-administration-1942-03-09',
          geometry: { type: 'Point', coordinates: [114.17, 22.30] },
          properties: {
            category: 'occupation-administration',
            marker: '政',
            label: '香港',
            labelPlacement: 'left',
            year: '1942-02-20〜',
            eventDate: '1942-02-20',
            status: '占領地総督部による統治機構が稼働',
            detail:
              '2月19日に香港占領地総督部が編成され、20日に第23軍軍政庁から業務を引き継いだ。軍事占領後の行政・警備・警察を継続運用する段階へ移っていた。',
          },
        },
        {
          id: 'manila-occupation-administration-1942-03-09',
          geometry: { type: 'Point', coordinates: [120.984, 14.600] },
          properties: {
            category: 'occupation-administration',
            marker: '政',
            label: 'マニラ',
            labelPlacement: 'right',
            year: '1942-01-03〜',
            eventDate: '1942-03-09',
            status: '都市占領後の警備・防衛機構が継続',
            detail:
              '1月2日の占領後、都市の警備・防衛機構が置かれていた。一方、近接するバターン・コレヒドールでは米比軍の組織的抵抗が続き、首都占領とフィリピン戦線終結は一致しなかった。',
          },
        },
        {
          id: 'bataan-corregidor-campaign-ongoing-1942-03-09',
          geometry: { type: 'Point', coordinates: [120.44, 14.65] },
          properties: {
            category: 'campaign-ongoing',
            marker: '戦',
            label: 'バターン／コレヒドール',
            labelPlacement: 'left',
            year: '1942-01-07〜',
            eventDate: '1942-03-09',
            status: '米比軍の組織的抗戦継続',
            detail:
              '3月9日時点でもバターン半島とコレヒドールでは米比軍が抗戦を続けていた。南方の主要都市が相次いで失われても、フィリピン戦線は終結していない。',
          },
        },
        {
          id: 'thailand-allied-transit-1942-03-09',
          geometry: { type: 'Point', coordinates: [100.50, 13.75] },
          properties: {
            category: 'allied-transit',
            marker: '盟',
            label: 'タイ（バンコク）',
            labelPlacement: 'left',
            year: '1941-12-21〜',
            eventDate: '1942-03-09',
            status: '同盟国・作戦通過基盤',
            detail:
              'タイ政府は国家・条約主体として存続し、日本軍はタイ領をマレー・ビルマ方面の作戦基盤として利用した。軍事占領地とは別の制度状態である。',
          },
        },
        {
          id: 'singapore-occupation-administration-1942-03-09',
          geometry: { type: 'Point', coordinates: [103.82, 1.35] },
          properties: {
            category: 'occupation-administration',
            marker: '政',
            label: 'シンガポール',
            labelPlacement: 'right',
            year: '1942-02-15〜',
            eventDate: '1942-03-09',
            status: '軍政・都市管理が進行',
            detail:
              '2月15日の守備隊降伏後、日本軍は港湾・通信・水道・食糧・警察・住民統制を担う占領行政へ移った。2月15日時点のA44では「軍事占領成立」だった地点が、3月9日には占領後管理の段階へ進んでいる。',
          },
        },
        {
          id: 'palembang-occupation-established-1942-03-09',
          geometry: { type: 'Point', coordinates: [104.75, -2.99] },
          properties: {
            category: 'occupation-established',
            marker: '占',
            label: 'パレンバン',
            labelPlacement: 'left',
            year: '1942-02-14〜',
            eventDate: '1942-03-09',
            status: '都市・飛行場・石油施設の軍事占領成立',
            detail:
              '2月14〜15日の空挺攻撃と地上部隊進出後、日本軍の軍事占領下へ移った。施設利用には修復・生産・輸送の別工程があり、Pointは安定した石油供給の成立を意味しない。',
          },
        },
        {
          id: 'java-bandung-surrender-occupation-1942-03-09',
          geometry: { type: 'Point', coordinates: [107.61, -6.91] },
          properties: {
            category: 'occupation-established',
            marker: '占',
            label: 'ジャワ（バンドン）',
            labelPlacement: 'right',
            year: '1942-03-08〜9',
            eventDate: '1942-03-09',
            status: '組織的降伏・軍事占領へ移行',
            detail:
              '3月5日にバタヴィアが占領され、8日にカリジャティで降伏交渉、9日に蘭印軍司令官がジャワの連合軍へ停戦・降伏を命じた。各部隊の武装解除には時間差があり、行政的掌握が同日に完了したことを表さない。',
          },
        },
        {
          id: 'rangoon-occupation-established-1942-03-09',
          geometry: { type: 'Point', coordinates: [96.16, 16.84] },
          properties: {
            category: 'occupation-established',
            marker: '占',
            label: 'ラングーン',
            labelPlacement: 'left',
            year: '1942-03-08〜',
            eventDate: '1942-03-08',
            status: '港湾都市の軍事占領成立',
            detail:
              '英軍は3月7日にラングーンから撤退し、8日に日本軍が市内へ入った。港湾と中国向け海上補給の入口は失われたが、英中軍は北方へ後退して戦闘を続けた。',
          },
        },
        {
          id: 'burma-central-campaign-ongoing-1942-03-09',
          geometry: { type: 'Point', coordinates: [95.21, 18.82] },
          properties: {
            category: 'campaign-ongoing',
            marker: '戦',
            label: 'ビルマ中北部（プローム方面）',
            labelPlacement: 'right',
            year: '1942-03-08〜',
            eventDate: '1942-03-09',
            status: '英中軍の後退戦継続',
            detail:
              'ラングーン喪失後、英印軍・中国軍はプローム方面など北方へ後退して次の防御を組み直した。首都・港湾の占領とビルマ戦役全体の終結を分けて示す。',
          },
        },
        {
          id: 'west-timor-occupation-established-1942-03-09',
          geometry: { type: 'Point', coordinates: [123.61, -10.16] },
          properties: {
            category: 'occupation-established',
            marker: '占',
            label: '西ティモール（クパン）',
            labelPlacement: 'left',
            year: '1942-02-23〜',
            eventDate: '1942-02-23',
            status: '主力守備隊降伏・軍事占領成立',
            detail:
              '西ティモールでは2月23日に主力守備隊が降伏した。一方、東部では独立中隊などの抵抗が続き、島全域の抵抗終結とは一致しなかった。',
          },
        },
        {
          id: 'east-timor-guerrilla-ongoing-1942-03-09',
          geometry: { type: 'Point', coordinates: [125.60, -8.80] },
          properties: {
            category: 'campaign-ongoing',
            marker: '戦',
            label: '東ティモール（ゲリラ戦）',
            labelPlacement: 'right',
            year: '1942-02-23〜',
            eventDate: '1942-03-09',
            status: '独立中隊などのゲリラ抵抗継続',
            detail:
              '西部の主力守備隊降伏後も、東ティモールの山地では豪州第2/2独立中隊などが現地住民の支援を受けて抵抗を続けた。このPointは活動域の厳密な中心ではなく、残存抵抗を示す模式的代表位置である。',
          },
        },
      ],
    },
  ],
  layers: [
    {
      id: 'a45-post-abda-status',
      datasetId: 'a45-post-abda-status-1942-03-09',
      categoryProperty: 'category',
      categories: [
        'occupation-administration',
        'occupation-established',
        'campaign-ongoing',
        'allied-transit',
      ],
    },
  ],
  legend: [
    {
      value: 'occupation-administration',
      label: '占領後の管理機構が稼働',
      marker: '政',
      color: '#66587b',
    },
    {
      value: 'occupation-established',
      label: '都市・拠点の軍事占領成立',
      marker: '占',
      color: '#7a4545',
    },
    {
      value: 'campaign-ongoing',
      label: '3月9日時点で戦闘・抵抗継続',
      marker: '戦',
      color: '#7a6436',
    },
    {
      value: 'allied-transit',
      label: '同盟国・作戦通過基盤',
      marker: '盟',
      color: '#4f6570',
    },
  ],
  auditState: {
    dataAudit: 'passed',
    styleAudit: 'passed',
    visualAudit: 'not-required-reused-pattern',
    notes: [
      'A45 map necessityはadopted / high。A44から約3週間でシンガポール、パレンバン、ジャワ、ラングーンの状態が変わる一方、バターン・コレヒドール、東ティモール、ビルマ中北部には戦線が残り、同一広域のPoint比較が状態再編を理解しやすくする。',
      'A44 southern-advance-status-1942-02-15 と同じ4カテゴリ、同じ「政・占・戦・盟」記号、同じ色、同じThematicMap point-only表示、凡例、popup/touch interaction、広域zoom設計を再利用する。',
      'Point-onlyとし、進攻路・海上航路・前線・占領範囲のLineString / Polygonは作成していない。ジャワ・ビルマ・ティモール全域を一色の占領面へ一般化しない。',
      'ジャワはバンドンを代表Pointにし、3月8〜9日の組織的降伏・軍事占領への移行を示す。バタヴィア占領、最高司令部の降伏、各部隊の武装解除、行政的掌握を同一時点へ潰していない。',
      'ラングーンとビルマ中北部を別Pointにし、港湾都市の軍事占領後も北方で後退戦が続くことを空間的に分離した。',
      '西ティモールと東ティモールを別Pointにし、主力守備隊降伏後も山地のゲリラ抵抗が残ったことを分離した。東ティモールPointは活動域の厳密な中心ではなく模式的代表位置である。',
      'Style AuditではA44と同じカテゴリ表現を維持し、戦闘継続カテゴリ内の正規戦・後退戦・ゲリラ戦はラベルとpopupのstatus/detailで区別する。新しい記号・色・interactionは追加しない。',
      '変更はPoint feature・初期表示・ラベル・属性値に限定されるため、MAP_AUDIT_STANDARDのpoint-only再利用例外を適用し、個別Human Visual Auditを省略する。',
    ],
  },
}
