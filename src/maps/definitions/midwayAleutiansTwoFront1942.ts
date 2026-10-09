import type { HistoricalMapDefinition } from '../schema.ts'

export const midwayAleutiansTwoFront1942Map: HistoricalMapDefinition = {
  "id": "midway-aleutians-two-front-1942-06-07",
  "title": "1942年6月3〜7日：ミッドウェーとアリューシャン二方面の位置関係",
  "historicalQuestion": "日本本土・真珠湾・ミッドウェーと、北方のダッチハーバー・キスカ・アッツは、どのような位置関係にあり、二方面で何が違う結果となったか。",
  "readingNote": "1942年6月3〜7日のMI・AL作戦を、島・港湾の代表地点で比較する模式地図。「本」は日本本土の地理的参照港（横須賀）で出撃地・作戦指揮位置を確定しない。「米」は米太平洋艦隊の主要基地である真珠湾、「目」は日本が攻略を目指したが米側が保持したミッドウェー、「空」は6月3〜4日に日本側が空襲したダッチハーバー、「占」は日本側が6月6〜7日に上陸したキスカ・アッツを示す。各地点は地理的代表座標であり、航空隊・艦隊の位置、航跡、攻撃範囲、占領領域を示さない。アリューシャンの西部は日付変更線をまたいで表示される。ミッドウェーと北方AL作戦を一方の陽動・従属関係と決めつけず、成果の違いを比較する。背景地図の国境は現代のOpenStreetMapによるもので1942年の政治境界ではない。",
  "status": "draft",
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
            "detail": "日本本土から北太平洋を俯瞰するための位置参照。連合艦隊や両作戦の各部隊がここから出航したという意味ではない。"
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
            "detail": "米空母部隊は5月末に真珠湾から出撃し、ミッドウェー北東の洋上へ向かった。点は基地の位置で、米空母の戦闘中の位置ではない。"
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
            "detail": "6月4日、日本軍は島を空襲したが日本側の空母4隻が戦闘不能になり、攻略は中止された。米軍の飛行場・基地は保持された。"
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
            "detail": "ウナラスカ島の港湾・基地が攻撃された。空襲の目標位置であり、AL空母部隊の海上位置を意味しない。"
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
            "detail": "西部アリューシャンの島。米側の観測施設があった地点への上陸・占領を示す島の代表位置で、占領境界や上陸海岸の精密位置ではない。"
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
            "detail": "キスカより西方にある有人島。6月7日の上陸を示す島の代表位置で、住民への後年の被害や島内の占領範囲をこの点で表さない。"
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
    "visualAudit": "pending-human",
    "notes": [
      "A48 map necessity: adopted. A47's Coral Sea geography and JH137 prose cannot show the wide spatial relationship between Midway near Hawaii and the Aleutian targets, including the dateline and dispersed supply responsibilities.",
      "Data Audit: six unique site-authored Point features, all WGS84 coordinates within bounds. Named sites and event dates supported by NHHC/NPS citations in JH137; no carrier location, voyage track, attack radius, exact landing beach or historical boundary claimed.",
      "Temporal Audit: June 3–4 Dutch Harbor raid, June 4 Midway air battle, June 6 Kiska landing and June 7 Attu landing; Pearl Harbor and Yokosuka are reference bases, not claimed June 3–7 incidents.",
      "Style Audit: five categorical legend entries match all Point categories and the renderer's Japanese text markers; the North Pacific center [177,39], zoom 2.05 / minZoom 1.4 permits crossing longitude ±180 rather than treating the date line as a wall. Kiska and Attu use opposite label sides and can be separately opened at detail zoom.",
      "Human Visual Audit pending: renderer/legend/popup are reused unchanged from A47, but the 180° date-line crossing and the approximately 4.6° longitude separation of Attu and Kiska produce a concrete initial-zoom overlap risk (32px markers versus approximately 13px horizontal separation). This disqualifies the automatic Point-only visual-exemption until checked in desktop/tablet/mobile. Keep draft and show in-page audit notice on Pages.",
      "Reading note and popups expressly distinguish status and temporal differences and say that modern basemap boundaries are not 1942 borders. The map depicts no real ship routes or fabricated battle zones."
    ]
  }
}
