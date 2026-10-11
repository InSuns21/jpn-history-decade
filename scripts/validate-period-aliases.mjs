import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { parse as parseYaml } from 'yaml'

const root = process.cwd()
const aliases = JSON.parse(fs.readFileSync(path.join(root, 'content', 'period-route-aliases.json'), 'utf8'))
for (const [legacy, info] of Object.entries(aliases)) {
  const oldFile = path.join(root, 'content', 'periods', legacy + '.md')
  const currentFile = path.join(root, 'content', 'periods', info.target + '.md')
  assert.equal(fs.existsSync(oldFile), false, 'legacy file must be merged: ' + legacy)
  assert.ok(fs.existsSync(currentFile), 'canonical period missing: ' + info.target)
  const source = fs.readFileSync(currentFile, 'utf8')
  const front = source.match(/^---\r?\n([\s\S]*?)\r?\n---/u)
  assert.ok(front, 'canonical frontmatter missing')
  const metadata = parseYaml(front[1])
  assert.equal(metadata.routeKey, info.target)
  assert.ok(metadata.endDate >= legacy, 'merged period does not cover old date: ' + legacy)
  for (const section of info.legacySections) {
    assert.ok(source.includes('{#' + section + '}'), 'missing old section anchor ' + legacy + '#'+section)
  }
  const terms = JSON.parse(fs.readFileSync(path.join(root, 'content', 'glossary', 'periods', info.target + '.json'), 'utf8')).termRefs.map(x=>x.id)
  for (const term of info.legacyTerms) {
    assert.ok(terms.includes(term), 'missing old glossary term: ' + term)
  }
}
console.log('Legacy period alias and deep-link verification passed (' + Object.keys(aliases).length + ' aliases).')
