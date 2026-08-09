import { readFile, readdir, writeFile } from "node:fs/promises";
import { basename, dirname, join, relative, resolve } from "node:path";

const sdkRoot = resolve(import.meta.dirname, "..");
const servicesRoot = resolve(process.env.FAIBER_SERVICES_ROOT ?? join(sdkRoot, "..", "Service"));
const services = ["asset", "chat", "crm", "flow", "idp", "knowledge", "lms", "messenger", "modules", "payment", "profile", "reservation", "session", "social"];

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
  for (const match of source.matchAll(/#\[utoipa::path\(([\s\S]*?)\)\]\s*(?:#\[[\s\S]*?\]\s*)*(?:pub\s+)?async\s+fn\s+(\w+)/g)) {
    const path = match[1].match(/\bpath\s*=\s*"([^"]+)"/)?.[1];
    if (path) result.set(match[2], path);
  }
  for (const match of source.matchAll(/#\[should_have_permissions\(([\s\S]*?)\)\]\s*(?:pub\s+)?async\s+fn\s+(\w+)/g)) {
    const path = match[1].match(/\bpath\s*\(\s*"([^"]+)"/)?.[1];
    if (path && !result.has(match[2])) result.set(match[2], path.startsWith("/") ? path : `/${path}`);
  }
  return result;
}

function permissionAnnotations(source) {
  const result = new Map();
  for (const match of source.matchAll(/#\[should_have_permissions\(([\s\S]*?)\)\]\s*(?:pub\s+)?async\s+fn\s+(\w+)/g)) {
    const permissions = [...match[1].matchAll(/permissions\s*\(([^)]*)\)/g)].flatMap(group => [...group[1].matchAll(/"([^"]+)"/g)].map(item => item[1]));
    result.set(match[2], permissions);
  }
  for (const match of source.matchAll(/(?:pub\s+)?async\s+fn\s+(\w+)\s*\(/g)) {
    const open = source.indexOf("{", match.index);
    if (open === -1) continue;
    let depth = 0;
    let close = -1;
    for (let i = open; i < source.length; i += 1) {
      if (source[i] === "{") depth += 1;
      else if (source[i] === "}" && --depth === 0) { close = i; break; }
    }
    if (close === -1) continue;
    const permissions = [...source.slice(open, close + 1).matchAll(/\.require\(\s*"([^"]+)"\s*\)/g)].map(item => item[1]);
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
  const withSlash = path.startsWith("/") ? path : `/${path}`;
  return withSlash.length > 1 ? withSlash.replace(/\/$/, "") : withSlash;
}

function joinPath(prefix, path) {
  return cleanPath(`${prefix.replace(/\/$/, "")}/${path.replace(/^\//, "")}`);
}

function handlerSignature(source, handler) {
  const start = source.search(new RegExp(`(?:pub\\s+)?async\\s+fn\\s+${handler}\\s*\\(`));
  if (start === -1) return {};
  const open = source.indexOf("(", start);
  const close = matchingParen(source, open);
  const params = source.slice(open + 1, close);
  const after = source.slice(close + 1, source.indexOf("{", close));
  const body = params.match(/Json\s*\([^)]*\)\s*:\s*Json\s*<\s*([^>]+(?:<[^>]+>)?[^>]*)\s*>/)?.[1]?.trim()
    ?? params.match(/Json\s*<\s*([^>]+(?:<[^>]+>)?[^>]*)\s*>/)?.[1]?.trim()
    ?? params.match(/Form\s*\([^)]*\)\s*:\s*Form\s*<\s*([^>]+)\s*>/)?.[1]?.trim();
  const query = params.match(/Query\s*\([^)]*\)\s*:\s*Query\s*<\s*([^>]+)\s*>/)?.[1]?.trim();
  const pathParam = params.match(/Path\s*\([^)]*\)\s*:\s*Path\s*<\s*([^>]+(?:<[^>]+>)?[^>]*)\s*>/)?.[1]?.trim();
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
  return { body, query, pathParam, response, responseMeta, responseEnvelope, multipart: /Multipart/.test(params), formUrlEncoded: /Form\s*<|Form\s*\([^)]*\)\s*:\s*Form\s*</.test(params) };
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
  const srcRoot = join(servicesRoot, `infera-${service}`, "src");
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
  if (service === "social") {
    modulePrefixes.set("main", "/");
    mountedModules.add("main");
  }
  const files = await walk(srcRoot);
  const fileSources = new Map(await Promise.all(files.map(async file => [file, await readFile(file, "utf8")])));
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
      const annotated = canonical.get(route.handler);
      const prefix = service === "knowledge" && module === "routes" && ["/chat/{chat_slug}/query", "/tool-schema"].includes(route.localPath)
        ? "/api/v1/runtime"
        : module === "router"
        ? (["/integration/flow", "/transactions/{uuid}"].includes(route.localPath) ? "/api/v1" : "/")
        : modulePrefixes.get(`${module}:${route.factory}`) ?? modulePrefixes.get(module);
      if (module !== "router" && !mountedModules.has(module)) {
        unresolved.push(`${relative(srcRoot, file)}:${route.method}:${route.localPath}:${route.handler}:not-mounted`);
        continue;
      }
      if (!annotated && !prefix) {
        unresolved.push(`${relative(srcRoot, file)}:${route.method}:${route.localPath}:${route.handler}`);
        continue;
      }
      const path = annotated
        ? annotated.startsWith("/api/v1") || module === "router"
          ? cleanPath(annotated)
          : cleanPath(`/api/v1${annotated}`)
        : joinPath(prefix, route.localPath);
      let signature = handlerSignature(source, route.handler);
      if (!signature.response && route.qualifier) {
        const qualifierPath = route.qualifier.replaceAll("::", "/");
        const candidates = [...fileSources.entries()]
          .filter(([, candidate]) => new RegExp(`(?:pub\\s+)?async\\s+fn\\s+${route.handler}\\s*\\(`).test(candidate))
          .sort(([left], [right]) => Number(!left.includes(qualifierPath)) - Number(!right.includes(qualifierPath)));
        if (candidates[0]) signature = handlerSignature(candidates[0][1], route.handler);
      }
      if (service === "profile" && ["manager_index", "accountant_index", "support_index", "consultant_index", "teacher_index", "student_index", "parent_index", "other_index"].includes(route.handler)) {
        signature = { query: "models::ListQuery", response: "models::ListData", responseMeta: "crate::models::PaginationMeta", responseEnvelope: "api" };
      }
      endpoints.push({
        method: route.method,
        path,
        module,
        handler: route.handler,
        permissions: permissions.get(route.handler) ?? [],
        source: relative(servicesRoot, file),
        ...signature,
      });
    }
  }
  const unique = new Map(endpoints.map(endpoint => [`${endpoint.method} ${endpoint.path}`, endpoint]));
  manifest[service] = [...unique.values()].sort((a, b) => a.path.localeCompare(b.path) || a.method.localeCompare(b.method));
  if (unresolved.length) console.error(`${service}: unresolved registrations\n${unresolved.join("\n")}`);
}

const output = process.argv[2] ? resolve(process.argv[2]) : join(sdkRoot, "service-contracts.json");
await writeFile(output, `${JSON.stringify(manifest, null, 2)}\n`);
for (const [service, endpoints] of Object.entries(manifest)) console.log(`${service}: ${endpoints.length} endpoints`);
console.log(`wrote ${output}`);
