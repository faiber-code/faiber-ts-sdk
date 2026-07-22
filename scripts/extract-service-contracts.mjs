import { readFile, readdir, writeFile } from "node:fs/promises";
import { basename, dirname, join, relative, resolve } from "node:path";

const sdkRoot = resolve(import.meta.dirname, "..");
const servicesRoot = resolve(process.env.FAIBER_SERVICES_ROOT ?? join(sdkRoot, "..", "Service"));
const services = ["asset", "crm", "flow", "idp", "lms", "messenger", "modules", "payment", "profile", "reservation", "session", "social"];

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
    if (path) {
      for (const match of call.matchAll(/\b(get|post|put|patch|delete|any)\s*\(\s*(?:(?:\w+)::)*(\w+)/g)) {
        routes.push({ localPath: path, method: match[1].toUpperCase(), handler: match[2] });
      }
    }
    cursor = close + 1;
  }
  return routes;
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
  return result;
}

function prefixes(router, service) {
  const map = new Map();
  for (const match of router.matchAll(/\.nest\(\s*"([^"]+)"\s*,\s*crate::(\w+)::routes::\w+\(\)\s*\)/g)) {
    let prefix = match[1];
    if (!prefix.startsWith("/api/")) prefix = `/api/v1${prefix}`;
    map.set(match[2], prefix);
  }
  for (const match of router.matchAll(/\.merge\(\s*crate::(\w+)::(?:routes::)?\w+\([^)]*\)\s*\)/g)) {
    map.set(match[1], service === "payment" && match[1] === "payment_web" ? "/" : "/api/v1");
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
  const responseMatch = after.match(/APIResponse(WithMeta)?\s*</);
  let response;
  let responseMeta;
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
  return { body, query, pathParam, response, responseMeta, multipart: /Multipart/.test(params), formUrlEncoded: /Form\s*<|Form\s*\([^)]*\)\s*:\s*Form\s*</.test(params) };
}

const manifest = {};
for (const service of services) {
  const srcRoot = join(servicesRoot, `infera-${service}`, "src");
  const router = await readFile(join(srcRoot, "router.rs"), "utf8");
  const modulePrefixes = prefixes(router, service);
  const mountedModules = new Set([...router.matchAll(/crate::(\w+)::/g)].map(match => match[1]));
  const files = await walk(srcRoot);
  let discovered = true;
  while (discovered) {
    discovered = false;
    for (const file of files) {
      const parent = dirname(file) === srcRoot ? basename(file, ".rs") : basename(dirname(file));
      if (parent !== "router" && !mountedModules.has(parent)) continue;
      const source = await readFile(file, "utf8");
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
    const source = await readFile(file, "utf8");
    const module = dirname(file) === srcRoot ? basename(file, ".rs") : basename(dirname(file));
    const canonical = annotations(source);
    const permissions = permissionAnnotations(source);
    for (const route of routeCalls(source)) {
      if (route.method === "ANY") continue;
      const annotated = canonical.get(route.handler);
      const prefix = module === "router"
        ? (["/integration/flow", "/transactions/{uuid}"].includes(route.localPath) ? "/api/v1" : "/")
        : modulePrefixes.get(module);
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
      endpoints.push({
        method: route.method,
        path,
        module,
        handler: route.handler,
        permissions: permissions.get(route.handler) ?? [],
        source: relative(servicesRoot, file),
        ...handlerSignature(source, route.handler),
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
