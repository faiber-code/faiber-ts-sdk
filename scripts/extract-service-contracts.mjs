import { sourceIndex } from "./capability-source.mjs";
import { mountedRouterOperations } from "./capability-router.mjs";
import { integrationEndpoints } from "./integration-contracts.mjs";
import { productionRust } from "./rust-source.mjs";
import { serviceSources } from "./service-source-snapshots.mjs";
import { access, readFile, readdir, writeFile } from "node:fs/promises";
import { basename, dirname, join, relative, resolve } from "node:path";

const sdkRoot = resolve(import.meta.dirname, "..");
const siblingRoots = [join(sdkRoot, "..", "Service"), join(sdkRoot, "..", "services")];
const discoveredServicesRoot = process.env.FAIBER_SERVICES_ROOT ?? await (async () => {
  for (const candidate of siblingRoots) {
    try { await access(candidate); return candidate; } catch { /* keep looking */ }
  }
  return siblingRoots[0];
})();
const servicesRoot = resolve(serviceSources(sdkRoot, discoveredServicesRoot));
const services = [
  "asset", "chat", "crm", "drm", "flow", "idp", "knowledge", "lms", "messenger",
  "modules", "payment", "profile", "reservation", "session", "social", "state", "task", "version",
];
const serviceDirectories = { version: "infera_version" };
try { await access(join(servicesRoot, "infera-version", "src")); serviceDirectories.version = "infera-version"; } catch { /* retain legacy checkout support */ }

async function walk(root) {
  const result = [];
  for (const entry of await readdir(root, { withFileTypes: true })) {
    if (["target", "node_modules", ".git", "migration", "entity", "panel", "example", "chat"].includes(entry.name)) continue;
    const path = join(root, entry.name);
    if (entry.isDirectory()) result.push(...await walk(path));
    else if (path.endsWith(".rs")) result.push(path);
  }
  return result;
}

function matchingParen(source, open) {
  let depth = 0;
  let quote = false;
  for (let i = open; i < source.length; i += 1) {
    const char = source[i];
    if (char === '"' && source[i - 1] !== "\\") quote = !quote;
    if (quote) continue;
    if (char === "(") depth += 1;
    if (char === ")" && --depth === 0) return i;
  }
  return -1;
}

function routeCalls(source) {
  source = source.replace(/^\s*\/\/.*$/gm, "");
  const routes = [];
  let cursor = 0;
  while ((cursor = source.indexOf(".route(", cursor)) !== -1) {
    const open = cursor + ".route".length;
    const close = matchingParen(source, open);
    if (close === -1) break;
    const call = source.slice(open + 1, close);
    const path = call.match(/^\s*"([^"]+)"\s*,/)?.[1];
    const factory = enclosingFactory(source, cursor);
    if (path) {
      for (const match of call.matchAll(/\b(get|post|put|patch|delete|any)\s*\(\s*((?:\w+::)*)(\w+)/g)) {
        routes.push({ localPath: path, method: match[1].toUpperCase(), qualifier: match[2].replace(/::$/, ""), handler: match[3], factory });
      }
    }
    cursor = close + 1;
  }
  return routes;
}

function enclosingFactory(source, position) {
  let result;
  for (const match of source.matchAll(/(?:pub\s+)?fn\s+(\w+)\s*\([^)]*\)[^{]*\{/g)) {
    if (match.index > position) break;
    const open = source.indexOf("{", match.index);
    let depth = 0;
    let close = -1;
    for (let i = open; i < source.length; i += 1) {
      if (source[i] === "{") depth += 1;
      else if (source[i] === "}" && --depth === 0) { close = i; break; }
    }
    if (open < position && position < close) result = match[1];
  }
  return result;
}

function annotations(source) {
  const result = new Map();
  for (const match of source.matchAll(/#\[utoipa::path\(([\s\S]*?)\)\]\s*(?:#\[[\s\S]*?\]\s*)*(?:pub(?:\([^)]*\))?\s+)?async\s+fn\s+(\w+)/g)) {
    const path = match[1].match(/\bpath\s*=\s*"([^"]+)"/)?.[1];
    if (path) result.set(match[2], path);
  }
  for (const match of source.matchAll(/#\[(?:infera_idp_macro::)?should_have_permissions\(([\s\S]*?)\)\]\s*(?:pub(?:\([^)]*\))?\s+)?async\s+fn\s+(\w+)/g)) {
    const path = match[1].match(/\bpath\s*\(\s*"([^"]+)"/)?.[1];
    if (path && !result.has(match[2])) result.set(match[2], path.startsWith("/") ? path : `/${path}`);
  }
  return result;
}

function permissionAnnotations(source) {
  const result = new Map();
  for (const match of source.matchAll(/#\[(?:infera_idp_macro::)?should_have_permissions\(([\s\S]*?)\)\]\s*(?:pub(?:\([^)]*\))?\s+)?async\s+fn\s+(\w+)/g)) {
    const permissions = [...match[1].matchAll(/permissions\s*\(([^)]*)\)/g)].flatMap(group => [...group[1].matchAll(/"([^"]+)"/g)].map(item => item[1]));
    result.set(match[2], permissions);
  }
  for (const match of source.matchAll(/(?:pub(?:\([^)]*\))?\s+)?async\s+fn\s+(\w+)\s*\(/g)) {
    const open = source.indexOf("{", match.index);
    if (open === -1) continue;
    let depth = 0;
    let close = -1;
    for (let i = open; i < source.length; i += 1) {
      if (source[i] === "{") depth += 1;
      else if (source[i] === "}" && --depth === 0) { close = i; break; }
    }
    if (close === -1) continue;
    const body = source.slice(open, close + 1);
    const permissions = [...body.matchAll(/\.require\(\s*"([^"]+)"\s*\)/g)].map(item => item[1]);
    for (const authorize of body.matchAll(/\bauthorize\s*\(\s*&auth\s*,\s*(?:&\s*)?\[([\s\S]*?)\](?:\.as_slice\(\))?\s*,/g)) {
      permissions.push(...[...authorize[1].matchAll(/"([^"]+)"/g)].map(item => item[1]));
    }
    if (permissions.length && !result.has(match[1])) result.set(match[1], permissions);
  }
  return result;
}

function prefixes(router, service) {
  const map = new Map();
  for (const match of router.matchAll(/\.nest\(\s*"([^"]+)"\s*,\s*crate::(\w+)::(?:(?:routes)::)?(\w+)\(\)\s*,?\s*\)/g)) {
    let prefix = match[1];
    if (!prefix.startsWith("/api/")) prefix = `/api/v1${prefix}`;
    map.set(`${match[2]}:${match[3]}`, prefix);
    if (!map.has(match[2])) map.set(match[2], prefix);
  }
  for (const match of router.matchAll(/\.merge\(\s*crate::(\w+)::(?:routes::)?(\w+)\([^)]*\)\s*\)/g)) {
    const prefix = service === "payment" && match[1] === "payment_web" ? "/" : "/api/v1";
    map.set(`${match[1]}:${match[2]}`, prefix);
    if (!map.has(match[1])) map.set(match[1], prefix);
  }
  if (service === "profile") {
    map.set("option", "/api/v1");
    map.set("integration", "/api/v1");
  }
  return map;
}

function cleanPath(path) {
  return path.startsWith("/") ? path : `/${path}`;
}

function joinPath(prefix, path) {
  if (path === "/api/v1" || path.startsWith("/api/v1/")) return cleanPath(path);
  if (prefix.endsWith('/')) return cleanPath(`${prefix}${path.replace(/^\//,'')}`);
  return path==='/'?cleanPath(prefix):cleanPath(`${prefix}/${path.replace(/^\//,'')}`);
}

function drmPermission(method, path) {
  const segments = path.replace(/^\/api\/v1/, "").replace(/^\/+|\/+$/g, "").split("/");
  if (method === "DELETE" && segments[0] === "libraries" && segments.length === 2) {
    return "drm:library:delete";
  }
  if (path.includes("/operations/settings") || path.includes("/operations/transcription-models")) {
    return "drm:manage";
  }
  const action = ["GET", "HEAD"].includes(method) ? "read" : "write";
  const resource = path.includes("/licenses/") ? "license"
    : path.includes("/audit-events") ? "audit"
    : path.includes("/packages") || path.includes("/drm/jobs") ? "package"
    : path.includes("/upload-sessions") || path.includes("/media") || path.includes("/folders") || path.includes("/tags") ? "media"
    : path.includes("/compositions") || path.includes("/composition-analyses") || path.includes("/composition-categories") || path.includes("/mixed-media") || path.includes("/external-references") ? "composition"
    : path.includes("/items") ? "content"
    : path.includes("/libraries") ? "library"
    : action;
  return resource === action ? `drm:${action}` : `drm:${resource}:${action}`;
}

function relativeSource(file) {
  return relative(servicesRoot, file).replaceAll(String.fromCharCode(92), "/");
}

function handlerSignature(source, handler) {
  const declaration = new RegExp(`(?:pub(?:\\([^)]*\\))?\\s+)?async\\s+fn\\s+${handler}\\s*\\(`).exec(source);
  if (!declaration) return {};
  // pub(crate) has its own parentheses before the argument list.
  const open = declaration.index + declaration[0].lastIndexOf("(");
  const close = matchingParen(source, open);
  const params = source.slice(open + 1, close);
  const after = source.slice(close + 1, source.indexOf("{", close));
  const body = params.match(/Json\s*\([^)]*\)\s*:\s*Json\s*<\s*([^>]+(?:<[^>]+>)?[^>]*)\s*>/)?.[1]?.trim()
    ?? params.match(/Json\s*<\s*([^>]+(?:<[^>]+>)?[^>]*)\s*>/)?.[1]?.trim()
    ?? params.match(/Form\s*\([^)]*\)\s*:\s*Form\s*<\s*([^>]+)\s*>/)?.[1]?.trim();
  const binary = /(?:^|,)\s*(?:\w+\s*:\s*)?(?:axum::body::)?Bytes\s*(?:,|$)/m.test(params);
  const query = /(?:super::dynamic::)?DynamicListQuery\s*\(/.test(params) ? "models::ListQuery" : params.match(/Query\s*\([^)]*\)\s*:\s*Query\s*<\s*([^>]+)\s*>/)?.[1]?.trim();
  const pathType = params.match(/\bPath\s*</);
  const pathOpen = pathType ? params.indexOf("<", pathType.index) : -1;
  const pathClose = pathOpen < 0 ? -1 : matchingAngle(params, pathOpen);
  const pathParam = pathClose < 0 ? undefined : params.slice(pathOpen + 1, pathClose).trim();
  const responseMatch = after.match(/(?:APIResponse|ApiResponse)(WithMeta)?\s*</);
  let response;
  let responseMeta;
  let responseEnvelope = "api";
  if (responseMatch?.index !== undefined) {
    const open = after.indexOf("<", responseMatch.index);
    let depth = 0;
    let split = -1;
    for (let i = open + 1; i < after.length; i += 1) {
      if (after[i] === "<") depth += 1;
      else if (after[i] === ">" && depth-- === 0) {
        const content = after.slice(open + 1, i);
        if (split === -1) response = content.trim();
        else {
          response = after.slice(open + 1, split).trim();
          responseMeta = after.slice(split + 1, i).trim();
        }
        break;
      } else if (after[i] === "," && depth === 0 && responseMatch[1]) split = i;
    }
  }
  if (!response) {
    const json = after.match(/Json\s*</);
    if (json?.index !== undefined) {
      const open = after.indexOf("<", json.index);
      const close = matchingAngle(after, open);
      if (close !== -1) {
        response = after.slice(open + 1, close).trim();
        responseEnvelope = "raw";
      }
    }
  }
  if (!response && /(?:Result\s*<\s*)?StatusCode\b/.test(after)) responseEnvelope = "no-content";
  else if (!response && /\bRedirect\b/.test(after)) responseEnvelope = "redirect";
  else if (!response && /\b(?:Sse|WebSocketUpgrade)\b/.test(after)) responseEnvelope = "stream";
  else if (!response && /\bResponse\b/.test(after)) responseEnvelope = "raw-response";
  if (/WebSocketUpgrade/.test(params)) responseEnvelope = "websocket";
  return { body, query, pathParam, response, responseMeta, responseEnvelope, multipart: /Multipart/.test(params), ...(binary ? { binary: true } : {}), formUrlEncoded: /Form\s*<|Form\s*\([^)]*\)\s*:\s*Form\s*</.test(params) };
}

function qualifiedHandlerSource(fileSources, srcRoot, currentFile, qualifier, handler) {
  if (!qualifier) return undefined;
  const qualifiedPath = qualifier.startsWith("super::")
    ? `${relative(srcRoot, dirname(currentFile)).replaceAll(String.fromCharCode(92), "/")}/${qualifier.replace(/^super::/, "").replaceAll("::", "/")}`
    : qualifier.replace(/^crate::/, "").replace(/^self::/, "").replace(/^infera_\w+::/, "").replaceAll("::", "/");
  const candidates = [...fileSources.entries()]
    .filter(([, candidate]) => new RegExp(`(?:pub\\s+)?async\\s+fn\\s+${handler}\\s*\\(`).test(candidate))
    .map(([file, candidate]) => {
      const modulePath = relative(srcRoot, file)
        .replaceAll(String.fromCharCode(92), "/")
        .replace(/\.rs$/, "")
        .replace(/\/mod$/, "");
      const exact = modulePath === qualifiedPath;
      const suffix = modulePath.endsWith(`/${qualifiedPath}`) || modulePath.endsWith(qualifiedPath);
      return { candidate, score: exact ? 0 : suffix ? 1 : 2, modulePath };
    })
    .sort((left, right) => left.score - right.score || left.modulePath.localeCompare(right.modulePath));
  return candidates[0]?.score < 2 ? candidates[0].candidate : undefined;
}

function matchingAngle(source, open) {
  let depth = 0;
  for (let i = open; i < source.length; i += 1) {
    if (source[i] === "<") depth += 1;
    else if (source[i] === ">" && --depth === 0) return i;
  }
  return -1;
}

const manifest = {};
for (const service of services) {
  const srcRoot = join(servicesRoot, serviceDirectories[service] ?? `infera-${service}`, "src");
  let router;
  let directRouter = false;
  try {
    router = await readFile(join(srcRoot, "router.rs"), "utf8");
  } catch {
    router = await readFile(join(srcRoot, "main.rs"), "utf8");
    directRouter = true;
  }
  const modulePrefixes = directRouter ? new Map([["routes", "/api/v1"], ["main", "/"]]) : prefixes(router, service);
  const mountedModules = directRouter
    ? new Set(["routes", "main"])
    : new Set([...router.matchAll(/crate::(\w+)::/g)].map(match => match[1]));
  // Direct main.rs routers may mount composed local router variables. Resolve their
  // factories against the actual nest so runtime and management ACLs stay distinct.
  if (directRouter) {
    for (const mount of router.matchAll(/\.nest\(\s*"([^"]+)"\s*,\s*(?:(?:crate|infera_\w+)::)?(\w+)(?:::(\w+)\(\))?\s*\)/g)) {
      const [, prefix, variable, directFactory] = mount;
      const factories = directFactory ? [[variable, directFactory]] : (() => {
        const declaration = router.match(new RegExp(`let\\s+${variable}\\s*=([\\s\\S]*?);`))?.[1] ?? "";
        return [...declaration.matchAll(/(?:^|[^\w:])(\w+)::(\w+)\(\)/g)].map(match => [match[1], match[2]]);
      })();
      for (const [module, factory] of factories) {
        mountedModules.add(module);
        modulePrefixes.set(`${module}:${factory}`, prefix);
        if (!modulePrefixes.has(module)) modulePrefixes.set(module, prefix);
      }
    }
  }
  if (service === "social") {
    modulePrefixes.set("main", "/");
    mountedModules.add("main");
  }
  const files = await walk(srcRoot);
  const fileSources = new Map(await Promise.all(files.map(async file => [file, productionRust(await readFile(file, "utf8"))])));
  // A mounted module may compose another module's router. Resolve those mounts
  // transitively, retaining the parent factory's prefix instead of assuming all
  // nested registrations live directly under /api/v1.
  let nestedMountDiscovered = true;
  while (nestedMountDiscovered) {
    nestedMountDiscovered = false;
    for (const [file, source] of fileSources) {
      const parent = dirname(file) === srcRoot ? basename(file, ".rs") : basename(dirname(file));
      if (parent === "router" || !mountedModules.has(parent)) continue;
      for (const mount of source.matchAll(/\.nest\(\s*"([^"]+)"\s*,\s*crate::(\w+)::(?:(?:routes)::)?(\w+)\(\)\s*,?\s*\)/g)) {
        const factory = enclosingFactory(source, mount.index);
        const parentPrefix = modulePrefixes.get(`${parent}:${factory}`) ?? modulePrefixes.get(parent);
        if (!parentPrefix) continue;
        const [, localPrefix, module, childFactory] = mount;
        const key = `${module}:${childFactory}`;
        const prefix = joinPath(parentPrefix, localPrefix);
        if (modulePrefixes.has(key) && modulePrefixes.get(key) !== prefix) {
          throw new Error(`Ambiguous nested router ${key}: ${modulePrefixes.get(key)} versus ${prefix}`);
        }
        if (!modulePrefixes.has(key)) {
          modulePrefixes.set(key, prefix);
          if (!modulePrefixes.has(module)) modulePrefixes.set(module, prefix);
          mountedModules.add(module);
          nestedMountDiscovered = true;
        }
      }
    }
  }
  let discovered = true;
  while (discovered) {
    discovered = false;
    for (const file of files) {
      const parent = dirname(file) === srcRoot ? basename(file, ".rs") : basename(dirname(file));
      if (parent !== "router" && !mountedModules.has(parent)) continue;
      const source = fileSources.get(file);
      for (const match of source.matchAll(/crate::(\w+)::routes::/g)) {
        if (!mountedModules.has(match[1])) {
          mountedModules.add(match[1]);
          discovered = true;
        }
      }
    }
  }
  const endpoints = [];
  const unresolved = [];
  for (const file of files) {
    const source = fileSources.get(file);
    const module = dirname(file) === srcRoot ? basename(file, ".rs") : basename(dirname(file));
      const canonical = annotations(source);
      const permissions = permissionAnnotations(source);
      for (const route of routeCalls(source)) {
      if (route.method === "ANY") continue;
      const resolvedSource = qualifiedHandlerSource(fileSources, srcRoot, file, route.qualifier, route.handler) ?? source;
      const annotated = annotations(resolvedSource).get(route.handler) ?? canonical.get(route.handler);
      const prefix = service === "drm" && module === "router"
        ? "/api/v1"
        : service === "task" && ["/health/live", "/health/ready", "/health/dependencies", "/metrics", "/api/openapi.json"].includes(route.localPath)
        ? "/"
        : service === "knowledge" && module === "routes" && route.factory === "runtime_router"
        ? "/api/v1/runtime"
        : module === "router"
        ? (["/integration/flow", "/transactions/{uuid}"].includes(route.localPath) ? "/api/v1" : "/")
        : modulePrefixes.get(`${module}:${route.factory}`) ?? modulePrefixes.get(module);
      if (module !== "router" && !mountedModules.has(module)) {
        unresolved.push(`${relativeSource(file)}:${route.method}:${route.localPath}:${route.handler}:not-mounted`);
        continue;
      }
      if (!annotated && !prefix) {
        unresolved.push(`${relativeSource(file)}:${route.method}:${route.localPath}:${route.handler}`);
        continue;
      }
      const path = module === "router" && route.localPath.startsWith("/api/")
        ? cleanPath(route.localPath)
        : prefix ? joinPath(prefix, route.localPath)
        : annotated
          ? annotated.startsWith("/api/") ? cleanPath(annotated)
            : module === "router" ? joinPath(prefix, annotated) : cleanPath(`/api/v1${annotated}`)
          : joinPath(prefix, route.localPath);
      let signature = handlerSignature(resolvedSource, route.handler);
      if (service === "chat" && route.handler === "events") {
        signature = { ...signature, responseEnvelope: "stream" };
      }
      if (service === "profile" && ["manager_index", "accountant_index", "support_index", "consultant_index", "teacher_index", "student_index", "parent_index", "other_index"].includes(route.handler)) {
        signature = { query: "models::ListQuery", response: "models::ListData", responseMeta: "crate::models::PaginationMeta", responseEnvelope: "api" };
      }
      const declaredPermissions = permissionAnnotations(resolvedSource).get(route.handler) ?? permissions.get(route.handler) ?? [];
      endpoints.push({
        method: route.method,
        path,
        module,
        handler: route.handler,
        permissions: declaredPermissions.length || service !== "drm" ? declaredPermissions : [drmPermission(route.method, path)],
        source: relativeSource(file),
        ...(route.qualifier ? { handlerModule: route.qualifier.split("::").at(-1) } : {}),
        ...signature,
      });
    }
  }
  const reviewedSources = new Set(integrationEndpoints.filter(item => item.service === service).map(item => item.endpoint.source));
  for (let i=endpoints.length-1;i>=0;i--) if (reviewedSources.has(endpoints[i].source)) endpoints.splice(i,1);
  // Explicitly reviewed module mounts supplement the parser; require actual handler and route source.
  for (const integration of integrationEndpoints.filter(item => item.service === service)) {
    const endpoint = integration.endpoint;
    const sourcePath = join(servicesRoot, endpoint.source);
    let source; try { source = await readFile(sourcePath, "utf8"); } catch { continue; }
    if (!source.includes(endpoint.handler)) throw new Error(`Missing integration handler: ${endpoint.source}:${endpoint.handler}`);
    endpoints.push(endpoint);
  }
  // These service router graphs have source-reviewed mounts. Follow their actual
  // main/router graph rather than annotation paths or module-prefix guesses. Other
  // services retain their existing extraction until their mounted graphs are reviewed.
  if (["asset", "idp", "modules", "payment", "profile", "lms", "social", "version"].includes(service)) {
    const indexed = [...fileSources].map(([file,source])=>sourceIndex(source,relativeSource(file)));
    const main=indexed.find(file=>file.path.endsWith("/src/main.rs"));
    const entry=service==="social" && main?.functions.some(fn=>fn.name==="main" && /let\s+app\s*=/.test(fn.body))
      ? {path:"src/main.rs",function:"main",variable:"app"}
      : {path:"src/router.rs",function:"routes"};
    const graph=mountedRouterOperations(indexed,entry);
    if (graph.unresolved.length || graph.duplicates.length || graph.operations.some(op=>op.unresolved_handler || op.inline_handler)) {
      throw new Error(`${service}: mounted source graph requires review: ${JSON.stringify(graph.unresolved)} ${JSON.stringify(graph.duplicates)}`);
    }
    const reviewed=[];
    for (const op of graph.operations) {
      const handlerFile=indexed.find(file=>file.path.replace(/^.*?\/src\//,"").replace(/\.rs$/,"").replace(/\/mod$/,"").replaceAll("/","::")===op.handlerModule);
      if (!handlerFile) throw new Error(`${service}: missing mounted handler source ${op.handlerModule}::${op.handler}`);
      const candidates=endpoints.filter(old=>old.method===op.method && old.handler===op.handler && old.source===op.source);
      const exact=candidates.find(old=>old.path===op.path);
      const previous=exact??(candidates.length===1?candidates[0]:null);
      const routeModule=op.module.split("::")[0];
      const mountedHandler=handlerFile.functions.find(fn=>fn.name===op.handler);
      // Source-defined declaration macros are expanded by sourceIndex. Parse
      // that exact declaration so role-list schemas and permissions survive.
      const declaration=mountedHandler?`${mountedHandler.attributes}\n${mountedHandler.signature}{${mountedHandler.body}}`:handlerFile.source;
      const signature=handlerSignature(declaration,op.handler);
      if (["asset", "idp", "modules", "payment", "profile", "lms", "version"].includes(service) && op.handler==="status_route") {
        const fn=handlerFile.functions.find(fn=>fn.name===op.handler);
        if (/data\s*:\s*HealthResponse\s*\{/.test(fn?.body??"")) signature.response="HealthResponse";
      }
      if (["asset", "idp", "modules", "payment", "profile", "lms", "version"].includes(service) && op.path==="/api/openapi.json") {
        const fn=handlerFile.functions.find(fn=>fn.name===op.handler);
        if (/Json\s*\(\s*ApiDoc::openapi\s*\(/.test(fn?.body??"")) {
          signature.response="utoipa::openapi::OpenApi";signature.responseEnvelope="raw";
        }
      }
      reviewed.push({method:op.method,path:op.path,module:previous?.module??routeModule,handler:op.handler,
        permissions:permissionAnnotations(declaration).get(op.handler)??op.permissions,source:op.source,
        ...(op.handlerModule!==op.module?{handlerModule:op.handlerModule.split("::").at(-1)}:{}),...signature});
    }
    endpoints.splice(0,endpoints.length,...reviewed);
  }
  const unique = new Map(endpoints.map(endpoint => [`${endpoint.method} ${endpoint.path}`, endpoint]));
  manifest[service] = [...unique.values()].sort((a, b) => a.path.localeCompare(b.path) || a.method.localeCompare(b.method));
  if (unresolved.length) console.error(`${service}: unresolved registrations\n${unresolved.join("\n")}`);
}

const output = process.argv[2] ? resolve(process.argv[2]) : join(sdkRoot, "service-contracts.json");
await writeFile(output, `${JSON.stringify(manifest, null, 2)}\n`);
for (const [service, endpoints] of Object.entries(manifest)) console.log(`${service}: ${endpoints.length} endpoints`);
console.log(`wrote ${output}`);
