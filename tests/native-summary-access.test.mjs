import assert from 'node:assert/strict';
import test from 'node:test';
import {AxiosHeaders, AxiosError} from 'axios';
import {FaiberClient} from '../packages/core/dist/index.js';
import {ChatApi} from '../packages/chat/dist/index.js';
import {SessionApi} from '../packages/session/dist/index.js';

// Transport-unit checks only. Actual source/IDP/database and packed-native
// acceptance are separate gates; these adapter responses prove no business outcome.
for (const [service, Api] of [['chat',ChatApi],['session',SessionApi]]) {
  test(`${service} native summary administration retains bearer auth, JSON DELETE bodies and Axios context`,async()=>{
    const requests=[];
    const body={status:'success',data:{binding:{deployment_id:'owned',principal_user_id:'10000000-0000-4000-8000-000000000001',native_scope_id:null,scope_kind:'organization'},policy:null,pending_objects:0,active_grants:0,revocations:0}};
    const api=new Api(new FaiberClient(service,{domains:{[service]:'https://owned.invalid'},tokenProvider:{getTokens:()=>({accessToken:'owned-token'}),setTokens:()=>{}},axios:{adapter:async config=>{
      requests.push(config);return {config,data:body,status:200,statusText:'OK',headers:new AxiosHeaders({'x-request-id':'owned-wire'})};
    }}}));
    const signal=new AbortController().signal, options={signal,timeout:1234};
    const result=await api.operations.nativeSummaryAccessStatus(options);
    assert.equal(result.data,body);assert.equal(result.headers.get('x-request-id'),'owned-wire');
    await api.operations.saveNativeSummaryAccessPolicy({enabled:false,expected_revision:8,reason:'Pause collection'},options);
    await api.operations.revokeNativeSummaryObject({object_id:'20000000-0000-4000-8000-000000000001',reason:'Exclude source object'},options);
    await api.operations.restoreNativeSummaryObject('path/encoded',{reason:'Restore reviewed source object'},options);
    assert.deepEqual(requests.map(x=>[x.method,x.url]),[['get','/api/v1/summary-access'],['put','/api/v1/summary-access'],['post','/api/v1/summary-access/revocations'],['delete','/api/v1/summary-access/revocations/path%2Fencoded']]);
    assert.deepEqual(JSON.parse(requests[1].data),{enabled:false,expected_revision:8,reason:'Pause collection'});
    assert.deepEqual(JSON.parse(requests[3].data),{reason:'Restore reviewed source object'});
    for(const r of requests){assert.equal(r.headers.get('Authorization'),'Bearer owned-token');assert.equal(r.signal,signal);assert.equal(r.timeout,1234);}
  });
  test(`${service} current authority denials propagate without a success or fallback request`,async()=>{
    let calls=0;
    const api=new Api(new FaiberClient(service,{domains:{[service]:'https://owned.invalid'},axios:{adapter:async config=>{
      calls++;throw new AxiosError('denied','ERR_BAD_REQUEST',config,undefined,{config,data:{status:'error',error:'native_access_forbidden'},status:403,statusText:'Forbidden',headers:new AxiosHeaders()});
    }}}));
    await assert.rejects(api.operations.saveNativeSummaryAccessPolicy({enabled:true,expected_revision:0,reason:'Review'}),e=>e.response?.status===403&&e.response.data.error==='native_access_forbidden');
    assert.equal(calls,1);
  });
}
