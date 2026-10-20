import assert from 'node:assert/strict';
import test from 'node:test';
import { AxiosHeaders } from 'axios';
import { FaiberSDK, MemoryTokenProvider } from '../packages/sdk/dist/index.js';

test('Knowledge publication and release readback preserve release identity and full Axios context',async()=>{
 const seen=[];
 const wire={data:{id:'release',knowledge_base_id:'base',version:2,manifest:{schema_version:'1.0.0',release_version:2,knowledge_base:{id:'base'},groups:[],items:[],edges:[],rules:[]},checksum_sha256:'e'.repeat(64),status:'published',published_by:null,published_at:'2026-10-20T00:00:00Z',retired_at:null}};
 const sdk=new FaiberSDK({domains:{},defaultDomain:'https://owned.test',tokenProvider:new MemoryTokenProvider({accessToken:'owned-token'}),axios:{adapter:async config=>{seen.push(config);return{status:200,statusText:'OK',headers:new AxiosHeaders({'x-request-id':'owned-wire'}),config,data:wire};}}});
 const controller=new AbortController();
 const publication=await sdk.knowledge.publish('base/a',{signal:controller.signal,timeout:3000});
 assert.equal(seen[0].url,'/api/v1/knowledge-bases/base%2Fa/publish');assert.equal(seen[0].method,'post');assert.equal(seen[0].headers.get('Authorization'),'Bearer owned-token');assert.equal(seen[0].signal,controller.signal);assert.equal(seen[0].timeout,3000);
 assert.equal(publication.data.data.id,'release');assert.equal(publication.data.data.knowledge_base_id,'base');assert.equal(publication.headers.get('x-request-id'),'owned-wire');
 await sdk.knowledge.release('release/a');assert.equal(seen[1].url,'/api/v1/knowledge-releases/release%2Fa');assert.equal(seen[1].method,'get');
 const canonical=await sdk.knowledge.operations.routesPublishPost('base/a');assert.deepEqual(canonical.data,wire);assert.equal(seen[2].url,seen[0].url);
 await sdk.knowledge.operations.routesGetReleaseGet('release/a');assert.equal(seen[3].url,seen[1].url);
});
