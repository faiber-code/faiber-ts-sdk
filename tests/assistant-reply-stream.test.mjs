import test from 'node:test';
import assert from 'node:assert/strict';
import {readAssistantReplyStream} from '../packages/chat/dist/index.js';
const encode=new TextEncoder();
function stream(parts){let cancelled=false;return {value:new ReadableStream({start(c){for(const p of parts)c.enqueue(typeof p==='string'?encode.encode(p):p);},cancel(){cancelled=true}}),cancelled:()=>cancelled};}
const final={type:'complete',data:{assistant_message:{id:'reply',content:{text:'Saved source'}}},timing:{elapsed_ms:300}};
test('fragmented UTF-8 waiting and answer frames stay distinct until authoritative completion',async()=>{
 const bytes=encode.encode(JSON.stringify({type:'progress',stage:'waiting',text:'در حال بررسی',elapsed_ms:3000})+'\n'+JSON.stringify({type:'text',text:'Answer',text_complete:true})+'\n'+JSON.stringify(final)+'\n');
 const s=stream(Array.from(bytes,x=>Uint8Array.of(x))),frames=[];for await(const frame of readAssistantReplyStream(s.value))frames.push(frame);
 assert.deepEqual(frames.map(f=>f.type),['progress','text','complete']);assert.equal(frames[0].text,'در حال بررسی');assert.equal(frames[2].timing.elapsed_ms,300);assert.ok(s.cancelled());
});
test('end without completion cannot turn a waiting notice into a successful answer',async()=>{
 const source=new ReadableStream({start(c){c.enqueue(encode.encode(JSON.stringify({type:'progress',stage:'waiting',text:'Waiting',elapsed_ms:3000})+'\n'));c.close()}});
 await assert.rejects(async()=>{for await(const frame of readAssistantReplyStream(source))void frame},/before a final result/);
});
test('malformed frame cancels the transport',async()=>{
 const s=stream(['{"type":"progress","stage":"saved","text":"Done","elapsed_ms":2}\n']);
 await assert.rejects(async()=>{for await(const frame of readAssistantReplyStream(s.value))void frame},/Invalid/);assert.ok(s.cancelled());
});
test('consumer stops safely after one frame',async()=>{
 const s=stream([JSON.stringify({type:'text',text:'Hello'})+'\n']);for await(const frame of readAssistantReplyStream(s.value)){assert.equal(frame.type,'text');break}assert.ok(s.cancelled());
});
test('structured service errors remain observable and terminate the stream',async()=>{
 const s=stream(['{"type":"error","status":409,"code":"response_limit"}\n']);const frames=[];for await(const f of readAssistantReplyStream(s.value))frames.push(f);assert.equal(frames[0].code,'response_limit');assert.ok(s.cancelled());
});
