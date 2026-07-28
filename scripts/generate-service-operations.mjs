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
const operationPurpose = endpoint => endpoint.handler.replace(/_/g, " ");
const placeholders = path => [...path.matchAll(/\{([^}]+)\}/g)].map(match => match[1]);
const escapedPath = path => `\`${path.replace(/\{([^}]+)\}/g, (_, name) => `\${encodeURIComponent(${camel(name)})}`)}\``;

// Hand-audited response contracts for handlers that intentionally build serde_json::Value or
// return IntoResponse shapes. These are derived from handler/repository behavior, not routes.
const responseOverrides = {
  lms: {
    submit_exam: "AcademyExamResultResponse", categories: "AcademyCategoriesResponse",
    courses: "AcademyCoursesResponse", course: "AcademyCourseResponse",
    enroll: "AcademyEnrollmentStartResponse", my_enrollments: "AcademyEnrollmentsResponse",
    start_exam: "AcademyExamAttemptResponse", complete_session: "AcademySessionCompletionResponse",
  },
  social: {
    upload_media: "SocialMediaResponse", get_media: "NoContentResponse",
    list_categories: "SocialCategoryListResponse", create_category: "SocialCategoryResponse",
    update_category: "SocialCategoryResponse", delete_category: "NoContentResponse",
    list_posts: "SocialPostListResponse", list_my_posts: "SocialPostListResponse",
    my_bookmarks: "SocialBookmarksResponse", create_post: "SocialPostResponse",
    get_post: "SocialPostResponse", update_post: "SocialPostResponse", delete_post: "NoContentResponse",
    resubmit_post: "SocialPostResponse", bookmark_post: "NoContentResponse", unbookmark_post: "NoContentResponse",
    record_post_view: "RecordViewResponse", record_share_event: "NoContentResponse",
    my_analytics: "CreatorAnalyticsResponse", post_analytics: "CreatorAnalyticsResponse",
    list_post_comments: "SocialCommentListResponse", create_post_comment: "SocialCommentResponse",
    update_comment: "SocialCommentResponse", delete_comment: "NoContentResponse",
    post_reactions: "ReactionSummaryResponse", comment_reactions: "ReactionSummaryResponse",
    set_post_reaction: "SocialReactionResponse", set_comment_reaction: "SocialReactionResponse",
    like_post: "SocialReactionResponse", like_comment: "SocialReactionResponse",
    remove_post_reaction: "NoContentResponse", remove_comment_reaction: "NoContentResponse",
    create_report: "SocialReportResponse", moderation_queue: "ModerationQueueResponse",
    moderation_audit: "ModerationAuditResponse", moderate: "ModerationActionResponse",
    import_modules: "LegacyImportResponse",
  },
};
const inputOverrides = {
  lms: { submit_exam: "AcademySubmitExamInput", complete_session: "AcademyCompleteSessionInput" },
};

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
    const defaulted = /#\[serde\([^\]]*\bdefault\b[^\]]*\)\]/.test(part);
    const clean = part.replace(/#\[[\s\S]*?\]/g, "").replace(/\/\/.*$/gm, "").trim();
    const field = clean.match(/(?:pub(?:\([^)]*\))?\s+)?(\w+)\s*:\s*([\s\S]+)$/);
    return field ? [{ name: rename ?? field[1], rustType: field[2].trim(), flatten, defaulted }] : [];
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

function enumFrom(file, name) {
  const match = new RegExp(`(?:pub(?:\\([^)]*\\))?\\s+)?enum\\s+${name}(?:\\s*<[^>{]+>)?\\s*\\{`).exec(file.source);
  if (match?.index === undefined) return null;
  const open = file.source.indexOf("{", match.index);
  const close = matchingBrace(file.source, open);
  if (close === -1) return null;
  const attributes = file.source.slice(Math.max(0, file.source.lastIndexOf("#[", match.index)), match.index);
  const renameAll = attributes.match(/serde\([^\]]*rename_all\s*=\s*"([^"]+)"/)?.[1];
  const rename = value => renameAll === "snake_case"
    ? value.replace(/([a-z0-9])([A-Z])/g, "$1_$2").toLowerCase()
    : renameAll === "kebab-case" ? value.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase() : value;
  const variants = splitFields(file.source.slice(open + 1, close)).flatMap(part => {
    const explicit = part.match(/#\[serde\(rename\s*=\s*"([^"]+)"\)\]/)?.[1];
    const clean = part.replace(/#\[[\s\S]*?\]/g, "").replace(/\/\/.*$/gm, "").trim();
    const variant = clean.match(/^(\w+)\s*(?:\{|\(|$)/)?.[1];
    return variant ? [explicit ?? rename(variant)] : [];
  });
  return variants.length ? variants : null;
}

function resolveEnum(files, module, raw) {
  const name = typeName(raw);
  if (!name) return null;
  const matches = files.map(file => ({ file, variants: enumFrom(file, name) })).filter(item => item.variants);
  return matches.find(item => item.file.path.includes(`/${module}/`)) ?? matches[0] ?? null;
}

function renderedFields(files, module, raw, seen = new Set(), query = false, declarations = null, base = "Nested", declared = new Set()) {
  const resolved = resolveStruct(files, module, raw);
  const name = typeName(raw);
  if (!resolved || !name || seen.has(`${resolved.file.path}:${name}`)) return [];
  const nextSeen = new Set(seen).add(`${resolved.file.path}:${name}`);
  return resolved.fields.flatMap(field => {
    if (field.flatten) return renderedFields(files, module, field.rustType, nextSeen, query, declarations, base, declared);
    const outer = unwrap(field.rustType, "Option");
    const optional = Boolean(outer);
    const valueRaw = outer ?? field.rustType;
    const nested = query ? renderedFields(files, module, valueRaw, nextSeen, true, declarations, base, declared) : [];
    if (nested.length) return nested.map(item => ({ ...item, name: `${field.name}[${item.name}]`, optional: optional || item.optional }));
    let renderedType = tsType(valueRaw, query);
    if (!query && (renderedType === "JsonValue" || renderedType === "JsonValue[]") && declarations) {
      const vector = unwrap(valueRaw, "Vec");
      const candidate = vector ?? valueRaw;
      const nestedStruct = resolveStruct(files, module, candidate);
      const nestedEnum = resolveEnum(files, module, candidate);
      const nestedName = `${base}${pascal(field.name)}`;
      if (nestedStruct && !nextSeen.has(`${nestedStruct.file.path}:${typeName(candidate)}`)) {
        const key = `${nestedStruct.file.path}:${typeName(candidate)}:${nestedName}`;
        if (!declared.has(key)) {
          declared.add(key);
          const fields = renderedFields(files, module, candidate, nextSeen, false, declarations, nestedName, declared);
          declarations.push(`export interface ${nestedName} extends JsonObject {`);
          writeFields(declarations, fields);
          declarations.push("}");
        }
        renderedType = `${nestedName}${vector ? "[]" : ""}`;
      } else if (nestedEnum) {
        if (!declared.has(nestedName)) {
          declared.add(nestedName);
          declarations.push(`export type ${nestedName} = ${nestedEnum.variants.map(value => JSON.stringify(value)).join(" | ")};`);
        }
        renderedType = `${nestedName}${vector ? "[]" : ""}`;
      }
    }
    return [{ name: field.name, optional: optional || field.defaulted, type: optional && !renderedType.includes("null") ? `${renderedType} | null` : renderedType }];
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
    const itemFields = renderedFields(files, module, itemRaw, new Set(), false, lines, `${base}Item`);
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
  const fields = renderedFields(files, module, normalized, new Set(), false, lines, `${base}Data`);
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
    const inputOverride = inputOverrides[service]?.[endpoint.handler];
    const responseOverride = responseOverrides[service]?.[endpoint.handler];
    if (hasInput) {
      typeLines.push(`/** Backend request type: ${endpoint.body ?? "multipart/form-data"}. */`);
      if (inputOverride) {
        typeLines.push(`export type ${base}Input = import("./types.js").${inputOverride};`);
      } else if (endpoint.multipart) {
        typeLines.push(`export type ${base}Input = FormData;`);
      } else {
        const inputFields = renderedFields(files, endpoint.module, endpoint.body, new Set(), false, typeLines, `${base}Input`);
        typeLines.push(`export interface ${base}Input extends JsonObject {`);
        writeFields(typeLines, inputFields);
        typeLines.push("}");
      }
    }
    if (hasQuery) {
      typeLines.push(`/** Backend query type: ${endpoint.query}. */`);
      typeLines.push(`export interface ${base}Query extends QueryParams {`);
      writeFields(typeLines, renderedFields(files, endpoint.module, endpoint.query, new Set(), true));
      typeLines.push("}");
    }
    typeLines.push(`/** Backend response type: ${endpoint.response ?? "handler-defined response"}. */`);
    if (responseOverride) {
      typeLines.push(`export type ${base}Response = import("./types.js").${responseOverride};`);
    } else {
      const dataType = responseDataType(typeLines, files, endpoint.module, endpoint.response, `${base}Response`);
      const metaType = endpoint.responseMeta
        ? responseDataType(typeLines, files, endpoint.module, endpoint.responseMeta, `${base}Meta`)
        : null;
      typeLines.push(`export interface ${base}Response extends ApiEnvelope<${dataType}> {`);
      if (metaType) typeLines.push(`  meta: ${metaType};`);
      typeLines.push("}");
    }
    typeLines.push("");

    const args = ids.map(id => `${camel(id)}: Identifier`);
    if (hasInput) args.push(`data: T.${base}Input`);
    if (hasQuery) args.push(`params?: T.${base}Query`);
    args.push(`options?: RequestOptions${hasInput ? `<T.${base}Input>` : ""}`);
    const permissions = endpoint.permissions.length ? endpoint.permissions.join(", ") : "session-derived or public bootstrap route";
    operationLines.push("  /**");
    operationLines.push(`   * Performs the ${operationPurpose(endpoint)} operation for the ${endpoint.module.replace(/_/g, " ")} capability.`);
    operationLines.push(`   * Calls \`${endpoint.method} ${endpoint.path}\` through the shared IDP-aware Faiber client.`);
    for (const id of ids) operationLines.push(`   * @param ${camel(id)} Backend path identifier \`${id}\`.`);
    if (hasInput) operationLines.push(`   * @param data Typed ${endpoint.multipart ? "multipart form" : endpoint.formUrlEncoded ? "URL-encoded form" : "JSON request body"}.`);
    if (hasQuery) operationLines.push("   * @param params Typed query parameters; omitted members retain backend defaults.");
    operationLines.push("   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.");
    operationLines.push("   * @returns The complete Axios response, including the typed service envelope, status, and headers.");
    operationLines.push(`   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: ${permissions}.`);
    operationLines.push("   */");
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
