import assert from 'node:assert/strict';
import test from 'node:test';
import { AxiosError, AxiosHeaders } from 'axios';
import { FaiberClient } from '../packages/core/dist/index.js';
import { IdpApi } from '../packages/idp/dist/index.js';
const revision = 'a'.repeat(64);
const user = '11111111-1111-4111-8111-111111111111';
const role = '22222222-2222-4222-8222-222222222222';
const snapshot = {user_id:user,user_status:1,revision,memberships:[
  {id:'row-1',role_id:role,status:0,role_name:'Existing',role_status:1,created_at:'2026-10-20T00:00:00Z',updated_at:null},
  {id:'row-2',role_id:role,status:1,role_name:null,role_status:null,created_at:'2026-10-20T01:00:00Z',updated_at:null}
]};
function fixture(reply) {
  const requests=[];
  const api=new IdpApi(new FaiberClient('idp',{domains:{idp:'https://owned.example.test'},axios:{adapter:async config=>{
    requests.push(config);
    return {config,status:200,statusText:'OK',headers:new AxiosHeaders({'x-request-id':'owned-wire','cache-control':'private, no-store'}),data:reply?.(config)??{status:'success',message:'ok',data:snapshot}};
  }}}));
  return {api,requests};
}
test('IDP membership read preserves stored rows, opaque revision and full response',async()=>{
  const {api,requests}=fixture();const signal=new AbortController().signal;
  const response=await api.roleMemberships('user/encoded',{signal,timeout:1200});
  assert.deepEqual(response.data.data,snapshot);
  assert.equal(response.headers.get('cache-control'),'private, no-store');
  assert.equal(requests[0].url,'/api/v1/users/user%2Fencoded/role-memberships');
  assert.equal(requests[0].signal,signal);assert.equal(requests[0].timeout,1200);
  await api.operations.userRoleMembershipsGet(user);
  assert.equal(requests[1].method,'get');
});
test('IDP additions send only explicit additions without a read or destructive role union',async()=>{
  const payload={status:'success',message:'ok',data:{snapshot,added_role_ids:[role]}};
  const {api,requests}=fixture(()=>payload);
  const response=await api.addRoleMemberships(user,{add_role_ids:[role]});
  assert.equal(response.data,payload);assert.equal(requests.length,1);
  assert.deepEqual(JSON.parse(requests[0].data),{add_role_ids:[role]});
  assert.equal(requests[0].method,'post');
  await api.operations.userRoleMembershipsPost(user,{add_role_ids:[role]});
  assert.deepEqual(JSON.parse(requests[1].data),{add_role_ids:[role]});
  assert.ok(requests.every(r=>r.url.endsWith('/role-memberships')));
});
test('facade and generated replacements bind the exact reviewed revision as quoted If-Match',async()=>{
  const {api,requests}=fixture();const headers=new AxiosHeaders({'if-match':'"do-not-use"','x-owned':'keep'});
  const signal=new AbortController().signal;
  const options={headers,signal,timeout:1700};
  await api.changeRoles(user,{roles:[role]},revision,options);
  await api.operations.userChangeRolesPatch(user,{roles:[role]},revision,options);
  await api.operations.userChangeRolesPut(user,{roles:[role]},revision,options);
  assert.equal(requests.length,3);assert.deepEqual(requests.map(r=>r.method),['patch','patch','put']);
  for(const request of requests){
    assert.equal(request.headers.get('If-Match'),`"${revision}"`);
    assert.equal(request.headers.get('x-owned'),'keep');assert.equal(request.signal,signal);assert.equal(request.timeout,1700);
    assert.deepEqual(JSON.parse(request.data),{roles:[role]});
  }
  assert.equal(headers.get('if-match'),'"do-not-use"','caller-owned headers remain unchanged');
});
test('missing or malformed revision fails before any destructive request',()=>{
  const {api,requests}=fixture();
  for(const invalid of [undefined,null,'','"'+revision+'"','A'.repeat(64),'x'.repeat(64),{}]){
    assert.throws(()=>api.changeRoles(user,{roles:[role]},invalid),TypeError);
    assert.throws(()=>api.operations.userChangeRolesPatch(user,{roles:[role]},invalid),TypeError);
    assert.throws(()=>api.operations.userChangeRolesPut(user,{roles:[role]},invalid),TypeError);
  }
  assert.equal(requests.length,0);
});
test('a stale replacement surfaces 409 once and never fetches a fresh revision to apply stale edits',async()=>{
  let calls=0;
  const api=new IdpApi(new FaiberClient('idp',{domains:{idp:'https://owned.example.test'},axios:{adapter:async config=>{
    calls++;assert.equal(config.method,'patch');assert.equal(config.headers.get('If-Match'),`"${revision}"`);
    throw new AxiosError('stale revision','ERR_BAD_REQUEST',config,undefined,{config,status:409,statusText:'Conflict',headers:new AxiosHeaders(),data:{status:'error',message:'membership revision conflict'}});
  }}}));
  await assert.rejects(api.changeRoles(user,{roles:[role]},revision),error=>error.response?.status===409);
  assert.equal(calls,1);
});
