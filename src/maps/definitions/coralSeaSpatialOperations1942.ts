import type { HistoricalMapDefinition } from '../schema.ts'

export const coralSeaSpatialOperations1942Map: HistoricalMapDefinition = {
  "id": "coral-sea-spatial-operations-1942-05-08",
  "title": "1942年5月上旬：ラバウル・ツラギ・珊瑚海とポートモレスビー",
  "historicalQuestion": "日本軍の出撃拠点、上陸目標、珊瑚海への入口と、米豪艦隊の接近方面はどの位置関係にあったのか。",
  "readingNote": "1942年5月3〜8日の作戦を代表地点で読み解く模式地図。「基」は日本側の前進航空・出撃拠点、「占」は5月3日に占領したツラギ、「目」は上陸を目指したが5月8日までに到達していないポートモレスビー、「水」は上陸船団の接近経路を理解するためのジョマード水道の代表位置を示す。「米」は5月1日に米空母部隊が合流したエスピリトゥサント島付近の地理的参照位置で、艦隊の正確な所在地ではない。「豪」はオーストラリア北東岸の地理的参照地点。点の間は実航路・進攻軸・航空攻撃線を意味しない。珊瑚海の空母部隊や5月7日の船団反転地点は固定座標を与えず、海上の位置と移動には不確実性がある。地図は基地の相対位置を示すもので、制海権・支配区域・戦闘範囲や5月11日以後の作戦命令は描いていない。背景国境は現代OpenStreetMapのもので1942年の境界ではない。",
  "status": "published",
  "period": {
    "startYear": 1942,
    "endYear": 1942
  },
  "initialView": {
    "center": [
      156.4,
      -11.9
    ],
    "zoom": 3,
    "minZoom": 2,
    "maxZoom": 7
  },
  "datasets": [
    {
      "id": "a47-coral-sea-point-geography-1942-05-03-08",
      "provenance": {
        "sourceId": "a47-coral-sea-point-geography-1942-05-03-08",
        "title": "珊瑚海海戦における出撃拠点・上陸目標・通過海域・米豪側接近方面の代表Point",
        "institution": "Australian War Memorial / U.S. Naval History and Heritage Command",
        "url": "https://www.awm.gov.au/articles/encyclopedia/coral_sea/doc",
        "sourceType": "derived",
        "license": "各地点と時系列の歴史的役割は公的戦史の記述に基づく。経緯度は公開地名に対して本サイトが作成した概略代表座標（外部geometryを複製していない）。地図の海域・艦隊・航跡・制海権のgeometryは取り込まない。",
        "derivedFromSourceIds": [
          "awm-coral-sea-jh133",
          "nhhc-coral-overview-jh133",
          "nhhc-coral-prelim-jh133",
          "nhhc-coral-narrative-jh133",
          "nhhc-coral-intelligence-jh133"
        ],
        "temporalCoverage": {
          "from": "1942-05-03",
          "to": "1942-05-08",
          "basis": "range",
          "note": "5月3〜8日の異なる段階に属する地点を、対象期間と対応する属性・popupで区別する。エスピリトゥサント島は5月1日の合流海域を説明する地理的参照位置。7日船団反転と8日の空母戦結果は地図内で実座標として再現しない。"
        },
        "spatialCoverage": "ニューブリテン島・ニューギニア島東部・ルイジアード諸島・ソロモン諸島・珊瑚海・豪州北東岸・ニューヘブリディーズ諸島",
        "geometryConfidence": "approximate",
        "transformations": [
          "AWM Battle of the Coral Sea 4–8 May 1942 とNHHC戦史から、出撃拠点、占領地点、未達成の上陸目標、ジョマード水道を抽出した。",
          "都市・島・海峡は名称を特定できる地点の概略代表Pointとし、領域・線・艦隊所在地を示さない。",
          "エスピリトゥサント島のPointはAWMが記す5月1日の空母部隊の島の沖合での合流を説明する参照地点であり、合流した海上座標としては使わない。",
          "日本攻略船団は5月7日に反転したが、その転向点と実際の航路を再現せず、通過海域の性格をジョマード水道のPointとpopupで説明する。",
          "1942年5月3日のツラギ占領と、未占領のポートモレスビーを別の凡例分類で表示する。",
          "沿岸の豪州参考Point（タウンズビル）も当該地域の相対位置を示すだけで、米空母の出港地や海戦地点を断定しない。"
        ],
        "notes": "A47 is a Point-only site-authored approximate spatial overview. Historical relationships and dates are sourced from JH133 official citations and AWM's detailed account; positions are named localities, not exact ship positions. The representation intentionally omits route LineStrings and battlefield Polygon. Reuses A46 outer-operations-residual-fronts-1942-04-09 ThematicMap marker text labels, schema-driven legend, mouse/touch popup and layout without modifying the renderer."
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
          "id": "a47-rabaul",
          "geometry": {
            "type": "Point",
            "coordinates": [
              152.17,
              -4.2
            ]
          },
          "properties": {
            "category": "japanese-base",
            "marker": "基",
            "label": "ラバウル",
            "labelPlacement": "left",
            "year": "1942-05-04",
            "eventDate": "1942-05-04",
            "status": "日本側の出撃・航空作戦拠点",
            "detail": "5月4日、ポートモレスビー攻略船団がラバウルから出航。日本軍の基地航空部隊もこの方面を支援した。船団の航跡を示す点ではない。"
          }
        },
        {
          "id": "a47-lae",
          "geometry": {
            "type": "Point",
            "coordinates": [
              147,
              -6.73
            ]
          },
          "properties": {
            "category": "japanese-base",
            "marker": "基",
            "label": "ラエ",
            "labelPlacement": "left",
            "year": "1942-05-03〜08",
            "eventDate": "1942-05-08",
            "status": "ニューギニア北岸の日本側前進拠点",
            "detail": "日本側はラエ・サラモアなどにも前進基地を置いていた。ポートモレスビー南岸への直接の上陸達成を示す点ではない。"
          }
        },
        {
          "id": "a47-tulagi",
          "geometry": {
            "type": "Point",
            "coordinates": [
              160.15,
              -9.1
            ]
          },
          "properties": {
            "category": "japanese-occupation",
            "marker": "占",
            "label": "ツラギ",
            "labelPlacement": "right",
            "year": "1942-05-03",
            "eventDate": "1942-05-03",
            "status": "日本軍が5月3日に占領",
            "detail": "飛行艇・水上機による偵察拠点として使用を目指したが、4日にはヨークタウン航空隊の反撃を受けた。"
          }
        },
        {
          "id": "a47-port-moresby",
          "geometry": {
            "type": "Point",
            "coordinates": [
              147.15,
              -9.47
            ]
          },
          "properties": {
            "category": "invasion-objective",
            "marker": "目",
            "label": "ポートモレスビー",
            "labelPlacement": "left",
            "year": "1942-05-03〜08",
            "eventDate": "1942-05-08",
            "status": "日本側の海上上陸目標（未占領）",
            "detail": "ニューギニア南岸の攻略目標。5月7日に上陸船団が反転し、8日までに日本軍による海上上陸は実現していない。"
          }
        },
        {
          "id": "a47-jomard-entrance",
          "geometry": {
            "type": "Point",
            "coordinates": [
              152.06,
              -11.3
            ]
          },
          "properties": {
            "category": "maritime-entry",
            "marker": "水",
            "label": "ジョマード水道付近",
            "labelPlacement": "right",
            "year": "1942-05-06〜07",
            "eventDate": "1942-05-07",
            "status": "ルイジアード諸島付近の珊瑚海への接近口",
            "detail": "AWM戦史は日本攻略船団とその護衛部隊がジョマード水道方面へ進み、連合軍水上部隊がその通過を阻もうとしたと記す。海峡の概略参照Pointで実際の船団の座標ではない。"
          }
        },
        {
          "id": "a47-espiritu-santo",
          "geometry": {
            "type": "Point",
            "coordinates": [
              166.92,
              -15.33
            ]
          },
          "properties": {
            "category": "allied-rendezvous-reference",
            "marker": "米",
            "label": "エスピリトゥサント島",
            "labelPlacement": "left",
            "year": "1942-05-01",
            "eventDate": "1942-05-01",
            "status": "米空母部隊の合流海域を示す島の参照位置",
            "detail": "AWM戦史によれば5月1日、ヨークタウン・レキシントンの部隊は同島沖で合流した。このPointは島を示し、艦隊がこの座標に停泊したことを意味しない。"
          }
        },
        {
          "id": "a47-townsville",
          "geometry": {
            "type": "Point",
            "coordinates": [
              146.82,
              -19.26
            ]
          },
          "properties": {
            "category": "australian-coast-reference",
            "marker": "豪",
            "label": "豪州北東岸（タウンズビル）",
            "labelPlacement": "right",
            "year": "1942-05-03〜08",
            "eventDate": "1942-05-08",
            "status": "豪州北東岸の位置関係を示す地理的参照",
            "detail": "ポートモレスビー攻略目標と豪州北東岸の近さを読むための代表都市。豪州全体の作戦基地や連合軍艦隊の出港点を示すものではない。"
          }
        }
      ]
    }
  ],
  "layers": [
    {
      "id": "a47-coral-sea-point-relations",
      "datasetId": "a47-coral-sea-point-geography-1942-05-03-08",
      "categoryProperty": "category",
      "categories": [
        "japanese-base",
        "japanese-occupation",
        "invasion-objective",
        "maritime-entry",
        "allied-rendezvous-reference",
        "australian-coast-reference"
      ]
    }
  ],
  "legend": [
    {
      "value": "japanese-base",
      "label": "日本側の航空・出撃拠点",
      "marker": "基",
      "color": "#66587b"
    },
    {
      "value": "japanese-occupation",
      "label": "5月3日に日本側が占領",
      "marker": "占",
      "color": "#7a4545"
    },
    {
      "value": "invasion-objective",
      "label": "未占領の上陸目標",
      "marker": "目",
      "color": "#995131"
    },
    {
      "value": "maritime-entry",
      "label": "攻略船団の接近方向を読む海峡",
      "marker": "水",
      "color": "#796b3b"
    },
    {
      "value": "allied-rendezvous-reference",
      "label": "米空母合流海域の参照島",
      "marker": "米",
      "color": "#365b76"
    },
    {
      "value": "australian-coast-reference",
      "label": "豪州北東岸の参照都市",
      "marker": "豪",
      "color": "#4d6472"
    }
  ],
  "auditState": {
    "dataAudit": "passed",
    "styleAudit": "passed",
    "visualAudit": "not-required-reused-pattern",
    "notes": [
      "A47 map necessity: adopted. A46's western/central Pacific status survey does not explain the spatial relationship of Rabaul, Tulagi, Port Moresby, the Louisiade approaches and the Allied approach from Espiritu Santo.",
      "Data Audit: 7 distinct Point IDs; all coordinates in longitude/latitude order and bounded by [146.82, -19.26] to [166.92, -4.20]. AWM and NHHC support named locations and their roles; the Jomard point is an approximate geographic reference, not the ship's passage or turning coordinates.",
      "Temporal: May 3 Tulagi occupation, May 4 invasion-force sortie, May 7 invasion-force reversal, May 8 carrier engagements are separate facts. May 1 Allied rendezvous is explicitly a pre-period geographical reference, not a May 3–8 live-position claim.",
      "Style Audit: six nominal legend categories match the sole Point layer; Japanese character markers and different colors distinguish base/occupation/target/passage/reference points; no line or area claim.",
      "Human Visual Audit exemption: reuse A46 outer-operations-residual-fronts-1942-04-09 (A45 inherited): same ThematicMap Point-only text markers, labels, legend generation schema, popup mouse/touch interaction and responsive map frame. The only additions are category values, representative coordinates and descriptions. No renderer, style logic, legend generator or layout changes. Potentially close Rabaul/Lae and Port Moresby/Jomard markers use opposite label placements; zoom/detail popup available.",
      "No carrier track, sea-control polygon or fleet engagement coordinate is reconstructed. These cannot be accurately inferred from the official area-level narrative."
    ]
  }
}
