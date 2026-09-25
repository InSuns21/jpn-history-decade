import type { DecadePageData } from '../types/history'
import { TimelineNav } from './TimelineNav'

interface DecadePageProps {
  data: DecadePageData
}

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
          </div>
          <h1>{data.title}</h1>
          <p className="decade-hero__summary">{data.summary}</p>
          <div className="framing-question">
            <span>この時代を考える問い</span>
            <strong>{data.framingQuestion}</strong>
          </div>
        </div>
      </section>

      <div className="page-width decade-layout">
        <aside className="decade-sidebar">
          <TimelineNav activeYear={data.year} />
          <nav className="toc" aria-label="このページの目次">
            <strong>目次</strong>
            <a href="#snapshot">この時代の概観</a>
            {data.sections.map((section) => (
              <a key={section.id} href={`#${section.id}`}>
                {section.title.split(' — ')[0]}
              </a>
            ))}
            <a href="#change">前の時代からの変化</a>
            <a href="#assumptions">当時の前提と次の論点</a>
          </nav>
        </aside>

        <article className="decade-article">
          <section id="snapshot" className="content-section">
            <div className="section-heading">
              <span>1</span>
              <div>
                <h2>この時代の概観</h2>
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
                <span>{index + 2}</span>
                <div>
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
                  <strong>考えてみる</strong>
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
              <span>{data.sections.length + 2}</span>
              <div>
                <h2>前の時代から何が変わったか</h2>
              </div>
            </div>
            <div className="change-table-wrap">
              <table className="change-table">
                <thead>
                  <tr>
                    <th>項目</th>
                    <th>18世紀末まで</th>
                    <th>1800年代</th>
                    <th>歴史的な意味</th>
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
                  <h2>当時の前提</h2>
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
        </article>
      </div>
    </>
  )
}
