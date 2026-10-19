import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync, symlinkSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { embeddedSourceEvidence } from '../scripts/embedded-source-evidence.mjs';

test('embedded runtime scripts change source evidence independently of the Rust wrapper',()=>{
  const root=mkdtempSync(join(tmpdir(),'infera-embedded-'));
  try {
    mkdirSync(join(root,'src'));
    const source={path:join(root,'src/lib.rs'),text:'const SCRIPT: &str = include_str!("publisher.js"); // include_str!("not-real");\n#[cfg(test)] mod tests { const X: &str = include_str!("test-only"); }'};
    writeFileSync(join(root,'src/publisher.js'),'publishAndVerify();');
    const first=embeddedSourceEvidence(root,[source]);assert.equal(first.gaps.length,0);assert.equal(first.assets.length,1);
    writeFileSync(join(root,'src/publisher.js'),'returnUnverifiedSuccess();');
    const second=embeddedSourceEvidence(root,[source]);assert.notEqual(first.assets[0].checksum,second.assets[0].checksum);
  } finally {rmSync(root,{recursive:true,force:true});}
});

test('missing, dynamic and escaping compiler inputs remain explicit gaps',()=>{
  const root=mkdtempSync(join(tmpdir(),'infera-embedded-'));
  const outside=mkdtempSync(join(tmpdir(),'infera-embedded-outside-'));
  try {
    writeFileSync(join(outside,'private.txt'),'must not enter evidence');symlinkSync(join(outside,'private.txt'),join(root,'escape.txt'));
    const source={path:join(root,'lib.rs'),text:'include_str!("missing"); include_bytes!(concat!(env!("OUT_DIR"),"/generated")); include_str!("escape.txt");'};
    const result=embeddedSourceEvidence(root,[source]);assert.equal(result.assets.length,0);assert.equal(result.gaps.length,3);assert.ok(result.gaps.some(g=>g.reason.includes('escapes')));
  }finally {rmSync(root,{recursive:true,force:true});rmSync(outside,{recursive:true,force:true});}
});

test('included Rust inputs recursively retain their embedded runtime data',()=>{
 const root=mkdtempSync(join(tmpdir(),'infera-included-rust-'));
 try {
  writeFileSync(join(root,'generated.rs'),'const SCRIPT:&str=include_str!("runtime.js");');
  writeFileSync(join(root,'runtime.js'),'verifyReceipt();');
  const result=embeddedSourceEvidence(root,[{path:join(root,'lib.rs'),text:'include!("generated.rs");'}]);
  assert.deepEqual(result.assets.map(x=>x.path),['generated.rs','runtime.js']);assert.deepEqual(result.gaps,[]);
 } finally {rmSync(root,{recursive:true,force:true});}
});
