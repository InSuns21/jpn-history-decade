# plan

このフォルダには、**現在有効な企画書・実装計画**を置く。

## 長期企画書

- `JPN_HISTORY_DECADE_PLAN.md`

プロジェクト全体の目的・原則を定義する。個別フェーズ完了だけでは `plan_done/` へ移さない。

## 実装計画

- `NANKING_ADVANCE_TO_KONOE_STATEMENT_IMPLEMENTATION_PLAN.md`

1937年11月13日〜1938年1月16日を対象とし、上海占領後の南京方面進撃、12月1日の南京攻略正式命令、南京占領、南京での加害、パネー号事件、トラウトマン工作、1938年1月16日の第一次近衛声明までを追うactive implementation plan。

次の実装は JH44「1937-11-13〜11-30」。

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
