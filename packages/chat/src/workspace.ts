import { ServiceApi,type RequestOptions } from '@faiber/sdk-core';
import type { ReviewProposal,ReminderInput,WorkspaceQueryResult } from '@faiber/faiber-task';
export type WorkspaceAssistantRole='action'|'chat';
export interface WorkspaceAssistantBinding {role:WorkspaceAssistantRole;assistant_id:string;name:string;version:number}
export interface WorkspaceAssistantBindingInput {assistant_id:string;knowledge_slug:'2done-assistants';enabled:boolean;expected_version:number}
export interface WorkspaceDraft {title:string;description:string;checklist:string[];project_id:string;owner_id:string|null;priority:'low'|'medium'|'high';item_type:'task'|'note';due_at:string|null;reminder:ReminderInput|null}
export interface WorkspaceCitation {title:string;url:string}
export interface WorkspaceResultBase {schema_version:'1.0.0';text:string;citations:WorkspaceCitation[];knowledge_release_id:string;retrieved_at:string}
export type WorkspaceAssistantResult = WorkspaceResultBase & (
 | {kind:'draft';draft:WorkspaceDraft}
 | {kind:'proposal';proposal:ReviewProposal}
 | {kind:'answer';record_ids:string[];query_id:number|null;data?:WorkspaceQueryResult}
 | {kind:'clarification'});
/** Explicit assistant roles; API calls inherit the configured caller authentication. */
export class ChatWorkspaceOperations extends ServiceApi {
 /** Inspect all role bindings, including disabled staged releases. Requires assistant:manage; preserves Axios errors and request options. */
 managedRoles(options?:RequestOptions){return this.client.get<ManagedWorkspaceRolesResponse>('/api/v1/admin/workspace-assistants',undefined,options)}
 /** Discover enabled Action/Chat role bindings; requires assistant:read. No list-order inference. */
 roles(options?:RequestOptions){return this.client.get<WorkspaceAssistantBindingsResponse>('/api/v1/workspace-assistants',undefined,options)}
 /** Bind a managed assistant to a workspace role. Requires assistant:manage and a published compatible Knowledge contract before enabling. */
 bind(role:WorkspaceAssistantRole,data:WorkspaceAssistantBindingInput,options?:RequestOptions<WorkspaceAssistantBindingInput>){return this.client.put<WorkspaceAssistantBindingResponse,WorkspaceAssistantBindingInput>(`/api/v1/admin/workspace-assistants/${role}`,data,options)}
}

export interface WorkspaceAssistantBindingsResponse {status:string;data:WorkspaceAssistantBinding[]}
export interface WorkspaceAssistantBindingResult {role:WorkspaceAssistantRole;assistant_id:string;enabled:boolean;version:number}
export interface WorkspaceAssistantBindingResponse {status:string;data:WorkspaceAssistantBindingResult}

export interface ManagedWorkspaceRole {organization_id:string;role:WorkspaceAssistantRole;assistant_id:string;knowledge_slug:string;enabled:boolean;version:number}
export interface ManagedWorkspaceRolesResponse {status:string;data:ManagedWorkspaceRole[]}
