# plan

このフォルダには、**現在有効な企画書・実装計画**を置く。

## 長期企画書

- `JPN_HISTORY_DECADE_PLAN.md`

プロジェクト全体の目的・原則を定義する。個別フェーズ完了だけでは `plan_done/` へ移さない。

## 実装計画

- `TOTAL_MOBILIZATION_TO_XUZHOU_IMPLEMENTATION_PLAN.md`

1938年1月17日〜5月19日を対象とし、第一次近衛声明後の新政権工作、国家総動員法の帝国議会審議・公布・施行、戦面不拡大方針から徐州作戦への転換、5月19日の徐州占領までを追うactive implementation plan。

次の実装は JH48「1938-01-17〜02-23」。

年未満への細分化は定型化せず、内閣形成・軍の制度的位置・議会との接続・対外政策の選択肢が実際に変わる境界に限る。

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
