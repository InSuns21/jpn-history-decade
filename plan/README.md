# plan

このフォルダには、**現在有効な企画書・実装計画**を置く。

## 長期企画書

- `JPN_HISTORY_DECADE_PLAN.md`

プロジェクト全体の目的・原則を定義する。個別フェーズ完了だけでは `plan_done/` へ移動しない。

## 現在のactive plan

### 本線

- [TOJO_CABINET_TO_NOVEMBER_IMPERIAL_CONFERENCE_IMPLEMENTATION_PLAN.md](./TOJO_CABINET_TO_NOVEMBER_IMPERIAL_CONFERENCE_IMPLEMENTATION_PLAN.md)
  - Scope: 1941-10-18〜1941-11-05
  - Progress: phase cut ✅ → JH103 ✅ → JH104 ✅ → JH105 ✅ → JH106 ✅ → A41 ✅ no-map → Crosscutting gate ✅ → S13 extension ✅ → phase-end audit ✅ no-audit → 次は npm run check
  - 東条英機内閣成立から、9月6日国策の再検討、作戦・船舶・資源・外交見通しの再点検、11月1日の政策収束、11月5日の御前会議による新たな「帝国国策遂行要領」と対米甲案・乙案の正式決定までを追う。11月6日以後の甲案提示・来栖派遣・乙案・11月26日の米側覚書は次フェーズへ送る。

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
