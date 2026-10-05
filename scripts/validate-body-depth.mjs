import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const periodsDir = path.join(root, 'content', 'periods')
const REVIEW_BODY_CHARS = 4500
const HARD_MIN_BODY_CHARS = 2500
const REASON_MIN_CHARS = 30
const COVERAGE_MIN_CHARS = 40
const MARKER =
  /^\s*<!--\s*body-depth-audit:\s*allow\s+reason="([^"]+)"\s+coverage="([^"]+)"\s*-->\s*$/mu

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
  if (!source.startsWith('---\n')) throw new Error(file + ': frontmatter must start with ---')
  const end = source.indexOf('\n---\n', 4)
  if (end < 0) throw new Error(file + ': frontmatter closing --- is missing')
  return {
    frontmatter: source.slice(4, end),
    body: source.slice(end + 5),
  }
}

function getStatus(frontmatter) {
  const match = frontmatter.match(/^status:\s*["']?([^"'\s]+)["']?\s*$/mu)
  return match?.[1] ?? ''
}

function stripReaderInvisibleSyntax(body) {
  return body
    .replace(/<!--[^]*?-->/gu, '')
    .replace(/^\s*\x60\x60\x60[^]*?^\s*\x60\x60\x60\s*$/gmu, '')
    .replace(/^\s*#{1,6}\s+.*$/gmu, '')
    .replace(/\[@[^\]]+\]/gu, '')
    .replace(/\[\[term:[^|\]]+\|([^\]]+)\]\]/gu, '$1')
    .replace(/\[([^\]]+)\]\([^\)]+\)/gu, '$1')
    .replace(/[*_~\x60>#-]/gu, '')
    .replace(/\s+/gu, '')
}

function substantiveCharCount(body) {
  return Array.from(stripReaderInvisibleSyntax(body)).length
}

function normalizedParagraphs(body) {
  return body
    .replace(/<!--[^]*?-->/gu, '')
    .split(/\n\s*\n/gu)
    .map((paragraph) =>
      stripReaderInvisibleSyntax(paragraph)
        .replace(/[。！？、，．・「」『』（）()［］【】\[\]]/gu, '')
        .trim(),
    )
    .filter((paragraph) => Array.from(paragraph).length >= 120)
}

function findDuplicateParagraph(body) {
  const seen = new Set()
  for (const paragraph of normalizedParagraphs(body)) {
    if (seen.has(paragraph)) return paragraph
    seen.add(paragraph)
  }
  return null
}

function plainCharCount(text) {
  return Array.from(text.replace(/\s+/gu, '')).length
}

function genericException(text) {
  const compact = text.replace(/\s+/gu, '')
  return /^(?:期間が短い|短期間|十分|必要十分|簡潔|これで十分|内容は十分)(?:です|ため|なので|だから)?[。.]?$/u.test(
    compact,
  )
}

const failures = []
const warnings = []
const reports = []

for (const filePath of listMarkdownFiles(periodsDir).sort()) {
  const file = relative(filePath)
  const source = fs.readFileSync(filePath, 'utf8')
  const { frontmatter, body } = splitFrontmatter(source, file)
  if (getStatus(frontmatter) !== 'published') continue

  const chars = substantiveCharCount(body)
  const marker = body.match(MARKER)
  const duplicate = findDuplicateParagraph(body)

  if (duplicate) {
    failures.push(
      file +
        ': repeated long paragraph detected; body depth must not be created by copy/paste repetition.',
    )
  }

  if (chars >= HARD_MIN_BODY_CHARS && marker) {
    warnings.push(
      file +
        ': body-depth exception is no longer required because substantive body length is ' +
        chars +
        ' characters (hard floor ' +
        HARD_MIN_BODY_CHARS +
        '). Remove the stale marker when this page is next edited.',
    )
  }

  if (chars < HARD_MIN_BODY_CHARS) {
    if (!marker) {
      failures.push(
        file +
          ': substantive body length is ' +
          chars +
          ' characters; published period pages below the ' +
          HARD_MIN_BODY_CHARS +
          '-character hard floor require a reasoned exception.',
      )
    } else {
      const reason = marker[1].trim()
      const coverage = marker[2].trim()

      if (plainCharCount(reason) < REASON_MIN_CHARS || genericException(reason)) {
        failures.push(
          file +
            ': body-depth exception reason must be specific and at least ' +
            REASON_MIN_CHARS +
            ' characters.',
        )
      }

      if (plainCharCount(coverage) < COVERAGE_MIN_CHARS || genericException(coverage)) {
        failures.push(
          file +
            ': body-depth exception coverage must be specific and at least ' +
            COVERAGE_MIN_CHARS +
            ' characters.',
        )
      }
    }
  } else if (chars < REVIEW_BODY_CHARS) {
    warnings.push(
      file +
        ': substantive body length is ' +
        chars +
        ' characters (soft review threshold ' +
        REVIEW_BODY_CHARS +
        '). Review for missing state/causal coverage, but do not pad solely to reach the threshold.',
    )
  }

  reports.push({ file, chars, status: marker ? 'exception' : 'normal' })
}

if (warnings.length > 0) {
  console.warn('Body-depth review warnings:')
  for (const warning of warnings) console.warn('- ' + warning)
  console.warn('')
}

if (failures.length > 0) {
  console.error('Body-depth audit failed:')
  for (const failure of failures) console.error('- ' + failure)
  console.error('')
  console.error(
    '4500 characters is a soft review signal, not a writing target. Only pages below the 2500-character hard floor require a reasoned exception.',
  )
  console.error(
    'Exception syntax: <!-- body-depth-audit: allow reason="..." coverage="..." -->',
  )
  process.exit(1)
}

console.log(
  'Body-depth audit passed for ' +
    reports.length +
    ' published period page(s); soft review threshold ' +
    REVIEW_BODY_CHARS +
    ', hard floor ' +
    HARD_MIN_BODY_CHARS +
    ' substantive characters.',
)
