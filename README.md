# jpn-history-decade

**1800年から現代までの日本史を、10年単位を基本に社会構造の変化として読むプロジェクト。**

政治史を主軸に、経済・社会・人口・外交・軍事・技術・交通・情報・文化・災害・地理などを横断し、各時代を「その時点の人々から見た社会」として定点観測します。

> 歴史を「事件の列」ではなく、社会システムの状態遷移として読む。

## 現在の実装

- Vite + React + TypeScript
- GitHub Pages を前提とした静的サイト
- Pages の直リンク問題を避ける hash ベースのルーティング
- 年代ページを Markdown + frontmatter からコンパイルし、共通コンテンツモデルで描画
- MapLibre GL JS を依存に追加し、必要な記事だけ主題地図を差し込める構成
- 1800年代ページの初期雛形
- GitHub Actions による lint / typecheck / build CI
- `main` 更新時の GitHub Pages 自動デプロイ

## 対象読者

主対象は、**日本史を教養として体系的に読みたい読者**です。事件暗記より、制度・経済・社会・地理などのつながりを理解できる内容を優先します。高校日本史程度の知識があれば読み進められ、結果として大学入試の論述・記述の整理にも利用できる水準を目指しますが、受験テクニックを公開面の中心には置きません。

## 公開表示の方針

公開サイトは、日本史の**教科書・資料集に近いフォントと文面**を基本とします。

- 本文は明朝系、見出し・ナビ・表見出しはゴシック系
- 平明な教科書調で叙述
- 編集ステータス、TODO、未実装候補、企画書、変更履歴など制作側の情報は公開しない
- 公開面は歴史本文、表・図・地図、史料・出典、ナビゲーションを中心とする

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

地図を公開する場合は、[地図監査標準](standards/MAP_AUDIT_STANDARD.md) に従い、データ・スタイル・実表示を分けて監査します。出典、基準時点、加工履歴、不確実性を追跡可能にし、ヴィジュアル判断が自動化しにくい箇所は人間による確認項目として残します。

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

`check` はSYSTEM_PROMPT文字数、Markdownコンパイルと用語・出典リンク検証、地図監査ガード、ESLint、TypeScript型チェック、Vite本番ビルドを順番に検証します。

用語定義は `content/glossary/terms.json` に一度だけ置き、各年代は `content/glossary/periods/<routeKey>.json` からID参照します。用語リンクは `[[term:<id>|表示語]]` を使い、存在しない参照先や、その年代の中核語が本文から一度も利用されていない状態を content compiler で検出します。辞書を一度だけIDインデックス化し、年代ごとの総当たり検索を避けています。

## GitHub Pages

`.github/workflows/pages.yml` が `main` への push を検知して `dist/` を GitHub Pages にデプロイします。

初回のみリポジトリの **Settings → Pages → Build and deployment → Source** を **GitHub Actions** に設定する必要があります。

公開先は GitHub Pages の project site を想定しています。

- `https://insuns21.github.io/jpn-history-decade/`

Vite の `base` は `./` とし、project site・カスタムドメインのどちらでも扱いやすくしています。

## ワークスペース用システムプロンプト

AI向けの常時ルールは [SYSTEM_PROMPT.md](SYSTEM_PROMPT.md) に置き、**8,000文字以内**をCIで強制します。詳細規約は分離しています。

- [執筆・出典・用語集・内部リンク](standards/CONTENT_AUTHORING_STANDARD.md)
- [地図監査](standards/MAP_AUDIT_STANDARD.md)
- [実装・CI・plan運用](standards/PROJECT_WORKFLOW_STANDARD.md)

詳細ルールをSYSTEM_PROMPTへ重複記載せず、該当standardを参照する運用です。

## 企画書

詳細な方針・ページ構成・MapLibre 主題地図方針・初期ロードマップ：

- [plan/JPN_HISTORY_DECADE_PLAN.md](plan/JPN_HISTORY_DECADE_PLAN.md)


## 実装計画の運用

- 現在有効な企画・実装計画：[`plan/`](plan/)
- 完了済み実装計画：[`plan_done/`](plan_done/)

実装計画は完了条件・監査・CI・Pages deployを満たした後、Statusを `completed` に変更して `plan/` から `plan_done/` へ移動します。長期企画書は個別フェーズ完了だけでは移動しません。
