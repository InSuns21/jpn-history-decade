import { Fragment, type ReactNode } from 'react'

interface LinkedTextProps {
  text: string
  routeKey: string
}

const TERM_LINK = /\[\[term:([a-z0-9-]+)\|([^\]]+)\]\]/g

export function LinkedText({ text, routeKey }: LinkedTextProps) {
  const nodes: ReactNode[] = []
  let cursor = 0
  let match: RegExpExecArray | null

  while ((match = TERM_LINK.exec(text)) !== null) {
    const [raw, termId, label] = match
    const start = match.index

    if (start > cursor) nodes.push(text.slice(cursor, start))

    nodes.push(
      <a
        className="glossary-link"
        href={'#/period/' + routeKey + '/terms/' + termId}
        key={termId + '-' + start}
      >
        {label}
      </a>,
    )

    cursor = start + raw.length
  }

  if (cursor < text.length) nodes.push(text.slice(cursor))

  return <Fragment>{nodes}</Fragment>
}
