import type {JsonObject,JsonValue} from '@faiber/sdk-core';
export interface ChatMediaRetention {periods:Record<'direct'|'group'|'channel'|'ai',number>;version:number}
export interface ConnectorCallbackQuery {state?:string;code?:string|null;error?:string|null}
/** Trusted Task integration only. Arguments follow the selected Faiber tool schema; the server checks selected project and connection version. */
export interface FaiberTaskSyncInput {actor_id:string;organization_id:string;project:string;connection_version?:number|null;tool:'connection'|'tasks_list'|'task_get'|'task_workflow'|'task_transition';arguments?:JsonObject}
/** Provider-defined result of an admitted Faiber tool, or the connector version handshake. */
export type FaiberTaskSyncResult={version:number}|JsonValue;
