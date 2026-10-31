import { readFile, writeFile } from 'node:fs/promises'

const html = await readFile('dist/index.html', 'utf8')
const css = await readFile('dist/assets/styles.css', 'utf8')
const js = await readFile('dist/assets/app.js', 'utf8')

if (js.includes('</script>')) {
  throw new Error('Bundled JavaScript contains a closing script tag; single-file inlining would break.')
}

const single = html
  .replace('<link rel="stylesheet" href="./assets/styles.css" />', () => `<style>\n${css}\n</style>`)
  .replace('<script src="./assets/app.js" defer></script>', () => `<script>\n${js}\n</script>`)

await writeFile('dist/微循原型.html', single)
console.log(`Built dist/微循原型.html (${(Buffer.byteLength(single) / 1024 / 1024).toFixed(2)} MB)`)
