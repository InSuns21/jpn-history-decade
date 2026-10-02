# Body Depth Legacy Debt Repayment Plan

Status: in_progress
Created: 2026-10-03

## 目的

`standards/body-depth-baseline.json` に残る、本文厚み監査導入時の未監査債務63件を、本文の意味的な監査を行いながら段階的に解消する。

4,500字は執筆ノルマではなく監査閾値として扱う。各ページは一度ずつ内容を読み、説明すべき主体・仕組み・制約・帰結が不足している場合は本文を増補し、対象期間や論点が本当に狭く必要な説明が閉じている場合だけ理由付き例外へ移行する。

## 原則

- baseline は増やさない。
- baseline 対象ページを触ったら、4,500字以上へ意味のある増補を行うか、`reason + coverage` を伴う正式例外にする。
- summary / snapshot / changes / contemporaryAssumptions / interpretiveCautions の言い換えで水増ししない。
- 隣接年代ですでに説明済みの背景を無用に再掲しない。
- 追加段落は、新しい主体・制度運用・負担・制約・帰結の少なくとも一つを増やす。
- 史実・数値・因果は既存出典または追加確認した信頼できる出典で支える。
- 監査済みページは baseline から削除する。

## バッチ

| Batch | 対象 | 導入時件数 | Status |
|---|---|---:|---|
| 01 | 1800–1830 | 4 | in_progress |
| 02 | 1850–1886 | 10 | pending |
| 03 | 1912–1923 | 3 | pending |
| 04 | 1931–1936 | 9 | pending |
| 05 | 1937 | 12 | pending |
| 06 | 1938 | 10 | pending |
| 07 | 1939 | 8 | pending |
| 08 | 1940-01〜07 | 7 | pending |

合計63件。

## Batch 01 — 1800 / 1810 / 1820 / 1830

監査方針:

- 1800: 財政の貨幣化、市場と領主財政、対外警備の実施負担、情報伝達の行政的意味を補う。
- 1810: 既存制度へ任務を追加する際の費用負担、北方交渉の実務、市場・信用と地域社会の負担を補う。
- 1820: 市場・信用が領主財政へ与える制約をもう一段具体化する。
- 1830: 大塩平八郎の乱周辺の重複表現を整理し、救済資金・地域負担・統治能力の連鎖を補う。

4ページとも、現状は「短い方が適切」というより本文説明の余地が残るため、Batch 01では例外を使わず4,500字以上へ増補する。

### Batch 01 Definition of Done

- [ ] 4ページの本文を個別監査し、意味のある不足のみ増補
- [ ] 4ページとも実質本文4,500字以上
- [ ] 同趣旨段落の重複を残さない
- [ ] 4ページを `body-depth-baseline.json` から削除
- [ ] 隣接接続（1800→1810→1820→1830→次年代）に矛盾を作らない
- [ ] `npm run check` 相当のGitHub Actionsがgreen
- [ ] main反映後のPages deploy green

## 全体 Definition of Done

- [ ] baseline 63件をすべて個別監査済みにする
- [ ] `standards/body-depth-baseline.json` を空にする、または移行措置自体を削除する
- [ ] `npm run validate:body-depth:strict` green
- [ ] `npm run check` green
- [ ] Pages deploy green
- [ ] 本計画を completed とし `plan_done/` へ移動
