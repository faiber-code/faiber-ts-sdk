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
