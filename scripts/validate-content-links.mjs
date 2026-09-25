import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const errors = []

function read(file) {
  return fs.readFileSync(path.join(root, file), 'utf8')
}

function exists(file) {
  return fs.existsSync(path.join(root, file))
}

function collectFiles(dir, suffixes) {
  const abs = path.join(root, dir)
  if (!fs.existsSync(abs)) return []
  return fs.readdirSync(abs, { withFileTypes: true }).flatMap((entry) => {
    const rel = path.join(dir, entry.name)
    if (entry.isDirectory()) return collectFiles(rel, suffixes)
    return suffixes.some((suffix) => entry.name.endsWith(suffix)) ? [rel] : []
  })
}

const glossaryFiles = collectFiles('content/glossary', ['.json'])
const glossaries = new Map()

for (const file of glossaryFiles) {
  let json
  try {
    json = JSON.parse(read(file))
  } catch (error) {
    errors.push(file + ': invalid JSON: ' + error.message)
    continue
  }

  const year = path.basename(file, '.json')
  const ids = new Set()

  if (!Array.isArray(json.terms) || json.terms.length === 0) {
    errors.push(file + ': terms must be a non-empty array')
    continue
  }

  for (const term of json.terms) {
    if (!term.id || !/^[a-z0-9-]+$/.test(term.id)) {
      errors.push(file + ': invalid glossary id "' + (term.id ?? '') + '"')
      continue
    }
    if (ids.has(term.id)) errors.push(file + ': duplicate glossary id "' + term.id + '"')
    ids.add(term.id)

    for (const field of ['term', 'category', 'definition', 'essayPoint']) {
      if (typeof term[field] !== 'string' || term[field].trim() === '') {
        errors.push(file + ': ' + term.id + ' is missing ' + field)
      }
    }
  }

  glossaries.set(year, { file, ids, terms: json.terms })
}

const sourceFiles = [
  ...collectFiles('src/data/decades', ['.ts']),
  ...collectFiles('content/periods', ['.md']),
]

const usage = new Map()
for (const [year, glossary] of glossaries) {
  usage.set(year, new Map([...glossary.ids].map((id) => [id, 0])))
}

const linkPattern = /\[\[term:([a-z0-9-]+)\|([^\]]+)\]\]/g

for (const file of sourceFiles) {
  const basename = path.basename(file)
  const yearMatch = basename.match(/^(\d{4})\.(?:ts|md)$/)
  if (!yearMatch) continue

  const year = yearMatch[1]
  const glossary = glossaries.get(year)
  const source = read(file)
  let match

  while ((match = linkPattern.exec(source)) !== null) {
    const [, id, label] = match

    if (!glossary) {
      errors.push(file + ': glossary link "' + id + '" exists but content/glossary/' + year + '.json does not')
      continue
    }
    if (!glossary.ids.has(id)) {
      errors.push(file + ': glossary link "' + id + '" has no target in ' + glossary.file)
      continue
    }
    if (!label.trim()) errors.push(file + ': glossary link "' + id + '" has an empty label')

    usage.get(year).set(id, usage.get(year).get(id) + 1)
  }
}

for (const [year, glossary] of glossaries) {
  const sourceTs = 'src/data/decades/' + year + '.ts'
  const sourceMd = 'content/periods/' + year + '.md'

  if (!exists(sourceTs) && !exists(sourceMd)) {
    errors.push(glossary.file + ': no matching period source exists for ' + year)
  }

  for (const term of glossary.terms) {
    const count = usage.get(year).get(term.id) ?? 0
    if (term.requiredForEssay !== false && count === 0) {
      errors.push(glossary.file + ': required term "' + term.id + '" is never linked from the ' + year + ' body')
    }
  }
}

const glossaryComponent = exists('src/components/Glossary.tsx') ? read('src/components/Glossary.tsx') : ''
const linkedTextComponent = exists('src/components/LinkedText.tsx') ? read('src/components/LinkedText.tsx') : ''
const app = exists('src/App.tsx') ? read('src/App.tsx') : ''

if (!glossaryComponent.includes("id={'term-' + item.id}")) {
  errors.push('src/components/Glossary.tsx: glossary anchor convention term-<id> is missing')
}
if (!linkedTextComponent.includes("'/terms/' + termId")) {
  errors.push('src/components/LinkedText.tsx: glossary href convention is missing')
}
if (!app.includes('terms') || !app.includes('termExists') || !app.includes('activeTermId')) {
  errors.push('src/App.tsx: glossary term route support is missing')
}

if (errors.length > 0) {
  console.error('Content link validation failed:')
  for (const error of errors) console.error('- ' + error)
  process.exit(1)
}

console.log(
  'Content link validation passed: ' +
    glossaryFiles.length +
    ' glossary file(s), ' +
    sourceFiles.length +
    ' period source file(s).',
)
