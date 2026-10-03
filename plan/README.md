# plan

このフォルダには、**現在有効な企画書・実装計画**を置く。

## 長期企画書

- `JPN_HISTORY_DECADE_PLAN.md`

プロジェクト全体の目的・原則を定義する。個別フェーズ完了だけでは `plan_done/` へ移動しない。

## 現在のactive plan

### 本線

- [SECOND_KONOE_TO_PRE_TRIPARTITE_PACT_IMPLEMENTATION_PLAN.md](./SECOND_KONOE_TO_PRE_TRIPARTITE_PACT_IMPLEMENTATION_PLAN.md)
  - Scope: 1940-07-22〜1940-09-26
  - Progress: JH71 ✅ → JH72 ✅ → JH73 ✅ → A32 map necessity / data-quality judgment ✅ adopted / high → 次はA32 map実装

### 並行監査・実装

- [MAP_RETRO_AUDIT_AND_IMPLEMENTATION_PLAN.md](./MAP_RETRO_AUDIT_AND_IMPLEMENTATION_PLAN.md)
  - Scope: A1〜A31の過去map judgment
  - 現行のapproximate / schematic geometry採用基準で遡及再判定し、採用分は地図作成・Data Audit・Style Auditまで行う
  - Human Visual Auditは実行時点では後送し、[MAP_HUMAN_VISUAL_AUDIT_BACKLOG.md](../docs/MAP_HUMAN_VISUAL_AUDIT_BACKLOG.md) で残件管理する

## ライフサイクル

```text
plan/ で active
  ↓
実装
  ↓
計画内の受入条件確認
  ↓
CI green
  ↓
Pages deploy green（公開変更がある場合）
  ↓
Status: completed / implementation-complete
  ↓
plan_done/ へ移動
```

完了後、同じ計画書を `plan/` と `plan_done/` の両方へ残さない。

Human Visual Auditを明示的に別工程へ後送するplanでは、地図を `draft / pending-human` のまま残し、残件を追跡可能なバックログへ登録した時点をそのplanの実装完了条件にできる。Human Visual Audit完了前の地図を監査済みpublished扱いにはしない。
