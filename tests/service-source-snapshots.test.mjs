import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import test from 'node:test';
import { serviceSources, archiveSourceRevision } from '../scripts/service-source-snapshots.mjs';

test('source snapshots retain exact pinned bytes without changing a dirty service checkout',()=>{
  const root=mkdtempSync(join(tmpdir(),'faiber-source-fixture-'));
  const previous=process.env.FAIBER_SERVICES_ROOT;delete process.env.FAIBER_SERVICES_ROOT;
  try{
    const repo=join(root,'services/infera-example'),sdk=join(root,'sdk');
    mkdirSync(join(repo,'src'),{recursive:true});mkdirSync(sdk);
    const git=(...args)=>execFileSync('git',args,{cwd:repo,encoding:'utf8',stdio:['ignore','pipe','pipe']}).trim();
    git('init');git('config','user.name','Source Fixture');git('config','user.email','fixture@example.invalid');
    const pinned='pub const VERSION: &str = "pinned";\nconst LOCALE:&str=include_str!("../ui/locale.json");\n'+'// padding\n'.repeat(20000);
    mkdirSync(join(repo,'ui'),{recursive:true});writeFileSync(join(repo,'ui/locale.json'),'{"title":"pinned"}');
    mkdirSync(join(repo,'migration/sql'),{recursive:true});
    writeFileSync(join(repo,'migration/sql/schema.sql'),'CREATE TABLE pinned (id integer);');
    mkdirSync(join(repo,'auth/src'),{recursive:true});
    writeFileSync(join(repo,'auth/src/lib.rs'),'pub fn authorize() {}');
    writeFileSync(join(repo,'auth/Cargo.toml'),'[package]\nname="local-auth"');
    writeFileSync(join(repo,'Cargo.toml'),'[package]\nname="fixture"\nversion="0.1.0"\n');
    writeFileSync(join(repo,'src/lib.rs'),pinned);git('add','.');git('commit','-m','Pinned fixture');
    const revision=git('rev-parse','HEAD');
    writeFileSync(join(repo,'src/lib.rs'),'unrelated local changes\n');
    writeFileSync(join(repo,'migration/sql/schema.sql'),'DROP TABLE pinned;');
    const lock=join(sdk,'selected-revisions.json');
    writeFileSync(lock,JSON.stringify({example:{directory:'infera-example',revision}}));
    for(let attempt=0;attempt<3;attempt++){
      const snapshot=serviceSources(sdk,join(root,'services'),{lockPath:lock});
      assert.equal(readFileSync(join(snapshot,'infera-example/src/lib.rs'),'utf8'),pinned);
      assert.equal(readFileSync(join(snapshot,'infera-example/auth/src/lib.rs'),'utf8'),'pub fn authorize() {}');
      assert.equal(readFileSync(join(snapshot,'infera-example/ui/locale.json'),'utf8'),'{"title":"pinned"}');
      assert.equal(readFileSync(join(snapshot,'infera-example/migration/sql/schema.sql'),'utf8'),'CREATE TABLE pinned (id integer);');
      assert.match(readFileSync(join(snapshot,'infera-example/Cargo.toml'),'utf8'),/name="fixture"/);
    }
    process.env.FAIBER_SERVICES_ROOT=repo;
    assert.equal(serviceSources(sdk,join(root,'services'),{lockPath:lock}),repo);
    const immutable=serviceSources(sdk,join(root,'services'),{lockPath:lock,ignoreWorkingOverride:true});
    assert.equal(readFileSync(join(immutable,'infera-example/src/lib.rs'),'utf8'),pinned);
    const platform=join(root,'platform-snapshot');
    archiveSourceRevision(repo,revision,platform);
    assert.equal(readFileSync(join(platform,'src/lib.rs'),'utf8'),pinned);
    assert.equal(readFileSync(join(repo,'src/lib.rs'),'utf8'),'unrelated local changes\n');
  }finally{rmSync(root,{recursive:true,force:true});if(previous!==undefined)process.env.FAIBER_SERVICES_ROOT=previous;else delete process.env.FAIBER_SERVICES_ROOT;}
});
