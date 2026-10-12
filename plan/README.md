# plan

このフォルダには、**現在有効な企画書・実装計画**を置く。

## 長期企画書

- JPN_HISTORY_DECADE_PLAN.md

プロジェクト全体の目的・原則を定義する。個別フェーズ完了だけでは plan_done/ へ移動しない。

## 現在のactive plan

### 本線

**active PLAN:** [NOVEMBER_1943_GREATER_EAST_ASIA_CONFERENCE_IMPLEMENTATION_PLAN.md](NOVEMBER_1943_GREATER_EAST_ASIA_CONFERENCE_IMPLEMENTATION_PLAN.md)。1943年11月のphase cutを完了。JH176（11月1〜19日、軍需省設置・大東亜会議・共同宣言）→JH177（11月20〜30日、タラワ・マキンへの米軍上陸と中央太平洋の防衛）の2記事を予定する。12月1日のカイロ宣言公表は次フェーズへ送る。記事数を4本へ合わせるため11月を日付だけで細分化しない。

直前の完了フェーズは [1943年9〜10月](../plan_done/SEPTEMBER_OCTOBER_1943_PHILIPPINE_REPUBLIC_IMPLEMENTATION_PLAN.md)。JH173〜175は公開済み。フェーズの追跡査読によりJH175へ10月30日の日華同盟条約を補完し、11月会議との接続を整えた。S05・S09は延長保留、S10は1943年7月まで延長済み。過去の全フェーズは `plan_done/` を参照。

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
