# Historical Map Audit Standard

この文書は、`jpn-history-decade` に掲載する MapLibre 主題地図について、**地図データの信頼性・スタイルの妥当性・最終的なヴィジュアル品質**を一定水準以上に保つための共通監査基準を定める。

地図は本文の装飾ではなく、歴史的主張を空間的に表現する資料である。

そのため、

> **地図が表示できること** と **歴史地図として公開できること** は別である。

---

## 1. 監査の3層

すべての公開地図は、次の3層を分けて監査する。

### A. Data Audit

「表示している場所・境界・属性・時点は信頼できるか」を確認する。

### B. Style Audit

「データの意味とMapLibreの表現が一致しているか」を確認する。

### C. Visual Audit

「実際の画面で、読者が誤読せず理解できるか」を確認する。

Visual Audit は完全自動化が難しいため、機械判定できない項目は **human review required** として残す。

---

# 2. 地図データの provenance を必須にする

GeoJSON / CSV / PMTiles などの地図データには、必ず由来を追跡できるメタデータを持たせる。

最低限、以下を記録する。

```ts
interface MapDataProvenance {
  sourceId: string
  title: string
  institution?: string
  author?: string
  url?: string
  sourceType: 'primary' | 'official' | 'research' | 'derived'
  license?: string

  temporalCoverage: {
    from?: string
    to?: string
    basis: 'instant' | 'range' | 'approximate' | 'unknown'
    note?: string
  }

  spatialCoverage?: string

  geometryConfidence:
    | 'verified'
    | 'derived'
    | 'approximate'
    | 'schematic'

  transformations?: string[]
  notes?: string
}
```

### sourceType

- `primary` — 同時代史料、古地図、原史料
- `official` — 公的機関が公開するデータ
- `research` — 研究機関、論文、学術プロジェクト
- `derived` — 上記資料をもとに本サイト側で生成・変換したデータ

`derived` の場合は、元資料への source ID を必須とする。

---

# 3. 歴史地図固有の信頼性ルール

## 3.1 現代境界を過去の境界として代用しない

現代の、

- 都道府県境
- 市区町村境
- 国境
- 海岸線

を、そのまま歴史時点の境界として扱わない。

便宜的に使用する場合は、

- 現代境界であること
- 何のために便宜使用しているか
- 歴史的境界ではないこと

を明示する。

---

## 3.2 偽の精密さを避ける

史料が「この地域周辺」程度しか示さない場合に、精密な一点・線・ポリゴンを作らない。

不確実性に応じて、

- point → approximate point
- polygon → approximate area
- line → schematic route

などへ表現を落とす。

`geometryConfidence` は公開地図定義から参照可能にする。

---

## 3.3 藩領を単純な面として扱わない

江戸期の藩領は飛地・相給・幕府領・旗本領等を含み、単純な連続ポリゴンでは表しにくい。

藩領地図を作る場合は、

- データがどの単位を表すか
- 飛地を含むか
- 天領・旗本領をどう扱うか
- 基準年
- 境界の推定方法

を明示する。

データ品質が不足する場合は、所在地・支配拠点・ネットワーク中心の地図へ切り替える。

---

# 4. 地図データの品質レベル

公開候補データには内部的に品質レベルを付ける。

## Level A — Verified

- 一次史料、公的GIS、信頼できる学術GIS等
- 時点が明確
- 空間定義が明確
- 加工手順が追跡可能

主要地図の理想。

## Level B — Derived

- 信頼できる史料から本サイト側で位置・属性を生成
- 変換手順が明示されている
- 必要なサンプル照合を行っている

通常の公開に利用可能。

## Level C — Approximate

- 位置・境界に推定を含む
- 推定であることを表示
- 精密な分析用途には使わない

説明補助としてのみ利用。

## Level D — Unverified

- 出典不明
- 時点不明
- 推定方法不明
- Web上の二次データを無検証で流用

**公開地図には使用しない。**

---

# 5. Data Audit — CIで検査する項目

可能な範囲で自動化する。

## 5.1 構造

- GeoJSON / metadata が parse 可能
- required metadata が存在
- source ID が source catalog に存在
- feature ID が重複していない
- geometry type が地図定義と一致
- null geometry を禁止または明示的に許可
- 必須属性欠落を検出

## 5.2 座標

- longitude / latitude の範囲検査
- 対象地域から極端に外れた点を検出
- `[lat, lon]` と `[lon, lat]` の取り違え候補を検出
- bbox を計算し、定義済み対象領域との矛盾を検出

## 5.3 時点

- 地図の対象年とデータの temporalCoverage が矛盾しない
- 異なる基準年のデータを混ぜる場合は明示的な annotation を要求
- 現代データを歴史データとして無注記で混在させない

## 5.4 provenance

- sourceType
- sourceId
- temporalCoverage
- geometryConfidence

を必須とする。

derived data は transformation history を必須とする。

## 5.5 ライセンス

再配布可能性・表示義務を確認する。

ライセンス不明の外部データをリポジトリへ直接取り込まない。

---

# 6. Data Audit — 人間が確認する項目

機械検査だけでは不十分なため、公開前に最低限サンプル照合を行う。

- 代表地点が史料記述と一致しているか
- 主要地点の位置が別の信頼できる資料とも矛盾しないか
- 境界の解釈が史料の意味を変えていないか
- 加工・一般化で重要な特徴を消していないか
- 欠測地域を「存在しない」と誤読させないか
- 時点の違う資料を一枚に重ねる意味が妥当か

重要度 A の地図では、少なくとも主要 feature を複数点サンプル確認する。

---

# 7. Style Audit — MapLibre 定義を監査する

スタイル監査は「見栄え」だけでなく、データの意味を正しく符号化しているかを見る。

## 7.1 色

- 色だけを唯一の識別手段にしない
- 順序量には順序を感じる配色を使う
- 名義尺度に連続グラデーションを使わない
- 重要度と彩度・明度が逆転しない
- 赤/緑だけの区別を避ける
- 背景地図より主題データを優先する

## 7.2 線

- 国境・行政境・交通路・推定線を同じ線種で描かない
- 推定線は破線等で区別可能にする
- ズームによって線幅が過度に太くならない
- 河川・海岸線・道路と歴史主題線が混同されない

## 7.3 点

- point size が重要度を偽装しない
- 同一地点に複数 feature がある場合の重なりを処理
- approximate location は必要に応じて別記号にする

## 7.4 ラベル

- 現代地名と歴史地名を混同しない
- 表記ゆれを統一
- zoom level ごとのラベル過密を抑える
- 重要地点を優先して表示する

## 7.5 凡例

凡例はスタイルから独立した手書き説明ではなく、可能な限り layer definition と同期する。

以下を検査する。

- 地図に存在するカテゴリが凡例に存在
- 凡例にだけ存在するカテゴリがない
- 色・線種・記号が一致
- 単位が明記されている
- 推定・不確実性記号が説明されている

---

# 8. Visual Audit — 人間による最終確認

ヴィジュアル監査は自動化しきれない。

そのため公開前に **human visual review checklist** を必須とする。

## Desktop

- [ ] 主要主題が一目で判別できる
- [ ] 背景地図が主題より目立たない
- [ ] ラベルが大量に重なっていない
- [ ] 凡例が地図と一致している
- [ ] popup が画面外へはみ出さない
- [ ] 地図タイトル・対象期間が明確
- [ ] 不確実な境界・位置が確定情報のように見えない

## Mobile

- [ ] 地図が横にはみ出さない
- [ ] 凡例を読める
- [ ] popup を操作できる
- [ ] touch操作とページscrollが致命的に競合しない
- [ ] 重要地点が小さすぎない
- [ ] ラベルが画面を覆わない

## Zoom

最低でも、

- 初期表示
- 1段階 zoom in
- 詳細 zoom
- zoom out

を確認する。

- [ ] レイヤーが突然意味不明に消えない
- [ ] 線幅・記号サイズが破綻しない
- [ ] 過密・空白のバランスが破綻しない

## 読解

- [ ] 初見の読者が「何を比較する地図か」を理解できる
- [ ] 色・面積・線の太さが歴史的重要度を不当に示唆しない
- [ ] 現代境界を歴史境界と誤認しにくい
- [ ] 欠測をゼロ・不存在と誤認しにくい
- [ ] 地図だけを見ても本文と矛盾する印象を与えない

---

# 9. Screenshot / Visual Regression

将来、安定した地図が増えたら、代表viewportのスクリーンショットを保存し、visual regression を検討する。

候補：

- desktop standard viewport
- mobile standard viewport
- initial zoom
- detail zoom

ただし screenshot diff が green でも歴史的妥当性は保証されない。

visual regression は、

> 「以前と意図せず見た目が変わっていないか」

を見る補助検査であり、Human Visual Audit の代替ではない。

---

# 10. 地図定義のレビュー状態

地図ごとに内部 metadata を持つ。

例：

```ts
interface MapAuditState {
  dataAudit: 'pending' | 'passed' | 'failed'
  styleAudit: 'pending' | 'passed' | 'failed'
  visualAudit:
    | 'pending-human'
    | 'passed'
    | 'failed'

  notes?: string[]
}
```

完成扱いの条件：

```text
dataAudit   = passed
styleAudit  = passed
visualAudit = passed
```

Human Visual Audit をGitHub Pages上で行うため、`draft` / `pending-human` の地図も通常ページに表示してよい。その場合は地図の直前に **「監査中です」** と読者向けに明示し、監査結果によって修正される可能性を表示する。監査中表示は完成・監査済みを意味しない。

重要な修正後は該当 audit を再度 pending に戻す。

---

# 11. 変更時に再監査が必要な条件

## Data Audit をやり直す

- GeoJSON / CSV / PMTiles を変更
- source を変更
- geometry を変更
- 属性値を変更
- 基準年を変更
- データ生成処理を変更

## Style Audit をやり直す

- MapLibre layer を変更
- 色・線・symbolを変更
- filter / interpolation / zoom conditionを変更
- legend生成を変更

## Visual Audit をやり直す

- style変更
- template変更
- 地図コンテナサイズ変更
- popup / legend UI変更
- mobile layout変更
- basemap変更

---

# 12. 公開ページでのデータ品質表示

通常、内部の詳細な audit status は公開しない。ただし Human Visual Audit のため公開面に出している未完了地図は、**「監査中です」** と明示する。

また、読者の理解に必要な以下は公開する。

- 対象年・期間
- 出典
- 必要なライセンス表記
- 「推定」「概略」「模式図」などの不確実性
- 現代境界を補助的に使った場合の注記
- データ定義
- 単位

制作工程は見せず、**地図を正しく読むために必要な情報だけ**を公開する。

---

# 13. Definition of Done

地図は以下を満たすまで published 扱いにしない。

- [ ] provenance metadata がある
- [ ] source ID が解決可能
- [ ] temporalCoverage がある
- [ ] geometryConfidence がある
- [ ] license を確認した
- [ ] automated data validation green
- [ ] 代表featureの人手サンプル照合済み
- [ ] Style Audit passed
- [ ] legend と layer が一致
- [ ] Desktop Visual Audit passed
- [ ] Mobile Visual Audit passed
- [ ] zoom別確認 passed
- [ ] 不確実性の表現を確認
- [ ] 本文との整合性を確認
- [ ] CI green
- [ ] Pages deploy green
