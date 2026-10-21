import type {
  JsonObject,
  JsonValue,
  ServiceName,
  QueryParams,
} from "@faiber/sdk-core";

export type ManageProxyService = Exclude<ServiceName, "manage">;
export type ManageHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface ManageModuleMeta extends JsonObject {
  slug: string;
  title: string;
  category: string;
}

export interface ManageProjectSummary extends JsonObject {
  slug: string;
  name?: string;
  domain?: string | null;
}

export interface ManageRuntimeStatus extends JsonObject {
  /** Current Agentic project status, or unavailable when its authority cannot be read. */
  status: string;
  reauth_required: boolean;
}

/** Panel HTML after the default303 logout redirect; configure Node redirects to inspect its cookie. */
export type ManageLogoutResponse = string;

export interface ManageHealthResponse extends JsonObject {
  status: "ok";
  service: "infera-manage";
}

export interface ManageSetupStep extends JsonObject {
  service: string;
  connected: boolean;
  configured: boolean;
  providerVerified: boolean;
  setupNeeded: boolean;
  verificationError?: string;
}

export interface ManageSetupPrerequisites extends JsonObject {
  [locale: string]: string[];
}

export interface ManageSetupResponse extends JsonObject {
  project: string;
  services: ManageSetupStep[];
  /** Null when persistence returned a newer-report receipt without prerequisites. */
  prerequisites: ManageSetupPrerequisites | null;
  checkedAt: string;
}

export interface ManageMeResponse extends JsonObject {
  runtime: ManageRuntimeStatus;
  userId: string;
  project: ManageProjectSummary;
  enabledServices: string[];
  modules: ManageModuleMeta[];
  otherProjects: ManageProjectSummary[];
  agenticUrl: string;
}

export interface ManageOkResponse extends JsonObject {
  ok: boolean;
}

export interface ManageServiceHealthResponse extends JsonObject {
  [service: string]: boolean;
}

export type ManageAgentThinkLevel = "low" | "medium" | "high";

export interface ManageAgentModelOption extends JsonObject {
  id: string;
  provider: string;
  kind: "builtin";
}

export interface ManageAgentOllamaModelConfig extends JsonObject {
  configurable: true;
  base_url_env: "OLLAMA_BASE_URL";
  default_model_env: "OLLAMA_MODEL";
  think_level_env: "OLLAMA_THINK";
  think_levels: ManageAgentThinkLevel[];
  think_default_dev: "low";
}

export interface ManageAgentModelsResponse extends JsonObject {
  cloud: ManageAgentModelOption[];
  ollama: ManageAgentOllamaModelConfig;
}

export interface ManageDevLoginInput extends JsonObject {
  username: string;
  password: string;
}

export interface ManageImageUploadInput {
  userId: string;
  file: Blob;
  scope: string;
  fileName?: string;
}

export interface ManageImageLocation extends JsonObject {
  url?: string;
}

export interface ManageImageUploadResponse extends JsonObject {
  data?: ManageImageLocation;
  url?: string;
}

export interface ManageAgentThreadInput extends JsonObject {
  title?: string | null;
  ide_mode?: "code" | null;
}

/** Cursor ordering is updated_at then ID, both descending; cursors survive deletion. */
export interface ManageAgentThreadQuery extends QueryParams {
  /** Integer from1 through100; defaults to20. */
  limit?: number;
  before?: string;
}

export type ManageAgentHelper = "seo" | "reportSummary" | "writing" | "smartForms";

/** Preferences only. The server replaces enabled_services with current authorized grants. */
export interface ManageAgentPreferences extends JsonObject {
  enabled_services?: string[];
  enabled_helpers?: ManageAgentHelper[];
  locale?: "en" | "fa";
}

export interface ManageAgentThreadResponse extends JsonObject {
  id: string;
  owner_user_id: string;
  project_id: string | null;
  project_slug: string;
  ide_mode: "code" | "design";
  title: string;
  summary?: string | null;
  event_sequence?: number;
  active_agent_slug?: string | null;
  context_revision?: number;
  browser_url: string | null;
  browser_title: string | null;
  browser_active: boolean;
  design_document: JsonValue | null;
  created_at: string;
  updated_at: string;
}

/** BSON serde emits extended JSON for message timestamps (unlike RFC3339 thread views). */
export interface ManageMessageTimestamp extends JsonObject {
  $date: string | { $numberLong: string };
}

export interface ManageAgentMessageQuery extends QueryParams {
  limit?: number;
  /** Exclusive RFC3339 timestamp; messages are returned in chronological order. */
  before?: string;
}

export interface ManageAgentMessage extends JsonObject {
  id: string;
  thread_id: string;
  role: string;
  content: string;
  tool_calls?: JsonValue | null;
  snapshot_id?: string | null;
  changed_files?: string[];
  created_at: ManageMessageTimestamp;
}

export interface ManageAgentCancelInput extends JsonObject {
  client_message_id: string;
}

export interface ManageAgentCancelResponse extends JsonObject {
  cancelled: boolean;
  status: string;
  run_id?: string;
  cancelled_jobs?: number;
  message?: string;
  message_id?: string;
  snapshot_id?: string | null;
  changed_files?: string[];
  tool_calls?: JsonValue;
  error?: string | null;
  source_result_state?: "withheld";
}

export interface ManageAgentChatInput extends JsonObject {
  message: string;
  client_message_id?: string;
  surface?: JsonValue;
  agent_slug?: string;
  context?: ManageAgentPreferences;
  project_slug?: string;
  selected_node_ids?: string[];
  model_ref?: string | null;
  model_strategy?: string | null;
  images?: ManagePromptImageInput[];
}

/** Ephemeral prompt attachment; server validates MIME, size and model support. */
export interface ManagePromptImageInput extends JsonObject {
  mime_type: string;
  data_base64: string;
  name?: string | null;
}

export type ManageAgentFieldType =
  | "text"
  | "textarea"
  | "number"
  | "email"
  | "url"
  | "date"
  | "datetime-local"
  | "checkbox"
  | "select"
  | "json";

export interface ManageAgentFieldOption extends JsonObject {
  value: string;
  label: string;
}

export interface ManageAgentFormField extends JsonObject {
  key: string;
  label?: string;
  type?: ManageAgentFieldType;
  required?: boolean;
  placeholder?: string;
  help?: string;
  options?: ManageAgentFieldOption[];
}

export interface ManageAgentForm extends JsonObject {
  fields?: ManageAgentFormField[];
}

export interface ManageAgentActionArguments extends JsonObject {
  service?: ManageProxyService;
  method?: ManageHttpMethod;
  path?: string;
  body?: JsonObject;
  title?: string;
  description?: string;
  typescript?: string;
  confirm?: string;
  form?: ManageAgentForm;
}

export interface ManageAgentAction extends JsonObject {
  action_id: string;
  name: string;
  arguments?: ManageAgentActionArguments;
}

export interface ManageAgentQuestion extends JsonObject {
  ask_id: string;
  question: string;
}

export interface ManageAgentComplete extends JsonObject {
  message: string;
}

export interface ManageAgentActionCompletionInput extends JsonObject {
  ok: boolean;
  result?: JsonValue;
  error?: string | null;
}

export interface ManageAgentQuestionCompletionInput extends JsonObject {
  answer: string;
}

export interface ManageServiceAction<TData extends JsonValue = JsonObject> {
  service: ManageProxyService;
  method: ManageHttpMethod;
  path: string;
  body?: TData;
}

export type ManageAgentStreamBody =
  | ReadableStream<Uint8Array>
  | AsyncIterable<Uint8Array | string>
  | string;

export interface ManageAgentEvent<TData extends JsonValue | string = JsonValue | string> {
  event: string;
  data: TData;
  id?: string;
  retry?: number;
  raw: string;
}

export interface ManageAgentActionEvent extends ManageAgentEvent<ManageAgentAction> {
  event: "browser_action";
}

export interface ManageAgentQuestionEvent extends ManageAgentEvent<ManageAgentQuestion> {
  event: "ask_user";
}

export interface ManageAgentCompleteEvent extends ManageAgentEvent<ManageAgentComplete> {
  event: "complete";
}

/** Persisted server reference only; fetch its durable record before any review. */
export interface ManageDurableActionSseEvent extends ManageAgentEvent<import('./durable.types.js').ManageDurableActionEvent & JsonObject> {
  event: "manage_action";
}
