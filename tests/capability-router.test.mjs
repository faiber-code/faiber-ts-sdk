import assert from 'node:assert/strict';
import test from 'node:test';
import {sourceIndex} from '../scripts/capability-source.mjs';
import {mountedRouterOperations} from '../scripts/capability-router.mjs';

test('mounted graph follows merged variables and nested aliases while excluding unused routers',()=>{
  const files=[sourceIndex(`use crate::{records::routes as item_routes, health::check};
pub fn app() -> Router {
 let protected=Router::new().route("/health", get(check));
 let ignored=Router::new().route("/not-mounted",get(check));
 Router::new().merge(protected).nest("/api/v1",item_routes())
}`, 'example/src/router.rs'),
    sourceIndex(`pub fn routes() -> Router { Router::new().route("/items", get(list).post(create)) }
pub async fn list() { ctx.require("items:read")?; }
pub async fn create(Json(body): Json<CreateItem>) { ctx.require("items:write")?; }
`, 'example/src/records.rs'),sourceIndex('pub async fn check() {}','example/src/health.rs')];
  const graph=mountedRouterOperations(files,{path:'src/router.rs',function:'app'});
  assert.deepEqual(graph.unresolved,[]);
  assert.deepEqual(graph.operations.map(op=>`${op.method} ${op.path}`),['GET /health','GET /api/v1/items','POST /api/v1/items']);
  assert.equal(graph.operations[2].body,'CreateItem');
  assert.deepEqual(graph.operations[2].permissions,['items:write']);
});

test('unknown dynamic nesting is recorded instead of invented as a fixed mounted path',()=>{
  const files=[sourceIndex('pub fn app() -> Router { Router::new().nest(&prefix, unknown()) }','example/src/router.rs')];
  const graph=mountedRouterOperations(files,{path:'src/router.rs',function:'app'});
  assert.equal(graph.operations.length,0);
  assert.equal(graph.unresolved[0].kind,'dynamic_prefix');
});

test('handler import renames and trailing slashes retain exact runtime contracts',()=>{
 const files=[sourceIndex(`use crate::handlers::original as renamed;
 pub fn app() -> Router { Router::new().route("/preview",get(renamed)).route("/preview/",get(renamed)) }`, 'example/src/router.rs'),
 sourceIndex('pub async fn original() {}','example/src/handlers.rs')];
 const graph=mountedRouterOperations(files,{path:'src/router.rs',function:'app'});
 assert.deepEqual(graph.operations.map(op=>[op.path,op.handler]),[['/preview','original'],['/preview/','original']]);
 assert.deepEqual(graph.duplicates,[]);
});

test('crate reexports, shadowed routers, inline handlers and comments reconcile through actual mounts',()=>{
 const files=[sourceIndex(`use example::api;
 pub fn app() -> Router {
  let service_api=Router::new().route("/one",get(check));
  let service_api=service_api.route("/two",get(check));
  // Preserve the final expression after a comment.
  Router::new().merge(service_api).nest("/v1",api::routes()).route("/live",get(|| async { "ok" }))
 }
 async fn check() {}`, 'example/src/router.rs'),
 sourceIndex('pub mod routes; pub use routes::routes;','example/src/api/mod.rs'),
 sourceIndex('pub fn routes() -> Router { Router::new().route("/items",get(list)) } async fn list() {}','example/src/api/routes.rs')];
 const graph=mountedRouterOperations(files,{path:'src/router.rs',function:'app'});
 assert.deepEqual(graph.unresolved,[]);
 assert.deepEqual(graph.operations.map(op=>op.path),['/one','/two','/v1/items','/live']);
 assert.ok(graph.operations.at(-1).inline_handler);
});

test('nested root paths follow Axum semantics without erasing explicit trailing slashes',()=>{
 const files=[sourceIndex('pub fn app() -> Router { Router::new().nest("/items",crate::items::routes()).nest("/other/",crate::items::routes()) }','example/src/router.rs'),
 sourceIndex('pub fn routes() -> Router { Router::new().route("/",get(list)) } async fn list() {}','example/src/items.rs')];
 const graph=mountedRouterOperations(files,{path:'src/router.rs',function:'app'});
 assert.deepEqual(graph.operations.map(op=>op.path),['/items','/other/']);
});

test('service main remains the entry when a nested migration crate sorts first',()=>{
 const files=[sourceIndex('fn main() {}','example/migration/src/main.rs'),
 sourceIndex('fn main() { let app=Router::new().route("/live",get(check)); } async fn check() {}','example/src/main.rs')];
 const graph=mountedRouterOperations(files,{path:'src/main.rs',function:'main',variable:'app'});
 assert.deepEqual(graph.operations.map(x=>x.path),['/live']);
});

test('qualified sibling handlers resolve through an explicit parent glob without accepting unrelated modules',()=>{
 const files=[sourceIndex('use super::*; pub fn router()->Router{Router::new().route("/attachments",post(storage::initialize))}', 'example/src/feedback/routes.rs'),
 sourceIndex('pub async fn initialize(Json(input):Json<InitializeAttachment>)->Json<ApiResponse<AttachmentView>>{}','example/src/feedback/storage.rs'),
 sourceIndex('pub async fn initialize(){}','example/src/storage.rs')];
 const graph=mountedRouterOperations(files,{path:'src/feedback/routes.rs',function:'router'});
 assert.deepEqual(graph.unresolved,[]);
 const op=graph.operations[0];assert.equal(op.handlerModule,'feedback::storage');assert.equal(op.body,'InitializeAttachment');assert.equal(op.response,'AttachmentView');assert.ok(!op.unresolved_handler);
 const missing=mountedRouterOperations(files.filter(f=>!f.path.endsWith('/feedback/storage.rs')),{path:'src/feedback/routes.rs',function:'router'});
 assert.equal(missing.operations[0].unresolved_handler,'storage::initialize');
});

test('an explicit super path is resolved once even beside a parent glob import',()=>{
 const files=[sourceIndex('use super::*;pub fn routes()->Router{Router::new().route("/redeem",post(super::gifts::redeem))}', 'example/src/fitness/routes.rs'),
 sourceIndex('pub async fn redeem(){}','example/src/fitness/gifts.rs')];
 const graph=mountedRouterOperations(files,{path:'src/fitness/routes.rs',function:'routes'});
 assert.ok(!graph.operations[0].unresolved_handler);assert.equal(graph.operations[0].handlerModule,'fitness::gifts');
});

test('path dependency routers keep their own handlers and expose protocol boundaries separately',()=>{
 const files=[sourceIndex('pub fn routes()->Router{Router::new().merge(evidence_sdk::server::router()).merge(evidence_sdk::policy::router())}', 'example/src/router.rs'),
 sourceIndex('async fn status(){}','example/src/policy.rs'),
 sourceIndex('pub fn router()->Router{Router::new().route_service("/mcp",service)}','example/shared/evidence-sdk/src/server.rs'),
 sourceIndex('pub fn router()->Router{Router::new().route("/access",get(status).put(save))} async fn status()->Json<Status>{} async fn save(Json(body):Json<Policy>)->Json<Status>{}', 'example/shared/evidence-sdk/src/policy.rs')];
 const graph=mountedRouterOperations(files,{path:'src/router.rs',function:'routes'});
 assert.deepEqual(graph.unresolved,[]);
 assert.deepEqual(graph.operations.map(x=>[x.method,x.path,x.handler_source]),[['GET','/access','example/shared/evidence-sdk/src/policy.rs'],['PUT','/access','example/shared/evidence-sdk/src/policy.rs']]);
 assert.equal(graph.operations[1].body,'Policy');
 assert.equal(graph.protocol_mounts.length,1);
 assert.equal(graph.protocol_mounts[0].path,'/mcp');
 assert.equal(graph.protocol_mounts[0].source,'example/shared/evidence-sdk/src/server.rs');
 const missing=mountedRouterOperations(files.filter(x=>!x.path.endsWith('/shared/evidence-sdk/src/policy.rs')),{path:'src/router.rs',function:'routes'});
 assert.ok(missing.unresolved.some(x=>x.call==='evidence_sdk::policy::router'));
 assert.equal(missing.operations.length,0);
});

test('ambiguous dependency crate names and dynamic service mounts remain unresolved',()=>{
 const files=[sourceIndex('pub fn app()->Router{Router::new().merge(duplicate_sdk::api::router()).route_service(prefix,service)}','example/src/router.rs'),
 ...['shared','other'].map(dir=>sourceIndex('pub fn router()->Router{Router::new().route("/private",get(read))} async fn read(){}',`example/${dir}/duplicate-sdk/src/api.rs`))];
 const graph=mountedRouterOperations(files,{path:'src/router.rs',function:'app'});
 assert.equal(graph.operations.length,0);
 assert.ok(graph.unresolved.some(x=>x.kind==='router_call'));
 assert.ok(graph.unresolved.some(x=>x.kind==='dynamic_service_path'));
});

test('database variant routers retain every branch and cannot hide an unresolved alternative',()=>{
 const files=[sourceIndex(`pub fn routes()->Router{match state.db {
 Database::Pool(db)=>evidence_sdk::server::router(Reader::new(db, config.clone())),
 // Transaction-bound requests cannot host the long-lived protocol.
 Database::Transaction(_)=>axum::Router::new().route("/mcp",post(||async{StatusCode::SERVICE_UNAVAILABLE})),
 }}`, 'example/src/router.rs'),sourceIndex('pub fn router()->Router{Router::new().route_service("/mcp",service)}','example/shared/evidence-sdk/src/server.rs')];
 const graph=mountedRouterOperations(files,{path:'src/router.rs',function:'routes'});
 assert.deepEqual(graph.unresolved,[]);
 assert.equal(graph.protocol_mounts[0].conditions[0].pattern,'Database::Pool(db)');
 assert.equal(graph.operations[0].conditions[0].pattern,'Database::Transaction(_)');
 assert.equal(graph.operations[0].method,'POST');
 const unknown=mountedRouterOperations([sourceIndex('pub fn routes()->Router{match state.db { A=>known(),B=>unreviewed() }} fn known()->Router{Router::new().route("/ok",get(check))} async fn check(){}','example/src/router.rs')],{path:'src/router.rs',function:'routes'});
 assert.ok(unknown.unresolved.some(x=>x.call==='unreviewed'));
});


test('router helpers preserve parent/self calls and forwarded native/delegated router arguments', () => {
  const files = [
    sourceIndex('pub fn routes() -> Router { crate::records::routes::router() }', 'example/src/router.rs'),
    sourceIndex(`pub fn router() -> Router { boundary(Router::new().route("/native", get(read)), super::extra_routes()) }
      fn boundary<S>(native: Router<S>, delegated: Router<S>) -> Router<S> { native.route_layer(middleware()).merge(delegated) }
      async fn read() {}`, 'example/src/records/routes.rs'),
    sourceIndex(`pub fn extra_routes() -> Router { self::delegated() }
      fn delegated() -> Router { Router::new().route("/delegated", get(read)) }
      async fn read() {}`, 'example/src/records/mod.rs'),
  ];
  const graph = mountedRouterOperations(files, { path: 'src/router.rs', function: 'routes' });
  assert.deepEqual(graph.unresolved, []);
  assert.deepEqual(graph.operations.map(op => op.path).sort(), ['/delegated', '/native']);
});
