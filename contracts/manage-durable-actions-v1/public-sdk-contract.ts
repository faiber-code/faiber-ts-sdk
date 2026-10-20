// FROZEN WIRE HANDOFF ONLY. Not an SDK repository edit or publication.
export type JsonValue = null | boolean | number | string | JsonValue[] | { [key: string]: JsonValue };
export interface ManageAgentActionCapabilities {
  protocol: "durable-manage-action-v1";
  durable: true;
  legacy_completion: false;
  schema_mode: "closed-json-schema-subset";
}
export interface ManageDurableActionEvent {
  action_id: string;
  thread_id: string;
  protocol: "durable-manage-action-v1";
}
export interface ManageAgentActionPayload {
  service: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  path: string;
  body: JsonValue;
}
export type ManageAgentActionState = "proposed" | "approved" | "rejected" | "executing" | "succeeded" | "outcome_unknown" | "expired";
export interface ManageAgentActionOutcome {
  state: "succeeded" | "outcome_unknown";
  status: number | null;
  data: JsonValue;
}
export interface ManageAgentActionView {
  id: string;
  thread_id: string;
  project: string;
  version: number;
  payload_hash: string;
  state: ManageAgentActionState;
  payload: ManageAgentActionPayload;
  /** UTC Unix seconds, not milliseconds. */
  expires_at: number;
  /** Untrusted display suggestions; body_schema comes from the verified server catalog. */
  presentation: {
    title: JsonValue;
    description: JsonValue;
    form: JsonValue;
    body_schema: JsonValue;
    confirm: JsonValue;
  };
  outcome: ManageAgentActionOutcome | null;
}
export interface ManageAgentActionReply {
  action: ManageAgentActionView;
  replayed: boolean;
}
export type ManageAgentActionSummary = Pick<ManageAgentActionView,
  "id" | "thread_id" | "project" | "version" | "payload_hash" | "state" | "expires_at">;
export interface ManageAgentActionReviewInput {
  operation_id: string;
  expected_version: number;
  payload_hash: string;
  kind: "edit" | "approve" | "reject";
  /** Only edit accepts body. It changes the existing target's body, never service/method/path. */
  body?: JsonValue;
  /** Non-empty for approve/reject; maximum 2048 bytes. */
  reason?: string;
}
export interface ManageAgentActionExecuteInput {
  operation_id: string;
  expected_version: number;
  payload_hash: string;
}
// Named operations for the sole SDK owner. Return values below describe HTTP JSON;
// adapt them to the SDK's existing response wrapper/RequestOptions conventions.
export interface ManageDurableAgentOperations {
  /** GET /api/v1/agent/actions/capabilities */
  getAgentActionCapabilities(): Promise<ManageAgentActionCapabilities>;
  /** GET /api/v1/agent/threads/{threadId}/actions ; newest 50 summaries, bounded, no cursor. */
  listAgentActions(threadId: string): Promise<ManageAgentActionSummary[]>;
  /** GET /api/v1/agent/threads/{threadId}/actions/{actionId} */
  getAgentAction(threadId: string, actionId: string): Promise<ManageAgentActionReply>;
  /** POST /api/v1/agent/threads/{threadId}/actions/{actionId}/commands */
  reviewAgentAction(threadId: string, actionId: string, input: ManageAgentActionReviewInput): Promise<ManageAgentActionReply>;
  /** POST /api/v1/agent/threads/{threadId}/actions/{actionId}/execute */
  executeAgentAction(threadId: string, actionId: string, input: ManageAgentActionExecuteInput): Promise<ManageAgentActionReply>;
}
