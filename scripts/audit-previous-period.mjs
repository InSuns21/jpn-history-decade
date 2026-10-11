import fs from 'node:fs'
import path from 'node:path'
import { spawnSync } from 'node:child_process'

const root = process.cwd()
const periodsDir = path.join(root, 'content', 'periods')

function option(name) {
  const index = process.argv.indexOf(name)
  if (index < 0) return null
  if (index + 1 >= process.argv.length || process.argv[index + 1].startsWith('--')) {
    throw new Error(name + ' requires a value')
  }
  return process.argv[index + 1]
}

function relative(file) {
  return path.relative(root, file).replaceAll('\\', '/')
}

function frontmatterField(source, name) {
  const end = source.indexOf('\n---\n', 4)
  if (!source.startsWith('---\n') || end < 0) {
    throw new Error('Missing YAML frontmatter')
  }
  const block = source.slice(4, end)
  const line = block.split('\n').find((item) => item.startsWith(name + ':'))
  if (!line) return ''
  return line.slice(name.length + 1).trim().replace(/^["']|["']$/g, '')
}

function listPeriods() {
  return fs.readdirSync(periodsDir)
    .filter((name) => name.endsWith('.md'))
    .map((name) => {
      const file = relative(path.join(periodsDir, name))
      const source = fs.readFileSync(path.join(root, file), 'utf8')
      const id = frontmatterField(source, 'id')
      return {
        file,
        source,
        id,
        routeKey: frontmatterField(source, 'routeKey'),
        startDate: frontmatterField(source, 'startDate'),
        endDate: frontmatterField(source, 'endDate'),
        status: frontmatterField(source, 'status'),
      }
    })
    .filter((page) => page.status === 'published')
    .sort((a, b) => a.startDate.localeCompare(b.startDate) || a.id.localeCompare(b.id))
}

function matchingPage(pages, text) {
  const needle = text.toLowerCase().replace(/\.md$/u, '')
  return pages.find((page) =>
    [page.id, page.routeKey, page.file, path.basename(page.file, '.md')]
      .some((value) => value.toLowerCase() === needle),
  )
}

function selectTarget(pages, next, previous) {
  if (previous) {
    const match = matchingPage(pages, previous)
    if (!match) throw new Error('Published previous article not found: ' + previous)
    return match
  }

  if (next) {
    const jh = next.match(/^jh(\d+)$/iu)
    if (jh) {
      const nextNumber = Number(jh[1])
      const eligible = pages.filter((page) => {
        const found = page.id.match(/^jh(\d+)$/iu)
        return found && Number(found[1]) < nextNumber
      })
      if (eligible.length === 0) throw new Error('No published article before ' + next)
      return eligible.at(-1)
    }
    const current = matchingPage(pages, next)
    if (current) {
      const index = pages.indexOf(current)
      if (index === 0) throw new Error('No published article before ' + next)
      return pages[index - 1]
    }
    if (/^\d{4}-\d{2}-\d{2}$/u.test(next)) {
      const eligible = pages.filter((page) => page.startDate < next)
      if (eligible.length === 0) throw new Error('No published article before ' + next)
      return eligible.at(-1)
    }
    throw new Error('Unrecognised --next value (use JH### or YYYY-MM-DD): ' + next)
  }

  if (!pages.length) throw new Error('No published articles available')
  return pages.at(-1)
}

function summarizeSections(source) {
  const body = source.slice(source.indexOf('\n---\n', 4) + 5)
  const sections = body.split(/(?=^##\s+)/gmu).filter((section) => section.trim())
  const summaries = sections.map((section) => ({
    heading: section.match(/^##\s+([^\n]+)/u)?.[1] ?? '冒頭',
    chars: Array.from(section.replace(/\s+/gu, '')).length,
  }))
  return summaries.sort((a, b) => b.chars - a.chars).slice(0, 3)
}

function runCheck(label, command) {
  console.log('\n[' + label + ']')
  const result = spawnSync(process.execPath, command, {
    cwd: root,
    encoding: 'utf8',
  })
  if (result.stdout) process.stdout.write(result.stdout)
  if (result.stderr) process.stderr.write(result.stderr)
  if (result.error) throw result.error
  return result.status === 0
}

try {
  if (process.argv.includes('--help')) {
    console.log('Usage: npm run audit:previous [-- --next JH163 | --previous JH162]')
    console.log('Without options, target the latest chronologically published period.')
    process.exit(0)
  }
  const next = option('--next')
  const previous = option('--previous')
  if (next && previous) throw new Error('Choose either --next or --previous')
  const pages = listPeriods()
  const target = selectTarget(pages, next, previous)
  const index = pages.indexOf(target)
  const predecessor = index > 0 ? pages[index - 1] : null

  console.log('Previous-article follow-up review / 次工程着手時の直前記事査読')
  console.log('Target: ' + target.id.toUpperCase() + ' (' + target.startDate + '–' + target.endDate + ')')
  console.log('File: ' + target.file)
  console.log('Earlier period (context only): ' + (predecessor?.file ?? 'none'))
  console.log('Selection: ' + (previous ? '--previous ' + previous : next ? '--next ' + next : 'latest published'))
  console.log('\nLongest Markdown sections (length is only a signal, not a pass/fail rule):')
  for (const section of summarizeSections(target.source)) {
    console.log('- ' + section.heading + ': ' + section.chars + ' characters')
  }

  const claimPassed = runCheck('claim/caution lint (target only)', [
    'scripts/validate-claim-cautions.mjs', '--only', target.file,
  ])
  const readabilityPassed = runCheck('readability signals (target only)', [
    'scripts/report-readability.mjs', '--only', target.file,
  ])

  console.log('\nRequired human follow-up review — correct the previous article before completing the next task:')
  console.log('1. 主張層の保留・留保／読者向け解釈指示／仮想読者への反論を洗い出し、史実の肯定文と読み方の留保を分離する。')
  console.log('2. 中心問いに不要な細部（条文・部隊・日時の逐一列挙等）を圧縮し、主体・行為・状態変化・負担・制約は残す。')
  console.log('3. 節末の再要約、別表と本文の反復、summary / changes / 本文 / interpretiveCautions の意味的重複を除く。')
  console.log('4. 中学歴史を前提に、初出の人物・制度・重要語と因果を本文で説明し、過密な一文を分割する。')
  console.log('5. 根拠・不確実性・当時の認識と後世の結果を点検し、修正する場合は出典と用語リンクも保つ。')
  console.log('6. 次のPLAN・記事の作業記録またはPRへ「対象／検出事項／修正・保留理由／再検証結果」を残す。')
  console.log('This command cannot certify semantic review. Automated pass != review complete.')

  if (!claimPassed || !readabilityPassed) {
    console.error('\nPrevious-article automated checks failed; fix target and re-run.')
    process.exitCode = 1
  } else {
    console.log('\nTargeted automated checks passed. Human review remains required.')
  }
} catch (error) {
  console.error('audit:previous: ' + error.message)
  process.exitCode = 1
}
