import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { parse as parseYaml } from 'yaml'
import { checkGranularity, inclusiveDays, SHORT_THRESHOLD_DAYS, GATE_START } from './period-granularity.mjs'

const root = process.cwd()
const dir = path.join(root, 'content', 'periods')
const withReport = process.argv.includes('--report')
const goodDecision = {
  stateChange: '内閣の対外政策の選択肢がこの時期に変更され、交渉相手へ新たな条件を提示する決定に至った。',
  standaloneQuestion: '交渉条件と政策決定を前後の行政実施から区分することで、当時の意思決定過程を説明できる。',
  mergeCost: '前後の期間に統合すると政府の決定前後の情報と選択肢を混同し、政策判断の違いを説明しにくい。',
}

function fixtures() {
  assert.equal(inclusiveDays('1944-02-28', '1944-03-01'), 3)
  assert.throws(() => inclusiveDays('1943-05-10', '1943-05-09'), /follow/)
  assert.equal(checkGranularity({ status: 'published', startDate: '1943-05-09', endDate: '1943-05-13' }).errors.length, 1)
  assert.equal(checkGranularity({ status: 'published', startDate: '1943-05-09', endDate: '1943-05-13', granularityDecision: goodDecision }).errors.length, 0)
  assert.equal(checkGranularity({ status: 'published', startDate: '1943-05-09', endDate: '1943-05-13', granularityDecision: { ...goodDecision, mergeCost: '重要なため' } }).errors.length, 1)
  assert.equal(checkGranularity({ status: 'published', startDate: '1943-05-09', endDate: '1943-05-22' }).errors.length, 0)
  assert.equal(checkGranularity({ status: 'published', startDate: '1942-08-07', endDate: '1942-08-09' }).errors.length, 0)
  assert.equal(checkGranularity({ status: 'draft', startDate: '1943-05-09', endDate: '1943-05-13' }).errors.length, 0)
}
fixtures()

const pages = []
const errors = []
for (const name of fs.readdirSync(dir).filter((x) => x.endsWith('.md'))) {
  const file = path.join(dir, name)
  const source = fs.readFileSync(file, 'utf8')
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/u)
  if (!match) { errors.push(name + ': invalid frontmatter'); continue }
  let frontmatter
  try { frontmatter = parseYaml(match[1]) } catch (error) {
    errors.push(name + ': invalid YAML: ' + error.message)
    continue
  }
  const startDate = frontmatter.startDate ?? String(frontmatter.startYear).padStart(4, '0') + '-01-01'
  const endDate = frontmatter.endDate ?? String(frontmatter.endYear).padStart(4, '0') + '-12-31'
  try {
    const { days, gated, errors: warnings } = checkGranularity({ ...frontmatter, startDate, endDate })
    pages.push({ file: name, startDate, endDate, days, status: frontmatter.status, gated })
    for (const message of warnings) errors.push(name + ': ' + message)
  } catch (error) { errors.push(name + ': ' + error.message) }
}
pages.sort((a,b) => a.startDate.localeCompare(b.startDate))
if (withReport) {
  for (const year of ['1941','1942','1943']) {
    const subset = pages.filter((p) => p.startDate.startsWith(year) && p.status === 'published')
    const sorted = subset.map((p)=>p.days).sort((a,b)=>a-b)
    const median = sorted.length ? sorted[Math.floor(sorted.length/2)] : 'n/a'
    const short = sorted.filter((days)=>days < SHORT_THRESHOLD_DAYS).length
    console.log(year + ': ' + subset.length + ' articles, median ' + median + ' days, <14 days ' + short)
  }
  // A signal for reviewers, never an automatic semantic verdict.
  const recent = pages.filter((p) => p.status === 'published' && p.startDate >= GATE_START)
  for (let i = 2; i < recent.length; i++) {
    const group = recent.slice(i - 2, i + 1)
    const span = inclusiveDays(group[0].startDate, group[2].endDate)
    if (span < 42) {
      console.log('REVIEW density: ' + group[0].startDate + '–' + group[2].endDate +
        ' spans ' + span + ' days across 3 articles; verify three distinct transitions.')
    }
  }
}
if (errors.length) {
  for (const error of errors) console.error('Granularity: ' + error)
  process.exit(1)
}
console.log('Granularity validation passed (' + pages.length +
  ' period files; new published <' + SHORT_THRESHOLD_DAYS + '-day gate from ' + GATE_START + ').')
