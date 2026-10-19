#!/usr/bin/env python3
"""Technical SDK verification against one isolated source state; never publishes."""
from pathlib import Path
import hashlib,json,os,re,subprocess,tarfile,time
SDK=Path(__file__).resolve().parents[1]
OUT=Path(os.environ['INFERA_SDK_VERIFICATION_OUTPUT']).resolve()

def digest(data):return hashlib.sha256(data).hexdigest()
def snapshot(compiled=False):
 files={}
 for folder in ['packages','scripts','tests','node_modules']:
  for path in (SDK/folder).rglob('*'):
   relative=path.relative_to(SDK)
   if not path.is_file() or path.is_symlink() or '__pycache__' in relative.parts:continue
   if not compiled and folder=='packages' and 'dist' in relative.parts:continue
   if path.suffix=='.tsbuildinfo':continue
   files[str(relative)]=digest(path.read_bytes())
 for name in ['README.md','CHANGELOG.md','package.json','package-lock.json','service-contracts.json','tsconfig.json','tsconfig.base.json','.gitattributes']:
  path=SDK/name
  if path.exists():files[name]=digest(path.read_bytes())
 encoded=json.dumps(files,sort_keys=True,separators=(',',':')).encode()
 return {'sha256':digest(encoded),'files':files}
def main():
 OUT.mkdir(parents=True,exist_ok=False);commands=[];started=time.monotonic();failure=None;before=None;compiled=None;packages=[]
 def run(identifier,args,cwd=SDK):
  path=OUT/(identifier+'.log');begin=time.monotonic()
  with path.open('w') as stream:r=subprocess.run(args,cwd=cwd,stdout=stream,stderr=subprocess.STDOUT)
  log=path.read_bytes();commands.append({'id':identifier,'command':args,'cwd':str(cwd),'exit_code':r.returncode,'duration_seconds':round(time.monotonic()-begin,3),'artifact':str(path),'sha256':digest(log)})
  print(identifier,r.returncode,flush=True)
  if r.returncode:raise RuntimeError(identifier+' failed; retained log')
  return log.decode()
 try:
  run('install',['npm','ci','--ignore-scripts','--prefer-offline'])
  before=snapshot()
  run('build',['npm','run','build']);compiled=snapshot(True)
  run('types-and-tests',['npm','test'])
  audit=run('audit',['npm','audit','--json']);assert json.loads(audit)['metadata']['vulnerabilities']['total']==0
  run('pack-dry-run',['npm','run','pack:check'])
  run('source-whitespace',['git','diff','--check','b11672d'])
  if os.environ.get('INFERA_AUTHORITY_AGENTIC_REPO'):
   run('actual-manage-sdk-wire',['python3','scripts/run-manage-authority-tests.py'])
  packs=OUT/'tarballs';packs.mkdir();version=json.loads((SDK/'package.json').read_text())['version']
  credential_patterns=[rb'-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----',rb'ghp_[A-Za-z0-9]{36}',rb'github_pat_[A-Za-z0-9_]{50,}',rb'AKIA[0-9A-Z]{16}']
  for package in sorted((SDK/'packages').iterdir()):
   manifest=json.loads((package/'package.json').read_text());assert not manifest.get('private')
   text=run('pack-'+package.name,['npm','pack','--json','--ignore-scripts','--pack-destination',str(packs),'./packages/'+package.name]);packed=json.loads(text)[0];archive=packs/packed['filename']
   with tarfile.open(archive,'r:gz') as tar:
    members=tar.getmembers();files={m.name:tar.extractfile(m).read() for m in members if m.isfile()}
    assert all(not m.issym() and not m.islnk() and '..' not in Path(m.name).parts and not m.name.startswith('/') for m in members),'Unsafe tar member'
    meta=json.loads(files['package/package.json']);assert meta['name']==manifest['name'] and meta['version']==version
    for name,data in files.items():
     assert name in ['package/package.json','package/README.md'] or name.startswith('package/dist/'),'Unwanted file: '+name
     assert not any(re.search(pattern,data) for pattern in credential_patterns),'Credential pattern in '+name
    def check_exports(value):
     if isinstance(value,str) and value.startswith('./'):assert 'package/'+value[2:] in files,'Missing export '+value
     elif isinstance(value,dict):
      for item in value.values():check_exports(item)
    check_exports(meta['exports'])
    for required in ['package/README.md','package/dist/index.js','package/dist/index.d.ts','package/dist/index.js.map']:assert required in files,'Missing '+required
    for name,dep_version in meta.get('dependencies',{}).items():
     if name.startswith('@faiber/'):assert dep_version==version,'Internal version mismatch'
   packages.append({'name':meta['name'],'version':version,'archive':str(archive),'sha256':digest(archive.read_bytes()),'npm_shasum':packed['shasum'],'npm_integrity':packed['integrity'],'files':{name:digest(data) for name,data in sorted(files.items())}})
  assert len(packages)==22,'Expected22 public workspaces'
  consumer=OUT/'consumer';consumer.mkdir();(consumer/'package.json').write_text(json.dumps({'name':'infera-private-sdk-verification','private':True,'type':'module','dependencies':{p['name']:'file:'+p['archive'] for p in packages}},indent=2)+'\n')
  run('tarball-consumer-install',['npm','install','--ignore-scripts','--prefer-offline'],consumer)
  (consumer/'exports.mjs').write_text('''import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const manifest=JSON.parse(readFileSync(new URL('./package.json',import.meta.url)));
for(const name of Object.keys(manifest.dependencies)) await import(name);
const {FaiberSDK}=await import('@faiber/faiber-ts-sdk');
const sdk=new FaiberSDK({domains:{manage:'https://manage.example.test'}});
for(const method of [sdk.chat.personal.events,sdk.lms.notificationSettings.list,sdk.lms.eligibleContacts.list,sdk.messenger.delivery.events,sdk.task.feedback.submit,sdk.profile.summaries.latest,sdk.manage.listAgentThreadsPage]) assert.equal(typeof method,'function');
assert.equal(typeof sdk.lms.latestAiSummary,'undefined');
console.log('All22 actual tarball exports import; published helpers and new Profile/Manage APIs exist; retired LMS summary convenience absent. No network request.');
''')
  run('tarball-consumer-exports',['node','exports.mjs'],consumer)
  import shutil
  for name in ['type-consumer.ts','release-type-consumer.ts','lms-classroom-counts.types.ts','transport-options.types.ts']:shutil.copyfile(SDK/'tests'/name,consumer/name)
  (consumer/'tsconfig.json').write_text(json.dumps({'compilerOptions':{'target':'ES2022','module':'NodeNext','moduleResolution':'NodeNext','strict':True,'exactOptionalPropertyTypes':True,'noEmit':True,'lib':['ES2022','DOM'],'skipLibCheck':False},'include':['*.ts']},indent=2)+'\n')
  run('tarball-consumer-types',['node',str(SDK/'node_modules/typescript/bin/tsc'),'-p','tsconfig.json','--pretty','false'],consumer)
 except Exception as error:failure=str(error)
 after=snapshot();compiled_after=snapshot(True) if compiled else None
 same=before==after and compiled==compiled_after
 report={'schema_version':'1.0','status':'passed' if not failure and same else 'failed','failure':failure,'source_revision':subprocess.check_output(['git','rev-parse','HEAD'],cwd=SDK,text=True).strip(),'working_status':subprocess.check_output(['git','status','--porcelain'],cwd=SDK,text=True).strip(),'checkout':str(SDK),'duration_seconds':round(time.monotonic()-started,3),'source_unchanged_during_run':same,'inputs_before':before,'inputs_after':after,'compiled_before':compiled,'compiled_after':compiled_after,'packages':packages,'commands':commands,'runner_sha256':digest(Path(__file__).read_bytes()),'scope':'Private unpublished1.0.0 technical integration verification. Builds/types/tests/audit/actual tarballs/exports/consumer compilation and scoped Manage wire test do not certify every service capability, current deployed permissions, readable Manage workflows or live Summary provider/billing/browser acceptance. No publication, tag, deployment, instruction publication or memory migration. Credential scan covers listed high-confidence patterns and paths, not every possible secret.'}
 (OUT/'verification.json').write_text(json.dumps(report,indent=2)+'\n');(OUT/'PRIVATE-NOT-PUBLISHED.txt').write_text(report['scope']+'\n');print(json.dumps({k:report[k] for k in ['status','failure','source_unchanged_during_run','duration_seconds']},indent=2))
 if report['status']!='passed':raise SystemExit(1)
if __name__=='__main__':main()
