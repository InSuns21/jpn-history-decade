# plan

このフォルダには、**現在有効な企画書・実装計画**を置く。

## 長期企画書

- JPN_HISTORY_DECADE_PLAN.md

プロジェクト全体の目的・原則を定義する。個別フェーズ完了だけでは plan_done/ へ移動しない。

## 現在のactive plan

### 本線

**1943年3月18日〜5月8日フェーズ：active / phase cut confirmed。** [現行PLAN](MARCH_MAY_1943_STATE_TRANSITION_IMPLEMENTATION_PLAN.md)。予定4記事はJH165=3/18〜3/29、JH166=3/30〜4/15、JH167=4/16〜4/29、JH168=4/30〜5/8。3月18日の首相権限強化、価格・輸送行政、4月16日の米価対策、20日の内閣改造、30日の物動計画、5月8日のビルマ独立準備を並行観測する。JH164は次工程着手時の追跡査読を行い、重複した末尾節を整理した。次はJH165の本文実装。

前フェーズは [1942年12月10日〜1943年1月13日](../plan_done/DECEMBER_1942_EARLY_JANUARY_1943_STATE_TRANSITION_IMPLEMENTATION_PLAN.md) にアーカイブ済み。過去の全フェーズは `plan_done/` を参照。

### 横断的な品質負債返済

現在activeな横断品質負債返済PLANはない。高校生可読性の遡及監査は [HIGH_SCHOOL_READABILITY_RETRO_AUDIT_PLAN.md](../plan_done/HIGH_SCHOOL_READABILITY_RETRO_AUDIT_PLAN.md) として完了・archive済み。

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
