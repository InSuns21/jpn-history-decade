# plan

このフォルダには、**現在有効な企画書・実装計画**を置く。

## 長期企画書

- `JPN_HISTORY_DECADE_PLAN.md`

プロジェクト全体の目的・原則を定義する。個別フェーズ完了だけでは `plan_done/` へ移さない。

## 実装計画

- `EAST_ASIA_NEW_ORDER_TO_PRE_NOMONHAN_IMPLEMENTATION_PLAN.md`

1938年10月28日〜1939年5月10日を対象とし、広東・武漢占領後の第二次・第三次近衛声明、興亜院、汪兆銘工作、平沼内閣、国家総動員法にもとづく人的・生産力統制、海南島・南昌での作戦、対独伊協定交渉を追うactive implementation plan。

終点はノモンハン事件が始まる前日の1939年5月10日。JH55「1938-10-28〜12-21」は実装済みで、次の実装は JH56「1938-12-22〜1939-01-04」。

年未満への細分化は定型化せず、内閣・外交・軍事・国内動員・外部制約の状態が実際に変わる境界に限る。

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
