import fs from 'node:fs/promises'
import path from 'node:path'
import YAML from 'yaml'

const ROOT = process.cwd()
const PERIOD_DIR = path.join(ROOT, 'content', 'periods')
const FIGURE_REGISTRY = path.join(ROOT, 'src', 'media', 'periodFigures.ts')
const POLICY_FILE = path.join(ROOT, 'standards', 'image-necessity.json')
const MIN_REASON_LENGTH = 30

function parseFrontmatter(source, fileName) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) {
    throw new Error(fileName + ': frontmatter not found')
  }
  return YAML.parse(match[1])
}

function collectFigureRouteKeys(source) {
  const matches = [...source.matchAll(/(?:^|[,{])\s*['"]([^'"]+)['"]\s*:\s*\[/gm)]
  const keys = matches.map((match) => match[1])
  const duplicates = keys.filter((key, index) => keys.indexOf(key) !== index)
  return { keys: new Set(keys), duplicates: [...new Set(duplicates)] }
}

const errors = []
const periodFileNames = (await fs.readdir(PERIOD_DIR))
  .filter((name) => name.endsWith('.md'))
  .sort()

const publishedRoutes = new Set()
for (const fileName of periodFileNames) {
  const source = await fs.readFile(path.join(PERIOD_DIR, fileName), 'utf8')
  const frontmatter = parseFrontmatter(source, fileName)
  if (frontmatter.status === 'published') {
    publishedRoutes.add(path.basename(fileName, '.md'))
  }
}

const figureSource = await fs.readFile(FIGURE_REGISTRY, 'utf8')
const { keys: figureRoutes, duplicates } = collectFigureRouteKeys(figureSource)

for (const duplicate of duplicates) {
  errors.push('duplicate figure route key: ' + duplicate)
}

const policy = JSON.parse(await fs.readFile(POLICY_FILE, 'utf8'))
const noImage = policy?.noImage
if (!noImage || typeof noImage !== 'object' || Array.isArray(noImage)) {
  errors.push('standards/image-necessity.json: "noImage" must be an object')
}

if (noImage && typeof noImage === 'object' && !Array.isArray(noImage)) {
  for (const [routeKey, entry] of Object.entries(noImage)) {
    if (!publishedRoutes.has(routeKey)) {
      errors.push(routeKey + ': no-image decision does not match a published period')
      continue
    }
    if (figureRoutes.has(routeKey)) {
      errors.push(routeKey + ': stale no-image decision remains even though a figure is registered')
    }
    const reason = entry && typeof entry === 'object' ? entry.reason : undefined
    if (typeof reason !== 'string' || reason.trim().length < MIN_REASON_LENGTH) {
      errors.push(
        routeKey +
          ': no-image reason must be at least ' +
          MIN_REASON_LENGTH +
          ' characters and explain why omitting a figure is preferable',
      )
    }
  }
}

for (const routeKey of publishedRoutes) {
  if (!figureRoutes.has(routeKey) && !Object.hasOwn(noImage ?? {}, routeKey)) {
    errors.push(
      routeKey +
        ': published period has no figure and no explicit no-image decision in standards/image-necessity.json',
    )
  }
}

for (const routeKey of figureRoutes) {
  if (!periodFileNames.includes(routeKey + '.md')) {
    errors.push(routeKey + ': figure registry key does not match a period Markdown file')
  }
}

if (errors.length > 0) {
  console.error('Historical image validation failed:')
  for (const error of errors) console.error('- ' + error)
  process.exit(1)
}

console.log(
  'Historical image validation passed: ' +
    publishedRoutes.size +
    ' published periods, ' +
    figureRoutes.size +
    ' figure decisions, ' +
    Object.keys(noImage ?? {}).length +
    ' no-image decisions.',
)
