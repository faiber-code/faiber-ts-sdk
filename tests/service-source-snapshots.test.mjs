import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import test from 'node:test';
import { serviceSources } from '../scripts/service-source-snapshots.mjs';

test('source snapshots retain exact pinned bytes without changing a dirty service checkout',()=>{
  const root=mkdtempSync(join(tmpdir(),'faiber-source-fixture-'));
  const previous=process.env.FAIBER_SERVICES_ROOT;delete process.env.FAIBER_SERVICES_ROOT;
  try{
    const repo=join(root,'services/infera-example'),sdk=join(root,'sdk');
    mkdirSync(join(repo,'src'),{recursive:true});mkdirSync(sdk);
    const git=(...args)=>execFileSync('git',args,{cwd:repo,encoding:'utf8',stdio:['ignore','pipe','pipe']}).trim();
    git('init');git('config','user.name','Source Fixture');git('config','user.email','fixture@example.invalid');
    const pinned='pub const VERSION: &str = "pinned";\n'+'// padding\n'.repeat(20000);
    writeFileSync(join(repo,'src/lib.rs'),pinned);git('add','src');git('commit','-m','Pinned fixture');
    const revision=git('rev-parse','HEAD');
    writeFileSync(join(repo,'src/lib.rs'),'unrelated local changes\n');
    const lock=join(sdk,'selected-revisions.json');
    writeFileSync(lock,JSON.stringify({example:{directory:'infera-example',revision}}));
    for(let attempt=0;attempt<3;attempt++){
      const snapshot=serviceSources(sdk,join(root,'services'),{lockPath:lock});
      assert.equal(readFileSync(join(snapshot,'infera-example/src/lib.rs'),'utf8'),pinned);
    }
    assert.equal(readFileSync(join(repo,'src/lib.rs'),'utf8'),'unrelated local changes\n');
  }finally{rmSync(root,{recursive:true,force:true});if(previous!==undefined)process.env.FAIBER_SERVICES_ROOT=previous;}
});
