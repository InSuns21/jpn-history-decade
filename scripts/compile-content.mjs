import fs from 'node:fs'
import path from 'node:path'
import { performance } from 'node:perf_hooks'
import { parse as parseYaml } from 'yaml'
import { classifyContinuity, normalizePeriodRange } from './period-range.mjs'

const startedAt = performance.now()
const root = process.cwd()
const periodDir = path.join(root, 'content', 'periods')
const structureDir = path.join(root, 'content', 'structures')
const themeDir = path.join(root, 'content', 'themes')
const glossaryCatalogFile = path.join(root, 'content', 'glossary', 'terms.json')
const periodGlossaryDir = path.join(root, 'content', 'glossary', 'periods')
const crosscuttingGlossaryDir = path.join(root, 'content', 'glossary', 'crosscutting')
const outputFile = path.join(root, 'src', 'generated', 'content.generated.ts')
const { mapDefinitions } = await import('../src/maps/registry.ts')
const knownMapIds = new Set(mapDefinitions.map((definition) => definition.id))

const errors = []
const TERM_LINK_PATTERN = /\[\[term:([a-z0-9-]+)\|([^\]]+)\]\]/g

function pushError(file, message) {
  errors.push(file + ': ' + message)
}

function relativePath(file) {
  return path.relative(root, file).replaceAll('\\', '/')
}

function readText(file) {
  return fs.readFileSync(file, 'utf8')
}

function validateNoInternalAuthoringIds(source, file) {
  const lines = source.split(/\r?\n/)
  for (let index = 0; index < lines.length; index += 1) {
    const matches = lines[index].match(/\bJH\d+[A-Z]?\b/g)
    if (!matches) continue
    pushError(
      file,
      'line ' +
        (index + 1) +
        ' contains internal authoring period ID(s) in public content: ' +
        [...new Set(matches)].join(', '),
    )
  }
}

function readJson(file, label) {
  const relative = relativePath(file)
  if (!fs.existsSync(file)) {
    pushError(relative, label + ' is missing')
    return null
  }

  try {
    return JSON.parse(readText(file))
  } catch (error) {
    pushError(relative, 'invalid JSON: ' + error.message)
    return null
  }
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

function validateMapPlacements(frontmatter, sections, maps, file) {
  const value = frontmatter?.mapPlacements ?? []
  if (!Array.isArray(value)) {
    pushError(file, 'mapPlacements must be an array when present')
    return []
  }

  const sectionIds = new Set(sections.map((section) => section.id))
  const seenMapIds = new Set(maps)
  const placements = []

  value.forEach((item, index) => {
    if (!item || typeof item !== 'object' || Array.isArray(item)) {
      pushError(file, 'mapPlacements[' + index + '] must be an object')
      return
    }

    const mapId =
      typeof item.mapId === 'string' && item.mapId.trim() !== '' ? item.mapId.trim() : ''
    const afterSectionId =
      typeof item.afterSectionId === 'string' && item.afterSectionId.trim() !== ''
        ? item.afterSectionId.trim()
        : ''

    if (!mapId) pushError(file, 'mapPlacements[' + index + '].mapId must be a non-empty string')
    if (!afterSectionId) {
      pushError(file, 'mapPlacements[' + index + '].afterSectionId must be a non-empty string')
    }

    if (mapId && !knownMapIds.has(mapId)) {
      pushError(file, 'map placement has no matching definition: ' + mapId)
    }
    if (afterSectionId && !sectionIds.has(afterSectionId)) {
      pushError(file, 'map placement references unknown section: ' + afterSectionId)
    }
    if (mapId && seenMapIds.has(mapId)) {
      pushError(file, 'map is referenced more than once: ' + mapId)
    }
    if (mapId) seenMapIds.add(mapId)

    if (mapId && afterSectionId) placements.push({ mapId, afterSectionId })
  })

  return placements
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

    if (/^<!--\s*claim-caution-lint:\s*allow\s+reason="[^"]+"\s*-->$/.test(line)) {
      continue
    }

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

      const rawSubheading = subheadingMatch[1]
      const anchorMatch = rawSubheading.match(/^(.+?)\s+\{#([a-z0-9-]+)\}$/)
      if (rawSubheading.includes('{#') && !anchorMatch) {
        pushError(file, 'subheading anchor must use trailing {#lowercase-kebab-id} syntax')
      }

      const subheadingText = anchorMatch ? anchorMatch[1] : rawSubheading
      const subheadingId = anchorMatch?.[2]
      questionMode = subheadingText === '考えてみる'
      if (!questionMode) {
        current.blocks.push({
          type: 'subheading',
          text: subheadingText,
          ...(subheadingId ? { id: subheadingId } : {}),
        })
      }
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

  const anchorIds = new Set()
  for (const section of sections) {
    if (anchorIds.has(section.id)) pushError(file, 'duplicate anchor id: ' + section.id)
    anchorIds.add(section.id)

    for (const block of section.blocks) {
      if (block.type !== 'subheading' || !block.id) continue
      if (anchorIds.has(block.id)) pushError(file, 'duplicate anchor id: ' + block.id)
      anchorIds.add(block.id)
    }
  }

  return sections
}

function loadGlossaryCatalog() {
  const catalog = readJson(glossaryCatalogFile, 'global glossary catalog')
  const terms = Array.isArray(catalog?.terms) ? catalog.terms : []
  if (terms.length === 0) {
    pushError(relativePath(glossaryCatalogFile), 'terms must be a non-empty array')
  }

  const termById = new Map()
  for (const [index, term] of terms.entries()) {
    if (!term || typeof term !== 'object' || Array.isArray(term)) {
      pushError(relativePath(glossaryCatalogFile), 'terms[' + index + '] must be an object')
      continue
    }

    const id = requireString(term, 'id', relativePath(glossaryCatalogFile), /^[a-z0-9-]+$/)
    requireString(term, 'term', relativePath(glossaryCatalogFile))
    requireString(term, 'category', relativePath(glossaryCatalogFile))
    requireString(term, 'definition', relativePath(glossaryCatalogFile))
    requireString(term, 'connections', relativePath(glossaryCatalogFile))

    if (id && termById.has(id)) {
      pushError(relativePath(glossaryCatalogFile), 'duplicate glossary id: ' + id)
    } else if (id) {
      termById.set(id, term)
    }
  }

  return termById
}

const termById = loadGlossaryCatalog()

function loadPeriodGlossary(routeKey, rawSource, file) {
  const glossaryFile = path.join(periodGlossaryDir, routeKey + '.json')
  const relative = relativePath(glossaryFile)
  const config = readJson(glossaryFile, 'period glossary references')
  const refs = Array.isArray(config?.termRefs) ? config.termRefs : []

  if (config?.period !== routeKey) {
    pushError(relative, 'period must match routeKey ' + routeKey)
  }
  if (refs.length === 0) {
    pushError(relative, 'termRefs must be a non-empty array')
  }

  const refById = new Map()
  for (const [index, ref] of refs.entries()) {
    if (!ref || typeof ref !== 'object' || Array.isArray(ref)) {
      pushError(relative, 'termRefs[' + index + '] must be an object')
      continue
    }

    const id = requireString(ref, 'id', relative, /^[a-z0-9-]+$/)
    if (typeof ref.core !== 'boolean') {
      pushError(relative, 'termRefs[' + index + '].core must be a boolean')
    }
    if (ref.periodNote !== undefined && (typeof ref.periodNote !== 'string' || ref.periodNote.trim() === '')) {
      pushError(relative, 'termRefs[' + index + '].periodNote must be a non-empty string when present')
    }
    if (id && refById.has(id)) {
      pushError(relative, 'duplicate term reference: ' + id)
    }
    if (id && !termById.has(id)) {
      pushError(relative, 'unknown global glossary id: ' + id)
    }
    if (id) refById.set(id, ref)
  }

  const usage = new Map()
  let match
  TERM_LINK_PATTERN.lastIndex = 0
  while ((match = TERM_LINK_PATTERN.exec(rawSource)) !== null) {
    const [, id, label] = match
    if (!label.trim()) pushError(file, 'glossary link "' + id + '" has an empty label')
    if (!termById.has(id)) {
      pushError(file, 'glossary link "' + id + '" has no target in content/glossary/terms.json')
      continue
    }
    if (!refById.has(id)) {
      pushError(file, 'glossary link "' + id + '" is not listed in ' + relative)
      continue
    }
    usage.set(id, (usage.get(id) ?? 0) + 1)
  }

  const resolved = []
  for (const ref of refs) {
    const term = termById.get(ref.id)
    if (!term) continue
    if (ref.core && !usage.has(ref.id)) {
      pushError(relative, 'core term "' + ref.id + '" is never linked from ' + file)
    }
    resolved.push({
      ...term,
      core: ref.core,
      ...(ref.periodNote ? { periodNote: ref.periodNote } : {}),
    })
  }

  return resolved
}

function loadCrosscuttingGlossary(routeKey, rawSource, file) {
  const glossaryFile = path.join(crosscuttingGlossaryDir, routeKey + '.json')
  const relative = relativePath(glossaryFile)
  const config = readJson(glossaryFile, 'crosscutting glossary references')
  const refs = Array.isArray(config?.termRefs) ? config.termRefs : []

  if (config?.page !== routeKey) {
    pushError(relative, 'page must match routeKey ' + routeKey)
  }
  if (refs.length === 0) {
    pushError(relative, 'termRefs must be a non-empty array')
  }

  const refById = new Map()
  for (const [index, ref] of refs.entries()) {
    if (!ref || typeof ref !== 'object' || Array.isArray(ref)) {
      pushError(relative, 'termRefs[' + index + '] must be an object')
      continue
    }

    const id = requireString(ref, 'id', relative, /^[a-z0-9-]+$/)
    if (typeof ref.core !== 'boolean') {
      pushError(relative, 'termRefs[' + index + '].core must be a boolean')
    }
    if (ref.periodNote !== undefined && (typeof ref.periodNote !== 'string' || ref.periodNote.trim() === '')) {
      pushError(relative, 'termRefs[' + index + '].periodNote must be a non-empty string when present')
    }
    if (id && refById.has(id)) {
      pushError(relative, 'duplicate term reference: ' + id)
    }
    if (id && !termById.has(id)) {
      pushError(relative, 'unknown global glossary id: ' + id)
    }
    if (id) refById.set(id, ref)
  }

  const usage = new Map()
  let match
  TERM_LINK_PATTERN.lastIndex = 0
  while ((match = TERM_LINK_PATTERN.exec(rawSource)) !== null) {
    const [, id, label] = match
    if (!label.trim()) pushError(file, 'glossary link "' + id + '" has an empty label')
    if (!termById.has(id)) {
      pushError(file, 'glossary link "' + id + '" has no target in content/glossary/terms.json')
      continue
    }
    if (!refById.has(id)) {
      pushError(file, 'glossary link "' + id + '" is not listed in ' + relative)
      continue
    }
    usage.set(id, (usage.get(id) ?? 0) + 1)
  }

  const resolved = []
  for (const ref of refs) {
    const term = termById.get(ref.id)
    if (!term) continue
    if (ref.core && !usage.has(ref.id)) {
      pushError(relative, 'core term "' + ref.id + '" is never linked from ' + file)
    }
    resolved.push({
      ...term,
      core: ref.core,
      ...(ref.periodNote ? { periodNote: ref.periodNote } : {}),
    })
  }

  return resolved
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
  const referencedIds = new Set()
  let match
  let referenceCount = 0
  while ((match = sourceRefPattern.exec(rawSource)) !== null) {
    referenceCount += 1
    referencedIds.add(match[1])
    if (!ids.has(match[1])) pushError(file, 'source reference has no matching source: ' + match[1])
  }

  if (status === 'published') {
    if (sources.length === 0) pushError(file, 'published period must define at least one source')
    if (referenceCount === 0) pushError(file, 'published period must cite at least one source with [@source-id]')
    for (const id of ids) {
      if (!referencedIds.has(id)) pushError(file, 'published period defines unused source: ' + id)
    }
  }

  return sources
}

function compilePeriod(filePath) {
  const relative = relativePath(filePath)
  const source = readText(filePath)
  validateNoInternalAuthoringIds(source, relative)
  const parsed = parseFrontmatter(source, relative)
  if (!parsed) return null

  const frontmatter = parsed.data ?? {}
  const id = requireString(frontmatter, 'id', relative, /^[a-z0-9-]+$/)
  const routeKey = requireString(frontmatter, 'routeKey', relative, /^[a-z0-9-]+$/)
  const startYear = requireNumber(frontmatter, 'startYear', relative)
  const endYear = requireNumber(frontmatter, 'endYear', relative)

  if (startYear > endYear) pushError(relative, 'startYear must be <= endYear')

  let startDate = String(startYear).padStart(4, '0') + '-01-01'
  let endDate = String(endYear).padStart(4, '0') + '-12-31'
  try {
    const normalizedRange = normalizePeriodRange({
      startYear,
      endYear,
      startDate: frontmatter.startDate,
      endDate: frontmatter.endDate,
    })
    startDate = normalizedRange.startDate
    endDate = normalizedRange.endDate
  } catch (error) {
    pushError(relative, error.message)
  }

  const status = requireString(frontmatter, 'status', relative)
  if (!['draft', 'review', 'published'].includes(status)) pushError(relative, 'status must be draft, review, or published')

  const snapshot = requireObjectArray(frontmatter, 'snapshot', relative, ['label', 'value'])
  const changes = requireObjectArray(frontmatter, 'changes', relative, ['label', 'before', 'current', 'significance'])
  const contemporaryAssumptions = requireStringArray(frontmatter, 'contemporaryAssumptions', relative)
  const interpretiveCautions = requireStringArray({ interpretiveCautions: frontmatter.interpretiveCautions ?? [] }, 'interpretiveCautions', relative)
  const nextIssues = requireStringArray(frontmatter, 'nextIssues', relative)
  const maps = requireStringArray(frontmatter, 'maps', relative)
  for (const mapId of maps) {
    if (!knownMapIds.has(mapId)) pushError(relative, 'map reference has no matching definition: ' + mapId)
  }

  const sources = validateSources(frontmatter, source, relative, status)
  const sections = parseMarkdownSections(parsed.body, relative)
  const mapPlacements = validateMapPlacements(frontmatter, sections, maps, relative)
  const glossary = loadPeriodGlossary(routeKey, source, relative)

  return {
    id,
    routeKey,
    startYear,
    endYear,
    startDate,
    endDate,
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
    interpretiveCautions,
    nextIssues,
    glossary,
    sources,
    maps,
    mapPlacements,
  }
}


function compileCrosscutting(filePath, expectedKind) {
  const relative = relativePath(filePath)
  const source = readText(filePath)
  validateNoInternalAuthoringIds(source, relative)
  const parsed = parseFrontmatter(source, relative)
  if (!parsed) return null

  const frontmatter = parsed.data ?? {}
  const id = requireString(frontmatter, 'id', relative, /^s\d{2}[a-z]?$/)
  const routeKey = requireString(frontmatter, 'routeKey', relative, /^[a-z0-9-]+$/)
  const kind = requireString(frontmatter, 'kind', relative)

  if (kind !== expectedKind) {
    pushError(relative, 'kind must match directory type ' + expectedKind)
  }

  const status = requireString(frontmatter, 'status', relative)
  if (!['draft', 'review', 'published'].includes(status)) {
    pushError(relative, 'status must be draft, review, or published')
  }

  const presentation = frontmatter.presentation
  if (presentation !== undefined && presentation !== 'source') {
    pushError(relative, 'presentation must be source when present')
  }
  const documentUrl = presentation === 'source' ? requireString(frontmatter, 'documentUrl', relative) : undefined
  const documentTitle = presentation === 'source' ? requireString(frontmatter, 'documentTitle', relative) : undefined

  const relatedPeriods = requireStringArray(frontmatter, 'relatedPeriods', relative)
  const maps = requireStringArray(frontmatter, 'maps', relative)
  for (const mapId of maps) {
    if (!knownMapIds.has(mapId)) {
      pushError(relative, 'map reference has no matching definition: ' + mapId)
    }
  }

  const sources = validateSources(frontmatter, source, relative, status)
  const sections = parseMarkdownSections(parsed.body, relative)
  const glossary = loadCrosscuttingGlossary(routeKey, source, relative)

  return {
    id,
    routeKey,
    kind,
    ...(presentation ? { presentation, documentUrl, documentTitle } : {}),
    periodLabel: requireString(frontmatter, 'periodLabel', relative),
    status,
    title: requireString(frontmatter, 'title', relative),
    summary: requireString(frontmatter, 'summary', relative),
    framingQuestion: requireString(frontmatter, 'framingQuestion', relative),
    relatedPeriods,
    sections,
    glossary,
    sources,
    maps,
  }
}

if (!fs.existsSync(periodDir)) {
  console.error('Content compilation failed: content/periods does not exist')
  process.exit(1)
}

for (const requiredDir of [structureDir, themeDir, crosscuttingGlossaryDir]) {
  if (!fs.existsSync(requiredDir)) fs.mkdirSync(requiredDir, { recursive: true })
}

const periodFiles = fs
  .readdirSync(periodDir)
  .filter((name) => name.endsWith('.md'))
  .sort()
  .map((name) => path.join(periodDir, name))

const periods = periodFiles
  .map(compilePeriod)
  .filter(Boolean)
  .sort((a, b) => a.startDate.localeCompare(b.startDate) || a.routeKey.localeCompare(b.routeKey))

const crosscuttingFiles = [
  ...fs
    .readdirSync(structureDir)
    .filter((name) => name.endsWith('.md'))
    .sort()
    .map((name) => ({ file: path.join(structureDir, name), kind: 'structure' })),
  ...fs
    .readdirSync(themeDir)
    .filter((name) => name.endsWith('.md'))
    .sort()
    .map((name) => ({ file: path.join(themeDir, name), kind: 'theme' })),
]

const crosscutting = crosscuttingFiles
  .map(({ file, kind }) => compileCrosscutting(file, kind))
  .filter(Boolean)
  .sort((a, b) => a.id.localeCompare(b.id))

const ids = new Set()
const routeKeys = new Set()
for (let index = 0; index < periods.length; index += 1) {
  const period = periods[index]
  if (ids.has(period.id)) pushError('content/periods', 'duplicate period id: ' + period.id)
  if (routeKeys.has(period.routeKey)) pushError('content/periods', 'duplicate routeKey: ' + period.routeKey)
  ids.add(period.id)
  routeKeys.add(period.routeKey)

  if (period.currentPeriodLabel !== period.periodLabel) {
    pushError(
      'content/periods',
      period.routeKey + ' currentPeriodLabel must match periodLabel (' + period.periodLabel + ')',
    )
  }

  if (index > 0) {
    const previous = periods[index - 1]
    const continuity = classifyContinuity(previous.endDate, period.startDate)
    if (continuity.kind === 'overlap') {
      pushError(
        'content/periods',
        'periods overlap: ' +
          previous.routeKey +
          ' ends at ' +
          previous.endDate +
          ', but ' +
          period.routeKey +
          ' starts at ' +
          period.startDate,
      )
    } else if (continuity.kind === 'gap') {
      pushError(
        'content/periods',
        'period gap: ' +
          previous.routeKey +
          ' ends at ' +
          previous.endDate +
          ', but ' +
          period.routeKey +
          ' starts at ' +
          period.startDate +
          ' (expected ' +
          continuity.expectedStartDate +
          ')',
      )
    }
    if (period.previousPeriodLabel !== previous.periodLabel) {
      pushError(
        'content/periods',
        period.routeKey +
          ' previousPeriodLabel must match previous periodLabel (' +
          previous.periodLabel +
          ')',
      )
    }
  }
}

if (periods.length === 0) pushError('content/periods', 'at least one period Markdown file is required')

const crosscuttingIds = new Set()
const crosscuttingRoutes = new Set()
for (const page of crosscutting) {
  if (crosscuttingIds.has(page.id)) {
    pushError('content/crosscutting', 'duplicate crosscutting id: ' + page.id)
  }
  const routeIdentity = page.kind + ':' + page.routeKey
  if (crosscuttingRoutes.has(routeIdentity)) {
    pushError('content/crosscutting', 'duplicate crosscutting route: ' + routeIdentity)
  }
  crosscuttingIds.add(page.id)
  crosscuttingRoutes.add(routeIdentity)

  for (const relatedPeriod of page.relatedPeriods) {
    if (!routeKeys.has(relatedPeriod)) {
      pushError(
        'content/crosscutting',
        page.id + ' references unknown related period: ' + relatedPeriod,
      )
    }
  }
}

if (errors.length > 0) {
  console.error('Content compilation failed:')
  for (const error of errors) console.error('- ' + error)
  process.exit(1)
}

fs.mkdirSync(path.dirname(outputFile), { recursive: true })

const generated =
  "import type { CompiledSiteContent } from '../content-model/types'\n\n" +
  'export const compiledContent: CompiledSiteContent = ' +
  JSON.stringify({ periods, crosscutting }, null, 2) +
  '\n'

fs.writeFileSync(outputFile, generated)

const elapsedMs = Math.round((performance.now() - startedAt) * 10) / 10
console.log(
  'Compiled ' +
    periods.length +
    ' period(s), ' +
    crosscutting.length +
    ' crosscutting article(s), ' +
    termById.size +
    ' global glossary term(s) in ' +
    elapsedMs +
    ' ms.',
)
