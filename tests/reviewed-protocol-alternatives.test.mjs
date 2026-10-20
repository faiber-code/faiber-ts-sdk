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
