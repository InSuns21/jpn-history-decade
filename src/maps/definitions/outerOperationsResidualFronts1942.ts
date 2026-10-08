import type { HistoricalMapDefinition } from '../schema.ts'

export const outerOperationsResidualFronts1942Map: HistoricalMapDefinition = {
  "id": "outer-operations-residual-fronts-1942-04-09",
  "title": "1942年4月9日：攻略後の外周作戦と残存戦線",
  "historicalQuestion": "日本軍の占領後の軍政拠点から外へ伸びた作戦と、4月9日時点で残った戦線は、南方からインド洋・ニューギニアまでどのように分布していたか。",
  "readingNote": "1942年3月10日〜4月9日の状態変化を4月9日時点で整理した、代表Pointによる模式図。「政」は占領地で軍政・管理を開始した拠点、「占」は新規占領地点。「日」は日本海軍の空襲先（セイロン）、「米」は米海軍の反撃先（ニューギニア）であり、攻撃対象を日本の占領地と同一視しない。「降」はバターン主力の降伏、「戦」はコレヒドール・ビルマ・東ティモールで形態の異なる抵抗継続を示す。近接するバターン／コレヒドール、コロンボ／トリンコマリーは詳細zoomとpopupで個別確認する。Pointは代表位置であり、前線、戦闘範囲、実航路、占領面積を示さない。背景国境は現代のOpenStreetMapによるもので、1942年の政治境界ではない。",
  "status": "draft",
  "period": {
    "startYear": 1942,
    "endYear": 1942
  },
  "initialView": {
    "center": [
      113.4,
      6.8
    ],
    "zoom": 1.55,
    "minZoom": 0.9,
    "maxZoom": 6
  },
  "datasets": [
    {
      "id": "a46-outer-operations-status-1942-04-09",
      "provenance": {
        "sourceId": "a46-outer-operations-status-1942-04-09",
        "title": "1942年3月10日〜4月9日の占領後統治・空母攻撃・残存戦線を代表Pointへ分類",
        "institution": "アジア歴史資料センター / U.S. Naval History and Heritage Command / U.S. Army Center of Military History / Australian War Memorial",
        "url": "https://www.history.navy.mil/research/library/online-reading-room/title-list-alphabetically/e/early-raids-pacific-ocean.html",
        "sourceType": "derived",
        "license": "Historical status and event dates summarized from institutional reference sources cited in JH126–JH129. All coordinates are site-authored approximate representative points for named places or generalized active regions; no proprietary map, historical route, frontier, or boundary geometry is reproduced.",
        "derivedFromSourceIds": [
          "jacar-16th-army-java-jh126",
          "jacar-15th-army-burma-jh126",
          "nhhc-early-raids-jh126",
          "jacar-andaman-jh127",
          "cmh-chronology-jh128",
          "cmh-chronology-jh129",
          "cmh-fall-philippines-jh129",
          "awm-vampire-jh129",
          "awm-march-jh126"
        ],
        "temporalCoverage": {
          "from": "1942-03-10",
          "to": "1942-04-09",
          "basis": "range",
          "note": "各地点の主要eventDateは状態変化日、4月9日で残存状態を比較する場合は同日を使用する。空襲先は過去の攻撃実施地点として保持し、4月9日の継続攻撃を意味しない。"
        },
        "spatialCoverage": "セイロン島〜アンダマン諸島〜ビルマ〜シンガポール／ジャワ〜フィリピン〜東ティモール〜ニューギニア",
        "geometryConfidence": "approximate",
        "transformations": [
          "JH126〜JH129で出典確認済みの主要地名・状態変化を抽出し、比較に必要な地点だけを代表Pointとして配置する。",
          "A45の占領・抵抗Pointから、占領後軍政拠点、3月23日のアンダマン占領、3月10日の米軍ラエ・サラモア攻撃、4月5日と9日の日本軍セイロン空襲を区別する新しい分類へ変更する。",
          "同日に別の状態となったバターン主力降伏とコレヒドール抗戦は別Pointとし、至近距離によるラベル重なりはHuman Visual Auditで確認する。",
          "ビルマ北方のPointはプローム撤退後の中北部継戦を示す模式的な代表位置であり、前線の正確な位置ではない。",
          "ラエ／サラモアは両地点の中間付近の代表Pointとし、米軍攻撃の中心や侵攻経路の測定には使用しない。",
          "空襲先・米軍反撃先は占領地Pointと異なるカテゴリ・凡例を用い、占領範囲のPolygonや実航路・進攻LineStringを復元しない。"
        ],
        "notes": "A46 uses Point-only geometry and the existing ThematicMap marker/popup renderer, but changes categories and adds Japanese/US attack-target symbols. Therefore the A45 reused-pattern visual-audit exemption is NOT claimed. Human Visual Audit of labels, small-screen pan/zoom, initial view, legend and touch interactions is required before publishing."
      },
      "allowedGeometryTypes": [
        "Point"
      ],
      "requiredProperties": [
        "category",
        "marker",
        "label",
        "labelPlacement",
        "year",
        "eventDate",
        "status",
        "detail"
      ],
      "features": [
        {
          "id": "a46-singapore-administration-1942-04-09",
          "geometry": {
            "type": "Point",
            "coordinates": [
              103.82,
              1.35
            ]
          },
          "properties": {
            "category": "occupation-administration",
            "marker": "政",
            "label": "シンガポール",
            "labelPlacement": "left",
            "year": "1942-02-15〜",
            "eventDate": "1942-04-09",
            "status": "占領地で軍政・港湾管理を継続",
            "detail": "守備隊降伏後、昭南特別市の占領行政・港湾・住民管理が進んだ。占領統治が安定して完了したことを示さない。"
          }
        },
        {
          "id": "a46-java-administration-1942-04-09",
          "geometry": {
            "type": "Point",
            "coordinates": [
              107.61,
              -6.91
            ]
          },
          "properties": {
            "category": "occupation-administration",
            "marker": "政",
            "label": "ジャワ（バンドン）",
            "labelPlacement": "right",
            "year": "1942-03-09〜",
            "eventDate": "1942-04-09",
            "status": "第16軍の占領軍政を開始",
            "detail": "ジャワの組織的降伏後、第16軍は治安・行政・交通施設・捕虜などの継続管理を担い始めた。代表Pointは島全域の行政掌握完了を示さない。"
          }
        },
        {
          "id": "a46-rangoon-administration-1942-04-09",
          "geometry": {
            "type": "Point",
            "coordinates": [
              96.16,
              16.84
            ]
          },
          "properties": {
            "category": "occupation-administration",
            "marker": "政",
            "label": "ラングーン",
            "labelPlacement": "left",
            "year": "1942-03-08〜",
            "eventDate": "1942-03-15",
            "status": "第15軍による軍政と補給拠点化の開始",
            "detail": "3月8日の市内進入後、第15軍は軍政部を編成し、港湾・交通・市街の管理を始めた。一方、ビルマ戦線は北方へ続く。"
          }
        },
        {
          "id": "a46-port-blair-occupied-1942-04-09",
          "geometry": {
            "type": "Point",
            "coordinates": [
              92.75,
              11.67
            ]
          },
          "properties": {
            "category": "occupation-established",
            "marker": "占",
            "label": "アンダマン（ポートブレア）",
            "labelPlacement": "right",
            "year": "1942-03-23",
            "eventDate": "1942-03-23",
            "status": "日本軍によるポートブレア占領",
            "detail": "3月23日に日本軍がアンダマン諸島へ進出した。インド本土の占領やベンガル湾全域の制海権確保を意味しない。"
          }
        },
        {
          "id": "a46-lae-salamaua-us-counterstrike-1942-04-09",
          "geometry": {
            "type": "Point",
            "coordinates": [
              147.04,
              -6.9
            ]
          },
          "properties": {
            "category": "us-counterstrike-target",
            "marker": "米",
            "label": "ラエ／サラモア",
            "labelPlacement": "right",
            "year": "1942-03-10",
            "eventDate": "1942-03-10",
            "status": "日本軍の新規占領拠点に米空母航空隊が反撃",
            "detail": "3月10日、LexingtonとYorktownの航空隊が日本軍の船舶・陸上施設を攻撃した。2地点の中間付近に置く代表Pointで、攻撃航路・占領範囲を示さない。"
          }
        },
        {
          "id": "a46-central-burma-continued-front-1942-04-09",
          "geometry": {
            "type": "Point",
            "coordinates": [
              95.3,
              20.1
            ]
          },
          "properties": {
            "category": "resistance-ongoing",
            "marker": "戦",
            "label": "ビルマ中北部（後退戦）",
            "labelPlacement": "right",
            "year": "1942-04-02〜",
            "eventDate": "1942-04-09",
            "status": "英印軍・中国遠征軍の北方での抗戦継続",
            "detail": "プロームから英印軍が4月2日に撤退した後も、イラワジ・シッタン河谷などの北方で英印軍・中国遠征軍が抗戦を継続した。厳密な前線位置ではない。"
          }
        },
        {
          "id": "a46-bataan-surrender-1942-04-09",
          "geometry": {
            "type": "Point",
            "coordinates": [
              120.46,
              14.62
            ]
          },
          "properties": {
            "category": "bataan-surrender",
            "marker": "降",
            "label": "バターン",
            "labelPlacement": "left",
            "year": "1942-04-09",
            "eventDate": "1942-04-09",
            "status": "キング少将指揮下の主力部隊が降伏",
            "detail": "4月3日に日本軍が最終攻勢を開始し、4月9日にバターン主力が降伏した。フィリピンの米比軍すべての降伏ではない。"
          }
        },
        {
          "id": "a46-corregidor-resistance-1942-04-09",
          "geometry": {
            "type": "Point",
            "coordinates": [
              120.58,
              14.39
            ]
          },
          "properties": {
            "category": "resistance-ongoing",
            "marker": "戦",
            "label": "コレヒドール",
            "labelPlacement": "right",
            "year": "1942-04-09",
            "eventDate": "1942-04-09",
            "status": "ウェインライト司令部と守備隊が抗戦継続",
            "detail": "バターンで4月9日に米比軍主力が降伏した後も、マニラ湾口のコレヒドール島は持ちこたえた。近接するバターンとは別の状態。"
          }
        },
        {
          "id": "a46-colombo-japanese-raid-1942-04-09",
          "geometry": {
            "type": "Point",
            "coordinates": [
              79.85,
              6.93
            ]
          },
          "properties": {
            "category": "japanese-raid-target",
            "marker": "日",
            "label": "コロンボ",
            "labelPlacement": "left",
            "year": "1942-04-05",
            "eventDate": "1942-04-05",
            "status": "日本海軍空母航空隊の攻撃対象",
            "detail": "4月5日に日本海軍機動部隊がセイロン島西岸のコロンボを空襲した。日本軍が上陸・占領したことを表さない。"
          }
        },
        {
          "id": "a46-trincomalee-japanese-raid-1942-04-09",
          "geometry": {
            "type": "Point",
            "coordinates": [
              81.23,
              8.59
            ]
          },
          "properties": {
            "category": "japanese-raid-target",
            "marker": "日",
            "label": "トリンコマリー",
            "labelPlacement": "right",
            "year": "1942-04-09",
            "eventDate": "1942-04-09",
            "status": "日本海軍空母航空隊の攻撃対象",
            "detail": "4月9日に日本海軍機動部隊がセイロン島東岸のトリンコマリーを空襲した。日本の陸上占領地域や実際の航路を示さない。"
          }
        },
        {
          "id": "a46-east-timor-guerrilla-1942-04-09",
          "geometry": {
            "type": "Point",
            "coordinates": [
              125.6,
              -8.8
            ]
          },
          "properties": {
            "category": "resistance-ongoing",
            "marker": "戦",
            "label": "東ティモール（ゲリラ戦）",
            "labelPlacement": "right",
            "year": "1942-02-23〜",
            "eventDate": "1942-04-09",
            "status": "豪州独立中隊等がゲリラ抵抗継続",
            "detail": "西ティモールの守備隊降伏後も、東部山地では豪州独立中隊等が現地住民の支援を得て抵抗を続けた。点はゲリラ活動域の模式的代表位置。"
          }
        }
      ]
    }
  ],
  "layers": [
    {
      "id": "a46-outer-operations-status",
      "datasetId": "a46-outer-operations-status-1942-04-09",
      "categoryProperty": "category",
      "categories": [
        "occupation-administration",
        "occupation-established",
        "us-counterstrike-target",
        "japanese-raid-target",
        "resistance-ongoing",
        "bataan-surrender"
      ]
    }
  ],
  "legend": [
    {
      "value": "occupation-administration",
      "label": "占領後の軍政・管理開始",
      "marker": "政",
      "color": "#66587b"
    },
    {
      "value": "occupation-established",
      "label": "新規占領拠点",
      "marker": "占",
      "color": "#7a4545"
    },
    {
      "value": "us-counterstrike-target",
      "label": "米空母機による反撃対象",
      "marker": "米",
      "color": "#365b76"
    },
    {
      "value": "japanese-raid-target",
      "label": "日本空母機による空襲対象",
      "marker": "日",
      "color": "#995131"
    },
    {
      "value": "resistance-ongoing",
      "label": "4月9日時点で抵抗・戦闘継続",
      "marker": "戦",
      "color": "#7a6436"
    },
    {
      "value": "bataan-surrender",
      "label": "4月9日に主力降伏",
      "marker": "降",
      "color": "#525e67"
    }
  ],
  "auditState": {
    "dataAudit": "passed",
    "styleAudit": "passed",
    "visualAudit": "pending-human",
    "notes": [
      "A46 map necessity adopted: A45 (March 9) cannot show east-west divergence between US counterattack on Lae–Salamaua and Japanese carrier raids on Colombo/Trincomalee, alongside the Bataan/Corregidor split.",
      "Data Audit: all 11 identifiers unique, all Points have coordinates and required properties; historical roles grounded in JH126–JH129 sources. Approximate coordinates represent places, not routes/front lines/borders.",
      "Style Audit: nominal categorical colors AND Japanese character markers, single Point renderer; legend values match layer categories; no line, polygon, or area claims.",
      "Human Visual Audit mandatory and pending: new category/color/marker set compared with A45, increased geographic extent and close pairs (Bataan/Corregidor, Colombo/Trincomalee). Do not mark published until desktop/tablet/mobile/touch/zoom verified.",
      "No display-style, popup handler, legend renderer, or template code modified."
    ]
  }
}
