import test from 'node:test';
import assert from 'node:assert/strict';
import { MemoryTokenProvider } from '../packages/core/dist/index.js';
import { FaiberSDK } from '../packages/sdk/dist/index.js';
test('display snapshot and socket authorization share authenticated SDK transport', async () => {
  const tokenProvider = new MemoryTokenProvider(); await tokenProvider.setTokens({accessToken:'test-display'});
  const requests=[];
  const sdk=new FaiberSDK({domains:{lms:'https://lms.example'},tokenProvider,axios:{adapter:async config=>{
    requests.push(config);return {config,status:200,statusText:'OK',headers:{'cache-control':'no-store'},data:config.method==='get'?{version:'v',sessions:[],socket:{}}:{auth:'signed'}};
  }}});
  const controller=new AbortController();
  const snapshot=await sdk.lms.operations.displaySnapshotGet({signal:controller.signal});
  assert.equal(snapshot.data.version,'v');assert.equal(snapshot.headers['cache-control'],'no-store');
  const auth=await sdk.lms.operations.displayAuthorizePost({socket_id:'123.456',channel_name:'private-display'},{signal:controller.signal});
  assert.equal(auth.data.auth,'signed');assert.equal(requests.length,2);
  for(const request of requests){assert.equal(request.url,'/api/v1/classrooms/display');assert.equal(request.headers.get('Authorization'),'Bearer test-display');assert.equal(request.signal,controller.signal);}
  assert.deepEqual(JSON.parse(requests[1].data),{socket_id:'123.456',channel_name:'private-display'});
});
