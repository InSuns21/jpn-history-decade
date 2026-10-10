import type { HistoricalMapDefinition } from '../schema.ts'

export const southPacificKokodaTransport1942Map: HistoricalMapDefinition = {
  "id": "south-pacific-kokoda-transport-1942-07-21",
  "title": "1942年7月：南太平洋の反攻目標とパプア山岳路",
  "historicalQuestion": "米軍が目標としたツラギ・ガダルカナルと、日本軍のゴナ上陸・ココダ方面進出のあいだで、港・飛行場・山岳路が補給をどう制約したか。",
  "readingNote": "1942年7月21日を基準に、米軍の攻略予定地、日本軍の既存基地と21日の上陸地、豪州・パプア側の防備地点を示す。ニューギニア山地の破線は、ココダから南側山麓へ通じる地形的な連絡方向を後年の戦時地図も参照して模式化したもので、7月21日までの日本軍の進出線や正確な道筋ではない。点は地名の代表位置で、海上の船団航路や航空機の航続範囲は示さない。「オワーズ・コーナー」は後に付いた地名を位置参照に用いた。背景の道路・海岸線・国境は現代のOpenStreetMapに基づく。",
  "status": "draft",
  "period": {
    "startYear": 1942,
    "endYear": 1942
  },
  "initialView": {
    "center": [
      156.7,
      -11.2
    ],
    "zoom": 3,
    "minZoom": 2,
    "maxZoom": 9
  },
  "datasets": [
    {
      "id": "a49-south-pacific-points-1942-07-21",
      "provenance": {
        "sourceId": "a49-south-pacific-points-1942-07-21",
        "title": "1942年7月21日の南太平洋作戦目標・基地・パプア北岸上陸地と山麓の代表Point",
        "institution": "U.S. Marine Corps Historical Section / Australian War Memorial / Australian Government Department of Veterans' Affairs",
        "url": "https://www.awm.gov.au/collection/E84663",
        "sourceType": "derived",
        "license": "Site-authored approximate geographic reference points, not copied map geometry. Historical roles/date sourced from official histories; place coordinates are approximate locality representatives.",
        "derivedFromSourceIds": [
          "nhhc-guadalcanal-jh141",
          "nhhc-savo-jh141",
          "awm-papua-timeline-jh141",
          "awm-kokoda-track-jh141",
          "dva-kokoda-jh141"
        ],
        "temporalCoverage": {
          "from": "1942-07-12",
          "to": "1942-07-21",
          "basis": "range",
          "note": "表示は21日時点。5月のツラギ占領や7月の作戦準備が継続する状態と、21日のゴナ先遣隊上陸を分ける。エファテ・エスピリトゥサントは基地網の地理参照で部隊位置を示さない。"
        },
        "spatialCoverage": "ニューブリテン島・ソロモン諸島南部・ニューヘブリディーズ諸島・パプア北岸とポートモレスビー",
        "geometryConfidence": "approximate",
        "transformations": [
          "JH139〜JH141で確認した7月の指揮・上陸準備・北岸上陸を、地点の当日時点の役割で再分類した。",
          "A47と共有するラバウル・ツラギ・ポートモレスビーの位置を同じ地理代表座標として再利用した。",
          "ゴナはバサブア上陸位置そのものの精密座標でなく周辺地域の代表Pointとする。",
          "南側山麓の位置参照に後年の地名「オワーズ・コーナー」を用い、1942年7月の施設・地名として扱わない。",
          "空母位置・実際の艦艇航跡・固定された航空行動半径のgeometryは描かない。"
        ],
        "notes": "A49 differs from A47 (Coral Sea May) and A48 (Midway/Aleutians June). The two Solomons targets are intentionally distinct close points; labels use top/bottom placements. Representative islands are not aircraft or fleet positions."
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
          "id": "a49-rabaul",
          "geometry": {
            "type": "Point",
            "coordinates": [
              152.17,
              -4.2
            ]
          },
          "properties": {
            "category": "japanese-hub",
            "marker": "基",
            "label": "ラバウル",
            "labelPlacement": "right",
            "year": "1942-07",
            "eventDate": "1942-07-21",
            "status": "日本側の船舶・航空隊の集積拠点",
            "detail": "横山先遣隊の船団はラバウル方面からパプア北岸へ向かった。南東方面の後方補給を支える拠点。"
          }
        },
        {
          "id": "a49-tulagi",
          "geometry": {
            "type": "Point",
            "coordinates": [
              160.15,
              -9.1
            ]
          },
          "properties": {
            "category": "american-objective",
            "marker": "目",
            "label": "ツラギ",
            "labelPlacement": "top",
            "year": "1942-07",
            "eventDate": "1942-07-21",
            "status": "日本軍拠点・米軍の攻略予定地",
            "detail": "日本軍が5月に占領し水上機拠点として利用を進めた島。米軍は8月のウォッチタワー作戦で攻略を準備。"
          }
        },
        {
          "id": "a49-lunga",
          "geometry": {
            "type": "Point",
            "coordinates": [
              160.05,
              -9.42
            ]
          },
          "properties": {
            "category": "american-objective",
            "marker": "目",
            "label": "ルンガ岬（ガダルカナル）",
            "labelPlacement": "bottom",
            "year": "1942-07",
            "eventDate": "1942-07-21",
            "status": "日本軍が飛行場を建設中・米軍の攻略予定地",
            "detail": "日本海軍の設営部隊が飛行場を建設中。米海兵隊はこの拠点を奪取する上陸を計画していた。"
          }
        },
        {
          "id": "a49-espiritu",
          "geometry": {
            "type": "Point",
            "coordinates": [
              166.92,
              -15.33
            ]
          },
          "properties": {
            "category": "allied-rear-reference",
            "marker": "後",
            "label": "エスピリトゥサント島",
            "labelPlacement": "left",
            "year": "1942-07",
            "eventDate": "1942-07-21",
            "status": "南太平洋の航空・輸送支援を考える参照島",
            "detail": "米軍の南太平洋における基地整備・航空援護の地理的条件を示す参照島。"
          }
        },
        {
          "id": "a49-efate",
          "geometry": {
            "type": "Point",
            "coordinates": [
              168.39,
              -17.73
            ]
          },
          "properties": {
            "category": "allied-rear-reference",
            "marker": "後",
            "label": "エファテ島",
            "labelPlacement": "right",
            "year": "1942-07",
            "eventDate": "1942-07-21",
            "status": "ニューヘブリディーズ諸島の後方参照地点",
            "detail": "米軍の南太平洋の基地・輸送上の位置関係を読むための参照島。"
          }
        },
        {
          "id": "a49-gona",
          "geometry": {
            "type": "Point",
            "coordinates": [
              148.29,
              -8.62
            ]
          },
          "properties": {
            "category": "japanese-landing",
            "marker": "上",
            "label": "ゴナ・バサブア付近",
            "labelPlacement": "right",
            "year": "1942-07",
            "eventDate": "1942-07-21",
            "status": "日本軍の7月21日先遣上陸地域",
            "detail": "横山先遣隊が21日夕方にゴナ近くのバサブア方面で上陸を開始。ここから北岸での荷揚げと内陸への前進が始まった。"
          }
        },
        {
          "id": "a49-kokoda",
          "geometry": {
            "type": "Point",
            "coordinates": [
              147.74,
              -8.88
            ]
          },
          "properties": {
            "category": "allied-guard",
            "marker": "守",
            "label": "ココダ",
            "labelPlacement": "left",
            "year": "1942-07",
            "eventDate": "1942-07-21",
            "status": "豪州・パプア側の前進警戒拠点",
            "detail": "豪州第39大隊B中隊とパプア歩兵大隊が周辺の道と飛行場を警戒していた。"
          }
        },
        {
          "id": "a49-owers",
          "geometry": {
            "type": "Point",
            "coordinates": [
              147.49,
              -9.36
            ]
          },
          "properties": {
            "category": "southern-route-reference",
            "marker": "山",
            "label": "南側山麓（後のオワーズ・コーナー）",
            "labelPlacement": "bottom",
            "year": "1942-07",
            "eventDate": "1942-07-21",
            "status": "山岳路の南側を読む地理参照地点",
            "detail": "ポートモレスビー側でココダ道が山地を下りる方面。オワーズ・コーナーという呼び名は後に定着した。"
          }
        },
        {
          "id": "a49-moresby",
          "geometry": {
            "type": "Point",
            "coordinates": [
              147.15,
              -9.47
            ]
          },
          "properties": {
            "category": "allied-port",
            "marker": "港",
            "label": "ポートモレスビー",
            "labelPlacement": "left",
            "year": "1942-07",
            "eventDate": "1942-07-21",
            "status": "豪州・米側の港・飛行場、日本軍の目標",
            "detail": "ニューギニア南岸の港と航空基地。日本軍は5月に海上からの攻略を断念し、7月には北岸からの陸路進攻を検討していた。"
          }
        }
      ]
    },
    {
      "id": "a49-kokoda-ridge-corridor-schematic",
      "provenance": {
        "sourceId": "a49-kokoda-ridge-corridor-schematic",
        "title": "ココダから山地南側へ続く山岳徒歩経路の模式方向",
        "institution": "Australian War Memorial / Australian Government Department of Veterans' Affairs",
        "url": "https://www.awm.gov.au/collection/C2895028",
        "sourceType": "derived",
        "license": "Site-authored schematic LineString using named localities as anchors; no historical military map geometry or contemporary track GPS line is traced or reused.",
        "derivedFromSourceIds": [
          "awm-kokoda-track-jh141",
          "dva-kokoda-jh141"
        ],
        "temporalCoverage": {
          "from": "1942-07-12",
          "to": "1942-07-21",
          "basis": "range",
          "note": "地理的制約を示すための回廊。参照したAWM戦時地図は1942年の後続時期に整理されたもので、21日の日本軍の行軍成果や当時持っていた地図精度を再現しない。"
        },
        "spatialCoverage": "ココダ〜エフォギ付近〜山地南側（後のオワーズ・コーナー周辺）",
        "geometryConfidence": "schematic",
        "transformations": [
          "AWM『The Kokoda Trail』（1942年の地図、AWM2022.10.91）とAWM戦役解説にあるココダ〜山地南側の小道、険しい山脈、運搬時間の位置関係を参照。",
          "ココダ・エフォギ・南側山麓付近の代表緯経度を配置し、その間に作図上の中間点を置いて接続関係を示した。中間点は史料に記載された部隊到達点や精密実測waypointではない。",
          "7月21日の時点で日本軍が歩いた範囲を塗り分けず、山道が存在する方向だけを破線で表す。線長・勾配・移動距離は測定に用いない。"
        ],
        "notes": "The AWM wartime maps were refined after July 1942, so this is a retrospective geographical schematic, not a representation of information available to Yokoyama's advance party on 21 July. Path does not traverse sea; waypoint-derived and land-only. Requires Human Visual Audit of shape/coastline/zoom."
      },
      "allowedGeometryTypes": [
        "LineString"
      ],
      "requiredProperties": [
        "category",
        "label",
        "detail"
      ],
      "features": [
        {
          "id": "a49-cross-range",
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                147.74,
                -8.88
              ],
              [
                147.7,
                -9.01
              ],
              [
                147.66,
                -9.16
              ],
              [
                147.56,
                -9.28
              ],
              [
                147.49,
                -9.36
              ]
            ]
          },
          "properties": {
            "category": "mountain-foot-corridor",
            "label": "ココダ道・山地越えの方向（模式）",
            "detail": "ココダと南側山麓をつなぐ山岳徒歩路の概略方向。険しい斜面や河川を通る補給の負担を示す。"
          }
        }
      ]
    }
  ],
  "layers": [
    {
      "id": "a49-schematic-track",
      "datasetId": "a49-kokoda-ridge-corridor-schematic",
      "categoryProperty": "category",
      "categories": [
        "mountain-foot-corridor"
      ]
    },
    {
      "id": "a49-points",
      "datasetId": "a49-south-pacific-points-1942-07-21",
      "categoryProperty": "category",
      "categories": [
        "japanese-hub",
        "american-objective",
        "allied-rear-reference",
        "japanese-landing",
        "allied-guard",
        "southern-route-reference",
        "allied-port"
      ]
    }
  ],
  "legend": [
    {
      "value": "mountain-foot-corridor",
      "label": "山地徒歩経路の方向（模式）",
      "marker": "道",
      "color": "#866047",
      "kind": "line",
      "lineStyle": "dashed"
    },
    {
      "value": "japanese-hub",
      "label": "日本側の南東方面補給拠点",
      "marker": "基",
      "color": "#765b77"
    },
    {
      "value": "american-objective",
      "label": "日本軍拠点・米軍の攻略予定地",
      "marker": "目",
      "color": "#8b4b43"
    },
    {
      "value": "allied-rear-reference",
      "label": "米軍後方の地理参照島",
      "marker": "後",
      "color": "#516f82"
    },
    {
      "value": "japanese-landing",
      "label": "7月21日の日本軍先遣上陸地",
      "marker": "上",
      "color": "#a06a35"
    },
    {
      "value": "allied-guard",
      "label": "豪州・パプア側の警戒拠点",
      "marker": "守",
      "color": "#526e5a"
    },
    {
      "value": "southern-route-reference",
      "label": "山岳路の南側参照地点",
      "marker": "山",
      "color": "#73664e"
    },
    {
      "value": "allied-port",
      "label": "豪州・米側の港・飛行場",
      "marker": "港",
      "color": "#325f7a"
    }
  ],
  "auditState": {
    "dataAudit": "passed",
    "styleAudit": "passed",
    "visualAudit": "pending-human",
    "notes": [
      "A49 map necessity: adopted. A47 focuses May Coral Sea sea-approach and A48 focuses June Midway/Aleutians. Neither can show simultaneously the July US Solomons landing objectives and Gona/Kokoda cross-mountain transport constraint.",
      "Data Audit: 9 unique named/locality reference Points and 1 schematic LineString. All coordinates are longitude/latitude WGS84 and within [147.15,-17.73] to [168.39,-4.2]. Point names, control/plan roles and dates follow official histories; AWM wartime trail sheet supplies the land route association, not a reconstructed 21 July movement.",
      "The October-1942 refinement of route knowledge is distinguished from the information available on 21 July. Owers Corner is a retrospective location name only. Cartographic interpolation waypoints are explicitly not documentary stopping points.",
      "Style Audit: line drawn as dashed, all seven point categories plus one line category correspond to features and legend. Markers for Gona, Kokoda, the American targets and rear reference islands distinguish actor and operation stage.",
      "A49 includes LineString, so point-only reused-pattern exemption is inapplicable. HVA-015 pending: inspect Tulagi/Lunga proximity, Papuan points/route legibility at initial and detail zoom, sea vs land alignment of line, popups and tap/pan/pinch on desktop/tablet/mobile. Do not mark published before human review."
    ]
  }
}
