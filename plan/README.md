# plan

このフォルダには、**現在有効な企画書・実装計画**を置く。

## 長期企画書

- JPN_HISTORY_DECADE_PLAN.md

プロジェクト全体の目的・原則を定義する。個別フェーズ完了だけでは plan_done/ へ移動しない。

## 現在のactive plan

### 本線

1943年11月のフェーズは [完了PLAN](../plan_done/NOVEMBER_1943_GREATER_EAST_ASIA_CONFERENCE_IMPLEMENTATION_PLAN.md) へアーカイブ済み。JH176（11月1〜19日・軍需省と大東亜会議）とJH177（11月20〜30日・タラワ／マキン上陸と島嶼防衛）を公開し、main CI・Pages deployの成功を確認した。

**次工程:** 1943年12月1日以降のphase cut。カイロ宣言の公表による外交上の情報変化と、中部太平洋の防衛・輸送判断を分け、自然な記事境界を決める。現時点で本線のactive PLANはない。

S05「政治参加」、S09「占領統治」、S10「戦時統制と資源配分」は1943年11月の追加延長を保留した。理由は完了PLANに記録する。過去の全フェーズは `plan_done/` を参照。

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
