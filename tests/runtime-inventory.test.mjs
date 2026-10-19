import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,writeFileSync,rmSync,symlinkSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {createHash} from 'node:crypto';
import {loadRuntimeInventory,reconcileRuntimeInventory} from '../scripts/runtime-inventory.mjs';
const inventory=names=>({artifact_verified:true,data:{catalog:names.map(name=>({name})),workloads:names.map(name=>({name}))}});
test('active business services cannot disappear merely because no SDK source checkout existed',()=>{
 const universe={services:{agentic:{},control:{}},runtime_packages:{}};
 assert.match(reconcileRuntimeInventory(universe,inventory(['infera-agentic','infera-gis'])).join('\n'),/infera-gis.*absent/);
 universe.services.gis={};assert.deepEqual(reconcileRuntimeInventory(universe,inventory(['infera-agentic','infera-gis'])),[]);
 assert.match(reconcileRuntimeInventory(universe,null)[0],/invalid/);
});
test('frontend/worker aliases require a reviewed real service owner instead of hiding unknown runtimes',()=>{
 const universe={services:{agentic:{}},runtime_packages:{panel:{classification:'frontend_proxy',service_owner:'agentic',review_status:'source_reviewed',reason:'Nginx proxies APIs to Agentic',source_refs:['nginx.conf']}}};
 assert.deepEqual(reconcileRuntimeInventory(universe,inventory(['infera-panel'])),[]);
 universe.runtime_packages.panel.service_owner='missing';assert.match(reconcileRuntimeInventory(universe,inventory(['infera-panel']))[0],/lacks reviewed/);
});
test('inventory binding rejects changed bytes, missing rows and files outside the evidence directory',()=>{
 const root=mkdtempSync(join(tmpdir(),'runtime-inventory-')),outside=mkdtempSync(join(tmpdir(),'runtime-inventory-outside-'));
 try {
  const bytes=JSON.stringify({observed_at:'2026-10-19T20:00:00Z',catalog:[{name:'infera-gis'}],workloads:[{name:'infera-gis'}]});
  writeFileSync(join(root,'inventory.json'),bytes);const descriptor={artifact_path:'inventory.json',sha256:createHash('sha256').update(bytes).digest('hex')};
  assert.equal(loadRuntimeInventory(descriptor,root)?.artifact_verified,true);
  writeFileSync(join(root,'inventory.json'),bytes+' ');assert.equal(loadRuntimeInventory(descriptor,root),null);
  writeFileSync(join(outside,'inventory.json'),bytes);symlinkSync(join(outside,'inventory.json'),join(root,'outside.json'));
  assert.equal(loadRuntimeInventory({...descriptor,artifact_path:'outside.json'},root),null);
  assert.equal(loadRuntimeInventory({...descriptor,artifact_path:'missing.json'},root),null);
 }finally{rmSync(root,{recursive:true,force:true});rmSync(outside,{recursive:true,force:true});}
});
