# plan

このフォルダには、**現在有効な企画書・実装計画**を置く。

## 長期企画書

- `JPN_HISTORY_DECADE_PLAN.md`

プロジェクト全体の目的・原則を定義する。個別フェーズ完了だけでは `plan_done/` へ移さない。

## 実装計画

- `FEBRUARY_26_TO_PRE_MARCO_POLO_IMPLEMENTATION_PLAN.md`

1936年2月26日〜1937年7月6日を対象とし、二・二六事件と鎮圧、広田内閣、軍部大臣現役武官制の復活、1937年の宇垣組閣失敗・林内閣・第20回総選挙・第1次近衛内閣を、盧溝橋事件後の戦争拡大から逆算せず制度状態の変化として扱うactive implementation plan。

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
