import test from 'node:test';
import assert from 'node:assert/strict';
import {createSpeechRecorder, ChatApi} from '../packages/chat/dist/index.js';
import {FaiberClient,MemoryTokenProvider} from '../packages/core/dist/index.js';
function browser(t,{mp4=false,pending=false,filter=false}={}) {
 let constraints,recorderOptions,stopped=0,closed=0,resolve;
 const track={stop(){stopped++},getSettings(){return {channelCount:1,noiseSuppression:true}},contentHint:''};
 const stream={getTracks:()=>[track],getAudioTracks:()=>[track]};
 const originals=['navigator','MediaRecorder','AudioContext'].map(k=>[k,Object.getOwnPropertyDescriptor(globalThis,k)]);
 Object.defineProperty(globalThis,'navigator',{configurable:true,value:{mediaDevices:{getUserMedia:async c=>{constraints=c;return pending?new Promise(r=>{resolve=r}):stream}}}});
 class Recorder {static isTypeSupported(t){return mp4?t==='audio/mp4':t.includes('opus')}constructor(s,o){recorderOptions=o;this.mimeType=o.mimeType;this.state='inactive'}start(){this.state='recording'}stop(){this.state='inactive'}}
 globalThis.MediaRecorder=Recorder;
 class Context {state='running';resume(){return Promise.resolve()}close(){closed++;return Promise.resolve()}createMediaStreamSource(){return {connect(){}}}createBiquadFilter(){return {frequency:{value:0},Q:{value:0},connect(){}}}createMediaStreamDestination(){return {stream:{getTracks:()=>[]}}}}
 globalThis.AudioContext=filter?Context:undefined;
 t.after(()=>{for(const[k,v]of originals){if(v)Object.defineProperty(globalThis,k,v);else delete globalThis[k]}});
 return {stream,track,get constraints(){return constraints},get options(){return recorderOptions},get stopped(){return stopped},get closed(){return closed},resolve(){resolve(stream)}};
}
test('native denoising and compact mono Opus; deterministic cleanup',async t=>{
 const b=browser(t,{filter:true}),capture=await createSpeechRecorder();
 assert.deepEqual(b.constraints.audio.noiseSuppression,{ideal:true});assert.deepEqual(b.constraints.audio.echoCancellation,{ideal:true});assert.deepEqual(b.constraints.audio.autoGainControl,{ideal:true});assert.deepEqual(b.constraints.audio.channelCount,{ideal:1});
 assert.equal(b.options.audioBitsPerSecond,32000);assert.equal(capture.mimeType,'audio/webm;codecs=opus');assert.equal(capture.filtered,true);capture.recorder.start();capture.dispose();capture.dispose();assert.equal(b.stopped,1);assert.equal(b.closed,1);assert.equal(capture.recorder.state,'inactive');
});
test('AAC fallback is 64k and works without Web Audio',async t=>{const b=browser(t,{mp4:true});const c=await createSpeechRecorder();assert.equal(c.mimeType,'audio/mp4');assert.equal(b.options.audioBitsPerSecond,64000);assert.equal(c.filtered,false);c.dispose()});
test('cancelling pending permission closes tracks when acquisition completes',async t=>{const b=browser(t,{pending:true});const controller=new AbortController();const promise=createSpeechRecorder({signal:controller.signal});controller.abort();b.resolve();await assert.rejects(promise,{name:'AbortError'});assert.equal(b.stopped,1)});
test('active abort releases microphone; invalid bitrate never requests access',async t=>{const b=browser(t);await assert.rejects(createSpeechRecorder({audioBitsPerSecond:1}),RangeError);assert.equal(b.constraints,undefined);const controller=new AbortController();await createSpeechRecorder({signal:controller.signal});controller.abort();assert.equal(b.stopped,1)});
test('TTS requests MP3 by default, preserves explicit WAV and authenticated transport',async()=>{
 const requests=[];const api=new ChatApi(new FaiberClient('chat',{domains:{chat:'https://chat.example.test'},authMode:'bearer',tokenProvider:new MemoryTokenProvider({accessToken:'private-test'}),axios:{adapter:async config=>{requests.push(config);return {status:200,statusText:'OK',headers:{'content-type':'audio/mpeg'},config,data:new Blob(['ID3'])}}}}));
 const controller=new AbortController();const result=await api.synthesize({text:'Hello',language:'en'},{signal:controller.signal});await api.synthesize({text:'Hello',format:'wav'});
 assert.equal(JSON.parse(requests[0].data).format,'mp3');assert.equal(JSON.parse(requests[1].data).format,'wav');assert.equal(requests[0].headers.get('Authorization'),'Bearer private-test');assert.equal(requests[0].signal,controller.signal);assert.equal(result.headers['content-type'],'audio/mpeg');assert.ok(result.data instanceof Blob);
});
