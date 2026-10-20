// Generated from the reviewed canonical Manage durable-action packet. Do not edit.
import {ServiceApi,type RequestOptions} from "@faiber/sdk-core";
import type * as T from "./durable.types.js";
import {actionIdentifier,validateReview,validateExecution,validateCapabilities} from "./durable.js";
export class ManageActionOperations extends ServiceApi {
  /** Calls `GET /api/v1/agent/actions/capabilities`. Preserve captured revisions and exact operation UUID on retry. */
  getAgentActionCapabilities(options?: RequestOptions) {
    return this.client.get<T.ManageAgentActionCapabilities>(`/api/v1/agent/actions/capabilities`,undefined,options).then(response=>{validateCapabilities(response.data);return response;});
  }
  /** Calls `GET /api/v1/agent/threads/{threadId}/actions`. Preserve captured revisions and exact operation UUID on retry. */
  listAgentActions(threadId: string, options?: RequestOptions) {
    actionIdentifier(threadId);
    return this.client.get<T.ManageAgentActionSummary[]>(`/api/v1/agent/threads/${encodeURIComponent(threadId)}/actions`,undefined,options);
  }
  /** Calls `GET /api/v1/agent/threads/{threadId}/actions/{actionId}`. Preserve captured revisions and exact operation UUID on retry. */
  getAgentAction(threadId: string, actionId: string, options?: RequestOptions) {
    actionIdentifier(threadId);
    actionIdentifier(actionId);
    return this.client.get<T.ManageAgentActionReply>(`/api/v1/agent/threads/${encodeURIComponent(threadId)}/actions/${encodeURIComponent(actionId)}`,undefined,options);
  }
  /** Calls `POST /api/v1/agent/threads/{threadId}/actions/{actionId}/commands`. Preserve captured revisions and exact operation UUID on retry. */
  reviewAgentAction(threadId: string, actionId: string, input: T.ManageAgentActionReviewInput, options?: RequestOptions<T.ManageAgentActionReviewInput>) {
    actionIdentifier(threadId);
    actionIdentifier(actionId);
    validateReview(input);
    return this.client.post<T.ManageAgentActionReply,T.ManageAgentActionReviewInput>(`/api/v1/agent/threads/${encodeURIComponent(threadId)}/actions/${encodeURIComponent(actionId)}/commands`,input,options);
  }
  /** Calls `POST /api/v1/agent/threads/{threadId}/actions/{actionId}/execute`. Preserve captured revisions and exact operation UUID on retry. */
  executeAgentAction(threadId: string, actionId: string, input: T.ManageAgentActionExecuteInput, options?: RequestOptions<T.ManageAgentActionExecuteInput>) {
    actionIdentifier(threadId);
    actionIdentifier(actionId);
    validateExecution(input);
    return this.client.post<T.ManageAgentActionReply,T.ManageAgentActionExecuteInput>(`/api/v1/agent/threads/${encodeURIComponent(threadId)}/actions/${encodeURIComponent(actionId)}/execute`,input,options);
  }
}
