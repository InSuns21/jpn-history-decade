# 実装状況

README には概要だけを置き、フェーズ進捗・監査結果・地図判定・CI実績などの詳細はこの文書で管理します。

- Vite + React + TypeScript
- GitHub Pages を前提とした静的サイト
- Pages の直リンク問題を避ける hash ベースのルーティング
- 年代ページと構造史・テーマ史を Markdown + frontmatter からコンパイルし、共通コンテンツモデルで描画
- 横断記事から関連年代、年代記事から関連する横断記事へ相互に移動できる構成
- MapLibre GL JS を依存に追加し、必要な記事だけ主題地図を差し込める構成
- 1800–1939年9月15日を公開品質で実装済み（年代史62ページ＋横断記事8本）
- 1926–1930フェーズはJH24「1926–1928」・JH25「1929–1930」まで実装済み。A14「1930年人口・都市化」も1930年国勢調査の人口10万人以上28市を代表点で実装し、1920年A12と同じ人口階級・凡例・操作パターンを再利用。Data / Style Auditはpassed、point-only再利用規則により個別Human Visual Auditは省略した。A15「山東・満洲の政治／軍事空間」は法的地位と時点を揃えたgeometry不足のためno-map判定
- 長期接続監査やフェーズ末の「全体監査」は定型工程にしない。各年代の隣接接続確認を基本とし、複数年代・横断記事を同時に見ないと検出できない具体的な問題が残る場合だけ独立監査を追加する
- 1937年7月7日〜8月12日のCrosscutting publication gateでは、S02「石高制・貨幣経済・財政」・S05「政治参加の回路」・S10「産業社会の負担と保護」を8月12日まで延長。S02は実戦の戦費調達、S05は軍事判断と議会の予算・課税審議の接続、S10は税・公債・借入による負担配分を扱う。S09「対外支配の制度差」は、この期間に新しい統治機構・法的地位が成立する比較軸がないため延長せず、新規横断記事も年代記事の再編集になるため見送った
- 1874–1890年・1891–1911年・1912–1925年・1926–1930年・1931–1933年5月・1933年6月–1936年2月25日・1936年2月26日–1937年7月6日・1937年7月7日–8月12日の実装フェーズは完了し、実装計画を `plan_done/` へ移動済み
- 1800–1925年の本文構造・留保表現を31記事（年代23＋横断8）で遡及監査済み。否定形の注意から段落を始める傾向を改め、「何が何を変え、何を可能・困難にしたか」を先に示す執筆基準を追加し、既存本文も改稿済み
- 公開本文の前提知識を中学校の歴史教科書レベルへ変更し、1800–1925年の年代23ページ＋横断8記事と用語辞書236語を遡及監査済み。内容の到達点は維持したまま、高校日本史で詳しく扱う制度・人物・事件・金融用語に初出時の足場説明を追加
- 1931–1933年5月フェーズは main push CI run #233 / GitHub Pages run #113 とも success を確認して完了。A17は制度・時系列の理解に地図が寄与しないためno-map、横断記事S02/S05/S09/S10も1933年まで延長済み
- 1933年6月〜1936年2月25日フェーズは main push CI run #244 / GitHub Pages run #119 とも success を確認して完了。A18はno-map、S02・S05・S09・S10は1936年2月25日まで延長済み
- 1937年8月13日〜11月12日フェーズはJH40→A21→JH41→JH42→JH43→A22→Crosscutting publication gate→S02/S05/S10延長→phase-end audit necessity judgmentまで完了し、`plan_done/SHANGHAI_WAR_TO_FALL_IMPLEMENTATION_PLAN.md` へarchive済み。S09は安定した新統治制度の比較軸がないため延長せず、新規「戦時動員体制」もJH41の再編集になるため見送った。main push CI run #324 / GitHub Pages run #146 はともに success
- 1937年11月13日〜1938年1月16日フェーズはJH44→A23→JH45→JH46→A24→JH47→Crosscutting publication gate→S05/S09延長まで完了。phase-end audit necessity judgmentでは、JH44〜JH45の南京進攻の一本道化、JH46の加害事実と人数推計の混同、JH47とS05の和平判断説明の重複、JH46とS09の占領実務／政治機構の混同を候補として確認したが、現行本文で役割分離済みのため独立監査不要と判定した。main push CI run #405 / GitHub Pages run #181 はともに success。計画は `plan_done/NANKING_ADVANCE_TO_KONOE_STATEMENT_IMPLEMENTATION_PLAN.md` へarchive済み
- 1938年1月17日〜5月19日フェーズはJH48→JH49→JH50→A25→Crosscutting publication gate→S05/S09/S10延長→phase-end audit necessity judgmentまで完了。gateではS05を「議会立法→政府命令」の権限配分、S09を華北／華中の占領地政治機構差、S10を人的・物的資源の横断的統制という既存比較軸で延長した。S02は新たな会計・徴税・公債制度の比較軸がなく見送り、新規「戦時動員体制」もS05/S10と年代記事の重複になるため見送った。独立監査は具体的な未解決仮説が残らないため不要と判定。main push CI run #422 / GitHub Pages run #187 はともに success。計画は `plan_done/TOTAL_MOBILIZATION_TO_XUZHOU_IMPLEMENTATION_PLAN.md` へarchive済み。次フェーズは `plan/WUHAN_GUANGZHOU_CAMPAIGN_IMPLEMENTATION_PLAN.md` として1938年5月20日〜10月27日に切り出し済み
- 1938年5月20日〜10月27日フェーズはJH51→A26→JH52→JH53→JH54→A27→Crosscutting publication gate→S05/S09/S10延長→phase-end audit necessity judgmentまで完了。gateではS05を五相会議による主要閣僚の国策調整回路、S09を「支那政権内面指導大綱」による占領地政府の形式と実質権限の差、S10を学校卒業者使用制限令による新卒者採用人数の認可制という既存比較軸で延長。S02は新しい会計・徴税・公債制度がなく見送り、新規「戦争終結・和平回路」もJH51〜JH54とS05の再編集になるため見送った。gate作業中、日本法令索引により学校卒業者使用制限令の公布日を8月24日と確認し、JH53・用語辞書の8月17日表記を修正。A27はmap necessity=high、Data Audit=conditional passのまま公開geometry上限を固定。独立監査は具体的な未解決仮説が残らないため不要と判定した。main push CI run #440 / GitHub Pages run #196 はともに success。計画は `plan_done/WUHAN_GUANGZHOU_CAMPAIGN_IMPLEMENTATION_PLAN.md` へarchive済み
- 1938年10月28日〜1939年5月10日フェーズはJH55→JH56→JH57→JH58→A28→Crosscutting publication gate→S05/S09/S10延長→phase-end audit necessity judgmentまで完了。gateではS05を第二・第三次近衛声明／五相会議／在外大使の交渉回路、S09を興亜院・華北／華中連絡部と海南島の別系統の占領政務、S10を新卒採用人数認可から職業能力申告・雇入れ・就業時間・技能者養成へ広がる人的資源統制として延長。S02は新しい財政制度転換がないため見送り、新規横断記事も年代記事とS05/S09の再編集になるため見送った。A28はmap necessity=high、Data Audit=conditional passとして公開geometry上限を代表地点＋仏印—雲南鉄道generalized LineString＋海防—ランソン—広西方面schematic corridorまでに固定し、即時完全占領polygonや遮断済み表現、1940〜41年への先取り矢印は採用しない。独立監査は、隣接接続とpublication gateで具体的な主体混同・役割重複を処理済みで未解決の監査仮説が残らないため不要と判定。PR #147 / main commit `bb601df` のCI・Pagesはいずれもsuccessを確認し、計画を `plan_done/EAST_ASIA_NEW_ORDER_TO_PRE_NOMONHAN_IMPLEMENTATION_PLAN.md` へarchive。1939年5月11日〜9月15日フェーズを `plan/NOMONHAN_TO_EUROPEAN_WAR_IMPLEMENTATION_PLAN.md` として切り出し済み。JH59「1939-05-11〜06-13」→A29→JH60「1939-06-14〜07-25」→A30→JH61「1939-07-26〜08-22」→JH62「1939-08-23〜09-15」の順で、ノモンハン事件・天津租界封鎖・国民徴用令・日米通商航海条約廃棄通告・独ソ不可侵条約／内閣交代・欧州戦争開始を状態遷移として扱う。現在地は phase cut ✅ → 次は JH59。
- 1939年5月11日〜9月15日フェーズはJH59「1939-05-11〜06-13」→A29まで完了。A29はmap necessity=high / Data Audit=conditional pass。防衛研究所資料でソ蒙側国境認識に「ハルハ河東方約20km」「約13km」の記述差があるため精密なhistorical boundaryを作らず、公開geometry上限をハルハ河generalized LineString＋代表地点＋schematic disputed zone＋5月戦闘のapproximate point/areaに固定した。7〜8月の作戦矢印は先取りせず、公開map実装はJH60/JH61後に時点別統合を再判定する。次はJH60「1939-06-14〜07-25」。
- GitHub Actions による lint / typecheck / build CI
- `main` 更新時の GitHub Pages 自動デプロイ

- JH60「1939-06-14〜07-25」を実装。天津英・仏租界封鎖、6月27日のタムスク航空攻撃と中央・関東軍の統帥差、7月初頭のノモンハン戦闘大規模化、7月8日公布・15日施行の国民徴用令、7月22日署名・24日公表の有田・クレーギー公式を扱った。JH59との接続確認完了。次はA30「天津租界封鎖と占領下華北の法域空間」map necessity / data-quality judgment。

- A30「天津租界封鎖と占領下華北の法域空間」はno-map判定。1939年Oriental Book Store天津市街図で英・仏・日・伊租界の配置自体は確認できるが、高精細デジタル利用条件・再配布ライセンスが不十分。公開利用しやすいLOC図は1942年、British Library系は1924/1935年で対象時点とずれる。point-onlyでは法域並存という中心命題を失うため縮退実装も見送り。次はJH61「1939-07-26〜08-22」。

- JH61「1939-07-26〜08-22」を実装。7月26日の日米通商航海条約終了通告、終了予告後の日米関係、7月末〜8月中旬のノモンハン持久戦、8月19日の配当統制、8月20日のソ連・モンゴル軍総攻撃を扱った。JH60との接続確認完了。
- A29のJH60/JH61後再判定を完了。map necessity=high / Data Audit=conditional passを維持する。戦史叢書の時点図は7月1〜5日、7月23日、8月13日、8月下旬に分かれ、最後の時点はJH61の8月22日終点を越えるため、ここで不完全な時系列地図を実装せずJH62後に5月〜9月15日を一括統合する。精密国境・exact front line・史料図のvector traceは引き続き採用しない。次はJH62「1939-08-23〜09-15」。
- JH62「1939-08-23〜09-15」を実装。8月23日の独ソ不可侵条約、25日の防共協定強化交渉打切り、24〜25日の電力・米穀供給統制、28日の平沼内閣総辞職表明、30日の阿部内閣成立、9月1日以後の欧州戦争開始、3日の大本営によるノモンハン作戦中止命令、15日の停戦協定を扱った。JH61との接続確認完了。次はA29「ノモンハン時点別地図」公開map実装。
- A29「ノモンハン時点別地図」の公開実装を追加。ハルハ河generalized LineString、国境認識が重なる東岸側のschematic Polygon、ノモンハン代表点、5月・7月・8月・9月の時点別representative pointを実装した。精密国境・front line・作戦矢印・戦史叢書付図のvector traceは採用しない。Data / Style Auditはpassed。Polygonと新規時点切替UIを含むため、公開時点ではdraft / Human Visual Audit待ちとする。
