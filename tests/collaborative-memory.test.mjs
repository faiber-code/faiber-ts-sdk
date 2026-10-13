import test from 'node:test';
import assert from 'node:assert/strict';
import {AxiosHeaders} from 'axios';
import {FaiberClient,MemoryTokenProvider} from '../packages/core/dist/index.js';
import {TaskApi} from '../packages/task/dist/index.js';
import {ChatApi} from '../packages/chat/dist/index.js';

function fixture(){
 const calls=[];
 const client=service=>new FaiberClient(service,{domains:{[service]:`https://${service}.example.com`},tokenProvider:new MemoryTokenProvider({accessToken:'caller'}),axios:{adapter:async config=>{calls.push(config);return {data:{data:{version:4}},status:200,statusText:'OK',headers:new AxiosHeaders({'x-request-id':'receipt'}),config};}}});
 return {calls,task:new TaskApi(client('task')),chat:new ChatApi(client('chat'))};
}
test('private note uploads retain binary transfer options, delete versions and server receipts',async()=>{
 const {calls,task}=fixture(),signal=new AbortController().signal;
 const response=await task.collaboration.uploadAttachment('upload/a',{file:new Blob(['private original'],{type:'text/plain'}),filename:'original.txt'},{signal});
 assert.equal(response.headers.get('x-request-id'),'receipt');assert.equal(calls[0].url,'/api/v1/attachments/upload%2Fa/content');assert.equal(calls[0].signal,signal);assert.equal(await calls[0].data.get('file').text(),'private original');
 await task.collaboration.downloadAttachment('upload/a',{signal});assert.equal(calls[1].responseType,'arraybuffer');
 await task.collaboration.removeNoteMedia('note/a','upload/a',{version:7},{signal});assert.equal(calls[2].method,'delete');assert.deepEqual(JSON.parse(calls[2].data),{version:7});assert.equal(calls[2].url,'/api/v1/notes/note%2Fa/media/upload%2Fa');
 assert.ok(calls.every(c=>c.headers.get('Authorization')==='Bearer caller'&&c.signal===signal));
});
test('import approval, scoped retrieval and voice preserve distinct versions and stable retry IDs',async()=>{
 const {calls,task,chat}=fixture(),signal=new AbortController().signal;
 await task.collaboration.startNoteImport('note',{id:'stable-import',attachment_id:'original',version:9,language:'fa'},{signal});
 await task.collaboration.applyNoteImport('stable-import',{version:3,mode:'append',summary:'Reviewed summary'},{signal});
 await task.collaboration.searchNotes({project_id:'space',additional_project_ids:['shared'],query:'Persian notes',note_id:'note'},{signal});
 const voice={id:'stable-voice',project_id:'space',action:'push',sequence:7,audio_base64:'YQ==',language:'en'};await chat.assistantVoice(voice,{signal});
 assert.deepEqual(calls.map(c=>JSON.parse(c.data)),[{id:'stable-import',attachment_id:'original',version:9,language:'fa'},{version:3,mode:'append',summary:'Reviewed summary'},{project_id:'space',additional_project_ids:['shared'],query:'Persian notes',note_id:'note'},voice]);
 assert.deepEqual(calls.map(c=>c.url),['/api/v1/notes/note/imports','/api/v1/note-imports/stable-import/apply','/api/v1/notes/knowledge/search','/api/v1/speech/voice']);
 assert.ok(calls.every(c=>c.headers.get('Authorization')==='Bearer caller'&&c.signal===signal));
});
