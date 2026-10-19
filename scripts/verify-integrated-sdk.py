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
 for name in ['README.md','CHANGELOG.md','package.json','package-lock.json','service-contracts.json','service-source-revisions.json','tsconfig.json','tsconfig.base.json','.gitattributes']:
  path=SDK/name
  if path.exists():files[name]=digest(path.read_bytes())
 encoded=json.dumps(files,sort_keys=True,separators=(',',':')).encode()
 return {'sha256':digest(encoded),'files':files}
def external_inputs():
 if os.environ.get('INFERA_SDK_SOURCE_HANDOFF'):
  manifest_path=Path(os.environ['INFERA_SDK_SOURCE_HANDOFF']).resolve();handoff=json.loads(manifest_path.read_text());files={};revisions={}
  def capture(path):
   path=Path(path).resolve();files[str(path)]=digest(path.read_bytes())
  capture(manifest_path)
  for repository in handoff['repositories']:
   source=Path(repository['candidate']).resolve()
   revision=subprocess.check_output(['git','rev-parse','HEAD'],cwd=source,text=True).strip()
   assert revision==repository['head'],'Handoff source revision changed: '+repository['repository']
   revisions[str(source)]=revision
   for key in ['bundle','patch','source_manifest']:
    capture(repository[key]);assert files[str(Path(repository[key]).resolve())]==repository[key+'_sha256'],'Handoff artifact mismatch: '+key
   declared=json.loads(Path(repository['source_manifest']).read_text())
   for name,checksum in declared.items():
    capture(source/name);assert files[str((source/name).resolve())]==checksum,'Handoff source bytes changed: '+name
  for entry in handoff['logs'].values():
   capture(entry['file']);assert files[str(Path(entry['file']).resolve())]==entry['sha256'],'Handoff log mismatch'
  if os.environ.get('INFERA_SDK_SOURCE_SUPPLEMENT'):
   supplement=Path(os.environ['INFERA_SDK_SOURCE_SUPPLEMENT']).resolve();capture(supplement)
   metadata=json.loads(supplement.read_text());assert metadata['previous_handoff_sha256']==digest(manifest_path.read_bytes())
   for path in supplement.parent.iterdir():
    if path.is_file():capture(path)
  if os.environ.get('INFERA_SDK_SOURCE_DOMAINS_HANDOFF'):
   domains_path=Path(os.environ['INFERA_SDK_SOURCE_DOMAINS_HANDOFF']).resolve();capture(domains_path)
   domains=json.loads(domains_path.read_text());checksum_path=domains_path.parent/'SHA256.json';capture(checksum_path)
   for name,checksum in json.loads(checksum_path.read_text()).items():
    artifact=(domains_path.parent/name).resolve();assert artifact.parent==domains_path.parent,'Invalid domain artifact path'
    capture(artifact);assert files[str(artifact)]==checksum,'Domain artifact changed: '+name
   for service,candidate in domains['candidates'].items():
    source=Path(candidate['worktree']).resolve();revision=subprocess.check_output(['git','rev-parse','HEAD'],cwd=source,text=True).strip();assert revision==candidate['commit'],'Domain candidate HEAD changed: '+service
    revisions[str(source)]=revision
    for name,checksum in json.loads((domains_path.parent/candidate['manifest']).read_text()).items():
     artifact=(source/name).resolve();assert artifact.is_relative_to(source),'Invalid domain source path'
     capture(artifact);assert files[str(artifact)]==checksum,'Domain source bytes changed: '+name
  for variable in ['INFERA_VERSION_SDK_TEST_REPO','INFERA_SOCIAL_SDK_TEST_REPO','INFERA_IDP_SDK_TEST_REPO','INFERA_MANAGE_IDP_TEST_REPO','INFERA_CONTROL_IDP_AUTH_REPO','INFERA_CHAT_SDK_TEST_REPO','INFERA_PROFILE_SUMMARY_TEST_REPO','INFERA_STATE_HEALTH_TEST_REPO','INFERA_CRM_FALLBACK_TEST_REPO','INFERA_RESERVATION_SDK_TEST_REPO','INFERA_SESSION_PEER_TEST_REPO']:
   if not os.environ.get(variable):continue
   source=Path(os.environ[variable]).resolve();revisions[str(source)]=subprocess.check_output(['git','rev-parse','HEAD'],cwd=source,text=True).strip()
   for name in subprocess.check_output(['git','ls-files'],cwd=source,text=True).splitlines():
    path=source/name
    if path.is_file():capture(path)
  encoded=json.dumps({'files':files,'revisions':revisions},sort_keys=True,separators=(',',':')).encode()
  return {'handoff':str(manifest_path),'handoff_sha256':digest(manifest_path.read_bytes()),'revisions':revisions,'files':files,'sha256':digest(encoded),'scope':'Exact immutable source-review handoff plus independent local auth/service candidates; local object resolution is not canonical remote availability or deployed acceptance.'}
 manifest_path=Path(os.environ['INFERA_SDK_ROLE_HANDOFF']).resolve()
 handoff=json.loads(manifest_path.read_text());files={}
 for repository in handoff['repositories']:
  root=Path(repository['repository'])
  for entry in repository['files']:
   name=entry['path']
   if '__pycache__' in Path(name).parts or name.endswith('.pyc') or name.endswith('.log'):continue
   if root.name=='faiber-ts-sdk' and name.startswith('contracts/service-capabilities/'):continue
   path=root/name;files[str(path)]=digest(path.read_bytes()) if path.exists() else None
 override=Path(handoff['cargo_override']['path']);files[str(override)]=digest(override.read_bytes())
 crm=Path(os.environ['INFERA_SDK_CRM_HANDOFF']).resolve()
 crm_manifest=json.loads((crm/'source-dependency-before.json').read_text())
 workspace=Path('/Users/mohammadralizadeh/Infera')
 for relative in crm_manifest:
  path=workspace/relative
  files[str(path)]=digest(path.read_bytes()) if path.exists() else None
 for manifest in [crm/'handoff.json',crm/'frozen-verification.json',crm/'source-dependency-before.json']:
  files[str(manifest)]=digest(manifest.read_bytes())
 for variable in ['INFERA_VERSION_SDK_TEST_REPO','INFERA_SOCIAL_SDK_TEST_REPO']:
  source=Path(os.environ[variable]).resolve()
  for name in subprocess.check_output(['git','ls-files'],cwd=source,text=True).splitlines():
   path=source/name
   if path.is_file():files[str(path)]=digest(path.read_bytes())
 return {'handoff':str(manifest_path),'handoff_sha256':digest(manifest_path.read_bytes()),'files':files,'sha256':digest(json.dumps(files,sort_keys=True,separators=(',',':')).encode()),'scope':'Current observed contribution files and Service Cargo overrides, independently fenced. Historical handoff logs are not automatically acceptance of changed files or unexecuted workflows.'}

def main():
 OUT.mkdir(parents=True,exist_ok=False);commands=[];started=time.monotonic();failure=None;before=None;compiled=None;external_before=None;packages=[]
 def run(identifier,args,cwd=SDK):
  path=OUT/(identifier+'.log');begin=time.monotonic()
  with path.open('w') as stream:r=subprocess.run(args,cwd=cwd,stdout=stream,stderr=subprocess.STDOUT,timeout=600)
  log=path.read_bytes();commands.append({'id':identifier,'command':args,'cwd':str(cwd),'exit_code':r.returncode,'duration_seconds':round(time.monotonic()-begin,3),'artifact':str(path),'sha256':digest(log)})
  print(identifier,r.returncode,flush=True)
  if r.returncode:raise RuntimeError(identifier+' failed; retained log')
  return log.decode()
 try:
  run('install',['npm','ci','--ignore-scripts','--prefer-offline'])
  before=snapshot();external_before=external_inputs()
  run('build',['npm','run','build']);compiled=snapshot(True)
  run('types-and-tests',['npm','test'])
  run('extracted-contracts',['npm','run','contracts:audit'])
  run('pack-dry-run',['npm','run','pack:check'])
  run('source-whitespace',['git','diff','--check','b11672d'])
  run('actual-version-sdk-wire',['python3','scripts/run-version-sdk-wire-tests.py'])
  run('actual-social-sdk-wire',['python3','scripts/run-social-admin-sdk-tests.py'])
  if os.environ.get('INFERA_IDP_SDK_TEST_REPO') and os.environ.get('INFERA_MANAGE_IDP_TEST_REPO'):
   run('actual-idp-manage-sdk-wire',['python3','scripts/run-idp-sdk-router-tests.py'])
  if os.environ.get('INFERA_CHAT_SDK_TEST_REPO'):
   run('actual-chat-personal-sdk-wire',['python3','scripts/run-chat-personal-sdk-tests.py'])
  if os.environ.get('INFERA_PROFILE_SUMMARY_TEST_REPO'):
   run('actual-profile-summary-sdk-wire',['python3','scripts/run-profile-summary-sdk-tests.py'])
  if os.environ.get('INFERA_STATE_HEALTH_TEST_REPO'):
   run('actual-state-health-sdk-wire',['python3','scripts/run-state-health-sdk-tests.py'])
  if os.environ.get('INFERA_CRM_FALLBACK_TEST_REPO'):
   run('actual-crm-fallback-sdk-wire',['python3','scripts/run-crm-fallback-sdk-tests.py'])
  if os.environ.get('INFERA_RESERVATION_SDK_TEST_REPO'):
   run('actual-reservation-sdk-wire',['env','INFERA_RESERVATION_SDK_TEST_KIND=suite','INFERA_RESERVATION_SDK_VERIFICATION_OUTPUT='+str(OUT/'reservation-sdk-evidence'),'python3','scripts/run-reservation-sdk-wire-tests.py'])
  if os.environ.get('INFERA_SESSION_PEER_TEST_REPO'):
   run('actual-session-chat-peer-sdk-wire',['env','INFERA_SESSION_PEER_VERIFICATION_OUTPUT='+str(OUT/'session-chat-peer-evidence'),'python3','scripts/run-session-chat-peer-sdk-tests.py'])
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
const {FaiberSDK,domainsFromManageProxy}=await import('@faiber/faiber-ts-sdk');
const sdk=new FaiberSDK({domains:domainsFromManageProxy('https://manage.example.test')});
for(const method of [sdk.chat.personal.events,sdk.lms.notificationSettings.list,sdk.lms.eligibleContacts.list,sdk.messenger.delivery.events,sdk.task.feedback.submit,sdk.profile.summaries.latest,sdk.manage.listAgentThreadsPage,sdk.social.operations.adminOverviewGet,sdk.social.operations.discoveryFeedGet,sdk.version.operations.routerStatusRouteGet]) assert.equal(typeof method,'function');
assert.equal(typeof sdk.lms.latestAiSummary,'undefined');
console.log('All22 actual tarball exports import; published helpers and new Profile/Manage APIs exist; retired LMS summary convenience absent. No network request.');
''')
  run('tarball-consumer-exports',['node','exports.mjs'],consumer)
  import shutil
  for name in ['type-consumer.ts','release-type-consumer.ts','lms-classroom-counts.types.ts','transport-options.types.ts','version-wire.types.ts','social-admin-wire.types.ts','router-wire.types.ts','reservation-capacity.types.ts']:shutil.copyfile(SDK/'tests'/name,consumer/name)
  (consumer/'tsconfig.json').write_text(json.dumps({'compilerOptions':{'target':'ES2022','module':'NodeNext','moduleResolution':'NodeNext','strict':True,'exactOptionalPropertyTypes':True,'noEmit':True,'lib':['ES2022','DOM'],'skipLibCheck':False},'include':['*.ts']},indent=2)+'\n')
  run('tarball-consumer-types',['node',str(SDK/'node_modules/typescript/bin/tsc'),'-p','tsconfig.json','--pretty','false'],consumer)
  # Keep registry availability from suppressing independent local runtime evidence.
  # It remains mandatory: a timeout or nonzero vulnerability count fails this run.
  audit=run('audit',['npm','audit','--json','--fetch-timeout=30000','--fetch-retries=1']);assert json.loads(audit)['metadata']['vulnerabilities']['total']==0
 except Exception as error:failure=str(error)
 after=snapshot();compiled_after=snapshot(True) if compiled else None;external_after=external_inputs()
 same=before==after and compiled==compiled_after and external_before==external_after
 report={'schema_version':'1.0','status':'passed' if not failure and same else 'failed','failure':failure,'source_revision':subprocess.check_output(['git','rev-parse','HEAD'],cwd=SDK,text=True).strip(),'working_status':subprocess.check_output(['git','status','--porcelain'],cwd=SDK,text=True).strip(),'checkout':str(SDK),'duration_seconds':round(time.monotonic()-started,3),'source_unchanged_during_run':same,'inputs_before':before,'inputs_after':after,'compiled_before':compiled,'compiled_after':compiled_after,'external_inputs_before':external_before,'external_inputs_after':external_after,'packages':packages,'commands':commands,'runner_sha256':digest(Path(__file__).read_bytes()),'scope':'Private unpublished1.0.0 technical integration verification. Builds/types/tests/audit/actual tarballs/exports/consumer compilation and scoped Manage wire test do not certify every service capability, current deployed permissions, readable Manage workflows or live Summary provider/billing/browser acceptance. No publication, tag, deployment, instruction publication or memory migration. Credential scan covers listed high-confidence patterns and paths, not every possible secret.'}
 (OUT/'verification.json').write_text(json.dumps(report,indent=2)+'\n');(OUT/'PRIVATE-NOT-PUBLISHED.txt').write_text(report['scope']+'\n');print(json.dumps({k:report[k] for k in ['status','failure','source_unchanged_during_run','duration_seconds']},indent=2))
 if report['status']!='passed':raise SystemExit(1)
if __name__=='__main__':main()
