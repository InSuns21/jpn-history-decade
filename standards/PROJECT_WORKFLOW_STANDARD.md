# Project Workflow Standard

実装構成、CI、計画書運用の詳細規約。

## 1. コンテンツと表示の分離

正本は原則 Markdown + frontmatter とする。

```text
Markdown + frontmatter
  → content compiler
  → validated content model
  → active template
  → React / HTML
```

原稿へJSX/CSSを埋め込まない。MDXは表示実装が原稿へ侵入しやすいため原則採用しない。

frontmatterにはページ制御・比較可能な構造データを置き、長文本文はMarkdown bodyへ置く。

テンプレート層が site layout、typography、spacing、color、timeline、table、glossary、map placement、responsive design を所有する。active template の切替地点を一つに寄せ、原稿を変更せず全ページのデザインを交換できる構造を維持する。

## 2. 基本技術

- Vite
- React
- TypeScript
- MapLibre GL JS
- GitHub Pages
- GitHub Actions
- hash routing

不要な依存を増やさない。共通コンポーネントを優先し、年代ごとの重複UIや巨大単一コンポーネントを避ける。

## 3. Content compiler / validation

build前に段階的に以下を検査可能にする。

- frontmatter必須項目
- ID重複
- 年代順・前後参照
- source ID
- glossary ID / link
- map ID
- 地図 provenance / temporalCoverage / geometryConfidence / source / license
- 内部リンク先

詳細な地図検査は `MAP_AUDIT_STANDARD.md` に従う。

## 4. CI

通常の品質ゲートは `npm run check`。

少なくとも、
- Project instruction length validation
- content / glossary / internal-link validation
- ESLint
- TypeScript typecheck
- Vite production build
を含める。

GitHub上で変更した場合はActionsを確認する。公開変更はPages deployも確認する。失敗中に完了扱いしない。

`SYSTEM_PROMPT.md` は **8,000文字以内**を必須とする。詳細ルールを増やす場合は `standards/` または `plan/` へ分離し、SYSTEM_PROMPTへ重複記載しない。

## 5. plan / plan_done

`plan/` には長期企画書と現在activeな実装計画を置く。`plan_done/` には完了済み実装計画を置く。

実装計画を移す条件：
- 計画内Definition of Doneを満たす
- 必要な監査完了
- Status = completed
- CI green
- Pages deploy green

コピーを両方に残さず移動する。長期企画書は個別フェーズ完了では移動しない。完了後に大規模再実装が必要なら、過去計画を書き換えず新規計画を作る。

## 6. 完了報告

実装依頼では提案だけで止めず、可能な範囲で実ファイルまで変更する。完了報告は簡潔に、変更内容、主要ファイル、CI / Pages結果を示す。ユーザーの依頼範囲を勝手に広げない。
