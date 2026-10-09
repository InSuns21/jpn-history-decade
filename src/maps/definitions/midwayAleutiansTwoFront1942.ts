import type { HistoricalMapDefinition } from '../schema.ts'

export const midwayAleutiansTwoFront1942Map: HistoricalMapDefinition = {
  "id": "midway-aleutians-two-front-1942-06-07",
  "title": "1942年6月3〜7日：ミッドウェーとアリューシャン二方面の位置関係",
  "historicalQuestion": "日本本土・真珠湾・ミッドウェーと、北方のダッチハーバー・キスカ・アッツは、どのような位置関係にあり、二方面で何が違う結果となったか。",
  "readingNote": "1942年6月3〜7日の二方面作戦について、日本本土・米艦隊基地・攻略目標・空襲先・占領地の位置を比較する。ミッドウェーは米軍が保持し、キスカ・アッツは日本軍が占領した。点は島や港の代表位置を示す。背景の国境線は現代のOpenStreetMapによる。",
  "status": "published",
  "period": {
    "startYear": 1942,
    "endYear": 1942
  },
  "initialView": {
    "center": [
      177,
      39
    ],
    "zoom": 2.05,
    "minZoom": 1.4,
    "maxZoom": 7
  },
  "datasets": [
    {
      "id": "a48-midway-aleutians-points-1942-06-03-07",
      "provenance": {
        "sourceId": "a48-midway-aleutians-points-1942-06-03-07",
        "title": "ミッドウェー・アリューシャン両作戦の目標・基地・占領地点（地名代表Point）",
        "institution": "U.S. Naval History and Heritage Command / National Park Service",
        "url": "https://www.history.navy.mil/browse-by-topic/wars-conflicts-and-operations/world-war-ii/1943/aleutians.html",
        "sourceType": "derived",
        "license": "地点の歴史的役割・期間はNHHCおよびNPSの公刊記事に依拠。座標は一般に特定できる地理的地点から本サイトで作成した概略代表Pointであり、外部地図geometryを複製していない。",
        "derivedFromSourceIds": [
          "nhhc-midway-overview-jh137",
          "nhhc-midway-combat-narrative-jh137",
          "nhhc-aleutians-jh137",
          "nps-dutch-harbor-jh137",
          "nps-attu-jh137"
        ],
        "temporalCoverage": {
          "from": "1942-06-03",
          "to": "1942-06-07",
          "basis": "range",
          "note": "ミッドウェーは6月4日の空襲と攻略不達、ダッチハーバーは6月3〜4日の空襲、キスカは6月6日・アッツは7日の上陸を各Point属性で区別する。横須賀と真珠湾は作戦の位置関係を読む参照港であり当日に新しい占領や空襲があったことを意味しない。"
        },
        "spatialCoverage": "日本本土〜ハワイ諸島北西部〜アリューシャン列島西部・東部（180度子午線を横断）",
        "geometryConfidence": "approximate",
        "transformations": [
          "NHHC／NPSの作戦経過から、日本本土参照点・米艦隊基地・中部太平洋の攻略目標・北方空襲対象・北方占領地点を抽出し分類。",
          "横須賀は日本本土の位置関係を示す代表海軍港で、第一機動部隊・AL部隊の出航港や司令部の実位置を主張しない。",
          "地理的代表Pointを緯度・経度順のWGS84座標に記載し、動く艦隊・実航路・中間会合点の位置、航続距離を再構成しない。",
          "真珠湾・ミッドウェーは西経、キスカ・アッツは東経、ダッチハーバーは西経で配置する。日付変更線をまたぐため、180度近傍を中心とする初期表示を採用。",
          "キスカとアッツの接近するラベルはそれぞれ反対側へ配置し、詳細zoomとpopupで区別する。"
        ],
        "notes": "A48 site-authored Point-only geographic comparison; named place references are not fleet positions. Reuses A47 coral-sea-spatial-operations-1942-05-08 ThematicMap DOM point marker labels, schema legend, popup click/touch, responsive frame. No renderer/legend logic/interaction change. Uses world-wrapped longitudes near ±180 and opposite label placement at Attu/Kiska."
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
          "id": "a48-yokosuka",
          "geometry": {
            "type": "Point",
            "coordinates": [
              139.67,
              35.28
            ]
          },
          "properties": {
            "category": "japan-mainland-reference",
            "marker": "本",
            "label": "横須賀",
            "labelPlacement": "left",
            "year": "1942",
            "eventDate": "1942-06-03",
            "status": "日本本土の参照海軍港",
            "detail": "東京湾口の主要海軍港。日本本土と中部・北太平洋の作戦目標との位置関係を示す。"
          }
        },
        {
          "id": "a48-pearl-harbor",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -157.95,
              21.35
            ]
          },
          "properties": {
            "category": "us-fleet-base",
            "marker": "米",
            "label": "真珠湾",
            "labelPlacement": "right",
            "year": "1942",
            "eventDate": "1942-06-03",
            "status": "米太平洋艦隊の主要基地",
            "detail": "米太平洋艦隊の主要基地。5月末、米空母エンタープライズ・ホーネット・ヨークタウンがここから出撃し、ミッドウェー方面へ向かった。"
          }
        },
        {
          "id": "a48-midway",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -177.37,
              28.21
            ]
          },
          "properties": {
            "category": "midway-us-held-target",
            "marker": "目",
            "label": "ミッドウェー",
            "labelPlacement": "right",
            "year": "1942",
            "eventDate": "1942-06-04",
            "status": "日本側の攻略目標・米側が保持",
            "detail": "6月4日、日本軍の空母航空隊が島の飛行場や施設を空襲した。米軍は基地を保持し、日本軍は攻略を中止した。"
          }
        },
        {
          "id": "a48-dutch-harbor",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -166.53,
              53.88
            ]
          },
          "properties": {
            "category": "northern-raid-target",
            "marker": "空",
            "label": "ダッチハーバー",
            "labelPlacement": "right",
            "year": "1942",
            "eventDate": "1942-06-03",
            "status": "6月3〜4日の日本側空襲対象",
            "detail": "アリューシャン列島東部、ウナラスカ島の港湾・軍事基地。6月3〜4日、日本海軍の艦載機が空襲し、施設や船舶などに被害が出た。"
          }
        },
        {
          "id": "a48-kiska",
          "geometry": {
            "type": "Point",
            "coordinates": [
              177.54,
              51.96
            ]
          },
          "properties": {
            "category": "japanese-occupation",
            "marker": "占",
            "label": "キスカ",
            "labelPlacement": "bottom",
            "year": "1942",
            "eventDate": "1942-06-06",
            "status": "日本側が6月6日に上陸",
            "detail": "6月6日、日本軍の海軍陸戦隊が上陸し、米側の気象観測施設を押さえた。西部アリューシャンに日本軍の駐屯拠点が生まれた。"
          }
        },
        {
          "id": "a48-attu",
          "geometry": {
            "type": "Point",
            "coordinates": [
              172.94,
              52.84
            ]
          },
          "properties": {
            "category": "japanese-occupation",
            "marker": "占",
            "label": "アッツ",
            "labelPlacement": "top",
            "year": "1942",
            "eventDate": "1942-06-07",
            "status": "日本側が6月7日に上陸",
            "detail": "6月7日、日本軍が上陸した。島には先住民ウナンガンの住民が暮らしており、日本軍の占領下に置かれた。"
          }
        }
      ]
    }
  ],
  "layers": [
    {
      "id": "a48-point-spatial-status",
      "datasetId": "a48-midway-aleutians-points-1942-06-03-07",
      "categoryProperty": "category",
      "categories": [
        "japan-mainland-reference",
        "us-fleet-base",
        "midway-us-held-target",
        "northern-raid-target",
        "japanese-occupation"
      ]
    }
  ],
  "legend": [
    {
      "value": "japan-mainland-reference",
      "label": "日本本土の参照海軍港",
      "marker": "本",
      "color": "#66587b"
    },
    {
      "value": "us-fleet-base",
      "label": "米太平洋艦隊の基地",
      "marker": "米",
      "color": "#365b76"
    },
    {
      "value": "midway-us-held-target",
      "label": "攻略未達・米側が保持した島",
      "marker": "目",
      "color": "#995131"
    },
    {
      "value": "northern-raid-target",
      "label": "日本側の北方空襲対象",
      "marker": "空",
      "color": "#796b3b"
    },
    {
      "value": "japanese-occupation",
      "label": "6月6〜7日に日本側が上陸・占領",
      "marker": "占",
      "color": "#7a4545"
    }
  ],
  "auditState": {
    "dataAudit": "passed",
    "styleAudit": "passed",
    "visualAudit": "passed",
    "notes": [
      "A48 map necessity: adopted. A47's Coral Sea geography and JH137 prose cannot show the wide spatial relationship between Midway near Hawaii and the Aleutian targets, including the dateline and dispersed supply responsibilities.",
      "Data Audit: six unique site-authored Point features, all WGS84 coordinates within bounds. Named sites and event dates supported by NHHC/NPS citations in JH137; no carrier location, voyage track, attack radius, exact landing beach or historical boundary claimed.",
      "Temporal Audit: June 3–4 Dutch Harbor raid, June 4 Midway air battle, June 6 Kiska landing and June 7 Attu landing; Pearl Harbor and Yokosuka are reference bases, not claimed June 3–7 incidents.",
      "Style Audit: five categorical legend entries match all Point categories and the renderer's Japanese text markers; the North Pacific center [177,39], zoom 2.05 / minZoom 1.4 permits crossing longitude ±180 rather than treating the date line as a wall. Kiska and Attu use opposite label sides and can be separately opened at detail zoom.",
      "Human Visual Audit HVA-014 completed by explicit user approval on 2026-10-09 after the updated A48 map and popup text were published for review. Date-line wrapping, closely spaced Attu/Kiska points, labels, map-wide composition and interaction concerns were included in the accepted map-wide visual review. Previous estimated marker proximity remains documented as a review concern, not an assertion that each device-specific automated test was run.",
      "Popup editorial review: each feature detail describes a distinct locality, dated action or outcome in affirmative prose. Common representative-point and modern-basemap cautions are consolidated into the map-wide readingNote; internal geometry provenance remains unchanged."
    ]
  }
}
