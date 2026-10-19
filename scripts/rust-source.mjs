/** Mask literals/comments while preserving source offsets for balanced block scanning. */
export function maskRust(source) {
  const out = source.split('');
  const blank = (start, end) => { for (let k = start; k < end; k++) if (out[k] !== '\n') out[k] = ' '; };
  for (let i = 0; i < source.length;) {
    const start = i;
    if (source.startsWith('//', i)) {
      i = source.indexOf('\n', i); if (i < 0) i = source.length;
    } else if (source.startsWith('/*', i)) {
      i += 2; let depth = 1;
      while (i < source.length && depth) {
        if (source.startsWith('/*', i)) { depth++; i += 2; }
        else if (source.startsWith('*/', i)) { depth--; i += 2; }
        else i++;
      }
    } else {
      const raw = source.slice(i).match(/^(?:br|r)(#*)"/);
      if (raw) {
        const close = source.indexOf(`"${raw[1]}`, i + raw[0].length);
        i = close < 0 ? source.length : close + raw[1].length + 1;
      } else if (source[i] === '"') {
        i++;
        while (i < source.length) {
          if (source[i] === '\\') i += 2;
          else if (source[i++] === '"') break;
        }
      } else if (source[i] === "'" && /^'(?:\\(?:u\{[\da-fA-F]+\}|x[\da-fA-F]{2}|.)|[^'\\\r\n])'/u.test(source.slice(i))) {
        i += source.slice(i).match(/^'(?:\\(?:u\{[\da-fA-F]+\}|x[\da-fA-F]{2}|.)|[^'\\\r\n])'/u)[0].length;
      } else { i++; continue; }
    }
    blank(start, i);
  }
  return out.join('');
}
/** Test fixtures contain mock routers and must never become published service operations. */
export function productionRust(source) {
  const code = maskRust(source);
  const removals = [];
  const pattern = /#\[cfg\(test\)\]\s*(?:#\[[^\]]*\]\s*)*(?:pub(?:\([^)]*\))?\s+)?mod\s+\w+\s*\{/g;
  for (const match of code.matchAll(pattern)) {
    const open = source.indexOf('{', match.index);
    let depth = 1, end = open + 1;
    for (; end < code.length && depth; end++) {
      if (code[end] === '{') depth++;
      else if (code[end] === '}') depth--;
    }
    if (depth) throw new Error('Unbalanced Rust test module');
    removals.push([match.index, end]);
  }
  for (const [start, end] of removals.reverse()) source = source.slice(0, start) + source.slice(start, end).replace(/[^\n]/g, ' ') + source.slice(end);
  return source;
}
