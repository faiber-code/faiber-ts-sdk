import assert from 'node:assert/strict';
import test from 'node:test';
import {FaiberClient,MemoryTokenProvider} from '../packages/core/dist/index.js';
import {IdpApi} from '../packages/idp/dist/index.js';
function fixture(body={data:{token:'single-use-fixture'}}){const requests=[];const api=new IdpApi(new FaiberClient('idp',{domains:{idp:'https://idp.example.test'},authMode:'bearer',tokenProvider:new MemoryTokenProvider({accessToken:'access-secret'}),axios:{adapter:async config=>{requests.push(config);return {config,status:200,statusText:'OK',headers:{},data:body}}}}));return{api,requests};}
test('link transfer authenticates through SDK and never navigates with the access token',async()=>{
 const {api,requests}=fixture();const destination='https://idp.example.test/oauth2/authorize?state=fixture';const url=new URL(await api.authenticatedCustomOauthLinkUrl('google',destination,'https://idp.example.test'));
 assert.equal(requests.length,1);assert.equal(requests[0].method,'post');assert.equal(requests[0].url,'/api/v1/auth/generate/one-time');assert.equal(requests[0].headers.get('Authorization'),'Bearer access-secret');
 assert.equal(url.origin+url.pathname,'https://idp.example.test/api/v1/auth/token-login');assert.equal(url.searchParams.get('token'),'single-use-fixture');assert.ok(!url.href.includes('access-secret'));
 const link=new URL(url.searchParams.get('redirect'));assert.equal(link.origin,url.origin);assert.equal(link.searchParams.get('intent'),'link');assert.equal(link.searchParams.get('redirect'),destination);
});
test('invalid origins fail before minting a transfer and missing code never yields a URL',async()=>{
 const {api,requests}=fixture();for(const origin of ['http://idp.example.test','https://user:pass@idp.example.test','https://idp.example.test/#secret'])await assert.rejects(api.authenticatedCustomOauthLinkUrl('google','https://app.example.test',origin),TypeError);assert.equal(requests.length,0);
 await assert.rejects(fixture({data:{}}).api.authenticatedCustomOauthLinkUrl('google','https://app.example.test','https://idp.example.test'),TypeError);
});
