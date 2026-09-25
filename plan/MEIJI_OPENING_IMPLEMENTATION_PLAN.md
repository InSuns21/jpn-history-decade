# 1800年から明治初頭まで — 実装計画

- **Status:** active
- **Scope:** 1800年ごろ〜1873年ごろ
- **Primary goal:** 1800年から明治国家形成の入口までを、社会構造の状態遷移として連続して読める状態にする
- **Parent plan:** [JPN_HISTORY_DECADE_PLAN.md](./JPN_HISTORY_DECADE_PLAN.md)
- **Workspace rules:** [../SYSTEM_PROMPT.md](../SYSTEM_PROMPT.md)

---

## 1. この計画の完成像

現在の1800年代ページの雛形を起点に、

```text
江戸後期
→ 幕藩体制の持続と内部変化
→ 対外環境の急変
→ 幕末政治
→ 幕府の消滅
→ 新政府
→ 廃藩置県
→ 学制・徴兵・地租改正
```

までを、一続きの社会構造の変化として読めるサイトにする。

終点は1868年そのものではなく、**1873年ごろ**とする。

理由は、1868年だけでは政権交代しか見えず、幕藩体制とは異なる国家が、

- 地方行政
- 軍事
- 教育
- 土地・租税
- 戸籍・住民把握

を通じて社会へ入り始めるところまで追えないため。

---

# 2. 最優先アーキテクチャ方針

このフェーズではコンテンツ量を増やす前に、**原稿・歴史データ・サイトデザインを分離する**。

## 2.1 原稿を React / HTML に直書きしない

年代本文は原則 Markdown で管理する。

想定：

```text
content/
├── periods/
│   ├── 1800.md
│   ├── 1810.md
│   ├── 1820.md
│   ├── 1830.md
│   ├── 1840.md
│   ├── 1850.md
│   ├── 1855.md
│   ├── 1860.md
│   ├── 1865.md
│   ├── 1868.md
│   └── 1872.md
├── structures/
│   ├── bakuhan-system.md
│   ├── fiscal-transition.md
│   └── centralization.md
└── themes/
    └── foreign-relations.md
```

本文は Markdown、ページ制御に必要な情報は frontmatter に置く。

例：

```md
---
id: "1800"
startYear: 1800
endYear: 1809
navLabel: "1800"
periodLabel: "1800–1809"
eraLabel: "江戸後期"
status: "draft"
framingQuestion: "幕藩体制はなぜこの時点ではなお機能していたのか"
previousPeriodLabel: "18世紀末"
currentPeriodLabel: "1800年代"
maps: []
---

# 政治

本文……

# 経済

本文……
```

### Markdownを選ぶ理由

- 原稿とReact実装を分離できる
- GitHub上で直接読みやすい
- 歴史本文の差分レビューがしやすい
- テンプレートを交換しても原稿を変更しなくてよい
- 将来別の静的サイトジェネレータへ移行しても原稿を再利用しやすい

### MDXを初期採用しない理由

MDXは便利だが、原稿へReactコンポーネントや表示都合が入りやすい。

このプロジェクトでは、

> 原稿は意味だけを書く  
> 表示方法はテンプレートが決める

という分離を優先する。

必要なインタラクティブ要素は frontmatter / 構造化ブロックから参照する。

---

## 2.2 build時に Markdown を中間表現へコンパイルする

Viteが各Markdownを直接好き勝手に描画する構成にはしない。

ビルド前に、

```text
Markdown + frontmatter
        ↓
content compiler
        ↓
validated content model
        ↓
template renderer
        ↓
React / HTML
        ↓
Vite build
```

とする。

候補構成：

```text
scripts/
└── compile-content.ts

src/
├── generated/
│   └── content.generated.ts
├── content-model/
│   ├── types.ts
│   └── schema.ts
└── ...
```

生成物をGit管理するかは実装時に決めるが、**原稿ファイルを正本**とする。

### compiler の役割

- frontmatter 読み込み
- Markdown parse
- 必須項目 validation
- ID重複チェック
- 年代順チェック
- 前後期間参照チェック
- source ID 整合性確認
- glossary term ID 整合性確認
- glossary internal link 検証
- map ID 整合性確認
- HTML / AST / structured blocks への変換
- テンプレートから利用できる共通モデル生成

---

# 3. テンプレート差し替え方式

## 3.1 テンプレートを一箇所で選択する

想定：

```text
src/
├── templates/
│   ├── types.ts
│   ├── index.ts
│   ├── chronicle/
│   │   ├── SiteLayout.tsx
│   │   ├── HomeTemplate.tsx
│   │   ├── PeriodTemplate.tsx
│   │   ├── ThemeTemplate.tsx
│   │   ├── StructureTemplate.tsx
│   │   └── styles.css
│   └── another-template/
│       └── ...
└── app/
    └── SiteRenderer.tsx
```

`src/templates/index.ts` などで、

```ts
export { chronicleTemplate as activeTemplate } from './chronicle'
```

のように選択する。

別テンプレートへ差し替える場合は、原稿を一切変更せず、

```ts
export { anotherTemplate as activeTemplate } from './another-template'
```

へ変えるだけで、サイト全体のデザインが変わることを目標とする。

---

## 3.2 テンプレートが所有するもの

テンプレート層へ置く：

- サイト全体レイアウト
- header / footer
- typography
- spacing
- color
- card design
- timeline design
- snapshot layout
- change table
- source list
- navigation
- MapLibre の配置方法
- responsive design

原稿側へ置かない。

---

## 3.3 原稿が所有するもの

原稿側へ置く：

- 見出し
- 本文
- 時代区分
- 中心問い
- snapshot の内容
- 変化の内容
- 当時の常識
- 次の時代への論点
- 出典
- 地図参照ID
- 関連テーマ参照

CSS classやJSXは原稿に書かない。

---

## 3.4 semantic component layer

テンプレートと原稿の間に、意味上の部品を定義する。

例：

```text
PeriodHero
Snapshot
HistoricalSection
ChangeComparison
ContemporaryAssumptions
NextIssues
SourceList
ThematicMap
PeriodNavigation
```

これらは「見た目」ではなく「意味」を表す。

テンプレートは同じsemantic componentを異なるレイアウト・スタイルで描画できるようにする。

---

## 3.5 公開テンプレートの文体・表示方針

### 教科書風を基本テンプレートとする

最初の `chronicle` template は、雑誌・ゲームUI・管理画面ではなく、**日本史の教科書・資料集に近い読み味**を基準とする。

- 本文：明朝系
- 見出し・ナビ・表頭：ゴシック系
- 落ち着いた紙面色
- 過度な巨大見出し、英字ラベル、装飾的ダッシュボード表現を抑える
- 長文を読みやすい行間・行長にする
- 表、注、史料、地図を本文の補助教材として配置する

### 公開本文は完成した教材として見せる

公開面には、制作過程を示す情報を原則として表示しない。

非表示対象：

- `draft / review / published` の編集ステータス
- TODO
- 「初期ドラフト」「今後追加予定」
- mapCandidate 等の未実装候補
- 企画書・編集方針・システムプロンプト
- GitHub Pages / CI / compiler 等の制作情報
- 古いテンプレートや移行経緯
- 不要な変更履歴・過去の編集判断

これらは frontmatter、plan、リポジトリ文書として保持してよい。

公開テンプレートは読み手に必要な、

- 歴史本文
- 表・図・地図
- 史料・出典
- 年代・テーマ間ナビ

だけを基本的に描画する。

### 原稿の文体

原稿では、

- 「〜を確認する」
- 「〜を追う」
- 「〜を扱う」
- 「ここでは〜する」

のような執筆メモを、そのまま読者向け本文にしない。

原則として、

> 何が存在したか → どのように機能したか → なぜ重要か

の順に、平明な教科書調で説明する。

---

# 4. Markdown frontmatter の構造化方針

Markdown本文だけでは比較表・snapshot・MapLibre設定が扱いにくいため、構造化情報はfrontmatterへ持たせる。

例：

```yaml
snapshot:
  - label: 政治体制
    value: 幕藩体制・徳川家斉政権
    note: 幕府・藩・朝廷・寺社を分けて見る

changes:
  - label: 対外環境
    before: 北方で接触が増える
    current: 警備・外交対応が政策課題化
    significance: 後世の開国から逆算しない

contemporaryAssumptions:
  - 政治権力は単一の中央政府へ完全には集約されていない

nextIssues:
  - 幕府・諸藩の財政構造はどこまで持続可能だったか

maps:
  - bakuhan-network-1800
```

長文をfrontmatterへ詰め込みすぎない。

原則：

- **文章** → Markdown body
- **ページ制御・比較可能なデータ** → frontmatter

---

# 5. 出典記法

Markdown原稿から出典を追跡可能にする。

初期案として source catalog + source ID 方式を採用する。

例：

```yaml
sources:
  - id: ndl-example
    type: official
    title: 資料名
    institution: 国立国会図書館
    url: ...
```

本文中の参照方法は compiler 実装時に決定する。

候補：

```md
幕府は諸大名にも意見を求めた。[@ndl-example]
```

compiler は、

- 存在しない source ID
- 未使用 source
- 重複ID

を検査できるようにする。

表示はテンプレートが脚注・サイドノート・末尾一覧など自由に変更できる。

---

# 6. MapLibre と原稿の分離

MarkdownへMapLibreのJSXを書かない。

原稿には地図IDだけを書く。

```yaml
maps:
  - treaty-ports-1859
```

地図実体：

```text
src/maps/
├── registry.ts
├── definitions/
│   ├── treaty-ports-1859.ts
│   └── boshin-war.ts
└── data/
    ├── geojson/
    └── pmtiles/
```

地図定義には、

- id
- title
- period
- historical question
- source
- sourceType
- temporalCoverage
- geometryConfidence
- license
- transformations
- initial view
- layers
- legend
- audit state

を持たせる。

詳細な監査基準は [../standards/MAP_AUDIT_STANDARD.md](../standards/MAP_AUDIT_STANDARD.md) に従う。

地図は、

```text
史料・データ
  ↓
provenance metadata
  ↓
加工・変換
  ↓
Data Audit
  ↓
MapLibre style
  ↓
Style Audit
  ↓
実画面
  ↓
Human Visual Audit
  ↓
公開
```

の順で扱う。

テンプレート側は map ID を受け取り、MapLibreをどの見た目で配置するかだけを決める。

---

# 7. 可変時間粒度

完成時のページ単位は次とする。

| ID | 対象 | route | 主題 |
|---|---|---|---|
| JH01 | 1800–1809 | 1800 | 幕藩体制・市場経済・対外窓口 |
| JH02 | 1810–1819 | 1810 | 北方問題・持続する統治 |
| JH03 | 1820–1829 | 1820 | 商品経済・情報・対外警戒 |
| JH04 | 1830–1839 | 1830 | 天保飢饉・統治能力 |
| JH05 | 1840–1849 | 1840 | 天保改革・海防 |
| JH06 | 1850–1854 | 1850 | ペリー来航・和親条約 |
| JH07 | 1855–1859 | 1855 | 通商条約・開港・政治対立 |
| JH08 | 1860–1864 | 1860 | 公武合体・攘夷・対外衝突 |
| JH09 | 1865–1867 | 1865 | 幕府・朝廷・有力藩の再編 |
| JH10 | 1868–1871 | 1868 | 戊辰戦争・新政府・廃藩置県 |
| JH11 | 1872–1873 | 1872 | 学制・徴兵・地租改正 |

ナビゲーションは固定配列ではなく、コンパイル済みコンテンツ一覧から生成する。

---

# 8. JH00 — 共通基盤の再構築

最初に実装する。

## JH00-A Markdown compiler

- `content/periods/1800.md` を作る
- 現在の `src/data/decades/1800.ts` の内容をMarkdown/frontmatterへ移行
- schema validation
- content compile script
- Vite buildへ接続

### 完了条件

- 1800年ページがMarkdown原稿から生成される
- 原稿にReact/CSSが存在しない
- invalid frontmatter でCIが失敗する

---

## JH00-B Template abstraction

現在の、

- SiteShell
- HomePage
- DecadePage
- TimelineNav
- styles.css

に分散しているデザイン責務をテンプレート層へ移す。

### 完了条件

- activeTemplate の切り替え地点が一つ
- 原稿を変更せず別テンプレートを追加可能
- 現在のデザインを最初の `chronicle` template として維持
- テンプレート専用CSSが他テンプレートへ漏れない

---

## JH00-C Period model

現在の `DecadePageData` を可変期間へ対応させる。

最低限：

- routeKey
- startYear
- endYear
- navLabel
- periodLabel
- previousPeriodLabel
- currentPeriodLabel
- eraLabel
- status

比較表の「18世紀末」「1800年代」という固定文字列を除去する。

---

## JH00-D Timeline generalization

固定10年配列を廃止。

コンテンツ一覧から、

```text
1800
1810
1820
1830
1840
1850
1855
1860
1865
1868
1872
```

を描画できること。

前後ページリンクも自動計算する。

---

## JH00-E plan lifecycle

このフェーズで、

- `plan/`
- `plan_done/`

運用をリポジトリ規約へ追加する。

詳細は本計画末尾参照。

---

## JH00-F Glossary / internal-link infrastructure

国公立大学の論述対策として、各年代に重要用語集を持たせる。

想定：

```text
content/
├── glossary/
│   ├── 1800.json
│   ├── 1810.json
│   └── ...
└── periods/
    ├── 1800.md
    └── ...
```

用語は最低限、

- id
- term
- category
- definition
- essayPoint
- requiredForEssay

を持つ。

本文からは明示リンク記法、

```text
[[term:<id>|表示語]]
```

で参照する。

### CI validation

CIで最低限、

- glossary ID 重複
- 不正ID
- 空の定義
- 存在しない用語への本文リンク
- 対応年代の用語集欠落
- requiredForEssay の重要語が本文から一度もリンクされていない
- glossary route / anchor 規約が失われていない

を検出する。

Markdown化後は同じ検査を `content/periods/*.md` に適用する。

### 完了条件

- 1800年代で本文→用語集リンクが実際に動く
- 存在しない用語IDでCIが失敗する
- 必須用語が未使用ならCIが失敗する
- 用語集は公開面に編集情報を出さない
- 用語説明は一問一答ではなく論述上の接続先まで示す

---

## JH00-G Historical map audit infrastructure

地図を追加する前に、監査可能な地図データ構造を作る。

想定：

```text
src/maps/
├── registry.ts
├── schema.ts
├── audit/
│   ├── validateData.ts
│   ├── validateStyle.ts
│   └── auditTypes.ts
├── definitions/
└── data/

standards/
└── MAP_AUDIT_STANDARD.md
```

最低限実装するもの：

- map definition schema
- provenance schema
- temporalCoverage
- geometryConfidence
- source / license metadata
- transformation history
- audit state
- feature ID validation
- geometry / coordinate validation
- map period と data period の整合性検査
- legend と style category の整合性検査
- published map に対する audit state 検査

Human Visual Audit はCIで自動合格させない。

地図ごとに、人間が確認すべき状態を `pending-human` として保持できるようにする。

### 完了条件

- provenance 不足の地図定義が validation error になる
- temporalCoverage 不明のデータを published map へ使用できない
- geometryConfidence が必須
- source / license の欠落を検出できる
- invalid coordinate / duplicate feature ID を検出できる
- legend / layer category の基本的不整合を検出できる
- Human Visual Audit が未完了の地図は published 扱いにならない

---

# 9. JH01 — 1800–1809

既存雛形を最初の公開品質ページへ育てる。

## 中心問い

> 幕藩体制は、市場経済の発達と対外環境の変化を抱えながら、なぜこの時点ではなお統治の枠組みとして機能していたのか。

## 必須テーマ

- 徳川家斉期の幕政
- 幕府・藩・朝廷
- 村・町を通じた統治
- 石高制と貨幣経済
- 商品生産
- 江戸・大坂・京都
- 長崎・対馬・琉球・蝦夷地
- ロシアとの接触
- 街道・海運・飛脚
- 出版・教育・蘭学

## 地図判断

候補：対外窓口・主要都市・交通網。

藩境ポリゴンは高品質な歴史GISデータが見つからない限り急がない。

---

# 10. JH02 — 1810–1819

## 中心問い

> 対外警戒が強まる一方、国内統治の基本構造が大きく変わらなかったのはなぜか。

主題：

- 幕政の継続
- 北方警備
- ロシアとの緊張
- 幕府・藩財政
- 商品経済
- 農村・都市
- 出版・教育

「事件が少ない年代」を薄くしない。

**変わらなかった理由そのものを歴史として扱う。**

原則地図なし。

---

# 11. JH03 — 1820–1829

## 中心問い

> 商品経済・情報流通の拡大は、幕藩体制を弱めたのか、それとも支えたのか。

主題：

- 農村の商品生産
- 在郷商人
- 金融・信用
- 藩財政
- 海運・街道
- 出版
- 海外情報
- 1825年異国船打払令

「市場化＝幕府崩壊」という一本道を避ける。

---

# 12. JH04 — 1830–1839

## 中心問い

> なぜ飢饉は自然現象だけでなく政治・社会秩序の問題へ転化したのか。

主題：

- 天保飢饉
- 米価・流通
- 救済
- 農村困窮
- 都市下層
- 大塩平八郎の乱
- 幕府・藩・地域共同体
- 人口移動
- 地域差

### 地図候補

天保飢饉の地域差。

ただし、被害を精密な全国面データにできる史料がない場合は作らない。

---

# 13. JH05 — 1840–1849

## 中心問い

> 天保の改革は何を変えようとし、なぜ統治構造を決定的には変えられなかったのか。

主題：

- 天保改革
- 幕府財政
- 都市・商業
- 農村政策
- 諸藩改革
- アヘン戦争
- 海外情報
- 異国船政策
- 海防

### 中間監査 A

1800〜1840年代を横断して、

- 同じ説明の重複
- 単純な幕府衰退史観
- 地域差
- 出典形式
- 年代差分
- 前後ナビ

を監査する。

---

# 14. JH06 — 1850–1854

ここから時間粒度を上げる。

## 中心問い

> なぜ外国艦隊の来航が、従来の対外問題とは異なる政治危機になったのか。

主題：

- 海防
- 海外情報
- ペリー来航
- 幕府の政策決定
- 諸大名への意見照会
- 日米和親条約
- 軍事・財政・物流能力

### 優先地図 A1

**幕末初期の来航地点・港・海防**

---

# 15. JH07 — 1855–1859

## 中心問い

> 通商条約と開港は、なぜ外交問題から国内政治の正統性問題へ拡大したのか。

主題：

- 開港準備
- 日米修好通商条約
- 条約勅許
- 朝廷
- 幕政改革
- 安政の大獄
- 貿易
- 貨幣・物価

経済効果は数字と因果を特に慎重に確認する。

### 優先地図 A2

**条約港と国内交通ネットワーク**

---

# 16. JH08 — 1860–1864

## 中心問い

> 幕府・朝廷・有力藩の関係は、なぜ短期間で不安定化したのか。

主題：

- 桜田門外の変
- 公武合体
- 尊王攘夷
- 朝廷政治
- 薩摩・長州等
- 生麦事件
- 薩英戦争
- 下関戦争
- 軍事技術
- 外交と国内政治

「尊王攘夷派」「倒幕派」などを固定された一枚岩として扱わない。

---

# 17. JH09 — 1865–1867

## 中心問い

> 幕府はなぜ消滅したのか。軍事だけでなく、統治・財政・正統性・政治連合の変化から説明できるか。

主題：

- 第二次長州征討
- 薩長関係
- 幕府改革
- 慶応期政治
- 徳川慶喜
- 朝廷
- 大政奉還
- 王政復古までの複数政治構想

「倒幕勢力が最初から明治国家を設計していた」という後知恵を避ける。

### 中間監査 B

1850〜1867を通読して、

- 黒船→倒幕の一本道になっていないか
- 各勢力内部の差
- 時期による立場変化
- 外交・軍事・財政・正統性の接続
- 条約・日付・役職
- 地図時点

を監査。

---

# 18. JH10 — 1868–1871

## 中心問い

> 幕府消滅後、新政府はどうやって全国を直接統治する国家へ変化したのか。

主題：

- 新政府
- 戊辰戦争
- 天皇・朝廷
- 政府機構
- 諸藩
- 版籍奉還
- 身分秩序
- 財政
- 軍事
- 廃藩置県

### 優先地図 A3

**戊辰戦争の空間展開**

過度に精密な作戦図ではなく、政治支配と戦線の移動を見る。

### 優先地図 A4

**廃藩置県前後の行政構造**

歴史境界データの品質確認を必須とする。

不足する場合は主要藩・府県庁所在地の概念地図へ落とす。

---

# 19. JH11 — 1872–1873

## 中心問い

> 新政府は、どの制度によって個人・土地・地域社会を直接把握し始めたのか。

主題：

- 戸籍
- 学制
- 徴兵令
- 地租改正
- 身分秩序
- 政府財政
- 鉄道・郵便
- 地方社会の負担・反応

「近代化」という一語で評価せず、

- 何を把握したのか
- 誰に義務が生じたのか
- 誰が費用を負担したのか
- 公布と実施の時間差
- 地域差

を見る。

---

# 20. 横断コンテンツ

年代ページの重複説明を減らすため、最低4本を候補とする。

## S01 幕藩体制

1800〜1868。

幕府・藩・朝廷・直轄領・村町・財政・軍事・行政。

## S02 石高制・貨幣経済・財政

1800〜1873。

年貢・石高・貨幣・信用・幕府財政・藩財政・地租改正への接続。

## S03 対外窓口から条約港へ

1800〜1860年代。

長崎・対馬・琉球・蝦夷地・外国船・条約港・外交情報。

MapLibreと特に相性がよい。

## S04 幕藩体制から中央集権国家へ

1867〜1873。

新政府・版籍奉還・廃藩置県・戸籍・徴兵・学制・地租改正。

---

# 21. MapLibre 監査・品質保証

すべての地図について、以下の3監査を行う。

## Data Audit

- 出典
- 基準時点
- 空間範囲
- geometry confidence
- 加工履歴
- feature ID
- 座標異常
- 属性欠落
- source / license

を確認する。

機械検査可能な項目は content / map validation に組み込み、CIで落とす。

代表地点・代表境界については、人間によるサンプル照合も行う。

## Style Audit

- 色
- 線種
- symbol
- label
- filter
- zoom condition
- legend

がデータの意味と一致しているか確認する。

色弱配慮、推定境界と確定境界の区別、凡例同期を含む。

## Visual Audit

実際の表示を、

- desktop
- mobile
- initial zoom
- zoom in
- zoom out

で確認する。

自動判定が難しいため、Human Review Checklist を残す。

特に、

- ラベル重なり
- popup
- 凡例
- visual hierarchy
- 背景地図の強さ
- 誤解を招く色・面積・線幅
- 不確実性の見え方
- 現代境界との混同

を確認する。

**Visual Audit が未実施なら地図の実装フェーズを完了扱いにしない。**

---

# 22. MapLibre 優先順位

| 優先度 | 地図 | 判断 |
|---|---|---|
| A | 幕末初期の来航地点・港・海防 | 実装優先 |
| A | 条約港と国内交通 | 実装優先 |
| A | 戊辰戦争 | 実装優先 |
| A/B | 廃藩置県前後 | データ品質次第 |
| B | 1800年の対外窓口・交通 | 有効なら実装 |
| C | 天保飢饉 | 信頼できるデータがある場合のみ |

地図を見送る条件：

- 出典ある地理データがない
- 現代境界からの推測しかできない
- 空間表示による理解増分が小さい
- 精度不明なのに精密なポリゴン表示になる

---

# 23. 各年代の執筆パス

## Pass 1 — Structure

- 中心問い
- snapshot
- sections
- changes
- assumptions
- nextIssues

status = draft

## Pass 2 — Fact audit

確認：

- 年月日
- 人物・役職
- 法令
- 条約
- 数値
- 地理
- 引用

## Pass 3 — Interpretation audit

確認：

- 後知恵
- 単純な衰退史観
- 地域差
- 因果の言い過ぎ
- 幕府・朝廷・藩の一枚岩化
- 制度公布と実施の混同

問題なければ review → published。

---

# 24. 実装順序

```text
JH00 Markdown compiler / template architecture
 ↓
JH01 1800
 ↓
JH02 1810
 ↓
JH03 1820
 ↓
JH04 1830
 ↓
JH05 1840
 ↓
中間監査 A
 ↓
JH06 1850–54
 ↓
JH07 1855–59
 ↓
JH08 1860–64
 ↓
JH09 1865–67
 ↓
中間監査 B
 ↓
JH10 1868–71
 ↓
JH11 1872–73
 ↓
横断コンテンツ
 ↓
全体監査
 ↓
Status: completed
 ↓
plan_done/ へ移動
```

---

# 25. 共通 Definition of Done

各 JH ページは次を満たしたとき完了。

- [ ] Markdown原稿から生成される
- [ ] React/CSSを原稿へ埋め込んでいない
- [ ] 対象ページがルーティングされる
- [ ] snapshot がある
- [ ] 中心問いがある
- [ ] 必要な政治・経済・社会・外交等の節がある
- [ ] 前期間との差分がある
- [ ] 変わらなかったものも確認している
- [ ] 当時の常識がある
- [ ] 次期間への構造的論点がある
- [ ] 重要な史実・日付・数値を確認した
- [ ] 主要記述に出典がある
- [ ] その年代の論述対策用語集がある
- [ ] 必須用語が本文からリンクされている
- [ ] glossary internal-link validation green
- [ ] 後知恵・単純因果・地域差を監査した
- [ ] 地図が必要か判断した
- [ ] 地図がある場合、出典・時点・凡例がある
- [ ] 地図の provenance / temporalCoverage / geometryConfidence がある
- [ ] 地図の Data Audit が passed
- [ ] 地図の Style Audit が passed
- [ ] 地図の Human Visual Audit が passed
- [ ] 地図を desktop / mobile / zoom別に確認した
- [ ] template変更で原稿修正が不要
- [ ] desktop / mobileを確認
- [ ] content compiler validation green
- [ ] `npm run check` green
- [ ] GitHub Actions CI green
- [ ] GitHub Pages deploy green

---

# 26. 本計画の完了条件

1. JH00〜JH11完了
2. 1800〜1873を連続して読める
3. 可変時間粒度が機能
4. 全年代原稿がMarkdown/frontmatterを正本とする
5. テンプレートを一箇所の切替で差し替えられる
6. 原稿にReact/CSS依存がない
7. 各年代に論述対策用語集があり、本文から重要語へリンクできる
8. 用語リンクの存在・利用・参照先をCIで検証できる
9. 高優先度地図を実装、または見送り理由を記録
10. 実装した地図について Data / Style / Visual Audit を完了
11. 地図データの provenance と不確実性を追跡可能にする
12. S01〜S04を実装、または統合判断を記録
13. 全体監査完了
14. CI green
15. Pages deploy green
16. Status を `completed` に更新

完了後、このファイルを

```text
plan/MEIJI_OPENING_IMPLEMENTATION_PLAN.md
```

から

```text
plan_done/MEIJI_OPENING_IMPLEMENTATION_PLAN.md
```

へ移動する。

コピーは残さない。

---

# 27. plan / plan_done 運用

## plan/

現在有効な実装計画を置く。

## plan_done/

完了済み実装計画を置く。

移動条件：

1. 計画内の完了条件を満たす
2. Status = completed
3. CI green
4. Pages deploy green
5. 必要な監査が終了

運用上、完了済み計画は削除せず、**実装時点の設計判断・受入条件の履歴**として保存する。

全体企画書 `JPN_HISTORY_DECADE_PLAN.md` は長期方針なので、個別フェーズが終わっても `plan/` に残す。

---

# 28. 次フェーズ候補

本計画には含めない。

- 1874〜1890：自由民権、西南戦争、憲法体制形成
- 1890〜1910：帝国議会、産業化、対外戦争、帝国形成

まず1873年ごろまでを、薄く広げず比較可能な密度で完成させる。
