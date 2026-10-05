# plan

このフォルダには、**現在有効な企画書・実装計画**を置く。

## 長期企画書

- JPN_HISTORY_DECADE_PLAN.md

プロジェクト全体の目的・原則を定義する。個別フェーズ完了だけでは plan_done/ へ移動しない。

## 現在のactive plan

### 本線

- [WAR_OPENING_TO_HONG_KONG_FALL_IMPLEMENTATION_PLAN.md](./WAR_OPENING_TO_HONG_KONG_FALL_IMPLEMENTATION_PLAN.md)
  - 1941年12月2日〜12月25日
  - JH112〜JH116、開戦初動から戦争の制度化まで

### 横断的な品質負債返済

- [HIGH_SCHOOL_READABILITY_RETRO_AUDIT_PLAN.md](./HIGH_SCHOOL_READABILITY_RETRO_AUDIT_PLAN.md)
  - 公開本文の高校生可読性を全体監査し、必要箇所を「具体 → 仕組み → 抽象」へ修正する
  - 本線の新規年代実装とは別に、既存原稿の遡及負債を閉じる

遡及地図監査・実装planは [MAP_RETRO_AUDIT_AND_IMPLEMENTATION_PLAN.md](../plan_done/MAP_RETRO_AUDIT_AND_IMPLEMENTATION_PLAN.md) としてimplementation-complete / archive済み。Human Visual Auditの残件は [MAP_HUMAN_VISUAL_AUDIT_BACKLOG.md](../docs/MAP_HUMAN_VISUAL_AUDIT_BACKLOG.md) で継続管理する。

## ライフサイクル

plan/ で active
→ 実装
→ 計画内の受入条件確認
→ CI green
→ Pages deploy green（公開変更がある場合）
→ Status: completed / implementation-complete
→ plan_done/ へ移動

完了後、同じ計画書を plan/ と plan_done/ の両方へ残さない。

Human Visual Auditを明示的に別工程へ後送するplanでは、地図を draft / pending-human のまま残し、残件を追跡可能なバックログへ登録した時点をそのplanの実装完了条件にできる。Human Visual Audit完了前の地図を監査済みpublished扱いにはしない。
