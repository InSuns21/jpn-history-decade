import type { DecadePageData } from '../types/history'
import { TimelineNav } from './TimelineNav'

interface DecadePageProps {
  data: DecadePageData
}

const statusLabel = {
  draft: '初期ドラフト',
  review: '監査中',
  published: '公開版',
} as const

export function DecadePage({ data }: DecadePageProps) {
  return (
    <>
      <section className="decade-hero">
        <div className="page-width">
          <a className="back-link" href="#/">
            ← 年代一覧
          </a>
          <div className="decade-hero__meta">
            <span>{data.eraLabel}</span>
            <span>{data.period}</span>
            <span>{statusLabel[data.status]}</span>
          </div>
          <h1>{data.title}</h1>
          <p className="decade-hero__summary">{data.summary}</p>
          <div className="framing-question">
            <span>この年代の問い</span>
            <strong>{data.framingQuestion}</strong>
          </div>
        </div>
      </section>

      <div className="page-width decade-layout">
        <aside className="decade-sidebar">
          <TimelineNav activeYear={data.year} />
          <nav className="toc" aria-label="このページの目次">
            <strong>このページ</strong>
            <a href="#snapshot">社会のスナップショット</a>
            {data.sections.map((section) => (
              <a key={section.id} href={`#${section.id}`}>
                {section.title.split(' — ')[0]}
              </a>
            ))}
            <a href="#change">前時代からの変化</a>
            <a href="#assumptions">当時の常識</a>
            <a href="#sources">史料・出典方針</a>
          </nav>
        </aside>

        <article className="decade-article">
          <section id="snapshot" className="content-section">
            <div className="section-heading">
              <span>01</span>
              <div>
                <p>STATE SNAPSHOT</p>
                <h2>社会のスナップショット</h2>
              </div>
            </div>
            <div className="snapshot-grid">
              {data.snapshot.map((item) => (
                <div className="snapshot-card" key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                  {item.note && <p>{item.note}</p>}
                </div>
              ))}
            </div>
          </section>

          {data.sections.map((section, index) => (
            <section id={section.id} className="content-section prose-section" key={section.id}>
              <div className="section-heading">
                <span>{String(index + 2).padStart(2, '0')}</span>
                <div>
                  <p>THEME</p>
                  <h2>{section.title}</h2>
                </div>
              </div>
              <p className="section-lead">{section.lead}</p>
              <ul className="point-list">
                {section.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              {section.questions && (
                <div className="question-box">
                  <strong>本文で検証する問い</strong>
                  <ul>
                    {section.questions.map((question) => (
                      <li key={question}>{question}</li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          ))}

          <section id="change" className="content-section">
            <div className="section-heading">
              <span>{String(data.sections.length + 2).padStart(2, '0')}</span>
              <div>
                <p>CHANGE</p>
                <h2>前の時代から何が変わったか</h2>
              </div>
            </div>
            <div className="change-table-wrap">
              <table className="change-table">
                <thead>
                  <tr>
                    <th>観測軸</th>
                    <th>18世紀末まで</th>
                    <th>1800年代</th>
                    <th>見る意味</th>
                  </tr>
                </thead>
                <tbody>
                  {data.changes.map((item) => (
                    <tr key={item.label}>
                      <th>{item.label}</th>
                      <td>{item.before}</td>
                      <td>{item.current}</td>
                      <td>{item.significance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="assumptions" className="content-section two-column-section">
            <div>
              <div className="section-heading compact">
                <span>A</span>
                <div>
                  <p>CONTEMPORARY VIEW</p>
                  <h2>当時の常識</h2>
                </div>
              </div>
              <ul className="plain-list">
                {data.contemporaryAssumptions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="section-heading compact">
                <span>B</span>
                <div>
                  <p>NEXT ISSUES</p>
                  <h2>次の時代への論点</h2>
                </div>
              </div>
              <ul className="plain-list">
                {data.nextIssues.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          {data.mapCandidate && (
            <aside className="map-policy-card">
              <span>MAPLIBRE / MAP CANDIDATE</span>
              <h2>{data.mapCandidate.title}</h2>
              <p>{data.mapCandidate.purpose}</p>
            </aside>
          )}

          <section id="sources" className="content-section sources-section">
            <div className="section-heading compact">
              <span>S</span>
              <div>
                <p>SOURCES</p>
                <h2>史料・出典</h2>
              </div>
            </div>
            <p>
              現在はページ構造を固めるための初期ドラフト。本文を拡張するときは、記述と同時に出典を追加する。
            </p>
            <ul className="plain-list">
              {data.sourceNotes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </article>
      </div>
    </>
  )
}
