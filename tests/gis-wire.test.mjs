import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { AxiosHeaders } from 'axios';
import { FaiberClient } from '../packages/core/dist/index.js';
import { GisApi } from '../packages/gis/dist/index.js';
import { gisContracts } from '../scripts/gis-contracts.mjs';
function fixture(responseData={}) {
 const requests=[];const api=new GisApi(new FaiberClient('gis',{domains:{gis:'https://gis.fixture.test'},getAuthorization:()=> 'Bearer owned-fixture',axios:{adapter:async config=>{requests.push(config);return {config,data:responseData,status:200,statusText:'OK',headers:new AxiosHeaders({'x-gis-revision':'7','content-encoding':'gzip'})};}}}));return {api,requests};
}
test('GIS candidate explicitly maps every source-reviewed native operation and envelope',()=>{
 const manifest=JSON.parse(readFileSync(new URL('../service-contracts.json',import.meta.url)));
 const matrix=JSON.parse(readFileSync(new URL('../contracts/service-capabilities/gis.json',import.meta.url)));
 assert.deepEqual(manifest.gis.map(x=>`${x.method} ${x.path}`).sort(),matrix.operations.map(x=>x.id).sort());
 const operations=readFileSync(new URL('../packages/gis/src/operations.ts',import.meta.url),'utf8');
 for(const route of matrix.operations.map(x=>x.id)) {
  const contract=gisContracts['gis:'+route];assert.ok(contract?.response && contract?.auth && contract?.purpose,route);
  assert.ok(operations.includes(`* Calls \`${route}\``),route);
 }
 assert.ok(!readFileSync(new URL('../packages/gis/src/operations.types.ts',import.meta.url),'utf8').includes('= BackendJson<'));
});
test('GIS binary tiles override JSON transport and preserve revision and encoding headers',async()=>{
 const bytes=new Uint8Array([0,255,128,1]).buffer;const {api,requests}=fixture(bytes);
 const signal=new AbortController().signal;const response=await api.operations.tile('dataset/encoded',2,1,3,{responseType:'json',signal,timeout:2500});
 assert.equal(requests[0].url,'/api/v1/datasets/dataset%2Fencoded/tiles/2/1/3');assert.equal(requests[0].responseType,'arraybuffer');assert.equal(requests[0].signal,signal);assert.equal(requests[0].timeout,2500);assert.equal(response.data,bytes);assert.equal(response.headers.get('x-gis-revision'),'7');assert.equal(response.headers.get('content-encoding'),'gzip');
});
test('GIS edits preserve revisions, feature IDs and separate publication decisions',async()=>{
 const {api,requests}=fixture({status:'success',data:{revision:8,feature_ids:['node/one']}});
 const batch={expected_revision:7,reason:'Verified correction',features:[{id:'node/one',geometry:{type:'Point',coordinates:[49,37]},properties:{name:'رشت'}}]};
 const result=await api.operations.writeFeatures('id',batch);assert.deepEqual(JSON.parse(requests[0].data),batch);assert.deepEqual(result.data.data.feature_ids,['node/one']);assert.equal(requests.length,1);
 await api.operations.deleteFeature('id','node/one',{expected_revision:8,reason:'Duplicate feature'});assert.equal(requests[1].method,'put');assert.equal(requests[1].url,'/api/v1/datasets/id/features/node%2Fone');
 await api.operations.publishMap('map',{expected_revision:1,status:'published',reason:'Reviewed map'});assert.equal(requests[2].url,'/api/v1/maps/map/publish');assert.equal(requests.length,3);
});
test('GIS search, import retries and personal places retain their independent contracts',async()=>{
 const {api,requests}=fixture({data:[]});
 const search={q:'کافه',bbox:'48,36,50,38',lat:37,lon:49,radius:5000,limit:20};await api.operations.places(search);assert.deepEqual(requests[0].params,search);
 await api.operations.retryImport('job/one');assert.equal(requests[1].url,'/api/v1/imports/job%2Fone/retry');assert.equal(requests[1].data,undefined);
 await api.operations.updatePersonalPlace('private',{name:'Home',note:'Private note',category:'home',longitude:49,latitude:37,expected_revision:4});assert.equal(JSON.parse(requests[2].data).expected_revision,4);assert.equal(requests[2].url,'/api/v1/my-places/private');assert.equal(requests.length,3);
});
