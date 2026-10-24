import test from 'node:test';
import assert from 'node:assert/strict';
import {cpSync,mkdtempSync,mkdirSync,readFileSync,writeFileSync,rmSync,symlinkSync} from 'node:fs';
import {join,resolve} from 'node:path';
import {tmpdir} from 'node:os';
import {execFileSync} from 'node:child_process';
const root=resolve(import.meta.dirname,'..');
test('form operation regeneration preserves encoded request option bodies and is idempotent',()=>{
 const work=mkdtempSync(join(tmpdir(),'faiber-encoded-options-'));
 try {
  const all=JSON.parse(readFileSync(join(root,'service-contracts.json'),'utf8'));
  const selected=Object.fromEntries(['idp','chat'].map(service=>[service,all[service].filter(row=>row.formUrlEncoded&&row.body)]));
  assert.ok(Object.values(selected).every(rows=>rows.length>0));
  cpSync(join(root,'scripts'),join(work,'scripts'),{recursive:true});
  for(const service of Object.keys(selected)){
   mkdirSync(join(work,'packages',service),{recursive:true});
   cpSync(join(root,'packages',service,'src'),join(work,'packages',service,'src'),{recursive:true});
  }
  writeFileSync(join(work,'package.json'),JSON.stringify({type:'module'}));
  writeFileSync(join(work,'manifest.json'),JSON.stringify(selected));
  symlinkSync(join(root,'node_modules'),join(work,'node_modules'),'dir');
  const run=()=>execFileSync(process.execPath,[join(work,'scripts/generate-service-operations.mjs'),join(work,'manifest.json'),'idp,chat'],{env:{...process.env,FAIBER_SERVICES_ROOT:resolve(root,'../Service')},stdio:'pipe'});
  run();
  const before=[];
  for(const [service,rows] of Object.entries(selected)){
   const source=readFileSync(join(work,'packages',service,'src/operations.ts'),'utf8');
   assert.equal([...source.matchAll(/options\?: RequestOptions<URLSearchParams>/g)].length,rows.length);
   before.push(source,readFileSync(join(work,'packages',service,'src/operations.types.ts'),'utf8'));
  }
  run();
  const after=Object.keys(selected).flatMap(service=>['operations.ts','operations.types.ts'].map(name=>readFileSync(join(work,'packages',service,'src',name),'utf8')));
  assert.deepEqual(after,before);
 } finally {rmSync(work,{recursive:true,force:true});}
});
