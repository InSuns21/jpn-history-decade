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
          <h2>この時代を読むための用語</h2>
        </div>
      </div>
      <p className="glossary-intro">
        本文に登場する重要な制度・人物・概念を、定義だけでなく他の制度や社会の変化とのつながりまで整理します。
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
              {item.periodNote && (
                <p className="glossary-period-note">
                  <strong>この時代では：</strong>
                  {item.periodNote}
                </p>
              )}
              <p className="glossary-connections">
                <strong>つながり：</strong>
                {item.connections}
              </p>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
