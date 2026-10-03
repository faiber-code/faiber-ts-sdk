import { test } from 'node:test';
import assert from 'node:assert/strict';
import { FaiberSDK, MemoryTokenProvider } from '../packages/sdk/dist/index.js';
import { AxiosHeaders } from 'axios';

test('education, select custom types and transfers preserve typed routes, auth and cancellation', async () => {
  const seen = [];
  const sdk = new FaiberSDK({domains:{profile:'https://profile.test',lms:'https://lms.test'},
    tokenProvider:new MemoryTokenProvider({accessToken:'education-token'}),
    axios:{adapter:async config=>{seen.push(config);return {data:{status:'success',data:{}},status:200,statusText:'OK',headers:{},config};}}});
  await sdk.profile.listEducations();
  await sdk.profile.educationDependencies();
  await sdk.profile.education.create({name:'Diploma'});
  await sdk.profile.educationInformation('user/id',{education_id:null,attendance_mode:'online',level:'beginner',description:'Notes'});
  await sdk.profile.customTypes.create({name:'job',value_type:'select',options:['بیکار']});
  await sdk.profile.operations.customTypeStorePost({name:'job',value_type:'select',options:['بیکار']});
  const controller=new AbortController();
  await sdk.lms.transferUserData({from_user_id:'source-uuid',to_user_id:'destination-uuid'},'transfer-123',{
    signal:controller.signal,headers:new AxiosHeaders({'idempotency-key':'wrong'})});
  assert.deepEqual(seen.map(v=>[v.method,v.url]),[
    ['get','/api/v1/education'],['get','/api/v1/education/dependencies'],['post','/api/v1/education'],
    ['put','/api/v1/profile/update/education-information/user%2Fid'],['post','/api/v1/custom-type'],
    ['post','/api/v1/custom-type'],['post','/api/v1/idp/option/transfer-user-data']]);
  assert.ok(seen.every(v=>v.headers.get('Authorization')==='Bearer education-token'));
  assert.equal(JSON.parse(seen[3].data).education_id,null);
  assert.equal(seen[6].headers.get('Idempotency-Key'),'transfer-123');
  assert.equal(seen[6].signal,controller.signal);
  assert.throws(()=>sdk.lms.transferUserData({from_user_id:'a',to_user_id:'b'},''),TypeError);
  assert.equal(seen.length,7);
});
