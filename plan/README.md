# plan

このフォルダには、**現在有効な企画書・実装計画**を置く。

## 長期企画書

- JPN_HISTORY_DECADE_PLAN.md

プロジェクト全体の目的・原則を定義する。個別フェーズ完了だけでは plan_done/ へ移動しない。

## 現在のactive plan

### 本線

現在の本線は **1942年9月1日〜10月31日** の政治史を背骨とする社会状態遷移を扱う [SEPTEMBER_OCTOBER_1942_STATE_TRANSITION_IMPLEMENTATION_PLAN.md](SEPTEMBER_OCTOBER_1942_STATE_TRANSITION_IMPLEMENTATION_PLAN.md)（Status: active、**5本：JH147〜JH151**）です。JH147・JH148はpublished。次は **JH149「1942-09-18〜10-02」本文実装**。9月18日の陸海軍中央協定、10月3日の第21号作戦中止、10月25〜30日の戦争指導判断を独立した境界とし、輸送・生産・食糧・衣料の継続状態も観測します。11月1日の大東亜省施行以降は次フェーズで別途区切ります。

前の1942年7月22日〜8月31日フェーズは [KOKODA_GUADALCANAL_AUGUST_1942_IMPLEMENTATION_PLAN.md](../plan_done/KOKODA_GUADALCANAL_AUGUST_1942_IMPLEMENTATION_PLAN.md) として **completed / archived** 済みです。JH142〜JH146 published、A50 Point-only published・Data/Style passed・監査済み表示の再利用例外、S05／S09／S10と新規横断はhold、独立監査不要、PR／main CIとPages成功を確認しています。

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
