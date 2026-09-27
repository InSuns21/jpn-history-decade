# plan

このフォルダには、**現在有効な企画書・実装計画**を置く。

## 長期企画書

- `JPN_HISTORY_DECADE_PLAN.md`

プロジェクト全体の目的・原則を定義する。個別フェーズ完了だけでは `plan_done/` へ移さない。

## 実装計画

- `LUGOU_BRIDGE_TO_PRE_SHANGHAI_IMPLEMENTATION_PLAN.md`

1937年7月7日〜8月12日を対象とし、盧溝橋事件の局地衝突、現地停戦、不拡大方針と増援・動員準備、7月末の北平・天津方面の大規模作戦を、8月13日の上海戦開始から逆算せず追うactive implementation plan。

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
