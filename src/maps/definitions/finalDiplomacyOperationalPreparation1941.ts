import type { HistoricalMapDefinition } from '../schema.ts'

export const finalDiplomacyOperationalPreparation1941Map: HistoricalMapDefinition = {
  id: 'final-diplomacy-operational-preparation-1941',
  title: '1941年11月の作戦発動準備：正式集結地域と単冠湾',
  historicalQuestion:
    '対米交渉が続いていた1941年11月、軍事側の準備は、どの地域への正式な集結命令と具体的な出撃準備まで進んでいたのか。',
  readingNote:
    '11月6日の陸軍側の作戦準備命令で示された広域集結地域と、海軍の真珠湾攻撃部隊が11月22日までに集結し26日に出航した単冠湾を、Pointだけで比較する模式図。仏印・華南・台湾・南西諸島・南洋群島の点は地域ラベル用の代表点で、個別部隊の駐屯地・港・飛行場を示さない。単冠湾は史料で確認できる具体的な集結・出撃地点として別カテゴリにした。海上進攻路、真珠湾への航跡、南方侵攻線は描かない。11月25日の海軍命令には対米交渉成功時の帰投条件も残っており、軍事準備の具体化を11月中の最終開戦決定そのものと読み替えない。背景地図・道路・国境は現代のOpenStreetMapで、1941年の政治境界ではない。',
  status: 'published',
  period: { startYear: 1941, endYear: 1941 },
  initialView: {
    center: [128.5, 25.5],
    zoom: 2.45,
    minZoom: 1.5,
  },
  datasets: [
    {
      id: 'a42-formal-concentration-regions-1941',
      provenance: {
        sourceId: 'a42-formal-concentration-regions-1941',
        title: '1941年11月6日の南方軍作戦準備命令に示された集結地域から作成した代表点',
        institution: 'jpn-history-decade',
        url: 'https://corregidor.org/refdoc/Reference_Reading/japanese_monograph/index.html',
        sourceType: 'derived',
        license:
          'Historical roles are derived from U.S. Army postwar Japanese Monograph material. Coordinates are site-authored approximate representative points for broad regions; no historical facility geometry is copied.',
        derivedFromSourceIds: ['japanese-monograph-1-southern-army-preparation-order'],
        temporalCoverage: {
          from: '1941-11-06',
          to: '1941-11-26',
          basis: 'range',
          note:
            'Japanese Monograph No. 1 records the 6 November 1941 operational-preparation order directing the Southern Army to concentrate forces in French Indo-China, southern China, Formosa, the south-western islands and the South Sea Islands; the actual operation order was to follow later.',
        },
        spatialCoverage:
          'フランス領インドシナ、華南、台湾、南西諸島、南洋群島',
        geometryConfidence: 'approximate',
        transformations: [
          'Japanese Monograph No. 1が列挙する5つの広域集結地域を抽出し、11月6日の正式な作戦準備命令の対象地域として分類した。',
          '広域地域そのものを確定境界Polygonにせず、相対配置を読むための代表Pointへ落とした。',
          '仏印はサイゴン、華南は広州、台湾は島中央部、南西諸島は沖縄本島、南洋群島はパラオ付近をラベルアンカーとして採用した。いずれも個別部隊の精密位置を意味しない。',
          '12月8日以後の上陸地点・攻撃経路・占領地域、ならびに実際の海上航路は取り込まなかった。',
        ],
        notes:
          'このdatasetは11月6日の命令が作戦準備の空間をどこまで具体化したかを示す。Point間の線、距離、兵力規模、作戦順序は表現しない。',
      },
      allowedGeometryTypes: ['Point'],
      requiredProperties: ['category', 'marker', 'label', 'labelPlacement', 'year', 'detail'],
      features: [
        {
          id: 'french-indochina-concentration-1941-11',
          geometry: { type: 'Point', coordinates: [106.6297, 10.8231] },
          properties: {
            category: 'formal-concentration-region',
            marker: '集',
            label: '仏印（サイゴン参照）',
            labelPlacement: 'left',
            year: '1941-11-06以後',
            detail:
              '11月6日の作戦準備命令が南方軍の集結地域として挙げたフランス領インドシナ。',
          },
        },
        {
          id: 'south-china-concentration-1941-11',
          geometry: { type: 'Point', coordinates: [113.2644, 23.1291] },
          properties: {
            category: 'formal-concentration-region',
            marker: '集',
            label: '華南（広州参照）',
            labelPlacement: 'left',
            year: '1941-11-06以後',
            detail:
              '11月6日の作戦準備命令が集結地域として挙げた華南。',
          },
        },
        {
          id: 'formosa-concentration-1941-11',
          geometry: { type: 'Point', coordinates: [120.80, 23.60] },
          properties: {
            category: 'formal-concentration-region',
            marker: '集',
            label: '台湾（代表点）',
            labelPlacement: 'right',
            year: '1941-11-06以後',
            detail:
              '11月6日の作戦準備命令が集結地域として挙げた台湾。',
          },
        },
        {
          id: 'southwestern-islands-concentration-1941-11',
          geometry: { type: 'Point', coordinates: [127.6809, 26.2124] },
          properties: {
            category: 'formal-concentration-region',
            marker: '集',
            label: '南西諸島（沖縄本島参照）',
            labelPlacement: 'right',
            year: '1941-11-06以後',
            detail:
              '11月6日の作戦準備命令が集結地域として挙げた南西諸島。',
          },
        },
        {
          id: 'south-sea-islands-concentration-1941-11',
          geometry: { type: 'Point', coordinates: [134.48, 7.50] },
          properties: {
            category: 'formal-concentration-region',
            marker: '集',
            label: '南洋群島（パラオ参照）',
            labelPlacement: 'right',
            year: '1941-11-06以後',
            detail:
              '11月6日の作戦準備命令が集結地域として挙げた南洋群島。',
          },
        },
      ],
    },
    {
      id: 'a42-hitokappu-assembly-departure-1941',
      provenance: {
        sourceId: 'a42-hitokappu-assembly-departure-1941',
        title: '真珠湾攻撃部隊の単冠湾集結・出航記録と単冠湾位置から作成したPoint',
        institution: 'jpn-history-decade',
        url: 'https://www.history.navy.mil/content/history/nhhc/research/library/online-reading-room/title-list-alphabetically/p/pearl-harbor-why-how.html',
        sourceType: 'derived',
        license:
          'Historical event timing is derived from U.S. Naval History and Heritage Command material. The bay coordinate uses the Japan Coast Guard pilot position 44°57′N, 147°41′E as a site-authored point; no route geometry is copied.',
        derivedFromSourceIds: [
          'nhhc-pearl-harbor-assembly-orders-1941',
          'japan-coast-guard-hitokappu-bay-position',
        ],
        temporalCoverage: {
          from: '1941-11-22',
          to: '1941-11-26',
          basis: 'range',
          note:
            'NHHC records that the task force was assembled at Hitokappu Bay by 22 November and that the 25 November order directed departure on the morning of 26 November, while also retaining a return-and-reassemble condition if negotiations with the United States succeeded.',
        },
        spatialCoverage: '択捉島単冠湾',
        geometryConfidence: 'verified',
        transformations: [
          'NHHCの集結・命令・出航日を一つの地点属性として整理し、航路LineStringは作成しなかった。',
          '単冠湾のPointは海上保安庁水路誌が示す44°57′N, 147°41′Eを十進表記へ変換した。',
          '11月26日以後の北太平洋航路、12月7〜8日の攻撃位置、真珠湾の攻撃目標は地図へ取り込まなかった。',
        ],
        notes:
          'このPointは実際の集結・出撃地点を示すが、そこから作戦航路・攻撃時刻・開戦決定時刻を推定しない。11月25日命令には外交成功時の帰投条件が明記されていた。',
      },
      allowedGeometryTypes: ['Point'],
      requiredProperties: ['category', 'marker', 'label', 'labelPlacement', 'year', 'detail'],
      features: [
        {
          id: 'hitokappu-bay-assembly-departure-1941',
          geometry: { type: 'Point', coordinates: [147.6833, 44.95] },
          properties: {
            category: 'carrier-assembly-departure',
            marker: '発',
            label: '単冠湾',
            labelPlacement: 'left',
            year: '1941-11-22〜26',
            detail:
              '真珠湾攻撃部隊は11月22日までに単冠湾へ集結し、11月25日の命令を受けて26日朝に出航した。',
          },
        },
      ],
    },
  ],
  layers: [
    {
      id: 'a42-formal-concentration-regions',
      datasetId: 'a42-formal-concentration-regions-1941',
      categoryProperty: 'category',
      categories: ['formal-concentration-region'],
    },
    {
      id: 'a42-hitokappu-assembly-departure',
      datasetId: 'a42-hitokappu-assembly-departure-1941',
      categoryProperty: 'category',
      categories: ['carrier-assembly-departure'],
    },
  ],
  legend: [
    {
      value: 'formal-concentration-region',
      label: '11月6日作戦準備命令の集結地域（代表点）',
      marker: '集',
      color: '#4f6471',
    },
    {
      value: 'carrier-assembly-departure',
      label: '具体的な集結・出撃地点',
      marker: '発',
      color: '#7d4b3a',
    },
  ],
  auditState: {
    dataAudit: 'passed',
    styleAudit: 'passed',
    visualAudit: 'not-required-reused-pattern',
    notes: [
      'A42 map necessityはadopted / high。A40が9〜10月の準備地域・作戦対象方面を扱ったのに対し、A42は11月6日の正式な作戦準備命令と、11月22〜26日に具体化した単冠湾の集結・出撃準備を扱う。',
      'Japanese Monograph No. 1の11月6日命令は、南方軍に仏印・華南・台湾・南西諸島・南洋群島への集結と南方要地攻撃準備を命じ、実際の作戦命令は後に出す構造を明記する。',
      'NHHCは真珠湾攻撃部隊が11月22日までに単冠湾へ集結し、11月25日命令で26日朝の出航を指示されたこと、同時に対米交渉成功時の帰投条件が残っていたことを記録する。',
      '単冠湾Pointは海上保安庁水路誌の44°57′N, 147°41′Eを使用し、広域集結地域は既存A40と同じ代表点設計または同等のラベルアンカー設計を用いた。',
      '実航路・進攻線・上陸地点を12月8日の実績から逆投影しないため、全featureをPointに限定した。',
      '外交交渉地点であるワシントンは軍事準備地点と同じ視覚変数へ混ぜず、外交期限と交渉成功時の停止条件はreadingNote・popup・本文で扱う。',
      'Style Auditでは、広域代表点と具体的な集結・出撃地点を別カテゴリ・別マーカー・別凡例で区別し、Pointの大きさで重要度や兵力規模を表現しない。',
      'A40 southern-operation-preparation-1941で監査済みのThematicMap point-only表示、ラベル、凡例、popup/touch interactionをそのまま再利用し、新しいLineString / Polygon / time slice / interaction / renderer変更を導入しない。',
      '変更はPoint feature・初期表示・ラベル・属性値に限定され、広域zoomもA39/A40で監査済みのminZoom対応を再利用するため、MAP_AUDIT_STANDARDのpoint-only再利用例外を適用して個別Human Visual Auditを省略する。',
    ],
  },
}
