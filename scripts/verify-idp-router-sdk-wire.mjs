/** Targeted wire acceptance: actual IDP router, real database and compiled Axios SDK. */
import assert from 'node:assert/strict';
import {FaiberClient, MemoryTokenProvider} from '../packages/core/dist/index.js';
import {IdpApi} from '../packages/idp/dist/index.js';
const base=process.env.INFERA_IDP_SDK_BASE_URL;
assert.match(base??'',/^http:\/\/127\.0\.0\.1:\d+$/);
const user=process.env.INFERA_IDP_SDK_USER;
const api=new IdpApi(new FaiberClient('idp',{domains:{idp:base},axios:{timeout:10000}}));
const internal={headers:{Host:'idp.faiber.svc:8002','x-infera-idp-service-token':"c44baa7de10137eb6a0b4d9a097b44bbc971652c44a649b2bd0d01cdebea004f"}};
let assertions=0;
async function denied(action,status){await assert.rejects(action,error=>error.response?.status===status);assertions++;}
try {
 const health=await api.operations.routerStatusRouteGet();assert.equal(typeof health.data.data.version,'string');assertions++;
 const spec=await api.operations.routerOpenapiJsonGet();assert.equal(typeof spec.data.openapi,'string');assert.equal(typeof spec.data.info.title,'string');assert.equal(spec.data.data,undefined);assertions++;
 const discovery=await api.operations.oidcDiscoveryGet();assert.equal(discovery.data.issuer,'https://owned-idp.invalid');assert.equal(discovery.data.token_endpoint,'https://owned-idp.invalid/oauth2/token');assert.ok(discovery.data.scopes_supported.includes('openid'));assertions++;
 const jwks=await api.operations.oidcJwksGet();assert.equal(jwks.data.keys[0].kty,'RSA');assert.equal(jwks.data.keys[0].alg,'RS256');assert.equal(typeof jwks.data.keys[0].n,'string');assert.equal(jwks.data.keys[0].d,undefined);assertions++;
 const preflight=await api.operations.authValidateOptions();assert.equal(preflight.status,200);assert.ok(preflight.data==='' || preflight.data===undefined);assertions++;
 await denied(()=>api.operations.oidcUserinfoGet(),401);
 await denied(()=>api.operations.authGenerateSecureOneTimeTokenRoutePost(user),403);
 await denied(()=>api.operations.authGenerateSecureOneTimeTokenRoutePost('not-a-uuid',internal),400);
 await denied(()=>api.operations.authGenerateSecureOneTimeTokenRoutePost('00000000-0000-0000-0000-000000000000',internal),401);
 await denied(()=>api.operations.authGenerateSecureOneTimeTokenRoutePost(user,{headers:{Host:'idp.faiber.svc:8002'}}),401);
 await denied(()=>api.operations.authGenerateSecureOneTimeTokenRoutePost(user,{headers:{Host:'idp.faiber.svc:8002','x-infera-idp-service-token':'invalid-project-token-000000000000000000000000'}}),401);
 // A valid identity-project credential is required in addition to routing metadata.
 const issued=await api.operations.authGenerateSecureOneTimeTokenRoutePost(user,internal);assert.equal(typeof issued.data.data.token,'string');assertions++;
 const input={token:issued.data.data.token};
 const exchanged=await api.operations.authExchangeOneTimeTokenPost(input,internal);assert.equal(typeof exchanged.data.data.access_token,'string');assertions++;
 await denied(()=>api.operations.authExchangeOneTimeTokenPost(input,internal),400);
 const tokens=new MemoryTokenProvider({accessToken:exchanged.data.data.access_token});
 const signed=new IdpApi(new FaiberClient('idp',{domains:{idp:base},tokenProvider:tokens,axios:{timeout:10000}}));
 const who=await signed.operations.oidcUserinfoGet();assert.equal(who.data.sub,user);assert.equal(who.data.name,'SDK Fixture');assert.equal(who.data.email,null);assert.equal(who.data.roles,undefined);assertions++;
 const whoPost=await signed.operations.oidcUserinfoPost();assert.equal(whoPost.data.sub,user);assertions++;
 const credentials={token:exchanged.data.data.access_token,client_id:'1',client_secret:'owned-sdk-client-secret'};
 const active=await api.operations.oidcIntrospectPost(credentials);assert.equal(active.data.active,true);assert.equal(active.data.sub,user);assert.equal(active.data.token_type,'access_token');assertions++;
 await denied(()=>api.operations.oidcIntrospectPost({...credentials,client_secret:'wrong'}),401);
 const revoked=await api.operations.oidcRevokePost(credentials);assert.equal(revoked.status,200);assertions++;
 const inactive=await api.operations.oidcIntrospectPost(credentials);assert.deepEqual(inactive.data,{active:false});assertions++;
 await denied(()=>signed.operations.oidcUserinfoGet(),401);
 const logout=await api.operations.oidcLogoutPost();assert.equal(logout.status,204);assertions++;
 const abort=new AbortController();abort.abort();await assert.rejects(()=>api.operations.oidcDiscoveryGet({signal:abort.signal}),e=>e.code==='ERR_CANCELED');assertions++;
 console.log(JSON.stringify({status:'passed',assertions,scope:'Actual mounted IDP health/OpenAPI/discovery/JWKS/preflight, internal one-time issue/exchange/replay, scoped user-info, client introspection/revocation, logout and cancellation. Configured per-project credential required; spoofed Host and invalid/missing credentials denied. Actual Manage caller is tested by the parent service fixture.'}));
} catch(error){
 // Do not serialize Axios request bodies/headers or issued credentials on failure.
 console.error(JSON.stringify({status:'failed',assertions,error_name:error.name,message:error.message,http_status:error.response?.status,code:error.code}));process.exitCode=1;
}
