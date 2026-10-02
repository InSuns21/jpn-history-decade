import { homeFigures } from '../../media/homeFigures'
import type { HomeTemplateProps } from '../types'
import { HistoricalFigure } from './HistoricalFigure'
import { TimelineNav } from './TimelineNav'

export function HomeTemplate({ periods, crosscutting }: HomeTemplateProps) {
  const firstPeriod = periods[0]

  return (
    <>
      <section className="home-hero">
        <div className="page-width home-hero__grid">
          <div className="home-hero__copy">
            <p className="eyebrow">日本史・1800年以降</p>
            <h1>
              <span>近現代史</span>
              <strong>24</strong>
            </h1>
            <p className="home-hero__lead">
              1800年から始める日本史。政治を軸に、経済・社会・外交・技術・文化・地理を結びつけながら、
              「誰が何をし、何が変わったか」を社会の状態変化としてたどります。
            </p>
            <div className="home-hero__principles" aria-label="サイトの読み方">
              <span>事件ではなく構造を追う</span>
              <span>当時の選択肢から考える</span>
              <span>変化と持続を並べて読む</span>
            </div>
            {firstPeriod && (
              <div className="hero-actions">
                <a className="button button--primary" href={'#/period/' + firstPeriod.routeKey}>
                  {firstPeriod.currentPeriodLabel}から読む
                </a>
                <a className="button button--secondary" href="#crosscutting">
                  横断テーマを見る
                </a>
              </div>
            )}
          </div>

          <aside className="home-hero__archive" aria-label="歴史図版">
            <HistoricalFigure
              {...homeFigures[0]}
              className="historical-figure--hero"
              priority
            />
            <div className="home-hero__archive-pair">
              <HistoricalFigure {...homeFigures[1]} className="historical-figure--compact" />
              <HistoricalFigure {...homeFigures[2]} className="historical-figure--compact" />
            </div>
            <p className="home-hero__archive-note">
              図版は出典と権利状態を確認できるものだけを掲載しています。
            </p>
          </aside>
        </div>
      </section>

      <section className="page-width home-section">
        <div className="home-section__heading">
          <p>第1章</p>
          <h2>年代から読む</h2>
          <span>各時期の政治・経済・社会の状態と、その前後で生じた変化をたどります。</span>
        </div>
        <TimelineNav periods={periods} />
      </section>

      {crosscutting.length > 0 && (
        <section id="crosscutting" className="page-width home-section">
          <div className="home-section__heading">
            <p>第2章</p>
            <h2>横断して読む</h2>
            <span>
              同じ制度・経済・外交の論点を複数年代にまたがって追い、何が変わり、何が残ったかを整理します。
            </span>
          </div>
          <div className="crosscutting-grid">
            {crosscutting.map((page) => (
              <a href={'#/' + page.kind + '/' + page.routeKey} key={page.id}>
                <small>{page.presentation === 'source' ? '史料' : page.kind === 'structure' ? '構造史' : 'テーマ史'}・{page.periodLabel}</small>
                <strong>{page.title}</strong>
                <span>{page.framingQuestion}</span>
              </a>
            ))}
          </div>
        </section>
      )}

      <section className="page-width home-section">
        <div className="home-section__heading">
          <p>第3章</p>
          <h2>社会を形づくる主な要素</h2>
          <span>政治だけで説明を閉じず、その時代の制約をつくった経済・情報・空間まで接続します。</span>
        </div>
        <div className="layer-grid">
          <article><span>1</span><h3>政治</h3><p>統治制度、権力関係、政策決定、中央と地域の関係を扱います。</p></article>
          <article><span>2</span><h3>経済・社会</h3><p>財政、市場、人口、身分、都市、農村、労働と暮らしを扱います。</p></article>
          <article><span>3</span><h3>外交・技術</h3><p>国際環境、軍事、交通、通信、科学技術の変化を扱います。</p></article>
          <article><span>4</span><h3>地理</h3><p>地域差や交通網、人口移動など、空間的な関係が重要な場合には主題地図を用います。</p></article>
        </div>
      </section>
    </>
  )
}
