// Reviewed directly against CRM 77e2e4a7660e007aefef81e27337476c6d748cac; native execution remains separately scoped.
export const crmReviewedOperationContracts = {
  "crm:GET /": {
    "purpose": "Read process liveness and package version in the legacy status/message/data envelope; no dependency probe.",
    "auth": "No local handler permission check; deployment/gateway authority must be independently verified",
    "response": "import(\"./types.js\").CrmHealthResponse"
  },
  "crm:GET /health": {
    "purpose": "Read process liveness and package version in the legacy status/message/data envelope; no dependency probe.",
    "auth": "No local handler permission check; deployment/gateway authority must be independently verified",
    "response": "import(\"./types.js\").CrmHealthResponse"
  },
  "crm:GET /up": {
    "purpose": "Read process liveness and package version in the legacy status/message/data envelope; no dependency probe.",
    "auth": "No local handler permission check; deployment/gateway authority must be independently verified",
    "response": "import(\"./types.js\").CrmHealthResponse"
  },
  "crm:GET /livez": {
    "purpose": "Read process liveness and package version in the legacy status/message/data envelope; no dependency probe.",
    "auth": "No local handler permission check; deployment/gateway authority must be independently verified",
    "response": "import(\"./types.js\").CrmHealthResponse"
  },
  "crm:GET /readyz": {
    "purpose": "Probe database and broker readiness; return legacy status/message/data with dependency booleans and HTTP 503 if either dependency is unavailable.",
    "auth": "No local handler permission check; deployment/gateway authority must be independently verified",
    "response": "import(\"./types.js\").CrmReadinessResponse"
  },
  "crm:GET /api/v1/context": {
    "purpose": "Read the configured CRM workspace, including locale, timezone, currency, AI settings and optimistic version; absent workspace returns 404.",
    "auth": "crm:admin or any one of crm:workspace:read"
  },
  "crm:GET /api/v1/workflow": {
    "purpose": "List nondeleted workspace workflows, including inactive entries. Only sort is consumed from ListQuery; comma-separated entity columns support a - prefix and priority is the final ordering.",
    "auth": "crm:admin or any one of workflow:read, workflow:read_all, workflow:read_own",
    "query": "import(\"./contracts.types.js\").CrmEntitySortQuery"
  },
  "crm:POST /api/v1/workflow": {
    "purpose": "Create a workflow with name/slug, required acquire_flags and priority. Defaults entity_type:lead, is_active:true and zero quota; normalize/deduplicate flags and require unique action keys/forms. Returns 201.",
    "auth": "crm:admin or any one of workflow:create",
    "input": "import(\"./contracts.types.js\").CrmWorkflowCreateInput"
  },
  "crm:GET /api/v1/workflow/{id}": {
    "purpose": "Read one nondeleted workspace workflow by UUID; absent or foreign-workspace IDs return 404.",
    "auth": "crm:admin or any one of workflow:read, workflow:read_all, workflow:read_own"
  },
  "crm:PUT /api/v1/workflow/{id}": {
    "purpose": "Patch a nondeleted workflow. Explicit null clears team_id/actions/hint; null on ordinary optional fields preserves them. Actions null serializes as an empty array in responses. Version is accepted but repository does not enforce optimistic locking.",
    "auth": "crm:admin or any one of workflow:update",
    "input": "import(\"./contracts.types.js\").CrmWorkflowUpdateInput"
  },
  "crm:PATCH /api/v1/workflow/{id}": {
    "purpose": "Patch a nondeleted workflow. Explicit null clears team_id/actions/hint; null on ordinary optional fields preserves them. Actions null serializes as an empty array in responses. Version is accepted but repository does not enforce optimistic locking.",
    "auth": "crm:admin or any one of workflow:update",
    "input": "import(\"./contracts.types.js\").CrmWorkflowUpdateInput"
  },
  "crm:DELETE /api/v1/workflow/{id}": {
    "purpose": "Soft-delete a workspace workflow and return {id,deleted:true}; missing or previously deleted workflow returns 404.",
    "auth": "crm:admin or any one of workflow:delete"
  },
  "crm:GET /api/v1/workflow-node": {
    "purpose": "List nondeleted nodes whose parent workflows are nondeleted; includes inactive nodes. The repository has no workspace predicate on this compatibility listing. Only sort is consumed.",
    "auth": "crm:admin or any one of workflow_node:read, workflow_node:read_all, workflow_node:read_own",
    "query": "import(\"./contracts.types.js\").CrmEntitySortQuery"
  },
  "crm:GET /api/v1/workflow-node/{id}": {
    "purpose": "Read a nondeleted node by UUID, then require its nondeleted parent in the configured workspace; missing parent or node returns 404.",
    "auth": "crm:admin or any one of workflow_node:read, workflow_node:read_all, workflow_node:read_own"
  },
  "crm:POST /api/v1/workflow-node/{id}": {
    "purpose": "Create a node under the path workflow UUID (the singular route names that parameter id). Validate name/slug, probability 0..1, open/won/lost stage type and nonnegative SLA; defaults drag permissions true. Returns 201.",
    "auth": "crm:admin or any one of workflow_node:create",
    "input": "import(\"./contracts.types.js\").CrmWorkflowNodeCreateInput"
  },
  "crm:PUT /api/v1/workflow-node/{id}": {
    "purpose": "Resolve a node UUID to its checked workspace parent, then patch it. Explicit null clears sla_minutes/actions; no version parameter is enforced.",
    "auth": "crm:admin or any one of workflow_node:update",
    "input": "import(\"./contracts.types.js\").CrmWorkflowNodeUpdateInput"
  },
  "crm:PATCH /api/v1/workflow-node/{id}": {
    "purpose": "Resolve a node UUID to its checked workspace parent, then patch it. Explicit null clears sla_minutes/actions; no version parameter is enforced.",
    "auth": "crm:admin or any one of workflow_node:update",
    "input": "import(\"./contracts.types.js\").CrmWorkflowNodeUpdateInput"
  },
  "crm:DELETE /api/v1/workflow-node/{id}": {
    "purpose": "Soft-delete a node after checking its workspace parent; this singular compatibility route returns data:true, not a deletion object.",
    "auth": "crm:admin or any one of workflow_node:delete"
  },
  "crm:GET /api/v1/workflows": {
    "purpose": "List nondeleted workspace workflows, including inactive entries. Only sort is consumed from ListQuery; comma-separated entity columns support a - prefix and priority is the final ordering.",
    "auth": "crm:admin or any one of workflow:read, workflow:read_all, workflow:read_own",
    "query": "import(\"./contracts.types.js\").CrmEntitySortQuery"
  },
  "crm:POST /api/v1/workflows": {
    "purpose": "Create a workflow with name/slug, required acquire_flags and priority. Defaults entity_type:lead, is_active:true and zero quota; normalize/deduplicate flags and require unique action keys/forms. Returns 201.",
    "auth": "crm:admin or any one of workflow:create",
    "input": "import(\"./contracts.types.js\").CrmWorkflowCreateInput"
  },
  "crm:GET /api/v1/workflows/{id}": {
    "purpose": "Read one nondeleted workspace workflow by UUID; absent or foreign-workspace IDs return 404.",
    "auth": "crm:admin or any one of workflow:read, workflow:read_all, workflow:read_own"
  },
  "crm:PATCH /api/v1/workflows/{id}": {
    "purpose": "Patch a nondeleted workflow. Explicit null clears team_id/actions/hint; null on ordinary optional fields preserves them. Actions null serializes as an empty array in responses. Version is accepted but repository does not enforce optimistic locking.",
    "auth": "crm:admin or any one of workflow:update",
    "input": "import(\"./contracts.types.js\").CrmWorkflowUpdateInput"
  },
  "crm:DELETE /api/v1/workflows/{id}": {
    "purpose": "Soft-delete a workspace workflow and return {id,deleted:true}; missing or previously deleted workflow returns 404.",
    "auth": "crm:admin or any one of workflow:delete"
  },
  "crm:GET /api/v1/workflows/{workflow_id}/nodes": {
    "purpose": "List nondeleted nodes after checking that the parent workflow belongs to this workspace; includes inactive nodes. Only sort is consumed; sort columns precede priority ordering.",
    "auth": "crm:admin or any one of workflow_node:read, workflow_node:read_all, workflow_node:read_own",
    "query": "import(\"./contracts.types.js\").CrmEntitySortQuery"
  },
  "crm:POST /api/v1/workflows/{workflow_id}/nodes": {
    "purpose": "Create a node under the path workflow UUID (the singular route names that parameter id). Validate name/slug, probability 0..1, open/won/lost stage type and nonnegative SLA; defaults drag permissions true. Returns 201.",
    "auth": "crm:admin or any one of workflow_node:create",
    "input": "import(\"./contracts.types.js\").CrmWorkflowNodeCreateInput"
  },
  "crm:GET /api/v1/workflows/{workflow_id}/nodes/{node_id}": {
    "purpose": "Read a nondeleted node scoped to a nondeleted workspace parent workflow; missing parent or node returns 404.",
    "auth": "crm:admin or any one of workflow_node:read, workflow_node:read_all, workflow_node:read_own"
  },
  "crm:PATCH /api/v1/workflows/{workflow_id}/nodes/{node_id}": {
    "purpose": "Patch a node within its checked workspace parent; explicit null clears sla_minutes/actions and ordinary optional nulls preserve fields. Validate probability, stage type, name/slug and SLA. No version parameter is enforced.",
    "auth": "crm:admin or any one of workflow_node:update",
    "input": "import(\"./contracts.types.js\").CrmWorkflowNodeUpdateInput"
  },
  "crm:DELETE /api/v1/workflows/{workflow_id}/nodes/{node_id}": {
    "purpose": "Soft-delete a node scoped to its checked workspace parent; return {id,deleted:true}; missing parent or node returns 404.",
    "auth": "crm:admin or any one of workflow_node:delete"
  },
  "crm:GET /api/v1/integration/office/leads/find": {
    "purpose": "Find a nullable legacy leads-table row by profile_id, foreign_key and comma-separated flags. Empty flags may match a single candidate. Response is legacy status/message/data without meta. This handler has no local authorization or workspace predicate.",
    "auth": "No local handler permission check; deployment/gateway authority must be independently verified",
    "response": "import(\"./types.js\").CrmOfficeLeadResponse",
    "query": "import(\"./contracts.types.js\").CrmOfficeLeadQuery",
    "requiredQuery": true
  },
  "crm:GET /api/v1/pipelines": {
    "purpose": "List nondeleted workspace workflows with their nondeleted stages; includes inactive entries, ordered by entity type, priority, default flag and name.",
    "auth": "crm:admin or any one of crm:pipeline:read"
  },
  "crm:PATCH /api/v1/pipelines/{id}": {
    "purpose": "Patch pipeline fields using required version; negative quota returns 422 and missing/stale version match returns 409. Null fields preserve existing values.",
    "auth": "crm:admin or any one of crm:pipeline:update"
  },
  "crm:GET /api/v1/workflows/member-based": {
    "purpose": "List nondeleted workflows assigned to the caller directly or through legacy/current team membership, ordered by priority; includes inactive entries.",
    "auth": "crm:admin or any one of crm:pipeline:read, workflow:read, workflow:read_own"
  },
  "crm:GET /api/v1/stats/daily": {
    "purpose": "Calculate caller-assigned workflow daily quotas from backlog and priority, completed-today counts and extra work in UTC. Default total allocation limit is 50; no assigned/actionable workflows returns empty totals and all_tasks_done:true.",
    "auth": "crm:admin or any one of crm:stats:read, crm:stats:read_own",
    "response": "import(\"./types.js\").CrmDailyStatsResponse"
  },
  "crm:GET /api/v1/stats/lead": {
    "purpose": "Aggregate total/active/inactive leads for caller-assigned nondeleted lead workflows; active status uses custom_data.is_active_status, default true.",
    "auth": "crm:admin or any one of crm:stats:read, crm:stats:read_all, crm:stats:read_own",
    "response": "import(\"./types.js\").CrmLeadStatsResponse"
  },
  "crm:GET /api/v1/teams": {
    "purpose": "List nondeleted workspace teams with active member counts, ordered by name and UUID; includes inactive teams.",
    "auth": "crm:admin or any one of crm:team:read"
  },
  "crm:POST /api/v1/teams": {
    "purpose": "Create a trimmed nonempty team name with optional description/manager; return the team and zero member count with HTTP 201. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.",
    "auth": "crm:admin or any one of crm:team:create"
  },
  "crm:GET /api/v1/teams/{id}": {
    "purpose": "Read a nondeleted workspace team with all membership rows, including inactive members; absent team returns 404.",
    "auth": "crm:admin or any one of crm:team:read"
  },
  "crm:DELETE /api/v1/teams/{id}": {
    "purpose": "Soft-delete a team with required optimistic version; deactivate members, detach team references and remove workflow assignments transactionally. Missing team returns 404 and version conflict 409. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.",
    "auth": "crm:admin or any one of crm:team:delete"
  },
  "crm:POST /api/v1/teams/{id}/members": {
    "purpose": "Upsert/reactivate a team user membership with optional title and capacity default 1 in 0..100; missing nondeleted team returns 404. Returns 201. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.",
    "auth": "crm:admin or any one of crm:team:manage_members"
  },
  "crm:DELETE /api/v1/teams/{team_id}/members/{member_id}": {
    "purpose": "Deactivate an active membership identified by member UUID under the team; return the updated membership, or 404 if inactive/missing. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.",
    "auth": "crm:admin or any one of crm:team:manage_members"
  },
  "crm:GET /api/v1/sos": {
    "purpose": "List SOS entries whose leads are nondeleted in this workspace, newest first; returns SOS records rather than enriched lead objects.",
    "auth": "crm:admin or any one of crm:sos:read"
  },
  "crm:POST /api/v1/leads/{id}/sos": {
    "purpose": "Upsert SOS for a nondeleted workspace lead; existing SOS retains its record identity and creator. Missing lead returns 404. Returns 201. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.",
    "auth": "crm:admin or any one of crm:sos:create"
  },
  "crm:DELETE /api/v1/leads/{id}/sos": {
    "purpose": "Remove an SOS entry and return {id,deleted:true}, where id is the SOS entry UUID, not the lead UUID; absent entry returns 404. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.",
    "auth": "crm:admin or any one of crm:sos:delete"
  },
  "crm:GET /api/v1/workflows/{id}/assignments": {
    "purpose": "List team/user assignments in this workspace for the path workflow UUID, ordered by creation and UUID; does not check parent existence.",
    "auth": "crm:admin or any one of crm:workflow_assignment:read"
  },
  "crm:POST /api/v1/workflows/{id}/assignments": {
    "purpose": "Assign exactly one team_id or user_id to a workflow; supplied team must exist and duplicate assignments return 409. Returns 201; parent validity also depends on database constraints. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.",
    "auth": "crm:admin or any one of crm:workflow_assignment:manage"
  },
  "crm:DELETE /api/v1/workflows/{workflow_id}/assignments/{assignment_id}": {
    "purpose": "Hard-delete a workflow assignment scoped by workspace, workflow UUID and assignment UUID; return {id,deleted:true}, or 404. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.",
    "auth": "crm:admin or any one of crm:workflow_assignment:manage"
  },
  "crm:GET /api/v1/tasks": {
    "purpose": "List nondeleted task rows by ascending UUID; filters cursor/status/profile_id and due_at via active_from/active_to. Caller-only unless crm:admin or crm:task:read_all. Limit defaults 50, clamped 1..100.",
    "auth": "crm:admin or any one of crm:task:read, crm:task:read_all, crm:task:read_own",
    "query": "import(\"./contracts.types.js\").CrmTaskListQuery"
  },
  "crm:POST /api/v1/tasks": {
    "purpose": "Create a task with nonempty trimmed title, priority low/normal/high/urgent (default normal), task_type default follow_up and assignee default caller; return 201. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.",
    "auth": "crm:admin or any one of crm:task:create",
    "input": "import(\"./contracts.types.js\").CrmTaskCreateInput"
  },
  "crm:DELETE /api/v1/tasks/{id}": {
    "purpose": "Soft-delete a nondeleted workspace task and return {id,deleted:true}; no version body is accepted, and absent task returns 404. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.",
    "auth": "crm:admin or any one of crm:task:delete"
  },
  "crm:PATCH /api/v1/tasks/{id}/status": {
    "purpose": "Set open/in_progress/completed/cancelled with required version; completed sets completed_at and other statuses clear it. Missing task 404; stale version 409. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.",
    "auth": "crm:admin or any one of crm:task:update",
    "input": "import(\"./contracts.types.js\").CrmTaskStatusInput"
  },
  "crm:POST /api/v1/activities/with-reminder": {
    "purpose": "Create an activity and reminder task atomically under one key. Validate activity type, nonempty reminder title and priority; reminder assignee defaults caller and type defaults reminder. Returns 201 with both records. Authorization accepts either listed create permission. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.",
    "auth": "crm:admin or any one of crm:activity:create, crm:task:create",
    "input": "import(\"./contracts.types.js\").CrmActivityReminderCreateInput"
  },
  "crm:GET /api/v1/activities": {
    "purpose": "List workspace activities ordered by occurred_at DESC,id DESC, with id < cursor; enrich nullable owner profiles. Only cursor/limit are consumed. Limit defaults 50, clamped 1..100.",
    "auth": "crm:admin or any one of crm:activity:read",
    "query": "import(\"./contracts.types.js\").CrmCursorQuery"
  },
  "crm:POST /api/v1/activities": {
    "purpose": "Create note/call/email/meeting/demo/message activity, default occurred_at to now and owner to caller; return nullable owner profile and HTTP 201. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.",
    "auth": "crm:admin or any one of crm:activity:create",
    "input": "import(\"./contracts.types.js\").CrmActivityCreateInput"
  },
  "crm:GET /api/v1/worklog": {
    "purpose": "List nondeleted legacy worklogs; restrict assignee_id to caller unless worklog:read_all or crm:admin. Comma-separated entity sort columns support - prefix; no workspace predicate exists in repository.",
    "auth": "crm:admin or any one of worklog:read, worklog:read_all, worklog:read_own",
    "query": "import(\"./contracts.types.js\").CrmEntitySortQuery"
  },
  "crm:GET /api/v1/sources": {
    "purpose": "List all workspace marketing sources, including inactive entries, ordered by active flag then name and UUID.",
    "auth": "crm:admin or any one of crm:marketing:read"
  },
  "crm:POST /api/v1/sources": {
    "purpose": "Create a marketing source with trimmed nonempty name/slug and channel default other; return HTTP 201. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.",
    "auth": "crm:admin or any one of crm:marketing:manage"
  },
  "crm:GET /api/v1/campaigns": {
    "purpose": "List nondeleted workspace marketing campaigns, including inactive statuses, newest first.",
    "auth": "crm:admin or any one of crm:marketing:read"
  },
  "crm:POST /api/v1/campaigns": {
    "purpose": "Create a campaign with trimmed nonempty name/slug, status draft/active/paused/completed/archived (default draft), currency default IRR and extensible metadata; return 201. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.",
    "auth": "crm:admin or any one of crm:marketing:manage",
    "input": "import(\"./contracts.types.js\").CrmCampaignCreateInput"
  },
  "crm:PATCH /api/v1/workspace/settings": {
    "purpose": "Patch workspace settings with required version. AI mode must be off/advisory/approval_required/bounded_auto; ordinary optional nulls preserve values. Missing workspace returns 404; stale version 409. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.",
    "auth": "crm:admin or any one of crm:settings:update",
    "input": "import(\"./contracts.types.js\").CrmWorkspaceUpdateInput"
  },
  "crm:GET /api/v1/automation/jobs": {
    "purpose": "List workspace durable jobs with cursor/status, ascending UUID; limit defaults 50, clamped 1..100. Result is nullable job-type-specific stored JSON.",
    "auth": "crm:admin or any one of crm:automation:read",
    "query": "import(\"./contracts.types.js\").CrmJobListQuery"
  },
  "crm:GET /api/v1/automation/webhooks": {
    "purpose": "List workspace webhook subscriptions, including inactive entries, with total and failed/dead-letter delivery counts.",
    "auth": "crm:admin or any one of crm:automation:read"
  },
  "crm:GET /api/v1/companies": {
    "purpose": "Search nondeleted workspace companies by name/domain with q and ascending UUID cursor. Only cursor/limit/q are consumed; limit defaults 50, clamped 1..100.",
    "auth": "crm:admin or any one of crm:company:read, crm:company:read_all",
    "query": "import(\"./contracts.types.js\").CrmSearchQuery"
  },
  "crm:POST /api/v1/companies": {
    "purpose": "Create a company with trimmed nonempty name and nonnegative employee count/revenue. Validate selected active team and owner membership; return 201. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.",
    "auth": "crm:admin or any one of crm:company:create"
  },
  "crm:GET /api/v1/companies/{id}": {
    "purpose": "Read a nondeleted workspace company by UUID; missing or foreign workspace company returns 404.",
    "auth": "crm:admin or any one of crm:company:read, crm:company:read_all"
  },
  "crm:PATCH /api/v1/companies/{id}": {
    "purpose": "Patch company fields using required version; validate nonempty name and nonnegative count/revenue. Optional nulls preserve fields; missing company 404 and stale version 409. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.",
    "auth": "crm:admin or any one of crm:company:update"
  },
  "crm:GET /api/v1/contacts": {
    "purpose": "Search nondeleted workspace contacts by first/last name/email with q and ascending UUID cursor. Only cursor/limit/q are consumed; limit defaults 50, clamped 1..100.",
    "auth": "crm:admin or any one of crm:contact:read, crm:contact:read_all",
    "query": "import(\"./contracts.types.js\").CrmSearchQuery"
  },
  "crm:POST /api/v1/contacts": {
    "purpose": "Create a contact with trimmed nonempty first_name and optional profile/consent/custom data; validate selected active team and owner membership. Returns 201. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.",
    "auth": "crm:admin or any one of crm:contact:create"
  },
  "crm:GET /api/v1/contacts/{id}": {
    "purpose": "Read a nondeleted workspace contact by UUID; missing or foreign workspace contact returns 404.",
    "auth": "crm:admin or any one of crm:contact:read, crm:contact:read_all"
  },
  "crm:PATCH /api/v1/contacts/{id}": {
    "purpose": "Patch contact with required version; validate nonempty first_name and active/inactive/do_not_contact lifecycle status. Optional nulls preserve fields; missing contact 404, stale version 409. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.",
    "auth": "crm:admin or any one of crm:contact:update",
    "input": "import(\"./contracts.types.js\").CrmContactUpdateInput"
  },
  "crm:GET /api/v1/leads/light": {
    "purpose": "Alias of the full lead list with exactly the same filters, ownership restrictions and bare Lead response model; no extra profile enrichment.",
    "auth": "crm:admin or any one of crm:lead:read, crm:lead:read_all, crm:lead:read_own (delegates to the full lead-list handler)",
    "query": "import(\"./contracts.types.js\").CrmLeadListQuery"
  },
  "crm:GET /api/v1/leads": {
    "purpose": "List bare nondeleted workspace lead records with UUID cursor and q/pipeline/stage/status/team/owner/statuses/profile/active date filters. statuses is comma-separated. Caller-only unless crm:admin or crm:lead:read_all. Limit defaults 50, clamped 1..100; UUID cursor remains id > cursor even with task_priority/created_at/created_at_desc sorting.",
    "auth": "crm:admin or any one of crm:lead:read, crm:lead:read_all, crm:lead:read_own",
    "query": "import(\"./contracts.types.js\").CrmLeadListQuery"
  },
  "crm:POST /api/v1/leads": {
    "purpose": "Create a lead with trimmed title, score 0..100 and nonnegative value; choose an active lead stage when omitted, default owner to caller and currency IRR. Validate active team/member assignment; return a bare Lead with HTTP 201. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.",
    "auth": "crm:admin or any one of crm:lead:create"
  },
  "crm:GET /api/v1/leads/{id}": {
    "purpose": "Read a nondeleted workspace lead visible to the caller and enrich a nullable remote profile using column or legacy custom_data.profile_id; missing/invisible leads return 404.",
    "auth": "crm:admin or any one of crm:lead:read, crm:lead:read_all, crm:lead:read_own"
  },
  "crm:PATCH /api/v1/leads/{id}": {
    "purpose": "Patch a bare lead with required version; validate nonempty title, score 0..100, nonnegative value and new/working/qualified/disqualified/converted status. Optional nulls preserve fields; missing 404, stale version 409. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.",
    "auth": "crm:admin or any one of crm:lead:update",
    "input": "import(\"./contracts.types.js\").CrmLeadUpdateInput"
  },
  "crm:GET /api/v1/leads/{id}/history": {
    "purpose": "Merge activities and audit events for a workspace lead, newest first, with nullable actor profiles and extensible event data. Either crm:lead:read or crm:activity:read suffices; this handler does not apply lead ownership filtering.",
    "auth": "crm:admin or any one of crm:lead:read, crm:activity:read"
  },
  "crm:DELETE /api/v1/leads/{id}/reminders": {
    "purpose": "Soft-delete all nondeleted tasks for the workspace lead UUID; return {lead_id,deleted} with a numeric affected count, including zero. No parent check, version or idempotency key is required.",
    "auth": "crm:admin or any one of crm:task:delete",
    "response": "import(\"./types.js\").CrmLeadReminderDeletionResponse"
  },
  "crm:PATCH /api/v1/leads/{id}/stage": {
    "purpose": "Move a lead within its pipeline with required version; active stage required. Lost stage disqualifies and records loss_reason; won/activation/recurring slug qualifies. Write stage-change activity; missing 404, invalid stage 422, stale version 409. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.",
    "auth": "crm:admin or any one of crm:lead:move"
  },
  "crm:PATCH /api/v1/leads/{id}/assignment": {
    "purpose": "Replace lead team and owner using required version; omitted or null IDs clear assignments. Validate active team and owner membership when selected, and write assignment activity. Missing 404, validation 422, stale version 409. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.",
    "auth": "crm:admin or any one of crm:lead:assign"
  },
  "crm:GET /api/v1/deals": {
    "purpose": "List bare nondeleted workspace deals with cursor/q/pipeline/stage/status/team/owner filters, ascending UUID. Caller-only unless crm:admin or crm:deal:read_all. Limit defaults 50, clamped 1..100.",
    "auth": "crm:admin or any one of crm:deal:read, crm:deal:read_all, crm:deal:read_own",
    "query": "import(\"./contracts.types.js\").CrmDealListQuery"
  },
  "crm:POST /api/v1/deals": {
    "purpose": "Create a deal with nonempty trimmed name, nonnegative amounts and probability 0..1. Choose active deal stage when omitted, default probability from stage, owner caller and currency IRR. Validate team membership; return 201. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.",
    "auth": "crm:admin or any one of crm:deal:create"
  },
  "crm:GET /api/v1/deals/{id}": {
    "purpose": "Read a nondeleted workspace deal visible to caller; only crm:admin or crm:deal:read_all removes owner filtering. Missing/invisible deals return 404.",
    "auth": "crm:admin or any one of crm:deal:read, crm:deal:read_all, crm:deal:read_own"
  },
  "crm:PATCH /api/v1/deals/{id}": {
    "purpose": "Patch a deal with required version; validate name, nonnegative amounts and probability 0..1. Optional nulls preserve fields; missing 404, stale version 409. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.",
    "auth": "crm:admin or any one of crm:deal:update"
  },
  "crm:PATCH /api/v1/deals/{id}/stage": {
    "purpose": "Move a deal within its pipeline with required version; active stage required. Lost requires nonempty loss_reason; update status/probability/closed_at and write stage-change activity. Missing 404, validation 422, stale version 409. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.",
    "auth": "crm:admin or any one of crm:deal:move"
  },
  "crm:PATCH /api/v1/deals/{id}/assignment": {
    "purpose": "Replace deal team and owner using required version; omitted or null IDs clear assignments. Validate active team and owner membership when selected, and write assignment activity. Missing 404, validation 422, stale version 409. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.",
    "auth": "crm:admin or any one of crm:deal:assign"
  },
  "crm:GET /api/v1/boards/{entity_type}/{pipeline_id}": {
    "purpose": "Read a lead or deal board with concrete pipeline/stage/record columns and summed value. Invalid entity_type 400, missing workspace pipeline 404. At most 1000 recently updated records; board permission does not apply per-record owner filtering.",
    "auth": "crm:admin or any one of crm:board:read"
  },
  "crm:GET /api/v1/reports/overview": {
    "purpose": "Calculate provisional metrics and data-quality warnings for period_start/period_end query. Default start is the first UTC day of end month and default end now; financial totals depend on ingested actuals.",
    "auth": "crm:admin or any one of crm:report:read"
  },
  "crm:POST /api/v1/reports/refresh": {
    "purpose": "Calculate and persist certified metric snapshots/report run; period bounds are query parameters and no JSON body is read. Returns 201 with ready status, overview and agentic_started:false. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.",
    "auth": "crm:admin or any one of crm:report:refresh"
  },
  "crm:POST /api/v1/reports/{id}/agentic": {
    "purpose": "Queue report insight for a ready/ready_without_ai report, charge to configured project owner only when execution starts. Disabled AI or missing owner returns 422; missing ready run 404. Return queued job/project-owner UUIDs with HTTP 202. Requires a nonempty Idempotency-Key header up to 128 characters; duplicate submissions return 409 instead of replaying a response.",
    "auth": "crm:admin or any one of crm:agent:run"
  },
  "crm:GET /api/v1/reports/{id}": {
    "purpose": "Read a workspace report run by UUID, including nullable deterministic summary, AI result/error and completion timestamp; missing or foreign run returns 404.",
    "auth": "crm:admin or any one of crm:report:read"
  },
  "crm:GET /api/v1/reports/catalog": {
    "purpose": "Read workspace report definitions and global metric definitions as concrete reports/metrics arrays, ordered by report name/UUID and metric key.",
    "auth": "crm:admin or any one of crm:report:read"
  },
  "crm:ANY /api": {
    "purpose": "Reach the legacy API not-found boundary with the chosen method. The handler returns structured 404; HEAD has no body and production CORS answers OPTIONS with empty 200. Axios rejects 404 by default; intentional diagnostics should check empty bodies. Registered paths are rejected locally by wildcard diagnostics. Does not mutate CRM records.",
    "auth": "No local handler permission check; deployment/gateway authority must be independently verified"
  },
  "crm:ANY /api/{*path}": {
    "purpose": "Reach the legacy API not-found boundary with the chosen method. The handler returns structured 404; HEAD has no body and production CORS answers OPTIONS with empty 200. Axios rejects 404 by default; intentional diagnostics should check empty bodies. Registered paths are rejected locally by wildcard diagnostics. Does not mutate CRM records.",
    "auth": "No local handler permission check; deployment/gateway authority must be independently verified"
  }
};
