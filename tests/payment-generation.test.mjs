import {serviceRoot} from './service-root.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import {cpSync,mkdtempSync,mkdirSync,readFileSync,writeFileSync,rmSync,symlinkSync} from 'node:fs';
import {join,resolve} from 'node:path';
import {tmpdir} from 'node:os';
import {execFileSync} from 'node:child_process';
const root=resolve(import.meta.dirname,'..');
test('Payment regeneration retains concrete nested records, required nulls and exact identifiers',()=>{
 const work=mkdtempSync(join(tmpdir(),'payment-sdk-generation-'));
 try {
  mkdirSync(join(work,'packages/payment'),{recursive:true});
  cpSync(join(root,'scripts'),join(work,'scripts'),{recursive:true});
  cpSync(join(root,'packages/payment/src'),join(work,'packages/payment/src'),{recursive:true});
  writeFileSync(join(work,'package.json'),JSON.stringify({type:'module'}));
  symlinkSync(join(root,'node_modules'),join(work,'node_modules'),'dir');
  const selected=JSON.parse(readFileSync(join(root,'service-contracts.json'),'utf8')).payment;
  const manifest=join(work,'manifest.json');writeFileSync(manifest,JSON.stringify({payment:selected}));
  const run=()=>execFileSync(process.execPath,[join(work,'scripts/generate-service-operations.mjs'),manifest,'payment'],{env:{...process.env,FAIBER_SERVICES_ROOT:serviceRoot(root)},stdio:'pipe'});
  run();const source=readFileSync(join(work,'packages/payment/src/operations.ts'),'utf8'),types=readFileSync(join(work,'packages/payment/src/operations.types.ts'),'utf8');
  for(const name of ['GatewayListResponse','GatewayResponse','GatewayOptionsResponse','TransactionListResponse','TransactionResponse','VerifyPaymentResponse','PaymentVerificationLogsResponse','DailyIncomeResponse','CreatePaymentResponse','PaymentHtmlResponse'])assert.ok(types.includes(`import("./types.js").${name}`),name);
  assert.doesNotMatch(types,/BackendJson<"crate::models::PagedResult<TransactionResponse>">/);
  assert.equal((source.match(/responseType: "text"/g)??[]).length,3);
  assert.match(source,/paymentWebCallbackPost\(provider: string/);
  assert.match(source,/gatewayShowGet\(id: number/);
  assert.match(source,/transactionVerifyPaymentPost\(uuid: string/);
  execFileSync(process.execPath,[join(root,'node_modules/typescript/bin/tsc'),'--noEmit','--strict','--skipLibCheck','--target','ES2022','--module','NodeNext','--moduleResolution','NodeNext',join(work,'packages/payment/src/operations.ts')],{stdio:'pipe'});
  run();assert.equal(readFileSync(join(work,'packages/payment/src/operations.ts'),'utf8'),source);assert.equal(readFileSync(join(work,'packages/payment/src/operations.types.ts'),'utf8'),types);
 } finally {rmSync(work,{recursive:true,force:true});}
});
