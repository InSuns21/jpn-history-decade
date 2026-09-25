import { Fragment, type ReactNode } from 'react'

interface LinkedTextProps {
  text: string
  routeKey: string
  sourceIds?: string[]
}

const INLINE_LINK = /\[\[term:([a-z0-9-]+)\|([^\]]+)\]\]|\[@([a-z0-9-]+)\]/g

export function LinkedText({ text, routeKey, sourceIds = [] }: LinkedTextProps) {
  const nodes: ReactNode[] = []
  let cursor = 0
  let match: RegExpExecArray | null

  while ((match = INLINE_LINK.exec(text)) !== null) {
    const [raw, termId, label, sourceId] = match
    const start = match.index

    if (start > cursor) nodes.push(text.slice(cursor, start))

    if (termId) {
      nodes.push(
        <a
          className="glossary-link"
          href={'#/period/' + routeKey + '/terms/' + termId}
          key={'term-' + termId + '-' + start}
        >
          {label}
        </a>,
      )
    } else if (sourceId) {
      const sourceNumber = sourceIds.indexOf(sourceId) + 1
      nodes.push(
        <sup className="source-ref" key={'source-' + sourceId + '-' + start}>
          <a href={'#source-' + sourceId} aria-label={'出典 ' + sourceNumber}>
            [{sourceNumber}]
          </a>
        </sup>,
      )
    }

    cursor = start + raw.length
  }

  if (cursor < text.length) nodes.push(text.slice(cursor))

  return <Fragment>{nodes}</Fragment>
}
