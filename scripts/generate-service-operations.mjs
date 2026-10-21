import { productionRust } from "./rust-source.mjs";
import { serviceSources } from "./service-source-snapshots.mjs";
import { releaseContracts } from "./release-contract-overrides.mjs";
import { collaborationContracts } from "./collaboration-contract-overrides.mjs";
import { access, readFile, readdir, writeFile } from "node:fs/promises";
import { basename, dirname, join, relative, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const siblingRoots = [join(root, "..", "Service"), join(root, "..", "services")];
const discoveredServicesRoot = process.env.FAIBER_SERVICES_ROOT ?? await (async () => {
  for (const candidate of siblingRoots) {
    try { await access(candidate); return candidate; } catch { /* keep looking */ }
  }
  return siblingRoots[0];
})();
const servicesRoot = resolve(serviceSources(root, discoveredServicesRoot));
const serviceDirectories = { version: "infera_version" };
try { await access(join(servicesRoot, "infera-version", "src")); serviceDirectories.version = "infera-version"; } catch { /* retain legacy checkout support */ }
const checkGenerated = process.argv.includes("--check");
const positional = process.argv.slice(2).filter(arg => arg !== "--check");
const manifestPath = resolve(positional[0] ?? join(root, "service-contracts.json"));
const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
const selectedServices = new Set(
  (positional[1] ?? process.env.FAIBER_CONTRACT_SERVICES ?? "")
    .split(",")
    .map(value => value.trim())
    .filter(Boolean),
);

for (const service of selectedServices) {
  if (!Object.hasOwn(manifest,service)) throw new Error("Unknown contract service: "+service);
}
const staleGenerated = [];
async function emitGenerated(path,next) {
  if (!checkGenerated) { await writeFile(path,next); return; }
  const current=await readFile(path,"utf8").catch(()=>null);
  if (current!==next) staleGenerated.push(relative(root,path));
}

const pascal = value => value
  .replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase())
  .replace(/[^a-zA-Z0-9]/g, "")
  .replace(/^./, char => char.toUpperCase());
const camel = value => {
  const converted = pascal(value);
  return converted[0].toLowerCase() + converted.slice(1);
};
const operationBaseName = endpoint => `${endpoint.module}-${endpoint.handler}-${endpoint.method.toLowerCase()}`;
// Preserve published names for manually reviewed workspace contracts.
const stableOperationNames = {
  "GET /api/openapi.json": "workspaceQuery",
  "GET /api/v1/planning-preferences": "workspacePreferences",
  "PUT /api/v1/planning-preferences": "workspaceSavePreferences",
  "GET /api/v1/note-folders": "workspaceFolders",
  "POST /api/v1/review-proposals": "workspacePropose",
  "POST /api/v1/review-proposals/validate": "workspaceValidate",
  "GET /api/v1/review-proposals/{id}": "workspaceProposal",
  "PUT /api/v1/review-proposals/{id}": "workspaceRevise",
  "POST /api/v1/review-proposals/{id}/apply": "workspaceApply",
  "POST /api/v1/review-proposals/{id}/refresh": "workspaceRefresh",
  "GET /api/v1/actions": "workspaceAssistantContracts",

  "GET /api/v1/workspace-assistants": "workspaceRoles",
  "GET /api/v1/admin/workspace-assistants": "workspaceManagedRoles",
  "PUT /api/v1/admin/workspace-assistants/{role}": "workspaceBind",
};
const operationPurpose = endpoint => endpoint.handler.replace(/_/g, " ");
const placeholders = path => [...path.matchAll(/\{([^}]+)\}/g)].map(match => match[1]);
const escapedPath = (path, review) => `\`${path.replace(/\{([^}]+)\}/g, (_, name) => `\${${name.startsWith('*')?(review?.notFoundOnly?'unregisteredApiPath':'wildcardPath'):'encodeURIComponent'}(${camel(name)})}`)}\``;
const routePattern = path => '^'+path.split(/(\{[^}]+\})/).map(part=>part.startsWith('{')?(part.startsWith('{*')?'.+':'[^/]+'):part.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('')+'$';

// Hand-audited response contracts for handlers that intentionally build serde_json::Value or
// return IntoResponse shapes. These are derived from handler/repository behavior, not routes.
const responseOverrides = {
  knowledge: {
    list_actions: "KnowledgeCustomerActionListResponse",
    update_action_status: "KnowledgeCustomerActionResponse",
    list_audit: "KnowledgeAuditLogListResponse",
    audit_events: "KnowledgeAuditEventListResponse",
    processing_jobs: "ProcessingJobListResponse",
    retry_processing_job: "ProcessingJobResponse",
    cancel_processing_job: "ProcessingJobResponse",
    list_sources: "KnowledgeSourceListResponse",
    create_source: "KnowledgeSourceResponse",
    pause_source: "KnowledgeSourceResponse",
    sync_source: "KnowledgeQueuedJobResponse",
    reprocess_document: "KnowledgeQueuedJobResponse",
    list_documents: "KnowledgeDocumentListResponse",
    ingest_document: "IngestDocumentResponse",
    publish: "KnowledgeReleaseResponse",
    get_release: "KnowledgeReleaseResponse",
    export_base: "KnowledgeExportResponse",
    list_bases: "KnowledgeBaseListResponse",
    get_base: "KnowledgeBaseResponse",
    create_base: "KnowledgeBaseResponse",
    update_base: "KnowledgeBaseResponse",
    list_groups: "KnowledgeGroupListResponse",
    create_group: "KnowledgeGroupResponse",
    update_group: "KnowledgeGroupResponse",
    list_items: "KnowledgeItemListResponse",
    get_item: "KnowledgeItemResponse",
    create_item: "KnowledgeItemResponse",
    update_item: "KnowledgeItemResponse",
    list_edges: "KnowledgeEdgeListResponse",
    create_edge: "KnowledgeEdgeResponse",
    update_edge: "KnowledgeEdgeResponse",
    list_bindings: "ChatBindingListResponse",
    create_binding: "ChatBindingResponse",
    update_binding: "ChatBindingResponse",
    list_rules: "MatchRuleListResponse",
    create_rule: "MatchRuleResponse",
    update_rule: "MatchRuleResponse",
  },
  asset:{policy_get:"EconomyPolicyResponse",policy_put:"EconomyPolicyResponse",capabilities:"EconomyCapabilitiesResponse",command:"EconomyCommandResponse",objects:"EconomyObjectsResponse",journal:"EconomyJournalResponse",me:"EconomyObjectsResponse",valuation:"EconomyValuationResponse",my_history:"EconomyHistoryResponse",preview:"EconomyCommandResponse",leaderboards:"EconomyLeaderboardResponse",purchase:"EconomyCommandResponse",credit:"EconomyCreditResponse"},
  session:{interact:"RoomInteractionResponse"},
  chat: { events: "ChatEventStream" },
  task: {
    ensure_personal_project: "ProjectResponse",
    create_shared_project: "ProjectResponse",
  },
  crm: {
    activities: "CrmActivityListResponse",
    automation_jobs: "CrmAutomationJobListResponse",
    board: "CrmBoardResponse",
    companies: "CrmCompanyListResponse",
    contacts: "CrmContactListResponse",
    deals: "CrmDealListResponse",
    leads: "CrmLeadListResponse",
    light_leads: "CrmLeadListResponse",
    overview: "CrmOverviewResponse",
    pipelines: "CrmPipelinesResponse",
    refresh_reports: "CrmReportRefreshResponse",
    report_catalog: "CrmReportCatalogResponse",
    request_agentic_insight: "CrmAgenticInsightResponse",
    tasks: "CrmTaskListResponse",
    team: "CrmTeamDetailResponse",
  },
  lms: {
    submit_exam: "AcademyExamResultResponse", categories: "AcademyCategoriesResponse",
    courses: "AcademyCoursesResponse", course: "AcademyCourseResponse",
    enroll: "AcademyEnrollmentStartResponse", my_enrollments: "AcademyEnrollmentsResponse",
    start_exam: "AcademyExamAttemptResponse", complete_session: "AcademySessionCompletionResponse",
    index_certificate: "CertificateListResponse", store_certificate: "CertificateResponse",
    show_certificate: "CertificateResponse", update_certificate: "CertificateResponse",
    index_template: "CertificateTemplateListResponse", store_template: "CertificateTemplateResponse",
    show_template: "CertificateTemplateResponse", update_template: "CertificateTemplateResponse",
    verify_certificate: "PublicCertificateResponse", render_certificate_image: "CertificateSvgResponse",
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
  knowledge:{create_source:"CreateKnowledgeSourceInput",create_item:"CreateItemInput",update_item:"UpdateItemInput",update_action_status:"ActionStatusInput"},
  asset:{policy_put:"EconomyPolicy",command:"EconomyOperatorCommand",preview:"EconomyPreviewInput",purchase:"EconomyPurchaseInput",credit:"EconomyCreditInput"},
  session:{interact:"RoomInteractionInput"},
  idp: { browser_login: "BrowserLoginInput" },
  lms: {
    submit_exam: "AcademySubmitExamInput", complete_session: "AcademyCompleteSessionInput",
    store_certificate: "CreateCertificateInput", update_certificate: "UpdateCertificateInput",
    store_template: "CreateCertificateTemplateInput", update_template: "UpdateCertificateTemplateInput",
  },
};

async function rustFiles(rootDir) {
  const output = [];
  for (const entry of await readdir(rootDir, { withFileTypes: true })) {
    if (["target", "node_modules", ".git", "migration", "panel", "example", "chat", "tests", "benches"].includes(entry.name)) continue;
    const path = join(rootDir, entry.name);
    if (entry.isDirectory()) output.push(...await rustFiles(path));
    else if (path.endsWith(".rs")) output.push({ path, source: productionRust(await readFile(path, "utf8")) });
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
  const attrs = file.source.slice(Math.max(0, file.source.lastIndexOf("#[derive", match.index)), match.index);
  const renameAll = attrs.match(/serde\([^\]]*rename_all\s*=\s*"([^"]+)"/)?.[1];
  const wireName = name => renameAll === "camelCase" ? name.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase()) : name;
  const fields = splitFields(file.source.slice(open + 1, close)).flatMap(part => {
    // serde(skip) excludes a field from both wire directions. Do not confuse
    // skip_serializing_if with unconditional exclusion: that field is public.
    if (/#\[serde\(\s*(?:[^\]]*,\s*)?skip\s*(?:,|\))/.test(part)) return [];
    const rename = part.match(/#\[serde\([^\]]*\brename\s*=\s*"([^"]+)"/)?.[1];
    const flatten = /#\[serde\([^\]]*\bflatten\b/.test(part);
    const defaulted = /#\[serde\([^\]]*\bdefault\b[^\]]*\)\]/.test(part);
    const skipInput = /#\[serde\([^\]]*\bskip_deserializing\b/.test(part);
    const skipOutput = /#\[serde\([^\]]*\bskip_serializing\b/.test(part);
    const conditionalOutput = /#\[serde\([^\]]*\bskip_serializing_if\s*=/.test(part);
    const clean = part.replace(/#\[[\s\S]*?\]/g, "").replace(/\/\/.*$/gm, "").trim();
    const field = clean.match(/(?:pub(?:\([^)]*\))?\s+)?(\w+)\s*:\s*([\s\S]+)$/);
    return field ? [{ name: rename ?? wireName(field[1]), rustType: field[2].trim(), flatten, defaulted, skipInput, skipOutput, conditionalOutput }] : [];
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

function tsType(raw, query = false, input = false) {
  const type = raw.replace(/\s+/g, " ").trim();
  const facadeType = {
    ClassroomCourseSessionResponse: 'import("./types.js").ClassroomCourseSession',
    ClassroomSessionTypeResponse: 'import("./types.js").ClassroomSessionType',
  }[type];
  if (facadeType) return facadeType;
  const fixedArray = type.match(/^\[\s*([^;]+);\s*(\d+)\s*\]$/);
  if (fixedArray && Number(fixedArray[2]) <= 32) return `[${Array(Number(fixedArray[2])).fill(tsType(fixedArray[1], query, input)).join(", ")}]`;
  const optional = unwrap(type, "Option");
  if (optional) return `${tsType(optional, query, input)} | null`;
  const vector = unwrap(type, "Vec");
  if (vector) return `${tsType(vector, query, input)}[]`;
  const map = type.match(/^(?:HashMap|BTreeMap)<\s*String\s*,\s*([\s\S]+)>$/);
  if (map) return `Record<string, ${tsType(map[1], query, input)}>`;
  if (/(?:^|::)Uuid$/.test(type)) return "string";
  if (/^(String|&(?:'\w+\s+)?str|Uuid)$/.test(type) || /(Date|DateTime|NaiveDate|NaiveDateTime)/.test(type)) return "string";
  if (/^(bool)$/.test(type)) return "boolean";
  if (/^(u|i)(8|16|32|64|128|size)$/.test(type) || /^(f32|f64)$/.test(type)) return "number";
  if (/^(Decimal|BigDecimal)$/.test(type)) return input ? "string | number" : "string";
  // Common serde_json and SeaORM aliases are JSON, not unresolved DTOs.
  if (/^(Value|Json|JsonValue|serde_json::Value|sea_orm::prelude::Json)$/.test(type)) return "JsonValue";
  if (type === "()") return "null";
  return query ? "QueryValue" : `BackendJson<${JSON.stringify(type)}>`;
}

function resolveStruct(files, module, raw) {
  const name = typeName(raw);
  if (!name) return null;
  const matches = files.map(file => structFrom(file, name)).filter(Boolean);
  if (!matches.length) {
    for (const file of files) {
      const alias = new RegExp(`(?:pub\\s+)?type\\s+${name}\\s*=\\s*([^;]+);`).exec(file.source)?.[1]?.trim();
      if (alias && typeName(alias) !== name) return resolveStruct(files, module, alias);
    }
    return null;
  }
  const qualifier = raw.replace(/\s+/g, "").match(/(?:^|::)([A-Za-z_]\w*)::[A-Za-z_]\w*$/)?.[1];
  // `models::Create` is local to the route's module, not the first models.rs in the service.
  return (qualifier === "models" ? matches.find(item => item.file.path.includes(`/${module}/`) && basename(item.file.path) === "models.rs") : undefined)
    ?? (qualifier ? matches.find(item => basename(item.file.path, ".rs") === qualifier) : undefined)
    ?? matches.find(item => item.file.path.includes(`/${module}/`))
    ?? matches.find(item => basename(item.file.path, ".rs") === module)
    ?? matches.find(item => basename(item.file.path) === "models.rs")
    ?? matches[0];
}

function enumFrom(file, name) {
  const match = new RegExp(`(?:pub(?:\\([^)]*\\))?\\s+)?enum\\s+${name}(?:\\s*<[^>{]+>)?\\s*\\{`).exec(file.source);
  if (match?.index === undefined) return null;
  const open = file.source.indexOf("{", match.index);
  const close = matchingBrace(file.source, open);
  if (close === -1) return null;
  const attributes = file.source.slice(Math.max(0, file.source.lastIndexOf("#[derive", match.index)), match.index);
  const renameAll = attributes.match(/serde\([^\]]*rename_all\s*=\s*"([^"]+)"/)?.[1];
  const rename = value => renameAll === "snake_case"
    ? value.replace(/([a-z0-9])([A-Z])/g, "$1_$2").toLowerCase()
    : renameAll === "kebab-case" ? value.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
    : renameAll === "camelCase" ? value[0].toLowerCase() + value.slice(1)
    : renameAll === "lowercase" ? value.toLowerCase()
    : renameAll === "UPPERCASE" ? value.toUpperCase()
    : renameAll === "SCREAMING_SNAKE_CASE" ? value.replace(/([a-z0-9])([A-Z])/g, "$1_$2").toUpperCase() : value;
  const variants = splitFields(file.source.slice(open + 1, close)).flatMap(part => {
    const leading = part.replace(/\/\/.*$/gm, "").trim();
    const attributes = leading.match(/^(?:#\[[\s\S]*?\]\s*)*/)?.[0] ?? "";
    if (/#\[serde\([^\]]*\bskip\s*(?:,|\))/.test(attributes)) return [];
    const explicit = attributes.match(/#\[serde\([^\]]*\brename\s*=\s*"([^"]+)"/)?.[1];
    const clean = leading.slice(attributes.length).trim();
    const variant = clean.match(/^(\w+)\s*([\s\S]*)$/);
    if (!variant) return [];
    const payload = variant[2].trim();
    return [{name: explicit ?? rename(variant[1]), rustName: variant[1], payload,
      skipInput: /#\[serde\([^\]]*\bskip_deserializing\b/.test(attributes),
      skipOutput: /#\[serde\([^\]]*\bskip_serializing\b/.test(attributes)}];
  });
  return variants.length ? {variants, tag:attributes.match(/\btag\s*=\s*"([^"]+)"/)?.[1],
    content:attributes.match(/\bcontent\s*=\s*"([^"]+)"/)?.[1], untagged:/\buntagged\b/.test(attributes)} : null;
}

function renderEnum(files, module, resolved, raw, seen, declarations, base, declared, input) {
  const {variants, tag, content, untagged} = resolved.variants;
  const values = variants.filter(v => !(input ? v.skipInput : v.skipOutput)).map(variant => {
    const literal = JSON.stringify(variant.name);
    const payload = variant.payload;
    if (!payload) return untagged ? "null" : tag ? `{ ${JSON.stringify(tag)}: ${literal} }` : literal;
    const syntheticName = `${base}${variant.rustName}Payload`;
    let body;
    let tuple;
    if (payload.startsWith("{")) body = payload.slice(1, payload.lastIndexOf("}"));
    else if (payload.startsWith("(")) {
      tuple = splitFields(payload.slice(1, payload.lastIndexOf(")"))).map(x=>x.trim()).filter(Boolean);
      body = tuple.map((type,i)=>`pub value_${i}: ${type}`).join(",");
    } else throw new Error(`Unsupported enum payload ${raw}::${variant.rustName}`);
    const synthetic = {path: resolved.file.path, source:`pub struct ${syntheticName} { ${body} }`};
    const fields = renderedFields([synthetic,...files], module, syntheticName, seen, false, declarations, syntheticName, declared, input);
    let value;
    if (tuple) value = fields.length === 1 ? fields[0].type : `[${fields.map(f=>f.type).join(", ")}]`;
    else {
      if (!declared.has(syntheticName)) {
        declared.add(syntheticName);
        declarations.push(`export interface ${syntheticName} extends JsonObject {`);
        writeFields(declarations, fields);
        declarations.push("}");
      }
      value = syntheticName;
    }
    if (untagged) return value;
    if (!tag) return `{ ${literal}: ${value} }`;
    if (content) return `{ ${JSON.stringify(tag)}: ${literal}; ${JSON.stringify(content)}: ${value} }`;
    return `({ ${JSON.stringify(tag)}: ${literal} } & ${value})`;
  });
  return values.join(" | ") || "never";
}

function resolveEnum(files, module, raw) {
  const name = typeName(raw);
  if (!name) return null;
  const matches = files.map(file => ({ file, variants: enumFrom(file, name) })).filter(item => item.variants);
  const qualifier = raw.replace(/\s+/g, "").match(/(?:^|::)([A-Za-z_]\w*)::[A-Za-z_]\w*$/)?.[1];
  return (qualifier ? matches.find(item => basename(item.file.path, ".rs") === qualifier) : undefined)
    ?? matches.find(item => item.file.path.includes(`/${module}/`)) ?? matches[0] ?? null;
}

function renderedFields(files, module, raw, seen = new Set(), query = false, declarations = null, base = "Nested", declared = new Set(), input = query) {
  const resolved = resolveStruct(files, module, raw);
  const name = typeName(raw);
  if (!resolved || !name || seen.has(`${resolved.file.path}:${name}`)) return [];
  const nextSeen = new Set(seen).add(`${resolved.file.path}:${name}`);
  const fields = resolved.fields.flatMap(field => {
    if (input ? field.skipInput : field.skipOutput) return [];
    if (field.flatten) return renderedFields(files, module, field.rustType, nextSeen, query, declarations, base, declared, input);
    const outer = unwrap(field.rustType, "Option");
    const optional = Boolean(outer);
    const valueRaw = outer ?? field.rustType;
    const nested = query ? renderedFields(files, module, valueRaw, nextSeen, true, declarations, base, declared, input) : [];
    if (nested.length) return nested.map(item => ({ ...item, name: `${field.name}[${item.name}]`, optional: optional || item.optional }));
    let renderedType = tsType(valueRaw, query, input);
    if (module === "classroom" && field.name === "weekly_schedule" && !query) {
      renderedType = base.endsWith("Input")
        ? 'import("./types.js").ClassroomWeeklyScheduleRuleInput[]'
        : 'import("./types.js").ClassroomWeeklyScheduleRule[]';
    }
    const facadeField = !query && module === "homework" && ["homework", "homework_question"].includes(field.name)
      ? `import("./types.js").${field.name === "homework" ? "Homework" : "HomeworkQuestion"}` : null;
    if (facadeField) renderedType = facadeField;
    if (module === "classroom" && field.name === "attendance_mode") renderedType = '"online" | "in_person"';
    if (!facadeField && !query && declarations) {
      const vector = unwrap(valueRaw, "Vec");
      const candidate = vector ?? valueRaw;
      const nestedStruct = resolveStruct(files, module, candidate);
      const nestedEnum = resolveEnum(files, module, candidate);
      const nestedName = `${base}${pascal(field.name)}`;
      if (nestedStruct && !nextSeen.has(`${nestedStruct.file.path}:${typeName(candidate)}`)) {
        const key = `${nestedStruct.file.path}:${typeName(candidate)}:${nestedName}`;
        if (!declared.has(key)) {
          declared.add(key);
          const fields = renderedFields(files, module, candidate, nextSeen, false, declarations, nestedName, declared, input);
          declarations.push(`export interface ${nestedName} extends JsonObject {`);
          writeFields(declarations, fields);
          declarations.push("}");
        }
        renderedType = `${nestedName}${vector ? "[]" : ""}`;
      } else if (nestedEnum) {
        declared.enumNames ??= new Map();
        const enumKey = `${nestedEnum.file.path}:${typeName(candidate)}:${input}`;
        const existing = declared.enumNames.get(enumKey);
        const enumName = existing ?? nestedName;
        if (!existing) {
          declared.enumNames.set(enumKey, enumName);
          declared.add(enumName);
          declarations.push(`export type ${enumName} = ${renderEnum(files, module, nestedEnum, candidate, nextSeen, declarations, enumName, declared, input)};`);
        }
        renderedType = `${enumName}${vector ? "[]" : ""}`;
      }
    }
    // Verified Modules85e hosted lists serialize search even when absent (JSON null).
    // Query strings accept omitted/string values; null is not a wire query value.
    if (query && typeName(raw) === "HostedListQuery" && field.name === "search") return [{ name: field.name, optional: true, type: "string" }];
    if (!query && /^(CategoryListCategoriesGet|TagListTagsGet|SeoContentListSeoContentsGet)ResponseData$/.test(base) && field.name === "search") return [{ name: field.name, optional: false, type: "string | null" }];
    return [{ name: field.name, optional: input ? optional || field.defaulted : field.conditionalOutput, type: optional && !renderedType.includes("null") ? `${renderedType} | null` : renderedType }];
  });
  if (!query) return fields;
  // A backend can accept legacy nested pagination and literal bracket keys.
  // Both become the same URL parameter; retain each accepted scalar spelling.
  const parameters = new Map();
  for (const field of fields) {
    const previous = parameters.get(field.name);
    parameters.set(field.name, previous ? {
      ...field, optional: previous.optional && field.optional,
      type: [...new Set([...previous.type.split(" | "), ...field.type.split(" | ")])].join(" | "),
    } : field);
  }
  return [...parameters.values()];
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
  if (selectedServices.size && !selectedServices.has(service)) continue;
  // A path dependency can define unrelated types named Value or ListQuery.
  // Service DTO lookup must not accidentally consume those crate-local names.
  // Public shared-crate handlers require explicit reviewed wire types below.
  const files = (await rustFiles(join(servicesRoot, serviceDirectories[service] ?? `infera-${service}`)))
    .filter(file => !file.path.includes('/shared/'));
  const nameCounts = endpoints.reduce((counts, endpoint) => counts.set(operationBaseName(endpoint), (counts.get(operationBaseName(endpoint)) ?? 0) + 1), new Map());
  const operationName = endpoint => {
    const base = operationBaseName(endpoint);
    return nameCounts.get(base) === 1 ? base : `${base}-${endpoint.path}`;
  };
  const typeLines = [
    'import type { ApiEnvelope, BackendJson, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";',
    "",
    "/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */",
  ];
  if (service === "profile") typeLines.unshift('import type { ProfileListQuery as importProfileListQuery } from "./types.js";');
  const operationLines = [
    'import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";',
    'import type * as T from "./operations.types.js";',
    ...(endpoints.some(endpoint=>endpoint.path.includes('{*')) ? [
      'function wildcardPath(path: Identifier): string {',
      '  const parts = String(path).split("/");',
      '  if (parts.some(part => !part || part === "." || part === ".." || /[%?#\\\\]/.test(part))) throw new TypeError("Wildcard paths require nonempty raw segments without dot traversal, percent escapes, query, fragment or backslash");',
      '  return parts.map(part => encodeURIComponent(part)).join("/");',
      '}',
    ] : []),
    ...(endpoints.some(endpoint=>releaseContracts[`${service}:${endpoint.method} ${endpoint.path}`]?.notFoundOnly) ? [
      `const registeredApiPaths = ${JSON.stringify([...new Set(endpoints.filter(endpoint=>endpoint.method!=="ANY"&&endpoint.path.startsWith('/api/')).map(endpoint=>routePattern(endpoint.path)))] )}.map(pattern => new RegExp(pattern));`,
      'function unregisteredApiPath(path: Identifier): string {',
      '  const encoded = wildcardPath(path);',
      '  if (registeredApiPaths.some(pattern => pattern.test(`/api/${encoded}`))) throw new TypeError("Use the named CRM operation for registered API paths");',
      '  return encoded;',
      '}',
    ] : []),
    ...(endpoints.some(endpoint => releaseContracts[`${service}:${endpoint.method} ${endpoint.path}`]?.websocket) ? ['import { openMatchRealtime, openRoomRealtime } from "./match-realtime.js";'] : []),
    ...(endpoints.some(endpoint => releaseContracts[`${service}:${endpoint.method} ${endpoint.path}`]?.membershipRevision) ? ['import { membershipRevisionOptions } from "./memberships.js";'] : []),
    ...(endpoints.some(endpoint => releaseContracts[`${service}:${endpoint.method} ${endpoint.path}`]?.idempotencyKey) ? ['import { AxiosHeaders, type RawAxiosHeaders } from "axios";'] : []),
    "",
    `export class ${pascal(service)}Operations extends ServiceApi {`,
  ];

  for (const endpoint of endpoints) {
    const reviewedRelease = releaseContracts[`${service}:${endpoint.method} ${endpoint.path}`];
    const base = reviewedRelease?.typeBase ?? pascal(operationName(endpoint));
    const methodName = reviewedRelease?.methodName ?? (["task", "chat", "knowledge"].includes(service) ? stableOperationNames[`${endpoint.method} ${endpoint.path}`] : undefined) ?? camel(operationName(endpoint));
    const ids = placeholders(endpoint.path);
    const reviewed = {...collaborationContracts[`${service}:${endpoint.method} ${endpoint.path}`], ...reviewedRelease};
    if (endpoint.method === "ANY" && !reviewed?.dynamicMethod) throw new Error(`Unreviewed dynamic HTTP method: ${service} ${endpoint.path}`);
    const hasInput = Boolean(endpoint.body || endpoint.multipart || endpoint.binary);
    if (endpoint.source.includes('/shared/') && (!reviewed?.response || (hasInput && !reviewed?.input))) {
      throw new Error(`Public path-dependency wire types require explicit review: ${service} ${endpoint.method} ${endpoint.path}`);
    }
    const dynamicProfileList = service === "profile" && endpoint.module === "profile" &&
      /^(index|manager_index|accountant_index|support_index|consultant_index|teacher_index|student_index|parent_index|other_index)$/.test(endpoint.handler);
    const hasQuery = dynamicProfileList || Boolean(endpoint.query || reviewed?.query);
    const inputOverride = inputOverrides[service]?.[endpoint.handler];
    const responseOverride = responseOverrides[service]?.[endpoint.handler];
    const optionalChatUpload = service === "chat" && endpoint.handler === "complete_attachment";
    const binaryDownload = reviewed?.binaryDownload || (service === "chat" && ["download_attachment", "tts"].includes(endpoint.handler)) || (service === "task" && endpoint.handlerModule === "attachments" && endpoint.handler === "download");
    if (optionalChatUpload) typeLines.push("export type AttachmentUploadBody = Blob | ArrayBuffer | Uint8Array;");
    if (hasInput) {
      typeLines.push(`/** Backend request type: ${endpoint.binary ? "binary byte stream" : endpoint.body ?? "multipart/form-data"}. */`);
      if (reviewed?.input) {
        typeLines.push(`export type ${base}Input = ${reviewed.input};`);
      } else if (inputOverride) {
        typeLines.push(`export type ${base}Input = import("./types.js").${inputOverride};`);
      } else if (endpoint.multipart) {
        typeLines.push(`export type ${base}Input = FormData;`);
      } else if (endpoint.binary) {
        typeLines.push(`export type ${base}Input = Blob | ArrayBuffer | ArrayBufferView;`);
      } else if (/^(?:serde_json::)?Value$/.test(endpoint.body)) {
        typeLines.push(`export type ${base}Input = JsonValue;`);
      } else {
        const inputFields = renderedFields(files, endpoint.handlerModule ?? endpoint.module, endpoint.body, new Set(), false, typeLines, `${base}Input`, new Set(), true);
        typeLines.push(`export interface ${base}Input extends JsonObject {`);
        writeFields(typeLines, inputFields);
        typeLines.push("}");
      }
    }
    if (hasQuery) {
      typeLines.push(`/** Backend query type: ${endpoint.query}. */`);
      if (reviewed?.query) {
        typeLines.push(`export type ${base}Query = ${reviewed.query};`);
      } else if (dynamicProfileList) {
        typeLines.push(`export interface ${base}Query extends importProfileListQuery {}`);
      } else {
        typeLines.push(`export interface ${base}Query extends QueryParams {`);
        writeFields(typeLines, renderedFields(files, endpoint.handlerModule ?? endpoint.module, endpoint.query, new Set(), true));
        typeLines.push("}");
      }
    }
    typeLines.push(`/** Backend response type: ${endpoint.response ?? endpoint.responseEnvelope ?? "handler-defined response"}. */`);
    if (reviewed?.dataAlias) typeLines.push(`export type ${base}ResponseData = ${reviewed.dataAlias};`);
    if (reviewed?.response) {
      typeLines.push(`export type ${base}Response = ${reviewed.response};`);
    } else if (binaryDownload) {
      typeLines.push(`export type ${base}Response = ArrayBuffer | Uint8Array;`);
    } else if (responseOverride) {
      typeLines.push(`export type ${base}Response = import("./types.js").${responseOverride};`);
    } else if (endpoint.responseEnvelope === "no-content" || endpoint.responseEnvelope === "redirect") {
      typeLines.push(`export type ${base}Response = void;`);
    } else {
      const dataType = responseDataType(typeLines, files, endpoint.handlerModule ?? endpoint.module, endpoint.response, `${base}Response`);
      const metaType = endpoint.responseMeta
        ? responseDataType(typeLines, files, endpoint.handlerModule ?? endpoint.module, endpoint.responseMeta, `${base}Meta`)
        : null;
      if (endpoint.responseEnvelope === "raw") {
        typeLines.push(`export type ${base}Response = ${dataType};`);
      } else if (service === "crm") {
        typeLines.push(`export type ${base}Response = import("./types.js").CrmApiResponse<${dataType}>;`);
      } else {
        typeLines.push(`export interface ${base}Response extends ApiEnvelope<${dataType}> {`);
        if (metaType) typeLines.push(`  meta: ${metaType};`);
        typeLines.push("}");
      }
    }
    typeLines.push("");

    if (reviewed?.websocket) {
      const roomSocket = reviewed.websocket === "room";
      const ticketType = roomSocket ? 'import("./types.js").JoinTicket' : 'import("./contracts.types.js").KheradgahConnectionTicket';
      const optionsType = roomSocket ? 'import("./contracts.types.js").StateRoomRealtimeOptions' : 'import("./contracts.types.js").KheradgahRealtimeOptions';
      operationLines.push("  /**", `   * ${reviewed.purpose}`, `   * Calls \`${endpoint.method} ${endpoint.path}\` as a WebSocket upgrade.`,
        roomSocket ? "   * @param ticket Scoped ticket from the authenticated room join endpoint." : "   * @param ticket One-use connection ticket from the authenticated match connection endpoint.",
        "   * @param options Injectable WebSocket constructor and AbortSignal; cancellation closes the socket.",
        roomSocket ? "   * @returns The connected StateRealtimeClient, with typed ServerEvent subscriptions." : "   * @returns The connected WebSocket; messages use KheradgahServerFrame, not an Axios response.",
        `   * @throws Error when WebSocket is unavailable, the ticket origin differs, or the connection fails; required permission: ${reviewed.auth}.`,
        "   */", `  ${methodName}(ticket: ${ticketType}, options?: ${optionsType}) {`,
        `    return ${roomSocket ? "openRoomRealtime" : "openMatchRealtime"}(this.client, ticket, options);`, "  }");
      continue;
    }
    const args = ids.map(id => `${camel(id)}: ${reviewed?.pathTypes?.[id] ?? "Identifier"}`);
    if (endpoint.method === "ANY") args.push('method: import("@faiber/sdk-core").HttpRequestMethod');
    if (hasInput && !optionalChatUpload) args.push(`data: T.${base}Input`);
    if (hasQuery) args.push(`params${reviewed?.requiredQuery ? "" : "?"}: T.${base}Query`);
    if (reviewed?.idempotencyKey) args.push("idempotencyKey: string");
    if (reviewed?.membershipRevision) args.push("membershipRevision: string");
    args.push(`options?: RequestOptions${optionalChatUpload ? "<T.AttachmentUploadBody>" : endpoint.formUrlEncoded ? "<URLSearchParams>" : hasInput ? `<T.${base}Input>` : ""}`);
    if (optionalChatUpload) args.push("data?: T.AttachmentUploadBody");
    const permissions = reviewed?.auth ?? (endpoint.permissions.length ? endpoint.permissions.join(", ") : endpoint.path.startsWith("/internal/") || endpoint.path.startsWith("/api/v1/internal/") ? "trusted backend service credential and tenant scope; not a public browser endpoint" : "session-derived or public bootstrap route");
    operationLines.push("  /**");
    operationLines.push(`   * ${reviewed?.purpose ?? `Performs the ${operationPurpose(endpoint)} operation for the ${endpoint.module.replace(/_/g, " ")} capability.`}`);
    operationLines.push(`   * Calls \`${endpoint.method} ${endpoint.path}\` through the shared IDP-aware Faiber client.`);
    if (dynamicProfileList) operationLines.push("   * Supports live core/property/trusted-event filters, repeated date ranges and sorting before pagination; invalid clauses return HTTP 400.");
    for (const id of ids) operationLines.push(`   * @param ${camel(id)} Backend path identifier \`${id}\`.`);
    if (endpoint.method === "ANY") operationLines.push("   * @param method HTTP method accepted by the mounted ANY handler; CONNECT requires an explicit tunnel-capable Axios adapter. The SDK never sends an ANY verb.");
    if (reviewed?.membershipRevision) operationLines.push("   * @param membershipRevision Exact opaque revision from the reviewed membership snapshot; stale revisions return 409 without automatic refetch.");
    if (reviewed?.idempotencyKey) operationLines.push("   * @param idempotencyKey Stable printable ASCII key (1–128 characters, without spaces); reuse for identical retries.");
    if (hasInput) operationLines.push(`   * @param data Typed ${endpoint.multipart ? "multipart form" : endpoint.binary ? "binary byte stream" : endpoint.formUrlEncoded ? "URL-encoded form" : "JSON request body"}.`);
    if (hasQuery) operationLines.push("   * @param params Typed query parameters; omitted members retain backend defaults.");
    operationLines.push("   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.");
    operationLines.push("   * @returns The complete Axios response, including the typed handler payload, status, and headers.");
    operationLines.push(`   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: ${permissions}.`);
    operationLines.push("   */");
    operationLines.push(`  ${methodName}(${args.join(", ")}) {`);
    if (reviewed?.membershipRevision) operationLines.push('    options = membershipRevisionOptions(membershipRevision, options);');
    if (endpoint.method === "ANY") {
      operationLines.push('    if (!["GET","POST","PUT","PATCH","DELETE","HEAD","OPTIONS","TRACE","CONNECT"].includes(method)) throw new TypeError("Invalid HTTP method");');
      operationLines.push('    if (method === "CONNECT" && !options?.adapter) throw new TypeError("CONNECT requires an explicit tunnel-capable Axios adapter");');
    }
    if (reviewed?.idempotencyKey) {
      operationLines.push('    if (!/^[\\x21-\\x7e]{1,128}$/.test(idempotencyKey)) throw new TypeError("Idempotency-Key must be 1–128 printable ASCII characters without spaces");');
      operationLines.push('    const headers = new AxiosHeaders(options?.headers as RawAxiosHeaders | AxiosHeaders | undefined);');
      operationLines.push('    headers.set("Idempotency-Key", idempotencyKey);');
    }
    const requestData = endpoint.formUrlEncoded ? "urlEncoded(data)" : reviewed?.pathFields
      ? `{ ...data, ${Object.entries(reviewed.pathFields).map(([field, arg]) => `${JSON.stringify(field)}: String(${arg})`).join(", ")} }` : "data";
    if (optionalChatUpload) {
      operationLines.push(`    return this.client.request<T.${base}Response, T.AttachmentUploadBody>({ ...options, method: "POST", url: ${escapedPath(endpoint.path)}, ...(data === undefined ? {} : { data, headers: { ...options?.headers, "Content-Type": "application/octet-stream" } }) });`);
    } else operationLines.push(`    return this.client.request<T.${base}Response${hasInput ? `, ${endpoint.formUrlEncoded ? "URLSearchParams" : `T.${base}Input`}` : ""}>({ ${reviewed?.timeout ? `timeout: ${reviewed.timeout}, ` : ""}...options, method: ${endpoint.method === "ANY" ? "method" : `"${endpoint.method}"`}, url: ${escapedPath(endpoint.path,reviewed)}${reviewed?.idempotencyKey ? ", headers" : ""}${hasInput ? `, data: ${requestData}` : ""}${hasQuery ? ", params" : ""}${reviewed?.textResponse ? ', responseType: "text"' : binaryDownload ? ', responseType: "arraybuffer"' : endpoint.responseEnvelope === "stream" ? ', responseType: "stream"' : ""}${reviewed?.fetchStream ? ', adapter: options?.adapter ?? "fetch"' : ""}${endpoint.formUrlEncoded ? ', headers: { ...options?.headers, "Content-Type": "application/x-www-form-urlencoded" }' : endpoint.binary ? `, headers: { "Content-Type": ${reviewed?.binaryContentType === "blob" ? '(typeof Blob !== "undefined" && data instanceof Blob && data.type ? data.type : "application/octet-stream")' : '"application/octet-stream"'}, ...options?.headers }` : reviewed?.jsonBody ? ', headers: { "Content-Type": "application/json", ...options?.headers }' : ""} });`);
    operationLines.push("  }");
  }
  operationLines.push("}", "");
  await emitGenerated(join(root, "packages", service, "src", "operations.types.ts"), `${typeLines.join("\n").trimEnd()}\n`);
  await emitGenerated(join(root, "packages", service, "src", "operations.ts"), `${operationLines.join("\n").trimEnd()}\n`);
  const indexPath = join(root, "packages", service, "src", service === "state" ? "api.ts" : "index.ts");
  let index = await readFile(indexPath, "utf8");
  const operationsClass = `${pascal(service)}Operations`;
  if (!index.includes(`from "./operations.js"`)) {
    const importEnd = index.lastIndexOf("\n", index.indexOf("export class "));
    index = `${index.slice(0, importEnd + 1)}import { ${operationsClass} } from "./operations.js";\n${index.slice(importEnd + 1)}`;
  }
  if (!index.includes("readonly operations =")) {
    index = index.replace(/(export class \w+ extends ServiceApi \{\n)/, `$1    readonly operations = new ${operationsClass}(this.client);\n`);
  }
  if (service !== "state") {
    for (const exportLine of ['export * from "./operations.js";','export * from "./operations.types.js";']) {
      if (!index.includes(exportLine)) index = index.trimEnd()+"\n"+exportLine+"\n";
    }
  }
  await emitGenerated(indexPath, index);
  console.log(service+": "+(checkGenerated?"compared":"generated")+" "+endpoints.length+" operations");
}

if (staleGenerated.length) {
  throw new Error("Generated SDK outputs are stale; regenerate from the reviewed source lock:\n"+staleGenerated.join("\n"));
}
