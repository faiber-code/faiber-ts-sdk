import {test} from 'node:test';
import assert from 'node:assert/strict';
import {LocalEngineClient} from '../packages/engine/dist/index.js';
const secret='a'.repeat(43);
test('pairing rejects remote targets, credentials and malformed secrets',()=>{
 for(const address of [`https://evil.invalid#${secret}`,`http://localhost:9000#${secret}`,`http://127.0.0.1:9000/path#${secret}`,`http://user@127.0.0.1:9000#${secret}`,`http://127.0.0.1:9000?token=x#${secret}`,'http://127.0.0.1:9000#short'])assert.throws(()=>new LocalEngineClient(address));
 assert.doesNotThrow(()=>new LocalEngineClient(`http://127.0.0.1:9000#${secret}`));
});
test('local transport authenticates without URL secrets, cookies or redirects',async()=>{
 const original=globalThis.fetch;const calls=[];
 globalThis.fetch=async(url,options)=>{calls.push({url,options});return new Response(JSON.stringify({protocol:'faiber.engine.local.v1',originals:'device',max_video_bytes:2147483648}),{status:200,headers:{'Content-Type':'application/json'}})};
 try{await new LocalEngineClient(`http://127.0.0.1:9000#${secret}`).health();assert.equal(calls[0].url,'http://127.0.0.1:9000/health');assert.equal(calls[0].options.headers.Authorization,`Bearer ${secret}`);assert.equal(calls[0].options.redirect,'error');assert.equal(calls[0].options.credentials,'omit');assert.equal(calls[0].options.referrerPolicy,'no-referrer');}finally{globalThis.fetch=original}
});
test('model job IDs cannot traverse local artifact routes',async()=>{
 const engine=new LocalEngineClient(`http://127.0.0.1:9000#${secret}`);
 await assert.rejects(engine.modelArtifact('../private'));await assert.rejects(engine.cancelModel('x'));await assert.rejects(engine.artifact('a'.repeat(32),'../secret.mp4'));
});
