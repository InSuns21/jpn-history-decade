import type { HistoricalMapDefinition } from '../schema.ts'

export const guadalcanalLandingSavo1942Map: HistoricalMapDefinition = {
  "id": "guadalcanal-landing-airfield-savo-1942-08",
  "title": "1942年8月7〜9日：ガダルカナルの上陸・飛行場とサボ島",
  "historicalQuestion": "サボ島沖で日本海軍が夜戦に勝ちながら、米軍の輸送船と飛行場が残ったのはどの位置関係だったか。",
  "readingNote": "ガダルカナル島北岸・ツラギ・サボ島の地点代表位置。泊地・上陸浜は概略位置で、艦艇の航路・艦隊の所在地・占領境界を示さない。上陸浜と飛行場は近接するため左右のラベルで区別する。背景地図は現在のOpenStreetMapを使用。",
  "status": "published",
  "period": {
    "startYear": 1942,
    "endYear": 1942
  },
  "initialView": {
    "center": [
      160,
      -9.26
    ],
    "zoom": 8.5,
    "minZoom": 7,
    "maxZoom": 13
  },
  "datasets": [
    {
      "id": "a50-guadalcanal-locations-1942-08",
      "provenance": {
        "sourceId": "a50-guadalcanal-locations-1942-08",
        "title": "1942年8月7〜9日のガダルカナル上陸・輸送・飛行場・夜戦代表地点",
        "institution": "U.S. Naval History and Heritage Command / U.S. Marine Corps History Division",
        "url": "https://www.history.navy.mil/research/library/online-reading-room/title-list-alphabetically/b/battle-savo-island-strat-tact-analysis.html",
        "sourceType": "derived",
        "license": "NHHC/USMCの公刊戦史に基づく地名・日付から本サイトが地名の代表Pointを概算で作図。公刊地図の線や画像を複製していない。",
        "derivedFromSourceIds": [
          "nhhc-savo-analysis-jh143",
          "nhhc-solomons-savo-jh143",
          "usmc-first-offensive-jh143",
          "nhhc-shoestring-jh143"
        ],
        "temporalCoverage": {
          "from": "1942-08-07",
          "to": "1942-08-09",
          "basis": "range",
          "note": "7日上陸、8日飛行場確保、8〜9日夜の海戦、9日輸送船撤収を区別。"
        },
        "spatialCoverage": "ソロモン諸島ガダルカナル北岸〜サボ島・ツラギ諸島",
        "geometryConfidence": "approximate",
        "transformations": [
          "NHHC夜戦分析・USMC戦史の地名と地理上の位置関係を分類。",
          "ツラギとルンガ岬はA49と同じ代表座標を採用。レッド・ビーチはルンガ岬の東、泊地は北岸の沖として概略配置。",
          "夜戦はサボ島を地理参照点に用い、船舶航路や戦闘位置を精密線形として再現しない。",
          "上陸浜と飛行場のラベルは左右を逆に配置し、縮尺を変えて地点を確認できるようにする。"
        ],
        "notes": "A49 is a broad July South Pacific/Papua map; A50 shows Aug 7–9 local geography. Five approximate Points only."
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
          "id": "a50-savo",
          "geometry": {
            "type": "Point",
            "coordinates": [
              159.82,
              -9.135
            ]
          },
          "properties": {
            "category": "naval-action",
            "marker": "海",
            "label": "サボ島周辺",
            "labelPlacement": "left",
            "year": "1942-08",
            "eventDate": "1942-08-09",
            "status": "8日夜〜9日未明の日本海軍の夜間攻撃",
            "detail": "三川軍一の巡洋艦部隊が8日夜〜9日未明に米豪警戒艦艇を攻撃した。上陸輸送船はこの夜戦で残存した。"
          }
        },
        {
          "id": "a50-tulagi",
          "geometry": {
            "type": "Point",
            "coordinates": [
              160.15,
              -9.1
            ]
          },
          "properties": {
            "category": "island-landing",
            "marker": "島",
            "label": "ツラギ・ガブツ方面",
            "labelPlacement": "right",
            "year": "1942-08",
            "eventDate": "1942-08-07",
            "status": "7〜8日の米軍上陸と日本側抵抗",
            "detail": "米海兵隊は7日にツラギとガブツへ上陸し、タナンボゴも含む日本軍守備隊と戦闘した。"
          }
        },
        {
          "id": "a50-anchorage",
          "geometry": {
            "type": "Point",
            "coordinates": [
              160.01,
              -9.32
            ]
          },
          "properties": {
            "category": "transport",
            "marker": "泊",
            "label": "ルンガ泊地方面",
            "labelPlacement": "top",
            "year": "1942-08",
            "eventDate": "1942-08-09",
            "status": "輸送船の陸揚げと9日の撤収",
            "detail": "米軍輸送船はルンガ岬沖で上陸部隊と物資の揚陸を続けたが、9日には揚陸途中で撤収した。"
          }
        },
        {
          "id": "a50-airfield",
          "geometry": {
            "type": "Point",
            "coordinates": [
              160.05,
              -9.42
            ]
          },
          "properties": {
            "category": "airfield",
            "marker": "飛",
            "label": "ルンガ岬の飛行場",
            "labelPlacement": "left",
            "year": "1942-08",
            "eventDate": "1942-08-08",
            "status": "8日に米軍が建設中の飛行場を確保",
            "detail": "米海兵隊は8日、日本海軍の設営隊が建設していた飛行場を確保し、滑走路の整備を引き継いだ。"
          }
        },
        {
          "id": "a50-beach",
          "geometry": {
            "type": "Point",
            "coordinates": [
              160.08,
              -9.409
            ]
          },
          "properties": {
            "category": "landing-beach",
            "marker": "浜",
            "label": "レッド・ビーチ",
            "labelPlacement": "right",
            "year": "1942-08",
            "eventDate": "1942-08-07",
            "status": "7日の米海兵隊上陸",
            "detail": "米海兵隊は7日、ルンガ岬の東側にあるレッド・ビーチ付近へ上陸した。翌8日に飛行場を確保した。"
          }
        }
      ]
    }
  ],
  "layers": [
    {
      "id": "a50-locations",
      "datasetId": "a50-guadalcanal-locations-1942-08",
      "categoryProperty": "category",
      "categories": [
        "naval-action",
        "island-landing",
        "transport",
        "airfield",
        "landing-beach"
      ]
    }
  ],
  "legend": [
    {
      "value": "naval-action",
      "label": "8日夜〜9日未明の日本海軍の夜間攻撃",
      "marker": "海",
      "color": "#765877"
    },
    {
      "value": "island-landing",
      "label": "7〜8日の米軍上陸と日本側抵抗",
      "marker": "島",
      "color": "#935d44"
    },
    {
      "value": "transport",
      "label": "輸送船の陸揚げと9日の撤収",
      "marker": "泊",
      "color": "#476b80"
    },
    {
      "value": "airfield",
      "label": "8日に米軍が建設中の飛行場を確保",
      "marker": "飛",
      "color": "#577051"
    },
    {
      "value": "landing-beach",
      "label": "7日の米海兵隊上陸",
      "marker": "浜",
      "color": "#a47d45"
    }
  ],
  "auditState": {
    "dataAudit": "passed",
    "styleAudit": "passed",
    "visualAudit": "not-required-reused-pattern",
    "notes": [
      "Necessity: adopted. A49 covers July broad theater, A50 the local August beach/airfield/anchorage/battle contrast.",
      "Data: five unique lon/lat WGS84 Point features; geographic references and event dates grounded in NHHC/USMC. Approximate sea and coast points are not precision vessel or beach boundaries.",
      "Style: five feature categories match the five schema-driven legend entries, distinct glyphs and color encodings, outward label placement for nearby Beach Red and Lunga airfield, zoom8.5 initial view.",
      "Visual: point-only reused-pattern exemption from previously accepted A48 (midway-aleutians-two-front-1942-06-07); unchanged ThematicMap DOM marker, generated legend, popup/touch UI, layout. No LineString, polygon or new renderer. Data/Style audited; no new human device-test claimed."
    ]
  }
}
