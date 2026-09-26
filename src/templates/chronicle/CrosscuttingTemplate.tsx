import { useEffect } from 'react'
import type { ContentBlock } from '../../content-model/types'
import type { CrosscuttingTemplateProps } from '../types'
import { findMapDefinition } from '../../maps/registry'
import { Glossary } from './Glossary'
import { LinkedText } from './LinkedText'
import { ThematicMap } from './ThematicMap'

function ContentBlocks({
  blocks,
  routeKey,
  pageKind,
  sourceIds,
}: {
  blocks: ContentBlock[]
  routeKey: string
  pageKind: 'structure' | 'theme'
  sourceIds: string[]
}) {
  return (
    <>
      {blocks.map((block, index) => {
        if (block.type === 'paragraph') {
          return (
            <p className="section-lead" key={'p-' + index}>
              <LinkedText
                text={block.text}
                routeKey={routeKey}
                pageKind={pageKind}
                sourceIds={sourceIds}
              />
            </p>
          )
        }

        if (block.type === 'list') {
          return (
            <ul className="point-list" key={'list-' + index}>
              {block.items.map((item) => (
                <li key={item}>
                  <LinkedText
                    text={item}
                    routeKey={routeKey}
                    pageKind={pageKind}
                    sourceIds={sourceIds}
                  />
                </li>
              ))}
            </ul>
          )
        }

        return (
          <h3 className="prose-subheading" key={'heading-' + index}>
            <LinkedText
              text={block.text}
              routeKey={routeKey}
              pageKind={pageKind}
              sourceIds={sourceIds}
            />
          </h3>
        )
      })}
    </>
  )
}

export function CrosscuttingTemplate({
  data,
  periods,
  activeTermId,
}: CrosscuttingTemplateProps) {
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
  const relatedPeriods = data.relatedPeriods
    .map((routeKey) => periods.find((period) => period.routeKey === routeKey))
    .filter((period) => period !== undefined)
  const visibleMapIds = data.maps.filter((mapId) => Boolean(findMapDefinition(mapId)))
  const kindLabel = data.kind === 'structure' ? '構造史' : 'テーマ史'

  return (
    <>
      <section className="decade-hero crosscutting-hero">
        <div className="page-width">
          <a className="back-link" href="#/">
            ← トップへ
          </a>
          <div className="decade-hero__meta">
            <span>{kindLabel}</span>
            <span>{data.periodLabel}</span>
          </div>
          <h1>{data.title}</h1>
          <p className="decade-hero__summary">
            <LinkedText
              text={data.summary}
              routeKey={data.routeKey}
              pageKind={data.kind}
              sourceIds={sourceIds}
            />
          </p>
          <div className="framing-question">
            <span>この横断テーマを考える問い</span>
            <strong>
              <LinkedText
                text={data.framingQuestion}
                routeKey={data.routeKey}
                pageKind={data.kind}
                sourceIds={sourceIds}
              />
            </strong>
          </div>
        </div>
      </section>

      <div className="page-width decade-layout">
        <aside className="decade-sidebar">
          <nav className="toc" aria-label="このページの目次">
            <strong>{kindLabel}</strong>
            {visibleMapIds.length > 0 && <a href="#maps">地図で見る</a>}
            {data.sections.map((section) => (
              <a key={section.id} href={'#' + section.id}>
                {section.title.split(' — ')[0]}
              </a>
            ))}
            <a href="#related-periods">関連する年代</a>
            <a href="#glossary">このテーマを読むための用語</a>
            {data.sources.length > 0 && <a href="#sources">史料・参考文献</a>}
          </nav>
        </aside>

        <article className="decade-article">
          {visibleMapIds.length > 0 && (
            <section id="maps" className="content-section">
              <div className="section-heading">
                <span>地</span>
                <div><h2>地図で見る</h2></div>
              </div>
              {visibleMapIds.map((mapId) => (
                <ThematicMap key={mapId} mapId={mapId} />
              ))}
            </section>
          )}

          {data.sections.map((section, index) => (
            <section id={section.id} className="content-section prose-section" key={section.id}>
              <div className="section-heading">
                <span>{index + 1}</span>
                <div>
                  <h2>
                    <LinkedText
                      text={section.title}
                      routeKey={data.routeKey}
                      pageKind={data.kind}
                      sourceIds={sourceIds}
                    />
                  </h2>
                </div>
              </div>
              <ContentBlocks
                blocks={section.blocks}
                routeKey={data.routeKey}
                pageKind={data.kind}
                sourceIds={sourceIds}
              />
              {section.questions.length > 0 && (
                <div className="question-box">
                  <strong>考えてみる</strong>
                  <ul>
                    {section.questions.map((question) => (
                      <li key={question}>
                        <LinkedText
                          text={question}
                          routeKey={data.routeKey}
                          pageKind={data.kind}
                          sourceIds={sourceIds}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          ))}

          <section id="related-periods" className="content-section">
            <div className="section-heading">
              <span>年</span>
              <div><h2>関連する年代</h2></div>
            </div>
            <div className="related-period-grid">
              {relatedPeriods.map((period) => (
                <a href={'#/period/' + period.routeKey} key={period.routeKey}>
                  <small>{period.eraLabel}</small>
                  <strong>{period.periodLabel}</strong>
                  <span>{period.framingQuestion}</span>
                </a>
              ))}
            </div>
          </section>

          <Glossary terms={data.glossary} activeTermId={activeTermId} />

          {data.sources.length > 0 && (
            <section id="sources" className="content-section sources-section">
              <div className="section-heading">
                <span>史</span>
                <div><h2>史料・参考文献</h2></div>
              </div>
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
        </article>
      </div>
    </>
  )
}
