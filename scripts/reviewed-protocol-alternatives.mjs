/** Exact source-reviewed non-REST fallback; unknown handlers remain review failures. */
export function classifyReviewedProtocolAlternatives(graph, service) {
 if(service!=='task')return graph;
 for(let i=graph.operations.length-1;i>=0;i--) {
  const op=graph.operations[i];
  if(op.method==='POST' && op.path==='/mcp' && op.source==='infera-task/src/summary_evidence.rs'
   && op.conditions?.some(c=>c.expression==='state.db'&&c.pattern==='crate::state::TaskDatabase::Transaction(_)')
   && op.inline_handler?.body.replace(/\s/g,'')==='axum::routing::post(||async{axum::http::StatusCode::SERVICE_UNAVAILABLE})') {
   graph.protocol_mounts.push({path:op.path,source:op.source,conditions:op.conditions,
    behavior:'HTTP503: request-scoped batch transactions cannot host long-lived MCP',mounted_via:op.mounted_via});
   graph.operations.splice(i,1);
  }
 }
 return graph;
}
