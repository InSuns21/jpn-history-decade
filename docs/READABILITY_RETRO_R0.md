# 高校生可読性 R0 inventory / screening baseline

- **Baseline date:** 2026-10-06
- **Content baseline commit:** `bf7dfbbba853f6a60ef1000a62240128063f1e79`
- **対象:** frontmatter `status: published` の公開本文
- **性格:** report-only。候補件数はpass/fail判定でも可読性スコアでもない
- **再現:** `npm run audit:readability`
- **機械可読baseline:** [readability-retro-r0-baseline.json](./readability-retro-r0-baseline.json)

## 1. R0で確定した公開在庫

| 種別 | 件数 |
|---|---:|
| 年代史 | 114 |
| 構造史 | 21 |
| テーマ史 | 5 |
| **合計** | **140** |

PLAN作成時の概算は139原稿（構造史20件）だったが、R0でfrontmatterを実読した結果、公開構造史は21件で、遡及監査の基準在庫は**140原稿**と確定した。以後この140件をretro inventoryとして固定し、PLAN開始後に追加された公開原稿はnew-authoringとして分離する。

## 2. screening baseline

| 優先度 | 件数 |
|---|---:|
| high | 42 |
| medium | 89 |
| low | 9 |

high / medium / low は、人間レビューの順番を決める補助ラベルである。highだから文章が不合格という意味ではなく、複数signalが重なっているため先に読む価値が高い、という意味だけを持つ。

### signal件数

| signal | before件数 |
|---|---:|
| 100字以上の文 | 101 |
| 120字以上の文 | 13 |
| summary・framingQuestion・段落冒頭の分析語 | 118 |
| 「この構造」「この枠組み」等の広い指示語 | 77 |
| 同一文への人物・組織・制度・日付の集中 | 904 |
| 読点が4個以上ある文 | 1220 |
| 同一文で初出用語が3件以上 | 31 |

文長、読点密度、固有名詞・制度名の集中は、それ単独ではhighへ上げない。highは長文と抽象語先行、広い指示語、初出用語集中など、認知負荷の異なるsignalが重なる場合を中心に付ける。これにより初回試行のhigh 80件から、校正後はhigh 42件へ絞った。

## 3. wave inventory

### R1 — 23件

`1941-07-03` / `1941-07-18` / `1941-07-25` / `1941-08-01` / `1941-08-17` / `1941-08-30` / `1941-09-06` / `1941-09-13` / `1941-09-20` / `1941-09-25` / `1941-10-12` / `1941-10-18` / `1941-10-23` / `1941-10-27` / `1941-10-31` / `1941-11-06` / `1941-11-14` / `1941-11-20` / `1941-11-25` / `1941-11-28` / `1941-12-02` / `1941-12-06` / `1941-12-08`

### R2 — 14件

`1940-01-01` / `1940-01-27` / `1940-03-07` / `1940-03-30` / `1940-05-10` / `1940-06-29` / `1940-07-22` / `1940-08-01` / `1940-08-31` / `1940-09-27` / `1940-10-12` / `1940-10-22` / `1940-12-01` / `1940-12-14`

### R3 — 13件

`1941-01-01` / `1941-01-22` / `1941-02-01` / `1941-02-25` / `1941-03-12` / `1941-04-01` / `1941-04-14` / `1941-04-23` / `1941-05-12` / `1941-06-01` / `1941-06-10` / `1941-06-22` / `1941-06-25`

### R4 — 12件

`1937-01` / `1937-06` / `1937-07-07` / `1937-07-11` / `1937-07-27` / `1937-08-13` / `1937-08-16` / `1937-09-11` / `1937-10-26` / `1937-11-13` / `1937-12-01` / `1937-12-14`

### R5 — 10件

`1938-01-01` / `1938-01-17` / `1938-02-24` / `1938-04-01` / `1938-05-20` / `1938-06-18` / `1938-07-27` / `1938-09-30` / `1938-10-28` / `1938-12-22`

### R6 — 8件

`1939-01-05` / `1939-02-10` / `1939-05-11` / `1939-06-14` / `1939-07-26` / `1939-08-23` / `1939-09-16` / `1939-10-18`

### R7 — 9件

`1931-09` / `1931` / `1932-09` / `1932` / `1933-06` / `1934-07` / `1935-08` / `1936-02` / `1936-03`

### R8 — 7件

`1906` / `1912` / `1915` / `1919` / `1923` / `1926` / `1929`

### R9 — 9件

`1868` / `1872` / `1874` / `1878` / `1882` / `1886` / `1891` / `1896` / `1901`

### R10 — 9件

`1800` / `1810` / `1820` / `1830` / `1840` / `1850` / `1855` / `1860` / `1865`

### R11 — 構造史21件・テーマ史5件

**構造史:** `content/structures/bakuhan-system.md` / `content/structures/centralization.md` / `content/structures/depression-social-burdens.md` / `content/structures/economic-mobilization-organization-1940-1941.md` / `content/structures/elections-nonparty-cabinets-1931-1938.md` / `content/structures/external-rule-institutions.md` / `content/structures/fiscal-crisis-managed-currency.md` / `content/structures/fiscal-state-building.md` / `content/structures/fiscal-transition.md` / `content/structures/indochina-thailand-access-mediation.md` / `content/structures/industrial-social-burdens.md` / `content/structures/kwantung-smr-rights.md` / `content/structures/local-administration-participation.md` / `content/structures/manchukuo-occupied-china-rule.md` / `content/structures/mass-politics-universal-suffrage.md` / `content/structures/party-dissolution-yokusankai-1940-1941.md` / `content/structures/party-government-1890-1918.md` / `content/structures/political-participation-channels.md` / `content/structures/wartime-allocation-controls.md` / `content/structures/wartime-boom-urban-life.md` / `content/structures/wartime-finance-1937.md`

**テーマ史:** `content/themes/akimaru-total-war-research-1941.md` / `content/themes/anti-military-speech-1940.md` / `content/themes/foreign-gateways.md` / `content/themes/tokyo-washington-moscow-intelligence-1941.md` / `content/themes/us-japan-negotiation-economic-pressure-1941.md`

## 4. high-priority review candidates

### R1 — 10件

- `1941-08-30` — 1941年8月30日〜9月5日の日本
- `1941-09-06` — 1941年9月6日〜9月12日の日本
- `1941-10-18` — 1941年10月18日〜10月22日の日本
- `1941-10-23` — 1941年10月23日〜10月26日の日本
- `1941-10-31` — 1941年10月31日〜11月5日の日本
- `1941-11-06` — 1941年11月6日〜11月13日の日本
- `1941-11-14` — 1941年11月14日〜11月19日の日本
- `1941-11-25` — 1941年11月25日〜11月27日の日本
- `1941-11-28` — 1941年11月28日〜12月1日の日本
- `1941-12-02` — 1941年12月2日〜12月5日の日本

### R2 — 6件

- `1940-01-27` — 1940年1月27日〜3月6日の日本
- `1940-03-07` — 1940年3月7日〜3月29日の日本
- `1940-07-22` — 1940年7月22日〜7月31日の日本
- `1940-09-27` — 1940年9月27日〜10月11日の日本
- `1940-10-12` — 1940年10月12日〜10月21日の日本
- `1940-10-22` — 1940年10月22日〜11月30日の日本

### R3 — 5件

- `1941-01-01` — 1941年1月1日〜1月21日の日本
- `1941-03-12` — 1941年3月12日〜3月31日の日本
- `1941-04-01` — 1941年4月1日〜4月13日の日本
- `1941-06-10` — 1941年6月10日〜6月21日の日本
- `1941-06-25` — 1941年6月25日〜7月2日の日本

### R4 — 3件

- `1937-07-27` — 1937年7月27日〜8月12日の日本
- `1937-08-16` — 1937年8月16日〜9月10日の日本
- `1937-12-01` — 1937年12月1日〜12月13日の日本

### R5 — 3件

- `1938-01-01` — 1938年1月1日〜1月16日の日本
- `1938-01-17` — 1938年1月17日〜2月23日の日本
- `1938-02-24` — 1938年2月24日〜3月31日の日本

### R6 — 1件

- `1939-06-14` — 1939年6月14日〜7月25日の日本

### R7 — 1件

- `1931` — 1931年1月1日〜9月17日の日本

### R8 — 1件

- `1923` — 1923–1925年の日本

### R9 — 1件

- `1872` — 1872–1873年の日本

### R10 — 4件

- `1800` — 1800–1809年の日本
- `1810` — 1810–1819年の日本
- `1830` — 1830–1839年の日本
- `1850` — 1850–1854年の日本

### R11 — 7件

- `fiscal-transition` — 幕藩財政と貨幣経済
- `manchukuo-occupied-china-rule` — 満洲国・中国占領地――国家形式と実効支配
- `party-dissolution-yokusankai-1940-1941` — 政党解体と翼賛体制
- `wartime-allocation-controls` — 戦時統制と資源配分
- `foreign-gateways` — 対外窓口から条約港へ
- `tokyo-washington-moscow-intelligence-1941` — 1941年の情報戦――東京・ワシントン・モスクワ
- `us-japan-negotiation-economic-pressure-1941` — 日米交渉と経済圧力――交渉余地はどう狭まったか

## 5. 運用上の注意

- このbaselineは文章を短くする目標値ではない。screening値を下げるためだけの機械分割・語彙置換はしない。
- R1〜R11では、highを先に読むが、medium / lowも各waveのHuman Readability Audit対象から外さない。
- 修正後のbefore / after比較では同じsignal定義を使う。数値が改善しても、史実・制度差・因果・用語導線が痩せた場合は改善扱いにしない。
- baseline後に追加された公開原稿は通常の新規執筆DoDで扱い、この遡及負債140件へ混ぜない。
