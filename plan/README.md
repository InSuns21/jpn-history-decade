# plan

このフォルダには、**現在有効な企画書・実装計画**を置く。

## 長期企画書

- `JPN_HISTORY_DECADE_PLAN.md`

プロジェクト全体の目的・原則を定義する。個別フェーズ完了だけでは `plan_done/` へ移さない。

## 実装計画

- `WUHAN_GUANGZHOU_CAMPAIGN_IMPLEMENTATION_PLAN.md`

1938年5月20日〜10月27日を対象とし、徐州占領後の近衛内閣改造・五相会議、宇垣外相期の和平方針再検討、黄河決壊、武漢攻略、張鼓峰事件、国家総動員法の具体化、広東・武漢占領までを追うactive implementation plan。

次の実装は JH51「1938-05-20〜06-17」。

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
