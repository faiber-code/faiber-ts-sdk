import { readFile, readdir, writeFile } from "node:fs/promises";
import { basename, dirname, join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const servicesRoot = resolve(process.env.FAIBER_SERVICES_ROOT ?? join(root, "..", "Service"));
const manifestPath = resolve(process.argv[2] ?? join(root, "service-contracts.json"));
const manifest = JSON.parse(await readFile(manifestPath, "utf8"));

const pascal = value => value
  .replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase())
  .replace(/[^a-zA-Z0-9]/g, "")
  .replace(/^./, char => char.toUpperCase());
const camel = value => {
  const converted = pascal(value);
  return converted[0].toLowerCase() + converted.slice(1);
};
const operationBaseName = endpoint => `${endpoint.module}-${endpoint.handler}-${endpoint.method.toLowerCase()}`;
const placeholders = path => [...path.matchAll(/\{([^}]+)\}/g)].map(match => match[1]);
const escapedPath = path => `\`${path.replace(/\{([^}]+)\}/g, (_, name) => `\${encodeURIComponent(${camel(name)})}`)}\``;

async function rustFiles(rootDir) {
  const output = [];
  for (const entry of await readdir(rootDir, { withFileTypes: true })) {
    if (["target", "node_modules", ".git", "migration", "panel", "example", "chat"].includes(entry.name)) continue;
    const path = join(rootDir, entry.name);
    if (entry.isDirectory()) output.push(...await rustFiles(path));
    else if (path.endsWith(".rs")) output.push({ path, source: await readFile(path, "utf8") });
  }
  return output;
}

function matchingBrace(source, open) {
  let depth = 0;
  for (let i = open; i < source.length; i += 1) {
    if (source[i] === "{") depth += 1;
    else if (source[i] === "}" && --depth === 0) return i;
  }
  return -1;
}

function splitFields(body) {
  const parts = [];
  let start = 0;
  let depth = 0;
  for (let i = 0; i < body.length; i += 1) {
    if ("<([{".includes(body[i])) depth += 1;
    else if (">)]}".includes(body[i])) depth -= 1;
    else if (body[i] === "," && depth === 0) {
      parts.push(body.slice(start, i));
      start = i + 1;
    }
  }
  parts.push(body.slice(start));
  return parts;
}

function structFrom(file, name) {
  const match = new RegExp(`(?:pub\\s+)?struct\\s+${name}(?:\\s*<[^>{]+>)?\\s*\\{`).exec(file.source);
  if (!match?.index && match?.index !== 0) return null;
  const open = file.source.indexOf("{", match.index);
  const close = matchingBrace(file.source, open);
  if (close === -1) return null;
  const fields = splitFields(file.source.slice(open + 1, close)).flatMap(part => {
    const rename = part.match(/#\[serde\(rename\s*=\s*"([^"]+)"\)\]/)?.[1];
    const flatten = /#\[serde\(flatten\)\]/.test(part);
    const clean = part.replace(/#\[[\s\S]*?\]/g, "").replace(/\/\/.*$/gm, "").trim();
    const field = clean.match(/pub\s+(\w+)\s*:\s*([\s\S]+)$/);
    return field ? [{ name: rename ?? field[1], rustType: field[2].trim(), flatten }] : [];
  });
  return { file, fields };
}

function typeName(raw) {
  return raw?.match(/([A-Za-z_]\w*)\s*$/)?.[1];
}

function unwrap(raw, wrapper) {
  const prefix = `${wrapper}<`;
  if (!raw.startsWith(prefix) || !raw.endsWith(">")) return null;
  return raw.slice(prefix.length, -1).trim();
}

function tsType(raw, query = false) {
  const type = raw.replace(/\s+/g, " ").trim();
  const optional = unwrap(type, "Option");
  if (optional) return `${tsType(optional, query)} | null`;
  const vector = unwrap(type, "Vec");
  if (vector) return `${tsType(vector, query)}[]`;
  if (/^(HashMap|BTreeMap)<\s*String\s*,/.test(type)) return "Record<string, JsonValue>";
  if (/^(String|&str|Uuid)$/.test(type) || /(Date|DateTime|NaiveDate|NaiveDateTime)/.test(type)) return "string";
  if (/^(bool)$/.test(type)) return "boolean";
  if (/^(u|i)(8|16|32|64|128|size)$/.test(type) || /^(f32|f64|Decimal|BigDecimal)$/.test(type)) return "number";
  if (/^(Value|serde_json::Value)$/.test(type)) return "JsonValue";
  if (type === "()") return "JsonObject";
  return query ? "QueryValue" : "JsonValue";
}

function resolveStruct(files, module, raw) {
  const name = typeName(raw);
  if (!name) return null;
  const matches = files.map(file => structFrom(file, name)).filter(Boolean);
  if (!matches.length) return null;
  return matches.find(item => item.file.path.includes(`/${module}/`))
    ?? matches.find(item => basename(item.file.path) === "models.rs")
    ?? matches[0];
}

function renderedFields(files, module, raw, seen = new Set(), query = false) {
  const resolved = resolveStruct(files, module, raw);
  const name = typeName(raw);
  if (!resolved || !name || seen.has(`${resolved.file.path}:${name}`)) return [];
  const nextSeen = new Set(seen).add(`${resolved.file.path}:${name}`);
  return resolved.fields.flatMap(field => {
    if (field.flatten) return renderedFields(files, module, field.rustType, nextSeen, query);
    const outer = unwrap(field.rustType, "Option");
    const optional = Boolean(outer);
    const nested = query ? renderedFields(files, module, outer ?? field.rustType, nextSeen, true) : [];
    if (nested.length) return nested.map(item => ({ ...item, name: `${field.name}[${item.name}]`, optional: optional || item.optional }));
    return [{ name: field.name, optional, type: tsType(outer ?? field.rustType, query) }];
  });
}

function writeFields(lines, fields) {
  for (const field of fields) lines.push(`  ${JSON.stringify(field.name)}${field.optional ? "?" : ""}: ${field.type};`);
}

function responseDataType(lines, files, module, raw, base) {
  if (!raw) return "JsonValue";
  const normalized = raw.replace(/^crate::models::/, "").trim();
  const vector = unwrap(normalized, "Vec");
  const paged = unwrap(normalized, "PagedResult");
  if (vector || paged) {
    const itemRaw = vector ?? paged;
    const itemFields = renderedFields(files, module, itemRaw);
    const itemType = itemFields.length ? `${base}Item` : tsType(itemRaw);
    if (itemFields.length) {
      lines.push(`export interface ${base}Item extends JsonObject {`);
      writeFields(lines, itemFields);
      lines.push("}");
    }
    if (paged) {
      lines.push(`export interface ${base}PageMeta extends JsonObject {`);
      lines.push('  "page": number;', '  "page_size": number;', '  "total_items": number;', '  "total_pages": number;', "}");
      lines.push(`export interface ${base}Data extends JsonObject {`);
      lines.push(`  "data": ${itemType}[];`, `  "meta": ${base}PageMeta;`, "}");
      return `${base}Data`;
    }
    return `${itemType}[]`;
  }
  const fields = renderedFields(files, module, normalized);
  if (fields.length) {
    lines.push(`export interface ${base}Data extends JsonObject {`);
    writeFields(lines, fields);
    lines.push("}");
    return `${base}Data`;
  }
  return tsType(normalized);
}

for (const [service, endpoints] of Object.entries(manifest)) {
  const files = await rustFiles(join(servicesRoot, `infera-${service}`));
  const nameCounts = endpoints.reduce((counts, endpoint) => counts.set(operationBaseName(endpoint), (counts.get(operationBaseName(endpoint)) ?? 0) + 1), new Map());
  const operationName = endpoint => {
    const base = operationBaseName(endpoint);
    return nameCounts.get(base) === 1 ? base : `${base}-${endpoint.path}`;
  };
  const typeLines = [
    'import type { ApiEnvelope, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";',
    "",
    "/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */",
  ];
  const operationLines = [
    'import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";',
    'import type * as T from "./operations.types.js";',
    "",
    `export class ${pascal(service)}Operations extends ServiceApi {`,
  ];

  for (const endpoint of endpoints) {
    const base = pascal(operationName(endpoint));
    const methodName = camel(operationName(endpoint));
    const ids = placeholders(endpoint.path);
    const hasInput = Boolean(endpoint.body || endpoint.multipart);
    const hasQuery = Boolean(endpoint.query);
    if (hasInput) {
      typeLines.push(`/** Backend request type: ${endpoint.body ?? "multipart/form-data"}. */`);
      typeLines.push(`export interface ${base}Input extends JsonObject {`);
      writeFields(typeLines, renderedFields(files, endpoint.module, endpoint.body));
      typeLines.push("}");
    }
    if (hasQuery) {
      typeLines.push(`/** Backend query type: ${endpoint.query}. */`);
      typeLines.push(`export interface ${base}Query extends QueryParams {`);
      writeFields(typeLines, renderedFields(files, endpoint.module, endpoint.query, new Set(), true));
      typeLines.push("}");
    }
    typeLines.push(`/** Backend response type: ${endpoint.response ?? "response without a declared JSON model"}. */`);
    const dataType = responseDataType(typeLines, files, endpoint.module, endpoint.response, `${base}Response`);
    const metaType = endpoint.responseMeta
      ? responseDataType(typeLines, files, endpoint.module, endpoint.responseMeta, `${base}Meta`)
      : null;
    typeLines.push(`export interface ${base}Response extends ApiEnvelope<${dataType}> {`);
    if (metaType) typeLines.push(`  meta: ${metaType};`);
    typeLines.push("}");
    typeLines.push("");

    const args = ids.map(id => `${camel(id)}: Identifier`);
    if (hasInput) args.push(`data: T.${base}Input`);
    if (hasQuery) args.push(`params?: T.${base}Query`);
    args.push(`options?: RequestOptions${hasInput ? `<T.${base}Input>` : ""}`);
    const permissions = endpoint.permissions.length ? endpoint.permissions.join(", ") : "public/session-derived";
    operationLines.push(`  /** ${endpoint.method} ${endpoint.path}; permission: ${permissions}. */`);
    operationLines.push(`  ${methodName}(${args.join(", ")}) {`);
    const requestData = endpoint.formUrlEncoded ? "urlEncoded(data)" : "data";
    operationLines.push(`    return this.client.request<T.${base}Response${hasInput ? `, ${endpoint.formUrlEncoded ? "URLSearchParams" : `T.${base}Input`}` : ""}>({ ...options, method: "${endpoint.method}", url: ${escapedPath(endpoint.path)}${hasInput ? `, data: ${requestData}` : ""}${hasQuery ? ", params" : ""}${endpoint.formUrlEncoded ? ', headers: { ...options?.headers, "Content-Type": "application/x-www-form-urlencoded" }' : ""} });`);
    operationLines.push("  }");
  }
  operationLines.push("}", "");
  await writeFile(join(root, "packages", service, "src", "operations.types.ts"), `${typeLines.join("\n")}\n`);
  await writeFile(join(root, "packages", service, "src", "operations.ts"), `${operationLines.join("\n")}\n`);
  const indexPath = join(root, "packages", service, "src", "index.ts");
  let index = await readFile(indexPath, "utf8");
  const operationsClass = `${pascal(service)}Operations`;
  if (!index.includes(`from "./operations.js"`)) {
    const importEnd = index.lastIndexOf("\n", index.indexOf("export class "));
    index = `${index.slice(0, importEnd + 1)}import { ${operationsClass} } from "./operations.js";\n${index.slice(importEnd + 1)}`;
  }
  if (!index.includes("readonly operations =")) {
    index = index.replace(/(export class \w+ extends ServiceApi \{\n)/, `$1    readonly operations = new ${operationsClass}(this.client);\n`);
  }
  if (!index.includes('export * from "./operations.js";')) {
    index = `${index.trimEnd()}\nexport * from "./operations.js";\nexport * from "./operations.types.js";\n`;
  }
  await writeFile(indexPath, index);
  console.log(`${service}: generated ${endpoints.length} operations`);
}
