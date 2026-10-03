import type { HistoricalMapDefinition } from '../schema.ts'

export const lugouqiaoInitial1937Map: HistoricalMapDefinition = {
  id: 'lugouqiao-initial-1937',
  title: '1937年7月の盧溝橋・宛平・北平・天津',
  historicalQuestion:
    '盧溝橋付近の局地衝突は、宛平県城・豊台・北平・天津という別の軍事・行政拠点とどのような距離関係にあったのか。',
  readingNote:
    '各地点は歴史地名を現在の同名地点付近へ置いた代表位置で、1937年の部隊位置・道路・鉄道・支配境界を示すものではない。盧溝橋と宛平県城は近接するため、拡大して位置関係を読む。背景地図・道路・行政界は現代のOpenStreetMapである。',
  status: 'published',
  period: { startYear: 1937, endYear: 1937 },
  initialView: { center: [116.50, 39.66], zoom: 7.0 },
  datasets: [{
    id: 'a20-reference-points',
    provenance: {
      sourceId: 'a20-lugouqiao-reference-points',
      title: '盧溝橋事件初期の主要地点',
      institution: 'jpn-history-decade',
      url: 'https://www.jacar.go.jp/exhibition/nichibei/popup/pop_01.html',
      sourceType: 'derived',
      license: 'Site-authored approximate representative coordinates derived from official and research descriptions; no historical route or boundary geometry is copied.',
      derivedFromSourceIds: ['jacar-lugouqiao-showa100', 'jacar-east-asia-bureau-lugouqiao', 'mofa-japan-china-joint-history'],
      temporalCoverage: { from: '1937-07-07', to: '1937-07-10', basis: 'range' },
      spatialCoverage: '盧溝橋・宛平・豊台・北平・天津',
      geometryConfidence: 'approximate',
      transformations: [
        'JACAR・外務省関係資料で事件初期の主要地名と役割を確認した。',
        '歴史地名を現在の同名地点・都市中心付近の代表座標へ概略配置した。',
        '部隊位置、演習経路、道路・鉄道路線、支配境界は復元していない。',
      ],
      notes: '地点間の相対配置を読むためのpoint-only地図。',
    },
    allowedGeometryTypes: ['Point'],
    requiredProperties: ['category', 'marker', 'label', 'labelPlacement', 'year', 'detail'],
    features: [
      { id: 'lugouqiao', geometry: { type: 'Point', coordinates: [116.213, 39.849] }, properties: { category: 'incident-site', marker: '橋', label: '盧溝橋', labelPlacement: 'left', year: '1937-07', detail: '7月7日夜の演習・発砲事件の主要地点。' } },
      { id: 'wanping', geometry: { type: 'Point', coordinates: [116.220, 39.848] }, properties: { category: 'negotiation-site', marker: '城', label: '宛平県城', labelPlacement: 'right', year: '1937-07', detail: '行方不明兵の捜索をめぐり、城内への立入り要求が交渉問題になった。' } },
      { id: 'fengtai', geometry: { type: 'Point', coordinates: [116.286, 39.858] }, properties: { category: 'military-node', marker: '軍', label: '豊台', labelPlacement: 'bottom', year: '1937-07', detail: '中国駐屯軍の部隊が駐屯していた京津地域の軍事拠点。' } },
      { id: 'beiping', geometry: { type: 'Point', coordinates: [116.397, 39.908] }, properties: { category: 'political-node', marker: '政', label: '北平', labelPlacement: 'top', year: '1937-07', detail: '冀察地域の政治・軍事調整を考える主要都市。' } },
      { id: 'tianjin', geometry: { type: 'Point', coordinates: [117.200, 39.130] }, properties: { category: 'political-node', marker: '港', label: '天津', labelPlacement: 'right', year: '1937-07', detail: '中国駐屯軍・外交・外国権益が重なる京津地域の主要港湾都市。' } },
    ],
  }],
  layers: [{ id: 'a20-points', datasetId: 'a20-reference-points', categoryProperty: 'category', categories: ['incident-site', 'negotiation-site', 'military-node', 'political-node'] }],
  legend: [
    { value: 'incident-site', label: '事件の主要地点', marker: '橋', color: '#7d4338' },
    { value: 'negotiation-site', label: '交渉焦点となった城郭', marker: '城', color: '#6f5a3d' },
    { value: 'military-node', label: '軍事拠点', marker: '軍', color: '#4d5f70' },
    { value: 'political-node', label: '主要都市・政治拠点', marker: '政', color: '#4a6654' },
  ],
  auditState: {
    dataAudit: 'passed',
    styleAudit: 'passed',
    visualAudit: 'not-required-reused-pattern',
    notes: [
      'A20は採用/highを維持し、旧判定どおりpoint-onlyで実装した。',
      '既存のmanchurian-incident-1931等と同じThematicMap、point marker、label、popup、touch interactionを再利用し、変更点はpoint featureの位置・ラベル・属性のみ。',
      '線・polygon・新規interactionを含まないためMAP_AUDIT_STANDARDのpoint-only再利用例外を適用する。',
    ],
  },
}
