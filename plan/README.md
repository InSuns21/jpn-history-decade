# plan

このフォルダには、**現在有効な企画書・実装計画**を置く。

## 長期企画書

- `JPN_HISTORY_DECADE_PLAN.md`

プロジェクト全体の目的・原則を定義する。個別フェーズ完了だけでは `plan_done/` へ移さない。

## 実装計画

現在のactive plan:

- [NOMONHAN_TO_EUROPEAN_WAR_IMPLEMENTATION_PLAN.md](./NOMONHAN_TO_EUROPEAN_WAR_IMPLEMENTATION_PLAN.md)
  - Scope: 1939-05-11〜1939-09-15
  - Progress: phase cut ✅ → JH59 ✅ → A29 ✅ → JH60 ✅ → A30 ✅ no-map → JH61 ✅ → A29時点別再判定 ✅ → JH62 ✅ → A29公開map実装 ✅（Human Visual Audit待ち）

直前の1938年10月28日〜1939年5月10日フェーズは [EAST_ASIA_NEW_ORDER_TO_PRE_NOMONHAN_IMPLEMENTATION_PLAN.md](../plan_done/EAST_ASIA_NEW_ORDER_TO_PRE_NOMONHAN_IMPLEMENTATION_PLAN.md) として完了・archive済み。

現フェーズは、ノモンハン事件だけを孤立して扱わず、天津租界封鎖、国民徴用令、日米通商航海条約廃棄通告、独ソ不可侵条約、内閣交代、欧州戦争開始までを、軍事・外交・国内動員の状態が実際に変わる境界で4ページに分ける。

## ライフサイクル

```text
plan/ で active
  ↓
実装
  ↓
監査・受入条件確認
  ↓
CI green
  ↓
Pages deploy green
  ↓
Status: completed
  ↓
plan_done/ へ移動
```

完了後、同じ計画書を `plan/` と `plan_done/` の両方へ残さない。
