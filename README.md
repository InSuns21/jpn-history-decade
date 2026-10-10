# 近現代史24

**「1800年から始める日本史」を副題に、1800年から現代までの日本史を、時代に応じた粒度で社会構造の変化として読むプロジェクト。**

政治史を主軸に、経済・社会・人口・外交・軍事・技術・交通・情報・文化・災害・地理などを横断し、各時代を「その時点の人々から見た社会」として定点観測します。

> 歴史を「事件の列」ではなく、社会システムの状態遷移として読む。

**公開サイト:** [GitHub Pages](https://insuns21.github.io/jpn-history-decade/)

## 現在の実装

- Vite + React + TypeScript による GitHub Pages 向け静的サイト
- hash ベースのルーティング
- 年代史・構造史・テーマ史を Markdown + frontmatter から共通コンテンツモデルへコンパイル
- 必要な記事だけ MapLibre GL JS の主題地図を表示
- GitHub Actions で品質チェックし、`main` 更新時に GitHub Pages へ自動デプロイ
- 1800–1942年9月10日を年代史147ページとして公開済み（横断記事10本＋史料読解1本）。1942年7〜8月フェーズはJH146・A50のCI／Pages検証を経てcompleted／archived、次の本線は1942年9月以降の政治を背骨とする、行政・外交・軍事・物流・食糧・暮らしの状態遷移

フェーズごとの進捗、監査結果、地図判定、CI実績などは [実装状況](docs/IMPLEMENTATION_STATUS.md) に分離しています。

## 対象読者

主対象は、**日本史を教養として体系的に読みたい読者**です。年齢や所属は限定しません。文章の難易度と説明の組み立ては、**高校生が無理なく読み進め、本文だけで「誰が何をし、何が変わったか」を追える水準**を基準にします。前提知識は**中学校の歴史教科書を読んだ程度**とし、高校日本史で詳しく扱う制度・人物・事件・用語は本文内で役割や位置づけを補います。内容の到達点は下げず、大学入試の論述・記述の整理にも利用できる水準を目指します。受験テクニックを公開面の中心には置きません。

## 公開表示の方針

公開サイトは、日本史の**教科書・資料集に近いフォントと文面**を基本とします。

- 本文は明朝系、見出し・ナビ・表見出しはゴシック系
- 平明な教科書調で叙述
- 編集ステータス、TODO、未実装候補、企画書、変更履歴など制作側の情報は公開しない
- 公開面は歴史本文、表・図・地図、史料・出典、ナビゲーションを中心とする
- 歴史理解を助ける図版は Public Domain / CC0 / CC BY を中心に、出典・権利状態を確認して掲載する
- デザイン品質は「上質な教科書・歴史資料集」を軸に、派手さではなくタイポグラフィ、余白、情報階層、レスポンシブ、アクセシビリティの完成度で高水準を目指す

## コンテンツ実装方針

歴史本文は、React/HTMLへ直書きせず **Markdown + frontmatter を正本**とし、build前に共通コンテンツモデルへコンパイルします。表示はテンプレート層へ分離し、`src/templates/index.ts` の active template を差し替えるだけでサイト全体のデザインを変更できる構成です。

- 原稿：Markdown + frontmatter
- コンテンツcompiler：frontmatter validation・用語/出典/地図参照整合性・中間モデル生成
- 表示：React template
- 地図：MarkdownにはMapLibre実装を書かず map ID のみ参照
- MDXは原稿と表示実装が混ざりやすいため初期採用しない

## コンテンツ構成

- **年代史** — 各時代の社会を定点観測
- **テーマ史** — 経済・人口・外交・技術などを時代横断で追跡
- **構造史** — 幕藩体制、中央集権化、都市化、情報速度など長期構造を分析
- **主題地図** — MapLibre による空間構造の可視化
- **史料・出典** — 一次史料、公的統計、研究文献などへの導線
- **重要用語** — 全体で一意な用語辞書を持ち、各年代では必要な語を「定義」と「他の制度・出来事とのつながり」で整理

地図は各年代に機械的に配置せず、藩領、街道、港、鉄道、都市人口、工業地域、災害、戦災、人口移動など、**空間構造そのものが論点になる場合だけ使用**します。

地図を公開する場合は、[地図監査標準](standards/MAP_AUDIT_STANDARD.md) に従い、データ・スタイル・実表示を分けて監査します。出典、基準時点、加工履歴、不確実性を追跡可能にします。既にHuman Visual Audit済みの地図と同じ形式の表示・凡例生成・interactionを再利用し、変更がPointの位置・属性・カテゴリ値だけの地図は、再利用元を記録したうえで個別の見た目監査を省略できます。

## 開発

Node.js 24 を CI の基準環境としています。

```bash
npm install
npm run dev
```

品質チェックは以下です。

```bash
npm run check
```

`check` はSYSTEM_PROMPT文字数、Markdownコンパイルと用語・出典リンク検証、本文厚み、年代ページの図版要否判定、地図監査ガード、ESLint、TypeScript型チェック、Vite本番ビルドを順番に検証します。

用語定義は `content/glossary/terms.json` に一度だけ置き、各年代は `content/glossary/periods/<routeKey>.json`、構造史・テーマ史は `content/glossary/crosscutting/<routeKey>.json` からID参照します。用語リンクは `[[term:<id>|表示語]]` を使い、存在しない参照先や、その年代の中核語が本文から一度も利用されていない状態を content compiler で検出します。辞書を一度だけIDインデックス化し、年代ごとの総当たり検索を避けています。

## GitHub Pages

`.github/workflows/pages.yml` が `main` への push を検知して `dist/` を GitHub Pages にデプロイします。

初回のみリポジトリの **Settings → Pages → Build and deployment → Source** を **GitHub Actions** に設定する必要があります。

公開先は GitHub Pages の project site を想定しています。

- `https://insuns21.github.io/jpn-history-decade/`

Vite の `base` は `./` とし、project site・カスタムドメインのどちらでも扱いやすくしています。

## ワークスペース用システムプロンプト

AI向けの常時ルールは [SYSTEM_PROMPT.md](SYSTEM_PROMPT.md) に置き、**8,000文字以内**をCIで強制します。詳細規約は分離しています。

- [執筆・出典・用語集・内部リンク](standards/CONTENT_AUTHORING_STANDARD.md)
- [歴史図版の権利・出典・表示](standards/IMAGE_ASSET_STANDARD.md)
- [地図監査](standards/MAP_AUDIT_STANDARD.md)
- [実装・CI・plan運用](standards/PROJECT_WORKFLOW_STANDARD.md)

詳細ルールをSYSTEM_PROMPTへ重複記載せず、該当standardを参照する運用です。

## 企画書

詳細な方針・ページ構成・MapLibre 主題地図方針・初期ロードマップ：

- [plan/JPN_HISTORY_DECADE_PLAN.md](plan/JPN_HISTORY_DECADE_PLAN.md)
- 完了済み実装計画は [`plan_done/`](plan_done/) に保存


## 実装計画の運用

- 現在有効な企画・実装計画：[`plan/`](plan/)
- 完了済み実装計画：[`plan_done/`](plan_done/)

実装計画は完了条件・監査・CI・Pages deployを満たした後、Statusを `completed` に変更して `plan/` から `plan_done/` へ移動します。長期企画書は個別フェーズ完了だけでは移動しません。
