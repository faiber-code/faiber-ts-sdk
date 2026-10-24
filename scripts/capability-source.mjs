import { productionRust, maskRust } from './rust-source.mjs';
export { maskRust } from './rust-source.mjs';

/** Static evidence only. An unresolved symbol is reported, never guessed. */
export function balancedEnd(code, start, open = '{', close = '}') {
  let depth = 0;
  for (let i = start; i < code.length; i++) {
    if (code[i] === open) depth++;
    else if (code[i] === close && --depth === 0) return i;
  }
  return -1;
}

export function splitRust(source) {
  const code = maskRust(source), result = [];
  let start = 0; const stack = [];
  for (let i = 0; i < code.length; i++) {
    if ('([{<'.includes(code[i])) stack.push(code[i]);
    else if (')]}'.includes(code[i]) || (code[i] === '>' && code[i - 1] !== '-' && code[i - 1] !== '=')) stack.pop();
    else if (code[i] === ',' && !stack.length) { result.push(source.slice(start, i)); start = i + 1; }
  }
  result.push(source.slice(start));
  return result;
}

function precedingAttributes(source, start) {
  // Only attributes/comments contiguous with this declaration belong to it.
  let end = start;
  const parts = [];
  while (end > 0) {
    while (end > 0 && /\s/.test(source[end - 1])) end--;
    const lineStart = source.lastIndexOf('\n', end - 1) + 1;
    if (source.slice(lineStart, end).trim().startsWith('//')) {
      parts.unshift(source.slice(lineStart, end).trim()); end = lineStart; continue;
    }
    if (source[end - 1] !== ']') break;
    const begin = source.lastIndexOf('#[', end - 1);
    if (begin < 0) break;
    const attribute = source.slice(begin, end);
    if (balancedEnd(maskRust(attribute), 1, '[', ']') !== attribute.length - 1) break;
    parts.unshift(attribute); end = begin;
  }
  return parts.join('\n');
}

export function sourceIndex(original, path) {
  const source = productionRust(original), code = maskRust(source);
  const line = offset => source.slice(0, offset).split('\n').length;
  const functions = [], models = [];
  for (const match of code.matchAll(/\b(?:pub(?:\([^)]*\))?\s+)?(?:async\s+)?fn\s+(\w+)\s*(?:<[^{};]*?>)?\s*\(/g)) {
    const paramsStart = code.indexOf('(', match.index), paramsEnd = balancedEnd(code, paramsStart, '(', ')');
    if (paramsEnd < 0) continue;
    const bodyStart = code.indexOf('{', paramsEnd), semicolon = code.indexOf(';', paramsEnd);
    if (bodyStart < 0 || (semicolon >= 0 && semicolon < bodyStart)) continue;
    const end = balancedEnd(code, bodyStart);
    if (end < 0) throw new Error(`Unbalanced function ${path}:${line(match.index)}`);
    functions.push({ name: match[1], path, line: line(match.index), end_line: line(end),
      signature: source.slice(match.index, bodyStart).trim(),
      attributes: precedingAttributes(source, match.index), body: source.slice(bodyStart + 1, end) });
  }
  for (const match of code.matchAll(/\b(?:pub(?:\([^)]*\))?\s+)?(struct|enum)\s+(\w+)\s*(?:<[^{};]*?>)?\s*\{/g)) {
    const open = code.indexOf('{', match.index), end = balancedEnd(code, open);
    if (end < 0) throw new Error(`Unbalanced model ${path}:${line(match.index)}`);
    const attributes = precedingAttributes(source, match.index);
    const fields = splitRust(source.slice(open + 1, end)).flatMap(raw => {
      const masked = maskRust(raw).replace(/#\[[\s\S]*?\]/g, ' ').trim();
      const field = masked.match(/^(?:pub(?:\([^)]*\))?\s+)?(\w+)\s*:\s*([\s\S]+)$/);
      if (!field) return [];
      const wireName = raw.match(/\brename\s*=\s*"([^"]+)"/)?.[1] ?? (attributes.includes('camelCase')
        ? field[1].replace(/_([a-z])/g, (_, c) => c.toUpperCase()) : field[1]);
      const fieldAttributes=[...raw.matchAll(/#\[([\s\S]*?)\]/g)].map(x => x[1]);
      return [{ name: wireName, rust_name: field[1], rust_type: field[2].trim(),
        optional: /^Option\s*</.test(field[2].trim()), defaulted: fieldAttributes.some(x=>/\bdefault\b/.test(x)),
        flatten: fieldAttributes.some(x=>/\bflatten\b/.test(x)), attributes:fieldAttributes }];
    });
    models.push({ name: match[2], kind: match[1], path, line: line(match.index), attributes, fields,
      ...(match[1] === 'enum' ? { variants: splitRust(source.slice(open + 1, end)).map(raw => raw.trim()).filter(Boolean) } : {}) });
  }
  // Support simple, source-defined declaration macros. Repeated/token-tree
  // matchers stay unresolved rather than approximating Rust macro expansion.
  for (const match of code.matchAll(/\bmacro_rules!\s+(\w+)\s*\{/g)) {
    const open = code.indexOf('{', match.index), end = balancedEnd(code, open);
    const definition = source.slice(open + 1, end);
    const arm = definition.match(/^\s*\(([^]*?)\)\s*=>\s*\{/);
    if (!arm) continue;
    const parameters = splitRust(arm[1]).map(x => x.trim().match(/^\$(\w+)\s*:\s*(?:ident|expr|ty|path)$/)?.[1]);
    if (parameters.some(x => !x)) continue;
    const templateOpen = definition.indexOf('{', arm.index + arm[0].length - 1);
    const templateEnd = balancedEnd(maskRust(definition), templateOpen);
    const template = definition.slice(templateOpen + 1, templateEnd);
    if (/\$[({]/.test(template)) continue;
    for (const invocation of code.matchAll(new RegExp(`\\b${match[1]}!\\s*\\(`, 'g'))) {
      const argsOpen = code.indexOf('(', invocation.index), argsEnd = balancedEnd(code, argsOpen, '(', ')');
      const args = splitRust(source.slice(argsOpen + 1, argsEnd)).map(x => x.trim()).filter(Boolean);
      if (args.length !== parameters.length) continue;
      let expanded = template;
      parameters.forEach((parameter, index) => { expanded = expanded.replace(new RegExp(`\\$${parameter}\\b`, 'g'), () => args[index]); });
      const generated = sourceIndex(expanded, path);
      const baseLine = line(open + 1 + templateOpen + 1) - 1;
      functions.push(...generated.functions.map(fn => ({ ...fn, line: baseLine + fn.line, end_line: baseLine + fn.end_line,
        expansion: { macro: match[1], definition_line: line(match.index), invocation_line: line(invocation.index) } })));
    }
  }
  return { path, source, functions, models };
}

function modulePath(path) { return path.replace(/^.*?\/src\//, '').replace(/\.rs$/, '').replace(/\/mod$/, '').replaceAll('/', '::'); }

export function resolveSymbol(files, name, sourcePath, qualifier, kind = 'functions') {
  let matches = files.flatMap(file => file[kind].filter(item => item.name === name));
  const normalized = qualifier?.replace(/^crate::|^self::/, '').replace(/::$/, '');
  if (normalized && !['models', 'super'].includes(normalized)) {
    const precise = matches.filter(item => modulePath(item.path) === normalized || modulePath(item.path).endsWith(`::${normalized}`));
    if (precise.length) matches = precise;
  }
  const sameFile = matches.filter(item => item.path === sourcePath);
  if (!normalized && sameFile.length === 1) return { resolved: sameFile[0], candidates: [] };
  const sourceModule = modulePath(sourcePath).split('::').slice(0, -1).join('::');
  const nearby = matches.filter(item => sourceModule && modulePath(item.path).startsWith(`${sourceModule}::`));
  if (nearby.length === 1) return { resolved: nearby[0], candidates: [] };
  if (matches.length === 1) return { resolved: matches[0], candidates: [] };
  return { resolved: null, candidates: matches.map(({ name, path, line }) => ({ name, path, line })) };
}

export function functionEvidence(fn) {
  if (!fn) return null;
  const text = `${fn.attributes}\n${fn.body}`;
  const sourceLines = fn.body.split('\n');
  const evidence = pattern => sourceLines.flatMap((value, index) => pattern.test(value)
    ? [{ path: fn.path, line: fn.line + fn.signature.split('\n').length - 1 + index, expression: value.trim().slice(0, 700) }] : []);
  const declared = [...text.matchAll(/(?:\.require(?:_any)?|permissions|authorize)\s*\(([^;]*?)\)/g)]
    .flatMap(match => [...match[1].matchAll(/"([a-z_]+:[a-z_:]+)"/g)].map(x => x[1]));
  const directCalls = [...fn.body.matchAll(/\b((?:crate|super|repository|service|policy|engine|capabilities)(?:::\w+)+)\s*\(/g)].map(x => x[1]);
  return { name: fn.name, path: fn.path, line: fn.line, end_line: fn.end_line, signature: fn.signature,
    ...(fn.expansion ? {macro_expansion:fn.expansion} : {}),
    declared_permissions: [...new Set(declared)],
    guards: evidence(/require|authorize|permission|is_admin|ensure_|membership|tenant|organization|owner|scope|If-Match|if_match|idempotenc/i),
    validation: evidence(/validate|BadRequest|UNPROCESSABLE|Conflict|CONFLICT|\.clamp\(|\.len\(|\.is_empty\(|\.contains\(|expected_version/i),
    state: evidence(/status|state|transition|published|archived|deleted_at|supersed|expiry|expires_at/i),
    effects: evidence(/insert|update|delete|publish|emit|enqueue|outbox|transaction|commit|\.send\(|dispatch|transfer|refund|charge/i),
    calls: [...new Set(directCalls)] };
}
