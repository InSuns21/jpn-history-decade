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

現時点の `src/maps/registry.ts` 登録地図には、`visualAudit: pending-human` はない。

| Backlog ID | A | Map ID | Route | Change | Geometry | Data | Style | Visual | Desktop | Tablet / Touch | Mobile | Zoom | 誤読注意点 | 実装commit | 完了commit | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | no pending items |

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
