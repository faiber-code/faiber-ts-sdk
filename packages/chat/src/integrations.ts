import {ServiceApi,type JsonValue,type RequestOptions} from '@faiber/sdk-core';
export interface ChatIntegrationResponse<T>{data:T}
export interface ChatDocumentStatus {enabled:boolean;max_file_bytes:number;max_files:number;max_text_chars:number}
export interface ExtractedChatDocument {text:string;sha256:string;warnings:string[];pages:number|null}
export interface ConnectorProject {slug:string;name:string;task_enabled:boolean}
export interface ConnectorProjects {items:ConnectorProject[];selected:string[]}
export interface ConnectorProjectSelection {projects:string[]}
export interface ConnectorSelectedProjects {selected:string[]}
export interface ConnectorTool {name:string;requires_confirmation:boolean}
export interface ConnectorStatus {id:string;configured:boolean;connected:boolean;account:string|null;scopes:string[];tools:ConnectorTool[]}
export interface ConnectorList {items:ConnectorStatus[]}
export interface ConnectorAuthorization {authorization_url:string;authorization_origin?:string}
export interface ConnectorDisconnect {disconnected:boolean;provider_grant_revoked:boolean}
/** Provider-defined tool arguments and results are schema-extensible JSON, not executable instructions. */
export interface ConnectorToolInput {arguments:Record<string,JsonValue>}
export interface ConnectorToolResult<T=JsonValue> {kind:'connector_result'|'connector_approval';provider:string;tool:string;result?:T;action_id?:string;arguments?:Record<string,JsonValue>;expires_in_seconds?:number;requires_confirmation?:boolean;untrusted_content?:boolean}
export interface ConnectorAction {status:string;provider:string;tool:string;arguments:Record<string,JsonValue>}
export interface ConnectorApproval {action_id:string;status:'completed';untrusted_content:true;result:JsonValue}
export interface ConnectorCancellation {cancelled:boolean}
export interface ConversationHistoryQuery {q?:string;cursor?:string;limit?:number}
export interface ConversationHistoryItem {id:string;title:JsonValue;updated_at:string;preview:string}
export interface ConversationHistoryPage {items:ConversationHistoryItem[];next_cursor:string|null}
/** Authenticated user-owned integrations; permission failures preserve Axios status.
 * Uses the configured FaiberClient for Bearer/cookie auth and accepts cancellation. */
export class ChatIntegrationsApi extends ServiceApi {
 /** Document extraction limits; requires chat:ai. */
 documentStatus(options?:RequestOptions){return this.client.get<ChatIntegrationResponse<ChatDocumentStatus>>('/api/v1/document-status',undefined,options)}
 /** Extract explicitly uploaded document bytes; requires chat:ai and non-guest identity. Unsupported type/size returns400. Bytes are not persisted. */
 extractDocument(file:Blob,mime:string,options?:RequestOptions<Blob>){return this.client.post<ChatIntegrationResponse<ExtractedChatDocument>,Blob>('/api/v1/documents/extract',file,{...options,headers:{...options?.headers,'Content-Type':mime}})}
 /** List selected and eligible Faiber project sandboxes for the current connector. */
 projects(options?:RequestOptions){return this.client.get<ChatIntegrationResponse<ConnectorProjects>>('/api/v1/connectors/faiber/projects',undefined,options)}
 /** Select only currently authorized projects; stale/revoked connection returns409/403. */
 selectProjects(input:ConnectorProjectSelection,options?:RequestOptions<ConnectorProjectSelection>){return this.client.put<ChatIntegrationResponse<ConnectorSelectedProjects>,ConnectorProjectSelection>('/api/v1/connectors/faiber/projects',input,options)}
 /** List own connection status without credentials. Requires authenticated chat access. */
 list(options?:RequestOptions){return this.client.get<ChatIntegrationResponse<ConnectorList>>('/api/v1/connectors',undefined,options)}
 /** Begin provider authorization; navigate to the returned URL only after a user request. */
 connect(provider:string,options?:RequestOptions){return this.client.post<ChatIntegrationResponse<ConnectorAuthorization>>(`/api/v1/connectors/${encodeURIComponent(provider)}/connect`,{},options)}
 /** Revoke the current user's connector and pending actions. */
 disconnect(provider:string,options?:RequestOptions){return this.client.delete<ChatIntegrationResponse<ConnectorDisconnect>>(`/api/v1/connectors/${encodeURIComponent(provider)}`,options)}
 /** Invoke a provider tool with its declared schema. Writes return an approval action, never execute implicitly. T describes the provider-defined result payload. */
 invoke<T=JsonValue>(provider:string,tool:string,input:ConnectorToolInput,options?:RequestOptions<ConnectorToolInput>){return this.client.post<ChatIntegrationResponse<ConnectorToolResult<T>>,ConnectorToolInput>(`/api/v1/connectors/${encodeURIComponent(provider)}/tools/${encodeURIComponent(tool)}`,input,options)}
 /** Inspect a current-user action; IDs do not grant cross-user access. */
 action(id:string,options?:RequestOptions){return this.client.get<ChatIntegrationResponse<ConnectorAction>>(`/api/v1/connector-actions/${encodeURIComponent(id)}`,undefined,options)}
 /** Execute an explicitly approved, unexpired action after rechecking provider access; retries are durable. */
 approve(id:string,options?:RequestOptions){return this.client.post<ChatIntegrationResponse<ConnectorApproval>>(`/api/v1/connector-actions/${encodeURIComponent(id)}/approve`,{},options)}
 /** Cancel a current-user pending action. */
 cancel(id:string,options?:RequestOptions){return this.client.post<ChatIntegrationResponse<ConnectorCancellation>>(`/api/v1/connector-actions/${encodeURIComponent(id)}/cancel`,{},options)}
 /** Search own AI conversation history in SQL. Cursor is bound to q; changed search requires clearing cursor. */
 history(query:ConversationHistoryQuery={},options?:RequestOptions){return this.client.get<ChatIntegrationResponse<ConversationHistoryPage>>('/api/v1/conversations/history',{...query},options)}
}
