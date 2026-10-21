// Generated from the reviewed canonical Manage durable-action packet. Do not edit.
import {ServiceApi,type RequestOptions} from "@faiber/sdk-core";
import type * as T from "./durable.types.js";
import {actionIdentifier,validateReview,validateExecution,validateCapabilities} from "./durable.js";
export class ManageActionOperations extends ServiceApi {
  /** Checks mounted durable protocol and closed-schema mode; incompatible replies reject. Requires a signed Manage session and current project.settings.manage;401/403 deny authority and502 means unavailable. Calls `GET /api/v1/agent/actions/capabilities`; returns the complete Axios response. */
  getAgentActionCapabilities(options?: RequestOptions) {
    return this.client.get<T.ManageAgentActionCapabilities>(`/api/v1/agent/actions/capabilities`,undefined,options).then(response=>{validateCapabilities(response.data);return response;});
  }
  /** Lists the newest50 summaries for the current project, actor and thread, without payload/history. Requires signed Manage session, project.settings.manage and agents.run;404 hides other scopes,502 means unavailable. Calls `GET /api/v1/agent/threads/{threadId}/actions`; returns the complete Axios response. */
  listAgentActions(threadId: string, options?: RequestOptions) {
    actionIdentifier(threadId);
    return this.client.get<T.ManageAgentActionSummary[]>(`/api/v1/agent/threads/${encodeURIComponent(threadId)}/actions`,undefined,options);
  }
  /** Loads the current durable action and replay metadata before review. Requires signed Manage session, project.settings.manage and agents.run;404 hides other scopes,502 means unavailable. Calls `GET /api/v1/agent/threads/{threadId}/actions/{actionId}`; returns the complete Axios response. */
  getAgentAction(threadId: string, actionId: string, options?: RequestOptions) {
    actionIdentifier(threadId);
    actionIdentifier(actionId);
    return this.client.get<T.ManageAgentActionReply>(`/api/v1/agent/threads/${encodeURIComponent(threadId)}/actions/${encodeURIComponent(actionId)}`,undefined,options);
  }
  /** Edits only the stored body or records approve/reject with a reason. Requires signed Manage session, project.settings.manage and agents.run. Send captured version/hash and operation UUID;409 needs fresh GET,400/422 rejects malformed input. Exact retry preserves the entire request. Calls `POST /api/v1/agent/threads/{threadId}/actions/{actionId}/commands`; returns the complete Axios response. */
  reviewAgentAction(threadId: string, actionId: string, input: T.ManageAgentActionReviewInput, options?: RequestOptions<T.ManageAgentActionReviewInput>) {
    actionIdentifier(threadId);
    actionIdentifier(actionId);
    validateReview(input);
    return this.client.post<T.ManageAgentActionReply,T.ManageAgentActionReviewInput>(`/api/v1/agent/threads/${encodeURIComponent(threadId)}/actions/${encodeURIComponent(actionId)}/commands`,input,options);
  }
  /** Executes the saved approved payload under current project.settings.manage and agents.run authority. Requires signed Manage session;409 needs fresh GET and502 means unavailable. Cancellation does not undo a claim; preserve exact UUID/body and reconcile unknown outcome without retrying the target. Calls `POST /api/v1/agent/threads/{threadId}/actions/{actionId}/execute`; returns the complete Axios response. */
  executeAgentAction(threadId: string, actionId: string, input: T.ManageAgentActionExecuteInput, options?: RequestOptions<T.ManageAgentActionExecuteInput>) {
    actionIdentifier(threadId);
    actionIdentifier(actionId);
    validateExecution(input);
    return this.client.post<T.ManageAgentActionReply,T.ManageAgentActionExecuteInput>(`/api/v1/agent/threads/${encodeURIComponent(threadId)}/actions/${encodeURIComponent(actionId)}/execute`,input,options);
  }
}
