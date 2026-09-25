import fs from 'node:fs'
import path from 'node:path'
import { parse as parseYaml } from 'yaml'

const root = process.cwd()
const periodDir = path.join(root, 'content', 'periods')
const glossaryDir = path.join(root, 'content', 'glossary')
const outputFile = path.join(root, 'src', 'generated', 'content.generated.ts')
const { mapDefinitions } = await import('../src/maps/registry.ts')
const knownMapIds = new Set(mapDefinitions.map((definition) => definition.id))

const errors = []

function pushError(file, message) {
  errors.push(file + ': ' + message)
}

function readText(file) {
  return fs.readFileSync(file, 'utf8')
}

function parseFrontmatter(source, file) {
  if (!source.startsWith('---\n')) {
    pushError(file, 'frontmatter must start with ---')
    return null
  }

  const end = source.indexOf('\n---\n', 4)
  if (end < 0) {
    pushError(file, 'frontmatter closing --- is missing')
    return null
  }

  try {
    return {
      data: parseYaml(source.slice(4, end)),
      body: source.slice(end + 5).trim(),
    }
  } catch (error) {
    pushError(file, 'invalid YAML frontmatter: ' + error.message)
    return null
  }
}

function requireString(object, field, file, pattern) {
  const value = object?.[field]
  if (typeof value !== 'string' || value.trim() === '') {
    pushError(file, field + ' must be a non-empty string')
    return ''
  }
  if (pattern && !pattern.test(value)) {
    pushError(file, field + ' has an invalid value: ' + value)
  }
  return value
}

function requireNumber(object, field, file) {
  const value = object?.[field]
  if (!Number.isInteger(value)) {
    pushError(file, field + ' must be an integer')
    return 0
  }
  return value
}

function requireStringArray(object, field, file) {
  const value = object?.[field]
  if (!Array.isArray(value) || value.some((item) => typeof item !== 'string' || item.trim() === '')) {
    pushError(file, field + ' must be an array of non-empty strings')
    return []
  }
  return value
}

function requireObjectArray(object, field, file, requiredFields) {
  const value = object?.[field]
  if (!Array.isArray(value) || value.length === 0) {
    pushError(file, field + ' must be a non-empty array')
    return []
  }

  value.forEach((item, index) => {
    if (!item || typeof item !== 'object' || Array.isArray(item)) {
      pushError(file, field + '[' + index + '] must be an object')
      return
    }
    for (const requiredField of requiredFields) {
      if (typeof item[requiredField] !== 'string' || item[requiredField].trim() === '') {
        pushError(file, field + '[' + index + '].' + requiredField + ' must be a non-empty string')
      }
    }
  })

  return value
}

function parseMarkdownSections(body, file) {
  const lines = body.split(/\r?\n/)
  const sections = []
  let current = null
  let paragraph = []
  let list = []
  let questionMode = false

  function flushParagraph() {
    if (!current || paragraph.length === 0) return
    current.blocks.push({ type: 'paragraph', text: paragraph.join(' ').trim() })
    paragraph = []
  }

  function flushList() {
    if (!current || list.length === 0) return
    current.blocks.push({ type: 'list', items: list })
    list = []
  }

  function flushCurrent() {
    flushParagraph()
    flushList()
    if (!current) return
    if (current.blocks.length === 0) pushError(file, 'section ' + current.id + ' has no body')
    sections.push(current)
    current = null
    questionMode = false
  }

  for (const rawLine of lines) {
    const line = rawLine.trim()

    const sectionMatch = line.match(/^##\s+(.+?)\s+\{#([a-z0-9-]+)\}\s*$/)
    if (sectionMatch) {
      flushCurrent()
      current = {
        id: sectionMatch[2],
        title: sectionMatch[1],
        blocks: [],
        questions: [],
      }
      continue
    }

    const subheadingMatch = line.match(/^###\s+(.+)$/)
    if (subheadingMatch) {
      if (!current) {
        pushError(file, 'subheading appears before the first section')
        continue
      }
      flushParagraph()
      flushList()
      questionMode = subheadingMatch[1] === '考えてみる'
      if (!questionMode) current.blocks.push({ type: 'subheading', text: subheadingMatch[1] })
      continue
    }

    const listMatch = line.match(/^[-*]\s+(.+)$/)
    if (listMatch) {
      if (!current) {
        pushError(file, 'list item appears before the first section')
        continue
      }
      flushParagraph()
      if (questionMode) {
        current.questions.push(listMatch[1])
      } else {
        list.push(listMatch[1])
      }
      continue
    }

    if (line === '') {
      flushParagraph()
      flushList()
      continue
    }

    if (!current) {
      pushError(file, 'text appears before the first ## section: ' + line)
      continue
    }

    if (questionMode) {
      pushError(file, '考えてみる must contain list items only')
      continue
    }

    flushList()
    paragraph.push(line)
  }

  flushCurrent()

  if (sections.length === 0) pushError(file, 'Markdown body must contain at least one ## section with {#id}')
  return sections
}

function loadGlossary(routeKey, file) {
  const glossaryFile = path.join(glossaryDir, routeKey + '.json')
  if (!fs.existsSync(glossaryFile)) {
    pushError(file, 'matching glossary is missing: content/glossary/' + routeKey + '.json')
    return []
  }

  try {
    const glossary = JSON.parse(readText(glossaryFile))
    if (!Array.isArray(glossary.terms) || glossary.terms.length === 0) {
      pushError(glossaryFile, 'terms must be a non-empty array')
      return []
    }
    return glossary.terms
  } catch (error) {
    pushError(glossaryFile, 'invalid JSON: ' + error.message)
    return []
  }
}

function validateSources(frontmatter, rawSource, file, status) {
  const sources = frontmatter.sources ?? []
  if (!Array.isArray(sources)) {
    pushError(file, 'sources must be an array')
    return []
  }

  const ids = new Set()
  const allowedTypes = new Set(['primary', 'official', 'research', 'overview'])

  for (const [index, source] of sources.entries()) {
    if (!source || typeof source !== 'object' || Array.isArray(source)) {
      pushError(file, 'sources[' + index + '] must be an object')
      continue
    }

    const id = requireString(source, 'id', file, /^[a-z0-9-]+$/)
    requireString(source, 'title', file)
    const type = requireString(source, 'type', file)
    if (type && !allowedTypes.has(type)) pushError(file, 'sources[' + index + '].type is invalid: ' + type)
    if (id && ids.has(id)) pushError(file, 'duplicate source id: ' + id)
    if (id) ids.add(id)
  }

  const sourceRefPattern = /\[@([a-z0-9-]+)\]/g
  let match
  let referenceCount = 0
  while ((match = sourceRefPattern.exec(rawSource)) !== null) {
    referenceCount += 1
    if (!ids.has(match[1])) pushError(file, 'source reference has no matching source: ' + match[1])
  }

  if (status === 'published') {
    if (sources.length === 0) pushError(file, 'published period must define at least one source')
    if (referenceCount === 0) pushError(file, 'published period must cite at least one source with [@source-id]')
  }

  return sources
}

function compilePeriod(filePath) {
  const relative = path.relative(root, filePath).replaceAll('\\', '/')
  const source = readText(filePath)
  const parsed = parseFrontmatter(source, relative)
  if (!parsed) return null

  const frontmatter = parsed.data ?? {}
  const id = requireString(frontmatter, 'id', relative, /^[a-z0-9-]+$/)
  const routeKey = requireString(frontmatter, 'routeKey', relative, /^[a-z0-9-]+$/)
  const startYear = requireNumber(frontmatter, 'startYear', relative)
  const endYear = requireNumber(frontmatter, 'endYear', relative)

  if (startYear > endYear) pushError(relative, 'startYear must be <= endYear')

  const status = requireString(frontmatter, 'status', relative)
  if (!['draft', 'review', 'published'].includes(status)) pushError(relative, 'status must be draft, review, or published')

  const snapshot = requireObjectArray(frontmatter, 'snapshot', relative, ['label', 'value'])
  const changes = requireObjectArray(frontmatter, 'changes', relative, ['label', 'before', 'current', 'significance'])
  const contemporaryAssumptions = requireStringArray(frontmatter, 'contemporaryAssumptions', relative)
  const nextIssues = requireStringArray(frontmatter, 'nextIssues', relative)
  const maps = requireStringArray(frontmatter, 'maps', relative)
  for (const mapId of maps) {
    if (!knownMapIds.has(mapId)) pushError(relative, 'map reference has no matching definition: ' + mapId)
  }
  const sources = validateSources(frontmatter, source, relative, status)
  const sections = parseMarkdownSections(parsed.body, relative)
  const glossary = loadGlossary(routeKey, relative)

  return {
    id,
    routeKey,
    startYear,
    endYear,
    navLabel: requireString(frontmatter, 'navLabel', relative),
    periodLabel: requireString(frontmatter, 'periodLabel', relative),
    previousPeriodLabel: requireString(frontmatter, 'previousPeriodLabel', relative),
    currentPeriodLabel: requireString(frontmatter, 'currentPeriodLabel', relative),
    eraLabel: requireString(frontmatter, 'eraLabel', relative),
    status,
    title: requireString(frontmatter, 'title', relative),
    summary: requireString(frontmatter, 'summary', relative),
    framingQuestion: requireString(frontmatter, 'framingQuestion', relative),
    snapshot,
    sections,
    changes,
    contemporaryAssumptions,
    nextIssues,
    glossary,
    sources,
    maps,
  }
}

if (!fs.existsSync(periodDir)) {
  console.error('Content compilation failed: content/periods does not exist')
  process.exit(1)
}

const periodFiles = fs
  .readdirSync(periodDir)
  .filter((name) => name.endsWith('.md'))
  .sort()
  .map((name) => path.join(periodDir, name))

const periods = periodFiles.map(compilePeriod).filter(Boolean).sort((a, b) => a.startYear - b.startYear)

const ids = new Set()
const routeKeys = new Set()
for (let index = 0; index < periods.length; index += 1) {
  const period = periods[index]
  if (ids.has(period.id)) pushError('content/periods', 'duplicate period id: ' + period.id)
  if (routeKeys.has(period.routeKey)) pushError('content/periods', 'duplicate routeKey: ' + period.routeKey)
  ids.add(period.id)
  routeKeys.add(period.routeKey)

  if (index > 0 && periods[index - 1].endYear >= period.startYear) {
    pushError('content/periods', 'periods overlap: ' + periods[index - 1].routeKey + ' and ' + period.routeKey)
  }
}

if (periods.length === 0) pushError('content/periods', 'at least one period Markdown file is required')

if (errors.length > 0) {
  console.error('Content compilation failed:')
  for (const error of errors) console.error('- ' + error)
  process.exit(1)
}

fs.mkdirSync(path.dirname(outputFile), { recursive: true })

const generated =
  "import type { CompiledSiteContent } from '../content-model/types'\n\n" +
  'export const compiledContent: CompiledSiteContent = ' +
  JSON.stringify({ periods }, null, 2) +
  '\n'

fs.writeFileSync(outputFile, generated)
console.log('Compiled ' + periods.length + ' period(s) to src/generated/content.generated.ts')
