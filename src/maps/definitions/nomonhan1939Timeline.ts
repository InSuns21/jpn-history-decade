import type { HistoricalMapDefinition } from '../schema.ts'

export const nomonhan1939TimelineMap: HistoricalMapDefinition = {
  id: 'nomonhan-1939-timeline',
  title: 'ノモンハン事件：国境認識と戦闘段階（1939年5月〜9月）',
  historicalQuestion:
    'ハルハ河を国境とみる日満側と、河川より東側に国境をみるソ蒙側の認識差がある空間で、戦闘の中心は5月から9月までどう変化したのか。',
  readingNote:
    '時点ボタンで事件の段階を切り替える概略地図。ハルハ河は現在の地理と研究史料を参照して一般化した自然地形の説明線、係争帯は双方の国境認識が重なった東岸側の概略空間を示す模式面で、幅・境界線は縮尺どおりではない。戦線・進撃路・部隊配置は描かない。ノモンハン地点と各戦闘段階の点も代表位置であり、1939年の正確な部隊座標を復元したものではない。背景地図・道路・国境は現代のOpenStreetMapで、1939年の歴史境界ではない。',
  status: 'draft',
  period: { startYear: 1939, endYear: 1939 },
  initialView: {
    center: [118.64, 47.74],
    zoom: 8.1,
  },
  timeSlices: [
    {
      id: 'may',
      label: '5月11日〜下旬',
      description:
        '満蒙両軍の衝突が日ソ両軍の戦闘へ拡大した段階。位置はノモンハン周辺の代表点で、個別部隊の配置を示さない。',
    },
    {
      id: 'july',
      label: '7月1〜23日',
      description:
        '両岸作戦と7月23日前後の攻勢を含む大規模戦闘段階。戦史叢書の作戦矢印・戦線はトレースせず、主戦場の概略位置だけを示す。',
    },
    {
      id: 'august',
      label: '8月20日〜下旬',
      description:
        'ソ連・モンゴル軍の大規模攻勢を受けた段階。包囲線や正確な前線は描かず、戦場の中心域を代表点で示す。',
    },
    {
      id: 'september',
      label: '9月3〜15日',
      description:
        '大本営の作戦中止命令から停戦協定までの段階。地図上の点は「戦闘停止へ移った主戦場」を示す説明用代表点である。',
    },
  ],
  datasets: [
    {
      id: 'nomonhan-khalkha-river-reference',
      provenance: {
        sourceId: 'a29-khalkha-river-reference',
        title: 'ハルハ河の一般化参照線',
        institution: 'jpn-history-decade',
        sourceType: 'derived',
        license:
          'Site-authored generalized geometry. No NIDS appendix geometry is copied or vector-traced. Modern geographic references are used only to keep the schematic line physically plausible.',
        derivedFromSourceIds: [
          'nids-senshi-nomonhan-027',
          'nids-nomonhan-briefing-2017',
          'open-geographic-khalkhin-gol-reference',
        ],
        temporalCoverage: {
          from: '1939-05-11',
          to: '1939-09-15',
          basis: 'approximate',
          note:
            '1939年の河道中心線を測量復元したものではなく、事件の東岸・西岸関係を説明する自然地形参照線。',
        },
        spatialCoverage: 'ノモンハン周辺のハルハ河中流域',
        geometryConfidence: 'approximate',
        transformations: [
          '防衛研究所「ノモンハン付近地形概要図」で主戦場とハルハ河の相対位置を確認した。',
          '現在のハルハ河・ハルハゴル周辺の公開地理参照点を補助に、微細な蛇行を捨てて少数頂点へ一般化した。',
          '歴史地図の河道をトレースせず、戦術判断や精密距離測定には使えない説明線とした。',
        ],
        notes:
          '背景地図の現代河川・道路・国境と完全一致することを目的としない。河川の東西関係を読むための補助線である。',
      },
      allowedGeometryTypes: ['LineString'],
      requiredProperties: ['category'],
      features: [
        {
          id: 'khalkha-river-generalized',
          geometry: {
            type: 'LineString',
            coordinates: [
              [118.44, 47.91],
              [118.49, 47.85],
              [118.53, 47.80],
              [118.58, 47.74],
              [118.61, 47.69],
              [118.63, 47.63],
              [118.68, 47.56],
            ],
          },
          properties: {
            category: 'river-reference',
          },
        },
      ],
    },
    {
      id: 'nomonhan-disputed-zone',
      provenance: {
        sourceId: 'a29-disputed-zone-schematic',
        title: 'ノモンハン周辺の係争空間を示す模式面',
        institution: 'jpn-history-decade',
        sourceType: 'derived',
        license:
          'Site-authored schematic geometry. It is not a traced historical boundary and is intentionally not suitable for measuring either side\'s claimed line.',
        derivedFromSourceIds: [
          'nids-nomonhan-briefing-2017',
          'nids-senshi-nomonhan-027',
        ],
        temporalCoverage: {
          from: '1939-05-11',
          to: '1939-09-15',
          basis: 'range',
          note: '事件期間を通じて国境認識差の説明に使う模式面。',
        },
        spatialCoverage: 'ハルハ河東岸・ノモンハン周辺',
        geometryConfidence: 'schematic',
        transformations: [
          '日満側がハルハ河を国境と認識し、ソ蒙側が河川より東側に別の国境認識を持ったという研究記述だけを用いた。',
          '研究上の「東方約13km」「約20km」の記述差から確定境界を生成せず、東岸側に認識の重複空間があったことだけを示す模式面を手作成した。',
          '面の幅・辺形状は説明用であり、距離換算・buffer・史料図トレースを行っていない。',
        ],
        notes:
          'Polygon外周を日満側またはソ蒙側の歴史国境として読まない。面積も係争地域の実測値を表さない。',
      },
      allowedGeometryTypes: ['Polygon'],
      requiredProperties: ['category'],
      features: [
        {
          id: 'nomonhan-disputed-zone-schematic',
          geometry: {
            type: 'Polygon',
            coordinates: [[
              [118.52, 47.88],
              [118.82, 47.88],
              [118.85, 47.82],
              [118.84, 47.72],
              [118.80, 47.62],
              [118.68, 47.57],
              [118.62, 47.64],
              [118.59, 47.72],
              [118.55, 47.81],
              [118.52, 47.88],
            ]],
          },
          properties: {
            category: 'disputed-zone',
          },
        },
      ],
    },
    {
      id: 'nomonhan-reference-points',
      provenance: {
        sourceId: 'a29-nomonhan-reference-points',
        title: 'ノモンハン周辺の代表地点',
        institution: 'jpn-history-decade',
        sourceType: 'derived',
        license:
          'Site-authored approximate representative point. Modern open geographic references provide only a location check; no third-party historical geometry is copied.',
        derivedFromSourceIds: [
          'nids-senshi-nomonhan-027',
          'open-geographic-nomonhan-reference',
        ],
        temporalCoverage: {
          from: '1939-05-11',
          to: '1939-09-15',
          basis: 'range',
          note: '事件名の基準となるノモンハン周辺を代表する地点。',
        },
        spatialCoverage: 'ノモンハン周辺',
        geometryConfidence: 'approximate',
        transformations: [
          '防衛研究所付図でノモンハンとハルハ河東岸の相対位置を確認した。',
          '現在の同名地域の公開地理参照を照合し、歴史的村落中心の精密復元ではなく代表点として配置した。',
        ],
        notes: '1939年の集落境界・建物位置を示す点ではない。',
      },
      allowedGeometryTypes: ['Point'],
      requiredProperties: ['category', 'marker', 'label', 'labelPlacement', 'year', 'detail'],
      features: [
        {
          id: 'nomonhan-reference',
          geometry: { type: 'Point', coordinates: [118.7592, 47.7746] },
          properties: {
            category: 'reference-place',
            marker: '地',
            label: 'ノモンハン付近',
            labelPlacement: 'right',
            year: '1939',
            detail:
              '事件名の基準となるノモンハン周辺の代表点。現在の同名地域を参照した概略位置で、1939年の集落中心を測量復元したものではない。',
          },
        },
      ],
    },
    {
      id: 'nomonhan-phase-points',
      provenance: {
        sourceId: 'a29-nomonhan-phase-points',
        title: 'ノモンハン事件の時点別戦闘段階を示す代表点',
        institution: 'jpn-history-decade',
        sourceType: 'derived',
        license:
          'Site-authored approximate phase points derived from NIDS chronology and appendix-map relative locations; no arrows, fronts, unit positions, or appendix-map geometry are copied.',
        derivedFromSourceIds: [
          'nids-senshi-nomonhan-027',
          'jacar-nomonhan-learning',
          'jacar-nomonhan-ceasefire-1939',
        ],
        temporalCoverage: {
          from: '1939-05-11',
          to: '1939-09-15',
          basis: 'range',
          note: '5月の発端から9月の停戦までの主要段階。',
        },
        spatialCoverage: 'ノモンハン・ハルハ河東岸の主戦場周辺',
        geometryConfidence: 'approximate',
        transformations: [
          '戦史叢書の章立てと付図第二〜第六から、5月・7月・8月・9月の戦闘段階と主戦場が同じノモンハン周辺に重なることを確認した。',
          '付図第三〜第六の作戦矢印・戦線・部隊記号はvector traceせず、各段階を主戦場内の代表点へ縮退した。',
          '時点ボタンで一度に一段階だけ表示し、異なる日の部隊配置が同一時点に見えることを避けた。',
        ],
        notes:
          '各点の数km単位の差に戦術的意味を持たせない。目的は戦線再現ではなく、同じ係争空間で戦闘段階が変化したことを示すこと。',
      },
      allowedGeometryTypes: ['Point'],
      requiredProperties: ['category', 'marker', 'label', 'labelPlacement', 'year', 'detail', 'timeSlice'],
      features: [
        {
          id: 'nomonhan-phase-may',
          geometry: { type: 'Point', coordinates: [118.71, 47.78] },
          properties: {
            category: 'phase',
            marker: '5',
            label: '初期衝突・戦闘拡大',
            labelPlacement: 'bottom',
            year: '1939-05',
            timeSlice: 'may',
            detail:
              '5月11日の満蒙両軍の交戦から、5月下旬に日本軍・ソ連軍を含む継続戦闘へ拡大した段階を示す代表点。',
          },
        },
        {
          id: 'nomonhan-phase-july',
          geometry: { type: 'Point', coordinates: [118.60, 47.72] },
          properties: {
            category: 'phase',
            marker: '7',
            label: '7月の大規模戦闘',
            labelPlacement: 'left',
            year: '1939-07',
            timeSlice: 'july',
            detail:
              '7月1〜5日の両岸作戦、7月23日前後の攻勢など、戦車・砲兵・航空を含む大規模戦闘段階を代表する位置。進撃路・戦線は示さない。',
          },
        },
        {
          id: 'nomonhan-phase-august',
          geometry: { type: 'Point', coordinates: [118.62, 47.73] },
          properties: {
            category: 'phase',
            marker: '8',
            label: 'ソ蒙軍の大規模攻勢',
            labelPlacement: 'left',
            year: '1939-08-20以後',
            timeSlice: 'august',
            detail:
              '8月20日以後、ソ連・モンゴル軍の大規模攻勢を日本軍が受けた段階を示す代表点。包囲線・前線は描いていない。',
          },
        },
        {
          id: 'nomonhan-phase-september',
          geometry: { type: 'Point', coordinates: [118.62, 47.73] },
          properties: {
            category: 'phase',
            marker: '停',
            label: '作戦中止・停戦へ',
            labelPlacement: 'left',
            year: '1939-09-03〜09-15',
            timeSlice: 'september',
            detail:
              '9月3日の大本営による作戦中止命令から15日の停戦協定まで、主戦場での戦闘を停止へ移した段階を示す説明用代表点。',
          },
        },
      ],
    },
  ],
  layers: [
    {
      id: 'nomonhan-river-reference',
      datasetId: 'nomonhan-khalkha-river-reference',
      categoryProperty: 'category',
      categories: ['river-reference'],
    },
    {
      id: 'nomonhan-disputed-zone',
      datasetId: 'nomonhan-disputed-zone',
      categoryProperty: 'category',
      categories: ['disputed-zone'],
    },
    {
      id: 'nomonhan-reference-points',
      datasetId: 'nomonhan-reference-points',
      categoryProperty: 'category',
      categories: ['reference-place'],
    },
    {
      id: 'nomonhan-phase-points',
      datasetId: 'nomonhan-phase-points',
      categoryProperty: 'category',
      categories: ['phase'],
    },
  ],
  legend: [
    {
      value: 'river-reference',
      label: 'ハルハ河（一般化した参照線）',
      marker: '河',
      color: '#3b6f85',
      kind: 'line',
      lineStyle: 'solid',
    },
    {
      value: 'disputed-zone',
      label: '国境認識が重なる東岸側の概略空間',
      marker: '帯',
      color: '#8b7138',
      kind: 'area',
    },
    { value: 'reference-place', label: '地名の代表点', marker: '地', color: '#3f5a4b' },
    { value: 'phase', label: '選択時点の戦闘段階', marker: '時', color: '#7d3d34' },
  ],
  auditState: {
    dataAudit: 'passed',
    styleAudit: 'passed',
    visualAudit: 'pending-human',
    notes: [
      'A29のmap necessityはhigh。国境認識差とハルハ河東岸という空間条件を本文だけより明確に示せる。',
      'Data Auditは初回判定の公開geometry上限を維持し、ハルハ河一般化線・代表地点・schematic disputed zone・時点別representative pointに限定した。',
      'ソ蒙側国境認識の「東方約13km / 約20km」という研究上の記述差から精密境界線を生成せず、係争面の幅は縮尺値として使えない模式表現とした。',
      '戦史叢書付図第二〜第六で地形・時点区分を照合したが、付図の河道・作戦矢印・戦線・部隊配置をvector traceしていない。',
      '時点切替により5月・7月・8月・9月を別表示し、異なる時点の軍事情勢を一枚に重ねて同時存在したように見せない。',
      'Polygonと新しい時点切替UIを導入するためpoint-only再利用例外は適用せず、GitHub Pages上でDesktop / Tablet・Touch / Mobile / zoom別Human Visual Auditを行う。',
    ],
  },
}
