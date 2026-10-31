import { balancedEnd, maskRust, splitRust, functionEvidence } from './capability-source.mjs';

const crateRootOf = path => path.slice(0, path.lastIndexOf('/src/'));
const moduleOf = path => path.slice(path.lastIndexOf('/src/') + 5).replace(/\.rs$/, '').replace(/\/mod$/, '').replaceAll('/', '::');

function imports(source) {
  const aliases = new Map();
  function expand(raw, prefix = '') {
    const open = raw.indexOf('{');
    if (open >= 0) {
      const parent = prefix + raw.slice(0, open).trim();
      for (const part of splitRust(raw.slice(open + 1, raw.lastIndexOf('}')))) expand(part.trim(), parent);
    } else {
      const [path, rename] = raw.trim().split(/\s+as\s+/);
      if (path && path !== '*') {
        const full = `${prefix}${path}`.replace(/::self$/, '');
        aliases.set(rename ?? full.split('::').at(-1), full);
      }
    }
  }
  for (const match of maskRust(source).matchAll(/\buse\s+([^;]+);/g)) expand(source.slice(match.index + 4, match.index + match[0].length - 1).trim());
  return aliases;
}

function functionFor(files, current, call, resolving=new Set()) {
  const key=`${current.path}:${call}`;
  if(resolving.has(key))return null;
  resolving=new Set(resolving).add(key);
  const parts = call.split('::');
  let crateRoot = crateRootOf(current.path);
  const localModule=parts.length>1&&new RegExp(`\\bmod\\s+${parts[0]}\\s*[;{]`).test(maskRust(current.source));
  const alias = localModule?undefined:imports(current.source).get(parts[0]);
  if (alias) parts.splice(0, 1, ...alias.split('::'));
  const fnName = parts.pop();
  // Vendored path dependencies are separate Rust crates. Resolve their explicit
  // crate qualifier without letting a same-named service module impersonate it.
  const roots = [...new Set(files.map(file => crateRootOf(file.path)))];
  const dependencyRoots = roots.filter(root => root.split('/').at(-1).replaceAll('-', '_') === parts[0]);
  if (dependencyRoots.length > 1) return null;
  if (dependencyRoots.length === 1 && dependencyRoots[0] !== crateRoot) {
    crateRoot = dependencyRoots[0];
    parts.splice(0, 1, 'crate');
  }
  const scopedFiles = files.filter(file => crateRootOf(file.path) === crateRoot);
  let qualifier = parts.join('::');
  const ownCrate=crateRoot.split('/').at(-1).replaceAll('-','_');
  if(qualifier===ownCrate)qualifier='crate';
  else if(qualifier.startsWith(`${ownCrate}::`))qualifier=`crate::${qualifier.slice(ownCrate.length+2)}`;
  const absolute=qualifier==='crate'||qualifier==='super'||qualifier==='self'||qualifier.startsWith('crate::')||qualifier.startsWith('super::')||qualifier.startsWith('self::');
  if (qualifier.startsWith('crate::')) qualifier = qualifier.slice(7);
  else if (qualifier === 'crate') qualifier = '';
  else if (qualifier === 'super') qualifier = moduleOf(current.path).split('::').slice(0,-1).join('::');
  else if (qualifier === 'self') qualifier = moduleOf(current.path);
  else if (qualifier.startsWith('super::')) qualifier = `${moduleOf(current.path).split('::').slice(0,-1).join('::')}::${qualifier.slice(7)}`;
  else if (qualifier.startsWith('self::')) qualifier = `${moduleOf(current.path)}::${qualifier.slice(6)}`;
  // A qualified sibling imported by `use super::*` belongs to the parent
  // module, not the crate root or the current routes module.
  const parentGlob = !absolute && /\buse\s+super::\*\s*;/.test(maskRust(current.source));
  const parentModule = moduleOf(current.path).split('::').slice(0,-1).join('::');
  const qualifiers=qualifier?[...new Set([...(absolute?[]:[`${moduleOf(current.path)}::${qualifier}`]),
    ...(parentGlob && parentModule ? [`${parentModule}::${qualifier}`] : [qualifier])])]:[];
  for(const module of qualifiers.length?qualifiers:[null]){
    const matches = scopedFiles.flatMap(file => file.functions.filter(fn => fn.name === fnName &&
      (module ? moduleOf(fn.path) === module : fn.path === current.path)).map(fn => ({file,fn})));
    if(matches.length===1)return matches[0];
    const reexportFile=scopedFiles.find(file=>moduleOf(file.path)===module);
    const reexport=reexportFile&&imports(reexportFile.source).get(fnName);
    if(reexport){const result=functionFor(files,reexportFile,reexport,resolving);if(result)return result;}
  }
  return null;
}

function withoutLeadingTrivia(raw){const index=maskRust(raw).search(/\S/);return index<0?'':raw.slice(index).trim();}

function statements(body) {
  const code = maskRust(body), variables = new Map();
  let start = 0, curly = 0, paren = 0, square = 0;
  for (let i = 0; i < code.length; i++) {
    const c = code[i];
    if (c === '{') curly++; else if (c === '}') curly--;
    else if (c === '(') paren++; else if (c === ')') paren--;
    else if (c === '[') square++; else if (c === ']') square--;
    if (c === ';' && !curly && !paren && !square) {
      const part = withoutLeadingTrivia(body.slice(start, i));
      const binding = part.match(/^let\s+(?:mut\s+)?(\w+)(?:\s*:[^=]+)?\s*=\s*([^]*)$/);
      if (binding) {
        let expression=binding[2];
        if(variables.has(binding[1]) && new RegExp(`^${binding[1]}\\b`).test(expression)){
          const previous=`${binding[1]}__binding_${variables.size}`;
          variables.set(previous,variables.get(binding[1]));
          expression=expression.replace(new RegExp(`^${binding[1]}\\b`),previous);
        }
        variables.set(binding[1],expression);
      }
      start = i + 1;
    }
  }
  return { variables, result: body.slice(start).trim().replace(/^return\s+/, '') };
}

function chainCalls(expression) {
  const code = maskRust(expression), calls = [];
  for (let i = 0; i < code.length; i++) {
    if (code[i] === '(' || code[i] === '{' || code[i] === '[') {
      const end = balancedEnd(code, i, code[i], {'(':')','{':'}','[':']'}[code[i]]);
      if (end < 0) break;
      i = end; continue;
    }
    if (code[i] !== '.') continue;
    const match = code.slice(i).match(/^\.(\w+)\s*\(/);
    if (!match) continue;
    const open = code.indexOf('(', i), end = balancedEnd(code, open, '(', ')');
    if (end < 0) break;
    calls.push({ method:match[1], arguments:splitRust(expression.slice(open + 1,end)), offset:i });
    i = end;
  }
  return calls;
}

function generic(signature, name) {
  const match = signature.match(new RegExp(`\\b${name}\\s*<`));
  if (!match) return undefined;
  const open = signature.indexOf('<', match.index), end = balancedEnd(signature,open,'<','>');
  return end < 0 ? undefined : signature.slice(open+1,end).trim();
}

export function mountedRouterOperations(files, entry) {
  const candidates = files.filter(file => file.path.endsWith(entry.path));
  // Prefer the service entry over nested migration/auth crates with the same suffix.
  const root = candidates.sort((a,b)=>a.path.split('/').length-b.path.split('/').length)[0];
  if (!root) throw new Error(`Missing router source ${entry.path}`);
  const operations = [], unresolved = [], protocol_mounts = [], visited = new Set();
  const conditions = [];
  // Match Axum's path_for_nested_route: nesting a root route under /items
  // produces /items, while an explicitly slash-terminated prefix stays so.
  const joinPath = (prefix,path) => !prefix?path:prefix.endsWith('/')?`${prefix}${path.replace(/^\//,'')}`:path==='/'?prefix:`${prefix}${path}`;
  function visit(file, fn, prefix, trail, selectedVariable, routerArguments = new Map(), argumentKey = "") {
    const key = `${file.path}:${fn.name}:${prefix}:${selectedVariable??''}:${JSON.stringify(conditions)}:${argumentKey}`;
    if (visited.has(key)) return;
    if (trail.length > 30) { unresolved.push({kind:'router_depth',path:file.path,function:fn.name}); return; }
    visited.add(key);
    const {variables,result} = statements(fn.body);
    const expanding = new Set();
    function expression(raw, atPrefix) {
      const text = withoutLeadingTrivia(raw);
      if (/^match\s/.test(text)) {
        const masked=maskRust(text),open=masked.indexOf('{'),close=balancedEnd(masked,open);
        if(open<0 || close<0 || text.slice(close+1).trim()) {
          unresolved.push({kind:'match_router_expression',path:file.path,line:fn.line});return;
        }
        for(const arm of splitRust(text.slice(open+1,close)).filter(x=>maskRust(x).trim())) {
          const arrow=maskRust(arm).indexOf('=>');
          if(arrow<0){unresolved.push({kind:'match_router_arm',path:file.path,line:fn.line});continue;}
          const pattern=withoutLeadingTrivia(arm.slice(0,arrow));
          conditions.push({expression:text.slice(6,open).trim(),pattern,path:file.path,line:fn.line});
          expression(arm.slice(arrow+2).trim(),atPrefix);
          conditions.pop();
        }
        return;
      }
      const base = text.match(/^((?:\w+::)*\w+)\s*(\(|\.|$)/);
      if (base && routerArguments.has(base[1])) {
        routerArguments.get(base[1])(atPrefix);
      } else if (base && variables.has(base[1])) {
        if (expanding.has(base[1])) { unresolved.push({kind:'variable_cycle',name:base[1],path:file.path}); return; }
        expanding.add(base[1]); expression(variables.get(base[1]),atPrefix); expanding.delete(base[1]);
      } else if (base && base[2] === '(' && !['Router::new','axum::Router::new'].includes(base[1])) {
        const resolved=functionFor(files,file,base[1]);
        if (resolved && /\bRouter\b/.test(resolved.fn.signature)) {
          const open = text.indexOf('('), close = balancedEnd(maskRust(text), open);
          const args = splitRust(text.slice(open + 1, close));
          const signature = resolved.fn.signature;
          const paramsOpen = signature.indexOf('('), paramsClose = balancedEnd(maskRust(signature), paramsOpen);
          const params = splitRust(signature.slice(paramsOpen + 1, paramsClose));
          const bindings = new Map();
          params.forEach((param, index) => {
            const router = param.trim().match(/^(\w+)\s*:\s*(?:axum::)?Router\b/);
            if (router && args[index]) bindings.set(router[1], prefix => expression(args[index], prefix));
          });
          visit(resolved.file,resolved.fn,atPrefix,[...trail,{path:file.path,line:fn.line,function:fn.name}],undefined,bindings,text);
        }
        else unresolved.push({kind:'router_call',call:base[1],path:file.path,line:fn.line});
      } else if (!base || (base[2] !== '(' && !variables.has(base[1]))) {
        unresolved.push({kind:'router_expression',expression:text.slice(0,180),path:file.path,line:fn.line});
      }
      for (const call of chainCalls(text)) {
        if (call.method === 'merge') expression(call.arguments[0],atPrefix);
        else if (call.method === 'nest') {
          let childPrefix;
          try { childPrefix=JSON.parse(call.arguments[0].trim()); } catch { /* dynamic prefixes need explicit review */ }
          if (typeof childPrefix !== 'string') unresolved.push({kind:'dynamic_prefix',expression:call.arguments[0],path:file.path,line:fn.line});
          else expression(call.arguments[1],joinPath(atPrefix,childPrefix));
        } else if (call.method === 'route_service') {
          let localPath;
          try { localPath=JSON.parse(call.arguments[0].trim()); } catch { /* recorded below */ }
          if (typeof localPath !== 'string') unresolved.push({kind:'dynamic_service_path',path:file.path,line:fn.line});
          else protocol_mounts.push({path:joinPath(atPrefix,localPath),source:file.path,
            function:fn.name,service_expression:call.arguments[1],
            ...(conditions.length?{conditions:[...conditions]}:{}),
            mounted_via:[...trail,{path:file.path,line:fn.line,function:fn.name}]});
        } else if (call.method === 'route') {
          let localPath;try{localPath=JSON.parse(call.arguments[0].trim());}catch{}
          if (typeof localPath !== 'string') { unresolved.push({kind:'dynamic_path',path:file.path,line:fn.line});continue; }
          const routing=call.arguments[1].trim();
          const methods=[...routing.matchAll(/(?:^|\.)(?:(?:axum::)?routing::)?(get|post|put|patch|delete|head|options|any)\s*\(\s*((?:\w+::)*\w+|\|)/g)];
          if (!methods.length) unresolved.push({kind:'method_router',expression:routing,path:file.path,line:fn.line});
          for (const method of methods) {
            const inline=method[2]==='|';
            const handler=inline?null:functionFor(files,file,method[2]);
            const evidence=functionEvidence(handler?.fn);
            const signature=handler?.fn.signature??'';
            const params=signature.slice(0,signature.lastIndexOf('->'));
            const response=signature.slice(signature.lastIndexOf('->')+2);
            const type=generic(params,'Json')??generic(params,'Form');
            const apiResponse=generic(response,'ApiResponse')??generic(response,'APIResponse');
            operations.push({method:method[1].toUpperCase(),path:joinPath(atPrefix,localPath),module:moduleOf(file.path),
              handler:handler?.fn.name??method[2].split('::').at(-1),handlerModule:handler?moduleOf(handler.file.path):method[2].split('::').slice(0,-1).join('::'),
              source:file.path,permissions:evidence?.declared_permissions??[],
              ...(conditions.length?{conditions:[...conditions]}:{}),
              ...(handler?{handler_source:handler.file.path}:{}),
              ...(type?{body:type}:{}),...(generic(params,'Query')?{query:generic(params,'Query')}:{}),
              ...(generic(params,'Path')?{pathParam:generic(params,'Path')}:{}),
              ...(apiResponse?{response:apiResponse}:{}),
              responseEnvelope:apiResponse?'api':/\bSse\b/.test(response)?'stream':/Json\s*</.test(response)?'raw':/Response/.test(response)?'raw-response':'requires_review',
              mounted_via:[...trail,{path:file.path,line:fn.line,function:fn.name}],
              ...(inline?{inline_handler:{name:'inline',path:file.path,line:fn.line,signature:'inline route closure',body:routing}}:!handler?{unresolved_handler:method[2]}:{}),
            });
          }
        }
      }
    }
    expression(selectedVariable?variables.get(selectedVariable)??'':result,prefix);
  }
  const fn=root.functions.find(fn=>fn.name===entry.function);
  if(!fn)throw new Error(`Missing router function ${entry.function}`);
  visit(root,fn,entry.prefix??'',[],entry.variable);
  const seen=new Set(),duplicates=[];
  for(const op of operations){const key=`${op.method} ${op.path}`;if(seen.has(key))duplicates.push(key);seen.add(key);}
  return {operations,unresolved,duplicates,protocol_mounts};
}
