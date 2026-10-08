# plan

このフォルダには、**現在有効な企画書・実装計画**を置く。

## 長期企画書

- JPN_HISTORY_DECADE_PLAN.md

プロジェクト全体の目的・原則を定義する。個別フェーズ完了だけでは plan_done/ へ移動しない。

## 現在のactive plan

### 本線

現在のactive planは [BATAAN_CAPTIVITY_TO_CORAL_SEA_IMPLEMENTATION_PLAN.md](./BATAAN_CAPTIVITY_TO_CORAL_SEA_IMPLEMENTATION_PLAN.md)（**1942年4月10日〜5月8日、JH130〜JH133の4記事**）。JH130〜JH133 published、A47 Point-only published、Crosscutting gate（S05・S10延長、S09-F hold）、phase-end audit necessity judgment **no-audit** まで完了。次はCI / Pages確認、完了判定、`plan_done/` への移動。直前の1942年3月10日〜4月9日フェーズは [OCCUPATION_CONSOLIDATION_TO_BATAAN_FALL_IMPLEMENTATION_PLAN.md](../plan_done/OCCUPATION_CONSOLIDATION_TO_BATAAN_FALL_IMPLEMENTATION_PLAN.md) として完了・archive済み。

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
