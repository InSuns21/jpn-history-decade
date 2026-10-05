import fs from 'node:fs'
import path from 'node:path'
import { parse as parseYaml } from 'yaml'

const root = process.cwd()
const contentKinds = [
  { kind: 'period', dir: path.join(root, 'content', 'periods') },
  { kind: 'structure', dir: path.join(root, 'content', 'structures') },
  { kind: 'theme', dir: path.join(root, 'content', 'themes') },
]

const ANALYSIS_TERMS = [
  '構造',
  '枠組み',
  '制度回路',
  '政策分岐',
  '国家意思決定',
  '統治構造',
  '制度構造',
  '政策枠組み',
  '制度配置',
  '状態遷移',
]

const BROAD_DEICTICS = [
  'この構造',
  'この枠組み',
  'この回路',
  'この仕組み',
  'この配置',
  'この過程',
  'こうした構造',
  'こうした枠組み',
  'こうした回路',
]

const ENTITY_MARKERS = [
  '幕府',
  '朝廷',
  '政府',
  '内閣',
  '陸軍',
  '海軍',
  '外務省',
  '大蔵省',
  '参謀本部',
  '軍令部',
  '帝国議会',
  '衆議院',
  '貴族院',
  '日本',
  '米国',
  'アメリカ',
  '英国',
  'イギリス',
  '中国',
  '国民政府',
  '重慶政府',
  'ソ連',
  'ドイツ',
  'フランス',
  'オランダ',
  '関東軍',
  '大本営',
  '御前会議',
  '大本営政府連絡会議',
  '天皇',
  '首相',
  '外相',
  '陸相',
  '海相',
  '総督府',
  '台湾総督府',
  '朝鮮総督府',
]

const PUBLIC_FRONTMATTER_FIELDS = [
  'title',
  'summary',
  'framingQuestion',
  'snapshot',
  'changes',
  'contemporaryAssumptions',
  'interpretiveCautions',
  'nextIssues',
]

function relativePath(file) {
  return path.relative(root, file).replaceAll('\\', '/')
}

function listMarkdownFiles(dir) {
  return fs
    .readdirSync(dir)
    .filter((name) => name.endsWith('.md'))
    .sort()
    .map((name) => path.join(dir, name))
}

function parseDocument(file) {
  const source = fs.readFileSync(file, 'utf8')
  if (!source.startsWith('---\n')) throw new Error(`${relativePath(file)}: frontmatter is missing`)
  const end = source.indexOf('\n---\n', 4)
  if (end < 0) throw new Error(`${relativePath(file)}: frontmatter closing marker is missing`)
  return {
    frontmatter: parseYaml(source.slice(4, end)),
    body: source.slice(end + 5).trim(),
  }
}

function collectStrings(value, output = []) {
  if (typeof value === 'string') {
    output.push(value)
    return output
  }
  if (Array.isArray(value)) {
    value.forEach((item) => collectStrings(item, output))
    return output
  }
  if (value && typeof value === 'object') {
    Object.values(value).forEach((item) => collectStrings(item, output))
  }
  return output
}

function publicFrontmatterText(frontmatter) {
  return PUBLIC_FRONTMATTER_FIELDS.flatMap((field) => collectStrings(frontmatter[field])).join('\n')
}

function stripMarkdown(value) {
  return value
    .replace(/\[\[term:[a-z0-9-]+\|([^\]]+)\]\]/g, '$1')
    .replace(/\[@[^\]]+\]/g, '')
    .replace(/\{#[^}]+\}/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/[`*_>#|]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function splitSentences(text) {
  const normalized = text.replace(/\r/g, '')
  const chunks = normalized.split(/(?<=[。！？])|\n+/u)
  return chunks.map((chunk) => chunk.trim()).filter(Boolean)
}

function paragraphLeads(frontmatter, body) {
  const leads = []
  for (const field of ['summary', 'framingQuestion']) {
    if (typeof frontmatter[field] === 'string') leads.push(frontmatter[field])
  }
  for (const block of body.split(/\n\s*\n/)) {
    const clean = block
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean)
      .join(' ')
    if (clean) leads.push(clean)
  }
  return leads
}

function countOccurrences(text, token) {
  let count = 0
  let cursor = 0
  while (true) {
    const next = text.indexOf(token, cursor)
    if (next < 0) return count
    count += 1
    cursor = next + token.length
  }
}

function periodWave(routeKey) {
  const year = Number(routeKey.slice(0, 4))
  if (routeKey >= '1941-07-03' && routeKey <= '1941-12-08') return 'R1'
  if (year === 1940) return 'R2'
  if (year === 1941) return 'R3'
  if (year === 1937) return 'R4'
  if (year === 1938) return 'R5'
  if (year === 1939) return 'R6'
  if (year >= 1931 && year <= 1936) return 'R7'
  if (year >= 1905 && year <= 1930) return 'R8'
  if (year >= 1868 && year <= 1904) return 'R9'
  if (year >= 1800 && year <= 1867) return 'R10'
  return 'unassigned'
}

function analyseDocument(kind, file) {
  const { frontmatter, body } = parseDocument(file)
  const routeKey = String(frontmatter.routeKey ?? '')
  const status = String(frontmatter.status ?? '')
  const title = String(frontmatter.title ?? '')
  const publicText = `${publicFrontmatterText(frontmatter)}\n${body}`
  const sentences = splitSentences(publicText)

  let long100 = 0
  let long120 = 0
  let commaDense = 0
  let entityDense = 0
  let firstTermDense = 0
  const seenTerms = new Set()

  for (const rawSentence of sentences) {
    const sentence = stripMarkdown(rawSentence)
    if (sentence.length >= 100) long100 += 1
    if (sentence.length >= 120) long120 += 1
    if ((sentence.match(/、/g) ?? []).length >= 4) commaDense += 1

    const entityHits = ENTITY_MARKERS.filter((marker) => sentence.includes(marker)).length
    const dateHits = (sentence.match(/(?:\d{4}年|\d{1,2}月\d{1,2}日)/g) ?? []).length
    if (entityHits + dateHits >= 4) entityDense += 1

    const termIds = [...rawSentence.matchAll(/\[\[term:([a-z0-9-]+)\|/g)].map((match) => match[1])
    let firstTerms = 0
    for (const termId of termIds) {
      if (seenTerms.has(termId)) continue
      seenTerms.add(termId)
      firstTerms += 1
    }
    if (firstTerms >= 3) firstTermDense += 1
  }

  let abstractLead = 0
  for (const lead of paragraphLeads(frontmatter, body)) {
    const clean = stripMarkdown(lead).replace(/^[-*]\s*/, '').replace(/^#+\s*/, '')
    const opening = clean.slice(0, 48)
    if (ANALYSIS_TERMS.some((term) => opening.includes(term))) abstractLead += 1
  }

  const deictic = BROAD_DEICTICS.reduce(
    (count, token) => count + countOccurrences(publicText, token),
    0,
  )

  const signals = {
    long100,
    long120,
    abstractLead,
    deictic,
    entityDense,
    commaDense,
    firstTermDense,
  }
  const activeFamilies = Object.values(signals).filter((value) => value > 0).length
  const severeOverlap = long120 > 0 && (abstractLead > 0 || entityDense > 0 || commaDense > 0)
  const priority = activeFamilies >= 4 || severeOverlap ? 'high' : activeFamilies >= 2 ? 'medium' : 'low'

  return {
    kind,
    path: relativePath(file),
    routeKey,
    title,
    status,
    wave: kind === 'period' ? periodWave(routeKey) : 'R11',
    priority,
    activeFamilies,
    signals,
  }
}

const inventory = contentKinds
  .flatMap(({ kind, dir }) => listMarkdownFiles(dir).map((file) => analyseDocument(kind, file)))
  .filter((item) => item.status === 'published')

const signalTotals = Object.keys(inventory[0]?.signals ?? {}).reduce((totals, key) => {
  totals[key] = inventory.reduce((sum, item) => sum + item.signals[key], 0)
  return totals
}, {})

const byKind = Object.fromEntries(
  ['period', 'structure', 'theme'].map((kind) => [kind, inventory.filter((item) => item.kind === kind).length]),
)
const byPriority = Object.fromEntries(
  ['high', 'medium', 'low'].map((priority) => [priority, inventory.filter((item) => item.priority === priority).length]),
)
const waves = Object.fromEntries(
  [...new Set(inventory.map((item) => item.wave))]
    .sort((a, b) => Number(a.slice(1)) - Number(b.slice(1)))
    .map((wave) => [wave, inventory.filter((item) => item.wave === wave).map((item) => item.routeKey)]),
)

const report = {
  schemaVersion: 1,
  note: 'Readability signals are review aids only. They are not pass/fail criteria or a readability score.',
  inventoryCount: inventory.length,
  byKind,
  byPriority,
  signalTotals,
  waves,
  inventory,
}

if (process.argv.includes('--json')) {
  process.stdout.write(`${JSON.stringify(report)}\n`)
} else {
  console.log('High-school readability screening (report-only)')
  console.log(`inventory: ${report.inventoryCount} (period ${byKind.period}, structure ${byKind.structure}, theme ${byKind.theme})`)
  console.log(`priority: high ${byPriority.high}, medium ${byPriority.medium}, low ${byPriority.low}`)
  console.log(
    `signals: >=100 ${signalTotals.long100}, >=120 ${signalTotals.long120}, abstract-lead ${signalTotals.abstractLead}, deictic ${signalTotals.deictic}, entity-dense ${signalTotals.entityDense}, comma-dense ${signalTotals.commaDense}, first-term-dense ${signalTotals.firstTermDense}`,
  )
  console.log('High-priority review candidates:')
  for (const item of inventory.filter((entry) => entry.priority === 'high')) {
    console.log(`- ${item.wave} ${item.routeKey} ${item.path}`)
  }
  console.log('Readability signals are report-only; this command does not fail on candidate counts.')
}
