# plan

このフォルダには、**現在有効な企画書・実装計画**を置く。

## 長期企画書

- `JPN_HISTORY_DECADE_PLAN.md`

プロジェクト全体の目的・原則を定義する。個別フェーズ完了だけでは `plan_done/` へ移動しない。

## 現在のactive plan

### 本線

- [SEPTEMBER_IMPERIAL_CONFERENCE_TO_KONOE_RESIGNATION_IMPLEMENTATION_PLAN.md](./SEPTEMBER_IMPERIAL_CONFERENCE_TO_KONOE_RESIGNATION_IMPLEMENTATION_PLAN.md)
  - Scope: 1941-09-06〜1941-10-17
  - Progress: phase cut ✅ → JH98 ✅ → 次は JH99「1941-09-13〜09-19」
  - 9月6日の御前会議で正式化された期限付き外交・戦争準備並行方針から、9月13〜20日の対米条件整理、9月25日の10月15日期限、10月2日の米側回答、10月12日の五相会議、10月16日の第三次近衛内閣総辞職までを追う。10月18日の東条内閣成立は次フェーズへ送る。

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
