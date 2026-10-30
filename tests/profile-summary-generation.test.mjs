import {serviceRoot} from './service-root.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import {cpSync,mkdtempSync,mkdirSync,readFileSync,writeFileSync,rmSync,symlinkSync} from 'node:fs';
import {join,resolve} from 'node:path';
import {tmpdir} from 'node:os';
import {execFileSync} from 'node:child_process';
import {profileSummaryContracts} from '../scripts/profile-summary-contracts.mjs';
const root=resolve(import.meta.dirname,'..');
test('all twenty Profile summary operations retain reviewed types after repeated generation',()=>{
 const work=mkdtempSync(join(tmpdir(),'profile-summary-generation-'));
 try{
  mkdirSync(join(work,'packages/profile'),{recursive:true});
  cpSync(join(root,'scripts'),join(work,'scripts'),{recursive:true});
  cpSync(join(root,'packages/profile/src'),join(work,'packages/profile/src'),{recursive:true});
  writeFileSync(join(work,'package.json'),JSON.stringify({type:'module'}));
  symlinkSync(join(root,'node_modules'),join(work,'node_modules'),'dir');
  const all=JSON.parse(readFileSync(join(root,'service-contracts.json'),'utf8'));
  const selected=all.profile.filter(e=>e.path.startsWith('/api/v1/ai-summaries/'));
  assert.equal(selected.length,20);
  const manifest=join(work,'manifest.json');writeFileSync(manifest,JSON.stringify({profile:selected}));
  const run=()=>execFileSync(process.execPath,[join(work,'scripts/generate-service-operations.mjs'),manifest,'profile'],{env:{...process.env,FAIBER_SERVICES_ROOT:serviceRoot(root)},stdio:'pipe'});
  run();const source=readFileSync(join(work,'packages/profile/src/operations.ts'),'utf8');
  const types=readFileSync(join(work,'packages/profile/src/operations.types.ts'),'utf8');
  for(const c of Object.values(profileSummaryContracts)){assert.ok(source.includes(`  ${c.methodName}(`),c.methodName);assert.ok(types.includes(c.response));if(c.input)assert.ok(types.includes(c.input));}
  try{execFileSync(process.execPath,[join(root,'node_modules/typescript/bin/tsc'),'--noEmit','--strict','--skipLibCheck','--target','ES2022','--module','NodeNext','--moduleResolution','NodeNext',join(work,'packages/profile/src/operations.ts')],{stdio:'pipe'});}catch(error){throw new Error(error.stdout?.toString()||error.stderr?.toString()||error.message);}
  run();assert.equal(readFileSync(join(work,'packages/profile/src/operations.ts'),'utf8'),source);assert.equal(readFileSync(join(work,'packages/profile/src/operations.types.ts'),'utf8'),types);
 }finally{rmSync(work,{recursive:true,force:true});}
});
