import { readFileSync, realpathSync } from 'node:fs';
import { basename, dirname, isAbsolute, relative, resolve , sep } from 'node:path';
import { createHash } from 'node:crypto';
import { balancedEnd } from './capability-source.mjs';
import { productionRust, maskRust } from './rust-source.mjs';

/** Hash compiler-embedded inputs without treating their contents as Rust declarations. */
export function embeddedSourceEvidence(root, sources) {
  const assets = [], gaps = [], visited = new Set();
  const project = realpathSync(root);
  const queue = sources.map(source => ({path: source.path, text: source.text, manifestDir: source.manifestDir}));
  while (queue.length) {
    const item = queue.shift();
    const text = productionRust(item.text), code = maskRust(text);
    for (const match of code.matchAll(/\binclude(?:_(str|bytes))?!\s*\(/g)) {
      const open = code.indexOf('(', match.index), end = balancedEnd(code, open, '(', ')');
      const argument = text.slice(open + 1, end).trim().replace(/,\s*$/, '');
      const plain = argument.match(/^"([^"\\]*)"$/), raw = argument.match(/^r(#{0,})"([\s\S]*?)"\1$/);
      let requested = plain?.[1] ?? raw?.[2];
      let base = realpathSync(dirname(item.path));
      // Only a caller-supplied Cargo target/manifest binding can resolve this
      // compile-time environment. Do not infer the crate from directory names.
      const manifestConcat = argument.match(/^concat!\s*\(\s*env!\s*\(\s*"CARGO_MANIFEST_DIR"\s*\)\s*,\s*"(\/[^"\\]*)"\s*,?\s*\)$/);
      if (manifestConcat && item.manifestDir) {
        base = realpathSync(item.manifestDir);
        const manifestRelative = relative(project,base);
        if (manifestRelative === '..' || manifestRelative.startsWith(`..${sep}`) || isAbsolute(manifestRelative)) {
          gaps.push({source:relative(project,item.path),argument,reason:'manifest directory escapes service root'}); continue;
        }
        requested = manifestConcat[1].slice(1);
      }
      const source = relative(project, resolve(realpathSync(dirname(item.path)), basename(item.path)));
      if (!requested || isAbsolute(requested)) { gaps.push({source, argument, reason:'unresolved or absolute compiler input'}); continue; }
      const candidate = resolve(base, requested);
      const assetPath = relative(project,candidate);
      if (!assetPath || assetPath === '..' || assetPath.startsWith(`..${sep}`) || isAbsolute(assetPath)) { gaps.push({source,argument,reason:'compiler input escapes service root'}); continue; }
      try {
        const path = realpathSync(candidate);
        const rel = relative(project, path);
        if (!rel || rel === '..' || rel.startsWith(`..${sep}`) || isAbsolute(rel)) {
          gaps.push({source, argument, reason:'compiler input escapes service root'}); continue;
        }
        if (visited.has(rel)) continue;
        visited.add(rel);
        const bytes = readFileSync(path);
        assets.push({path:rel, checksum:createHash('sha256').update(bytes).digest('hex'), embedded_by:source});
        if (rel.endsWith('.rs')) queue.push({path,text:bytes.toString('utf8'),manifestDir:item.manifestDir});
      } catch { gaps.push({source,argument,asset_path:assetPath,reason:'compiler input missing or unreadable'}); }
    }
  }
  return {assets:assets.sort((a,b)=>a.path.localeCompare(b.path)), gaps};
}
