import type {
  JsonObject,
  JsonValue,
  ServiceName,
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

export interface ManageMeResponse extends JsonObject {
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
  title: string;
  ide_mode?: string;
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

export interface ManageAgentMessage extends JsonObject {
  id: string;
  thread_id: string;
  role: string;
  content: string;
  tool_calls?: JsonValue | null;
  snapshot_id?: string | null;
  changed_files?: string[];
  created_at: string;
}

export interface ManageAgentCancelInput extends JsonObject {
  client_message_id: string;
}

export interface ManageAgentCancelResponse extends JsonObject {
  cancelled: boolean;
  status: string;
  run_id?: string;
  cancelled_jobs?: number;
}

export interface ManageAgentChatInput extends JsonObject {
  message: string;
  client_message_id?: string;
  surface?: JsonValue;
  agent_slug?: string;
  context?: JsonValue;
  project_slug?: string;
  selected_node_ids?: string[];
  model_ref?: string;
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
  result: JsonValue;
  error?: string;
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
