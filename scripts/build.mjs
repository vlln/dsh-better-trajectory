/**
 * 构建浏览器半边：CJS + `__ModuleLoader__.load` 包装。
 *
 * 不内联 React / 官方客户端模块：它们由宿主 client-modules 的种子表提供，
 * 打进包里会出现第二份 React 并让 hook 失效。
 */
import { build } from 'esbuild'
import { mkdir } from 'node:fs/promises'

const outfile = new URL('../lib/client.js', import.meta.url)
await mkdir(new URL('../lib/', import.meta.url), { recursive: true })

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
  external: [
    'react',
    'react-dom',
    'react/jsx-runtime',
    'react-dom/client',
    '@deepseek-ai/*',
  ],
  banner: {
    js: 'window.__ModuleLoader__.load({ id: "dsh-better-trajectory", factory: (require) => {\nvar module = { exports: {} }; var exports = module.exports;',
  },
  footer: {
    js: 'return module.exports; } });',
  },
})