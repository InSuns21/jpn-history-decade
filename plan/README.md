# plan

このフォルダには、**現在有効な企画書・実装計画**を置く。

## 長期企画書

- `JPN_HISTORY_DECADE_PLAN.md`

プロジェクト全体の目的・原則を定義する。個別フェーズ完了だけでは `plan_done/` へ移動しない。

## 実装計画

現在のactive plan:

- [CONTROLLED_ECONOMY_TO_TREATY_EXPIRY_IMPLEMENTATION_PLAN.md](./CONTROLLED_ECONOMY_TO_TREATY_EXPIRY_IMPLEMENTATION_PLAN.md)
  - Scope: 1939-09-16〜1940-01-26
  - Progress: phase cut ✅ → JH63 ✅ → JH64 ✅ → JH65 ✅ → map necessity review ✅ no-map → Crosscutting publication gate ✅ → S10 extension ✅ → 次は phase-end audit necessity judgment

直前の1939年5月11日〜9月15日フェーズは [NOMONHAN_TO_EUROPEAN_WAR_IMPLEMENTATION_PLAN.md](../plan_done/NOMONHAN_TO_EUROPEAN_WAR_IMPLEMENTATION_PLAN.md) として完了・archive済み。

現フェーズは、ノモンハン停戦後も続く中国戦争・欧州戦争不介入・国内供給制約を前提に、9月末の総動員行政統轄強化、10月の価格・賃金・電力統制、12月の物資・米穀等の統制拡張、1940年1月の阿部内閣から米内内閣への交代、1月26日の日米通商航海条約失効までを3ページで扱う。条約失効を後年の全面禁輸・石油禁輸・日米開戦と同一視せず、国内統制・内閣・対中戦争・対米関係を別々の状態遷移として追う。

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
