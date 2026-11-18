/**
 * Guard against the one class of bug that `// @ts-nocheck` hides: a name that
 * does not exist. esbuild leaves an unknown identifier as a global read, so a
 * deleted import only fails when that branch finally renders (a message with an
 * image once crashed on `fileSizeText is not defined`).
 *
 * The fork is copied to a temp tree with the directive removed and typechecked;
 * only TS2304 (cannot find name) and TS2552 (did you mean?) are reported. Other
 * diagnostics are expected — the fork was written without types.
 */
import { cp, mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import path from 'node:path'

const run = promisify(execFile)
const root = new URL('..', import.meta.url).pathname
/* Inside the repository on purpose: `types: ["react"]` and every bare import
   resolve through this package's node_modules. `.work/` is gitignored. */
const work = path.join(root, '.work', 'fork-check')
const FOUND_NAME = /error TS(2304|2552):/

/** Copy the source tree, dropping the `@ts-nocheck` header from every file. */
async function copy(from, to) {
  await mkdir(to, { recursive: true })
  for (const entry of await readdir(from, { withFileTypes: true })) {
    const source = path.join(from, entry.name)
    const target = path.join(to, entry.name)
    if (entry.isDirectory()) {
      await copy(source, target)
      continue
    }
    const text = await readFile(source, 'utf8')
    await writeFile(target, text.startsWith('// @ts-nocheck')
      ? text.slice(text.indexOf('\n') + 1)
      : text)
  }
}

await rm(work, { recursive: true, force: true })
await copy(path.join(root, 'src'), path.join(work, 'src'))
/* the fork's own declaration for CSS modules went away with the unused files */
await writeFile(path.join(work, 'src', 'css-modules-shim.d.ts'),
  "declare module '*.module.css' {\n  const classes: Record<string, string>\n  export default classes\n}\n")
const base = JSON.parse(await readFile(path.join(root, 'tsconfig.json'), 'utf8'))
await writeFile(path.join(work, 'tsconfig.json'), JSON.stringify({
  ...base,
  compilerOptions: { ...base.compilerOptions, noEmit: true, skipLibCheck: true },
  include: ['src/**/*.ts', 'src/**/*.tsx'],
}, null, 2))

let output = ''
try {
  const result = await run(path.join(root, 'node_modules', '.bin', 'tsc'), ['--noEmit', '-p', work], {
    cwd: work,
    maxBuffer: 16 * 1024 * 1024,
  })
  output = result.stdout
} catch (error) {
  output = String(error.stdout ?? '')
}
await rm(work, { recursive: true, force: true })

/* A broken config (missing @types resolution, bad include) would make every
   run pass by producing no diagnostics at all. */
const CONFIG_ERROR = /error TS(2688|5055|6053|5083):/
const configError = output.split('\n').find(line => CONFIG_ERROR.test(line))
if (configError !== undefined) {
  console.error(`fork check: the temporary project did not typecheck at all:\n  ${configError}`)
  process.exit(1)
}
const findings = output.split('\n').filter(line => FOUND_NAME.test(line))
if (findings.length > 0) {
  console.error('Undefined names in the fork (they compile to a runtime ReferenceError):')
  for (const line of findings) console.error(`  ${line.replace(`${work}/`, '')}`)
  process.exit(1)
}
console.log('fork check: no undefined names')
