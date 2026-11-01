import {ServiceApi,type RequestOptions} from '@faiber/sdk-core';
export type DoxTransferStatus='completed'|'processing'|'failed';
export type DoxTransactionKind='allocation'|'task'|'purchase';
export interface DoxTransactionQuery {account?:string;direction?:'all'|'in'|'out';kind?:'all'|DoxTransactionKind;status?:DoxTransferStatus;page?:number;page_size?:number}
export interface DoxTransaction {id:string;source:string;destination:string;amount:number;kind:DoxTransactionKind;source_id:string;title:string;created_at:string;status:DoxTransferStatus;error?:'insufficient'|'unavailable'}
export interface DoxAccountBalance {account:string;balance:number}
export interface DoxSpaceSummary {treasury:number;wallets:number;issued:number;returned:number;paid:number}
export interface DoxTransactionPage {items:DoxTransaction[];total:number;page:number;page_size:number;volume:number;accounts:DoxAccountBalance[];summary:DoxSpaceSummary}

export type DoxMode='distributed'|'managed';
export interface DoxConfigureCommand {type:'dox_configure';space_id:string;enabled:boolean;mode:DoxMode;members:string[];version:number}
export interface DoxTransferCommand {type:'dox_transfer';space_id:string;source:string|null;destination:string|null;amount:number;kind:'task'|'purchase';source_id:string;title:string}
export interface DoxCommandIdentity {id:string;actor_id:string}
export type DoxCommand = DoxCommandIdentity & (DoxConfigureCommand|DoxTransferCommand);
export interface DoxCommandReceipt {accepted?:boolean;enabled?:boolean;mode?:DoxMode;superseded?:boolean}
export interface DoxLedgerRead {profile_id:string;space_id:string;dox_history_before?:string}
export interface DoxLedgerPage {balance:number;treasury:number;history:DoxLedgerPosting[];history_has_more:boolean;history_cursor:string|null}
export interface DoxLedgerManagementRead {profile_id:string;space_id:string;dox_management:Omit<DoxTransactionQuery,'status'>}
export interface AssetDoxResponse<T> {status:string;message:string;data:T}
/** Generic space-scoped asset ledger. These are trusted server integration methods;
 * supply x-do-service-token using request options. Never expose service credentials
 * to browser code. The caller must enforce membership and action permissions first.
 * Task is the admitted ledger authority; Social cannot request space management.
 * All methods preserve Axios errors, metadata and cancellation. */
export class DoxLedgerApi extends ServiceApi {
 /** Configure the closed ledger or transfer existing Dox atomically. Stable operation IDs are idempotent; task/purchase domain IDs prevent duplicate payouts. 409 on insufficient funds or conflicting replays. */
 execute(input:DoxCommand,options?:RequestOptions<DoxCommand>){return this.client.post<AssetDoxResponse<DoxCommandReceipt>,DoxCommand>('/api/v1/internal/do/execute',input,options)}
 /** Read one member's balance and cursor-paginated history; at most 100 postings per page. */
 read(input:DoxLedgerRead,options?:RequestOptions<DoxLedgerRead>){return this.client.post<AssetDoxResponse<DoxLedgerPage>,DoxLedgerRead>('/api/v1/internal/do/read',input,options)}
 /** Read confirmed space postings and balances. Page is one-based, size1..100; direction requires an account. Only Task credentials are accepted. */
 management(input:DoxLedgerManagementRead,options?:RequestOptions<DoxLedgerManagementRead>){return this.client.post<AssetDoxResponse<DoxTransactionPage>,DoxLedgerManagementRead>('/api/v1/internal/do/read',input,options)}
}

export type DoxLedgerPosting=Omit<DoxTransaction,'status'|'error'>;
