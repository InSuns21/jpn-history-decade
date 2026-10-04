import type { HistoricalMapDefinition } from '../schema.ts'

export const francoThaiPeaceTreaty1941Map: HistoricalMapDefinition = {
  id: 'franco-thai-peace-treaty-1941',
  title: '1941年5月の仏タイ平和条約：国境変更の構成（模式）',
  historicalQuestion:
    '3月の東京調停で地域名として争われた空間は、5月9日の平和条約でメコン河・北緯15度・子午線・トンレサップ湖上の円弧を組み合わせる国境規則へどう変換されたのか。',
  readingNote:
    '条約第2条が定めた境界の「組み立て方」を読むための模式図。メコン河区間は代表waypointを結んだ一般化線で、1941年の主航路中央線を測量復元したものではない。北緯15度・子午線は条文上の幾何規則を示すが、接続点は概略である。トンレサップ湖上の円弧は、条文の半径20kmという規則と現在の同名河川付近の代表位置から説明用に作成したもので、1941年の湖岸・州境・最終標定点を示さない。条約後には境界画定委員会の作業が続き、タイ外務省の外交史は新境界の標定完了を1942年7月11日としている。背景地図・道路・国境は現代のOpenStreetMapで、1941年の歴史境界ではない。日本の調停・保障上の役割は条約・付属議定書上の制度関係であり、この線自体が日本の主権・統治範囲を表すものではない。',
  status: 'published',
  period: { startYear: 1941, endYear: 1941 },
  initialView: {
    center: [103.35, 16.5],
    zoom: 4.35,
  },
  datasets: [
    {
      id: 'franco-thai-treaty-boundary-rules-1941',
      provenance: {
        sourceId: 'a37-franco-thai-treaty-boundary-rules-1941',
        title: '1941年5月9日仏タイ平和条約第2条の国境規則から作成した模式線',
        institution: 'jpn-history-decade',
        url: 'https://www.jacar.go.jp/exhibition/nichibei/popup/19410509a.html',
        sourceType: 'derived',
        license:
          'Site-authored schematic LineStrings derived from the treaty text and official historical descriptions. No historical map geometry or modern administrative boundary is vector-traced.',
        derivedFromSourceIds: [
          'jacar-franco-thai-peace-treaty-19410509',
          'contemporary-japan-franco-thai-treaty-194106',
          'thai-mfa-diplomatic-history-1941',
        ],
        temporalCoverage: {
          from: '1941-05-09',
          to: '1941-05-09',
          basis: 'instant',
          note:
            '平和条約調印日に条文で定められた国境変更の構成を示す。現地での境界標定完了時点を示すものではない。',
        },
        spatialCoverage:
          'タイ・仏領インドシナ間のメコン流域から北緯15度、カンボジア西部・トンレサップ湖周辺',
        geometryConfidence: 'schematic',
        transformations: [
          'JACAR所収の平和条約と資料解説から、メコン河の主航路中央線、北緯15度、シェムリアップ州・バッタンバン州境が湖へ達する地点を通る子午線、トンレサップ湖上の半径20km円弧という境界構成を確認した。',
          'メコン河区間は、タイ・ビルマ・仏印三国境接合点方面からルアンパバーン、ヴィエンチャン、ターケーク、サワンナケート、パクセ方面を経て北緯15度付近へ至る代表waypointを結び、主航路中央線そのものはトレースしていない。',
          '北緯15度の区間は条文の緯線規則を直線化し、西端はStung Kombot方面へつながる子午線の代表位置へ概略接続した。',
          'トンレサップ湖上の円弧は、現在の同名河川Stung Kombot / Stung Dontri付近の代表位置を端点の近似として、条文の半径20kmに合う説明用円弧を計算した。1941年の河口・湖岸・州境の確定位置ではない。',
          '条約第4条の境界画定委員会と、タイ外務省外交史が示す1942年7月11日の標定完了を踏まえ、1941年5月の線を精密な測量境界として扱わない。',
        ],
        notes:
          '中心問いは、交渉対象だった地域が条約上どの種類の地理規則へ変換されたかである。線の細部、距離、面積、現代国境との一致を測定用途に使わない。',
      },
      allowedGeometryTypes: ['LineString'],
      requiredProperties: ['category', 'label', 'detail'],
      features: [
        {
          id: 'mekong-main-channel-rule-1941',
          geometry: {
            type: 'LineString',
            coordinates: [
              [100.08, 20.35],
              [100.40, 20.27],
              [101.08, 19.90],
              [102.14, 19.89],
              [102.63, 17.97],
              [104.77, 17.40],
              [104.74, 16.55],
              [105.80, 15.12],
              [105.78, 15.00],
            ],
          },
          properties: {
            category: 'river-rule',
            label: 'メコン河・主航路中央線（一般化）',
            detail:
              '条約は北方の三国境接合点から北緯15度まで、メコン河の主たる航路の中央線を国境とした。表示線は代表waypointによる一般化で、1941年の主航路中央線ではない。',
          },
        },
        {
          id: 'fifteenth-parallel-rule-1941',
          geometry: {
            type: 'LineString',
            coordinates: [
              [105.78, 15.00],
              [105.20, 15.00],
              [104.60, 15.00],
              [104.00, 15.00],
              [103.68, 15.00],
            ],
          },
          properties: {
            category: 'geometric-rule',
            label: '北緯15度線（条文規則・接続点概略）',
            detail:
              'メコン河が北緯15度と交わる地点から、西へ北緯15度線をたどる条文上の規則を示す。西端の接続位置は説明用の概略値。',
          },
        },
        {
          id: 'meridian-to-tonle-sap-rule-1941',
          geometry: {
            type: 'LineString',
            coordinates: [
              [103.68, 15.00],
              [103.68, 14.40],
              [103.68, 13.80],
              [103.681592, 13.286651],
            ],
          },
          properties: {
            category: 'geometric-rule',
            label: 'トンレサップ湖へ南下する子午線（模式）',
            detail:
              '条約は北緯15度線から、当時のシェムリアップ州・バッタンバン州境がトンレサップ湖へ達する地点を通る子午線へ接続した。表示位置はStung Kombot方面の代表位置に合わせた模式線。',
          },
        },
        {
          id: 'tonle-sap-twenty-km-arc-1941',
          geometry: {
            type: 'LineString',
            coordinates: [
              [103.681592, 13.286651],
              [103.732894, 13.258763],
              [103.772673, 13.216496],
              [103.796908, 13.164121],
              [103.803148, 13.106935],
              [103.790762, 13.050719],
              [103.761004, 13.001157],
              [103.71688, 12.96326],
            ],
          },
          properties: {
            category: 'lake-arc-rule',
            label: 'トンレサップ湖上・半径20km円弧（模式）',
            detail:
              '条約はシェムリアップ州・バッタンバン州境の湖上端点と、バッタンバン州・プルサト州境の湖上端点を半径20kmの円弧で結ぶとした。表示円弧は現在の同名河川付近を近似端点とした説明用で、1941年の確定線ではない。',
          },
        },
      ],
    },
    {
      id: 'franco-thai-treaty-reference-points-1941',
      provenance: {
        sourceId: 'a37-franco-thai-treaty-reference-points-1941',
        title: '仏タイ平和条約の境界規則を読むための代表地点',
        institution: 'jpn-history-decade',
        url: 'https://www.jacar.go.jp/exhibition/nichibei/popup/19410509a.html',
        sourceType: 'derived',
        license:
          'Site-authored approximate representative coordinates for named geographic references; no historical boundary geometry is copied.',
        derivedFromSourceIds: [
          'jacar-franco-thai-peace-treaty-19410509',
          'thai-mfa-diplomatic-history-1941',
        ],
        temporalCoverage: {
          from: '1941-05-09',
          to: '1941-05-09',
          basis: 'instant',
          note: '条約本文の地名・地理規則を読むための代表地点。',
        },
        spatialCoverage:
          'メコン流域、バッタンバン、トンレサップ湖西部・北西部',
        geometryConfidence: 'approximate',
        transformations: [
          '条約に現れる地理要素と、3月の東京調停で争点となったバッタンバン・メコン右岸方面の位置関係を確認した。',
          '都市・河川名について現在の同名地点付近へ代表点を置き、1941年の行政境界・河口・湖岸位置は復元していない。',
          'Stung Kombot / Stung Dontriは湖上円弧の条文構造を説明するための概略端点であり、境界標石や確定座標ではない。',
        ],
        notes:
          '代表点は線形の精度保証ではなく、読者が条文の地理的順序を追うための目印。',
      },
      allowedGeometryTypes: ['Point'],
      requiredProperties: ['category', 'marker', 'label', 'labelPlacement', 'year', 'detail'],
      features: [
        {
          id: 'northern-mekong-junction-area-1941',
          geometry: { type: 'Point', coordinates: [100.08, 20.35] },
          properties: {
            category: 'rule-anchor',
            marker: '始',
            label: '三国境接合点方面',
            labelPlacement: 'right',
            year: '1941-05',
            detail:
              '条約上の北側起点。タイ・ビルマ・仏領インドシナの境界が接する方面を示す代表点で、1941年の確定接合座標ではない。',
          },
        },
        {
          id: 'mekong-lat15-crossing-1941',
          geometry: { type: 'Point', coordinates: [105.78, 15.00] },
          properties: {
            category: 'rule-anchor',
            marker: '15',
            label: 'メコン×北緯15度（概略）',
            labelPlacement: 'left',
            year: '1941-05',
            detail:
              'メコン河の主航路中央線から北緯15度線へ規則が切り替わる地点を概略表示する。',
          },
        },
        {
          id: 'battambang-reference-1941',
          geometry: { type: 'Point', coordinates: [103.2022, 13.0957] },
          properties: {
            category: 'context-place',
            marker: '柬',
            label: 'バッタンバン',
            labelPlacement: 'left',
            year: '1941',
            detail:
              '3月の東京調停でも重要な争点となったカンボジア西部の主要地域。交渉対象地域と5月の条約線をつなぐ参照点。',
          },
        },
        {
          id: 'stung-kombot-reference-1941',
          geometry: { type: 'Point', coordinates: [103.681592, 13.286651] },
          properties: {
            category: 'approximate-endpoint',
            marker: '湖',
            label: 'Stung Kombot方面（概略）',
            labelPlacement: 'right',
            year: '1941-05',
            detail:
              '条約がシェムリアップ州・バッタンバン州境のトンレサップ湖上端点として言及するStung Kombot方面。現在の同名河川付近を代表位置とし、1941年の河口・州境端点を確定していない。',
          },
        },
        {
          id: 'stung-dontri-reference-1941',
          geometry: { type: 'Point', coordinates: [103.71688, 12.96326] },
          properties: {
            category: 'approximate-endpoint',
            marker: '湖',
            label: 'Stung Dontri方面（概略）',
            labelPlacement: 'right',
            year: '1941-05',
            detail:
              '条約がバッタンバン州・プルサト州境のトンレサップ湖上端点として言及するStung Dontri方面。現在の同名河川付近を代表位置とし、1941年の河口・州境端点を確定していない。',
          },
        },
      ],
    },
  ],
  layers: [
    {
      id: 'a37-boundary-rules',
      datasetId: 'franco-thai-treaty-boundary-rules-1941',
      categoryProperty: 'category',
      categories: ['river-rule', 'geometric-rule', 'lake-arc-rule'],
    },
    {
      id: 'a37-reference-points',
      datasetId: 'franco-thai-treaty-reference-points-1941',
      categoryProperty: 'category',
      categories: ['rule-anchor', 'context-place', 'approximate-endpoint'],
    },
  ],
  legend: [
    {
      value: 'river-rule',
      label: 'メコン主航路中央線の規則（一般化）',
      marker: '河',
      color: '#426d78',
      kind: 'line',
      lineStyle: 'dashed',
    },
    {
      value: 'geometric-rule',
      label: '北緯15度・子午線の規則（接続点概略）',
      marker: '線',
      color: '#71623f',
      kind: 'line',
      lineStyle: 'dashed',
    },
    {
      value: 'lake-arc-rule',
      label: 'トンレサップ湖上20km円弧（模式）',
      marker: '弧',
      color: '#7b4e45',
      kind: 'line',
      lineStyle: 'dashed',
    },
    {
      value: 'rule-anchor',
      label: '条文上の規則切替地点（概略）',
      marker: '●',
      color: '#435f69',
    },
    {
      value: 'context-place',
      label: '3月調停との接続用参照地域',
      marker: '■',
      color: '#6f5a3a',
    },
    {
      value: 'approximate-endpoint',
      label: '湖上境界端点の方面（概略）',
      marker: '○',
      color: '#765c4b',
    },
  ],
  auditState: {
    dataAudit: 'passed',
    styleAudit: 'passed',
    visualAudit: 'passed',
    notes: [
      'A37 map necessityはadopted / high。3月A35の「争点地域の相対配置」から、5月9日条約の「河川・緯線・子午線・湖上円弧を組み合わせた法的境界規則」へ情報状態が変わり、本文だけでは空間的な順序を追いにくい。',
      'Data Auditは、精密な1941年境界線の復元ではなく、条約第2条が指定した地理規則をschematic LineStringとして可視化する用途に精度を合わせた。',
      '現代の国境線・州境を1941年の歴史境界として流用していない。メコン主航路中央線は代表waypointによる一般化で、湖上端点は現在の同名河川付近を説明用の近似位置としている。',
      '条約後に境界画定委員会の作業が予定され、タイ外務省外交史は新境界の標定完了を1942年7月11日としているため、1941年5月の条約線を後年の測量済み境界と同一視しない。',
      'A35へ時点切替を追加せず別definitionにした。A35は交渉過程のpoint-only地図、A37は条約成立後のlineを含む地図で、時点・史料性格・監査要件が異なるためである。',
      'Style Auditは既存ThematicMapのline/point表現を再利用し、すべての境界規則線を破線として確定測量線に見せない。readingNote・popupでapproximate / schematicの意味を明示した。',
      'HVA-013 Human Visual Auditは2026-10-04のユーザー実表示確認でpassed。Desktop / Tablet・Touch / Mobile、zoom / label / legend / popup / marker tap / pan / pinch、および模式線・現代背景地図の誤読有無を確認済みとしてpublishedへ昇格した。',
    ],
  },
}
