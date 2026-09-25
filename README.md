# jpn-history-decade

**1800年から現代までの日本史を、10年単位を基本に社会構造の変化として読むプロジェクト。**

政治史を主軸に、経済・社会・人口・外交・軍事・技術・交通・情報・文化・災害・地理などを横断し、各時代を「その時点の人々から見た社会」として定点観測します。

> 歴史を「事件の列」ではなく、社会システムの状態遷移として読む。

## 現在の実装

- Vite + React + TypeScript
- GitHub Pages を前提とした静的サイト
- Pages の直リンク問題を避ける hash ベースのルーティング
- 年代ページを共通データスキーマから描画
- MapLibre GL JS を依存に追加し、必要な記事だけ主題地図を差し込める構成
- 1800年代ページの初期雛形
- GitHub Actions による lint / typecheck / build CI
- `main` 更新時の GitHub Pages 自動デプロイ

## コンテンツ構成

- **年代史** — 各時代の社会を定点観測
- **テーマ史** — 経済・人口・外交・技術などを時代横断で追跡
- **構造史** — 幕藩体制、中央集権化、都市化、情報速度など長期構造を分析
- **主題地図** — MapLibre による空間構造の可視化
- **史料・出典** — 一次史料、公的統計、研究文献などへの導線

地図は各年代に機械的に配置せず、藩領、街道、港、鉄道、都市人口、工業地域、災害、戦災、人口移動など、**空間構造そのものが論点になる場合だけ使用**します。

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

`check` は ESLint、TypeScript の型チェック、Vite の本番ビルドを順番に実行します。

## GitHub Pages

`.github/workflows/pages.yml` が `main` への push を検知して `dist/` を GitHub Pages にデプロイします。

初回のみリポジトリの **Settings → Pages → Build and deployment → Source** を **GitHub Actions** に設定する必要があります。

公開先は GitHub Pages の project site を想定しています。

- `https://insuns21.github.io/jpn-history-decade/`

Vite の `base` は `./` とし、project site・カスタムドメインのどちらでも扱いやすくしています。

## 企画書

詳細な方針・ページ構成・MapLibre 主題地図方針・初期ロードマップ：

- [plan/JPN_HISTORY_DECADE_PLAN.md](plan/JPN_HISTORY_DECADE_PLAN.md)
