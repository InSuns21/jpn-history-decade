import { TimelineNav } from '../components/TimelineNav'

export function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="page-width home-hero__grid">
          <div>
            <p className="eyebrow">JAPAN / 1800 → PRESENT</p>
            <h1>
              1800年から始める
              <br />
              日本史
            </h1>
            <p className="home-hero__lead">
              事件を暗記するのではなく、その時代の人々が生きていた政治・経済・社会・技術・地理の構造を、10年ごとの定点観測で読む。
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href="#/decade/1800">
                1800年代から読む
              </a>
              <a
                className="button button--secondary"
                href="https://github.com/InSuns21/jpn-history-decade/blob/main/plan/JPN_HISTORY_DECADE_PLAN.md"
              >
                企画書を見る
              </a>
            </div>
          </div>
          <div className="hero-principle">
            <span>CORE IDEA</span>
            <blockquote>歴史を「事件の列」ではなく、社会システムの状態遷移として読む。</blockquote>
            <dl>
              <div>
                <dt>基本粒度</dt>
                <dd>10年</dd>
              </div>
              <div>
                <dt>主軸</dt>
                <dd>政治史</dd>
              </div>
              <div>
                <dt>空間</dt>
                <dd>MapLibre</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="page-width home-section">
        <div className="home-section__heading">
          <p>01 / TIMELINE</p>
          <h2>年代から読む</h2>
          <span>現代に近づくほど、歴史変化の速度に応じて5年・数年単位まで解像度を上げる。</span>
        </div>
        <TimelineNav />
      </section>

      <section className="page-width home-section">
        <div className="home-section__heading">
          <p>02 / LAYERS</p>
          <h2>一つの年代を、複数の層から見る</h2>
        </div>
        <div className="layer-grid">
          <article>
            <span>01</span>
            <h3>政治</h3>
            <p>制度、権力関係、政策決定、中央と地方。通史の主軸。</p>
          </article>
          <article>
            <span>02</span>
            <h3>経済・社会</h3>
            <p>財政、市場、人口、身分、都市、農村、労働から政治の条件を読む。</p>
          </article>
          <article>
            <span>03</span>
            <h3>外交・技術</h3>
            <p>国際環境、軍事、交通、通信、科学技術が作る選択肢と制約。</p>
          </article>
          <article>
            <span>04</span>
            <h3>地理</h3>
            <p>空間分布が論点になるときだけ、MapLibre の主題地図で可視化する。</p>
          </article>
        </div>
      </section>

      <section className="page-width home-section method-section">
        <div className="home-section__heading">
          <p>03 / METHOD</p>
          <h2>後知恵をできるだけ外す</h2>
        </div>
        <div className="method-grid">
          <div>
            <strong>その時点で何が見えていたか</strong>
            <p>後の維新・敗戦・高度成長を知っている視点から、過去を一本道の前史にしない。</p>
          </div>
          <div>
            <strong>何が変わり、何が残ったか</strong>
            <p>新制度だけでなく、継続した慣行・地域差・既存ネットワークも同時に追う。</p>
          </div>
          <div>
            <strong>史料と解釈を分ける</strong>
            <p>一次史料、統計、研究者の解釈、本サイトの整理を可能な限り区別する。</p>
          </div>
        </div>
      </section>
    </>
  )
}
