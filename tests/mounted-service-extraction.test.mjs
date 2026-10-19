import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,mkdirSync,writeFileSync,readFileSync,rmSync} from 'node:fs';
import {join,resolve} from 'node:path';
import {tmpdir} from 'node:os';
import {execFileSync} from 'node:child_process';
const sdk=resolve(import.meta.dirname,'..');
test('source extraction follows Social main aliases/admin mounts and Version raw OpenAPI instead of stale annotations',()=>{
 const root=mkdtempSync(join(tmpdir(),'sdk-mounted-extraction-'));
 const put=(name,text)=>{mkdirSync(resolve(root,name,'..'),{recursive:true});writeFileSync(join(root,name),text);};
 try {
  const services=Object.keys(JSON.parse(readFileSync(join(sdk,'service-contracts.json'))));
  for(const service of services){const directory=service==='version'?'infera_version':`infera-${service}`;put(`${directory}/src/router.rs`,'pub fn routes() -> Router { Router::new().route("/health",get(status)) } async fn status()->Json<String>{unimplemented!()}');}
  put('infera-social/src/main.rs',`use crate::discovery::public_routes as discovery;
async fn main(){let app=Router::new().route("/health",get(health)).merge(discovery()).nest("/api/v1/admin/social",crate::admin::router());}
async fn health()->Json<ApiResponse<Health>>{unimplemented!()}
fn unused()->Router{Router::new().route("/not-mounted",get(health))}`);
  put('infera-social/src/discovery.rs','pub fn public_routes()->Router{Router::new().route("/api/v1/public/posts",get(feed))} async fn feed(Query(q):Query<Feed>)->Json<ApiResponse<Vec<Item>>>{unimplemented!()}');
  put('infera-social/src/admin.rs','pub fn router()->Router{Router::new().route("/review",get(review))} async fn review()->Json<ApiResponse<Review>>{ctx.require("social:content:read")?;}');
  put('infera_version/src/router.rs',`pub fn routes()->Router{Router::new().route("/health",get(status_route)).route("/api/openapi.json",get(openapi_json))}
#[utoipa::path(get,path="/")] async fn status_route()->impl IntoResponse{Json(APIResponse{data:HealthResponse{version:"fixture"}})}
async fn openapi_json()->impl IntoResponse{Json(ApiDoc::openapi())}`);
  const output=join(root,'contracts.json');execFileSync(process.execPath,[join(sdk,'scripts/extract-service-contracts.mjs'),output],{env:{...process.env,FAIBER_SERVICES_ROOT:root},stdio:'pipe'});
  const m=JSON.parse(readFileSync(output));assert.deepEqual(m.social.map(e=>e.path),['/api/v1/admin/social/review','/api/v1/public/posts','/health']);
  assert.deepEqual(m.social[0].permissions,['social:content:read']);assert.equal(m.social[1].query,'Feed');assert.equal(m.social[1].response,'Vec<Item>');
  assert.equal(m.version.find(e=>e.path==='/health').response,'HealthResponse');const openapi=m.version.find(e=>e.path==='/api/openapi.json');assert.equal(openapi.response,'utoipa::openapi::OpenApi');assert.equal(openapi.responseEnvelope,'raw');
 } finally {rmSync(root,{recursive:true,force:true});}
});
