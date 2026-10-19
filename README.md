# 近現代史24

**「1800年から始める日本史」**を副題に、1800年から現代までの日本史を、社会の仕組みとその変化から読み解くプロジェクトです。

> 歴史を「事件の列」ではなく、社会システムの状態遷移として読む。

**[公開サイト（GitHub Pages）](https://insuns21.github.io/jpn-history-decade/)**

## このサイトについて

政治史を軸に、経済・社会・人口・外交・軍事・交通・技術・文化・地理などを結びつけ、各時代の人々に何が可能で、何が制約になっていたかを描きます。基本は10年単位ですが、変化の大きい時期は年・月・日単位まで粒度を調整します。

主な読者は、日本史を教養として体系的に学びたい人です。中学校の歴史教科書程度の知識を前提に、高校生でも本文から「誰が何をし、何が変わったか」を追える説明を目指します。

掲載内容は次のとおりです。

- **年代史**：各時代の状態と前後の変化
- **構造史・テーマ史**：制度や社会の長期的な変化
- **重要用語・史料・出典**：本文を支える説明と参照先
- **主題地図・図版**：歴史理解に役立つ場合に掲載する資料

## 現在の実装

- Vite / React / TypeScript による GitHub Pages 向け静的サイト
- Markdown + frontmatter の原稿を共通コンテンツモデルへ変換し、テンプレートで表示
- 必要な記事だけ MapLibre GL JS による主題地図を表示
- GitHub Actions による品質チェックと公開サイトへの自動デプロイ

**公開済みの範囲、最新の進捗、監査・CIの記録は [実装状況](docs/IMPLEMENTATION_STATUS.md) を参照してください。** 個別フェーズの計画と結果は `plan/`・`plan_done/` で管理します。

## 開発

Node.js 24 を基準環境としています。

```bash
npm install
npm run dev
npm run check
```

`npm run check` が通常の品質チェックです。開発・検証・公開の詳細は[プロジェクト運用規約](standards/PROJECT_WORKFLOW_STANDARD.md)にまとめています。

## 企画・規約・実装計画

- [全体企画・設計方針](plan/JPN_HISTORY_DECADE_PLAN.md)
- [執筆・出典・用語・内部リンクの規約](standards/CONTENT_AUTHORING_STANDARD.md)
- [図版の出典・権利に関する規約](standards/IMAGE_ASSET_STANDARD.md)
- [地図監査の規約](standards/MAP_AUDIT_STANDARD.md)
- [実装・CI・計画運用の規約](standards/PROJECT_WORKFLOW_STANDARD.md)
- [現在有効な実装計画](plan/README.md) ／ [完了した実装計画](plan_done/)
- [実装状況・監査記録](docs/IMPLEMENTATION_STATUS.md)

AI向けの常時ルールは [SYSTEM_PROMPT.md](SYSTEM_PROMPT.md) に置き、詳細は上記の規約を参照します。
