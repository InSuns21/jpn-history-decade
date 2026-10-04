# Historical Map Audit Standard

この文書は、`jpn-history-decade` に掲載する MapLibre 主題地図について、**地図データの信頼性・スタイルの妥当性・最終的なヴィジュアル品質**を一定水準以上に保つための共通監査基準を定める。

地図は本文の装飾ではなく、歴史的主張を空間的に表現する資料である。

そのため、

> **地図が表示できること** と **歴史地図として公開できること** は別である。

---

## 1. 監査の3層

すべての公開地図は、次の3層を分けて監査する。

### A. Data Audit

「表示している場所・境界・属性・時点が、**その地図の問いに対して十分な精度を持ち、その不確実性を正しく表現しているか**」を確認する。

Data Audit は「測量級・GIS級の精密geometryだけを通す審査」ではない。歴史理解に必要なのが方向・接続・広がり・相対配置であれば、根拠を追跡できる概算・推定・模式geometryも公開対象になる。

### B. Style Audit

「データの意味とMapLibreの表現が一致しているか」を確認する。

### C. Visual Audit

「実際の画面で、読者が誤読せず理解できるか」を確認する。

Visual Audit は完全自動化が難しいため、機械判定できない項目は **human review required** として残す。

ただし、**既にHuman Visual Audit済みの地図と同一の表示コンポーネント・点記号・凡例・interactionを再利用し、変更点が点featureの位置・ラベル・属性値だけであるpoint-only地図**は、個別のHuman Visual Auditを省略できる。この例外では Data Audit と Style Audit は省略せず、再利用元の地図IDと同一パターンである理由を `auditState.notes` に残す。線・polygon、新しい表示ロジック、凡例仕様変更、popup/interaction変更、レイアウト変更を含む場合は例外対象外とする。

特に interactive map は、viewport 幅だけでなく入力方式も監査対象とする。Desktop の mouse 操作が成功しても、Tablet / Touch で同じ操作が成立するとは限らないため、少なくとも代表的な touch 環境を独立に確認する。

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

史料が「この地域周辺」「この方向」「これらの地点を結ぶ交通路」程度しか示さない場合に、精密な一点・線・ポリゴンを作らない。

ただし、**精密geometryを作れないこと自体は、線・面を採用しない理由にしない。** 歴史的な問いが方向、接続、勢力の広がり、戦闘域、交通回廊などを扱うなら、概算・推定・模式表現へ精度を落として公開してよい。

不確実性に応じて、

- point → approximate point
- polygon → approximate / schematic area
- line → approximate / schematic route or corridor

へ表現を落とす。

公開可否は「どれだけ精密か」ではなく、**そのgeometryが何を主張しているかと、史料が支えられる精度が一致しているか**で判定する。

たとえば次は許容する。

- 史料に確認できる複数の経由地点を結んだ waypoint-derived route
- 「河川沿い」「街道沿い」「国境方面」などを示す概略線
- 「この一帯」「この方面」「おおむねこの地域」を表す schematic Polygon
- 時点ごとの戦闘域・勢力圏・被災域を、面積測定に使えない概略面として表現すること
- 複数資料の相対位置関係から作る site-authored approximate geometry

その場合は最低限、

- `geometryConfidence` を `approximate` または `schematic` にする
- 何を根拠にしたかを `derivedFromSourceIds` / `transformations` / `notes` に残す
- 「正確な中心線・境界・前線・面積ではない」ことを reading note / 凡例 / popup 等で読者が確認できるようにする
- 線の長さ、polygon面積、境界からの距離などを精密値として再利用させない

ただし **「模式線・模式面」は地理的整合性を無視してよいという意味ではない。**

- 海路・河川航路を線で描く場合、史料上の根拠がない陸地横断をさせない
- 街道・鉄道・進軍路を概略化する場合、確認できる主要経由地や地形条件を反映する
- 信頼できる歴史GISのroute geometryが利用できる場合は優先するが、存在しないことを理由に地図化自体を断念しない
- 一定の固定線形を持たない海運・交易ネットワークは、一本の正確なLineStringではなく、点群・複数経路・海域コリドーなど問いに合う表現を選ぶ
- 史料で確認できるのが経由順だけの場合は、waypoint由来の概略線であることを明示する

`geometryConfidence` は公開地図定義から参照可能にする。

## 3.3 概算・推定・模式geometryは正規の公開表現として扱う

`approximate` / `schematic` は「公開品質未満」を意味しない。**史料自体が概略的である場合に、その不確実性を保持したまま可視化するための正式な表現方法**である。

次の条件を満たすなら、LineString / Polygon / MultiPolygon も通常の公開地図の中心レイヤーに使ってよい。

1. 地図の中心問いが、精密測量ではなく相対配置・接続・方向・広がりの理解にある。
2. 元史料または信頼できる研究から、その空間関係を文章・図・経由地点・地域名などで確認できる。
3. geometry生成方法を説明でき、恣意的に「それらしく描いた」だけではない。
4. 不確実性を凡例・注記・線種・面表現のいずれかで読者へ示す。
5. 精密境界・正確な前線・実測面積として読まれない表現になっている。

逆に、次は公開しない。

- 根拠資料がなく、作者の地理感覚だけで描いた線・面
- 数km単位の位置差が結論を左右するのに、数十km級の推定geometryしかない場合
- 法的境界や行政界の厳密な帰属を論じる地図で、根拠のない概略polygonを確定境界のように使う場合
- 面積・距離・到達時間などの定量分析を行うのに、模式geometryをそのまま測定値へ使う場合

**「approximate / schematic だから不採用」ではなく、「その精度で答えられる問いか」を監査する。**

---

## 3.4 藩領を単純な面として扱わない

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

## Level C — Approximate / Schematic

- 位置・境界・経路・面の広がりに推定を含む
- 推定・模式であることを表示
- 生成根拠と加工手順を追跡できる
- 精密な距離・面積・境界分析には使わない

**通常の公開に利用可能。** 地図の問いが相対配置・接続・方向・広がりの理解であれば、Level Cでも地図の中心レイヤーにしてよい。

Level A/B/C は「公開可否の序列」ではなく、**geometryが支えられる主張の精度**を表す。A/Bが取得できないことだけを理由に、Cで十分に答えられる地図を不採用にしない。

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

## 5.6 GeoJSON / vector runtime

MapLibre の GeoJSON / vector source は raster 背景とは別の実行経路を通るため、背景地図が表示されることだけで正常動作と判定しない。

- production build で GeoJSON / vector feature が実際に描画されることを確認する
- MapLibre v6 を Vite で利用する場合は、公式手順に従って worker URL を bundler 経由で解決する
- raster 背景 + DOM marker だけが表示され、GeoJSON / vector layer だけ欠落する場合は worker 起動失敗を優先的に疑う
- worker 設定、MapLibre major version、bundler 設定を変更した場合は Style Audit / Human Visual Audit をやり直す
- 主題データを renderer 固有の SVG / DOM 座標だけに閉じ込めず、GeoJSON 等の再利用可能な地理データを正本として維持する

---

# 6. Data Audit — 人間が確認する項目

機械検査だけでは不十分なため、公開前に最低限サンプル照合を行う。

- 代表地点が史料記述と一致しているか
- 主要地点の位置が別の信頼できる資料とも矛盾しないか
- 長距離の街道・航路が、陸地・海域・峠・河川などの物理地理と明らかに矛盾していないか
- 概略route / area が、その地図の問いに必要な相対配置・接続・広がりを十分に伝えているか
- 利用可能な歴史GISがある場合に不必要に粗い代替geometryを使っていないか。ただし歴史GISが存在しないことだけで概略geometryを不採用にしない
- 境界・経路・面の解釈が史料の意味を変えていないか
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
- 読者が地点そのものを識別する必要がある場合、カテゴリ記号・単漢字・色だけを主要表示にしない
- interactive point は mouse だけでなく touch でも押しやすい十分な hit area を持たせる

## 7.4 ラベル

- 現代地名と歴史地名を混同しない
- 表記ゆれを統一
- zoom level ごとのラベル過密を抑える
- 重要地点を優先して表示する
- 初期表示で重要地点を識別できるよう、地点名など意味のあるテキストラベルを優先する
- 「来」「交」「防」「港」のようなカテゴリ略号は補助記号として使い、地点名の代替にしない
- popup は補足説明を提供するために使い、地点の基本識別を popup を開くまで隠さない
- 密集地域では label placement を地点ごとに調整し、重なりを human review で確認する

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

## Tablet / Touch

- [ ] 重要地点のラベルを初期表示で読める
- [ ] マーカーまたは対応ラベルをタップすると popup が開く
- [ ] popup を閉じられる
- [ ] tap が map の drag / pan 判定に吸収されず、意図した操作として成立する
- [ ] hover 前提の情報や操作がない
- [ ] マーカーの tap target が実機で小さすぎない
- [ ] タッチ操作後も地図の pan / pinch zoom が破綻しない

## Mobile

- [ ] 地図が横にはみ出さない
- [ ] 凡例を読める
- [ ] popup を操作できる
- [ ] touch操作とページscrollが致命的に競合しない
- [ ] 重要地点が小さすぎない
- [ ] ラベルが画面を覆わない
- [ ] popup を開いた状態でも本文へ戻れる

## Zoom

最低でも、

- 初期表示
- 1段階 zoom in
- 詳細 zoom
- zoom out

を確認する。

広域地図、とくに太平洋・東アジア全域・複数大陸を比較する地図では、renderer側の固定 `minZoom` に依存しない。共通rendererの既定最小zoomは `min(3, initialView.zoom)` とし、少なくとも原稿側が指定した初期表示をclampしない。さらに広く引く必要がある地図は定義ごとに `minZoom` を指定し、**中心問いに必要な全域まで実際にzoom outできること**をDesktop / Tablet / Mobileで確認する。狭域地図の既定値を広域地図へ機械的に流用しない。

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
    | 'not-required-reused-pattern'

  notes?: string[]
}
```

完成扱いの条件：

```text
dataAudit   = passed
styleAudit  = passed
visualAudit = passed
  または、8章の再利用パターン例外を満たす場合のみ
visualAudit = not-required-reused-pattern
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
- marker / label の click・tap interaction変更
- mobile / tablet layout変更
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
- [ ] Desktop Visual Audit passed（再利用パターン例外では省略可）
- [ ] Tablet / Touch Visual Audit passed（再利用パターン例外では省略可）
- [ ] Mobile Visual Audit passed（再利用パターン例外では省略可）
- [ ] 主要地点を初期表示で識別できる
- [ ] tap / click で補足情報へ到達できる
- [ ] zoom別確認 passed（再利用パターン例外では省略可）
- [ ] 再利用パターン例外を使う場合、再利用元地図ID・同一UI/interactionであること・point-onlyであることを notes に記録
- [ ] 不確実性の表現を確認
- [ ] geometryの精度が地図の問いに対して十分であり、精密さを過剰主張していない
- [ ] approximate / schematic geometryを使う場合、生成根拠・用途・測定不可の範囲が追跡可能
- [ ] 本文との整合性を確認
- [ ] CI green
- [ ] Pages deploy green


---

# 14. 公開記事内での地図配置

地図の配置順も読解上の意味を持つ。地図を機械的に「概観の直後」へ集めず、**その地図が説明する本文の直後または直近**へ置く。

- 年代全体を俯瞰する地図だけは、概観直後の「地図で見る」に置いてよい
- 特定年・特定テーマの地図は、対応する本文節の直後へ配置する
- 時系列記事では、後年の地図を前の出来事より先に表示しない
- 地図の historicalQuestion と直前本文の問いが自然につながることを確認する
- 複数地図を一か所へ集約することで、本文との対応関係が不明になる場合は分散配置する

年代Markdownでは、概観直後へ置く地図は `maps`、本文節の直後へ置く地図は `mapPlacements` で指定する。

```yaml
maps: []
mapPlacements:
  - mapId: "urban-population-1920"
    afterSectionId: "census-panic"
```

`afterSectionId` は本文の `## ... {#section-id}` と一致させ、content compiler で存在確認する。

Human Visual Auditでは地図単体だけでなく、**前後の本文を含めた記事内の配置順が読者にとって自然か**も確認する。
