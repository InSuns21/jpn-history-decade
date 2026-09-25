import { TimelineNav } from '../components/TimelineNav'

export function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="page-width home-hero__grid">
          <div>
            <p className="eyebrow">日本史・1800年以降</p>
            <h1>1800年から始める日本史</h1>
            <p className="home-hero__lead">
              1800年から現代までの日本史を、政治を軸に、経済・社会・外交・技術・文化・地理を結びつけながら年代ごとにたどります。
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href="#/decade/1800">
                1800年代を読む
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="page-width home-section">
        <div className="home-section__heading">
          <p>第1章</p>
          <h2>年代から読む</h2>
          <span>各年代の政治・経済・社会の状態と、その前後で生じた変化をたどります。</span>
        </div>
        <TimelineNav />
      </section>

      <section className="page-width home-section">
        <div className="home-section__heading">
          <p>第2章</p>
          <h2>社会を形づくる主な要素</h2>
        </div>
        <div className="layer-grid">
          <article>
            <span>1</span>
            <h3>政治</h3>
            <p>統治制度、権力関係、政策決定、中央と地域の関係を扱います。</p>
          </article>
          <article>
            <span>2</span>
            <h3>経済・社会</h3>
            <p>財政、市場、人口、身分、都市、農村、労働と暮らしを扱います。</p>
          </article>
          <article>
            <span>3</span>
            <h3>外交・技術</h3>
            <p>国際環境、軍事、交通、通信、科学技術の変化を扱います。</p>
          </article>
          <article>
            <span>4</span>
            <h3>地理</h3>
            <p>地域差や交通網、人口移動など、空間的な関係が重要な場合には主題地図を用います。</p>
          </article>
        </div>
      </section>
    </>
  )
}
