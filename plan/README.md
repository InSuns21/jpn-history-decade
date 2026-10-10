# plan

このフォルダには、**現在有効な企画書・実装計画**を置く。

## 長期企画書

- JPN_HISTORY_DECADE_PLAN.md

プロジェクト全体の目的・原則を定義する。個別フェーズ完了だけでは plan_done/ へ移動しない。

## 現在のactive plan

### 本線

1942年9月1日〜10月31日フェーズは [SEPTEMBER_OCTOBER_1942_STATE_TRANSITION_IMPLEMENTATION_PLAN.md](../plan_done/SEPTEMBER_OCTOBER_1942_STATE_TRANSITION_IMPLEMENTATION_PLAN.md) として **completed / archived**。JH147〜JH151 published、S05-E／S09-F／S10-D／新規横断記事はall hold、新主題地図不要、独立監査不要です。

**次工程は1942年11月1日以降のphase cut**。大東亜省官制の11月1日施行、統制会への権限委譲方針（17日）、臨時生産増強委員会設置決定（27日）について社会状態を確認し、新PLANの区切りを再判定します。現時点で次のactive実装PLANは未作成です。

前フェーズの1942年7月22日〜8月31日も [KOKODA_GUADALCANAL_AUGUST_1942_IMPLEMENTATION_PLAN.md](../plan_done/KOKODA_GUADALCANAL_AUGUST_1942_IMPLEMENTATION_PLAN.md) へcompleted / archived済みです。

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
