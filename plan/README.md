# plan

このフォルダには、**現在有効な企画書・実装計画**を置く。

## 長期企画書

- `JPN_HISTORY_DECADE_PLAN.md`

プロジェクト全体の目的・原則を定義する。個別フェーズ完了だけでは `plan_done/` へ移さない。

## 実装計画

現在、`plan/` 配下にactiveな個別実装計画はない。

直前の1938年10月28日〜1939年5月10日フェーズは [EAST_ASIA_NEW_ORDER_TO_PRE_NOMONHAN_IMPLEMENTATION_PLAN.md](../plan_done/EAST_ASIA_NEW_ORDER_TO_PRE_NOMONHAN_IMPLEMENTATION_PLAN.md) として完了・archive済み。

次の個別計画は、1939年5月11日のノモンハン事件開始以後について、内閣・外交・軍事・国内動員・外部制約の状態が実際に変わる境界を確認して切り出す。年未満への細分化は定型化しない。

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
