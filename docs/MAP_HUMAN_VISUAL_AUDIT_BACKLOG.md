# Map Human Visual Audit Backlog

過去地図監査の遡及再判定・実装、および今後の地図実装で、**Data Audit / Style Auditまでは完了したがHuman Visual Auditを後送している地図**を追跡する内部バックログ。

公開サイトの読者向け文面ではない。

## 運用ルール

- `visualAudit: pending-human` の地図を追加・変更したcommitでは、この表にも同じ地図を登録する。
- backlog未登録の `pending-human` 地図を残さない。
- point-only再利用例外で `not-required-reused-pattern` の地図は登録不要。
- Human Visual Audit完了後は `status` を `completed` にし、完了commitを記録する。
- 地図定義側の `visualAudit` と本表が矛盾しないようにする。

## 現在の残件

R1遡及実装の4地図に加え、R2実装のA21〜A28（A20を除く8地図）が `visualAudit: pending-human`。A20はpoint-only再利用例外、A32とA37は別工程でHuman Visual Audit済み。

| Backlog ID | A | Map ID | Route | Change | Geometry | Data | Style | Visual | Desktop | Tablet / Touch | Mobile | Zoom | 誤読注意点 | 実装commit | 完了commit | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| HVA-001 | A6 | railway-expansion-1872-1890 | /period/1886 | new | point + line | passed | passed | pending-human | 1889年東海道線のラベル密度・線の視認性 | time切替・marker tap・pan競合 | 凡例・長距離線の収まり | 1872/1889両slice | 模式線を正確な線路中心線と誤認しないこと | d307b98fac67b00df664305fd213aa62416aa615 | — | pending |
| HVA-002 | A7 | sino-russo-japanese-war-theaters-1894-1905 | /period/1901 | new | point + line | passed | passed | pending-human | 朝鮮・遼東・満洲のラベル重なり | time切替・戦場marker tap | 対馬海峡を含む広域表示 | 両戦争sliceの縮尺 | 作戦軸を部隊進軍路・前線と誤認しないこと | d307b98fac67b00df664305fd213aa62416aa615 | — | pending |
| HVA-003 | A10 | ww1-east-asia-pacific-1914-1918 | /period/1915 | new | point + line | passed | passed | pending-human | 山東・南洋・シベリアを同一画面で読めるか | time切替・島嶼marker tap | 太平洋広域でラベルが小さすぎないか | wide-area zoom | 南洋の代表点を領域境界、シベリア線を全展開範囲と誤認しないこと | d307b98fac67b00df664305fd213aa62416aa615 | — | pending |
| HVA-004 | A15 | shandong-manchuria-1927-1928 | /period/1926 | new | point + line | passed | passed | pending-human | 済南・北京・奉天側の意味の違う線が判別できるか | marker tap・線とpointの競合 | 華北〜南満洲の縦長表示 | initial/detail zoom | 北伐方向と満鉄回廊を同種の路線と誤認しないこと。関東州境界は非表示 | d307b98fac67b00df664305fd213aa62416aa615 | — | pending |

| HVA-005 | A21 | shanghai-urban-1937 | /period/1937-08-13 | new | point + polygon | passed | passed | pending-human | 租界面と虹口・閘北・江湾ラベルの重なり | polygon上でmarker tap / panが成立するか | 市街拡大率で凡例が読めるか | initial/detail | 模式面を法的な精密租界境界と誤認しないこと | same R2 batch commit | — | pending |
| HVA-006 | A22 | hangzhou-bay-landing-1937 | /period/1937-10-26 | new | point + polygon | passed | passed | pending-human | 上海正面と杭州湾北岸が同時に読めるか | 上陸方面polygon上のpan / marker tap | 金山衛・松江のラベル密度 | initial/detail | 上陸方面面を橋頭堡・占領境界と誤認しないこと | same R2 batch commit | — | pending |
| HVA-007 | A23 | shanghai-nanjing-advance-1937 | /period/1937-11-13 | new | point + line | passed | passed | pending-human | 6都市のラベルと破線の可読性 | marker tap / pan | 約300kmの都市列が収まるか | initial/zoom-out | 模式線を実際の進軍路・制令線・鉄道と誤認しないこと | same R2 batch commit | — | pending |
| HVA-008 | A24 | nanjing-safety-zone-1937 | /period/1937-12-14 | new | point + line + polygon | passed | passed | pending-human | 安全区面・下関・長江軸が判別できるか | 安全区上のmarker tap / pan | 狭い都市図で凡例が画面を圧迫しないか | initial/detail | 安全区面を街区単位の確定境界、長江線を1937年水際線と誤認しないこと | same R2 batch commit | — | pending |
| HVA-009 | A25 | xuzhou-rail-1938 | /period/1938-04-01 | new | point + line | passed | passed | pending-human | 津浦・隴海の交点が一目で分かるか | 徐州marker tap / pan | 鉄道2線の凡例・線種識別 | initial/detail | 一般化線を1938年の測量済み線路中心線と誤認しないこと | same R2 batch commit | — | pending |
| HVA-010 | A26 | yellow-river-flood-1938 | /period/1938-05-20 | new | point + line | passed | passed | pending-human | 河川・鉄道・洪水方向の3線種を区別できるか | 花園口marker tap / pan | 広域で洪水方向が弱すぎないか | initial/zoom-out | 洪水方向を実測河道・浸水境界・洪水先端と誤認しないこと | same R2 batch commit | — | pending |
| HVA-011 | A27 | wuhan-guangdong-supply-1938 | /period/1938-09-30 | new | point + line | passed | passed | pending-human | 香港―広東―武漢主軸と代替方向が階層化されて見えるか | 広域marker tap / pan / pinch | ラベル過密・凡例高さ | initial/zoom-out | 代替方向を一本の確定道路、線幅を輸送量と誤認しないこと | same R2 batch commit | — | pending |
| HVA-012 | A28 | hainan-supply-1939 | /period/1939-02-10 | new | point + line | passed | passed | pending-human | 海南島拠点と仏印輸送線の関係が読めるか | 海口・海防・諒山marker tap | 華南〜雲南の広域ラベル | initial/zoom-out | 海南島pointを島全域の即時完全占領、模式線を遮断済みrouteと誤認しないこと | same R2 batch commit | — | pending |

| HVA-013 | A37 | franco-thai-peace-treaty-1941 | /period/1941-04-23 | new | point + line | passed | passed | passed | メコン区間・15度線・子午線・湖上円弧が階層化され、模式線として読めるか | marker tap / pan / pinch、近接する湖上端点ラベルの競合 | 広域メコン区間とトンレサップ詳細の両方を追えるか | initial / Mekong corridor / Tonle Sap detail / zoom-out | 条約規則の模式線を1941年5月時点の測量済み確定境界と誤認しないこと。現代背景国境を歴史境界と読まないこと | same A37 implementation batch commit | af7694c605bb1ba69e2a9ed988f36bd2d0640507 | completed |

| HVA-014 | A48 | midway-aleutians-two-front-1942-06-07 | /period/1942-06-03 | new | point | passed | passed | passed | ±180度横断時の表示、キスカ・アッツのラベル・marker重なり | 個別marker tap、panとpinch | 凡例、東経・西経の表示、ラベル | initial 2.05 / detail 4 / zoom-out 1.4 | 二島の重なりを一地点と誤認しないこと、日付変更線を跨ぐ表示でpointが消えないこと | PR #394 | f37ebbed8f3d3369d4170c7e677dc58b98ed2a84 | completed |

**HVA-014 completion (2026-10-09):** A48地図のポップアップ文面修正を確認済みとしたユーザーが、続いて地図全体の表示・操作についても明示的にOKを回答したため、Human Visual Auditをpassedとして閉じた。日付変更線横断、アッツ／キスカの接近地点とラベル、popup／tap／pan／pinch、表示範囲の懸念を含めたユーザー承認記録。個別の端末別測定記録を新たに取得したとの主張はしない。

| HVA-015 | A49 | south-pacific-kokoda-transport-1942-07-21 | /period/1942-07-12 | new | point + schematic line | passed | passed | passed | ルンガ岬／ツラギとパプア側の近接ラベル・点線の見え方 | marker tap・線近くのpan/pinch | 9点・8区分凡例、山路の読みやすさ | initial 3 / Papua detail 6 / zoom-out 2 | 後年の道路名称・後年再構成の徒歩経路を7月21日の進軍達成域・精密道筋と誤認しないこと。破線の海岸線横断や見切れも確認 | PR #408 | HVA-015 gate commit | completed |

**HVA-015 completion (2026-10-10):** ユーザーがA49のGitHub Pages上の表示・操作について「通っています」と明示承認したため、HVA-015をpassed/completedとする。監査対象はルンガ岬・ツラギとパプア側のラベル、ココダ道模式線と陸地の整合、初期・詳細・zoom-out、凡例、marker popup / tap / pan / pinchを含む。ユーザー承認を記録するもので、新たな端末別の測定ログを独自に取得したとは主張しない。地図定義のvisualAuditをpassedにしてpublishedへ昇格し、計画上の後続工程へ進む。

## 新規登録テンプレート

| Backlog ID | A | Map ID | Route | Change | Geometry | Data | Style | Visual | Desktop | Tablet / Touch | Mobile | Zoom | 誤読注意点 | 実装commit | 完了commit | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| HVA-### | A## | map-id | /period/... | new / upgrade | point / line / polygon / mixed | passed | passed | pending-human | 確認内容 | 確認内容 | 確認内容 | 確認内容 | 概略線・概略面など | SHA | — | pending |

## 完了条件

Human Visual Auditでは `MAP_AUDIT_STANDARD.md` に従い、最低限次を確認する。

- Desktop
- Tablet / Touch
- Mobile
- 初期zoom / zoom in / detail / zoom out
- ラベル重なり
- 凡例とlayerの一致
- popup / tap / pan / pinch
- approximate / schematic geometryが確定線・確定境界に見えないこと
- modern basemapを歴史境界・歴史道路と誤認しにくいこと

完了後は地図定義側の `auditState.visualAudit` を `passed` へ変更し、必要に応じて `status: published` へ昇格する。
