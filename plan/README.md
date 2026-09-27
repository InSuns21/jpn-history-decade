# plan

このフォルダには、**現在有効な企画書・実装計画**を置く。

## 長期企画書

- `JPN_HISTORY_DECADE_PLAN.md`

プロジェクト全体の目的・原則を定義する。個別フェーズ完了だけでは `plan_done/` へ移さない。

## 実装計画

- `TAISHO_MASS_POLITICS_IMPLEMENTATION_PLAN.md`

1912〜1925年を対象とし、大正政変、第一次世界大戦、戦時経済、米騒動、原敬内閣、植民地統治、ワシントン体制、関東大震災、普通選挙法・治安維持法までを扱うactive implementation plan。

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
