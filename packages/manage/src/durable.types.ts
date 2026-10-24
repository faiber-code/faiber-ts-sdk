// Generated from the reviewed canonical Manage durable-action packet. Do not edit.
import type {JsonValue} from "@faiber/sdk-core";
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
export interface ManageAgentActionReviewBase {
  operation_id: string;
  expected_version: number;
  payload_hash: string;
}
/** Body edits preserve the server-owned target; decisions require a bounded reason. */
export type ManageAgentActionReviewInput = ManageAgentActionReviewBase & (
  | { kind: "edit"; body: JsonValue; reason?: string }
  | { kind: "approve" | "reject"; reason: string; body?: never }
);
export interface ManageAgentActionExecuteInput {
  operation_id: string;
  expected_version: number;
  payload_hash: string;
}
