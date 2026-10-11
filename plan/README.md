# plan

このフォルダには、**現在有効な企画書・実装計画**を置く。

## 長期企画書

- JPN_HISTORY_DECADE_PLAN.md

プロジェクト全体の目的・原則を定義する。個別フェーズ完了だけでは plan_done/ へ移動しない。

## 現在のactive plan

### 本線

1942年9月1日〜10月31日フェーズは [SEPTEMBER_OCTOBER_1942_STATE_TRANSITION_IMPLEMENTATION_PLAN.md](../plan_done/SEPTEMBER_OCTOBER_1942_STATE_TRANSITION_IMPLEMENTATION_PLAN.md) として **completed / archived**。JH147〜JH151 published、S05-E／S09-F／S10-D／新規横断記事はall hold、新主題地図不要、独立監査不要です。

**1942年11月1日〜12月9日フェーズ：completed / archived。** [完了PLAN](../plan_done/NOVEMBER_EARLY_DECEMBER_1942_STATE_TRANSITION_IMPLEMENTATION_PLAN.md)。JH152〜155 published、S10-D延長、S05-E・S09-F保留、新規横断記事・主題地図は追加せず、独立監査不要。

**1942年12月10日〜1943年1月13日フェーズ：completed / archived。** [完了PLAN](../plan_done/DECEMBER_1942_EARLY_JANUARY_1943_STATE_TRANSITION_IMPLEMENTATION_PLAN.md)。JH156〜159 published、S10-Dを12月20日まで延長、S05-E・S09-Fは保留、新規横断記事・地図と独立監査は不要。PR/main CIおよびPages successを確認済み。**1943年1月14日〜3月17日フェーズ：active / phase cut completed。** [実装PLAN](JANUARY_MARCH_1943_STATE_TRANSITION_IMPLEMENTATION_PLAN.md) により、JH160（1/14〜20）→JH161（1/21〜31）→JH162（2/1〜9）→JH163（2/10〜26）→JH164（2/27〜3/17）の**5記事**に確定。ビルマ独立・占領地帰属方針、行政官庁職権委譲令の公布／施行、ガダルカナル撤退の実施／公表、対独伊協力、世界情勢判断、3月10日のビルマ独立指導要綱を状態遷移として扱う。JH160〜JH162の本文・出典・図版／地図採否判定と隣接接続まで実施済み。次工程は**JH163「1943年2月10〜26日」の本文実装**。

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
