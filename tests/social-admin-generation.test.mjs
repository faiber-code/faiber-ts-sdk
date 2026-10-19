import test from 'node:test';
import assert from 'node:assert/strict';
import {cpSync,mkdtempSync,mkdirSync,readFileSync,writeFileSync,rmSync,symlinkSync} from 'node:fs';
import {join,resolve} from 'node:path';
import {tmpdir} from 'node:os';
import {execFileSync} from 'node:child_process';
const root=resolve(import.meta.dirname,'..');
test('Social admin regeneration preserves reviewed queries, permission contracts and concrete response types',()=>{
 const work=mkdtempSync(join(tmpdir(),'social-admin-generation-'));
 try {
  mkdirSync(join(work,'packages/social'),{recursive:true});
  cpSync(join(root,'scripts'),join(work,'scripts'),{recursive:true});
  cpSync(join(root,'packages/social/src'),join(work,'packages/social/src'),{recursive:true});
  writeFileSync(join(work,'package.json'),JSON.stringify({type:'module'}));
  symlinkSync(join(root,'node_modules'),join(work,'node_modules'),'dir');
  const selected=JSON.parse(readFileSync(join(root,'service-contracts.json'),'utf8')).social.filter(e=>e.module==='admin');
  const manifest=join(work,'manifest.json');writeFileSync(manifest,JSON.stringify({social:selected}));
  const run=()=>execFileSync(process.execPath,[join(work,'scripts/generate-service-operations.mjs'),manifest,'social'],{env:{...process.env,FAIBER_SERVICES_ROOT:resolve(root,'../Service')},stdio:'pipe'});
  run();const source=readFileSync(join(work,'packages/social/src/operations.ts'),'utf8'),types=readFileSync(join(work,'packages/social/src/operations.types.ts'),'utf8');
  assert.equal(selected.length,37);
  assert.match(source,/adminReplayIntegrationPost/);assert.match(source,/queued, not delivered/);
  assert.match(types,/SocialAdminPostDetail/);assert.match(types,/SocialAdminPostsQuery/);
  assert.doesNotMatch(types,/ApiEnvelope<JsonValue>|extends JsonObject|BackendJson</);
  execFileSync(join(root,'node_modules/.bin/tsc'),['--noEmit','--strict','--skipLibCheck','--target','ES2022','--module','NodeNext','--moduleResolution','NodeNext',join(work,'packages/social/src/operations.ts')],{stdio:'pipe'});
  run();assert.equal(readFileSync(join(work,'packages/social/src/operations.ts'),'utf8'),source);assert.equal(readFileSync(join(work,'packages/social/src/operations.types.ts'),'utf8'),types);
 } finally {rmSync(work,{recursive:true,force:true});}
});
