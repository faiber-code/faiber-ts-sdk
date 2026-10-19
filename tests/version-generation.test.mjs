import test from 'node:test';
import assert from 'node:assert/strict';
import {cpSync,mkdtempSync,mkdirSync,readFileSync,writeFileSync,rmSync,symlinkSync} from 'node:fs';
import {join,resolve} from 'node:path';
import {tmpdir} from 'node:os';
import {execFileSync} from 'node:child_process';
const root=resolve(import.meta.dirname,'..');
test('Version regeneration preserves mounted paths, named wire envelopes and permission meaning',()=>{
 const work=mkdtempSync(join(tmpdir(),'version-sdk-generation-'));
 try {
  mkdirSync(join(work,'packages/version'),{recursive:true});
  cpSync(join(root,'scripts'),join(work,'scripts'),{recursive:true});
  cpSync(join(root,'packages/version/src'),join(work,'packages/version/src'),{recursive:true});
  writeFileSync(join(work,'package.json'),JSON.stringify({type:'module'}));
  symlinkSync(join(root,'node_modules'),join(work,'node_modules'),'dir');
  const selected=JSON.parse(readFileSync(join(root,'service-contracts.json'),'utf8')).version;
  const manifest=join(work,'manifest.json');writeFileSync(manifest,JSON.stringify({version:selected}));
  const run=()=>execFileSync(process.execPath,[join(work,'scripts/generate-service-operations.mjs'),manifest,'version'],{env:{...process.env,FAIBER_SERVICES_ROOT:resolve(root,'../Service')},stdio:'pipe'});
  run();const source=readFileSync(join(work,'packages/version/src/operations.ts'),'utf8'),types=readFileSync(join(work,'packages/version/src/operations.types.ts'),'utf8');
  assert.equal(selected.length,7);assert.match(source,/url: `\/health`/);assert.doesNotMatch(source,/url: `\/`/);
  assert.match(source,/serviceServiceShowGet\(serviceSlug: Identifier/);assert.match(source,/encodeURIComponent\(serviceSlug\)/);
  assert.match(source,/history ordering or pagination/);assert.match(source,/Scope is metadata, not an access filter/);
  for(const name of ['HealthResponse','VersionOpenApiDocument','ServicesResponse','ServiceResponse','ServiceVersionsResponse','VersionResponse','ApkPublishReceipt'])assert.ok(types.includes(name),name);
  assert.doesNotMatch(types,/extends ApiEnvelope<JsonValue>/);
  execFileSync(join(root,'node_modules/.bin/tsc'),['--noEmit','--strict','--skipLibCheck','--target','ES2022','--module','NodeNext','--moduleResolution','NodeNext',join(work,'packages/version/src/operations.ts')],{stdio:'pipe'});
  run();assert.equal(readFileSync(join(work,'packages/version/src/operations.ts'),'utf8'),source);assert.equal(readFileSync(join(work,'packages/version/src/operations.types.ts'),'utf8'),types);
 } finally {rmSync(work,{recursive:true,force:true});}
});
