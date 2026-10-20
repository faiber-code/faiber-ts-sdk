import {createHash} from 'node:crypto';

// These fingerprints bind the reviewed, state-free 410 bodies. A new body,
// signature, source, method, condition or path must receive a separate review.
const retiredSummaryHandlers = {
 lms: {imports:'276eed10aa516b06d45cd35aae00928f31db085390a6208172f2d0c110216d09',source:'infera-lms/src/router.rs',signature:'async fn retired_summary() -> impl IntoResponse',body:'df274b6e1f66e6a3bd81635d4345cae153637ba8cff4105ae56ab047b52034b1',paths:['/api/v1/ai-summaries','/api/v1/ai-summaries/{*path}']},
 agentic: {imports:'e5d7a8bfb1067cac268c511e863c15b86d40f5950650c89baf03ce1a14f42062',source:'infera-agentic/src/lms_integration.rs',signature:'async fn retired_summary() -> (StatusCode, Json<Value>)',body:'6196c4f7fa270aa0f7030b047ec3c0e072caa2be0c97f37ffe9eca13e3c209f9',paths:['/api/v1/integrations/lms/performance/summarize']},
};
function retiredSummaryBoundary(op,service,files) {
 const review=retiredSummaryHandlers[service];
 if(!review || op.method!=='ANY' || !review.paths.includes(op.path) || op.source!==review.source || op.handler_source!==review.source || op.handler!=='retired_summary' || op.conditions?.length || op.inline_handler || op.unresolved_handler)return null;
 const file=files.find(file=>file.path===review.source);
 const imports=file?.source.match(/use axum::\{[\s\S]*?\n\};/)?.[0];
 if(!imports || createHash('sha256').update(imports).digest('hex')!==review.imports)return null;
 const handler=file.functions.find(fn=>fn.name==='retired_summary');
 if(!handler || handler.signature!==review.signature || createHash('sha256').update(handler.body).digest('hex')!==review.body)return null;
 return {kind:'retired_http',path:op.path,source:op.source,handler_source:op.handler_source,handler_body_sha256:review.body,axum_import_sha256:review.imports,http_status:410,supported:false,
  behavior:'HTTP410 lms_summary_retired: unsupported legacy summary URL; Profile-only summary creation/retrieval, no generator, migration, stored-result fallback or proxy.',mounted_via:op.mounted_via};
}

/** Exact source-reviewed rejection boundaries; unknown handlers remain review failures. */
export function classifyReviewedProtocolAlternatives(graph, service, files = []) {
 for(let i=graph.operations.length-1;i>=0;i--) {
  const op=graph.operations[i];
  const retired=retiredSummaryBoundary(op,service,files);
  if(retired) { graph.protocol_mounts.push(retired); graph.operations.splice(i,1); continue; }
  if(service==='task' && op.method==='POST' && op.path==='/mcp' && op.source==='infera-task/src/summary_evidence.rs'
   && op.conditions?.some(c=>c.expression==='state.db'&&c.pattern==='crate::state::TaskDatabase::Transaction(_)')
   && op.inline_handler?.body.replace(/\s/g,'')==='axum::routing::post(||async{axum::http::StatusCode::SERVICE_UNAVAILABLE})') {
   graph.protocol_mounts.push({path:op.path,source:op.source,conditions:op.conditions,
    behavior:'HTTP503: request-scoped batch transactions cannot host long-lived MCP',mounted_via:op.mounted_via});
   graph.operations.splice(i,1);
  }
 }
 return graph;
}
