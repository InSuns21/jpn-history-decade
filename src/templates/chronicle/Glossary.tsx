import type { GlossaryTerm } from '../../content-model/types'

interface GlossaryProps {
  terms: GlossaryTerm[]
  activeTermId?: string
}

export function Glossary({ terms, activeTermId }: GlossaryProps) {
  return (
    <section id="glossary" className="content-section glossary-section">
      <div className="section-heading">
        <span>用</span>
        <div>
          <h2>論述対策の重要用語</h2>
        </div>
      </div>
      <p className="glossary-intro">
        国公立大学の論述で、制度や因果関係を説明するときに使える重要語をまとめています。用語だけでなく、何と結びつけて書くかも確認します。
      </p>
      <dl className="glossary-list">
        {terms.map((item) => (
          <div
            className={'glossary-item' + (activeTermId === item.id ? ' is-active' : '')}
            id={'term-' + item.id}
            key={item.id}
          >
            <dt>
              <span>{item.term}</span>
              <small>{item.category}</small>
            </dt>
            <dd>
              <p>{item.definition}</p>
              <p className="glossary-essay-point">
                <strong>論述では：</strong>
                {item.essayPoint}
              </p>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
