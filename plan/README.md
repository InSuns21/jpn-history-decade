# plan

このフォルダには、**現在有効な企画書・実装計画**を置く。

## 長期企画書

- `JPN_HISTORY_DECADE_PLAN.md`

プロジェクト全体の目的・原則を定義する。個別フェーズ完了だけでは `plan_done/` へ移さない。

## 実装計画

- `MANCHURIAN_INCIDENT_TRANSITION_IMPLEMENTATION_PLAN.md`

1931年1月〜1933年5月を対象とし、まず年代ページを日付範囲で連続性検証できるようにしたうえで、満州事変、政府・陸軍中央・関東軍の意思決定差、政党内閣の変化、金輸出再禁止と高橋財政、満洲国承認、国際連盟、塘沽停戦協定までを局面単位で扱うactive implementation plan。

年未満への細分化は定型化せず、制度状態・選択肢・外部制約が変わる境界に限る。

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
