import { useEffect } from 'react'
import type { ContentBlock } from '../../content-model/types'
import type { PeriodTemplateProps } from '../types'
import { Glossary } from './Glossary'
import { LinkedText } from './LinkedText'
import { TimelineNav } from './TimelineNav'

function ContentBlocks({
  blocks,
  routeKey,
  sourceIds,
}: {
  blocks: ContentBlock[]
  routeKey: string
  sourceIds: string[]
}) {
  return (
    <>
      {blocks.map((block, index) => {
        if (block.type === 'paragraph') {
          return (
            <p className="section-lead" key={'p-' + index}>
              <LinkedText text={block.text} routeKey={routeKey} sourceIds={sourceIds} />
            </p>
          )
        }

        if (block.type === 'list') {
          return (
            <ul className="point-list" key={'list-' + index}>
              {block.items.map((item) => (
                <li key={item}>
                  <LinkedText text={item} routeKey={routeKey} sourceIds={sourceIds} />
                </li>
              ))}
            </ul>
          )
        }

        return (
          <h3 className="prose-subheading" key={'heading-' + index}>
            <LinkedText text={block.text} routeKey={routeKey} sourceIds={sourceIds} />
          </h3>
        )
      })}
    </>
  )
}

export function PeriodTemplate({
  data,
  periods,
  previous,
  next,
  activeTermId,
}: PeriodTemplateProps) {
  useEffect(() => {
    if (activeTermId) {
      requestAnimationFrame(() => {
        document.getElementById('term-' + activeTermId)?.scrollIntoView({ block: 'start' })
      })
      return
    }
    window.scrollTo({ top: 0 })
  }, [activeTermId, data.routeKey])

  const sourceIds = data.sources.map((source) => source.id)

  return (
    <>
      <section className="decade-hero">
        <div className="page-width">
          <a className="back-link" href="#/">
            ← 年代一覧
          </a>
          <div className="decade-hero__meta">
            <span>{data.eraLabel}</span>
            <span>{data.periodLabel}</span>
          </div>
          <h1>{data.title}</h1>
          <p className="decade-hero__summary">
            <LinkedText text={data.summary} routeKey={data.routeKey} sourceIds={sourceIds} />
          </p>
          <div className="framing-question">
            <span>この時代を考える問い</span>
            <strong>
              <LinkedText text={data.framingQuestion} routeKey={data.routeKey} sourceIds={sourceIds} />
            </strong>
          </div>
        </div>
      </section>

      <div className="page-width decade-layout">
        <aside className="decade-sidebar">
          <TimelineNav periods={periods} activeRouteKey={data.routeKey} />
          <nav className="toc" aria-label="このページの目次">
            <strong>目次</strong>
            <a href="#snapshot">この時代の概観</a>
            {data.sections.map((section) => (
              <a key={section.id} href={'#' + section.id}>
                {section.title.split(' — ')[0]}
              </a>
            ))}
            <a href="#change">前の時代からの変化</a>
            <a href="#assumptions">当時の前提と次の論点</a>
            <a href="#glossary">この時代を読むための用語</a>
            {data.sources.length > 0 && <a href="#sources">史料・参考文献</a>}
          </nav>
        </aside>

        <article className="decade-article">
          <section id="snapshot" className="content-section">
            <div className="section-heading">
              <span>1</span>
              <div><h2>この時代の概観</h2></div>
            </div>
            <div className="snapshot-grid">
              {data.snapshot.map((item) => (
                <div className="snapshot-card" key={item.label}>
                  <span>{item.label}</span>
                  <strong><LinkedText text={item.value} routeKey={data.routeKey} sourceIds={sourceIds} /></strong>
                  {item.note && <p><LinkedText text={item.note} routeKey={data.routeKey} sourceIds={sourceIds} /></p>}
                </div>
              ))}
            </div>
          </section>

          {data.sections.map((section, index) => (
            <section id={section.id} className="content-section prose-section" key={section.id}>
              <div className="section-heading">
                <span>{index + 2}</span>
                <div><h2><LinkedText text={section.title} routeKey={data.routeKey} sourceIds={sourceIds} /></h2></div>
              </div>
              <ContentBlocks blocks={section.blocks} routeKey={data.routeKey} sourceIds={sourceIds} />
              {section.questions.length > 0 && (
                <div className="question-box">
                  <strong>考えてみる</strong>
                  <ul>
                    {section.questions.map((question) => (
                      <li key={question}><LinkedText text={question} routeKey={data.routeKey} sourceIds={sourceIds} /></li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          ))}

          <section id="change" className="content-section">
            <div className="section-heading">
              <span>{data.sections.length + 2}</span>
              <div><h2>前の時代からの変化と持続</h2></div>
            </div>
            <div className="change-table-wrap">
              <table className="change-table">
                <thead>
                  <tr>
                    <th>項目</th>
                    <th>{data.previousPeriodLabel}</th>
                    <th>{data.currentPeriodLabel}</th>
                    <th>歴史的な意味</th>
                  </tr>
                </thead>
                <tbody>
                  {data.changes.map((item) => (
                    <tr key={item.label}>
                      <th>{item.label}</th>
                      <td><LinkedText text={item.before} routeKey={data.routeKey} sourceIds={sourceIds} /></td>
                      <td><LinkedText text={item.current} routeKey={data.routeKey} sourceIds={sourceIds} /></td>
                      <td><LinkedText text={item.significance} routeKey={data.routeKey} sourceIds={sourceIds} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="assumptions" className="content-section two-column-section">
            <div>
              <div className="section-heading compact"><span>A</span><div><h2>当時の前提</h2></div></div>
              <ul className="plain-list">
                {data.contemporaryAssumptions.map((item) => (
                  <li key={item}><LinkedText text={item} routeKey={data.routeKey} sourceIds={sourceIds} /></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="section-heading compact"><span>B</span><div><h2>次の時代への論点</h2></div></div>
              <ul className="plain-list">
                {data.nextIssues.map((item) => (
                  <li key={item}><LinkedText text={item} routeKey={data.routeKey} sourceIds={sourceIds} /></li>
                ))}
              </ul>
            </div>
          </section>

          <Glossary terms={data.glossary} activeTermId={activeTermId} />

          {data.sources.length > 0 && (
            <section id="sources" className="content-section sources-section">
              <div className="section-heading"><span>史</span><div><h2>史料・参考文献</h2></div></div>
              <ol className="plain-list source-list">
                {data.sources.map((source, index) => (
                  <li id={'source-' + source.id} key={source.id}>
                    <span className="source-number">[{index + 1}]</span>
                    <span>
                      {source.author && <>{source.author}、</>}
                      {source.url ? (
                        <a href={source.url} target="_blank" rel="noreferrer">
                          <strong>{source.title}</strong>
                        </a>
                      ) : (
                        <strong>{source.title}</strong>
                      )}
                      {source.institution && <>（{source.institution}）</>}
                    </span>
                  </li>
                ))}
              </ol>
            </section>
          )}

          <nav className="period-navigation" aria-label="前後の時代">
            <div>
              {previous && (
                <a href={'#/period/' + previous.routeKey}>
                  <small>← 前の時代</small>
                  <strong>{previous.periodLabel}</strong>
                </a>
              )}
            </div>
            <div>
              {next && (
                <a href={'#/period/' + next.routeKey}>
                  <small>次の時代 →</small>
                  <strong>{next.periodLabel}</strong>
                </a>
              )}
            </div>
          </nav>
        </article>
      </div>
    </>
  )
}
