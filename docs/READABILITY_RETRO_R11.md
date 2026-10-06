# R11 — 構造史・テーマ史 高校生可読性 Human Readability Audit

- **Status:** completed
- **Completed:** 2026-10-07
- **Scope:** 構造史21件 + テーマ史5件 = 26件
- **Parent plan:** [HIGH_SCHOOL_READABILITY_RETRO_AUDIT_PLAN.md](../plan/HIGH_SCHOOL_READABILITY_RETRO_AUDIT_PLAN.md)
- **Baseline:** [readability-retro-r0-baseline.json](./readability-retro-r0-baseline.json)

---

## 1. 結論

構造史21件・テーマ史5件を全件Human Readability Auditし、26件すべてを実修正した。

R0でhigh候補だった7件は **high 7 → 0** となった。100字以上文は33→17、120字以上文は6→2、分析語先行は10→7、広い指示語は11→3、first-term-denseは7→4となった。

横断記事は年代史より「構造」「制度」「権限」「比較」を扱う必要があるため、抽象語そのものは削っていない。主な修正は、本文の主語を「この構造」「この回路」「比較軸」から、幕府・藩・議会・政党・軍・総督府・現地政府・行政命令・外交交渉などの具体的な主体・制度へ戻すことだった。

また、「〜ではない」「〜だけで読まない」「〜と理解すると誤る」といった仮想読者への反論が主文になっていた箇所を、実際の制度差・主体・権限・結果を先に示す肯定文へ置き換えた。

---

## 2. screening before / after

screeningはreport-onlyのレビュー補助であり、pass/fail基準ではない。

| signal | R0 before | R11 after |
|---|---:|---:|
| high priority | 7 | 0 |
| medium priority | 13 | 17 |
| low priority | 6 | 9 |
| 100字以上文 | 33 | 17 |
| 120字以上文 | 6 | 2 |
| 分析語先行 | 10 | 7 |
| 広い指示語 | 11 | 3 |
| entity-dense | 77 | 75 |
| comma-dense | 205 | 195 |
| first-term-dense | 7 | 4 |

medium候補17件は全件人間確認済みである。横断記事では、制度差を一文で比較する箇所、複数主体を同じ時点で並べる箇所、定着した制度名を初出でまとめて示す箇所がmediumへ残りやすい。意味上必要な比較をsignal低下のためだけに分解しない。

entity-denseは77→75、comma-denseは205→195と小幅な変化にとどまった。抽象語を具体的な主体・制度名へ戻す修正では、固有主体の密度が下がらない場合もあるため、数値最小化は成果指標にしていない。

---

## 3. 26記事の結果

| routeKey / file | R0 | R11 | Human Audit |
|---|---|---|---|
| bakuhan-system | medium | medium | fixed / reviewed |
| centralization | medium | medium | fixed / reviewed |
| depression-social-burdens | medium | medium | fixed / reviewed |
| economic-mobilization-organization-1940-1941 | low | low | fixed |
| elections-nonparty-cabinets-1931-1938 | medium | medium | fixed / reviewed |
| external-rule-institutions | medium | medium | fixed / reviewed |
| fiscal-crisis-managed-currency | medium | medium | fixed / reviewed |
| fiscal-state-building | low | low | fixed |
| fiscal-transition | high | medium | fixed / reviewed |
| indochina-thailand-access-mediation | low | low | fixed |
| industrial-social-burdens | medium | medium | fixed / reviewed |
| kwantung-smr-rights | low | low | fixed |
| local-administration-participation | medium | medium | fixed / reviewed |
| manchukuo-occupied-china-rule | high | medium | fixed / reviewed |
| mass-politics-universal-suffrage | medium | medium | fixed / reviewed |
| party-dissolution-yokusankai-1940-1941 | high | medium | fixed / reviewed |
| party-government-1890-1918 | medium | low | fixed |
| political-participation-channels | low | low | fixed |
| wartime-allocation-controls | high | low | fixed |
| wartime-boom-urban-life | medium | medium | fixed / reviewed |
| wartime-finance-1937 | low | low | fixed |
| akimaru-total-war-research-1941 | medium | medium | fixed / reviewed |
| anti-military-speech-1940 | medium | medium | fixed / reviewed |
| foreign-gateways | high | medium | fixed / reviewed |
| tokyo-washington-moscow-intelligence-1941 | high | low | fixed |
| us-japan-negotiation-economic-pressure-1941 | high | medium | fixed / reviewed |

---

## 4. 代表的な修正

### 4.1 幕藩制・財政・国家形成 — 反論ではなく制度の動作から書く

- `bakuhan-system` は「一元的な中央国家ではない」という否定形から入らず、幕府・藩・朝廷・寺社・村町がどの権限を担ったかを先に置いた。
- `fiscal-transition` は「石高制だから米だけで動いた、ではない」という反論を外し、年貢米の換金、商人信用、米価・相場・借入条件が領主財政へ作用する仕組みを直接説明した。
- `centralization` と `fiscal-state-building` は、中央集権・地租・中央銀行・公債を抽象的な「国家能力」だけでまとめず、任命・徴税・発券・信用調達の権限がどこへ集まったかを具体化した。
- `local-administration-participation` は「自治か官治か」という読者への二択をやめ、地方長の選任、議決、執行、財源、中央監督という実際の権限配分へ書き戻した。

### 4.2 政治参加 — 「回路」を選挙・議会・政党・人事へ戻す

- `political-participation-channels`、`party-government-1890-1918`、`mass-politics-universal-suffrage` は、建白・地方議会・政党・普通選挙・労働運動・治安法制が何を可能にしたかを具体的に分けた。
- `elections-nonparty-cabinets-1931-1938` は「権力回路」を、首相選定、軍部大臣人事、統帥、議会の予算・法律審議という別々の権限と手続へ置き換えた。
- `party-dissolution-yokusankai-1940-1941` は公開本文に露出していた「S05の比較軸」「政党回路」「組織回路」を外し、候補者選定、党議、議会内交渉、翼賛会の地方組織、行政協力の実態を直接示した。

### 4.3 対外支配 — 地図上の色より、主権・行政・軍事・外交承認を分ける

- `external-rule-institutions`、`kwantung-smr-rights`、`manchukuo-occupied-china-rule`、`indochina-thailand-access-mediation` は、領土編入、租借、会社権益、現地政府、軍事駐留、調停・保障を別の制度として具体化した。
- 満洲国・冀東・冀察・華北臨時政府・維新政府・南京政府では、政府形式、地域行政、日本軍の強制力、外交承認が一致しないことを、各主体の権限として説明した。
- 北部・南部仏印では、フランス側の植民地行政を残したまま日本軍の通過・駐留・基地利用が重なったことを明示し、仏タイ調停・保障とは別の権限として整理した。

### 4.4 戦時経済 — 法令名の列から、家計・企業の選択条件へつなぐ

- `wartime-finance-1937`、`wartime-allocation-controls`、`economic-mobilization-organization-1940-1941` は、税・公債・資金・外貨・物資・労働力・価格・賃金・設備利用が段階的に統制対象へ入ったことを、企業・家計の選択条件へ接続して説明した。
- `wartime-allocation-controls` では、初出制度3件以上を一文へ集中させていた箇所を分割した。制度名は削らず、制度ごとの対象を追いやすくした。
- `depression-social-burdens` と `wartime-boom-urban-life` は、恐慌・好況を一語で評価せず、金融支援、企業利益、賃金、物価、農村所得、家計負担へ分けて負担配分を示した。

### 4.5 テーマ史 — 通説批判型の入口から、史料・主体・政策条件へ

- `foreign-gateways` は「鎖国＝完全断絶」という仮想誤解から始めず、長崎・対馬・薩摩／琉球・松前／蝦夷地の四つの口と管理制度から始めた。
- `anti-military-speech-1940` は「反戦か戦争支持か」という二択を入口にせず、斎藤隆夫が日中戦争の目的・終結条件・汪兆銘政権・国民負担・内閣責任をどう問うたかを史料順に置いた。
- `akimaru-total-war-research-1941` は「日本は負けると知っていたか」という通説批判型の見出しをやめ、秋丸機関と総力戦研究所の分析機能と、内閣・軍中央が持つ政策決定権を分けて説明した。
- `tokyo-washington-moscow-intelligence-1941` は、東京の外交訓令、米側のMAGIC、モスクワの人的諜報、軍事企図の秘匿を具体的な情報経路として説明した。長文と「この構造／この配置」も分割・具体化した。
- `us-japan-negotiation-economic-pressure-1941` は「経済制裁→自動開戦」という仮想反論を主文から外し、軍事的位置、経済措置、政策要求、作戦準備、国内意思決定、期限設定がどう重なって合意可能な組合せを狭めたかを肯定文で示した。

---

## 5. Human Auditで確認したこと

26件すべてについて次を確認した。

- summary / framingQuestionから、比較する制度・主体・時期を追える。
- 横断記事の中心問い・比較軸は維持し、年代記事の要約へ戻していない。
- 年代記事を未読でも、比較対象となる主体・制度の役割が本文から取れる。
- 「構造」「制度」「権限」「政策分岐」などの分析語は、具体説明の代用にしていない。
- 「このページの比較軸」「この横断記事では」「S05」「S13」など制作側・編集側の語を公開本文の主線から除いた。
- 仮想読者への反論を削っても成立する肯定的な史実説明を先に置いた。
- 長い正式名称や制度差の比較に由来するmedium signalは、人間確認のうえ必要な箇所を残した。

R11は横断記事のみを修正しており、年代ページの境界・隣接接続には変更を加えていない。各横断記事のrelatedPeriodsと年代本文の史実関係を崩す変更も行っていない。

---

## 6. 史実・出典・リンクへの影響

このwaveは可読性監査であり、新規歴史調査ではない。

- 新しい史実主張: 原則追加なし。既存の史実・引用・出典で支えられた内容を分割・具体化した。
- 既存の実質的な史実主張: 削除なし。
- source ID / URL: 意図的な変更なし。
- glossary term ID: 意図的な変更なし。
- relatedPeriods / routeKey: 変更なし。
- 地図・図版: 変更なし。

content compiler、claim/caution、内部リンク等の既存validationで機械的整合性を再確認する。

---

## 7. hard CI化の最終判定

**新しいhard CIは追加しない。**

R0〜R11で使った文長・分析語・広い指示語・entity density・初出用語集中は、人間レビュー候補を拾うreport-only signalとして有効だった。一方、R11のmedium候補には、横断比較に必要な制度名・主体名の密度や、意図的な比較文が多数含まれる。

これらをhard failureへすると、意味上必要な比較を分割したり、具体的な主体名を抽象語へ戻したりして「scoreを下げる」誘因が生じる。既存の `audit:readability` をreport-onlyで残し、恒久的な品質ゲートはCONTENT_AUTHORING_STANDARDの「具体 → 仕組み → 抽象」とHuman Review、既存claim/caution validationで担う。

---

## 8. 完了チェック

- [x] 構造史21件を全件Human Readability Audit
- [x] テーマ史5件を全件Human Readability Audit
- [x] 26件すべてを実修正
- [x] R0 high候補 7 → 0
- [x] 100字以上文 33 → 17
- [x] 120字以上文 6 → 2
- [x] 分析語先行 10 → 7
- [x] 広い指示語 11 → 3
- [x] first-term-dense 7 → 4
- [x] high候補は再走査で0件
- [x] medium候補17件は全件Human Review済み
- [x] hard CI追加は不要と判定
- [x] 史実・source / term参照を維持する方針で修正
