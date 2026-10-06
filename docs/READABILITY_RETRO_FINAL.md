# 高校生可読性 遡及監査 — Final Screening

- **Status:** final screening completed
- **Completed:** 2026-10-07
- **Scope:** published 140記事（年代史114・構造史21・テーマ史5）
- **Parent plan:** [HIGH_SCHOOL_READABILITY_RETRO_AUDIT_PLAN.md](../plan_done/HIGH_SCHOOL_READABILITY_RETRO_AUDIT_PLAN.md)
- **Baseline:** [readability-retro-r0-baseline.json](./readability-retro-r0-baseline.json)

---

## 1. 結論

R1〜R11のHuman Readability Audit完了後、PR #340 の `npm run check` 内で `npm run audit:readability` を再実行した。

最終screening結果は次の通り。

- retro inventory: **140**
- current published: **140**
- new-authoring: **0**
- missing baseline paths: **0**
- priority: **high 0 / medium 94 / low 46**

R0 baselineのhigh候補42件は、全wave完了後に **42 → 0** となった。

medium 94件は失敗扱いではない。各waveでHuman Review済みであり、固有名詞・日付・制度名を同時に扱う史実密度、横断記事の比較文、必要な初出用語説明などが主な残存要因である。

---

## 2. R0 baseline / final

| signal | R0 baseline | final |
|---|---:|---:|
| high priority | 42 | **0** |
| medium priority | 89 | 94 |
| low priority | 9 | 46 |
| 100字以上文 | 101 | **58** |
| 120字以上文 | 13 | **3** |
| 分析語先行 | 118 | **22** |
| 広い指示語 | 77 | **9** |
| entity-dense | 904 | 906 |
| comma-dense | 1220 | 1214 |
| first-term-dense | 31 | **17** |

entity-denseは904→906とほぼ横ばいである。今回の目的は固有主体を削ることではなく、抽象語だけで説明せず主体・制度・行為を具体化することだったため、このsignalの増減は品質の良否として扱わない。

---

## 3. final screeningの読み方

今回のscreeningは、公開原稿を機械的に合否判定するCIではなく、Human Review候補を拾うreport-only auditである。

R0〜R11で特に有効だったsignalは次の通り。

- 100字 / 120字以上の長文
- 段落冒頭の分析語
- 「この構造」「この枠組み」「この回路」等の広い指示語
- 一文への初出用語集中
- 人物・組織・日付の高密度
- 読者への読み方指示や仮想的な誤解への反論

このうち、文長・固有主体密度・初出用語密度は史実説明上必要な場合がある。したがって数値をゼロへ近づけること自体は目的にしていない。

一方、high候補は全waveで個別確認し、**unresolved high-priority readability debt = 0** とした。

---

## 4. validation結果

PR #340 の修正後runで、次を確認した。

- `validate:instructions` ✅
- `validate:period-ranges` ✅
- `validate:claim-cautions` ✅ — 140記事
- `validate:body-depth` ✅ — 114年代記事、soft warningのみ
- `validate:period-repetition` ✅ — review warning 0
- `validate:images` ✅
- `compile:content` ✅ — 114 periods / 26 crosscutting / 520 glossary terms
- `validate:maps` ✅ — 30 maps
- `audit:readability` ✅ — high 0
- ESLint ✅
- TypeScript typecheck ✅
- Vite production build ✅
- GitHub Actions CI ✅
- GitHub Actions Quality Checks ✅

body-depthの4500字未満warningはsoft review thresholdであり、文字数合わせの増補は行っていない。

---

## 5. hard CI化の最終判定

新しいreadability hard CIは追加しない。

理由は、残存mediumの大半が史実密度や必要な比較に由来し、機械閾値でfailさせると、固有主体を削る・必要な比較を分断する・具体説明を抽象化するなど逆方向の最適化を誘発するためである。

恒久運用は次の組合せとする。

1. `audit:readability` はreport-onlyで候補抽出。
2. `CONTENT_AUTHORING_STANDARD.md` の「具体 → 仕組み → 抽象」を執筆原則とする。
3. `validate:claim-cautions` で読者指示・否定フレーミング等の意味機能を監視する。
4. high候補や違和感が出た場合だけHuman Reviewで判断する。

---

## 6. 最終状態

- R0 inventory / baseline ✅
- R1 1941-07-03〜12-08 ✅
- R2 1940年 ✅
- R3 1941-01-01〜07-02 ✅
- R4 1937年 ✅
- R5 1938年 ✅
- R6 1939年 ✅
- R7 1931〜1936年 ✅
- R8 1905〜1930年 ✅
- R9 1868〜1904年 ✅
- R10 1800〜1867年 ✅
- R11 構造史21件＋テーマ史5件 ✅
- final screening 140記事 ✅
- unresolved high-priority readability debt = **0**
