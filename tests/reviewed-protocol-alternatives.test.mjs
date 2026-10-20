import test from 'node:test';
import assert from 'node:assert/strict';
import {classifyReviewedProtocolAlternatives} from '../scripts/reviewed-protocol-alternatives.mjs';
const fallback=()=>({method:'POST',path:'/mcp',source:'infera-task/src/summary_evidence.rs',conditions:[{expression:'state.db',pattern:'crate::state::TaskDatabase::Transaction(_)'}],inline_handler:{body:'axum::routing::post(|| async { axum::http::StatusCode::SERVICE_UNAVAILABLE })'}});
test('the exact transaction rejection remains a conditional protocol boundary in both inventories',()=>{
 const graph={operations:[fallback()],protocol_mounts:[]};classifyReviewedProtocolAlternatives(graph,'task');
 assert.equal(graph.operations.length,0);assert.equal(graph.protocol_mounts.length,1);assert.equal(graph.protocol_mounts[0].conditions[0].pattern,'crate::state::TaskDatabase::Transaction(_)');assert.match(graph.protocol_mounts[0].behavior,/HTTP503/);
});
test('a different body, condition, path or service cannot be hidden as a reviewed protocol fallback',()=>{
 const changes=[op=>op.inline_handler.body='axum::routing::post(|| async { secret_write().await })',op=>op.conditions[0].pattern='Unknown(_) ',op=>op.path='/other'];
 for(const change of changes){const op=fallback();change(op);const graph={operations:[op],protocol_mounts:[]};classifyReviewedProtocolAlternatives(graph,'task');assert.equal(graph.operations.length,1);assert.equal(graph.protocol_mounts.length,0);}
 const graph={operations:[fallback()],protocol_mounts:[]};classifyReviewedProtocolAlternatives(graph,'other');assert.equal(graph.operations.length,1);
});

import {readFileSync} from 'node:fs';
import {sourceIndex} from '../scripts/capability-source.mjs';
function tombstone(service,path) {
 const source=service==='lms'?'infera-lms/src/router.rs':'infera-agentic/src/lms_integration.rs';
 const file=sourceIndex(readFileSync(new URL(`./fixtures/summary-cutoff/${service}.rs`,import.meta.url),'utf8'),source);
 return {file,op:{method:'ANY',path,source,handler_source:source,handler:'retired_summary',mounted_via:[{path:source,function:'routes'}]}};
}
test('exact state-free retired summary handlers stay visible as 410 boundaries without supported SDK operations',()=>{
 for(const [service,path]of [['lms','/api/v1/ai-summaries'],['lms','/api/v1/ai-summaries/{*path}'],['agentic','/api/v1/integrations/lms/performance/summarize']]){
  const {file,op}=tombstone(service,path),graph={operations:[op],protocol_mounts:[]};
  classifyReviewedProtocolAlternatives(graph,service,[file]);
  assert.equal(graph.operations.length,0);assert.equal(graph.protocol_mounts.length,1);assert.equal(graph.protocol_mounts[0].http_status,410);assert.equal(graph.protocol_mounts[0].supported,false);assert.equal(graph.protocol_mounts[0].kind,'retired_http');assert.equal(graph.protocol_mounts[0].handler_body_sha256.length,64);
 }
});
test('unknown, stateful or conditionally mounted retirement handlers cannot hide a supported operation',()=>{
 const mutations=[
  (op,file)=>{file.source=file.source.replace('use axum::','use other_crate::');},
  (op,file)=>{op.method='POST';},(op,file)=>{op.path='/api/v1/reports/student-summary';},
  (op,file)=>{op.conditions=[{expression:'legacy_enabled',pattern:'true'}];},
  (op,file)=>{op.source='infera-lms/src/other.rs';},
  (op,file)=>{op.handler_source='infera-lms/src/other.rs';},
  (op,file)=>{file.functions[0].body='write_legacy_result().await;'+file.functions[0].body;},
  (op,file)=>{file.functions[0].signature='async fn retired_summary(State(state): State<AppState>) -> impl IntoResponse';},
  (op,file)=>{file.functions[0].body=file.functions[0].body.replace('StatusCode::GONE','StatusCode::OK');},
 ];
 for(const mutate of mutations){const {op,file}=tombstone('lms','/api/v1/ai-summaries');mutate(op,file);const graph={operations:[op],protocol_mounts:[]};classifyReviewedProtocolAlternatives(graph,'lms',[file]);assert.equal(graph.operations.length,1);assert.equal(graph.protocol_mounts.length,0);}
 const {op,file}=tombstone('lms','/api/v1/ai-summaries');for(const [service,files]of [['other',[file]],['lms',[]]]){const graph={operations:[op],protocol_mounts:[]};classifyReviewedProtocolAlternatives(graph,service,files);assert.equal(graph.operations.length,1);}
});
