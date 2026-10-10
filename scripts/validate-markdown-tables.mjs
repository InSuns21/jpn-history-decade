import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

const generatedFile = path.join(process.cwd(), 'src/generated/content.generated.ts')
const source = fs.readFileSync(generatedFile, 'utf8')
const marker = 'export const compiledContent: CompiledSiteContent = '
const start = source.indexOf(marker)
assert.ok(start >= 0, 'compiled site content is missing')
const compiled = JSON.parse(source.slice(start + marker.length))

const page = compiled.crosscutting.find((item) => item.routeKey === 'us-japan-negotiation-economic-pressure-1941')
assert.ok(page, '1941 US–Japan negotiation theme is missing')

const section = page.sections.find((item) => item.id === 'comparison-table')
assert.ok(section, 'four-axis comparison section is missing')
const table = section.blocks.find((block) => block.type === 'table')
assert.ok(table, 'Markdown comparison must compile into a table block, not a paragraph')
assert.deepEqual(table.headers, ['時点', '要求・譲歩', '軍事的位置', '経済条件', '時間'])
assert.equal(table.rows.length, 12, 'all 12 historical comparison rows must be retained')
assert.ok(table.rows.every((row) => row.length === table.headers.length), 'table columns must stay aligned')
assert.equal(table.rows[0][0], '4月')
assert.equal(table.rows.at(-1)[0], '11月26〜12月1日')

console.log('Markdown table regression: five headers and all twelve comparison rows retained.')
