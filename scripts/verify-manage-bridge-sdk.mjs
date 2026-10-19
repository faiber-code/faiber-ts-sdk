// Real wire probe against the owned Manage process. No mock transport/model call.
import assert from 'node:assert/strict';
import {FaiberSDK} from '../packages/sdk/dist/index.js';
async function main() {
  const origin=process.env.INFERA_MANAGE_PROBE_URL;
  assert.ok(/^http:\/\/127\.0\.0\.1:\d+$/.test(origin ?? ''), 'Owned loopback origin required');
  const cookie=process.env.INFERA_MANAGE_PROBE_COOKIE;
  assert.ok(cookie, 'Owned test session required');
  const sdk=new FaiberSDK({domains:{manage:origin},authMode:'cookie',axios:{headers:{Cookie:cookie},timeout:5000}});
  const created=await sdk.manage.createAgentThread({title:'Actual SDK wire probe'});
  assert.equal(created.data.project_id,process.env.INFERA_MANAGE_PROBE_PROJECT_ID);
  assert.equal(created.data.project_slug,'site');
  assert.ok(Number.isFinite(Date.parse(created.data.updated_at)));
  const id=created.data.id;
  const page=await sdk.manage.listAgentThreadsPage({limit:1});
  assert.equal(page.data.length,1);
  assert.equal(page.headers.get('x-has-more'),'true');
  const before=page.headers.get('x-next-before');
  assert.equal(typeof before,'string');
  const next=await sdk.manage.listAgentThreadsPage({limit:100,before});
  assert.ok(next.data.every(row=>row.project_id===created.data.project_id));
  const history=await sdk.manage.getAgentMessages(id);
  assert.deepEqual(history.data,[]);
  const denied=async (operation,status,part)=>{
    try {await operation();assert.fail('Expected HTTP rejection');}
    catch(error){assert.equal(error.response?.status,status);if(part)assert.ok(String(error.response.data.error).includes(part));}
  };
  await denied(()=>sdk.manage.listAgentThreadsPage({limit:0}),400);
  await denied(()=>sdk.manage.listAgentThreadsPage({before:'invalid-cursor'}),400);
  await denied(()=>sdk.manage.getAgentMessages(process.env.INFERA_MANAGE_PROBE_FOREIGN_THREAD),404);
  await denied(()=>sdk.manage.deleteAgentThread(process.env.INFERA_MANAGE_PROBE_FOREIGN_THREAD),404);
  await denied(()=>sdk.manage.openAgentChatStream(id,{message:'Forged project',project_slug:'other'}),400);
  await denied(()=>sdk.manage.openAgentChatStream(id,{message:'Scope and billing',context:{enabled_helpers:['seo'],locale:'fa'}},{responseType:'json'}),403);
  // Axios fetch stream errors may carry a ReadableStream body. The HTTP status
  // verifies the preserved billing denial; the Rust wire case asserts its reason.
  assert.equal((await sdk.manage.deleteAgentThread(id)).data.ok,true);
  await denied(()=>sdk.manage.getAgentMessages(id),404);
  console.log(JSON.stringify({status:'passed',transport:'actual Axios/fetch over owned HTTP',scope:'create/paged list/messages/delete; query, project and billing denials; no model call or service mutation receipt'}));
}
main().catch(error=>{console.error(JSON.stringify({status:'failed',name:error.name,message:error.message,status_code:error.response?.status}));process.exitCode=1;});
