# 過去地図監査の遡及再判定・実装計画

- **Status:** active
- **Created:** 2026-10-03
- **Scope:** A1〜A31 の既存 map necessity / data-quality judgment と現行 MapLibre 実装
- **Reference baseline:** A32「北部仏印進駐・援蒋ルート・主要交通点」
- **Primary goal:** 旧来の厳しすぎる geometry 採用基準で no-map / point-only / deferred になった地図を、現行 `MAP_AUDIT_STANDARD.md` の approximate / schematic 正式採用方針で遡及再判定し、採用となったものは地図作成・Data Audit・Style Auditまで実装する
- **Human Visual Audit:** このplanの実行時点では意図的にスキップし、残件を `docs/MAP_HUMAN_VISUAL_AUDIT_BACKLOG.md` で追跡する
- **Parent plan:** [JPN_HISTORY_DECADE_PLAN.md](./JPN_HISTORY_DECADE_PLAN.md)
- **Map standard:** [MAP_AUDIT_STANDARD.md](../standards/MAP_AUDIT_STANDARD.md)

---

# 1. 背景

A32では、海防―河内―ラオカイ―雲南方面の援蒋輸送回廊を schematic LineString、諒山方面・海防周辺の戦闘域を small approximate Polygon として扱えるようにした。

この判定は、地図データの採否を「完璧な再利用可能GeoJSONが存在するか」ではなく、

- 地図の中心問いが何か
- 史料がどの程度の空間主張を支えられるか
- geometryの精度と地図上の主張が一致しているか
- 不確実性を読者へ明示できるか

で判定する現行標準に基づく。

過去のA判定には、

- 再利用可能なvector geometryがない
- 精密な進軍路・前線・境界を復元できない
- 歴史地図画像しかない
- polygonの境界精度が足りない
- LineStringを正確な路線中心線として作れない

ことを主理由に、地図全体を見送ったものがある。

現行標準では、これらは **no-map の自動理由ではない**。相対配置・接続・方向・広がりが中心問いなら、出典と生成手順を追跡した approximate / schematic geometry を正式な公開表現として採用できる。

この遡及planは、その基準変更によって結論が変わり得るA1〜A31をまとめて再評価する。

---

# 2. このplanで行うこと

各A判定について、次を行う。

1. 旧判定・旧Data Audit理由を回収する
2. 現在の本文の中心問いと地図の教育的必要性を再確認する
3. geometry precision不足を理由に落としていた項目を、approximate / schematic で答えられるか再判定する
4. 再判定結果を次のいずれかにする
   - `keep-existing`
   - `upgrade-existing`
   - `adopt-and-implement`
   - `remain-no-map`
5. `adopt-and-implement` / `upgrade-existing` の場合は、地図定義・dataset・provenance・凡例・reading note・記事側map参照まで実装する
6. Data Audit / Style Audit を完了する
7. line / polygon / 新しいinteraction等でHuman Visual Auditが必要な場合は、
   - `status: draft`
   - `visualAudit: pending-human`
   とし、Human Visual Auditはこのplanでは実施しない
8. `docs/MAP_HUMAN_VISUAL_AUDIT_BACKLOG.md` へ残件を登録する
9. `npm run check`、GitHub Actions、必要ならPages deployを確認する

---

# 3. このplanで行わないこと

- Human Visual Auditそのもの
- Desktop / Tablet / Mobile の人間による最終見た目確認
- Human Visual Audit未了の地図を `published` 扱いにすること
- 法的境界・行政界・租借地境界など、境界位置そのものが論点なのに根拠のない模式polygonで確定境界を作ること
- approximate / schematic geometry を面積・距離・到達時間等の定量測定に使うこと
- データ網羅性不足・分類定義不足を、geometryを粗くするだけで解決したことにすること
- 地図が不要な主題を「作れるから」という理由だけで採用すること
- 過去の完了planを直接書き換えて履歴を消すこと

旧planの判定履歴は残し、この遡及plan側へ新判定を記録する。

---

# 4. 再判定の原則

## 4.1 precision不足とdata不足を分ける

次は現行標準では採用可能性がある。

- 経由地点が分かるが正確な中心線がない
  - → waypoint-derived schematic LineString
- 「この方面」「この一帯」が分かるが境界がない
  - → approximate / schematic Polygon
- 戦線の正確な日別形状は不明だが、進出方向や主要地点が分かる
  - → point + schematic route / area
- 歴史地図画像・文章史料から接続関係は確認できるが、GIS-ready datasetがない
  - → site-authored derived / approximate geometry

一方、次は引き続きno-map理由になり得る。

- どの地点・地域を採録するかの定義自体が揃わない
- 欠測と不存在を区別できない
- 地図の中心問いが位置関係ではなく制度関係で、地図化しても理解が増えない
- 数km単位の境界差が結論を左右すのに、数十km級の推定しかできない
- 史料上の空間関係そのものが確認できない

## 4.2 Level Cを通常の採用候補として扱う

`geometryConfidence: approximate | schematic` は公開品質未満を意味しない。

中心問いが、

- 相対配置
- 接続
- 方向
- 広がり
- 交通回廊
- 戦闘が生じた方面
- 支配・影響のおおまかな空間差

であれば Level C を中心レイヤーにしてよい。

## 4.3 Human Visual Auditは後送する

このplanでは、Human Visual Auditが必要な新規・変更地図について、

```ts
status: 'draft'
auditState: {
  dataAudit: 'passed',
  styleAudit: 'passed',
  visualAudit: 'pending-human',
}
```

までを実装完了点とする。

既存UIはdraft / pending-human地図に「監査中です」を表示するため、Human Visual Audit前に通常ページへ配置してよい。

Human Visual Audit済みpoint-onlyパターンをそのまま再利用し、現行標準の例外条件を満たすものは `not-required-reused-pattern` を利用できる。この場合はHuman backlogへ積まない。

---

# 5. 監査対象の初期分類

現時点の `src/maps/registry.ts` には9地図が登録されている。

- A1 幕末初期の来航地点・港・海防
- A2 条約港と国内交通
- A3 戊辰戦争の空間展開
- A5 士族反乱・西南戦争
- A12 1920年人口・都市化
- A14 1930年人口・都市化
- A16 満州事変
- A19 二・二六事件東京
- A29 ノモンハン事件

このうちA1 / A2 / A3 / A5 / A12 / A29はHuman Visual Audit passed、A14 / A16 / A19はpoint-only再利用例外で `not-required-reused-pattern` になっている。

## Batch R1 — 旧no-mapのうちprecision基準で反転しやすいもの

優先して再判定する。

| A | 主題 | 旧判定の主要障壁 | 新基準で見る点 |
|---|---|---|---|
| A4 | 廃藩置県前後 | 全国境界データ不足 | 精密境界ではなく主要行政中心・代表的再編例・模式的差分で問いに答えられるか |
| A6 | 1880年代鉄道 | historical route geometry不足 | 主要駅・開業区間・接続をschematic routeで示せるか |
| A7 | 日清・日露戦争 | 戦線・進軍経路の精密geometry不足 | 戦域・主要進出方向・主要地点をpoint + schematic line/areaで示せるか |
| A8 | 1890〜1910年代の産業・鉄道 | 鉄道・工業地域geometry不足 | 幹線接続と主要工業地域を概略線・概略面で示せるか |
| A9 | 植民地統治 | 領土・租借地・鉄道権益等を同一精度で表せない | 法的類型を分けた概略面・線・点で制度差を可視化できるか |
| A10 | 第一次世界大戦と東アジア・太平洋 | 青島・南洋群島・シベリアを同一geometry品質で扱えない | 異種レイヤーを分けて広域展開を模式的に示せるか |
| A13 | 関東大震災 | 被災図が画像/PDF中心 | 焼失域・主要被災域をapproximate areaとして復元する価値があるか |
| A15 | 山東・満洲政治／軍事空間 | 北伐・山東出兵・満鉄・関東州geometry不足 | 交通軸・主要地点・概略的権益空間を別レイヤーで示せるか |
| A18 | 1935年華北 | 法域・影響圏polygonの精密根拠不足 | 「確定境界」でなく制度上の概略空間として表せるか |
| A30 | 天津租界封鎖・法域空間 | 1939年法域polygonの時点・変換・ライセンス | 租界を厳密境界ではなく、同時代図を根拠にしたapproximate areaとして扱えるか |
| A31 | 南京国民政府成立後の占領地政治機構と法域 | 法域の精密境界と制度差 | 法域の厳密塗り分けでなく、主要政治中心・制度圏・交通関係を模式化できるか |

A4 / A9 / A18 / A30 / A31は、法域・行政界の意味が強いため、**概略面が問いを歪めるなら無理に採用しない**。

## Batch R2 — 採用判定済みだが、現行registryに実装がないもの

旧判定が採用でも、現在の `src/maps/registry.ts` にmap definitionが存在しないものを再確認し、採用を維持するなら実装する。

対象候補：

- A20 盧溝橋事件初期の北平周辺
- A21 上海都市政治・軍事空間
- A22 上海・杭州湾作戦空間
- A23 上海・南京間の進攻空間
- A24 南京市街・安全区・長江
- A25 徐州・津浦／隴海鉄道
- A26 黄河決壊と河南・武漢前面
- A27 武漢・広東攻略と対外補給
- A28 海南島占領と華南・仏印方面の対外交通

このBatchでは、旧判定をそのまま実装指示として扱わず、現行standardでgeometry上限を再確認してから作る。

とくにA22 / A23の「point-only上限」、A26の「洪水方向のみ」、A28の「主要輸送回廊のみ」は、新基準でschematic line / areaへ広げることで教育的価値が上がるか再判定する。

## Batch R3 — 既存point-only地図の再評価

- A16 満州事変
- A19 二・二六事件
- 必要に応じてR2でpoint-onlyとして作った地図

旧基準で落とした、

- 進出方向
- 占拠・戦闘方面
- 交通回廊
- 概略的な活動範囲

をschematic line / areaとして追加することで本文理解が明確に改善する場合だけupgradeする。

単に「線や面も描けるようになった」ことを理由に増やさない。

## Batch R4 — 既存published地図の軽量確認

- A1
- A2
- A3
- A5
- A12
- A14
- A29

これらは作り直さない。

現行standardに照らし、

- provenance
- geometryConfidence
- reading note
- 不確実性表示
- modern basemap注記
- line / polygonが必要以上に精密さを装っていないか

だけを確認し、具体的な問題がある場合のみ修正する。

---

# 6. retain-no-map候補も必ず再判定する

次は新基準でも no-map が妥当な可能性が高いが、旧判断を自動維持しない。

## A11 米騒動

主問題はgeometry精度より**イベント採録基準と網羅性**である。

軍隊出動地域を米騒動発生地域の代理にすると欠測を「騒動なし」と誤読させる問題は、新しいapproximate geometry基準でも解消しない。

したがって、

- 米騒動そのものの全国分布
- 政府・軍の治安対応分布

を別主題として再判定する。

後者だけなら採用可能性がある。

## A17 国際連盟・外交

中心論点が東京・ジュネーブ・南京・満洲の距離ではなく、承認・報告書・総会・脱退通告という制度手続なら、地図必要性自体が低い。

approximate geometryが許容されたことだけで採用へ反転させない。

---

# 7. 各A判定で残す記録

各Aについて、このplanへ最低限次を追記する。

```text
Axx:
  oldDecision:
  retroDecision:
  mapNecessity: low | medium | high
  historicalQuestion:
  allowedGeometry:
  geometryConfidence:
  keySources:
  transformations:
  readerUncertaintyNote:
  implementation:
  dataAudit:
  styleAudit:
  visualAudit:
  humanBacklogId:
```

`remain-no-map` の場合は、

- 地図必要性が低い
- geometryではなく採録定義・網羅性が不足
- 法的境界の誤認リスクが高い
- 他の表現の方が正確

のどれに該当するかを明記する。

「完璧なGeoJSONがない」だけでは remain-no-map にしない。

---

# 8. 実装規約

採用した地図は原則として、

- `src/maps/definitions/*.ts`
- 必要に応じて `src/maps/data/geojson/*`
- `src/maps/registry.ts`
- 対応する年代Markdownの `mapId`
- source catalog / provenance
- reading note / legend

を更新する。

## geometry

- Point: representative / approximate を許容
- LineString: waypoint-derived / schematic route を許容
- Polygon: approximate / schematic area を許容
- MultiLineString / MultiPolygon: 主題上必要な場合のみ

## line / area の見た目

- approximate / schematic line は破線等で確定線と区別
- approximate / schematic area は低opacity + 破線outline等で確定境界と区別
- 凡例へ「概略」「模式」を入れる
- reading noteで「正確な中心線・前線・境界・面積ではない」と明示する

## provenance

site-authored geometryは必ず、

- `sourceType: derived`
- `derivedFromSourceIds`
- `geometryConfidence`
- `transformations`
- `notes`

を残す。

---

# 9. Human Visual Auditの後送ルール

このplanではHuman Visual Auditを実施しない。

Human Visual Auditが必要な地図を作成・変更したら、そのcommit内で必ず `docs/MAP_HUMAN_VISUAL_AUDIT_BACKLOG.md` へ登録する。

登録せず `pending-human` を増やすことを禁止する。

## backlogの必須項目

- backlog ID
- A番号
- map ID
- 対応route
- 新規 / upgrade
- geometry type
- Data Audit状態
- Style Audit状態
- Human Visual Audit状態
- Desktop確認要点
- Tablet / touch確認要点
- Mobile確認要点
- Zoom確認要点
- 特に誤読しやすい表現
- 実装commit
- 完了commit

Human Visual Audit完了時は、

1. `visualAudit: passed`
2. 必要なら `status: published`
3. backlog rowを `completed` に更新
4. `npm run check`
5. CI / Pages確認

を行う。

---

# 10. 実行順

```text
R0  A1〜A31 inventory
 ↓
R1  旧no-map precision-blocked群の再判定
 ↓
    採用分をdraft実装
    Data Audit / Style Audit
    pending-human登録
 ↓
R2  採用済み・未実装群 A20〜A28
 ↓
    現行standardで再判定
    draft実装
    Data Audit / Style Audit
    pending-human登録
 ↓
R3  point-only既存地図のupgrade必要性判定
 ↓
    必要なものだけupgrade
    Data Audit / Style Audit
    pending-human登録
 ↓
R4  stable published mapの軽量整合確認
 ↓
R5  npm run check
 ↓
GitHub Actions / Pages
 ↓
Status: implementation-complete
 ↓
このplanをplan_doneへarchive
Human Visual Audit残件は別backlogで継続
```

Human Visual Audit未了であることは、このplanの `implementation-complete` を妨げない。

ただし、Human Visual Auditが必要な地図は **draft / pending-human のまま** とし、監査完了済みの公開地図と同一扱いにしない。

---

# 11. Definition of Done

- [ ] A1〜A31の旧判定を全件inventory化
- [ ] A1〜A31を現行 `MAP_AUDIT_STANDARD.md` で再判定
- [ ] 「精密vectorがない」だけを理由にno-mapを維持した案件が残っていない
- [ ] `adopt-and-implement` 判定の地図を実装
- [ ] `upgrade-existing` 判定の地図を必要範囲で更新
- [ ] site-authored approximate / schematic geometryにprovenanceとtransformation historyを付与
- [ ] Data Audit passed
- [ ] Style Audit passed
- [ ] Human Visual Auditが必要な地図は `draft / pending-human` に固定
- [ ] Human Visual Audit残件を `docs/MAP_HUMAN_VISUAL_AUDIT_BACKLOG.md` へ全件登録
- [ ] backlog未登録の `pending-human` 地図がない
- [ ] `npm run check` green
- [ ] GitHub Actions green
- [ ] Pages deploy green（公開ページ参照を変更した場合）
- [ ] Status = implementation-complete
- [ ] `plan_done/` へ移動

---

# 12. Human Visual Audit後続作業との境界

このplan完了後、Human Visual Auditは別作業としてまとめて行う。

その際はA番号順ではなく、

- line-heavy
- polygon-heavy
- dense labels
- touch interaction
- wide-area / small-scale
- urban / large-scale

の表示特性ごとにまとめて監査してよい。

Human Visual Auditの残件管理の正本は `docs/MAP_HUMAN_VISUAL_AUDIT_BACKLOG.md` とする。

このplanへHuman Visual Audit結果を逐次書き戻す必要はない。
