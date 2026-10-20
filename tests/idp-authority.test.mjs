import assert from 'node:assert/strict';
import test from 'node:test';
import { AxiosHeaders } from 'axios';
import { FaiberClient } from '../packages/core/dist/index.js';
import { IdpApi, IdpRoleFilterError } from '../packages/idp/dist/index.js';
const uid='11111111-1111-4111-8111-111111111111',rid='aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa';
const marker={version:1,role_id:null,role_name:'reviewer',active_membership:true,user_status:'enabled'};
const body=()=>({status:'success',message:'ok',data:{users:[{id:uid,status:1,roles:[{id:rid,name:'reviewer'}]}],page:1,per_page:100,total:1,role_filter:{...marker}}});
function fixture(reply){const requests=[];const api=new IdpApi(new FaiberClient('idp',{domains:{idp:'https://owned.example.test'},axios:{adapter:async config=>{requests.push(config);return {config,data:reply(),status:200,statusText:'OK',headers:new AxiosHeaders({'x-request-id':'owned-request','cache-control':'private, no-store'})};}}}));return{api,requests};}
test('current grant helper preserves the native observation and full HTTP response',async()=>{
 const payload={status:'success',message:'ok',data:{user_id:uid,service:'gis',active:true,permissions:['gis:dataset:manage'],revision:'a'.repeat(64),checked_at:'2026-10-20T00:00:00Z'}};
 const{api,requests}=fixture(()=>payload);const signal=new AbortController().signal;const response=await api.authority.currentPermissions('subject/encoded',{service:'gis'},{signal,timeout:1000});
 assert.equal(response.data,payload);assert.equal(response.headers.get('cache-control'),'private, no-store');assert.equal(requests[0].url,'/api/v1/acl/users/subject%2Fencoded/effective-permissions');assert.deepEqual(requests[0].params,{service:'gis'});assert.equal(requests[0].signal,signal);
 const generated=await api.operations.effectivePermissionsReadGet('subject/encoded',{service:'gis'},{signal,timeout:1000});assert.equal(generated.data,payload);assert.equal(requests[1].url,requests[0].url);assert.deepEqual(requests[1].params,{service:'gis'});
});
test('active role helper requires native acknowledgement and keeps current filters authoritative',async()=>{
 const{api,requests}=fixture(body);const response=await api.authority.activeRoleUsers({role_name:'reviewer',status:'disabled',page:1,per_page:100});
 assert.equal(response.data.data.users[0].id,uid);assert.equal(response.headers.get('x-request-id'),'owned-request');assert.equal(requests.length,1);assert.equal(requests[0].params.status,'enabled');
 const withId=fixture(()=>{const result=body();result.data.role_filter.role_id=rid;return result;});await withId.api.authority.activeRoleUsers({role_name:'reviewer',role_id:rid.toUpperCase()});
 const empty=fixture(()=>{const result=body();result.data.users=[];result.data.total=0;return result;});assert.equal((await empty.api.authority.activeRoleUsers({role_name:'reviewer'})).data.data.total,0);
});
test('unconfirmed filters and inconsistent members fail once without an all-user fallback',async()=>{
 const mutations=[b=>delete b.data.role_filter,b=>b.data.role_filter.version=0,b=>b.data.role_filter.role_name='other',b=>b.data.role_filter.role_id=rid,b=>b.data.role_filter.active_membership=false,b=>b.data.role_filter.user_status=null,b=>b.data.users[0].status=0,b=>b.data.users[0].roles=[],b=>b.data.users=[null],b=>b.data.users=Array(101).fill(b.data.users[0])];
 for(const mutate of mutations){const{api,requests}=fixture(()=>{const result=body();mutate(result);return result;});await assert.rejects(api.authority.activeRoleUsers({role_name:'reviewer'}),error=>error instanceof IdpRoleFilterError&&error.code==='idp_role_filter_unconfirmed');assert.equal(requests.length,1);}
});

test('role grant helpers retain the reviewed revision, deliberate delta and transport options', async()=>{
 const payload={status:'success',message:'ok',data:{role_id:rid,role_name:'reviewer',revision:'a'.repeat(64),permission_ids:[uid],permissions:[{id:uid,name:'message:notification:self:read'}],stored_grant_count:1,max_delta_entries:4096}};
 const {api,requests}=fixture(()=>payload);const signal=new AbortController().signal;
 const observed=await api.authority.roleGrants('role/encoded',{signal,timeout:1300});
 assert.equal(observed.data,payload);assert.equal(observed.headers.get('cache-control'),'private, no-store');
 assert.equal(requests[0].url,'/api/v1/acl/roles/role%2Fencoded/permission-grants');assert.equal(requests[0].signal,signal);
 const delta={expected_revision:payload.data.revision,add:[uid],remove:[]};
 const changed=await api.authority.changeRoleGrants(rid,delta,{signal,timeout:1500});assert.equal(changed.data,payload);
 assert.deepEqual(JSON.parse(requests[1].data),delta);assert.equal(requests[1].method,'patch');assert.equal(requests[1].timeout,1500);
 await api.operations.aclReadGet(rid,{signal});await api.operations.aclChangePatch(rid,delta,{signal});
 assert.equal(requests[2].method,'get');assert.equal(requests[3].method,'patch');assert.deepEqual(JSON.parse(requests[3].data),delta);
});
