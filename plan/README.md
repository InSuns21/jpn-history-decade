# plan

このフォルダには、**現在有効な企画書・実装計画**を置く。

## 長期企画書

- `JPN_HISTORY_DECADE_PLAN.md`

プロジェクト全体の目的・原則を定義する。個別フェーズ完了だけでは `plan_done/` へ移さない。

## 実装計画

- `EARLY_SHOWA_PARTY_FINANCE_IMPLEMENTATION_PLAN.md`

1926〜1930年を対象とし、金融恐慌、最初の男子普通選挙、治安維持法改正、山東・満洲をめぐる政策、浜口内閣、世界恐慌、金輸出解禁、ロンドン海軍軍縮条約までを扱うactive implementation plan。

1931年はこの計画へ含めず、満州事変以後の変化速度に応じて次フェーズで高解像度化を検討する。

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
