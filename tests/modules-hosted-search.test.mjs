import assert from 'node:assert/strict';
import test from 'node:test';
import {createServer} from 'node:http';
import {FaiberSDK, MemoryTokenProvider} from '../packages/sdk/dist/index.js';

// Real Axios loopback wire checks; this server is a transport fixture, not Modules.
async function fixture(t, status=200) {
 const seen=[];
 const server=createServer((req,res)=>{
  const url=new URL(req.url,'http://owned.invalid');seen.push({url,method:req.method,authorization:req.headers.authorization});
  const key=url.pathname.endsWith('seo-contents')?'seo_contents':url.pathname.slice('/api/v1/'.length);
  res.writeHead(status,{'content-type':'application/json','x-request-id':'hosted-wire'});
  res.end(JSON.stringify(status===200?{status:'success',message:'owned transport',data:{[key]:[],search:url.searchParams.get('search')?.trim()||null,page_number:2,page_size:7,total_items:23}}:{status:'error',message:'Owned failure'}));
 });
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 t.after(()=>new Promise(resolve=>{server.closeAllConnections();server.close(resolve);}));
 const sdk=new FaiberSDK({domains:{modules:`http://127.0.0.1:${server.address().port}`},authMode:'bearer',tokenProvider:new MemoryTokenProvider({accessToken:'owned-token'}),axios:{proxy:false}});
 return {sdk,seen};
}
const routes=[['categories','categoryListCategoriesGet','categories'],['tags','tagListTagsGet','tags'],['seo','seoContentListSeoContentsGet','seo-contents']];
for(const [resource,operation,path]of routes)test(`${resource} named and generated search preserve literal query, auth, server metadata and full response`,async t=>{
 const {sdk,seen}=await fixture(t);const search='  فارسی %_\\ /?&+  ';const controller=new AbortController();
 for(const call of [params=>sdk.modules[resource].list(params,{signal:controller.signal,timeout:5000}),params=>sdk.modules.operations[operation](params,{signal:controller.signal,timeout:5000})]){
  const response=await call({search,page_number:2,page_size:7});const request=seen.at(-1);
  assert.equal(request.url.pathname,'/api/v1/'+path);assert.equal(request.method,'GET');assert.equal(request.authorization,'Bearer owned-token');
  assert.equal(request.url.searchParams.get('search'),search);assert.equal(request.url.searchParams.get('page_number'),'2');assert.equal(request.url.searchParams.get('page_size'),'7');
  assert.equal(response.data.data.search,search.trim());assert.equal(response.data.data.total_items,23);assert.equal(response.data.data.page_number,2);assert.equal(response.data.data.page_size,7);
  assert.equal(response.status,200);assert.equal(response.headers['x-request-id'],'hosted-wire');assert.equal(response.config.signal,controller.signal);
 }
 assert.equal(seen.length,2);
});
test('omitted and blank search are transported without client filtering or pagination rewriting',async t=>{
 const {sdk,seen}=await fixture(t);
 for(const [resource,operation]of routes){
  const first=await sdk.modules[resource].list();assert.equal(first.data.data.search,null);assert.equal(seen.at(-1).url.searchParams.has('search'),false);
  const blank=await sdk.modules.operations[operation]({search:'   ',page_size:101});assert.equal(blank.data.data.search,null);assert.equal(seen.at(-1).url.searchParams.get('search'),'   ');assert.equal(seen.at(-1).url.searchParams.get('page_size'),'101');
 }
 assert.equal(seen.length,6);
});
for(const status of [400,401,403,500])test(`Modules search HTTP ${status} retains error context without retries or fallback`,async t=>{
 const {sdk,seen}=await fixture(t,status);
 await assert.rejects(sdk.modules.categories.list({search:'x'.repeat(129)}),error=>error.response?.status===status&&error.response.headers['x-request-id']==='hosted-wire');assert.equal(seen.length,1);
});
test('already cancelled search sends no HTTP request',async t=>{
 const {sdk,seen}=await fixture(t);const abort=new AbortController();abort.abort();
 await assert.rejects(sdk.modules.tags.list({search:'tag'},{signal:abort.signal}),error=>error.code==='ERR_CANCELED');assert.equal(seen.length,0);
});
