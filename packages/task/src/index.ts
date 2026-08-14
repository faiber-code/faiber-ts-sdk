import { ServiceApi, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./types.js";

const versionOptions = <TData>(version: number, options?: RequestOptions<TData>): RequestOptions<TData> => ({
  ...options,
  headers: { ...options?.headers, "If-Match": String(version) },
});

/** Typed client for every authenticated route mounted by Faiber Tasks. */
import { TaskOperations } from "./operations.js";
export class TaskApi extends ServiceApi {
    readonly operations = new TaskOperations(this.client);
  /** Gets the active sandbox workspace; requires the configured global Task permission and scoped access. */
  workspace(options?: RequestOptions) {
    return this.client.get<T.TaskResponse<T.WorkspaceSummary>>("/api/v1/workspace", undefined, options);
  }

  /** Resolves effective Task-owned capabilities for a workspace/team/project/work-item scope. */
  effectiveAccess(query?: T.EffectiveAccessQuery, options?: RequestOptions) {
    return this.client.get<T.TaskResponse<T.EffectiveAccess>>("/api/v1/access/effective", query, options);
  }

  /** Lists only projects visible to the authenticated actor. */
  listProjects(query?: T.ProjectQuery, options?: RequestOptions) {
    return this.client.get<T.TaskListResponse<T.Project>>("/api/v1/projects", query, options);
  }

  /** Creates a project after global and workspace/team-scope authorization. */
  createProject(data: T.CreateProjectInput, options?: RequestOptions<T.CreateProjectInput>) {
    return this.client.post<T.TaskResponse<T.Project>, T.CreateProjectInput>("/api/v1/projects", data, options);
  }

  /** Gets one authorized project and preserves its ETag in the complete Axios response. */
  getProject(id: Identifier, options?: RequestOptions) {
    return this.client.get<T.TaskResponse<T.Project>>(`/api/v1/projects/${encodeURIComponent(id)}`, undefined, options);
  }

  /** Updates one project using the current optimistic version as `If-Match`. */
  updateProject(id: Identifier, version: number, data: T.UpdateProjectInput, options?: RequestOptions<T.UpdateProjectInput>) {
    return this.client.patch<T.TaskResponse<T.Project>, T.UpdateProjectInput>(
      `/api/v1/projects/${encodeURIComponent(id)}`,
      data,
      versionOptions(version, options),
    );
  }

  /** Grants a Task access profile; requires the local `project.members.manage` capability. */
  grantProjectAccess(id: Identifier, data: T.GrantProjectAccessInput, options?: RequestOptions<T.GrantProjectAccessInput>) {
    return this.client.post<T.TaskResponse<T.GrantProjectAccessResult>, T.GrantProjectAccessInput>(
      `/api/v1/projects/${encodeURIComponent(id)}/grants`,
      data,
      options,
    );
  }

  /** Lists only work items visible through Task-owned scope grants. */
  listWorkItems(query?: T.WorkItemQuery, options?: RequestOptions) {
    return this.client.get<T.TaskListResponse<T.WorkItem>>("/api/v1/work-items", query, options);
  }

  /** Creates an idempotent work item; retries must reuse `idempotencyKey`. */
  createWorkItem(data: T.CreateWorkItemInput, idempotencyKey: string, options?: RequestOptions<T.CreateWorkItemInput>) {
    return this.client.post<T.TaskResponse<T.WorkItem>, T.CreateWorkItemInput>("/api/v1/work-items", data, {
      ...options,
      headers: { ...options?.headers, "Idempotency-Key": idempotencyKey },
    });
  }

  /** Gets one authorized work item and preserves its ETag. */
  getWorkItem(id: Identifier, options?: RequestOptions) {
    return this.client.get<T.TaskResponse<T.WorkItem>>(`/api/v1/work-items/${encodeURIComponent(id)}`, undefined, options);
  }

  /** Updates one work item using the current optimistic version as `If-Match`. */
  updateWorkItem(id: Identifier, version: number, data: T.UpdateWorkItemInput, options?: RequestOptions<T.UpdateWorkItemInput>) {
    return this.client.patch<T.TaskResponse<T.WorkItem>, T.UpdateWorkItemInput>(
      `/api/v1/work-items/${encodeURIComponent(id)}`,
      data,
      versionOptions(version, options),
    );
  }

  /** Applies a policy-checked workflow transition with optimistic concurrency. */
  transitionWorkItem(id: Identifier, version: number, data: T.TransitionWorkItemInput, options?: RequestOptions<T.TransitionWorkItemInput>) {
    return this.client.post<T.TaskResponse<T.WorkItem>, T.TransitionWorkItemInput>(
      `/api/v1/work-items/${encodeURIComponent(id)}/transition`,
      data,
      versionOptions(version, options),
    );
  }

  /** Adds a typed comment to an authorized work item. */
  createComment(workItemId: Identifier, data: T.CreateCommentInput, options?: RequestOptions<T.CreateCommentInput>) {
    return this.client.post<T.TaskResponse<T.Comment>, T.CreateCommentInput>(
      `/api/v1/work-items/${encodeURIComponent(workItemId)}/comments`,
      data,
      options,
    );
  }

  /** Creates a sprint in an authorized team/project scope. */
  createSprint(data: T.CreateSprintInput, options?: RequestOptions<T.CreateSprintInput>) {
    return this.client.post<T.TaskResponse<T.Sprint>, T.CreateSprintInput>("/api/v1/sprints", data, options);
  }

  /** Starts an authorized sprint and returns the new ETag/version. */
  startSprint(id: Identifier, options?: RequestOptions) {
    return this.client.post<T.TaskResponse<T.Sprint>>(`/api/v1/sprints/${encodeURIComponent(id)}/start`, undefined, options);
  }

  /** Completes an authorized sprint and returns the new ETag/version. */
  completeSprint(id: Identifier, options?: RequestOptions) {
    return this.client.post<T.TaskResponse<T.Sprint>>(`/api/v1/sprints/${encodeURIComponent(id)}/complete`, undefined, options);
  }

  /** Gets scoped delivery totals for one project. */
  reportSummary(projectId: string, options?: RequestOptions) {
    return this.client.get<T.TaskResponse<T.ReportSummary>>("/api/v1/reports/summary", { project_id: projectId }, options);
  }

  /** Creates an agent-authored proposal without applying its mutation. */
  createAgentProposal(data: T.AgentProposalInput, options?: RequestOptions<T.AgentProposalInput>) {
    return this.client.post<T.TaskResponse<T.AgentProposal>, T.AgentProposalInput>("/api/v1/agent-proposals", data, options);
  }

  /** Applies a pending proposal after a distinct actor with `agent.approve` reviews it. */
  approveAgentProposal(id: Identifier, options?: RequestOptions) {
    return this.client.post<T.TaskResponse<T.ApprovedAgentProposal>>(
      `/api/v1/agent-proposals/${encodeURIComponent(id)}/approve`,
      undefined,
      options,
    );
  }

  /** Opens the authenticated Task invalidation SSE stream. */
  openEvents(options?: RequestOptions) {
    return this.client.request<T.TaskEventStreamBody>({
      ...options,
      method: "GET",
      url: "/api/v1/events",
      responseType: "stream",
      adapter: options?.adapter ?? "fetch",
    });
  }
}

export * from "./types.js";
export * from "@faiber/sdk-core";
export * from "./operations.js";
export * from "./operations.types.js";
