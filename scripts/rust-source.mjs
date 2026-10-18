/** Mask literals/comments while preserving source offsets for balanced block scanning. */
function codeOnly(source) {
  return source.replace(/r(#+)?"[\s\S]*?"\1|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\\r\n])'|\/\/[^\n]*|\/\*[\s\S]*?\*\//g, value => value.replace(/[^\n]/g, ' '));
}
/** Test fixtures contain mock routers and must never become published service operations. */
export function productionRust(source) {
  const code = codeOnly(source);
  const removals = [];
  const pattern = /#\[cfg\(test\)\]\s*(?:#\[[^\]]*\]\s*)*(?:pub(?:\([^)]*\))?\s+)?mod\s+\w+\s*\{/g;
  for (const match of source.matchAll(pattern)) {
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
