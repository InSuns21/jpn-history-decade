# plan

このフォルダには、**現在有効な企画書・実装計画**を置く。

## 長期企画書

- `JPN_HISTORY_DECADE_PLAN.md`

プロジェクト全体の目的・原則を定義する。個別フェーズ完了だけでは `plan_done/` へ移動しない。

## 現在のactive plan

### 本線

- [NOVEMBER_FINAL_NEGOTIATION_TO_WAR_DECISION_IMPLEMENTATION_PLAN.md](./NOVEMBER_FINAL_NEGOTIATION_TO_WAR_DECISION_IMPLEMENTATION_PLAN.md)
  - Scope: 1941-11-06〜1941-12-01
  - Progress: phase cut ✅ → 次は JH107「1941-11-06〜11-13」
  - 11月5日に決定した甲案・乙案を実際の対米交渉へ投入し、来栖三郎の参加、乙案への移行、米側の暫定協定検討と11月26日文書、11月27・29日の国内手続を経て、12月1日の第8回御前会議による対米英蘭開戦の正式決定までを5年代記事で追う。

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
