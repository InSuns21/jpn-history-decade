import type { HistoricalMapDefinition } from '../schema.ts'

export const bakumatsuEarlyContact1853Map: HistoricalMapDefinition = {
  id: 'bakumatsu-early-contact-1853-1854',
  title: '幕末初期の来航地点・港・海防（1853–1854）',
  historicalQuestion: '外国艦隊への対応が、なぜ一港の問題ではなく全国政治の問題になったのか。',
  readingNote:
    '地点は史料に記された歴史地名を現在の地理上へ概略配置したもので、艦船の正確な投錨位置や1850年代の海岸線を再現するものではない。背景地図・海岸線は現代のOpenStreetMapであり、歴史境界を示さない。',
  status: 'published',
  period: { startYear: 1853, endYear: 1854 },
  initialView: {
    center: [136.7, 36.4],
    zoom: 4.25,
  },
  datasets: [
    {
      id: 'contact-defense-points',
      provenance: {
        sourceId: 'jh06-official-place-synthesis',
        title: 'JH06公的資料記載地点から作成した概略位置データ',
        institution: 'jpn-history-decade',
        sourceType: 'derived',
        license:
          'Site-authored approximate coordinates; no third-party geometry copied. Source texts remain subject to each institution\'s terms.',
        derivedFromSourceIds: [
          'archives-bakumatsu-history',
          'archives-blackships',
          'ndl-modern-opening',
          'mofa-washin',
          'yokosuka-uraga',
          'yokosuka-perry',
          'minato-daiba',
        ],
        temporalCoverage: {
          from: '1853',
          to: '1854',
          basis: 'range',
          note: '1853年の来航・海防整備と1854年の条約交渉・開港指定を対象とする。',
        },
        spatialCoverage: '長崎から箱館までの日本列島主要地点',
        geometryConfidence: 'approximate',
        transformations: [
          '公的資料に記された歴史地名を抽出した。',
          '各歴史地名を現在の地理上の代表点へ概略配置した。',
          '史料で確定できない艦船の投錨位置や当時の海岸線は復元していない。',
        ],
        notes:
          '空間関係の理解を目的とする説明地図であり、測量・航海・境界分析には使用しない。',
      },
      allowedGeometryTypes: ['Point'],
      requiredProperties: ['category', 'marker', 'label', 'labelPlacement', 'year', 'detail'],
      features: [
        {
          id: 'perry-uraga-1853',
          geometry: { type: 'Point', coordinates: [139.75, 35.23] },
          properties: {
            category: 'arrival',
            marker: '来',
            label: '浦賀沖',
            labelPlacement: 'right',
            year: 1853,
            detail: 'ペリー艦隊4隻が来航。浦賀側は長崎回航を求めたが、米側は国書受領を要求した。',
          },
        },
        {
          id: 'kurihama-1853',
          geometry: { type: 'Point', coordinates: [139.715, 35.221] },
          properties: {
            category: 'negotiation',
            marker: '交',
            label: '久里浜',
            labelPlacement: 'bottom',
            year: 1853,
            detail: '応接所でアメリカ大統領の国書を日本側が受領した地点。',
          },
        },
        {
          id: 'putyatin-nagasaki-1853',
          geometry: { type: 'Point', coordinates: [129.86, 32.75] },
          properties: {
            category: 'arrival',
            marker: '来',
            label: '長崎',
            labelPlacement: 'right',
            year: 1853,
            detail: 'ロシア使節プチャーチンが来航し、通商・国境問題について交渉を求めた。',
          },
        },
        {
          id: 'shinagawa-daiba-1853',
          geometry: { type: 'Point', coordinates: [139.773, 35.633] },
          properties: {
            category: 'defense',
            marker: '防',
            label: '品川台場',
            labelPlacement: 'top',
            year: 1853,
            detail: 'ペリー再来航に備え、江戸防衛のため品川沖で台場築造が始まった。',
          },
        },
        {
          id: 'yokohama-1854',
          geometry: { type: 'Point', coordinates: [139.645, 35.447] },
          properties: {
            category: 'negotiation',
            marker: '交',
            label: '横浜村',
            labelPlacement: 'left',
            year: 1854,
            detail: '再来航したペリー側と幕府側が交渉し、日米和親条約を調印した地域。',
          },
        },
        {
          id: 'shimoda-1854',
          geometry: { type: 'Point', coordinates: [138.943, 34.674] },
          properties: {
            category: 'treaty-port',
            marker: '港',
            label: '下田',
            labelPlacement: 'right',
            year: 1854,
            detail: '日米和親条約により米船へ開かれた港の一つ。',
          },
        },
        {
          id: 'hakodate-1854',
          geometry: { type: 'Point', coordinates: [140.728, 41.769] },
          properties: {
            category: 'treaty-port',
            marker: '港',
            label: '箱館',
            labelPlacement: 'right',
            year: 1854,
            detail: '日米和親条約により米船へ開かれた港の一つ。',
          },
        },
      ],
    },
  ],
  layers: [
    {
      id: 'contact-defense-points',
      datasetId: 'contact-defense-points',
      categoryProperty: 'category',
      categories: ['arrival', 'negotiation', 'defense', 'treaty-port'],
    },
  ],
  legend: [
    { value: 'arrival', label: '外国艦隊の来航', marker: '来', color: '#7d3d34' },
    { value: 'negotiation', label: '国書受領・条約交渉', marker: '交', color: '#355f77' },
    { value: 'defense', label: '海防拠点', marker: '防', color: '#735f2b' },
    { value: 'treaty-port', label: '和親条約で開かれた港', marker: '港', color: '#37624f' },
  ],
  auditState: {
    dataAudit: 'passed',
    styleAudit: 'passed',
    visualAudit: 'passed',
    notes: [
      '歴史地名と年代はJH06の公的資料群で照合した。',
      '座標は概略位置として扱い、geometryConfidence=approximate とした。',
      'Human Visual Auditで単漢字カテゴリ記号のみでは地点識別が弱いと判明し、地点名ラベルを常時表示する形へ修正した。',
      'Tablet / Touchでpopupが開きにくい問題を修正し、2026-09-26にタブレット実機で地点ラベル・popup操作を確認した。',
    ],
  },
}
