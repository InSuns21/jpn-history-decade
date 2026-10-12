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
  const anchors = new Set([...source.matchAll(/\\{#([a-z0-9-]+)\\}/g)].map((match) => match[1]))
  const remap = info.legacySectionRemap ?? {}
  for (const [oldSection, newSection] of Object.entries(remap)) {
    assert.ok(info.legacySections.includes(oldSection), 'remapped section must be a legacy anchor: ' + legacy + '#' + oldSection)
    assert.notEqual(oldSection, newSection, 'redundant section remap: ' + legacy + '#' + oldSection)
    assert.ok(anchors.has(newSection), 'missing remap destination: ' + legacy + '#' + oldSection + ' -> ' + newSection)
  }
  for (const section of info.legacySections) {
    const destination = remap[section] ?? section
    assert.ok(anchors.has(destination), 'missing old section anchor ' + legacy + '#' + section + ' -> ' + destination)
  }
  const terms = JSON.parse(fs.readFileSync(path.join(root, 'content', 'glossary', 'periods', info.target + '.json'), 'utf8')).termRefs.map(x=>x.id)
  for (const term of info.legacyTerms) {
    assert.ok(terms.includes(term), 'missing old glossary term: ' + term)
  }
}

// Regression: both original January pages used "state-transition" for different dates.
// Old JH119 deep links must still resolve to January 23, while JH120 ones
// must resolve to the January 31 conclusion (including links from term URLs).
assert.ok(aliases['1942-01-24'], 'January 24 alias missing')
assert.equal(aliases['1942-01-24'].target, '1942-01-12')
assert.equal(aliases['1942-01-24'].legacySectionRemap?.['state-transition'], 'january-end-state')
const januaryText = fs.readFileSync(path.join(root, 'content', 'periods', '1942-01-12.md'), 'utf8')
assert.ok(januaryText.includes('{#state-transition}'), 'January 23 intermediate anchor missing')
assert.ok(januaryText.includes('{#january-end-state}'), 'January 31 concluding anchor missing')
assert.ok(januaryText.includes('{#singapore-withdrawal}'), 'January 31 Singapore retreat must remain independent')

console.log('Legacy period alias and deep-link verification passed (' + Object.keys(aliases).length + ' aliases).')
