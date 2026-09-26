import { Fragment, type ReactNode } from 'react'

interface LinkedTextProps {
  text: string
  routeKey: string
  sourceIds?: string[]
  pageKind?: 'period' | 'structure' | 'theme'
}

function renderInlineText(
  text: string,
  routeKey: string,
  sourceIds: string[],
  keyPrefix: string,
  pageKind: 'period' | 'structure' | 'theme',
  allowStrong = true,
): ReactNode[] {
  const nodes: ReactNode[] = []
  const inlinePattern = allowStrong
    ? /\*\*(.+?)\*\*|\[\[term:([a-z0-9-]+)\|([^\]]+)\]\]|\[@([a-z0-9-]+)\]/g
    : /\[\[term:([a-z0-9-]+)\|([^\]]+)\]\]|\[@([a-z0-9-]+)\]/g

  let cursor = 0
  let match: RegExpExecArray | null

  while ((match = inlinePattern.exec(text)) !== null) {
    const start = match.index

    if (start > cursor) nodes.push(text.slice(cursor, start))

    if (allowStrong) {
      const [raw, strongText, termId, label, sourceId] = match

      if (strongText !== undefined) {
        nodes.push(
          <strong key={keyPrefix + '-strong-' + start}>
            {renderInlineText(strongText, routeKey, sourceIds, keyPrefix + '-strong-' + start, pageKind, false)}
          </strong>,
        )
      } else if (termId) {
        nodes.push(
          <a
            className="glossary-link"
            href={'#/' + pageKind + '/' + routeKey + '/terms/' + termId}
            key={keyPrefix + '-term-' + termId + '-' + start}
          >
            {label}
          </a>,
        )
      } else if (sourceId) {
        const sourceNumber = sourceIds.indexOf(sourceId) + 1
        nodes.push(
          <sup className="source-ref" key={keyPrefix + '-source-' + sourceId + '-' + start}>
            <a href={'#source-' + sourceId} aria-label={'出典 ' + sourceNumber}>
              [{sourceNumber}]
            </a>
          </sup>,
        )
      }

      cursor = start + raw.length
      continue
    }

    const [raw, termId, label, sourceId] = match

    if (termId) {
      nodes.push(
        <a
          className="glossary-link"
          href={'#/' + pageKind + '/' + routeKey + '/terms/' + termId}
          key={keyPrefix + '-term-' + termId + '-' + start}
        >
          {label}
        </a>,
      )
    } else if (sourceId) {
      const sourceNumber = sourceIds.indexOf(sourceId) + 1
      nodes.push(
        <sup className="source-ref" key={keyPrefix + '-source-' + sourceId + '-' + start}>
          <a href={'#source-' + sourceId} aria-label={'出典 ' + sourceNumber}>
            [{sourceNumber}]
          </a>
        </sup>,
      )
    }

    cursor = start + raw.length
  }

  if (cursor < text.length) nodes.push(text.slice(cursor))

  return nodes
}

export function LinkedText({
  text,
  routeKey,
  sourceIds = [],
  pageKind = 'period',
}: LinkedTextProps) {
  return (
    <Fragment>
      {renderInlineText(text, routeKey, sourceIds, 'inline', pageKind)}
    </Fragment>
  )
}
