import type { PaymentApi, Gateway, Transaction, TransactionListResponse, GatewayOptionsResponse, DailyIncome, GatewayDestroyDeleteResponse } from '@faiber/faiber-payment';
declare const api: PaymentApi;
declare const gateway: Gateway;
const id: number = gateway.id;
const nullableStatus: string | null = gateway.status;
// @ts-expect-error serialized optional gateway fields are present even when null
const missingStatus: typeof gateway.status = undefined;
// @ts-expect-error gateway IDs are integer wire identifiers
api.gateways.show('12');
// @ts-expect-error generated operations retain integer IDs too
api.operations.gatewayShowGet('12');
// @ts-expect-error transaction UUIDs cannot be numeric
api.verificationLogs(12);
declare const transaction: Transaction;
// @ts-expect-error the Rust transaction response declares no currency field
transaction.currency;
// @ts-expect-error the wire record uses uuid, not id
transaction.id;
declare const list: TransactionListResponse;
const rows: Transaction[] = list.data.transactions.data;
const page: number = list.data.transactions.meta.page;
const total: number = list.data.summaries.status.accepted;
declare const options: GatewayOptionsResponse;
const value: string = options.data.providers[0]!.value;
declare const point: DailyIncome;
// @ts-expect-error daily income returns no count field
point.count;
declare const deleted: GatewayDestroyDeleteResponse;
const record: Gateway = deleted.data;
// @ts-expect-error APIResponse message is required
const incomplete: GatewayDestroyDeleteResponse = { status: 'success', data: gateway };
void [id,nullableStatus,missingStatus,rows,page,total,value,record,incomplete];
