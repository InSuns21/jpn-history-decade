import type { HistoricalMapDefinition } from '../schema.ts'

export const thaiIndochinaMediation1941Map: HistoricalMapDefinition = {
  id: 'thai-indochina-mediation-1941',
  title: '1941年泰仏印東京調停：主要争点地域の相対配置',
  historicalQuestion:
    '東京調停で繰り返し問題となったメコン右岸の二方面とカンボジア西部の諸地域は、タイと仏領インドシナの間でどのような相対位置にあったのか。',
  readingNote:
    '1941年2〜3月の米国外交文書と日本側調停記録に現れる主要地域を、現在の同名都市・地域周辺の代表点で示す。点は割譲地の中心、境界、面積を表さず、最終的な法的境界を復元した地図ではない。特にシェムリアップ・コンポントムは交渉過程の案に現れる地域で、3月11日の最終線を示す点ではない。背景地図・道路・国境は現代のOpenStreetMapで、1941年の歴史境界ではない。',
  status: 'published',
  period: { startYear: 1941, endYear: 1941 },
  initialView: {
    center: [103.7, 15.8],
    zoom: 4.7,
  },
  datasets: [
    {
      id: 'thai-indochina-mediation-points-1941',
      provenance: {
        sourceId: 'a35-thai-indochina-mediation-points-1941',
        title: '泰仏印東京調停の主要争点地域から作成した代表点',
        institution: 'jpn-history-decade',
        sourceType: 'derived',
        license:
          'Historical place names and negotiation roles are derived from JACAR and U.S. Department of State diplomatic documents. Coordinates are site-authored approximate representative points; no historical boundary geometry is copied.',
        derivedFromSourceIds: [
          'jacar-thai-french-mediation-19410311',
          'frus-thai-indochina-19410223',
          'frus-thai-indochina-19410304',
          'frus-grew-thai-indochina-19410311',
        ],
        temporalCoverage: {
          from: '1941-02-07',
          to: '1941-03-11',
          basis: 'range',
          note:
            '東京調停会議の開始から調停条項仮調印までに、交渉対象として史料に現れる主要地域の相対配置を示す。',
        },
        spatialCoverage: 'タイ東部国境、ラオスのメコン流域、カンボジア西部・中部',
        geometryConfidence: 'approximate',
        transformations: [
          'FRUSの1941年2月23日・3月4日報告から、メコン右岸のルアンパバーン・パクセ方面、バッタンバン、シェムリアップ、コンポントムが交渉案に現れることを確認した。',
          'FRUSの3月11日報告から、調停案が仮調印され、バッタンバン喪失がフランス側に重大な条件として認識されていたことを確認した。',
          'JACARの3月11日資料から、日本・フランス・タイ三国代表が調停条項へ仮調印したことを確認した。',
          '法的な割譲境界を復元せず、同名都市または対象方面の代表座標だけを現在の地理上へ概略配置した。',
        ],
        notes:
          '位置関係の理解専用。点間を結んで割譲境界・戦線・進軍路を推定したり、点から面積・距離を測定したりしない。',
      },
      allowedGeometryTypes: ['Point'],
      requiredProperties: [
        'category',
        'marker',
        'label',
        'labelPlacement',
        'year',
        'detail',
      ],
      features: [
        {
          id: 'bangkok-1941',
          geometry: { type: 'Point', coordinates: [100.5018, 13.7563] },
          properties: {
            category: 'party-center',
            marker: '泰',
            label: 'バンコク',
            labelPlacement: 'left',
            year: '1941',
            detail:
              'タイ政府の首都。国境修正要求を進め、日本の調停を受諾した当事国側の政治中心。',
          },
        },
        {
          id: 'hanoi-1941',
          geometry: { type: 'Point', coordinates: [105.8542, 21.0285] },
          properties: {
            category: 'party-center',
            marker: '仏',
            label: 'ハノイ',
            labelPlacement: 'right',
            year: '1941',
            detail:
              'フランス領インドシナ総督府の行政中心。東京調停の領土問題は、仏印植民地行政が管轄していたラオス・カンボジア側地域を対象に含んだ。',
          },
        },
        {
          id: 'luang-prabang-right-bank-1941',
          geometry: { type: 'Point', coordinates: [101.95, 19.88] },
          properties: {
            category: 'mekong-claim',
            marker: '河',
            label: 'メコン右岸・ルアンパバーン方面',
            labelPlacement: 'left',
            year: '1941-02–03',
            detail:
              'FRUSの交渉報告で、ルアンパバーン地域のメコン右岸側がタイへの移転案に現れる。点は対象区域の境界・中心ではなく、方面を示す概略点。',
          },
        },
        {
          id: 'pakse-right-bank-1941',
          geometry: { type: 'Point', coordinates: [105.55, 15.12] },
          properties: {
            category: 'mekong-claim',
            marker: '河',
            label: 'メコン右岸・パクセ方面',
            labelPlacement: 'left',
            year: '1941-02–03',
            detail:
              'FRUSの交渉報告で、パクセ地域のメコン右岸側がタイへの移転案に現れる。点は対象区域の境界・中心ではなく、方面を示す概略点。',
          },
        },
        {
          id: 'battambang-1941',
          geometry: { type: 'Point', coordinates: [103.2022, 13.0957] },
          properties: {
            category: 'cambodia-area',
            marker: '柬',
            label: 'バッタンバン',
            labelPlacement: 'left',
            year: '1941-02–03',
            detail:
              'カンボジア西部の主要地域。3月11日の米国外交報告は、フランス側がバッタンバン州の喪失を調停条件の重大な部分と受け止めたと伝える。',
          },
        },
        {
          id: 'siem-reap-1941',
          geometry: { type: 'Point', coordinates: [103.855, 13.3633] },
          properties: {
            category: 'proposal-area',
            marker: '案',
            label: 'シェムリアップ',
            labelPlacement: 'right',
            year: '1941-02–03',
            detail:
              '2月23日・3月4日のFRUS報告で、カンボジア側の移転案に一部が含まれる地域として現れる。最終的な1941年3月11日の法的境界を示す点ではない。',
          },
        },
        {
          id: 'kampong-thom-1941',
          geometry: { type: 'Point', coordinates: [104.8887, 12.7111] },
          properties: {
            category: 'proposal-area',
            marker: '案',
            label: 'コンポントム',
            labelPlacement: 'right',
            year: '1941-02–03',
            detail:
              '2月23日・3月4日のFRUS報告で、カンボジア側の移転案に一部が含まれる地域として現れる。点は交渉過程の空間的広がりを読むための代表点。',
          },
        },
      ],
    },
  ],
  layers: [
    {
      id: 'thai-indochina-mediation-points-1941',
      datasetId: 'thai-indochina-mediation-points-1941',
      categoryProperty: 'category',
      categories: ['party-center', 'mekong-claim', 'cambodia-area', 'proposal-area'],
    },
  ],
  legend: [
    { value: 'party-center', label: '当事国・仏印行政の政治中心', marker: '●', color: '#365d70' },
    { value: 'mekong-claim', label: 'メコン右岸の主要争点方面', marker: '◆', color: '#5f6f43' },
    { value: 'cambodia-area', label: '3月11日条件で重要性を確認できる地域', marker: '■', color: '#7d4b3a' },
    { value: 'proposal-area', label: '交渉過程の案に現れる地域', marker: '○', color: '#75653b' },
  ],
  auditState: {
    dataAudit: 'passed',
    styleAudit: 'passed',
    visualAudit: 'not-required-reused-pattern',
    notes: [
      'A35 map necessityはadopted / high。メコン右岸の二方面とカンボジア西部・中部の複数地域が同時に争点化した空間構造は、本文だけより地図で明確になる。',
      'FRUSの2月23日・3月4日報告は交渉過程の案、3月11日報告は仮調印後の情報であり、時点と史料性格を区別した。',
      '精密な法的割譲境界を復元する十分なgeometryを前提にせず、問いに必要な相対配置をapproximate pointへ縮退した。データ精度不足を理由に地図自体を断念していない。',
      'シェムリアップ・コンポントムは交渉過程の案として別カテゴリにし、3月11日の確定境界と誤認させない。',
      'A19等と同じThematicMapのpoint-only表示、点記号、ラベル、popup/touch interactionを再利用し、新しい線・polygon・interactionを導入しない。',
      'point-only再利用パターンとして、MAP_AUDIT_STANDARDの例外要件を満たすため個別Human Visual Auditを省略する。',
    ],
  },
}
