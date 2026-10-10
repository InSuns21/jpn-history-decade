import type { ContentBlock } from '../../content-model/types'
import { LinkedText } from './LinkedText'

type TableBlock = Extract<ContentBlock, { type: 'table' }>

interface ProseTableProps {
  block: TableBlock
  routeKey: string
  sourceIds: string[]
  pageKind?: 'period' | 'structure' | 'theme'
}

export function ProseTable({ block, routeKey, sourceIds, pageKind = 'period' }: ProseTableProps) {
  const renderCell = (text: string) => (
    <LinkedText text={text} routeKey={routeKey} sourceIds={sourceIds} pageKind={pageKind} />
  )

  return (
    <div className="prose-table-wrap" role="region" aria-label="本文の比較表" tabIndex={0}>
      <table className="prose-table">
        <thead>
          <tr>
            {block.headers.map((header, index) => (
              <th scope="col" key={index}>{renderCell(header)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((cells, rowIndex) => (
            <tr key={rowIndex}>
              {cells.map((cell, columnIndex) => (
                columnIndex === 0
                  ? <th scope="row" key={columnIndex}>{renderCell(cell)}</th>
                  : <td key={columnIndex}>{renderCell(cell)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
