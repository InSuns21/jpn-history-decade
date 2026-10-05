import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const periodsDir = path.join(root, 'content', 'periods')
const WARN_SIMILARITY = 0.16
const FAIL_SIMILARITY = 0.48
const MIN_PARAGRAPH_CHARS = 120
const MAX_WARNINGS = 30

function relative(file) {
  return path.relative(root, file).replaceAll('\\', '/')
}

function listMarkdownFiles(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) => {
      const file = path.join(dir, entry.name)
      if (entry.isDirectory()) return listMarkdownFiles(file)
      return entry.isFile() && entry.name.endsWith('.md') ? [file] : []
    })
}

function splitFrontmatter(source, file) {
  if (!source.startsWith('---\n')) throw new Error(file + ': frontmatter must start with ---')
  const end = source.indexOf('\n---\n', 4)
  if (end < 0) throw new Error(file + ': frontmatter closing --- is missing')
  return {
    frontmatter: source.slice(4, end),
    body: source.slice(end + 5),
  }
}

function field(frontmatter, name) {
  const prefix = name + ':'
  const line = frontmatter.split('\n').find((item) => item.startsWith(prefix))
  if (!line) return ''
  let value = line.slice(prefix.length).trim()
  if (
    value.length >= 2 &&
    ((value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'")))
  ) {
    value = value.slice(1, -1)
  }
  return value.trim()
}

function normalizeParagraph(paragraph) {
  return paragraph
    .replace(/<!--[^]*?-->/gu, '')
    .replace(/\[@[^\]]+\]/gu, '')
    .replace(/\[\[term:[^|\]]+\|([^\]]+)\]\]/gu, '$1')
    .replace(/\[([^\]]+)\]\([^\)]+\)/gu, '$1')
    .replace(/^\s*#{1,6}\s+.*$/gmu, '')
    .replace(/[*_~\x60>#]/gu, '')
    .replace(/\s+/gu, '')
    .replace(/[。！？、，．・「」『』（）()［］【】\[\]：:;；—―-]/gu, '')
}

function paragraphs(body) {
  return body
    .split(/\n\s*\n/gu)
    .map((paragraph) => normalizeParagraph(paragraph))
    .filter((paragraph) => Array.from(paragraph).length >= MIN_PARAGRAPH_CHARS)
}

function trigrams(text) {
  const chars = Array.from(text)
  const grams = new Set()
  for (let i = 0; i <= chars.length - 3; i += 1) {
    grams.add(chars.slice(i, i + 3).join(''))
  }
  return grams
}

function jaccard(a, b) {
  const aa = trigrams(a)
  const bb = trigrams(b)
  let intersection = 0
  for (const gram of aa) if (bb.has(gram)) intersection += 1
  return intersection / (aa.size + bb.size - intersection || 1)
}

const pages = listMarkdownFiles(periodsDir)
  .sort()
  .map((filePath) => {
    const file = relative(filePath)
    const source = fs.readFileSync(filePath, 'utf8')
    const { frontmatter, body } = splitFrontmatter(source, file)
    return {
      file,
      status: field(frontmatter, 'status'),
      startDate: field(frontmatter, 'startDate'),
      paragraphs: paragraphs(body),
    }
  })
  .filter((page) => page.status === 'published')
  .sort((a, b) => a.startDate.localeCompare(b.startDate))

const warnings = []
const failures = []

for (let i = 1; i < pages.length; i += 1) {
  const previous = pages[i - 1]
  const current = pages[i]
  let best = null

  for (const left of previous.paragraphs) {
    for (const right of current.paragraphs) {
      const score = jaccard(left, right)
      if (!best || score > best.score) best = { score, left, right }
    }
  }

  if (!best || best.score < WARN_SIMILARITY) continue

  const message =
    previous.file +
    ' -> ' +
    current.file +
    ': adjacent long-paragraph similarity ' +
    best.score.toFixed(3) +
    '. Previous: "' +
    best.left.slice(0, 90) +
    '..." Current: "' +
    best.right.slice(0, 90) +
    '..."'

  if (best.score >= FAIL_SIMILARITY) failures.push(message)
  else warnings.push(message)
}

if (warnings.length > 0) {
  console.warn('Adjacent-period repetition review warnings:')
  for (const warning of warnings.slice(0, MAX_WARNINGS)) console.warn('- ' + warning)
  if (warnings.length > MAX_WARNINGS) {
    console.warn('- ... ' + (warnings.length - MAX_WARNINGS) + ' more warning(s)')
  }
  console.warn('')
  console.warn(
    'Warnings are review signals only. Keep a repeated setup when it has a new causal role; otherwise compress the predecessor context to one or two sentences and move to the new state change.',
  )
  console.warn('')
}

if (failures.length > 0) {
  console.error('Adjacent-period repetition audit failed:')
  for (const failure of failures) console.error('- ' + failure)
  console.error('')
  console.error(
    'Near-copy repetition across adjacent published periods is not allowed. Preserve only the transition context needed for the newer page.',
  )
  process.exit(1)
}

console.log(
  'Adjacent-period repetition audit passed for ' +
    pages.length +
    ' published period page(s); ' +
    warnings.length +
    ' review warning(s).',
)
