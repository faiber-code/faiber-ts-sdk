import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";
function wildcardPath(path: Identifier): string {
  const parts = String(path).split("/");
  if (parts.some(part => !part || part === "." || part === ".." || /[%?#\\]/.test(part))) throw new TypeError("Wildcard paths require nonempty raw segments without dot traversal, percent escapes, query, fragment or backslash");
  return parts.map(part => encodeURIComponent(part)).join("/");
}
const registeredApiPaths = ["^/api/v1/activities$","^/api/v1/activities/with-reminder$","^/api/v1/automation/jobs$","^/api/v1/automation/webhooks$","^/api/v1/boards/[^/]+/[^/]+$","^/api/v1/campaigns$","^/api/v1/companies$","^/api/v1/companies/[^/]+$","^/api/v1/contacts$","^/api/v1/contacts/[^/]+$","^/api/v1/context$","^/api/v1/deals$","^/api/v1/deals/[^/]+$","^/api/v1/deals/[^/]+/assignment$","^/api/v1/deals/[^/]+/stage$","^/api/v1/integration/office/leads/find$","^/api/v1/leads$","^/api/v1/leads/[^/]+$","^/api/v1/leads/[^/]+/assignment$","^/api/v1/leads/[^/]+/history$","^/api/v1/leads/[^/]+/reminders$","^/api/v1/leads/[^/]+/sos$","^/api/v1/leads/[^/]+/stage$","^/api/v1/leads/light$","^/api/v1/pipelines$","^/api/v1/pipelines/[^/]+$","^/api/v1/reports/[^/]+$","^/api/v1/reports/[^/]+/agentic$","^/api/v1/reports/catalog$","^/api/v1/reports/overview$","^/api/v1/reports/refresh$","^/api/v1/sos$","^/api/v1/sources$","^/api/v1/stats/daily$","^/api/v1/stats/lead$","^/api/v1/tasks$","^/api/v1/tasks/[^/]+$","^/api/v1/tasks/[^/]+/status$","^/api/v1/teams$","^/api/v1/teams/[^/]+$","^/api/v1/teams/[^/]+/members$","^/api/v1/teams/[^/]+/members/[^/]+$","^/api/v1/workflow$","^/api/v1/workflow-node$","^/api/v1/workflow-node/[^/]+$","^/api/v1/workflow/[^/]+$","^/api/v1/workflows$","^/api/v1/workflows/[^/]+$","^/api/v1/workflows/[^/]+/assignments$","^/api/v1/workflows/[^/]+/assignments/[^/]+$","^/api/v1/workflows/[^/]+/nodes$","^/api/v1/workflows/[^/]+/nodes/[^/]+$","^/api/v1/workflows/member-based$","^/api/v1/worklog$","^/api/v1/workspace/settings$"].map(pattern => new RegExp(pattern));
function unregisteredApiPath(path: Identifier): string {
  const encoded = wildcardPath(path);
  if (registeredApiPaths.some(pattern => pattern.test(`/api/${encoded}`))) throw new TypeError("Use the named CRM operation for registered API paths");
  return encoded;
}

export class CrmOperations extends ServiceApi {
  /**
   * Read process liveness and package version in the legacy status/message/data envelope; no dependency probe.
   * Calls `GET /` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler permission check; deployment/gateway authority must be independently verified.
   */
  routerStatusRouteGet(options?: RequestOptions) {
    return this.client.request<T.RouterStatusRouteGetResponse>({ ...options, method: "GET", url: `/` });
  }
  /**
   * Reach the legacy API not-found boundary with the chosen method. The handler returns structured 404; HEAD has no body and production CORS answers OPTIONS with empty 200. Axios rejects 404 by default; intentional diagnostics should check empty bodies. Registered paths are rejected locally by wildcard diagnostics. Does not mutate CRM records.
   * Calls `ANY /api` through the shared IDP-aware Faiber client.
   * @param method HTTP method accepted by the mounted ANY handler; CONNECT requires an explicit tunnel-capable Axios adapter. The SDK never sends an ANY verb.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler permission check; deployment/gateway authority must be independently verified.
   */
  routerApiNotFoundAny(method: import("@faiber/sdk-core").HttpRequestMethod, options?: RequestOptions) {
    if (!["GET","POST","PUT","PATCH","DELETE","HEAD","OPTIONS","TRACE","CONNECT"].includes(method)) throw new TypeError("Invalid HTTP method");
    if (method === "CONNECT" && !options?.adapter) throw new TypeError("CONNECT requires an explicit tunnel-capable Axios adapter");
    return this.client.request<T.RouterApiNotFoundAnyResponse>({ ...options, method: method, url: `/api` });
  }
  /**
   * Reach the legacy API not-found boundary with the chosen method. The handler returns structured 404; HEAD has no body and production CORS answers OPTIONS with empty 200. Axios rejects 404 by default; intentional diagnostics should check empty bodies. Registered paths are rejected locally by wildcard diagnostics. Does not mutate CRM records.
   * Calls `ANY /api/{*path}` through the shared IDP-aware Faiber client.
   * @param path Backend path identifier `*path`.
   * @param method HTTP method accepted by the mounted ANY handler; CONNECT requires an explicit tunnel-capable Axios adapter. The SDK never sends an ANY verb.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler permission check; deployment/gateway authority must be independently verified.
   */
  routerApiPathNotFoundAny(path: string, method: import("@faiber/sdk-core").HttpRequestMethod, options?: RequestOptions) {
    if (!["GET","POST","PUT","PATCH","DELETE","HEAD","OPTIONS","TRACE","CONNECT"].includes(method)) throw new TypeError("Invalid HTTP method");
    if (method === "CONNECT" && !options?.adapter) throw new TypeError("CONNECT requires an explicit tunnel-capable Axios adapter");
    return this.client.request<T.RouterApiPathNotFoundAnyResponse>({ ...options, method: method, url: `/api/${unregisteredApiPath(path)}` });
  }
  /**
   * List workspace activities ordered by occurred_at DESC,id DESC, with id < cursor; enrich nullable owner profiles. Only cursor/limit are consumed. Limit defaults 50, clamped 1..100.
   * Calls `GET /api/v1/activities` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:activity:read.
   */
  apiActivitiesGet(params?: T.ApiActivitiesGetQuery, options?: RequestOptions) {
    return this.client.request<T.ApiActivitiesGetResponse>({ ...options, method: "GET", url: `/api/v1/activities`, params });
  }
  /**
   * Create note/call/email/meeting/demo/message activity, default occurred_at to now and owner to caller; return nullable owner profile and HTTP 201. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.
   * Calls `POST /api/v1/activities` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:activity:create.
   */
  apiCreateActivityPost(data: T.ApiCreateActivityPostInput, options?: RequestOptions<T.ApiCreateActivityPostInput>) {
    return this.client.request<T.ApiCreateActivityPostResponse, T.ApiCreateActivityPostInput>({ ...options, method: "POST", url: `/api/v1/activities`, data: data });
  }
  /**
   * Create an activity and reminder task atomically under one key. Validate activity type, nonempty reminder title and priority; reminder assignee defaults caller and type defaults reminder. Returns 201 with both records. Authorization accepts either listed create permission. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.
   * Calls `POST /api/v1/activities/with-reminder` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:activity:create, crm:task:create.
   */
  apiCreateActivityWithReminderPost(data: T.ApiCreateActivityWithReminderPostInput, options?: RequestOptions<T.ApiCreateActivityWithReminderPostInput>) {
    return this.client.request<T.ApiCreateActivityWithReminderPostResponse, T.ApiCreateActivityWithReminderPostInput>({ ...options, method: "POST", url: `/api/v1/activities/with-reminder`, data: data });
  }
  /**
   * List workspace durable jobs with cursor/status, ascending UUID; limit defaults 50, clamped 1..100. Result is nullable job-type-specific stored JSON.
   * Calls `GET /api/v1/automation/jobs` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:automation:read.
   */
  apiAutomationJobsGet(params?: T.ApiAutomationJobsGetQuery, options?: RequestOptions) {
    return this.client.request<T.ApiAutomationJobsGetResponse>({ ...options, method: "GET", url: `/api/v1/automation/jobs`, params });
  }
  /**
   * List workspace webhook subscriptions, including inactive entries, with total and failed/dead-letter delivery counts.
   * Calls `GET /api/v1/automation/webhooks` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:automation:read.
   */
  apiAutomationWebhooksGet(options?: RequestOptions) {
    return this.client.request<T.ApiAutomationWebhooksGetResponse>({ ...options, method: "GET", url: `/api/v1/automation/webhooks` });
  }
  /**
   * Read a lead or deal board with concrete pipeline/stage/record columns and summed value. Invalid entity_type 400, missing workspace pipeline 404. At most 1000 recently updated records; board permission does not apply per-record owner filtering.
   * Calls `GET /api/v1/boards/{entity_type}/{pipeline_id}` through the shared IDP-aware Faiber client.
   * @param entityType Backend path identifier `entity_type`.
   * @param pipelineId Backend path identifier `pipeline_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:board:read.
   */
  apiBoardGet(entityType: Identifier, pipelineId: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiBoardGetResponse>({ ...options, method: "GET", url: `/api/v1/boards/${encodeURIComponent(entityType)}/${encodeURIComponent(pipelineId)}` });
  }
  /**
   * List nondeleted workspace marketing campaigns, including inactive statuses, newest first.
   * Calls `GET /api/v1/campaigns` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:marketing:read.
   */
  apiCampaignsGet(options?: RequestOptions) {
    return this.client.request<T.ApiCampaignsGetResponse>({ ...options, method: "GET", url: `/api/v1/campaigns` });
  }
  /**
   * Create a campaign with trimmed nonempty name/slug, status draft/active/paused/completed/archived (default draft), currency default IRR and extensible metadata; return 201. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.
   * Calls `POST /api/v1/campaigns` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:marketing:manage.
   */
  apiCreateCampaignPost(data: T.ApiCreateCampaignPostInput, options?: RequestOptions<T.ApiCreateCampaignPostInput>) {
    return this.client.request<T.ApiCreateCampaignPostResponse, T.ApiCreateCampaignPostInput>({ ...options, method: "POST", url: `/api/v1/campaigns`, data: data });
  }
  /**
   * Search nondeleted workspace companies by name/domain with q and ascending UUID cursor. Only cursor/limit/q are consumed; limit defaults 50, clamped 1..100.
   * Calls `GET /api/v1/companies` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:company:read, crm:company:read_all.
   */
  apiCompaniesGet(params?: T.ApiCompaniesGetQuery, options?: RequestOptions) {
    return this.client.request<T.ApiCompaniesGetResponse>({ ...options, method: "GET", url: `/api/v1/companies`, params });
  }
  /**
   * Create a company with trimmed nonempty name and nonnegative employee count/revenue. Validate selected active team and owner membership; return 201. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.
   * Calls `POST /api/v1/companies` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:company:create.
   */
  apiCreateCompanyPost(data: T.ApiCreateCompanyPostInput, options?: RequestOptions<T.ApiCreateCompanyPostInput>) {
    return this.client.request<T.ApiCreateCompanyPostResponse, T.ApiCreateCompanyPostInput>({ ...options, method: "POST", url: `/api/v1/companies`, data: data });
  }
  /**
   * Read a nondeleted workspace company by UUID; missing or foreign workspace company returns 404.
   * Calls `GET /api/v1/companies/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:company:read, crm:company:read_all.
   */
  apiCompanyGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiCompanyGetResponse>({ ...options, method: "GET", url: `/api/v1/companies/${encodeURIComponent(id)}` });
  }
  /**
   * Patch company fields using required version; validate nonempty name and nonnegative count/revenue. Optional nulls preserve fields; missing company 404 and stale version 409. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.
   * Calls `PATCH /api/v1/companies/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:company:update.
   */
  apiUpdateCompanyPatch(id: Identifier, data: T.ApiUpdateCompanyPatchInput, options?: RequestOptions<T.ApiUpdateCompanyPatchInput>) {
    return this.client.request<T.ApiUpdateCompanyPatchResponse, T.ApiUpdateCompanyPatchInput>({ ...options, method: "PATCH", url: `/api/v1/companies/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Search nondeleted workspace contacts by first/last name/email with q and ascending UUID cursor. Only cursor/limit/q are consumed; limit defaults 50, clamped 1..100.
   * Calls `GET /api/v1/contacts` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:contact:read, crm:contact:read_all.
   */
  apiContactsGet(params?: T.ApiContactsGetQuery, options?: RequestOptions) {
    return this.client.request<T.ApiContactsGetResponse>({ ...options, method: "GET", url: `/api/v1/contacts`, params });
  }
  /**
   * Create a contact with trimmed nonempty first_name and optional profile/consent/custom data; validate selected active team and owner membership. Returns 201. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.
   * Calls `POST /api/v1/contacts` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:contact:create.
   */
  apiCreateContactPost(data: T.ApiCreateContactPostInput, options?: RequestOptions<T.ApiCreateContactPostInput>) {
    return this.client.request<T.ApiCreateContactPostResponse, T.ApiCreateContactPostInput>({ ...options, method: "POST", url: `/api/v1/contacts`, data: data });
  }
  /**
   * Read a nondeleted workspace contact by UUID; missing or foreign workspace contact returns 404.
   * Calls `GET /api/v1/contacts/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:contact:read, crm:contact:read_all.
   */
  apiContactGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiContactGetResponse>({ ...options, method: "GET", url: `/api/v1/contacts/${encodeURIComponent(id)}` });
  }
  /**
   * Patch contact with required version; validate nonempty first_name and active/inactive/do_not_contact lifecycle status. Optional nulls preserve fields; missing contact 404, stale version 409. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.
   * Calls `PATCH /api/v1/contacts/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:contact:update.
   */
  apiUpdateContactPatch(id: Identifier, data: T.ApiUpdateContactPatchInput, options?: RequestOptions<T.ApiUpdateContactPatchInput>) {
    return this.client.request<T.ApiUpdateContactPatchResponse, T.ApiUpdateContactPatchInput>({ ...options, method: "PATCH", url: `/api/v1/contacts/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Read the configured CRM workspace, including locale, timezone, currency, AI settings and optimistic version; absent workspace returns 404.
   * Calls `GET /api/v1/context` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:workspace:read.
   */
  apiContextGet(options?: RequestOptions) {
    return this.client.request<T.ApiContextGetResponse>({ ...options, method: "GET", url: `/api/v1/context` });
  }
  /**
   * List bare nondeleted workspace deals with cursor/q/pipeline/stage/status/team/owner filters, ascending UUID. Caller-only unless crm:admin or crm:deal:read_all. Limit defaults 50, clamped 1..100.
   * Calls `GET /api/v1/deals` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:deal:read, crm:deal:read_all, crm:deal:read_own.
   */
  apiDealsGet(params?: T.ApiDealsGetQuery, options?: RequestOptions) {
    return this.client.request<T.ApiDealsGetResponse>({ ...options, method: "GET", url: `/api/v1/deals`, params });
  }
  /**
   * Create a deal with nonempty trimmed name, nonnegative amounts and probability 0..1. Choose active deal stage when omitted, default probability from stage, owner caller and currency IRR. Validate team membership; return 201. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.
   * Calls `POST /api/v1/deals` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:deal:create.
   */
  apiCreateDealPost(data: T.ApiCreateDealPostInput, options?: RequestOptions<T.ApiCreateDealPostInput>) {
    return this.client.request<T.ApiCreateDealPostResponse, T.ApiCreateDealPostInput>({ ...options, method: "POST", url: `/api/v1/deals`, data: data });
  }
  /**
   * Read a nondeleted workspace deal visible to caller; only crm:admin or crm:deal:read_all removes owner filtering. Missing/invisible deals return 404.
   * Calls `GET /api/v1/deals/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:deal:read, crm:deal:read_all, crm:deal:read_own.
   */
  apiDealGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiDealGetResponse>({ ...options, method: "GET", url: `/api/v1/deals/${encodeURIComponent(id)}` });
  }
  /**
   * Patch a deal with required version; validate name, nonnegative amounts and probability 0..1. Optional nulls preserve fields; missing 404, stale version 409. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.
   * Calls `PATCH /api/v1/deals/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:deal:update.
   */
  apiUpdateDealPatch(id: Identifier, data: T.ApiUpdateDealPatchInput, options?: RequestOptions<T.ApiUpdateDealPatchInput>) {
    return this.client.request<T.ApiUpdateDealPatchResponse, T.ApiUpdateDealPatchInput>({ ...options, method: "PATCH", url: `/api/v1/deals/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Replace deal team and owner using required version; omitted or null IDs clear assignments. Validate active team and owner membership when selected, and write assignment activity. Missing 404, validation 422, stale version 409. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.
   * Calls `PATCH /api/v1/deals/{id}/assignment` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:deal:assign.
   */
  apiAssignDealPatch(id: Identifier, data: T.ApiAssignDealPatchInput, options?: RequestOptions<T.ApiAssignDealPatchInput>) {
    return this.client.request<T.ApiAssignDealPatchResponse, T.ApiAssignDealPatchInput>({ ...options, method: "PATCH", url: `/api/v1/deals/${encodeURIComponent(id)}/assignment`, data: data });
  }
  /**
   * Move a deal within its pipeline with required version; active stage required. Lost requires nonempty loss_reason; update status/probability/closed_at and write stage-change activity. Missing 404, validation 422, stale version 409. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.
   * Calls `PATCH /api/v1/deals/{id}/stage` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:deal:move.
   */
  apiMoveDealStagePatch(id: Identifier, data: T.ApiMoveDealStagePatchInput, options?: RequestOptions<T.ApiMoveDealStagePatchInput>) {
    return this.client.request<T.ApiMoveDealStagePatchResponse, T.ApiMoveDealStagePatchInput>({ ...options, method: "PATCH", url: `/api/v1/deals/${encodeURIComponent(id)}/stage`, data: data });
  }
  /**
   * Find a nullable legacy leads-table row by profile_id, foreign_key and comma-separated flags. Empty flags may match a single candidate. Response is legacy status/message/data without meta. This handler has no local authorization or workspace predicate.
   * Calls `GET /api/v1/integration/office/leads/find` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler permission check; deployment/gateway authority must be independently verified.
   */
  apiFindOfficeLeadGet(params: T.ApiFindOfficeLeadGetQuery, options?: RequestOptions) {
    return this.client.request<T.ApiFindOfficeLeadGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/office/leads/find`, params });
  }
  /**
   * List bare nondeleted workspace lead records with UUID cursor and q/pipeline/stage/status/team/owner/statuses/profile/active date filters. statuses is comma-separated. Caller-only unless crm:admin or crm:lead:read_all. Limit defaults 50, clamped 1..100; UUID cursor remains id > cursor even with task_priority/created_at/created_at_desc sorting.
   * Calls `GET /api/v1/leads` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:lead:read, crm:lead:read_all, crm:lead:read_own.
   */
  apiLeadsGet(params?: T.ApiLeadsGetQuery, options?: RequestOptions) {
    return this.client.request<T.ApiLeadsGetResponse>({ ...options, method: "GET", url: `/api/v1/leads`, params });
  }
  /**
   * Create a lead with trimmed title, score 0..100 and nonnegative value; choose an active lead stage when omitted, default owner to caller and currency IRR. Validate active team/member assignment; return a bare Lead with HTTP 201. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.
   * Calls `POST /api/v1/leads` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:lead:create.
   */
  apiCreateLeadPost(data: T.ApiCreateLeadPostInput, options?: RequestOptions<T.ApiCreateLeadPostInput>) {
    return this.client.request<T.ApiCreateLeadPostResponse, T.ApiCreateLeadPostInput>({ ...options, method: "POST", url: `/api/v1/leads`, data: data });
  }
  /**
   * Read a nondeleted workspace lead visible to the caller and enrich a nullable remote profile using column or legacy custom_data.profile_id; missing/invisible leads return 404.
   * Calls `GET /api/v1/leads/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:lead:read, crm:lead:read_all, crm:lead:read_own.
   */
  apiLeadGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiLeadGetResponse>({ ...options, method: "GET", url: `/api/v1/leads/${encodeURIComponent(id)}` });
  }
  /**
   * Patch a bare lead with required version; validate nonempty title, score 0..100, nonnegative value and new/working/qualified/disqualified/converted status. Optional nulls preserve fields; missing 404, stale version 409. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.
   * Calls `PATCH /api/v1/leads/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:lead:update.
   */
  apiUpdateLeadPatch(id: Identifier, data: T.ApiUpdateLeadPatchInput, options?: RequestOptions<T.ApiUpdateLeadPatchInput>) {
    return this.client.request<T.ApiUpdateLeadPatchResponse, T.ApiUpdateLeadPatchInput>({ ...options, method: "PATCH", url: `/api/v1/leads/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Replace lead team and owner using required version; omitted or null IDs clear assignments. Validate active team and owner membership when selected, and write assignment activity. Missing 404, validation 422, stale version 409. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.
   * Calls `PATCH /api/v1/leads/{id}/assignment` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:lead:assign.
   */
  apiAssignLeadPatch(id: Identifier, data: T.ApiAssignLeadPatchInput, options?: RequestOptions<T.ApiAssignLeadPatchInput>) {
    return this.client.request<T.ApiAssignLeadPatchResponse, T.ApiAssignLeadPatchInput>({ ...options, method: "PATCH", url: `/api/v1/leads/${encodeURIComponent(id)}/assignment`, data: data });
  }
  /**
   * Merge activities and audit events for a workspace lead, newest first, with nullable actor profiles and extensible event data. Either crm:lead:read or crm:activity:read suffices; this handler does not apply lead ownership filtering.
   * Calls `GET /api/v1/leads/{id}/history` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:lead:read, crm:activity:read.
   */
  apiLeadHistoryGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiLeadHistoryGetResponse>({ ...options, method: "GET", url: `/api/v1/leads/${encodeURIComponent(id)}/history` });
  }
  /**
   * Soft-delete all nondeleted tasks for the workspace lead UUID; return {lead_id,deleted} with a numeric affected count, including zero. No parent check, version or idempotency key is required.
   * Calls `DELETE /api/v1/leads/{id}/reminders` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:task:delete.
   */
  apiDeleteLeadRemindersDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiDeleteLeadRemindersDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/leads/${encodeURIComponent(id)}/reminders` });
  }
  /**
   * Remove an SOS entry and return {id,deleted:true}, where id is the SOS entry UUID, not the lead UUID; absent entry returns 404. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.
   * Calls `DELETE /api/v1/leads/{id}/sos` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:sos:delete.
   */
  apiRemoveLeadFromSosDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiRemoveLeadFromSosDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/leads/${encodeURIComponent(id)}/sos` });
  }
  /**
   * Upsert SOS for a nondeleted workspace lead; existing SOS retains its record identity and creator. Missing lead returns 404. Returns 201. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.
   * Calls `POST /api/v1/leads/{id}/sos` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:sos:create.
   */
  apiAddLeadToSosPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiAddLeadToSosPostResponse>({ ...options, method: "POST", url: `/api/v1/leads/${encodeURIComponent(id)}/sos` });
  }
  /**
   * Move a lead within its pipeline with required version; active stage required. Lost stage disqualifies and records loss_reason; won/activation/recurring slug qualifies. Write stage-change activity; missing 404, invalid stage 422, stale version 409. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.
   * Calls `PATCH /api/v1/leads/{id}/stage` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:lead:move.
   */
  apiMoveLeadStagePatch(id: Identifier, data: T.ApiMoveLeadStagePatchInput, options?: RequestOptions<T.ApiMoveLeadStagePatchInput>) {
    return this.client.request<T.ApiMoveLeadStagePatchResponse, T.ApiMoveLeadStagePatchInput>({ ...options, method: "PATCH", url: `/api/v1/leads/${encodeURIComponent(id)}/stage`, data: data });
  }
  /**
   * Alias of the full lead list with exactly the same filters, ownership restrictions and bare Lead response model; no extra profile enrichment.
   * Calls `GET /api/v1/leads/light` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:lead:read, crm:lead:read_all, crm:lead:read_own (delegates to the full lead-list handler).
   */
  apiLightLeadsGet(params?: T.ApiLightLeadsGetQuery, options?: RequestOptions) {
    return this.client.request<T.ApiLightLeadsGetResponse>({ ...options, method: "GET", url: `/api/v1/leads/light`, params });
  }
  /**
   * List nondeleted workspace workflows with their nondeleted stages; includes inactive entries, ordered by entity type, priority, default flag and name.
   * Calls `GET /api/v1/pipelines` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:pipeline:read.
   */
  apiPipelinesGet(options?: RequestOptions) {
    return this.client.request<T.ApiPipelinesGetResponse>({ ...options, method: "GET", url: `/api/v1/pipelines` });
  }
  /**
   * Patch pipeline fields using required version; negative quota returns 422 and missing/stale version match returns 409. Null fields preserve existing values.
   * Calls `PATCH /api/v1/pipelines/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:pipeline:update.
   */
  apiUpdatePipelinePatch(id: Identifier, data: T.ApiUpdatePipelinePatchInput, options?: RequestOptions<T.ApiUpdatePipelinePatchInput>) {
    return this.client.request<T.ApiUpdatePipelinePatchResponse, T.ApiUpdatePipelinePatchInput>({ ...options, method: "PATCH", url: `/api/v1/pipelines/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Read a workspace report run by UUID, including nullable deterministic summary, AI result/error and completion timestamp; missing or foreign run returns 404.
   * Calls `GET /api/v1/reports/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:report:read.
   */
  apiReportRunGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiReportRunGetResponse>({ ...options, method: "GET", url: `/api/v1/reports/${encodeURIComponent(id)}` });
  }
  /**
   * Queue report insight for a ready/ready_without_ai report, charge to configured project owner only when execution starts. Disabled AI or missing owner returns 422; missing ready run 404. Return queued job/project-owner UUIDs with HTTP 202. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.
   * Calls `POST /api/v1/reports/{id}/agentic` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:agent:run.
   */
  apiRequestAgenticInsightPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiRequestAgenticInsightPostResponse>({ ...options, method: "POST", url: `/api/v1/reports/${encodeURIComponent(id)}/agentic` });
  }
  /**
   * Read workspace report definitions and global metric definitions as concrete reports/metrics arrays, ordered by report name/UUID and metric key.
   * Calls `GET /api/v1/reports/catalog` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:report:read.
   */
  apiReportCatalogGet(options?: RequestOptions) {
    return this.client.request<T.ApiReportCatalogGetResponse>({ ...options, method: "GET", url: `/api/v1/reports/catalog` });
  }
  /**
   * Calculate provisional metrics and data-quality warnings for period_start/period_end query. Default start is the first UTC day of end month and default end now; financial totals depend on ingested actuals.
   * Calls `GET /api/v1/reports/overview` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:report:read.
   */
  apiOverviewGet(params?: T.ApiOverviewGetQuery, options?: RequestOptions) {
    return this.client.request<T.ApiOverviewGetResponse>({ ...options, method: "GET", url: `/api/v1/reports/overview`, params });
  }
  /**
   * Calculate and persist certified metric snapshots/report run; period bounds are query parameters and no JSON body is read. Returns 201 with ready status, overview and agentic_started:false. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.
   * Calls `POST /api/v1/reports/refresh` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:report:refresh.
   */
  apiRefreshReportsPost(params?: T.ApiRefreshReportsPostQuery, options?: RequestOptions) {
    return this.client.request<T.ApiRefreshReportsPostResponse>({ ...options, method: "POST", url: `/api/v1/reports/refresh`, params });
  }
  /**
   * List SOS entries whose leads are nondeleted in this workspace, newest first; returns SOS records rather than enriched lead objects.
   * Calls `GET /api/v1/sos` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:sos:read.
   */
  apiListSosLeadsGet(options?: RequestOptions) {
    return this.client.request<T.ApiListSosLeadsGetResponse>({ ...options, method: "GET", url: `/api/v1/sos` });
  }
  /**
   * List all workspace marketing sources, including inactive entries, ordered by active flag then name and UUID.
   * Calls `GET /api/v1/sources` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:marketing:read.
   */
  apiSourcesGet(options?: RequestOptions) {
    return this.client.request<T.ApiSourcesGetResponse>({ ...options, method: "GET", url: `/api/v1/sources` });
  }
  /**
   * Create a marketing source with trimmed nonempty name/slug and channel default other; return HTTP 201. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.
   * Calls `POST /api/v1/sources` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:marketing:manage.
   */
  apiCreateSourcePost(data: T.ApiCreateSourcePostInput, options?: RequestOptions<T.ApiCreateSourcePostInput>) {
    return this.client.request<T.ApiCreateSourcePostResponse, T.ApiCreateSourcePostInput>({ ...options, method: "POST", url: `/api/v1/sources`, data: data });
  }
  /**
   * Calculate caller-assigned workflow daily quotas from backlog and priority, completed-today counts and extra work in UTC. Default total allocation limit is 50; no assigned/actionable workflows returns empty totals and all_tasks_done:true.
   * Calls `GET /api/v1/stats/daily` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:stats:read, crm:stats:read_own.
   */
  apiDailyStatsGet(options?: RequestOptions) {
    return this.client.request<T.ApiDailyStatsGetResponse>({ ...options, method: "GET", url: `/api/v1/stats/daily` });
  }
  /**
   * Aggregate total/active/inactive leads for caller-assigned nondeleted lead workflows; active status uses custom_data.is_active_status, default true.
   * Calls `GET /api/v1/stats/lead` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:stats:read, crm:stats:read_all, crm:stats:read_own.
   */
  apiLeadStatsGet(options?: RequestOptions) {
    return this.client.request<T.ApiLeadStatsGetResponse>({ ...options, method: "GET", url: `/api/v1/stats/lead` });
  }
  /**
   * List nondeleted task rows by ascending UUID; filters cursor/status/profile_id and due_at via active_from/active_to. Caller-only unless crm:admin or crm:task:read_all. Limit defaults 50, clamped 1..100.
   * Calls `GET /api/v1/tasks` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:task:read, crm:task:read_all, crm:task:read_own.
   */
  apiTasksGet(params?: T.ApiTasksGetQuery, options?: RequestOptions) {
    return this.client.request<T.ApiTasksGetResponse>({ ...options, method: "GET", url: `/api/v1/tasks`, params });
  }
  /**
   * Create a task with nonempty trimmed title, priority low/normal/high/urgent (default normal), task_type default follow_up and assignee default caller; return 201. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.
   * Calls `POST /api/v1/tasks` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:task:create.
   */
  apiCreateTaskPost(data: T.ApiCreateTaskPostInput, options?: RequestOptions<T.ApiCreateTaskPostInput>) {
    return this.client.request<T.ApiCreateTaskPostResponse, T.ApiCreateTaskPostInput>({ ...options, method: "POST", url: `/api/v1/tasks`, data: data });
  }
  /**
   * Soft-delete a nondeleted workspace task and return {id,deleted:true}; no version body is accepted, and absent task returns 404. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.
   * Calls `DELETE /api/v1/tasks/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:task:delete.
   */
  apiDeleteTaskDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiDeleteTaskDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/tasks/${encodeURIComponent(id)}` });
  }
  /**
   * Set open/in_progress/completed/cancelled with required version; completed sets completed_at and other statuses clear it. Missing task 404; stale version 409. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.
   * Calls `PATCH /api/v1/tasks/{id}/status` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:task:update.
   */
  apiUpdateTaskStatusPatch(id: Identifier, data: T.ApiUpdateTaskStatusPatchInput, options?: RequestOptions<T.ApiUpdateTaskStatusPatchInput>) {
    return this.client.request<T.ApiUpdateTaskStatusPatchResponse, T.ApiUpdateTaskStatusPatchInput>({ ...options, method: "PATCH", url: `/api/v1/tasks/${encodeURIComponent(id)}/status`, data: data });
  }
  /**
   * List nondeleted workspace teams with active member counts, ordered by name and UUID; includes inactive teams.
   * Calls `GET /api/v1/teams` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:team:read.
   */
  apiTeamsGet(options?: RequestOptions) {
    return this.client.request<T.ApiTeamsGetResponse>({ ...options, method: "GET", url: `/api/v1/teams` });
  }
  /**
   * Create a trimmed nonempty team name with optional description/manager; return the team and zero member count with HTTP 201. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.
   * Calls `POST /api/v1/teams` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:team:create.
   */
  apiCreateTeamPost(data: T.ApiCreateTeamPostInput, options?: RequestOptions<T.ApiCreateTeamPostInput>) {
    return this.client.request<T.ApiCreateTeamPostResponse, T.ApiCreateTeamPostInput>({ ...options, method: "POST", url: `/api/v1/teams`, data: data });
  }
  /**
   * Soft-delete a team with required optimistic version; deactivate members, detach team references and remove workflow assignments transactionally. Missing team returns 404 and version conflict 409. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.
   * Calls `DELETE /api/v1/teams/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:team:delete.
   */
  apiDeleteTeamDelete(id: Identifier, data: T.ApiDeleteTeamDeleteInput, options?: RequestOptions<T.ApiDeleteTeamDeleteInput>) {
    return this.client.request<T.ApiDeleteTeamDeleteResponse, T.ApiDeleteTeamDeleteInput>({ ...options, method: "DELETE", url: `/api/v1/teams/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Read a nondeleted workspace team with all membership rows, including inactive members; absent team returns 404.
   * Calls `GET /api/v1/teams/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:team:read.
   */
  apiTeamGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiTeamGetResponse>({ ...options, method: "GET", url: `/api/v1/teams/${encodeURIComponent(id)}` });
  }
  /**
   * Upsert/reactivate a team user membership with optional title and capacity default 1 in 0..100; missing nondeleted team returns 404. Returns 201. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.
   * Calls `POST /api/v1/teams/{id}/members` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:team:manage_members.
   */
  apiAddTeamMemberPost(id: Identifier, data: T.ApiAddTeamMemberPostInput, options?: RequestOptions<T.ApiAddTeamMemberPostInput>) {
    return this.client.request<T.ApiAddTeamMemberPostResponse, T.ApiAddTeamMemberPostInput>({ ...options, method: "POST", url: `/api/v1/teams/${encodeURIComponent(id)}/members`, data: data });
  }
  /**
   * Deactivate an active membership identified by member UUID under the team; return the updated membership, or 404 if inactive/missing. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.
   * Calls `DELETE /api/v1/teams/{team_id}/members/{member_id}` through the shared IDP-aware Faiber client.
   * @param teamId Backend path identifier `team_id`.
   * @param memberId Backend path identifier `member_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:team:manage_members.
   */
  apiRemoveTeamMemberDelete(teamId: Identifier, memberId: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiRemoveTeamMemberDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/teams/${encodeURIComponent(teamId)}/members/${encodeURIComponent(memberId)}` });
  }
  /**
   * List nondeleted workspace workflows, including inactive entries. Only sort is consumed from ListQuery; comma-separated entity columns support a - prefix and priority is the final ordering.
   * Calls `GET /api/v1/workflow` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of workflow:read, workflow:read_all, workflow:read_own.
   */
  apiListWorkflowsRouteGetApiV1Workflow(params?: T.ApiListWorkflowsRouteGetApiV1WorkflowQuery, options?: RequestOptions) {
    return this.client.request<T.ApiListWorkflowsRouteGetApiV1WorkflowResponse>({ ...options, method: "GET", url: `/api/v1/workflow`, params });
  }
  /**
   * Create a workflow with name/slug, required acquire_flags and priority. Defaults entity_type:lead, is_active:true and zero quota; normalize/deduplicate flags and require unique action keys/forms. Returns 201.
   * Calls `POST /api/v1/workflow` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of workflow:create.
   */
  apiCreateWorkflowRoutePostApiV1Workflow(data: T.ApiCreateWorkflowRoutePostApiV1WorkflowInput, options?: RequestOptions<T.ApiCreateWorkflowRoutePostApiV1WorkflowInput>) {
    return this.client.request<T.ApiCreateWorkflowRoutePostApiV1WorkflowResponse, T.ApiCreateWorkflowRoutePostApiV1WorkflowInput>({ ...options, method: "POST", url: `/api/v1/workflow`, data: data });
  }
  /**
   * List nondeleted nodes whose parent workflows are nondeleted; includes inactive nodes. The repository has no workspace predicate on this compatibility listing. Only sort is consumed.
   * Calls `GET /api/v1/workflow-node` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of workflow_node:read, workflow_node:read_all, workflow_node:read_own.
   */
  apiListWorkflowNodesCompatRouteGet(params?: T.ApiListWorkflowNodesCompatRouteGetQuery, options?: RequestOptions) {
    return this.client.request<T.ApiListWorkflowNodesCompatRouteGetResponse>({ ...options, method: "GET", url: `/api/v1/workflow-node`, params });
  }
  /**
   * Soft-delete a node after checking its workspace parent; this singular compatibility route returns data:true, not a deletion object.
   * Calls `DELETE /api/v1/workflow-node/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of workflow_node:delete.
   */
  apiDeleteWorkflowNodeCompatRouteDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiDeleteWorkflowNodeCompatRouteDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/workflow-node/${encodeURIComponent(id)}` });
  }
  /**
   * Read a nondeleted node by UUID, then require its nondeleted parent in the configured workspace; missing parent or node returns 404.
   * Calls `GET /api/v1/workflow-node/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of workflow_node:read, workflow_node:read_all, workflow_node:read_own.
   */
  apiShowWorkflowNodeCompatRouteGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiShowWorkflowNodeCompatRouteGetResponse>({ ...options, method: "GET", url: `/api/v1/workflow-node/${encodeURIComponent(id)}` });
  }
  /**
   * Resolve a node UUID to its checked workspace parent, then patch it. Explicit null clears sla_minutes/actions; no version parameter is enforced.
   * Calls `PATCH /api/v1/workflow-node/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of workflow_node:update.
   */
  apiUpdateWorkflowNodeCompatRoutePatch(id: Identifier, data: T.ApiUpdateWorkflowNodeCompatRoutePatchInput, options?: RequestOptions<T.ApiUpdateWorkflowNodeCompatRoutePatchInput>) {
    return this.client.request<T.ApiUpdateWorkflowNodeCompatRoutePatchResponse, T.ApiUpdateWorkflowNodeCompatRoutePatchInput>({ ...options, method: "PATCH", url: `/api/v1/workflow-node/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Create a node under the path workflow UUID (the singular route names that parameter id). Validate name/slug, probability 0..1, open/won/lost stage type and nonnegative SLA; defaults drag permissions true. Returns 201.
   * Calls `POST /api/v1/workflow-node/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of workflow_node:create.
   */
  apiCreateWorkflowNodeRoutePostApiV1WorkflowNodeId(id: Identifier, data: T.ApiCreateWorkflowNodeRoutePostApiV1WorkflowNodeIdInput, options?: RequestOptions<T.ApiCreateWorkflowNodeRoutePostApiV1WorkflowNodeIdInput>) {
    return this.client.request<T.ApiCreateWorkflowNodeRoutePostApiV1WorkflowNodeIdResponse, T.ApiCreateWorkflowNodeRoutePostApiV1WorkflowNodeIdInput>({ ...options, method: "POST", url: `/api/v1/workflow-node/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Resolve a node UUID to its checked workspace parent, then patch it. Explicit null clears sla_minutes/actions; no version parameter is enforced.
   * Calls `PUT /api/v1/workflow-node/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of workflow_node:update.
   */
  apiUpdateWorkflowNodeCompatRoutePut(id: Identifier, data: T.ApiUpdateWorkflowNodeCompatRoutePutInput, options?: RequestOptions<T.ApiUpdateWorkflowNodeCompatRoutePutInput>) {
    return this.client.request<T.ApiUpdateWorkflowNodeCompatRoutePutResponse, T.ApiUpdateWorkflowNodeCompatRoutePutInput>({ ...options, method: "PUT", url: `/api/v1/workflow-node/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Soft-delete a workspace workflow and return {id,deleted:true}; missing or previously deleted workflow returns 404.
   * Calls `DELETE /api/v1/workflow/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of workflow:delete.
   */
  apiDeleteWorkflowRouteDeleteApiV1WorkflowId(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiDeleteWorkflowRouteDeleteApiV1WorkflowIdResponse>({ ...options, method: "DELETE", url: `/api/v1/workflow/${encodeURIComponent(id)}` });
  }
  /**
   * Read one nondeleted workspace workflow by UUID; absent or foreign-workspace IDs return 404.
   * Calls `GET /api/v1/workflow/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of workflow:read, workflow:read_all, workflow:read_own.
   */
  apiShowWorkflowRouteGetApiV1WorkflowId(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiShowWorkflowRouteGetApiV1WorkflowIdResponse>({ ...options, method: "GET", url: `/api/v1/workflow/${encodeURIComponent(id)}` });
  }
  /**
   * Patch a nondeleted workflow. Explicit null clears team_id/actions/hint; null on ordinary optional fields preserves them. Actions null serializes as an empty array in responses. Version is accepted but repository does not enforce optimistic locking.
   * Calls `PATCH /api/v1/workflow/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of workflow:update.
   */
  apiUpdateWorkflowRoutePatchApiV1WorkflowId(id: Identifier, data: T.ApiUpdateWorkflowRoutePatchApiV1WorkflowIdInput, options?: RequestOptions<T.ApiUpdateWorkflowRoutePatchApiV1WorkflowIdInput>) {
    return this.client.request<T.ApiUpdateWorkflowRoutePatchApiV1WorkflowIdResponse, T.ApiUpdateWorkflowRoutePatchApiV1WorkflowIdInput>({ ...options, method: "PATCH", url: `/api/v1/workflow/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Patch a nondeleted workflow. Explicit null clears team_id/actions/hint; null on ordinary optional fields preserves them. Actions null serializes as an empty array in responses. Version is accepted but repository does not enforce optimistic locking.
   * Calls `PUT /api/v1/workflow/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of workflow:update.
   */
  apiUpdateWorkflowRoutePut(id: Identifier, data: T.ApiUpdateWorkflowRoutePutInput, options?: RequestOptions<T.ApiUpdateWorkflowRoutePutInput>) {
    return this.client.request<T.ApiUpdateWorkflowRoutePutResponse, T.ApiUpdateWorkflowRoutePutInput>({ ...options, method: "PUT", url: `/api/v1/workflow/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * List nondeleted workspace workflows, including inactive entries. Only sort is consumed from ListQuery; comma-separated entity columns support a - prefix and priority is the final ordering.
   * Calls `GET /api/v1/workflows` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of workflow:read, workflow:read_all, workflow:read_own.
   */
  apiListWorkflowsRouteGetApiV1Workflows(params?: T.ApiListWorkflowsRouteGetApiV1WorkflowsQuery, options?: RequestOptions) {
    return this.client.request<T.ApiListWorkflowsRouteGetApiV1WorkflowsResponse>({ ...options, method: "GET", url: `/api/v1/workflows`, params });
  }
  /**
   * Create a workflow with name/slug, required acquire_flags and priority. Defaults entity_type:lead, is_active:true and zero quota; normalize/deduplicate flags and require unique action keys/forms. Returns 201.
   * Calls `POST /api/v1/workflows` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of workflow:create.
   */
  apiCreateWorkflowRoutePostApiV1Workflows(data: T.ApiCreateWorkflowRoutePostApiV1WorkflowsInput, options?: RequestOptions<T.ApiCreateWorkflowRoutePostApiV1WorkflowsInput>) {
    return this.client.request<T.ApiCreateWorkflowRoutePostApiV1WorkflowsResponse, T.ApiCreateWorkflowRoutePostApiV1WorkflowsInput>({ ...options, method: "POST", url: `/api/v1/workflows`, data: data });
  }
  /**
   * Soft-delete a workspace workflow and return {id,deleted:true}; missing or previously deleted workflow returns 404.
   * Calls `DELETE /api/v1/workflows/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of workflow:delete.
   */
  apiDeleteWorkflowRouteDeleteApiV1WorkflowsId(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiDeleteWorkflowRouteDeleteApiV1WorkflowsIdResponse>({ ...options, method: "DELETE", url: `/api/v1/workflows/${encodeURIComponent(id)}` });
  }
  /**
   * Read one nondeleted workspace workflow by UUID; absent or foreign-workspace IDs return 404.
   * Calls `GET /api/v1/workflows/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of workflow:read, workflow:read_all, workflow:read_own.
   */
  apiShowWorkflowRouteGetApiV1WorkflowsId(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiShowWorkflowRouteGetApiV1WorkflowsIdResponse>({ ...options, method: "GET", url: `/api/v1/workflows/${encodeURIComponent(id)}` });
  }
  /**
   * Patch a nondeleted workflow. Explicit null clears team_id/actions/hint; null on ordinary optional fields preserves them. Actions null serializes as an empty array in responses. Version is accepted but repository does not enforce optimistic locking.
   * Calls `PATCH /api/v1/workflows/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of workflow:update.
   */
  apiUpdateWorkflowRoutePatchApiV1WorkflowsId(id: Identifier, data: T.ApiUpdateWorkflowRoutePatchApiV1WorkflowsIdInput, options?: RequestOptions<T.ApiUpdateWorkflowRoutePatchApiV1WorkflowsIdInput>) {
    return this.client.request<T.ApiUpdateWorkflowRoutePatchApiV1WorkflowsIdResponse, T.ApiUpdateWorkflowRoutePatchApiV1WorkflowsIdInput>({ ...options, method: "PATCH", url: `/api/v1/workflows/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * List team/user assignments in this workspace for the path workflow UUID, ordered by creation and UUID; does not check parent existence.
   * Calls `GET /api/v1/workflows/{id}/assignments` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:workflow_assignment:read.
   */
  apiListWorkflowAssignmentsGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiListWorkflowAssignmentsGetResponse>({ ...options, method: "GET", url: `/api/v1/workflows/${encodeURIComponent(id)}/assignments` });
  }
  /**
   * Assign exactly one team_id or user_id to a workflow; supplied team must exist and duplicate assignments return 409. Returns 201; parent validity also depends on database constraints. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.
   * Calls `POST /api/v1/workflows/{id}/assignments` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:workflow_assignment:manage.
   */
  apiCreateWorkflowAssignmentPost(id: Identifier, data: T.ApiCreateWorkflowAssignmentPostInput, options?: RequestOptions<T.ApiCreateWorkflowAssignmentPostInput>) {
    return this.client.request<T.ApiCreateWorkflowAssignmentPostResponse, T.ApiCreateWorkflowAssignmentPostInput>({ ...options, method: "POST", url: `/api/v1/workflows/${encodeURIComponent(id)}/assignments`, data: data });
  }
  /**
   * Hard-delete a workflow assignment scoped by workspace, workflow UUID and assignment UUID; return {id,deleted:true}, or 404. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.
   * Calls `DELETE /api/v1/workflows/{workflow_id}/assignments/{assignment_id}` through the shared IDP-aware Faiber client.
   * @param workflowId Backend path identifier `workflow_id`.
   * @param assignmentId Backend path identifier `assignment_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:workflow_assignment:manage.
   */
  apiDeleteWorkflowAssignmentDelete(workflowId: Identifier, assignmentId: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiDeleteWorkflowAssignmentDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/workflows/${encodeURIComponent(workflowId)}/assignments/${encodeURIComponent(assignmentId)}` });
  }
  /**
   * List nondeleted nodes after checking that the parent workflow belongs to this workspace; includes inactive nodes. Only sort is consumed; sort columns precede priority ordering.
   * Calls `GET /api/v1/workflows/{workflow_id}/nodes` through the shared IDP-aware Faiber client.
   * @param workflowId Backend path identifier `workflow_id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of workflow_node:read, workflow_node:read_all, workflow_node:read_own.
   */
  apiListWorkflowNodesRouteGet(workflowId: Identifier, params?: T.ApiListWorkflowNodesRouteGetQuery, options?: RequestOptions) {
    return this.client.request<T.ApiListWorkflowNodesRouteGetResponse>({ ...options, method: "GET", url: `/api/v1/workflows/${encodeURIComponent(workflowId)}/nodes`, params });
  }
  /**
   * Create a node under the path workflow UUID (the singular route names that parameter id). Validate name/slug, probability 0..1, open/won/lost stage type and nonnegative SLA; defaults drag permissions true. Returns 201.
   * Calls `POST /api/v1/workflows/{workflow_id}/nodes` through the shared IDP-aware Faiber client.
   * @param workflowId Backend path identifier `workflow_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of workflow_node:create.
   */
  apiCreateWorkflowNodeRoutePostApiV1WorkflowsWorkflowIdNodes(workflowId: Identifier, data: T.ApiCreateWorkflowNodeRoutePostApiV1WorkflowsWorkflowIdNodesInput, options?: RequestOptions<T.ApiCreateWorkflowNodeRoutePostApiV1WorkflowsWorkflowIdNodesInput>) {
    return this.client.request<T.ApiCreateWorkflowNodeRoutePostApiV1WorkflowsWorkflowIdNodesResponse, T.ApiCreateWorkflowNodeRoutePostApiV1WorkflowsWorkflowIdNodesInput>({ ...options, method: "POST", url: `/api/v1/workflows/${encodeURIComponent(workflowId)}/nodes`, data: data });
  }
  /**
   * Soft-delete a node scoped to its checked workspace parent; return {id,deleted:true}; missing parent or node returns 404.
   * Calls `DELETE /api/v1/workflows/{workflow_id}/nodes/{node_id}` through the shared IDP-aware Faiber client.
   * @param workflowId Backend path identifier `workflow_id`.
   * @param nodeId Backend path identifier `node_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of workflow_node:delete.
   */
  apiDeleteWorkflowNodeRouteDelete(workflowId: Identifier, nodeId: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiDeleteWorkflowNodeRouteDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/workflows/${encodeURIComponent(workflowId)}/nodes/${encodeURIComponent(nodeId)}` });
  }
  /**
   * Read a nondeleted node scoped to a nondeleted workspace parent workflow; missing parent or node returns 404.
   * Calls `GET /api/v1/workflows/{workflow_id}/nodes/{node_id}` through the shared IDP-aware Faiber client.
   * @param workflowId Backend path identifier `workflow_id`.
   * @param nodeId Backend path identifier `node_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of workflow_node:read, workflow_node:read_all, workflow_node:read_own.
   */
  apiShowWorkflowNodeRouteGet(workflowId: Identifier, nodeId: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiShowWorkflowNodeRouteGetResponse>({ ...options, method: "GET", url: `/api/v1/workflows/${encodeURIComponent(workflowId)}/nodes/${encodeURIComponent(nodeId)}` });
  }
  /**
   * Patch a node within its checked workspace parent; explicit null clears sla_minutes/actions and ordinary optional nulls preserve fields. Validate probability, stage type, name/slug and SLA. No version parameter is enforced.
   * Calls `PATCH /api/v1/workflows/{workflow_id}/nodes/{node_id}` through the shared IDP-aware Faiber client.
   * @param workflowId Backend path identifier `workflow_id`.
   * @param nodeId Backend path identifier `node_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of workflow_node:update.
   */
  apiUpdateWorkflowNodeRoutePatch(workflowId: Identifier, nodeId: Identifier, data: T.ApiUpdateWorkflowNodeRoutePatchInput, options?: RequestOptions<T.ApiUpdateWorkflowNodeRoutePatchInput>) {
    return this.client.request<T.ApiUpdateWorkflowNodeRoutePatchResponse, T.ApiUpdateWorkflowNodeRoutePatchInput>({ ...options, method: "PATCH", url: `/api/v1/workflows/${encodeURIComponent(workflowId)}/nodes/${encodeURIComponent(nodeId)}`, data: data });
  }
  /**
   * List nondeleted workflows assigned to the caller directly or through legacy/current team membership, ordered by priority; includes inactive entries.
   * Calls `GET /api/v1/workflows/member-based` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:pipeline:read, workflow:read, workflow:read_own.
   */
  apiMemberWorkflowsGet(options?: RequestOptions) {
    return this.client.request<T.ApiMemberWorkflowsGetResponse>({ ...options, method: "GET", url: `/api/v1/workflows/member-based` });
  }
  /**
   * List nondeleted legacy worklogs; restrict assignee_id to caller unless worklog:read_all or crm:admin. Comma-separated entity sort columns support - prefix; no workspace predicate exists in repository.
   * Calls `GET /api/v1/worklog` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of worklog:read, worklog:read_all, worklog:read_own.
   */
  apiWorklogsGet(params?: T.ApiWorklogsGetQuery, options?: RequestOptions) {
    return this.client.request<T.ApiWorklogsGetResponse>({ ...options, method: "GET", url: `/api/v1/worklog`, params });
  }
  /**
   * Patch workspace settings with required version. AI mode must be off/advisory/approval_required/bounded_auto; ordinary optional nulls preserve values. Missing workspace returns 404; stale version 409. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.
   * Calls `PATCH /api/v1/workspace/settings` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:admin or any one of crm:settings:update.
   */
  apiUpdateWorkspacePatch(data: T.ApiUpdateWorkspacePatchInput, options?: RequestOptions<T.ApiUpdateWorkspacePatchInput>) {
    return this.client.request<T.ApiUpdateWorkspacePatchResponse, T.ApiUpdateWorkspacePatchInput>({ ...options, method: "PATCH", url: `/api/v1/workspace/settings`, data: data });
  }
  /**
   * Read process liveness and package version in the legacy status/message/data envelope; no dependency probe.
   * Calls `GET /health` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler permission check; deployment/gateway authority must be independently verified.
   */
  routerStatusRouteGetHealth(options?: RequestOptions) {
    return this.client.request<T.RouterStatusRouteGetHealthResponse>({ ...options, method: "GET", url: `/health` });
  }
  /**
   * Read process liveness and package version in the legacy status/message/data envelope; no dependency probe.
   * Calls `GET /livez` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler permission check; deployment/gateway authority must be independently verified.
   */
  routerStatusRouteGetLivez(options?: RequestOptions) {
    return this.client.request<T.RouterStatusRouteGetLivezResponse>({ ...options, method: "GET", url: `/livez` });
  }
  /**
   * Probe database and broker readiness; return legacy status/message/data with dependency booleans and HTTP 503 if either dependency is unavailable.
   * Calls `GET /readyz` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler permission check; deployment/gateway authority must be independently verified.
   */
  routerReadinessRouteGet(options?: RequestOptions) {
    return this.client.request<T.RouterReadinessRouteGetResponse>({ ...options, method: "GET", url: `/readyz` });
  }
  /**
   * Read process liveness and package version in the legacy status/message/data envelope; no dependency probe.
   * Calls `GET /up` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler permission check; deployment/gateway authority must be independently verified.
   */
  routerStatusRouteGetUp(options?: RequestOptions) {
    return this.client.request<T.RouterStatusRouteGetUpResponse>({ ...options, method: "GET", url: `/up` });
  }
}
