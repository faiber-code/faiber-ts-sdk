import {readFileSync,writeFileSync,realpathSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {resolve} from 'node:path';
import {createHash} from 'node:crypto';
const root=resolve(import.meta.dirname,'..');
const dir=resolve(root,'contracts/manage-durable-actions-v1');
const contract=JSON.parse(readFileSync(resolve(dir,'operations.json'),'utf8'));
let source=readFileSync(resolve(dir,'public-sdk-contract.ts'),'utf8');
const workspace=process.env.FAIBER_WORKSPACE_ROOT??resolve(realpathSync(resolve(root,'../Service')),'..');
const gitSource=(name,revision,path)=>{if(!/^[a-f0-9]{40}$/.test(revision))throw new Error('Invalid pinned Manage source');return execFileSync('git',['show',revision+':'+path],{cwd:resolve(workspace,name),encoding:'utf8'});};
const router=gitSource('Service/infera-manage',contract.manage_source,'src/router.rs').replace(/\s+/g,'');
for(const op of contract.operations){const path=op.path.replace('{threadId}','{thread}').replace('{actionId}','{id}');if(!router.includes('.route("'+path+'",'+(op.method==='GET'?'get':'post')+'(crate::actions::'))throw new Error('Pinned mounted Manage route missing: '+path);}

const digest=value=>createHash('sha256').update(value).digest('hex');
for(const [repo,revision]of [['Service/infera-manage',contract.manage_source],['infera-agentic',contract.agentic_source]])if(digest(gitSource(repo,revision,'src/manage_action_protocol.rs'))!==contract.protocol_source_sha256)throw new Error('Pinned shared Manage protocol changed');
if(digest(source)!==contract.public_contract_sha256||digest(readFileSync(resolve(dir,'wire-and-runtime-contract.json')))!==contract.wire_contract_sha256)throw new Error('Reviewed Manage contract checksum changed');
let types=source.slice(source.indexOf('export interface ManageAgentActionCapabilities'),source.indexOf('// Named operations'));
const start=types.indexOf('export interface ManageAgentActionReviewInput');
const end=types.indexOf('export interface ManageAgentActionExecuteInput');
types=types.slice(0,start)+`export interface ManageAgentActionReviewBase {
  operation_id: string;
  expected_version: number;
  payload_hash: string;
}
/** Body edits preserve the server-owned target; decisions require a bounded reason. */
export type ManageAgentActionReviewInput = ManageAgentActionReviewBase & (
  | { kind: "edit"; body: JsonValue; reason?: string }
  | { kind: "approve" | "reject"; reason: string; body?: never }
);
`+types.slice(end);
const banner='// Generated from the reviewed canonical Manage durable-action packet. Do not edit.\n';
const files=new Map([['packages/manage/src/durable.types.ts',banner+'import type {JsonValue} from "@faiber/sdk-core";\n'+types]]);
const docs={
 getAgentActionCapabilities: 'Checks mounted durable protocol and closed-schema mode; incompatible replies reject. Requires a signed Manage session and current project.settings.manage;401/403 deny authority and502 means unavailable.',
 listAgentActions: 'Lists the newest50 summaries for the current project, actor and thread, without payload/history. Requires signed Manage session, project.settings.manage and agents.run;404 hides other scopes,502 means unavailable.',
 getAgentAction: 'Loads the current durable action and replay metadata before review. Requires signed Manage session, project.settings.manage and agents.run;404 hides other scopes,502 means unavailable.',
 reviewAgentAction: 'Edits only the stored body or records approve/reject with a reason. Requires signed Manage session, project.settings.manage and agents.run. Send captured version/hash and operation UUID;409 needs fresh GET,400/422 rejects malformed input. Exact retry preserves the entire request.',
 executeAgentAction: 'Executes the saved approved payload under current project.settings.manage and agents.run authority. Requires signed Manage session;409 needs fresh GET and502 means unavailable. Cancellation does not undo a claim; preserve exact UUID/body and reconcile unknown outcome without retrying the target.',
};
const lines=[banner.trimEnd(),'import {ServiceApi,type RequestOptions} from "@faiber/sdk-core";','import type * as T from "./durable.types.js";','import {actionIdentifier,validateReview,validateExecution,validateCapabilities} from "./durable.js";','export class ManageActionOperations extends ServiceApi {'];
for(const op of contract.operations){
 const args=op.parameters.map(name=>name+': string');
 if(op.input)args.push('input: T.'+op.input);
 args.push('options?: RequestOptions'+(op.input?'<T.'+op.input+'>':''));
 lines.push('  /** '+docs[op.name]+' Calls `'+op.method+' '+op.path+'`; returns the complete Axios response. */','  '+op.name+'('+args.join(', ')+') {');
 for(const name of op.parameters)lines.push('    actionIdentifier('+name+');');
 if(op.input)lines.push('    '+(op.name==='reviewAgentAction'?'validateReview':'validateExecution')+'(input);');
 const path='`'+op.path.replaceAll('{threadId}','${encodeURIComponent(threadId)}').replaceAll('{actionId}','${encodeURIComponent(actionId)}')+'`';
 const call=op.method==='GET'?'this.client.get<T.'+op.response+'>('+path+',undefined,options)':'this.client.post<T.'+op.response+',T.'+op.input+'>('+path+',input,options)';
 lines.push('    return '+call+(op.name==='getAgentActionCapabilities'?'.then(response=>{validateCapabilities(response.data);return response;})':'')+';','  }');
}
lines.push('}','');files.set('packages/manage/src/operations.ts',lines.join('\n'));
for(const [name,content]of files){const path=resolve(root,name);if(process.argv.includes('--check')){if(readFileSync(path,'utf8')!==content)throw new Error(name+' is stale');}else writeFileSync(path,content);}
console.log('Manage durable actions: '+contract.operations.length+' reviewed operations '+(process.argv.includes('--check')?'compared':'generated'));
