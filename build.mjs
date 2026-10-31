import { mkdir, readFile, rm, writeFile, copyFile } from 'node:fs/promises'
import { rollup } from 'rollup'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import replace from '@rollup/plugin-replace'
import presetTypescript from '@babel/preset-typescript'
import presetReact from '@babel/preset-react'

await rm('dist', { recursive: true, force: true })
await mkdir('dist/assets', { recursive: true })

const bundle = await rollup({
  input: 'src/main.tsx',
  plugins: [
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    resolve({
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    }),
    commonjs({
      transformMixedEsModules: true,
    }),
    babel({
      babelHelpers: 'bundled',
      babelrc: false,
      configFile: false,
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      presets: [
        [presetTypescript, { isTSX: true, allExtensions: true, onlyRemoveTypeImports: true }],
        [presetReact, { runtime: 'automatic' }],
      ],
    }),
  ],
})

await bundle.write({
  file: 'dist/assets/app.js',
  format: 'iife',
  inlineDynamicImports: true,
  sourcemap: false,
})
await bundle.close()

await copyFile('src/styles.css', 'dist/assets/styles.css')

const html = await readFile('src/index.template.html', 'utf8')
const outputHtml = html
  .replace('href="/src/styles.css"', 'href="./assets/styles.css"')
  .replace('<script type="module" src="/src/main.tsx"></script>', '<script src="./assets/app.js" defer></script>')

await writeFile('dist/index.html', outputHtml)
console.log('Built dist/index.html, dist/assets/app.js, dist/assets/styles.css')
