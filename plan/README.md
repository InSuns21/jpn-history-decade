# plan

このフォルダには、**現在有効な企画書・実装計画**を置く。

## 長期企画書

- `JPN_HISTORY_DECADE_PLAN.md`

プロジェクト全体の目的・原則を定義する。個別フェーズ完了だけでは `plan_done/` へ移さない。

## 実装計画

- `SHANGHAI_WAR_TO_FALL_IMPLEMENTATION_PLAN.md`

1937年8月13日〜11月12日を対象とし、上海戦開始、8月15日の政府方針変化、9月の戦時財政・資金・輸出入統制、9〜10月の長期戦対応、11月12日の上海占領までを追うactive implementation plan。華北戦線の単純な南下や、上海占領から南京進攻を逆算する叙述を避ける。

次の実装は JH40「1937-08-13〜08-15」。

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
