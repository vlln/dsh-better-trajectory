/**
 * 构建浏览器半边：CJS + `__ModuleLoader__.load` 包装。
 *
 * 不内联 React / 官方客户端模块：它们由宿主 client-modules 的种子表提供，
 * 打进包里会出现第二份 React 并让 hook 失效。
 *
 * 原生轨迹源码（vendor/trajectory）用 CSS Modules，esbuild 不认；这里用
 * postcss-modules 生成作用域类名，并把 CSS 以 <style> 注入。
 */
import { build } from 'esbuild'
import { mkdir, readFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import path from 'node:path'
import postcss from 'postcss'
import postcssModules from 'postcss-modules'

const outfile = new URL('../lib/client.js', import.meta.url)
await mkdir(new URL('../lib/', import.meta.url), { recursive: true })

const short = (value) => createHash('sha1').update(value).digest('base64url').slice(0, 6)

const cssModules = {
  name: 'css-modules',
  setup(browser) {
    browser.onLoad({ filter: /\.module\.css$/ }, async (args) => {
      const source = await readFile(args.path, 'utf8')
      let exported = {}
      const result = await postcss([
        postcssModules({
          generateScopedName: (name, filename) =>
            `bt_${path.basename(filename).replace(/\.module\.css$/, '')}_${name}_${short(filename + name)}`,
          getJSON: (_file, json) => { exported = json },
        }),
      ]).process(source, { from: args.path })
      const key = short(args.path)
      return {
        loader: 'js',
        contents: [
          `const css = ${JSON.stringify(result.css)};`,
          `if (typeof document !== 'undefined' && document.querySelector('style[data-bt-css="${key}"]') === null) {`,
          `  const el = document.createElement('style');`,
          `  el.setAttribute('data-bt-css', '${key}');`,
          `  el.textContent = css;`,
          `  document.head.appendChild(el);`,
          `}`,
          `export default ${JSON.stringify(exported)};`,
        ].join('\n'),
      }
    })
  },
}

await build({
  entryPoints: ['src/client/index.tsx'],
  outfile: outfile.pathname,
  bundle: true,
  format: 'cjs',
  platform: 'browser',
  target: 'es2022',
  jsx: 'automatic',
  sourcemap: false,
  legalComments: 'none',
  logLevel: 'info',
  loader: { '.css': 'text' },
  plugins: [cssModules],
  // 与原生 lib/client.js 的 require 集合保持一致；其余（含 dsh-util-values 等
  // 宿主侧包）由本包自行打包，否则会在 module table 里找不到。
  external: [
    'react',
    'react/jsx-runtime',
    '@deepseek-ai/dsh-client-store',
    '@deepseek-ai/dsh-client-ui-primitives',
    '@tanstack/react-virtual',
  ],
  banner: {
    js: 'window.__ModuleLoader__.load({ id: "dsh-better-trajectory", factory: (require) => {\nvar module = { exports: {} }; var exports = module.exports;',
  },
  footer: {
    js: 'return module.exports; } });',
  },
})
