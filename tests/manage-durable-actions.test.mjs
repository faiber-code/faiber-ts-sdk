import assert from 'node:assert/strict';
import test from 'node:test';
import {createServer} from 'node:http';
import {randomUUID} from 'node:crypto';
import {FaiberSDK,isManageDurableActionEvent,isManageAgentActionEvent,parseManageAgentEvents} from '../packages/sdk/dist/index.js';
const thread=randomUUID(),action=randomUUID();
const capture=()=>({operation_id:randomUUID(),expected_version:3,payload_hash:'a'.repeat(64)});
async function fixture(run){
 const seen=[];let mode='normal';
 const server=createServer(async(req,res)=>{let data='';for await(const chunk of req)data+=chunk;seen.push({method:req.method,path:req.url,body:data?JSON.parse(data):undefined,headers:req.headers});
  if(mode==='conflict'){res.writeHead(409,{'content-type':'application/json'});res.end('{"error":"action_revision_or_state_conflict"}');return;}
  res.setHeader('content-type','application/json');
  const capabilities=mode==='unavailable'?{durable:false}:{protocol:'durable-manage-action-v1',durable:true,legacy_completion:false,schema_mode:'closed-json-schema-subset'};
  res.end(JSON.stringify(req.url.endsWith('/capabilities')?capabilities:req.url.endsWith('/actions')?[]:{action:{id:action,state:'outcome_unknown'},replayed:true}));
 });await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 const sdk=new FaiberSDK({domains:{manage:'http://127.0.0.1:'+server.address().port},authMode:'cookie'});
 try{await run({sdk,seen,mode:value=>{mode=value;}});}finally{await new Promise(resolve=>server.close(resolve));}
}
test('durable Manage named/generated clients use exact canonical direct-JSON routes over real HTTP',()=>fixture(async({sdk,seen})=>{
 assert.equal((await sdk.manage.getAgentActionCapabilities()).data.durable,true);
 assert.deepEqual((await sdk.manage.operations.listAgentActions(thread)).data,[]);
 assert.equal((await sdk.manage.getAgentAction(thread,action)).data.replayed,true);
 const input={...capture(),kind:'edit',body:{enabled:false}};
 await sdk.manage.reviewAgentAction(thread,action,input);
 await sdk.manage.operations.reviewAgentAction(thread,action,{...capture(),kind:'approve',reason:'Reviewed'});
 await sdk.manage.reviewAgentAction(thread,action,{...capture(),kind:'reject',reason:'Not approved'});
 const execute=capture();assert.equal((await sdk.manage.executeAgentAction(thread,action,execute)).data.action.state,'outcome_unknown');
 await sdk.manage.operations.executeAgentAction(thread,action,execute);
 const prefix='/api/v1/agent/threads/'+thread+'/actions';
 assert.deepEqual(seen.map(v=>[v.method,v.path]),[['GET','/api/v1/agent/actions/capabilities'],['GET',prefix],['GET',prefix+'/'+action],['POST',prefix+'/'+action+'/commands'],['POST',prefix+'/'+action+'/commands'],['POST',prefix+'/'+action+'/commands'],['POST',prefix+'/'+action+'/execute'],['POST',prefix+'/'+action+'/execute']]);
 assert.deepEqual(seen[3].body,input);assert.deepEqual(seen[6].body,execute);assert.deepEqual(seen[7].body,execute);
 assert.ok(seen.slice(0,3).every(v=>v.body===undefined));
 assert.ok(seen.every(v=>!('x-manage-action-proof'in v.headers)&&!('authorization'in v.headers)));
}));
test('durable mutation validation rejects missing capture, forged authority, internal commands and invalid JSON before transport',()=>fixture(async({sdk,seen})=>{
 const base=capture(),edit={...base,kind:'edit',body:{name:'Reviewed'}};
 for(const input of [{...base,expected_version:0},{...base,expected_version:1.5},{...base,expected_version:Number.MAX_SAFE_INTEGER+1},{...base,payload_hash:'guess'},{...base,operation_id:'00000000-0000-0000-0000-000000000000'},{...base,body:{}},{...base,result:{}},{...base,proof:'forged'},{...base,project:'other'}])assert.throws(()=>sdk.manage.executeAgentAction(thread,action,input),TypeError);
 for(const input of [{...base,kind:'claim'},{...base,kind:'edit'},{...base,kind:'approve',reason:' '},{...base,kind:'reject',reason:'x'.repeat(2049)},{...base,kind:'approve',reason:'Reviewed',body:null},{...edit,service:'profile'},{...edit,body:{x:NaN}},{...edit,body:{x:undefined}},{...edit,body:'x'.repeat(32768)},{...edit,execution_id:randomUUID()}])assert.throws(()=>sdk.manage.reviewAgentAction(thread,action,input),TypeError);
 assert.throws(()=>sdk.manage.getAgentAction('not-a-uuid',action),TypeError);
 assert.equal(seen.length,0);
}));
test('409 and unavailable protocol surface once without rebasing, dispatch or legacy fallback',()=>fixture(async({sdk,seen,mode})=>{
 mode('conflict');const input=capture();await assert.rejects(sdk.manage.executeAgentAction(thread,action,input),error=>error.response.status===409);assert.equal(seen.length,1);assert.deepEqual(seen[0].body,input);
 mode('unavailable');await assert.rejects(sdk.manage.getAgentActionCapabilities(),/unavailable/);assert.equal(seen.length,2);assert.ok(seen.every(v=>!v.path.includes('/browser/')&&!v.path.includes('/proxy/')));
}));
test('durable SSE is a strict reference and never a legacy executable browser action',async()=>{
 const body={action_id:action,thread_id:thread,protocol:'durable-manage-action-v1'};
 const events=[];for await(const event of parseManageAgentEvents('event: manage_action\ndata: '+JSON.stringify(body)+'\n\n'))events.push(event);
 assert.equal(events.length,1);assert.equal(isManageDurableActionEvent(events[0]),true);assert.equal(isManageAgentActionEvent(events[0]),false);
 for(const data of [{...body,arguments:{service:'profile'}},{...body,body:{}},{...body,protocol:'other'},{...body,action_id:'invalid'}])assert.equal(isManageDurableActionEvent({event:'manage_action',data,raw:''}),false);
 assert.equal(isManageAgentActionEvent({event:'browser_action',data:{action_id:action,name:'manage_sdk',arguments:{service:'profile'}},raw:''}),false);
 assert.equal(isManageAgentActionEvent({event:'browser_action',data:{action_id:action,name:'browser_click'},raw:''}),true);
});
