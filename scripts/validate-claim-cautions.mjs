import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const contentDirs = [
  path.join(root, 'content', 'periods'),
  path.join(root, 'content', 'structures'),
  path.join(root, 'content', 'themes'),
]

const RULES = [
  { id: 'meaning-not', pattern: /意味しない/u, label: '意味しない' },
  { id: 'meaning-not-variant', pattern: /意味するものではない/u, label: '意味するものではない' },
  { id: 'not-same', pattern: /同一視しない/u, label: '同一視しない' },
  { id: 'not-same-variant', pattern: /同一視できない/u, label: '同一視できない' },
  { id: 'not-the-case', pattern: /わけではない/u, label: 'わけではない' },
  { id: 'not-the-same', pattern: /同じではない/u, label: '同じではない' },
  { id: 'not-the-thing', pattern: /ことではない/u, label: 'ことではない' },
  { id: 'not-completed-that-way', pattern: /(?:した|された)のではない/u, label: '〜したのではない' },
  { id: 'not-merely', pattern: /単なる[^。！？\n]{0,80}ではない/u, label: '単なる〜ではない' },
  { id: 'not-only-kind', pattern: /だけの[^。！？\n]{0,80}ではない/u, label: '〜だけの〜ではない' },
  { id: 'not-separate-things', pattern: /別々の[^。！？\n]{0,80}ではない/u, label: '別々の〜ではない' },
  { id: 'not-one-sided-but', pattern: /一方的に[^。！？\n]{0,80}ではなく/u, label: '一方的に〜ではなく' },
  { id: 'do-not-regard', pattern: /みなさない/u, label: 'みなさない' },
  { id: 'not-explain-only', pattern: /だけ(?:で|から)説明しない/u, label: 'だけで/から説明しない' },
  {
    id: 'misread-if-regarded',
    pattern: /考えると[^。！？\n]{0,80}(?:誤|間違)/u,
    label: '考えると…誤る/間違う',
  },
]

const FRONTMATTER_SKIP_KEYS = new Set([
  'interpretiveCautions',
  'sources',
  'nextIssues',
  'maps',
  'mapPlacements',
])

const YAML_ALLOW = /^\s*#\s*claim-caution-lint:\s*allow\s+reason="([^"]+)"\s*$/
const MD_ALLOW = /^\s*<!--\s*claim-caution-lint:\s*allow\s+reason="([^"]+)"\s*-->\s*$/
const MARKER_TEXT = 'claim-caution-lint: allow reason='

function relative(file) {
  return path.relative(root, file).replaceAll('\\', '/')
}

function listMarkdownFiles(dir) {
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) => {
      const file = path.join(dir, entry.name)
      if (entry.isDirectory()) return listMarkdownFiles(file)
      return entry.isFile() && entry.name.endsWith('.md') ? [file] : []
    })
}

function splitFrontmatter(source, file) {
  if (!source.startsWith('---\n')) {
    return { error: file + ': frontmatter must start with ---' }
  }
  const end = source.indexOf('\n---\n', 4)
  if (end < 0) {
    return { error: file + ': frontmatter closing --- is missing' }
  }
  return {
    frontmatter: source.slice(4, end),
    body: source.slice(end + 5),
    bodyStartLine: source.slice(0, end + 5).split(/\r?\n/).length,
  }
}

function findViolation(text) {
  for (const rule of RULES) {
    if (rule.pattern.test(text)) return rule
  }
  return null
}

function validateFrontmatter(frontmatter, file) {
  const violations = []
  const lines = frontmatter.split(/\r?\n/)
  let currentKey = ''
  let allowNext = null

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index]
    const keyMatch = line.match(/^([A-Za-z][A-Za-z0-9]*):/)
    if (keyMatch) currentKey = keyMatch[1]

    const allowMatch = line.match(YAML_ALLOW)
    if (allowMatch) {
      allowNext = { reason: allowMatch[1], line: index + 2 }
      continue
    }

    if (/^\s*#/.test(line) || line.trim() === '') continue
    if (FRONTMATTER_SKIP_KEYS.has(currentKey)) {
      allowNext = null
      continue
    }

    const rule = findViolation(line)
    if (!rule) {
      if (allowNext) allowNext = null
      continue
    }

    if (allowNext) {
      allowNext = null
      continue
    }

    violations.push({
      file,
      line: index + 2,
      rule,
      excerpt: line.trim(),
      context: 'frontmatter:' + (currentKey || 'unknown'),
    })
  }

  return violations
}

function validateBody(body, bodyStartLine, file) {
  const violations = []
  const lines = body.split(/\r?\n/)
  let allowNext = null
  let inFence = false

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index]
    const absoluteLine = bodyStartLine + index

    if (/^\s*\`\`\`/.test(line)) {
      inFence = !inFence
      allowNext = null
      continue
    }
    if (inFence) continue

    const allowMatch = line.match(MD_ALLOW)
    if (allowMatch) {
      allowNext = { reason: allowMatch[1], line: absoluteLine }
      continue
    }

    if (line.trim() === '') continue
    if (/^\s*>/.test(line)) {
      allowNext = null
      continue
    }

    const rule = findViolation(line)
    if (!rule) {
      if (allowNext) allowNext = null
      continue
    }

    if (allowNext) {
      allowNext = null
      continue
    }

    violations.push({
      file,
      line: absoluteLine,
      rule,
      excerpt: line.trim(),
      context: 'markdown-body',
    })
  }

  return violations
}

const files = contentDirs.flatMap(listMarkdownFiles).sort()
const violations = []
const structuralErrors = []

for (const filePath of files) {
  const file = relative(filePath)
  const source = fs.readFileSync(filePath, 'utf8')
  const split = splitFrontmatter(source, file)
  if (split.error) {
    structuralErrors.push(split.error)
    continue
  }

  violations.push(...validateFrontmatter(split.frontmatter, file))
  violations.push(...validateBody(split.body, split.bodyStartLine, file))
}

if (structuralErrors.length > 0 || violations.length > 0) {
  console.error('Claim/caution lint failed:')
  for (const error of structuralErrors) console.error('- ' + error)
  for (const violation of violations) {
    console.error(
      '- ' +
        violation.file +
        ':' +
        violation.line +
        ' [' +
        violation.rule.label +
        '] ' +
        violation.context +
        ': ' +
        violation.excerpt,
    )
  }
  if (violations.length > 0) {
    console.error('')
    console.error(
      'Move general misreading-prevention wording to interpretiveCautions, or rewrite the claim layer affirmatively.',
    )
    console.error(
      'If a negative formulation is historically indispensable, add a reasoned exception immediately before it:',
    )
    console.error('  YAML: # claim-caution-lint: allow reason="制度上の未発効そのものが主張"')
    console.error('  Markdown: <!-- claim-caution-lint: allow reason="制度上の未発効そのものが主張" -->')
  }
  process.exit(1)
}

console.log(
  'Claim/caution lint passed for ' +
    files.length +
    ' article(s); no guarded caution-style wording remains in claim layers.',
)
