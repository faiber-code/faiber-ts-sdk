import { test } from 'node:test';
import assert from 'node:assert/strict';
import { FaiberSDK, MemoryTokenProvider } from '../packages/sdk/dist/index.js';

test('job and delivery prices preserve values and explicit nulls through both SDK APIs', async () => {
  const seen=[];
  const sdk=new FaiberSDK({domains:{profile:'https://profile.test',lms:'https://lms.test'},
    tokenProvider:new MemoryTokenProvider({accessToken:'test-token'}),
    axios:{adapter:async config=>{seen.push(config);return {data:{status:'success',data:{}},status:200,statusText:'OK',headers:{},config};}}});
  await sdk.profile.personalInformation('user/id',{job:'مهندس'});
  await sdk.profile.operations.profileUpdatePersonalPatch('user/id',{job:null});
  await sdk.lms.courses.create({name:'Course',title:'Course',status:'active',in_person_price:'1200.50',online_price:'800.25'});
  await sdk.lms.operations.courseUpdateCoursePatch('course/id',{online_price:null});
  assert.deepEqual(seen.map(c=>[c.method,c.url]),[
    ['put','/api/v1/profile/update/personal-information/user%2Fid'],
    ['patch','/api/v1/profile/update/personal-information/user%2Fid'],
    ['post','/api/v1/courses'],['patch','/api/v1/courses/course%2Fid']]);
  assert.deepEqual(JSON.parse(seen[0].data),{job:'مهندس'});
  assert.deepEqual(JSON.parse(seen[1].data),{job:null});
  assert.equal(JSON.parse(seen[2].data).in_person_price,'1200.50');
  assert.equal(JSON.parse(seen[2].data).online_price,'800.25');
  assert.deepEqual(JSON.parse(seen[3].data),{online_price:null});
  assert.ok(seen.every(c=>c.headers.get('Authorization')==='Bearer test-token'));
});
