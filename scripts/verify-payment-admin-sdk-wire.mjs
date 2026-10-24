// Real owned Payment router/DB probe. No provider calls or fabricated HTTP responses.
import assert from 'node:assert/strict';
import {FaiberClient,MemoryTokenProvider} from '../packages/core/dist/index.js';
import {PaymentApi} from '../packages/payment/dist/index.js';
const base=process.env.INFERA_PAYMENT_SDK_BASE_URL;
assert.match(base??'',/^http:\/\/127\.0\.0\.1:\d+$/);
const actor='00000000-0000-0000-0000-000000000001';
const tokens=new MemoryTokenProvider();await tokens.setTokens({accessToken:'owned-gateway-fixture'});
const permissions='admin:gateway:read,admin:gateway:create,admin:gateway:update,admin:gateway:delete,admin:transaction:read,admin:transaction:verify';
const create=(headers={})=>new PaymentApi(new FaiberClient('payment',{domains:{payment:base},tokenProvider:tokens,axios:{timeout:10000,headers:{'x-user-id':actor,'x-user-roles':'test-operator','x-user-permissions':permissions,...headers}}}));
const api=create();let assertions=0;const same=(a,b)=>{assert.deepEqual(a,b);assertions++;};
const envelope=response=>{same(response.status,200);same(typeof response.data.status,'string');same(typeof response.data.message,'string');return response.data.data;};
const denied=async(fn,status)=>{await assert.rejects(fn,error=>error.response?.status===status);assertions++;};
const options=envelope(await api.gatewayOptions());same(options.providers.map(p=>p.value),['zarinpal','parsian','aqayepardakht','mock']);same(options.statuses.map(p=>p.value),['active','inactive']);
let gateway=envelope(await api.gateways.create({name:'Owned SDK credential-free gateway',provider:'zarinpal',status:'inactive',priority:7}));
same(typeof gateway.id,'number');same(gateway.options,null);same(gateway.sandbox,false);same(gateway.status,'inactive');const id=gateway.id;
for(const key of ['options','sandbox','status','created_at','updated_at']){assert.ok(Object.hasOwn(gateway,key));assertions++;}
same(envelope(await api.operations.gatewayShowGet(id)).id,id);
gateway=envelope(await api.gateways.update(id,{name:'Updated owned gateway',priority:8,sandbox:true}));same(gateway.priority,8);same(gateway.sandbox,true);same(gateway.name,'Updated owned gateway');
const page=envelope(await api.gateways.list({status:'inactive','page[number]':1,'page[size]':1}));same(page.data.length,1);same(page.meta.page,1);same(page.meta.page_size,1);assert.ok(page.meta.total_items>=2);assertions++;
const secondPage=envelope(await api.gateways.list({status:'inactive','page[number]':2,'page[size]':1}));same(secondPage.meta.page,2);same(secondPage.data.length,1);same(secondPage.data[0].id,id);
const bounded=envelope(await api.gateways.list({'page[number]':0,'page[size]':200}));same(bounded.meta.page,1);same(bounded.meta.page_size,100);
for(const value of ['-1','1.5','abc','18446744073709551616'])await denied(()=>api.gateways.list({'page[size]':value}),400);
const hugePage=envelope(await api.gateways.list({'page[number]':'18446744073709551615','page[size]':100}));same(hugePage.data.length,0);
const listed=envelope(await api.transactions.list({service_name:'sdk-seeded-finance','page[number]':1,'page[size]':2}));same(listed.transactions.data.length,2);same(listed.transactions.meta.total_items,3);same(listed.summaries.status.accepted,1200);same(listed.summaries.status.pending,1200);same(listed.summaries.status.rejected,0);
for(const row of listed.transactions.data){same(typeof row.uuid,'string');same(Object.hasOwn(row,'currency'),false);same(Object.hasOwn(row,'id'),false);same(Object.hasOwn(row,'description'),true);same(Object.hasOwn(row,'gateway'),true);}
same(envelope(await api.transactionStatus(process.env.INFERA_PAYMENT_SDK_PENDING_ID)),{status:'pending'});
const rejected=envelope(await api.rejectTransaction(process.env.INFERA_PAYMENT_SDK_PENDING_ID));same(rejected.verification.successful,false);same(rejected.verification.verifier_user_id,actor);same(rejected.transaction.status,'rejected');
const failedVerification=envelope(await api.verifyTransaction(process.env.INFERA_PAYMENT_SDK_VERIFY_ID));same(failedVerification.verification.successful,false);same(failedVerification.transaction.status,'rejected');same(failedVerification.verification.message,'transaction has no gateway authority');
const logs=envelope(await api.verificationLogs(process.env.INFERA_PAYMENT_SDK_PENDING_ID));same(logs.length,1);same(logs[0].resulting_status,'rejected');
const income=envelope(await api.dailyIncomeFor({days:7}));same(income.length,7);same(income.reduce((sum,p)=>sum+p.amount,0),1200);same(Object.hasOwn(income[0],'count'),false);
same(envelope(await api.gateways.delete(id)).id,id);await denied(()=>api.gateways.show(id),404);
await denied(()=>create({'x-user-permissions':'admin:gateway:read'}).gateways.create({name:'denied',provider:'zarinpal'}),403);
await denied(()=>create({'x-user-id':undefined}).gatewayOptions(),401);
await denied(()=>api.createPayment({amount:0,service_name:'sdk-negative',service_model:'order',service_id:'owned',queue_name:'owned'}),422);
await denied(()=>api.createPayment({amount:10,service_name:'2done',service_model:'2done_subscription',service_id:'owned',queue_name:'owned'}),403);
const controller=new AbortController();controller.abort();await assert.rejects(()=>api.gatewayOptions({signal:controller.signal}),error=>error.code==='ERR_CANCELED');assertions++;
console.log(JSON.stringify({status:'passed',id:'payment-admin-actual-sdk',assertions,scope:'Actual mounted Payment router, native gateway CRUD/query and transaction/report/audit/rejection/failure paths with real PostgreSQL/RabbitMQ. Transactions are explicit seeded fixtures; no provider payment success, bank callbacks, live JWT/gateway/cookie authorization or live business acceptance certified.'}));
