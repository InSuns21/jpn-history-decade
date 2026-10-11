# plan

このフォルダには、**現在有効な企画書・実装計画**を置く。

## 長期企画書

- JPN_HISTORY_DECADE_PLAN.md

プロジェクト全体の目的・原則を定義する。個別フェーズ完了だけでは plan_done/ へ移動しない。

## 現在のactive plan

### 本線

**1943年1月14日〜3月17日フェーズ：completed / archived。** [完了PLAN](../plan_done/JANUARY_MARCH_1943_STATE_TRANSITION_IMPLEMENTATION_PLAN.md)。JH160〜164 published、S10-Dを1943年3月17日まで延長、S05-EとS09-Fは保留、新規横断記事・地図と独立監査は不要。JH164を次工程着手時に追跡査読し、主張層のメタ表現を修正した。次は**1943年3月18日以後のphase cut**（戦時行政特例法・戦時行政職権特例を入口に、首相と省庁の指揮調整権限、占領地政策、輸送・産業・生活を並行観測）。次フェーズの境界を判定するまでは新active実装PLANは置かない。

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
