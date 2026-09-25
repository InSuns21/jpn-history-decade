import fs from 'node:fs'

const file = 'SYSTEM_PROMPT.md'
const maxCharacters = 8000
const content = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n')
const characters = [...content].length

if (characters > maxCharacters) {
  console.error(
    file + ' is too long: ' + characters + ' characters (limit: ' + maxCharacters + '). ' +
    'Move detailed rules to standards/ or plan/.',
  )
  process.exit(1)
}

console.log(file + ' length OK: ' + characters + '/' + maxCharacters + ' characters.')
