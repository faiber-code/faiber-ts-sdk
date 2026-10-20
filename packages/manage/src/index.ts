import {ManageActionOperations} from "./operations.js";
import type * as D from "./durable.types.js";
import {
  SERVICE_NAMES,
  ServiceApi,
  type JsonValue,
  type JsonObject,
  type RequestOptions,
  type ServiceDomains,
} from "@faiber/sdk-core";
import type * as T from "./types.js";

function encode(value: string): string {
  return encodeURIComponent(value);
}

function safeServicePath(path: string): string {
  const trimmed = path.trim();
  const pathname = trimmed.split("?", 1)[0] ?? "";
  const segments = pathname.split("/");
  if (
    !trimmed.startsWith("/")
    || trimmed.startsWith("//")
    || trimmed.includes("://")
    || trimmed.includes(String.fromCharCode(92))
    || segments.includes(".")
    || segments.includes("..")
  ) {
    throw new Error("Manage service actions require an absolute service path, not a URL");
  }
  return trimmed;
}

function rootWithoutTrailingSlash(root: string): string {
  let normalized = root.trim();
  while (normalized.endsWith("/")) normalized = normalized.slice(0, -1);
  if (normalized.includes("?") || normalized.includes("#")) {
    throw new Error("Manage root must not contain a query string or fragment");
  }
  return normalized;
}

/** Builds service origins that retain Manage's authenticated, project-scoped proxy boundary. */
export function domainsFromManageProxy(root = ""): ServiceDomains {
  const normalized = rootWithoutTrailingSlash(root);
  const domains: ServiceDomains = { manage: normalized || "/" };
  for (const service of SERVICE_NAMES) {
    if (service !== "manage") domains[service] = `${normalized}/api/v1/proxy/${service}`;
  }
  return domains;
}

/** Resolves the image URL from either supported Manage/Profile upload response envelope. */
export function managedImageUrl(response: T.ManageImageUploadResponse): string {
  const url = response.data?.url ?? response.url;
  if (!url) throw new Error("Image upload completed without a URL");
  return url;
}

/** Typed client for project-scoped Manage APIs and its governed Agentic bridge. */
export class ManageApi extends ServiceApi {
  readonly operations = new ManageActionOperations(this.client);
  /** Required protocol check. Unavailable capability never enables legacy action execution. */
  getAgentActionCapabilities(options?: RequestOptions) { return this.operations.getAgentActionCapabilities(options); }
  /** Latest50 durable summaries for this thread; no invented cursor or payload history. */
  listAgentActions(threadId: string, options?: RequestOptions) { return this.operations.listAgentActions(threadId,options); }
  getAgentAction(threadId: string, actionId: string, options?: RequestOptions) { return this.operations.getAgentAction(threadId,actionId,options); }
  /** Send the reviewed version/hash and caller-owned UUID.409 requires fresh review, never rebase. */
  reviewAgentAction(threadId: string, actionId: string, input: D.ManageAgentActionReviewInput, options?: RequestOptions<D.ManageAgentActionReviewInput>) { return this.operations.reviewAgentAction(threadId,actionId,input,options); }
  /** Server executes its saved payload. Preserve exact UUID/body after unknown outcome; never target retry. */
  executeAgentAction(threadId: string, actionId: string, input: D.ManageAgentActionExecuteInput, options?: RequestOptions<D.ManageAgentActionExecuteInput>) { return this.operations.executeAgentAction(threadId,actionId,input,options); }

  /** Gets the active user, project, service catalog, and Agentic origin. */
  me(options?: RequestOptions) {
    return this.client.get<T.ManageMeResponse>("/api/v1/me", undefined, options);
  }

  /** Starts a development-only Manage session. Production deployments should disable this route. */
  devLogin(data: T.ManageDevLoginInput, options?: RequestOptions<T.ManageDevLoginInput>) {
    return this.client.post<T.ManageOkResponse, T.ManageDevLoginInput>("/api/v1/dev/login", data, options);
  }

  /** Gets reachability state for services enabled in the current project. */
  serviceHealth(options?: RequestOptions) {
    return this.client.get<T.ManageServiceHealthResponse>("/api/v1/health/services", undefined, options);
  }

  /** Lists Agentic cloud model options and the user-configurable Ollama model contract. */
  listAgentModels(options?: RequestOptions) {
    return this.client.get<T.ManageAgentModelsResponse>("/api/v1/agent/models", undefined, options);
  }

  /** Uploads a project-scoped profile image through Manage's validated service proxy. */
  uploadProfileImage(input: T.ManageImageUploadInput, options?: RequestOptions<FormData>) {
    const data = new FormData();
    if (input.fileName === undefined) data.append("file", input.file);
    else data.append("file", input.file, input.fileName);
    data.append("pet_id", `manage-${input.scope}`.replace(/[^a-zA-Z0-9_-]/g, "-"));
    return this.client.post<T.ManageImageUploadResponse, FormData>(
      `/api/v1/proxy/profile/api/v1/profile/${encode(input.userId)}/avatar`,
      data,
      options,
    );
  }

  /** Creates the Agentic thread used by the builtin Manage agent. */
  createAgentThread(data: T.ManageAgentThreadInput, options?: RequestOptions<T.ManageAgentThreadInput>) {
    return this.client.post<T.ManageAgentThreadResponse, T.ManageAgentThreadInput>(
      "/api/v1/agent/chat/threads",
      { ide_mode: "code", ...data },
      options,
    );
  }

  /** Lists the first page of current-project Manage threads owned by the active user. */
  listAgentThreads(options?: RequestOptions) {
    return this.client.get<T.ManageAgentThreadResponse[]>("/api/v1/agent/chat/threads", undefined, options);
  }

  /** Lists a page; read x-has-more and x-next-before from the returned Axios headers.
   * Pass x-next-before as before for the next page. Limits must be integers1..100.
   */
  listAgentThreadsPage(query: T.ManageAgentThreadQuery = {}, options?: RequestOptions) {
    return this.client.get<T.ManageAgentThreadResponse[]>("/api/v1/agent/chat/threads", query, options);
  }

  /** Gets durable messages for one Agentic thread, including snapshot change metadata when present. */
  getAgentMessages(threadId: string, options?: RequestOptions) {
    return this.client.get<T.ManageAgentMessage[]>(
      `/api/v1/agent/ide/threads/${encode(threadId)}/messages`,
      undefined,
      options,
    );
  }

  /** Opens a POST SSE response while preserving the complete Axios response and headers. */
  openAgentChatStream(
    threadId: string,
    data: T.ManageAgentChatInput,
    options?: RequestOptions<T.ManageAgentChatInput>,
  ) {
    return this.client.request<T.ManageAgentStreamBody, T.ManageAgentChatInput>({
      ...options,
      method: "POST",
      url: `/api/v1/agent/ide/threads/${encode(threadId)}/chat/stream`,
      data,
      responseType: "stream",
      adapter: options?.adapter ?? "fetch",
    });
  }

  /** Cancels the active Agentic run identified by the stable client message ID. */
  cancelAgentChat(
    threadId: string,
    data: T.ManageAgentCancelInput,
    options?: RequestOptions<T.ManageAgentCancelInput>,
  ) {
    return this.client.post<T.ManageAgentCancelResponse, T.ManageAgentCancelInput>(
      `/api/v1/agent/ide/threads/${encode(threadId)}/chat/cancel`,
      data,
      options,
    );
  }

  /** Permanently deletes a user-owned Agentic thread and its durable messages. */
  deleteAgentThread(threadId: string, options?: RequestOptions) {
    return this.client.delete<T.ManageOkResponse>(
      `/api/v1/agent/ide/threads/${encode(threadId)}`,
      options,
    );
  }

  /** Legacy browser tools only. Never completes or substitutes for a durable Manage action. */
  completeAgentAction(
    actionId: string,
    data: T.ManageAgentActionCompletionInput,
    options?: RequestOptions<T.ManageAgentActionCompletionInput>,
  ) {
    return this.client.post<T.ManageOkResponse, T.ManageAgentActionCompletionInput>(
      `/api/v1/agent/browser/actions/${encode(actionId)}/complete`,
      data,
      options,
    );
  }

  /** Supplies a user answer requested by the Manage agent. */
  completeAgentQuestion(
    askId: string,
    data: T.ManageAgentQuestionCompletionInput,
    options?: RequestOptions<T.ManageAgentQuestionCompletionInput>,
  ) {
    return this.client.post<T.ManageOkResponse, T.ManageAgentQuestionCompletionInput>(
      `/api/v1/agent/ask/${encode(askId)}/complete`,
      data,
      options,
    );
  }

  /** Executes a reviewed runtime service operation through the project-scoped proxy. */
  executeServiceAction<TResponse extends JsonValue = JsonValue, TData extends JsonValue = JsonObject>(
    action: T.ManageServiceAction<TData>,
    options?: RequestOptions<TData>,
  ) {
    const path = safeServicePath(action.path);
    return this.client.request<TResponse, TData>({
      ...options,
      method: action.method,
      url: `/api/v1/proxy/${encode(action.service)}${path}`,
      ...(action.body === undefined ? {} : { data: action.body }),
    });
  }
}

export * from "./types.js";
export * from "./stream.js";
export * from "@faiber/sdk-core";

export * from "./durable.types.js";
export {ManageActionOperations} from "./operations.js";
