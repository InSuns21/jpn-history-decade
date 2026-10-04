# plan

このフォルダには、**現在有効な企画書・実装計画**を置く。

## 長期企画書

- `JPN_HISTORY_DECADE_PLAN.md`

プロジェクト全体の目的・原則を定義する。個別フェーズ完了だけでは `plan_done/` へ移動しない。

## 現在のactive plan

### 本線

- [BARBAROSSA_TO_PRE_ASSET_FREEZE_IMPLEMENTATION_PLAN.md](./BARBAROSSA_TO_PRE_ASSET_FREEZE_IMPLEMENTATION_PLAN.md)
  - Scope: 1941-06-22〜1941-07-24
  - Progress: phase cut ✅ → 次は JH90「1941-06-22〜06-24」
  - 6月22日の米側回答・独ソ戦開始から、南部仏印進駐方針、7月2日御前会議、関特演、第3次近衛内閣成立、日仏印共同防衛了解を追い、7月25日の米国による日本資産凍結直前までを扱う

遡及地図監査・実装planは [MAP_RETRO_AUDIT_AND_IMPLEMENTATION_PLAN.md](../plan_done/MAP_RETRO_AUDIT_AND_IMPLEMENTATION_PLAN.md) としてimplementation-complete / archive済み。Human Visual Auditの残件は [MAP_HUMAN_VISUAL_AUDIT_BACKLOG.md](../docs/MAP_HUMAN_VISUAL_AUDIT_BACKLOG.md) で継続管理する。

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
