# plan

このフォルダには、**現在有効な企画書・実装計画**を置く。

## 長期企画書

- JPN_HISTORY_DECADE_PLAN.md

プロジェクト全体の目的・原則を定義する。個別フェーズ完了だけでは plan_done/ へ移動しない。

## 現在のactive plan

### 本線

1943年12月は[完了PLAN](../plan_done/DECEMBER_1943_CAIRO_DECLARATION_IMPLEMENTATION_PLAN.md)へarchive済み。JH178（12月1〜14日・カイロ宣言の公表とマーシャル空襲）とJH179（12月15〜31日・アラウェとグロスター岬）を公開し、PR #490、main CI、Pages deployの成功を実測。12月分のS05・S09・S10の延長は保留、新規地図・横断記事も不要と判定した。

**現在のactive PLAN:** [1944年3月30日〜5月5日：パラオ空襲・連合艦隊指揮・コヒマ・ニューギニア](./MARCH_MAY_1944_PALAU_KOHIMA_HOLLANDIA_IMPLEMENTATION_PLAN.md)。phase cutでJH186（3月30日〜4月3日、パラオ方面空母空襲と古賀司令部の遭難）、JH187（4月4〜21日、コヒマ包囲・救援とインパール航空補給）、JH188（4月22〜28日、ホーランジア／アイタペ上陸）、JH189（4月29日〜5月5日、トラック再空襲と艦隊指揮継承）を暫定設定。短期独立記事は本文実装時に再評価する。

1944年2月17日〜3月29日のJH183〜185は公開・PR/main CI・Pages成功を実測して[完了PLAN](../plan_done/FEBRUARY_MARCH_1944_TRUK_ADMIRALTIES_IMPHAL_IMPLEMENTATION_PLAN.md)へarchive済み。JH185の公開メタ表現2箇所を次工程の追跡査読で修正。

1944年1月〜2月16日のJH180〜JH182は3記事公開、S10を1944年1月まで延長、各PR／main CI／Pages successを確認し[完了PLAN](../plan_done/JANUARY_FEBRUARY_1944_STATE_TRANSITION_IMPLEMENTATION_PLAN.md)へアーカイブ済み。直前JH182の追跡査読は次のactive PLAN内に記録。

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
