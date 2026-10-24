import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,readdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
const hash=x=>createHash('sha256').update(x).digest('hex');
test('published provenance binds actual package source and is deterministic',()=>{
 execFileSync(process.execPath,['scripts/package-provenance.mjs','--check']);
 for(const name of readdirSync('packages')){
  const p=JSON.parse(readFileSync(`packages/${name}/package.json`));
  const m=JSON.parse(readFileSync(`packages/${name}/provenance.json`));
  assert.equal(m.package,p.name);assert.equal(m.version,p.version);
  assert.ok(p.files.includes('provenance.json'));
  assert.ok(Object.keys(m.package_source_sha256).length);
  for(const [file,sha] of Object.entries(m.package_source_sha256))assert.equal(hash(readFileSync(file)),sha,file);
  assert.match(m.verification_scope,/not proof/);
 }
});
test('game provenance identifies local runtime and its actual State dependency',()=>{
 const m=JSON.parse(readFileSync('packages/game/provenance.json'));
 assert.equal(m.public_contract.kind,'local-game-runtime-with-state-transport');
 assert.ok(m.source_revisions.state);assert.equal(m.source_revisions.game,undefined);
});
