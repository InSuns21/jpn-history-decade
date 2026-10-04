import fs from 'node:fs/promises'
import path from 'node:path'
import YAML from 'yaml'

const ROOT = process.cwd()
const PERIOD_DIR = path.join(ROOT, 'content', 'periods')
const FIGURE_REGISTRY = path.join(ROOT, 'src', 'media', 'periodFigures.ts')
const POLICY_FILE = path.join(ROOT, 'standards', 'image-necessity.json')
const MIN_REASON_LENGTH = 30
const NO_IMAGE_STREAK_THRESHOLD = 3
const MIN_STREAK_REASON_LENGTH = 60
const MIN_STREAK_ALTERNATIVE_LENGTH = 15

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

function collectNoImageStreaks(publishedPeriods, noImage) {
  const streaks = []
  let current = []

  for (const period of publishedPeriods) {
    if (Object.hasOwn(noImage, period.routeKey)) {
      current.push(period.routeKey)
      continue
    }
    if (current.length >= NO_IMAGE_STREAK_THRESHOLD) streaks.push(current)
    current = []
  }

  if (current.length >= NO_IMAGE_STREAK_THRESHOLD) streaks.push(current)
  return streaks
}

function streakSignature(routes) {
  return routes.join('>')
}

const errors = []
const periodFileNames = (await fs.readdir(PERIOD_DIR))
  .filter((name) => name.endsWith('.md'))
  .sort()

const publishedPeriods = []
for (const fileName of periodFileNames) {
  const source = await fs.readFile(path.join(PERIOD_DIR, fileName), 'utf8')
  const frontmatter = parseFrontmatter(source, fileName)
  if (frontmatter.status !== 'published') continue

  const routeKey = frontmatter.routeKey ?? path.basename(fileName, '.md')
  const orderKey =
    frontmatter.startDate ??
    String(frontmatter.startYear ?? routeKey)

  publishedPeriods.push({ routeKey, orderKey })
}
publishedPeriods.sort(
  (a, b) => a.orderKey.localeCompare(b.orderKey) || a.routeKey.localeCompare(b.routeKey),
)

const publishedRoutes = new Set(publishedPeriods.map((period) => period.routeKey))
const publishedRouteIndex = new Map(
  publishedPeriods.map((period, index) => [period.routeKey, index]),
)

const figureSource = await fs.readFile(FIGURE_REGISTRY, 'utf8')
const { keys: figureRoutes, duplicates } = collectFigureRouteKeys(figureSource)

if (figureSource.includes('https://thumb.wikimedia.org/')) {
  errors.push(
    'src/media/periodFigures.ts: thumb.wikimedia.org is not the Wikimedia file host; use upload.wikimedia.org for direct preview URLs',
  )
}

if (figureSource.includes('https://www.jacar.archives.go.jp/das/image/')) {
  errors.push(
    'src/media/periodFigures.ts: JACAR /das/image/ URLs are not stable embeddable image assets; use a stable image host for imageUrl and keep JACAR as source metadata',
  )
}

for (const duplicate of duplicates) {
  errors.push('duplicate figure route key: ' + duplicate)
}

const policy = JSON.parse(await fs.readFile(POLICY_FILE, 'utf8'))
const noImage = policy?.noImage
if (!noImage || typeof noImage !== 'object' || Array.isArray(noImage)) {
  errors.push('standards/image-necessity.json: "noImage" must be an object')
}

const noImageStreakAudits = policy?.noImageStreakAudits
if (
  !noImageStreakAudits ||
  typeof noImageStreakAudits !== 'object' ||
  Array.isArray(noImageStreakAudits)
) {
  errors.push(
    'standards/image-necessity.json: "noImageStreakAudits" must be an object',
  )
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

const requiredStreaks =
  noImage && typeof noImage === 'object' && !Array.isArray(noImage)
    ? collectNoImageStreaks(publishedPeriods, noImage)
    : []
const requiredStreakSignatures = new Set(requiredStreaks.map(streakSignature))
const auditSignatures = new Set()

if (
  noImageStreakAudits &&
  typeof noImageStreakAudits === 'object' &&
  !Array.isArray(noImageStreakAudits)
) {
  for (const [auditId, audit] of Object.entries(noImageStreakAudits)) {
    const routes = audit && typeof audit === 'object' ? audit.routes : undefined
    const reason = audit && typeof audit === 'object' ? audit.reason : undefined
    const alternatives =
      audit && typeof audit === 'object' ? audit.alternativesReviewed : undefined

    if (!Array.isArray(routes) || routes.length < NO_IMAGE_STREAK_THRESHOLD) {
      errors.push(
        auditId +
          ': no-image streak audit must list at least ' +
          NO_IMAGE_STREAK_THRESHOLD +
          ' routes',
      )
      continue
    }

    const indexes = routes.map((routeKey) => publishedRouteIndex.get(routeKey))
    if (indexes.some((index) => index === undefined)) {
      errors.push(auditId + ': no-image streak audit references a non-published route')
      continue
    }

    for (let i = 1; i < indexes.length; i += 1) {
      if (indexes[i] !== indexes[i - 1] + 1) {
        errors.push(auditId + ': no-image streak audit routes must be consecutive published periods')
        break
      }
    }

    if (routes.some((routeKey) => !Object.hasOwn(noImage ?? {}, routeKey))) {
      errors.push(auditId + ': no-image streak audit includes a route that is not currently noImage')
    }

    if (
      typeof reason !== 'string' ||
      reason.trim().length < MIN_STREAK_REASON_LENGTH
    ) {
      errors.push(
        auditId +
          ': no-image streak audit reason must be at least ' +
          MIN_STREAK_REASON_LENGTH +
          ' characters',
      )
    }

    if (
      !Array.isArray(alternatives) ||
      alternatives.length < 2 ||
      alternatives.some(
        (item) =>
          typeof item !== 'string' ||
          item.trim().length < MIN_STREAK_ALTERNATIVE_LENGTH,
      )
    ) {
      errors.push(
        auditId +
          ': no-image streak audit must record at least two concrete alternatives reviewed',
      )
    }

    const signature = streakSignature(routes)
    if (auditSignatures.has(signature)) {
      errors.push(auditId + ': duplicate no-image streak audit for the same route sequence')
    }
    auditSignatures.add(signature)

    if (!requiredStreakSignatures.has(signature)) {
      errors.push(auditId + ': stale no-image streak audit does not match a current maximal streak')
    }
  }
}

for (const routes of requiredStreaks) {
  const signature = streakSignature(routes)
  if (!auditSignatures.has(signature)) {
    errors.push(
      routes[0] +
        ' ... ' +
        routes[routes.length - 1] +
        ': ' +
        routes.length +
        ' consecutive published periods use noImage; add figures or record a noImageStreakAudits review of photographs, documents, newspapers, posters, and other historical media',
    )
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
    ' no-image decisions, ' +
    Object.keys(noImageStreakAudits ?? {}).length +
    ' no-image streak audits.',
)
