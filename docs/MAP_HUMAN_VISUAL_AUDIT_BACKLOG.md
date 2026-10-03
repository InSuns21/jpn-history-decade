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

R1遡及実装で追加した4地図が `visualAudit: pending-human`。既存地図のうちA32は別工程でHuman Visual Audit済みとなっている。

| Backlog ID | A | Map ID | Route | Change | Geometry | Data | Style | Visual | Desktop | Tablet / Touch | Mobile | Zoom | 誤読注意点 | 実装commit | 完了commit | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| HVA-001 | A6 | railway-expansion-1872-1890 | /period/1886 | new | point + line | passed | passed | pending-human | 1889年東海道線のラベル密度・線の視認性 | time切替・marker tap・pan競合 | 凡例・長距離線の収まり | 1872/1889両slice | 模式線を正確な線路中心線と誤認しないこと | d307b98fac67b00df664305fd213aa62416aa615 | — | pending |
| HVA-002 | A7 | sino-russo-japanese-war-theaters-1894-1905 | /period/1901 | new | point + line | passed | passed | pending-human | 朝鮮・遼東・満洲のラベル重なり | time切替・戦場marker tap | 対馬海峡を含む広域表示 | 両戦争sliceの縮尺 | 作戦軸を部隊進軍路・前線と誤認しないこと | d307b98fac67b00df664305fd213aa62416aa615 | — | pending |
| HVA-003 | A10 | ww1-east-asia-pacific-1914-1918 | /period/1915 | new | point + line | passed | passed | pending-human | 山東・南洋・シベリアを同一画面で読めるか | time切替・島嶼marker tap | 太平洋広域でラベルが小さすぎないか | wide-area zoom | 南洋の代表点を領域境界、シベリア線を全展開範囲と誤認しないこと | d307b98fac67b00df664305fd213aa62416aa615 | — | pending |
| HVA-004 | A15 | shandong-manchuria-1927-1928 | /period/1926 | new | point + line | passed | passed | pending-human | 済南・北京・奉天側の意味の違う線が判別できるか | marker tap・線とpointの競合 | 華北〜南満洲の縦長表示 | initial/detail zoom | 北伐方向と満鉄回廊を同種の路線と誤認しないこと。関東州境界は非表示 | d307b98fac67b00df664305fd213aa62416aa615 | — | pending |

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
